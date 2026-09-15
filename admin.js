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

// Manage Projects
async function loadProjects() {
  const container = document.getElementById('projects-list');
  container.innerHTML = '<p>Loading projects...</p>';
  const res = await fetch('/api/projects');
  const projects = await res.json();

  if (projects.length === 0) {
    container.innerHTML = '<p>No projects found in database.</p>';
    return;
  }

  container.innerHTML = projects.map(p => `
    <div class="item-row">
      <div>
        <strong>${p.title}</strong> <span style="opacity: 0.6; font-size: 0.85rem;">(${p.category})</span>
        <div style="font-size: 0.85rem; color: #999;">${p.description}</div>
      </div>
      <button class="danger-btn" onclick="deleteProject(${p.id})"><i class="fas fa-trash"></i> Delete</button>
    </div>
  `).join('');
}

async function deleteProject(id) {
  if (!confirm('Are you sure you want to delete this project?')) return;
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
    alert('Failed to add project. Verify your admin key.');
  }
});

// Manage Team
async function loadTeam() {
  const container = document.getElementById('team-list');
  const res = await fetch('/api/team');
  const members = await res.json();

  container.innerHTML = members.map(m => `
    <div class="item-row">
      <div>
        <strong>${m.name}</strong> — <span style="opacity: 0.7;">${m.role}</span>
        ${m.isFounder ? '<span style="color: #DD591E; font-size: 0.8rem; margin-left: 8px;">[Co-Founder]</span>' : ''}
      </div>
      <button class="danger-btn" onclick="deleteMember('${m.id}')"><i class="fas fa-trash"></i> Delete</button>
    </div>
  `).join('');
}

async function deleteMember(id) {
  if (!confirm(`Are you sure you want to remove ${id}?`)) return;
  await fetch(`/api/team/${id}`, {
    method: 'DELETE',
    headers: { 'Authorization': `Bearer ${adminToken}` }
  });
  loadTeam();
}

init();