'use strict';

var mongoose = require('mongoose');
//Create a connnection to the db
mongoose.connect('mongodb://localhost/mean-todo',function(err){
  if(err) {
    console.log("There was an error connecting to MongoDB");
  } else {
    console.log("The connection the MongoDB was successful");
  }
});
