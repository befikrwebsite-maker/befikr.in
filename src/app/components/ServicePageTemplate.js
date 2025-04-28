"use client";

import Navbar from "@/components/NavBar";
import NavbarSub from "@/components/Navbar-Sub";
import Footer from "@/components/Footer";

export default function ServicePageTemplate({ pageTitle, introParagraphs, sections }) {
  return (
    <div className="min-h-screen bg-[#f5f5f5] font-generalSansMedium">
      <Navbar />

      <main className="w-full flex flex-col items-center no-scrollbar bg-[#f5f5f5]">
        <div className="h-fit text-center flex flex-col justify-center items-center pb-10 pt-14">
          <div className="p-10 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-generalSansMedium">
              {pageTitle}
              <span className="pt-2 inline-block font-generalSansItalic text-companyBlue">.</span>
            </h1>

            <div className="pt-16 text-left">
              {introParagraphs.map((para, index) => (
                <p
                  key={index}
                  className={` ${index === 0 ? "text-lg md:text-xl font-generalSansLight" : ""} ${
                    index !== 0 ? "pt-4" : ""
                  } ${index === introParagraphs.length - 1 ? "pb-8" : ""}`}
                >
                  {para}
                </p>
              ))}
            </div>

            {sections.map((section, index) => (
              <div key={index}>
                <div className="mt-10 items-center h-[0.5px] rounded-full mb-10 bg-companyBlue"></div>

                <h2 className="text-3xl font-generalSansMedium text-companyBlue">
                  {section.heading}
                </h2>

                <div className="pt-6 text-lg text-left">
                  {section.isList ? (
                    <ul className="list-disc pl-6">
                      {section.content.map((item, idx) => (
                        <li key={idx} className={idx !== 0 ? "pt-2" : ""}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    section.content.map((para, idx) => (
                      <p key={idx} className={idx !== 0 ? "pt-4" : ""}>
                        {para}
                      </p>
                    ))
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
