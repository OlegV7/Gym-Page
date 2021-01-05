// Variables
const navBtn    = document.querySelector('.nav__box--icon'),
      topLine   = document.querySelector('.nav__box--icon-top'),
      midLine   = document.querySelector('.nav__box--icon-btn'),
      bottLine  = document.querySelector('.nav__box--icon-bottom'),
      navList   = document.querySelector('.nav__list--mobile');

// Event Listeners
navBtn.addEventListener('click', toggleMobileClasses);

// Functions
function toggleMobileClasses() {
    topLine.classList.toggle('nav__active-top');
    midLine.classList.toggle('nav__active-main');
    bottLine.classList.toggle('nav__active-bottom');
    navList.classList.toggle('nav__list--mobile-toggle');
}