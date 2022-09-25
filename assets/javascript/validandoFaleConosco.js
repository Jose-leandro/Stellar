var btnFormulario = document.querySelector(".formulario__btn");
btnFormulario.addEventListener("click", function (event) {
    event.preventDefault();
});


const inputs = document.querySelectorAll("input");
console.log(inputs)

inputs.forEach(input => {

    input.addEventListener('blur', (evento) => {
        valida(evento.target)
        console.log(evento)

        console.log(evento.validity)

    })
});

var span = document.querySelector(".span__erro");
console.log(span);

var inputNome = document.querySelector("[data-tipo='nome']");
var lableNome = document.querySelector(".lable__nome");

var inputMensagem = document.querySelector("[data-tipo='mensagem']");
var lableMensagem = document.querySelector(".label__mensagem");


function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    console.log(tipoDeInput)

    if (input.validity.valid) {

        span.innerHTML = " ";

        inputNome.classList.remove("erro__nome");
        inputMensagem.classList.remove("erro__mensagem");

        lableNome.classList.remove("lable__nome--color");
        lableMensagem.classList.remove("lable__mensagem--color");

    } else {
        if (input == inputNome) {
            inputNome.classList.add("erro__nome");
            lableNome.classList.add("lable__nome--color");
        }
        if (input == inputMensagem) {
            inputMensagem.classList.add("erro__mensagem");
            lableMensagem.classList.add("lable__mensagem--color");
        }
     
        span.style.visibility = "visible";
        span.innerHTML = mostraMensagemDeErro(tipoDeInput, input);

    }
}

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError'
]

const mensagensDeErro  = {
    nome: {
        valueMissing: 'O campo de nome não pode estar vazio.',
        typeMismatch: 'O nome digitado não é correspondente ao um nome',
        patternMismatch: "O seu nome não é válido, talvez tenha digitado algo que não corresponderia ao um nome"
    },
    mensagem: {
        valueMissing: 'O campo de mensagem não pode estar vazio.',
        typeMismatch: 'A mensagem digitada não corresponde a uma mesagem verídica',
        patternMismatch: "A sua mensagem não é valida, talvez haja algo erro que foi digitado"
    }
}

function mostraMensagemDeErro(tipoDeInput, input) {
    let mensagem = '';
    tiposDeErro.forEach(erro => {
        if (input.validity[erro]) {
            mensagem = mensagensDeErro[tipoDeInput][erro];
        }
    })
    console.log(mensagem)
    return mensagem;
}

function validandoInputNome() {
    var inputNome = document.querySelector("[data-tipo='nome']");

    valida(inputNome);
}

function validandoInputMensagem() {
    var inputMensagem = document.querySelector("[data-tipo='mensagem']");

    valida(inputMensagem);
}

