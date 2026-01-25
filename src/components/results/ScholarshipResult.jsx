import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackPlain from '../common/back/BackPlain';
import './ScholarshipResult.css';

const ScholarshipResult = () => {
  const navigate = useNavigate();
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
      const scriptURL = 'https://script.google.com/macros/s/AKfycbxql_ay1SPUdcZQO1fZnG4gdTMIL0U1_TLtsPOcM1FaihPQZYm_EBmmW6ROHQkws3pY/exec';

      if (!scriptURL) {
        setMessage('Please configure the Google Apps Script URL.');
        setLoading(false);
        return;
      }

      const formBody = new URLSearchParams({
        registrationNumber: formData.registrationNumber.trim(),
        name: formData.name.trim(),
        mobileNumber: formData.mobileNumber.trim(),
        dateOfBirth: formData.dateOfBirth.trim()
      });

      const response = await fetch(scriptURL, {
        method: 'POST',
        body: formBody
      });

      const data = await response.json();

      if (data.success && data.result) {
        // Debug: Log the API response to see if totalMarks is included
        console.log('API Response:', data);
        console.log('TotalMarks from API:', data.result.totalMarks);
        setResult(data.result);
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
          navigate('/scholarship-result/display', { state: { result: data.result } });
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


  return (
    <>
      <BackPlain title='Scholarship Result' />
      <section className='scholarship-result'>
        <div className='container'>
          <div className='result-card'>
            <div className='result-header'>
              <h2>Scholarship Result Out</h2>
              <p>
                Registration number and mobile number are required.
                Name and date of birth are optional.
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
                  <label>Name (Optional)</label>
                  <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    placeholder='Full name'
                  />
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

          </div>
        </div>
      </section>
    </>
  );
};

export default ScholarshipResult;
