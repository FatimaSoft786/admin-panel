"use client";
import MySwitcher from "@/app/components/Switcher";
import { Image, Switch } from "@nextui-org/react";
import React , {useEffect,useState} from "react";
import axios from "axios";
import { useTranslations } from "next-intl";

const TableAppointment = () => {

  const t = useTranslations("Admin");

   const [appointments, setAppointments] = useState([]);
 const fetchData = async () => {
      try {
          const response = await axios.get('https://video-medico-backend-production.up.railway.app/api/appointment/fetchAll');
         setAppointments(response.data.appointments);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

 useEffect(() => {
      fetchData();
  }, []);


  const appointmentData = Array.from({ length: 6 }).map((_, index) => ({
    doctorName: "Hamza Yasin",
    specialty: "Dental",
    patientName: "Hamza Yasin",
    appointmentDate: "11 Nov 2024",
    appointmentTime: "11:00 PM",
    status: true,
    amount: "$300",
  }));

  return (
    <div className="w-full mt-2 mx-4 border overflow-x-auto">
      <div className="table w-full border-b">
        <div className="table-header-group bg-light-gray text-black">
          <div className="table-row">
            {[
              t('Doctor name'),
              t('Specialty'),
              t('Patient Name'),
              t('Appointment time'),
              t('Status'),
              t('Amount'),
            ].map((header, index) => (
              <div
                key={index}
                className="table-cell place-content-center font-semibold text-center text-lg px-4 py-4 max-lg:text-base max-sm:text-sm"
              >
                {header}
              </div>
            ))}
          </div>
        </div>
        <div className="table-row-group text-dark-gray">
          {appointments.map((appointment, index) => (
            <div key={index} className="table-row relative">
              <div className="table-cell place-content-center text-center px-4">
                <div className="flex items-center justify-center gap-2">
                  <Image
                    src={appointment.doctor.picture_url ? appointment.doctor.picture_url : appointment.doctor.default_picture_url}
                    className="size-8"
                    alt="User Icon"
                  />
                  {appointment.doctor.firstName} {appointment.doctor.lastName}
                </div>
              </div>
              <div className="table-cell place-content-center text-center px-4  max-lg:text-base max-sm:text-sm">
                {appointment.doctor.specialist}
              </div>
              <div className="table-cell place-content-center text-center px-4 ">
                <div className="flex items-center justify-center gap-2">
                  <Image
                    src={appointment.patient.picture_url ? appointment.patient.picture_url : appointment.patient.default_picture_url}
                    className="size-8"
                    alt="User Icon"
                  />
                  {appointment.patient.firstName} {appointment.patient.lastName}
                </div>
              </div>
              <div className="table-cell place-content-center text-center px-4 py-2 max-lg:text-base max-sm:text-sm">
                <div className="flex flex-col items-start pl-20 max-lg:pl-7 max-sm:pl-2">
                  <span>{appointment.appointment_date}</span>
                  <span className="text-black">
                    {appointment.appointment_time}
                  </span>
                </div>
              </div>
              <div className="table-cell place-content-center items-center max-lg:pl-6 pl-12 max-lg:text-base max-sm:text-sm">
              {/* {
                appointment.appointment_status === 'completed' ? (<p>Completato</p>) : appointment.appointment_status === 'waiting' ? (<p>In programma</p>) : appointment.appointment_status === 'cancelled' ? (<p>Cancellato</p>)
              } */}
      {appointment.appointment_status === 'completed' ? (
        <p className="rounded-full bg-green-100 text-center text-green-500 max-lg:text-sm max-sm:text-sm px-0">Completato</p>
      ) : appointment.appointment_status === 'waiting' ? (
        <p className=" rounded-full bg-yellow-50 text-center text-yellow-500 max-lg:text-sm max-sm:text-sm">In programma</p>
      ) : appointment.appointment_status === 'cancelled' ? (
        <p className=" rounded-full bg-red-300 text-center text-pure-red max-lg:text-sm max-sm:text-sm">Cancellato</p>
      ): (<p></p>)}
               
              </div>
              <div className="table-cell place-content-center text-center px-4 max-lg:text-base max-sm:text-sm">
                ${appointment.doctor_percentage_amount}
              </div>
              <hr className="w-full h-2 absolute bottom-0 left-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TableAppointment;
