var express = require('express');
var app = express();
var port = 5000;

//use body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));


var calculateRouter = require('./routes/calculate_router.js');
//express static file serving
app.use(express.static('server/public'));

app.use('/calculate', calculateRouter);


// start up the server
app.listen(port, function(){
    console.log('listening on port', port);
});