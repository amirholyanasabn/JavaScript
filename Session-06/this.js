var obj1 = {
    name : 'Pulsar',
    bike : function(){
        console.log(this.name)
    }
}
var obj2 = {name : 'Gixxer' , bike : obj1.bike} // declaration obj2(Object) and put function obj1.bike in this property
bike() // name of window object
obj1.bike() // name of obj1
obj2.bike() // name of obj2
// console.log(obj1.bike)
// console.log(obj2.bike)