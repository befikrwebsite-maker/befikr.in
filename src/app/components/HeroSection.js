import { ChevronRight } from "lucide-react"
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function Hero() {
    const textRef = useRef(null);

    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
  
      gsap.from(textRef.current, {
        opacity: 0,
        x: -50,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%", 
        },
      });
    }, []);
    return (
        <section
            className="relative h-screen flex items-end bg-cover bg-center bg-no-repeat rounded-b-[4rem]"
        >
            <video
                className="absolute top-0 left-0 w-full h-full object-cover rounded-b-[4rem]"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="/videos/1536350-uhd_3840_2160_30fps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black opacity-60 rounded-b-[4rem]"></div>
            <div ref={textRef}
            className="relative z-10 text-white px-6 pb-14 md:w-full rounded-b-[4rem]">
                <h1 className="text-5xl md:text-7xl font-generalSansMedium leading-tight transition-all delay-175 text-white p-2 inline-block">
                    <span className="inline-block">
                        Excellence is
                    </span>
                    <span className="block">
                        The Only <span className="inline-block font-generalSansMediumItalic"> Standard </span>
                    </span>
                    at befikr.
                </h1>

                <p className="inlin-block p-3 font-generalSansLight text-xl md:text-2xl mb-8 max-w-3xl">
                    An <span className="font-generalSansMedium">ESG</span> Services Company
                </p>
                {/* <a
                    href="/contact-us"
                    className="inline-flex items-center px-8 py-4 mb-24 text-lg font-semibold text-black bg-white rounded-full delay-175 hover:bg-companyBlue hover:text-white transition-colors"
                >
                    Get Started
                    <ChevronRight className="ml-2 h-6 w-6" />
                </a> */}
            </div>
        </section>
    );
}

