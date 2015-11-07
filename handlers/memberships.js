var fs =require('fs');
var stripe = require("stripe")("sk_test_1vv56eBruuqP9YPX5avhlK8o");
var memberships = fs.readFileSync(__dirname + '/../public/html/memberships.html');
stripe.customers.create({
  description: 'Customer for test@example.com',
  source: "tok_174YpUKdpFPuEgQ1FHqFVLYm" // obtained with Stripe.js
}, function(err, customer) {
  console.log("err",err);
  console.log("customer",customer);
});
module.exports = function home(req, res){
  res.writeHead(200, {'Content-Type':'text/html'});
  res.end(memberships);
};
