#!/bin/bash

set -ex

script_dir=$(dirname "$0")
cd ${script_dir}
echo "Docs directory: $script_dir"
cd docs_website
yarn
yarn build


