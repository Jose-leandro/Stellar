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

var inputMensagem = document.querySelector("[data-tipo='mensagem']");

var inputLocalizacao = document.querySelector("[data-tipo='localizacao']");

var inputEmail = document.querySelector("[data-tipo='email']");

var inputSenha = document.querySelector("[data-tipo='senha']");

var lableNome = document.querySelector(".lable__nome");

var lableMensagem = document.querySelector(".label__mensagem");

var lableLocalizacao = document.querySelector(".lable__localizacao");

var lableEmail = document.querySelector(".lable__email");

var lableSenha = document.querySelector(".lable__senha");


function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    console.log(tipoDeInput)

    if (input.validity.valid) {

        span.innerHTML = " ";

        inputNome.classList.remove("erro__nome");
        inputMensagem.classList.remove("erro__mensagem");
        inputLocalizacao.classList.remove("erro__localizacao");
        inputEmail.classList.remove("erro__email");
        inputSenha.classList.remove("erro__senha");

        lableNome.classList.remove("lable__nome--color");
        lableMensagem.classList.remove("lable__mensagem--color");
        lableLocalizacao.classList.remove("lable__localizacao--color");
        lableEmail.classList.remove("lable__email--color");
        lableSenha.classList.remove("lable__senha--color");

    } else {
        if (input == inputNome) {
            inputNome.classList.add("erro__nome");
            lableNome.classList.add("lable__nome--color");
        }
        if (input == inputMensagem) {
            inputMensagem.classList.add("erro__mensagem");
            lableMensagem.classList.add("lable__mensagem--color");
        }
        if (input == inputLocalizacao) {
            inputLocalizacao.classList.add("erro__localizacao");
            lableLocalizacao.classList.add("lable__localizacao--color");
        }
        if (input == inputEmail) {
            inputEmail.classList.add("erro__email");
            lableEmail.classList.add("lable__email--color");
        }
        if (input == inputSenha) {
            inputSenha.classList.add("erro__senha");
            lableSenha.classList.add("lable__senha--color");
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

const mensagensDeErro = {
    nome: {
        valueMissing: 'O campo de nome não pode estar vazio.',
        typeMismatch: 'O nome digitado não é correspondente ao um nome',
        patternMismatch: "O seu nome não é válido, talvez tenha digitado algo que não corresponderia ao um nome"
    },
    mensagem: {
        valueMissing: 'O campo de mensagem não pode estar vazio.',
        typeMismatch: 'A mensagem digitada não correspoonde a uma mesagem verídica',
        patternMismatch: "A sua mensagem não é valida, talvez haja algo erro que foi digitado"
    },
    localizacao: {
        valueMissing: 'O campo de localização não pode estar vazio.',
        typeMismatch: 'A localização digitada não correspoonde é verídica',
        patternMismatch: "A localização não é valida, talvez haja algo erro que foi digitado"
    },
    email: {
        valueMissing: 'O campo de email não pode estar vazio.',
        typeMismatch: 'O email digitada não correspoonde a um email verídico',
        patternMismatch: "O seu email não é valido, talvez haja algo erro que foi digitado"
    },
    senha: {
        valueMissing: 'O campo de senha não pode estar vazio.',
        typeMismatch: 'A senha digitada não correspoonde, a uma senha verídica',
        patternMismatch: "a sua senha não é valida, talvez haja algo erro que foi digitado"
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
function validandoInputLocalizacao() {
    var inputLocalizacao = document.querySelector("[data-tipo='localizacao']");

    valida(inputLocalizacao);
}

function validandoInputEmail() {
    var inputEmail = document.querySelector("[data-tipo='email']");

    valida(inputEmail);
}

function validandoInputMensagem() {
    var inputMensagem = document.querySelector("[data-tipo='mensagem']");

    valida(inputMensagem);
}






