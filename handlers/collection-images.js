var fs =require('fs');
var collections = fs.readFileSync(__dirname + '/../public/html/collections.html');


var jsonObj = [
  {  }
];
module.exports = function home(req, res){
  res.writeHead(200, {'Content-Type':'text/html'});


  res.end("Hello");
};
