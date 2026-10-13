/**
 * Main Application Logic - Divyanshu Jain Portfolio
 * Core interactions: Typing effect, canvas particles, navigation, resume modal, scroll effects
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initTypingEffect();
  initParticleCanvas();
  initSkillsSection();
  initAchievementsSection();
  initResumeModal();
  initBackToTop();
  updateDynamicContent();
});

/**
 * Update dynamic text and years from PORTFOLIO_DATA
 */
function updateDynamicContent() {
  const data = window.PORTFOLIO_DATA;
  if (!data) return;

  // Dynamic Year in footer
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Populate any static placeholders
  const nameSpans = document.querySelectorAll('.bind-full-name');
  nameSpans.forEach(el => el.textContent = data.personalInfo.fullName);

  const titleSpans = document.querySelectorAll('.bind-professional-title');
  titleSpans.forEach(el => el.textContent = data.personalInfo.professionalTitle);

  const collegeSpans = document.querySelectorAll('.bind-college');
  collegeSpans.forEach(el => el.textContent = data.personalInfo.college);
}

/**
 * Responsive Navigation & Scroll Spy
 */
function initNavbar() {
  const header = document.getElementById('site-header');
  const mobileToggle = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Header background on scroll
  const handleScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add('nav-scrolled');
    } else {
      header.classList.remove('nav-scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Mobile menu toggle
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu on clicking any link
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Active section indicator via Intersection Observer
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${currentId}`) {
              link.classList.add('active', 'text-white');
              link.classList.remove('text-slate-400');
            } else {
              link.classList.remove('active', 'text-white');
              link.classList.add('text-slate-400');
            }
          });
        }
      });
    }, {
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0
    });

    sections.forEach(sec => observer.observe(sec));
  }
}

/**
 * Dynamic Typing Effect in Hero Section
 */
function initTypingEffect() {
  const target = document.getElementById('typing-text');
  if (!target) return;

  const titles = window.PORTFOLIO_DATA?.personalInfo?.typingTitles || [
    "Aspiring Software Developer",
    "Tech Enthusiast",
    "Problem Solver",
    "Future Full-Stack Developer",
    "AI & ML Explorer"
  ];

  let titleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typeSpeed = 85;
  const eraseSpeed = 45;
  const pauseEnd = 2000;
  const pauseStart = 400;

  function type() {
    const currentTitle = titles[titleIndex];

    if (!isDeleting) {
      target.textContent = currentTitle.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentTitle.length) {
        isDeleting = true;
        setTimeout(type, pauseEnd);
        return;
      }
      setTimeout(type, typeSpeed);
    } else {
      target.textContent = currentTitle.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
        setTimeout(type, pauseStart);
        return;
      }
      setTimeout(type, eraseSpeed);
    }
  }

  // Start typing
  type();
}

/**
 * Interactive Particle Constellation Canvas
 */
function initParticleCanvas() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;

  // Check prefers-reduced-motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  const ctx = canvas.getContext('2d');
  let animationFrameId;
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const particles = [];
  const particleCount = Math.min(Math.floor(width / 24), 55);
  const maxDistance = 110;

  const mouse = { x: null, y: null, radius: 140 };

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }, { passive: true });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  const handleResize = () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  };
  window.addEventListener('resize', handleResize);

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.45;
      this.vy = (Math.random() - 0.5) * 0.45;
      this.radius = Math.random() * 1.6 + 0.8;
      this.color = Math.random() > 0.4 ? 'rgba(139, 92, 246, ' : 'rgba(6, 182, 212, ';
      this.baseAlpha = Math.random() * 0.4 + 0.2;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx = -this.vx;
      if (this.y < 0 || this.y > height) this.vy = -this.vy;

      // Mouse interactive push
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          this.x -= (dx / dist) * force * 1.5;
          this.y -= (dy / dist) * force * 1.5;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color + this.baseAlpha + ')';
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDistance) {
          const alpha = (1 - dist / maxDistance) * 0.15;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    animationFrameId = requestAnimationFrame(animate);
  }

  animate();
}

/**
 * Render Technical Skills Section
 */
function initSkillsSection() {
  const container = document.getElementById('skills-container');
  if (!container || !window.PORTFOLIO_DATA) return;

  const { skills } = window.PORTFOLIO_DATA;

  container.innerHTML = skills.categories.map((cat) => {
    return `
      <div class="glass-card glass-card-interactive p-6 rounded-2xl flex flex-col justify-between">
        <div>
          <!-- Category Header -->
          <div class="flex items-center gap-3 mb-5">
            <div class="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
              <i data-lucide="${cat.icon || 'code'}" class="w-5 h-5"></i>
            </div>
            <h3 class="text-lg font-bold font-heading text-white">
              ${cat.name}
            </h3>
          </div>

          <!-- Skills Badges -->
          <div class="space-y-3">
            ${cat.items.map(item => `
              <div class="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-violet-500/20 hover:bg-white/[0.05] transition-all">
                <div class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  <span class="text-sm font-medium text-slate-200">${item.name}</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-[11px] text-slate-400 font-mono hidden sm:inline">${item.level}</span>
                  <span class="text-[10px] px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20 font-medium">
                    ${item.status}
                  </span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }).join('');

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

/**
 * Render Milestones & Achievements Section
 */
function initAchievementsSection() {
  const container = document.getElementById('achievements-container');
  if (!container || !window.PORTFOLIO_DATA) return;

  const { achievements } = window.PORTFOLIO_DATA;

  container.innerHTML = achievements.items.map((item) => {
    const isPlaceholder = item.isPlaceholder;
    return `
      <div class="glass-card glass-card-interactive p-6 rounded-2xl relative overflow-hidden">
        <div class="flex items-start justify-between gap-4 mb-4">
          <div>
            <span class="text-xs px-2.5 py-1 rounded-md font-mono ${
              isPlaceholder 
                ? 'bg-amber-500/10 text-amber-300 border border-amber-500/20' 
                : 'bg-violet-500/10 text-violet-300 border border-violet-500/20'
            }">
              ${item.category}
            </span>
            <h3 class="text-lg font-bold font-heading text-white mt-2">
              ${item.title}
            </h3>
            <p class="text-sm text-cyan-400 mt-0.5">
              ${item.organization} · <span class="text-slate-400">${item.date}</span>
            </p>
          </div>
          <div class="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-400 shrink-0">
            <i data-lucide="${isPlaceholder ? 'bookmark' : 'award'}" class="w-5 h-5"></i>
          </div>
        </div>

        <p class="text-sm text-slate-300 leading-relaxed">
          ${item.description}
        </p>

        ${isPlaceholder ? `
          <div class="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-amber-400/80 font-mono">
            <span>Editable placeholder</span>
            <span>Update in js/portfolio-data.js</span>
          </div>
        ` : ''}
      </div>
    `;
  }).join('');

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

/**
 * Interactive Resume Modal with Native Print / PDF Download
 */
function initResumeModal() {
  const modal = document.getElementById('resume-modal');
  const triggerBtns = document.querySelectorAll('.resume-trigger-btn');
  const closeBtn = document.getElementById('close-resume-modal-btn');
  const printBtn = document.getElementById('print-resume-btn');

  if (!modal) return;

  triggerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openResumeModal();
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeResumeModal);
  }

  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }
}

function openResumeModal() {
  const modal = document.getElementById('resume-modal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeResumeModal() {
  const modal = document.getElementById('resume-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Attach to window
window.openResumeModal = openResumeModal;
window.closeResumeModal = closeResumeModal;

// Close resume modal on backdrop click
document.addEventListener('click', (e) => {
  const modal = document.getElementById('resume-modal');
  if (modal && e.target === modal) {
    closeResumeModal();
  }
});


/**
 * Smooth Back to Top Button
 */
function initBackToTop() {
  const btn = document.getElementById('back-to-top-btn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.remove('opacity-0', 'pointer-events-none');
      btn.classList.add('opacity-100', 'pointer-events-auto');
    } else {
      btn.classList.add('opacity-0', 'pointer-events-none');
      btn.classList.remove('opacity-100', 'pointer-events-auto');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
