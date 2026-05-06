document.addEventListener("DOMContentLoaded", () => {
    // Check for success URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
        const successMsg = document.getElementById('successMessage');
        const form = document.getElementById('contactForm');
        if (successMsg && form) {
            successMsg.classList.remove('hidden');
            form.reset();
            // Scroll to contact section
            document.getElementById('contact').scrollIntoView();
            
            // Remove success param from URL to clean it up
            window.history.replaceState({}, document.title, window.location.pathname);
        }
    }
    
    // Nav Link Highlighting
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section, header');

    function updateActiveLink() {
        let current = "";
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                current = section.getAttribute('id') || "home";
            }
        });

        // Special case for hero/home
        if (window.scrollY < 200) current = "home";

        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            
            if (current === "home" && (href === "#" || href === "/")) {
                link.classList.add('active');
            } else if (href === `#${current}`) {
                link.classList.add('active');
            } else if (window.location.pathname === href) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink(); // Initial check

    // Add simple entrance animations for service cards
    const cards = document.querySelectorAll('.service-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    cards.forEach((card, index) => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = `all 0.5s ease ${index * 0.1}s`;
        observer.observe(card);
    });
});
