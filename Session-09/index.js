document.body.style.backgroundColor = 'yellow'
var h1 = document.body.children[0]
console.log(h1)

h1.style.backgroundColor = 'blue'
h1.style.padding = '20px'
h1.style.margin = '20px'
h1.textContent = 'جاوا اسکریپت'
// var title = document.head.children[3]
// title.textContent = 'JavaScript'
document.head.children[3].textContent = 'جاوا اسکریپت'
var para = document.createElement('p')
para.textContent = 'Welcom to JavaScripe'