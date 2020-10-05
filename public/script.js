const menuIcon = document.querySelector('.navbar_menu_icon');
const name = document.querySelector('.navbar_name');
const menu = document.querySelector('.navbar_menu');

const about = document.getElementById('aboutBtn');
const exp = document.getElementById('expBtn');
const port = document.getElementById('portBtn');
const contact = document.getElementById('contactBtn');

var trigger = new ScrollTrigger.default();
trigger.add('[data-trigger]', {
  once: false,
  offset: {
    x: 0,
    y: -300
  },
  addHeight: true
});

menuIcon.addEventListener('click', () => {
  name.classList.toggle('active');
  menu.classList.toggle('active');
});

function clickAbout() {
  about.style.opacity = "1";
  exp.style.opacity = "0.5";
  port.style.opacity = "0.5";
  contact.style.opacity = "0.5";
  document.querySelector('.about_paragraph').classList.toggle('active');
}

function clickExp() {
  about.style.opacity = "0.5";
  exp.style.opacity = "1";
  port.style.opacity = "0.5";
  contact.style.opacity = "0.5";
}

function clickPort() {
  about.style.opacity = "0.5";
  exp.style.opacity = "0.5";
  port.style.opacity = "1";
  contact.style.opacity = "0.5";
}

function clickContact() {
  about.style.opacity = "0.5";
  exp.style.opacity = "0.5";
  port.style.opacity = "0.5";
  contact.style.opacity = "1";
}
