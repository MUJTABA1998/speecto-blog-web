import React from "react";
import { ImFacebook, ImGoogle } from "react-icons/im";
import { Link } from "react-router-dom";
import CreateAccount from "./CreateAccount";

const Login = () => {
  const createAccount = () => {
    return <CreateAccount />;
  };

  return (
    <div className="bg-gray-200 w-full h-screen flex justify-center items-center">
      <div className="flex flex-col gap-3 items-center justify-center">
        <h1>Login Here</h1>
        <div className="flex flex-col gap-3 mt-6">
          <button className="flex gap-x-1 w-[270px] sm:w-[350px] rounded-full justify-center items-center bg-[#4a69bd] px-6 font-main text-white py-2 sm:py-3">
            <ImFacebook /> Login with Facebook
          </button>

          <button className="flex gap-x-1 w-[270px] sm:w-[350px] justify-center rounded-full items-center bg-[#e55039] px-6 font-main text-white py-2 sm:py-3">
            <ImGoogle /> Login with Google
          </button>
        </div>
        <div className="flex items-center justify-center flex-col gap-3 mt-6">
          <h5 className="text-[18px] text-gray-900">Login with email</h5>
          <input
            type="email"
            placeholder="Email"
            className="text-sm text-gray-900 h-[40px] sm:h-[60px] pl-6 font-main rounded-full outline-none w-[270px] sm:w-[350px]"
          />
          <input
            type="password"
            placeholder="Password"
            className="text-sm text-gray-900 h-[40px] sm:h-[60px] pl-6 font-main rounded-full outline-none w-[270px] sm:w-[350px]"
          />
          <button className="px-16 rounded-full h-[40px] sm:h-[60px] bg-gray-900 text-white font-main">
            Log In
          </button>
        </div>
        <div className="mt-12 flex justify-center items-center flex-col gap-3">
          <p className="text-gray-400">Don't have an account?</p>
          <Link
            to="/create-account"
            onClick={createAccount()}
            className="text-gray-900 underline uppercase font-main"
          >
            Sign up now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
