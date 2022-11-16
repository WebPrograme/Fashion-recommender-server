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
            count = 0;

            if (data == 'No results found') {
                document.getElementById('recommended_result_' + index + '_link_1').style.display = 'none';
                document.getElementById('recommended_result_' + index + '_link_2').style.display = 'none';
                document.getElementById('recommended_result_' + index + '_link_3').style.display = 'none';
                document.getElementById('recommended_result_' + index + '_link_4').style.display = 'none';
                return;
            }

            var elements = document.querySelectorAll('.recommended-results-' + index);
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.display = 'flex';
            }

            for (var i = 0; i < data['img'].length; i++) {
                document.getElementById('recommended_result_' + index + '_link_' + (i + 1)).href = data['link'][i];
                document.getElementById('recommended_result_' + index + '_link_' + (i + 1)).style.display = 'block';

                document.getElementById('recommended_result_' + index + '_img_' + (i + 1)).src = data['img'][i];
                count++;
            }

            for (var i = count; i < 4; i++) {
                document.getElementById('recommended_result_' + index + '_link_' + (i + 1)).style.display = 'none';
                document.getElementById('recommended_result_' + index + '_img_' + (i + 1)).src = '';
            }

            if (count == 1) {
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.justifyContent  = 'center';
                }
                document.getElementById('recommended_result_' + index + '_img_1').style.borderRadius = '4px';
            } else if (count == 2) {
                document.getElementById('recommended_result_' + index + '_img_1').style.borderTopLeftRadius = '4px';
                document.getElementById('recommended_result_' + index + '_img_1').style.borderBottomLeftRadius = '4px';
                document.getElementById('recommended_result_' + index + '_img_2').style.borderTopRightRadius = '4px';
                document.getElementById('recommended_result_' + index + '_img_2').style.borderBottomRightRadius = '4px';
            } else if (count == 3) {
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.justifyContent  = 'space-around';
                }        
                document.getElementById('recommended_result_' + index + '_img_3').style.borderBottomLeftRadius = '4px';
                document.getElementById('recommended_result_' + index + '_img_3').style.borderBottomRightRadius = '4px';
            }
            
            var dummy = document.querySelector('.recommended-results-' + index).children[0]
            dummy.style.display = 'none';
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
            count = 0;

            if (data == 'No results found') {
                document.getElementById('recommended_small_result_' + index + '_link_1').style.display = 'none';
                document.getElementById('recommended_small_result_' + index + '_link_2').style.display = 'none';
                document.getElementById('recommended_small_result_' + index + '_link_3').style.display = 'none';
                document.getElementById('recommended_small_result_' + index + '_link_4').style.display = 'none';      
                return;          
            }

            var elements = document.querySelectorAll('.recommended-small-results-' + index);
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.display = 'flex';
            }
            
            for (var i = 0; i < data['img'].length; i++) {
                document.getElementById('recommended_small_result_' + index + '_link_' + (i + 1)).href = data['link'][i];
                document.getElementById('recommended_small_result_' + index + '_link_' + (i + 1)).style.display = 'block';
                
                document.getElementById('recommended_small_result_' + index + '_img_' + (i + 1)).src = data['img'][i];
                count++;
            }

            for (var i = count; i < 4; i++) {
                document.getElementById('recommended_small_result_' + index + '_link_' + (i + 1)).style.display = 'none';
                document.getElementById('recommended_small_result_' + index + '_img_' + (i + 1)).src = '';
            }

            if (count == 1) {
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.justifyContent  = 'center';
                }
                document.getElementById('recommended_small_result_' + index + '_img_1').style.borderRadius = '4px';
            } else if (count == 2) {
                document.getElementById('recommended_small_result_' + index + '_img_1').style.borderTopLeftRadius = '4px';
                document.getElementById('recommended_small_result_' + index + '_img_1').style.borderBottomLeftRadius = '4px';
                document.getElementById('recommended_small_result_' + index + '_img_2').style.borderTopRightRadius = '4px';
                document.getElementById('recommended_small_result_' + index + '_img_2').style.borderBottomRightRadius = '4px';
            } else if (count == 3) {
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.justifyContent  = 'space-around';
                }        
                document.getElementById('recommended_small_result_' + index + '_img_3').style.borderBottomLeftRadius = '4px';
                document.getElementById('recommended_small_result_' + index + '_img_3').style.borderBottomRightRadius = '4px';
            }
            
            var dummy = document.querySelector('.recommended-small-results-' + index).children[0]
            dummy.style.display = 'none';
        }
    }
}