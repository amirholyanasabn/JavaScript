// var n = 3
// var func = function (n) {
//     return !(n>1)?1:arguments.callee(n-1)*n
// }
// console.log(func(n))
(function (){   // IIFE
    console.log('Hi')
})();

function func(a){
    return function(b){
        return function (c){
            return a+b+c;
        }
    }
}
var func1 = func(2)
var func2 = func1(3)
console.log((func2(10)))