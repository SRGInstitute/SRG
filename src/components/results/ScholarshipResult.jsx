import React, { useEffect, useState } from 'react';
import Back from '../common/back/Back';
import './ScholarshipResult.css';

const ScholarshipResult = () => {
  const [formData, setFormData] = useState({
    registrationNumber: '',
    name: '',
    mobileNumber: '',
    className: '',
    fatherName: '',
    dateOfBirth: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [message, setMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
    setMessage('');
    setResult(null);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.registrationNumber.trim()) {
      newErrors.registrationNumber = 'Registration number is required';
    }
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile number is required';
    }
    return newErrors;
  };

  const getPreviewUrl = (url) => {
    if (!url) return '';
    const trimmed = url.trim();
    const driveMatch = trimmed.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (driveMatch && driveMatch[1]) {
      return `https://drive.google.com/file/d/${driveMatch[1]}/preview`;
    }
    if (trimmed.includes('drive.google.com') && trimmed.includes('preview')) {
      return trimmed;
    }
    return trimmed;
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setMessage('');
    setResult(null);

    try {
      // Google Apps Script Web App URL - Replace with your deployed script URL
      const scriptURL = 'https://script.google.com/macros/s/AKfycbz6tBsPftAUs8V5LueIK6UEonjbbrGA6Gl-zJWM4uUu0KTqXANSnGwaFraTibc6G3Gx/exec';

      if (!scriptURL) {
        setMessage('Please configure the Google Apps Script URL.');
        setLoading(false);
        return;
      }

      const formBody = new URLSearchParams({
        registrationNumber: formData.registrationNumber.trim(),
        name: formData.name.trim(),
        mobileNumber: formData.mobileNumber.trim(),
        className: formData.className.trim(),
        fatherName: formData.fatherName.trim(),
        dateOfBirth: formData.dateOfBirth.trim()
      });

      const response = await fetch(scriptURL, {
        method: 'POST',
        body: formBody
      });

      const data = await response.json();

      if (data.success && data.result) {
        setResult(data.result);
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
          setIsModalOpen(true);
        }, 900);
      } else {
        setMessage(data.message || 'Result not found. Please check your details.');
      }
    } catch (error) {
      setMessage('Unable to fetch result. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => document.body.classList.remove('modal-open');
  }, [isModalOpen]);

  const handleViewAnswerSheet = () => {
    if (!result || !result.copyLink) return;
    const viewUrl = getFullViewUrl(result.copyLink);
    if (!viewUrl) {
      setMessage('Answer sheet link is invalid or missing.');
      return;
    }
    window.open(viewUrl, '_blank', 'noopener,noreferrer');
  };

  const getScoreParts = (value) => {
    const raw = (value || '').toString();
    const parts = raw.split('|').map((part) => part.trim()).filter(Boolean);
    return {
      score: parts[0] || raw,
      note: parts[1] || ''
    };
  };

  return (
    <>
      <Back title='Scholarship Result' />
      <section className='scholarship-result'>
        <div className='container'>
          <div className='result-card'>
            <div className='result-header'>
              <h2>Scholarship Result Out</h2>
              <p>
                Enter your registration number, name, and mobile number to check
                your result. Other fields are optional.
              </p>
            </div>

            <form className='result-form' onSubmit={handleSubmit}>
              <div className='form-grid'>
                <div className='form-group'>
                  <label>Registration Number *</label>
                  <input
                    type='text'
                    name='registrationNumber'
                    value={formData.registrationNumber}
                    onChange={handleChange}
                    placeholder='SRG/SF/26/0001'
                  />
                  {errors.registrationNumber && (
                    <span className='error-text'>{errors.registrationNumber}</span>
                  )}
                </div>

                <div className='form-group'>
                  <label>Name *</label>
                  <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    placeholder='Full name'
                  />
                  {errors.name && <span className='error-text'>{errors.name}</span>}
                </div>

                <div className='form-group'>
                  <label>Mobile Number *</label>
                  <input
                    type='text'
                    name='mobileNumber'
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    placeholder='Mobile number'
                  />
                  {errors.mobileNumber && (
                    <span className='error-text'>{errors.mobileNumber}</span>
                  )}
                </div>

                <div className='form-group'>
                  <label>Class (Optional)</label>
                  <input
                    type='text'
                    name='className'
                    value={formData.className}
                    onChange={handleChange}
                    placeholder='4th, 5th, 6th...'
                  />
                </div>

                <div className='form-group'>
                  <label>Father&apos;s Name (Optional)</label>
                  <input
                    type='text'
                    name='fatherName'
                    value={formData.fatherName}
                    onChange={handleChange}
                    placeholder='Father name'
                  />
                </div>

                <div className='form-group'>
                  <label>Date of Birth (Optional)</label>
                  <input
                    type='text'
                    name='dateOfBirth'
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    placeholder='DD-MMM-YYYY'
                  />
                </div>
              </div>

              <button type='submit' className='primary-btn' disabled={loading}>
                {loading ? 'Checking...' : 'Check Result'}
              </button>
            </form>

            {message && <div className='result-message'>{message}</div>}

            {showSuccess && (
              <div className='success-overlay'>
                <div className='success-check'>
                  <i className='fa fa-check'></i>
                </div>
                <div className='success-text'>Result Found</div>
              </div>
            )}

            {loading && (
              <div className='loading-overlay'>
                <div className='loader'></div>
                <div className='loading-text'>Checking Result...</div>
              </div>
            )}

            {result && isModalOpen && (
              <div className='result-modal-overlay' onClick={() => setIsModalOpen(false)}>
                <div className='result-modal' onClick={(e) => e.stopPropagation()}>
                  <div className='modal-header'>
                    <div className='modal-title'>Result Details</div>
                    <button className='modal-close' onClick={() => setIsModalOpen(false)}>
                      <i className='fa fa-times'></i>
                    </button>
                  </div>

                  <div className='result-output'>
                    <div className='result-details'>
                      <div><strong>Registration:</strong> {result.registrationNumber}</div>
                      <div><strong>Name:</strong> {result.name}</div>
                      <div><strong>Mobile:</strong> {result.mobileNumber}</div>
                      {result.className && <div><strong>Class:</strong> {result.className}</div>}
                      {result.fatherName && <div><strong>Father&apos;s Name:</strong> {result.fatherName}</div>}
                      {result.dateOfBirth && <div><strong>Date of Birth:</strong> {result.dateOfBirth}</div>}
                    </div>

                    <div className='score-highlight score-bottom'>
                      <span>Score</span>
                      <strong>{getScoreParts(result.score).score}</strong>
                    </div>
                    {getScoreParts(result.score).note && (
                      <div className='score-note'>{getScoreParts(result.score).note}</div>
                    )}

                    {result.copyLink && (
                      <div className='result-preview'>
                        <div className='result-actions'>
                          <button className='primary-btn view-answer-btn' onClick={handleViewAnswerSheet}>
                            View Answer Sheet
                          </button>
                          <button
                            className='secondary-btn'
                            type='button'
                            onClick={() => {
                              setIsModalOpen(false);
                              setResult(null);
                            }}
                          >
                            Check Another
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ScholarshipResult;
