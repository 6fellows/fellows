var http = require('http');
var url = require('url');
var router = require('routes')();
var generalHandler = require('./handlers/generalHandler');
var fs =require('fs');
var port = process.env.PORT || 8000;

router.addRoute('/', require('./handlers/home.js'));




function handler(req, res) {
  var path = url.parse(req.url).pathname;
  var match = router.match(path);

  if(match){
    match.fn(req, res, match);
  }else{
    generalHandler(req,res);
  }
}

var server = http.createServer(handler)
  server.listen(port,function () {
  console.log('listening on server:' + (process.env.PORT || 8000));
});


module.exports = server;
