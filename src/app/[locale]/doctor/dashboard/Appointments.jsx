const Appointments = () => (
  <table className="min-w-full bg-white max-md:text-sm">
    <thead className="bg-light-gray">
      <tr>
        <th className="py-3">ID</th>
        <th className="py-3">Patient</th>
        <th className="py-3">Appointment Date</th>
        <th className="py-3">Booking Date</th>
        <th className="py-3">Amount</th>
        <th className="py-3">Status</th>
      </tr>
    </thead>
    <tbody>
      {[...Array(8)].map((_, index) => (
        <tr key={index} className="text-center border-b text-light-gray">
          <td className="py-6 text-[#7CB839]">1234</td>
          <td className="py-6 flex gap-2 items-center justify-center ">
            <img
              src="/img/user.png"
              className="size-8 max-md:hidden"
              alt="Dr. Hamza Yasin"
            />
            Dr. Hamza Yasin
          </td>
          <td className="py-6">24 March 2024</td>
          <td className="py-6">23 March 2024</td>
          <td className="py-6">$200</td>
          <td className="py-6">
            <span className="bg-[#7CB839] text-white max-md:px-2 py-2 px-4 rounded-full text-sm">
              Upcoming
            </span>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Appointments;
