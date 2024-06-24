import { Switch } from "@nextui-org/react";
import React,{useState,useEffect} from "react";

const MySwitcher = ({ status }) => {

   const [appointmentStatus, setStatus] = useState([]);
  const isCompleted = appointmentStatus === 'completed';

   useEffect(() => {
  setStatus(status);
}, [status]);
 const handleToggle = () => {
    setStatus(isCompleted ? 'waiting' : 'completed');
  };


  return (
    <Switch
      // classNames={{
      //   wrapper: " bg-pure-red",
      //   checkedTrack: "bg-lime-green",
      // }}
      className=""
      size="md"
      checked={isCompleted} handleToggle={handleToggle}
      
      color="success"
    />
  );
};

export default MySwitcher;
