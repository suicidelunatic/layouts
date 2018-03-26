$(document).ready(function() {
   $('.design-gallery .item').hover(function() {
       $(this).find('.hover-block').fadeToggle(400).find('a').css({'display':'flex'});
   });
});