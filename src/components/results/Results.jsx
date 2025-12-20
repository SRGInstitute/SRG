import React, { useState } from 'react';
import Back from '../common/back/Back';
import './Results.css';

const Results = () => {
  const [studentIdInput, setStudentIdInput] = useState('');
  const [studentName, setStudentName] = useState('');
  const [fetchingStudent, setFetchingStudent] = useState(false);
  const [alert, setAlert] = useState({ show: false, message: '', type: 'success' });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // Form state
  const [formData, setFormData] = useState({
    studentId: '',
    studentName: '',
    testType: '',
    typingTestWPM: '',
    typingTestAccuracy: '',
    quizScore: '',
    quizTotalMarks: '',
    remarks: ''
  });

  // Fetch student details by ID - optimized to fetch only single student
  const fetchStudentById = async (studentId) => {
    if (!studentId || !studentId.trim()) {
      setStudentName('');
      setFormData({ ...formData, studentId: '', studentName: '' });
      return;
    }

    try {
      setFetchingStudent(true);
      setErrors({ ...errors, studentId: '' });
      
      // Use optimized script that fetches only the specific student by ID
      const getStudentUrl = 'https://script.google.com/macros/s/AKfycbzb5n47l2aq0qvterjM-U9nvpsFg8ef3XZGrTF5H2W2lpZIeWw66OJwtLZRPs0u5j6UjA/exec';
      
      // Call the script with student ID as query parameter
      const response = await fetch(
        `${getStudentUrl}?studentId=${encodeURIComponent(studentId.trim())}`
      );
      
      if (response.ok) {
        const result = await response.json();
        
        if (result.status === 'success' && result.data) {
          const student = result.data;
          setStudentName(student.name);
          setFormData({
            ...formData,
            studentId: student.membershipID.toString(),
            studentName: student.name
          });
          setErrors({ ...errors, studentId: '' });
        } else {
          setStudentName('');
          setFormData({ ...formData, studentId: '', studentName: '' });
          setErrors({ ...errors, studentId: result.message || 'Student not found with this ID' });
        }
      } else {
        throw new Error('Failed to fetch student data');
      }
    } catch (error) {
      console.error('Error fetching student:', error);
      setStudentName('');
      setFormData({ ...formData, studentId: '', studentName: '' });
      setErrors({ ...errors, studentId: 'Error fetching student details. Please try again.' });
    } finally {
      setFetchingStudent(false);
    }
  };

  // Handle student ID input change
  const handleStudentIdChange = (e) => {
    const value = e.target.value;
    setStudentIdInput(value);
    
    // Clear student name when ID changes
    if (!value.trim()) {
      setStudentName('');
      setFormData({ ...formData, studentId: '', studentName: '' });
      setErrors({ ...errors, studentId: '' });
    }
  };

  // Handle student ID blur - removed, now using search button only

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });

    // Clear opposite test type fields when switching
    if (name === 'testType') {
      if (value === 'typing') {
        setFormData({ ...formData, testType: value, quizScore: '', quizTotalMarks: '' });
      } else if (value === 'quiz') {
        setFormData({ ...formData, testType: value, typingTestWPM: '', typingTestAccuracy: '' });
      }
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.studentId) {
      newErrors.studentId = 'Student ID is required';
    }
    if (!formData.studentName) {
      newErrors.studentName = 'Student Name is required';
    }
    if (!formData.testType) {
      newErrors.testType = 'Test Type is required';
    }

    if (formData.testType === 'typing') {
      if (!formData.typingTestWPM) {
        newErrors.typingTestWPM = 'WPM is required for typing test';
      } else if (parseFloat(formData.typingTestWPM) < 0) {
        newErrors.typingTestWPM = 'WPM must be 0 or greater';
      }
      if (!formData.typingTestAccuracy) {
        newErrors.typingTestAccuracy = 'Accuracy is required for typing test';
      } else {
        const accuracy = parseFloat(formData.typingTestAccuracy);
        if (accuracy < 0 || accuracy > 100) {
          newErrors.typingTestAccuracy = 'Accuracy must be between 0 and 100';
        }
      }
    }

    if (formData.testType === 'quiz') {
      if (!formData.quizScore) {
        newErrors.quizScore = 'Quiz Score is required';
      } else if (parseFloat(formData.quizScore) < 0) {
        newErrors.quizScore = 'Score must be 0 or greater';
      }
      if (!formData.quizTotalMarks) {
        newErrors.quizTotalMarks = 'Total Marks is required';
      } else if (parseFloat(formData.quizTotalMarks) < 1) {
        newErrors.quizTotalMarks = 'Total Marks must be at least 1';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit results
  const submitResults = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    try {
      const url = 'https://script.google.com/macros/s/AKfycbyMjLm5JHfsmlytfE4IqfDg9RUDuATNKKKZXMASwrWy5SyBrOJPEVFNSiTbSuDCksQZxg/exec';

      const dataObject = {
        studentId: formData.studentId,
        studentName: formData.studentName,
        testType: formData.testType,
        typingTestWPM: formData.typingTestWPM || '',
        typingTestAccuracy: formData.typingTestAccuracy || '',
        quizScore: formData.quizScore || '',
        quizTotalMarks: formData.quizTotalMarks || '',
        remarks: formData.remarks || ''
      };

      console.log('Submitting results:', dataObject);

      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify(dataObject)
      };

      const response = await fetch(url, requestOptions);
      const result = await response.json();

      console.log('Submission response:', result);

      if (response.ok && result.status === 'success') {
        setAlert({
          show: true,
          message: 'Results Submitted Successfully! 🎉',
          type: 'success'
        });
        // Reset form
        setFormData({
          studentId: '',
          studentName: '',
          testType: '',
          typingTestWPM: '',
          typingTestAccuracy: '',
          quizScore: '',
          quizTotalMarks: '',
          remarks: ''
        });
        setStudentIdInput('');
        setStudentName('');
      } else {
        throw new Error(result.message || 'Failed to submit results');
      }

      setTimeout(() => {
        setAlert({ show: false, message: '', type: 'success' });
      }, 3000);
    } catch (error) {
      console.error('Error submitting results:', error);
      setAlert({
        show: true,
        message: `Error: ${error.message}. Please try again.`,
        type: 'error'
      });
      setTimeout(() => {
        setAlert({ show: false, message: '', type: 'success' });
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      studentId: '',
      studentName: '',
      testType: '',
      typingTestWPM: '',
      typingTestAccuracy: '',
      quizScore: '',
      quizTotalMarks: '',
      remarks: ''
    });
    setStudentIdInput('');
    setStudentName('');
    setErrors({});
  };

  return (
    <>
      <Back title="Test Results" />
      {/* Alert Message */}
      {alert.show && (
        <div className="alert-message" style={{ type: alert.type }}>
          <div className={`alert-content ${alert.type}`}>
            {alert.type === 'success' ? '✓' : '✗'} {alert.message}
          </div>
        </div>
      )}

      <section className="results-form padding">
        <div className="container">
          <div className="results-card">
            <div className="results-header">
              <p className="results-subtitle">Add typing test and quiz results for students</p>
            </div>

            <form onSubmit={submitResults} className="results-form-content">
            {/* Student ID Input */}
            <div className="form-group">
              <label className="form-label">
                Enter SRG Student ID *
              </label>
              <div className="input-wrapper">
                <input
                  type="text"
                  placeholder="Enter Student ID..."
                  value={studentIdInput}
                  onChange={handleStudentIdChange}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      if (studentIdInput.trim()) {
                        fetchStudentById(studentIdInput.trim());
                      }
                    }
                  }}
                  disabled={fetchingStudent}
                  className={`form-input ${errors.studentId ? 'error' : ''}`}
                />
                <button
                  type="button"
                  onClick={() => {
                    if (studentIdInput.trim()) {
                      fetchStudentById(studentIdInput.trim());
                    }
                  }}
                  disabled={fetchingStudent || !studentIdInput.trim()}
                  className="search-button"
                  title="Search Student"
                >
                  {fetchingStudent ? (
                    <span className="loading-spinner">⏳</span>
                  ) : (
                    <span>🔍</span>
                  )}
                </button>
              </div>
              {errors.studentId && (
                <small className="error-text">{errors.studentId}</small>
              )}
              {formData.studentId && studentName && (
                <div className="student-name-display">
                  <strong>Student Name: {studentName}</strong>
                </div>
              )}
            </div>

            {/* Test Type Selection */}
            <div className="form-group">
              <label className="form-label">Test Type *</label>
              <select
                name="testType"
                value={formData.testType}
                onChange={handleChange}
                className={`form-select ${errors.testType ? 'error' : ''}`}
              >
                <option value="">-- Select Test Type --</option>
                <option value="typing">Typing Test</option>
                <option value="quiz">Quiz</option>
              </select>
              {errors.testType && (
                <small className="error-text">{errors.testType}</small>
              )}
            </div>

            {/* Typing Test Fields */}
            {formData.testType === 'typing' && (
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Words Per Minute (WPM) *</label>
                  <input
                    type="number"
                    name="typingTestWPM"
                    placeholder="Enter WPM"
                    value={formData.typingTestWPM}
                    onChange={handleChange}
                    min="0"
                    className={`form-input ${errors.typingTestWPM ? 'error' : ''}`}
                  />
                  {errors.typingTestWPM && (
                    <small className="error-text">{errors.typingTestWPM}</small>
                  )}
                </div>
                <div className="form-group">
                  <label className="form-label">Accuracy (%) *</label>
                  <input
                    type="number"
                    name="typingTestAccuracy"
                    placeholder="Enter accuracy percentage"
                    value={formData.typingTestAccuracy}
                    onChange={handleChange}
                    min="0"
                    max="100"
                    className={`form-input ${errors.typingTestAccuracy ? 'error' : ''}`}
                  />
                  {errors.typingTestAccuracy && (
                    <small className="error-text">{errors.typingTestAccuracy}</small>
                  )}
                </div>
              </div>
            )}

            {/* Quiz Fields */}
            {formData.testType === 'quiz' && (
              <>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Score *</label>
                    <input
                      type="number"
                      name="quizScore"
                      placeholder="Enter score"
                      value={formData.quizScore}
                      onChange={handleChange}
                      min="0"
                      className={`form-input ${errors.quizScore ? 'error' : ''}`}
                    />
                    {errors.quizScore && (
                      <small className="error-text">{errors.quizScore}</small>
                    )}
                  </div>
                  <div className="form-group">
                    <label className="form-label">Total Marks *</label>
                    <input
                      type="number"
                      name="quizTotalMarks"
                      placeholder="Enter total marks"
                      value={formData.quizTotalMarks}
                      onChange={handleChange}
                      min="1"
                      className={`form-input ${errors.quizTotalMarks ? 'error' : ''}`}
                    />
                    {errors.quizTotalMarks && (
                      <small className="error-text">{errors.quizTotalMarks}</small>
                    )}
                  </div>
                </div>
                {formData.quizScore && formData.quizTotalMarks && (
                  <div className="percentage-display">
                    <strong>
                      Percentage:{' '}
                      {((formData.quizScore / formData.quizTotalMarks) * 100).toFixed(2)}%
                    </strong>
                  </div>
                )}
              </>
            )}

            {/* Remarks */}
            <div className="form-group">
              <label className="form-label">Additional Remarks (Optional)</label>
              <textarea
                name="remarks"
                placeholder="Any additional comments or notes..."
                value={formData.remarks}
                onChange={handleChange}
                rows="3"
                className="form-textarea"
              />
            </div>

            {/* Action Buttons */}
            <div className="form-actions">
              <button type="button" onClick={resetForm} className="btn-clear">
                Clear
              </button>
              <button type="submit" disabled={loading} className="btn-submit">
                {loading ? 'Submitting...' : 'Submit Results'}
              </button>
            </div>
          </form>
        </div>
        </div>
      </section>
    </>
  );
};

export default Results;

