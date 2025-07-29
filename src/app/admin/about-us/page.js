"use client";

import React, { useState, useEffect } from "react";
import AdminNavbar from '../comp/AdminNavbar';
import Navbar from "../comp/AboutUsNavbar";

export default function EditAboutUs() {

    const [aboutUsText, setAboutUsText] = useState([
        "befikr is a strategic & execution partner for environment, safety & social IMPACT services.",
        "We work with businesses to exhibit Business Responsibility & Sustainability through direct impact ESG services.",
        "---",
        "Our Environment (E) IMPACT services are Energy audit, Electrical safety audit, Circular economy (Defective inspection, e-waste collection & Reverse logistics management). Today, befikr has also become the last mile partner for brands looking to comply with the Extended Producer Responsibility by managing & embracing the complete circular economy chain efficiently.",
        "Our Social (S) IMPACT services include CSR (Corporate Social Responsibility) touching lives & employability through training & development services for the under privileged & deserving to contribute towards a Developed India.",
        "---",
        "We carry a credible track record of winning multiple years of service contracts from Banking, Oil & Gas & Consumer brands setting year on year new standards & controls through diligent Inspection-investigation-Auditing-Remidiation services.",
        "Established in 2016, today we take pride in serving market leaders like HDFC Bank, ICICI Bank, Axis Bank, Kotak Mahindra Bank, Bank of India, Indian Oil, Hindustan Petroleum, Jubilant Food-works (Dominos India), Crompton, Bosch & Siemens, American Embassy, Attero & many such prestigious organisations.",
        "Our unique propositions for businesses comprises offering a one stop end to end service through a well trained professional team of engineers with a pan-India execution network to help businesses get serviced as well scale sustainably.",
        "Today, befikr is successfully addressing businesses protecting their risks as well as helping them welcome growth opportunities.",
        "The brand “befikr” is owned and operated by Opera Gratia Pvt Ltd. The company has its headquarters in Delhi."
    ]);

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
                            <h1 className="text-4xl md:pt-10  md:text-6xl font-generalSansMedium">
                                Who We Are <span className="pt-6 inline-block font-generalSansItalic text-companyBlue">?</span>
                            </h1>
                            <div className="pt-16 md:pt-24 max-w-4xl text-left">
                                <div className="text-2xl max-w-2xl font-generalSansLight">
                                    <form className="flex flex-col max-w-4xl w-full">
                                        {aboutUsText.map((text, index) =>
                                            text === "---" ? (
                                                <div
                                                    key={index}
                                                    className="items-center h-[0.5px] my-6 rounded-full bg-companyBlue"
                                                ></div>
                                            ) : (
                                                <textarea style={{ height: `${50 * (text.length / 50)}px` }} className={`px-3.5 py-2.5 mt-4 mb-8 border bg-transparent max-w-4xl w-full`} value={text} />
                                            ))}
                                        {/* <textarea className="border bg-transparent max-w-4xl w-full " value={"befikr is a strategic & execution partner for environment, safety & social IMPACT services."}></textarea>
                                        <textarea className="mt-4 mb-8 border bg-transparent max-w-4xl w-full " value={"We work with businesses to exhibit Business Responsibility & Sustainability through direct impact ESG services."}></textarea>
                                        <div className="items-center h-[0.5px] rounded-full bg-companyBlue"></div>
                                        <textarea className="mt-4 mb-8 border bg-transparent max-w-4xl w-full" value={"Our Environment (E) IMPACT services are Energy audit, Electrical safety audit, Circular economy (Defective inspection, e-waste collection & Reverse logistics management). Today, befikr has also become the last mile partner for brands looking to comply with the Extended Producer Responsibility by managing & embracing the complete circular economy chain efficiently."}></textarea>
                                        <textarea className="mt-4 mb-8 border bg-transparent max-w-4xl w-full " value={"Our Social (S) IMPACT services include CSR (Corporate Social Responsibility) touching lives & employability through training & development services for the under privileged & deserving to contribute towards a Developed India."}></textarea>
                                        <div className="items-center h-[0.5px] rounded-full bg-companyBlue"></div>
                                        <textarea className="mt-4 mb-8 border bg-transparent max-w-4xl w-full " value={"We carry a credible track record of winning multiple years of service contracts from Banking, Oil & Gas & Consumer brands setting year on year new standards & controls through diligent Inspection-investigation-Auditing-Remidiation services."}></textarea>
                                        <textarea className="mt-4 mb-8 border bg-transparent max-w-4xl w-full " value={"Established in 2016, today we take pride in serving market leaders like HDFC Bank, ICICI Bank, Axis Bank, Kotak Mahindra Bank, Bank of India, Indian Oil, Hindustan Petroleum, Jubilant Food-works (Dominos India), Crompton, Bosch & Siemens, American Embassy, Attero & many such prestigious organisations."}></textarea>
                                        <textarea className="mt-4 mb-8 border bg-transparent max-w-4xl w-full " value={"Our unique propositions for businesses comprises offering a one stop end to end service through a well trained professional team of engineers with a pan-India execution network to help businesses get serviced as well scale sustainably."}></textarea>
                                        <img
                                            src="/images/IMG-20250220-WA0004.jpg"
                                        ></img>
                                        <textarea className="mt-4 mb-8 border bg-transparent max-w-4xl w-full " value={"Today, befikr is successfully addressing businesses protecting their risks as well as helping them welcome growth opportunities."}></textarea>
                                        <textarea className="mt-4 mb-8 border bg-transparent max-w-4xl w-full " value={"The brand “befikr” is owned and operated by Opera Gratia Pvt Ltd. The company has its headquarters in Delhi."}></textarea> */}
                                    </form>
                                    {/* <p className="md:text-4xl font-generalSansRegular"><strong className=" text-companyBlue">befikr</strong> is a strategic & execution partner for environment, safety & social IMPACT services.</p>
                                    <p className="pt-4 pb-8">We work with businesses to exhibit Business Responsibility & Sustainability through direct impact ESG services.</p>
                                    <div className="items-center h-[0.5px] rounded-full bg-companyBlue"></div>
                                    <p className="pt-4 pb-8">Our Environment (E) IMPACT services are Energy audit, Electrical safety audit, Circular economy (Defective inspection, e-waste collection & Reverse logistics management). Today, befikr has also become the last mile partner for brands looking to comply with the Extended Producer Responsibility by managing & embracing the complete circular economy chain efficiently.</p>
                                    <p className="pt-4 pb-8">Our Social (S) IMPACT services include CSR (Corporate Social Responsibility) touching lives & employability through training & development services for the under privileged & deserving to contribute towards a Developed India.</p>
                                    <div className="items-center h-[0.5px] rounded-full bg-companyBlue"></div>
                                    <p className="pt-4 pb-8">We carry a credible track record of winning multiple years of service contracts from Banking, Oil & Gas & Consumer brands setting year on year new standards & controls through diligent Inspection-investigation-Auditing-Remidiation services.</p>
                                    <p className="pt-4 pb-8"> Established in 2016, today we take pride in serving market leaders like HDFC Bank, ICICI Bank, Axis Bank, Kotak Mahindra Bank, Bank of India, Indian Oil, Hindustan Petroleum, Jubilant Food-works (Dominos India), Crompton, Bosch & Siemens, American Embassy, Attero & many such prestigious organisations.</p>
                                    <p className="pt-4 pb-8"> Our unique propositions for businesses comprises offering a one stop end to end service through a well trained professional team of engineers with a pan-India execution network to help businesses get serviced as well scale sustainably.</p> */}
                                    <img
                                        src="/images/IMG-20250220-WA0004.jpg"
                                    ></img>
                                    {/* <p className="pt-4 pb-8">Today, befikr is successfully addressing businesses protecting their risks as well as helping them welcome growth opportunities.</p>
                                    <p className="pt-4 pb-8">The brand “befikr” is owned and operated by Opera Gratia Pvt Ltd. The company has its headquarters in Delhi.</p> */}
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