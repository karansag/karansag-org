# karansag.org

Minimal Jekyll-based personal website and blog.

## Writing posts

Create Markdown files in `_posts/` named like:

```text
YYYY-MM-DD-title.md
```

Example:

```md
---
layout: post
title: "My Post"
---

Post body in Markdown.
```

Posts auto-appear on the homepage under "Posts" — no other edits needed.

## Drafts

Work-in-progress posts live in `_drafts/` with **no date prefix**:

```text
_drafts/my-post.md
```

GitHub Pages never publishes `_drafts/`, so they're safe to commit. The local
preview shows them (dated from the file's modified time). To publish, move the
file into `_posts/` and add a `YYYY-MM-DD-` date prefix:

```bash
git mv _drafts/my-post.md _posts/2026-06-11-my-post.md
```

## Local preview

Run `./preview.sh`, then visit `http://localhost:4000` (Ctrl-C to stop).

This uses Docker (no system Ruby/Bundler required) and includes `_drafts/`
with live-reload. Gems are cached in a Docker volume, so only the first run is
slow.

## Deployment

GitHub Pages builds and publishes the site automatically from `master`.
