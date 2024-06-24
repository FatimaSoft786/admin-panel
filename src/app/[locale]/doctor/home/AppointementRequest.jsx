// components/AppointmentRequest.js
const AppointmentRequest = () => {
  const requests = [
    { name: "Randy Wigham", status: "Declined" },
    { name: "Randy Wigham", status: "Confirmed" },
    { name: "Randy Wigham", status: "Confirmed" },
    { name: "Randy Wigham", status: "Declined" },
    { name: "Randy Wigham", status: "Confirmed" },
  ];

  return (
    <div className="p-4 max-md:p-2 bg-white rounded-xl border">
      <div className="flex justify-between items-center my-4 px-4 ">
        <h3 className="text-2xl font-bold mb-4">Appointment Request</h3>
        <button className="text-gray-500 font-semibold">See all</button>
      </div>
      <ul>
        {requests.map((request, index) => (
          <li
            key={index}
            className="flex justify-between items-center px-4 py-2 "
          >
            <div className="flex items-center gap-2">
              <img
                src="/img/user.png"
                className="size-12 rounded-full"
                alt={`User Icon`}
              />
              <div className="flex flex-col items-start justify-start">
                <p className="font-semibold">{request.name}</p>
                <p className="text-gray-500 text-sm">
                  Male. 45 Today 4 : 30 PM{" "}
                </p>
              </div>
            </div>
            <button
              className={`px-4 py-2 w-32 rounded-xl tracking-wider ${
                request.status === "Confirmed"
                  ? "bg-lime-green text-white"
                  : "bg-pure-red text-white"
              }`}
            >
              {request.status}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentRequest;
