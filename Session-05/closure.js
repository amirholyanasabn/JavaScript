(function(){
    console.log('Hi')
})()

function func(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}
var firstFunc = func(2)
var secondFunc = firstFunc(3)

console.log(secondFunc(6))
console.log(secondFunc(10))
console.log(secondFunc(13))
function countr(name){
    var value = 0
    function increase(){
        value++
        console.log(name,value)
    }
    function decrease(){
        value--
        console.log(name,value)
    }
    return{
        increase : increase,
        decrease :decrease
    }
}

myCounter = countr('Conter')
myCounter1 = countr('Counter1')
// console.log(myCounter)

