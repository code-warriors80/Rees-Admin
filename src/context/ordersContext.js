import { createContext, useContext, useEffect, useState } from "react";

const OrderContext = createContext(undefined);

const apiLink = process.env.REACT_APP_API_URL;
export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const loadOrder = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`${apiLink}/order/orders`, {
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await res.json();
      if (res.ok) {
        setOrders(data);
        setIsLoading(false);
      }
      if (!res.ok) {
        setError("No order data at the moment");
        setIsLoading(false);
      }
    } catch (error) {
      setError("No order data at the moment");
      setIsLoading(false);
    }
  };
  useEffect(() => {
    loadOrder();
  }, []);

  const contextValue = {
    orders,
    error,
    isLoading,
  };
  return (
    <OrderContext.Provider value={contextValue}>
      {children}
    </OrderContext.Provider>
  );
};

export function useOrder() {
  const context = useContext(OrderContext);
  if (context === undefined) throw new Error("Order not accessible");
  return context;
}
