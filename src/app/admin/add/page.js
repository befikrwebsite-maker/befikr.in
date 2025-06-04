'use client';

import React, { useState } from 'react';

const CreateJobForm = () => {
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

  const formFields = [
    ['Position', 'position'],
    ['Team', 'team'],
    ['Location (comma separated)', 'location'],
    ['Description', 'description'],
    ['Tags (comma separated)', 'tags'],
    ['Pay', 'pay'],
    ['Job Type', 'job_type'],
    ['Responsibilities (comma separated)', 'responsibilities'],
    ['Skills (comma separated)', 'skills'],
    ['Benefits (comma separated)', 'benefits'],
    ['Schedule (comma separated)', 'schedule'],
    ['Supplemental Pay (comma separated)', 'supplemental_pay'],
    ['Questions (comma separated)', 'questions'],
    ['Experience (comma separated)', 'experience'],
    ['Travel (comma separated)', 'travel'],
    ['Work Location', 'work_location'],
    ['Expected Start Date (dd/mm/yyyy)', 'expected_start_date']
  ];

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2 style={styles.heading}>📝 Create Job Posting</h2>

      {formFields.map(([label, name]) => (
        <div key={name} style={styles.fieldGroup}>
          <label style={styles.label}>{label}</label>
          {name === 'description' ? (
            <textarea
              name={name}
              value={form[name]}
              onChange={handleChange}
              required={['position', 'team', 'location', 'description', 'job_type'].includes(name)}
              style={styles.textarea}
              rows={4}
            />
          ) : (
            <input
              name={name}
              value={Array.isArray(form[name]) ? form[name].join(', ') : form[name]}
              onChange={handleChange}
              required={['position', 'team', 'location', 'description', 'job_type'].includes(name)}
              style={styles.input}
            />
          )}
        </div>
      ))}

      <button type="submit" style={styles.button}>➕ Post Job</button>
    </form>
  );
};

const styles = {
  form: {
    maxWidth: '700px',
    margin: '40px auto',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 0 15px rgba(0,0,0,0.08)',
    backgroundColor: '#fefefe',
    fontFamily: 'Arial, sans-serif'
  },
  heading: {
    textAlign: 'center',
    marginBottom: '24px',
    fontSize: '24px',
    color: '#333'
  },
  fieldGroup: {
    marginBottom: '18px'
  },
  label: {
    display: 'block',
    marginBottom: '6px',
    fontWeight: 'bold',
    color: '#444'
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    fontSize: '14px'
  },
  textarea: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    fontSize: '14px',
    resize: 'vertical'
  },
  button: {
    marginTop: '24px',
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: '#04B2D9',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease-in-out'
  }
};

export default CreateJobForm;
