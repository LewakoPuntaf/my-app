$(document.onload).ready(function() {

  $(".top-menu").fadeIn(500);

  var bodyText = $('.body-text-item');

  setTimeout(function() {
    bodyText.each(function(e, v) {
      $('.body-text-item').eq(e).slideDown(1000 * e, easing = 'easeInOutQuart');
    });
  }, 1000);

  setTimeout(function() {
    $(".start-block").fadeIn(500);
  }, 3000);

});
