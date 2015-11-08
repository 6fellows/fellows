var fs =require('fs');
var login = fs.readFileSync(__dirname + '/../public/html/login.html');


module.exports = function home(req, res){
  res.writeHead(200, {'Content-Type':'text/html'});
  res.end(login);
};
