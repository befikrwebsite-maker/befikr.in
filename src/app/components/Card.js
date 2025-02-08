"use client"

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function ExpandableCard({title, details}){
    const [isExpanded, SetIsExpanded] = useState(false);

    return(
        <div 
      className={`transition-all duration-300 mx-auto mt-4 p-4 bg-white shadow-md rounded-2xl border 
        ${isExpanded ? "max-w-4xl h-72" : "max-w-md h-40"} hover:shadow-lg`}
      onClick={() => SetIsExpanded(!isExpanded)}
    >
      <div className="flex justify-between items-center cursor-pointer">
        <h2 className="text-xl font-semibold">{title}</h2>
        {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </div>

      {isExpanded && (
        <div className="mt-4 text-gray-600">
          <p>{details}</p>
        </div>
      )}
    </div>
    )
}
