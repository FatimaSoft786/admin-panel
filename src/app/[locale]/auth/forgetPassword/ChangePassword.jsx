"use client";
import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import Link from "next/link";
import getPath from "@/utils/path";
const container = "flex flex-col items-center";
const form = "w-full max-w-md";
const inputClass = "w-full p-3 mb-4 border rounded-lg";
const buttonClass = "w-full bg-dark-blue text-white p-3 rounded";

const ChangePassword = ({ email }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [show, setShow] = useState(false);
  const path = getPath();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return;
    }
    // Add logic to change password here
    alert("Password changed successfully!");
  };

  return (
    <div className={container}>
      <form className={form} onSubmit={handleSubmit}>
        <h2 className="text-3xl text-center font-bold mb-4">Change Password</h2>
        <p className="text-center">
          Input new desired password in the input fields below to create a new
          password.
        </p>
        <div className="flex relative">
          <input
            type={show ? "text" : "password"}
            placeholder="Password"
            className={inputClass}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaEye
            onClick={(e) => setShow(!show)}
            className="absolute cursor-pointer right-4 m-auto top-4"
          />
        </div>
        <div className="flex relative">
          <input
            type={show ? "text" : "password"}
            placeholder="Confirm Password"
            className={inputClass}
            onClick={(e) => setConfirmPassword(e.target.value)}
          />
          <FaEye
            onClick={(e) => setShow(!show)}
            className="absolute cursor-pointer right-4 m-auto top-4"
          />
        </div>
        <Link href={`/${path}/patient`}>
          <button type="submit" className={buttonClass}>
            {" "}
            Change Password
          </button>
        </Link>
      </form>
    </div>
  );
};

export default ChangePassword;
