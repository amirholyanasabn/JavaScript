var myFunc = function(firstName , lastName){
    return firstName+' '+lastName
}

console.log( myFunc('Amirhossein','Olyanasab'))

function getFullName(firstName,lastName){
    return firstName+' '+lastName
}

console.log(getFullName('Ali','Daei'))


// function sum(firstNum,secondNum){
//     return firstNum+secondNum
// }
// console.log(sum(12,8))
// console.log(sum(10,30))

function func(){
    return 'Gucci'
}
console.log(func())
// var myVar = func()
// console.log(myVar)

function sayHello(){
    console.log('Hello . . .')
}
sayHello()

//Anonymous Function
//Call back

// var anon = function(){
//     alert('Hello JavaScript')
// }
// anon()

// function sum(a, b, c, d){
   
//     if (!c)  c=0
//     // if (c===undefined) 
//     //      c=0
//     // if (d===undefined)
//     //     d=0 
//     d = d || 0
//     var result = a+b+c+d
//     return result
// }
var result = 0
function sum(a, b, c=0, d=0){
    for(var item of arguments){ 
        result = item + result
    }
    return result
}

console.log('sum arguments is : '+sum(10,20,10))

function sub(a, b){
    return a-b
}

function operate(a, b, callback){
    return callback(a, b)
}

console.log(operate(5,5,sum))
console.log(operate(10,8,sub))
console.log(operate(4,5,function(a,b){return a*b}))


console.log(sum(2,5,3,5))
console.log(sum(2,5,3))
console.log(sum(2,5, undefined,5))
console.log(sum(2,5,))
