function toogleMenu() {
    var x = document.getElementById('top-nav');
    if (x.className === 'nav') {
        x.className += ' responsive';
    } else {
        x.className = 'nav';
    }
}