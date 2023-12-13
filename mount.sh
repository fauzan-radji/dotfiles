block=$(blkid --label Data);
result=$(udisksctl mount -b $block 2>&1);
