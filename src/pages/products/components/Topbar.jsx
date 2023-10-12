import { Search, PlusCircle } from "react-bootstrap-icons";

const Topbar = () => {
  return (
    <div className="product-nav flex items-center justify-between">
      <h1>Products</h1>

      <div className="product-center bg-white shadow flex items-center rounded w-[400px]">
        <button className="px-[20px] py-[10px]">
        <Search />
        </button>
        <div className="pl-[20px] py-[10px] w-[100%]">
        <input
          type="text"
          className="focus:outline-none focus:placeholder:text-black px-[10px] w-[100%]"
          placeholder="Search..."
        />
        </div>
      </div>

      <div className="product-right bg-purple-500 flex items-center px-4 py-2 rounded gap-2 text-white">
        <PlusCircle />
        <h1>Add Product</h1>
      </div>
    </div>
  );
};

export default Topbar;
