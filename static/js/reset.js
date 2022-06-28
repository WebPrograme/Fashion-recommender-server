UserID = localStorage.getItem('UserID');
Promise.all(Array.from(document.images).filter(img => !img.complete).map(img => new Promise(resolve => { img.onload = img.onerror = resolve; }))).then(() => {
    var request = new XMLHttpRequest();
    request.open("GET", "/reset" + UserID, true);
    request.send();
});