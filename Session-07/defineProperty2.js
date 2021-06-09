var person ={
    name : 'John',
    family : 'Doe'
}

Object.defineProperty(person,'fullName',{
    set : function(value){
        var arr = value.split(' ')
        this.name = arr[0]
        this.family = arr[1]
    },
    get : function(){
        return this.name +' '+this.family
    }
})

console.log(person.fullName)
person.fullName = 'Amirhossein Olyanasab'
console.log(person.name)
console.log(person.family)