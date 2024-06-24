"use client";

import { Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";

const MedicalSection = () => {
  return (
    <div className="flex flex-wrap  h-fit bg-light-gray">
      <div className="w-full flex flex-wrap container mx-auto relative flex-row py-8">
        <div className="w-full md:w-[53%] p-4 flex items-center ">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-4 text-black">
              Benvenuto nella <span className="text-dark-blue">medicina</span>
              <br />
              del <span className="text-dark-blue">futuro!</span>
            </h1>
            <p className="mb-4">
              Connettiti con medici qualificati in pochi minuti, direttamente
              dal tuo dispositivo. La nostra piattaforma ti guiderà direttamente
              verso la soluzione di cui hai bisogno, con accesso istantaneo ai
              migliori specialisti e tutto il supporto necessario per gestire la
              tua salute senza stress.
            </p>
            {/* <button className="bg-dark-blue text-white py-4 px-8 rounded-full mb-8">
            Make Appointment
          </button> */}
            <div className="flex flex-wrap mt-20 items-center gap-2 bg-white shadow-xl p-3 rounded-2xl justify-evenly">
              <div className="flex flex-1 rounded-lg border relative divide-x-1">
                <select className="px-2 appearance-none py-4 w-1/3 md:w-auto">
                  <option>Lahore</option>
                  <option>Other Location</option>
                </select>
                <input
                  type="text"
                  placeholder="Specialist"
                  className="appearance-none w-2/3 md:w-auto px-2 py-4 focus:outline-none"
                />
              </div>
              <button className="bg-dark-blue px-3 text-base flex gap-3 text-white py-4 w-full md:w-auto rounded-lg justify-center items-center">
                <span className="hidden lg:block">Search Now</span>
                <FaSearch />
              </button>
            </div>
          </motion.div>
        </div>
        <div className="w-full md:w-[47%] flex max-md:hidden justify-center md:justify-end mt-8 md:mt-0">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={`/patient/mediclSection.svg`}
              alt="Doctor"
              className="w-full max-h-screen object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MedicalSection;
