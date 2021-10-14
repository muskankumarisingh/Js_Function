var license_checker=function(speed){
    var reply="";
    if(speed<70){
        reply="ok";
    }
    else{
        var i=70;
        var point=1;
        while (i<speed){
            if(speed>70){
                reply=point
            }
            if (point>12){
                reply="License suspend";
            }
            i+=5
            point+=1
        }
    }
    return reply
}
var readlineSync = require("readline-sync");
var user = readlineSync.questionInt("enter any num=");
console.log(license_checker(user));
