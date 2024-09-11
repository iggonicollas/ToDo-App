let meta = {
    value: "ler um livro por mes",
    adress: 2, 
    checked: true,
    log: (info) => {
        console.log(info)
    }
}

let metas = [
    meta,
    {
        value: "caminhar 20 minutos todos os dias",
        checked: false
    }
]

console.log(metas[0].value)