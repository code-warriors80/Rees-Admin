import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCustomerOrder } from "../../../apIservice/apis";
import { useOrder } from "../../../context/ordersContext";

const ListItem = ({ title, text }) => {
  return (
    <div className="text-sm">
      <p className="text-xs">{title}</p>
      <p className="mt-1 font-semibold text-gray-700">{text}</p>
    </div>
  );
};


const apiLink = process.env.REACT_APP_API_URL
const UserId = () => {
  let { id } = useParams();
  const [user, setUser] = useState([])
  const [userOrder, setUserOrder] = useState([])
  const { orders } = useOrder()
  const [isLoading, setIsLoading] = useState(null)
  const [error, setError] = useState(null)
  const getUser = async () => {
    try {
      const res = await fetch(`${apiLink}/users/user/${id}`, {
      headers: {
        "Content-type": "application/json",
      }
    })
    const data = await res.json()
    if (res.ok) {
      setUser(data)
      const order = await getCustomerOrder(id)
      setUserOrder(order)
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

  const activeOrder = userOrder.length > 0 ? userOrder.filter(order => order.inProcess) : 0

  useEffect(() => {
    getUser()
  }, [])


  console.log(userOrder,'details')
  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold">User details</h1>

      <section className="grid grid-cols-[2.3fr_4fr] grid-rows-3 border-t border-zinc-100 mt-14">
        <div className="flex flex-col items-center gap-y-11 px-8 py-4 row-span-3 border-r border-zinc-100">
          <img
            className="inline-block h-16 w-16 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <span className="text-center">
            <p className="font-semibold text-lg mb-1">{user.username}</p>
            <p>{user.email}</p>
          </span>

          <button className="px-6 py-1.5 text-sm rounded border">
            Send Email
          </button>
        </div>
        <div className="px-8 py-4">
          <h3 className="font-medium text-base text-gray-300">
            Official Information
          </h3>

          <section className="flex items-center gap-x-20 mt-6 mb-4">
            <ListItem title="Email" text={user.email} />
            <ListItem title="Phone Number" text={user.mobile} />
          </section>
        </div>
        <div className="px-8 py-4 border-y border-zinc-100">
          <h3 className="font-medium text-base text-gray-300">
            Personal Information
          </h3>

          <section className="flex items-center gap-x-20 mt-6 mb-4">
            <ListItem title="Fullname" text={user.username} />
            <ListItem title="Address" text={user.address} />
          </section>
        </div>
        <div className="px-8 py-4">
          <h3 className="font-medium text-base text-gray-300">
            Order Information
          </h3>

          <section className="flex items-center gap-x-20 mt-6 mb-4">
            <ListItem title="Total Orders" text={userOrder.length} />
            <ListItem title="Active Orders" text={activeOrder} />
          </section>
        </div>
      </section>
    </section>
  );
};

export default UserId;
