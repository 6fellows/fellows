
 var personalInfoBtn = document.getElementById('personalBtn');
 personalInfoBtn.addEventListener("click", function(event){
	 var fullName = document.getElementById('fullName').value;
	 console.log(fullName);
	 var email = document.getElementById('email').value;
	 console.log(email);
	 var address = document.getElementById('address').value;
	 console.log(address);
	 var password = document.getElementById('password').value;
	 console.log(password);

	 var request = new XMLHttpRequest()
	 request.open("POST","/personalInfo/"+fullName+"/"+email+"/"+address+"/"+password,true);
	 request.send();

 })
  var paymentForm = document.getElementById('paymentForm');
	paymentForm.addEventListener('submit', function(event) {
			console.log("submit");

      event.preventDefault();
      
  		Stripe.card.createToken(paymentForm, function stripeResponseHandler(status, response){
				console.log("FULL NAME!!!!!!!!",fullName);
  			var token = response.id;
  			console.log(response);

				var request = new XMLHttpRequest()
				request.open("POST","/token/"+token,true);
				request.send();
  		});
});
