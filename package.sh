#!/bin/bash

# Prompt for the version number
read -p "Enter the version number (e.g., 0.0.1): " version_number

# Create the package named fayufox-[version_number].xpi excluding shell.nix, package.sh, and hidden files/folders using Deflate algorithm
echo "Packaging all files and folders into fayufox-${version_number}.xpi, excluding shell.nix, package.sh, and hidden files/folders using Deflate algorithm..."
zip -r -Z deflate -FS "fayufox-${version_number}.zip" . -x shell.nix -x package.sh -x ".*" -x "*/.*"
echo "Packaging complete."
