'use client';

import { useState, useEffect } from 'react';

const API_URL = 'https://befikr.in/testimonial_api.php';
const UPLOAD_URL = 'https://befikr.in/upload_testimonial_image.php';

export default function TestimonialsAdmin() {
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

  return (
    <div className="p-8 max-w-4xl mx-auto">
  <h1 className="text-3xl font-bold mb-8 text-gray-800">Testimonials Admin Panel</h1>

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
      </div>
    ))}
  </div>
</div>

  );
}
