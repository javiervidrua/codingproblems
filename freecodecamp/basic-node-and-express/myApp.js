var express = require('express');
var app = express();
// Body parser: Previous declaration in package.json
var bodyParser = require('body-parser');

console.log("Hello World");

// Middleware: Body parser
app.use(bodyParser.urlencoded({extended: false}));

// Middleware: Simple logger
app.use(function(req, res, next){
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});

// Set the express.static() middleware for the /public route
app.use("/public", express.static(__dirname + "/public"));

// Set what happens for requests heading to /
app.get("/", function(req, res){
  //res.send("Hello Express");
  res.sendFile(__dirname + "/views/index.html");
});

// Set what happens for requests heading to /json
app.get("/json", function(req, res){
  if(process.env.MESSAGE_STYLE == "uppercase")
    res.json({"message": "HELLO JSON"});
  else
    res.json({"message": "Hello json"});
});

// Middleware chaining
app.get("/now", function(req, res, next){
  req.time=new Date().toString();
  next();
}, function(req, res){
  res.json({"time": req.time});
});

// Route parameters: 
app.get("/:word/echo", function(req, res){
  res.json({"echo": req.params.word});
})

// Query parameters
app.get("/name", function(req, res){
  res.json({"name": `${req.query.first} ${req.query.last}`});
})

// Body parameters
app.post("/name", function(req, res){
  res.json({"name": `${req.body.first} ${req.body.last}`})
})

module.exports = app;
