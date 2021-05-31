function fibo(number){
    var result = 1
    for(var i = number ; i > 1 ; i--){
        result *= i
    }
    return result
}

console.log(fibo(5))

function fiboRecursive(number){
    // if (number === 1 || number === 0) {
    //     return 1
    // }
    // return number * fiboRecursive(number-1)
    return number === 1 ?  1 :  number*fiboRecursive(number-1)
}
console.log(fiboRecursive(5))

var func = function(number){
    return number === 1 ? 1 : number*arguments.callee(number-1)
}
console.log(func(4))