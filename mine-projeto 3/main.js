// Divisivel por 3 -> Fizz
// Divisivel por 5 -> Buzz
// Divisivel por 3 e 5 -> FizzBuzz
// não divisivel por 3 ou 5 => entrada
// não é um numero -> 'não é um numero'

// minha solução 

const resultado = fizzBuzz(15)
console.log(resultado)

function fizzBuzz(entrada){
    if (entrada % 3 == 0 || entrada % 5 == 0){
        if((entrada % 3 == 0) == true && (entrada % 5 == 0) == false){
            return "Fizz"
        }else if((entrada % 5 == 0) == true && (entrada % 3 == 0) == false){
            return "Buzz"
        }else{
            return "FizzBuzz"
        }  
    }else if(typeof(entrada) != typeof(1)){
        return "não é um numero"
    }
    return entrada
}

// solução do video
 
const resultado = fizzBuzz2(15)
console.log(resultado)

function fizzBuzz2(entrada){
    if(typeof(entrada) != 'number')
        return "não é um numero"
    if((entrada % 3 == 0) && (entrada % 5 == 0))
        return "FizzBuzz"
    if(entrada % 3 == 0)
        return "Fizz"
    if(entrada % 5 == 0) 
        return "Buzz"
    return entrada
}

