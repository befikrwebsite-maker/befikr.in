import React from 'react';

const JobCard = ({ job }) => {
  const parse = (str) => {
    try {
      return JSON.parse(str);
    } catch {
      return [];
    }
  };

  const locations = parse(job.location);
  const tags = parse(job.tags);
  const responsibilities = parse(job.responsibilities);
  const skills = parse(job.skills);
  const benefits = parse(job.benefits);
  const schedule = parse(job.schedule);
  const supplementalPay = parse(job.supplemental_pay);
  const questions = parse(job.questions);
  const experience = parse(job.experience);
  const travel = parse(job.travel);

  return (
    <div className="job-card" style={{ border: '1px solid #ddd', padding: '20px', marginBottom: '20px', borderRadius: '8px' }}>
      <h2>{job.position}</h2>
      <p><strong>Team:</strong> {job.team}</p>
      <p><strong>Location:</strong> {locations.join(', ')}</p>
      <p><strong>Pay:</strong> {job.pay}</p>
      <p><strong>Job Type:</strong> {job.job_type}</p>

      <div>
        <strong>Description:</strong>
        <p>{job.description}</p>
      </div>

      {responsibilities.length > 0 && (
        <div>
          <strong>Responsibilities:</strong>
          <ul>
            {responsibilities.map((r, i) => <li key={i}>{r}</li>)}
          </ul>
        </div>
      )}

      {skills.length > 0 && (
        <div>
          <strong>Skills:</strong>
          <ul>
            {skills.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </div>
      )}

      {benefits.length > 0 && <p><strong>Benefits:</strong> {benefits.join(', ')}</p>}
      {schedule.length > 0 && <p><strong>Schedule:</strong> {schedule.join(', ')}</p>}
      {supplementalPay.length > 0 && <p><strong>Supplemental Pay:</strong> {supplementalPay.join(', ')}</p>}
      {questions.length > 0 && (
        <div>
          <strong>Questions:</strong>
          <ul>
            {questions.map((q, i) => <li key={i}>{q}</li>)}
          </ul>
        </div>
      )}

      <p><strong>Experience:</strong> {experience.join(', ')}</p>
      <p><strong>Travel:</strong> {travel.join(', ')}</p>
      <p><strong>Work Location:</strong> {job.work_location}</p>
      <p><strong>Start Date:</strong> {job.expected_start_date}</p>

      <div style={{ marginTop: '10px' }}>
        {tags.map((tag, i) => (
          <span key={i} style={{
            padding: '4px 8px',
            backgroundColor: '#04B2D9',
            color: 'white',
            borderRadius: '12px',
            marginRight: '5px',
            fontSize: '12px'
          }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default JobCard;
