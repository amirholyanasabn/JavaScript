var person = {
    firstName : 'Amir',
    lastName : 'Olyanasab',
    getFullName : function (){
        return this.firstName + ' ' +this.lastName
    }
}
console.log(person)
console.log(person.getFullName())


function Person(firstName,lastName,age,gender,father){
    this.firstName = firstName
    this.lastName = lastName
    this.fullName = firstName + ' ' +lastName
    this.age = age
    this.gender = gender ? 'male' : 'female'
    this.family = {
        father : father
    }
}


var gucciolyanasab = new Person('gucci','olyanasab','5',false,'amirhossein')
console.log(gucciolyanasab)
console.log(gucciolyanasab.firstName)
console.log(gucciolyanasab.fullName)

var amirhosseinOlyanasab = new Person('Amirhossein','Olyanasab',31,true,'Majid')
console.log(amirhosseinOlyanasab.family.father)
console.log(amirhosseinOlyanasab.gender)

var sepideholyanasab = new Person('Sepideh','Olyanasab',31,false,'Majid')
console.log(sepideholyanasab.firstName)


// var amirhosseinOlyanasab = {
//     firstName : 'Amirhossein',
//     lastName : 'Olyanasab',
//     age : 34,
//     gender : true,
//     family : {
//         father : 'Majid'
//     }
// }

// var gucciolyanasab = {
//     firstName : 'Gucci',
//     lastName : 'Olyanasab',
//     age : 5,
//     gender : false,
//     family:{
//         father : 'Amirhossein'
//     }
// }

// var sepideholyanasab = {
//     firstName : 'Sepideh',
//     lastName : 'Olyanasab',
//     age : 33,
//     gender : false,
//     family :{
//         father : 'Majid'
//     }
// }