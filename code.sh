~/mount.sh

workpath=/media/fauzan-radji/Data/code/${1:-nextjs/any-api};
echo "Opening \"$workpath\" in vscode" ;
cd "$workpath";
code .;

