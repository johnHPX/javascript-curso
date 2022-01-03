const primeiro = [{id:1}]
const segundo = [4,5,6]
primeiro[0].id = 10
// combinar
const combinação = primeiro.concat(segundo)
console.log(combinação)
// dividir 
const cortado = combinação.slice()
console.log(cortado)