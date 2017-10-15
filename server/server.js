var express = require('express');
var app = express();
var port = 5000;

//express static file serving
app.use(express.static('server/public'));

//use body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

//maybe will need to store something here?

//POST route
app.post('/calculate', function(req, res){
  console.log('req.body:', req.body);
  var mathParts = req.body;
  res.sendStatus(201);
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