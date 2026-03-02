
/*was having some trouble with the java script for the nav bar. looked online a bit, worked with Claude*/
const hamburger = document.querySelector('.hamburger');
const navButtons = document.querySelector('.nav-buttons');

hamburger.addEventListener('click', () => {
  navButtons.classList.toggle('nav-open');
});