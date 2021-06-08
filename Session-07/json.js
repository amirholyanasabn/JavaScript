var person = {
    name : 'Ali',
    family : 'Mousavi',
    age : 31
}

json = JSON.stringify(person)
console.log(typeof json)
console.log(json)
objecNew = JSON.parse(json)
console.log(typeof objecNew)
console.log(objecNew)

console.log(person === objecNew)