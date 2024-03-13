//Manipulando datas no javascript.

//Criando instancia de Date() para utilizar os métodos.
const dataAtual = new Date()
console.log(typeof(dataAtual))

//Pegar o dia atual.
const dia = dataAtual.getDate()
console.log(`Hoje é dia ${dia}!`)

//Pegar o mes atual.
const mes = dataAtual.getMonth() + 1
console.log(`Estamos no mes ${mes}!`)

//Pegar o ano atual.
const ano = dataAtual.getFullYear()
console.log(`Ano atual: ${ano}!`)

//Pegar a data completa.
console.log(`Hoje é ${dia}/${mes}/${ano}!`)

//Manipulando moedas no javascript.
let salario = 2500.30
console.log(salario)
console.log(salario.toFixed(2))
console.log(salario.toFixed(0))
console.log(salario.toFixed(2).replace('.', ','))
console.log(salario.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}))
let dolar = salario * 0.20
console.log(dolar.toLocaleString('en-us', {style: 'currency', currency: 'USD'}))
let euro = salario * 0.18
console.log(euro.toLocaleString('pt-br', {style: 'currency', currency: 'EUR'}))

//Formatando string's no javascript.
const nome = "Gilmar Soares"
console.log(nome.toUpperCase())
console.log(nome.toLowerCase())
console.log(nome.length)

//Podemos usar o 'length' tambem com listas...
const lista = ['Maça', 'Banana', 'Morango']
console.log(lista.length)