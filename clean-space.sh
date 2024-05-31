# Get rid of packages that are no longer required
apt-get autoremove

# Clean up APT cache in Ubuntu
sudo apt-get clean

# Clear systemd journal logs
journalctl --vacuum-time=3d

# Remove older versions of Snap applications
./clean-snap.sh

# Clean the thumbnail cache
rm -rf ~/.cache/thumbnails/*