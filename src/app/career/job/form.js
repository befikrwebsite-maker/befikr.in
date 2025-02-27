"use client";

import { useEffect, useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("message", formData.message);

    try {
      const response = await fetch("http://localhost/Befikr/mailConfig.php", {
        method: "POST",
        body: form,
      });

      const result = await response.json();
      setStatus(result.message);

      if (result.status === "success") {
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      setStatus("Error sending message.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded">
      <h2 className="text-lg font-bold">Contact Form</h2>
      {status && <p className="text-sm">{status}</p>}
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="border p-2 w-full"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="border p-2 w-full"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="border p-2 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 w-full">
          Send Message
        </button>
      </form>
    </div>
  );
}