~/mount.sh

workpath=/media/fauzan-radji/Data/code/${1:-laravel/siskp};
echo "Opening \"$workpath\" in vscode" ;
cd "$workpath";
code .;

