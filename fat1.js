/*let a = 20;
let b = 30;
const sum = () =>{return a+b}
console.log(sum());*/


/*let a = 20;
let b = 30;
const sum = () => a+b
console.log(sum());*/


/*let a = 20;
const sum = (b) => a+b
console.log(sum(40));*/



/*var readlinesync=require("readline-sync");
var user=readlinesync.questionInt("enter the number :")
perfect=(num) =>{
    var sum = 0;
    for(var i = 0;i<num;i++){
        if (num%i==0){
            sum=sum+i
        }
}
if (num==sum){
    console.log(num,"is a perfect number")
}
else{
    console.log(num,"is not a perfect number")
}
}
perfect(user)*/



var harshad = (num_) => {
    var i = num_;
    while (num_>0){
        var sum = 0;
        var rem = num%10;
        sum += rem
        num_ /= 10
    }
if (i%sum == 0){
    return "Harshad"
}
else{
    return "Not a Harshad"
}
}
console.log(harshad(num));


