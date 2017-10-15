var express = require('express');
var app = express();
var port = 5000;
//stores the calculations in string form
var history = []
//will be the current calculation's answer
var answer;
var calculateThis = require('./modules/doCalculation.js');


//express static file serving
app.use(express.static('server/public'));

//use body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

//maybe will need to store something here?

//POST route
app.post('/calculate', function(req, res){
  console.log('req.body:', req.body);
  var strMathObj = req.body;
  //just the string of math 
  var strOfMath = strMathObj.problem;
  //store the string math
  history.push(strOfMath);
  console.log('strOfMath:', strOfMath);
  answer = calculateThis(strOfMath);
  console.log('answer:', answer);
 
  res.sendStatus(201);
});

 //put the answer in an object 
//  var ansInObj = {
//   result: answer
// }

//GET route
app.get('/calculate', function(req, res){
  res.send({return: answer});
})




// //POST route '/calculate'
// app.post('/calculate', function(req, res){
//   console.log('req.body:', req.body); //will be mathParts
//   var mathBundle = req.body;
//   calculation = performCalculation(mathBundle);
//   res.sendStatus(201);
// });

// // determine and then perform appropriate calculation
// function performCalculation(obj){
//   var answer; 
//   if(obj.type === 'add'){ 
//   answer = parseInt(obj.first) + parseInt(obj.second);
//   console.log('answer if "add":', answer);
//   } else if(obj.type === 'subtract'){
//     answer = parseInt(obj.first) - parseInt(obj.second);
//     console.log('answer if "subtract":', answer);
//   } else if(obj.type === 'multiply'){
//     answer = parseInt(obj.first) * parseInt(obj.second);
//     console.log('answer if "multiply":', answer);
//   } else if(obj.type === 'divide'){
//     answer = parseInt(obj.first) / parseInt(obj.second);
//     console.log('answer if "divide":', answer);
//   }
//   //round answer to fixed decimal place
//   return answer.toFixed(2);
// }

// //GET route '/calculate'
// app.get('/calculate', function(req, res){
//   res.send({finalAns: calculation});
// })

// start up the server
app.listen(port, function(){
    console.log('listening on port', port);
});