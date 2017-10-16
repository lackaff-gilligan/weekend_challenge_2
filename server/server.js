var express = require('express');
var app = express();
var port = 5000;
//stores the calculations in string form
var history = []

//will be the current calculation's answer
var answer;
// bring in doCalculation.js module
var calculateThis = require('./modules/doCalculation.js');


//express static file serving
app.use(express.static('server/public'));

//use body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));


//POST route
app.post('/calculate', function(req, res){
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
app.get('/calculate', function(req, res){
  res.send({return: answer});
})

app.get('/history', function(req, res){
  res.send(history);
})
  


// start up the server
app.listen(port, function(){
    console.log('listening on port', port);
});