"use client";
import { FaCheckCircle } from "react-icons/fa";
import { FaHeart, FaRegHeart } from "react-icons/fa6";

const DoctorCard = ({ doctor }) => {
  return (
    <div className="border rounded-lg shadow-md p-3 flex flex-col">
      <img
        src={doctor.image}
        alt={doctor.name}
        className="w-full h-40 object-cover rounded-md"
      />
      <div className="mt-4 flex items-center justify-between">
        <h2 className="text-lg font-bold">
          {doctor.name}{" "}
          <FaCheckCircle className="text-green-500 inline ml-1 " />
        </h2>
        {doctor.fav === false ? (
          <FaRegHeart className="text-light-gray cursor-pointer text-xl focus:scale-80 active:scale-80" />
        ) : (
          <FaHeart className="text-dark-blue cursor-pointer text-xl focus:scale-80 active:scale-90 transition-all duration-300" />
        )}
      </div>
      <p className="text-sm text-gray-600">{doctor.qualification}</p>
      <div className="flex items-center mt-2">
        <span className="text-yellow-500 text-lg">{doctor.rating}</span>
        <span className="ml-2 text-light-gray">({doctor.rating.length})</span>
      </div>
      <p className="text-light-gray mt-2">{doctor.location}</p>
      <p className="text-light-gray mt-1">Available on {doctor.availability}</p>
      <p className="text-light-gray mt-1">Fee: {doctor.fee}</p>
      <div className="flex mt-4 space-x-2">
        {/* <button className="border text-sm border-dark-blue py-2 px-2 rounded-lg flex-1">
          Check Availability
        </button> */}
        <button className="bg-dark-blue text-sm text-white py-2 px-2 rounded-lg flex-1">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;
