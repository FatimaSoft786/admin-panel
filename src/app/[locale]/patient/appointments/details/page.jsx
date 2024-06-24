"use client";
import React from "react";
import ProfileCard from "./ProfileCard";
import AppointmentTabs from "./AppointmentTabs";
import RatingSection from "./RatingSection";
import { FaArrowLeft } from "react-icons/fa6";
import Link from "next/link";
import getPath from "@/utils/path";

const doctorData = [
  {
    name: "Dr. Hamza Yasin",
    qualification: "MBBS",
    rating: "★★★★★",
    feedback:
      "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetu Lorem ipsum dolor sit ametipsum dolor sit amet consectetur ",
    image: "/doctor/doctor.svg",
  },
  {
    name: "Dr. Hamza Yasin",
    qualification: "MBBS",
    rating: "★★★★★",
    feedback:
      "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetu Lorem ipsum dolor sit ametipsum dolor sit amet consectetur ",
    image: "/doctor/doctor.svg",
  },
  {
    name: "Dr. Hamza Yasin",
    qualification: "MBBS",
    rating: "★★★★★",
    feedback:
      "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetu Lorem ipsum dolor sit ametipsum dolor sit amet consectetur ",
    image: "/doctor/doctor.svg",
  },
  {
    name: "Dr. Hamza Yasin",
    qualification: "MBBS",
    rating: "★★★★★",
    feedback:
      "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetu Lorem ipsum dolor sit ametipsum dolor sit amet consectetur ",
    image: "/doctor/doctor.svg",
  },
  {
    name: "Dr. Hamza Yasin",
    qualification: "MBBS",
    rating: "★★★★★",
    feedback:
      "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetu Lorem ipsum dolor sit ametipsum dolor sit amet consectetur ",
    image: "/doctor/doctor.svg",
  },
];

const page = () => {
  const path = getPath();
  return (
    <div className="container px-6 mx-auto">
      <Link href={`/${path}/patient/appointments`} className="active:scale-80 transition-all duration-300 hover:text-black/80">
        <FaArrowLeft className="my-6 text-2xl "/>
      </Link>
      <title>Appointment Details</title>
      <ProfileCard />
      <hr className="w-full h-2" />
      <AppointmentTabs />
      <div className="mt-6 ">
        <h2 className="text-3xl font-bold my-6 mt-12">
          Reviews About Dr. Hamza Yasin
        </h2>
        <div className="grid grid-cols-4 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
          {doctorData.map((doctor, index) => (
            <RatingSection key={index} doctor={doctor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
