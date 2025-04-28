export default function SectionFour() {
    return (
        <>
            {/* Section 4: Explore Job Openings */}
            <div className="mt-24 text-center bg-[#fff44f] py-16 px-6 shadow-inner" >
                <h2 className=" md:text-6xl font-bold text-black mb-16 text-3xl">
                    Ready to join our team?
                </h2>
                <p className="text-xl text-gray-700 mb-8 max-w-xl mx-auto">
                    Discover exciting opportunities and take the next step in your career at <span className="font-generalSansMediumItalic">befikr</span>. We're always looking for passionate individuals to grow with us.
                </p>
                <a
                    href="/careers/jobs"
                    className="inline-block bg-companyBlue hover:bg-companyBlue/90 transition text-white font-semibold py-3 px-8 rounded-full text-lg shadow-md"
                >
                    View Job Openings
                </a>
            </div >
        </>

    )
}
