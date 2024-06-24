"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import getPath from "@/utils/path";

const DoctorProfilePage = () => {
  const [profileData, setProfileData] = useState({});
  const path = getPath();

  useEffect(() => {
    const data = {
      id: localStorage.getItem("patientId"),
    };
    axios
      .post(
        "https://medico-backend-production.up.railway.app/api/patient/profile",
        data
      )
      .then((response) => {
        setProfileData(response.data.message);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const profileFields = [
    { label: "First Name", key: "firstName", default: "John" },
    { label: "Last Name", key: "lastName", default: "Doe" },
    { label: "Email", key: "email", default: "w9JpS@example.com" },
    { label: "Phone No", key: "phoneNumber", default: "1234567890" },
    { label: "Postal Code", key: "postal_code", default: "123456" },
    { label: "Location", key: "location", default: "Pakistan" },
    { label: "Sex", key: "sex", default: "Male" },
    { label: "DOB", key: "dob", default: "12 marzo 1993" },
  ];

  return (
    <div className="flex flex-col">
      <div className="h-[1px] w-full bg-line_gray"></div>
      <div className="flex flex-col rounded-lg m-[60px] border border-line_gray">
        <div className="flex justify-start items-center gap-6 m-10">
          <img
            className="rounded-full w-[100px] h-[100px] border-2 border-primary-color object-cover"
            src="/img/user.png"
            alt="profile"
          />
          <Link href={`/${path}/patient/profile/edit`}>
            <button className="bg-dark-blue text-white px-6 py-2 rounded">
              Edit Profile
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-10 mb-9">
          {profileFields.map((field) => (
            <div key={field.key} className="flex flex-col">
              <h1 className="font-medium text-[14px] text-primary-color">
                {field.label}
              </h1>
              <p className="w-full mt-2 font-normal py-2.5 rounded-[5px] h-[48px] text-dark-gray border-2 px-3">
                {profileData[field.key] || field.default}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorProfilePage;
