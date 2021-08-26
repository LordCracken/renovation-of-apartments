// Инициализация WOW.js
new WOW().init();

// Загрузка карты при скролле
$(document).on("scroll", function () {
  $("#map").addClass("footer__map_active");
});

// Валидация форм
$(document).ready(function () {
  $("#brif-form").validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      phone: "required",
      email: {
        required: true,
        email: true,
      },
    },
    messages: {
      username: {
        required: "Заполните поле",
        minlength: jQuery.validator.format("Введите не меньше {0} символов"),
        maxlength: jQuery.validator.format("Введите не больше {0} символов"),
      },
      email: {
        required: "Заполните поле",
        email: "Введите корректный email",
      },
      phone: {
        required: "Заполните поле",
      },
    },
    submitHandler: function (form) {
      form.submit();
      $(".brif__input").val("");
    },
  });
  $("#offer-form").validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      phone: "required",
    },
    messages: {
      username: {
        required: "Заполните поле",
        minlength: jQuery.validator.format("Введите не меньше {0} символов"),
        maxlength: jQuery.validator.format("Введите не больше {0} символов"),
      },
      phone: {
        required: "Заполните поле",
      },
    },
    submitHandler: function (form) {
      form.submit();
      $(".offer__input").val("");
    },
  });
  $("#modal-form").validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      phone: "required",
    },
    messages: {
      username: {
        required: "Заполните поле",
        minlength: jQuery.validator.format("Введите не меньше {0} символов"),
        maxlength: jQuery.validator.format("Введите не больше {0} символов"),
      },
      phone: {
        required: "Заполните поле",
      },
    },
    submitHandler: function (form) {
      form.submit();
      $(".modal__input").val("");
    },
  });
  var phoneInputs = document.querySelectorAll("input.phone");
  phoneInputs.forEach((input) => {
    IMask(input, {
      mask: "+{7} (000) 000-00-00",
    });
  });
});
