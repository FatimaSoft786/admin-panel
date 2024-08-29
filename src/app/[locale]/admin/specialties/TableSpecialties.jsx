"use client"
import React, {useEffect,useState} from "react";
import Deletebtn from "@/app/components/Deletebtn";
import EditBtn from "@/app/components/EditBtn";
import axios from "axios";

 import { useTranslations } from "next-intl";

const TableSpecialities = () => {

   const t = useTranslations("Admin");

  // const specialtiesData = Array.from({ length: 6 }).map((_, index) => ({
  //   id: 14233 + index,
  //   specialty: "Urology",
  // }));
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
 const [specialtiesData, setSpecialtiesData] = useState([]);
  const fetchData = async () => {
    try {
       const token = localStorage.getItem("token");
    
      axios
        .get(
          "https://video-medico-backend-production.up.railway.app/api/specialist/fetchSpecialists",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            }
          })
        .then((response) => {
          console.log(response);
           setSpecialtiesData(response.data.specialists);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

 useEffect(() => {
      fetchData();
  }, []);


  return (
    <div className="overflow-x-auto">
      <div className="mx-4 border">
        {/* Header Table */}
        <div className="w-full bg-light-gray text-black grid grid-cols-3 gap-4 px-6 py-3">
          {["#", t('Specialities'), t('Actions')].map((header, index) => (
            <div
              key={index}
              className="font-semibold text-left last:text-center text-lg px-6 last:pl-14 py-1 max-lg:text-base max-sm:text-sm"
            >
              {header}
            </div>
          ))}
        </div>
        {/* Body Table */}
        <div className="text-dark-gray">
          {specialtiesData.map((specialty, index) => (
            <div
              key={index}
              className="grid grid-cols-3 gap-4 py-1 border-b border-light-gray"
            >
              <div className="text-left items-center flex px-6 py-2 max-lg:text-base max-sm:text-sm">
                {getFirstFourDigits(specialty._id)}
              </div>
              <div className="text-left items-center flex px-12 max-sm:px-4 py-2 max-lg:text-base max-sm:text-sm">
                {specialty.specialist}
              </div>
              <div className="text-center pl-14 py-2 max-lg:text-base max-sm:text-sm">
                <div className="flex items-center justify-center gap-2.5 max-sm:gap-1">
                  {/* <EditBtn /> */}
                  <Deletebtn />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TableSpecialities;
