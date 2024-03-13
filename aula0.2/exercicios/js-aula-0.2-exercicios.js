//Exercicio 01

const estadosBrasileiros = [
    'Acre',
    'Alagoas',
    'Amapá',
    'Amazonas',
    'Bahia',
    'Ceará',
    'Distrito Federal',
    'Espirito Santo',
    'Goiás',
    'Maranhão',
    'Mato Grosso do Sul',
    'Mato Grosso',
    'Minas Gerais',
    'Pará',
    'Paraíba',
    'Paraná',
    'Pernambuco',
    'Piauí',
    'Rio de Janeiro',
    'Rio Grande do Norte',
    'Rio Grande do Sul',
    'Rondônia',
    'Roraima',
    'Santa Catarina',
    'São Paulo',
    'Sergipe',
    'Tocantins',
]

estadosBrasileiros.forEach((estado, e) => {
    console.log(`${e + 1} - ${estado}.`)
})

console.log("")

//Exercicio 02

const aluno = {
    nome: "Gilmar",
    idade: 21,
    cidade: "Pariquera-açu",
    hobby: "jogar video game",
    musicaPreferida: "Gato Cerveja(K a m a i t a c h i)"
}

console.log(`Olá, eu sou ${aluno.nome} e tenho ${aluno.idade} anos de idade. Moro em ${aluno.cidade}, gosto de ${aluno.hobby} e minha música preferida é ${aluno.musicaPreferida}!`)
console.log("")

//Exercicio 03

const catalogoFilmes = [
{
    titulo: "O Castelo Animado",
    ano: 2004,
    genero: "Aventura/Fantasia",
    direcao: "Hayao Miyazaki"
},
{
    titulo: "A Viagem de Chihiro",
    ano: 2001,
    genero: "Fantasia",
    direcao: "Hayao Miyazaki"
},
{
    titulo: "Meu Amigo Totoro",
    ano: 1988,
    genero: "Aventura/Fantasia/Drama",
    direcao: "Hayao Miyazaki"
}]

catalogoFilmes.forEach((filmes, f) => {
    console.log(`${f + 1} - ${filmes.titulo}:\nAno de lançamento: ${filmes.ano}.\nGênero: ${filmes.genero}.\nDireção: ${filmes.direcao}.`)
    console.log("")
})