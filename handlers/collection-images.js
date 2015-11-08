var fs =require('fs');
var collections = fs.readFileSync(__dirname + '/../public/html/collections.html');


var jsonObj = [
  { img:"https://scontent-ams3-1.cdninstagram.com/hphotos-xat1/t51.2885-15/s750x750/sh0.08/e35/12080506_1655901054692095_408697481_n.jpg" },{ img: "https://igcdn-photos-c-a.akamaihd.net/hphotos-ak-xta1/t51.2885-15/s750x750/sh0.08/e35/12071031_1714920815393610_1435023045_n.jpg"},{ img:"https://scontent-ams3-1.cdninstagram.com/hphotos-xtp1/t51.2885-15/s750x750/sh0.08/e35/11849439_1642353779337614_1067946092_n.jpg" },{ img: "https://scontent-ams3-1.cdninstagram.com/hphotos-xtf1/t51.2885-15/s640x640/sh0.08/e35/11910289_1682653765291937_1806674877_n.jpg"},{ img:"https://igcdn-photos-c-a.akamaihd.net/hphotos-ak-xpf1/t51.2885-15/s750x750/sh0.08/e35/11906217_879831325419066_794433956_n.jpg" },{ img: "https://igcdn-photos-e-a.akamaihd.net/hphotos-ak-xtf1/t51.2885-15/s640x640/sh0.08/e35/11821108_1162280253788300_1291094349_n.jpg"}];
module.exports = function home(req, res){
  res.writeHead(200, {'Content-Type':'text/html'});


  res.end(JSON.stringify(jsonObj));
};
