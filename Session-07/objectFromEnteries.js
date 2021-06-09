var arr = [
['name','Gucci'],
['family','Olyanasab']
]

var obj = Object.fromEntries(arr)
console.log(obj)

var keyOfObject = Object.keys(obj)
console.log(keyOfObject)

var valueOfObjec = Object.values(obj)
for(var value of valueOfObjec){
    console.log(value)
}

Object.freeze(obj)
obj.name = 'Amir'
console.log(obj.name) // log 'Gucci'
obj.age = 5
console.log(obj)

console.log(Object.isFrozen(obj))