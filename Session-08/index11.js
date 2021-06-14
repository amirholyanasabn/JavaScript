// var person = [
//     {name : 'amir' , age : 34 , location : 'teh'},
//     {name : 'gucci', age : 5 , location : 'teh'}
// ]

// var res = person.filter(el => el.age < 10)
// console.log(res)

// // var teen = person.every(function(el,i){
// //     return el.location === 'teh'
// // })


var arr =[5,1,9,2,6,4]
var res = arr.find(el=>el>8)
var res1 = arr.findIndex(el=>el>8)
console.log(res)
console.log(res1)

var even = arr.some(function(el){
    return !(el %2)
})
console.log(even)

var arrDepth = [1,2,3,[3,[12,44,[1333,[16,90]]]]]
var res2 = arrDepth.flat(Infinity)
console.log(arrDepth)
//console.log(res2)
res2.forEach(function(el){
    console.log (el)
})

var arr3 = ['cat','dog','sharp']
console.log(arr3.includes('dog'))
console.log(arr3.indexOf('dog',2))
