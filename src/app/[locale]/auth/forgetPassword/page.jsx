"use client";
import React, { useState } from "react";
import { Image } from "@nextui-org/react";
import VerifyOtp from "./VerifyOtp";
import ChangePassword from "./ChangePassword";
import RightSilder from "@/app/components/RightSilder";

const container = "flex flex-wrap min-h-screen justify-center items-center";
const formContainer =
  "w-full md:w-1/2 h-full flex flex-col justify-center items-center p-8";
const form = "w-full max-w-md";
const inputClass = "w-full p-3 mb-4 border rounded-lg";
const buttonClass = "w-full bg-dark-blue text-white p-3 rounded";

const ForgetPage = () => {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(1); // 1: Request OTP, 2: Verify OTP, 3: Change Password

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setEmail(e.target.email.value);
    setStep(2); // Move to OTP step
  };

  const handleOtpVerified = () => {
    setStep(3); // Move to Change Password step
  };
const sliderContainer = "w-full md:w-1/2 h-screen max-md:hidden";

  return (
    <div className={container}>
      <title>Forget Password | Medical Appointment</title>
      <div className={formContainer}>
        {step === 1 && (
          <form className={form} onSubmit={handleEmailSubmit}>
            <div className="flex items-center justify-center pb-4">
              <Image src={`/svg/logo.svg`} size={56} className="w-fit" />
            </div>
            <h2 className="text-3xl text-center font-bold mb-1">
              Forgot Password
            </h2>
            <p className="mb-8 text-center">
              Dont worry we can help out if you still remember your email
              address you can quickly reset your password.{" "}
            </p>
            <input
              type="email"
              placeholder="Example@example.com"
              className={inputClass}
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className={buttonClass}>
              Request Password Change
            </button>
          </form>
        )}
        {step === 2 && <VerifyOtp onOtpVerified={handleOtpVerified} />}
        {step === 3 && <ChangePassword email={email} />}
      </div>
      <div className={sliderContainer}>
        <RightSilder />
      </div>
    </div>
  );
};

export default ForgetPage;
