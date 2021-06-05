var number = {
    amir : 10,
    sepideh :20
}

var newNum = Object.assign({} , number)
console.log(number === newNum)
console.log(newNum.amir)
number.amir = 19
console.log('first obj => ',number.amir)
console.log('second obj => ',newNum.amir)