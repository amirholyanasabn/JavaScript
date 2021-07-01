
function sum(a, b = 5){
    alert(a+b)
}
function sumAlternativeDefult(a,b){
    if (b === undefined){
        b = 5
    }
    alert(a+b)
}