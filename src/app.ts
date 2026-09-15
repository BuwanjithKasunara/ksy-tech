interface Project {
  id: number;
  title: string;
  category: 'web' | 'mobile';
  description: string;
  tags: string[];
  imageUrl: string;
  githubUrl: string;
  demoUrl?: string;
}

interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  avatarIcon?: string;
  image?: string;
  avatarZoom?: string;
  isFounder?: boolean;
  github: string;
  linkedin: string;
  // CV Credentials & Dossier Info
  email?: string;
  phone?: string;
  education?: string;
  keySkills?: string[];
  experienceHighlights?: string[];
  cvPdfUrl?: string;
}

// Sample Undergraduate Projects
const projects: Project[] = [
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

// 15 Startup Profiles with CV Credentials & Custom Framing
const teamMembers: TeamMember[] = [
  // 2 Co-Founders
  {
    id: "kasunara",
    name: "BKB Kasunara",
    role: "Co-Founder & Technical Architect",
    description: "Guides overall system design, layered architecture, cloud backends, and full-stack software development.",
    image: "assets/kasunaraksy.png",
    avatarZoom: "transform: scale(1.55); object-position: 50% 25%;",
    isFounder: true,
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "contact@ksytech.dev",
    education: "BSc (Hons) in Information Technology - General Sir John Kotelawala Defence University",
    keySkills: ["System Architecture", "TypeScript", "Node.js", "Java", "Cloud Infrastructure", "API Design"],
    experienceHighlights: [
      "Architected high-throughput layered software systems and asynchronous event drivers",
      "Directed core technical frameworks and engineering guidelines for KSY Tech"
    ]
  },
  {
    id: "aththanayake",
    name: "AMKD Aththanayake",
    role: "Co-Founder & Head of Product",
    description: "Leads technical roadmaps, mobile product strategies, and cross-platform mobile delivery.",
    image: "assets/kavishkaksy.png",
    avatarZoom: "transform: scale(1.15); object-position: 50% 15%;",
    isFounder: true,
    github: "https://github.com",
    linkedin: "https://www.linkedin.com/in/kavishka-dilshan-07044b243/",
    education: "BSc (Hons) in Information Technology - General Sir John Kotelawala Defence University",
    keySkills: ["Product Strategy", "Mobile Architecture", "Agile Roadmap Execution", "Cross-Platform Delivery"],
    experienceHighlights: [
      "Formulates product architecture for enterprise mobile applications",
      "Leads cross-platform mobile sprint planning and release roadmaps"
    ]
  },

  // 13 Core Team Members
  {
    id: "linali",
    name: "Linali Wickrama",
    role: "UI/UX Designer & Brand Communications",
    description: "Crafts intuitive web & mobile user experiences in Figma and directs technical media, project demos, and brand communications.",
    image: "assets/linaliksy.png",
    avatarZoom: "transform: scale(1.2); object-position: 50% 20%;",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "linalihasharal@gmail.com",
    phone: "+94 704618886",
    education: "BSc (Hons) in Information Technology - KDU (2024-Present) | Diploma in IT (SLTCA)",
    keySkills: ["Figma", "Canva", "UI/UX Prototyping", "HTML/CSS", "Java", "MySQL", "Media Production"],
    experienceHighlights: [
      "Compere and host at International Research Conference & GitSpark",
      "Uni Media Compering Head & Rotaract International Service Director",
      "High-fidelity responsive UI prototyping and client design system handoffs"
    ],
    cvPdfUrl: "Linali.pdf"
  },
  {
    id: "dinusha",
    name: "Dinusha Kodithuwakku",
    role: "Project Operations & Frontend Associate",
    description: "Coordinates development sprints, project operations, and UI implementations across web and mobile client deliverables.",
    image: "assets/senehasksy.png",
    avatarZoom: "transform: scale(1.2); object-position: 50% 18%;",
    github: "https://github.com",
    linkedin: "https://www.linkedin.com/in/senehas-kodithuwakku-20b2682b7",
    email: "dinushasenehas2002@gmail.com",
    phone: "+94 778414210",
    education: "BSc (Hons) in Information Technology - KDU (2024-Present) | Rahula College Matara",
    keySkills: ["Project Coordination", "Agile & Scrum", "HTML/CSS", "Java", "Photoshop", "Vibe Coding"],
    experienceHighlights: [
      "Batch Representative (Intake 41 IT/IS) & IEEE Project Chair",
      "SEDS Southern Campus Coordinator & BCS Logistics Lead",
      "University Colours 2025 in Karate & Event Coordinator for SPL 2025"
    ],
    cvPdfUrl: "Dinusha.pdf"
  },
  {
    id: "kawindi",
    name: "Kawindi Muhandiram",
    role: "QA Engineer & Cloud Operations",
    description: "Drives software quality assurance, system testing, bug reporting, and AWS/Docker deployment verification for client products.",
    image: "assets/kawindiksy.png",
    avatarIcon: "fa-solid fa-vial-circle-check",
    github: "https://github.com",
    linkedin: "https://www.linkedin.com/in/KawindiMuhandiram",
    email: "kawindimuhandiram@gmail.com",
    phone: "+76 6785865",
    education: "BSc (Hons) in Information Technology - KDU (3rd Year Undergraduate)",
    keySkills: ["Software QA", "Functional & System Testing", "Bug Reporting", "AWS", "Docker", "Java", "Python"],
    experienceHighlights: [
      "3 weeks testing practical experience on KDU University Hospital Management System",
      "2nd Place in Software Projects category at TechXhibit '26",
      "PR Lead (TechXhibit '26) & Secretary Team (IEEE XELERATE '26)"
    ],
    cvPdfUrl: "Kawindi.pdf"
  },
  {
    id: "dehemi",
    name: "Dehemi Wijesuriya",
    role: "Finance Operations & Frontend Developer",
    description: "Directs project budgeting, financial operations, and client coordination while contributing to React frontend implementations.",
    avatarIcon: "fa-solid fa-coins",
    github: "https://github.com",
    linkedin: "https://www.linkedin.com/in/dehemiwijesuriya",
    email: "dehemiwijesuriya21@gmail.com",
    phone: "+76 3120199",
    education: "BSc (Hons) in Information Technology - KDU | Diploma in Psychology (IMBS)",
    keySkills: ["Financial Management", "Budgeting", "React", "HTML/CSS", "UI/UX Design", "Git/GitHub"],
    experienceHighlights: [
      "Treasurer for IEEE WIE Student Branch Affinity Group, KDU",
      "Finance Lead for IEEE WIE PIYAWARA CSR Project",
      "Student Coordinator for KDU Career Fair 2026 liaising with corporate exhibitors"
    ],
    cvPdfUrl: "Dehemi.pdf"
  },
{
  id: "chamath",
  name: "Chamath Rasanjana",
  role: "Next.js Full-Stack Developer & Media Lead",
  description: "Builds modern Next.js/Node.js web systems and generative AI integrations while directing visual media and video production.",
  avatarIcon: "fa-solid fa-code-branch",
  github: "https://github.com/Chamathmee",
  linkedin: "https://l1nk.dev/6w1q607",
  email: "chamathrasanjana2003@gmail.com",
  education: "BSc (Hons) in Information Technology - KDU (3rd Year) | CCNA Coursework",
  keySkills: ["Next.js", "React / React Native", "Node.js", "Python", "Flask", "Gemini API", "MongoDB", "Videography"],
  experienceHighlights: [
    "Developed Gemini API-integrated air quality and asthma advisory platform",
    "QA Team Member for KDU University Hospital Management System",
    "Built sports ground facility booking system and Next.js hardware management tools"
  ],
  cvPdfUrl: "Chamath.pdf"
},
 {
  id: "pethmi",
  name: "Pethmi Serasinghe",
  role: "Full-Stack Web Developer & QA Specialist",
  description: "Specializes in MERN stack web applications, AI scheduling algorithms, and enterprise quality assurance testing.",
  avatarIcon: "fa-solid fa-layer-group",
  github: "https://github.com/Pethmi001",
  linkedin: "https://h1.nu/1y99P",
  email: "pethmiserasinghe@gmail.com",
  education: "BSc (Hons) in Information Technology - KDU (3rd Year) | AI/ML Certification (SLIIT)",
  keySkills: ["MERN Stack", "React.js", "Node.js", "MongoDB", "Express.js", "Python", "Software QA", "Figma"],
  experienceHighlights: [
    "QA Team Member for KDU University Hospital Management System",
    "Developed MERN POS & Inventory System with rental/restoration tracking",
    "Engineered AI-based university examination timetable scheduling system"
  ],
  cvPdfUrl: "Pethmi.pdf"
},
 {
  id: "adithya",
  name: "A.K. Jayasundara",
  role: "Cloud & AI Solutions Engineer",
  description: "Architects serverless cloud platforms, real-time Firebase applications, and AI-driven workflows with React and Node.js.",
  image: "assets/adithyaksy.png", // Add his portrait here or use avatarIcon: "fa-solid fa-cloud"
  avatarZoom: "transform: scale(1.2); object-position: 50% 15%;",
  github: "https://github.com",
  linkedin: "https://www.linkedin.com/in/adithya-jayasundara-397871394",
  email: "adithyakesara12345@gmail.com",
  phone: "0702203306",
  education: "BSc (Hons) in Information Technology - KDU (Expected 2027)",
  keySkills: ["React.js", "Firebase", "Node.js", "Prompt Engineering", "Python", "FastAPI", "C# / .NET", "gRPC"],
  experienceHighlights: [
    "Engineered GuardEye smart security booking platform with live GPS tracking",
    "Developed SkyPulse AI weather platform using Gemini API natural language generation",
    "Experienced in serverless Firestore architectures and real-time push alerts"
  ],
  cvPdfUrl: "Adithya.pdf"
},
{
  id: "sarangi",
  name: "Kavindya Rajapaksha",
  role: "Associate Product Manager & UI/UX Designer",
  description: "Directs project coordination, sprint documentation, and intuitive wireframes while ensuring quality control across client portals.",
  avatarIcon: "fa-solid fa-diagram-project",
  github: "https://github.com",
  linkedin: "https://www.linkedin.com/in/kavindya-rajapakshaksr03/",
  email: "kavindyarajapaksha2003@gmail.com",
  phone: "+94 71 538 5858",
  education: "BSc (Hons) in Information Technology - KDU (3rd Year Undergraduate)",
  keySkills: ["UI/UX Design", "Wireframing", "Project Management", "Business Analysis", "Software Testing", "Documentation"],
  experienceHighlights: [
    "Project Manager & UI/UX Designer for Travora tour booking system",
    "Secretary of the IEEE Student Branch of KDU (2+ years leadership)",
    "Software QA tester for Online Banking System and Hospital Information Management System (HIMS)"
  ],
  cvPdfUrl: "Sarangi.pdf"
},
/*
  {
    id: "member-11",
    name: "Member 11",
    role: "Mobile App Developer",
    description: "Implements responsive mobile views, offline database caching, and push notification services.",
    avatarIcon: "fa-solid fa-tablet-screen-button",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    keySkills: ["Flutter", "Dart", "Firebase Cloud Messaging"]
  },
  {
    id: "member-12",
    name: "Member 12",
    role: "Backend & Systems Lead",
    description: "Monitors microservices stability, backend caching layers, and high-performance algorithms.",
    avatarIcon: "fa-solid fa-server",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    keySkills: ["Node.js", "Go", "Distributed Systems"]
  },
  {
    id: "member-13",
    name: "Member 13",
    role: "Frontend Developer",
    description: "Passionate about modern CSS animations, accessibility standards, and responsive web layouts.",
    avatarIcon: "fa-brands fa-html5",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    keySkills: ["HTML5", "CSS3", "JavaScript", "WCAG Accessibility"]
  },
  {
    id: "member-14",
    name: "Member 14",
    role: "Cross-Platform Mobile Dev",
    description: "Develops cross-platform iOS and Android applications using Flutter and SQLite.",
    avatarIcon: "fa-solid fa-cubes",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    keySkills: ["Flutter", "Dart", "SQLite"]
  },
  {
    id: "member-15",
    name: "Member 15",
    role: "Security & Systems Lead",
    description: "Monitors application vulnerabilities, secure authentication, and networking best practices.",
    avatarIcon: "fa-solid fa-shield-halved",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    keySkills: ["AppSec", "OAuth2", "Network Penetration Testing"]
  } */
];

// 3D Sculpted Volumetric Tunnel Arches Canvas
interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  alpha: number;
}

class RibbonCanvas {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private step: number = 0;
  private particles: Particle[] = [];

  constructor(canvasId: string) {
    this.canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d')!;
    this.resize();
    this.initParticles();
    window.addEventListener('resize', () => this.resize());
    this.animate();
  }

  private resize(): void {
    const rect = this.canvas.parentElement?.getBoundingClientRect();
    if (rect) {
      const dpr = window.devicePixelRatio || 1;
      this.canvas.width = rect.width * dpr;
      this.canvas.height = rect.height * dpr;
      this.ctx.resetTransform();
      this.ctx.scale(dpr, dpr);
    }
  }

  private initParticles(): void {
    this.particles = [];
    for (let i = 0; i < 35; i++) {
      this.particles.push({
        x: Math.random() * 1200,
        y: Math.random() * 600,
        size: Math.random() * 2 + 0.8,
        speedY: -(Math.random() * 0.4 + 0.2),
        speedX: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.7 + 0.2
      });
    }
  }

  private draw3DVolumetricBand(
    apexYRatio: number,
    thickness: number,
    tilt: number,
    speedFactor: number,
    baseColor: { r: number; g: number; b: number },
    highlightAlpha: number
  ): void {
    const rect = this.canvas.parentElement?.getBoundingClientRect();
    if (!rect) return;
    const width = rect.width;
    const height = rect.height;

    const breath = Math.sin(this.step * speedFactor) * 12;
    const apexX = width * (0.42 + tilt * 0.08);
    const apexY = height * apexYRatio + breath;

    const startX = -width * 0.15;
    const startY = height * 1.05;
    const endX = width * 1.15;
    const endY = height * 1.02;

    this.ctx.beginPath();
    this.ctx.moveTo(startX, startY - thickness);
    this.ctx.quadraticCurveTo(apexX, apexY - thickness, endX, endY - thickness);
    this.ctx.lineTo(endX, endY);
    this.ctx.quadraticCurveTo(apexX, apexY, startX, startY);
    this.ctx.closePath();

    const bodyGradient = this.ctx.createLinearGradient(apexX, apexY - thickness, apexX, apexY + thickness * 0.8);
    bodyGradient.addColorStop(0, `rgba(${baseColor.r}, ${baseColor.g}, ${baseColor.b}, 0.95)`);
    bodyGradient.addColorStop(0.35, `rgba(${Math.min(255, baseColor.r + 30)}, ${baseColor.g}, ${baseColor.b}, 0.85)`);
    bodyGradient.addColorStop(0.7, `rgba(35, 12, 5, 0.9)`);
    bodyGradient.addColorStop(1, `rgba(8, 3, 1, 0.95)`);

    this.ctx.fillStyle = bodyGradient;
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.moveTo(startX, startY - thickness);
    this.ctx.quadraticCurveTo(apexX, apexY - thickness, endX, endY - thickness);

    const rimGradient = this.ctx.createLinearGradient(0, 0, width, 0);
    rimGradient.addColorStop(0, `rgba(221, 89, 30, 0.2)`);
    rimGradient.addColorStop(0.35, `rgba(255, 145, 80, ${highlightAlpha})`);
    rimGradient.addColorStop(0.55, `rgba(255, 195, 145, ${highlightAlpha * 1.15})`);
    rimGradient.addColorStop(1, `rgba(221, 89, 30, 0.15)`);

    this.ctx.lineWidth = 2.5;
    this.ctx.strokeStyle = rimGradient;
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(startX, startY);
    this.ctx.quadraticCurveTo(apexX, apexY, endX, endY);
    this.ctx.lineWidth = 1.8;
    this.ctx.strokeStyle = 'rgba(0, 0, 0, 0.65)';
    this.ctx.stroke();
  }

  private renderParticles(width: number, height: number): void {
    this.particles.forEach(p => {
      p.y += p.speedY;
      p.x += p.speedX;

      if (p.y < 0) {
        p.y = height + 10;
        p.x = Math.random() * width;
      }

      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(221, 89, 30, ${p.alpha})`;
      this.ctx.shadowBlur = 8;
      this.ctx.shadowColor = '#DD591E';
      this.ctx.fill();
      this.ctx.shadowBlur = 0;
    });
  }

  private animate = (): void => {
    this.step += 0.012;

    const rect = this.canvas.parentElement?.getBoundingClientRect();
    if (rect) {
      this.ctx.clearRect(0, 0, rect.width, rect.height);
      const width = rect.width;
      const height = rect.height;

      const centerGlow = this.ctx.createRadialGradient(
        width * 0.45, height * 0.65, 30,
        width * 0.45, height * 0.65, width * 0.55
      );
      centerGlow.addColorStop(0, 'rgba(221, 89, 30, 0.4)');
      centerGlow.addColorStop(0.45, 'rgba(130, 40, 10, 0.18)');
      centerGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      this.ctx.fillStyle = centerGlow;
      this.ctx.fillRect(0, 0, width, height);

      this.draw3DVolumetricBand(0.12, 110, -0.4, 0.7, { r: 120, g: 38, b: 10 }, 0.55);
      this.draw3DVolumetricBand(0.24, 90, -0.2, 0.85, { r: 160, g: 52, b: 14 }, 0.7);
      this.draw3DVolumetricBand(0.38, 75, 0.0, 1.0, { r: 215, g: 78, b: 24 }, 0.95);
      this.draw3DVolumetricBand(0.52, 60, 0.2, 1.15, { r: 221, g: 89, b: 30 }, 0.85);
      this.draw3DVolumetricBand(0.66, 50, 0.35, 1.3, { r: 180, g: 60, b: 18 }, 0.7);

      this.renderParticles(width, height);
    }

    requestAnimationFrame(this.animate);
  };
}

// Render Projects List
function renderProjects(categoryFilter: string = 'all'): void {
  const container = document.getElementById('projects-container');
  if (!container) return;

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

// Open Member Dossier & CV
function openMemberModal(memberId: string): void {
  const modal = document.getElementById('member-modal');
  const modalContent = document.getElementById('modal-content');
  const member = teamMembers.find(m => m.id === memberId);

  if (!modal || !modalContent || !member) return;

  const avatarHtml = member.image
    ? `<img src="${member.image}" alt="${member.name}" style="${member.avatarZoom || ''}" />`
    : `<div class="team-avatar" style="width: 100%; height: 100%;"><i class="${member.avatarIcon || 'fa-solid fa-user'}"></i></div>`;

  modalContent.innerHTML = `
    <div class="dossier-header">
      <div class="dossier-avatar">
        ${avatarHtml}
      </div>
      <div class="dossier-meta">
        <h2>${member.name}</h2>
        <div class="role-tag">${member.role}</div>
        <div class="contact-row">
          ${member.email ? `<div><i class="fas fa-envelope"></i> ${member.email}</div>` : ''}
          ${member.phone ? `<div><i class="fas fa-phone"></i> ${member.phone}</div>` : ''}
          <div><a href="${member.linkedin}" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i> LinkedIn Profile</a></div>
          <div><a href="${member.github}" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i> GitHub</a></div>
        </div>
      </div>
    </div>

    <div class="dossier-section">
      <h4><i class="fas fa-user-tie"></i> Executive Summary</h4>
      <p>${member.description}</p>
    </div>

    ${member.education ? `
      <div class="dossier-section">
        <h4><i class="fas fa-graduation-cap"></i> Academic Education</h4>
        <p>${member.education}</p>
      </div>
    ` : ''}

    ${member.keySkills && member.keySkills.length > 0 ? `
      <div class="dossier-section">
        <h4><i class="fas fa-laptop-code"></i> Core Competencies & Skills</h4>
        <div class="skill-pill-list">
          ${member.keySkills.map(s => `<span class="skill-pill">${s}</span>`).join('')}
        </div>
      </div>
    ` : ''}

    ${member.experienceHighlights && member.experienceHighlights.length > 0 ? `
      <div class="dossier-section">
        <h4><i class="fas fa-award"></i> Highlights & Leadership</h4>
        <ul style="padding-left: 1.2rem; color: #ccc; line-height: 1.6;">
          ${member.experienceHighlights.map(h => `<li>${h}</li>`).join('')}
        </ul>
      </div>
    ` : ''}

    <div class="cv-action-row">
      ${member.cvPdfUrl ? `
        <a href="${member.cvPdfUrl}" target="_blank" class="btn btn-primary">
          <i class="fas fa-file-pdf"></i> View Official CV
        </a>
      ` : ''}
      <a href="mailto:${member.email || 'ksytechlk@gmail.com'}" class="btn btn-secondary">
        <i class="fas fa-paper-plane"></i> Contact Directly
      </a>
    </div>
  `;

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeMemberModal(): void {
  const modal = document.getElementById('member-modal');
  if (modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

// Render Founders and Core Members
function renderTeam(): void {
  const foundersContainer = document.getElementById('founders-container');
  const membersContainer = document.getElementById('members-container');

  const founders = teamMembers.filter(m => m.isFounder);
  const regularMembers = teamMembers.filter(m => !m.isFounder);

  // Universal avatar renderer for image vs. icon fallback
  const renderAvatar = (m: TeamMember, extraClass: string = '') => {
    if (m.image) {
      return `
        <div class="avatar-frame ${extraClass}">
          <img src="${m.image}" alt="${m.name}" class="team-avatar-img" style="${m.avatarZoom || ''}" />
        </div>
      `;
    }
    return `
      <div class="team-avatar ${extraClass}">
        <i class="${m.avatarIcon || 'fa-solid fa-user'}"></i>
      </div>
    `;
  };

  if (foundersContainer) {
    foundersContainer.innerHTML = founders.map(member => `
      <div class="card team-card founder-card" data-member-id="${member.id}">
        <span class="founder-badge"><i class="fas fa-certificate"></i> Co-Founder</span>
        ${renderAvatar(member, 'founder-avatar')}
        <h3>${member.name}</h3>
        <div class="role">${member.role}</div>
        <p>${member.description}</p>
        <div class="team-socials">
          <a href="${member.github}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()"><i class="fab fa-github"></i></a>
          <a href="${member.linkedin}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()"><i class="fab fa-linkedin"></i></a>
        </div>
      </div>
    `).join('');
  }

  if (membersContainer) {
    membersContainer.innerHTML = regularMembers.map(member => `
      <div class="card team-card" data-member-id="${member.id}">
        ${renderAvatar(member)}
        <h3>${member.name}</h3>
        <div class="role">${member.role}</div>
        <p>${member.description}</p>
        <div class="team-socials">
          <a href="${member.github}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()"><i class="fab fa-github"></i></a>
          <a href="${member.linkedin}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()"><i class="fab fa-linkedin"></i></a>
        </div>
      </div>
    `).join('');
  }

  // Bind click handlers to cards
  document.querySelectorAll<HTMLElement>('.team-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-member-id');
      if (id) openMemberModal(id);
    });
  });
}

// Lifecycle Initialization
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  renderTeam();

  new RibbonCanvas('ribbon-canvas');

  // Modal Dismiss Listeners
  const modalCloseBtn = document.getElementById('modal-close');
  const modalBackdrop = document.getElementById('member-modal');

  modalCloseBtn?.addEventListener('click', closeMemberModal);
  modalBackdrop?.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeMemberModal();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMemberModal();
  });

  // Interactive Cursor Torch
  const cursorGlow = document.getElementById('cursor-glow');
  if (cursorGlow) {
    window.addEventListener('mousemove', (e: MouseEvent) => {
      cursorGlow.style.left = `${e.clientX}px`;
      cursorGlow.style.top = `${e.clientY}px`;
    });
  }

  // Filter Buttons
  const filterBtns = document.querySelectorAll<HTMLButtonElement>('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter') || 'all';
      renderProjects(filter);
    });
  });

  // Mobile Navigation Toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Collapsible Core Members List
  const seeMoreBtn = document.getElementById('see-more-btn');
  const seeMoreText = document.getElementById('see-more-text');
  const collapseWrapper = document.getElementById('team-collapse-wrapper');
  const headerToggle = document.getElementById('team-header-toggle');
  let isExpanded = false;

  const toggleTeamCollapse = () => {
    if (!collapseWrapper) return;
    isExpanded = !isExpanded;

    if (isExpanded) {
      collapseWrapper.classList.remove('collapsed');
      collapseWrapper.style.maxHeight = `${collapseWrapper.scrollHeight + 50}px`;
      if (seeMoreText) seeMoreText.textContent = 'Show Less';
      document.body.classList.add('is-expanded');
    } else {
      collapseWrapper.style.maxHeight = '480px';
      setTimeout(() => {
        collapseWrapper.classList.add('collapsed');
      }, 100);
      if (seeMoreText) seeMoreText.textContent = 'See More Team Members';
      document.body.classList.remove('is-expanded');

      headerToggle?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  seeMoreBtn?.addEventListener('click', toggleTeamCollapse);
  headerToggle?.addEventListener('click', toggleTeamCollapse);

  // Contact Form Submission Handler
  const contactForm = document.getElementById('contact-form') as HTMLFormElement | null;
  const formFeedback = document.getElementById('form-feedback');

  if (contactForm && formFeedback) {
    contactForm.addEventListener('submit', (e: Event) => {
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