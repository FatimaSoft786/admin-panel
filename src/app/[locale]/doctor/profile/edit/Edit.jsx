"use client";

import getPath from "@/utils/path";
import Link from "next/link";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import {
  MdEmail,
  MdPhone,
  MdLocationOn,
  MdOutlineDateRange,
  MdPerson,
  MdPersonOutline,
} from "react-icons/md";

const EditProfile = () => {
  const path = getPath();
  const [profileImg, setProfileImg] = useState("/img/user.png");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    postalCode: "",
    height: "",
    weight: "",
    dob: "",
    gender: "Male",
    yosfrom: "",
    yosto: "",
    specialRecoginition: "",
    description: "",
    specialist: "",
  });

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setProfileImg(URL.createObjectURL(file));
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Updated Your Profile");
  };

  return (
    <div className="container mx-auto p-4 my-12">
      <form onSubmit={handleSubmit} className="space-y-4 pb-12">
        <div className="flex items-center justify-start gap-12">
          <div className="relative mb-8">
            <img
              src={profileImg}
              alt="Profile"
              className="size-36 rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-4">
            <button
              type="button"
              className="px-6 py-2 bg-dark-blue text-white rounded"
              onClick={() =>
                document.querySelector("input[type='file']").click()
              }
            >
              Change Photo
            </button>
            <button
              type="button"
              className="px-6 py-2 bg-transparent border border-red-600 text-red-600 rounded"
              onClick={() => confirm("Are you sure you want to delete image")}
            >
              Delete Photo
            </button>
          </div>
        </div>
        <div className="flex space-x-4 pb-4">
          <div className="w-1/2 relative">
            <label className="block text-black font-bold mb-1">
              First Name
            </label>
            <MdPerson className="absolute top-1/2 left-3 transform mt-3 -translate-y-1/2 text-black" />
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="w-full pl-10 px-4 py-2 border rounded"
            />
          </div>
          <div className="w-1/2 relative">
            <label className="block text-black font-bold mb-1">Last Name</label>
            <MdPersonOutline className="absolute top-1/2 left-3 transform mt-3 -translate-y-1/2 text-black" />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="w-full pl-10 px-4 py-2 border rounded"
            />
          </div>
        </div>
        <div className="flex gap-4 mb-4">
          <div className="relative w-1/2">
            <label className="block text-black font-bold mb-1">
              Email Address
            </label>
            <MdEmail className="absolute top-1/2 left-3 transform mt-3 -translate-y-1/2 text-black" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full pl-10 px-4 py-2 border rounded"
            />
          </div>
          <div className="w-1/2 relative">
            <label className="block text-black font-bold mb-1">
              Phone Number
            </label>
            <MdPhone className="absolute top-1/2 left-3 transform mt-3 -translate-y-1/2 text-black" />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full pl-10 px-4 py-2 border rounded"
            />
          </div>
        </div>

        <div className="flex space-x-4 pb-4">
          <div className="w-1/2 relative">
            <label className="block text-black font-bold mb-1">Location</label>
            <MdLocationOn className="absolute top-1/2 left-3 transform mt-3 -translate-y-1/2 text-black" />
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Location"
              className="w-full pl-10 px-4 py-2 border rounded"
            />
          </div>
          <div className="w-1/2 relative">
            <label className="block text-black font-bold mb-1">
              Postal Code
            </label>
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              placeholder="Postal Code"
              className="w-full px-4 py-2 border rounded"
            />
          </div>
        </div>

        <div className="flex space-x-4 pb-4">
          <div className="relative w-1/2">
            <label className="block text-black font-bold mb-1">Sex</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="w-1/2 relative">
            <label className="block text-black font-bold mb-1">
              Date of Birth
            </label>
            <MdOutlineDateRange className="absolute top-1/2 left-3 transform mt-3 -translate-y-1/2 text-black" />
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full pl-10 px-4 py-2 border rounded"
            />
          </div>
        </div>
        <div className="flex space-x-4 pb-4">
          <div className="w-1/2 relative">
            <label className="block text-black font-bold mb-1">
              Years of study
            </label>
            <div className="border flex items-center rounded px-4 py-2">
              <input
                type="date"
                name="dob"
                value={formData.yosfrom}
                onChange={handleChange}
                className="w-full appearance-none border-none outline-none"
              />
              <p className="text-black font-bold px-4 ">To</p>
              <input
                type="date"
                name="dob"
                value={formData.yosto}
                onChange={handleChange}
                className="w-full  appearance-none outline-none"
              />
            </div>
          </div>
          <div className="w-1/2 relative">
            <label className="block text-black font-bold mb-1">
              Special Recoginition
            </label>
            <img
              src="/doctor/download.svg"
              className="absolute top-1/2 right-3 transform mt-3 -translate-y-1/2 text-black"
            />
            <input
              type="text"
              placeholder="Best Doctor of The Year"
              name="specialRecoginition"
              value={formData.specialRecoginition}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
        </div>
        <div className="flex space-x-4 pb-4">
          <div className="w-full relative">
            <label className="block text-black font-bold mb-1">
              Office And Hospital Address
            </label>
            <div className="border flex items-center rounded px-4 py-2">
              <input
                type="text"
                placeholder="lorem ipsum dolor sit amet consectetur"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full appearance-none border-none outline-none"
              />
            </div>
          </div>
        </div>
        <div className="flex space-x-4 pb-4">
          <div className="w-1/2 relative">
            <label className="block text-black font-bold mb-1">
              Specialties
            </label>
            <div className="border flex items-center rounded px-4 py-2">
              <input
                type="text"
                placeholder="Dentist"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full appearance-none border-none outline-none"
              />
            </div>
          </div>
        </div>
        <label htmlFor="dropzone" className="text-xl font-bold text-black">
          {" "}
          Upload Your CV
        </label>
        <div className="border-dashed mb-14 rounded-xl bg-light-gray/10 !py-8 border-4 p-8 border-dark-blue  ">
          <div
            {...getRootProps()}
            className=" text-center cursor-pointer flex flex-col items-center justify-center gap-3"
            style={{ height: "150px" }}
          >
            <input
              type="file"
              className="hidden"
              name="file"
              id="dropzone"
              {...getInputProps()}
            />
            <img
              src={`/patient/profile/dnd.svg`}
              className="text-gray-400 text-3xl !mt-8"
            />
            <p className="mt-2 text-lg font-bold">
              Drag & drop files or{" "}
              <span className="text-dark-blue underline">Browse</span>
            </p>
            <p className="text-black/80 mb-8">
              Supported formates:Any image format, pdf, doc, docx, txt
            </p>
          </div>
        </div>
        <Link
          href={`/${path}/doctor/profile/anamnesi`}
          className="flex float-end w-fit items-end my-5"
        >
          <button
            type="submit"
            className="bg-dark-blue text-white py-2 px-4 rounded"
          >
            Save Changes
          </button>
        </Link>
      </form>
    </div>
  );
};

export default EditProfile;
