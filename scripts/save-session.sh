#!/bin/bash
# Saves a project state snapshot to OneDrive every 3 hours
PROJECT="/Users/joshu/OneDrive - COTEDEM SAS/proyectos/rp-design-construction"
SESSIONS_DIR="$PROJECT/session-logs"
TIMESTAMP=$(date '+%Y-%m-%d_%H-%M')

mkdir -p "$SESSIONS_DIR"

# Project state snapshot
{
  echo "# Project Snapshot — $TIMESTAMP"
  echo ""
  echo "## Git Status"
  /usr/bin/git -C "$PROJECT" status --short
  echo ""
  echo "## Recent Commits"
  /usr/bin/git -C "$PROJECT" log --oneline -10
  echo ""
  echo "## Files Changed (last 3h)"
  /usr/bin/git -C "$PROJECT" diff --name-only HEAD~3 HEAD 2>/dev/null || echo "(no changes)"
} > "$SESSIONS_DIR/snapshot-$TIMESTAMP.md"

# Git commit + push
cd "$PROJECT" || exit 1
/usr/bin/git add -A
if ! /usr/bin/git diff --cached --quiet; then
  /usr/bin/git commit -m "backup: auto-save $TIMESTAMP"
  /usr/bin/git push origin main
fi
