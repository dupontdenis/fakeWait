const express = require('express');
const app = express();

app.use(express.static('static'));

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/static/index.html');
});

app.listen(3000, function() {
  console.log('http://localhost:3000');
});
