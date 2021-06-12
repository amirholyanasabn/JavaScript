var array1 = [1,2,3,4,5]
var array2 = [5,6,7,8]
var array3 = array1.concat(array2)
console.log(array3)


array1.copyWithin(0,3,4)
console.log(array1)  //[4,2,3,4,5]
var arr = [1,2,3]
arr.fill(4)
console.log(arr)
var arr1 = [1,2,3]
console.log(arr1.fill(3,1)) //[1,3,3]

var arr2 = [1,2,3]
console.log(arr2.fill(4,-3,-1)) //[4,4,3]