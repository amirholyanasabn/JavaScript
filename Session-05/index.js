function hello(){
    console.log('Hello JavaScript')
}
hello()
setTimeout(hello,3000)

var timeoutId =setTimeout(function(){
    console.log('Hallo Amirhossein')
},3000)
console.log(timeoutId)

setInterval(function(){
    console.log('Salam')
},1000)