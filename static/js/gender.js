gender_status = false

function updateGender() {
    if (gender_status == false) {
        var myElements = document.querySelectorAll('.toggle')
        for (let i = 0; i < myElements.length; i++) {
            myElements[i].classList.add("toggle-checked");
        }
        var myElements = document.querySelectorAll('.light')
        for (let i = 0; i < myElements.length; i++) {
            myElements[i].classList.add("light-checked");
        }
        var myElements = document.querySelectorAll('.dark')
        for (let i = 0; i < myElements.length; i++) {
            myElements[i].classList.add("dark-checked");
        }
        var myElements = document.querySelectorAll('.gender-switch')
        for (let i = 0; i < myElements.length; i++) {
            myElements[i].checked = true
        }
        gender_status = true
    } else {
        var myElements = document.querySelectorAll('.toggle')
        for (let i = 0; i < myElements.length; i++) {
            myElements[i].classList.remove("toggle-checked");
        }
        var myElements = document.querySelectorAll('.light')
        for (let i = 0; i < myElements.length; i++) {
            myElements[i].classList.remove("light-checked");
        }
        var myElements = document.querySelectorAll('.dark')
        for (let i = 0; i < myElements.length; i++) {
            myElements[i].classList.remove("dark-checked");
        }
        var myElements = document.querySelectorAll('.gender-switch')
        for (let i = 0; i < myElements.length; i++) {
            myElements[i].checked = false
        }
        gender_status = false
    }
}