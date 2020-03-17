  var link = document.querySelector(".interested__button");
  var popup = document.querySelector(".form");

  var checkin = popup.querySelector("[name=checkin]");
  var checkout = popup.querySelector("[name=checkout]");
  var adults = popup.querySelector ("[name=adults]");
  var child = popup.querySelector ("[name=child]");

  var isStorageSupport = true;
  var storageAdults = "";
  var storageChild = "";


  try {
    storageAdults = localStorage.getItem("adults");
    storageChild = localStorage.getItem("child");
  } catch (err) {
    isStorageSupport = false;
  }

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("form__hide");
    popup.classList.toggle("form__show");
    checkin.focus();
  });

  popup.addEventListener("submit", function (evt) {
    if (!checkin.value || !checkout.value || !adults.value || !child.value) {
      evt.preventDefault();
      console.log("Нужно заполнить поля формы");
      if (!checkout.value) {
        checkout.focus();
        if (!checkin.value) {
          checkin.focus();
        }
      } else if (!adults.value) {
        adults.focus();
      } else child.focus();
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popup.classList.contains("form__show")) {
        evt.preventDefault();
        popup.classList.remove("form__show");
      }
    }
  });
