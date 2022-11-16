document.querySelectorAll('.ready2go-card').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        loading()
        document.getElementById('forselected-input').value = anchor.getAttribute('data-title')
        document.getElementById('forselected-form').submit()
    });
});

document.querySelectorAll('.modal-dialog-scrollable .modal-body').forEach(anchor => {
    anchor.addEventListener('scroll', function(e){
        var modal_scrollTop = $('.modal-dialog-scrollable .modal-body')[8].scrollTop;
        var modal_scrollHeight = $('.modal-dialog-scrollable .modal-body')[8].scrollHeight;        
        var modal_innerHeight = $('.modal-dialog-scrollable .modal-body')[8].offsetHeight;        

        if (modal_scrollTop + modal_innerHeight >= modal_scrollHeight) {
            document.querySelector('.scroll-shadow-bottom').style.display = 'none';
        } else if (modal_scrollTop + modal_innerHeight < modal_scrollHeight) {
            document.querySelector('.scroll-shadow-bottom').style.display = 'block';
        }
        
        if (modal_scrollTop == 0) {
            document.querySelector('.scroll-shadow-top').style.display = 'none';
        } else if (modal_scrollTop > 0) {
            document.querySelector('.scroll-shadow-top').style.display = 'block';
        }
    })
})