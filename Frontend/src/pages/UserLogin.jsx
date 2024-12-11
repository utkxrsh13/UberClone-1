import React from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  return (
    <div className="h-screen p-7 flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Uber logo"
        />
        <form>
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            className="bg-[#eeee] rounded px-4 py-2 w-full text-lg placeholder:text-base mb-7"
            required
            type="email"
            placeholder="email@example.com"
          />

          <h3 className="text-lg font-medium mb-2">Enter Password</h3>

          <input
            className="bg-[#eeee] rounded px-4 py-2 w-full text-lg placeholder:text-base mb-7"
            type="password"
            required
            placeholder="password"
          />

          <button className="bg-[#111] text-white font-semibold rounded px-4 py-2 w-full text-lg placeholder:text-base mb-3">
            Login
          </button>
        </form>
        <p className="text-center">
          New Here!
          <Link to="/signup" className="text-blue-600">
            Create new account
          </Link>
        </p>
      </div>
      <div>
        <button className="bg-[#c1f524] text-black font-semibold rounded px-4 py-2 w-full text-lg placeholder:text-base mb-7">
          Sign in as captain
        </button>
      </div>
    </div>
  );
};

export default UserLogin;
