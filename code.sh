~/mount.sh

workpath=/media/fauzan-radji/New\ Volume/code/${1:-laravel/website-ksl};
echo "Opening \"$workpath\" in vscode" ;
cd "$workpath";
code .;

