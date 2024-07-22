"use client";
import React,{useEffect,useState} from 'react'
import moment from "moment";

const page = () => {
const [videos, setVideos] = useState([]);
  useEffect(() => {
    const fetchVideos = async () => {
      const response = await fetch('https://video-medical-backend-production.up.railway.app/api/recordings/all');
      const data = await response.json();
    //  console.log(data.recordings);
      setVideos(data.recordings);
    };
    
    fetchVideos();
  }, []);


  return (
     <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Recordings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos.map((video) => (
          <div key={video._id} className="bg-white rounded-lg shadow p-4">
            <h2 className="text-xl font-bold mb-2 text-black">Date: {moment(video.createdAt).format('DD-MM-YYYY')}</h2>
            <video 
              className="w-full h-48"
              controls 
              src={video.recording}
            //   poster={video.thumbnail}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default page
