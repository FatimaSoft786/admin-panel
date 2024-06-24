import getPath from "@/utils/path";
import Link from "next/link";
import { FaEye } from "react-icons/fa";

const AppointmentCard = ({ appointment, isheld }) => {
  const path = getPath();
  return (
    <div className="border rounded-lg p-3 shadow-md text-sm">
      <div className="flex items-center">
        <img
          src="/doctor/doctorcard.svg"
          alt="Doctor"
          className="w-full rounded-lg mr-4"
        />
      </div>
      <div className="flex justify-between py-2 border-b">
        <div className="flex flex-col items-start justify-start gap-1">
          <h3 className="text-xl font-bold">{appointment.name}</h3>
          <p className="text-sm text-light-gray">{appointment.specialty}</p>
          <p>
            <strong>Appointment :</strong>
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2 text-white bg-dark-blue rounded-lg">
            <FaEye />
            <Link href={`/${path}/patient/profile`} className="text-sm">
              View Profile
            </Link>
          </button>
          <p className="text-sm mt-2"> Past : 5 Upcoming : 1</p>
        </div>
      </div>
      <div className="flex py-1 gap-2">
        <div className="w-1/2 flex flex-col border-b py-2">
          <p>Gender:</p>
          <p className="text-light-gray">{appointment.gender}</p>
        </div>
        <div className="w-1/2 flex flex-col border-b py-2">
          <p>Birthday:</p>
          <p className="text-light-gray">{appointment.birthday}</p>
        </div>
      </div>
      <div className="flex py-1 gap-2">
        <div className="w-1/2 flex flex-col border-b py-2">
          <p>Phone No:</p>
          <p className="text-light-gray">{appointment.phone}</p>
        </div>
        <div className="w-1/2 flex flex-col border-b py-2">
          <p>Location:</p>
          <p className="text-light-gray">{appointment.location}</p>
        </div>
      </div>
      <div className="flex py-1 gap-2">
        <div className="w-1/2 flex flex-col border-b py-2">
          <p>City :</p>
          <p className="text-light-gray">{appointment.city}</p>
        </div>
        <div className="w-1/2 flex flex-col border-b py-2">
          <p>Zip Code:</p>
          <p className="text-light-gray">{appointment.zip}</p>
        </div>
      </div>
      <div className="flex py-1 gap-2">
        <div className="w-1/2 flex flex-col border-b py-2">
          <p>Weight/Height: :</p>
          <p className="text-light-gray">
            {appointment.weight} / {appointment.height}
          </p>
        </div>
        <div className="w-1/2 flex flex-col border-b py-2">
          <p>Appiontment Date:</p>
          <p>{appointment.date}</p>
        </div>
      </div>
      <p className="py-2">
        <strong>Appointment Date:</strong> {appointment.date}
      </p>
      {!isheld && (
        <div className="mt-4 flex justify-between py-3">
          <button className="border border-pure-red text-pure-red py-2 px-4 rounded">
            Cancel
          </button>
          <button className="bg-light-gray flex items-center gap-3 text-black py-2 px-4 rounded">
            <img src="/svg/videocall.svg" className="invert" /> Start a video
            call
          </button>
        </div>
      )}
    </div>
  );
};

export default AppointmentCard;
