// ScholarshipPolicyContent.jsx
import React from 'react';
import './scholarship-policy.css';

const ScholarshipPolicyContent = () => (
  <div className="scholarship-policy-content">
    <div className="policy-header" id="policy-header">
      <h1>SRG COMPUTER TRAINING INSTITUTE</h1>
      <h2 id="policy-title">SCHOLARSHIP TEST POLICY & EXAMINATION RULES</h2>
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
        <li><strong>Total Marks:</strong> 75/100</li>
        <li><strong>Duration:</strong> 60 Minutes</li>
        <li><strong>Question Type:</strong> Objective (Multiple Choice Questions)</li>
        <li><strong>Negative Marking:</strong> Not Applicable</li>
      </ul>

      <div className="subsection">
        <h3>Number of Questions (Updated)</h3>
        <ul>
          <li><strong>Class 4 & Class 5:</strong> Total Questions: 75</li>
          <li><strong>All Other Classes (Class 6 to Graduation):</strong> Total Questions: 100</li>
        </ul>
        <p className="note">
          <em>Marks per question may vary as decided by the institute to maintain fairness.</em>
        </p>
      </div>

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
        <p className="note">
          The total number of questions shall vary based on the group and academic level of the candidates.
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
      <ul>
        <li>Results will be declared strictly based on percentage (%).</li>
        <li>Percentage will be calculated based on the total number of questions for the student's class.</li>
      </ul>
      
      <div className="subsection">
        <h3>Percentage Calculation Method:</h3>
        <div className="formula-box">
          <h4>For Class 4 & Class 5:</h4>
          <ul>
            <li>Total Questions: 75</li>
          </ul>
          <p className="formula">Percentage = (Marks Obtained ÷ 75) × 100</p>
        </div>
        <div className="formula-box">
          <h4>For All Other Classes (Class 6 to Graduation):</h4>
          <ul>
            <li>Total Questions: 100</li>
          </ul>
          <p className="formula">Percentage = (Marks Obtained ÷ 100) × 100</p>
        </div>
      </div>
      
      <p className="note highlight">
        <strong>Note:</strong> For ranking purposes, percentages shall be rounded to two decimal places after calculation. Percentage comparison will be done only within the same group. The institute's calculation and result declaration will be final and binding.
      </p>
    </div>

    <div className="section">
      <h2>7. Scholarship Allocation Rules</h2>
      <div className="subsection">
        <h3>Overall Scholarship Award:</h3>
        <ul>
          <li className="highlight-text">One Boy & One Girl will be selected from each group (Group A, Group B, and Group C).</li>
          <li className="highlight-text">The student who gets the highest percentage in their group will be selected.</li>
          <li className="highlight-text">Boys will be compared only with boys and girls will be compared only with girls in the same group.</li>
          <li>Each selected student will get a Free DCA Course.</li>
          <li>Students from different groups will not be compared with each other.</li>
        </ul>
        <p className="note highlight">
          <strong>Important:</strong> The Overall Top 3 Boys and Top 3 Girls from all three groups shall be awarded a free DCA course.
        </p>
      </div>
      <div className="subsection">
        <h3>Minimum Qualification Criteria:</h3>
        <ul>
          <li className="highlight-text">Minimum 40% marks required to qualify for scholarship.</li>
          <li>If no eligible boy or girl is available in a group, the scholarship for that category shall remain unawarded.</li>
          <li>If fewer eligible candidates are available, scholarships may be reduced or remain unawarded accordingly.</li>
        </ul>
      </div>
    </div>

    <div className="section">
      <h2>8. Tie-Breaker Policy</h2>
      <p>In case two or more students secure the same percentage, the following tie-breaker rules will be applied strictly in order:</p>
      <ol>
        <li className="highlight-text">
          <strong>The candidate having fewer incorrect answers shall be ranked higher.</strong>
          <ul>
            <li>Unattempted questions shall not be treated as incorrect answers.</li>
          </ul>
        </li>
        <li>Lower class student preference</li>
        <li>Younger Age Preference (DOB-based) applied in the following order:
          <ul>
            <li>Younger by Year of birth</li>
            <li>If same year, younger by Month of birth</li>
            <li>If same month, younger by Date (day) of birth</li>
          </ul>
        </li>
        <li>If the tie persists even after exact DOB comparison, both candidates may be awarded the scholarship at the institute's discretion</li>
      </ol>
      <p className="note">The institute's decision in tie-breaker matters shall be final and binding.</p>
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
      <p>
        The institute's decision shall be final in all academic, administrative, and scholarship-related matters.
      </p>
    </div>

    <div className="section">
      <h2>15. Declaration (Applicable to All Examination Applicants)</h2>
      <p>
        By appearing in the scholarship test, the student and guardian agree to abide by all the rules and regulations mentioned in this policy document.
      </p>
    </div>

    <div className="section scholarship-rules-section">
      <h2 className="scholarship-rules-heading">16. Rules & Responsibilities for Selected Scholarship Students</h2>
      <p className="subsection-note">(For Students & Parents)</p>
      <p className="note">This section applies only to students who are selected for the scholarship.</p>

      <div className="subsection">
        <h3>16.1 Scholarship Is for Serious Learning</h3>
        <ul>
          <li>This scholarship is given to help students learn properly and sincerely.</li>
          <li>Even though the course fee is free, the course is not free time or time pass.</li>
          <li className="highlight-text">Students must attend classes regularly and focus on learning.</li>
        </ul>
      </div>

      <div className="subsection">
        <h3>16.2 Equal Treatment for All Students</h3>
        <ul>
          <li>Scholarship students will be treated the same as paid students.</li>
          <li>Same teachers, same classes, same syllabus, same computers, and same education.</li>
          <li>There will be no partiality or discrimination between paid and scholarship students.</li>
          <li>Scholarship means fee support only, not fewer rules or special benefits.</li>
          <li>Classroom management, teaching pace, and batch arrangements may differ based on academic needs and discipline.</li>
        </ul>
      </div>

      <div className="subsection">
        <h3>16.2A Batch Allocation for Equality in Learning</h3>
        <ul>
          <li className="highlight-text">To maintain equal learning quality for both paid and scholarship students, the institute will limit the number of scholarship students in a batch.</li>
          <li className="highlight-text">A maximum of 2 scholarship students will be allowed in one batch only.</li>
          <li>Equality means equal education quality and rules, not equal batch composition.</li>
          <li>This rule is made to ensure:
            <ul>
              <li>Equal attention from teachers</li>
              <li>Balanced classroom environment</li>
              <li>Same teaching quality for all students</li>
            </ul>
          </li>
          <li>Batch allocation will be decided by the institute.</li>
          <li className="highlight-text">Students or parents cannot demand batch change on the basis of scholarship status.</li>
          <li>The institute reserves the right to open new batches or adjust batches as required.</li>
          <li>This limit is for academic quality and classroom balance and is not discrimination.</li>
          <li className="highlight-text">Batch allocation decisions of the institute will be final and not subject to request or negotiation.</li>
        </ul>
      </div>

      <div className="subsection">
        <h3>16.3 Attendance Rule (Very Important)</h3>
        <ul>
          <li className="highlight-text">Students must maintain a minimum 90% attendance every month and overall.</li>
          <li>Attendance will be checked monthly and for the full course duration.</li>
          <li className="highlight-text">Both monthly and overall attendance must meet the required level. Failing in either may lead to review or cancellation of scholarship.</li>
          <li>If attendance percentage comes in decimal, it will be rounded up to the next whole number (example: 89.1% → 90%).</li>
          <li>Working days mean only official class days. Sundays and institute-declared holidays are not counted.</li>
        </ul>
      </div>

      <div className="subsection">
        <h3>16.4 Continuous Absence Rule</h3>
        <ul>
          <li className="highlight-text">If a student is absent for 7 continuous working days without informing the institute, the admission and scholarship will be cancelled automatically.</li>
          <li>Only written or recorded communication (office visit, WhatsApp, SMS, or email) will be accepted.</li>
          <li>Responsibility for correct and timely communication lies with the student or parent.</li>
        </ul>
      </div>

      <div className="subsection">
        <h3>16.5 Irregular Attendance</h3>
        <ul>
          <li>Coming sometimes, skipping classes repeatedly, or being regularly late is not allowed.</li>
          <li className="highlight-text">If a student fails to maintain required attendance in any month, the scholarship may be reviewed or cancelled.</li>
        </ul>
      </div>

      <div className="subsection">
        <h3>16.6 Inform Before Taking Leave</h3>
        <ul>
          <li>If a student is sick or has an important reason, the student or parent must inform the institute.</li>
          <li>Informing before or immediately after absence is compulsory.</li>
          <li className="highlight-text">Absence without information will be treated as not serious about learning.</li>
        </ul>
      </div>

      <div className="subsection">
        <h3>16.7 Study, Practice & Learning Behaviour</h3>
        <ul>
          <li>Students must complete classwork, homework, tests, and practice sincerely.</li>
          <li>Playing in class, disturbing others, or not doing work properly is not allowed.</li>
          <li className="highlight-text">The seriousness of learning will be decided by the teacher and institute management, and their decision will be final.</li>
        </ul>
      </div>

      <div className="subsection">
        <h3>16.8 Discipline & Behaviour</h3>
        <ul>
          <li>Students must respect teachers, staff, and classmates.</li>
          <li>Fighting, shouting, misbehavior, or disturbing the class is not allowed.</li>
          <li>Mobile phones are not allowed in class unless permitted by the teacher.</li>
          <li className="highlight-text">Any misconduct may lead to strict action.</li>
        </ul>
      </div>

      <div className="subsection">
        <h3>16.9 Parent / Guardian Responsibility</h3>
        <ul>
          <li>For minor students, parents or guardians are equally responsible for:
            <ul>
              <li>Attendance</li>
              <li>Discipline</li>
              <li>Informing the institute about absence</li>
            </ul>
          </li>
          <li className="highlight-text">Saying "we did not know" will not be accepted as a reason.</li>
        </ul>
      </div>

      <div className="subsection">
        <h3>16.10 Course Duration</h3>
        <ul>
          <li>The scholarship course must be completed within the standard time decided by the institute.</li>
          <li className="highlight-text">Long gaps, irregular attendance, or repeated absence may lead to course discontinuation.</li>
        </ul>
      </div>

      <div className="subsection">
        <h3>16.11 No Special Relaxation</h3>
        <ul>
          <li>Scholarship students must follow the same rules as paid students.</li>
          <li className="highlight-text">No extra chances, relaxation, or special treatment will be given because the course is free.</li>
          <li>Rules are equal for all students.</li>
        </ul>
      </div>

      <div className="subsection">
        <h3>16.12 Cancellation of Scholarship</h3>
        <p>The scholarship may be cancelled if:</p>
        <ul>
          <li>Attendance falls below the required level.</li>
          <li>Student is not serious about learning.</li>
          <li>Discipline rules are broken.</li>
          <li>Scholarship is misused in any way.</li>
        </ul>
        <p className="highlight-text">Once cancelled, the scholarship is permanently cancelled and cannot be restored.</p>
      </div>

      <div className="subsection">
        <h3>16.13 Final Decision</h3>
        <ul>
          <li className="highlight-text">All decisions taken by SRG Computer Training Institute will be final and binding.</li>
          <li>Students and parents must follow and respect the institute's decision.</li>
        </ul>
      </div>

      <div className="subsection">
        <h3>16.14 Acknowledgement (Applicable Only to Selected Scholarship Students)</h3>
        <p>By accepting the scholarship, the student and parent/guardian confirm that they have read, understood, and agreed to all the above rules and responsibilities.</p>
        <p>These rules are subject to revision as per institute policy.</p>
        <p className="note highlight important-message">
          <strong>Scholarship is an opportunity to learn. Respect it and use it responsibly.</strong>
        </p>
      </div>
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

