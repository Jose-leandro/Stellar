
function TornarVisivelOMenuAdicionar() {
    var TresPotinhos = document.querySelector("#tres-pontinhos");
    TresPotinhos.addEventListener("click", function (event) {
        console.log(event)
        var ContenerAdicionar = document.querySelector(".contener-adicionar");
        ContenerAdicionar.style.visibility = "visible";
    });
}

TornarVisivelOMenuAdicionar();

// function esconderOMenuAdicionar() {
//     var fechar = document.querySelector(".fechar-menu-produtos");
//     fechar.addEventListener("click", function (event) {
//         console.log(event);

//         var ContenerAdicionar = document.querySelector(".contener-adicionar");
//         ContenerAdicionar.style.visibility = "hidden";
//     });
// } esconderOMenuAdicionar();


var menu = document.querySelector(".menu");
var ul = document.querySelector("ul");
var iconeMenu = document.querySelector(".icone-menu");
iconeMenu.addEventListener("click", function () {

    var menus = ul.classList.toggle("menu-visible");

    console.log(menus)

    if (menus) {
        alert("menu esta")
        ul.classList.remove("esconder-menu");
        ul.classList.remove("menu");
        ul.classList.add("menu-visible");


    } else {
        alert("menu nao esta")
        ul.classList.remove("mostar-visible");
        ul.classList.remove("menu");
        ul.classList.add("animation-menu");

        setInterval(function () {
            escondermenu();
        }, 6000);
    }
});

function escondermenu() {
    ul.classList.add("esconder-menu");
}


