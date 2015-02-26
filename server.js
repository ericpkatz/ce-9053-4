var fizzBuzz = require("ek_fb");
var foo = require("foo");
var fs = require("fs");
fs.readFile("README.md", function(err, data){
   console.log(data.toString()); 
});


console.log(fs.readFile);
console.log(fizzBuzz);
console.log(foo);
