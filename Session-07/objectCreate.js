var poroto ={
    name : 'Amir',
    family : 'Olyanasab',
    getFullName : function(){
        return this.name+' '+this.family
    }
}
var obj = Object.create(poroto)
console.log(obj.name)
console.log(obj.family)
console.log(obj.getFullName())
console.log('************************')
obj.name = 'Gucci'
obj.family = 'Olyanasab'
console.log(obj.name)
console.log(obj.family)
console.log(obj.getFullName())


var obj1 = Object.create(null)
console.log(obj1)