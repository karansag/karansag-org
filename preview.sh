#!/usr/bin/env bash
# Local preview of the site (including _drafts/) via Docker — no system Ruby needed.
# Open http://localhost:4000 once it's running. Ctrl-C to stop.
set -euo pipefail
cd "$(dirname "$0")"

docker run --rm --name jekyll-preview \
  -v "$PWD":/app -w /app \
  -v karansag-gems:/usr/local/bundle \
  -p 4000:4000 \
  ruby:3.2 \
  bash -c "bundle install && bundle exec jekyll serve --drafts --livereload --host 0.0.0.0"
