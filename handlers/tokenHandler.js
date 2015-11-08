var stripe = require("stripe")("sk_test_1vv56eBruuqP9YPX5avhlK8o");
var request = require('request');
var customerId;

module.exports = function tokenHandler(req, res, match){
console.log("IM IN THE TOKEN HANDLER", match.params.token);
  stripe.customers.create({
    description: 'Customer for test@example.com',
    source: match.params.token

  }, function(err, customer) {
    customerId = customer.id
    stripe.plans.create({
      amount:80,
      interval:"month",
      name: "ShweffPlus",
      currency:"gbp",
      id:"gold",
    }, function(err,plan){

      stripe.customers.createSubscription(
          customerId,
          {plan: "gold"},
          function(err,subscription){
            console.log("err",err)
            console.log("subscription",subscription)
      });
    })
    console.log("customer",customerId);
  });
}
