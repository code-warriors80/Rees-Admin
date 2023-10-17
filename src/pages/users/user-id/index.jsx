import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ListItem = ({ title, text }) => {
  return (
    <div className="text-sm">
      <p className="text-xs">{title}</p>
      <p className="mt-1 font-semibold text-gray-700">{text}</p>
    </div>
  );
};

const UserId = () => {
  let { id } = useParams();
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const [error, setError] = useState(null)
  const getUser = async () => {
    const res = await fetch(`http://localhost:3000/api/users/${id}`, {
      headers: {
        "Content-type": "application/json",
      }
    })
    const data = res.json()
    if (res.ok) {
      setUser(data.data)
      setIsLoading(false)

    }
    if (!res.ok) {
      setError("No product data at the moment")
      setIsLoading(false)

    }
  }
  useEffect(() => {
    getUser()
  }, [id])

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
            <p>test1234@gmail.com</p>
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
            <ListItem title="Email" text="test1234@gmail.com" />
            <ListItem title="Phone Number" text="090040003002" />
          </section>
        </div>
        <div className="px-8 py-4 border-y border-zinc-100">
          <h3 className="font-medium text-base text-gray-300">
            Personal Information
          </h3>

          <section className="flex items-center gap-x-20 mt-6 mb-4">
            <ListItem title="Fullname" text="John Doe" />
            <ListItem title="Address" text="No. 17 Glory lane, Wise Street" />
          </section>
        </div>
        <div className="px-8 py-4">
          <h3 className="font-medium text-base text-gray-300">
            Order Information
          </h3>

          <section className="flex items-center gap-x-20 mt-6 mb-4">
            <ListItem title="Total Orders" text="124" />
            <ListItem title="Active Orders" text="13" />
          </section>
        </div>
      </section>
    </section>
  );
};

export default UserId;
