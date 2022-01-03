const marcar = [
    {id:1, nome:'a'},
    {id:2,nome:'b'},
]

const marca = marcar.find((marcar) => marcar.nome === 'a')
console.log(marca)

const celulares = [
    {marca:'xiomi', preço:1500},
    {marca:'samsung', preço:1700},
]

const cel = celulares.find((cel) => cel.marca === 'samsung')
console.log(cel)