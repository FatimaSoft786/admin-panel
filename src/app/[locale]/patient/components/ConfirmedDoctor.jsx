"use client";
import getPath from "@/utils/path";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { MdOutlineCancel } from "react-icons/md";

const ConfirmDoctor = ({ doctor }) => {
  const path = getPath()
  return (
    <div className="border rounded-lg shadow-md p-3 flex flex-col">
      <img
        src={doctor.image}
        alt={doctor.name}
        className="w-full h-40 object-cover rounded-md"
      />
      <div className="mt-4 flex items-center justify-between">
        <Link href={`/${path}/patient/appointments/details`} className="text-xl font-bold">
          {doctor.name}{" "}
          <FaCheckCircle className="text-green-500 inline ml-1 " />
        </Link>
        {doctor.fav === false ? (
          <FaRegHeart className="text-light-gray cursor-pointer text-xl focus:scale-80 active:scale-80" />
        ) : (
          <FaHeart className="text-dark-blue cursor-pointer text-xl focus:scale-80 active:scale-90 transition-all duration-300" />
        )}
      </div>
      <p className="text-light-gray">Speciallist {doctor.specialist}</p>
      <div className="text-black flex justify-between">
        <h1 className="text-base  text-black font-bold">Payment ID : 32323</h1>
        <p className="text-light-gray text-sm">12 April 2024</p>
      </div>

      <div className="flex items-center mt-2">
        <span className="text-yellow-500 text-lg">{doctor.rating}</span>
        <span className="ml-2 text-light-gray">({doctor.rating.length})</span>
      </div>
      <p className="text-light-gray mt-2 text-sm flex items-center">
        <img src="/patient/location.svg" className="size-4 mr-2" />
        {doctor.location}
      </p>
      <div className="text-light-gray mt-2 text-sm flex justify-between">
        <img src="/patient/time.svg" className="size-4 mr-2" />
        Appointment date is june 24, 2024, 10:00 AM
      </div>

      <div className="flex mt-4 space-x-2">
        <button className="flex items-center justify-center gap-2 text-xs bg-light-gray py-4 px-2 font-semibold rounded-lg flex-1">
          <MdOutlineCancel className="text-lg" size={16} />
          Cancel
        </button>
        <button className="flex items-center justify-center gap-2 bg-dark-blue text-xs text-white py-4 font-semibold px-2 rounded-lg flex-1">
          <img src="/svg/videocall.svg" className="size-4" /> Consult Now
        </button>
      </div>
    </div>
  );
};

export default ConfirmDoctor;
