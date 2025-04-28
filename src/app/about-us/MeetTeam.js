import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function MeetTeam() {

    const containerRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 90%",
                toggleActions: "play none none none",
            },
        });

        // First animation: container grows
        tl.from(containerRef.current, {
            height: 0,
            duration: 1,
            ease: "power2.out",
        });

        // Second animation: text fades and moves in
        tl.from(textRef.current, {
            opacity: 0,
            y: 20,
            duration: 0.8,
            ease: "power2.out",
        }, "-=0.3"); // slight overlap if you want

    }, []);



    return (
        <div
            className="max-w-2xl h-fit text-center bg-companyBlue p-4 shadow-lg overflow-hidden"
            ref={containerRef}
        >
            <div ref={textRef}>
                <h2 className="mt-4 text-white text-2xl font-bold text-center mb-3 relative group inline-block w-fit">
                    Meet the Minds Powering Our Success
                    <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                </h2>

                <p className="text-center text-base leading-relaxed text-black">
                    These are the people who make it all happen. Skilled, driven, and dedicated — our team is the foundation of everything we do and the reason we continue to innovate, inspire, and lead.
                </p>
            </div>
        </div>
    );

}