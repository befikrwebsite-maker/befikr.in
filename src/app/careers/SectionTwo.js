import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function SectionTwo() {

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


        tl.from(containerRef.current, {
            height: 0,
            duration: 1,
            ease: "power2.out",
        });


        tl.from(textRef.current, {
            opacity: 0,
            y: 20,
            duration: 0.8,
            ease: "power2.out",
        }, "-=0.3");

    }, []);

    const perks = [
        { title: "A dynamic workplace that balances professionalism with a friendly vibe" },
        { title: "A team that supports, uplifts, and grows together" },
        { title: "An environment where learning is continuous and rewarding" },
        { title: "Opportunities that help you evolve while making an impact" },
        { title: "A career that’s not just a job, but a journey of fulfillment" }
    ];

    return (
        <div className="container mx-auto px-6 py-12 grid lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl items-center">
            <h1 className="sm:hidden text-5xl font-bold mb-4">
                Perks of Being in <span className="font-generalSansMediumItalic text-companyBlue">befikr</span>
            </h1>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
                {perks.map((perk, index) => (
                    <div ref={textRef} className="border-2 bg-companyBlue max-w-full border-black rounded-xl h-48"
                        key={index}
                    >
                        <div className="p-5">
                            <h1 className="text-2xl text-white font-bold">{perk.title}</h1>
                        </div>
                    </div>
                ))}
            </div>

            <div className="hidden md:block">
                <h1 className="text-5xl font-bold mb-4">
                    Perks of Being in <span className="font-generalSansMediumItalic text-companyBlue">befikr</span>
                </h1>
            </div>


        </div>
    );
}
