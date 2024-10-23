"use client";
import Deletebtn from "@/app/components/Deletebtn";
import { Image } from "@nextui-org/react";
import React, { useState,useEffect } from "react";
import TransactionSidebar from "./TransactionSidebar";
import axios from "axios";
import { useTranslations } from "next-intl";



const data = [
  {
    patientName: "John smith",
    InvoiceNumber: "#322244",
    PatientID: "#apt222",
    totalAmount: "$5885",
    status: true,
  },
  {
    patientName: "John smith",
    InvoiceNumber: "#322244",
    PatientID: "#apt222",
    totalAmount: "$5885",
    status: false,
  },
  {
    patientName: "John smith",
    InvoiceNumber: "#322244",
    PatientID: "#apt222",
    totalAmount: "$5885",
    status: true,
  },
  {
    patientName: "John smith",
    InvoiceNumber: "#322244",
    PatientID: "#apt222",
    totalAmount: "$5885",
    status: false,
  },
];

   

const TransactionTable = () => {

  const t = useTranslations('Admin')

  const headers = [
  t('Invoice number'),
  t('Patient ID'),
  t('Patient Name'),
  t('Total Amount'),
  t('Status'),
   t('Actions'),
];

  const [transactions, setTransactions] = useState([]);

const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");
      axios
        .get(
          "https://video-medico-backend-production.up.railway.app/admin/transactionsList",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          console.log(response.data.payments_list);
          setTransactions(response.data.payments_list);
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

 // Function to get the first four digits
  const getFirstFourDigits = (str) => {
    // Use a regular expression to match digits
    const digitMatch = str.match(/\d/g);
    // Join the digits and slice the first four digits
    if (digitMatch) {
      const digits = digitMatch.join('').slice(0, 4);
      return digits;
    }
    return "";
  };


  return (
    <div className="overflow-auto w-full">
      <div className="border mx-4">
        <div className="table w-full">
          {/* Header section */}
          <div className="table-header-group bg-light-gray text-black">
            <div className="table-row">
              {headers.map((header, index) => (
                <div
                  key={index}
                  className="table-cell first:pl-10 font-semibold text-left text-lg px-4 py-4 max-lg:text-base max-sm:text-sm"
                >
                  {header}
                </div>
              ))}
            </div>
          </div>
          {/* Table body */}
          <div className="table-row-group text-dark-gray">
            {transactions.map((data, index) => (
              <div
                key={index}
                className="table-row border-b border-light-gray relative"
              >
                <div className="table-cell place-content-center pl-14 py-3 px-4 max-lg:text-base max-sm:text-sm">
                  {getFirstFourDigits(data._id)}
                </div>
                <div className="table-cell place-content-center items-center justify-center py-3 px-4 max-lg:text-base max-sm:text-sm gap-1">
                  {getFirstFourDigits(data.patient._id)}
                </div>
                <div className="table-cell place-content-center items-center justify-center py-3 px-4 max-lg:text-base max-sm:text-sm gap-1">
                  <div className="flex gap-2 items-center">
                    <Image
                      src={data.patient.picture_url ? data.patient.picture_url : data.patient.default_picture_url}
                      className="size-8 max-sm:hidden"
                      alt="User Icon"
                    />
                    {data.patient.firstName} {data.patient.lastName}
                  </div>
                </div>
                <div className="table-cell place-content-center items-center justify-center py-3 pl-8 max-lg:text-base max-sm:text-sm gap-1">
                  {data.fee}
                </div>
                <div className="table-cell text-left place-content-center py-3 px-4 max-lg:text-base max-sm:text-sm">
                  <TransactionSidebar review={data} />
                </div>
                <div className="table-cell text-left place-content-center py-3 px-4 max-lg:text-base max-sm:text-sm">
                  <Deletebtn />
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

export default TransactionTable;
