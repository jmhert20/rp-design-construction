#!/bin/bash
PROJECT="/Users/joshu/OneDrive - COTEDEM SAS/proyectos/rp-design-construction"

cd "$PROJECT" || exit 1

/usr/bin/git add -A

if ! /usr/bin/git diff --cached --quiet; then
  /usr/bin/git commit -m "backup: auto-save $(date '+%Y-%m-%d %H:%M')"
  /usr/bin/git push origin main
fi
