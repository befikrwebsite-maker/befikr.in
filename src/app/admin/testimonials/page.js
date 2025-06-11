'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const API_URL = 'https://befikr.in/testimonial_api.php';
const UPLOAD_URL = 'https://befikr.in/upload_testimonial_image.php';
const REMOVE_URL = 'https://befikr.in/remove_testimonial.php';

export default function TestimonialsAdmin() {

  const router = useRouter();
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!token) return router.push("/admin/login");

    fetch("http://befikr.in/verify_token.php", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(async (res) => {
        if (!res.ok) throw new Error();
        const data = await res.json();
        if (data.user.role !== "admin") throw new Error();
        setAuth(data.user);
      })
      .catch(() => router.push("/admin/login"));
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("jwt");
    await fetch("http://befikr.in/create_user.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(form),
    });
    alert("User Created");
  };

  if (!auth) return <div>Loading...</div>;

  const [testimonials, setTestimonials] = useState([]);
  const [form, setForm] = useState({
    id: null,
    name: '',
    text: '',
    position: '',
    description: '',
    image: ''
  });
  const [imageFile, setImageFile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const fetchTestimonials = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setTestimonials(data);
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const deleteTestimonial = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this testimonial?");
    if (!confirmed) return;
    fetch(REMOVE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("Testimonial deleted successfully!");
          setTestimonials((prev) => prev.filter((testimonial) => testimonial.id !== id));
        } else {
          toast.error("Error: " + data.error);
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to delete testimonial. Please try again.");
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let imagePath = form.image;

    if (imageFile) {
      const formData = new FormData();
      formData.append('image', imageFile);

      const uploadRes = await fetch(UPLOAD_URL, {
        method: 'POST',
        body: formData
      });

      const uploadData = await uploadRes.json();
      if (uploadData.success) {
        imagePath = `/home/u485173045/domains/befikr.in/public_html${uploadData.imagePath}`;
      } else {
        alert('Image upload failed: ' + uploadData.error);
        return;
      }
    }

    const payload = { ...form, image: imagePath };
    const method = isEditing ? 'PUT' : 'POST';

    const res = await fetch(API_URL, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const result = await res.json();

    if (result.success) {
      alert(isEditing ? 'Updated successfully!' : 'Added successfully!');
      setForm({
        id: null,
        name: '',
        text: '',
        position: '',
        description: '',
        image: ''
      });
      setImageFile(null);
      setIsEditing(false);
      fetchTestimonials();
    } else {
      alert(result.error || 'Something went wrong.');
    }
  };

  const handleEdit = (item) => {
    scrollTo(0, 0);
    setForm(item);
    setImageFile(null);
    setIsEditing(true);
  };

  const handleCancel = () => {
    setForm({
      id: null,
      name: '',
      text: '',
      position: '',
      description: '',
      image: ''
    });
    setImageFile(null);
    setIsEditing(false);
  };

  const closePage = () => {
    window.history.back();
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Testimonials Admin Panel</h1>
        <button
          onClick={() => { closePage() }}
          type="button"
          className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 p-2 mb-8 rounded-full transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-companyBlue"
          aria-label="Close Filters"
        >
          <svg
            aria-hidden="true"
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>


      <form onSubmit={handleSubmit} className="space-y-5 border border-gray-200 p-6 rounded-xl shadow-md bg-white">
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter full name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">Short Text</label>
          <input
            name="text"
            value={form.text}
            onChange={handleChange}
            placeholder="Short one-liner or title"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">Position</label>
          <input
            name="position"
            value={form.position}
            onChange={handleChange}
            placeholder="e.g., Marketing Manager"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Full testimonial here..."
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">Upload Image</label>
          <input
            type="file"
            onChange={handleImageChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            accept="image/*"
          />
          {form.image && (
            <div className="text-sm text-gray-600 mt-1">
              Current Image: <span className="font-medium">{form.image.split('/').pop()}</span>
            </div>
          )}
        </div>

        <div className="flex gap-4 pt-2">
          <button
            type="submit"
            className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
          >
            {isEditing ? 'Update Testimonial' : 'Add Testimonial'}
          </button>
          {isEditing && (
            <button
              type="button"
              onClick={handleCancel}
              className="bg-gray-300 text-gray-800 px-5 py-2 rounded-md hover:bg-gray-400 transition"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      <h2 className="text-2xl font-semibold mt-12 mb-6 text-gray-800">📋 Existing Testimonials</h2>
      <div className="grid gap-6">
        {testimonials.map((t) => (
          <div key={t.id} className="p-5 border border-gray-200 rounded-xl shadow-sm bg-white">
            <h3 className="text-lg font-bold text-gray-800">{t.name}</h3>
            <p className="text-sm italic text-gray-600">{t.position}</p>
            <p className="text-gray-700 mt-2">{t.description}</p>
            <button
              onClick={() => handleEdit(t)}
              className="mt-3 text-blue-600 hover:underline text-sm font-medium"
            >
              ✏️ Edit
            </button>
            <button
              onClick={() => deleteTestimonial(t.id)}
              className="mt-3 text-blue-600 hover:underline text-sm font-medium"
            >
              🗑️ Delete
            </button>
          </div>
        ))}
      </div>
    </div>

  );
}
