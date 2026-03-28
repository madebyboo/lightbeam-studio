// Scroll-triggered fade-in
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Nav scroll effect
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile menu
const hamburger = document.querySelector('.nav-hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
    });
});
