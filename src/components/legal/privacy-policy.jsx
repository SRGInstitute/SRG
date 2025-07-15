// PrivacyContent.jsx
import React from 'react';
import './PrivacyCard.css';

const PrivacyContent = () => (
  <div className="privacy-content">
    <h1>Student Handbook: Rules, Regulations & Policy Manual</h1>

    <div className="section">
      <h2>1. Rules and Regulations</h2>
      <div className="subsection">
        <h3>1.1 Admission & Enrollment</h3>
        <ul>
          <li>Admission is confirmed only after full payment of course fees.</li>
          <li>All required documents must be submitted at the time of enrollment.</li>
          <li>SRG reserves the right to refuse admission without providing reasons.</li>
        </ul>
      </div>
      <div className="subsection">
        <h3>1.2 Attendance</h3>
        <ul>
          <li>Maintain a minimum of 75% attendance to be eligible for certification.</li>
          <li>Inform administration in advance of any planned absence.</li>
          <li>Repeated unexcused absences may result in termination from the course.</li>
        </ul>
      </div>
      <div className="subsection">
        <h3>1.3 Conduct</h3>
        <ul>
          <li>Maintain professionalism and decorum within institute premises.</li>
          <li>Abusive language, misbehavior, or property damage will result in disciplinary action.</li>
          <li>Keep mobile phones on silent mode during class sessions.</li>
        </ul>
      </div>
      <div className="subsection">
        <h3>1.4 Course Duration & Timings</h3>
        <ul>
          <li>Classes follow the schedule provided upon admission.</li>
          <li>Any changes to timings will be communicated in advance.</li>
          <li>Latecomers may be denied entry once a session begins.</li>
        </ul>
      </div>
    </div>

    <div className="section">
      <h2>2. Terms and Conditions</h2>
      <div className="subsection">
        <h3>2.1 Course Content & Updates</h3>
        <ul>
          <li>Curriculum may be updated to align with industry standards.</li>
          <li>SRG may modify course duration, content, or trainers without prior notice.</li>
        </ul>
      </div>
      <div className="subsection">
        <h3>2.2 Intellectual Property</h3>
        <ul>
          <li>All materials (presentations, videos, notes) are the intellectual property of SRG.</li>
          <li>Unauthorized copying or distribution of materials is prohibited.</li>
        </ul>
      </div>
    </div>

    <div className="section">
      <h2>3. Privacy Policy</h2>
      <div className="subsection">
        <h3>3.1 Information Collection</h3>
        <ul>
          <li>Personal data (name, contact, educational background, payment details) is collected for course administration.</li>
          <li>Data is used solely for communication and certification purposes.</li>
        </ul>
      </div>
      <div className="subsection">
        <h3>3.2 Data Security</h3>
        <ul>
          <li>SRG employs security measures to protect personal data from unauthorized access.</li>
          <li>Data is stored securely and accessible only to authorized personnel.</li>
        </ul>
      </div>
    </div>

    <div className="section">
      <h2>4. Marking Scheme for Certification</h2>
      <table>
        <thead>
          <tr><th>Sr. No</th><th>Activity</th><th>Marks</th></tr>
        </thead>
        <tbody>
          <tr><td>1</td><td>Attendance</td><td>10</td></tr>
          <tr><td>2</td><td>Class Discipline</td><td>10</td></tr>
          <tr><td>3</td><td>Internal Assignment</td><td>10</td></tr>
          <tr><td>4</td><td>MCQ Examination</td><td>40</td></tr>
          <tr><td>5</td><td>Final Practical & Viva</td><td>20</td></tr>
          <tr><td>6</td><td>Presentation</td><td>10</td></tr>
          <tr><td colSpan="2">Total</td><td>100</td></tr>
        </tbody>
      </table>
      <p className="notes">
        <strong>Mode of Classes:</strong> Offline; <strong>Schedule:</strong> 5 days/week; <strong>Fees:</strong> ₹300; <strong>Attendance Required:</strong> 80%.
      </p>
      <div className="subsection">
        <h3>Passing Criteria</h3>
        <ul>
          <li>Minimum 40% aggregate marks are required to pass for Certificate.</li>
          <li>All components are mandatory. Absence in the final exam results in failure.</li>
          <li>Students scoring above 90% will be awarded Prize with Certificate.</li>
        </ul>
      </div>
    </div>
  </div>
);

export default PrivacyContent;

/* PrivacyContent.css */
.privacy-content {
  font-family: 'Segoe UI', sans-serif;
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}
.section + .section {
  margin-top: 2.5rem;
}
.section h2 {
  font-size: 1.5rem;
  color: #0A2342;
  border-bottom: 2px solid #e0e0e0;
  padding-bottom: 0.5rem;
}
.subsection h3 {
  font-size: 1.25rem;
  color: #333333;
  margin-top: 1rem;
}
.subsection ul {
  list-style: disc;
  margin: 0.5rem 0 1rem 1.5rem;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
}
table th,
table td {
  border: 1px solid #ccc;
  padding: 0.75rem;
  text-align: left;
}
table thead {
  background: #f2f2f2;
}
.notes {
  margin-top: 1rem;
  color: #555555;
  font-size: 0.95rem;
}
@media (max-width: 600px) {
  .privacy-content {
    padding: 1rem;
  }
  .section h2 {
    font-size: 1.25rem;
  }
  .subsection h3 {
    font-size: 1.1rem;
  }
}
