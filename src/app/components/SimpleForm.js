"use client";

import { useState, useEffect } from "react";


export default function SimpleForm({onClose}) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    //const [status, setStatus] = useState("");

    // only three possible values - failed, ongoing, success
    const [submitStatus, setSubmitStatus] = useState("");
    const [serverMessage, setServerMessage] = useState("");
    const [countdown, setCountdown] = useState(4);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        //console.log("Form Submitted:", formData);

        setSubmitStatus("ongoing");

        const form = new FormData();

        form.append("name", formData.name);
        form.append("email", formData.email);
        //form.append("service", serviceTitle);
        form.append("message", formData.message);

        try {
            //const response = await fetch("https://befikr.in/serviceBooking.php", {
            const response = await fetch("http://localhost/Befikr/serviceBooking.php", {
                method: "POST",
                body: form,
            });

            const text = await response.text();
            let result = JSON.parse(text);

            setServerMessage(result.message);

            if (result.status === "success") {
                setSubmitStatus("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setSubmitStatus("failed");
            }
        } catch (error) {
            setSubmitStatus("failed");
            console.log(error);
            setServerMessage("Something went wrong while sending your message.");
        }
    };

    useEffect(() => {
        if (submitStatus === "success") {
            const interval = setInterval(() => {
                setCountdown((prev) => {
                    if (prev <= 1) {
                        clearInterval(interval);
                        setSubmitStatus("");
                        setCountdown(4);
                        if (onClose) onClose(); // optional
                    }
                    return prev - 1;
                });
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [submitStatus]);

    return (
        <div className="flex justify-center flex-auto">

            <div className="p-4 bg-gray-100 rounded-md shadow-md w-full ">
                <h2 className="text-xl font-semibold text-companyBlue mb-2">
                    Book a Meeting
                    {/* Book a Meeting for {serviceTitle} */}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                        <label className="block text-gray-700 text-sm font-medium mb-1">Your Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-2 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-companyBlue"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 text-sm font-medium mb-1">Your Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-2 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-companyBlue"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 text-sm font-medium mb-1">Your Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-2 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-companyBlue"
                            rows="3"
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        onClick={() => setSubmitStatus("ongoing")}
                        className="w-full bg-companyBlue text-white text-sm font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-300"
                    >
                        {submitStatus === "ongoing" ? (
                            <span className="flex items-center justify-center">
                                <svg className="animate-spin h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" />
                                    <path
                                        className="opacity-75"
                                        fill="white"
                                        d="M4 12a8 8 0 018-8v8H4z"
                                    />
                                </svg>
                                Submitting...
                            </span>
                        ) : (
                            "Apply Now"
                        )}
                    </button>
                </form>

                {serverMessage && submitStatus === "failed" && (
                    <p className="text-center mt-4 text-red-600">{serverMessage}</p>
                )}

                {submitStatus === "success" && (
                    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                        <div className="bg-white p-6 rounded-xl text-center w-80 shadow-xl animate-fadeIn">
                            <div className="mx-auto mb-4">
                                <svg className="text-green-500 w-12 h-12 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h2 className="text-lg font-semibold text-companyBlue">Query Recieved!</h2>
                            <p className="text-sm text-gray-700 mt-2">We’ve received your query.</p>
                            <p className="text-xs text-gray-500 mt-2">Closing in {countdown} second{countdown !== 1 && "s"}...</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
