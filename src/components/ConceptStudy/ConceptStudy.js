import React, { useState } from 'react';
import './ConceptStudy.css';

/**
 * ConceptStudy Component
 * Receives concept details via props (no direct data imports)
 */
function ConceptStudy({ concept, conceptDetails, onBack, onComplete, isCompleted }) {
  const [activeTab, setActiveTab] = useState('understanding');
  const [selectedAnswerFormat, setSelectedAnswerFormat] = useState(null);

  // Use concept details from props
  const conceptData = conceptDetails;

  if (!conceptData) {
    return (
      <div className="concept-study">
        <div className="error-message">
          <p>Concept details not available.</p>
          <button onClick={onBack} className="back-button">Back to Syllabus</button>
        </div>
      </div>
    );
  }

  // Handle mark as complete
  const handleMarkComplete = () => {
    onComplete(concept.id);
  };

  // Render tab content based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case 'understanding':
        return (
          <div className="tab-content">
            <h3>Concept Understanding</h3>
            <div className="content-section">
              <p className="understanding-text">{conceptData.understanding}</p>
            </div>
          </div>
        );

      case 'diagram':
        if (!conceptData.diagram || !conceptData.diagram.required) {
          return (
            <div className="tab-content">
              <p className="no-content">This concept does not require a diagram.</p>
            </div>
          );
        }
        return (
          <div className="tab-content">
            <h3>Diagram Guidance</h3>
            <div className="content-section">
              <div className="diagram-description">
                <h4>Diagram Description</h4>
                <p>{conceptData.diagram.description}</p>
              </div>
              <div className="diagram-labels">
                <h4>Key Labels</h4>
                <ul>
                  {conceptData.diagram.labels.map((label, index) => (
                    <li key={index}>{label}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );

      case 'exam-answers':
        return (
          <div className="tab-content">
            <h3>Exam Answer Formats</h3>
            <div className="content-section">
              <div className="answer-format-buttons">
                <button
                  className={`format-button ${selectedAnswerFormat === 'short' ? 'active' : ''}`}
                  onClick={() => setSelectedAnswerFormat('short')}
                >
                  Short Answer
                </button>
                <button
                  className={`format-button ${selectedAnswerFormat === 'medium' ? 'active' : ''}`}
                  onClick={() => setSelectedAnswerFormat('medium')}
                >
                  Medium Answer
                </button>
                <button
                  className={`format-button ${selectedAnswerFormat === 'long' ? 'active' : ''}`}
                  onClick={() => setSelectedAnswerFormat('long')}
                >
                  Long Answer
                </button>
              </div>

              {selectedAnswerFormat && conceptData.examAnswers[selectedAnswerFormat] && (
                <div className="answer-display">
                  <h4>{conceptData.examAnswers[selectedAnswerFormat].title}</h4>
                  <div className="answer-content">
                    {conceptData.examAnswers[selectedAnswerFormat].content
                      .split('\n')
                      .map((line, index) => {
                        // Format headings (lines that are all caps or have specific patterns)
                        if (line.trim() && line.trim().length < 50 && !line.startsWith(' ') && !line.startsWith('-')) {
                          return (
                            <p key={index} className="answer-heading">
                              {line}
                            </p>
                          );
                        } else if (line.trim().startsWith('-')) {
                          return (
                            <p key={index} className="answer-bullet">
                              {line}
                            </p>
                          );
                        } else if (line.trim() === '') {
                          return <br key={index} />;
                        } else {
                          return (
                            <p key={index} className="answer-text">
                              {line}
                            </p>
                          );
                        }
                      })}
                  </div>
                </div>
              )}
            </div>
          </div>
        );

      case 'numericals':
        if (!conceptData.numericals || !conceptData.numericals.hasNumericals) {
          return (
            <div className="tab-content">
              <p className="no-content">This concept does not have numerical problems.</p>
            </div>
          );
        }
        return (
          <div className="tab-content">
            <h3>Numericals</h3>
            <div className="content-section">
              <div className="numerical-framework">
                <h4>Step-by-Step Framework</h4>
                <div className="framework-content">
                  {conceptData.numericals.framework
                    .split('\n')
                    .map((line, index) => {
                      if (line.trim() === '') {
                        return <br key={index} />;
                      }
                      return (
                        <p key={index} className="framework-line">
                          {line}
                        </p>
                      );
                    })}
                </div>
              </div>
              <div className="common-mistakes">
                <h4>Common Mistakes</h4>
                <ul>
                  {conceptData.numericals.commonMistakes.map((mistake, index) => (
                    <li key={index}>{mistake}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );

      case 'examiner':
        return (
          <div className="tab-content">
            <h3>Examiner Alignment</h3>
            <div className="content-section">
              <div className="alignment-section">
                <h4>Preferred Keywords</h4>
                <div className="keywords-list">
                  {conceptData.examinerAlignment.keywords.map((keyword, index) => (
                    <span key={index} className="keyword-tag">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
              <div className="alignment-section">
                <h4>Notation</h4>
                <p className="notation-text">{conceptData.examinerAlignment.notation}</p>
              </div>
              <div className="alignment-section">
                <h4>Risky Phrasing to Avoid</h4>
                <ul>
                  {conceptData.examinerAlignment.riskyPhrasing.map((phrase, index) => (
                    <li key={index} className="risky-phrase">{phrase}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );

      case 'revision':
        return (
          <div className="tab-content">
            <h3>Revision Notes</h3>
            <div className="content-section">
              <div className="revision-section">
                <h4>Key Points</h4>
                <ul>
                  {conceptData.revisionNotes.bullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>
              </div>
              <div className="revision-section">
                <h4>Key Formulas</h4>
                <ul className="formulas-list">
                  {conceptData.revisionNotes.formulas.map((formula, index) => (
                    <li key={index} className="formula-item">{formula}</li>
                  ))}
                </ul>
              </div>
              <div className="revision-section">
                <h4>Diagram Reminders</h4>
                <ul>
                  {conceptData.revisionNotes.diagramReminders.map((reminder, index) => (
                    <li key={index}>{reminder}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="concept-study">
      <header className="study-header">
        <button onClick={onBack} className="back-button">
          ← Back to Syllabus
        </button>
        <h2>{concept.name}</h2>
        <div className="header-actions">
          {isCompleted ? (
            <span className="completed-badge">✓ Completed</span>
          ) : (
            <button onClick={handleMarkComplete} className="complete-button">
              Mark as Complete
            </button>
          )}
        </div>
      </header>

      <div className="study-layout">
        {/* Tab Navigation */}
        <nav className="tab-navigation">
          <button
            className={`tab-button ${activeTab === 'understanding' ? 'active' : ''}`}
            onClick={() => setActiveTab('understanding')}
          >
            Understanding
          </button>
          {conceptData.diagram && conceptData.diagram.required && (
            <button
              className={`tab-button ${activeTab === 'diagram' ? 'active' : ''}`}
              onClick={() => setActiveTab('diagram')}
            >
              Diagram
            </button>
          )}
          <button
            className={`tab-button ${activeTab === 'exam-answers' ? 'active' : ''}`}
            onClick={() => setActiveTab('exam-answers')}
          >
            Exam Answers
          </button>
          {conceptData.numericals && conceptData.numericals.hasNumericals && (
            <button
              className={`tab-button ${activeTab === 'numericals' ? 'active' : ''}`}
              onClick={() => setActiveTab('numericals')}
            >
              Numericals
            </button>
          )}
          <button
            className={`tab-button ${activeTab === 'examiner' ? 'active' : ''}`}
            onClick={() => setActiveTab('examiner')}
          >
            Examiner Alignment
          </button>
          <button
            className={`tab-button ${activeTab === 'revision' ? 'active' : ''}`}
            onClick={() => setActiveTab('revision')}
          >
            Revision Notes
          </button>
        </nav>

        {/* Tab Content */}
        <main className="study-content">
          {renderTabContent()}
        </main>
      </div>
    </div>
  );
}

export default ConceptStudy;

