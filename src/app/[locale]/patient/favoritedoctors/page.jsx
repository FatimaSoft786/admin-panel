"use client";
import React from "react";
import MedicalSection from "../components/MedicalSection";
import DoctorCard from "@/app/components/DoctorCard";
import Link from "next/link";
import getPath from "@/utils/path";

const doctors = [
  {
    name: "Dr. Hamza Yasin",
    qualification: "MBBS, MS - General Surgery",
    rating: "★★★★★",
    location: "Lahore, Pakistan",
    availability: "Friday March 12, 13:30PM",
    fee: "$140-$160",
    image: "/doctor/doctor.svg",
  },
  {
    name: "Dr. Hamza Yasin",
    qualification: "MBBS, MS - General Surgery",
    rating: "★★★",
    location: "Lahore, Pakistan",
    availability: "Friday March 12, 13:30PM",
    fee: "$140-$160",
    image: "/doctor/doctor.svg",
  },
  {
    name: "Dr. Hamza Yasin",
    qualification: "MBBS, MS - General Surgery",
    rating: "★★★★",
    location: "Lahore, Pakistan",
    availability: "Friday March 12, 13:30PM",
    fee: "$140-$160",
    image: "/doctor/doctor.svg",
    fav: true,
  },
  {
    name: "Dr. Hamza Yasin",
    qualification: "MBBS, MS - General Surgery",
    rating: "★★",
    location: "Lahore, Pakistan",
    availability: "Friday March 12, 13:30PM",
    fee: "$140-$160",
    image: "/doctor/doctor.svg",
    fav: true,
  },
  {
    name: "Dr. Hamza Yasin",
    qualification: "MBBS, MS - General Surgery",
    rating: "★★",
    location: "Lahore, Pakistan",
    availability: "Friday March 12, 13:30PM",
    fee: "$140-$160",
    image: "/doctor/doctor.svg",
  },
  {
    name: "Dr. Hamza Yasin",
    qualification: "MBBS, MS - General Surgery",
    rating: "★★",
    location: "Lahore, Pakistan",
    availability: "Friday March 12, 13:30PM",
    fee: "$140-$160",
    image: "/doctor/doctor.svg",
    fav: true,
  },
  {
    name: "Dr. Hamza Yasin",
    qualification: "MBBS, MS - General Surgery",
    rating: "★★",
    location: "Lahore, Pakistan",
    availability: "Friday March 12, 13:30PM",
    fee: "$140-$160",
    image: "/doctor/doctor.svg",
    fav: true,
  },
  {
    name: "Dr. Hamza Yasin",
    qualification: "MBBS, MS - General Surgery",
    rating: "★★",
    location: "Lahore, Pakistan",
    availability: "Friday March 12, 13:30PM",
    fee: "$140-$160",
    image: "/doctor/doctor.svg",
    fav: true,
  },
];

const page = () => {
  const path = getPath();
  return (
    <div className="overflow-hidden">
      <title>Favorite Doctors | Medical Appointment</title>
      <MedicalSection />
      <div className="w-full grid grid-cols-1 container mx-auto sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 p-8">
        {doctors.map((doctor, index) => (
          <Link href={`/${path}/patient/doctorDetails`}>
            <DoctorCard key={index} doctor={doctor} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
