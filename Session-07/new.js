var person = {
    name : 'Amir',
    family : 'Olyanasab'
}

Object.preventExtensions(person)
person.age = 34

for(var item in person){
    console.log(item)
}

console.log(Object.isExtensible(person))