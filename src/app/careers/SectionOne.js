import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Button from "@/components/ui/Button";

export default function SectionOne() {
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const btnRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    tl.from(headingRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    })
      .from(
        paraRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.6"
      )
      .from(
        btnRef.current,
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.4"
      )
      .from(
        imgRef.current,
        {
          scale: 0.8,
          opacity: 0,
          duration: 1,
          ease: "back.out(1.7)",
        },
        "-=1"
      );
  }, []);

  return (
    <div className="relative container mx-auto h-auto min-h-screen px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center overflow-hidden">
      {/* Abstract BG Shape */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-companyBlue opacity-10 rounded-full blur-3xl z-0" />

      {/* Text content */}
      <div className="z-10 flex flex-col items-start text-center md:text-left">
        <h1 ref={headingRef} className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Join Our Team At{" "}
          <span className="font-generalSansMediumItalic text-companyBlue">befikr</span>
        </h1>
        <p ref={paraRef} className="text-gray-600 mb-8 text-base md:text-lg">
          Work at one of the most successful <span className="font-bold">ESG</span> services companies in India.
        </p>
        <div ref={btnRef}>
          <Button
            link="/careers/jobs"
            className="bg-companyBlue hover:bg-companyBlue hover:shadow-xl transition-all duration-300"
          >
            View Openings
          </Button>
        </div>
      </div>

      {/* Single Image block for both mobile and desktop */}
      <div className="z-10 flex justify-center">
        <img
          ref={imgRef}
          src="/undraw_job-hunt_5umi.svg"
          alt="Team illustration"
          className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto"
        />
      </div>
    </div>
  );
}
