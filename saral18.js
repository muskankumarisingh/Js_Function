function showNumbers(limit){
    var i=0;
    while(i<=limit){
        if(i%2==0){
            console.log(i,"-even")
        }
        else{
            console.log(i,"-odd")
        }
        i++
    }
}
showNumbers(3)