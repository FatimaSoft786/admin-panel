"use client";
import React, { useState } from "react";
import { AiFillMessage } from "react-icons/ai";
import Appointments from "./Appointments";
import Prescription from "./Prescription";
import MedicalRecords from "./MedicalRecords";
import { FaCheck } from "react-icons/fa";

const ProfileCard = () => {
  const [activeTab, setActiveTab] = useState("appointments");

  const renderContent = () => {
    switch (activeTab) {
      case "appointments":
        return <Appointments />;
      case "prescription":
        return <Prescription />;
      case "medicalRecords":
        return <MedicalRecords />;
      default:
        return <Appointments />;
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex relative items-center max-md:items-start max-md:flex-col">
        <div className="relative">
          <img
            src="/img/user.png"
            alt="Dr. Hamza Yasin"
            className="size-36 border-2 max-md:size-20 border-dark-blue rounded-full mr-6"
          />
          <div className="absolute max-md:bottom-2 max-md:right-6 bottom-5 right-[30px] text-white rounded-full p-1.5 bg-dark-blue">
            <FaCheck className="size-2" />
          </div>
        </div>
        <div>
          <h1 className="text-2xl max-md:text-lg max-md:text-smfont-bold">
            Dr. Hamza Yasin
          </h1>
          <p className="text-light-gray text-lg">Dentist</p>
          <p className="text-light-gray">
            {" "}
            <span className="text-black font-semibold">Appointment Time </span>:
            Wed, 18 May : 8: 00 AM
          </p>
          <p className="text-light-gray">Age : 24 | Male | AB Positive</p>
        </div>
        <button className="ml-auto max-md:mt-6 max-md:w-full bg-dark-blue max-md:justify-center text-white px-5 text-lg max-md:text-sm py-2 rounded-lg flex items-center gap-2">
          <AiFillMessage className="text-white" /> Send Message
        </button>
      </div>

      <hr className="my-9" />
      <div className=" rounded-xl">
        <div className="mb-6 w-full">
          <nav className="flex space-x-4 w-full gap-4">
            <button
              onClick={() => setActiveTab("appointments")}
              className={`pb-4 px-5 text-lg max-md:text-sm ${
                activeTab === "appointments"
                  ? "border-b-3 font-bold  border-dark-blue text-dark-blue"
                  : "text-light-gray"
              }`}
            >
              Appointments
            </button>
            <button
              onClick={() => setActiveTab("prescription")}
              className={`pb-4 px-5 text-lg max-md:text-sm ${
                activeTab === "prescription"
                  ? "border-b-3 font-bold border-dark-blue text-dark-blue"
                  : "text-light-gray"
              }`}
            >
              Prescription
            </button>
            <button
              onClick={() => setActiveTab("medicalRecords")}
              className={`pb-4 px-5 text-lg max-md:text-sm ${
                activeTab === "medicalRecords"
                  ? "border-b-3 font-bold border-dark-blue text-dark-blue"
                  : "text-light-gray"
              }`}
            >
              Medical Records
            </button>
          </nav>
        </div>
        <div>{renderContent()}</div>
      </div>
    </div>
  );
};

export default ProfileCard;
