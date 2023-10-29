import { useOrder } from "../../context/ordersContext";
import { useProduct } from "../../context/productContext";
import { useUser } from "../../context/userContext";

const Dashboard = () => {
  const { orders, isLoading, error } = useOrder();
  const { users } = useUser();
  const { products } = useProduct();

  console.log(orders, "changes");
  const content =
    orders.length > 0 ? (
      orders?.map((value, i) => {
        const orderUser = users
          ? users.filter((user) => user._id === value.order.customer)
          : "loading user...";
        return (
          <tr className="border-b text-gray-500" key={i}>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              {orderUser.map((user, index) => (
                <li
                  key={user.username}
                  className="text-sm list-none font-medium text-gray-900 truncate"
                >
                  <span className="mr-2">{i + 1}.</span> {user.username}
                </li>
              ))}
            </th>
            <td className="px-6 py-4 text-center">{value.order._id}</td>
            <td className="px-6 py-4 text-center">
              {value.order.products.reduce(
                (total, item) => total + item.quantity,
                0
              )}
            </td>
            <td className="px-6 py-4 text-center">{value.order.totalAmount}</td>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              {value.order.paymentStatus}
            </th>
          </tr>
        );
      })
    ) : (
      <h1>There are no orders yet</h1>
    );

  return (
    <section className="p-6 min-w-[70%]">
      <h1 className="mb-5">Dashboard page</h1>

      <section className="flex items-center gap-5">
        <div className="w-[27%] shadow shadow-gray-300 p-3 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold">{users?.length || 0}</h1>
            <h4>Users</h4>
          </div>
          <i className="bi bi-person-fill text-4xl"></i>
        </div>

        <div className="w-[27%] shadow-gray-300 shadow p-3 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold">{products?.length || 0}</h1>
            <h4>Products</h4>
          </div>
          <i className="bi bi-bag-fill text-4xl"></i>
        </div>

        <div className="w-[27%] shadow-gray-300 shadow p-3 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold">{orders.length}</h1>
            <h4>Orders</h4>
          </div>
          <i className="bi bi-clipboard2-fill text-4xl"></i>
        </div>
      </section>

      <section>
        <h1 className="mt-10">Recent Orders</h1>
        <select className="border mt-2 text-xs outline-none">
          <option>select</option>
          <option>Cooking</option>
          <option>Delivered</option>
        </select>
        <div className="mt-5 relative overflow-x-auto w-[90%]">
          <table className="w-full text-sm text-left">
            <thead className="bg-[#F39300] text-white">
              <tr>
                <th scope="col" className="px-6 py-3 font-light text-sm">
                  CUSTOMER NAME
                </th>
                <th className="px-6 py-3 text-center font-light">ORDER ID</th>
                <th className="px-6 py-3 text-center font-light">QUANTITY</th>
                <th className="px-6 py-3 text-center font-light">TOTAL</th>
                <th className="px-6 py-3 font-light">STATUS</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? "loading....." : error ? error : content}
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
};

export default Dashboard;
