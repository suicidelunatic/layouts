function seeGalleryImg(item) {
    var item = item,
        block = document.getElementById('view-img'),
        img = new Image(),
        blockBg = document.getElementById('black-bg-gallery');
    img.src = 'images/img' + item + '.png';
    block.appendChild(img);
    block.classList.add('view-class');
    blockBg.style.display = 'block';

}

function unseeGalleryImg() {
    var blockBg = document.getElementById('black-bg-gallery'),
        block = document.getElementById('view-img');
    blockBg.style.display = 'none';
    block.innerHTML = '';
    block.classList.remove('view-class');
}