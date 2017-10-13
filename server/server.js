var express = require('express');
var app = express();
var port = 5000;

//express static file serving
app.use(express.static('server/public'));



// start up the server
app.listen(port, function(){
    console.log('listening on port', port);
});