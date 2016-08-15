"use strict";

var express = require("express");

//Create an instance of the express server for middleware
//to configure routes and start the server
var app = express();

//Configure express to serve static files from the public folder
app.use("/",express.static("public"));

//Configure app to listen for requests on port 3000
app.listen(3000, function(){
  console.log("Serving on port 3000");
});
