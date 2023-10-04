import { BrowserRouter, Route, Routes } from "react-router-dom";

import AccountLayout from "./layout/account";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import OrderId from "./pages/orders/order-id";
import Orders from "./pages/orders";
import Products from "./pages/products";
import Settings from "./pages/settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<AccountLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/orders/:id" element={<OrderId />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
