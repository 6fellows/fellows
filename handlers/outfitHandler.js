var fs = require('fs');
var stripe = require('stripe')('sk_test_1vv56eBruuqP9YPX5avhlK8o');
var outfit = fs.readFileSync(__dirname + '/../public/html/outfit.html')

module.exports = function home(req, res){
  res.writeHead(200, {'Content-Type':'text/html'});
  res.end(outfit);
}
