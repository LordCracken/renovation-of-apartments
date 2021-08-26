$(document).ready(function () {
  var body = $("body");
  var navPhoneBtn = $("#nav-phone-btn");
  var priceLink = $(".card__price");
  var closeBtn = $("#close-btn");
  var modal = $("#default-modal");

  // Скрипт для вызова модального окна кнопкой в шапке
  navPhoneBtn.on("click", function () {
    modal.addClass("modal_active");
    body.addClass("opened-modal");
  });

  priceLink.on("click", function () {
    modal.addClass("modal_active");
    body.addClass("opened-modal");
  });

  closeBtn.on("click", function () {
    modal.removeClass("modal_active");
    body.removeClass("opened-modal");
  });

  modal.on("click", function (e) {
    if (e.target.id === "default-modal") {
      modal.removeClass("modal_active");
      body.removeClass("opened-modal");
    }
  });
});
