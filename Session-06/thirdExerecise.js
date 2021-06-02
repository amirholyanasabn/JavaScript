function sum(){
    var result = 0
    for (var number of arguments) {
        result += number
    }
    // for(var i=0 ; i<arguments.length ; i++){
    //     result += arguments[i]
    // }
    return result
}
function subs(result){
    for(var i=1 ; i<arguments.length ; i++){
         result -= arguments[i]
    }
    return result
}
// function subs(){
//     var result = arguments[0]
//     for(var i = 1 ; i<arguments.length ; i++){
//         result -=arguments[i]
//     }
//     return result
// }
function mul(){
    var result = 1
    for(var number of arguments)
        result *= number
    // var result = arguments[0]
    // for(var i=1 ; i<arguments.length ; i++){
    //     result *= arguments[i]
    // }
     return result
}
function div(){
    var result = arguments[0]
    for(var i = 1 ; i<arguments.length ; i++){
        result /= arguments[i]
    }
    return result
}
console.log('Sum => ', sum(12,8,10))
console.log('Sub => ',subs(20,10,10))
console.log('mul => ',mul(5,5,10))
console.log('div => ',div(100,2,5,2))

// function operation(){
//     var numbers = []
//     for(var i =1;i<arguments.length;i++){
//         numbers[i-1] = arguments[i]
//     }


//     switch(arguments[0]){
//         case 'sum':
//             return sum(numbers)
//             break 
//             case 'sub'
//     }
// }
// console.log(operation('sum',12,10))