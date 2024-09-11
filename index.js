let meta = {
    value: "ler um livro por mes",
    adress: 2, 
    checked: true,
    log: (info) => {
        console.log(info)
    }
}

meta.value = "nao eh mais ler um livro"
meta.log(meta.value)


