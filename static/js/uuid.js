function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

function UserAgreed() {
    var key = 'UserAgreed',
        UserID = localStorage.getItem('UserID');
    if (!UserID) {
        UserID = uuidv4();
        localStorage.setItem('UserID', UserID);
    }
    var myElements = document.querySelectorAll('.useridInput')
    for (let i = 0; i < myElements.length; i++) {
        myElements[i].value = UserID;
    }
    
    if (document.querySelector('.alert-danger')) {
        document.querySelector('.alert-danger').style.display = 'none';
    }

    localStorage.setItem('UserAgreed', true)
    var request = new XMLHttpRequest();
    request.open("GET", "/full_reset" + UserID, true);
    request.send();
}

$(document).ready(function () {
    // Check if user saw the modal
    var key = 'UserAgreed',
        userChoice = localStorage.getItem('UserAgreed');
        UserID = localStorage.getItem('UserID');
    // Show the modal only if new user
    if (!userChoice) {
        $('#cookiesBackdrop').modal('show');
    } else {        
        var myElements = document.querySelectorAll('.useridInput')
        for (let i = 0; i < myElements.length; i++) {
            myElements[i].value = UserID;
        }
        var request = new XMLHttpRequest();
        request.open("GET", "/full_reset" + UserID, true);
        request.send();
    }
});