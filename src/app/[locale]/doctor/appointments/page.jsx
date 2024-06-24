"use client";
import MedicalSection from "../components/MedicalSection";
import AppointmentTabs from "./AppointmentTabs";

export default function Page() {
  return (
    <div className="">
      <title>Appointments | A Doctor's Appointment</title>
      <MedicalSection placeholder={`Search Patient`} />
      <AppointmentTabs />
    </div>
  );
}
