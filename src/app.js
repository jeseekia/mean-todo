"use strict";

var express = require("express");
//import api router
var router = require("./api");


//Create an instance of the express server for middleware
//to configure routes and start the server
var app = express();

//Making sure db gets required and run
require('./database');

//Configure express to serve static files from the public folder
app.use("/",express.static("public"));

//Prefix /api to routes
app.use('/api',router);


//Configure app to listen for requests on port 3000
app.listen(3000, function(){
  console.log("Serving on port 3000");
});
