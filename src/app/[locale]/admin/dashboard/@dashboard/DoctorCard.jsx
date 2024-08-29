"use client";
import { Image } from "@nextui-org/react";
import React,{useState,useEffect} from "react";
import Link from "next/link";
import { useParams } from "next/navigation"
import axios from "axios";
import { useTranslations } from "next-intl";

const DoctorCard = ({ doctorRequests }) => {

  const t = useTranslations("Admin");

 const params = useParams();
const [request, setRequest] = useState([]);

 const accountApproved = async(docId)=>{  

     const data = {
      id: docId,
      status: true
    };
      const token = localStorage.getItem("token");
     axios
        .post(
          "https://video-medico-backend-production.up.railway.app/admin/accountApproval",data,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
        .then((response) => {
          console.log(response);
          fetchData();
        })
        .catch((error) => {
          console.error("Error:", error);
        });

 }

 const accountDeclined = async(docId)=>{  
     const data = {
      id: docId,
      status: false
    };

     const token = localStorage.getItem("token");
     axios
        .post(
          "https://video-medico-backend-production.up.railway.app/admin/accountApproval",data,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
        .then((response) => {
          console.log(response);
          fetchData();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
 }

    const fetchData = async () => {
    try {
      console.log("working");
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
           setRequest(filteredData);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  useEffect(() => {
  setRequest(doctorRequests);
}, [doctorRequests]);
 

  return (
    <div className="relative overflow-x-auto">
      <div className="w-full bg-light-gray font-bold flex text-left h-[48px] px-6 items-center">
        <div className="w-[40%] flex ">{t('Doctor name')}</div>
        <div className="w-[40%] flex items-center pl-4 max-md:pl-2">{t('Specialty')}</div>
        <div className="w-1/3 flex items-center justify-center pl-20">
          {t('Actions')}
        </div>
      </div>
      {request.map((data, index) => (
        <div key={index} className="w-full cursor-pointer flex text-left py-4 px-6 border-b">
          <Link href={{
          pathname: `/${params.locale}/admin/doctorProfile`,
          query: {
            id: data._id
          },
        }} className="w-[40%] flex ">
            <div className="flex items-center gap-2 justify-center">
              <Image src={data.picture_url ? data.picture_url : data.default_picture_url} className="h-8 w-8" alt="User Icon" />
              {data.firstName}{data.lastName}
            </div>
          </Link>
          <div className="w-[40%] flex text-center pl-5  items-center">
            {data.specialist}
          </div>

          {
            <div className="w-1/3 flex items-center justify-end gap-4">
            <button onClick={()=>{
              console.log(data._id);
              accountApproved(data._id);
            }} className="bg-lime-green max-sm:bg-white rounded-lg p-2.5 text-white max-sm:text-[12px] max-sm:px-0 max-sm:py-2 tracking-wider text-[14px] px-9 max-lg:px-3 flex items-center gap-2">
              <span className="max-sm:hidden block">{t('Accept')}</span>
              <img
                src="/svg/check.svg"
                sizes="24px"
                className="max-sm:block text-inherit hidden"
              />
            </button>
            <button onClick={()=>{
            accountDeclined(data._id);
            }} className="bg-pure-red max-sm:bg-white rounded-lg p-2.5 text-white max-sm:text-[12px] max-sm:px-0 max-sm:py-2 tracking-wider text-[14px] px-9 max-lg:px-3 flex items-center gap-2">
              <span className="max-sm:hidden block">{t('Decline')}</span>
              <img
                src="/svg/delete.svg"
                sizes="24px"
                className="max-sm:block text-inherit hidden"
              />
            </button>
          </div>
          }
         
        </div>
      ))}
    </div>
  );
};

export default DoctorCard;
