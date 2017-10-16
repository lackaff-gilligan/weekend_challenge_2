var express = require('express');
var router = express.Router();
// bring in doCalculation.js module
var calculateThis = require('./../modules/doCalculation.js');

//will be the current calculation's answer
var answer;

//stores the calculations in string form
var history = [];

//POST route
router.post('/', function(req, res){
    console.log('req.body:', req.body);
    var strMathObj = req.body;
    //just the string of math 
    var strOfMath = strMathObj.problem;
    console.log('strOfMath:', strOfMath);
    //use the function from doCalculation.js module
    answer = calculateThis(strOfMath);
    console.log('answer:', answer);
    //store the calculation
    history.push(strOfMath + ' = ' + answer);
    console.log('history:', history);
    res.sendStatus(201);
  });
  
  //GET route
  router.get('/', function(req, res){
    res.send({return: answer});
  })

  //GET route
  router.get('/history', function(req, res){
    res.send(history);
  })



module.exports = router;