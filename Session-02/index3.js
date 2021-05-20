var gucci = {
    name : 'Gucci',
    age : 5 ,
    owner : {
        name : 'Sepideh',
        family : 'Olyanasab',
        familyInfo : {
            fatherName : 'Majid'
        }
    },
    color : 'Brown'
}
var peropertyName = 'owner'
console.log(gucci.owner)
console.log(gucci.owner.name)
console.log(gucci.owner.familyInfo.fatherName)
console.log(gucci['owner'].familyInfo.fatherName)
console.log(Object.keys(gucci))
var mobile = {
    model : undefined,
    company : undefined,
    os : undefined
}
console.log(mobile)
console.log(mobile.company)

var book = {
    name : "Head First Of JS",
    'category' : "Developer",
    "price" : 10000
}
console.log(book)
console.log(book.name)
console.log(typeof(book))

//Array
var freinds = ['Sepideh','Vana','Gucci','Bita','Ali','Danial']
console.log(typeof(freinds))
console.log(freinds)
console.log(freinds.length)
console.log(freinds[4])

var data = ['Amirhossein',34,true,{family : "Olyanasab",nationality : "Iranian"},["Java","JS"]]
console.log(data)
console.log(typeof(data))
console.log(data[3].family)

//Last Index of Array
console.log(data[data.length-1])

