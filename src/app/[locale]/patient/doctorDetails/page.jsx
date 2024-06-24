"use client";

import React from "react";
import ProfileCard from "./ProfileCard";
import { FaArrowLeft } from "react-icons/fa6";
import Link from "next/link";
import getPath from "@/utils/path";

function page() {
  const tabs = ["Overview", "Reviews", "Business Hours"];
  const path = getPath();

  return (
    <div className="min-h-screen container mx-auto p-6">
      <title>Doctor Details | A Doctor's Appointment</title>
      <Link
        href={`/${path}/patient/appointments`}
        className="active:scale-80 transition-all duration-300 hover:text-black/80"
      >
        <FaArrowLeft className="my-6 text-2xl " />
      </Link>
      <ProfileCard />
    </div>
  );
}

export default page;
