import Button from "@/components/ui/Button";

export default function SectionOne() {
    return (
        <div className="container h-screen mx-auto px-6 py-12 grid lg:grid-cols-2 gap-12 items-center">
            <div className=" md:hidden mx-auto">
                <img
                    src="/undraw_job-hunt_5umi.svg"
                    alt="Team illustration"
                    className="max-w-sm max-h-2xl"
                />
            </div>
            <div>
                <h1 className="text-5xl font-bold mb-4">
                    Join Our Team At <span className="font-generalSansMediumItalic text-companyBlue">befikr</span>
                </h1>
                <p className="text-gray-600 mb-8">Work at one of the most successful agency in India</p>
                <Button link="/work-with-us/job" className="bg-companyBlue hover:bg-companyBlue hover:border-orange-600 hover:border-2 transition-all delay-100" >View Openings</Button>
            </div>
            <div className="hidden md:block mx-auto">
                <img
                    src="/undraw_job-hunt_5umi.svg"
                    alt="Team illustration"
                    className="max-w-sm max-h-2xl"
                />
            </div>
        </div>
    );
}
