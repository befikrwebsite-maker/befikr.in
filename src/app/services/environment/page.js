"use client";

import Navbar from "@/components/NavBar";
import NavbarSub from "@/components/Navbar-Sub";
import Footer from "@/components/Footer";

export default function Environment() {
    return (
        <div className="min-h-screen bg-[#f5f5f5] font-generalSansMedium">
            <Navbar />

            <main className="w-full flex flex-col items-center no-scrollbar bg-[#f5f5f5]">
                <div className="h-fit text-center flex flex-col justify-center items-center pb-10 pt-14">
                    <div className="p-10 max-w-4xl">
                        <h1 className="text-4xl md:text-6xl font-generalSansMedium">
                            Environment Services
                            <span className="pt-2 inline-block font-generalSansItalic text-companyBlue">.</span>
                        </h1>
                        <p className="pt-6 text-lg md:text-xl max-w-3xl">

                        </p>

                        <div className="pt-16 text-left">
                            <p className="text-lg md:text-xl font-generalSansLight">
                                Each operating business enterprise, at some point, negatively impacts the environment, natural resources, and biodiversity through its operational dynamics. This contributes to the pre-existing environmental imbalance, which is mainly caused by population rise and economic growth.
                            </p>
                            <p className="pt-4 pb-8">
                                The environmental aspect of <strong>ESG (E)</strong> involves monitoring various business activities, measuring the degree of impact, and taking concrete steps to ensure & comply with environmental regulations.
                            </p>
                            <p className="pt-4 pb-8">
                                Businesses have the responsibility to protect and restore the natural environment while reducing environmental issues such as climate change, <strong>Greenhouse gas Emissions (GHG)</strong>, deforestation, biodiversity loss, carbon emissions, waste management, and pollution.
                            </p>
                            <p className="pt-4 pb-8">
                                At befikr, as an ESG services company, we provide solutions that assist businesses in achieving their environmental goals while protecting both people and the planet through electrical safety audits, energy audits, and managing a circular economy.
                            </p>

                        </div>


                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
