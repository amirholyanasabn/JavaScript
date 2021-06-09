var person = {
    name : 'John',
    family : 'Doe',
    _age : undefined
}

Object.defineProperty(person,'age',{
    set : function(value){
        this._age =  +(value)
        console.log(typeof this._age)
    },
    get : function(){
        return 'I am '+this._age+' .'
    }
})
console.log(typeof person._age)
person.age = '25'
console.log(person.age)