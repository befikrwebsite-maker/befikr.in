"use client"

import React, { useState, useEffect } from "react";
import AdminNavbar from '../../comp/AdminNavbar';
import Navbar from "../../comp/AboutUsNavbar";

export default function EditFounders() {
  const [newText, setNewText] = useState("");
  const [showTextInput, setShowTextInput] = useState(false);
  const [selectedFounder, setSelectedFounder] = useState("");
  
  const [foundersContentSumit, setFoundersContentSumit] = useState([
    { type: "text", content: "Sumit Srivastava is a passionate fintech entrepreneur since 2016 & the co-founder of befikr.in, one of India’s leading B2B ESG services company founded along with a long-time colleague & friend Chirajay as his co-founder." },
    { type: "text", content: "Today, befikr focuses on Business to Business services focusing on safety, energy & defective audits, circular economy, business sustainability as well as corporate social responsibility services. In addition, befikr is also involved in B2B2C & Institutional services with an experience of over 9 years in serving over a million households, fortune 500 companies, market leading consumer brands and prestigious institutions. " },
    { type: "text", content: "Sumit is an NDIM-Alumni affiliated to the prestigious Guru Gobind Singh Indraprastha University with masters in Finance. Born at Dhanbad, Sumit follows & practises mathematics, business algorithms & business strategy  and loves to spend quality time with the family & two lovely children." },
    { type: "text", content: "Today, at befikr he is involved in setting up a strong foundation for the next decade with team & processes to be remembered leaving a strong impact in the spheres of environment, society & safety." },
  ]);
  const [foundersContentChirajay, setFoundersContentChirajay] = useState([
    { type: "text", content: "Chirajay Sharma is a passionate marketing entrepreneur since 2016 & the co-founder of befikr.in, one of India’s leading B2B ESG services company founded along with a long-time colleague & friend Sumit as his co-founder." },
    { type: "text", content: "Today, befikr focuses on Business to Business services focusing on safety, energy & defective audits, circular economy, business sustainability as well as corporate social responsibility services. In addition, befikr is also involved in B2B2C & Institutional services with an experience of over 9 years in serving over a million households, fortune 500 companies, market leading consumer brands and prestigious institutions." },
    { type: "text", content: "Chirajay is an IIM Kolkata Alumni with Masters in Pharmacology from Rajiv Gandhi University of Health Sciences, Bangalore & graduation from Rajasthan University. Born at Jodhpur, Chirajay follows the global consumer space with respect to marketing & branding. In his free time he loves exhibiting Interior design closely for family & friends." },
    { type: "text", content: "Today, at befikr he is involved in setting up a strong foundation for the next decade as a brand to be remembered leaving a strong impact in the spheres of environment, society & safety." },
  ]);



  return (
    <div className="min-h-screen bg-[#f5f5f5] font-generalSansMedium" style={{ height: "200vh" }}>
      <AdminNavbar />

      <main className="w-[100%] pt-2 md:w-full justify-self-center no-scrollbar bg-[#f5f5f5] flex flex-col">
        <Navbar />

        <div className="flex justify-center items-center gap-5 mt-3 ">
          <h1 className="text-companyBlue font-bold text-5xl">Preview</h1>
          <h1 className="text-black font-bold text-5xl">Mode</h1>
        </div>
        <div className="h-fit text-center flex flex-col justify-center items-center pb-5">
          <div className="p-5">
            <h1 className="text-4xl md:pt-5 md:text-6xl font-generalSansMedium">
              <div className="flex flex-col text-lg gap-4 w-full">

                {/* Add Paragraph */}
                {showTextInput ? (
                  <div className="flex flex-col gap-2 max-w-4xl w-full">
                    <label className="text-lg font-semibold">Select Founder:</label>
                    <select
                      value={selectedFounder}
                      onChange={(e) => setSelectedFounder(e.target.value)}
                      className="border px-4 py-2 rounded mb-4"
                    >
                      <option value="">-- Select --</option>
                      <option value="Chirajay">Chirajay Sharma</option>
                      <option value="Sumit">Sumit Srivastava</option>
                    </select>

                    <textarea
                      value={newText}
                      onChange={(e) => setNewText(e.target.value)}
                      placeholder="Enter paragraph text..."
                      className="px-3.5 py-2.5 border bg-white text-black"
                    />
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          if (selectedFounder === "Chirajay") {
                            if (newText.trim() !== "") {
                              setFoundersContentChirajay([...foundersContentChirajay, { type: "text", content: newText }]);
                              setNewText("");
                              setShowTextInput(false);
                            }

                          } else if (selectedFounder === "Sumit"){
                            if (newText.trim() !== "") {
                              setFoundersContentSumit([...foundersContentSumit, { type: "text", content: newText }]);
                              setNewText("");
                              setShowTextInput(false);
                            }
                          }
                        }}
                        className="bg-blue-600 text-white px-3 py-1 rounded"
                      >
                        Add Paragraph
                      </button>
                      <button
                        onClick={() => {
                          setNewText("");
                          setShowTextInput(false);
                        }}
                        className="bg-gray-400 text-white px-3 py-1 rounded"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => setShowTextInput(true)}
                    className="bg-blue-500 text-white px-4 py-2 rounded w-full"
                  >
                    + Add Paragraph
                  </button>
                )}

              </div>
              About The Founders<span className="pt-6 inline-block font-generalSansItalic text-companyBlue">.</span>
            </h1>
            <div className="pt-16 md:pt-24 max-w-4xl text-left">
              <div className="text-3xl max-w-2xl font-generalSansLight">
                <form className="flex flex-col max-w-4xl w-full">
                  {foundersContentSumit.map((item, index) => {
                    if (item.type === "text") {
                      return (
                        <textarea
                          key={index}
                          style={{ height: `${item.content.length}px` }}
                          className="px-3.5 py-2.5 mt-4 mb-8 border bg-transparent max-w-4xl w-full text-2xl min-h-[60px]"
                          value={item.content}
                          onChange={(e) => {
                            const updated = [...foundersContentSumit];
                            updated[index].content = e.target.value;
                            setFoundersContentSumit(updated);
                          }}
                        />
                      );
                    }
                  })}
                  <div className="items-center h-[1px] my-6 rounded-full bg-companyBlue" />
                  {foundersContentChirajay.map((item, index) => {
                    if (item.type === "text") {
                      return (
                        <textarea
                          key={index}
                          style={{ height: `${item.content.length}px` }}
                          className="px-3.5 py-2.5 mt-4 mb-8 border bg-transparent max-w-4xl w-full text-2xl min-h-[60px]"
                          value={item.content}
                          onChange={(e) => {
                            const updated = [...foundersContentChirajay];
                            updated[index].content = e.target.value;
                            setFoundersContentChirajay(updated);
                          }}
                        />
                      );
                    }
                  })}
                </form>
                <div className="md:text-4xl font-generalSansRegular"><strong className=" text-companyBlue">Sumit Srivastava</strong> is a passionate fintech entrepreneur since 2016 & the co-founder of befikr.in, one of India’s leading B2B ESG services company founded along with a long-time colleague & friend Chirajay as his co-founder.</div>
                <p className="pt-4 pb-8 ">Today, befikr focuses on Business to Business services focusing on safety, energy & defective audits, circular economy, business sustainability as well as corporate social responsibility services. In addition, befikr is also involved in B2B2C & Institutional services with an experience of over 9 years in serving over a million households, fortune 500 companies, market leading consumer brands and prestigious institutions. </p>
                <p className="pt-4 pb-8">Sumit is an NDIM-Alumni affiliated to the prestigious Guru Gobind Singh Indraprastha University with masters in Finance. Born at Dhanbad, Sumit follows & practises mathematics, business algorithms & business strategy  and loves to spend quality time with the family & two lovely children.</p>
                <p className="pt-4 pb-8">Today, at befikr he is involved in setting up a strong foundation for the next decade with team & processes to be remembered leaving a strong impact in the spheres of environment, society & safety.</p>
                <div className="items-center h-[0.5px] rounded-full mb-10 bg-companyBlue"></div>
                <p className="md:text-4xl font-generalSansRegular"><strong className=" text-companyBlue">Chirajay Sharma</strong> is a passionate marketing entrepreneur since 2016 & the co-founder of befikr.in, one of India’s leading B2B ESG services company founded along with a long-time colleague & friend Sumit as his co-founder.</p>
                <p className="pt-4 pb-8 ">Today, befikr focuses on Business to Business services focusing on safety, energy & defective audits, circular economy, business sustainability as well as corporate social responsibility services. In addition, befikr is also involved in B2B2C & Institutional services with an experience of over 9 years in serving over a million households, fortune 500 companies, market leading consumer brands and prestigious institutions. </p>
                <p className="pt-4 pb-8">Chirajay is an IIM Kolkata Alumni with Masters in Pharmacology from Rajiv Gandhi University of Health Sciences, Bangalore & graduation from Rajasthan University. Born at Jodhpur, Chirajay follows the global consumer space with respect to marketing & branding. In his free time he loves exhibiting Interior design closely for family & friends.</p>
                <p className="pt-4 pb-8">Today, at befikr he is involved in setting up a strong foundation for the next decade as a brand to be remembered leaving a strong impact in the spheres of environment, society & safety.</p>
              </div>
            </div>
          </div>
        </div>
      </main>


    </div>
  )
}

