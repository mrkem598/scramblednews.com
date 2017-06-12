// dependencies
var request = require("request");
var cheerio = require("cheerio");
// requesting the web page
request("www.usatoday.com", function(error, response, http){
  // assigning the cheerio to $
  var $ = cheerio.load(http);
  // creating empty variable called result 
  var result  = [];
  // go to each 
  $("p4.tittle).each(function(i, element){
    
    });
});
