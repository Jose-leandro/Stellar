
let inputBuscar = document.querySelector(".cabecalho__input");

var contenerProdutos = document.querySelector('[data-tipo="produtos"]');

var criarProdutosPesquisados = function (link, url, nome, preco) {

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


function validandoPesquisar(nomeDaPesquisar) {
    console.log(nomeDaPesquisar)

    inputBuscar.addEventListener("keydown", (event) => {
        console.log(event.key)
        if (event.key == "Enter") {
            let dado = inputBuscar.value;
            

            if (nomeDaPesquisar == dado) {

                const fetchListaProdutos = () => {
                    const url = "http://localhost:3000/refratordourado";

                    fetch(url)
                        .then(Response => Response.json())
                        .then(
                            Response => Response.forEach(Element => {
                                contenerProdutos.appendChild(criarProdutosPesquisados(Element.link, Element.url, Element.nome, Element.preco));
                            })
                        )
                }
                fetchListaProdutos();

            } else {
                resultadoDaValidacao = "flase";
            }
        }
    })
}
validandoPesquisar();


const fetchListaProdutos = () => {
    const url = "http://localhost:3000/refratordourado";

    fetch(url)
        .then(Response => Response.json())
        .then(
            Response => Response.forEach(Element => {
                validandoPesquisar(Element.nome)
            })
        )
}
fetchListaProdutos();

