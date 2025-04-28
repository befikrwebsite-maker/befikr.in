"use client";

import Navbar from "@/components/NavBar";
import NavbarSub from "@/components/Navbar-Sub";
import Footer from "@/components/Footer";

export default function Governance() {
    return (
        <div className="min-h-screen bg-[#f5f5f5] font-generalSansMedium">
            <Navbar />

            <main className="w-full flex flex-col items-center no-scrollbar bg-[#f5f5f5]">
                <div className="h-fit text-center flex flex-col justify-center items-center pb-10 pt-14">
                    <div className="p-10 max-w-4xl">
                        <h1 className="text-4xl md:text-6xl font-generalSansMedium">
                            Governance Services
                            <span className="pt-2 inline-block font-generalSansItalic text-companyBlue">.</span>
                        </h1>
                        <p className="pt-6 text-lg md:text-xl max-w-3xl">

                        </p>

                        <div className="pt-16 text-left">
                            <p className="text-lg md:text-xl font-generalSansLight">
                                Governance within Environmental, Social, and Governance (ESG) services focuses on a company's internal systems, ethical conduct, and transparency, ensuring accountability and ethical decision-making.
                            </p>
                            <p className="pt-4 pb-8">
                                It assesses how companies are governed, especially services related to the quality of products and customer services.
                            </p>
                            <p className="pt-4 pb-8">
                                At befikr, as an ESG services company, we provide testing, inspection & certification services for businesses, helping them achieve their governance goals.
                            </p>


                        </div>


                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
