"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Image } from "@nextui-org/react";
import Link from "next/link";
import { FaEye } from "react-icons/fa";
import getPath from "@/utils/path";
import RightSilder from "@/app/components/RightSilder";
import axios from "axios";
import { toast } from "react-hot-toast";
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
    axios.post("https://video-medico-backend-production.up.railway.app/admin/login",data)
    .then(response=>{
      if(response.data.success === true){
        toast.success(response.data.message);
      localStorage.setItem("token", response.data.token);
      router.push(`/${path}/admin/dashboard`);
      }else{
      toast.error(response.data.message);
       // setError(response.data.message);
      }
      reset();
    }).catch(error=>{
      toast.error(error.response.data);
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
          <h2 className="text-3xl text-center font-bold mb-1">Benvenuto/a!</h2>
          <p className="mb-8 text-center">
            Inserisci i tuoi dati per iscriverti alla nostra piattaforma.
          </p>
          <input
            type="email"
            placeholder="Example@example.com"
             {...register('email', {
                    required: 'E-mail è obbligatoria',
                    pattern: {
                      value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                      message: "Inserisci un'e-mail valida",
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
                  required: 'È richiesta la password',
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
            <button type="submit" className={buttonClass}>Iscriviti</button>
              {/* <div className="text-center mt-2 mx-auto left-0 right-0">
            <Link href={`/${path}/auth/admin/signup`} className="group gap-2">
              Non hai ancora un account?
              <span className="font-bold group-hover:underline">Iscriviti</span>
            </Link>
          </div> */}
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
