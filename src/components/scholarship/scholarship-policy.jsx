// ScholarshipPolicyContent.jsx
import React from 'react';
import './scholarship-policy.css';

const ScholarshipPolicyContent = () => (
  <div className="scholarship-policy-content">
    <div className="policy-header">
      <h1>SRG COMPUTER TRAINING INSTITUTE</h1>
      <h2>SCHOLARSHIP TEST POLICY & EXAMINATION RULES</h2>
      <p className="policy-year">2026</p>
    </div>

    <div className="section">
      <h2>1. Purpose of the Scholarship Test</h2>
      <p>
        The Scholarship Test is organized to identify and encourage meritorious students by providing Free DCA (Diploma in Computer Applications) Course scholarships provided by SRG Computer Training Institute. The test is conducted in a transparent, unbiased, and merit-based manner to ensure equal opportunity for all participants.
      </p>
    </div>

    <div className="section">
      <h2>2. Eligibility Criteria</h2>
      <ul>
        <li>Students studying in Class 4 to 12 and Graduation are eligible.</li>
        <li>The student must be enrolled in a recognized school, college, or university.</li>
        <li>A valid School/College ID card or DOB Certificate is mandatory.</li>
        <li>Each student is allowed to appear only once in one eligible group.</li>
      </ul>
    </div>

    <div className="section">
      <h2>3. Grouping of Classes & Question Papers</h2>
      <table>
        <thead>
          <tr>
            <th>Groups</th>
            <th>Eligible Classes</th>
            <th>Question Paper</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Group A</td>
            <td>Class 4, 5, 6, 7</td>
            <td>Level A</td>
          </tr>
          <tr>
            <td>Group B</td>
            <td>Class 8, 9, 10</td>
            <td>Level B</td>
          </tr>
          <tr>
            <td>Group C</td>
            <td>Class 11, 12, Graduation</td>
            <td>Level C</td>
          </tr>
        </tbody>
      </table>
      <ul>
        <li>Each group will be evaluated independently.</li>
        <li>There will be no comparison between different groups.</li>
      </ul>
    </div>

    <div className="section">
      <h2>4. Exam Pattern</h2>
      <ul>
        <li><strong>Total Marks:</strong> 100</li>
        <li><strong>Duration:</strong> 60 / 90 Minutes (as applicable)</li>
        <li><strong>Negative Marking:</strong> Not Applicable</li>
      </ul>

      <div className="subsection">
        <h3>Question Distribution (Category-wise)</h3>
        
        <div className="group-detail">
          <h4>Group A – Classes 4, 5, 6, 7 (Level A)</h4>
          <p>For Group A, the assessment shall comprise questions from General Awareness, Computer Awareness, Mental Ability & Logic, and Basic Math Aptitude.</p>
        </div>

        <div className="group-detail">
          <h4>Group B – Classes 8, 9, 10 (Level B)</h4>
          <p>For Group B, the question paper shall comprise questions from General Awareness, Computer Awareness, Logical Reasoning, and Quantitative Aptitude.</p>
        </div>

        <div className="group-detail">
          <h4>Group C – Classes 11, 12 & Graduation (Level C)</h4>
          <p>For Group C, the question paper shall comprise questions from General Awareness, Computer & Digital Awareness, Advanced Reasoning, and Numerical & Aptitude Skills.</p>
        </div>

        <p className="note">
          <strong>Note:</strong> The paper is designed to be class-neutral and logic-oriented to ensure fairness across mixed classes.
        </p>
      </div>
    </div>

    <div className="section">
      <h2>5. Registration & Admit Card</h2>
      <ul>
        <li>All students must register before the last registration date.</li>
        <li>A unique Registration ID will be issued.</li>
        <li>Admit Card along with a valid ID proof is mandatory to appear in the examination.</li>
        <li>No class or group change is allowed on exam day.</li>
      </ul>
    </div>

    <div className="section">
      <h2>5A. Student Class Verification (If ID Is Not Available)</h2>
      <p>If a School/College ID card is not available, the institute will verify the student's class using alternate methods to ensure fairness and prevent misuse.</p>
      
      <div className="subsection">
        <h3>Alternate Proofs Accepted (Any ONE Required):</h3>
        <ul>
          <li>Written on a Letter head issued by School/College</li>
          <li>Last Academic Year Marksheet / Report Card</li>
          <li>Latest School/College Fee Receipt</li>
        </ul>
      </div>

      <div className="subsection">
        <h3>Age-to-Class Validation (Anti-Fraud Rule):</h3>
        <p>In absence of valid School/College ID or class-related documents, the student's age will be verified using Date of Birth (DOB) proof and cross-checked with the declared class.</p>
        
        <h4>Accepted DOB Proofs (Any ONE Required):</h4>
        <ul>
          <li>Aadhaar Card (preferred)</li>
          <li>Birth Certificate issued by a competent authority</li>
          <li>School Leaving Certificate (if available)</li>
        </ul>

        <h4>Expected Age-to-Class Mapping:</h4>
        <table>
          <thead>
            <tr>
              <th>Declared Class</th>
              <th>Expected Age Range</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Class 4–5</td><td>9–11 years</td></tr>
            <tr><td>Class 6–7</td><td>11–13 years</td></tr>
            <tr><td>Class 8–9</td><td>13–15 years</td></tr>
            <tr><td>Class 10</td><td>15–16 years</td></tr>
            <tr><td>Class 11–12</td><td>16–18 years</td></tr>
            <tr><td>Graduation</td><td>18+ years</td></tr>
          </tbody>
        </table>

        <ul>
          <li>If the age does not reasonably match the declared class, the institute may assign the student to a lower suitable group to maintain fairness.</li>
          <li>In exceptional cases, a self-declaration by the student along with parent/guardian confirmation may be taken.</li>
          <li>Submission of incorrect DOB or false information at any stage will result in immediate disqualification and cancellation of scholarship (if awarded).</li>
        </ul>
      </div>
    </div>

    <div className="section">
      <h2>6. Evaluation & Percentage Calculation</h2>
      <div className="formula-box">
        <h3>Percentage Formula:</h3>
        <p className="formula">Percentage = (Marks Obtained / Total Marks) × 100</p>
      </div>
      <ul>
        <li>Scholarship ranking is strictly based on percentage, and percentage comparison is done overall among candidates who have attempted the examination.</li>
      </ul>
    </div>

    <div className="section">
      <h2>7. Scholarship Allocation Rules</h2>
      <div className="subsection">
        <h3>Overall Scholarship Award:</h3>
        <ul>
          <li>Top 3 Boys shall be awarded a Free DCA Course.</li>
          <li>Top 3 Girls shall be awarded a Free DCA Course.</li>
        </ul>
      </div>
      <div className="subsection">
        <h3>Minimum Qualification Criteria:</h3>
        <ul>
          <li>Minimum 40% marks required to qualify for scholarship.</li>
          <li>If fewer eligible candidates are available, scholarships will be awarded accordingly.</li>
        </ul>
      </div>
    </div>

    <div className="section">
      <h2>8. Tie-Breaker Policy</h2>
      <p>In case two or more students secure the same percentage, the following tie-breaker rules will be applied strictly in order:</p>
      <ol>
        <li>Lower class student preference</li>
        <li>Younger Age Preference (DOB-based) applied in the following order:
          <ul>
            <li>Younger by Year of birth</li>
            <li>If same year, younger by Month of birth</li>
            <li>If same month, younger by Date (day) of birth</li>
          </ul>
        </li>
        <li>If the tie still persists even after exact DOB comparison, both candidates may be awarded the scholarship at the institute's discretion</li>
      </ol>
      <p>The institute's decision in tie-breaker matters shall be final and binding.</p>
    </div>

    <div className="section">
      <h2>9. Exam Conduct & Discipline</h2>
      <ul>
        <li>Mobile phones, smart watches, and electronic devices are strictly prohibited.</li>
        <li>Students must follow seating arrangements.</li>
        <li>Any form of cheating will lead to immediate disqualification.</li>
        <li>Rough sheets will be provided by the institute only.</li>
      </ul>
    </div>

    <div className="section">
      <h2>10. Special Provisions</h2>
      <div className="subsection">
        <h3>Reporting Time & Entry Rules:</h3>
        <ul>
          <li>No late entry is permitted under any circumstances.</li>
          <li>All students must report to the examination center at least 15 minutes before the scheduled exam time.</li>
          <li>Entry gates will be closed exactly at exam start time.</li>
          <li>Students arriving after gate closure will not be allowed to appear and no re-exam will be conducted.</li>
        </ul>
      </div>
      <div className="subsection">
        <h3>Absenteeism:</h3>
        <ul>
          <li>No re-exam will be conducted for absent students.</li>
        </ul>
      </div>
      <div className="subsection">
        <h3>Students with Disabilities:</h3>
        <ul>
          <li>Extra time (10–15 minutes) may be granted with prior medical proof.</li>
        </ul>
      </div>
    </div>

    <div className="section">
      <h2>11. Result Declaration & Publication</h2>
      <ul>
        <li>Results will be displayed using Registration ID along with DOB or Mobile Number or a suitable combination for verification.</li>
        <li>Results will be officially published on the institute website: <a href="https://www.srgeducation.in" target="_blank" rel="noopener noreferrer">www.srgeducation.in</a>.</li>
        <li>The following details may be published on the website for transparency:
          <ul>
            <li>Registration ID</li>
            <li>Student Name</li>
            <li>Father's Name</li>
            <li>Date of Birth (DOB)</li>
            <li>Marks / Percentage / Rank (where applicable)</li>
          </ul>
        </li>
        <li>Publication of results on the official website shall be considered final and authentic.</li>
      </ul>
    </div>

    <div className="section">
      <h2>12. Grievance & Rechecking Policy</h2>
      <ul>
        <li>Students may apply for rechecking only within 3 working days from the date of result declaration.</li>
        <li>Re-evaluation is strictly not permitted under any circumstances.</li>
        <li>Rechecking requests must be submitted in writing along with a rechecking fee of ₹50.</li>
        <li>The rechecking fee is non-refundable, irrespective of the outcome.</li>
        <li>Rechecking is limited to verification of:
          <ul>
            <li>Total marks calculation</li>
            <li>Unchecked questions (if any)</li>
          </ul>
        </li>
        <li>The institute's decision after rechecking shall be final and binding.</li>
      </ul>
    </div>

    <div className="section">
      <h2>13. Scholarship Acceptance Rules</h2>
      <ul>
        <li>Selected students must confirm admission within 7 days from the date of Result declaration.</li>
        <li>Failure to confirm admission within the stipulated time will result in automatic cancellation of the scholarship.</li>
        <li>If a student declines the scholarship, the same student shall not be eligible to avail the scholarship again in the future.</li>
        <li>Scholarships are non-transferable and non-exchangeable.</li>
      </ul>
    </div>

    <div className="section">
      <h2>14. Transparency & Authority Clause</h2>
      <p>
        The scholarship test is conducted with complete transparency and fairness. The institute reserves the right to amend rules or take appropriate decisions in unforeseen circumstances, ensuring justice to all participants.
      </p>
    </div>

    <div className="section">
      <h2>15. Declaration</h2>
      <p>
        By appearing in the scholarship test, the student and guardian agree to abide by all the rules and regulations mentioned in this policy document.
      </p>
    </div>

    <div className="policy-footer">
      <p>© SRGCTI Scholarship Test Committee – All Rights Reserved 2026</p>
      <div className="contact-info">
        <p>कंप्यूटर के साथ सपनों की उड़ान !</p>
        <p><a href="tel:+919891396090">+91 9891396090</a></p>
        <p><a href="https://www.srgeducation.in" target="_blank" rel="noopener noreferrer">www.srgeducation.in</a></p>
        <p><a href="mailto:Join.srg@gmail.com">Join.srg@gmail.com</a></p>
      </div>
    </div>
  </div>
);

export default ScholarshipPolicyContent;

