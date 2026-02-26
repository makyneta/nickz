// Hamburger popup
const hamburger = document.getElementById('hamburger');
const navPopup = document.getElementById('navPopup');
const navBackdrop = document.getElementById('navBackdrop');
function closeMenu() { hamburger.classList.remove('open'); navPopup.classList.remove('open'); navBackdrop.classList.remove('open'); }
hamburger.addEventListener('click', e => { e.stopPropagation(); navPopup.classList.contains('open') ? closeMenu() : (hamburger.classList.add('open'), navPopup.classList.add('open'), navBackdrop.classList.add('open')); });
navBackdrop.addEventListener('click', closeMenu);
document.querySelectorAll('.popup-link').forEach(a => { a.addEventListener('click', () => { closeMenu(); const t = document.querySelector(a.getAttribute('href')); if (t) setTimeout(() => t.scrollIntoView({ behavior: 'smooth' }), 50); }); });

// Cursor
const cursor = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');
if (window.matchMedia('(pointer: fine)').matches) {
    document.addEventListener('mousemove', e => { cursor.style.left = e.clientX + 'px'; cursor.style.top = e.clientY + 'px'; cursorRing.style.left = e.clientX + 'px'; cursorRing.style.top = e.clientY + 'px'; });
} else { document.body.style.cursor = 'auto'; if (cursor) cursor.style.display = 'none'; if (cursorRing) cursorRing.style.display = 'none'; }

// Footer year
document.getElementById('footer-year').textContent = 'Copyright © ' + new Date().getFullYear();

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => { a.addEventListener('click', e => { const t = document.querySelector(a.getAttribute('href')); if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); } }); });

// Mobile nav active
const sections = document.querySelectorAll('#hero, section[id]');
const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
const obs = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) mobileNavLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id)); }); }, { threshold: 0.35 });
sections.forEach(s => obs.observe(s));