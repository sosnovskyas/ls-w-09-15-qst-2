$(document).ready(function() {
  $('.filter__header').click(function() {
    $('.filter ul .filter__content').slideUp();
    if (!$(this).next().is(':visible')) {
      $(this).next().slideDown();
    }
  });
});
