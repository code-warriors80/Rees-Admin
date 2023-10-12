const Dashboard = () => {
  return (
    <section className="p-6 w-[70%]">
      <h1 className="mb-5">Dashboard page</h1>

      <section className="flex items-center gap-5">
        <div className="w-[27%] shadow shadow-gray-300 p-3 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold">0</h1>
            <h4>Users</h4>
          </div>
          <i className="bi bi-person-fill text-4xl"></i>
        </div>

        <div className="w-[27%] shadow-gray-300 shadow p-3 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold">0</h1>
            <h4>Products</h4>  
          </div>
          <i className="bi bi-bag-fill text-4xl"></i>
        </div> 

        <div className="w-[27%] shadow-gray-300 shadow p-3 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold">0</h1>
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
                <th scope="col" className="px-6 py-3 font-light text-sm">CUSTOMER NAME</th>
                <th className="px-6 py-3 text-center font-light">ORDER ID</th>
                <th className="px-6 py-3 text-center font-light">QUANTITY</th>
                <th className="px-6 py-3 text-center font-light">TOTAL</th>
                <th className="px-6 py-3 font-light">STATUS</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b text-gray-500">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">Muctar Mohammed</th>
                <td className="px-6 py-4 text-center">#12345567</td>
                <td className="px-6 py-4 text-center">4</td>
                <td className="px-6 py-4 text-center">N 5,000</td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-orange-500">Cooking</th>
              </tr>
              <tr className="text-gray-500">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">Young Savage</th>
                <td className="px-6 py-4 text-center">#12345567</td>
                <td className="px-6 py-4 text-center">7</td>
                <td className="px-6 py-4 text-center">N 8,700</td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-green-500">Delivered</th>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
};

export default Dashboard;
