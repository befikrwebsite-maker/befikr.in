export default function InterviewProcess() {
    return (
        <div className="p-8">
            <h1 className="text-5xl font-bold mb-4">
                Our Interview Process at <span className="font-generalSansMediumItalic text-companyBlue">befikr</span>
            </h1>
            <div className="flex flex-col space-y-10">
                {/* Step 1: Screening */}
                <div className="flex flex-col md:flex-row gap-4 items-center">
                    <div className="flex-1">
                        <h1 className="text-2xl text-companyBlue font-bold">Screening</h1>
                        <p>
                            This is the initial step where the HR team reviews all applications and resumes to filter out candidates who don’t meet the basic eligibility criteria like education, experience, or required skills.
                        </p>
                    </div>
                    <div className="w-96 p-4 border rounded-xl shadow-md bg-white ">
                        <img className="w-60 mx-auto" src="/interview/step1.png" alt="Screening" />
                    </div>
                </div>

                {/* Step 2: Shortlisting */}
                <div className="flex flex-col md:flex-row-reverse gap-4 items-center">
                    <div className="flex-1">
                        <h1 className="text-2xl text-companyBlue font-bold">Shortlisting</h1>
                        <p>
                            From the screened applications, a select group of candidates is shortlisted based on how closely their profiles match the job requirements.
                        </p>
                    </div>
                    <div className="w-96 p-4 border rounded-xl shadow-md bg-white">
                        <img className="w-60 mx-auto" src="/interview/step2.png" alt="Shortlisting" />
                    </div>
                </div>

                {/* Step 3: HR Round */}
                <div className="flex flex-col md:flex-row gap-4 items-center">
                    <div className="flex-1">
                        <h1 className="text-2xl text-companyBlue font-bold">HR Round</h1>
                        <p>
                            The HR team interacts with the candidate to assess personality, communication skills, salary expectations, availability, and cultural fit within the organization.
                        </p>
                    </div>
                    <div className="w-96 p-4 border rounded-xl shadow-md bg-white">
                        <img className="w-60 mx-auto" src="/interview/step3.png" alt="HR Round" />
                    </div>
                </div>

                {/* Step 4: Technical Round */}
                <div className="flex flex-col md:flex-row-reverse gap-4 items-center">
                    <div className="flex-1">
                        <h1 className="text-2xl text-companyBlue font-bold">Technical Round</h1>
                        <p>
                            Candidates undergo a technical evaluation where their knowledge, skills, and problem-solving abilities are tested through interviews, assessments, or case studies.
                        </p>
                    </div>
                    <div className="w-96 p-4 border rounded-xl shadow-md bg-white">
                        <img className="w-60 mx-auto" src="/interview/step4.png" alt="Technical Round" />
                    </div>
                </div>

                {/* Step 5: Final Interview */}
                <div className="flex flex-col md:flex-row gap-4 items-center">
                    <div className="flex-1">
                        <h1 className="text-2xl text-companyBlue font-bold">Final Interview</h1>
                        <p>
                            The final round involves a discussion with senior leadership or department heads to evaluate the candidate’s overall fit, long-term potential, and alignment with the company’s mission and values.
                        </p>
                    </div>
                    <div className="w-96 p-4 border rounded-xl shadow-md bg-white">
                        <img className="w-60 mx-auto" src="/interview/step5.png" alt="Final Interview" />
                    </div>
                </div>
            </div>
        </div>
    )
}
