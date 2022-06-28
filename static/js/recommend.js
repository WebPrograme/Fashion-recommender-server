function shrink(index) {
    for (var i = 1; i <= 10; i++) {
        if (i != index) {
            var elements = document.querySelectorAll('.recommended-small-results-' + i);
            var arrow = document.getElementById('recommended_small_results_' + i +'_arrow')
            
            if (arrow != null && arrow.classList.contains('dummy-class')) {
                arrow.classList.toggle('accordion-header-arrow-flip');
                arrow.classList.remove('dummy-class');
            }

            for (var j = 0; j < elements.length; j++) {
                elements[j].style.display = 'none';
            }
        }
    }
}

function recommend(event, index) {
    event.preventDefault()
    if (document.querySelectorAll('.recommended-results-' + index)[0].style.display == 'flex') {            
        var elements = document.querySelectorAll('.recommended-results-' + index);
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.display = 'none';
        }
        document.getElementById('recommended_results_' + index +'_arrow').classList.toggle('accordion-header-arrow-flip');
    } else {
        document.getElementById('recommended_results_' + index +'_arrow').classList.toggle('accordion-header-arrow-flip');
        var request = new XMLHttpRequest();
        request.open("GET", "/recommend?id=" + UserID + '&number=' + document.getElementById('recommendBtn' + index).value, true);
        request.send();
        request.onreadystatechange = function () {
            data = JSON.parse(request.response)['result'];

            var elements = document.querySelectorAll('.recommended-results-' + index);
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.display = 'flex';
            }

            document.getElementById('recommended_result_' + index + '_img_1').src = data['img'][0];
            document.getElementById('recommended_result_' + index + '_img_2').src = data['img'][1];
            document.getElementById('recommended_result_' + index + '_img_3').src = data['img'][2];
            document.getElementById('recommended_result_' + index + '_img_4').src = data['img'][3];
            
            document.getElementById('recommended_result_' + index + '_link_1').href = data['link'][0];
            document.getElementById('recommended_result_' + index + '_link_2').href = data['link'][1];
            document.getElementById('recommended_result_' + index + '_link_3').href = data['link'][2];
            document.getElementById('recommended_result_' + index + '_link_4').href = data['link'][3];
        }
    }
}

function recommendSmall(event, index) {
    event.preventDefault()
    if (document.querySelectorAll('.recommended-small-results-' + index)[0].style.display == 'flex') {
        var elements = document.querySelectorAll('.recommended-small-results-' + index);
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.display = 'none';
        }
        document.getElementById('recommended_small_results_' + index +'_arrow').classList.toggle('accordion-header-arrow-flip');
        document.getElementById('recommended_small_results_' + index +'_arrow').classList.remove('dummy-class');
    } else {
        shrink(index);
        document.getElementById('recommended_small_results_' + index +'_arrow').classList.toggle('accordion-header-arrow-flip');
        document.getElementById('recommended_small_results_' + index +'_arrow').classList.add('dummy-class');
        var request = new XMLHttpRequest();
        request.open("GET", "/recommend?id=" + UserID + '&number=' + document.getElementById('recommendBtn' + index).value, true);
        request.send();
        request.onreadystatechange = function () {
            data = JSON.parse(request.response)['result'];

            var elements = document.querySelectorAll('.recommended-small-results-' + index);
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.display = 'flex';
            }

            document.getElementById('recommended_small_result_' + index + '_img_1').src = data['img'][0];
            document.getElementById('recommended_small_result_' + index + '_img_2').src = data['img'][1];
            document.getElementById('recommended_small_result_' + index + '_img_3').src = data['img'][2];
            document.getElementById('recommended_small_result_' + index + '_img_4').src = data['img'][3];
            
            document.getElementById('recommended_small_result_' + index + '_link_1').href = data['link'][0];
            document.getElementById('recommended_small_result_' + index + '_link_2').href = data['link'][1];
            document.getElementById('recommended_small_result_' + index + '_link_3').href = data['link'][2];
            document.getElementById('recommended_small_result_' + index + '_link_4').href = data['link'][3];
            
            var dummy = document.querySelector('.recommended-small-results-' + index).children[0]
            dummy.style.display = 'none';
        }
    }
}