import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const CountUp = dynamic(() => import("../components/Counter"), { ssr: false });


export default function Clock() {
    const [Audits, setAudits] = useState(12043)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setAudits(prev => prev + 1);
        }, 60 * 60 * 1000); 

        return () => clearInterval(intervalId); // Cleanup when unmounting
    }, []);

    return (
        <div className="p-12 bg-companyBlue">
            <div className="text-white flex flex-col md:flex-row">
                <div className="flex-1">
                    <h1 className="text-4xl text-center md:text-left font-generalSansSemibold mb-6">Leading force in Electricity Safety Auditing</h1>
                    
                </div>

                <div className="flex-1 items-center">
                    <p className="inline-block">With</p>
                    <h1 className="inline-block text-8xl font-generalSansBold text-center">
                       <CountUp to={Audits} separator="," />
                    </h1>
                    <p className="inline-block">and counting</p>
                </div>
            </div>
        </div>
    );
};