/*var module = (function (){
    var a=10;
    var b=20;
    return a+b;
})()
console.log(module)*/

//self_invoke return

var fun=(function(){
    var name="muskan"
    return name;
}())
console.log(fun)
