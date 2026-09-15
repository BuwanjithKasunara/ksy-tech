"use strict";
// Projects built by KSY Tech
const projects = [
    {
        id: 1,
        title: "Campus Hub Portal",
        category: "web",
        description: "Centralized web platform managing university schedules, event registrations, and real-time announcements.",
        tags: ["TypeScript", "React", "Node.js", "PostgreSQL"],
        imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",
        githubUrl: "https://github.com",
        demoUrl: "https://example.com"
    },
    {
        id: 2,
        title: "Attendance & Quiz Tracker",
        category: "mobile",
        description: "Mobile application with instant QR-code validation for university attendance and real-time in-lecture quizzes.",
        tags: ["Kotlin", "Android", "Firebase", "Material 3"],
        imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=600&q=80",
        githubUrl: "https://github.com"
    },
    {
        id: 3,
        title: "Layered Cloud ERP Engine",
        category: "web",
        description: "Modular enterprise dashboard with microservices, clear separation of concerns, and clean RESTful endpoints.",
        tags: ["Next.js", "Express", "MongoDB", "Tailwind"],
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
        githubUrl: "https://github.com"
    },
    {
        id: 4,
        title: "Student Task & Budget App",
        category: "mobile",
        description: "Cross-platform mobile application combining academic milestone tracking with personal budgeting features.",
        tags: ["Flutter", "Dart", "SQLite"],
        imageUrl: "https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?auto=format&fit=crop&w=600&q=80",
        githubUrl: "https://github.com"
    }
];
// 15 Team Members: 2 Co-Founders + 13 Specialized Team Members
const teamMembers = [
    // Co-Founders
    {
        name: "Kasunara",
        role: "Co-Founder & Technical Architect",
        description: "Guides overall system design, high-performance backends, and full-stack software architecture.",
        avatarIcon: "fa-solid fa-crown",
        isFounder: true,
        github: "https://github.com",
        linkedin: "https://linkedin.com"
    },
    {
        name: "Co-Founder Two",
        role: "Co-Founder & Head of Product",
        description: "Leads technical roadmaps, mobile product strategies, and cross-platform mobile delivery.",
        avatarIcon: "fa-solid fa-compass-drafting",
        isFounder: true,
        github: "https://github.com",
        linkedin: "https://linkedin.com"
    },
    // 13 Team Members
    {
        name: "Member 03",
        role: "Lead Mobile Developer",
        description: "Specializes in native Android architecture using Kotlin, Jetpack Compose, and coroutines.",
        avatarIcon: "fa-solid fa-mobile-screen-button",
        github: "https://github.com",
        linkedin: "https://linkedin.com"
    },
    {
        name: "Member 04",
        role: "Lead Frontend Engineer",
        description: "Builds high-performance interactive interfaces utilizing React, TypeScript, and Tailwind CSS.",
        avatarIcon: "fa-brands fa-react",
        github: "https://github.com",
        linkedin: "https://linkedin.com"
    },
    {
        name: "Member 05",
        role: "Backend & Cloud Developer",
        description: "Builds secure RESTful microservices, JWT authentication schemes, and database queries.",
        avatarIcon: "fa-solid fa-server",
        github: "https://github.com",
        linkedin: "https://linkedin.com"
    },
    {
        name: "Member 06",
        role: "Cross-Platform Mobile Dev",
        description: "Develops cross-platform iOS and Android applications using Flutter and Dart.",
        avatarIcon: "fa-solid fa-cubes",
        github: "https://github.com",
        linkedin: "https://linkedin.com"
    },
    {
        name: "Member 07",
        role: "UI/UX & Visual Designer",
        description: "Creates clean design systems, wireframes, high-fidelity prototypes, and design tokens.",
        avatarIcon: "fa-solid fa-palette",
        github: "https://github.com",
        linkedin: "https://linkedin.com"
    },
    {
        name: "Member 08",
        role: "Full-Stack Web Developer",
        description: "Develops client dashboards and integrates frontend components with backend API services.",
        avatarIcon: "fa-solid fa-code",
        github: "https://github.com",
        linkedin: "https://linkedin.com"
    },
    {
        name: "Member 09",
        role: "Database & Data Engineer",
        description: "Focuses on relational database design, SQL optimization, and NoSQL caching layers.",
        avatarIcon: "fa-solid fa-database",
        github: "https://github.com",
        linkedin: "https://linkedin.com"
    },
    {
        name: "Member 10",
        role: "DevOps & CI/CD Specialist",
        description: "Manages GitHub Actions deployment workflows, Docker containers, and hosting pipelines.",
        avatarIcon: "fa-brands fa-docker",
        github: "https://github.com",
        linkedin: "https://linkedin.com"
    },
    {
        name: "Member 11",
        role: "Mobile App Developer",
        description: "Implements responsive mobile views, offline database caching, and push notification services.",
        avatarIcon: "fa-solid fa-tablet-screen-button",
        github: "https://github.com",
        linkedin: "https://linkedin.com"
    },
    {
        name: "Member 12",
        role: "QA & Automation Engineer",
        description: "Implements unit testing, end-to-end user journeys, and automated API tests.",
        avatarIcon: "fa-solid fa-vial-circle-check",
        github: "https://github.com",
        linkedin: "https://linkedin.com"
    },
    {
        name: "Member 13",
        role: "Frontend Developer",
        description: "Passionate about modern CSS animations, accessibility standards, and responsive web layouts.",
        avatarIcon: "fa-brands fa-html5",
        github: "https://github.com",
        linkedin: "https://linkedin.com"
    },
    {
        name: "Member 14",
        role: "Backend Developer",
        description: "Develops Node.js & Express server modules with clean layered architecture patterns.",
        avatarIcon: "fa-brands fa-node-js",
        github: "https://github.com",
        linkedin: "https://linkedin.com"
    },
    {
        name: "Member 15",
        role: "Security & Systems Lead",
        description: "Monitors application vulnerabilities, secure authentication, and networking best practices.",
        avatarIcon: "fa-solid fa-shield-halved",
        github: "https://github.com",
        linkedin: "https://linkedin.com"
    }
];
// ==========================================
// 3D ORANGE RIBBON CANVAS ANIMATION
// ==========================================
class RibbonCanvas {
    canvas;
    ctx;
    step = 0;
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.resize();
        window.addEventListener('resize', () => this.resize());
        this.animate();
    }
    resize() {
        const rect = this.canvas.parentElement?.getBoundingClientRect();
        if (rect) {
            this.canvas.width = rect.width;
            this.canvas.height = rect.height;
        }
    }
    drawRibbon(offsetY, amplitude, alpha, strokeWidth, phaseShift) {
        const { width, height } = this.canvas;
        this.ctx.beginPath();
        this.ctx.lineWidth = strokeWidth;
        const gradient = this.ctx.createLinearGradient(0, height, width, 0);
        gradient.addColorStop(0, `rgba(221, 89, 30, ${alpha * 0.1})`);
        gradient.addColorStop(0.5, `rgba(221, 89, 30, ${alpha})`);
        gradient.addColorStop(1, `rgba(255, 120, 50, ${alpha * 0.8})`);
        this.ctx.strokeStyle = gradient;
        for (let x = 0; x <= width; x += 10) {
            const normalizedX = x / width;
            const arch = Math.sin(normalizedX * Math.PI) * (height * 0.45);
            const wave = Math.sin((normalizedX * 3) + this.step + phaseShift) * amplitude;
            const y = height - (arch + wave + offsetY);
            if (x === 0) {
                this.ctx.moveTo(x, y);
            }
            else {
                this.ctx.lineTo(x, y);
            }
        }
        this.ctx.stroke();
    }
    animate = () => {
        this.step += 0.015;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawRibbon(40, 20, 0.25, 45, 0);
        this.drawRibbon(70, 25, 0.4, 35, 0.4);
        this.drawRibbon(105, 30, 0.6, 25, 0.8);
        this.drawRibbon(140, 25, 0.8, 16, 1.2);
        this.drawRibbon(175, 18, 0.95, 8, 1.6);
        requestAnimationFrame(this.animate);
    };
}
// Project Rendering
function renderProjects(categoryFilter = 'all') {
    const container = document.getElementById('projects-container');
    if (!container)
        return;
    const filtered = categoryFilter === 'all'
        ? projects
        : projects.filter(p => p.category === categoryFilter);
    container.innerHTML = filtered.map(p => `
    <div class="project-card">
      <img src="${p.imageUrl}" alt="${p.title}" class="project-img" loading="lazy" />
      <div class="project-body">
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <div class="tech-tags">
          ${p.tags.map(tag => `<span>${tag}</span>`).join('')}
        </div>
        <div class="project-links">
          <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-github"></i> Repository
          </a>
          ${p.demoUrl ? `<a href="${p.demoUrl}" target="_blank" rel="noopener noreferrer"><i class="fas fa-arrow-up-right-from-square"></i> Live Demo</a>` : ''}
        </div>
      </div>
    </div>
  `).join('');
}
// Team Rendering: Separates Founders and Team Members
function renderTeam() {
    const foundersContainer = document.getElementById('founders-container');
    const membersContainer = document.getElementById('members-container');
    const founders = teamMembers.filter(m => m.isFounder);
    const regularMembers = teamMembers.filter(m => !m.isFounder);
    if (foundersContainer) {
        foundersContainer.innerHTML = founders.map(member => `
      <div class="card team-card founder-card">
        <span class="founder-badge"><i class="fas fa-certificate"></i> Co-Founder</span>
        <div class="team-avatar founder-avatar">
          <i class="${member.avatarIcon}"></i>
        </div>
        <h3>${member.name}</h3>
        <div class="role">${member.role}</div>
        <p>${member.description}</p>
        <div class="team-socials">
          <a href="${member.github}" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class="fab fa-github"></i></a>
          <a href="${member.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
        </div>
      </div>
    `).join('');
    }
    if (membersContainer) {
        membersContainer.innerHTML = regularMembers.map(member => `
      <div class="card team-card">
        <div class="team-avatar">
          <i class="${member.avatarIcon}"></i>
        </div>
        <h3>${member.name}</h3>
        <div class="role">${member.role}</div>
        <p>${member.description}</p>
        <div class="team-socials">
          <a href="${member.github}" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class="fab fa-github"></i></a>
          <a href="${member.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
        </div>
      </div>
    `).join('');
    }
}
// DOM Setup
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    renderTeam();
    new RibbonCanvas('ribbon-canvas');
    // Filter Buttons
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-filter') || 'all';
            renderProjects(filter);
        });
    });
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
    // Contact Form
    const contactForm = document.getElementById('contact-form');
    const formFeedback = document.getElementById('form-feedback');
    if (contactForm && formFeedback) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            formFeedback.style.color = '#DD591E';
            formFeedback.textContent = "Transmission received. KSY Tech will respond shortly.";
            contactForm.reset();
            setTimeout(() => {
                formFeedback.textContent = '';
            }, 5000);
        });
    }
});
