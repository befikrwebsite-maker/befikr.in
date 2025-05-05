import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const CountUp = dynamic(() => import("../components/Counter"), { ssr: false });

export default function ClockArea() {
  const [number, setNumber] = useState(null);
  const [areaNumber, setAreaNumber] = useState(39741000);

  useEffect(() => {
    fetch("https://www.befikr.in/get_number.php")
      .then((res) => res.json())
      .then((data) => {
        if (data.number !== undefined) {
          setNumber(data.number);
        }
      })
      .catch((error) => console.error("Error fetching number:", error));
  }, []);

  return (
    <div className="px-4 py-10 sm:px-6 lg:px-12 bg-companyBlue">
      <div className="text-white flex flex-col gap-8 md:flex-row items-center justify-between">
        
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-generalSansSemibold leading-snug">
            India’s Leading Force in Electrical Safety Auditing
          </h1>
        </div>

        <div className="flex-1 flex flex-wrap justify-center items-center text-center gap-x-2">
          <p className="text-lg sm:text-xl">With</p>
          <h1 className="text-4xl sm:text-6xl font-generalSansBold">
            <CountUp to={number ? number * 3000 : 0} separator="," />
          </h1>
          <p className="text-lg sm:text-xl">sq.ft and counting</p>
        </div>

      </div>
    </div>
  );
}
