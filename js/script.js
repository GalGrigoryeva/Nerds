var link = document.querySelector(".feedback-btn");
var overlay = document.querySelector(".modal-overlay");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content-close");

var form = popup.querySelector("form");
var userName = popup.querySelector("[name=name]");
var userEmail = popup.querySelector("[name=email]");
var userText = popup.querySelector("[name=text]");
var storageName = localStorage.getItem("userName");
var storageEmail = localStorage.getItem("userEmail");
var storageText = localStorage.getItem("userText");

var inputNames = ["name", "email"];
var allInputNames = ["name", "email", "text"];

for (var i = 0; i < inputNames.length; i++) {
    var inputName = inputNames[i];
    var input = popup.querySelector("[name=" + inputName + "]");
    var inputStorage = localStorage.getItem(inputName + "Storage");
    input.value = inputStorage;
}

link.addEventListener("click", function(event) {
    event.preventDefault();
    overlay.classList.add("modal-overlay-show");
    popup.classList.add("modal-content-show");

    for (var i = 0; i < allInputNames.length; i++) {
        var inputName = allInputNames[i];
        var input = popup.querySelector("[name=" + inputName + "]");
        if (!input.value) {
            input.focus();
            break;
        }
    }
});

close.addEventListener("click", function(event) {
    event.preventDefault();
    overlay.classList.remove("modal-overlay-show");
    popup.classList.remove("modal-content-show");
});

overlay.addEventListener("click", function(event) {
    event.preventDefault();
    overlay.classList.remove("modal-overlay-show");
    popup.classList.remove("modal-content-show");
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        popup.classList.remove("modal-content-show");
        overlay.classList.remove("modal-overlay-show");
    }
});

form.addEventListener("submit", function(event) {
    for (var i = 0; i < allInputNames.length; i++) {
        var inputName = allInputNames[i];
        var input = popup.querySelector("[name=" + inputName + "]");
        input.classList.remove("modal-error");
        if (!input.value) {
            event.preventDefault();
            input.classList.add("modal-error");
            input.focus();
            return;
        }
    }

    for (var i = 0; i < inputNames.length; i++) {
        var inputName = inputNames[i];
        var input = popup.querySelector("[name=" + inputName + "]");
        localStorage.setItem(inputName + "Storage", input.value);
    }
});
