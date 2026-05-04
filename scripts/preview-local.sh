#!/bin/zsh
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
GEM_ROOT="$ROOT_DIR/vendor/bundle/ruby/2.6.0"
PORT="${PORT:-4000}"

if [[ ! -d "$GEM_ROOT" ]]; then
  echo "Missing local gem bundle at $GEM_ROOT"
  exit 1
fi

export PATH="$GEM_ROOT/bin:$PATH"
export GEM_HOME="$GEM_ROOT"
export GEM_PATH="$GEM_ROOT"
export JEKYLL_NO_BUNDLER_REQUIRE=true

cd "$ROOT_DIR"

arch -x86_64 ruby -S jekyll build --config _config.yml,_config_local.yml "$@"

cd "$ROOT_DIR/_site"
exec python3 -m http.server "$PORT"
