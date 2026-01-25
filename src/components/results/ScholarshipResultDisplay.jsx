import React from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import './ScholarshipResultDisplay.css';

const ScholarshipResultDisplay = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const result = location.state?.result;

  if (!result) {
    navigate('/scholarship-result');
    return null;
  }

  const getScoreParts = (value) => {
    const raw = (value || '').toString();
    const parts = raw.split('|').map((part) => part.trim()).filter(Boolean);
    const score = parts[0] || raw;
    const scholarshipStatus = parts[1] || '';
    const hasEligible = raw.toLowerCase().includes('eligible');
    return {
      score: score,
      scholarshipStatus: scholarshipStatus,
      hasEligible: hasEligible
    };
  };

  const formatDateOfBirth = (dateStr) => {
    if (!dateStr) return 'N/A';
    try {
      // Handle ISO timestamp format
      const date = new Date(dateStr);
      if (isNaN(date.getTime())) return dateStr;
      
      // Format as DD-MMM-YYYY
      const day = date.getDate().toString().padStart(2, '0');
      const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const month = monthNames[date.getMonth()];
      const year = date.getFullYear();
      return `${day}-${month}-${year}`;
    } catch (error) {
      return dateStr;
    }
  };

  const getFullViewUrl = (url) => {
    if (!url) return '';
    const trimmed = url.trim();
    if (/^https?:\/\//i.test(trimmed)) {
      return trimmed;
    }
    if (/^www\./i.test(trimmed)) {
      return `https://${trimmed}`;
    }
    const idMatch = trimmed.match(/^[a-zA-Z0-9_-]{20,}$/);
    if (idMatch) {
      return `https://drive.google.com/file/d/${trimmed}/view`;
    }
    const driveMatch = trimmed.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (driveMatch && driveMatch[1]) {
      return `https://drive.google.com/file/d/${driveMatch[1]}/view`;
    }
    return '';
  };

  const handleViewAnswerSheet = () => {
    if (!result.copyLink) return;
    const viewUrl = getFullViewUrl(result.copyLink);
    if (viewUrl) {
      window.open(viewUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    window.print();
  };

  const scoreParts = getScoreParts(result.score);
  const currentDate = new Date().toLocaleString('en-IN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
  
  const formattedDateOfBirth = formatDateOfBirth(result.dateOfBirth);

  return (
    <div className='result-display-page'>
      <div className='result-container'>
        <div className='institute-header'>
          <div className='institute-logo'>
            <img src='/images/srg-logo.png' alt='SRG Logo' />
          </div>
          <h1>SRG Computer Training Institute</h1>
          <h2>SRG Scholarship Examination 2026</h2>
          <p className='exam-date'>Exam Date: January 18, 2026</p>
        </div>

        <div className='info-card student-info-card'>
          <h3>Student Information</h3>
          <div className='student-details-grid'>
            <div className='detail-item'>
              <span className='label'>Name:</span>
              <span className='value'>{result.name}</span>
            </div>
            <div className='detail-item'>
              <span className='label'>Father&apos;s Name:</span>
              <span className='value'>{result.fatherName || 'N/A'}</span>
            </div>
            <div className='detail-item'>
              <span className='label'>Mobile Number:</span>
              <span className='value'>{result.mobileNumber}</span>
            </div>
            <div className='detail-item'>
              <span className='label'>Registration Number:</span>
              <span className='value'>{result.registrationNumber}</span>
            </div>
            <div className='detail-item'>
              <span className='label'>Date of Birth:</span>
              <span className='value'>{formattedDateOfBirth}</span>
            </div>
            <div className='detail-item'>
              <span className='label'>Class:</span>
              <span className='value'>{result.className || 'N/A'}</span>
            </div>
          </div>
        </div>

        <div className='info-card performance-card'>
          <h3>Exam Performance</h3>
          <div className='performance-metrics'>
            <div className='metric-item'>
              <div className='metric-value blue'>100</div>
              <div className='metric-label'>Total Marks</div>
            </div>
            <div className='metric-item'>
              <div className={`metric-value ${scoreParts.hasEligible ? 'green' : 'red'}`}>
                {scoreParts.score}
              </div>
              <div className='metric-label'>Obtained Marks</div>
            </div>
            <div className='metric-item'>
              <div className='metric-value blue'>
                {((parseFloat(scoreParts.score) / 100) * 100).toFixed(2)}%
              </div>
              <div className='metric-label'>Percentage</div>
            </div>
          </div>
          <div className='achievement-bar'></div>
        </div>

        {scoreParts.scholarshipStatus && (
          <div className='status-cards'>
            <div className='status-card scholarship-card'>
              <div className='status-label'>Scholarship Status</div>
              <div className={`status-value ${scoreParts.hasEligible ? 'green' : 'red'}`}>
                {scoreParts.scholarshipStatus}
              </div>
            </div>
          </div>
        )}

        {result.copyLink && (
          <div className='info-card answer-sheet-card'>
            <h3>Answer Sheet</h3>
            <div className='answer-sheet-actions'>
              <button className='primary-btn view-btn' onClick={handleViewAnswerSheet}>
                View Answer Sheet
              </button>
              <button
                className='secondary-btn new-tab-btn'
                onClick={handleViewAnswerSheet}
              >
                <i className='fa fa-external-link-alt'></i> Open in New Tab
              </button>
            </div>
          </div>
        )}

        <div className='result-actions-bar'>
          <button className='action-btn print-btn' onClick={handlePrint}>
            <i className='fa fa-print'></i> Print Result
          </button>
          <button className='action-btn download-btn' onClick={handleDownloadPDF}>
            <i className='fa fa-download'></i> Download PDF
          </button>
          <button className='action-btn back-btn' onClick={() => navigate('/')}>
            <i className='fa fa-arrow-left'></i> Back to Home
          </button>
        </div>

        <div className='result-footer'>
          <p>This is an official result document from SRG Computer Training Institute.</p>
          <p>For any queries, please contact the administration office.</p>
          <div className='policy-link-container'>
            <Link to='/scholarship-policy' className='policy-link' target='_blank'>
              <i className='fa fa-file-alt'></i> View Scholarship Test Policy & Examination Rules 2026
            </Link>
          </div>
          <p className='generated-date'>Generated on: {currentDate}</p>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipResultDisplay;
