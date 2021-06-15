var arr =['a', 'b', 'c', 'd']
var newArr = arr.slice(1,3)
console.log('arr : ',arr)
console.log('new arr : ',newArr)

var arr1 = arr.splice(1,2,'A')
console.log(arr)
console.log(arr1)

var arr2 = [12 , 13, 90, 3, 2, 85, 65, 4, 25]
arr2.sort()
console.log(arr2)
arr2.sort(function(a,b){
    return a - b
})
console.log(arr2)


var arr3 = ['narab','olyanasab','hossein','amir']
console.log(arr3)
arr3.reverse()
console.log(arr3)