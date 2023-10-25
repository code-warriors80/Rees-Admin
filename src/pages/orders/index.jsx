import { Link } from "react-router-dom";
import { useOrder } from "../../context/ordersContext";
import { useUser } from "../../context/userContext";
import { useProduct } from "../../context/productContext";

const ordersArray = [
  {
    id: 123456,
    order: "Pizza Margherita",
    user: "John Smith",
  },
  {
    id: 789012,
    order: "Chicken Alfredo Pasta",
    user: "Alice Johnson",
  },
  {
    id: 345678,
    order: "Vegetable Stir-Fry",
    user: "David Lee",
  },
  {
    id: 901234,
    order: "Burger with Fries",
    user: "Emily Wilson",
  },
  {
    id: 567890,
    order: "Sushi Platter",
    user: "Michael Davis",
  },
  {
    id: 234567,
    order: "Taco Salad",
    user: "Sarah Brown",
  },
  {
    id: 890123,
    order: "Grilled Chicken Sandwich",
    user: "Laura Martinez",
  },
  {
    id: 456789,
    order: "Spaghetti Bolognese",
    user: "James Taylor",
  },
  {
    id: 678901,
    order: "Veggie Pizza",
    user: "Olivia White",
  },
  {
    id: 123789,
    order: "Steak Dinner",
    user: "William Turner",
  },
];

const ListItem = ({ order }) => {
  const { users } = useUser();

  const orderUser = users
    ? users.filter((user) => user._id === order.customer)
    : "loading user...";
  return (
    <Link
      to={`/orders/${order.order._id}`}
      className="flex items-center p-3 hover:bg-zinc-50 space-x-4"
    >
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 truncate ">
          {orderUser.map((user, index) => (
            <li
              key={user.username}
              className="text-sm list-none font-medium text-gray-900 truncate"
            >
              <span className="mr-2">{index + 1}.</span> {user.username}
            </li>
          ))}
        </p>
        <p className="text-sm text-gray-500 truncate">
          {order.products.map((v) => (
            <li key={v.name}>
              <span className="mr-2">{v.name} </span>
              <span>#{v.price}</span>
            </li>
          ))}
        </p>
      </div>
      <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
        {order.order.orderDate?.toLocaleString("en-NG", {
          style: "currency",
          currency: "NGN",
        })}
      </div>
    </Link>
  );
};

const Orders = () => {
  const { orders, error, isLoading } = useOrder();
  const content =
    orders.length > 0
      ? orders?.map((order) => <ListItem key={order.id} order={order} />)
      : "No other at the moment";

  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold">Orders</h1>

      <select className="border mt-3 text-xs outline-none">
        <option>select</option>
        <option>Cooking</option>
        <option>Delivered</option>
      </select>

      <section className="grid my-3 w-2/3 divide-y divide-gray-200">
        {isLoading ? "loading..." : error ? "An error occured" : content}
      </section>
    </section>
  );
};

export default Orders;
