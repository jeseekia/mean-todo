//API module
'use strict';

var express = require("express");

//Router to prefix api/ to routes
var router =  express.Router();

//Get mock todos
//var todosData = require('../../mock/todos.json');

//Use MongoDB Todo model
var Todo = require('../models/todo');

//API Routes:
// app.get('/api/todos',function(req,res){
//   // res.send({todos:[]});
//   res.json({todos:[]});
// });
router.get('/todos',function(req,res){
  //
  Todo.find({},function(err,todosData){
    if(err) {
      return res.status(500).json({message:err.message});
    } else {
        res.json({todos: todosData});
    }

  });
});

//TODO: POST route to create new todos

//TODO: PUT route to update existing todos

//TODO: DELETE route to delete entries

//Export router
module.exports = router;
