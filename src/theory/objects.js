// Obiekty są ważnym elementem języka JS. Ich konstrukcja wygląda tak, że składa się z elementów mających jakiś klucz oraz wartość
// Przykładowe obiekty:
let pusty = {};
let prosty = { imie: 'Adam', nazwisko: 'Małysz'};
let zlozony = {
    imie: 'Adam',
    nazwisko: 'Małysz',
    daneAdresowe: {
        ulica: 'Sobieskiego 3',
        kodPocztowy: '00-999',
        miasto: 'Wisła',
    },
    zawod: 'kierowca bombowca',
    wiek: 45,
    czyJestKarany: false,
};
// Jak widać powyżej, obiekt może się składać z obiektów i te obiekty z innych obiektów i tak dalej
// Chcąc wybrać konkretny element obiektu odwołujemy się poprzez jego klucz:
console.log('Imie: ' + zlozony.imie);
// Dla głębszych elementów zasada jest ta sama:
console.log('Ulica: ' + zlozony.daneAdresowe.ulica);