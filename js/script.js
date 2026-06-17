// ========================================
// UTILITY FUNCTIONS
// ========================================

// Get data from Local Storage
function getFromStorage(key, defaultValue = []) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue;
}

// Save data to Local Storage
function saveToStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// ========================================
// MODAL & SETTINGS MANAGEMENT (Custom Name Feature)
// ========================================

const settingsBtn = document.getElementById('settingsBtn');
const settingsModal = document.getElementById('settingsModal');
const modalOverlay = document.getElementById('modalOverlay');
const closeModal = document.getElementById('closeModal');
const nameInput = document.getElementById('nameInput');
const saveName = document.getElementById('saveName');
const editNameBtn = document.getElementById('editNameBtn');
const charCount = document.getElementById('charCount');

// Open settings modal
settingsBtn.addEventListener('click', () => {
    settingsModal.classList.add('active');
    const savedName = localStorage.getItem('userName') || '';
    nameInput.value = savedName;
    charCount.textContent = savedName.length;
    nameInput.focus();
});

// Close settings modal
function closeSettings() {
    settingsModal.classList.remove('active');
}

closeModal.addEventListener('click', closeSettings);
modalOverlay.addEventListener('click', closeSettings);

// Edit name button on greeting
editNameBtn.addEventListener('click', () => {
    settingsModal.classList.add('active');
    const savedName = localStorage.getItem('userName') || '';
    nameInput.value = savedName;
    charCount.textContent = savedName.length;
    nameInput.focus();
});

// Update character count
nameInput.addEventListener('input', (e) => {
    charCount.textContent = e.target.value.length;
});

// Save name
saveName.addEventListener('click', () => {
    const name = nameInput.value.trim();
    if (name) {
        localStorage.setItem('userName', name);
        updateGreeting();
        closeSettings();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && settingsModal.classList.contains('active')) {
        closeSettings();
    }
});

// Save name on Enter
nameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        saveName.click();
    }
});

// ========================================
// THEME MANAGEMENT (Challenge 1)
// ========================================

const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.querySelector('.theme-icon');

// Load saved theme
function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

// Update theme icon
function updateThemeIcon(theme) {
    themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// Toggle theme
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

// ========================================
// GREETING & TIME
// ========================================

const timeElement = document.getElementById('time');
const dateElement = document.getElementById('date');
const greetingElement = document.getElementById('greeting');
const userNameElement = document.getElementById('userName');

function updateGreeting() {
    const userName = localStorage.getItem('userName') || '';
    if (userName) {
        userNameElement.textContent = userName;
    } else {
        userNameElement.textContent = '';
    }
}

function updateTime() {
    const now = new Date();
    
    // Update time
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
    
    // Update date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = now.toLocaleDateString('en-US', options);
    
    // Update greeting based on time of day
    const hour = now.getHours();
    let greetingText = '';
    if (hour >= 5 && hour < 12) {
        greetingText = 'Good Morning';
    } else if (hour >= 12 && hour < 17) {
        greetingText = 'Good Afternoon';
    } else if (hour >= 17 && hour < 21) {
        greetingText = 'Good Evening';
    } else {
        greetingText = 'Good Night';
    }
    greetingElement.textContent = greetingText;
}

// Update greeting on load
updateGreeting();

// Update time every second
setInterval(updateTime, 1000);
updateTime();

// ========================================
// FOCUS TIMER (Pomodoro)
// ========================================

const timerDisplay = document.getElementById('timerDisplay');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

let timerInterval = null;
let timeRemaining = 25 * 60; // 25 minutes in seconds
let isRunning = false;

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function updateTimerDisplay() {
    timerDisplay.textContent = formatTime(timeRemaining);
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timerInterval = setInterval(() => {
            timeRemaining--;
            updateTimerDisplay();
            
            if (timeRemaining <= 0) {
                stopTimer();
                alert('Focus session complete! Time for a break.');
                resetTimer();
            }
        }, 1000);
    }
}

function stopTimer() {
    isRunning = false;
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function resetTimer() {
    stopTimer();
    timeRemaining = 25 * 60;
    updateTimerDisplay();
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

updateTimerDisplay();

// ========================================
// TO-DO LIST (Challenge 2: Prevent Duplicates, Challenge 3: Sort Tasks)
// ========================================

const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const sortSelect = document.getElementById('sortSelect');

let tasks = getFromStorage('tasks', []);
let editingTaskId = null;

// Render all tasks
function renderTasks() {
    taskList.innerHTML = '';
    
    // Sort tasks based on selected option
    let sortedTasks = [...tasks];
    const sortOption = sortSelect.value;
    
    if (sortOption === 'alphabetical') {
        sortedTasks.sort((a, b) => a.text.toLowerCase().localeCompare(b.text.toLowerCase()));
    } else if (sortOption === 'completed') {
        sortedTasks.sort((a, b) => a.completed - b.completed);
    }
    
    sortedTasks.forEach(task => {
        const li = document.createElement('li');
        li.className = `task-item ${task.completed ? 'completed' : ''}`;
        li.innerHTML = `
            <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''} 
                   data-id="${task.id}">
            <span class="task-text" data-id="${task.id}" contenteditable="false">${task.text}</span>
            <div class="task-actions">
                <button class="btn btn-danger" data-id="${task.id}" data-action="delete">Delete</button>
            </div>
        `;
        taskList.appendChild(li);
    });
}

// Add new task (with duplicate prevention - Challenge 2)
function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }
    
    // Check for duplicates (Challenge 2)
    const isDuplicate = tasks.some(task => 
        task.text.toLowerCase() === taskText.toLowerCase()
    );
    
    if (isDuplicate) {
        alert('This task already exists!');
        return;
    }
    
    const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false
    };
    
    tasks.push(newTask);
    saveToStorage('tasks', tasks);
    renderTasks();
    taskInput.value = '';
}

// Toggle task completion
function toggleTask(taskId) {
    tasks = tasks.map(task => {
        if (task.id === parseInt(taskId)) {
            return { ...task, completed: !task.completed };
        }
        return task;
    });
    saveToStorage('tasks', tasks);
    renderTasks();
}

// Delete task
function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== parseInt(taskId));
    saveToStorage('tasks', tasks);
    renderTasks();
}

// Edit task
function editTask(taskId, newText) {
    const trimmedText = newText.trim();
    
    if (trimmedText === '') {
        alert('Task cannot be empty!');
        renderTasks();
        return;
    }
    
    // Check for duplicates when editing (excluding current task)
    const isDuplicate = tasks.some(task => 
        task.id !== parseInt(taskId) && 
        task.text.toLowerCase() === trimmedText.toLowerCase()
    );
    
    if (isDuplicate) {
        alert('This task already exists!');
        renderTasks();
        return;
    }
    
    tasks = tasks.map(task => {
        if (task.id === parseInt(taskId)) {
            return { ...task, text: trimmedText };
        }
        return task;
    });
    saveToStorage('tasks', tasks);
    renderTasks();
}

// Event listeners for tasks
addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});

taskList.addEventListener('click', (e) => {
    const target = e.target;
    const taskId = target.getAttribute('data-id');
    
    if (target.classList.contains('task-checkbox')) {
        toggleTask(taskId);
    } else if (target.getAttribute('data-action') === 'delete') {
        deleteTask(taskId);
    }
});

// Enable inline editing
taskList.addEventListener('dblclick', (e) => {
    if (e.target.classList.contains('task-text')) {
        const taskId = e.target.getAttribute('data-id');
        const task = tasks.find(t => t.id === parseInt(taskId));
        
        if (task && !task.completed) {
            e.target.contentEditable = 'true';
            e.target.classList.add('editing');
            e.target.focus();
            editingTaskId = taskId;
        }
    }
});

// Save edit on blur or Enter
taskList.addEventListener('blur', (e) => {
    if (e.target.classList.contains('task-text') && e.target.classList.contains('editing')) {
        const taskId = e.target.getAttribute('data-id');
        const newText = e.target.textContent;
        e.target.contentEditable = 'false';
        e.target.classList.remove('editing');
        editTask(taskId, newText);
        editingTaskId = null;
    }
}, true);

taskList.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && e.target.classList.contains('task-text')) {
        e.preventDefault();
        e.target.blur();
    }
});

// Sort change event
sortSelect.addEventListener('change', renderTasks);

// ========================================
// QUICK LINKS
// ========================================

const linkNameInput = document.getElementById('linkName');
const linkUrlInput = document.getElementById('linkUrl');
const addLinkBtn = document.getElementById('addLinkBtn');
const linksContainer = document.getElementById('linksContainer');

let links = getFromStorage('links', []);

// Render all links
function renderLinks() {
    linksContainer.innerHTML = '';
    
    links.forEach(link => {
        const linkElement = document.createElement('a');
        linkElement.href = link.url;
        linkElement.target = '_blank';
        linkElement.className = 'link-item';
        linkElement.innerHTML = `
            <span>${link.name}</span>
            <button class="link-delete" data-id="${link.id}">×</button>
        `;
        
        // Prevent default for delete button
        const deleteBtn = linkElement.querySelector('.link-delete');
        deleteBtn.addEventListener('click', (e) => {
            e.preventDefault();
            deleteLink(link.id);
        });
        
        linksContainer.appendChild(linkElement);
    });
}

// Add new link
function addLink() {
    const name = linkNameInput.value.trim();
    const url = linkUrlInput.value.trim();
    
    if (name === '' || url === '') {
        alert('Please enter both link name and URL!');
        return;
    }
    
    // Basic URL validation
    let validUrl = url;
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        validUrl = 'https://' + url;
    }
    
    const newLink = {
        id: Date.now(),
        name: name,
        url: validUrl
    };
    
    links.push(newLink);
    saveToStorage('links', links);
    renderLinks();
    
    linkNameInput.value = '';
    linkUrlInput.value = '';
}

// Delete link
function deleteLink(linkId) {
    links = links.filter(link => link.id !== linkId);
    saveToStorage('links', links);
    renderLinks();
}

// Event listeners for links
addLinkBtn.addEventListener('click', addLink);
linkNameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addLink();
    }
});
linkUrlInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addLink();
    }
});

// ========================================
// INITIALIZATION
// ========================================

loadTheme();
updateGreeting();
renderTasks();
renderLinks();
