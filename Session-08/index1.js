var arr1 = [1,2,3]
var arr2 =Array.from(arr1,function(el){
    return el*2
})
console.log('arr1 => ',arr1)
console.log('arr2 => ',arr2)

// var name = 'Amir'
var arr3 = Array.from('name')
console.log(arr3)


var arr4 = Array.from({length:3,1:'a',2:'b',0:'none'})
console.log(arr4)
// var arr = [1,2,3]
// var arr1 = Array.from(arr)

// console.log(arr)
// console.log(arr1)
// console.log(arr === arr1)