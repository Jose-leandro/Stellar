
var btn = document.querySelector(".cabecalho__pesquisar");

var contenerProdutos = document.querySelector('[data-tipo="produtos"]');

var criarProdutos = function (link, url, nome, preco) {

    const conteudo = `
   
    <div class="contener__produto">
					<a href="${link}"><img src="${url}"
							class="produto__imagem" alt="imagem de um produto"></a>
					<p class="produto__descricao">
						${nome}<br>
					</p>
					<h1 class="produto__preco">
						${preco}
					</h1>
					<a href="${link}" class="produto__ancora"><button class="produto__btn">Ver produto</button></a>
				</div>			
`
    contenerProdutos.innerHTML = conteudo;
    return contenerProdutos;
}

var http = new XMLHttpRequest();

http.open("GET", "http://localhost:3000/produtos");

http.send();

http.onload = function () {
    var dados = JSON.parse(http.response);

    dados.forEach(Element => {

        var nome = Element.nome;

        btn.addEventListener('click', function () {
            var input = document.querySelector(".cabecalho__input");
            console.log(input)

            var valorDoInput = input.value;
            console.log(valorDoInput);

            console.log(nome)
            if (valorDoInput == nome) {
                alert("ceerto")
                dados.appendChild(criarProdutos(Element.link, Element.url, Element.nome, Element.preco));
            }

        })

    });
}




