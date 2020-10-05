const menuIcon = document.querySelector('.navbar_menu_icon');
const name = document.querySelector('.navbar_name');
const menu = document.querySelector('.navbar_menu');

const about = document.getElementById('aboutBtn');
const port = document.getElementById('portBtn');
const contact = document.getElementById('contactBtn');

/* Setup for fade-in effect when scrolling */
var trigger = new ScrollTrigger.default();
trigger.add('[data-trigger]', {
  once: false,
  offset: {
    x: 0,
    y: -300
  },
  addHeight: true
});

/* When menu icon clicked, show entire menu list */
menuIcon.addEventListener('click', () => {
  name.classList.toggle('active');
  menu.classList.toggle('active');
});

/* Clicking each About, Exp, Port, Contact will decrease opacity of others and increase opacity of clicked menu */
function clickAbout() {
  about.style.opacity = "1";
  port.style.opacity = "0.5";
  contact.style.opacity = "0.5";
}

function clickPort() {
  about.style.opacity = "0.5";
  port.style.opacity = "1";
  contact.style.opacity = "0.5";
}

function clickContact() {
  about.style.opacity = "0.5";
  port.style.opacity = "0.5";
  contact.style.opacity = "1";
}
