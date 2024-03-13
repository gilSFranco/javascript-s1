// Exercicio 1
function aluno(){
    console.log('Nome - Gilmar\nIdade - 21\nCidade - Pariquera-açu')
}

aluno()

//Exercicio 2
function divisao(numero1, numero2){
    let resultado = numero1 / numero2

    console.log(`O resultado da divisão é de ${resultado}!`)
}

divisao(10, 2)

//Exercicio 3
function multiplicacao(numero1, numero2, numero3){
    return numero1 * numero2 * numero3
}

console.log(`A resultado da multiplicação é de ${multiplicacao(1,10,5)}!`)

//Exercicio 4
function verificarIdade(idade){
    if(idade >= 18){
        return 'maior de idade'
    } else{
        return 'menor de idade'
    }
}

console.log(`Você é ${verificarIdade(17)}!`)

//Exercicio 5
const media = function(nota1, nota2){
    let resultado = (nota1 + nota2) / 2

    if(resultado <= 5){
        return 'reprovado'
    } else{
        return 'aprovado'
    }
}

console.log(`Aluno, você foi ${media(5,5)}!`)

//Exercicio 6
const triplo = numero => {
    return numero * 3
}

console.log(`O triplo do número é ${triplo(3)}!`)

//Exercicio 7
const soma = (numero1, numero2, numero3, numero4) => {
    return numero1 + numero2 + numero3 + numero4
}

console.log(`O resultado da soma desses quatro números é ${soma(1,2,3,4)}!`)

//Exercicio 8
const mostrarNome = (function(nome){
    console.log(`Olá ${nome}, seja bem-vindo!`)
})("Gilmar")