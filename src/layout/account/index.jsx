import { Outlet } from "react-router-dom";
import SideBar from "../../components/sidebar";

const AccountLayout = () => {
  return (
    <section className="grid grid-cols-[0.8fr_4fr] gap-x-4 min-h-screen">
      <SideBar />
      <Outlet />
    </section>
  );
};

export default AccountLayout;
