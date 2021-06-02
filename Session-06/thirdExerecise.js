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

function operation(){
    var numbers = []
    for(var i =1;i<arguments.length;i++){
        numbers[i-1] = arguments[i]
    }


    switch(arguments[0]){
        case 'sum':
            return sum.apply({},numbers)
        case 'sub':
            return subs.apply({},numbers)    
        case 'mul':
            return mul.apply(null,numbers)
        case 'div' :
            return div.apply(null,numbers)
        default :
            console.log('Operator not valid...')
    }
}
console.log(operation('sum',12,10))
console.log(operation('sub',100,99))
console.log(operation('mul',4,5))
console.log(operation('div',80,10))
function func(param1,param2){
    console.log(param1)
    console.log(param2)
    console.log(this.name)
}
var obj = {
    name : 'Sepideh',
    family : 'Olyanasab'
}

func.call(obj,'Nurse','Tehran')

function welcome (greeting){
    console.log(greeting+' '+this.name+' '+this.family)
}
var firstPerson = {
    name : 'Amirhossein',
    family : 'Olyanasab'
}
var secondPerson = {
    name : 'سپیده',
    family : 'علیانسب'
}
var thirdPerson = {
    name : 'Gucci',
    family : 'Olyanasab'
}

welcome.call(firstPerson,'Hallo')
welcome.call(secondPerson,'سلام')
welcome.apply(thirdPerson,['Hello pretty'])

var numbers = [2,10,99,100,1,25]
// var max = Math.max.apply({},numbers)
var max = Math.max.apply(null,numbers)
console.log(max)