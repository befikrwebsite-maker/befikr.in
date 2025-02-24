"use client";

import { useEffect, useState } from "react";

export default function Form() {
    const [userInput, setUserInput] = useState({
        team: "",
        email: "",
        message: "",
        resume: null
    });

    useEffect(() =>{
     console.log(userInput.resume);
    }, [userInput.resume])


    return (
        <div className="flex-auto">
            <div className="flex w-50 justify-center">
                <form className=" text-gray-900 border-2 rounded-xl">
                    <div>
                        <label className="text-gray-900">Your Name:</label>
                        <input
                            type="text"
                            name="team"
                            className="text-gray-900 border-2"
                            value={userInput.name}
                            onChange={(e) => setUserInput({ ...userInput, team: e.target.value })}
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
                            onChange={(e) => setUserInput({ ...userInput, email: e.target.value })}
                            required
                        />
                    </div>
                    <div>
                        <label className="text-gray-900">Your Message:</label>
                        <textarea
                            name="message"
                            className="text-gray-900 border-2"
                            value={userInput.message}
                            onChange={(e) => setUserInput({ ...userInput, message: e.target.value })}
                            required
                        />
                    </div>
                    <div >
                        <label className="text-gray-900">Resume:</label>
                        <input
                            type="file"
                            accept=".pdf"
                            name="resume"
                            className="text-gray-900"
                            onChange=
                            {
                                (e) => {
                                    console.log(e.target.files[0]);
                                    setUserInput({ ...userInput, resume: e.target.files[0] });
                                    console.log(userInput.email);
                                    console.log(userInput.team);
                                    console.log(userInput.message);
                                    console.log(userInput.resume);
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