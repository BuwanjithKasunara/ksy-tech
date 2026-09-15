let adminToken = sessionStorage.getItem('admin_token') || '';

const loginBox = document.getElementById('login-box');
const adminView = document.getElementById('admin-view');
const authErr = document.getElementById('auth-err');
const loginBtn = document.getElementById('login-btn');
const adminPassInput = document.getElementById('admin-pass-input');

async function verifyToken(token) {
  try {
    const res = await fetch('/api/auth/verify', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${token}` }
    });
    const data = await res.json();
    return data.valid;
  } catch {
    return false;
  }
}

async function init() {
  if (adminToken) {
    const isValid = await verifyToken(adminToken);
    if (isValid) {
      showDashboard();
      return;
    }
  }
  loginBox.style.display = 'block';
  adminView.style.display = 'none';
}

loginBtn.addEventListener('click', async () => {
  const token = adminPassInput.value.trim();
  if (!token) return;
  authErr.textContent = 'Verifying...';
  const ok = await verifyToken(token);
  if (ok) {
    adminToken = token;
    sessionStorage.setItem('admin_token', token);
    showDashboard();
  } else {
    authErr.textContent = 'Invalid secret key.';
  }
});

function showDashboard() {
  loginBox.style.display = 'none';
  adminView.style.display = 'block';
  loadProjects();
  loadTeam();
}

// --- PROJECTS MANAGEMENT ---

async function loadProjects() {
  const container = document.getElementById('projects-list');
  container.innerHTML = '<p style="color: #888;">Loading projects...</p>';
  try {
    const res = await fetch('/api/projects?all=true', {
      headers: { 'Authorization': `Bearer ${adminToken}` }
    });
    const projects = await res.json();

    if (!Array.isArray(projects) || projects.length === 0) {
      container.innerHTML = '<p style="color: #888;">No projects found.</p>';
      return;
    }

    container.innerHTML = projects.map(p => `
      <div class="item-row">
        <div class="${p.isVisible ? '' : 'item-muted'}">
          <strong>${p.title}</strong>
          <span style="opacity: 0.6; font-size: 0.85rem; margin-left: 6px;">(${p.category})</span>
          ${!p.isVisible ? '<span style="color: #94a3b8; font-size: 0.8rem; margin-left: 8px;">[Hidden]</span>' : ''}
          <div style="font-size: 0.85rem; color: #888; margin-top: 4px;">${p.description}</div>
        </div>
        <div class="action-group">
          <button class="btn-action ${p.isVisible ? 'btn-toggle-show' : 'btn-toggle-hide'}" onclick="toggleProject(${p.id})">
            <i class="fas ${p.isVisible ? 'fa-eye' : 'fa-eye-slash'}"></i> ${p.isVisible ? 'Visible' : 'Hidden'}
          </button>
          <button class="btn-action danger-btn" onclick="deleteProject(${p.id})">
            <i class="fas fa-trash"></i> Delete
          </button>
        </div>
      </div>
    `).join('');
  } catch (err) {
    container.innerHTML = '<p style="color: #ef4444;">Failed to load projects.</p>';
  }
}

async function toggleProject(id) {
  await fetch(`/api/projects/${id}/toggle`, {
    method: 'PATCH',
    headers: { 'Authorization': `Bearer ${adminToken}` }
  });
  loadProjects();
}

async function deleteProject(id) {
  if (!confirm('Are you sure you want to permanently delete this project?')) return;
  await fetch(`/api/projects/${id}`, {
    method: 'DELETE',
    headers: { 'Authorization': `Bearer ${adminToken}` }
  });
  loadProjects();
}

document.getElementById('project-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const tagsStr = document.getElementById('p-tags').value;
  const tags = tagsStr.split(',').map(t => t.trim()).filter(Boolean);

  const payload = {
    title: document.getElementById('p-title').value,
    category: document.getElementById('p-category').value,
    description: document.getElementById('p-desc').value,
    tags: tags,
    imageUrl: document.getElementById('p-img').value,
    githubUrl: document.getElementById('p-github').value,
    demoUrl: document.getElementById('p-demo').value || null
  };

  const res = await fetch('/api/projects', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${adminToken}`
    },
    body: JSON.stringify(payload)
  });

  if (res.ok) {
    document.getElementById('project-form').reset();
    loadProjects();
  } else {
    alert('Failed to add project. Please try again.');
  }
});

// --- TEAM MANAGEMENT ---

async function loadTeam() {
  const container = document.getElementById('team-list');
  container.innerHTML = '<p style="color: #888;">Loading team...</p>';
  try {
    const res = await fetch('/api/team?all=true', {
      headers: { 'Authorization': `Bearer ${adminToken}` }
    });
    const members = await res.json();

    if (!Array.isArray(members) || members.length === 0) {
      container.innerHTML = '<p style="color: #888;">No team members found.</p>';
      return;
    }

    container.innerHTML = members.map(m => `
      <div class="item-row">
        <div class="${m.isVisible ? '' : 'item-muted'}">
          <strong>${m.name}</strong> — <span style="opacity: 0.7;">${m.role}</span>
          ${m.isFounder ? '<span style="color: #DD591E; font-size: 0.8rem; margin-left: 6px;">[Founder]</span>' : ''}
          ${!m.isVisible ? '<span style="color: #94a3b8; font-size: 0.8rem; margin-left: 8px;">[Hidden]</span>' : ''}
        </div>
        <div class="action-group">
          <button class="btn-action ${m.isVisible ? 'btn-toggle-show' : 'btn-toggle-hide'}" onclick="toggleTeam('${m.id}')">
            <i class="fas ${m.isVisible ? 'fa-eye' : 'fa-eye-slash'}"></i> ${m.isVisible ? 'Visible' : 'Hidden'}
          </button>
          <button class="btn-action danger-btn" onclick="deleteMember('${m.id}')">
            <i class="fas fa-trash"></i> Delete
          </button>
        </div>
      </div>
    `).join('');
  } catch (err) {
    container.innerHTML = '<p style="color: #ef4444;">Failed to load team members.</p>';
  }
}

async function toggleTeam(id) {
  await fetch(`/api/team/${id}/toggle`, {
    method: 'PATCH',
    headers: { 'Authorization': `Bearer ${adminToken}` }
  });
  loadTeam();
}

async function deleteMember(id) {
  if (!confirm(`Are you sure you want to delete member: ${id}?`)) return;
  await fetch(`/api/team/${id}`, {
    method: 'DELETE',
    headers: { 'Authorization': `Bearer ${adminToken}` }
  });
  loadTeam();
}

document.getElementById('team-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const skillsStr = document.getElementById('m-skills').value;
  const highlightsStr = document.getElementById('m-highlights').value;

  const payload = {
    id: document.getElementById('m-id').value.trim().toLowerCase().replace(/\s+/g, '-'),
    name: document.getElementById('m-name').value.trim(),
    role: document.getElementById('m-role').value.trim(),
    isFounder: document.getElementById('m-founder').checked,
    description: document.getElementById('m-desc').value.trim(),
    image: document.getElementById('m-image').value.trim() || null,
    avatarIcon: document.getElementById('m-icon').value.trim() || 'fa-solid fa-user',
    avatarZoom: null,
    github: document.getElementById('m-github').value.trim(),
    linkedin: document.getElementById('m-linkedin').value.trim(),
    email: document.getElementById('m-email').value.trim() || null,
    phone: document.getElementById('m-phone').value.trim() || null,
    education: document.getElementById('m-education').value.trim() || null,
    keySkills: skillsStr.split(',').map(s => s.trim()).filter(Boolean),
    experienceHighlights: highlightsStr.split(',').map(h => h.trim()).filter(Boolean),
    cvPdfUrl: document.getElementById('m-cv').value.trim() || null
  };

  const res = await fetch('/api/team', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${adminToken}`
    },
    body: JSON.stringify(payload)
  });

  if (res.ok) {
    document.getElementById('team-form').reset();
    loadTeam();
  } else {
    alert('Failed to add team member. Check your admin credentials.');
  }
});

init();