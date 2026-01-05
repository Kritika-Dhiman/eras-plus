import React, { useState } from 'react';
import './EntryScreen.css';

/**
 * EntryScreen Component
 * Receives configuration options via props (no direct data imports)
 */
function EntryScreen({ configurationOptions, onConfigSubmit }) {
  // State for form inputs
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedTextbook, setSelectedTextbook] = useState('');
  const [selectedGoal, setSelectedGoal] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate that all fields are selected
    if (!selectedSubject || !selectedCourse || !selectedTextbook || !selectedGoal) {
      alert('Please select all options before continuing.');
      return;
    }

    // Create configuration object
    const config = {
      subject: selectedSubject,
      course: selectedCourse,
      textbook: selectedTextbook,
      goal: selectedGoal
    };

    // Pass configuration to parent
    onConfigSubmit(config);
  };

  // Extract options from props
  const { subjects = [], courses = [], textbooks = [], preparationGoals = [] } = configurationOptions || {};

  return (
    <div className="entry-screen">
      <div className="entry-container">
        <header className="entry-header">
          <h1>ERAS+</h1>
          <p className="subtitle">Exam Representation Alignment System</p>
          <p className="description">Configure your study session to get started</p>
        </header>

        <form className="config-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <select
              id="subject"
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="form-select"
            >
              <option value="">Select Subject</option>
              {subjects.map((subject, index) => (
                <option key={index} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="course">Course / University Syllabus</label>
            <select
              id="course"
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              className="form-select"
            >
              <option value="">Select Course</option>
              {courses.map((course, index) => (
                <option key={index} value={course}>
                  {course}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="textbook">Reference Textbook</label>
            <select
              id="textbook"
              value={selectedTextbook}
              onChange={(e) => setSelectedTextbook(e.target.value)}
              className="form-select"
            >
              <option value="">Select Textbook</option>
              {textbooks.map((textbook, index) => (
                <option key={index} value={textbook}>
                  {textbook}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="goal">Preparation Goal</label>
            <select
              id="goal"
              value={selectedGoal}
              onChange={(e) => setSelectedGoal(e.target.value)}
              className="form-select"
            >
              <option value="">Select Goal</option>
              {preparationGoals.map((goal, index) => (
                <option key={index} value={goal}>
                  {goal}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className="continue-button">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}

export default EntryScreen;

