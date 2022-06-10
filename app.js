const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav__links');
const body = document.querySelector('body');
const navContainer = document.querySelector('.nav-container');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  // body.classList.toggle('fixed-position');
  // body.classList.toggle('nav-background');
});

document.querySelectorAll('.nav__links--link').forEach((n) =>
  n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    // body.classList.remove('fixed-position');
    // body.classList.remove('nav-background');
  })
);

// ------------------------WORK ON THIS--------------------
// const bar2 = document.querySelector('.bar2');
// const bar3 = document.querySelector('.bar3');

// hamburger.addEventListener('mouseover', () => {
//   bar2.classList.add('bar2-effect');
//   bar3.classList.add('bar3-effect');
// });
// hamburger.addEventListener('mouseout', () => {
//   bar2.classList.remove('bar2-effect');
//   bar3.classList.remove('bar3-effect');
// });

const linkedinIcon = document.getElementById('linkedin');
linkedinIcon.addEventListener('mouseout', () => {
  document.querySelector('.fa-linkedin-in').classList.remove('linkedin');
});
linkedinIcon.addEventListener('mouseover', () => {
  document.querySelector('.fa-linkedin-in').classList.add('linkedin');
});

const githubIcon = document.getElementById('github');
githubIcon.addEventListener('mouseout', () => {
  document.querySelector('.fa-github').classList.remove('green');
});
githubIcon.addEventListener('mouseover', () => {
  document.querySelector('.fa-github').classList.add('green');
});

const instagramIcon = document.getElementById('instagram');
instagramIcon.addEventListener('mouseout', () => {
  document.querySelector('.fa-instagram').classList.remove('insta');
});
instagram.addEventListener('mouseover', () => {
  document.querySelector('.fa-instagram').classList.add('insta');
});

const twitterIcon = document.getElementById('twitter');
twitterIcon.addEventListener('mouseout', () => {
  document.querySelector('.fa-twitter').classList.remove('blue');
});
twitterIcon.addEventListener('mouseover', () => {
  document.querySelector('.fa-twitter').classList.add('blue');
});

const youtubeIcon = document.getElementById('youtube');
youtubeIcon.addEventListener('mouseout', () => {
  document.querySelector('.fa-youtube').classList.remove('red');
});
youtubeIcon.addEventListener('mouseover', () => {
  document.querySelector('.fa-youtube').classList.add('red');
});

const toolsIcon = document.getElementById('tools-icon');

toolsIcon.addEventListener('mouseover', () => {
  console.log('hey');
  document.getElementById('icon-title').classList.remove('blue-font');
});

toolsIcon.addEventListener('mouseout', () => {
  document.getElementById('icon-title').classList.add('blue-font');
});
