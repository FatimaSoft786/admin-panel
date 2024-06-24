import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import DateNavigation from "./DateNavigation"; 

const TodayAppointments = () => {
  const appointments = [
    { name: "Randy Wigham", time: "ongoing", disease: "Diabetes" },
    { name: "Randy Wigham", time: "09:00 AM", disease: "Asthma" },
    { name: "Randy Wigham", time: "10:30 AM", disease: "Covid-19" },
  ];

  return (
    <div className="p-4 rounded-xl border max-md:p-2">
      <div className="flex px-4 justify-between items-center my-4">
        <h3 className="text-2xl font-bold mb-4">Today Appointments</h3>
        <button className="text-gray-500 font-semibold">See all</button>
      </div>
      <ul>
        {appointments.map((appointment, index) => (
          <li
            key={index}
            className={`flex px-4 py-2 justify-between items-center mb-2 ${
              appointment.time === "ongoing" && "bg-lite-grayish-blue"
            }`}
          >
            <div className="flex items-center gap-2">
              <img
                src="/img/user.png"
                className="size-12 rounded-full"
                alt={`User Icon`}
              />
              <div className="flex flex-col items-start justify-start">
                <p className="font-semibold">{appointment.name}</p>
                <p className="text-gray-500 text-sm">{appointment.disease}</p>
              </div>
            </div>
            <p className="font-semibold">{appointment.time}</p>
          </li>
        ))}
      </ul>
      <DateNavigation />
    </div>
  );
};

export default TodayAppointments;
