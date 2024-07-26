let mahsulot1 = {
    nom: "kitob",
    narx: "30000"
};

let mahsulot2 = {
    nom: "daftar",
    narx: "3000"
};
function isSameProduct(product1, product2) {
    return (product1.nom === product2.nom) && (product1.narx === product2.narx);
}

console.log(isSameProduct(mahsulot1, mahsulot2)); 
