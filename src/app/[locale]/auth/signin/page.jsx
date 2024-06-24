"use client";
import React, { useState } from "react";

import { Image } from "@nextui-org/react";
import Link from "next/link";
import { FaEye } from "react-icons/fa";
import getPath from "@/utils/path";
import RightSilder from "@/app/components/RightSilder";

const container = "flex flex-wrap min-h-screen";
const formContainer =
  "w-full md:w-1/2 h-full flex flex-col justify-center items-center max-md:w-full";
const form = "w-full max-w-md flex flex-col justify-center h-[88.5vh] relative";
const inputClass = "w-full p-3 mb-4 border rounded-lg";
const buttonClass = "w-full bg-dark-blue text-white p-3 rounded";
const sliderContainer = "w-full md:w-1/2 h-screen max-md:hidden";

const LoginPage = () => {
  const [show, setShow] = useState(false);
  const path = getPath();
  return (
    <div className={container}>
      <title>Sign in | Medical Appointment</title>
      <div className={formContainer}>
        <form className={form} onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col items-center justify-center pb-4">
            <Image src={`/svg/logo.svg`} size={56} className=" w-fit" />
          </div>
          <h2 className="text-3xl text-center font-bold mb-1">Welcome!</h2>
          <p className="mb-8 text-center">
            Enter your details to access the platform.
          </p>
          <input
            type="email"
            placeholder="Example@example.com"
            className={inputClass}
          />
          <div className="flex relative">
            <input
              type={show ? "text" : "password"}
              placeholder="Password"
              className={inputClass}
            />
            <FaEye
              onClick={() => setShow(!show)}
              className="absolute cursor-pointer right-4 m-auto top-4"
            />
          </div>
          <div className="flex justify-between items-center mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2 size-4 rounded-lg accent-dark-blue"
              />{" "}
              Remember me
            </label>
            <Link
              href={`/${path}/auth/forgetPassword`}
              className="text-dark-blue"
            >
              Forgot Password?
            </Link>
          </div>
          <Link href={`/${path}/patient`}>
            <button className={buttonClass}>Log In</button>
          </Link>
          <div className="text-center absolute bottom-4 mx-auto left-0 right-0">
            <Link href={`/${path}/auth/signup`} className="group gap-2">
              Don't have an account?{" "}
              <span className="font-bold group-hover:underline">Sign up!</span>
            </Link>
          </div>
        </form>
      </div>
      <div className={sliderContainer}>
        <RightSilder />
      </div>
    </div>
  );
};

export default LoginPage;
