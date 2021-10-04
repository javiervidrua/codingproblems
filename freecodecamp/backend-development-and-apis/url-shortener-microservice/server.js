require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const dns = require('dns');
const app = express();

var counter = 0;
var database = {};

// Body-parser
app.use(bodyparser.urlencoded({extended: false}));

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});
// /api/shorturl middleware for url validation
app.post("/api/shorturl", (req, res, next)=>{
  // Regex copied from https://www.geeksforgeeks.org/how-to-validate-url-using-regular-expression-in-javascript/
  var expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
  var regex = new RegExp(expression);

  // Check validity of URL
  if(!req.body.url.match(regex))
    return res.json({"error": "invalid url"});
  else
    next();
});
// /api/shorturl
app.post("/api/shorturl", (req,res)=>{
  // Store the key(short_url) and the value(original_url) in database
  database[++counter]=req.body.url;
  res.json({
    "original_url": req.body.url,
    "short_url": counter,
  });
});
// /api/shorturl/:url
app.get("/api/shorturl/:url", (req, res)=>{
  // Redirect to the original URL
  res.redirect(database[req.params.url]);
});

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
