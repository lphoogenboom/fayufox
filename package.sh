#!usr/bin/env bash

# Prompt for the version number
read -p "Enter the version number (e.g., 1.0.2): " version_number

# Create the package named fayufox-[version_number].xpi excluding shell.nix, package.sh, and hidden files/folders
echo "Packaging all files and folders into fayufox-${version_number}.xpi, excluding shell.nix, package.sh, and hidden files/folders..."
zip -r "fayufox-${version_number}.xpi" . -x shell.nix -x package.sh -x ".*" -x "*/.*"
echo "Packaging complete."
