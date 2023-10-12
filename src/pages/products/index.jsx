import {
  ChevronDown,
  ChevronRight,
  Globe,
  Search,
} from "react-bootstrap-icons";
import Topbar from "./components/Topbar";
import { useState } from "react";
import { foods } from "../../utilities";
import Card from "./components/Card";

const Products = () => {
  const [active, setActive] = useState(false);
  const [category, setCategory] = useState(false);
  return (
    <section className="p-6">
      <Topbar />
      <div className="flex items-center gap-3 mt-14">
        <div className="flex items-center gap-4">
          <Globe className="text-purple-500" />
          <h2>Dashboard</h2>
        </div>
        <div className="flex items-center">
          <ChevronRight />
        </div>

        <div>
          <h2>Products</h2>
        </div>
      </div>
      <div className="grid grid-cols-[3fr_1.5fr] gap-x-4 mt-8">
        <div className="left">
          <div className="shadow rounded p-[24px]">
            <div className="flex items-center gap-4">
              <div>
                <p>All Products</p>
              </div>

              <div>
                <select className="block pl-[20px] py-[10.8px] pr-[10px] bg-transparent border-gray-300 border-[1px] border-solid rounded focus:border-purple-500 focus:border-[2px]">
                  <option>Sort by</option>
                  <option value="Desc">Desc</option>
                  <option value="Asc">Asc</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex gap-4 flex-wrap mt-6">
              {foods.map((food) => (<Card title={food.name} alt={food.alt} desc={food.description} image={food.image}/>))}
          </div>
        </div>
        <div className="right">
          <div className="mt-[-6.5px]">
            <h2>Filter products</h2>
          </div>

          <div className="rounded-[10px] shadow p-4 mt-4">
            <div
              className={`flex items-center relative justify-between transition-all ease-in-out`}
              onClick={() => setActive(!active)}
            >
              <p>Keywords</p>
              <ChevronDown
                className={`transition-all ease-in-out absolute top-1 right-0 ${
                  active ? "transform rotate-180" : ""
                }`}
              />
            </div>

            <div className={`overflow-hidden ${active ? "h-0" : ""}`}>
              <div className="mt-4 bg-white border-solid border-[1px] flex items-center rounded-[10px] w-[auto]">
                <div className="pl-[20px] py-[10px] w-full">
                  <input
                    type="text"
                    className="focus:outline-none focus:placeholder:text-black w-full"
                    placeholder="Rice, plantain"
                  />
                </div>
                <button className="px-[20px] py-[10px]">
                  <Search />
                </button>
              </div>
            </div>
          </div>

          <div className="rounded-[10px] shadow p-4 mt-4">
            <div
              className={`flex items-center relative justify-between transition-all ease-in-out`}
              onClick={() => setCategory(!category)}
            >
              <p>Categories</p>
              <ChevronDown
                className={`transition-all ease-in-out absolute top-1 right-0 ${
                  active ? "transform rotate-180" : ""
                }`}
              />
            </div>

            <div className={`overflow-hidden ${category ? "h-0" : ""}`}>
              <div className="mt-4 bg-white">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <input
                      type="radio"
                      name="Rice"
                      value="option-1"
                      id="radio-1"
                    />
                    <label for="radio-1">All</label>
                  </div>
                  <div className="flex items-center gap-4">
                    <input
                      type="radio"
                      name="Rice"
                      value="option-1"
                      id="radio-1"
                    />
                    <label for="radio-1">Appetizers</label>
                  </div>
                  <div className="flex items-center gap-4">
                    <input
                      type="radio"
                      name="Rice"
                      value="option-1"
                      id="radio-1"
                    />
                    <label for="radio-1">Desert</label>
                  </div>
                  <div className="flex items-center gap-4">
                    <input
                      type="radio"
                      name="Rice"
                      value="option-1"
                      id="radio-1"
                    />
                    <label for="radio-1">Main course</label>
                  </div>
                  <div className="flex items-center gap-4">
                    <input
                      type="radio"
                      name="Rice"
                      value="option-1"
                      id="radio-1"
                    />
                    <label for="radio-1">Small chops</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
