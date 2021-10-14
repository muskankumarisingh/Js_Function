function isGreaterthan20(array){
    var count=0;
    var index=0;
    while (index<array.length){
        if ((array[index])>20){
            count++;
        }
        index++;
    }
    return (count);
}
