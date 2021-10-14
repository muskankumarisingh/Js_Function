/*function isGreaterThan20(num){
    if(num>20){
    return true
    }
}
function students(list_of_marks){
    count=0
    for(var i of list_of_marks){
    var result= isGreaterThan20(i)
    if (result === true){
    count++
    }
}
console.log(count);
}
students([21,25,19,25,33,54])*/

//function name

var prime_ch = function(num ){
    if (num%2==0){
        return "even"
    }
    else{
        return "odd"
    }
}
var readlineSync = require("readline-sync");
var user = readlineSync.questionInt("enter any num=");
console.log(prime_ch(user));
// Anonymous


(function prime(num){
    if (num%2==0){
        console.log("even");
    }
    else{
        console.log( "odd");
    }

})(user);