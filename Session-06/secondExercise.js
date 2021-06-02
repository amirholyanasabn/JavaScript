var person = {
    firstName : 'Amirhossein',
    lastName : 'Olyanasab',
    friends : ['Sepiodeh','Vana','Gucci','Bita']
}
function getFullName(obj){
    return obj.firstName+ ' '+ obj.lastName
}
console.log(getFullName(person))