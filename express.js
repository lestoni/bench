var express = require('express');

var app = express();

function respond(req, res){
  res.send('benchmarks for the win');
}

app.get('/', respond);

app.listen(7000);
