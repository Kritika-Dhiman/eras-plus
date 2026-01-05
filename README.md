# ERAS+ (Exam Representation Alignment System)

A professional academic intelligence web application that guides students from concept selection → understanding → exam-ready answers.

## Overview

ERAS+ is a React-based frontend application designed for serious exam preparation. It provides a structured learning path with exam-focused content, helping students understand concepts and prepare answers in various formats required by examiners.

## Tech Stack

- **React 18.2.0** - JavaScript only (no TypeScript)
- **Functional Components & Hooks** - Modern React patterns
- **CSS3** - Custom styling for professional academic look
- **Mock Data** - JSON-based data structure for syllabus and concepts

## Project Structure

```
eras-plus/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── EntryScreen/
│   │   │   ├── EntryScreen.js
│   │   │   └── EntryScreen.css
│   │   ├── SyllabusExplorer/
│   │   │   ├── SyllabusExplorer.js
│   │   │   └── SyllabusExplorer.css
│   │   └── ConceptStudy/
│   │       ├── ConceptStudy.js
│   │       └── ConceptStudy.css
│   ├── data/
│   │   └── mockData.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Frontend Flow

### 1. Entry / Configuration Screen

**Location:** `src/components/EntryScreen/EntryScreen.js`

**Purpose:** Initial screen where users configure their study session.

**Features:**
- Dropdown selection for:
  - Subject (Physics, Chemistry, Mathematics, etc.)
  - Course / University syllabus
  - Reference textbook
  - Preparation goal (Revision / Conceptual / Exam-oriented)
- "Continue" button to proceed to syllabus explorer

**User Flow:**
1. User selects all required options
2. Clicks "Continue"
3. Configuration is passed to App.js state
4. Screen transitions to Syllabus Explorer

**State Management:**
- Uses `useState` hooks for each dropdown
- Validates all fields before submission
- Passes configuration object to parent via `onConfigSubmit` callback

---

### 2. Syllabus Explorer Screen

**Location:** `src/components/SyllabusExplorer/SyllabusExplorer.js`

**Purpose:** Browse and navigate through the syllabus structure.

**Layout:**
- **Left Sidebar:** Collapsible tree structure
  - Units → Topics → Concepts (hierarchical navigation)
  - Visual indicators for completed concepts (✓)
  - Selected concept highlighting
- **Main Panel:** Concept overview
  - Displays selected concept name and description
  - Shows metadata (diagram availability, numericals)
  - "Study This Concept" button

**Features:**
- Expandable/collapsible units and topics
- Concept selection updates main panel
- Visual feedback for completed concepts
- Progress tracking integration

**User Flow:**
1. User expands units and topics in sidebar
2. Clicks on a concept
3. Main panel shows concept overview
4. Clicking "Study This Concept" navigates to Concept Study screen

**State Management:**
- `expandedUnits` - Set of expanded unit IDs
- `expandedTopics` - Set of expanded topic IDs
- `selectedConcept` - Currently selected concept object
- Receives `completedConcepts` from App.js for progress display

---

### 3. Concept Study Screen (MOST IMPORTANT)

**Location:** `src/components/ConceptStudy/ConceptStudy.js`

**Purpose:** Comprehensive study interface with multiple learning sections.

**Layout:**
- **Header:** Concept name, back button, completion status
- **Left Tab Navigation:** Section selector
- **Main Content Area:** Tab-specific content

**Sections (Tabs):**

#### A. Concept Understanding
- Simple, clear explanation text
- No formulas or exam formatting
- Focus on conceptual clarity

#### B. Diagram Guidance (Conditional)
- Only shown if concept requires diagram
- Diagram description
- List of key labels
- Visual guidance for drawing

#### C. Exam Answer Formats
- Three format buttons: Short / Medium / Long Answer
- Each format displays structured exam-style answer:
  - Proper headings and subheadings
  - Formatted text with appropriate spacing
  - Academic writing style
- Answers are pre-formatted for exam readiness

#### D. Numericals (Conditional)
- Only shown if concept has numerical problems
- Step-by-step problem-solving framework
- Common mistakes list
- Theory-to-practice guidance

#### E. Examiner Alignment
- **Preferred Keywords:** Tagged list of important terms
- **Notation:** Standard notation guidelines
- **Risky Phrasing:** Phrases to avoid in exams

#### F. Revision Notes
- **Key Points:** Bullet-point summary
- **Key Formulas:** List of essential formulas
- **Diagram Reminders:** Quick reference for diagrams

**Features:**
- Tab-based navigation between sections
- Conditional rendering (diagrams/numericals only when needed)
- "Mark as Complete" functionality
- Progress tracking integration
- Back navigation to syllabus

**User Flow:**
1. User selects a section from tab navigation
2. Content updates based on selected tab
3. For Exam Answers: User selects format (Short/Medium/Long)
4. Formatted answer displays
5. User can mark concept as complete
6. Progress is saved in App.js state

**State Management:**
- `activeTab` - Current section being viewed
- `selectedAnswerFormat` - Selected exam answer format
- Calls `onComplete` callback to update progress in App.js

---

### 4. Progress Tracking

**Location:** Integrated across components

**Features:**
- Concept completion status stored in App.js
- Visual indicators in Syllabus Explorer (✓ checkmark)
- Completion badge in Concept Study header
- Persistent during session (stored in React state)

**Implementation:**
- App.js maintains `completedConcepts` Set
- Concept IDs are added when user marks concept complete
- Status is passed down to components for display

---

## Data Structure

### Mock Data Location: `src/data/mockData.js`

**Structure:**
```javascript
{
  subjects: [...],
  courses: [...],
  textbooks: [...],
  preparationGoals: [...],
  mockSyllabus: {
    'Subject': {
      'Course': {
        'Textbook': {
          units: [
            {
              id: 'unit1',
              name: 'Unit Name',
              topics: [
                {
                  id: 'topic1',
                  name: 'Topic Name',
                  concepts: [
                    {
                      id: 'concept1',
                      name: 'Concept Name',
                      description: '...',
                      requiresDiagram: true/false,
                      hasNumericals: true/false
                    }
                  ]
                }
              ]
            }
          ]
        }
      }
    }
  },
  conceptDetails: {
    'conceptId': {
      understanding: '...',
      diagram: {...},
      examAnswers: {
        short: {...},
        medium: {...},
        long: {...}
      },
      numericals: {...},
      examinerAlignment: {...},
      revisionNotes: {...}
    }
  }
}
```

---

## State Management Flow

```
App.js (Root)
├── currentScreen: 'entry' | 'syllabus' | 'concept'
├── userConfig: { subject, course, textbook, goal }
├── selectedConcept: concept object
└── completedConcepts: Set of concept IDs
    │
    ├── EntryScreen
    │   └── Local state for form inputs
    │
    ├── SyllabusExplorer
    │   ├── expandedUnits: Set
    │   ├── expandedTopics: Set
    │   └── selectedConcept: concept object
    │
    └── ConceptStudy
        ├── activeTab: string
        └── selectedAnswerFormat: string
```

---

## Installation & Setup

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Start Development Server:**
   ```bash
   npm start
   ```

3. **Build for Production:**
   ```bash
   npm run build
   ```

---

## Design Philosophy

### UI/UX Principles:
- **Professional Academic Look:** Clean, serious design suitable for exam preparation
- **Neutral Colors:** White, gray, and blue palette
- **Clean Typography:** Readable fonts with proper hierarchy
- **Responsive Layout:** Works on desktop and mobile
- **No Flashy Visuals:** Focus on content, not decoration

### Code Principles:
- **Beginner-Readable:** Clear variable names, comments, and structure
- **Functional Components:** Modern React patterns
- **JavaScript Only:** No TypeScript complexity
- **Data-Driven:** Mock data structure allows easy content updates
- **Modular:** Each screen is a separate component

---

## Key Features

✅ **Complete User Flow:** Entry → Syllabus → Concept Study  
✅ **Tab-Based Learning:** Organized sections for different study needs  
✅ **Exam Answer Formats:** Pre-formatted Short/Medium/Long answers  
✅ **Progress Tracking:** Mark concepts as completed  
✅ **Conditional Content:** Diagrams and numericals only when needed  
✅ **Examiner Alignment:** Keywords, notation, and phrasing guidance  
✅ **Revision Notes:** Quick reference for exam preparation  

---

## Future Enhancements (Not Implemented Yet)

- Backend API integration
- User authentication
- Persistent progress storage (database)
- Search functionality
- Advanced filtering
- Export notes feature
- Practice questions

---

## Notes for Developers

- All components use functional components and hooks
- State is managed at appropriate levels (local vs. app-level)
- Mock data can be easily extended with more concepts
- CSS is component-scoped for maintainability
- No external routing library (simple conditional rendering)
- Code is commented for clarity

---

## License

This project is part of the ERAS+ academic intelligence system.
