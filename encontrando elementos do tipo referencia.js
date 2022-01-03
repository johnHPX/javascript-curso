const marcar = [
    {id:1, nome:'a'},
    {id:2,nome:'b'},
]

//console.log(marcar.includes([id:1,nome:'a']))

const marca = marcar.find(function(marcar){
    return marcar.nome === 'a' && marcar.id === 1
})

console.log(marca)