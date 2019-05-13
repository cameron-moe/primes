var express = require('express');
var app = express();
//var myRouter = require('./myRouter.js');
//app.use('/', myRouter);

app.use(express.static(__dirname + '/public'));

app.get('/checkprime', function handleProcessGet(request, response) {

var numberInput = request.query.number;
var primeResult = isPrime(numberInput);

if (primeResult == true){
  response.write('<!DOCTYPE html>\n <html>\n <body>');
  response.write('<p> Prime <\p>');
  response.write('</body>\n</html>');
} else {
  response.write('<!DOCTYPE html>\n <html>\n <body>');
  response.write('<p> Not Prime <\p>');
  response.write('</body>\n</html>');
}
 response.end();
});

function isPrime(number)
{
  if (number <= 3) return true;

  if (number%2 == 0 || number%3 == 0)
  return false;

  for (var i=5; i*i<=number; i=i+6)
  {
     if (number%i == 0 || number%(i+2) == 0)
     return false;
  }
  return true;
}
app.listen(3020, function ServerListner() {
});
