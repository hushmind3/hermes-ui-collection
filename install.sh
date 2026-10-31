#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")" && pwd)"
TARGET="${HERMES_HOME:-$HOME/.hermes}/desktop-plugins/hermes-ui-collection"

mkdir -p "$TARGET"
cp -f "$ROOT/plugin.js" "$TARGET/plugin.js"

echo "Installed: $TARGET/plugin.js"
echo "Restart Hermes Desktop if the theme does not appear immediately."
