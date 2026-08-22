<h1 align="center">Sentrio</h1>

<p align="center">
  <em>All you need. Nothing you don't. Open-source project management that works for you, not against you.</em>
</p>

<p align="center">
  <a href="https://sentrio.ansalprojects.dpdns.org/"><strong>Website</strong></a>
</p>

---

## 💡 Why Sentrio?

Modern project management tools have a problem: they have *too many* features. Every notification, unnecessary button, and complex workflow pulls developers away from what actually matters: writing code and building great software. 

Sentrio exists to fix this. Built on the principle that **less is more**, Sentrio is designed to be invisible. It amplifies your natural workflow without forcing you to adapt to its own. Every feature exists because it solves a real problem, not because it looks impressive in a demo.

## ✨ Features

- **Core Workflows:** Projects, Kanban boards, backlog planning, and workflow rules.
- **Task Organization:** Labels, priorities, task relations, comments, and file attachments.
- **Time & Tracking:** Built-in time tracking and comprehensive activity history.
- **Access Control:** Workspace roles, permissions, and notifications.
- **Free Single Sign-On (SSO):** Google, GitHub, Discord, and any standards-compliant OIDC provider included natively on all builds.
- **Integrations:** GitHub, Gitea, Slack, Discord, Telegram, outgoing webhooks, and API keys.
- **AI Ready:** Built-in MCP server for AI agents.
- **Data Portability:** Per-project JSON export and import, plus a documented REST API.

## 🚀 Getting Started

Sentrio is designed to be incredibly easy to self-host. It requires only one application container plus PostgreSQL. Redis is completely optional and only needed for real-time fan-out across multiple API instances.

### Self-Hosting via Docker Compose

```yaml
version: '3.8'
services:
  sentrio:
    image: ghcr.io/ansalpandey/sentrio:latest
    ports:
      - "5173:5173"
    environment:
      - DATABASE_URL=postgresql://user:pass@db:5432/sentrio
      - CORS_ORIGINS=http://localhost:5173,[https://yourdomain.com](https://yourdomain.com)
    depends_on:
      - db

  db:
    image: postgres:15-alpine
    environment:
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=pass
      - POSTGRES_DB=sentrio
    volumes:
      - sentrio_data:/var/lib/postgresql/data

volumes:
  sentrio_data:
