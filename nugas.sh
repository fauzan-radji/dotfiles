~/mount.sh

workpath=/media/fauzan-radji/Data/documents/coolyeah/tugas-akhir/siskp/proposal/${1:-tugas-akhir.md};
echo "Opening \"$workpath\"" ;
cd "$workpath";
code ./;
open /media/fauzan-radji/Data/documents/coolyeah/tugas-akhir/siskp/referensi/;
