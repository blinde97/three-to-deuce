const navbar = document.querySelector('.navbar');
const menuToggle = document.querySelector('.menu-toggle');
const currentPage = document.body.dataset.page;

if (navbar) {
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 24);
    });
}

if (menuToggle && navbar) {
    menuToggle.addEventListener('click', () => {
        const isOpen = navbar.classList.toggle('menu-open');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
    });
}

document.querySelectorAll('.nav-menu a, .nav-contact').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) {
        return;
    }

    const normalized = href.replace('.html', '');
    if ((currentPage === 'home' && href === 'index.html') || normalized === currentPage) {
        link.classList.add('is-active');
    }

    link.addEventListener('click', () => {
        if (navbar) {
            navbar.classList.remove('menu-open');
        }
        if (menuToggle) {
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });
});

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.16 }
);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', event => {
        event.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }

        alert('Thanks for reaching out! Our team will respond shortly.');
        contactForm.reset();
    });
}
