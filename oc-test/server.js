'use strict';
var http =  require('http');
require("appdynamics").profile({
  controllerHostName: process.env[‘CONTROLLER_HOST’],
  controllerPort: 443,
  
  // If SSL, be sure to enable the next line
  controllerSslEnabled: true,
  accountName: process.env[‘ACCOUNT_NAME’],
  accountAccessKey: process.env[‘ACCOUNT_ACCESS_KEY’],
  applicationName: process.env[‘APPLICATION_NAME’],
  tierName: process.env[‘TIER_NAME’],
  nodeName: 'process' // The controller will automatically append the node name with a unique number
 });
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
}).listen(8000, 'localhost');
console.log('Server running at localhost:8000');
