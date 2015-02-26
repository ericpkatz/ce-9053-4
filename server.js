var fizzBuzz = require("ek_fb");
var fs = require("fs");
var http = require("http");
var Mustache = require("mustache");

http.createServer(function(req, res){
   var count = parseInt(req.url.substr(1));
    var fizzBuzzArray = fizzBuzz.generate(count);
    fs.readFile("index.html", function(err, data){
        if(err)
            res.end(err);
        else{
            var model = {
               fizzBuzzArray : fizzBuzzArray,
               title: "Fizz Buzz " + count
            }
            var output = Mustache.render(data.toString(), model);
            //console.log(output);
            res.end(output);
        }
        
    });
}).listen(process.env.PORT);
