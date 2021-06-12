    var arr1 = [10,20,30,40]
    var arr2 = new Array(10,20,30,40)

    console.log('arr1 => ',arr1)
    console.log('arr2 => ',arr2)

    var arr3 = [10]
    var arr4 = new Array(10)

    console.log('arr3 => ',arr3)
    console.log('arr4 => ',arr4)

    var arr5 = new Array(20)
    console.log('arr5 length = >',arr5.length)
    
    var arr6 = [1,2,3,4]
    console.log('arr6 => ',arr6)
    arr6.length = 2
    console.log('arr6 => ',arr6)

    var arr7 = [1,2,'a','1a']
    console.log('arr7 toString => ',arr7.toString())