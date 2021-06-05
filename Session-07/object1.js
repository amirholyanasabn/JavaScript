var obj1 = {
    a : 10,
    b : 20,
    c : 30,
    d : 40
}
var obj2 = {
    e : 50,
    f : 60
}
var obj3 ={}
obj3 = Object.assign({},obj1,obj2)
console.log('obj1 : ',obj1)
console.log('obj2 : ',obj2)
console.log('obj3 : ',obj3)

