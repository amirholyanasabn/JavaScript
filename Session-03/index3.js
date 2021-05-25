var obj = {
    firstName : 'Amiehossein',
    lastName : 'Olyanasab',
    //fullName : 'Amirhossein Olyanasab'
}

var myName = obj.fullName || obj.firstName + ' '+ obj.lastName

console.log('My name : ',myName)


console.log('dog' || 'cat')