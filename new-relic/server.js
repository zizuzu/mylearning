require('newrelic');
'use strict';
var http =  require('http');
http.createServer(function(req, res){
var opts = {
  host: 'www.google.com',
  path: '/',
};
http.request(opts, function(response){
response.on('data', function(chunk){});
response.on('end', function(){
  res.write('status='+ response.statusCode);
  res.end();
});
response.on('error', function(){
  res.write('error='+ response.statusCode);
  res.end();
});
}).end();
}).listen(8000, '');
console.log('Server running at localhost:8000');
