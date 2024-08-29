"use client";
import React, { useEffect,useState } from "react"; 
import { Image } from "@nextui-org/react";
import axios from "axios";
import moment from "moment";
import { useTranslations } from "next-intl";




const data = [
  {
    patientId: "#224244",
    patientName: "Dr. John Smith",
    age: 43,
    address: "Lorem ipsum dolor sit amet, consectetur",
    phone: "123-456-7890",
    lastVisitDate: "11 Nov 2024",
    lastVisitTime: "11:00 PM",
    paid: "$100",
  },
  {
    patientId: "#224244",
    patientName: "Dr. John Smith",
    age: 43,
    address: "Lorem ipsum dolor sit amet, consectetur",
    phone: "123-456-7890",
    lastVisitDate: "11 Nov 2024",
    lastVisitTime: "11:00 PM",
    paid: "$100",
  },
  {
    patientId: "#224244",
    patientName: "Dr. John Smith",
    age: 43,
    address: "Lorem ipsum dolor sit amet, consectetur",
    phone: "123-456-7890",
    lastVisitDate: "11 Nov 2024",
    lastVisitTime: "11:00 PM",
    paid: "$100",
  },
  {
    patientId: "#224244",
    patientName: "Dr. John Smith",
    age: 43,
    address: "Lorem ipsum dolor sit amet, consectetur",
    phone: "123-456-7890",
    lastVisitDate: "11 Nov 2024",
    lastVisitTime: "11:00 PM",
    paid: "$100",
  },
];

const PatienceTable = () => {

  const t = useTranslations('Admin')

  const headers = [
  t('Patient ID'),
  t('Patient Name'),
  t('City'),
  t('Phone'),
  t('Last visit'),
  
];

  const [patients, setPatients] = useState([]);

 
    useEffect(() => {
      fetchData();
  }, []);

    const fetchData = async () => {
    try {
       const token = localStorage.getItem("token");
    const data = {
      role: "Patient"
    }
      axios
        .post(
          "https://video-medico-backend-production.up.railway.app/admin/patientsList",data,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            params: data
          })
        .then((response) => {
          console.log(response);
           setPatients(response.data.patients_list);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


// Function to get the first four digits
  const getFirstFourDigits = (str) => {
    // Use a regular expression to match digits
    const digitMatch = str.match(/\d/g);
    // Join the digits and slice the first four digits
    if (digitMatch) {
      const digits = digitMatch.join('').slice(0, 10);
      return digits;
    }
    return "";
  };

  return (
    <div className=" overflow-x-auto">
      <div className="mx-4 border">
        {/* Header Table */}
        <div className="table w-full border-b">
          <div className="table-header-group bg-light-gray text-black">
            <div className="table-row">
              {headers.map((header, index) => (
                <div
                  key={index}
                  className="table-cell first:pl-6 text-left place-content-center font-semibold text-lg px-2 max-sm:px-1 py-4 max-lg:text-base max-sm:text-sm"
                >
                  {header}
                </div>
              ))}
            </div>
          </div>
          {/* Body Table */}
          <div className="table-row-group text-dark-gray">
            {patients.map((row, index) => (
              <div key={index} className="table-row">
                <div className="table-cell pl-6 text-left place-content-center py-2 px-2 max-sm:px-1 max-lg:text-base max-sm:text-sm">
                 {getFirstFourDigits(row._id)}
                  
                </div>
                <div className="table-cell items-center max-md:truncate text-left text-ellipsis max-sm:max-w-[50px]  place-content-center py-2 px-2 max-sm:px-1 max-lg:text-base max-sm:text-sm">
                  <div className="flex items-center">
                    <Image
                      src={row.picture_url ? row.picture_url: row.default_picture_url}
                      className="w-8 h-8 mr-2 max-md:hidden"
                      alt="User Icon"
                    />
                    <span>{row.firstName} {row.lastName}</span>
                  </div>
                </div>
                <div className="table-cell max-md:max-w-[50px] max-w-[150px] text-left !place-content-center py-2 px-2 max-sm:px-1 max-lg:text-base max-sm:text-sm truncate">
                  {row.location}
                </div>
                <div className="table-cell text-left !place-content-center py-2 px-2 max-sm:px-1 max-lg:text-base max-sm:text-sm">
                  {row.phoneNumber}
                </div>
                <div className="table-cell text-left !place-content-center py-2 px-2 max-sm:px-1 max-lg:text-base max-sm:text-sm">
                  <div className="flex flex-col items-start ">
                    <span>{moment(row.createdAt).format('DD MMM YYYY')}</span>
                    <span className="text-black">{moment(row.createdAt).format('hh:mm')}</span>
                  </div>
                </div>
                {/* <div className="table-cell text-left place-content-center py-2 px-2 max-sm:px-1 max-lg:text-base max-sm:text-sm">
                  {row.paid} $0
                </div> */}
                <hr className="w-full h-2 absolute bottom-0 left-0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatienceTable;
