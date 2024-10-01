#!/bin/bash

set -ex

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "${script_dir}"

echo "Docs directory: $script_dir"
cd docs_website
yarn build
cd ..

#rsync -rv --delete ${script_dir}/docs_website/build/ root@info.ourworld.tf:/root/hero/www/info/docs/

rm -rf /root/hero/www/info/docs/{*,.*}

cp -rp ${script_dir}/docs_website/build/{.,}* /root/hero/www/info/docs/