var obj1 ={
    a : 1,
    b : 2,
    c :{
        d : 4
    }
} 

obj2 = JSON.parse(JSON.stringify(obj1))
// json = JSON.stringify(obj1)

// obj2 = JSON.parse(json)

console.log('obj1 => ',obj1)
console.log('obj2 => ',obj2)
console.log(typeof obj1)
console.log(typeof obj2)
console.log('----------------------')
obj1.a = 10
console.log('obj1.a =>',obj1.a)
console.log('obj2.a =>',obj2.a)
console.log('--------------------')
obj2.c.d = 40
console.log('obj1.c.d =>',obj1.c.d)
console.log('obj2.c.d =>',obj2.c.d)