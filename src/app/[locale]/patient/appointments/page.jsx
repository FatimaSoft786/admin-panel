import React from "react";
import MedicalSection from "../components/MedicalSection";
// import Tabs from "@/app/components/Tabs";
// import DoctorCard from "@/app/components/DoctorCard";
// import PendingDoctor from "../components/PendingDoctor";
import ConfirmDoctor from "../components/ConfirmedDoctor";
import Link from "next/link";
import getPath from "@/utils/path";

const pendingDoctors = [
  {
    name: "Dr. Hamza Yasin",
    qualification: "MBBS, MS - General Surgery",
    rating: "★★★★★",
    specialist: "Dentist",
    payment_id: 2233,
    location: "Lahore, Pakistan",
    availability: "Friday March 12, 13:30PM",
    image: "/doctor/doctor.svg",
    appointmentAt: "12 April 2024",
  },
  {
    name: "Dr. Hamza Yasin",
    qualification: "MBBS, MS - General Surgery",
    rating: "★★★★★",
    specialist: "Dentist",
    payment_id: 2233,
    location: "Lahore, Pakistan",
    availability: "Friday March 12, 13:30PM",
    image: "/doctor/doctor.svg",
    appointmentAt: "12 April 2024",
  },
  {
    name: "Dr. Hamza Yasin",
    qualification: "MBBS, MS - General Surgery",
    rating: "★★★★★",
    specialist: "Dentist",
    payment_id: 2233,
    location: "Lahore, Pakistan",
    availability: "Friday March 12, 13:30PM",
    image: "/doctor/doctor.svg",
    appointmentAt: "12 April 2024",
  },
  {
    name: "Dr. Hamza Yasin",
    qualification: "MBBS, MS - General Surgery",
    rating: "★★★★★",
    specialist: "Dentist",
    payment_id: 2233,
    location: "Lahore, Pakistan",
    availability: "Friday March 12, 13:30PM",
    image: "/doctor/doctor.svg",
    appointmentAt: "12 April 2024",
  },
  {
    name: "Dr. Hamza Yasin",
    qualification: "MBBS, MS - General Surgery",
    rating: "★★★★★",
    specialist: "Dentist",
    payment_id: 2233,
    location: "Lahore, Pakistan",
    availability: "Friday March 12, 13:30PM",
    image: "/doctor/doctor.svg",
    appointmentAt: "12 April 2024",
  },
  {
    name: "Dr. Hamza Yasin",
    qualification: "MBBS, MS - General Surgery",
    rating: "★★★★★",
    specialist: "Dentist",
    payment_id: 2233,
    location: "Lahore, Pakistan",
    availability: "Friday March 12, 13:30PM",
    image: "/doctor/doctor.svg",
    appointmentAt: "12 April 2024",
  },
  {
    name: "Dr. Hamza Yasin",
    qualification: "MBBS, MS - General Surgery",
    rating: "★★★★★",
    specialist: "Dentist",
    payment_id: 2233,
    location: "Lahore, Pakistan",
    availability: "Friday March 12, 13:30PM",
    image: "/doctor/doctor.svg",
    appointmentAt: "12 April 2024",
  },
  {
    name: "Dr. Hamza Yasin",
    qualification: "MBBS, MS - General Surgery",
    rating: "★★★★★",
    specialist: "Dentist",
    payment_id: 2233,
    location: "Lahore, Pakistan",
    availability: "Friday March 12, 13:30PM",
    image: "/doctor/doctor.svg",
    appointmentAt: "12 April 2024",
  },
  {
    name: "Dr. Hamza Yasin",
    qualification: "MBBS, MS - General Surgery",
    rating: "★★★★★",
    specialist: "Dentist",
    payment_id: 2233,
    location: "Lahore, Pakistan",
    availability: "Friday March 12, 13:30PM",
    image: "/doctor/doctor.svg",
    appointmentAt: "12 April 2024",
  },
];
const page = () => {
  // const tabs = [
  //   {
  //     label: "Pending Appointments",
  //     content: (
  //       <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-8">
  //         {pendingDoctors.map((doctor, index) => (
  //           <PendingDoctor key={index} doctor={doctor} />
  //         ))}
  //       </div>
  //     ),
  //   },
  //   {
  //     label: "Confirmed Appointments",
  //     content: (
  //       <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-8">
  //         {pendingDoctors.map((doctor, index) => (
  //           <ConfirmDoctor key={index} doctor={doctor} />
  //         ))}
  //       </div>
  //     ),
  //   },
  // ];
  return (
    <div className="overflow-hidden">
      <title>Appointment | A Doctor's Appointment</title>
      <MedicalSection />
      <div className="grid grid-cols-1 container mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-8">
        {pendingDoctors.map((doctor, index) => (
          
          <ConfirmDoctor key={index} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default page;
