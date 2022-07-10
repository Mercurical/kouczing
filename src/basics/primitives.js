// W JS mamy 7 typów prymitywnych: string, number, bigint, boolean, undefined, symbol, and null
// Zajmiemy się pięcioma z nich, ponieważ bigint i symbol się raczej nie używa

// "string" to po prostu najzwyklejszy w świecie typ tekstowy:
let string = 'Jakiś tekst';

// "number" to typ liczbowy, w JS nie ma typu integer czy int, number ogarnia wszystkie liczby łącznie ze zmiennoprzecinkowymi:
let numberInt = 3;
let numberFloat = 3.14;

// "boolean" to typ logiczny true/false
let boolean = true;

// "undefined" to jest brak jakiejkolwiek wartości, każda zmienna, której chcemy użyć, a jej nie deklarowaliśmy lub nie przypisaliśmy jej wartości jest "undefined", to domyślna wartość
// Tę wartość można też otwarcie przypisać do zmiennej, czyli w poniższym przykładzie console.log wypluje nam to samo dla obydwu przypadków:
let nothing = undefined;
console.log(typeof nothing); // sprawdzam typ zmiennej
console.log(typeof notExists);
// Można uznać, że to takie "nic"

// "null" to wartość zerowa, jest też logicznie fałszywe tak jak undefined
// używamy wtedy gdy np. coś jest opcjonalne lub wynik jakiejś operacji jest pusty
// Jakieś dane wyciągnięte z bazy danych mogłyby wyglądać tak:
let wymaganeImie = 'Adam';
let opcjonalneDrugieImie = null;
let wymaganeNazwisko = 'Malysz';

// Sprawdźmy jakie wartości dają prawdę, a jakie fałsz:
let a = ''; // false
let b = 'coś'; // true
let c = 0; // false
let d = 1; // true
let e = 21.37; // true
let f = true; // true
let g = false; // false
let h = undefined; // false
let i = null; // false

console.log('Sprawdzamy wartości logiczne:');
for (let value of [a, b, c, d, e, f, g, h, i]) {
    if (value) {
        console.log('true');
    } else {
        console.log('false');
    }
}
