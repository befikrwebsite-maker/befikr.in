"use client";

import { useState, useEffect } from "react";


export default function SimpleForm({ serviceTitle, onClose }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        //console.log("Form Submitted:", formData);

        const form = new FormData();
        form.append("name", formData.name);
        form.append("email", formData.email);
        form.append("service", serviceTitle);
        form.append("message", formData.message);

        try {
            const response = await fetch("https://befikr.in/serviceBooking.php", {
              method: "POST",
              body: form,
            });
      
            const result = await response.json();
            setStatus(result.message);
      
            if (result.status === "success") {
              setFormData({ name: "", email: "", message: "" });
            }
          } catch (error) {
            //console.log(error);
            setStatus("Error sending email.");
          }


    };

    return (
        <div className="flex justify-center">

            <div className="mt-10 p-4 bg-gray-100 rounded-md shadow-md w-full ">
                <h2 className="text-xl font-semibold text-companyBlue mb-2">
                    Book a Meeting for {serviceTitle}
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
                        className="w-full bg-companyBlue text-white text-sm font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-300"
                    >
                        Submit
                    </button>
                </form>
                {/* {status && <p className="text-center mt-4 text-red-600">{status}</p>} */}
            </div>
        </div>
    );
};
