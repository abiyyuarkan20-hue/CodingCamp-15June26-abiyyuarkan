# Life Dashboard To-Do List - Project Specification

## Project Overview

A professional, minimalist productivity dashboard that combines a to-do list, focus timer, quick links, and personalized greeting in one unified interface.

## Core Features

### 1. Greeting Section
- **Live Clock**: Updates every second showing HH:MM:SS format
- **Date Display**: Full date with day of week
- **Time-based Greeting**: Changes based on time of day
  - 5am - 12pm: "Good Morning"
  - 12pm - 5pm: "Good Afternoon"
  - 5pm - 9pm: "Good Evening"
  - 9pm - 5am: "Good Night"
- **Custom Name**: User can set their name (shown prominently)

### 2. Focus Timer (Pomodoro)
- Default: 25 minutes
- Controls: Start, Stop, Reset buttons
- Alert when session completes
- Persistent display showing remaining time

### 3. To-Do List
- **Add Tasks**: Enter and submit tasks
- **Edit Tasks**: Double-click to edit inline
- **Mark Complete**: Checkbox to toggle completion status
- **Delete Tasks**: Remove tasks individually
- **Local Storage**: All tasks persist across sessions
- **Sorting Options**:
  - Default (insertion order)
  - Alphabetical (A-Z)
  - By completion status

### 4. Quick Links
- **Add Links**: Save website shortcuts
- **Store Name & URL**: Customizable link labels
- **Delete Links**: Remove links as needed
- **Local Storage**: Persistent across sessions
- **Auto-formatting**: Adds https:// if not specified

### 5. Theme Toggle
- **Light Mode**: Clean white cards on light background
- **Dark Mode**: Dark theme for reduced eye strain
- **Preference Persistence**: Saved to Local Storage

## Challenges Implemented

### Challenge 1: Light/Dark Mode ✓
- Professional blue accent color
- Proper contrast ratios
- Smooth transitions
- Persistent preference

### Challenge 2: Custom Name in Greeting ✓
- Settings modal interface
- Professional input with character counter (30 max)
- Edit button on greeting
- Name displays prominently
- Keyboard shortcuts (Enter, Escape)

### Challenge 3: Prevent Duplicate Tasks ✓
- Case-insensitive duplicate check
- Alert user when duplicate detected
- Works on both add and edit

### Challenge 4: Sort Tasks ✓
- Dropdown selector
- Three sort options implemented
- Real-time sorting when changed

## Technical Requirements

### Technology Stack
- HTML5 (semantic markup)
- CSS3 (variables, gradients, flexbox/grid)
- Vanilla JavaScript ES6+

### Data Storage
- Browser Local Storage API
- User name
- Tasks array
- Links array
- Theme preference

### Browser Support
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

### Performance
- Load time: <1s
- Smooth animations at 60fps
- Minimal bundle size

## UI/UX Design

### Visual Hierarchy
1. Time/Date/Greeting (Hero section)
2. Main content grid (Timer, Tasks, Links)
3. Subtle accents and focus states

### Color Scheme
**Light Mode:**
- Background: #f8f9fa
- Cards: #ffffff
- Primary Accent: #2563eb (Professional Blue)
- Text: #1a202c

**Dark Mode:**
- Background: #0f172a
- Cards: #1e293b
- Primary Accent: #3b82f6
- Text: #f1f5f9

### Typography
- Font Stack: System fonts (SF Pro, Segoe UI, Roboto)
- Hierarchy: 3rem → 1rem
- Weight: 400, 500, 600, 700

### Interactions
- Smooth transitions (0.2-0.3s)
- Hover states on interactive elements
- Focus rings for accessibility
- Modal animations

## File Structure

```
project/
├── index.html           # Main page
├── css/
│   └── style.css       # All styles (single file)
├── js/
│   └── script.js       # All JavaScript (single file)
└── README.md           # Documentation
```

## Local Storage Keys

```javascript
// User preferences
localStorage.getItem('theme')        // 'light' or 'dark'
localStorage.getItem('userName')     // User's custom name

// Data
localStorage.getItem('tasks')        // JSON array of tasks
localStorage.getItem('links')        // JSON array of links
```

## Success Criteria

✓ All MVP features implemented
✓ All 3 challenges completed
✓ Professional UI/UX design
✓ Responsive on mobile and desktop
✓ No external frameworks or libraries
✓ Clean, readable code
✓ Accessibility considerations
✓ Performance optimized
✓ Browser compatible

## Future Enhancements (Optional)

- Export/import tasks as JSON
- Task categories or tags
- Recurring tasks
- Sound notifications
- Sync across devices (Firebase)
- PWA support
- Multiple timer durations
