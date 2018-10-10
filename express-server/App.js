
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('hello world');
});

app.post('/hello', function(req, res){
  res.send("You just called the post method at '/hello'!\n");
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
