{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = [ pkgs.zip ];

  shellHook = ''
    # Ensure the script is executable
    chmod +x ./package.sh

    # Run the package script and exit the shell
    bash ./package.sh
    exit
  '';
}
