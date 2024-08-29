"use client";
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation';
import axios from 'axios';
const page = () => {

    const searchParams = useSearchParams();
    const[id,setId] = useState(0);
    console.log(searchParams.get("id"));

     const [profileData, setProfileData] = useState({});

   useEffect(()=>{
      fetchData();
   },[]);

   const fetchData = async(req,res)=>{
   const data = {
      id: searchParams.get("id"),
    };
      const token = localStorage.getItem("token");
     axios
        .post(
          "https://video-medico-backend-production.up.railway.app/admin/fetchDoctorById",data,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
        .then((response) => {
           console.log(response);
        setProfileData(response.data.message);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
   }

 const profileFields = [
    { label: "First Name", key: "firstName", default: "John" },
    { label: "Last Name", key: "lastName", default: "Doe" },
    { label: "Email", key: "email", default: "w9JpS@example.com" },
    { label: "Phone No", key: "phoneNumber", default: "1234567890" },
    { label: "Postal Code", key: "postal_code", default: "123456" },
    { label: "Location", key: "location", default: "Pakistan" },
    { label: "Sex", key: "sex", default: "Male" },
    { label: "DOB", key: "dob", default: "12 marzo 1993" },
    {
      label: "Years Of Studies / Training / Program",
      key: "yearsOfStudy",
      default: "13 aprile 2003",
    },
    {
      label: "Special Recognition",
      key: "special_recognition",
      default: "Best doctor 2023",
    },
    {
      label: "Office/Hospital Address",
      key: "officeAddress",
      default: "Pakistan",
    },
    { label: "Specialist", key: "specialist", default: "Allergy" },
  ];




  return (
    <div className=' container mx-auto'>
    <title>Doctor Profile</title>
    <div className="flex flex-col">
      <div className="h-[1px] w-full bg-line_gray"></div>
      <div className="flex flex-col rounded-lg m-[60px] border border-line_gray">
        <div className="flex justify-start items-center gap-6 m-10">
          <img
            className="rounded-full w-[100px] h-[100px] border-2 border-primary-color object-cover"
            src={profileData.picture_url ? profileData.picture_url: profileData.default_picture_url}
            alt="profile"
          />
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
          <div className="flex flex-col">
            <h1 className="font-medium text-[14px] text-primary-color">
              Digital Signature
            </h1>
            <img
              className=" size-24 object-cover"
              src={profileData.signature_url ? profileData.signature_url: "https://th.bing.com/th/id/R.36b172664f204cda0da46db551056710?rik=xOBzlO7sUq%2f8ew&pid=ImgRaw&r=0"}
              alt="signature"
            />
          </div>
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default page
