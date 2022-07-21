function sumaKlasyczna(a: number, b: number) {
    return a + b;
}

let sumaDluzszaStrzalkowa = (a: number, b: number) => {
    return a + b;
}

let sumaKrotszaStrzalkowa = (a: number, b: number) => a + b;

console.log(sumaKlasyczna(2, 2));
console.log(sumaDluzszaStrzalkowa(2, 2));
console.log(sumaKrotszaStrzalkowa(2, 2));
