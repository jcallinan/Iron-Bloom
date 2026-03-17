//stores the shared workout dta in one place

export const workout = [
    {
        id: '1',
        title: ' Beginner Full Body',
        category: 'Strength',
        duration: '30 min',
        level: 'Beginner',
        descruption: 'A gentle full body workout designed for beginners. No equipment needed.',
        tips: 'Focus onn form over speed. Rest as needed between movement.',
        exercises: ['Bodyweight Squats', 'Wall Push-Ups', 'Glute Bridges','Standing Marches'],
    },

    {
        id: '2',
        title: 'Low Impact Cardio',
        category: 'Cardio',
        duration: '20 min',
        level: 'Beginner',
        description: 'Easy on the joints, great for all body types and mobility levels.',
        tips: 'Keep movements slow and controlled. Modify any exercise as needed.',
        exercises: ['Step Touches', 'Arm Circles', 'Side Steps', 'Seated Leg Lifts'],
    },
    {
        id: '3',
        title: 'Seated Strength',
        category: 'Strength',
        duration: '25 min',
        level: 'All Levels',
        description: 'A chair-based strength workout accessible to those with mobility restrictions.',
        tips: 'Use a sturdy chair. Stop if you feel any pain.',
        exercises: ['Seated Squats', 'Chair Dips', 'Seated Rows (band)', 'Ankle Raises'],
    },
    {
        id: '4',
        title: 'Core & Breathwork',
        category: 'Core',
        duration: '15 min',
        level: 'All Levels',
        description: 'Gentle core activation paired with breathing techniques.',
        tips: 'Never hold your breath. Move slowly and with intention.',
        exercises: ['Dead Bug', 'Pelvic Tilts', 'Bird Dog', 'Diaphragmatic Breathing'],
  },
];

export const goals = [
    {id: '1', label: 'Lose Weight'},
    {id: '2', label: 'Build Strength'},
    {id: '3', label: 'Improve Mobility'},
    {id: '4', label: 'Boost Energy'},
    {id: '5', label: 'Build Consistency'}
];