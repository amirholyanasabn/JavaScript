var person = {
    firstName : 'Amirhossein',
    lastName : 'Olyanasab',
    friends : ['Vana','Sepideh','Gucci','Bita','MohammadReza']
}
//first Way
function printFriends(obj){
    var friends = obj.friends
    for(var i=0 ; i<friends.length ; i++){
        console.log(i , friends[i])
    }
} 

printFriends(person)

console.log('----------------')
//Second way


function printFriends(obj){
   var friends = obj.friends
   for (var iterator of friends) {
       console.log(iterator)
   }
}
printFriends(person)
