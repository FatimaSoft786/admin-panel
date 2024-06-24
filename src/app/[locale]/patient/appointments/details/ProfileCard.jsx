import React from "react";
import { FaMapMarkerAlt, FaDollarSign, FaCheck } from "react-icons/fa";

const ProfileCard = () => {
  return (
    <div className="mx-auto max-md:p-2 rounded-lg">
      <div className="flex items-center max-md:items-start max-md:flex-col">
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
        <div className="max-md:w-full">
          <h1 className="text-2xl max-md:text-xl font-bold">Dr. Hamza Yasin</h1>
          <p className="text-light-gray">Dentist</p>
          <p className="text-light-gray flex items-center">
            {" "}
            <FaMapMarkerAlt className="mr-2" /> Royal Hospital, Phnom Penh
          </p>
          <div className="flex gap-4 mt-2 max-md:items-center  w-full">
            <button className="bg-light-gray text-black px-4 py-2 rounded-lg max-sm:text-sm max-md:w-full text-center">
              $50/Session
            </button>
            <button className="bg-dark-blue text-white px-4 py-2 rounded-lg max-sm:text-sm max-md:w-full !text-center">
              $90/Session 2nd Visit
            </button>
          </div>
        </div>
        <button className="ml-auto max-md:mt-6 max-md:w-full max-sm:text-sm bg-dark-blue text-white px-4 py-2 rounded-lg">
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
