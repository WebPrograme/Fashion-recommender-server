var UserID = localStorage.getItem('UserID');
var wishList = localStorage.getItem('wishList')
wishList = JSON.parse(wishList)
var wishItems = document.querySelector('.wish-items')
document.getElementById('wish-id').value = UserID;


if (wishList == null || wishList.length == 0) {
    document.querySelector('.wish-empty').style.display = 'block';
    document.querySelector('.wish-scroll-shadow-top').style.display = 'none';
    document.querySelector('.wish-scroll-shadow-bottom').style.display = 'none';
} else {
    var data = wishList
    for (var i = 0; i < data.length; i++) {
        var item = document.createElement('div');
        var img = data[i][3].replace("//", '/');
        item.classList.add('grid-margin', 'col-md-6', 'col-xl-6', 'wish-item-card');
        item.title = 'Click to use this image';
        item.innerHTML = `
        <div class="card">
            <div class="card-body">
                <img src="static/` + data[i][3] + `" alt="No image is available" class="forselected-img wish-card-img"">
                <div class="wish-card-info">
                    <h4 class="card-title wish-card-number">` + data[i][1] + `</h4>
                    <h4 class="card-title text-muted wish-card-store">` + data[i][0] + `</h3>
                    
                    <a ` + data[i][2] + ` class="btn btn-lg upload-btn btn-block btn-primary btn-fw battle__card__submit__btn wish-card-btn-checkout" target="_blank">Check out</a>
                    <button class="btn btn-lg upload-btn btn-block btn-secondary btn-fw battle__card__submit__btn" onclick="removeWish(event, this.value)" value=` + i + ` title="Click to remove this item">Remove</button>
                </div>
            </div>
        </div>
        `;
        
        wishItems.appendChild(item);
    }

    if (wishList.length < 3) {
        document.querySelector('.wish-scroll-shadow-top').style.display = 'none';
        document.querySelector('.wish-scroll-shadow-bottom').style.display = 'none';
    } else {
        document.querySelector('.wish-empty').style.display = 'none';
        document.querySelectorAll('.wish-modal .modal-body').forEach(anchor => {
            anchor.addEventListener('scroll', function(e){
                var modal_scrollTop = $('.wish-modal .modal-body')[0].scrollTop;
                var modal_scrollHeight = $('.wish-modal .modal-body')[0].scrollHeight;        
                var modal_innerHeight = $('.wish-modal .modal-body')[0].offsetHeight;        

                if (modal_scrollTop + modal_innerHeight >= modal_scrollHeight) {
                    document.querySelector('.wish-scroll-shadow-bottom').style.display = 'none';
                } else if (modal_scrollTop + modal_innerHeight < modal_scrollHeight) {
                    document.querySelector('.wish-scroll-shadow-bottom').style.display = 'block';
                }
                
                if (modal_scrollTop == 0) {
                    document.querySelector('.wish-scroll-shadow-top').style.display = 'none';
                } else if (modal_scrollTop > 0) {
                    document.querySelector('.wish-scroll-shadow-top').style.display = 'block';
                }
            })
        })
    }

    function removeWish(event, index) {
        event.preventDefault()
        var wishList = localStorage.getItem('wishList')
        wishList = JSON.parse(wishList)
        wishList.splice(index, 1)
        localStorage.setItem('wishList', JSON.stringify(wishList))
        var wishItems = document.querySelector('.wish-items').children;
        wishItems[index].remove()

        var wishItems = document.querySelector('.wish-items').children;
        if (wishItems.length == 0) {
            document.querySelector('.wish-empty').style.display = 'block';
        } else {
            for (var i = 0; i < wishItems.length; i++) {
                wishItems[i].children[0].children[0].children[1].children[3].value = i;
            }

            if (wishItems.length < 3) {
                document.querySelector('.wish-scroll-shadow-top').style.display = 'none';
                document.querySelector('.wish-scroll-shadow-bottom').style.display = 'none';
            }
        }
    }
}