#!/bin/bash

set -ex

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "${script_dir}"

echo "Docs directory: $script_dir"
cd docs_website

# Function to check if yarn is installed
is_yarn_installed() {
    if command -v yarn &> /dev/null; then
        return 0
    else
        return 1
    fi
}

# Update and install prerequisites
sudo apt update
sudo apt install -y curl gnupg

# Check if yarn is installed
if is_yarn_installed; then
    echo "Yarn is already installed."
else
    echo "Yarn is not installed. Installing yarn..."

    # Add Yarn GPG key and repository
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

    # Update and install yarn
    sudo apt update
    sudo apt install -y yarn

    # Verify installation
    if is_yarn_installed; then
        echo "Yarn successfully installed!"
    else
        echo "Yarn installation failed."
    fi
fi




yarn

