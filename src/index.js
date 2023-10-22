import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserContextProvided } from './context/userContext';
import { OrderProvider } from './context/ordersContext';
import { ProductProvider } from './context/productContext';
import { CategoryProvider } from './context/categoryContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContextProvided>
      <CategoryProvider>
         <ProductProvider>
      <OrderProvider>
        <App />
      </OrderProvider>
        </ProductProvider>
       </CategoryProvider>
    </UserContextProvided>
  </React.StrictMode>
);

