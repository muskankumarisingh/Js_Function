function fun1() {
    function fun2() {
        return "From function fun2";
    }
    return fun2();
}
console.log(fun1())