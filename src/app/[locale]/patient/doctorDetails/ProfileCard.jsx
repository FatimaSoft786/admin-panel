"use client";
import React, { useState } from "react";
import { FaCheck, FaMapMarkerAlt } from "react-icons/fa";

const ProfileCard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return <Overview />;
      case "reviews":
        return <Reviews />;
      case "businessHours":
        return <BusinessHours />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="container mx-auto ">
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
          <p className="text-gray-500">Dentist</p>
          <p className="text-gray-500 flex items-center">
            <FaMapMarkerAlt className="mr-2" /> Royal Hospital, Phnom Penh
          </p>
          <div className="flex gap-4 mt-2 max-md:items-center max-md:justify-center">
            <button className="bg-dark-blue text-white px-4 py-2 rounded-lg max-sm:text-sm max-md:w-full text-center">
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
      <hr className="my-9" />
      <div className="border p-4 rounded-xl">
        <div className="border-b border-gray-200 mb-6 w-full">
          <nav className="flex space-x-4 w-full">
            <button
              onClick={() => setActiveTab("overview")}
              className={`pb-4 flex-1 ${
                activeTab === "overview"
                  ? "border-b-3 font-bold border-dark-blue text-dark-blue"
                  : "text-gray-500"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("reviews")}
              className={`pb-4 flex-1 ${
                activeTab === "reviews"
                  ? "border-b-3 font-bold border-dark-blue text-dark-blue"
                  : "text-gray-500"
              }`}
            >
              Reviews
            </button>
            <button
              onClick={() => setActiveTab("businessHours")}
              className={`pb-4 flex-1 ${
                activeTab === "businessHours"
                  ? "border-b-3 font-bold border-dark-blue text-dark-blue"
                  : "text-gray-500"
              }`}
            >
              Business Hours
            </button>
          </nav>
        </div>
        <div>{renderContent()}</div>
      </div>
    </div>
  );
};

const Overview = () => (
  <div>
    <h2 className="text-xl font-bold my-5">About Me</h2>
    <p className="text-light-gray mb-6">
      Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
      consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit
      amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor
      sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum
      dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem
      ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur
      Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
      consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit
      amet consectetur Lorem ipsum dolor sit amet consectetur
    </p>
    <h3 className="text-xl font-bold my-5">Education</h3>
    <ul className="list-none relative text-light-gray flex flex-col gap-4">
      <div className="absolute w-0.5 left-3 top-7 h-[41%] bg-dark-blue"></div>
      <li className="relative flex flex-col pl-8">
        <span className="absolute left-0 top-1 size-6 bg-dark-blue/10 border-2 border-dark-blue rounded-full"></span>
        <span className=" text-black"> American Dental Medical University</span>
        <span>BDS</span>
        <span>1998 - 2003</span>
      </li>
      <li className="relative flex flex-col pl-8">
        <span className="absolute left-0 top-1 size-6 bg-dark-blue/10 border-2 border-dark-blue rounded-full"></span>
        <span className=" text-black"> American Dental Medical University</span>
        <span>BDS</span>
        <span>1998 - 2003</span>
      </li>
    </ul>
    <h3 className="text-xl font-bold my-5">Work & Experience</h3>

    <ul className="list-none relative text-light-gray flex flex-col gap-4">
      <li className="relative flex flex-col pl-8">
        <div className="absolute w-0.5 left-3 top-7 h-[88%] bg-dark-blue"></div>{" "}
        <span className="absolute left-0 top-1 size-6 bg-dark-blue/10 border-2 border-dark-blue rounded-full"></span>
        <span className="">Glowing Smiles Family Dental Clinic</span>
        <span>2010 - Present ( 5 Years)</span>
      </li>
      <li className="relative flex flex-col pl-8">
        <div className="absolute w-0.5 left-3 top-7 h-[88%] bg-dark-blue"></div>{" "}
        <span className="absolute left-0 top-1 size-6 bg-dark-blue/10 border-2 border-dark-blue rounded-full"></span>
        <span className="">Glowing Smiles Family Dental Clinic</span>
        <span>2010 - Present ( 5 Years)</span>
      </li>
      <li className="relative flex flex-col pl-8">
        {" "}
        <span className="absolute left-0 top-1 size-6 bg-dark-blue/10 border-2 border-dark-blue rounded-full"></span>
        <span className="">Glowing Smiles Family Dental Clinic</span>
        <span>2010 - Present ( 5 Years)</span>
      </li>
    </ul>

    <h3 className="text-lg font-semibold my-5">Awards</h3>

    <ul className="list-none relative text-light-gray flex flex-col gap-4">
      <li className="relative flex flex-col pl-8">
        <div className="absolute w-0.5 left-3 top-7 h-[92%] bg-dark-blue"></div>{" "}
        <span className="absolute left-0 top-1 size-6 bg-dark-blue/10 border-2 border-dark-blue rounded-full"></span>
        <span className="text-sm text-dark-blue">july 2024</span>
        <span className="text-black">Humanitarian Awarad</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolor
          autem asperiores? Nobis temporibus reprehenderit voluptas molestiae
          quas perferendis nesciunt commodi. Atque consequatur et voluptas,
          animi nisi inventore neque amet!
        </span>
      </li>
      <li className="relative flex flex-col pl-8">
        <div className="absolute w-0.5 left-3 top-7 h-[78%] bg-dark-blue"></div>{" "}
        <span className="absolute left-0 top-1 size-6 bg-dark-blue/10 border-2 border-dark-blue rounded-full"></span>
        <span className="text-sm text-dark-blue">july 2024</span>
        <span className="text-black">Humanitarian Awarad</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolor
          autem asperiores? Nobis temporibus reprehenderit voluptas molestiae
          quas perferendis nesciunt commodi. Atque consequatur et voluptas,
          animi nisi inventore neque amet!
        </span>
      </li>
    </ul>
  </div>
);

const Reviews = () => (
  <div>
    <h2 className="text-xl font-bold mb-4">Reviews</h2>
    <p className="text-gray-700">No reviews available.</p>
  </div>
);

const BusinessHours = () => (
  <div>
    <h2 className="text-xl font-bold mb-4">Business Hours</h2>
    <p className="text-gray-700">Monday - Friday: 9 AM - 6 PM</p>
    <p className="text-gray-700">Saturday: 10 AM - 4 PM</p>
    <p className="text-gray-700">Sunday: Closed</p>
  </div>
);

export default ProfileCard;
