$(document).ready(function () {
  var navPhoneBtn = $('#nav-phone-btn');
  var priceLink = $('.card__price');
  var closeBtn = $('#close-btn');
  var modal = $('#default-modal');

  // Скрипт для вызова модального окна кнопкой в шапке
  navPhoneBtn.on('click', function () {
    modal.addClass('modal_active');
  });

  priceLink.on('click', function () {
    modal.addClass('modal_active');
  });

  closeBtn.on('click', function () {
    modal.removeClass('modal_active');
  });

}); 