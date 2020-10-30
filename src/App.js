import axios from 'axios'
import { useState, useEffect } from 'react'
import { getAuthHeaders, api } from './utils'
import logo from './logo.svg';
import './App.css';
import orderJson from './order.json'

function App() {
  const [token, settoken] = useState('');
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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={create}>Create new order</button>
        {order && <div>
          <b>created order id = </b><span>{order.id}, </span>
          <b>created order status = </b><span>{order.status}</span>
        </div>}
     
        {orders.map(o => <div>
          <b>order id = </b><span>{o.id}, </span>
          <b>order status = </b><span>{o.status}</span>
        </div>)}
      </header>
    </div>
  );
}

export default App;
