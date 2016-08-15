//API module
'use strict';

var express = require("express");

//Router to prefix api/ to routes
var router =  express.Router();

//API Routes:
// app.get('/api/todos',function(req,res){
//   // res.send({todos:[]});
//   res.json({todos:[]});
// });
router.get('/todos',function(req,res){
  res.json({todos:[]});
});

//TODO: POST route to create new todos

//TODO: PUT route to update existing todos

//TODO: DELETE route to delete entries

//Export router
module.exports = router;
