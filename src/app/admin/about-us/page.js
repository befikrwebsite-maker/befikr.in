"use client";

import React, { useState, useEffect } from "react";
import AdminNavbar from '../comp/AdminNavbar';
import Navbar from "../comp/AboutUsNavbar";

export default function EditAboutUs() {

    const [aboutUsContent, setAboutUsContent] = useState([]);

        useEffect(() => {
        fetch("https://befikr.in/get_about_us_content.php")
          .then((res) => res["data"].json())
          .then((json) => {
            console.log(json);
            setAboutUsContent(json);
          })
          .catch((err) => {
            console.error("Error fetching services:", err);
          });
      }, []);



    // const [aboutUsContent, setAboutUsContent] = useState([
    //     { type: "text", content: "befikr is a strategic & execution partner for environment, safety & social IMPACT services." },
    //     { type: "text", content: "We work with businesses to exhibit Business Responsibility & Sustainability through direct impact ESG services." },
    //     { type: "separator" },
    //     { type: "text", content: "Our Environment (E) IMPACT services are Energy audit, Electrical safety audit, Circular economy (Defective inspection, e-waste collection & Reverse logistics management). Today, befikr has also become the last mile partner for brands looking to comply with the Extended Producer Responsibility by managing & embracing the complete circular economy chain efficiently." },
    //     { type: "text", content: "Our Social (S) IMPACT services include CSR (Corporate Social Responsibility) touching lives & employability through training & development services for the under privileged & deserving to contribute towards a Developed India." },
    //     { type: "separator" },
    //     { type: "text", content: "We carry a credible track record of winning multiple years of service contracts from Banking, Oil & Gas & Consumer brands setting year on year new standards & controls through diligent Inspection-investigation-Auditing-Remidiation services." },
    //     { type: "text", content: "Established in 2016, today we take pride in serving market leaders like HDFC Bank, ICICI Bank, Axis Bank, Kotak Mahindra Bank, Bank of India, Indian Oil, Hindustan Petroleum, Jubilant Food-works (Dominos India), Crompton, Bosch & Siemens, American Embassy, Attero & many such prestigious organisations." },
    //     { type: "text", content: "Our unique propositions for businesses comprises offering a one stop end to end service through a well trained professional team of engineers with a pan-India execution network to help businesses get serviced as well scale sustainably." },
    //     { type: "image", content: "/images/IMG-20250220-WA0004.jpg" },
    //     { type: "text", content: "Today, befikr is successfully addressing businesses protecting their risks as well as helping them welcome growth opportunities." },
    //     { type: "text", content: "The brand “befikr” is owned and operated by Opera Gratia Pvt Ltd. The company has its headquarters in Delhi." }
    // ]);

    const [newText, setNewText] = useState("");
    const [newImageSrc, setNewImageSrc] = useState("");
    const [showTextInput, setShowTextInput] = useState(false);
    const [showImageInput, setShowImageInput] = useState(false);


    return (
        <div className="min-h-screen bg-[#f5f5f5] font-generalSansMedium items-center justify-center" style={{ height: "200vh" }}>
            <AdminNavbar />

            <Navbar />

            <div className="flex justify-center items-center gap-5 mt-3 ">
                <h1 className="text-companyBlue font-bold text-5xl">Preview</h1>
                <h1 className="text-black font-bold text-5xl">Mode</h1>
            </div>
            <main className="w-[100%] mt-3 md:w-full justify-self-center no-scrollbar bg-[#f5f5f5] flex flex-col">
                <div className="h-fit text-center flex flex-col justify-center items-center pb-10">
                    <img
                        src="/images/IMG1.jpg"
                        className="w-full"
                    />
                    <div>
                        <div className="p-10">

                            <div className="flex flex-col gap-4 mt-6 w-full">

                                {/* Add Paragraph */}
                                {showTextInput ? (
                                    <div className="flex flex-col gap-2 max-w-4xl w-full">
                                        <textarea
                                            value={newText}
                                            onChange={(e) => setNewText(e.target.value)}
                                            placeholder="Enter paragraph text..."
                                            className="px-3.5 py-2.5 border bg-white text-black"
                                        />
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => {
                                                    if (newText.trim() !== "") {
                                                        setAboutUsContent([...aboutUsContent, { type: "text", content: newText }]);
                                                        setNewText("");
                                                        setShowTextInput(false);
                                                    }
                                                }}
                                                className="bg-companyBlue text-white px-3 py-1 rounded "
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
                                        className="bg-companyBlue text-black px-4 py-2 rounded w-full hover:text-white"
                                    >
                                        + Add Paragraph
                                    </button>
                                )}

                                {/* Add Image */}
                                {/* {showImageInput ? (
                                    <div className="flex flex-col gap-2 max-w-4xl w-full">
                                        <input
                                            type="text"
                                            value={newImageSrc}
                                            onChange={(e) => setNewImageSrc(e.target.value)}
                                            placeholder="Enter image path e.g. /images/IMG1.jpg"
                                            className="px-3.5 py-2.5 border bg-white text-black"
                                        />
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => {
                                                    if (newImageSrc.trim() !== "") {
                                                        setAboutUsContent([...aboutUsContent, { type: "image", src: newImageSrc }]);
                                                        setNewImageSrc("");
                                                        setShowImageInput(false);
                                                    }
                                                }}
                                                className="bg-green-600 text-white px-3 py-1 rounded"
                                            >
                                                Add Image
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setNewImageSrc("");
                                                    setShowImageInput(false);
                                                }}
                                                className="bg-gray-400 text-white px-3 py-1 rounded"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <button
                                        onClick={() => setShowImageInput(true)}
                                        className="bg-green-500 text-white px-4 py-2 rounded max-w-[200px]"
                                    >
                                        + Add Image
                                    </button>
                                )} */}
                                <button
                                    onClick={() =>
                                        setAboutUsContent([...aboutUsContent, { type: "separator" }])
                                    }
                                    className="bg-black text-companyBlue px-4 py-2 rounded w-full hover:text-white"
                                >
                                    + Add Separator
                                </button>
                            </div>

                            <h1 className="text-4xl md:pt-10  md:text-6xl font-generalSansMedium">
                                Who We Are <span className="pt-6 inline-block font-generalSansItalic text-companyBlue">?</span>
                            </h1>
                            <div className="pt-16 md:pt-24 max-w-4xl text-left">
                                <div className="text-2xl max-w-2xl font-generalSansLight">
                                    {/* <p >Note: ** text ** is used to bold that text</p> */}
                                    <form className="flex flex-col max-w-4xl w-full">
                                        {aboutUsContent.map((item, index) => {
                                            if (item.type === "text") {
                                                return (
                                                    <textarea
                                                        key={index}
                                                        style={{ height: `${item.content.length}px` }}
                                                        className="px-3.5 py-2.5 mt-4 mb-8 border bg-transparent max-w-4xl w-full text-2xl min-h-[60px]"
                                                        value={item.content}
                                                        onChange={(e) => {
                                                            const updated = [...aboutUsContent];
                                                            updated[index].content = e.target.value;
                                                            setAboutUsContent(updated);
                                                        }}
                                                    />
                                                );
                                            } else if (item.type === "image") {
                                                return (
                                                    <img
                                                        key={index}
                                                        src={item.content}
                                                        className="my-6 w-full max-w-4xl"
                                                        alt={`Inserted visual ${index}`}
                                                    />
                                                );
                                            } else if (item.type === "separator") {
                                                return (
                                                    <div
                                                        key={index}
                                                        className="items-center h-[1px] my-6 rounded-full bg-companyBlue"
                                                    />
                                                );
                                            }
                                        })}


                                    </form>

                                    {/* <img
                                        src="/images/IMG-20250220-WA0004.jpg"
                                    ></img> */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" p-8 ">
                    <div
                        className="container mx-auto px-6 py-1 bg-white rounded-3xl shadow-xl mb-10 items-center">
                    </div>
                </div>
            </main>


        </div>
    )
}