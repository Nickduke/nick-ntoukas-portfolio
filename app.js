const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav__links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav__links--link').forEach((n) =>
  n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  })
);

// document.querySelectorAll('.fa-linkedin-in').forEach((i) => {
//   const linkedinIcon = document.querySelector('.fa-linkedin-in');
//   const githubIcon = document.querySelector('.fa-github');
//   const instagramIcon = document.querySelector('.fa-instagram');
//   const twitterIcon = document.querySelector('.fa-twitter');
//   const youtubeIcon = document.querySelector('.fa-youtube');

//   i.addEventListener('mouseover', () => {
//     linkedinIcon.classList.remove('dark');
//   });
//   i.addEventListener('mouseout', () => {
//     linkedinIcon.classList.add('dark');
//   });
// });

const linkedinIcon = document.getElementById('linkedin');
linkedinIcon.addEventListener('mouseover', () => {
  document.querySelector('.fa-linkedin-in').classList.remove('dark');
});
linkedinIcon.addEventListener('mouseout', () => {
  document.querySelector('.fa-linkedin-in').classList.add('dark');
});

const githubIcon = document.getElementById('github');
githubIcon.addEventListener('mouseover', () => {
  document.querySelector('.fa-github').classList.remove('dark');
});
githubIcon.addEventListener('mouseout', () => {
  document.querySelector('.fa-github').classList.add('dark');
});

const instagramIcon = document.getElementById('instagram');
instagramIcon.addEventListener('mouseover', () => {
  document.querySelector('.fa-instagram').classList.remove('dark');
});
instagram.addEventListener('mouseout', () => {
  document.querySelector('.fa-instagram').classList.add('dark');
});

const twitterIcon = document.getElementById('twitter');
twitterIcon.addEventListener('mouseover', () => {
  document.querySelector('.fa-twitter').classList.remove('dark');
});
twitterIcon.addEventListener('mouseout', () => {
  document.querySelector('.fa-twitter').classList.add('dark');
});

const youtubeIcon = document.getElementById('youtube');
youtubeIcon.addEventListener('mouseover', () => {
  document.querySelector('.fa-youtube').classList.remove('dark');
});
youtubeIcon.addEventListener('mouseout', () => {
  document.querySelector('.fa-youtube').classList.add('dark');
});
