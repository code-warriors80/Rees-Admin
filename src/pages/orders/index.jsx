import { Link } from "react-router-dom";
import { useOrder } from "../../context/ordersContext";

const ListItem = ({ order }) => {
  const orderDate = new Date(order.order.orderDate);

  let formattedDate = "";
  if (!isNaN(orderDate.getTime())) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    formattedDate = orderDate.toLocaleDateString(undefined, options);
  } else {
    console.log("Invalid date");
  }

  const totalAmount = order.order.totalAmount.toLocaleString("en-NG", {
    style: "currency",
    currency: "NGN",
  });

  return (
    <Link to={`/orders/${order.order._id}`} className="flex items-center p-3 hover-bg-zinc-50 space-x-4">
      <div className="flex-1 flex-row items-start min-w-0">
        <p className="text-sm font-medium text-gray-900 truncate">{order.customer.username}</p>
        <p className="text-sm font-medium text-gray-900 truncate">{order.order.products.length}</p>
        <p className="text-sm text-gray-500 truncate"></p>
      </div>
      <div className="inline-flex items-center text-base font-semibold text-gray-900">{totalAmount}</div>
      <div className="text-sm text-gray-500">{formattedDate}</div>
    </Link>
  );
};


const Orders = () => {
  const { orders, isLoading, error } = useOrder();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold">Orders</h1>

      <section className="grid my-8 w-2/3 divide-y divide-gray-200">
        {orders.map((order, index) => (
          <ListItem key={index} order={order} />
        ))}
      </section>
    </section>
  );
};

export default Orders;
