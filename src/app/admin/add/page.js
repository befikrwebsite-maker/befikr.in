'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";

const CreateJobForm = () => {
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

  const [form, setForm] = useState({
    position: '',
    team: '',
    location: [],
    description: '',
    tags: [],
    pay: '',
    job_type: '',
    responsibilities: [],
    skills: [],
    benefits: [],
    schedule: [],
    supplemental_pay: [],
    questions: [],
    experience: [],
    travel: [],
    work_location: '',
    expected_start_date: '',
    status: 'active'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (['location', 'tags', 'responsibilities', 'skills', 'benefits', 'schedule', 'supplemental_pay', 'questions', 'experience', 'travel'].includes(name)) {
      setForm({ ...form, [name]: value.split(',').map(v => v.trim()) });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://befikr.in/create_job.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      const data = await res.json();
      if (data.success) {
        alert('✅ Job posted successfully!');
        setForm((prev) => Object.fromEntries(Object.entries(prev).map(([k, v]) => [k, Array.isArray(v) ? [] : ''])));
      } else {
        alert('❌ Failed: ' + data.error);
      }
    } catch (err) {
      alert('❌ Network error.');
    }
  };

  const sectionHeaders = {
    Basic: ['position', 'team', 'location', 'description', 'job_type'],
    Compensation: ['pay', 'benefits', 'supplemental_pay'],
    Requirements: ['skills', 'experience', 'travel', 'schedule'],
    Additional: ['responsibilities', 'questions', 'work_location', 'expected_start_date', 'tags'],
  };

  const formFields = [
    ['Position', 'position'],
    ['Team', 'team'],
    ['Location (comma separated)', 'location'],
    ['Description', 'description'],
    ['Tags (comma separated)', 'tags'],
    ['Pay (monthly/yearly)', 'pay'],
    ['Job Type (e.g., Full-time, Part-time)', 'job_type'],
    ['Responsibilities (comma separated)', 'responsibilities'],
    ['Skills (comma separated)', 'skills'],
    ['Benefits (comma separated)', 'benefits'],
    ['Schedule (comma separated)', 'schedule'],
    ['Supplemental Pay (comma separated)', 'supplemental_pay'],
    ['Questions (comma separated)', 'questions'],
    ['Experience (comma separated)', 'experience'],
    ['Travel (comma separated)', 'travel'],
    ['Work Location', 'work_location'],
    ['Expected Start Date', 'expected_start_date'],
  ];

  const requiredFields = ['position', 'team', 'location', 'description', 'job_type'];

  const closePage = () => {
    window.history.back();
  }

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div className="flex justify-between">
        <h2 style={styles.heading}>📝 Create a Job Posting</h2>
        <button
          onClick={() => { closePage() }}
          type="button"
          className="text-gray-500 mb-8 rounded-full hover:text-gray-700 hover:bg-gray-100 p-2 transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-companyBlue"
          aria-label="Close Section"
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


      {Object.entries(sectionHeaders).map(([sectionTitle, sectionFields]) => (
        <div key={sectionTitle} style={styles.section}>
          <h3 style={styles.sectionHeading}>{sectionTitle}</h3>
          {formFields
            .filter(([, name]) => sectionFields.includes(name))
            .map(([label, name]) => (
              <div key={name} style={styles.fieldGroup}>
                <label htmlFor={name} style={styles.label}>{label}</label>
                {name === 'description' ? (
                  <textarea
                    id={name}
                    name={name}
                    placeholder="Enter job description here..."
                    value={form[name]}
                    onChange={handleChange}
                    required={requiredFields.includes(name)}
                    style={styles.textarea}
                  />
                ) : (
                  <input
                    id={name}
                    name={name}
                    type={name === 'expected_start_date' ? 'date' : 'text'}
                    placeholder={
                      label.includes('comma') ? 'e.g. Item 1, Item 2, Item 3' : ''
                    }
                    value={Array.isArray(form[name]) ? form[name].join(', ') : form[name]}
                    onChange={handleChange}
                    required={requiredFields.includes(name)}
                    style={styles.input}
                  />
                )}
              </div>
            ))}
        </div>
      ))}

      <button type="submit" style={styles.button}>➕ Post Job</button>
    </form>
  );

};

const styles = {
  form: {
    maxWidth: '750px',
    margin: '40px auto',
    padding: '35px',
    borderRadius: '16px',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
    backgroundColor: '#ffffff',
    fontFamily: 'Segoe UI, sans-serif',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '32px',
    fontSize: '28px',
    color: '#222',
  },
  section: {
    marginBottom: '30px',
    paddingBottom: '10px',
    borderBottom: '1px solid #eee',
  },
  sectionHeading: {
    fontSize: '20px',
    marginBottom: '18px',
    color: '#04B2D9',
    borderLeft: '4px solid #04B2D9',
    paddingLeft: '10px',
  },
  fieldGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '6px',
    fontWeight: '600',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '10px 12px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.2s',
  },
  textarea: {
    width: '100%',
    padding: '12px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    fontSize: '14px',
    resize: 'vertical',
    minHeight: '100px',
    outline: 'none',
    transition: 'border-color 0.2s',
  },
  button: {
    marginTop: '28px',
    width: '100%',
    padding: '14px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: '#04B2D9',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  }
};

export default CreateJobForm;
