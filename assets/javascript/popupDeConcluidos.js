
function mostarPopup() {

    var contenerPopup = document.querySelector(".contener-popup");
    contenerPopup.style.visibility = "visible";
}

function fecharPopup() {
    var contnerPopup = document.querySelector(".contener-popup");

    var popupClose = document.querySelector(".popup-close");
    popupClose.addEventListener("click", function () {
        var contenerPopup = document.querySelector(".contener-popup");
        contenerPopup.style.visibility = "hidden";
    });

    contnerPopup.addEventListener("click", function () {
        var contenerPopup = document.querySelector(".contener-popup");
        contenerPopup.style.visibility = "hidden";
    });
} fecharPopup()