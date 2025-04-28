import { ChevronDown } from "lucide-react";

export default function InterviewProcess() {
    const steps = [
        {
            title: "Screening",
            description:
                "This is the initial step where the HR team reviews all applications and resumes to filter out candidates who don't meet the basic eligibility criteria like education, experience, or required skills.",
            image: "/interview/step1.png",
        },
        {
            title: "Shortlisting",
            description:
                "From the screened applications, a select group of candidates is shortlisted based on how closely their profiles match the job requirements.",
            image: "/interview/step2.png",
        },
        {
            title: "HR Round",
            description:
                "The HR team interacts with the candidate to assess personality, communication skills, salary expectations, availability, and cultural fit within the organization.",
            image: "/interview/step3.png",
        },
        {
            title: "Technical Round",
            description:
                "Candidates undergo a technical evaluation where their knowledge, skills, and problem-solving abilities are tested through interviews, assessments, or case studies.",
            image: "/interview/step4.png",
        },
        {
            title: "Final Interview",
            description:
                "The final round involves a discussion with senior leadership or department heads to evaluate the candidate's overall fit, long-term potential, and alignment with the company's mission and values.",
            image: "/interview/step5.png",
        },
    ];

    return (
        <div className="p-6 py-16 md:p-12 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-companyBlue to-blue-400 bg-clip-text text-transparent">
                    Our Interview Process
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    At <span className="font-semibold text-companyBlue">befikr</span>, we follow a transparent and structured hiring process to ensure we find the best talent
                </p>
            </div>

            <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 to-transparent hidden md:block"></div>
                
                <div className="space-y-24 md:space-y-32">
                    {steps.map((step, index) => (
                        <div key={step.title} className="relative">
                            <div className={`flex flex-col items-center gap-8 md:gap-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                                {/* Content */}
                                <div className={`flex-1 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                                        <div className="flex items-center mb-3">
                                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-companyBlue font-bold mr-4">
                                                {index + 1}
                                            </div>
                                            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
                                                {step.title}
                                            </h2>
                                        </div>
                                        <p className="text-gray-600 leading-relaxed pl-14">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                                
                                {/* Image */}
                                <div className={`w-full md:w-96 flex-shrink-0 transition-all duration-300 hover:scale-105 ${index % 2 === 0 ? "md:translate-x-4" : "md:-translate-x-4"}`}>
                                    <div className="bg-white p-4 rounded-2xl shadow-md border border-gray-100">
                                        <img
                                            src={step.image}
                                            alt={step.title}
                                            className="rounded-lg w-full h-auto object-cover"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Connector */}
                            {index < steps.length - 1 && (
                                <div className="flex justify-center mt-8 md:mt-12">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 border-2 border-blue-100 animate-bounce">
                                        <ChevronDown className="h-6 w-6 text-blue-500" />
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}