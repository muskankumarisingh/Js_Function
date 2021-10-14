/*var even_odd = function(num ){
    if (num%2==0){
        return "even"
    }
    else{
        return "odd"
    }
}
var readlineSync = require("readline-sync");
var user = readlineSync.questionInt("enter any num=");
console.log(even_odd(user));*/


var add_num_list = function(array1,array2){
    var i = 0;
    while (i<array1.length){
        var j = 0;
        while (j<array2.length){
            if (i == j){
                var sum = array1[i]+array2[i]      
            }
            j++
        }
        i++
        console.log(sum);
        console.log("---------------------------");
}
}
add_num_list([50, 60, 10] ,[10, 20, 13]);

// anonymous function





