import React from "react";

const UserLogin = () => {
  return (
    <div className="p-7">
      <form>
        <h3 className="text-xl mb-2">What's your email</h3>
        <input className="bg-[#eeee] rounded px-4 py-2 w-full text-lg placeholder:text-base mb-7"
          required
          type="email"
          placeholder="email@example.com" />

        <h3>Enter Password</h3>

        <input className="bg-[#eeee] rounded px-4 py-2 w-full text-lg placeholder:text-base mb-7"
         type="password" 
         required 
         placeholder="password" />

        <button className="bg-[#111] text-white font-semibold rounded px-4 py-2 w-full text-lg placeholder:text-base mb-7">Login</button>
      </form>
    </div>
  );
};

export default UserLogin;
