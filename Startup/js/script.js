$(document).ready(function () {
    $('.carousel-item').find('.member').hover(function () {
        $(this).find('.member-info').fadeToggle(400).css({
            'display': 'flex'
        })
    });
    $('.works').find('.gallery').find('.item').hover(function() {
        $(this).find('.hover-bl').fadeToggle(400).css({'display' : 'flex'})
    })
});