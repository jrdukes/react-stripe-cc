import React, { useState } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';

function CheckoutForm(props) {
  const [isComplete, setComplete] = useState(false);

  
  
  //localStorage is like a `save` button for your browser. This is displayed 
//   in the `Local Storage` shown in the Application tab of Chrome developer
  localStorage.setItem('proppy', JSON.stringify(props));

  localStorage.getItem('proppy');

  const submit = event => {
    props.stripe.createToken({ name: 'Name' }).then(result => {
      fetch('/charge', {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' },
        body: result.token.id
      }).then(fetchedResult => {
        if (fetchedResult.ok) {
          console.log('COMPLETED');
          setComplete(true);
        } else {
          console.log('ERROR');
        }
      });
    });
    console.log(props);
  };

  if (isComplete) return <h1>PURCHASE</h1>;

  return (
    <div>
      <p>Would you like to complete the purchase?</p>
      <CardElement />
      <button onClick={submit}>Purchase</button>
    </div>
  );
}

export default injectStripe(CheckoutForm);
