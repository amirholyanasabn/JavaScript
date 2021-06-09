var person = {
    name : 'Amir',
    family : 'Olyanasab',
    age : 34
}
var names = Object.entries(person)
for(var item of names){
    console.log(item)
}