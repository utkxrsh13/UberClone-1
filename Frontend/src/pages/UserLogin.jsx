import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import axios from "axios";


const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const {user, setUser} = useContext(UserDataContext);
  const navigate = useNavigate();


  const submitHandler =async (e) => {
    e.preventDefault();
    const userdata = {
      email: email,
      password: password,
    }
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/login`,
      userdata
    );
    if (response.status == 200) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem('token', data.token)
      navigate("/home");
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div className="h-screen p-7 flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Uber logo"
        />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            className="bg-[#eeee] rounded px-4 py-2 w-full text-lg placeholder:text-base mb-7"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            type="email"
            placeholder="email@example.com"
          />

          <h3 className="text-lg font-medium mb-2">Enter Password</h3>

          <input
            className="bg-[#eeee] rounded px-4 py-2 w-full text-lg placeholder:text-base mb-7"
            type="password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
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
        <Link
          to="/captain-login"
          className="bg-[#c1f524] flex items-center justify-center text-black font-semibold rounded px-4 py-2 w-full text-lg placeholder:text-base mb-5"
        >
          Sign in as captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
