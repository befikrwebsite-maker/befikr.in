export default function SectionTwo() {
    const perks = [
        { title: "A dynamic workplace that balances professionalism with a friendly vibe" },
        { title: "A team that supports, uplifts, and grows together" },
        { title: "An environment where learning is continuous and rewarding" },
        { title: "Opportunities that help you evolve while making an impact" },
        { title: "A career that’s not just a job, but a journey of fulfillment" }
    ];


    const process = [
        { link: "", desc: "Screening" },
        { link: "", desc: "Shortlisting" },
        { link: "", desc: "HR Round" },
        { link: "", desc: "Technical Round" },
        { link: "", desc: "Final Interview" }
    ]
    return (
        <div className="container mx-auto px-6 py-12 grid lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl items-center">
            <h1 className="sm:hidden text-5xl font-bold mb-4">
                Perks of Being in <span className="font-generalSansMediumItalic text-companyBlue">befikr</span>
            </h1>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
                {perks.map((perk, index) => (
                    <div className="border-2 max-w-full border-companyBlue rounded-xl  h-48"
                        key={index}
                    >
                        <div className="p-5">
                            <h1 className="text-2xl font-bold">{perk.title}</h1>
                        </div>
                    </div>
                ))}
            </div>

            <div className="hidden md:block">
                <h1 className="text-5xl font-bold mb-4">
                    Perks of Being in <span className="font-generalSansMediumItalic text-companyBlue">befikr</span>
                </h1>
            </div>

            {/* <div>
                <h1>
                    Our Interview Process at <span className="font-generalSansMediumItalic text-companyBlue">befikr</span>
                </h1>
                <div className="w-full flex">
                    {process.map((steps, index) => (
                        <div key={index}>
                            <img
                                src={steps.link}
                                width={500}
                            />
                            <div>
                                {steps.desc}
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}
        </div>
    );
}
