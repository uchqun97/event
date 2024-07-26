let mahsulot1 = {
    nom: "kitob",
    narx:"30000",
};

let mahsulot2 = {
    nom: "daftar",
    narx:"5000",
}
    function narxniTaqqoslash(mahsulot1, mahsulot2) {
        if (mahsulot1.narx < mahsulot2.narx) {
            return mahsulot1;
        } else {
            return mahsulot2;
        }
    }
    
    let arzonroqMahsulot = narxniTaqqoslash(mahsulot1, mahsulot2);
    console.log(`Arzonroq mahsulot: ${arzonroqMahsulot.nom}, ${arzonroqMahsulot.narx} so'm`);