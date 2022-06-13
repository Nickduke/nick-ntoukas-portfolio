const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav__links');
const body = document.querySelector('body');
const navContainer = document.querySelector('.nav-container');

hamburger.addEventListener('click', () => {
  navContainer.classList.toggle('nav-padding');
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  document.querySelector('.arrow').classList.toggle('hidden');
});

document.querySelectorAll('.nav__links--link').forEach((n) =>
  n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    navContainer.classList.remove('nav-padding');
    document.querySelector('.arrow').classList.remove('hidden');
  })
);

setTimeout(() => {
  document.querySelector('.typed').classList.remove('hidden');
}, 2000);

setTimeout(() => {
  document.querySelector('.arrow').classList.remove('hidden');
}, 8000);

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
