var express = require('express');
var cors = require('cors');
require('dotenv').config()

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

const fileUpload = require("express-fileupload");
app.use(fileUpload());
app.post("/api/fileanalyse", (req, res)=>{
  //console.log(req.files); // To show the structure of the object
  if(req.files){
    res.json({
      "name": req.files.upfile.name,
      "type": req.files.upfile.mimetype,
      "size": req.files.upfile.size,
    });
  }
});


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
