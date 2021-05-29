var person = {
    name : 'Amirhossein',
    family : 'Olyanasab',
    age : 34
}

for (var key in person){
        console.log(person[key])
}

console.log('name' in person)