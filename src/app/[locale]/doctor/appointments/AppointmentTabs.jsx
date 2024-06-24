"use client";
import { useState } from "react";
import AppointmentCard from "./AppointmentCard";
const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="container mx-auto py-8">
      <div className="flex border-b my-6">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`items-center text-center px-8 py-3 focus:outline-none ${
              activeTab === index
                ? "border-b-3 font-bold border-dark-blue text-dark-blue"
                : "text-black"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4">{tabs[activeTab] && tabs[activeTab].content}</div>
    </div>
  );
};

const appointmentsData = [
  {
    name: "Dr. Hamza Yasin",
    specialty: "Eye Specialist",
    gender: "Male",
    birthday: "30 September 1998",
    phone: "37248429",
    location: "Dubai",
    city: "Giannamoro",
    zip: "54439",
    weight: "58 kg",
    height: "1.7 m",
    date: "10 April, 2024",
    time: "12:30 PM",
  },
  {
    name: "Dr. Hamza Yasin",
    specialty: "Eye Specialist",
    gender: "Male",
    birthday: "30 September 1998",
    phone: "37248429",
    location: "Dubai",
    city: "Giannamoro",
    zip: "54439",
    weight: "58 kg",
    height: "1.7 m",
    date: "10 April, 2024",
    time: "12:30 PM",
  },
  {
    name: "Dr. Hamza Yasin",
    specialty: "Eye Specialist",
    gender: "Male",
    birthday: "30 September 1998",
    phone: "37248429",
    location: "Dubai",
    city: "Giannamoro",
    zip: "54439",
    weight: "58 kg",
    height: "1.7 m",
    date: "10 April, 2024",
    time: "12:30 PM",
  },
  {
    name: "Dr. Hamza Yasin",
    specialty: "Eye Specialist",
    gender: "Male",
    birthday: "30 September 1998",
    phone: "37248429",
    location: "Dubai",
    city: "Giannamoro",
    zip: "54439",
    weight: "58 kg",
    height: "1.7 m",
    date: "10 April, 2024",
    time: "12:30 PM",
  },
  {
    name: "Dr. Hamza Yasin",
    specialty: "Eye Specialist",
    gender: "Male",
    birthday: "30 September 1998",
    phone: "37248429",
    location: "Dubai",
    city: "Giannamoro",
    zip: "54439",
    weight: "58 kg",
    height: "1.7 m",
    date: "10 April, 2024",
    time: "12:30 PM",
  },
];

const AppointmentsHeld = ({ appointments }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {appointments.map((appointment, index) => (
        <AppointmentCard key={index} appointment={appointment} isheld />
      ))}
    </div>
  );
};

const AppointmentsScheduled = ({ appointments }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {appointments.map((appointment, index) => (
        <AppointmentCard key={index} appointment={appointment} />
      ))}
    </div>
  );
};

const tabsData = [
  {
    label: "Appointments held",
    content: <AppointmentsHeld appointments={appointmentsData} />,
  },
  {
    label: "Appointments scheduled",
    content: <AppointmentsScheduled appointments={appointmentsData} />,
  },
];

export default function AppointmentTabs() {
  return (
    <div>
      <Tabs tabs={tabsData} />
    </div>
  );
}
