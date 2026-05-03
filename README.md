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

## Local preview

If Bundler is installed:

```bash
bundle install
bundle exec jekyll serve
```

Then visit `http://localhost:4000`.

## Deployment

GitHub Pages builds and publishes the site automatically from `master`.
