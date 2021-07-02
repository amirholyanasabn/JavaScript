function Person(firstName, lastName, age, family, gender){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.family = {
        father : family
    }
    this.gender = gender
}

var amir = new Person('amir','olyanasab',35,'majid',true)
console.log(amir)
console.log(amir.family)