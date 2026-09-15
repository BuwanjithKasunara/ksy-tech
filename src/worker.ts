export interface Env {
  ksy_db: any; // Cloudflare D1 Database binding
  ADMIN_KEY?: string;
  ASSETS: any; // Static asset fetcher
}

const jsonResponse = (data: unknown, status = 200) => {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
};

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (request.method === 'OPTIONS') {
      return jsonResponse({ ok: true });
    }

    // Helper: Verify Bearer Token against ADMIN_KEY secret
    const checkAuth = (): boolean => {
      const authHeader = request.headers.get('Authorization');
      const token = authHeader?.replace(/^Bearer\s+/i, '');
      return Boolean(env.ADMIN_KEY && token && token === env.ADMIN_KEY);
    };

    // --- PUBLIC & ADMIN API ENDPOINTS ---

    // 1. GET /api/projects - Public fetch
    if (url.pathname === '/api/projects' && request.method === 'GET') {
      const { results } = await env.ksy_db.prepare('SELECT * FROM projects ORDER BY id ASC').all();
      const parsed = (results || []).map((p: any) => ({
        id: p.id,
        title: p.title,
        category: p.category,
        description: p.description,
        tags: p.tags ? JSON.parse(p.tags) : [],
        imageUrl: p.image_url,
        githubUrl: p.github_url,
        demoUrl: p.demo_url,
      }));
      return jsonResponse(parsed);
    }

    // 2. POST /api/projects - Admin create
    if (url.pathname === '/api/projects' && request.method === 'POST') {
      if (!checkAuth()) return jsonResponse({ error: 'Unauthorized' }, 401);
      const body = await request.json() as any;
      const { title, category, description, tags, imageUrl, githubUrl, demoUrl } = body;

      const result = await env.ksy_db.prepare(
        `INSERT INTO projects (title, category, description, tags, image_url, github_url, demo_url)
         VALUES (?, ?, ?, ?, ?, ?, ?)`
      ).bind(
        title,
        category,
        description,
        JSON.stringify(tags || []),
        imageUrl,
        githubUrl,
        demoUrl || null
      ).run();

      return jsonResponse({ success: true, id: result.meta.last_row_id });
    }

    // 3. DELETE /api/projects/:id - Admin remove
    if (url.pathname.startsWith('/api/projects/') && request.method === 'DELETE') {
      if (!checkAuth()) return jsonResponse({ error: 'Unauthorized' }, 401);
      const id = url.pathname.split('/').pop();
      await env.ksy_db.prepare('DELETE FROM projects WHERE id = ?').bind(id).run();
      return jsonResponse({ success: true });
    }

    // 4. GET /api/team - Public fetch
    if (url.pathname === '/api/team' && request.method === 'GET') {
      const { results } = await env.ksy_db.prepare('SELECT * FROM team_members ORDER BY is_founder DESC, id ASC').all();
      const parsed = (results || []).map((m: any) => ({
        id: m.id,
        name: m.name,
        role: m.role,
        description: m.description,
        image: m.image,
        avatarIcon: m.avatar_icon,
        avatarZoom: m.avatar_zoom,
        isFounder: Boolean(m.is_founder),
        github: m.github,
        linkedin: m.linkedin,
        email: m.email,
        phone: m.phone,
        education: m.education,
        keySkills: m.key_skills ? JSON.parse(m.key_skills) : [],
        experienceHighlights: m.experience_highlights ? JSON.parse(m.experience_highlights) : [],
        cvPdfUrl: m.cv_pdf_url,
      }));
      return jsonResponse(parsed);
    }

    // 5. POST /api/team - Admin insert/update
    if (url.pathname === '/api/team' && request.method === 'POST') {
      if (!checkAuth()) return jsonResponse({ error: 'Unauthorized' }, 401);
      const body = await request.json() as any;
      await env.ksy_db.prepare(
        `INSERT OR REPLACE INTO team_members (
          id, name, role, description, image, avatar_icon, avatar_zoom,
          is_founder, github, linkedin, email, phone, education,
          key_skills, experience_highlights, cv_pdf_url
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
      ).bind(
        body.id,
        body.name,
        body.role,
        body.description || null,
        body.image || null,
        body.avatarIcon || null,
        body.avatarZoom || null,
        body.isFounder ? 1 : 0,
        body.github || null,
        body.linkedin || null,
        body.email || null,
        body.phone || null,
        body.education || null,
        JSON.stringify(body.keySkills || []),
        JSON.stringify(body.experienceHighlights || []),
        body.cvPdfUrl || null
      ).run();

      return jsonResponse({ success: true });
    }

    // 6. DELETE /api/team/:id - Admin remove
    if (url.pathname.startsWith('/api/team/') && request.method === 'DELETE') {
      if (!checkAuth()) return jsonResponse({ error: 'Unauthorized' }, 401);
      const id = url.pathname.split('/').pop();
      await env.ksy_db.prepare('DELETE FROM team_members WHERE id = ?').bind(id).run();
      return jsonResponse({ success: true });
    }

    // 7. POST /api/auth/verify - Check admin credentials
    if (url.pathname === '/api/auth/verify' && request.method === 'POST') {
      return jsonResponse({ valid: checkAuth() });
    }

    // Fallback: serve static site assets
    return env.ASSETS.fetch(request);
  },
};