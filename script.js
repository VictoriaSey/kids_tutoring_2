$(document).ready(function() {
    // Initialize Animate on Scroll (AOS)
    AOS.init({
        duration: 800,
        once: true
    });

// Sticky Navbar
$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
        $('.navbar').addClass('scrolled');
    } else {
        $('.navbar').removeClass('scrolled');
    }
});
// Counter Up Animation
const animateCounters = () => {
    const counters = document.querySelectorAll('.counter');
    const speed = 200;
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;
            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
};
const counterSection = document.querySelector('.about-snippet');
if (counterSection) {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    observer.observe(counterSection);
}

// Theme Switcher
const themeSwitch = document.getElementById('checkbox');
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        themeSwitch.checked = true;
    }
}
themeSwitch.addEventListener('change', function(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
});
// --- NEW: Animated Background Particle Generator ---
function createParticles(containerId, characters, count) {
    const container = document.getElementById(containerId);
    if (!container) return;
    for (let i = 0; i < count; i++) {
        const particle = document.createElement('span');
        particle.textContent = characters[Math.floor(Math.random() * characters.length)];
        
        const xPos = Math.random() * 100;
        const size = (Math.random() * 2) + 1; // 1rem to 3rem
        const delay = Math.random() * 20; // 0s to 20s
        const duration = (Math.random() * 15) + 15; // 15s to 30s
        particle.style.left = `${xPos}%`;
        particle.style.fontSize = `${size}rem`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        
        container.appendChild(particle);
    }
}
// Create particles for each page
const mathChars = ['+', '-', '×', '÷', '√', 'π', 'Σ', '∫', 'ƒ(x)', 'x²', 'y³'];
const scienceChars = ['H₂O', 'CO₂', '🧬', '⚛️', '🧪', '🔬', 'E=mc²'];
createParticles('math-bg', mathChars, 30);
createParticles('science-bg', scienceChars, 30);
});
// =========================================================================
// 10. STYLISH ANIMATED CURSOR LOGIC
// =========================================================================
document.addEventListener('DOMContentLoaded', () => {
    const cursorContainer = document.querySelector('.custom-cursor');
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorCircle = document.querySelector('.cursor-circle');
    let dotX = 0, dotY = 0;
    let circleX = 0, circleY = 0;
    // Update cursor position on mouse move
    window.addEventListener('mousemove', (e) => {
        dotX = e.clientX;
        dotY = e.clientY;
        circleX = e.clientX;
        circleY = e.clientY;
    });
    // Use requestAnimationFrame for smooth animation
    function animateCursor() {
        // Dot position updates instantly
        cursorDot.style.left = `${dotX}px`;
        cursorDot.style.top = `${dotY}px`;
        // Circle position has a smoothing/trailing effect
        const currentCircleX = parseFloat(cursorCircle.style.left || circleX);
        const currentCircleY = parseFloat(cursorCircle.style.top || circleY);
        const newCircleX = currentCircleX + (circleX - currentCircleX) * 0.15;
        const newCircleY = currentCircleY + (circleY - currentCircleY) * 0.15;
        cursorCircle.style.left = `${newCircleX}px`;
        cursorCircle.style.top = `${newCircleY}px`;
        requestAnimationFrame(animateCursor);
    }
    animateCursor();
    // Add grow effect on hover for all links and buttons
    const hoverElements = document.querySelectorAll('a, button, .program-card, .team-card');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorContainer.classList.add('grow');
        });
        el.addEventListener('mouseleave', () => {
            cursorContainer.classList.remove('grow');
        });
    });
});
