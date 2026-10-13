/**
 * Projects Gallery & Filtering Module - Divyanshu Jain
 */

document.addEventListener('DOMContentLoaded', () => {
  initProjectsSection();
});

function initProjectsSection() {
  const container = document.getElementById('projects-grid');
  const filterTabsContainer = document.getElementById('project-filter-tabs');
  
  if (!container || !window.PORTFOLIO_DATA) return;

  const { projects } = window.PORTFOLIO_DATA;
  let activeCategory = 'All';

  // 1. Render Filter Category Buttons
  if (filterTabsContainer) {
    filterTabsContainer.innerHTML = projects.categories.map((cat) => `
      <button 
        type="button" 
        data-category="${cat}"
        class="filter-btn px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
          cat === activeCategory 
            ? 'bg-violet-600/30 text-white border border-violet-500/50 shadow-[0_0_15px_rgba(139,92,246,0.25)]' 
            : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
        }"
      >
        ${cat}
      </button>
    `).join('');

    // Attach click listeners to filter tabs
    filterTabsContainer.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const selected = e.currentTarget.getAttribute('data-category');
        activeCategory = selected;

        // Update active button styles
        filterTabsContainer.querySelectorAll('.filter-btn').forEach(b => {
          b.className = `filter-btn px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
            b.getAttribute('data-category') === selected 
              ? 'bg-violet-600/30 text-white border border-violet-500/50 shadow-[0_0_15px_rgba(139,92,246,0.25)]' 
              : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
          }`;
        });

        renderProjects();
      });
    });
  }

  // 2. Render Projects Grid
  function renderProjects() {
    const filtered = activeCategory === 'All' 
      ? projects.items 
      : projects.items.filter(item => item.category === activeCategory);

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-16 text-center text-slate-400">
          <p class="text-lg">No projects found in category "${activeCategory}".</p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map((item, index) => {
      const isPlaceholder = item.isPlaceholder;
      const tagLabel = item.tag || (isPlaceholder ? 'Editable Sample' : 'Live & Verified');
      const tagBg = isPlaceholder 
        ? 'bg-amber-500/10 text-amber-300 border-amber-500/30' 
        : 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30';

      return `
        <article 
          class="glass-card glass-card-interactive rounded-2xl overflow-hidden flex flex-col group transition-all duration-300"
          data-project-id="${item.id}"
        >
          <!-- Project Visual Banner -->
          <div class="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900 border-b border-white/5">
            ${getProjectVisualMarkup(item.previewImage, item.title)}
            
            <!-- Category & Badge Overlay -->
            <div class="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
              <span class="text-xs font-semibold px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-slate-300 border border-white/10">
                ${item.category}
              </span>
              <span class="text-xs font-medium px-2.5 py-1 rounded-md border backdrop-blur-md ${tagBg}">
                ${tagLabel}
              </span>
            </div>
          </div>

          <!-- Project Card Content -->
          <div class="p-6 flex-1 flex flex-col justify-between">
            <div>
              <h3 class="text-xl font-bold font-heading text-white group-hover:text-violet-300 transition-colors flex items-center gap-2">
                ${item.title}
              </h3>
              
              <p class="mt-2.5 text-sm text-slate-400 leading-relaxed line-clamp-3">
                ${item.shortDescription}
              </p>

              <!-- Tech Badges -->
              <div class="mt-4 flex flex-wrap gap-1.5">
                ${item.techStack.map(tech => `
                  <span class="text-xs px-2.5 py-0.5 rounded-full bg-white/[0.04] text-slate-300 border border-white/10 font-mono">
                    ${tech}
                  </span>
                `).join('')}
              </div>
            </div>

            <!-- Card Actions -->
            <div class="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
              <button 
                type="button"
                class="view-project-btn text-xs font-medium text-violet-400 hover:text-violet-300 flex items-center gap-1.5 transition-colors focus:outline-none"
                data-id="${item.id}"
              >
                <span>View Details</span>
                <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
              </button>

              <div class="flex items-center gap-2">
                ${item.githubUrl ? `
                  <a 
                    href="${item.githubUrl}" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    class="p-2 rounded-lg bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                    title="View GitHub Repository"
                    aria-label="GitHub Repository for ${item.title}"
                  >
                    <i data-lucide="github" class="w-4 h-4"></i>
                  </a>
                ` : ''}

                ${item.liveDemoUrl && item.liveDemoUrl !== '#' ? `
                  <a 
                    href="${item.liveDemoUrl}" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    class="p-2 rounded-lg bg-violet-500/20 text-violet-300 hover:bg-violet-500/30 hover:text-white transition-colors"
                    title="Open Live Preview"
                    aria-label="Live preview for ${item.title}"
                  >
                    <i data-lucide="external-link" class="w-4 h-4"></i>
                  </a>
                ` : ''}
              </div>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Re-initialize Lucide icons in updated DOM
    if (window.lucide) {
      window.lucide.createIcons();
    }

    // Attach spotlight effect listeners
    container.querySelectorAll('.glass-card-interactive').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    });

    // Attach Project Detail Modal Listeners
    container.querySelectorAll('.view-project-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const projId = btn.getAttribute('data-id');
        const project = projects.items.find(p => p.id === projId);
        if (project) openProjectModal(project);
      });
    });
  }

  // Initial render
  renderProjects();
}

/**
 * Generates custom, high-tech visual mockups for each project type
 */
function getProjectVisualMarkup(previewKey, title) {
  switch (previewKey) {
    case 'portfolio':
      return `
        <div class="w-full h-full bg-gradient-to-br from-violet-950/60 via-slate-900 to-cyan-950/50 flex flex-col justify-center items-center p-6 group-hover:scale-105 transition-transform duration-500">
          <div class="w-full max-w-xs rounded-xl bg-slate-950/80 border border-violet-500/30 p-3 shadow-2xl backdrop-blur-sm">
            <div class="flex items-center gap-1.5 mb-2.5 pb-2 border-b border-white/10">
              <div class="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
              <div class="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
              <div class="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
              <span class="ml-2 text-[10px] text-slate-400 font-mono">portfolio.divyanshu.dev</span>
            </div>
            <div class="space-y-1.5">
              <div class="h-2 w-3/4 rounded bg-gradient-to-r from-violet-400 to-cyan-400 opacity-80"></div>
              <div class="h-1.5 w-1/2 rounded bg-slate-700"></div>
              <div class="flex gap-1 pt-1">
                <div class="h-4 w-12 rounded bg-violet-900/60 border border-violet-700/50"></div>
                <div class="h-4 w-12 rounded bg-cyan-900/60 border border-cyan-700/50"></div>
              </div>
            </div>
          </div>
        </div>
      `;
    case 'taskmanager':
      return `
        <div class="w-full h-full bg-gradient-to-br from-slate-900 via-indigo-950/50 to-slate-900 flex flex-col justify-center items-center p-6 group-hover:scale-105 transition-transform duration-500">
          <div class="w-full max-w-xs rounded-xl bg-slate-950/80 border border-indigo-500/30 p-3 shadow-2xl backdrop-blur-sm">
            <div class="flex items-center justify-between mb-2">
              <span class="text-[11px] font-semibold text-indigo-300">Sprint Dashboard</span>
              <span class="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400">3/4 Done</span>
            </div>
            <div class="space-y-2">
              <div class="flex items-center gap-2 p-1.5 rounded bg-white/[0.04] border border-white/5">
                <div class="w-3 h-3 rounded bg-indigo-500 flex items-center justify-center text-[8px] text-white">✓</div>
                <div class="text-[10px] text-slate-300">DSA Problem Set 4</div>
              </div>
              <div class="flex items-center gap-2 p-1.5 rounded bg-white/[0.04] border border-white/5">
                <div class="w-3 h-3 rounded border border-slate-600"></div>
                <div class="text-[10px] text-slate-400">Engineering Math Notes</div>
              </div>
            </div>
          </div>
        </div>
      `;
    case 'weather':
      return `
        <div class="w-full h-full bg-gradient-to-br from-cyan-950/50 via-slate-900 to-blue-950/60 flex flex-col justify-center items-center p-6 group-hover:scale-105 transition-transform duration-500">
          <div class="w-full max-w-xs rounded-xl bg-slate-950/80 border border-cyan-500/30 p-3 shadow-2xl backdrop-blur-sm flex items-center justify-between">
            <div>
              <div class="text-[10px] text-cyan-400 font-mono">JAIPUR, IN</div>
              <div class="text-2xl font-bold text-white tracking-tight">28°C</div>
              <div class="text-[10px] text-slate-400">Clear Skies · Humidity 42%</div>
            </div>
            <div class="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-400 to-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <span class="text-lg">☀️</span>
            </div>
          </div>
        </div>
      `;
    case 'algorithm':
      return `
        <div class="w-full h-full bg-gradient-to-br from-violet-950/50 via-slate-900 to-fuchsia-950/40 flex flex-col justify-center items-center p-6 group-hover:scale-105 transition-transform duration-500">
          <div class="w-full max-w-xs rounded-xl bg-slate-950/80 border border-fuchsia-500/30 p-3 shadow-2xl backdrop-blur-sm">
            <div class="flex justify-between text-[10px] font-mono text-fuchsia-300 mb-2">
              <span>QuickSort Visualizer</span>
              <span>O(N log N)</span>
            </div>
            <div class="flex items-end justify-between h-14 gap-1 px-1">
              <div class="w-3 bg-fuchsia-500/60 rounded-t h-[40%]"></div>
              <div class="w-3 bg-violet-500/60 rounded-t h-[80%]"></div>
              <div class="w-3 bg-cyan-400 rounded-t h-[100%] shadow-[0_0_8px_#22d3ee]"></div>
              <div class="w-3 bg-indigo-500/60 rounded-t h-[60%]"></div>
              <div class="w-3 bg-purple-500/60 rounded-t h-[30%]"></div>
              <div class="w-3 bg-fuchsia-400/80 rounded-t h-[70%]"></div>
            </div>
          </div>
        </div>
      `;
    default:
      return `
        <div class="w-full h-full bg-slate-900 flex items-center justify-center p-6 text-slate-600">
          <i data-lucide="code" class="w-12 h-12"></i>
        </div>
      `;
  }
}

/**
 * Open Project Details Modal
 */
function openProjectModal(project) {
  const modal = document.getElementById('project-modal');
  if (!modal) return;

  const content = document.getElementById('project-modal-body');
  if (content) {
    content.innerHTML = `
      <div class="p-6 sm:p-8 space-y-6">
        <!-- Header -->
        <div class="flex items-start justify-between gap-4">
          <div>
            <div class="flex items-center gap-2 mb-2">
              <span class="text-xs px-2.5 py-1 rounded-md bg-violet-500/10 text-violet-300 border border-violet-500/20 font-medium">
                ${project.category}
              </span>
              <span class="text-xs px-2.5 py-1 rounded-md ${
                project.isPlaceholder 
                  ? 'bg-amber-500/10 text-amber-300 border border-amber-500/20' 
                  : 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20'
              }">
                ${project.tag || (project.isPlaceholder ? 'Editable Sample Project' : 'Verified Project')}
              </span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-bold font-heading text-white">
              ${project.title}
            </h2>
          </div>
          <button 
            type="button" 
            onclick="closeProjectModal()" 
            class="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>
        </div>

        <!-- Visual Preview -->
        <div class="h-48 sm:h-56 w-full rounded-xl overflow-hidden border border-white/10">
          ${getProjectVisualMarkup(project.previewImage, project.title)}
        </div>

        <!-- Detailed Description -->
        <div>
          <h4 class="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 font-mono">Overview</h4>
          <p class="text-slate-300 leading-relaxed text-sm sm:text-base">
            ${project.fullDescription || project.shortDescription}
          </p>
        </div>

        <!-- Key Highlights -->
        ${project.highlights && project.highlights.length > 0 ? `
          <div>
            <h4 class="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 font-mono">Key Highlights</h4>
            <ul class="space-y-2">
              ${project.highlights.map(h => `
                <li class="flex items-start gap-2.5 text-sm text-slate-300">
                  <i data-lucide="check-circle-2" class="w-4 h-4 text-cyan-400 shrink-0 mt-0.5"></i>
                  <span>${h}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        ` : ''}

        <!-- Tech Stack -->
        <div>
          <h4 class="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 font-mono">Technologies & Tools</h4>
          <div class="flex flex-wrap gap-2">
            ${project.techStack.map(t => `
              <span class="text-xs px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-200 font-mono">
                ${t}
              </span>
            `).join('')}
          </div>
        </div>

        <!-- Actions -->
        <div class="pt-4 border-t border-white/10 flex flex-wrap gap-3">
          ${project.githubUrl ? `
            <a 
              href="${project.githubUrl}" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="btn-glow-primary px-5 py-2.5 rounded-xl text-sm font-semibold inline-flex items-center gap-2"
            >
              <i data-lucide="github" class="w-4 h-4"></i>
              <span>View Source on GitHub</span>
            </a>
          ` : ''}

          ${project.liveDemoUrl && project.liveDemoUrl !== '#' ? `
            <a 
              href="${project.liveDemoUrl}" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="btn-glow-secondary px-5 py-2.5 rounded-xl text-sm font-semibold inline-flex items-center gap-2"
            >
              <i data-lucide="external-link" class="w-4 h-4"></i>
              <span>Open Live Demo</span>
            </a>
          ` : ''}

          <button 
            type="button" 
            onclick="closeProjectModal()" 
            class="px-5 py-2.5 rounded-xl text-sm text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors ml-auto"
          >
            Close
          </button>
        </div>
      </div>
    `;

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Attach to window for global access
window.openProjectModal = openProjectModal;
window.closeProjectModal = closeProjectModal;

// Close on backdrop click
document.addEventListener('click', (e) => {
  const modal = document.getElementById('project-modal');
  if (modal && e.target === modal) {
    closeProjectModal();
  }
});

// Global modal close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeProjectModal();
    if (typeof window.closeResumeModal === 'function') window.closeResumeModal();
  }
});

