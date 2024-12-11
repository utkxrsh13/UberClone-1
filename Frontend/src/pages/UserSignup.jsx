import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {UserDataContext} from "../context/UserContext.jsx";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();

  const {user, setUser} = React.useContext(UserDataContext)

  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/register`,
      newUser
    );
    if(response.status == 201){
      const data = response.data
      setUser(data.user)

      navigate('/home')
    }

    // console.log(userData);
    setFirstname("");
    setLastname("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="h-screen p-7 flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-3"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_jn2qOHnlX5UNHlIIHMBXg70W1UjlJia3S01jhb6qvvIcMkQcq84D_C-MeDflKDWHRIY&usqp=CAU"
          alt="Uber logo"
        />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg font-medium mb-2">What's your name</h3>
          <div className="flex gap-3 mb-5">
            <input
              className="bg-[#eeee] w-1/2 rounded px-4 py-2 text-base placeholder:text-base"
              required
              type="text"
              placeholder="first name"
              value={firstname}
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
            />
            <input
              className="bg-[#eeee] w-1/2 rounded px-4 py-2 text-base placeholder:text-base"
              required
              type="text"
              placeholder="last name"
              value={lastname}
              onChange={(e) => {
                setLastname(e.target.value);
              }}
            />
          </div>
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            className="bg-[#eeee] rounded px-4 py-2 w-full text-base placeholder:text-base mb-5"
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
            className="bg-[#eeee] rounded px-4 py-2 w-full text-base placeholder:text-base mb-5"
            type="password"
            required
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <button className="bg-[#111] text-white font-semibold rounded px-4 py-2 w-full text-lg placeholder:text-base mb-3">
            Create account
          </button>
        </form>
        <p className="text-center">
          Already have aa account!
          <Link to="/login" className="text-blue-600">
            Login Here
          </Link>
        </p>
      </div>
      <div>
        <p className="text-[10px] leading-tight">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline">Google Privacy</span> and{" "}
          <span className="underline">Terms of Service apply</span>.
        </p>
      </div>
    </div>
  );
};

export default UserSignup;
