const menuIcon = document.querySelector('.navbar_menu_icon');
const name = document.querySelector('.navbar_name');
const menu = document.querySelector('.navbar_menu');

const about = document.getElementById('aboutBtn');
const exp = document.getElementById('expBtn');
const port = document.getElementById('portBtn');
const contact = document.getElementById('contactBtn');

menuIcon.addEventListener('click', () => {
  name.classList.toggle('active');
  menu.classList.toggle('active');
});

function clickAbout() {
  about.style.opacity = "1";
  exp.style.opacity = "0.5";
  port.style.opacity = "0.5";
  contact.style.opacity = "0.5";
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
