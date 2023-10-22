import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useUser } from "../../../context/userContext";

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

const TableItem = ({ order, qty }) => {
  const { users } = useUser()

    const orderUser = users ? users.filter(user => user._id === order.customer) : 'loading user...'
  return (
    <tr className="bg-white border-b ">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
      >
        {orderUser.map((user, index) => (
            <li key={user.username} className="text-sm list-none font-medium truncate">
              <span className="mr-2">{index + 1}.</span> {user.username}
            </li>
          ))}
      </th>
      <td className="px-6 py-4 text-center">#{order._id}</td>
      <td className="px-6 py-4 text-center">{qty.reduce((total, item) => total + item.quantity, 0)}</td>
      <td className="px-6 py-4">
        {order.totalAmount.toLocaleString("en-NG", {
          style: "currency",
          currency: "NGN",
        })}
      </td>
    </tr>
  );
};
const apiLink = process.env.REACT_APP_API_URL
const ListItem = ({ text, value }) => {
  return (
    <span className="grid grid-cols-2 mb-1.5 items-center gap-x-20">
      <p className="text-sm text-zinc-500">{text}</p>
      <p className="font-bold">
        {value.toLocaleString("en-NG", {
          style: "currency",
          currency: "NGN",
        })}
      </p>
    </span>
  );
};

const OrderId = () => {
  let { id } = useParams();
  const [order, setOrder] = useState([])
  const { users } = useUser()
  const orderUser = users ? users.filter(user => user._id === order.customer) : 'loading user...'
  const [error, setError] = useState('')
  const [isloading, setIsLoading] = useState(false)


  console.log(order,'order')
  const getOrder = async () => {

    try {
      const res = await fetch(`${apiLink}/order/order/${id}`, {
        headers: {
          "Content-type": "application/json",
        }
      })
      const data = await res.json()
      if (res.ok) {
        setOrder([data])
        setIsLoading(false)

      }
      if (!res.ok) {
        setError("No product data at the moment")
        setIsLoading(false)

      }
    } catch (error) {
      setError("No product data at the moment")
      setIsLoading(false)

    }
  }
  useEffect(() => {
    getOrder()
  }, [])
  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold">Orders / Order-details</h1>

      <section className="w-4/5 my-8">
        <div className="flex items-center space-x-4">
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate ">
              {orderUser?.name}
            </p>
            <p className="text-sm text-gray-500 truncate ">
              {orderUser?.email}
            </p>
          </div>
          <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
            Order ${order.id}
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-zinc-400 font-bold">
            Order Details ({order.length})
          </h3>

          <div className="mt-8 relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-white uppercase bg-[#F39300]">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Product name
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Product code
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {order.length > 0 ? order.map((order, index) => (
                  <TableItem
                    key={order._id}
                    order={order}
                    qty={order.products}
                  />
                )) : JSON.stringify(order)}
              </tbody>
            </table>
          </div>

          <aside className="flex  justify-end mt-8">
            <div>
              {/* <ListItem text="Subtotal" value={1200} />
              <ListItem text="Tax (3%)" value={36} /> */}
              <ListItem text="Total" value={order.map(value => value.totalAmount)} />
            </div>
          </aside>
        </div>
      </section>
    </section>
  );
};

export default OrderId;
