var request = require("request");
var cheerio = require("cheerio");
describe("home page", function(){
   describe("/3", function(){
       var html;
       var $;
       beforeEach(function(done){
           request("http://localhost:8080/3", function(err, resp, body){
               html = body;
               $ = cheerio.load(body);
               console.log(html);
               done();
           })
       });
       
       it("it should contain Hello World", function(){
           expect(html).toContain("Hello");
       });
       
       it("it should contain 3 items", function(){
           expect($(".list-group li").length).toEqual(3);
       });
       it("first item is 1", function(){
           expect($(".list-group li").first().html().trim()).toEqual("Fizz");
       });
       
   }); 
});