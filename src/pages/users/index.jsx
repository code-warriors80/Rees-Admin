import React from 'react'
import { Link } from "react-router-dom";

const usersArray = [
  {
    id: 123456,
    name: "Big Moh",
    email: "MuctarMohammed07@gmail.com",
    mobile: 90,
    address: 'Sabo Market Sabo Gari zaria',
    location: 'Sabon Gari'
  },
  {
    id: 789012,
    name: "Savage",
    email: "MuctarMohammed@gmail.com",
    mobile: 90,
    address: 'Abu Main Gate Samaru Zaria',
    location: 'Samaru'
  },
  {
    id: 345678,
    name: "Code Warriors",
    email: "codewariors02@gmail.com",
    mobile: 90,
    address: 'Chimdit Cantoonment Pz Zaria',
    location: 'PZ'
  },
  {
    id: 901234,
    name: "Eazy Life",
    email: "eazylife@Gmail.com",
    mobile: 90,
    address: 'Graceland Zaria',
    location: 'GraceLand'
  },
];

const ListUsers = ({ user }) => {
  return (
    <Link
      to={`/users/${user.id}`}
      className="flex items-center p-3 hover:bg-zinc-50 space-x-4"
    >
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 truncate ">
          {user.name}
        </p>
        <p className="text-sm text-gray-500 truncate ">{user.email}</p>
      </div>
      <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
      </div>
    </Link>
  );
};

const index = () => {
  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold">Users</h1>

      <section className="grid my-8 w-2/3 divide-y divide-gray-200">
        {usersArray.map((user) => (
          <ListUsers key={user.id} user={user} />
        ))}
      </section>
    </section>
  )
}

export default index