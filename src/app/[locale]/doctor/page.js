"use client";
import Counter from "./home/Counter";
import AppointmentRequest from "./home/AppointementRequest";
import TodayAppointments from "./home/TodayAppointement";
import RecentPatients from "./home/RecentPatient";
import MedicalSection from "./components/MedicalSection";

export default function Home() {
  return (
    <>
      <title>Home | A Doctor's Appointment</title>
      <MedicalSection placeholder={`Search Patient`} />
      <div className="p-4 py-12 space-y-8 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Counter type="patients" />
          <Counter type="appointments" />
          <Counter type="income" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AppointmentRequest />
          <TodayAppointments />
        </div>
        <RecentPatients />
      </div>
    </>
  );
}
