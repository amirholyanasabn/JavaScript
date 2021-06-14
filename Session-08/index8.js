var names = ['amir','ali','sepideh','gucci',1124,true]
names.forEach(el=> console.log (el))
// names.forEach(function(el){
//     console.log(el)
// })


console.log(names.includes('amir'))

console.log(names.indexOf(true))
console.log(names.indexOf('jeff'))


var result = names.join('-')
console.log(result)


var nameIterator = names.keys()
for(var item of nameIterator){
    console.log(item)
}

var arr = [1,2,3,4]
var resArr = arr.map(function(el){
    return el * 2
})
console.log(arr)
console.log(resArr)