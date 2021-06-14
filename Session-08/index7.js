var person = [
    {name : 'ali' , family : 'Mousavi' , age : 31},
    {name : 'Amirhossein' ,family : 'Olyanasab' , age : 34},
    {name : 'Gucci' , family : 'Olyanasab' , age : 5}
]

var resultPerson = person.map(function(el){
    return el.name
})


console.log(resultPerson)
var result = person.filter(function(el,i){
    return el.age > 30
})

var search = person.find(function(el){
    return el.age === 34
})

var searchIndex = person.findIndex(function(el){
    return el.name === 'Sepideh'
})

var searchIndexSecond = person.findIndex(el=> el.name === 'Gucci')

var resultSome = person.some(function(el){
    return el.age ===4
})

var arr = [12,34,55,[5,7],[7,[12,33]]]
var resFlat = arr.flat(Infinity)
console.log(resFlat)
console.log(result)
console.log(search)
console.log(searchIndex)
console.log(searchIndexSecond)
console.log(resultSome)
// var arr = [5,1,9,2,6,4]

// var result = arr.find(function(el,i){
//     return el>5
// })
// console.log(arr)
// console.log(result)