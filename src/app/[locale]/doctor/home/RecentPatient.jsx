const RecentPatients = () => {
  const patients = [
    {
      name: "John Smith",
      id: "PRE2209",
      date: "4/5/2024",
      gender: "Male",
      disease: "Diabetes",
      status: "Out Patient",
    },

    {
      name: "John Smith",
      id: "PRE2209",
      date: "4/5/2024",
      gender: "Male",
      disease: "Diabetes",
      status: "Out Patient",
    },

    {
      name: "John Smith",
      id: "PRE2209",
      date: "4/5/2024",
      gender: "Male",
      disease: "Diabetes",
      status: "Out Patient",
    },

    {
      name: "John Smith",
      id: "PRE2209",
      date: "4/5/2024",
      gender: "Male",
      disease: "Diabetes",
      status: "Out Patient",
    },

    {
      name: "John Smith",
      id: "PRE2209",
      date: "4/5/2024",
      gender: "Male",
      disease: "Diabetes",
      status: "Out Patient",
    },
  ];

  return (
    <div className=" border rounded-xl">
      <h3 className="text-2xl font-bold mb-4 px-4 pt-6 pb-2">
        Recent Patients
      </h3>
      <table className="w-full text-center">
        <thead className="bg-light-gray">
          <tr className="capitalize text-center max-md:text-sm">
            <th className="py-3">Patient Name</th>
            <th className="py-3">Visit ID</th>
            <th className="py-3">Date</th>
            <th className="py-3">Gender</th>
            <th className="py-3">Disease</th>
            <th className="py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient, index) => (
            <tr
              key={index}
              className={`text-center max-md:text-sm text-black/80 border-b last:border-none`}
            >
              <td className="py-3  flex items-center justify-center gap-2">
                <img
                  src="/img/user.png"
                  className="max-md:hidden"
                  alt={`User Icon`}
                />
                {patient.name}
              </td>
              <td className="py-3">{patient.id}</td>
              <td className="py-3">{patient.date}</td>
              <td className="py-3">{patient.gender}</td>
              <td className="py-3">{patient.disease}</td>
              <td className="py-3">{patient.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentPatients;
