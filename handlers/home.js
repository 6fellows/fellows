var fs =require('fs');
var Pusher = require('pusher');
var index = fs.readFileSync(__dirname + '/../public/html/splash.html');




module.exports = function home(req, res){
  res.writeHead(200, {'Content-Type':'text/html'});


  res.end(index);
};
