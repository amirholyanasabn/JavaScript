
function range(firstNumber, secondNumber){
    var len = secondNumber - firstNumber
    var arr = []
    for(var i = 0; i<=len ; i++){
       arr[i] = firstNumber;
       firstNumber++;
    }
    return arr
}

console.log(range(3,7))
console.log(range(5,10))