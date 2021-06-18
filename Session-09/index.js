var arr = [1, 2, 3, 1, 1, 1]

var res = arr.filter(function(el){
    console.log(el)
    return arr.indexOf(el)
})

console.log(res)