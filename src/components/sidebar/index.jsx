import { NavLink } from "react-router-dom";

const Navlinks = [
  { title: "Dashboard", icon: "bi bi-grid-1x2-fill", link: "/dashboard" },
  { title: "Users", icon: "bi bi-person-fill", link: "/users" },
  { title: "Products", icon: "bi bi-bag-fill", link: "/products" },
  { title: "Orders", icon: "bi bi-clipboard2-fill", link: "/orders" },
  { title: "Settings", icon: "bi bi-gear-fill", link: "/settings" },
];

const SideBar = () => {
  return (
    <nav className="sticky h-screen top-0 border-r border-zinc-200 p-6">
      <h1 className="font-bold text-xl">Rees Admin</h1>

      <section className="flex flex-col gap-y-3 mt-11">
        {Navlinks.map((item) => (
          <NavLink
            key={item.title}
            to={item.link}
            className={({ isActive }) =>
              `flex items-center gap-x-3 font-medium px-4 py-2 ${
                isActive
                  ? "text-white bg-purple-500 rounded-xl"
                  : "text-gray-400"
              }`
            }
          >
            <i className={item.icon}></i> <span>{item.title}</span>
          </NavLink>
        ))}
      </section>
    </nav>
  );
};

export default SideBar;
