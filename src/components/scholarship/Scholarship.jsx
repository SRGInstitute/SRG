import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Back from '../common/back/Back';
import './scholarship.css';

const Scholarship = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',

    address: '',
    city: '',
    state: '',
    pincode: '',
    educationLevel: '',
    currentInstitution: '',
    percentage: '',
    additionalInfo: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [policyAccepted, setPolicyAccepted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!policyAccepted) {
      alert('Please accept the Scholarship Test Policy & Examination Rules to proceed.');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Google Apps Script Web App URL - Replace with your deployed script URL
      const scriptURL = 'https://script.google.com/macros/s/AKfycbxZPOjeRcsb-J8hie9_ALoXrh_rhWYy7tKjE9U3b1PZWGC0JVIT4jBIGge__dwTOgtc/exec';

      const response = await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      // Since we're using no-cors, we can't read the response
      // But we'll assume success if no error is thrown
      setSubmitStatus('success');
      alert('Application Submitted Successfully!');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        dateOfBirth: '',
        gender: '',

        address: '',
        city: '',
        state: '',
        pincode: '',
        educationLevel: '',
        currentInstitution: '',
        percentage: '',
        additionalInfo: ''
      });
      setPolicyAccepted(false);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>


      {/* Front Scholarship Banner */}
      <section className='scholarship-hero'>
        <div className='container'>
          <div className='scholarship-banner'>
            <img
              src='/images/testo/frontScholarship.jpeg'
              alt='Scholarship Test 2026 - FREE DCA Course'
              className='scholarship-front-image'
            />
          </div>
        </div>
      </section>

      {/* Registration Details Section */}
      <section className='registration-details padding'>
        <div className='container'>
          <div className='registration-info-card'>
            <img
              src='/images/testo/BackScholarship.jpeg'
              alt='Registration Details'
              className='scholarship-back-image'
            />
            <div className='registration-details-text'>
              <div className='detail-section'>
                <h3><i className='fa fa-trophy'></i> Rewards</h3>
                <p><strong>Top 3 Girls | Top 3 Boys</strong></p>
                <p className='highlight'>FREE DCA COURSE</p>
              </div>

              <div className='detail-section'>
                <h3><i className='fa fa-rupee-sign'></i> Fee*</h3>
                <div className='fee-grid'>
                  <div className='fee-item'>
                    <span className='fee-label'>GIRLS</span>
                    <span className='fee-value free'><i className='fa fa-check-circle'></i> Free</span>
                  </div>
                  <div className='fee-divider'></div>
                  <div className='fee-item'>
                    <span className='fee-label'>BOYS</span>
                    <span className='fee-value'><i className='fa fa-rupee-sign'></i> 10 only</span>
                  </div>
                </div>
              </div>

              <div className='detail-section'>
                <h3><i className='fa fa-book'></i> Syllabus</h3>
                <p><strong>General Awareness</strong></p>
                <p>MCQ | 1 Hour</p>
                <p className='test-date'><i className='fa fa-calendar'></i> Test Date: <strong>18th Jan 2026</strong></p>
              </div>


            </div>
          </div>
        </div>
      </section>

      <section className='scholarship padding'>
        <div className='container'>
          <div className='scholarship-header'>
            <h1>Registration Form</h1>
            <p>
              Register now for the Scholarship Test 2026 and get a chance to win a FREE DCA Course!
              Fill out the form below to complete your registration.
            </p>
            <div className='policy-link-container'>
              <Link to='/scholarship-policy' className='policy-link'>
                <i className='fa fa-file-alt'></i> View Scholarship Test Policy & Examination Rules 2026
              </Link>
            </div>
          </div>

          {submitStatus === 'success' && (
            <div className='success-message'>
              <i className='fa fa-check-circle'></i>
              <p>Thank you! Your scholarship application has been submitted successfully. We will review it and get back to you soon.</p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className='error-message'>
              <i className='fa fa-exclamation-circle'></i>
              <p>There was an error submitting your application. Please try again or contact us directly.</p>
            </div>
          )}

          <form className='scholarship-form' onSubmit={handleSubmit}>
            <div className='form-section'>
              <h2>Personal Information</h2>
              <div className='form-grid'>
                <div className='form-group'>
                  <label htmlFor='fullName'>Full Name <span>*</span></label>
                  <input
                    type='text'
                    id='fullName'
                    name='fullName'
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder='Enter your full name'
                  />
                </div>

                <div className='form-group'>
                  <label htmlFor='email'>Email Address <span>*</span></label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder='your.email@example.com'
                  />
                </div>

                <div className='form-group'>
                  <label htmlFor='phone'>Phone Number <span>*</span></label>
                  <input
                    type='tel'
                    id='phone'
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder='+91 98913 96090'
                    pattern='[0-9+\s-]{10,}'
                  />
                </div>

                <div className='form-group'>
                  <label htmlFor='dateOfBirth'>Date of Birth <span>*</span></label>
                  <input
                    type='date'
                    id='dateOfBirth'
                    name='dateOfBirth'
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className='form-group'>
                  <label htmlFor='gender'>Gender <span>*</span></label>
                  <select
                    id='gender'
                    name='gender'
                    value={formData.gender}
                    onChange={handleChange}
                    required
                  >
                    <option value=''>Select gender</option>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                    <option value='Other'>Other</option>
                  </select>
                </div>


              </div>
            </div>

            <div className='form-section'>
              <h2>Address Information</h2>
              <div className='form-grid'>
                <div className='form-group full-width'>
                  <label htmlFor='address'>Address <span>*</span></label>
                  <textarea
                    id='address'
                    name='address'
                    value={formData.address}
                    onChange={handleChange}
                    required
                    rows='3'
                    placeholder='Street address, apartment, suite, etc.'
                  />
                </div>

                <div className='form-group'>
                  <label htmlFor='city'>City <span>*</span></label>
                  <input
                    type='text'
                    id='city'
                    name='city'
                    value={formData.city}
                    onChange={handleChange}
                    required
                    placeholder='Enter your city'
                  />
                </div>

                <div className='form-group'>
                  <label htmlFor='state'>State <span>*</span></label>
                  <input
                    type='text'
                    id='state'
                    name='state'
                    value={formData.state}
                    onChange={handleChange}
                    required
                    placeholder='Enter your state'
                  />
                </div>

                <div className='form-group'>
                  <label htmlFor='pincode'>PIN Code <span>*</span></label>
                  <input
                    type='text'
                    id='pincode'
                    name='pincode'
                    value={formData.pincode}
                    onChange={handleChange}
                    required
                    placeholder='123456'
                    pattern='[0-9]{6}'
                  />
                </div>
              </div>
            </div>

            <div className='form-section'>
              <h2>Educational Information</h2>
              <div className='form-grid'>
                <div className='form-group'>
                  <label htmlFor='educationLevel'>Education Level <span>*</span></label>
                  <select
                    id='educationLevel'
                    name='educationLevel'
                    value={formData.educationLevel}
                    onChange={handleChange}
                    required
                  >
                    <option value=''>Select education level</option>
                    <option value='10th Pass'>10th Pass</option>
                    <option value='12th Pass'>12th Pass</option>
                    <option value='Graduate'>Graduate</option>
                    <option value='Post Graduate'>Post Graduate</option>
                    <option value='Other'>Other</option>
                  </select>
                </div>

                <div className='form-group'>
                  <label htmlFor='currentInstitution'>Current Institution/School</label>
                  <input
                    type='text'
                    id='currentInstitution'
                    name='currentInstitution'
                    value={formData.currentInstitution}
                    onChange={handleChange}
                    placeholder='Name of your current institution'
                  />
                </div>

                <div className='form-group'>
                  <label htmlFor='percentage'>Last Qualification Percentage</label>
                  <input
                    type='number'
                    id='percentage'
                    name='percentage'
                    value={formData.percentage}
                    onChange={handleChange}
                    min='0'
                    max='100'
                    step='0.01'
                    placeholder='85.5'
                  />
                </div>

                <div className='form-group full-width'>
                  <label htmlFor='additionalInfo'>Additional Information</label>
                  <textarea
                    id='additionalInfo'
                    name='additionalInfo'
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    rows='3'
                    placeholder='Any other information you would like to share...'
                  />
                </div>
              </div>
            </div>

            <div className='form-note'>
              <p><strong>Note:</strong> The test will be based on General Awareness (MCQ format, 1 hour duration).
                Test Date: <strong>18th January 2026</strong></p>
              <p>Top 3 Girls and Top 3 Boys will receive a <strong>FREE DCA Course</strong>!</p>
            </div>

            <div className='policy-acceptance'>
              <label className='policy-checkbox-label'>
                <input
                  type='checkbox'
                  checked={policyAccepted}
                  onChange={(e) => setPolicyAccepted(e.target.checked)}
                  required
                  className='policy-checkbox'
                />
                <span className='policy-checkbox-text'>
                  I have read and agree to the{' '}
                  <Link to='/scholarship-policy' target='_blank' className='policy-link-inline'>
                    Scholarship Test Policy & Examination Rules 2026
                  </Link>
                  <span className='required-asterisk'>*</span>
                </span>
              </label>
            </div>

            <div className='form-actions'>
              <button
                type='submit'
                className='primary-btn'
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <i className='fa fa-spinner fa-spin'></i> Submitting...
                  </>
                ) : (
                  <>
                    Submit Application <i className='fa fa-paper-plane'></i>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Scholarship;

