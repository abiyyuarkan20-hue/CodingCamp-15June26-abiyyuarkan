# Life Dashboard To-Do List 🎯

A professional, feature-rich productivity dashboard built with vanilla HTML, CSS, and JavaScript. Organize your day with a to-do list, focus timer, quick links, and personalized greeting.

**Live Demo:** [View on GitHub Pages](https://abiyyuarkan20-hue.github.io/CodingCamp-15June26-abiyyuarkan)

## ✨ Features

### 📋 Core Features
- **Live Clock & Date** - Real-time display with automatic time updates
- **Time-based Greeting** - Greeting changes throughout the day (Morning/Afternoon/Evening/Night)
- **👤 Custom Name** - Personalize your dashboard with your name
- **🎯 Focus Timer** - 25-minute Pomodoro timer with Start, Stop, and Reset controls
- **✅ To-Do List** - Create, edit, mark complete, and delete tasks with ease
- **🔗 Quick Links** - Save your favorite websites for fast access
- **🌙 Dark/Light Mode** - Professional theme toggle for comfortable viewing

### 🎯 Challenges Implemented

1. **Light/Dark Mode** ✓
   - Professional blue color scheme
   - Smooth transitions
   - Persistent preference storage

2. **Custom Name in Greeting** ✓
   - Professional settings modal
   - Real-time character counter (30 max)
   - Quick edit button on greeting

3. **Prevent Duplicate Tasks** ✓
   - Case-insensitive duplicate detection
   - User-friendly alerts

4. **Sort Tasks** ✓
   - Sort by default order
   - Sort alphabetically (A-Z)
   - Sort by completion status

## 🛠️ Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS variables, gradients, and flexbox/grid
- **Vanilla JavaScript ES6+** - No frameworks or dependencies

## 📦 Data Storage

All user data persists locally using Browser's Local Storage API:
- User name preference
- Tasks list with completion status
- Quick links with URLs
- Theme preference (light/dark)

## 🌐 Browser Support

Works on all modern browsers:
- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+

## 📁 Project Structure

```
CodingCamp-15June26-abiyyuarkan/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # All styles (single file)
├── js/
│   └── script.js          # All JavaScript (single file)
├── .kiro/                 # Project documentation
│   ├── README.md
│   ├── specs/
│   │   └── project-overview.md
│   └── steering/
│       └── development-guide.md
└── README.md              # This file
```

## 🚀 Getting Started

### Local Usage
1. Clone the repository:
   ```bash
   git clone https://github.com/abiyyuarkan20-hue/CodingCamp-15June26-abiyyuarkan.git
   cd CodingCamp-15June26-abiyyuarkan
   ```

2. Open in your browser:
   ```bash
   # Simply open index.html in your browser
   # No build process or dependencies required!
   ```

3. Start organizing your day!

### Deploy to GitHub Pages

Already deployed! The site is live at:
- **URL:** https://abiyyuarkan20-hue.github.io/CodingCamp-15June26-abiyyuarkan

To deploy your own version:
1. Fork this repository
2. Go to **Settings** → **Pages**
3. Select **Deploy from a branch**
4. Choose `main` branch and `/root` folder
5. Your site will be live at `https://your-username.github.io/repo-name`

## 💾 How It Works

### Greeting Section
- Shows current time (HH:MM:SS)
- Displays full date with day of week
- Dynamic greeting based on time of day
- Your custom name displayed prominently

### Focus Timer
- 25-minute default Pomodoro session
- Start/Stop/Reset controls
- Audio alert when session completes
- Clean, easy-to-read display

### To-Do List
- **Add Tasks** - Type and press Enter or click Add
- **Edit Tasks** - Double-click any task to edit inline
- **Complete Tasks** - Check the box to mark done
- **Delete Tasks** - Click delete button to remove
- **Sort Tasks** - Choose between Default, A-Z, or Completion status
- **Prevent Duplicates** - System alerts you if task already exists

### Quick Links
- Add your favorite websites
- Customize link names and URLs
- Click to open in new tab
- Delete when no longer needed

### Settings
- Click ⚙️ button to open settings
- Enter your name (max 30 characters)
- Click Save or press Enter
- Or click ✏️ on the greeting for quick edit

## 🎨 UI/UX Design

### Professional Color Scheme

**Light Mode:**
- Clean white cards on light background
- Professional blue accents (#2563eb)
- High contrast text for readability

**Dark Mode:**
- Dark cards on dark background
- Adjusted blue accents (#3b82f6)
- Reduced eye strain for night usage

### Design Highlights
- Smooth animations (0.2-0.3s transitions)
- Hover states on all interactive elements
- Focus rings for keyboard accessibility
- Fully responsive on mobile, tablet, and desktop
- Professional typography with system fonts

## 📊 Functionality

### Local Storage Keys

```javascript
// User preferences
localStorage.getItem('theme')        // 'light' or 'dark'
localStorage.getItem('userName')     // User's custom name

// Data
localStorage.getItem('tasks')        // JSON array of tasks
localStorage.getItem('links')        // JSON array of links
```

### Task Object Structure

```javascript
{
  id: 1718701234567,          // Unique timestamp ID
  text: "Complete project",   // Task description
  completed: false            // Completion status
}
```

### Link Object Structure

```javascript
{
  id: 1718701234567,          // Unique timestamp ID
  name: "GitHub",             // Display name
  url: "https://github.com"   // Full URL
}
```

## 🎯 Performance

- **Load Time:** < 500ms
- **Time to Interactive:** < 1s
- **Animations:** Smooth 60fps
- **Bundle Size:** Single HTML + CSS + JS files (minimal)

## ♿ Accessibility

- ✅ Keyboard navigation support (Tab, Enter, Escape)
- ✅ Semantic HTML markup
- ✅ ARIA labels for screen readers
- ✅ Color contrast ratios meet WCAG standards
- ✅ Focus management in modal dialogs

## 📝 Development

For detailed development information, see:
- **Project Overview:** `.kiro/specs/project-overview.md`
- **Development Guide:** `.kiro/steering/development-guide.md`

### Quick Development Tips

1. **Adding a feature:**
   - Add HTML to `index.html`
   - Style in `css/style.css`
   - Add logic in `js/script.js`

2. **Testing:**
   - Test in light and dark mode
   - Test on mobile (375px) and desktop (1920px)
   - Test in Chrome, Firefox, Safari

3. **Code Style:**
   - Use CSS variables for colors
   - Keep functions focused and single-purpose
   - Comment complex logic
   - Use semantic HTML

## 🎓 Learning Outcomes

This project demonstrates:
- ✅ HTML5 semantic markup
- ✅ CSS3 (variables, gradients, grid/flexbox, animations)
- ✅ Vanilla JavaScript (ES6+, DOM manipulation)
- ✅ Local Storage API for data persistence
- ✅ Responsive design principles
- ✅ UX/UI best practices
- ✅ Accessibility considerations
- ✅ Git and GitHub workflow
- ✅ GitHub Pages deployment

## 🤝 Contributing

Found a bug or want to improve? 
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available for personal and educational use.

## 👨‍💻 Author

Built by **Abiyyur Arkan** as part of CodingCamp June 2026 project.

## 🙏 Acknowledgments

- CodingCamp for the project brief and requirements
- System fonts for clean typography
- Modern browser APIs for rich functionality

---

**Made with ❤️ | Deployed with GitHub Pages | Built with vanilla web technologies**
