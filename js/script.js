$(document).ready(function () {
  $('.services-card__title').click(function (event) {
    $(this).toggleClass('active').next().slideToggle(300);
  });
});
