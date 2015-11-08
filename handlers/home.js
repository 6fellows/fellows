var fs =require('fs');
var Pusher = require('pusher');
var index = fs.readFileSync(__dirname + '/../public/html/splash.html');

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
},400)

  pusher.trigger('disconnection','new_notification',{
    message: "Client has disconnected"
  });


  res.end(index,"Notification triggered!");
};
