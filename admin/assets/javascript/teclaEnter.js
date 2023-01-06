
inputBuscar.addEventListener("keydown", (event) => {
    console.log(event.key)
    if (event.key == "Enter") {
        window.location.href = "pesquisarProdutos.html"
    }
})