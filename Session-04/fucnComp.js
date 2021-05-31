// function sum(a=5, b=2, c=0, d=0){
//     var result = 0
//     for(var item of arguments){
//         result += item
//     }
//     return result
// }
// console.log(sum(2,5))
// console.log(sum(2,5,3,6))
// console.log(sum(1,2,3,4,5))

function sum(){
    var result = 0
    for(var item of arguments){
        result += item
    }
    return result
}
console.log(sum(2,5))
console.log(sum(2,5,3,6))
console.log(sum(1,2,3,4,5))