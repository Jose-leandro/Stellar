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

var inputEmail = document.querySelector("[data-tipo='email']");
var lableEmail = document.querySelector(".lable__email");

var inputSenha = document.querySelector("[data-tipo='senha']");
var lableSenha = document.querySelector(".lable__senha");


function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    console.log(tipoDeInput)

    if (input.validity.valid) {

        span.innerHTML = " ";

        inputEmail.classList.remove("erro__email");
        inputSenha.classList.remove("erro__senha");

        lableEmail.classList.remove("lable__email--color");
        lableSenha.classList.remove("lable__senha--color");
    
    } else {
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
    email: {
        valueMissing: 'O campo de email não pode estar vazio.',
        typeMismatch: 'O email digitada não corresponde a um email verídico',
        patternMismatch: "O seu email não é valido, talvez haja algo erro que foi digitado"
    },
    senha: {
        valueMissing: 'O campo de senha não pode estar vazio.',
        typeMismatch: 'A senha digitada não corresponde, a uma senha verídica',
        patternMismatch: "A sua senha não é valida, talvez haja algo erro que foi digitado"
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

function validandoInputEmail() {
    var inputEmail = document.querySelector("[data-tipo='email']");

    valida(inputEmail);
}

function validandoInputSenha() {
    var inputSenha = document.querySelector("[data-tipo='senha']");

    valida(inputSenha);
}
