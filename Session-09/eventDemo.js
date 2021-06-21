function sayHello(){
    alert('Welcome to JavaScript')
}

var element = document.querySelector('#my-button')
element.addEventListener('click',function(event){
    alert('Hi JavaScript')
})

var myInput = document.querySelector('#my-input')
myInput.addEventListener('keydown',function(event){
    console.log('press')
})