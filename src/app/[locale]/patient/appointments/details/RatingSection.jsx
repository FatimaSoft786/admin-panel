"use client";

import { FaCheckCircle } from "react-icons/fa";

const RatingSection = ({ doctor }) => {
  return (
    <div className="border rounded-lg shadow-md p-3 flex flex-col">
      <img
        src={doctor.image}
        alt={doctor.name}
        className="w-full h-40 object-cover rounded-md"
      />
      <div className="mt-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">
          {doctor.name}{" "}
          <FaCheckCircle className="text-green-500 inline ml-1 " />
        </h1>
      </div>
      <p className="text-light-gray">{doctor.qualification}</p>

      <div className="flex items-center mt-1">
        <span className="text-yellow-500 text-lg">{doctor.rating}</span>
        <span className="ml-2 text-light-gray">({doctor.rating.length})</span>
      </div>
      <p className="text-light-gray mt-2 text-sm flex">{doctor.feedback}</p>
    </div>
  );
};

export default RatingSection;
