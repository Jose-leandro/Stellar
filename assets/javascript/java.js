
function TornarVisivelOMenuAdicionar() {
    var TresPotinhos = document.querySelector("#tres-pontinhos");
   TresPotinhos.addEventListener("click", function(event) {
        console.log(event)
         var ContenerAdicionar = document.querySelector(".contener-adicionar");
       ContenerAdicionar.style.visibility = "visible";
    });
}

TornarVisivelOMenuAdicionar();

function esconderOMenuAdicionar() {
    var fechar = document.querySelector(".fechar-menu-produtos");
    fechar.addEventListener("click", function(event) {
        console.log(event);
        
        var ContenerAdicionar = document.querySelector(".contener-adicionar");
        ContenerAdicionar.style.visibility = "hidden";
    });
}esconderOMenuAdicionar();

