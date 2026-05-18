#!/bin/bash
# Transcode the ProRes .mov source files in public/videos/google-small-business
# to web-optimized H.264 MP4s alongside them. Originals are left in place.

set -euo pipefail
cd "$(dirname "$0")/.."

DIR="public/videos/google-small-business"

for src in "$DIR"/*.mov; do
  base="$(basename "$src" .mov)"
  dst="$DIR/$base.mp4"

  if [ -f "$dst" ]; then
    echo "skip (exists): $dst"
    continue
  fi

  echo
  echo "▶ $src → $dst"
  ffmpeg -hide_banner -loglevel warning -stats \
    -i "$src" \
    -c:v libx264 -crf 23 -preset medium -pix_fmt yuv420p \
    -c:a aac -b:a 192k \
    -movflags +faststart \
    "$dst"
done

echo
echo "Done. Sizes:"
ls -lh "$DIR"/*.mp4 2>/dev/null || true
