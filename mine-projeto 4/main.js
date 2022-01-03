// velocidade maxima de 70
// a cada skip acima do limite você ganha 1 ponto
// Math.Floor()
// caso os pontos maior que 12 -> 'carteira suspendida'

function verificarVelocidade(velocidade){
    if(velocidade <= 70){
        return "ok"
    }
    let pontos = Math.floor((velocidade - 70)/5)
    if (pontos > 12)
        return 'Carteira Suspensa'
    return 'Pontos:', pontos
}  

console.log(verificarVelocidade(180))