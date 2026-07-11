import os
import re

with open('static/books.html', 'r', encoding='utf-8') as f:
    books_html = f.read()

# Extract head and nav
head_match = re.search(r'(<!DOCTYPE html>.*?</head>\s*<body>)', books_html, re.DOTALL)
head_part = head_match.group(1)

nav_match = re.search(r'(<nav class="navbar">.*?</nav>)', books_html, re.DOTALL)
nav_part = nav_match.group(1)

footer_match = re.search(r'(<div id="book-toast"></div>.*?</html>)', books_html, re.DOTALL)
footer_part = footer_match.group(1)

# Appending some custom CSS to the head_part for projects
custom_css = """
    <style>
        /* Projects Page Specific Styles */
        .projects-hero {
            background: linear-gradient(135deg, #060f24 0%, #0d1f40 60%, #0f2557 100%);
            padding: 7rem 2rem 4rem;
            text-align: center;
            position: relative;
            overflow: hidden;
        }
        .projects-hero::before {
            content: '';
            position: absolute;
            inset: 0;
            background-image: radial-gradient(rgba(0,198,255,0.12) 1px, transparent 1px);
            background-size: 28px 28px;
            pointer-events: none;
        }
        .projects-hero::after {
            content: '';
            position: absolute;
            width: 600px; height: 600px;
            background: radial-gradient(circle, rgba(0,198,255,0.08) 0%, transparent 70%);
            top: -150px; left: 50%; transform: translateX(-50%);
            pointer-events: none;
        }
        .projects-hero-badge {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            background: rgba(0,198,255,0.1);
            color: #00c6ff;
            padding: 0.4rem 1rem;
            border-radius: 50px;
            font-size: 0.85rem;
            font-weight: 600;
            margin-bottom: 1.5rem;
            border: 1px solid rgba(0,198,255,0.2);
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        .projects-hero h1 {
            font-size: 3.5rem;
            font-weight: 800;
            margin-bottom: 1.2rem;
            line-height: 1.1;
        }
        .projects-hero h1 span {
            background: linear-gradient(135deg, #00c6ff, #0072ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .projects-hero p {
            color: #94A3B8;
            font-size: 1.15rem;
            max-width: 600px;
            margin: 0 auto 2rem;
            line-height: 1.6;
        }

        .projects-section {
            max-width: 1280px;
            margin: 0 auto;
            padding: 4rem 2rem 6rem;
        }
        .section-title {
            font-size: 2.2rem;
            font-weight: 800;
            margin-bottom: 2.5rem;
            display: flex;
            align-items: center;
            gap: 1rem;
        }
        .section-title::after {
            content: '';
            flex: 1;
            height: 1px;
            background: linear-gradient(90deg, rgba(255,255,255,0.1), transparent);
        }

        .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
            gap: 2.5rem;
            margin-bottom: 5rem;
        }
        .project-card {
            background: rgba(13, 27, 53, 0.7);
            border: 1px solid rgba(255,255,255,0.08);
            border-radius: 20px;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            cursor: pointer;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            backdrop-filter: blur(10px);
            position: relative;
        }
        .project-card:hover {
            transform: translateY(-8px);
            border-color: rgba(0,198,255,0.4);
            box-shadow: 0 20px 40px rgba(0,0,0,0.4), 0 0 20px rgba(0,198,255,0.15);
        }
        .project-image-wrapper {
            position: relative;
            height: 220px;
            overflow: hidden;
        }
        .project-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.6s ease;
        }
        .project-card:hover .project-image {
            transform: scale(1.05);
        }
        .project-category {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: rgba(0,0,0,0.6);
            backdrop-filter: blur(8px);
            padding: 0.3rem 0.8rem;
            border-radius: 50px;
            font-size: 0.75rem;
            font-weight: 600;
            border: 1px solid rgba(255,255,255,0.1);
            color: #fff;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        .project-info {
            padding: 1.8rem;
            flex: 1;
            display: flex;
            flex-direction: column;
        }
        .project-title {
            font-size: 1.4rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
            color: #F8FAFC;
        }
        .project-desc {
            color: #94A3B8;
            font-size: 0.95rem;
            line-height: 1.6;
            margin-bottom: 1.5rem;
            flex: 1;
        }
        .project-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.6rem;
            margin-bottom: 1.5rem;
        }
        .project-tag {
            font-size: 0.75rem;
            color: #00c6ff;
            background: rgba(0,198,255,0.1);
            padding: 0.2rem 0.7rem;
            border-radius: 4px;
            font-weight: 600;
        }
        .project-footer {
            border-top: 1px solid rgba(255,255,255,0.05);
            padding-top: 1.2rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .project-link {
            color: #fff;
            text-decoration: none;
            font-size: 0.9rem;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            transition: color 0.3s ease;
        }
        .project-card:hover .project-link {
            color: #00c6ff;
        }
        
        @media (max-width: 768px) {
            .projects-hero h1 { font-size: 2.5rem; }
            .projects-grid { grid-template-columns: 1fr; }
        }
    </style>
"""

head_part = head_part.replace('</head>', custom_css + '\n</head>')
head_part = head_part.replace('<title>Books | QuickLearn Programming School</title>', '<title>Projects Portfolio | QuickLearn</title>')

# Construct body
body_html = f"""
    {nav_part}

    <section class="projects-hero">
        <div class="projects-hero-badge"><i class="fas fa-rocket"></i> Our Portfolio</div>
        <h1>Classy <span>Projects</span></h1>
        <p>Explore our premium showcase of high-performance websites and intuitive mobile applications designed for real-world impact.</p>
    </section>

    <section class="projects-section">
        
        <div class="section-title">
            <i class="fas fa-globe" style="color: #00c6ff;"></i> WEBSITES
        </div>
        <div class="projects-grid">
            
            <!-- Homeview Web -->
            <div class="project-card">
                <div class="project-image-wrapper">
                    <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=600&auto=format&fit=crop" alt="Homeview Website" class="project-image">
                    <span class="project-category">Website</span>
                </div>
                <div class="project-info">
                    <h3 class="project-title">Homeview</h3>
                    <p class="project-desc">A premium real estate platform allowing users to explore high-end property listings with immersive galleries and virtual tours.</p>
                    <div class="project-tags">
                        <span class="project-tag">React</span>
                        <span class="project-tag">Tailwind</span>
                        <span class="project-tag">Node.js</span>
                    </div>
                    <div class="project-footer">
                        <a href="#" class="project-link">View Project <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>

            <!-- FDOMS -->
            <div class="project-card">
                <div class="project-image-wrapper">
                    <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600&auto=format&fit=crop" alt="FDOMS Website" class="project-image">
                    <span class="project-category">Web System</span>
                </div>
                <div class="project-info">
                    <h3 class="project-title">FDOMS</h3>
                    <p class="project-desc">A robust Food Delivery Management System providing seamless ordering, route optimization, and real-time restaurant analytics.</p>
                    <div class="project-tags">
                        <span class="project-tag">Vue.js</span>
                        <span class="project-tag">Python</span>
                        <span class="project-tag">PostgreSQL</span>
                    </div>
                    <div class="project-footer">
                        <a href="#" class="project-link">View Project <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>

        </div>

        <div class="section-title">
            <i class="fas fa-mobile-alt" style="color: #FF7A00;"></i> MOBILE APPS
        </div>
        <div class="projects-grid">
            
            <!-- QuickLearn -->
            <div class="project-card">
                <div class="project-image-wrapper">
                    <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop" alt="QuickLearn App" class="project-image">
                    <span class="project-category">App</span>
                </div>
                <div class="project-info">
                    <h3 class="project-title">QuickLearn</h3>
                    <p class="project-desc">An interactive EdTech platform delivering personalized courses, live coding environments, and progress tracking for students.</p>
                    <div class="project-tags">
                        <span class="project-tag">Flutter</span>
                        <span class="project-tag">Firebase</span>
                        <span class="project-tag">UI/UX</span>
                    </div>
                    <div class="project-footer">
                        <a href="#" class="project-link">View Project <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>

            <!-- Homehub -->
            <div class="project-card">
                <div class="project-image-wrapper">
                    <img src="https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=600&auto=format&fit=crop" alt="Homehub App" class="project-image">
                    <span class="project-category">App</span>
                </div>
                <div class="project-info">
                    <h3 class="project-title">Homehub</h3>
                    <p class="project-desc">A smart home IoT dashboard application to control lighting, climate, and security systems from a unified interface.</p>
                    <div class="project-tags">
                        <span class="project-tag">SwiftUI</span>
                        <span class="project-tag">IoT Core</span>
                    </div>
                    <div class="project-footer">
                        <a href="#" class="project-link">View Project <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>

            <!-- Homeview App -->
            <div class="project-card">
                <div class="project-image-wrapper">
                    <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600&auto=format&fit=crop" alt="Homeview App" class="project-image">
                    <span class="project-category">App</span>
                </div>
                <div class="project-info">
                    <h3 class="project-title">Homeview App</h3>
                    <p class="project-desc">The mobile companion to the Homeview real estate platform, offering augmented reality property tours and instant agent chat.</p>
                    <div class="project-tags">
                        <span class="project-tag">Kotlin</span>
                        <span class="project-tag">ARCore</span>
                    </div>
                    <div class="project-footer">
                        <a href="#" class="project-link">View Project <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>

            <!-- Doneta -->
            <div class="project-card">
                <div class="project-image-wrapper">
                    <img src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb0?q=80&w=600&auto=format&fit=crop" alt="Doneta App" class="project-image">
                    <span class="project-category">App</span>
                </div>
                <div class="project-info">
                    <h3 class="project-title">Doneta</h3>
                    <p class="project-desc">A transparent donation and charity tracking application connecting donors directly with grassroots community campaigns.</p>
                    <div class="project-tags">
                        <span class="project-tag">React Native</span>
                        <span class="project-tag">Stripe</span>
                    </div>
                    <div class="project-footer">
                        <a href="#" class="project-link">View Project <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>

        </div>
    </section>

    {footer_part}
"""

with open('static/projects.html', 'w', encoding='utf-8') as f:
    f.write(head_part + body_html)
