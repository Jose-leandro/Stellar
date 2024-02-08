

const dadoDeImagem = document.querySelector('.escolher__input');
console.log(dadoDeImagem);
const dadoImagem = dadoDeImagem.value;
console.log(dadoImagem);

const formularioNome = document.querySelector('.formulario__nome');
console.log(formularioNome);

const dadoNome = formularioNome.value;
console.log(dadoNome);

const formularioPreco = document.querySelector('.formulario__preco');
const dadoPreco = formularioPreco.value;
console.log(dadoPreco);

const formularioCategoria = document.querySelector('.formulario__categoria');
const dadoCategoria = formularioCategoria.value;
console.log(dadoCategoria);

const formularioDescricao = document.querySelector('.formulario__preco');
const dadoDescricao = formularioDescricao.value;
console.log(dadoDescricao);

const refratorContener = document.querySelector('[data-tipo="refratores"]');

const nomeRefratores = 'refratores';

const binoculosContener = document.querySelector('[data-tipo="binoculos"]');

const contenerCameras = document.querySelector('[data-tipo="cameras"]');

const contenerAstronomicas = document.querySelector('[data-tipo="astronomicas"]');

const formularioBtn = document.querySelector('.formulario__btn');

const dd = imagem.refratores[1];
console.log(dd);
console.log('errro');

function adicionadoProduto() {
  formularioBtn.addEventListener('click', function() {
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
`;
      refratorContener.innerHTML = conteudo;

      refratorContener.appendChild();
    }
  });
}
adicionadoProduto();
