// document.getElementById('first').innerHTML = 'خوش آمدید'
var how = prompt("Who's are you ?")
if (how === 'cancle'){
    alert('cancel')
}else if (how === 'other'){
    alert('Idon \'t know')
}else {
    var password = prompt('Password')
    switch (password){
        case 'cancel' :
            alert('cancel')
            break
        case 'other':
            alert('wrong password')
            break
        case 'TheMaster' :
            alert('welcome')
            break
        default:
            alert('You are crazy')
            break
    }
}
