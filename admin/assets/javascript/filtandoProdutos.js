

var refratorContener = document.querySelector('[data-tipo="refratores"]');
console.log(refratorContener);


var criarProdutosRefratores = function (url1, nome1, preco1, url2, nome2, preco2, url3, nome3, preco3) {
  
    const conteudo = `
    <div class="contener__refrator">
    <a href="produtoRefratorDourao.html"><img src="${url1}"
            class="refrator__imagem" alt="imagem de um refrator dourado"></a>
    <p class="refrator__descricao">
        ${nome1}<br>
    </p>
    <h1 class="refrator__preco">
        ${preco1}
    </h1>
    <a href="produtoRefratorDourao.html" class="refrator__ancora"><button class="refrator__btn">Ver produto</button></a>
</div>
<div class="contener__refrator">
<a href="produtoRefratorMarrom.html"><img src="${url2}"
        class="refrator__imagem"></a>
<p class="refrator__descricao">
${nome2}<br>
</p>
<h1 class="refrator__preco">
${preco2}
</h1>
<a href="produtoRefratorMarrom.html" class="refrator__ancora"><button class="refrator__btn">Ver produto</button></a>
</div><div class="contener__refrator">
<a href="produtoRefratorPreto.html"><img src="${url3}"
        class="refrator__imagem"></a>
<p class="produto-refrator">
${nome3}<br>
</p>
<h1 class="refrator__preco">
${preco3}
</h1> 
<a href="produtoRefratorPreto.html" class="refrator__ancora"><button class="refrator__btn">Ver produto</button></a>
</div>

`
    refratorContener.innerHTML = conteudo;
    return refratorContener;
}

var http = new XMLHttpRequest();

http.open("GET", "http://localhost:3000/refratores");

http.send();

http.onload = function () {
    var dados = JSON.parse(http.response);
    dados.forEach(Element => {
       
       refratorContener.appendChild(criarProdutosRefratores( Element.url1, Element.nome1, Element.preco1, 
            Element.url2, Element.nome2, Element.preco2,
            Element.url3, Element.nome3, Element.preco3));
        localStorage.setItem("ProdutoRefrator", criarProdutosRefratores)
           
    });
}


var criarProdutosBinoculos = function (url1, nome1, preco1, url2, nome2, preco2, url3, nome3, preco3) {
    const conteudoBinoculo = `
    <div class="contener__binoculos--size">
					<a href="binoculosPretoPeludo.html"><img src="${url1}"
							class="binoculos__imagem" alt="imagem que descrever um binóculo preto, um pouco velho e rugoso"></a>
					<p class="binoculos__produto">
						${nome1}<br>
					</p>
					<h1 class="binoculos__preco">
						${preco1}
					</h1>
					<a href="binoculosPretoPeludo.html" class="binoculos__ancora"><button class="binoculos__btn">Ver produto</button></a>
				</div>
				<div class="contener__binoculos--size">
					<a href="binoculoPretoRevue.html"><img src="${url2}"
							class="binoculos__imagem" alt="imagem que descrever um binóculo um pouco verder e preto, grande, e um modelo mais antigo"></a>
					<p class="binoculos__produto">
						${nome2}<br>
					</p>
					<h1 class="binoculos__preco">
						${preco2}
					</h1>
					<a href="binoculoPretoRevue.html" class="binoculos__ancora"><button class="binoculos__btn">Ver produto</button></a>
				</div>
				<div class="contener__binoculos--size">
					<a href="binoculoPretoFpehel.html"><img src="${url3}"
							class="binoculos__imagem" alt="imagem de um binóculo de cor cinza e preto , sobre uma superfície de madeira, da marca fphel"></a>
					<p class="binoculos__produto">
						${nome3}<br>
					</p>
					<h1 class="binoculos__preco">
						${preco3}
					</h1>
					<a href="binoculoPretoFpehel.html" class="binoculos__ancora"><button class="binoculos__btn">Ver produto</button></a>
				</div>
`
    binoculosContener.innerHTML = conteudoBinoculo;
    return binoculosContener;
}

var binoculosContener = document.querySelector('[data-tipo="binoculos"]');

var http2 = new XMLHttpRequest();

http2.open("GET", "http://localhost:3000/binoculos");

http2.send();

http2.onload = function () {

    var dadosDeBinoculos = JSON.parse(http2.response);

    dadosDeBinoculos.forEach(Element =>  {
        binoculosContener.appendChild(criarProdutosBinoculos( Element.url1, Element.nome1, Element.preco1, 
            Element.url2, Element.nome2, Element.preco2,
            Element.url3, Element.nome3, Element.preco3));

            localStorage.setItem("criarProdutoCamera", criarProdutosBinoculos)
    }
   )};

   var contenerCameras = document.querySelector('[data-tipo="cameras"]');
   
   var criarProdutosCameras = function (url1, nome1, preco1, url2, nome2, preco2, url3, nome3, preco3) {
     
       const conteudoCamera = `
       <div class="contener__camera--size">
       <a href="cameraPretaSony.html"><img src="${url1}" class="camera__imagem"
               alt="imagem de um produto da seção câmera"></a>
       <p class="camera__produto">
           ${nome1}<br>
       </p>
       <h1 class="camera__preco">
           ${preco1}
       </h1>
       <a href="cameraPretaSony.html" class="camera__ancora"><button class="camera__btn">Ver produto</button></a>
   </div>
   <div class="contener__camera--size">
       <a href="cameraPreta.html"><img src="${url2}" class="camera__imagem"
               alt="imagemde um produto da seção câmera"></a>
       <p class="camera__produto">
           ${nome2}<br>
       </p>
       <h1 class="camera__preco">
           ${preco2}
       </h1>
       <a href="cameraPreta.html" class="camera__ancora"><button class="camera__btn">Ver produto</button></a>
   </div>
   <div class="contener__camera--size">
       <a href="cameraPrateada.html"><img src="${url3}" class="camera__imagem"
               alt="imagemde um produto da seção câmera"></a>
       <p class="camera__produto">
           ${nome3}<br>
       </p>
       <h1 class="camera__preco">
           ${preco3}
       </h1>
       <a href="cameraPrateada.html" class="camera__ancora"><button class="camera__btn">Ver produto</button></a>
   </div>
   `
       contenerCameras.innerHTML = conteudoCamera;
       return contenerCameras;
   }
   
   var http3 = new XMLHttpRequest();
   
   http3.open("GET", "http://localhost:3000/cameras");
   
   http3.send();
   
   http3.onload = function () {
       var dadosDeCameras = JSON.parse(http3.response);
       dadosDeCameras.forEach(Element => {
          
           contenerCameras.appendChild(criarProdutosCameras( Element.url1, Element.nome1, Element.preco1, 
               Element.url2, Element.nome2, Element.preco2,
               Element.url3, Element.nome3, Element.preco3));
       });
   }
   


var contenerAstronomicas = document.querySelector('[data-tipo="astronomicas"]');

var criarProdutosAstronomicas = function (url1, nome1, preco1, url2, nome2, preco2, url3, nome3, preco3) {
  
    const conteudoAstronomicas = `
   
    <div class="contener__astronomicas--size">
					<a href="ceuEstreladoVerde.html"><img src="${url1} "
							class="astronomicas__imagem" alt="imagem de um produto da seção fotos astronômicas"></a>
					<p class="astronomicas__produto">
						${nome1}<br>
					</p>
					<h1 class="astronomicas__preco">
						${preco1}
					</h1>
					<a href="ceuEstreladoVerde.html" class="astronomicas__ancora"><button class="astronomicas__btn">Ver produto</button></a>
				</div>
				<div class="contener__astronomicas--size">
					<a href="nebulosaVermelha.html"><img src="${url2}"
							class="astronomicas__imagem" alt="imagemde um produto da seção fotos astronômicas"></a>
					<p class="astronomicas__produto">
						${nome2}
					</p>
					<h1 class="astronomicas__preco">
						${preco2}
					</h1>
					<a href="nebulosaVermelha.html" class="astronomicas__ancora"><button class="astronomicas__btn">Ver produto</button></a>
				</div>
				<div class="contener__astronomicas--size">
					<a href="ceuNoturnoRosa.html"><img src="${url3}"
							class="astronomicas__imagem" alt="imagemde um produto da seção fotos astronômicas"></a>
					<p class="astronomicas__produto">
						${nome3}
					</p>
					<h1 class="astronomicas__preco">
						${preco3}
					</h1>
					<a href="ceuNoturnoRosa.html" class="astronomicas__ancora"><button class="astronomicas__btn">Ver produto</button></a>
				</div>
`
    contenerAstronomicas.innerHTML = conteudoAstronomicas;
    return contenerAstronomicas;
}

var http4 = new XMLHttpRequest();

http4.open("GET", "http://localhost:3000/astronomicas");

http4.send();

http4.onload = function () {
    var dadosDeAstronomicas = JSON.parse(http4.response);
    dadosDeAstronomicas.forEach(Element => {
       
        dadosDeAstronomicas.appendChild(criarProdutosAstronomicas( Element.url1, Element.nome1, Element.preco1, 
            Element.url2, Element.nome2, Element.preco2,
            Element.url3, Element.nome3, Element.preco3));
    });
}


