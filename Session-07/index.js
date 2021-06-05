function func(param1,param2){
    console.log(this.firstName, this.lastName)
    console.log(param1 , param2)
}
var firstName = 'Amirhossein'
var lastName = 'Olyanasab'

var sepideh = {
    firstName : 'Sepideh',
    lastName : 'Olyanasab'
}
func()
func.call(sepideh,'nurse','1366')
func.apply(sepideh,['Tehran','Iran'])
var newFunc = func.bind(sepideh,'Gucci','5')
newFunc()
