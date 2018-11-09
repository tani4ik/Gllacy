var button = document.querySelector(".button-contacts");
var popup = document.querySelector(".modal-contact-form");
var overlay = document.querySelector(".modal-overlay");
var close = document.querySelector(".modal-close");
var userName = popup.querySelector("#contact-form-name");
var userEmail = popup.querySelector("#contact-form-email");
var message = popup.querySelector("#contact-form-message");
var form = popup.querySelector("form");

button.addEventListener("click", function (evt) {
   evt.preventDefault();
   popup.classList.add("modal-show");
   overlay.classList.add("modal-overlay-show");
   userName.focus();
});

form.addEventListener("submit", function (evt) {
   if (!userName.value || !userEmail.value || !message.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
   }
});

close.addEventListener("click", function (evt) {
   evt.preventDefault();
   popup.classList.remove("modal-show");
   overlay.classList.remove("modal-overlay-show");
   popup.classList.remove("modal-error");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        overlay.classList.remove("modal-overlay-show");
        popup.classList.remove("modal-error");
      }
    }
  });
