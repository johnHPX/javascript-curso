//camelCase umDoisTresQuatro
function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria){
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar(){
            console.log("Fazendo ligação")
        }
    }
}


//Pascal Case - UmDoisTresQuatro
function Celular(marcaCelular, tamanhoTela, capacidadeBateria){
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function(){
        console.log("fazendo ligação....")
    }
}

const celular = new Celular('asus', 5.5, 5000)
console.log(celular)

//desafio: crier um objeto com o construtor function

function Pessoa(nome,idade,profissao){
    this.nome = nome,
    this.idade = idade,
    this.profissao = profissao
}

const pessoa = new Pessoa('diogo', 23, 'garoto de programa')
console.log(pessoa)