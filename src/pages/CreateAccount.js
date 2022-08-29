import React from "react";
import { ImFacebook, ImGoogle } from "react-icons/im";
import { Link } from "react-router-dom";

const CreateAccount = () => {
  return (
    <div className="bg-gray-200 w-full py-6 min-h-screen flex justify-center items-center">
      <div className="flex flex-col gap-3 items-center justify-center">
        <h1>Create Account</h1>
        <div className="flex flex-col gap-3 mt-6">
          <button className="flex gap-x-1 w-[270px] sm:w-[350px] rounded-full justify-center items-center bg-[#4a69bd] px-6 font-main text-white py-2 sm:py-3">
            <ImFacebook /> Login with Facebook
          </button>

          <button className="flex gap-x-1 w-[270px] sm:w-[350px] justify-center rounded-full items-center bg-[#e55039] px-6 font-main text-white py-2 sm:py-3">
            <ImGoogle /> Login with Google
          </button>
        </div>
        <div className="flex items-center justify-center flex-col gap-3 mt-6">
          <h5 className="text-[18px] text-gray-900">Signup with email</h5>
          <input
            type="email"
            placeholder="Email"
            className="text-sm text-gray-900 h-[40px] sm:h-[60px] pl-6 font-main rounded-full outline-none w-[270px] sm:w-[350px]"
          />
          <input
            type="text"
            placeholder="Username"
            className="text-sm text-gray-900 h-[40px] sm:h-[60px] pl-6 font-main rounded-full outline-none w-[270px] sm:w-[350px]"
          />
          <input
            type="password"
            placeholder="Password"
            className="text-sm text-gray-900 h-[40px] sm:h-[60px] pl-6 font-main rounded-full outline-none w-[270px] sm:w-[350px]"
          />
          <div class="flex items-center w-[270px] sm:w-[350px] justify-center space-x-4 mt-4">
            <div class="shrink-0">
              <img
                class="h-12 w-12 object-cover rounded-full"
                src="https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="profile"
              />
            </div>
            <label class="block">
              <span class="sr-only">Choose profile photo</span>
              <input
                type="file"
                class="block w-full text-sm text-slate-500
                file:mr-4 file:py-2 file:px-4
                font-main
                file:rounded-full file:border-0
                 file:font-semibold
                file:bg-white file:text-gray-900 file:text-xs
                hover:file:bg-violet-100
                "
              />
            </label>
          </div>
          <button className="px-16 rounded-full mt-3 h-[40px] sm:h-[60px] bg-gray-900 text-white font-main">
            Sign Up
          </button>
        </div>
        <div className="mt-12 flex justify-center items-center flex-col gap-3">
          <p className="text-gray-400">Already have an account?</p>
          <Link
            to="/login"
            className="text-gray-900 underline uppercase font-main"
          >
            login now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
