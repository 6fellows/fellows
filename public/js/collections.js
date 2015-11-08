console.log("Im in collections js file");

var request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        if (request.readyState === 4) {
          console.log(request.responseText);
        }
    };
    request.open('GET', '/collection-images', true);
    request.send();
