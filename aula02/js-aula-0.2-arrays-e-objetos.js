let produto = []
console.log(typeof(produto))

let Produtos = ['Computador', 'Notebook', 'Celular', 'Tablet']
console.log(Produtos)
console.log(Produtos[0])
console.log(Produtos[2])

//Exibindo o array com o FOR (com indices)

for(let c in Produtos){
    console.log(`${Number(c) + 1} - ${Produtos[c]}`)
}

//Exibindo o array com o forEach (com indices)

Produtos.forEach((produto, i) => {
    console.log(`${i + 1} - ${produto}`)
})

// Produtos.forEach(produto => {
//     console.log(produto)
// })

//Objetos literais

const product = {}
console.log(typeof(product))

const Product = {
    nome: 'Computador',
    marca: 'Positivo',
    preco: 3000,
    descricao: 'Pc moderno com bom desempenho'
}

console.log(Product)
console.log(`O ${Product.nome}, da marca ${Product.marca}, custa R$${Product.preco}. ${Product.descricao}.`)

//Arrays de Objetos

const productList = [{
    nome: 'Computador',
    marca: 'Positivo',
    preco: 3000,
    descricao: 'Pc moderno com bom desempenho'
},
{
    nome: 'Tablet',
    marca: 'Samsung',
    preco: 2000,
    descricao: 'Otima velocidade e processamento'
},
{
    nome: 'Celular',
    marca: 'Apple',
    preco: 12000,
    descricao: 'Otimo custo beneficio'
}]
console.log(typeof(productList))