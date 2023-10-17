import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserContextProvided } from './context/userContext';
import { OrderProvider } from './context/ordersContext';
import { ProductProvider } from './context/productContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContextProvided>
      <OrderProvider>
        <ProductProvider>
           <App />
        </ProductProvider>
      </OrderProvider>
    </UserContextProvided>
  </React.StrictMode>
);

