var num = 1
while(num <= 10){
    console.log(num,'Gucci')
    num++
}

for(var i=0 ; i<5;i++){
    if (i % 2) {
        console.log(i)
    }else
    continue
}

var result = 0;
for(var i =0 ; i < 10 ; i++){
    //console.log(result)
    result += i
    console.log(result,i)
    if (result >= 20) {
        break
    }
}
console.log(result,i)