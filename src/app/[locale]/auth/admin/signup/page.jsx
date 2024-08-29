"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Image } from "@nextui-org/react";
import Link from "next/link";
import { FaEye } from "react-icons/fa";
import { toast } from "react-hot-toast";
import RightSilder from "@/app/components/RightSilder";
import getPath from "@/utils/path";
import axios from "axios";
const container = "flex flex-wrap min-h-screen";
const formContainer =
  "w-full md:w-1/2 h-full flex flex-col justify-center items-center p-8";
const form = "w-full max-w-md flex flex-col justify-center h-[88.5vh] relative";
const inputClass = "w-full p-3 mb-4 border rounded-lg";
const buttonClass = "w-full bg-dark-blue text-white p-3 rounded";
const sliderContainer = "w-full md:w-1/2 h-screen max-md:hidden";

const RegisterPage = () => {
  const [show, setShow] = useState(false);
  const path = getPath();

   const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

   const onSubmit = async (data) => {
    console.log(data);
    axios.post("https://video-medico-backend-production.up.railway.app/admin/signup",data)
    .then(response=>{
      if(response.data.success === true){
        toast.success(response.data.message);
     console.log(response.data.message);
      //router.push(`/${path}/admin/dashboard`);
      }else{
        console.log(response.data.message);
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
      <title>Sign Up | Medical Appointment</title>
      <div className={formContainer}>
        <form className={form} onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center justify-center pb-4">
            <Image src={`/svg/logo.svg`} size={56} className=" w-fit" />
          </div>
          <h2 className="text-3xl text-center font-bold mb-1">Benvenuto/a!</h2>
          <p className="mb-8 text-center">
           Inserisci i tuoi dati per iscriverti alla nostra piattaforma.
          </p>
          <input
            type="email"
            placeholder="Example@example.com"
            className={inputClass}
             {...register('email', {
                    required: 'E-mail è obbligatoria',
                    pattern: {
                      value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                      message: "Inserisci un'e-mail valida",
                    },
                  })}
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
          <button type="submit" className={buttonClass}>Registrazione</button>
          
        </form>
      </div>
      <div className={sliderContainer}>
        <RightSilder />
      </div>
    </div>
  );
};

export default RegisterPage;
