import React from "react";
import MedicalSection from "../components/MedicalSection";
import DoctorCard from "@/app/components/DoctorCard";

const doctors = [
  {
    name: "Dr. Hamza Yasin",
    qualification: "MBBS, MS - General Surgery",
    rating: "★★★★★",
    location: "Lahore, Pakistan",
    availability: "Friday March 12, 13:30PM",
    fee: "$140-$160",
    image: "/doctor/doctor.svg",
    fav: false,
  },
  {
    name: "Dr. Hamza Yasin",
    qualification: "MBBS, MS - General Surgery",
    rating: "★★★",
    location: "Lahore, Pakistan",
    availability: "Friday March 12, 13:30PM",
    fee: "$140-$160",
    image: "/doctor/doctor.svg",
    fav: false,
  },
  {
    name: "Dr. Hamza Yasin",
    qualification: "MBBS, MS - General Surgery",
    rating: "★★★★",
    location: "Lahore, Pakistan",
    availability: "Friday March 12, 13:30PM",
    fee: "$140-$160",
    image: "/doctor/doctor.svg",
    fav: false,
  },
  {
    name: "Dr. Hamza Yasin",
    qualification: "MBBS, MS - General Surgery",
    rating: "★★",
    location: "Lahore, Pakistan",
    availability: "Friday March 12, 13:30PM",
    fee: "$140-$160",
    image: "/doctor/doctor.svg",
    fav: false,
  },
  {
    name: "Dr. Hamza Yasin",
    qualification: "MBBS, MS - General Surgery",
    rating: "★★",
    location: "Lahore, Pakistan",
    availability: "Friday March 12, 13:30PM",
    fee: "$140-$160",
    image: "/doctor/doctor.svg",
    fav: false,
  },
  {
    name: "Dr. Hamza Yasin",
    qualification: "MBBS, MS - General Surgery",
    rating: "★★",
    location: "Lahore, Pakistan",
    availability: "Friday March 12, 13:30PM",
    fee: "$140-$160",
    image: "/doctor/doctor.svg",
    fav: false,
  },
  {
    name: "Dr. Hamza Yasin",
    qualification: "MBBS, MS - General Surgery",
    rating: "★★",
    location: "Lahore, Pakistan",
    availability: "Friday March 12, 13:30PM",
    fee: "$140-$160",
    image: "/doctor/doctor.svg",
    fav: false,
  },
  {
    name: "Dr. Hamza Yasin",
    qualification: "MBBS, MS - General Surgery",
    rating: "★★",
    location: "Lahore, Pakistan",
    availability: "Friday March 12, 13:30PM",
    fee: "$140-$160",
    image: "/doctor/doctor.svg",
    fav: false,
  },
];

const page = () => {
  return (
    <div className="overflow-hidden">
      <MedicalSection />
      <div className="w-full grid container mx-auto grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 p-8">
        {doctors.map((doctor, index) => (
          <DoctorCard key={index} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default page;
