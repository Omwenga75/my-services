document.addEventListener("DOMContentLoaded", () => {
    // Add Mobile Navbar Logic
    const navbar = document.querySelector('.navbar');
    if (navbar && !document.querySelector('.mobile-topbar')) {
        const topbar = document.createElement('div');
        topbar.className = 'mobile-topbar';
        topbar.innerHTML = `
            <div class="mobile-topbar-title">QuickLearn</div>
            <button class="mobile-toggle-btn" style="margin-left: auto;"><i class="fas fa-ellipsis-v"></i></button>
        `;
        document.body.prepend(topbar);

        const overlay = document.createElement('div');
        overlay.className = 'mobile-sidebar-overlay';
        document.body.appendChild(overlay);

        const toggleBtn = topbar.querySelector('.mobile-toggle-btn');
        toggleBtn.addEventListener('click', () => {
            navbar.classList.add('open');
            overlay.classList.add('open');
        });

        overlay.addEventListener('click', () => {
            navbar.classList.remove('open');
            overlay.classList.remove('open');
        });
    }

    // Check for success URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
        const successMsg = document.getElementById('successMessage');
        const form = document.getElementById('contactForm');
        if (successMsg && form) {
            successMsg.classList.remove('hidden');
            form.reset();
            document.getElementById('contact').scrollIntoView();
            window.history.replaceState({}, document.title, window.location.pathname);
        }
    }
    
    // Intersection Observer for animations
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

    // Check Auth Status for Navbar (Unified)
    async function checkAuth() {
        try {
            const res = await fetch('/api/me');
            const data = await res.json();
            const nav = document.getElementById('dynamic-nav');
            if (!nav) return;

            // Build a base nav with all primary links so they remain visible on all pages
            let baseNav = `
                <a href="/"><i class="fas fa-home"></i> Home</a>
                <a href="/courses"><i class="fas fa-book-open"></i> Courses</a>
                <a href="/about"><i class="fas fa-building"></i> About Us</a>
                <a href="/contact"><i class="fas fa-envelope"></i> Contact Us</a>
            `;

            if (data.logged_in) {
                const dashboardUrl = data.is_admin ? "/admin" : "/dashboard";
                const dashboardText = data.is_admin ? "Admin" : "Dashboard";
                baseNav += `
                    <a href="${dashboardUrl}"><i class="fas fa-chart-line"></i> ${dashboardText}</a>
                    <a href="/logout" style="color: #ef4444;"><i class="fas fa-sign-out-alt" style="display:inline-block !important;"></i> Logout</a>
                `;
            } else {
                baseNav += `<a href="/login" class="btn-auth-nav"><i class="fas fa-sign-in-alt"></i> Login</a>`;
            }

            nav.innerHTML = baseNav;

            if (data.logged_in && document.getElementById('welcome-text')) {
                document.getElementById('welcome-text').textContent = `What's next, ${data.name.split(' ')[0]}?`;
            }

            // mark the active link based on current pathname
            try {
                const currentPath = (location.pathname || '/').replace(/\/$/, '') || '/';
                const links = nav.querySelectorAll('a');
                links.forEach(a => {
                    // skip external or anchor links
                    const href = a.getAttribute('href');
                    if (!href || href.startsWith('http') || href.startsWith('#')) {
                        a.classList.remove('active');
                        a.removeAttribute('aria-current');
                        return;
                    }
                    const path = href.replace(/\/$/, '') || '/';
                    if (path === currentPath) {
                        a.classList.add('active');
                        a.setAttribute('aria-current', 'page');
                    } else {
                        a.classList.remove('active');
                        a.removeAttribute('aria-current');
                    }
                });
            } catch (e) { /* ignore */ }
        } catch (e) {
            console.error("Auth check failed", e);
        }
    }
    
    // Fetch stats for the banner
    async function loadStats() {
        const coursesEl = document.getElementById('stat-courses');
        const studentsEl = document.getElementById('stat-students');
        const tutorsEl = document.getElementById('stat-tutors');
        
        if (coursesEl && studentsEl && tutorsEl) {
            try {
                const res = await fetch('/api/stats');
                const data = await res.json();
                coursesEl.textContent = data.courses + "+";
                studentsEl.textContent = data.students + "+";
                tutorsEl.textContent = data.tutors + "+";
            } catch (e) {
                console.error("Failed to load stats", e);
            }
        }
    }
    
    checkAuth();
    loadStats();
});
