var fs =require('fs');
var memberships = fs.readFileSync(__dirname + '/../public/html/memberships.html');



module.exports = function home(req, res){
  res.writeHead(200, {'Content-Type':'text/html'});
  res.end(memberships);
};
