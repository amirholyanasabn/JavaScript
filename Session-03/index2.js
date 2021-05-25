var obj1 = {
    a:5,
    b:{
        c:6
    }
}
var obj2 = {
    a:5,
    b:{
        c:6
    }
}
console.log(obj1 == obj2)
var obj3 = obj1
console.log(obj1 == obj3)
console.log(obj1.a == obj2.a)
console.log(obj1 != obj2)
console.log(Boolean(0))
console.log(Boolean(0n))
console.log(Boolean(""))
console.log(Boolean(undefined))
console.log(Boolean(null))
console.log(Boolean(NaN))
console.log('cat' && 'dog')