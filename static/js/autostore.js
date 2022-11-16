var input = document.getElementById('articleLink');

function get_store(link) {
    if (link.includes('hm.com')) {
        store = 'H&M'
    } else if (link.includes('zara.com')) {
        store = 'Zara'
    } else if (link.includes('bershka.com')) {
        store = 'Bershka'
    } else if (link.includes('pullandbear.com')) {
        store = 'Pull&Bear'
    } else if (link.includes('stradivarius.com')) {
        store = 'Stradivarius'
    } else if (link.includes('weekday.com')) {
        store = 'Weekday'
    } else if (link.includes('hollisterco.com')) {
        store = 'Hollister (+ Social Tourist)'
    } else if (link.includes('Guess.com')) {
        store = 'Guess'
    } else if (link.includes('reserved.com')) {
        store = 'Reserved'
    } else if (link.includes('mango.com')) {
        store = 'Mango'
    } else if (link.includes('c-and-a.com.com')) {
        store = 'C&A'
    } else if (link.includes('newyorker.de')) {
        store = 'New Yorker'
    } else if (link.includes('/aerie/')) {
        store = 'Aerie'
    } else if (link.includes('ae.com')) {
        store = 'American Eagle'
    } else if (link.includes('vrggrl.com')) {
        store = 'VRG GRL'
    } else if (link.includes('abercrombie.com')) {
        store = 'Abercrombie & Fitch'
    } else if (link.includes('express.com')) {
        store = 'Express'
    } else if (link.includes('everlane.com')) {
        store = 'Everlane'
    } else if (link.includes('aboutyou')) {
        store = 'About You'
    } else {
        store = 'Unknown'
    }
    return store
}

input.addEventListener('keyup', function() {
    var link = input.value;
    store = get_store(link);
    
    if (store != 'Unknown') {
        document.getElementById('link-store-select').value = store;
        document.getElementById('link-confirm-btn').disabled = false
    }
});