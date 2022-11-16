function updateGender(){
    console.log('Gender updated')
    $('.loader-background').show();
    document.getElementById('gender-form').submit()
}

var sliderStatus = [false, false, false, false, false, false, false, false, false, false]

function resetSliders(index) {
    for (var i = 0; i < sliderStatus.length; i++) {
        if (i != index && sliderStatus[i] == true) {
            sliderStatus[i] = false
            if (i == 0) {
                document.getElementById('owl-carousel-basic').getElementsByClassName("picker-container")[0].style.display = "none";
                $('#owl-carousel-basic').trigger('prev.owl.carousel');
            } else {
                document.getElementById('owl-carousel-basic-' + (Number(i) + 1)).getElementsByClassName("picker-container")[0].style.display = "none";
                $('#owl-carousel-basic-' + (Number(i) + 1)).trigger('prev.owl.carousel');
            }
        }
    }
}

var sliderNext = function() {
    $('#owl-carousel-basic').trigger('prev.owl.carousel');
    document.getElementById('owl-carousel-basic').getElementsByClassName("picker-container")[0].style.display = "flex";
    sliderStatus[0] = true;
    resetSliders(0);
};
var sliderPrev = function() {
    $('#owl-carousel-basic').trigger('next.owl.carousel');
    document.getElementById('owl-carousel-basic').getElementsByClassName("picker-container")[0].style.display = "none";
    sliderStatus[0] = false;
};
var sliderNext2 = function() {
    $('#owl-carousel-basic-2').trigger('prev.owl.carousel');
    document.getElementById('owl-carousel-basic-2').getElementsByClassName("picker-container")[0].style.display = "flex";
    sliderStatus[1] = true;
    resetSliders(1);
};
var sliderPrev2 = function() {
    $('#owl-carousel-basic-2').trigger('next.owl.carousel');
    document.getElementById('owl-carousel-basic-2').getElementsByClassName("picker-container")[0].style.display = "none";
    sliderStatus[1] = false;
};
var sliderNext3 = function() {
    $('#owl-carousel-basic-3').trigger('prev.owl.carousel');
    document.getElementById('owl-carousel-basic-3').getElementsByClassName("picker-container")[0].style.display = "flex";
    sliderStatus[2] = true;
    resetSliders(2);
};
var sliderPrev3 = function() {
    $('#owl-carousel-basic-3').trigger('next.owl.carousel');
    document.getElementById('owl-carousel-basic-3').getElementsByClassName("picker-container")[0].style.display = "none";
    sliderStatus[2] = false;
};
var sliderNext4 = function() {
    $('#owl-carousel-basic-4').trigger('prev.owl.carousel');
    document.getElementById('owl-carousel-basic-4').getElementsByClassName("picker-container")[0].style.display = "flex";
    sliderStatus[3] = true;
    resetSliders(3);
};
var sliderPrev4 = function() {
    $('#owl-carousel-basic-4').trigger('next.owl.carousel');
    document.getElementById('owl-carousel-basic-4').getElementsByClassName("picker-container")[0].style.display = "none";
    sliderStatus[3] = false;
};
var sliderNext5 = function() {
    $('#owl-carousel-basic-5').trigger('prev.owl.carousel');
    document.getElementById('owl-carousel-basic-5').getElementsByClassName("picker-container")[0].style.display = "flex";
    sliderStatus[4] = true;
    resetSliders(4);
};
var sliderPrev5 = function() {
    $('#owl-carousel-basic-5').trigger('next.owl.carousel');
    document.getElementById('owl-carousel-basic-5').getElementsByClassName("picker-container")[0].style.display = "none";
    sliderStatus[4] = false;
};
var sliderNext6 = function() {
    $('#owl-carousel-basic-6').trigger('prev.owl.carousel');
    document.getElementById('owl-carousel-basic-6').getElementsByClassName("picker-container")[0].style.display = "flex";
    sliderStatus[5] = true;
    resetSliders(5);
};
var sliderPrev6 = function() {
    $('#owl-carousel-basic-6').trigger('next.owl.carousel');
    document.getElementById('owl-carousel-basic-6').getElementsByClassName("picker-container")[0].style.display = "none";
    sliderStatus[5] = false;
};
var sliderNext7 = function() {
    $('#owl-carousel-basic-7').trigger('prev.owl.carousel');
    document.getElementById('owl-carousel-basic-7').getElementsByClassName("picker-container")[0].style.display = "flex";
    sliderStatus[6] = true;
    resetSliders(6);
};
var sliderPrev7 = function() {
    $('#owl-carousel-basic-7').trigger('next.owl.carousel');
    document.getElementById('owl-carousel-basic-7').getElementsByClassName("picker-container")[0].style.display = "none";
    sliderStatus[6] = false;
};
var sliderNext8 = function() {
    $('#owl-carousel-basic-8').trigger('prev.owl.carousel');
    document.getElementById('owl-carousel-basic-8').getElementsByClassName("picker-container")[0].style.display = "flex";
    sliderStatus[7] = true;
    resetSliders(7);
};
var sliderPrev8 = function() {
    $('#owl-carousel-basic-8').trigger('next.owl.carousel');
    document.getElementById('owl-carousel-basic-8').getElementsByClassName("picker-container")[0].style.display = "none";
    sliderStatus[7] = false;
};
var sliderNext9 = function() {
    $('#owl-carousel-basic-9').trigger('prev.owl.carousel');
    document.getElementById('owl-carousel-basic-9').getElementsByClassName("picker-container")[0].style.display = "flex";
    sliderStatus[8] = true;
    resetSliders(8);
};
var sliderPrev9 = function() {
    $('#owl-carousel-basic-9').trigger('next.owl.carousel');
    document.getElementById('owl-carousel-basic-9').getElementsByClassName("picker-container")[0].style.display = "none";
    sliderStatus[8] = false;
};
var sliderNext10 = function() {
    $('#owl-carousel-basic-10').trigger('prev.owl.carousel');
    document.getElementById('owl-carousel-basic-10').getElementsByClassName("picker-container")[0].style.display = "flex";
    sliderStatus[9] = true;
    resetSliders(9);
};
var sliderPrev10 = function() {
    $('#owl-carousel-basic-10').trigger('next.owl.carousel');
    document.getElementById('owl-carousel-basic-10').getElementsByClassName("picker-container")[0].style.display = "none";
    sliderStatus[9] = false;
};

if (document.querySelector('.change_page_form')) {
    document.querySelector('.change_page_form').addEventListener('submit', function(e) {
        document.querySelector('.loader-background').style.display = 'block';
        document.querySelector('.loading-span-main').innerHTML = 'Processing...';
        $('.loader-background').show();
    });
}