var fs = require('fs');
var stripe = require('stripe')('sk_test_1vv56eBruuqP9YPX5avhlK8o');
var outfit = fs.readFileSync(__dirname + '/../public/html/outfit.html');
var Pusher = require('pusher');
var counter = 0;



module.exports = function home(req, res){
  res.writeHead(200, {'Content-Type':'text/html'});

  var pusher = new Pusher({
    appId: '152826',
    key: 'f5049b557c6eb19e1ae9',
    secret: '75da3e2cd0aa7b7004e2',
    encrypted: true
  });
  pusher.port = 443;

  counter = counter + 1;

setTimeout(function(){
  pusher.trigger('notifications', 'new_notification', {
    message: "A new Member has Joined!!!",
    counter: counter
  });
},700);

  pusher.trigger('disconnection','new_notification',{
    message: "Client has disconnected"
  });

  res.end(outfit,"notification triggered");
};
