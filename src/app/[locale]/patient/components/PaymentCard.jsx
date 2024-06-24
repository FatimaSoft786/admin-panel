import React from "react";

const PaymentCard = ({ doctor }) => {
  return (
    <div className="border rounded-lg shadow-md p-3 flex flex-col gap-2">
      <img
        src={doctor.image}
        alt={doctor.name}
        className="w-full h-40 object-cover rounded-md"
      />
      <div className="flex justify-between ">
        <h2 className="text-lg font-bold">{doctor.name}</h2>
        <span className="text-sm font-bold bg-dark-blue text-white p-2 rounded-lg">
          ${doctor.fee}
        </span>
      </div>
      <div className="">
        <p className="text-sm text-gray-600">{doctor.specialization}</p>
      </div>
      <div className="flex justify-between ">
        <p className="text-sm text-black font-bold">
          Payment ID: {doctor.paymentId}
        </p>
        <p className="text-sm text-gray-600">{doctor.date}</p>
      </div>
      <button className="bg-dark-blue mt-4 w-full text-white py-2 px-4 rounded-lg">
        Pay Now
      </button>
    </div>
  );
};

export default PaymentCard;
