import { ChevronDown } from "lucide-react";

export default function InterviewProcess() {
    const steps = [
        {
            title: "Screening",
            description:
                "This is the initial step where the HR team reviews all applications and resumes to filter out candidates who don’t meet the basic eligibility criteria like education, experience, or required skills.",
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
                "The final round involves a discussion with senior leadership or department heads to evaluate the candidate’s overall fit, long-term potential, and alignment with the company’s mission and values.",
            image: "/interview/step5.png",
        },
    ];

    return (
        <div className="p-8 pt-20 max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                Our Interview Process at{" "}
                <span className="font-generalSansMediumItalic text-companyBlue">
                    befikr
                </span>
            </h1>

            <div className="flex flex-col space-y-16">
                {steps.map((step, index) => (
                    <div key={step.title} className="space-y-8">
                        <div
                            className={`flex flex-col items-center gap-8 md:gap-16 md:items-start ${
                                index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                            }`}
                        >
                            <div className="flex-1">
                                <h2 className="text-3xl text-companyBlue font-semibold mb-2">
                                    {step.title}
                                </h2>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                            <div className="w-full md:w-96 p-6 bg-white border rounded-2xl shadow-lg">
                                <img
                                    src={step.image}
                                    alt={step.title}
                                    className="rounded-xl mx-auto w-60"
                                />
                            </div>
                        </div>

                        {index < steps.length - 1 && (
                            <div className="flex justify-center">
                                <ChevronDown className="h-10 w-10 text-companyBlue animate-bounce" />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
