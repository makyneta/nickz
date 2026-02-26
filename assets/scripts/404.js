document.getElementById('yr').textContent = new Date().getFullYear();

// ─── Smart redirect map ───
const redirects = {
    'spotify': 'https://open.spotify.com/artist/0cT8njfrOGGAFCqLR0Wh1f',
    'instagram': 'https://instagram.com/nickz.wav',
    'soundcloud': 'https://soundcloud.com/nickz',
    'whatsapp': 'https://wa.me/5516992221616',
    'sc': 'https://soundcloud.com/nickz',
    'ig': 'https://instagram.com/nickz',
};

const friendlyNames = {
    'spotify': 'Spotify',
    'instagram': 'Instagram',
    'soundcloud': 'SoundCloud',
    'sc': 'SoundCloud',
    'ig': 'Instagram',
    'whatsapp': 'WhatsApp',
    'music': 'Músicas',
    'musicas': 'Músicas',
    'producoes': 'Produções',
    'productions': 'Produções',
    'galeria': 'Galeria',
    'gallery': 'Galeria',
    'contacto': 'Contacto',
    'contact': 'Contacto',
    'about': 'Sobre',
    'sobre': 'Sobre',
    'mayday': 'MAYDAY no Spotify',
    'links': 'Contacto',
    'bio': 'Sobre',
};

// Extract path slug: /spotify → "spotify"
const rawPath = window.location.pathname;
const slug = rawPath.replace(/^\/+|\/+$/g, '').toLowerCase().split('/').pop() || '';

const destination = redirects[slug];

if (destination && slug) {
    const name = friendlyNames[slug] || slug;
    const notice = document.getElementById('redirectNotice');
    const title = document.getElementById('pageTitle');
    const msg = document.getElementById('pageMsg');
    const countdownWrap = document.getElementById('countdownWrap');
    const countdownLabel = document.getElementById('countdownLabel');
    const fill = document.getElementById('countdownFill');

    title.textContent = 'A redirecionar…';
    msg.textContent = `A levar-te para ${name}.`;
    notice.style.display = 'block';
    notice.textContent = `/${slug} → ${destination}`;
    countdownWrap.style.display = 'block';

    let secs = 3;
    countdownLabel.textContent = `A redirecionar em ${secs}s…`;

    // Animate bar shrinking
    fill.style.transition = `transform ${secs}s linear`;
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            fill.style.transform = 'scaleX(0)';
        });
    });

    const tick = setInterval(() => {
        secs--;
        countdownLabel.textContent = secs > 0 ? `A redirecionar em ${secs}s…` : 'A ir…';
        if (secs <= 0) {
            clearInterval(tick);
            window.location.href = destination;
        }
    }, 1000);
}