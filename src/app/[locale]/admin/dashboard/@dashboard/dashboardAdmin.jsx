"use client";
import { Image, Switch } from "@nextui-org/react";
import Link from "next/link";
import React,{useState,useEffect} from "react";
import { useParams } from "next/navigation";
import DoctorCard from "./DoctorCard";
import axios from "axios";

import { useTranslations } from "next-intl";

  



const doctorRequests = [
  {
    name: "Hamza Yasin",
    specialty: "Dentist",
  },
  {
    name: "Hamza Yasin",
    specialty: "Dentist",
  },
  {
    name: "Hamza Yasin",
    specialty: "Dentist",
  },

  {
    name: "Hamza Yasin",
    specialty: "Dentist",
  },
];

const DashboardAdmin = () => {
  const params = useParams();
const t = useTranslations("Admin");

    const[doctors,setDoctors] = useState(0);
    const[patients,setPatients] = useState(0);
    const[appointments, setAppointments] = useState(0);
    const[adminRevenue, setAdminRevenue] = useState(0);
    const[request,setDocRequest] = useState([]);

 const fetchData = async () => {
      try {

         const token = localStorage.getItem("token");
    const data = {
     "role": "Doctor",
    "role1": "Patient"
    }
    axios
        .post(
          "https://video-medico-backend-production.up.railway.app/admin/total",data,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
        .then((response) => {
           setDoctors(response.data.total_doctors);
          setPatients(response.data.total_patients);
          setAppointments(response.data.total_appointments);
          setAdminRevenue(response.data.admin_revenue);
        })
        .catch((error) => {
          console.error("Error:", error);
        });         
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

  const fetchDoctors = async()=>{
   try {
      const token = localStorage.getItem("token");
    const data = {
      role: "Doctor"
    }
      axios
        .post(
          "https://video-medico-backend-production.up.railway.app/admin/doctorsList",data,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
        .then((response) => {
          console.log(response);
          const data = response.data.doctors_list;
           const filteredData = data.filter(account => !account.account_approved && !account.account_declined);
           setDocRequest(filteredData);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
    useEffect(() => {
      fetchData();
  }, []);

  useEffect(()=>{
    fetchDoctors();
  },[]);


const cardsData = [
  {
    icon: "/svg/adminDashboard/doctorCard.svg",
    title: t('Doctors'),
    count: doctors,
    link: "/admin/doctors",
    bgColor: "bg-cyan-card",
  },
  {
    icon: "/svg/adminDashboard/patientCard.svg",
    title: t('Patient'),
    count: patients,
    link: "/admin/patients",
    bgColor: "bg-green-card",
  },
  {
    icon: "/svg/adminDashboard/appointmentCard.svg",
    title: t('Appointments'),
    count: appointments,
    link: "/admin/appointments",
    bgColor: "bg-red-card",
  },
  {
    icon: "/svg/adminDashboard/incomeCard.svg",
    title: (t('Income')),
    count: "$"+adminRevenue,
    link: "/admin/doctors",
    bgColor: "bg-yellow-card",
  },
];




  return (
    <>
      <div className="flex container flex-col mx-auto py-6 h-auto gap-4">
        <h1 className="font-bold text-3xl max-md:text-2xl mt-4 mb-8 px-4">
          {t("Welcome admin")}
        </h1>
        {/* grid */}
        <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {cardsData.map((card) => (
            <Link
              href={`/${params.locale}${card.link}`}
              className={`w-auto h-28 shadow-lg text-white rounded-2xl p-4 m-4 ${card.bgColor}`}
              key={card.title}
            >
              <div className="flex h-full items-center text-left gap-2">
                <div className="p-2 rounded-full bg-white">
                  <Image
                    radius="none"
                    src={card.icon}
                    alt={card.title}
                    className="w-8 h-8 p-0.5 "
                  />
                </div>
                <div>
                {
                  card.title === 'Doctors' 
                }
                  <h1 className="text-xl">{card.title}</h1>
                  <h1 className="text-2xl font-bold">{card.count}</h1>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="border rounded-lg mx-[14px]">
          <h1 className="text-2xl font-bold pt-10 pb-4 px-6">
            {t('Doctor Request For Account Approval')}
          </h1>
          <DoctorCard doctorRequests={request} />
        </div>
      </div>
    </>
  );
};

export default DashboardAdmin;
