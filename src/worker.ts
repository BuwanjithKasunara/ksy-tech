export interface Env {
  ksy_db: any;
  ADMIN_KEY?: string;
  ASSETS: any;
}

const jsonResponse = (data: unknown, status = 200) => {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
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

    const checkAuth = (): boolean => {
      const authHeader = request.headers.get('Authorization') || '';
      const token = authHeader.replace(/^Bearer\s+/i, '').trim();
      const expected = (env.ADMIN_KEY || 'ksy2026').trim();
      return Boolean(token && token === expected);
    };

    // --- PROJECTS ENDPOINTS ---

    // 1. GET /api/projects
    // If ?all=true is passed with admin token, returns all (for admin panel). Otherwise returns only visible.
    if (url.pathname === '/api/projects' && request.method === 'GET') {
      try {
        const showAll = url.searchParams.get('all') === 'true' && checkAuth();
        const query = showAll
          ? 'SELECT * FROM projects ORDER BY id ASC'
          : 'SELECT * FROM projects WHERE is_visible IS NULL OR is_visible = 1 ORDER BY id ASC';
        
        const { results } = await env.ksy_db.prepare(query).all();
        const parsed = (results || []).map((p: any) => ({
          id: p.id,
          title: p.title,
          category: p.category,
          description: p.description,
          tags: p.tags ? (typeof p.tags === 'string' ? JSON.parse(p.tags) : p.tags) : [],
          imageUrl: p.image_url,
          githubUrl: p.github_url,
          demoUrl: p.demo_url,
          isVisible: p.is_visible !== 0,
        }));
        return jsonResponse(parsed);
      } catch (err: any) {
        return jsonResponse({ error: err.message }, 500);
      }
    }

    // 2. POST /api/projects (Create)
    if (url.pathname === '/api/projects' && request.method === 'POST') {
      if (!checkAuth()) return jsonResponse({ error: 'Unauthorized' }, 401);
      try {
        const body = await request.json() as any;
        const result = await env.ksy_db.prepare(
          `INSERT INTO projects (title, category, description, tags, image_url, github_url, demo_url, is_visible)
           VALUES (?, ?, ?, ?, ?, ?, ?, 1)`
        ).bind(
          body.title,
          body.category,
          body.description,
          JSON.stringify(body.tags || []),
          body.imageUrl,
          body.githubUrl,
          body.demoUrl || null
        ).run();
        return jsonResponse({ success: true, id: result.meta.last_row_id });
      } catch (err: any) {
        return jsonResponse({ error: err.message }, 500);
      }
    }

    // 3. PATCH /api/projects/:id/toggle (Toggle Visibility)
    if (url.pathname.startsWith('/api/projects/') && url.pathname.endsWith('/toggle') && request.method === 'PATCH') {
      if (!checkAuth()) return jsonResponse({ error: 'Unauthorized' }, 401);
      const parts = url.pathname.split('/');
      const id = parts[3];
      await env.ksy_db.prepare(
        `UPDATE projects SET is_visible = CASE WHEN is_visible = 0 THEN 1 ELSE 0 END WHERE id = ?`
      ).bind(id).run();
      return jsonResponse({ success: true });
    }

    // 4. DELETE /api/projects/:id
    if (url.pathname.startsWith('/api/projects/') && request.method === 'DELETE') {
      if (!checkAuth()) return jsonResponse({ error: 'Unauthorized' }, 401);
      const id = url.pathname.split('/').pop();
      await env.ksy_db.prepare('DELETE FROM projects WHERE id = ?').bind(id).run();
      return jsonResponse({ success: true });
    }

    // --- TEAM MEMBERS ENDPOINTS ---

    // 5. GET /api/team
    // If ?all=true is passed with admin token, returns all. Otherwise only visible.
    if (url.pathname === '/api/team' && request.method === 'GET') {
      try {
        const showAll = url.searchParams.get('all') === 'true' && checkAuth();
        const query = showAll
          ? 'SELECT * FROM team_members ORDER BY is_founder DESC, id ASC'
          : 'SELECT * FROM team_members WHERE is_visible IS NULL OR is_visible = 1 ORDER BY is_founder DESC, id ASC';

        const { results } = await env.ksy_db.prepare(query).all();
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
          keySkills: m.key_skills ? (typeof m.key_skills === 'string' ? JSON.parse(m.key_skills) : m.key_skills) : [],
          experienceHighlights: m.experience_highlights ? (typeof m.experience_highlights === 'string' ? JSON.parse(m.experience_highlights) : m.experience_highlights) : [],
          cvPdfUrl: m.cv_pdf_url,
          isVisible: m.is_visible !== 0,
        }));
        return jsonResponse(parsed);
      } catch (err: any) {
        return jsonResponse({ error: err.message }, 500);
      }
    }

    // 6. POST /api/team (Create / Update)
    if (url.pathname === '/api/team' && request.method === 'POST') {
      if (!checkAuth()) return jsonResponse({ error: 'Unauthorized' }, 401);
      try {
        const body = await request.json() as any;
        await env.ksy_db.prepare(
          `INSERT OR REPLACE INTO team_members (
            id, name, role, description, image, avatar_icon, avatar_zoom,
            is_founder, github, linkedin, email, phone, education,
            key_skills, experience_highlights, cv_pdf_url, is_visible
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1)`
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
      } catch (err: any) {
        return jsonResponse({ error: err.message }, 500);
      }
    }

    // 7. PATCH /api/team/:id/toggle (Toggle Visibility)
    if (url.pathname.startsWith('/api/team/') && url.pathname.endsWith('/toggle') && request.method === 'PATCH') {
      if (!checkAuth()) return jsonResponse({ error: 'Unauthorized' }, 401);
      const parts = url.pathname.split('/');
      const id = parts[3];
      await env.ksy_db.prepare(
        `UPDATE team_members SET is_visible = CASE WHEN is_visible = 0 THEN 1 ELSE 0 END WHERE id = ?`
      ).bind(id).run();
      return jsonResponse({ success: true });
    }

    // 8. DELETE /api/team/:id
    if (url.pathname.startsWith('/api/team/') && request.method === 'DELETE') {
      if (!checkAuth()) return jsonResponse({ error: 'Unauthorized' }, 401);
      const id = url.pathname.split('/').pop();
      await env.ksy_db.prepare('DELETE FROM team_members WHERE id = ?').bind(id).run();
      return jsonResponse({ success: true });
    }

    // 9. POST /api/auth/verify
    if (url.pathname === '/api/auth/verify' && request.method === 'POST') {
      return jsonResponse({ valid: checkAuth() });
    }

    // Static Asset fallback
    return env.ASSETS.fetch(request);
  },
};