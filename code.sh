~/mount.sh

workpath=/media/fauzan-radji/Data/code/${1:-vue/gistana.github.io};
echo "Opening \"$workpath\" in vscode" ;
cd "$workpath";
code .;

