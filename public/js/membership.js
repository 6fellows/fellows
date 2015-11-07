var paymentForm=document.getElementById('payment-form');
paymentForm.addEventListener('submit', function(event){
  console.log("submit");
event.preventDefault();

  Stripe.card.createToken(paymentForm, stripeResponseHandler(status, response){
    var token = response.id
    console.log(token);
  });
})
