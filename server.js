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
request("http://www.usatoday.com", function(error, response, html){
  // loading in to the cheerio and save to $
  var $ = cheerio.load(html);
  // grab every every h4with in a headline tag
  $("headline h4").each(function(i, element){
  // creating empty  result object to push the result
  var result  = {};
  // add the text & href of every link, and save them as properties of result object
    result.tittle = $(this).children("a").text();
    result.link = $(this).children("a").attr("href");
    //using article model create a new entry
    var entry = new Article(result);
    //save the entry to the db
    entry.save(function(err, doc) {
      if (err) {
        console.log(err);
      }else{
        console.log(doc);
      }
    });
  });
});
  res.send("Scrape Complete");
});
//get the article scraped from the mongodb
app.get("/articles", function(req, res) {
  //Grab every doc in the articles array
  Article.find({}, function(error, doc) {
    // log any errors
    if (error) {
      console.log(error);
    }else{
      res.json(doc);
    }
  });
});
//grab an article by id
app.get("/articles/:_id", function(req, res);
 // find one that match
 Article.findOne({ "_id", req.params.id})
// populate the notes associated with it
.populate("note")
//check for error and log out result as JSON file
if (error) {
  console.log(error) 
}else{
  res.json(doc);
}
});
});
//creating a new note or replacing an existing note
app.get("/articles/:id", function(req, res) {
  //create a new note and pass the req.body to the entry
  var newNote = new Note(req.body);
  //save the new note to the db
  newNote.save(function(error, doc){
    if (error) {
      console.log(error)
    }else{
      // send the document to the browser
      res.send(doc);
    }
  }):
}
        });
});
//finally listen on the port 3000
app.listen(3000, function() {
  console.log("App runing on port 3000");
});


  

