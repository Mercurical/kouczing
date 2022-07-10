// Wyrażenia warunkowe i pętle - wymienię tylko te używane najczęściej

// "if" taki jak w wielu innych językach
let a = true;
if (a === true) {
    // zrób coś
} else {
    // zrób coś innego
}

// jest też tzw. trenary operator (pol. operator warunkowy), nieważna jest nazwa, ale składnia, to taki skrócony "if":
const wariantA = 1;
const wariantB = 2;
const jakisWarunek = wariantA < wariantB;
console.log('Operator warunkowy:');
console.log(jakisWarunek ? wariantA : wariantB); // jeśli warunek jest prawdziwy, to wypisz wariantA, jeśli nie, to wypisz wariantB, oczywiście warunek to prawda, więc zobaczymy liczbę 1

// "for" w trzech wariantach
let tablica = ['a', 'b', 'c'];

console.log('"For" dla wartości:');
for (let element of tablica) {
    console.log(element); // wypisze nam wszystkie elementy tablicy
}

console.log('"For" dla kluczy:');
for (let klucz in tablica) {
    console.log(klucz); // wypisze wszystkie klucze tablicy (tablica ma kolejno numerowane elementy zaczynając od zera), czyli 0, 1, 2
}

console.log('"For" dla wartości z iteratorem:');
for (let i = 0; i < tablica.length; i++) {
    console.log(tablica[i]); // wypisze wszystkie elementy tablicy, które mają dany indeks zaczynając od zerowego, mniejsze niż długość tablicy (3), ze skokiem o jeden w górę (elementy numer 0, 1, 2, czyli to samo co w pierwszym for)
}

// "while" używamy, by wykonać daną operację dopóki spełniony jest warunek, który zadamy, dlatego łatwo popełnić błąd i stworzyć nieskończoną pętle, choć czasem jest to celowe, ale skupmy się na podstawowym zastosowaniu, przykład:

let liczba = 1;
while (liczba > 0) { // póki liczba jest większa od 0 wykonaj to co w środku
    liczba = 0; // zmieniamy wartość powodując, że warunek nie jest już spełniony, więc następnego przejścia pętli nie będzie
}

// z pętli można wyjść lub pominąć iterację, służą do tego słowa kluczowe "break" i "continue"

const zawszePrawda = true;

while (zawszePrawda) { // const powoduje, że nie można zmienić wartości zawszePrawda, więc potencjalnie to nieskończona pętla
    if (!zawszePrawda) { // jeśli warunek się spełni (w tym przypadku nigdy się nie spełni), to pomiń kod poniżej "continue" i idź do następnej iteracji pętli
        continue;
    }

    if (zawszePrawda) { // jeśli warunek się spełni, to przerywamy pętle
        break;
    }
}

// "do...while" działa zupełnie tak samo jak while, z wyjątkiem, że warunek jest sprawdzany po wykonaniu kodu pętli

let odRazuFalsz = false;
do {
    // kod tu wykona się jeden raz mimo, że warunek od początku jest niespełniony
} while (odRazuFalsz);

