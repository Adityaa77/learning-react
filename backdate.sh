#!/bin/bash

# -----------------------------
# Config
# -----------------------------
REPO_NAME="learning-react"         # Replace with your GitHub repo name
GITHUB_USER="Adityaa77"  # Replace with your GitHub username
GITHUB_URL="https://github.com/Adityaa77/learning-react"

# Start and end dates
start="2025-01-30"
end="2025-02-18"
current="$start"

# -----------------------------
# Initialize Git repo
# -----------------------------
git init
git remote add origin $GITHUB_URL

# Add all files except ignored ones
git add .

# -----------------------------
# Loop through each date and commit
# -----------------------------
while [ "$(date -d "$current" +%Y-%m-%d)" != "$(date -d "$end + 1 day" +%Y-%m-%d)" ]; do
  GIT_AUTHOR_DATE="$current 10:00:00" GIT_COMMITTER_DATE="$current 10:00:00" \
  git commit -m "Progress on $current"
  current=$(date -I -d "$current + 1 day")
done

# -----------------------------
# Push to GitHub
# -----------------------------
git branch -M main
git push -u origin main
