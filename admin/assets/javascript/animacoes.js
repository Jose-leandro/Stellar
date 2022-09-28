
var iconeMenu = document.querySelector(".pontinhos__icone");
iconeMenu.addEventListener("click", function () {

    var ContenerAdicionar = document.querySelector(".menu__adicionar");
    var menus = ContenerAdicionar.classList.toggle("menu-visible");

    if (menus) {
        ContenerAdicionar.style.visibility = "hidden";

    } else {
        ContenerAdicionar.style.visibility = "visible";
    }
});


