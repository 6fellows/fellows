// console.log("Im in collections js file");
//
// var request = new XMLHttpRequest();
//
//     request.onreadystatechange = function() {
//         if (request.readyState === 4) {
//           console.log(request.responseText);
//           var body = '';
//           var images = JSON.parse(request.responseText);
//           createPhotoDiv(images,body,function(body){
//             console.log(body);
//             document.getElementById('collections').innerHTML = body;
//           });
//         }
//     };
//     request.open('GET', '/collection-images', true);
//     request.send();
//
//
//     function createPhotoDiv(images,body,callback){
//
//       images.forEach(function(x,i){
//         console.log(x.img);
//         body+= '<div > <img class=\"photos \"  src= \"'+x.img+'\"> <button class=\"getLook\">Get The Look</button></div>';
//       });
//       callback(body);
//     }
