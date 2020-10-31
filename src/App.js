import axios from 'axios'
import { useState, useEffect } from 'react'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import { api } from './utils'
import logo from './logo.svg';
import './App.css';
import orderJson from './order.json'

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
    if(error) {
      return console.error(error)
    } 
    console.log(paymentMethod)
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};


const stripePromise = loadStripe('your-test-public-key');


function App() {
  const [order, setorder] = useState(null);
  const [orders, setorders] = useState([]);

 useEffect(() => {
   api.get(`orders`)
      .then(({ data }) => {
        setorders(data)
      })
  }, []);

  function create() {
    api.post(`orders`, {
      ...orderJson,
      status: 'pending',
    })
    .then(({ data }) => {
      setorder(data)
    })
  }
  return (
    <div className="App">
      <section className="section">
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </section>

      <section className="section">
        <button onClick={create}>Create new order</button>
        {order && <div>
          <b>created order id = </b><span>{order.id}, </span>
          <b>created order status = </b><span>{order.status}</span>
        </div>}
     
        {orders.map(o => <div>
          <b>order id = </b><span>{o.id}, </span>
          <b>order status = </b><span>{o.status}</span>
        </div>)}
      </section>
    </div>
  );
}

export default App;
