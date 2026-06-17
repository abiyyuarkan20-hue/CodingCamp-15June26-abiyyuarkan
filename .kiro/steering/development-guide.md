# Development Guide

## Project Setup

### Prerequisites
- Modern browser (Chrome, Firefox, Safari, Edge)
- Text editor or IDE
- Git installed

### Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/CodingCamp-15June26-abiyyuarkan.git
   cd CodingCamp-15June26-abiyyuarkan
   ```

2. **Open in browser**
   ```bash
   # Simply open index.html in your browser
   # No build process or dependencies required
   ```

3. **Start developing**
   - Edit HTML in `index.html`
   - Style in `css/style.css`
   - Logic in `js/script.js`

## Code Architecture

### HTML Structure

```html
<!-- Header Controls -->
<div class="header-controls">
  <button class="btn-settings">⚙️</button>
  <button class="theme-toggle">🌙</button>
</div>

<!-- Settings Modal -->
<div class="modal" id="settingsModal">
  <!-- Custom name input -->
</div>

<!-- Greeting Section -->
<div class="greeting-section">
  <!-- Time, date, greeting, custom name -->
</div>

<!-- Main Dashboard -->
<div class="dashboard-grid">
  <!-- Focus Timer -->
  <!-- To-Do List -->
  <!-- Quick Links -->
</div>
```

### CSS Organization

```css
/* 1. CSS Variables */
:root { --color-primary: ...; }

/* 2. Global Styles */
* { box-sizing: border-box; }
body { font-family: ...; }

/* 3. Component Styles */
.header-controls { ... }
.modal { ... }
.greeting-section { ... }
.card { ... }

/* 4. Utility Classes */
.btn { ... }
.btn-primary { ... }

/* 5. Responsive */
@media (max-width: 768px) { ... }
```

### JavaScript Organization

```javascript
// 1. Utility Functions
function getFromStorage(key, defaultValue) { ... }

// 2. Modal & Settings Management
// - Modal open/close
// - Custom name save/load

// 3. Theme Management
// - Theme toggle
// - Theme persistence

// 4. Greeting & Time
// - Time update loop
// - Greeting logic

// 5. Focus Timer
// - Timer logic
// - Start/stop/reset

// 6. To-Do List
// - Add/edit/delete tasks
// - Sort tasks
// - Render tasks

// 7. Quick Links
// - Add/delete links
// - Render links

// 8. Initialization
loadTheme();
updateGreeting();
renderTasks();
renderLinks();
```

## Local Storage Management

### Data Structure

**Tasks:**
```javascript
[
  {
    id: 1718701234567,
    text: "Complete project",
    completed: false
  }
]
```

**Links:**
```javascript
[
  {
    id: 1718701234567,
    name: "GitHub",
    url: "https://github.com"
  }
]
```

### CRUD Operations

```javascript
// Create
const newTask = { id: Date.now(), text, completed: false };
tasks.push(newTask);
saveToStorage('tasks', tasks);

// Read
const tasks = getFromStorage('tasks', []);

// Update
tasks = tasks.map(t => t.id === id ? {...t, completed: true} : t);
saveToStorage('tasks', tasks);

// Delete
tasks = tasks.filter(t => t.id !== id);
saveToStorage('tasks', tasks);
```

## CSS Variables Reference

### Colors

```css
/* Light Mode */
--bg-body: #f8f9fa
--bg-card: #ffffff
--text-primary: #1a202c
--accent-primary: #2563eb

/* Dark Mode */
[data-theme="dark"] {
  --bg-body: #0f172a
  --bg-card: #1e293b
  --text-primary: #f1f5f9
  --accent-primary: #3b82f6
}
```

### Shadows

```css
--shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.05)
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.08)
--shadow-md: 0 4px 12px rgba(0, 0, 0, 0.08)
--shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.1)
```

## Common Tasks

### Adding a New Feature

1. **Plan the feature**
   - What does it do?
   - How does it interact with other features?

2. **Add HTML**
   - Update `index.html` with new elements

3. **Add CSS**
   - Style in `css/style.css`
   - Use existing CSS variables
   - Ensure responsive design

4. **Add JavaScript**
   - Add logic in `js/script.js`
   - Follow existing patterns
   - Update initialization if needed

5. **Test**
   - Test in light/dark mode
   - Test on mobile
   - Test in multiple browsers

### Debugging Tips

```javascript
// Check Local Storage
console.log(localStorage.getItem('tasks'));

// Check CSS variables
console.log(getComputedStyle(document.documentElement).getPropertyValue('--accent-primary'));

// Monitor theme changes
document.addEventListener('themechange', () => {
  console.log('Theme changed!');
});
```

## Performance Optimization

### Current Performance
- Load time: <500ms
- Time to interactive: <1s
- Smooth 60fps animations

### Best Practices
- Minimize DOM manipulation
- Batch updates when possible
- Use event delegation
- Avoid layout thrashing

### Example: Batch Updates
```javascript
// Bad - causes multiple reflows
tasks.forEach(task => {
  renderTask(task);  // Each render causes reflow
});

// Good - single reflow
taskList.innerHTML = '';
tasks.forEach(task => {
  // build HTML string
});
taskList.innerHTML = htmlString;
```

## Accessibility

### Keyboard Navigation
- Tab to navigate
- Enter to submit
- Escape to cancel
- Checkboxes with proper labels

### Screen Readers
- Semantic HTML
- ARIA labels where needed
- Focus management in modals

### Color Contrast
- Text: 4.5:1 minimum
- Borders: 3:1 minimum
- Already verified in current design

## Testing Checklist

### Functional Testing
- [ ] Add/edit/delete tasks
- [ ] Sort tasks (all options)
- [ ] Complete/uncomplete tasks
- [ ] Add/delete links
- [ ] Theme toggle works
- [ ] Custom name saves and displays
- [ ] Timer functions correctly

### Cross-Browser Testing
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

### Responsive Testing
- [ ] Desktop (1920px+)
- [ ] Laptop (1366px)
- [ ] Tablet (768px)
- [ ] Mobile (375px)

### Accessibility Testing
- [ ] Keyboard navigation works
- [ ] Focus visible on all interactive elements
- [ ] Color contrast sufficient
- [ ] Modal focus management

## Deployment

### GitHub Pages
1. Push to `main` branch
2. Go to repository Settings
3. Scroll to "GitHub Pages"
4. Select "Deploy from a branch"
5. Choose `main` branch and `/root` folder
6. Site will be live at `https://username.github.io/repo-name`

### Custom Domain (Optional)
1. Add `CNAME` file in repo root
2. Add domain name in Settings

## Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Create pull request
5. Follow code style

## Code Style

### HTML
- Semantic tags (section, article, nav, etc.)
- Meaningful IDs and classes
- ARIA labels for accessibility

### CSS
- Use CSS variables for colors
- 2-space indentation
- Mobile-first media queries
- BEM naming for complex components

### JavaScript
- ES6+ syntax
- Clear function names
- Comments for complex logic
- Avoid global variables (use const/let)
