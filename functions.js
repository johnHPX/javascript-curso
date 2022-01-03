// Verbo + Substantivo
let corSite = 'azul'
function resetColor(cor, tonalidade){
    corSite = cor + " " + tonalidade
}

console.log(corSite)
resetColor('verde', 'claro')
console.log(corSite)


//tipos de funções

//realiza uma tarefa, não devolve nada
function dizerName(){
    console.log('jonatas')
}

dizerName()

//fz um calculo ou operação e retorna algo
function multiplicarPorDois(valor){
    return valor * 2
}

let resultado = multiplicarPorDois(2)

console.log(resultado)