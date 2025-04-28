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
            .from(paraRef.current, {
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out",
            }, "-=0.6")
            .from(btnRef.current, {
                y: 20,
                opacity: 0,
                duration: 0.6,
                ease: "power2.out",
            }, "-=0.4")
            .from(imgRef.current, {
                scale: 0.8,
                opacity: 0,
                duration: 1,
                ease: "back.out(1.7)",
            }, "-=1");
    }, []);

    return (
        <div className="relative container h-screen pt-25 pl-20 px-6 py-12 grid lg:grid-cols-2 gap-12 items-center overflow-hidden">
            
            {/* Abstract BG Shapes */}
            <div className="absolute  w-[300px] h-[300px] bg-companyBlue opacity-10 rounded-full blur-3xl z-0"></div>

            {/* Image - mobile */}
            <div className="md:hidden mx-auto z-10" ref={imgRef}>
                <img
                    src="/undraw_job-hunt_5umi.svg"
                    alt="Team illustration"
                    className="max-w-sm max-h-2xl"
                />
            </div>

            {/* Text content */}
            <div className="z-10">
                <h1 ref={headingRef} className="text-5xl font-bold mb-4">
                    Join Our Team At <span className="font-generalSansMediumItalic text-companyBlue">befikr</span>
                </h1>
                <p ref={paraRef} className="text-gray-600 mb-8">
                    Work at one of the most successful <span className="font-bold">ESG</span> services company in India.
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

            {/* Image - desktop */}
            <div className="hidden md:block mx-auto z-10" ref={imgRef}>
                <img
                    src="/undraw_job-hunt_5umi.svg"
                    alt="Team illustration"
                    className="max-w-sm max-h-2xl"
                />
            </div>
        </div>
    );
}
