function greetWorld() {
    var greet = "Hello World!";
    console.log(greet);
   }
    
   greetWorld(); // Outputs: Hello World!
    
   console.log(greet); // Uncaught ReferenceError: greet is not defined
    
//greet is a local scope so its work only inside the function body 