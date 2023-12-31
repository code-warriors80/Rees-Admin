import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TableItem = ({ index, product, qty }) => {
  return (
    <tr className="bg-white border-b">
      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        {index +1}
      </td>
      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        {product.name}
      </td>
      <td className="px-6 py-4 text-center">#{product._id}</td>
      <td className="px-6 py-4 text-center">{qty}</td>
      <td className="px-6 py-4">
        {product.price.toLocaleString("en-NG", {
          style: "currency",
          currency: "NGN",
        })}
      </td>
    </tr>
  );
};

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
  const { id } = useParams();
  const [orderDetails, setOrderDetails] = useState([]);

useEffect(() => {
  const fetchOrderDetails = async () => {
    try {
      const response = await fetch(`https://rees-kitchen.onrender.com/order/ordersingleProduct/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch order details");
      }
      const data = await response.json();
      setOrderDetails(data);
    } catch (error) {
      console.error(error);
    }
  } 

  fetchOrderDetails()
}, [id])

if (!orderDetails || orderDetails.length === 0) {
  return <p>loading......</p>;
}

  
  const order = orderDetails[0].order; // Access the order property
  let delivered = order.isDelivered
  if(delivered === true)
  {
    delivered = 'Delivered' 
  }else
  {
    delivered = 'Pending' 
  }

  const customer = orderDetails[0].customer; // Access the customer property
  console.log(customer);
  const products = orderDetails[0].products; // Access the products property
  console.log(products);
  const totalAmount = products.reduce((total, product) => total + product.product.price * product.quantity, 0);
  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold">Orders / Order-details</h1>

      <section className="w-4/5 my-8">
        <div className="flex items-start space-x-4">
          <div className="flex-1 min-w-0">
            <div>
              <h1 className="font-bold mb-2">Customer Details</h1>
                <div className="flex items-center gap-2 mb-2">
                  <h1 className="font-semibold text-[14px]">Username: </h1>
                  <p className="text-sm font-medium text-gray-500 truncate ">
                    {customer.username}
                  </p>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <h1 className="font-semibold text-[14px]">Contact: </h1>
                  <p className="text-sm font-medium text-gray-500 truncate ">
                    {customer.mobile}
                  </p>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <h1 className="font-semibold text-[14px]">Email</h1>
                  <p className="text-sm font-medium text-gray-500 truncate ">
                    {customer.email}
                  </p>
                </div>
            </div>

            <div className="mt-4">
              <h1 className="font-bold">Delivery Address</h1>
              <p className="text-sm font-medium text-gray-500 truncate ">
                {order.address}
              </p>
            </div>
          </div>
          <div className="text-base font-semibold text-gray-900 ">
            <div className="">
              <p>Order #:</p>
              <p className="text-sm font-medium text-gray-500 truncate ">{order._id}</p>
            </div>
            <div className="mt-4">
              <p>Delivery Status:</p>
              <p className="text-sm font-medium text-gray-500 truncate ">{delivered}</p>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-zinc-400 font-bold">
            Order Details ({products.length})
          </h3>

          <div className="mt-8 relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-white uppercase bg-[#F39300]">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    S/N
                  </th>
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
                {products.map((product, index) => (
                  <TableItem key={index} index={index} product={product.product} qty={product.quantity} />
                ))}
              </tbody>
            </table>
          </div>

          <aside className="flex justify-end mt-8">
            <div>
              <ListItem text="Subtotal" value={totalAmount} />
            </div>
          </aside>
        </div>
      </section>
    </section>
  );
};

export default OrderId;
