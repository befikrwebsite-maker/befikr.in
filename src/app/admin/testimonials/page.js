'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import toast, { Toaster } from 'react-hot-toast';

const API_URL = 'https://befikr.in/testimonial_api.php';
const UPLOAD_URL = 'https://befikr.in/upload_testimonial_image.php';
const REMOVE_URL = 'https://befikr.in/remove_testimonial.php';

export default function TestimonialsAdmin() {
   // useEffect(() => {
  //   const token = localStorage.getItem("jwt");
  //   if (!token) return router.push("/admin/login");

  //   fetch("http://befikr.in/verify_token.php", {
  //     headers: { Authorization: `Bearer ${token}` },
  //   })
  //     .then(async (res) => {
  //       if (!res.ok) throw new Error();
  //       const data = await res.json();
  //       if (data.user.role !== "admin") throw new Error();
  //       setAuth(data.user);
  //     })
  //     .catch(() => router.push("/admin/login"));
  // }, []);

  // const handleCreate = async (e) => {
  //   e.preventDefault();
  //   const token = localStorage.getItem("jwt");
  //   await fetch("http://befikr.in/create_user.php", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${token}`,
  //     },
  //     body: JSON.stringify(form),
  //   });
  //   alert("User Created");
  // };
  const router = useRouter();

  const [testimonials, setTestimonials] = useState([]);
  const [form, setForm] = useState({ id: null, name: '', text: '', position: '', description: '', image: '' });
  const [imageFile, setImageFile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setTestimonials(data);
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleImageChange = (e) => setImageFile(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let imagePath = form.image;

    if (imageFile) {
      const formData = new FormData();
      formData.append('image', imageFile);
      const uploadRes = await fetch(UPLOAD_URL, { method: 'POST', body: formData });
      const uploadData = await uploadRes.json();

      if (!uploadData.success) {
        toast.error('Image upload failed: ' + uploadData.error);
        setLoading(false);
        return;
      }
      imagePath = `/home/u485173045/domains/befikr.in/public_html${uploadData.imagePath}`;
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
      toast.success(isEditing ? 'Updated successfully!' : 'Added successfully!');
      setForm({ id: null, name: '', text: '', position: '', description: '', image: '' });
      setImageFile(null);
      setIsEditing(false);
      setShowModal(false);
      fetchTestimonials();
    } else {
      toast.error(result.error || 'Something went wrong.');
    }
    setLoading(false);
  };

  const handleEdit = (item) => {
    setForm(item);
    setImageFile(null);
    setIsEditing(true);
    setShowModal(true);
  };

  const handleCancel = () => {
    setForm({ id: null, name: '', text: '', position: '', description: '', image: '' });
    setImageFile(null);
    setIsEditing(false);
    setShowModal(false);
  };

  const deleteTestimonial = (id) => {
    if (!confirm('Are you sure you want to delete this testimonial?')) return;
    fetch(REMOVE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success('Testimonial deleted successfully!');
          setTestimonials((prev) => prev.filter((t) => t.id !== id));
        } else {
          toast.error('Error: ' + data.error);
        }
      })
      .catch(() => toast.error('Failed to delete testimonial.'));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Toaster position="top-right" />
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Testimonials Admin</h1>
          <button onClick={() => router.back()} className="text-gray-500 hover:text-gray-700">❌</button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white rounded-lg shadow-md p-5 relative">
              <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover mb-2" />
              <h3 className="text-lg font-semibold">{t.name}</h3>
              <p className="text-sm text-gray-500">{t.position}</p>
              <p className="text-sm mt-2 text-gray-700">{t.description}</p>
              <div className="absolute top-2 right-2 flex gap-2">
                <button onClick={() => handleEdit(t)} className="text-blue-500 text-sm">Edit</button>
                <button onClick={() => deleteTestimonial(t.id)} className="text-red-500 text-sm">Delete</button>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700"
        >
          ➕
        </button>

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md space-y-4"
            >
              <h2 className="text-xl font-bold text-gray-800">
                {isEditing ? 'Edit Testimonial' : 'Add Testimonial'}
              </h2>
              <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Full Name" className="w-full border px-3 py-2 rounded-md" required />
              <input type="text" name="text" value={form.text} onChange={handleChange} placeholder="Short Text" className="w-full border px-3 py-2 rounded-md" required />
              <input type="text" name="position" value={form.position} onChange={handleChange} placeholder="Position" className="w-full border px-3 py-2 rounded-md" required />
              <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" className="w-full border px-3 py-2 rounded-md" rows={3} required />
              <input type="file" onChange={handleImageChange} className="w-full border px-3 py-2 rounded-md" accept="image/*" />
              {form.image && <p className="text-sm text-gray-500">Current: {form.image.split('/').pop()}</p>}
              <div className="flex justify-between pt-4">
                <button type="submit" disabled={loading} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  {loading ? 'Saving...' : isEditing ? 'Update' : 'Add'}
                </button>
                <button type="button" onClick={handleCancel} className="text-gray-600 hover:underline">Cancel</button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
