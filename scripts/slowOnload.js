$(document.onload).ready(function(){

  $(".top-menu").fadeIn(500);

  var bodyText = $('.body-text-item');
  bodyText.each(function(e, v) {
    $('.body-text-item').eq(e).slideDown(600 * e);
  });
});
