//Dependencies
var express =require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mangoose = require("mangoose");
//requiring our notes and article models
var Note = require("./models/Note.js");
var Article = require("./models/Article.js");
// dependencies for scraping the web page
var request = require("request");
var cheerio = require("cheerio");
// set mongoose to leverage built in JavaScript ES6 Promises
mangoose.Promise = Promise;
// Initialize Express
var app = express();
app.use(logger("dev"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static("public"));
//Database configration with the mongoose
mongoose.connect("mongodb://localhost/scramblednewsmongoose");
var db = mongoose.connect;
//error for mongoose
db.on("error", function(error){
  console.log("Mongoose Error: ", error);
});
// once logged in to the db through mongoose,  log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});
// Routes
// requesting the web page to scrape
app.get("/scrape", function(req, res) {
  // grab the body of html with request
request("http://www.usatoday.com", function(error, response, http){
  // assigning the cheerio to $
  var $ = cheerio.load(http);
  // creating empty variable called result
  var result  = [];
  // go to each
  $("p4.headline").each(function(i, element){
    // save the text of the element to the tittle
    var tittle = $(this).text();
    var link = $(element
    });
});
