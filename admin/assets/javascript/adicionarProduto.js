

var dadoDeImagem = document.querySelector(".escolher__input");
console.log(dadoDeImagem);
var dadoImagem = dadoDeImagem.value;
console.log(dadoImagem)

var formularioNome = document.querySelector(".formulario__nome");
console.log(formularioNome)

var dadoNome = formularioNome.value;
console.log(dadoNome)

var formularioPreco = document.querySelector(".formulario__preco");
var dadoPreco = formularioPreco.value;
console.log(dadoPreco)

var formularioCategoria = document.querySelector(".formulario__categoria");
var dadoCategoria = formularioCategoria.value;
console.log(dadoCategoria)

var formularioDescricao = document.querySelector(".formulario__preco");
var dadoDescricao = formularioDescricao.value;
console.log(dadoDescricao)

var refratorContener = document.querySelector('[data-tipo="refratores"]');

var nomeRefratores = "refratores";

var binoculosContener = document.querySelector('[data-tipo="binoculos"]');

var contenerCameras = document.querySelector('[data-tipo="cameras"]');

var contenerAstronomicas = document.querySelector('[data-tipo="astronomicas"]');

var formularioBtn = document.querySelector(".formulario__btn");

var dd = imagem.refratores[1]
console.log(dd)
console.log("errro")

function adicionadoProduto() {

    

    formularioBtn.addEventListener("click", function () {

        if (dadoCategoria == nomeRefratores) {

            const conteudo = `
    <div class="contener__refrator">
    <a href="#"><img src="${imagem.refratores[0]}"
            class="refrator__imagem" alt="imagem de um refrator"></a>
    <p class="refrator__descricao">
        ${imagem.refratores[1]}<br>
    </p>
    <h1 class="refrator__preco">
        ${imagem.refratores[2]}
    </h1>
    <a href="#" class="refrator__ancora"><button class="refrator__btn">Ver produto</button></a>
    </div>
`
            refratorContener.innerHTML = conteudo;

            refratorContener.appendChild();

        }
    });
} 
adicionadoProduto();