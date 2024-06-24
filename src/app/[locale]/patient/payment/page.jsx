import React from "react";
import MedicalSection from "../components/MedicalSection";
import PaymentCard from "../components/PaymentCard";

const doctors = [
  {
    name: "Dr. Hamza Yasin",
    specialization: "Eye Specialist",
    paymentId: "3232",
    date: "12 April 2024",
    fee: "50",
    image: "/doctor/doctor.svg",
  },
  {
    name: "Dr. Hamza Yasin",
    specialization: "Eye Specialist",
    paymentId: "3232",
    date: "12 April 2024",
    fee: "50",
    image: "/doctor/doctor.svg",
  },
  {
    name: "Dr. Hamza Yasin",
    specialization: "Eye Specialist",
    paymentId: "3232",
    date: "12 April 2024",
    fee: "50",
    image: "/doctor/doctor.svg",
  },
  {
    name: "Dr. Hamza Yasin",
    specialization: "Eye Specialist",
    paymentId: "3232",
    date: "12 April 2024",
    fee: "50",
    image: "/doctor/doctor.svg",
  },
  {
    name: "Dr. Hamza Yasin",
    specialization: "Eye Specialist",
    paymentId: "3232",
    date: "12 April 2024",
    fee: "50",
    image: "/doctor/doctor.svg",
  },
  {
    name: "Dr. Hamza Yasin",
    specialization: "Eye Specialist",
    paymentId: "3232",
    date: "12 April 2024",
    fee: "50",
    image: "/doctor/doctor.svg",
  },
];
const page = () => {
  return (
    <div className="overflow-hidden">
      <MedicalSection />
      <div className="grid grid-cols-1 mx-auto container md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {doctors.map((doctor, index) => (
          <PaymentCard key={index} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default page;
