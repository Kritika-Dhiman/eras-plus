# Data Service Layer

## Overview

The data service layer (`dataService.js`) abstracts all data access from UI components. This allows for easy replacement of mock data with API calls without modifying any component code.

## Current Implementation

Currently, the service uses mock data from `../data/mocks/mockData.js`. All methods are synchronous and return data directly.

## Switching to API Calls

To replace mock data with API calls, follow these steps:

### 1. Update `dataService.js`

Convert methods to async functions and use fetch/axios:

```javascript
// Before (mock data):
export const getConfigurationOptions = () => {
  return {
    subjects,
    courses,
    textbooks,
    preparationGoals
  };
};

// After (API calls):
export const getConfigurationOptions = async () => {
  try {
    const response = await fetch('/api/configuration-options');
    if (!response.ok) throw new Error('Failed to fetch configuration options');
    return await response.json();
  } catch (error) {
    console.error('Error fetching configuration options:', error);
    throw error;
  }
};
```

### 2. Update `App.js`

Since methods become async, update App.js to handle promises:

```javascript
// Before:
useEffect(() => {
  const options = getConfigurationOptions();
  setConfigurationOptions(options);
}, []);

// After:
useEffect(() => {
  const loadOptions = async () => {
    try {
      const options = await getConfigurationOptions();
      setConfigurationOptions(options);
    } catch (error) {
      // Handle error (show error message, etc.)
      console.error('Failed to load configuration options:', error);
    }
  };
  loadOptions();
}, []);
```

### 3. Update Other Data Fetching

Similarly update other data fetching in App.js:

```javascript
// Before:
const handleConfigSubmit = (config) => {
  setUserConfig(config);
  const syllabusData = getSyllabus(config);
  setSyllabus(syllabusData);
  setCurrentScreen('syllabus');
};

// After:
const handleConfigSubmit = async (config) => {
  setUserConfig(config);
  try {
    const syllabusData = await getSyllabus(config);
    setSyllabus(syllabusData);
    setCurrentScreen('syllabus');
  } catch (error) {
    // Handle error
    console.error('Failed to load syllabus:', error);
  }
};
```

### 4. Add Loading States (Optional but Recommended)

Add loading indicators while data is being fetched:

```javascript
const [isLoading, setIsLoading] = useState(false);

const handleConfigSubmit = async (config) => {
  setIsLoading(true);
  setUserConfig(config);
  try {
    const syllabusData = await getSyllabus(config);
    setSyllabus(syllabusData);
    setCurrentScreen('syllabus');
  } catch (error) {
    // Handle error
  } finally {
    setIsLoading(false);
  }
};
```

## Service Methods

### `getConfigurationOptions()`
Returns configuration dropdown options (subjects, courses, textbooks, goals).

### `getSyllabus(config)`
Returns syllabus structure for given configuration.
- Parameters: `config` object with `subject`, `course`, `textbook`
- Returns: Syllabus object with units, topics, and concepts

### `getConceptDetails(conceptId)`
Returns detailed information for a specific concept.
- Parameters: `conceptId` string
- Returns: Concept details object

### `getAllConcepts(config)`
Returns a flattened list of all concepts in a syllabus.
- Parameters: `config` object
- Returns: Array of concept objects

## Benefits of This Architecture

1. **Separation of Concerns**: UI components don't know about data sources
2. **Easy Testing**: Mock the service layer in tests
3. **Flexible**: Switch between mock data, API, local storage, etc.
4. **Maintainable**: All data access logic in one place
5. **Future-Proof**: Ready for backend integration

## Notes

- Components receive data via props, never import data directly
- Service layer is the single source of truth for data access
- Error handling should be added when switching to API calls
- Consider adding caching/state management (Redux, Context) for complex apps

