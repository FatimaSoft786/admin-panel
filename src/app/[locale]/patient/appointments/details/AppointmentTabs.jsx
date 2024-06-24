"use client";

import { useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const AppointmentTabs = () => {
  const [selectedDate, setSelectedDate] = useState(0);
  const [selectedHour, setSelectedHour] = useState(0);
  const scrollRef = useRef(null);

  const dates = [
    "Apr, 22",
    "Apr, 23",
    "Apr, 24",
    "Apr, 25",
    "Apr, 26",
    "Apr, 27",
    "Apr, 28",
    "Apr, 29",
    "Apr, 30",
    "May, 1",
    "May, 2",
    "May, 3",
    "May, 4",
    "May, 5",
    "May, 6",
    "May, 7",
  ];

  const hours = [
    "08:00 PM",
    "08:30 PM",
    "09:00 PM",
    "09:30 PM",
    "10:00 PM",
    "10:30 PM",
  ];

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      top: 0,
      left: -200,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      top: 0,
      left: 200,
      behavior: "smooth",
    });
  };

  return (
    <div className="mt-6 border rounded-lg p-4">
      <div className="flex items-center justify-between">
        <FaChevronLeft
          className="cursor-pointer size-6 mx-2"
          onClick={scrollLeft}
        />
        <div
          className="flex space-x-2 overflow-x-auto scrollbar-hide"
          ref={scrollRef}
        >
          {dates.map((date, index) => (
            <button
              key={index}
              className={`px-2 py-2 ${
                selectedDate === index
                  ? "border-b-3 border-dark-blue text-black font-bold"
                  : "text-light-gray"
              }`}
              onClick={() => setSelectedDate(index)}
            >
              {date}
            </button>
          ))}
        </div>
        <FaChevronRight
          className="cursor-pointer size-6 mx-2"
          onClick={scrollRight}
        />
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Select Hour</h2>
        <div className="flex flex-wrap gap-4 mt-2 transition-all">
          {hours.map((hour, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-lg ${
                selectedHour === index
                  ? "border-2 border-dark-blue bg-dark-blue/20 text-black"
                  : "bg-white"
              }`}
              onClick={() => setSelectedHour(index)}
            >
              {hour}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppointmentTabs;
