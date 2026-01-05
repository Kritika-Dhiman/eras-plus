// Mock data for ERAS+ application
// This simulates syllabus, concepts, and exam format data
// This file will be replaced with API calls in the future

export const subjects = [
  'Physics',
  'Chemistry',
  'Mathematics',
  'Biology',
  'Computer Science'
];

export const courses = [
  'B.Tech First Year',
  'B.Sc Physics',
  'M.Sc Physics',
  'Engineering Physics',
  'Applied Physics'
];

export const textbooks = [
  'Halliday & Resnick - Fundamentals of Physics',
  'Sears & Zemansky - University Physics',
  'Griffiths - Introduction to Electrodynamics',
  'Kleppner & Kolenkow - An Introduction to Mechanics'
];

export const preparationGoals = [
  'Revision',
  'Conceptual',
  'Exam-oriented'
];

// Mock syllabus structure: Units -> Topics -> Concepts
export const mockSyllabus = {
  'Physics': {
    'B.Tech First Year': {
      'Halliday & Resnick - Fundamentals of Physics': {
        units: [
          {
            id: 'unit1',
            name: 'Mechanics',
            topics: [
              {
                id: 'topic1',
                name: 'Kinematics',
                concepts: [
                  {
                    id: 'concept1',
                    name: 'Motion in One Dimension',
                    description: 'Understanding displacement, velocity, and acceleration in straight-line motion',
                    requiresDiagram: true,
                    hasNumericals: true
                  },
                  {
                    id: 'concept2',
                    name: 'Projectile Motion',
                    description: 'Two-dimensional motion under constant acceleration',
                    requiresDiagram: true,
                    hasNumericals: true
                  }
                ]
              },
              {
                id: 'topic2',
                name: 'Dynamics',
                concepts: [
                  {
                    id: 'concept3',
                    name: 'Newton\'s Laws of Motion',
                    description: 'Fundamental principles governing motion and forces',
                    requiresDiagram: false,
                    hasNumericals: true
                  },
                  {
                    id: 'concept4',
                    name: 'Work and Energy',
                    description: 'Conservation of energy and work-energy theorem',
                    requiresDiagram: false,
                    hasNumericals: true
                  }
                ]
              }
            ]
          },
          {
            id: 'unit2',
            name: 'Thermodynamics',
            topics: [
              {
                id: 'topic3',
                name: 'Heat and Temperature',
                concepts: [
                  {
                    id: 'concept5',
                    name: 'First Law of Thermodynamics',
                    description: 'Energy conservation in thermodynamic systems',
                    requiresDiagram: true,
                    hasNumericals: true
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  }
};

// Detailed concept data for each concept
export const conceptDetails = {
  'concept1': {
    id: 'concept1',
    name: 'Motion in One Dimension',
    understanding: 'Motion in one dimension refers to movement along a straight line. The key parameters are displacement (change in position), velocity (rate of change of displacement), and acceleration (rate of change of velocity). When acceleration is constant, we can use kinematic equations to describe the motion.',
    diagram: {
      required: true,
      description: 'Position-time graph showing displacement, velocity-time graph showing acceleration',
      labels: ['Time (t)', 'Position (x)', 'Velocity (v)', 'Acceleration (a)']
    },
    examAnswers: {
      short: {
        title: 'Short Answer Format',
        content: `Motion in One Dimension

Motion along a straight line is characterized by:
- Displacement: Δx = x₂ - x₁
- Average velocity: v_avg = Δx/Δt
- Instantaneous velocity: v = dx/dt
- Acceleration: a = dv/dt

For constant acceleration:
v = v₀ + at
x = x₀ + v₀t + ½at²
v² = v₀² + 2a(x - x₀)`
      },
      medium: {
        title: 'Medium Answer Format',
        content: `Motion in One Dimension

Definition:
Motion in one dimension refers to movement along a single straight line. The position of an object is described by a single coordinate, typically denoted as x(t).

Key Concepts:

1. Displacement and Distance
   - Displacement (Δx): Vector quantity representing change in position
   - Distance: Scalar quantity representing total path length
   - Displacement can be positive or negative depending on direction

2. Velocity
   - Average velocity: v_avg = Δx/Δt
   - Instantaneous velocity: v = lim(Δt→0) Δx/Δt = dx/dt
   - Velocity indicates both speed and direction

3. Acceleration
   - Average acceleration: a_avg = Δv/Δt
   - Instantaneous acceleration: a = dv/dt = d²x/dt²
   - Acceleration can be constant or variable

Kinematic Equations (Constant Acceleration):
- v = v₀ + at
- x = x₀ + v₀t + ½at²
- v² = v₀² + 2a(x - x₀)
- x = x₀ + ½(v₀ + v)t

Applications:
These equations are fundamental for solving problems involving free fall, motion on inclined planes, and any scenario with constant acceleration.`
      },
      long: {
        title: 'Long Answer Format',
        content: `Motion in One Dimension

Introduction:
Motion in one dimension is the simplest form of motion, where an object moves along a straight line. This fundamental concept forms the basis for understanding more complex two and three-dimensional motions.

1. Position and Displacement

Position (x):
The position of an object at any time t is given by its coordinate along the line of motion. The origin (x = 0) is chosen arbitrarily as a reference point.

Displacement (Δx):
Displacement is a vector quantity defined as the change in position:
Δx = x₂ - x₁

Key points:
- Displacement is independent of the path taken
- It can be positive, negative, or zero
- It has both magnitude and direction
- Distance traveled is the magnitude of displacement only for straight-line motion without direction reversal

2. Velocity

Average Velocity:
The average velocity over a time interval Δt is:
v_avg = Δx/Δt = (x₂ - x₁)/(t₂ - t₁)

Instantaneous Velocity:
The instantaneous velocity at time t is the limit of average velocity as Δt approaches zero:
v = lim(Δt→0) Δx/Δt = dx/dt

Physical interpretation:
- Velocity is the rate of change of position
- Positive velocity indicates motion in the positive direction
- Negative velocity indicates motion in the negative direction
- Speed is the magnitude of velocity (always positive)

3. Acceleration

Average Acceleration:
a_avg = Δv/Δt = (v₂ - v₁)/(t₂ - t₁)

Instantaneous Acceleration:
a = dv/dt = d²x/dt²

Acceleration indicates how quickly velocity changes:
- Positive acceleration: velocity increasing in positive direction
- Negative acceleration (deceleration): velocity decreasing
- Constant acceleration simplifies calculations significantly

4. Kinematic Equations for Constant Acceleration

When acceleration is constant, we derive four key equations:

Equation 1: v = v₀ + at
Derived from: a = dv/dt, integrating gives v = v₀ + at

Equation 2: x = x₀ + v₀t + ½at²
Derived from: v = dx/dt, substituting and integrating

Equation 3: v² = v₀² + 2a(x - x₀)
Derived by eliminating time from equations 1 and 2

Equation 4: x = x₀ + ½(v₀ + v)t
Average velocity method

5. Graphical Representation

Position-Time Graph:
- Slope represents velocity
- Curvature indicates acceleration
- Straight line: constant velocity
- Parabola: constant acceleration

Velocity-Time Graph:
- Slope represents acceleration
- Area under curve represents displacement
- Horizontal line: constant velocity

Acceleration-Time Graph:
- Area under curve represents change in velocity

6. Applications

Free Fall:
Objects under gravity experience constant acceleration (g ≈ 9.8 m/s² downward). All kinematic equations apply with a = -g (if upward is positive).

Motion on Inclined Planes:
Component of gravity along the incline provides constant acceleration.

Conclusion:
Understanding one-dimensional motion is essential for physics. The concepts of displacement, velocity, and acceleration, along with the kinematic equations, provide a complete framework for analyzing motion with constant acceleration.`
      }
    },
    numericals: {
      hasNumericals: true,
      framework: `Step-by-Step Numerical Problem Solving Framework:

1. Identify Given Quantities
   - List all known values with units
   - Identify what needs to be found

2. Choose Appropriate Equation
   - Select kinematic equation(s) that connect known and unknown quantities
   - Ensure consistent sign convention

3. Substitute Values
   - Replace variables with numerical values
   - Maintain unit consistency

4. Solve for Unknown
   - Perform algebraic manipulation
   - Calculate numerical result

5. Verify Answer
   - Check units
   - Verify reasonableness of result
   - Check sign convention`,
      commonMistakes: [
        'Forgetting to convert units (e.g., km/h to m/s)',
        'Using incorrect sign for acceleration in free fall',
        'Confusing displacement with distance traveled',
        'Mixing up initial and final velocities',
        'Not accounting for direction when velocity changes sign'
      ]
    },
    examinerAlignment: {
      keywords: ['displacement', 'velocity', 'acceleration', 'kinematic equations', 'instantaneous', 'constant acceleration'],
      notation: 'Use standard notation: x for position, v for velocity, a for acceleration, t for time. Subscripts: ₀ for initial, f for final.',
      riskyPhrasing: [
        'Avoid saying "speed" when you mean "velocity"',
        'Do not confuse "distance" with "displacement"',
        'Always specify direction for vector quantities',
        'Use "rate of change" rather than vague terms like "how fast"'
      ]
    },
    revisionNotes: {
      bullets: [
        'Displacement is a vector; distance is a scalar',
        'Velocity = slope of position-time graph',
        'Acceleration = slope of velocity-time graph',
        'Area under velocity-time graph = displacement',
        'For constant acceleration, use kinematic equations',
        'Free fall: a = -g (if upward is positive)'
      ],
      formulas: [
        'v = v₀ + at',
        'x = x₀ + v₀t + ½at²',
        'v² = v₀² + 2a(x - x₀)',
        'x = x₀ + ½(v₀ + v)t',
        'v_avg = Δx/Δt',
        'a_avg = Δv/Δt'
      ],
      diagramReminders: [
        'Draw position-time graph: slope = velocity',
        'Draw velocity-time graph: slope = acceleration, area = displacement',
        'Label axes clearly with units',
        'Mark initial conditions on graphs'
      ]
    }
  },
  'concept2': {
    id: 'concept2',
    name: 'Projectile Motion',
    understanding: 'Projectile motion is the motion of an object thrown or projected into the air, subject only to acceleration due to gravity. It follows a parabolic path and can be analyzed by separating horizontal and vertical components of motion.',
    diagram: {
      required: true,
      description: 'Parabolic trajectory showing initial velocity components, maximum height, and range',
      labels: ['Initial velocity (v₀)', 'Angle of projection (θ)', 'Maximum height (H)', 'Range (R)', 'Time of flight (T)']
    },
    examAnswers: {
      short: {
        title: 'Short Answer Format',
        content: `Projectile Motion

Projectile motion is two-dimensional motion under constant acceleration (gravity).

Key equations:
- Horizontal: x = v₀ₓt, v₀ₓ = v₀cosθ
- Vertical: y = v₀ᵧt - ½gt², v₀ᵧ = v₀sinθ
- Maximum height: H = (v₀²sin²θ)/(2g)
- Range: R = (v₀²sin2θ)/g
- Time of flight: T = (2v₀sinθ)/g`
      },
      medium: {
        title: 'Medium Answer Format',
        content: `Projectile Motion

Definition:
Projectile motion is the motion of an object projected into the air, moving under the influence of gravity alone. The path is a parabola.

Key Principles:

1. Independence of Motions
   Horizontal and vertical motions are independent:
   - Horizontal: constant velocity (no acceleration)
   - Vertical: constant acceleration (g downward)

2. Initial Velocity Components
   v₀ₓ = v₀cosθ (horizontal)
   v₀ᵧ = v₀sinθ (vertical)

3. Position Equations
   x(t) = v₀ₓt = v₀cosθ·t
   y(t) = v₀ᵧt - ½gt² = v₀sinθ·t - ½gt²

4. Velocity Components
   vₓ(t) = v₀ₓ = constant
   vᵧ(t) = v₀ᵧ - gt = v₀sinθ - gt

5. Key Parameters
   - Maximum height: H = (v₀²sin²θ)/(2g)
   - Range: R = (v₀²sin2θ)/g
   - Time of flight: T = (2v₀sinθ)/g
   - Maximum range occurs at θ = 45°`
      },
      long: {
        title: 'Long Answer Format',
        content: `Projectile Motion - Complete Analysis

Introduction:
Projectile motion is a classic example of two-dimensional motion where an object is launched with an initial velocity and moves under the sole influence of gravity. Understanding projectile motion requires analyzing horizontal and vertical components separately.

1. Fundamental Assumptions

- Acceleration due to gravity (g) is constant and directed downward
- Air resistance is negligible
- The motion occurs in a vertical plane
- Initial velocity has both horizontal and vertical components

2. Component Analysis

The key insight is that horizontal and vertical motions are independent:

Horizontal Motion:
- No acceleration (aₓ = 0)
- Constant velocity: vₓ = v₀ₓ = v₀cosθ
- Position: x = v₀ₓt = v₀cosθ·t

Vertical Motion:
- Constant acceleration: aᵧ = -g (downward)
- Initial velocity: v₀ᵧ = v₀sinθ
- Position: y = v₀ᵧt - ½gt² = v₀sinθ·t - ½gt²
- Velocity: vᵧ = v₀ᵧ - gt = v₀sinθ - gt

3. Trajectory Equation

Eliminating time from position equations:
y = x·tanθ - (gx²)/(2v₀²cos²θ)

This is the equation of a parabola, confirming the parabolic path.

4. Key Parameters

Maximum Height (H):
At maximum height, vertical velocity becomes zero:
vᵧ = 0 = v₀sinθ - gtₕ
tₕ = (v₀sinθ)/g

Substituting into vertical position equation:
H = (v₀²sin²θ)/(2g)

Time of Flight (T):
The projectile returns to initial height when y = 0:
0 = v₀sinθ·t - ½gt²
t = 0 or t = (2v₀sinθ)/g
T = (2v₀sinθ)/g

Range (R):
Range is horizontal distance when projectile returns to ground:
R = v₀ₓ·T = v₀cosθ·(2v₀sinθ)/g
R = (v₀²sin2θ)/g

Maximum Range:
Occurs when sin2θ = 1, i.e., 2θ = 90°, so θ = 45°
R_max = v₀²/g

5. Special Cases

Horizontal Projection (θ = 0°):
- v₀ₓ = v₀, v₀ᵧ = 0
- Motion is purely horizontal initially, then falls vertically

Vertical Projection (θ = 90°):
- v₀ₓ = 0, v₀ᵧ = v₀
- One-dimensional motion under gravity

6. Problem-Solving Strategy

1. Resolve initial velocity into components
2. Analyze horizontal and vertical motions separately
3. Use appropriate kinematic equations for each component
4. Relate components through common time parameter
5. Solve for required quantities

Conclusion:
Projectile motion demonstrates the power of component analysis in physics. By treating horizontal and vertical motions independently, we can solve complex two-dimensional problems using one-dimensional kinematic equations.`
      }
    },
    numericals: {
      hasNumericals: true,
      framework: `Projectile Motion Numerical Framework:

1. Identify Given Information
   - Initial velocity magnitude and angle
   - Initial height (if not ground level)
   - What needs to be calculated

2. Resolve Initial Velocity
   - v₀ₓ = v₀cosθ
   - v₀ᵧ = v₀sinθ

3. Choose Appropriate Equations
   - For height: use vertical motion equations
   - For range: use horizontal motion equations
   - For time: use vertical motion (easier to find when y = 0)

4. Solve Step by Step
   - Calculate time of flight if needed
   - Use time to find other quantities
   - Check units and reasonableness

5. Verify
   - Maximum height should be positive
   - Range should be positive
   - Time should be positive`,
      commonMistakes: [
        'Forgetting to resolve initial velocity into components',
        'Using wrong sign for acceleration (should be -g)',
        'Confusing maximum height time with total flight time',
        'Not accounting for initial height if projectile launched from elevation',
        'Using degrees instead of radians in calculator (if needed)'
      ]
    },
    examinerAlignment: {
      keywords: ['projectile', 'trajectory', 'parabolic path', 'range', 'maximum height', 'time of flight', 'component analysis'],
      notation: 'Use: v₀ for initial velocity, θ for angle, H for height, R for range, T for time. Subscripts: ₓ for horizontal, ᵧ for vertical.',
      riskyPhrasing: [
        'Always specify "horizontal" or "vertical" when discussing components',
        'Use "trajectory" not "path" in formal answers',
        'State "under gravity alone" to emphasize assumptions',
        'Mention "independence of motions" principle'
      ]
    },
    revisionNotes: {
      bullets: [
        'Horizontal and vertical motions are independent',
        'Horizontal velocity is constant',
        'Vertical acceleration is -g',
        'Path is always a parabola',
        'Maximum range at 45°',
        'Time of flight depends only on vertical component',
        'Range depends on both magnitude and angle of initial velocity'
      ],
      formulas: [
        'v₀ₓ = v₀cosθ',
        'v₀ᵧ = v₀sinθ',
        'x = v₀cosθ·t',
        'y = v₀sinθ·t - ½gt²',
        'H = (v₀²sin²θ)/(2g)',
        'R = (v₀²sin2θ)/g',
        'T = (2v₀sinθ)/g'
      ],
      diagramReminders: [
        'Draw parabolic trajectory',
        'Label initial velocity vector and angle',
        'Show horizontal and vertical components',
        'Mark maximum height and range',
        'Indicate direction of gravity'
      ]
    }
  }
};

