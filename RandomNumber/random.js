function getRandomNumber(firstValue,secondValue){
    var result = (Math.floor(Math.random()*(secondValue - firstValue)))+firstValue
    return result
}
console.log(getRandomNumber(10,20))
console.log(getRandomNumber(100,200))
console.log(getRandomNumber(1000,2000))


// var defaultFirstValue = document.getElementById('first-number')
// var defualtSecondNumber = document.getElementById('second-number')
// var currentFirstValue = defaultFirstValue.value
// var currentSecondValue = defualtSecondNumber.value

// console.log(currentFirstValue)
// console.log(currentSecondValue)
// var form = document.querySelector('#form-input')
//     form.addEventListener('submit',function(e){
//         e.preventDefault()
//         randonNumber(currentFirstValue , currentSecondValue)
//     })
    
// function randonNumber(one,two){
    
    
//     var result = Math.floor(Math.random() * (two - one))+one
//     document.getElementById('result').innerHTML = result
// };



// var firstNumber = document.getElementById('first-number')
// console.log(firstNumber)
// var secondNumber = document.getElementById('second-number').Value
// console.log(secondNumber)


// var form = document.getElementById('form-input')
// form.addEventListener('submit',function(e){
//     e.preventDefault()
//     console.log(getRandomNumber(firstNumber,secondNumber))
// })

// var getRandomNumber = function(firstInput,secondInput){
//     var result = Math.floor(Math.random() * (secondInput - firstInput))+firstInput
//     return result
// }
// var form = document.querySelector('#form-input')
// var firstNumber =document.querySelector('#first-number')
// var secondNumber = document.querySelector('#second-number')

// form.addEventListener('submit',function(e){

//     e.preventDefault()

//     alert(makeRandomNumber(firstNumber,secondNumber))
// })


// function makeRandomNumber(firstValue,secondValue){
//     // result = document.createElement('h1')
    
//      return Math.floor(Math.random()* (secondValue - firstValue)) + firstValue
// }