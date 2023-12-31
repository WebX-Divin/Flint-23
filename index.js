// * NAV TOGGLE
const navMenu = document.querySelector('.nav__menu');
const navOpenBtn = document.querySelector('.nav__toggle-open');
const navCloseBtn = document.querySelector('.nav__toggle-close');

const openNavHandler = () => {
  navMenu.style.display = 'flex';
  navOpenBtn.style.display = 'none';
  navCloseBtn.style.display = 'inline-block';
};

const closeNavHandler = () => {
  navMenu.style.display = 'none';
  navOpenBtn.style.display = 'inline-block';
  navCloseBtn.style.display = 'none';
};

navOpenBtn.addEventListener('click', openNavHandler);
navCloseBtn.addEventListener('click', closeNavHandler);

// * Close Nav Menu on click of nav link on small screens i.e, < 780px
const navItems = navMenu.querySelectorAll('a');

if (window.innerWidth < 768) {
  navItems.forEach((item) => {
    item.addEventListener('click', closeNavHandler);
  });
}

// * DARK & LIGHT THEME TOGGLE FEATURE
const themeBtn = document.querySelector('.nav__theme-btn');

themeBtn.addEventListener('click', () => {
  let bodyClass = document.body.className;
  if (!bodyClass) {
    bodyClass = 'dark';
    document.body.className = bodyClass;
    // * change toggle icon
    themeBtn.innerHTML = '<i class="uil uil-sun"></i>';
    // * save theme to local storage
    // window.localStorage.setItem('theme', bodyClass);
  } else {
    bodyClass = '';
    document.body.className = bodyClass;
    // * change toggle icon
    themeBtn.innerHTML = '<i class="uil uil-moon"></i>';
    // * save theme to local storage
    // window.localStorage.setItem('theme', bodyClass);
  }
});

// * load theme on page load initially
window.addEventListener('load', () => {
  document.body.className = window.localStorage.getItem('theme');
});

// * Custom Mouse Cursor
const cursorDot = document.querySelector('[data-cursor-dot]');
const cursorOutline = document.querySelector('[data-cursor-outline]');

window.addEventListener('mousemove', (e) => {
  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  // cursorOutline.style.left = `${posX}px`;
  // cursorOutline.style.top = `${posY}px`;

  cursorOutline.animate(
    {
      left: `${posX}px`,
      top: `${posY}px`,
    },
    { duration: 100, fill: 'forwards' }
  );
});