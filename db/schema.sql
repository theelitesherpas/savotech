-- Savo Technologies — homepage persistence layer (PostgreSQL)
-- Leads (all public forms) and assistant chat logs.

CREATE TABLE IF NOT EXISTS leads (
  id            BIGSERIAL PRIMARY KEY,
  name          TEXT        NOT NULL,
  email         TEXT        NOT NULL,
  phone         TEXT,
  company       TEXT,
  source        TEXT        NOT NULL DEFAULT 'estimator',
  services      JSONB       NOT NULL DEFAULT '[]'::jsonb,
  project_type  TEXT,
  complexity    TEXT,
  timeline      TEXT,
  roles         JSONB       NOT NULL DEFAULT '[]'::jsonb,
  notes         TEXT,
  estimate_min  INTEGER,
  estimate_max  INTEGER,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS chat_logs (
  id           BIGSERIAL PRIMARY KEY,
  session_key  TEXT        NOT NULL,
  question     TEXT        NOT NULL,
  answer       TEXT        NOT NULL,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_leads_created_at  ON leads (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_chat_created_at   ON chat_logs (created_at DESC);
