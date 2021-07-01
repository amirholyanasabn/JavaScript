var date = new Date();
var day = date.getDay();
switch (day){
    case 1 :
        document.getElementById('sample-output').innerHTML = 'monday';
        break
    case 2 :
        document.getElementById('sample-output').innerHTML = 'Tuesday';
        break
    case 3 :
        document.getElementById('sample-output').innerHTML = 'Wednesday';
        break
    case 4 :
        document.getElementById('sample-output').innerHTML = 'Thursday';
        break
    case 5:
        document.getElementById('sample-output').innerHTML = ' Friday';
        break;
    case 6 :
        document.getElementById('sample-output').innerHTML = 'Saturday';
        break
    case 7 :
        document.getElementById('sample-output').innerHTML = 'Sunday';
        break
    default:
        break
}

var hour = date.getHours()
var min = date.getMinutes()
var milliseconds = date.getMilliseconds()
console.log(milliseconds)
console.log(min)
if (hour >= 12){
    var newHour = (hour-12).toString()
    newHour = newHour +' PM : ' + min + ' : '+milliseconds
    document.getElementById('current-time').innerHTML = newHour

}
function printPage(){
    window.print()
}
var day = date.getDay()
var month = date.getMonth()
var year = date.getFullYear()
console.log(date.getDay())
console.log(month)
console.log(year)
if (month <10 || day <10){
    month = '0'+month
    day = '0'+day
    console.log(month)
    console.log(typeof month)
    var fullTime = month +'/'+day+'/'+year;
    document.getElementById('callNow').innerHTML = fullTime;
}else {
    var fullTime = month +'/'+day+'/'+year;
    document.getElementById('callNow').innerHTML = fullTime;
}


