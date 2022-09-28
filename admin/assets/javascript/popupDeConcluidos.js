
function mostarPopup() {

    var contenerPopup = document.querySelector(".contener__popup");
    contenerPopup.style.visibility = "visible";
}

function fecharPopup() {
    var contnerPopup = document.querySelector(".contener__popup");

    var popupClose = document.querySelector(".popup__close");
    popupClose.addEventListener("click", function () {
        var contenerPopup = document.querySelector(".contener__popup");
        contenerPopup.style.visibility = "hidden";
    });

    contnerPopup.addEventListener("click", function () {
        var contenerPopup = document.querySelector(".contener__popup");
        contenerPopup.style.visibility = "hidden";
    });
} fecharPopup()