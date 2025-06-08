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
      <h1 className="text-2xl font-bold mb-6">Testimonials Admin</h1>

      <form onSubmit={handleSubmit} className="space-y-4 border p-6 rounded shadow">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="w-full p-2 border rounded" required />
        <input name="text" value={form.text} onChange={handleChange} placeholder="Short Text" className="w-full p-2 border rounded" required />
        <input name="position" value={form.position} onChange={handleChange} placeholder="Position" className="w-full p-2 border rounded" required />
        <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" className="w-full p-2 border rounded" required />
        
        <input type="file" onChange={handleImageChange} className="w-full p-2 border rounded" accept="image/*" />
        {form.image && (
          <div className="text-sm text-gray-600">Current Image: {form.image.split('/').pop()}</div>
        )}

        <div className="flex gap-4">
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            {isEditing ? 'Update Testimonial' : 'Add Testimonial'}
          </button>
          {isEditing && (
            <button type="button" onClick={handleCancel} className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">
              Cancel
            </button>
          )}
        </div>
      </form>

      <h2 className="text-xl font-semibold mt-10 mb-4">Existing Testimonials</h2>
      <div className="space-y-4">
        {testimonials.map((t) => (
          <div key={t.id} className="border p-4 rounded shadow-sm">
            <h3 className="font-bold">{t.name}</h3>
            <p className="text-sm italic">{t.position}</p>
            <p className="text-sm">{t.description}</p>
            <button onClick={() => handleEdit(t)} className="mt-2 text-blue-600 hover:underline">
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
