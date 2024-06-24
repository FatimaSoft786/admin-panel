// components/Counter.js
import { useEffect, useState } from "react";
import { FaUsers, FaCalendarCheck, FaDollarSign } from "react-icons/fa";

const Counter = ({ type }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Fetch the data based on the type and set the count
    const fetchData = async () => {
      // Mock data fetching
      let data;
      switch (type) {
        case "patients":
          data = 200;
          break;
        case "appointments":
          data = 200;
          break;
        case "income":
          data = 200;
          break;
        default:
          data = 0;
      }
      setCount(data);
    };
    fetchData();
  }, [type]);

  const icons = {
    patients: <FaUsers className="bg-white rounded-full p-2" size={48} />,
    appointments: (
      <FaCalendarCheck size={48} className="bg-white rounded-full p-2" />
    ),
    income: <FaDollarSign size={48} className="bg-white rounded-full p-2" />,
  };

  const colors = {
    patients: "bg-soft-green",
    appointments: "bg-soft-blue",
    income: "bg-soft-violet",
  };

  return (
    <div className={`p-4 rounded-xl ${colors[type]}`}>
      <div className="flex flex-col items-center text-center">
        {icons[type]}
        <div className=" mt-2">
          <p className="text-lg font-medium">
            {type === "patients" && "Total Patients"}
            {type === "appointments" && "Total Appointments"}
            {type === "income" && "Total Income"}
          </p>
          <p className="text-2xl font-bold">{count}k</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
