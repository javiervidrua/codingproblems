const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

app.use(cors())
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});


// Bodyparser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

// Mongoose stuff
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
const { Schema } = mongoose;
// Create the Schema
const UserSchema = new Schema({
  username: String,
  log: [{
    description: String,
    duration: Number,
    date: Date,
  }],
});
// Create the model from the Schema
const User = mongoose.model('User', UserSchema);

// Create user
app.post("/api/users", (req, res)=>{
  // Create a document
  const newUser = new User();
  newUser.username = req.body.username;

  // Check if username already exists
  User.count({"username": newUser.username}, (err, count)=>{
    if(err)
      return res.json({"error": err});
    if(count > 0){
      User.findOne({"username": newUser.username}, (err, user)=>{
        if(err)
          return res.json({"error": err});
        return res.json({"error": "username already exists with _id: " + user._id});
      });
    }

    else{
      // Save the document
      newUser.save((err, data)=>{
        if(err)
          return res.json({"error": err});
        res.json({
          "_id": newUser._id,
          "username": newUser.username,
        });
      });
    }
  });
})

// Get the list of users
app.get("/api/users", (req, res)=>{
  User.find({}, (err, users)=>{
    res.send(users);
  })
});

// Add exercises to the users
app.post("/api/users/:_id/exercises", (req, res)=>{
  let date = new Date().toDateString();
  if(req.body.date){
    date = new Date(req.body.date).toDateString();
  }
  User.findByIdAndUpdate(req.params._id, 
  {
    $push: {
      "log": [{
        "description": req.body.description,
        "duration": req.body.duration,
        "date": date,
      }]
    }
  },
  { new: true},
  (err, updatedUser)=>{
    if(err)
      return res.json({"error": err});
    res.json({
      "_id": updatedUser._id,
      "username": updatedUser.username,
      "date": date,
      "duration": parseInt(req.body.duration), // Parse to int so freecodecamp does not get crazy with the tests ( guess how I found out :C )
      "description": req.body.description,
    });
  });
});

// Get the full exercise logs of any user
app.get("/api/users/:_id/logs", (req, res)=>{
  User.findById(req.params._id, (err, user)=>{
    let returnedUser = {
      "_id": user._id,
      "username": user.username,
      "count": user.log.length,
      "log": [],
    };
    
    // Check for from, to and limit query parameters
    let counter=0, from=new Date(0), to=new Date(), limit=99;
    if(req.query.from)
      from = new Date(req.query.from);
    if(req.query.to)
      to = new Date(req.query.to);
    if(req.query.limit)
      limit = parseInt(req.query.limit);
    // Filter by the parameters
    for(let i=0; i<user.log.length; i++){
      if(user.log[i].date>from && user.log[i].date<to && counter<limit){
        returnedUser.log.push({
          // Parse the Date to string and the duration to int
          "date": user.log[i].date.toDateString(),
          "description": user.log[i].description,
          "duration": parseInt(user.log[i].duration),
        });
        counter++;
      }
    }

    res.json(returnedUser);
    /*res.json({
      "_id": user._id,
      "username": user.username,
      "count": user.log.length,
      "log": user.log,
    });*/
  });
});



const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
