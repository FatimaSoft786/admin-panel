"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Image } from "@nextui-org/react";
import Link from "next/link";
import { FaEye } from "react-icons/fa";
import getPath from "@/utils/path";
import RightSilder from "@/app/components/RightSilder";
import axios from "axios";
const container = "flex flex-wrap min-h-screen";
const formContainer =
  "w-full md:w-1/2 h-full flex flex-col justify-center items-center max-md:w-full";
const form = "w-full max-w-md flex flex-col justify-center h-[88.5vh] relative";
const inputClass = "w-full p-3 mb-4 border rounded-lg";
const buttonClass = "w-full bg-dark-blue text-white p-3 rounded";
const sliderContainer = "w-full md:w-1/2 h-screen max-md:hidden";

import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const [show, setShow] = useState(false);
  const path = getPath();
  const router = useRouter();
  const [error, setError] = useState('');

    const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

   const onSubmit = async (data) => {
    console.log(data);
    axios.post("https://video-medical-backend-production.up.railway.app/admin/login",data)
    .then(response=>{
      if(response.data.success === true){
      localStorage.setItem("token", response.data.token);
      router.push(`/${path}/admin/dashboard`);
      }else{
        setError(response.data.message);
      }
      reset();
    }).catch(error=>{
      console.log(error.response.data)
    })
  };


  return (
    <div className={container}>
      <title>Sign in | Medical Appointment</title>
      <div className={formContainer}>
        <form className={form} onSubmit={handleSubmit(onSubmit)}>
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
             {...register('email', {
                    required: 'email is required',
                    pattern: {
                      value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                      message: 'enter valid email',
                    },
                  })}
            className={inputClass}
          />
           {errors.email && (
                  <p className=" text-pure-red">{errors.email.message}</p>
                )}
          <div className="flex relative">
            <input
              type={show ? "text" : "password"}
              placeholder="Password"
              className={inputClass}
               {...register("password", {
                  required: 'password is required',
                  minLength: 8
                })}
            />
            <FaEye
              onClick={() => setShow(!show)}
              className="absolute cursor-pointer right-4 m-auto top-4"
            />
          </div>
          {errors.password && (
                  <p className="text-pure-red">{errors.password.message}</p>
                )}
          
         
          {/* <Link href={`/${path}/admin/dashboard`}></Link> */}
            <button type="submit" className={buttonClass}>Log In</button>
              <div className=" mt-2 justify-center items-center">
 <p className="text-pure-red text-center">{error}</p>
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
