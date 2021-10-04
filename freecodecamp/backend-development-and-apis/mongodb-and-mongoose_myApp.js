require('dotenv').config();

// MongoDB Atlas connection
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

// Mongoose stuff
const { Schema } = mongoose;
// Create the Schema
const PersonSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: Number,
  favoriteFoods: [String]
});
// Create the model from the Schema
const Person = mongoose.model('Person', PersonSchema);
// This was here before I opened the editor
//let Person;


const createAndSavePerson = (done) => {
  // Create a document
  const newPerson = new Person();
  newPerson.name = "Javier";
  newPerson.age = 22;
  newPerson.favoriteFoods = ["Tostn", "Lasagna"];

  // Save the document
  newPerson.save((err, data)=>{
    if(err)
      done(err);
    else
      done(null, data);
  })
  //done(null /*, data*/);
  // done(err) // For error handling
};

const createManyPeople = (arrayOfPeople, done)=>{
  Person.create(arrayOfPeople, (err, data)=>{
    if(err)
      done(err);
    else
      done(null, data);
  });
  //done(null /*, data*/);
};

const findPeopleByName = (personName, done) => {
  Person.find({"name": personName}, function(err, people){
    if(err)
      done(err);
    else
      done(null, people);
  })
  //done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods: [food]}, function(err, person){
    if(err)
      done(err);
    else
      done(null, person);
  })
  //done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  Person.findById(personId, function(err, person){
    if(err)
      done(err);
    else
      done(null, person);
  })
  //done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  // Now using promises instead of callbacks, to practise
  Person.findById(personId).then((person)=>{
    person.favoriteFoods.push(foodToAdd);
    person.save((err, newPerson)=>{
      if(err)
        done(err);
      else
        done(null, newPerson);
    })
  }).catch((err)=>{
    done(err);
  });
  //done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  // 3rd argument: { new: true } so it returns the modified object (the new one)
  Person.findOneAndUpdate({"name": personName}, {$set: {"age": ageToSet}}, { new: true}, (err, newPerson)=>{
    if(err)
      done(err);
    else
      done(null, newPerson);
  });
  //done(null /*, data*/);
};

const removeById = (personId, done) => {
  Person.findByIdAndRemove(personId, (err, deletedPerson)=>{
    if(err)
      done(err);
    else
      done(null, deletedPerson);
  })
  //done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  Person.remove({"name": nameToRemove}, (err, removedPeople)=>{
    if(err)
      done(err);
    else
      done(null, removedPeople);
  })
  //done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  // Find people that have foodToSearch in the favoriteFoods array of String
  // Use $all (generic) or $in
  let query = Person.find({"favoriteFoods": {$in: [foodToSearch]}});
  // Sort by name
  query.sort({"name": 'asc'});
  // Limit to two results
  query.limit(2);
  // Hide their age
  query.select('-age');
  // Execute the query
  query.exec((err, people)=>{
    if(err)
      done(err);
    else
      done(null, people);
  });
  //done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;

