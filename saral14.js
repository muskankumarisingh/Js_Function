function check_numbers(num1,num2){
    if(num1%2 ===0 && num2%2===0){
        console.log("Both are Even");
        console.log("-------------");
    }
    else{
        console.log("Both are not Even");
        console.log("-------------");
    }
}
  
function check_numbers_list(list1,list2){
    for(var i=0;i<6;i++){
        check_numbers(list1[i],list2[i]);
    }
}
check_numbers_list( [2, 6, 18, 10, 3, 75],[6, 19, 24, 12, 3, 87]);