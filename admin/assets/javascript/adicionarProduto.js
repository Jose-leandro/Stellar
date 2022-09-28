
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

function adicionadoProduto() {

formularioBtn.addEventListener("click", function () {

    if (dadoCategoria == nomeRefratores) {

        var criarProdutosRefratores = function (url, nome, preco) {

        const conteudo = `
    <div class="contener__refrator">
    <a href="#"><img src="${url}"
            class="refrator__imagem" alt="imagem de um refrator"></a>
    <p class="refrator__descricao">
        ${nome}<br>
    </p>
    <h1 class="refrator__preco">
        ${preco}
    </h1>
    <p class="refrator__descricao">
    ${descricao}
    </p>
    <a href="#" class="refrator__ancora"><button class="refrator__btn">Ver produto</button></a>
    </div>
`
    refratorContener.innerHTML = conteudo;
    return refratorContener;
}
var produto = refratorContener.appendChild(criarProdutosRefratores(dadoDeImagem, dadoNome, dadoPreco, dadoDescricao));

        }
    });
}adicionadoProduto();