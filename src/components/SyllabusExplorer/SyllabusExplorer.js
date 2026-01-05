import React, { useState } from 'react';
import './SyllabusExplorer.css';

/**
 * SyllabusExplorer Component
 * Receives syllabus data via props (no direct data imports)
 */
function SyllabusExplorer({ config, syllabus, onConceptSelect, completedConcepts }) {
  const [expandedUnits, setExpandedUnits] = useState(new Set());
  const [expandedTopics, setExpandedTopics] = useState(new Set());
  const [selectedConcept, setSelectedConcept] = useState(null);

  // Toggle unit expansion
  const toggleUnit = (unitId) => {
    setExpandedUnits(prev => {
      const newSet = new Set(prev);
      if (newSet.has(unitId)) {
        newSet.delete(unitId);
      } else {
        newSet.add(unitId);
      }
      return newSet;
    });
  };

  // Toggle topic expansion
  const toggleTopic = (topicId) => {
    setExpandedTopics(prev => {
      const newSet = new Set(prev);
      if (newSet.has(topicId)) {
        newSet.delete(topicId);
      } else {
        newSet.add(topicId);
      }
      return newSet;
    });
  };

  // Handle concept selection
  const handleConceptClick = (concept) => {
    setSelectedConcept(concept);
    onConceptSelect(concept);
  };

  // Check if concept is completed
  const isConceptCompleted = (conceptId) => {
    return completedConcepts.has(conceptId);
  };

  if (!syllabus) {
    return (
      <div className="syllabus-explorer">
        <div className="error-message">
          <p>Syllabus data not available for the selected configuration.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="syllabus-explorer">
      <header className="explorer-header">
        <h2>Syllabus Explorer</h2>
        <div className="config-info">
          <span>{config.subject} • {config.course}</span>
        </div>
      </header>

      <div className="explorer-layout">
        {/* Left Sidebar - Tree Structure */}
        <aside className="sidebar">
          <div className="tree-container">
            {syllabus.units.map((unit) => (
              <div key={unit.id} className="tree-item">
                <div
                  className="tree-node unit-node"
                  onClick={() => toggleUnit(unit.id)}
                >
                  <span className="tree-icon">
                    {expandedUnits.has(unit.id) ? '▼' : '▶'}
                  </span>
                  <span className="tree-label">{unit.name}</span>
                </div>

                {expandedUnits.has(unit.id) && (
                  <div className="tree-children">
                    {unit.topics.map((topic) => (
                      <div key={topic.id} className="tree-item">
                        <div
                          className="tree-node topic-node"
                          onClick={() => toggleTopic(topic.id)}
                        >
                          <span className="tree-icon">
                            {expandedTopics.has(topic.id) ? '▼' : '▶'}
                          </span>
                          <span className="tree-label">{topic.name}</span>
                        </div>

                        {expandedTopics.has(topic.id) && (
                          <div className="tree-children">
                            {topic.concepts.map((concept) => (
                              <div
                                key={concept.id}
                                className={`tree-node concept-node ${
                                  isConceptCompleted(concept.id) ? 'completed' : ''
                                } ${selectedConcept?.id === concept.id ? 'selected' : ''}`}
                                onClick={() => handleConceptClick(concept)}
                              >
                                <span className="tree-icon">•</span>
                                <span className="tree-label">{concept.name}</span>
                                {isConceptCompleted(concept.id) && (
                                  <span className="checkmark">✓</span>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </aside>

        {/* Main Panel - Concept Overview */}
        <main className="main-panel">
          {selectedConcept ? (
            <div className="concept-overview">
              <h3>{selectedConcept.name}</h3>
              <p className="concept-description">{selectedConcept.description}</p>
              <div className="concept-meta">
                <span className={`meta-badge ${selectedConcept.requiresDiagram ? 'active' : ''}`}>
                  {selectedConcept.requiresDiagram ? 'Has Diagram' : 'No Diagram'}
                </span>
                <span className={`meta-badge ${selectedConcept.hasNumericals ? 'active' : ''}`}>
                  {selectedConcept.hasNumericals ? 'Has Numericals' : 'No Numericals'}
                </span>
              </div>
              <button
                className="study-button"
                onClick={() => handleConceptClick(selectedConcept)}
              >
                Study This Concept
              </button>
            </div>
          ) : (
            <div className="empty-state">
              <p>Select a concept from the sidebar to view details</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default SyllabusExplorer;

