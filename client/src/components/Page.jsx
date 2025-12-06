import React from "react";
import {useNavigate } from "react-router-dom";
import axios from "axios";
import LogoutButton from "./Logout";
const Page = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="bg-gray-800 shadow-xl rounded-2xl p-10 text-center w-96">
        <h1 className="text-3xl font-bold text-white">
          Welcome 🎉
        </h1>
        <p className=" text-white mt-4">
          You have successfully logged in.
        </p>
        <div className="my-4" ><LogoutButton /></div>
      </div>
    </div>
  );
};

export default Page;
