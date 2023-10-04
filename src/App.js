import { BrowserRouter, Route, Routes } from "react-router-dom";

import AccountLayout from "./layout/account";
import Dashboard from "./pages/dashboard";
import Users from './pages/users'
import UsersID from './pages/users/user-id/'
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
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UsersID />} />
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
