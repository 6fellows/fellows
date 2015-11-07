/*
function stripeResponseHandler(status, response) {
  console.log();
};*/

var paymentForm = document.getElementById('paymentForm');
	
	paymentForm.addEventListener('submit', function(event) {
            console.log("submit");
            console.log(paymentForm);
            event.preventDefault();

  		Stripe.card.createToken(paymentForm, function stripeResponseHandler(status, response){
  			var token = response.id;
  			console.log(response);
  		});
            
});
