"use client";

import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function Form() {
    const [userInput, setUserInput] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [userResume, setUserResume] = useState("");



    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInput({ ...userInput, [name]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

        try {
            const emailParams = {
                name: userInput.name,
                email: userInput.email,
                message: userInput.message
            };

            const res = await emailjs.send(serviceID, templateID, emailParams, userID);

            if (res.status === 200) {
                console.log("Message sent successfully!");
                setUserInput({
                    name: "",
                    email: "",
                    message: ""
                });
            }
        } catch (error) {
            console.log("Failed to send message. Please try again later.");
        }
    }

    return (
        <div className="flex-auto">
            <div className="flex w-50 justify-center">
                <form onSubmit={handleSubmit} className=" text-gray-900 border-2 rounded-xl">
                    <div>
                        <label className="text-gray-900">Your Name:</label>
                        <input
                            type="text"
                            name="name"
                            className="text-gray-900 border-2"
                            value={userInput.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label className="text-gray-900">Your Email:</label>
                        <input
                            type="email"
                            name="email"
                            className="text-gray-900 boreder-2"
                            value={userInput.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label className="text-gray-900">Your Message:</label>
                        <textarea
                            name="message"
                            className="text-gray-900 border-2"
                            value={userInput.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div >
                        <label className="text-gray-900">Resume:</label>
                        <input
                            type="file"
                            name="resume"
                            className="text-gray-900"
                            onChange=
                            {
                                (e) => {
                                    console.log(e.target.files[0]);
                                    setUserResume([...userResume, e.target.files[0]]);
                                }
                            }
                            required
                        />
                    </div>
                    <button className="text-gray-900 border-2" type="submit">Send Message</button>
                </form>
            </div>

        </div>

    );
}