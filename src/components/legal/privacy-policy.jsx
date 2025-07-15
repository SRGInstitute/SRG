import React from 'react';
import './PrivacyCard.css';

const PrivacyCard = () => {
  return (
    <section className="privacy-section">
      <div className="container">
        <h1>Student Handbook: Rules, Regulations & Policy Manual</h1>

        <section>
          <h2>1. Rules and Regulations</h2>

          <h3>1.1 Admission & Enrollment</h3>
          <ul>
            <li>Admission is confirmed only after full payment of course fees.</li>
            <li>All required documents must be submitted at the time of enrollment.</li>
            <li>SRG reserves the right to refuse admission without providing reasons.</li>
          </ul>

          <h3>1.2 Attendance</h3>
          <ul>
            <li>Maintain a minimum of 75% attendance to be eligible for certification.</li>
            <li>Inform administration in advance of any planned absence.</li>
            <li>Repeated unexcused absences may result in termination from the course.</li>
          </ul>

          <h3>1.3 Conduct</h3>
          <ul>
            <li>Maintain professionalism and decorum within institute premises.</li>
            <li>Abusive language, misbehavior, or property damage will result in disciplinary action.</li>
            <li>Keep mobile phones on silent mode during class sessions.</li>
          </ul>

          <h3>1.4 Course Duration & Timings</h3>
          <ul>
            <li>Classes follow the schedule provided upon admission.</li>
            <li>Any changes to timings will be communicated in advance.</li>
            <li>Latecomers may be denied entry once a session begins.</li>
          </ul>

          <h3>1.5 Use of Institute Resources</h3>
          <ul>
            <li>Institute computers and software are for educational use only.</li>
            <li>Installation of unauthorized software or accessing inappropriate content is prohibited.</li>
            <li>Students are liable for any damage caused by negligence.</li>
          </ul>

          <h3>1.6 Examinations & Assessments</h3>
          <ul>
            <li>Regular tests and practical assignments will monitor student progress.</li>
            <li>Attendance in the final assessment is mandatory for certification.</li>
          </ul>

          <h3>1.7 Fees & Refund Policy</h3>
          <ul>
            <li>Fees must be paid by the due date to avoid enrollment cancellation.</li>
            <li>No refunds are issued once the course has commenced.</li>
            <li>Installment plans, if offered, must be adhered to as agreed.</li>
          </ul>

          <h3>1.8 Certificate Issuance</h3>
          <ul>
            <li>Certificates are issued upon successful course completion and passing the final assessment.</li>
            <li>Duplicates may be requested for a nominal fee.</li>
          </ul>
        </section>

        <section>
          <h2>2. Terms and Conditions</h2>

          <h3>2.1 Course Content & Updates</h3>
          <ul>
            <li>Curriculum may be updated to align with industry standards.</li>
            <li>SRG may modify course duration, content, or trainers without prior notice.</li>
          </ul>

          <h3>2.2 Intellectual Property</h3>
          <ul>
            <li>All materials (presentations, videos, notes) are the intellectual property of SRG.</li>
            <li>Unauthorized copying or distribution of materials is prohibited.</li>
          </ul>

          <h3>2.3 Liability</h3>
          <ul>
            <li>SRG is not liable for any loss, damage, or injury during the course.</li>
            <li>The institute is not responsible for technical issues beyond its control, such as internet outages.</li>
          </ul>

          <h3>2.4 Student Responsibilities</h3>
          <ul>
            <li>Ensure you meet minimum technical requirements for online or software-based courses.</li>
            <li>Regularly back up personal work and data.</li>
          </ul>

          <h3>2.5 Termination</h3>
          <ul>
            <li>Enrollment may be terminated for rule violations or unethical behavior.</li>
            <li>No refunds are provided upon termination.</li>
          </ul>

          <h3>2.6 Dispute Resolution</h3>
          <ul>
            <li>Any disputes will be resolved amicably or under the jurisdiction of Ghaziabad courts.</li>
          </ul>
        </section>

        <section>
          <h2>3. Privacy Policy</h2>

          <h3>3.1 Information Collection</h3>
          <ul>
            <li>Personal data (name, contact, educational background, payment details) is collected for course administration.</li>
            <li>Data is used solely for communication and certification purposes.</li>
          </ul>

          <h3>3.2 Data Security</h3>
          <ul>
            <li>SRG employs security measures to protect personal data from unauthorized access.</li>
            <li>Data is stored securely and accessible only to authorized personnel.</li>
          </ul>

          <h3>3.3 Use of Data</h3>
          <ul>
            <li>Information is used to deliver course content, issue certificates, and send updates.</li>
            <li>No personal data is sold or shared with third parties without consent.</li>
          </ul>

          <h3>3.4 Cookies and Tracking</h3>
          <ul>
            <li>Our website may use cookies to enhance user experience. Users may disable cookies via browser settings.</li>
          </ul>

          <h3>3.5 Third-Party Services</h3>
          <ul>
            <li>Any third-party tools (for online classes, payments) follow their own privacy policies. SRG is not responsible for external data handling.</li>
          </ul>

          <h3>3.6 Rights of Users</h3>
          <ul>
            <li>Students may request access, correction, or deletion of their personal data by contacting us at join.srg@gmail.com.</li>
          </ul>
        </section>

        <section>
          <h2>4. Marking Scheme for Certification</h2>
          <table>
            <thead>
              <tr><th>Sr. No</th><th>Activity</th><th>Marks</th></tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>Attendance</td><td>10</td></tr>
              <tr><td>2</td><td>Class Discipline</td><td>10</td></tr>
              <tr><td>3</td><td>Internal Assignment (Biweekly)</td><td>10</td></tr>
              <tr><td>4</td><td>MCQ Based Examination (Monthly)</td><td>40</td></tr>
              <tr><td>5</td><td>Final Practical and Viva</td><td>20</td></tr>
              <tr><td>6</td><td>Presentation</td><td>10</td></tr>
              <tr><td colSpan="2">Total</td><td>100</td></tr>
            </tbody>
          </table>
          <p><strong>Mode of Classes:</strong> Offline.<br />
          <strong>Schedule Of Classes:</strong> 5 days per week.<br />
          <strong>Certification Exam Fees:</strong> ₹300/-<br />
          <strong>Assessment:</strong> 80% Attendance is compulsory.</p>

          <h3>Passing Criteria:</h3>
          <ul>
            <li>Minimum 40% aggregate marks are required to pass for Certificate.</li>
            <li>All components are mandatory. Absence in the final exam results in failure.</li>
            <li>Students scoring above 90% will be awarded Prize with Certificate.</li>
          </ul>
        </section>

        <footer>
          <p>SRG COMPUTER TRAINING INSTITUTE, GZB<br />
          +91 9891396090 | www.srgeducation.in | Join.srg@gmail.com</p>
        </footer>
      </div>
    </section>
  );
};

export default PrivacyCard;
