~/mount.sh

workpath=/media/fauzan-radji/Data/code/${1:-laravel/siskp-fresh};
echo "Opening \"$workpath\" in vscode" ;
cd "$workpath";
code .;

