import React, { useContext, useEffect, useState } from "react";
import  {UserDataContext}  from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserProtectWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserDataContext);
  const [isloading, setIsloading] = useState(true);
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        
      })
      .then((response) => {
        console.log("API Response:", response);
        if (response.status === 200) {
          console.log("API Response:", response);
          setUser(response.data);
          setIsloading(false);
        } else {
          console.warn("Unexpected status code:", response.status);
        }
      })
      .catch((err) => {
        console.error("API Error:", err);
        localStorage.removeItem("token");
        navigate("/login");
      });
  }, [token]);
  if (isloading) {
    return <div>Loading....</div>;
  }
  return <>{children}</>;
};
export default UserProtectWrapper;
