"use client";
import { Image } from "@nextui-org/react";
import { FaStar, FaRegStar } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import Deletebtn from "@/app/components/Deletebtn";
import axios from "axios";
import moment from "moment";
import { useTranslations } from "next-intl";



const data = Array.from({ length: 6 }).map((_, index) => ({
  doctorName: "John Smith",
  rating: 3,
  patientName: "#2224244",
  reviewDate: "11 Nov 2024",
  reviewTime: "11:00 PM",
  description: "Lorem ipsum dolor sit amet, consectetur",
}));

const ReviewTable = () => {
 
  const t = useTranslations('Admin')

  const headers = [
  t('Patient Name'),
  t('Doctor name'),
   t('Rating'),
   t('Description'),
   t('Date'),
   t('Actions'),
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
           setDoctors(response.data.doctors_list);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

 const deleteReview = async (id) => {
    try {
       const token = localStorage.getItem("token");
      axios
        .delete(
          `https://video-medical-backend-production.up.railway.app/api/review/deleteReview/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          console.log(response);
          fetchData();
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

  const convertTime = ({ timestamp }) => {
    return (formattedDate = moment(timestamp).format("DD MM YYYY, h:mm:ss a"));
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
    <div className=" overflow-auto">
      {/* Header Table */}
      <div className="mx-4 border">
        <div className="table w-full border-b">
          <div className="table-header-group bg-light-gray text-black">
            <div className="table-row">
              {headers.map((header, index) => (
                <div
                  key={index}
                  className="table-cell first:pl-12 max-md:first:pl-2 font-semibold last:text-center text-left text-lg px-4 py-4 max-lg:text-base max-sm:text-sm"
                >
                  {header}
                </div>
              ))}
            </div>
          </div>
          {/* Body Table */}
          <div className="table-row-group text-dark-gray">
          {
            doctors.map((data,index)=>(
              <div key={index} className="table-row border-b border-light-gray relative">
                
                  {data.reviews.map((review, index) => (
              <>
                <div key={index} className="table-cell pl-14 max-md:pl-2 place-content-center text-left py-3 px-4 max-lg:text-base max-sm:text-sm">
                  {getFirstFourDigits(review.patientId)}
                </div>
                <div className="table-cell place-content-center items-center justify-center py-3 px-4 max-lg:text-base max-sm:text-sm gap-1">
                  <div className="flex gap-2 items-center">
                    <Image
                      src={data.picture_url ? data.picture_url: data.default_picture_url}
                      className="w-8 h-8 rounded-full hidden md:inline-block"
                      alt="User Icon"
                    />
                   {data.firstName}{data.lastName}
                  </div>
                </div>
                <div className="table-cell items-center place-content-center  text-left py-3 max-lg:text-base max-sm:text-sm">
                  <div className="flex items-center justify-start gap-1 max-md:hidden">
                    {[...Array(5)].map((_, i) =>
                      review.rating > i ? (
                        <FaStar key={i} color="#FFC107" />
                      ) : (
                        <FaRegStar key={i} />
                      )
                    )}
                    <span className="mt-0.5">({review.rating})</span>
                  </div>
                </div>
                <div className="table-cell place-content-center truncate text-left py-3 px-4 max-w-[120px] max-sm:max-w-[60px] max-lg:text-base max-sm:text-sm">
                  {review.review}
                </div>
                <div className="table-cell text-left py-3 place-content-center px-4 max-lg:text-base max-sm:text-sm">
                  <div className="flex flex-col max-w-[180px]">
                    <span>{moment(review.createdAt).format("DD MMM YYYY")}</span>
                    <span className="text-black">
                      {moment(review.createdAt).format("h:mm a")}
                    </span>
                  </div>
                </div>
                <div onClick={()=>{
                  // console.log(review._id);
                  // deleteReview(review._id);
                }} className="table-cell pl-20 max-md:pl-14 text-left place-content-center py-3 px-4 max-lg:text-base max-sm:text-sm">
                  <Deletebtn />
                </div>
                <hr className="w-full h-2 absolute bottom-0 left-0" />
              </>
            ))}
                
              </div>
            ))
          }
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewTable;
