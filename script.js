// --- Burger menu ---
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const body = document.body; 

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    body.classList.toggle('menu-open'); 
    burger.classList.toggle('open'); 
});

// --- Contact form alert ---
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("✅ Message sent");
});

// --- Greeting logic ---
const g = document.getElementById('greeting');
const btn = document.getElementById('askName');

function showGreeting(name) {
  g.textContent = name
      ? `Привет, ${name}!`
      : 'Добро пожаловать!';
}

function askName() {
  const name = prompt('Как тебя зовут?');
  if (name) {
    localStorage.setItem('visitorName', name);
  } else {
    localStorage.removeItem('visitorName');
  }
  showGreeting(localStorage.getItem('visitorName'));
}

btn.addEventListener('click', askName);
showGreeting(localStorage.getItem('visitorName'));

// --- Theme Toggle Logic ---
const themeToggle = document.getElementById('theme-toggle');

// Функция переключения темы
function setTheme(isLight) {
    if (isLight) {
        document.body.classList.add('light-mode');
        themeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    } else {
        document.body.classList.remove('light-mode');
        themeToggle.textContent = '☀️'; 
        localStorage.setItem('theme', 'dark');
    }
}

// Проверяем сохранённую тему
const savedTheme = localStorage.getItem('theme');
setTheme(savedTheme === 'light');

// Смена темы по клику
themeToggle.addEventListener('click', () => {
    const isCurrentlyLight = document.body.classList.contains('light-mode');
    setTheme(!isCurrentlyLight);
});

document.querySelector('.email').addEventListener('click', () => {
  window.location.href = 'mailto:bemanaff@gmail.com';
});
