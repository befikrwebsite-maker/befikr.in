import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const CountUp = dynamic(() => import("../components/Counter"), { ssr: false });


export default function ClockArea() {
    const [number, setNumber] = useState(null);
    const areaNumber = 39741000

    useEffect(() => {
        fetch("https://www.befikr.in/get_number.php") // Replace with your actual domain
            .then((res) => res.json())
            .then((data) => {
                if (data.number !== undefined) {
                    setNumber(data.number);
                }
            })
            .catch((error) => console.error("Error fetching number:", error));
    }, []);

    return (
        <div className="p-12 bg-companyBlue ">
            <div className="text-white flex flex-col  md:flex-row">
                <div className="flex-1 flex items-center justify-center text-center">
                    <h1 className="text-4xl md:text-left text-center font-generalSansSemibold mb-2">
                        India’s Leading Force in Electrical Safety Auditing
                    </h1>
                </div>

                <div className="flex-1 flex flex-row items-center justify-center text-center">
                    <p className="inline-block">With</p>
                    <h1 className="inline-block text-8xl font-generalSansBold">
                        <CountUp to={areaNumber} separator="," />
                    </h1>
                    <p className="inline-block">sq.ft and counting</p>
                </div>

            </div>
        </div>
    );
};