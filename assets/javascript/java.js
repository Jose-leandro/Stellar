
function TornarVisivelOMenuAdicionar() {
    var TresPotinhos = document.querySelector("#tres-pontinhos");
    TresPotinhos.addEventListener("click", function (event) {
        console.log(event)
        var ContenerAdicionar = document.querySelector(".contener-adicionar");
        ContenerAdicionar.style.visibility = "visible";
    });
}

TornarVisivelOMenuAdicionar();

function esconderOMenuAdicionar() {
    var fechar = document.querySelector(".fechar-menu-produtos");
    fechar.addEventListener("click", function (event) {
        console.log(event);

        var ContenerAdicionar = document.querySelector(".contener-adicionar");
        ContenerAdicionar.style.visibility = "hidden";
    });
} esconderOMenuAdicionar();


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