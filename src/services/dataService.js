/**
 * Data Service Layer
 * 
 * This service abstracts all data access from components.
 * Currently uses mock data, but can be easily replaced with API calls.
 * 
 * To switch to API calls:
 * 1. Replace mock imports with fetch/axios calls
 * 2. Convert methods to async/await
 * 3. Add error handling
 * 4. Components won't need any changes
 */

import {
  subjects,
  courses,
  textbooks,
  preparationGoals,
  mockSyllabus,
  conceptDetails
} from '../data/mocks/mockData';

/**
 * Get configuration options for the entry screen
 * @returns {Object} Object containing subjects, courses, textbooks, and preparationGoals arrays
 */
export const getConfigurationOptions = () => {
  // In future: return fetch('/api/configuration-options').then(res => res.json())
  return {
    subjects,
    courses,
    textbooks,
    preparationGoals
  };
};

/**
 * Get syllabus structure based on user configuration
 * @param {Object} config - Configuration object with subject, course, and textbook
 * @returns {Object|null} Syllabus object with units, topics, and concepts, or null if not found
 */
export const getSyllabus = (config) => {
  // In future: return fetch(`/api/syllabus?subject=${config.subject}&course=${config.course}&textbook=${config.textbook}`).then(res => res.json())
  if (!config || !config.subject || !config.course || !config.textbook) {
    return null;
  }
  
  return mockSyllabus[config.subject]?.[config.course]?.[config.textbook] || null;
};

/**
 * Get detailed concept information
 * @param {string} conceptId - The ID of the concept
 * @returns {Object|null} Detailed concept data or null if not found
 */
export const getConceptDetails = (conceptId) => {
  // In future: return fetch(`/api/concepts/${conceptId}`).then(res => res.json())
  if (!conceptId) {
    return null;
  }
  
  return conceptDetails[conceptId] || null;
};

/**
 * Get all concepts from a syllabus (flattened list)
 * @param {Object} config - Configuration object with subject, course, and textbook
 * @returns {Array} Array of all concepts in the syllabus
 */
export const getAllConcepts = (config) => {
  // In future: return fetch(`/api/concepts?subject=${config.subject}&course=${config.course}&textbook=${config.textbook}`).then(res => res.json())
  const syllabus = getSyllabus(config);
  if (!syllabus) {
    return [];
  }
  
  const concepts = [];
  syllabus.units.forEach(unit => {
    unit.topics.forEach(topic => {
      topic.concepts.forEach(concept => {
        concepts.push(concept);
      });
    });
  });
  
  return concepts;
};


