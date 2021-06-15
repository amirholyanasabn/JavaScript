var arr = [2, 3, 9, 6]
var result = 0
arr.forEach(function(el){
    result += el
})
console.log('sum with forEach :',result)


var result1 =arr.reduce(function(ac,el){
  return  ac += el
})
console.log('sum with resuce', result1)

var arr1 = [1, 2, 3, 4]
var sum = arr1.reduceRight(function(acc,el){
    return acc + el
},10) //default value is 10
console.log(sum)

var arr2 =['a','b','c']
var normalResult = arr2.reduce(function(acc,el){
    return acc + el
})
console.log(normalResult)

var rightToLeftResult = arr2.reduceRight((acc,el)=> acc+el)
console.log(rightToLeftResult)