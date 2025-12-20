import React, { useState, useEffect } from 'react';
import './StudentIDEntry.css';

const StudentIDEntry = () => {
  const [studentIds, setStudentIds] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Handle Enter key press to add student ID
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addStudentId();
    }
  };

  // Add student ID to the list
  const addStudentId = () => {
    const trimmedValue = inputValue.trim();
    
    if (!trimmedValue) {
      setError('Please enter a student ID');
      setTimeout(() => setError(''), 3000);
      return;
    }

    // Check if ID already exists
    if (studentIds.includes(trimmedValue)) {
      setError('Student ID already added');
      setTimeout(() => setError(''), 3000);
      return;
    }

    // Add the ID to the list
    setStudentIds([...studentIds, trimmedValue]);
    setInputValue('');
    setSuccess('Student ID added successfully');
    setTimeout(() => setSuccess(''), 2000);
  };

  // Remove student ID from the list
  const removeStudentId = (idToRemove) => {
    setStudentIds(studentIds.filter(id => id !== idToRemove));
    setSuccess('Student ID removed');
    setTimeout(() => setSuccess(''), 2000);
  };

  // Clear all student IDs
  const clearAll = () => {
    setStudentIds([]);
    setSuccess('All student IDs cleared');
    setTimeout(() => setSuccess(''), 2000);
  };

  // Handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setError('');
  };

  return (
    <div className="student-id-entry-container">
      <div className="student-id-entry-card">
        <h2 className="student-id-entry-title">Student ID Entry</h2>
        <p className="student-id-entry-subtitle">
          Enter student ID and press Enter to add
        </p>

        {/* Input Section */}
        <div className="input-section">
          <div className="input-wrapper">
            <input
              type="text"
              className="student-id-input"
              placeholder="Enter Student ID and press Enter..."
              value={inputValue}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
            />
            <button
              type="button"
              className="add-button"
              onClick={addStudentId}
            >
              Add
            </button>
          </div>

          {/* Error Message */}
          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          {/* Success Message */}
          {success && (
            <div className="success-message">
              {success}
            </div>
          )}
        </div>

        {/* Student IDs List */}
        {studentIds.length > 0 && (
          <div className="student-ids-section">
            <div className="section-header">
              <h3>Added Student IDs ({studentIds.length})</h3>
              <button
                type="button"
                className="clear-all-button"
                onClick={clearAll}
              >
                Clear All
              </button>
            </div>
            <div className="student-ids-list">
              {studentIds.map((id, index) => (
                <div key={index} className="student-id-item">
                  <span className="student-id-text">{id}</span>
                  <button
                    type="button"
                    className="remove-button"
                    onClick={() => removeStudentId(id)}
                    title="Remove"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {studentIds.length === 0 && (
          <div className="empty-state">
            <p>No student IDs added yet. Enter a student ID above and press Enter to add.</p>
          </div>
        )}

        {/* Action Buttons */}
        {studentIds.length > 0 && (
          <div className="action-buttons">
            <button
              type="button"
              className="submit-button"
              onClick={() => {
                console.log('Student IDs to process:', studentIds);
                // Add your submission logic here
                setSuccess('Student IDs submitted successfully!');
                setTimeout(() => {
                  setSuccess('');
                  setStudentIds([]);
                }, 2000);
              }}
            >
              Submit ({studentIds.length} IDs)
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentIDEntry;

