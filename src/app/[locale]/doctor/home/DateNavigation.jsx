"use client";
import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { format, addDays, subDays, startOfWeek } from "date-fns";

const DateNavigation = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const startDate = startOfWeek(currentDate, { weekStartsOn: 1 });

  const handlePrevWeek = () => {
    setCurrentDate(subDays(currentDate, 7));
  };

  const handleNextWeek = () => {
    setCurrentDate(addDays(currentDate, 7));
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const getDayClass = (date) => {
    return format(date, "yyyy-MM-dd") === format(selectedDate, "yyyy-MM-dd")
      ? "border-2 rounded-xl relative"
      : "border rounded-xl ";
  };

  return (
    <div className="">
      <div className="flex justify-start items-center my-4">
        <div className="text-xl font-bold mx-4">
          <p>
            {format(startDate, "dd")} -{" "}
            {format(addDays(startDate, 6), "dd MMM, yyyy")}
          </p>
        </div>
        <button onClick={handlePrevWeek} className="mr-4">
          <FaAngleLeft size={24} className="text-[#7CB839]" />
        </button>
        <button onClick={handleNextWeek} className="ml-4">
          <FaAngleRight size={24} className="text-[#7CB839]" />
        </button>
      </div>
      <div className="flex justify-between overflow-hidden gap-4 max-md:gap-2 px-4 max-md:px-0">
        {[...Array(7)].map((_, index) => {
          const date = addDays(startDate, index);
          return (
            <div
              key={index}
              onClick={() => handleDateClick(date)}
              className={`cursor-pointer p-2 w-full text-center ${getDayClass(
                date
              )}`}
            >
              <p className="mb-1">{format(date, "EEE")}</p>
              <p>{format(date, "d")}</p>
              {format(date, "yyyy-MM-dd") ===
                format(selectedDate, "yyyy-MM-dd") && (
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-[#7CB839]"></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DateNavigation;
