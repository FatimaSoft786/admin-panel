"use client"
import MySwitcher from "@/app/components/Switcher";
import { Image, Switch } from "@nextui-org/react";
import React, {useEffect,useState} from "react";
import axios from "axios";
import moment from 'moment';
import { useTranslations } from "next-intl";


const data = [
  {
    doctorName: "John Smith",
    specialty: "Dental",
    patientName: "John Smith",
    memberSinceDate: "11 Nov 2024",
    memberSinceTime: "11:00 PM",
    accountStatus: false,
    Earned: "$100",
  },
  {
    doctorName: "John Smith",
    specialty: "Dental",
    patientName: "John Smith",
    memberSinceDate: "11 Nov 2024",
    memberSinceTime: "11:00 PM",
    accountStatus: true,
    Earned: "$100",
  },
  {
    doctorName: "John Smith",
    specialty: "Dental",
    patientName: "John Smith",
    memberSinceDate: "11 Nov 2024",
    memberSinceTime: "11:00 PM",
    accountStatus: true,
    Earned: "$100",
  },
  {
    doctorName: "John Smith",
    specialty: "Dental",
    patientName: "John Smith",
    memberSinceDate: "11 Nov 2024",
    memberSinceTime: "11:00 PM",
    accountStatus: true,
    Earned: "$100",
  },
  {
    doctorName: "John Smith",
    specialty: "Dental",
    patientName: "John Smith",
    memberSinceDate: "11 Nov 2024",
    memberSinceTime: "11:00 PM",
    accountStatus: true,
    Earned: "$100",
  },
  {
    doctorName: "John Smith",
    specialty: "Dental",
    patientName: "John Smith",
    memberSinceDate: "11 Nov 2024",
    memberSinceTime: "11:00 PM",
    accountStatus: true,
    Earned: "$100",
  },
  {
    doctorName: "John Smith",
    specialty: "Dental",
    patientName: "John Smith",
    memberSinceDate: "11 Nov 2024",
    memberSinceTime: "11:00 PM",
    accountStatus: true,
    Earned: "$100",
  },
];

const TableDoctors = () => {

  const t = useTranslations('Admin');
  const headers = [
  t('Doctor name'),
  t('Specialty'),
  t('Member since'),
  t('Earned'),
  t('Account Status'),
];


  const [doctors, setDoctors] = useState([]);
    const fetchData = async () => {
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
           setDoctors(response.data.doctors_list);
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
  

  return (
    <div className="container mx-auto overflow-x-auto">
      <div className="mx-4 border">
        <div className="table w-full border-b">
          <div className="table-header-group bg-light-gray text-black">
            <div className="table-row">
              {headers.map((header, index) => (
                <div
                  key={index}
                  className="table-cell header-date place-content-center font-semibold text-center text-lg px-4 py-4 max-lg:text-base max-sm:text-sm"
                >
                  {header}
                </div>
              ))}
            </div>
          </div>
          <div className="table-row-group text-dark-gray">
            {doctors.map((row, index) => (
              <div key={index} className="table-row relative .header-date">
                <div className="table-cell text-center place-content-center py-2 px-4 max-lg:text-base max-sm:text-sm">
                  {row.firstName} {row.lastName}
                </div>
                <div className="table-cell text-center place-content-center py-2 px-4 max-lg:text-base max-sm:text-sm">
                  {row.specialist}
                </div>
                <div className="table-cell text-left place-content-center py-2 max-sm:px-0 px-4 max-lg:text-base max-sm:text-sm">
                  <div className="flex flex-col text-left pl-24 max-md:pl-12 max-sm:pl-0">
                    <span className="text-left">{moment(row.createdAt).format('DD MMM YYYY')}</span>
                    <span className="text-left text-black">
                     {moment(row.createdAt).format('hh:mm')}
                    </span>
                  </div>
                </div>
                <div className="table-cell text-center place-content-center py-2 max-lg:text-base max-sm:text-sm">
                  $0
                </div>
                <div className="table-cell text-center place-content-center py-2 px-4  max-lg:text-base max-sm:text-sm">
                {row.account_approved ? (<img className="w-full h-6" src="/svg/adminDashboard/success.svg"/>):(<img className="w-full h-6" src="/svg/adminDashboard/failed.svg"/>)}
                  {/* <MySwitcher
                    size="md"
                    defaultChecked={row.account_approved}
                    isChecked={row.account_approved}
                  /> */}
                </div>
                <hr className="w-full h-2 absolute bottom-0 left-0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableDoctors;
