var express = require('express');
var app = express();
var serv = require('http').Server(app);

const host = 'localhost'
const port = '8080'

app.get('/', function(req, res){
    res.sendFile(__dirname + '/client/index.html');
});
app.use('/client', express.static(__dirname + '/client'));
serv.listen(port);
console.log('Server is running on: ' + host + ':' + port);