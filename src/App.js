import React, { useState, useEffect } from 'react';
import './App.css';
import EntryScreen from './components/EntryScreen/EntryScreen';
import SyllabusExplorer from './components/SyllabusExplorer/SyllabusExplorer';
import ConceptStudy from './components/ConceptStudy/ConceptStudy';
import { getConfigurationOptions, getSyllabus, getConceptDetails } from './services/dataService';

function App() {
  // Main app state management
  const [currentScreen, setCurrentScreen] = useState('entry');
  const [userConfig, setUserConfig] = useState(null);
  const [selectedConcept, setSelectedConcept] = useState(null);
  const [completedConcepts, setCompletedConcepts] = useState(new Set());
  
  // Data state - fetched from service layer
  const [configurationOptions, setConfigurationOptions] = useState(null);
  const [syllabus, setSyllabus] = useState(null);
  const [conceptDetails, setConceptDetails] = useState(null);

  // Load configuration options on mount
  useEffect(() => {
    const options = getConfigurationOptions();
    setConfigurationOptions(options);
  }, []);

  // Handle configuration submission from entry screen
  const handleConfigSubmit = (config) => {
    setUserConfig(config);
    // Fetch syllabus data based on configuration
    const syllabusData = getSyllabus(config);
    setSyllabus(syllabusData);
    setCurrentScreen('syllabus');
  };

  // Handle concept selection from syllabus explorer
  const handleConceptSelect = (concept) => {
    setSelectedConcept(concept);
    // Fetch concept details
    const details = getConceptDetails(concept.id);
    setConceptDetails(details);
    setCurrentScreen('concept');
  };

  // Handle back navigation
  const handleBackToSyllabus = () => {
    setCurrentScreen('syllabus');
    setSelectedConcept(null);
    setConceptDetails(null);
  };

  // Handle concept completion
  const handleConceptComplete = (conceptId) => {
    setCompletedConcepts(prev => new Set([...prev, conceptId]));
  };

  // Render current screen based on state
  return (
    <div className="app">
      {currentScreen === 'entry' && configurationOptions && (
        <EntryScreen
          configurationOptions={configurationOptions}
          onConfigSubmit={handleConfigSubmit}
        />
      )}
      
      {currentScreen === 'syllabus' && userConfig && syllabus && (
        <SyllabusExplorer
          config={userConfig}
          syllabus={syllabus}
          onConceptSelect={handleConceptSelect}
          completedConcepts={completedConcepts}
        />
      )}
      
      {currentScreen === 'concept' && selectedConcept && conceptDetails && (
        <ConceptStudy
          concept={selectedConcept}
          conceptDetails={conceptDetails}
          onBack={handleBackToSyllabus}
          onComplete={handleConceptComplete}
          isCompleted={completedConcepts.has(selectedConcept.id)}
        />
      )}
    </div>
  );
}

export default App;

