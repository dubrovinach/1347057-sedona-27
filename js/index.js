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
    popup.classList.toggle("form--hidden");
    popup.classList.remove("form--error");
    checkin.focus();
    if (storageAdults) {
      adults.value = storageAdults;
    }
    if (storageChild) {
      child.value = storageChild;
    }
  });

  popup.addEventListener("submit", function (evt) {
    if (!checkin.value || !checkout.value || !adults.value || !child.value) {
      evt.preventDefault();
      popup.classList.remove("form--error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("form--error");
      if (!checkout.value) {
        checkout.focus();
        if (!checkin.value) {
          checkin.focus();
        }
      } else if (!adults.value) {
        adults.focus();
      } else child.focus();
    } else {
      if (isStorageSupport) {
      localStorage.setItem("adults", adults.value);
      localStorage.setItem("child", child.value);
      }
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popup.classList.contains("form--show")) {
        evt.preventDefault();
        popup.classList.remove("form--show");
        popup.classList.remove("form--error");
      }
    }
  });
