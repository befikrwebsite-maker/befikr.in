import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import './JobFormModal.css';

export default function JobFormModal({ isOpen, onClose, editingJob, onSaved }) {
  const [form, setForm] = useState({});

  useEffect(() => {
    if (editingJob) {
      setForm({
        ...editingJob,
        location: parseArray(editingJob.location),
        tags: parseArray(editingJob.tags),
        responsibilities: parseArray(editingJob.responsibilities),
        skills: parseArray(editingJob.skills),
        benefits: parseArray(editingJob.benefits),
        schedule: parseArray(editingJob.schedule),
        supplemental_pay: parseArray(editingJob.supplemental_pay),
        questions: parseArray(editingJob.questions),
        experience: parseArray(editingJob.experience),
        travel: parseArray(editingJob.travel),
      });
    } else {
      setForm({});
    }
  }, [editingJob]);

  const parseArray = (input) => {
    if (!input) return [];
    try {
      return Array.isArray(input) ? input : JSON.parse(input);
    } catch {
      return input.split(',').map((s) => s.trim());
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (Array.isArray(form[name])) {
      setForm({ ...form, [name]: value.split(',').map((s) => s.trim()) });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const confirmed = window.confirm('Are you sure you want to save this job posting?');
    if (!confirmed) return;

    const endpoint = editingJob ? 'update_job.php' : 'create_job.php';

    const response = await fetch(`http://befikr.in/${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const result = await response.json();

    if (result.success) {
      toast.success(editingJob ? 'Job updated!' : 'Job created!');
      onSaved(); // Refresh list
      onClose(); // Close modal
    } else {
      toast.error('Error: ' + result.error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-box">
        <h2>{editingJob ? 'Edit Job' : 'Create New Job'}</h2>
        <form onSubmit={handleSubmit}>
          {[
            ['Position', 'position'],
            ['Team', 'team'],
            ['Location (comma separated)', 'location'],
            ['Description', 'description'],
            ['Tags (comma separated)', 'tags'],
            ['Pay', 'pay'],
            ['Job Type', 'job_type'],
            ['Responsibilities', 'responsibilities'],
            ['Skills', 'skills'],
            ['Benefits', 'benefits'],
            ['Schedule', 'schedule'],
            ['Supplemental Pay', 'supplemental_pay'],
            ['Questions', 'questions'],
            ['Experience', 'experience'],
            ['Travel', 'travel'],
            ['Work Location', 'work_location'],
            ['Expected Start Date', 'expected_start_date'],
            ['Status', 'status']
          ].map(([label, name]) => (
            <div key={name}>
              <label>{label}</label>
              <input
                name={name}
                value={Array.isArray(form[name]) ? form[name].join(', ') : (form[name] || '')}
                onChange={handleChange}
                required={['position', 'team', 'location', 'description', 'job_type'].includes(name)}
              />
            </div>
          ))}
          <div className="modal-actions">
            <button type="button" onClick={onClose}>Cancel</button>
            <button type="submit">{editingJob ? 'Update' : 'Create'}</button>
          </div>
        </form>
      </div>
    </div>
  );
}
