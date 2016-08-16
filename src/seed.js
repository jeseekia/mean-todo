'use strict';

var Todo = require("./models/todo.js");

var todos = [
  'Update resume',
  'Get weed killer',
  'Redo DetroitIpsum.com'
];

todos.forEach(function(todo,index){
  Todo.find({'name':todo},function(err,todos){
    if(!err && !todos.length){
      Todo.create({completed: false, name: todo});
    }
  });
});
