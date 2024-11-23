
#!/bin/bash

set -ex

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "${script_dir}"

echo "Docs directory: $script_dir"
cd docs_website
pnpm install @docusaurus/theme-mermaid@3.5.2
pnpm install