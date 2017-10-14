var express = require('express');
var app = express();
var port = 5000;

//express static file serving
app.use(express.static('server/public'));

//use body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

//store what the client is sending
var calculationStorage = [];

//POST route '/calculate'
app.post('/calculate', function(req, res){
  console.log('req.body:', req.body); //will be mathParts
  var calculateThis = req.body;
  // store this req.body (data) 
  calculationStorage.push(calculateThis);
  console.log('calculationStorage:', calculationStorage);
  
  res.sendStatus(201);
});

//GET route
app.get('/calculate', function(req, res){
  res.send(calculationStorage);
})

// start up the server
app.listen(port, function(){
    console.log('listening on port', port);
});