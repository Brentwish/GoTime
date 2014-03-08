var express = require('express')
, app = express.createServer();

app.get('/', function(req, res) 
{
	debugger;
	res.send('GOTIME');
});

app.listen(3000)