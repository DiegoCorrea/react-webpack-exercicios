const produto = {
    nome: 'Caneta Bic preta',
    preco: 1.90,
    desconto: 0.05
}

function clone(objeto){
    return {...objeto}
}

const novoproduto = clone(produto)

novoproduto.nome = 'Caneta Bic Azul'

console.log(produto, novoproduto)