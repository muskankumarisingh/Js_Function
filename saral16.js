/*function perfect(num){
    var i=0;
    var sum=0;
    while (i<num){
        if (num%i==0){
            sum=sum+i
        i=i+1
    }
}
    if (sum==num){
        console.log("num is a perfect number");
    }
    else{
        console.log("num is not a perfect number");
    }
}
perfect(6);*/

function perfect(num){
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
perfect(6)