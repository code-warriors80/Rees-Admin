import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center p-6">
      <h1 className="mb-8">Login page</h1>
      <Link
        to="/dashboard"
        className="text-white bg-purple-500 font-medium rounded-lg text-sm px-5 py-2.5 mt-4 mr-2 mb-2"
      >
        Go To Dashboard
      </Link>
    </div>
  );
};

export default Login;
