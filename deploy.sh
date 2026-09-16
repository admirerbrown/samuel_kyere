#!/usr/bin/env bash

set -euo pipefail

# ==================================================
# Portfolio Deployment Script
#
# Development worktree:
#   /home/admirer/new_portfolio
#   branch: master
#
# Deployment worktree:
#   /home/admirer/new_portfolio-pages
#   branch: gh-pages
# ==================================================

PROJECT_DIR="/home/admirer/new_portfolio"
PAGES_DIR="/home/admirer/new_portfolio-pages"

echo "========================================"
echo " Portfolio Deployment"
echo "========================================"

# --------------------------------------------------
# 1. Verify we're running from the main project
# --------------------------------------------------

CURRENT_DIR="$(pwd)"

if [[ "$CURRENT_DIR" != "$PROJECT_DIR" ]]; then
    echo ""
    echo "ERROR: Run this script from:"
    echo "  $PROJECT_DIR"
    echo ""
    echo "Current directory:"
    echo "  $CURRENT_DIR"
    exit 1
fi

# --------------------------------------------------
# 2. Verify we're on master
# --------------------------------------------------

BRANCH="$(git branch --show-current)"

if [[ "$BRANCH" != "master" ]]; then
    echo ""
    echo "ERROR: Expected branch 'master'."
    echo "Currently on: $BRANCH"
    exit 1
fi

# --------------------------------------------------
# 3. Make sure master is clean
# --------------------------------------------------

echo ""
echo "[1/6] Checking master..."

if [[ -n "$(git status --porcelain)" ]]; then
    echo "ERROR: master has uncommitted changes."
    echo ""
    git status
    echo ""
    echo "Commit or stash your changes before deploying."
    exit 1
fi

echo "✓ master is clean"

# --------------------------------------------------
# 4. Build production site
# --------------------------------------------------

echo ""
echo "[2/6] Building production site..."

npm run build

# --------------------------------------------------
# 5. Verify build output
# --------------------------------------------------

if [[ ! -d "$PROJECT_DIR/out" ]]; then
    echo ""
    echo "ERROR: Build succeeded but 'out/' was not found."
    exit 1
fi

if [[ ! -f "$PROJECT_DIR/out/index.html" ]]; then
    echo ""
    echo "ERROR: out/index.html was not generated."
    exit 1
fi

if [[ ! -d "$PROJECT_DIR/out/_next" ]]; then
    echo ""
    echo "ERROR: out/_next was not generated."
    exit 1
fi

echo "✓ Production build created"
echo "✓ index.html verified"
echo "✓ _next assets verified"

# --------------------------------------------------
# 6. Verify gh-pages worktree
# --------------------------------------------------

echo ""
echo "[3/6] Checking gh-pages worktree..."

if [[ ! -d "$PAGES_DIR" ]]; then
    echo ""
    echo "ERROR: gh-pages worktree was not found:"
    echo "  $PAGES_DIR"
    exit 1
fi

cd "$PAGES_DIR"

PAGES_BRANCH="$(git branch --show-current)"

if [[ "$PAGES_BRANCH" != "gh-pages" ]]; then
    echo ""
    echo "ERROR: Expected gh-pages worktree to be on 'gh-pages'."
    echo "Currently on: $PAGES_BRANCH"
    exit 1
fi

if [[ -n "$(git status --porcelain)" ]]; then
    echo ""
    echo "ERROR: gh-pages has uncommitted changes."
    echo ""
    git status
    echo ""
    echo "Resolve those changes before deploying."
    exit 1
fi

echo "✓ gh-pages is clean"

# --------------------------------------------------
# 7. Copy production build
# --------------------------------------------------

echo ""
echo "[4/6] Updating gh-pages..."

rsync -a --delete \
    --exclude=".git" \
    --exclude=".nojekyll" \
    "$PROJECT_DIR/out/" \
    "$PAGES_DIR/"

# GitHub Pages must keep this file.
touch "$PAGES_DIR/.nojekyll"

# --------------------------------------------------
# 8. Verify deployment files
# --------------------------------------------------

if [[ ! -f "$PAGES_DIR/index.html" ]]; then
    echo ""
    echo "ERROR: index.html is missing from gh-pages."
    exit 1
fi

if [[ ! -d "$PAGES_DIR/_next" ]]; then
    echo ""
    echo "ERROR: _next assets are missing from gh-pages."
    exit 1
fi

if [[ ! -f "$PAGES_DIR/.nojekyll" ]]; then
    echo ""
    echo "ERROR: .nojekyll is missing from gh-pages."
    exit 1
fi

echo "✓ gh-pages updated"
echo "✓ index.html verified"
echo "✓ _next assets verified"
echo "✓ .nojekyll verified"

# --------------------------------------------------
# 9. Check whether anything actually changed
# --------------------------------------------------

if [[ -z "$(git status --porcelain)" ]]; then
    echo ""
    echo "[5/6] No deployment changes detected."
    echo ""
    echo "The deployed site is already up to date."
    echo ""
    exit 0
fi

echo ""
echo "[5/6] Changes to be deployed:"
echo ""

git status --short

# --------------------------------------------------
# 10. Commit deployment
# --------------------------------------------------

git add -A

git commit -m "Deploy latest portfolio build"

# --------------------------------------------------
# 11. Push gh-pages
# --------------------------------------------------

echo ""
echo "[6/6] Pushing gh-pages..."

git push origin gh-pages

# --------------------------------------------------
# 12. Done
# --------------------------------------------------

echo ""
echo "========================================"
echo " Deployment successful!"
echo "========================================"
echo ""
echo "Live site:"
echo "https://admirerbrown.github.io/samuel_kyere/"
echo ""
