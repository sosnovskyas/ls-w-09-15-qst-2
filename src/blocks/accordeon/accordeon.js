$(document).ready(function() {
  $('.accordeon__header').click(function() {
    $('.accordeon ul .accordeon__content').slideUp();
    if (!$(this).next().is(':visible')) {
      $(this).next().slideDown();
    }
  });
});
