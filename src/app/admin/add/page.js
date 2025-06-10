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

return (
  <form onSubmit={handleSubmit} style={styles.form}>
    <h2 style={styles.heading}>📝 Create a Job Posting</h2>

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
