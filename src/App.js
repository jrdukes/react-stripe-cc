import React from 'react';
import CheckoutForm from './Components/CheckoutForm';
import { Elements, StripeProvider } from 'react-stripe-elements';

function App() {
  return (
    <StripeProvider apiKey='pk_test_TYooMQauvdEDq54NiTphI7jx'>
      <div>
        <Elements>
          <CheckoutForm />
        </Elements>
      </div>
    </StripeProvider>
  );
}

export default App;
