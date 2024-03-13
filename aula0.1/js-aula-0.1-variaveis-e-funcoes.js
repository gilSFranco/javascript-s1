//Comentario em linha

/*
Comentario em bloco
*/

//VARIAVEIS NO JAVASCRIPT
//CONST X VAR X LET

// const nome = "Diego"
// const - não pode ser declarada sem inicializá-la
// const - não pode ser reatribuida, ou seja, o seu valor nao pode ser mudado

// let nome = "Diego"
// nome = "Rodrigo"
// console.log(nome)
// console = Rodrigo
// let - seu valor pode ser mudado

// var nome = "Diego"
// var nome = "Renato"
// console.log(nome)
// var - pode ser reatribuido
// var - seu valor pode ser mudado

// let idade = 18
// let cidade = "Registro"
// console.log(typeof(idade), typeof(cidade))

// function minhaFuncao(){

// }

//FUNÇÃO SIMPLES
function saudacao(){
    console.log("Olá, bem-vindo!")
}

saudacao()

//FUNÇÃO COM PARAMETRO/ARGUMENTO
function Saudacao(nome){
    console.log(`Olá ${nome}, bem-vindo!`)    
}

//placeholder - ${}
//template strings - ${nome}

Saudacao("Gilmar")

//FUNÇÃO COM MAIS DE UM PARAMETRO/ARGUMENTO
function soma(numero1, numero2){
    let res = numero1 + numero2
    console.log(`A soma dos dois números foi ${res}!`)
}

soma(10,10)

//FUNÇÃO COM RETORNO
function Soma(numero1, numero2){
    return numero1 + numero2
}

console.log(`A soma dos números foi ${Soma(10,10)}!`)

//FUNÇÃO COM MAIS DE UM RETORNO
function parImpar(n){
    if(n % 2 == 0){
        return 'Par'
    } else{
        return 'Impar'
    }
}

let num = 4
console.log(parImpar(num))
console.log(`O número ${num} é ${parImpar(num)}!`)

//FUNÇÂO ANONIMA
let dobro = function(x){
    return x * 2
}

console.log(dobro(15))

//ARROW FUNCTION (com unico parametro)
const Dobro = x => {
    return x * 2
}

console.log(`O dobro do número é ${Dobro(2)}!`)

//ARROW FUNCTION (com mais de um parametro)
const calculo = (numero1, operador, numero2) => {
    return eval(`${numero1} ${operador} ${numero2}`)
}

console.log(`O resultado da operação é ${calculo(6, '+', 10)}!`)

//FUNCAO IMEDIATA - IIFE(Immediately Invoked Function Expression)
const iife = (function(){
    console.log("Executando automaticamente.")
})()

const start = (function(app){
    console.log(`Executando imediatamente ${app}.`)
})("Whatsapp")