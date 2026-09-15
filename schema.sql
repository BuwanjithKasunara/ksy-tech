-- Team Members Table
CREATE TABLE IF NOT EXISTS team_members (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  description TEXT,
  image TEXT,
  avatar_icon TEXT,
  avatar_zoom TEXT,
  is_founder INTEGER DEFAULT 0,
  github TEXT,
  linkedin TEXT,
  email TEXT,
  phone TEXT,
  education TEXT,
  key_skills TEXT,
  experience_highlights TEXT,
  cv_pdf_url TEXT
);

-- Projects Table
CREATE TABLE IF NOT EXISTS projects (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT,
  tags TEXT,
  image_url TEXT,
  github_url TEXT,
  demo_url TEXT
);