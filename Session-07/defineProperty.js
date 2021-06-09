var person = {
    name : 'John',
    family : 'Doe'
}

Object.defineProperty(person,'age',{
    value : 20,
    writable : true,
    configurable : true,
    enumerable : true,
    // get : function(){
    //     return 'Hallo'
    // }
})



for (var key in person) {
    console.log(key)
}

console.log('--------------------------')

console.log('John age is => ',person.age)

person.age = 30
console.log('John age is => ',person.age)

delete person.age
console.log('----------------------------')
for(var key in person){
    console.log(key)
}