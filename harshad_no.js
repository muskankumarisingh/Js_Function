/*var readlineSync=require("readline-sync");
var num=readlineSync.questionInt("Enter the number :")
var sum=0;
var i=num;
function harshad(num){
    while(num>0){
        rem=num%10
        sum=sum+rem
        num=Math.floor(num/10)
    }
if (i%sum==0){
    console.log(i,"is a harshad number")
}
else{
    console.log(i,"is not a harshad number")
}
}
harshad(num)*/


var readlineSync=require("readline-sync");
var num=readlineSync.questionInt("Enter the number :")
var sum=0;
var i=num;
(function harshad(num){
    while(num>0){
        rem=num%10
        sum=sum+rem
        num=Math.floor(num/10)
    }
if (i%sum==0){
    console.log(i,"is a harshad number")
}
else{
    console.log(i,"is not a harshad number")
}
})(num)