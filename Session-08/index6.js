// var arr = [9,10,11,3,12]
// var result = arr.filter(function(el){
//     return el>5
// })
// console.log(result)

var arr =[9,2,7,3,12,23,62,31]

var even = arr.filter(function(el,i){
    // return el % 2 ===0
    return !(el % 2) 
})

var odd = arr.filter(function(el,i){
    return el % 2
})

console.log('even',even)
console.log('odd',odd)