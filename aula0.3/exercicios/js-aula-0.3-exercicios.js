//Exercicio 01

// const dataAtual = new Date()
// const dia = dataAtual.getDate()
// const mes = dataAtual.getMonth() + 1
// const ano = dataAtual.getFullYear()

// const funcaoData = (dia, mes, ano) => {
//     return `${dia + 7}/${mes + 5}/${ano + 2}`
// }

// console.log(`Hoje é dia ${funcaoData(dia,mes,ano)}.`)

const dataAtual = new Date()

const funcaoData = data => {
    const dia = data.getDate()
    const mes = data.getMonth() + 1
    const ano = data.getFullYear()

    return `${dia + 7}/0${mes + 5}/${ano + 2}`
}

console.log(`Hoje é dia ${funcaoData(dataAtual)}.`)
console.log('')

//Exercicio 02

let salario = 1400

const conversor = salario => {
    const euro = salario * 0.19
    let euconv = euro.toLocaleString('en-ur', {style: 'currency', currency: 'EUR'})

    const dolar = salario * 0.20
    let doconv = dolar.toLocaleString('en-us', {style: 'currency', currency: 'USD'})

    return {euconv, doconv}
}

let salarioConvertido = conversor(salario)

console.log(`Seu salário em real é ${salario.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}. Agora, seu salário em:\nEuro - ${salarioConvertido.euconv}.\nDólar - ${salarioConvertido.doconv}.`)
console.log('')

//Exercicio 03

let nome = "Gilmar Soares Franco"

const formatandoNome = nome => {
    const nomeMaior = nome.toUpperCase()
    const nomeMenor = nome.toLowerCase()
    const tamanho = nome.length

    return {nomeMaior, nomeMenor, tamanho}
}

let nomeFormatado = formatandoNome(nome)
console.log(`Nome original '${nome}'. Agora, o mesmo nome mas, de formas diferentes:\nCaixa alta - ${nomeFormatado.nomeMaior}.\nCaixa baixa - ${nomeFormatado.nomeMenor}.\nE o tamanho desse nome: ${nomeFormatado.tamanho}.`)