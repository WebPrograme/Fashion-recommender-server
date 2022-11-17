from tensorflow.keras.preprocessing import image
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import GlobalMaxPooling2D
from tensorflow.keras.applications.resnet50 import ResNet50, preprocess_input
from sklearn.neighbors import NearestNeighbors
from sklearn import metrics
import os

import pickle
import numpy as np
from numpy.linalg import norm

os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'


model = ResNet50(weights="imagenet", include_top=False,
                 input_shape=(224, 224, 3))
#model.trainable = True
model = Sequential([model, GlobalMaxPooling2D()]) # Faster but less accurate

pick_store = False
product_status = False

img_files_list = pickle.load(open(f"//img_data//img_filesWOMEN3.pkl", "rb"))
features_list = pickle.load(open(f"//img_data//image_features_embeddingWOMEN3.pkl", "rb"))

def process(gender, userID, pageNumber):
    global pick_store, product_status
    if gender == 'WOMEN':
        img_files_list = pickle.load(open(f"img_data\\img_filesWOMEN3.pkl", "rb"))
        features_list = pickle.load(open(f"img_data\\image_features_embeddingWOMEN3.pkl", "rb"))
    else:
        img_files_list = pickle.load(open(f"img_data\\img_filesMEN.pkl", "rb"))
        features_list = pickle.load(open(f"img_data\\image_features_embeddingMEN.pkl", "rb"))
    features = extract_img_features(f'uploads//{userID}.png', model)
    img_distence, img_indicess = recommendd(features, features_list)
    results = []
    count = 0
    
    for result in img_indicess[0][(pageNumber*10)-10:pageNumber*10]:
        results.append(img_files_list[result])
        
    return results

def extract_img_features(img_path, model):
    img = image.load_img(img_path, target_size=(224, 224))
    img_array = image.img_to_array(img)
    expand_img = np.expand_dims(img_array, axis=0)
    preprocessed_img = preprocess_input(expand_img)
    result_to_resnet = model.predict(preprocessed_img)
    flatten_result = result_to_resnet.flatten()
    # normalizing
    result_normlized = flatten_result / norm(flatten_result)
    return result_normlized

def recommendd(features, features_list):
    #neighbors = NearestNeighbors(n_neighbors=6, algorithm='brute', metric='euclidean')
    # neighbors.fit(features_list)

    neighbors = NearestNeighbors(n_neighbors=len(
        features_list), algorithm='brute', metric='euclidean')
    neighbors.fit(features_list)

    distence, indices = neighbors.kneighbors([features])
    print(distence[0][:10])
    return distence, indices