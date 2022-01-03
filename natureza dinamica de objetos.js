const mouse = {
    cor : 'red',
    marcar: 'dazz'
}

mouse.velocidade = 5000
mouse.clickLeft = function (){
    console.log('clicandoo com o lado esquerdo')
}

delete mouse.velocidade
delete mouse.clickLeft

console.log(mouse)