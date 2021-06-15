var str1 = 'hello'
var str2 = "hello"
var str3 = `hello`
var str4 = new String('hello')

console.log(str3 ===str4)
console.log(str3 == str4)

var lenOfStr1 = str1.length
console.log(lenOfStr1)

console.log(str2.charAt(4))
console.log(str3.charCodeAt(1))

var name = 'Amirhossein'
var family = 'Olyanasab'
//var fullName = name.concat(' ',family)
console.log(name.concat(' ',family))
console.log(name.includes(family))
console.log(family.includes('nasab'))
console.log(family.includes('narab',6))
var text = "Ich bin Amirhossein und ich müss nach Denmark gehen"
console.log(text.indexOf('nach',5))
console.log(text.indexOf('amir'))
console.log(text.lastIndexOf('Ich'))
console.log(text.search('müss'))
console.log(text.startsWith('I'))
console.log(text.startsWith('b',4))
console.log(text.endsWith('k'))
var txt = 'Hi'
console.log(txt.padEnd(3,'!'))
console.log(txt.padStart(4,'-'))
