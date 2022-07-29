//1.1 Wypisz zawartość 5 komórki tablicy na ekran. Zmień zawartość 7 komórki tablicy, wprowadzając do niej wartość 12.
const tab1 = [7, 3, 1, 6, 9, 5, 4, 10, 2, 2];
console.log(tab1[4]);
tab1[6] = 12;
//1.2 Utwórz drugą tablicę o nazwie tab2, o tej samej wielkości co tab1. Przepisz zawartość tab1 do tab2.
let tab2 = tab1;
console.log(tab2);
//1.3 Utwórz trzecią tablicę o nazwie tab3, o tej samej wielkości co dwie poprzednie. Zawartością komórek tablicy tab3 jest suma komórek o tych samych indeksach tablic tab1 i tab2.
let tab3 = tab1;
for(let i = 0 ; i < tab1.length ; i++){
    tab3[i] = tab3[i] + tab2[i];
}
console.log(tab3);
//1.4 Przepisz ponownie zawartość tablicy tab1 do tablicy tab2, jednak w odwrotnej kolejności.
tab2 = tab1.reverse();
console.log(tab2);

//2.1 Wypełnij tablicę wartościami podanymi przez użytkownika.
const tab = [7, 3, 1, 6, 9, 5, 4, 10, 2, 2];
//2.2 Znajdź najmniejszy i największy element w tablicy.

function max(array: number []){
    let max = 0;
    let licznik= 0;
    for(let i = 0; i<array.length; i++)
    if(array[i] > max)
    max = array[i];
    for(let i = 0; i<array.length; i++)
    if(array[i] == max){
        licznik++
    }
    return {max, licznik};
}
function min(array: number []){
    let min = array[0];
    for(let i = 0; i<array.length; i++)
    if(array[i] < min)
    min = array[i];
    return min;
}
//2.3 Oblicz średnią wartość elementów tablicy.
function srednia(array: number[]){
    let srednia = 0;
    for(let i = 0; i<array.length; i++)
    srednia = srednia + array[i];
    return srednia/array.length;
}
//2.4 Wylicz ilość wystąpień cyfry 3 w tablicy.
function liczba3(array:number []){
    let licznik = 0;
    for(let i = 0; i<array.length; i++)
    if(array[i]==3)
    licznik ++;
    return licznik;
}
//2.5 Dowolnym sposobem posortuj elementy tablicy w porządku rosnącym.
function sortuj(a: number, b: number){
    return a - b;
}
console.log(tab.sort(sortuj))
//2.6 Znajdź medianę elementów tablicy.
function mediana(array: number[]){
    if (array.length %2 !== 0)
        return Math.floor(array.length / 2);
    return ((array.length/2 - 1) + (array.length/2)) / 2;
}
// console.log(mediana(tab));
//2.7 Wypisz 3 najmniejsze i trzy największe elementy tablicy.
function pierwsze3(array: number[]){
    return array.splice(0,3)
}
function ostatni(array: number[]){
    return array.pop()
}
console.log(pierwsze3(tab));
console.log(ostatni(tab));
console.log(ostatni(tab));
console.log(ostatni(tab));
//2.8 Zwiększ wartość każdego elementu tablicy podnosząc go do kwadratu.
function kwadrat(array: number[]){
    for(let i = 0; i < array.length; i++)
    array[i]= array[i]*array[i];
    return array;
}
console.log(kwadrat(tab));
//2.9 Policz ilość liczb parzystych i nieparzystych w tablicy.
function sumujP(array: number[]) {
    let sumaP = 0;
    array = array.filter((item: number) => item % 2 == 0);
    for (let i = 0; i < array.length; i++) {
        sumaP = sumaP + array[i];
    }
    return sumaP;
}
function sumujN(array: number[]) {
let sumaN = 0;
    array = array.filter((item: number) => item % 2 != 0);
    for (let i = 0; i < array.length; i++) {
        sumaN = sumaN + array[i];
    }
}
//2.10 Podaj ile liczb zawartych w tablicy jest podzielna bez reszty przez 3.
function podzielna3(array: number[]){
    let licznik = 0;
    for(let i = 0; i < array.length; i++)
    if(array[i] % 3 == 0)
    licznik ++
    return licznik
}
console.log(podzielna3(tab));
//3.1 Wypełnij ją literami wprowadzonymi przez użytkownika
let tablica1: string[];
//3.2 Wypełnij ją 10 literowym wyrazem podanym przez użytkownika.
let slowo = 'podzielnos';
tablica1 = [...slowo];
console.log(tablica1);
//3.3 Zamień wszystkie wielkie litery na małe i odwrotnie.
function zamianaNaDuze(array: string[]){
    return array.map(wyraz => wyraz.toUpperCase())
}
function zamianaNaMale(array: string[]){
    return array.map(wyraz => wyraz.toLowerCase())
}
//3.4 Wypisz zawartość tablicy w losowej kolejności.
function losowo(array: string[]){
    return 
}

4

let t: number[] = [];
function losowanie(array: number[]){
    for(let i = 0; i < 100; i++)
    array[i]=Math.floor(Math.random() * 100);
    return array;
}

//4.1 Znajdź największą spośród liczb oraz wyświetl na ekranie informację mówiącą o tym, ile razy ta liczba znalazła się w tablicy.

function max1(array: number []){
    let max = 0;
    let licznik= 0;
    for(let i = 0; i<array.length; i++)
    if(array[i] > max)
    max = array[i];
    for(let i = 0; i<array.length; i++)
    if(array[i] == max){
        licznik++
    }
    return {max, licznik};
}
console.log(max1(losowanie(t)));

//4.2 Wyświetl na ekran liczby nieparzyste.

function nieparzyste(array: number[]) {
    return array = array.filter((item: number) => item % 2 != 0);
}

//4.3 Wyświetl na ekran liczby znajdujące się w komórkach o nieparzystych indeksach.

let tablica2: number[] = [];
function losowanie2(array: number[]){
    for(let i = 0; i < 100; i++)
    array[i]=Math.floor(Math.random() * 100);
    return array=array.filter((item: number) => item % 2 == 0);
}
console.log(losowanie(tablica2))
//4.4 Program policzy ile liczb zawiera się w przedziale <5, 15) , po czym wypisze te liczby na ekran.
function zliczanie2(array: number[]){
    array = array.filter((item: number) => item > 5);
    return array =array.filter((item: number) => item < 16);
}
console.log(zliczanie2(losowanie2(tablica2)));

//4.5 Znajdź element najbliższy wartością wprowadzonej przez użytkownika liczbie „a”.

//4.6 Znajdź poprzednik i następnik najmniejszej wartości w tablicy (wartość komórki o numerze o jeden większym i o jeden mniejszym, niż indeks minimum tablicy).

function max2(array: number []){
    let max = 0;
    let licznik= 0;
    for(let i = 0; i<array.length; i++)
    if(array[i] > max)
    max = array[i];
    for(let i = 0; i<array.length; i++)
    if(array[i] == max){
        licznik++
    }
    return max;
}
function min2(array: number []){
    let min = array[0];
    for(let i = 0; i<array.length; i++)
    if(array[i] < min)
    min = array[i];
    return min;
}
console.log(min2(losowanie2(tablica2))-1);
console.log(max2(losowanie2(tablica2))+1);

//4.7 Przepisać do nowej tablicy te elementy, których wartość jest >10. Nowa tablica ma mieć rozmiar równy ilości tych elementów.

function nowa(array: number[]){
    return array =array.filter((item: number) => item > 10);
}
let tablica3: number[] =[];
losowanie(tablica2);
tablica3=nowa(tablica2);
console.log(tablica3)

//4.8 Utwórz nową tablicę 100 elementową. Wypełnij ją w taki sposób, aby
//B[i] = A[1] + A[2] + A[3] + … + A[i],
//gdzie B to nasza nowa, a A, stara tablica.

//4.9 Posortuj tablicę malejąco.

function sortuj2(a: number, b: number){
    return b - a;
}
losowanie(tablica2);
console.log(tablica2.sort(sortuj2))

//4.10 Podaj ile liczb zawartych w tablicy jest podzielna bez reszty przez 3.

function zliczanie(array: number[]){
    let licznik = 0;
    array = array.filter((item: number) => item %3 ==0);
    for(let i = 0; i < array.length; i++)
    licznik++
    return licznik;
}
losowanie(tablica2);
console.log(zliczanie(tablica2));

//5

let tablica4: number[] = [];
let liczba =6;

// //5.1 Wypełnij tablicę kolejnymi liczbami ciągu Fibonacciego
function ciag (array: number[]){
    array[0] = 1;
    array[1] = 1;
    for (let i = 2; i < liczba; i++)
    array[i] = array[i - 2] + array[i - 1];
    return array;
}


// 5.2Wypełnij tablicę kolejnymi potęgami liczby 2.

function potega2(array: number[]){
    for(let i = 0; i < liczba; i++)
    array[i] = Math.pow(array[i],2)
    return array;
}

// 5.3Wypełni tablicę ciągiem liczb: 3, 6, 9, 12, …

function ciag(array: number[]){
    array[0]=3;
    for(let i= 1; i < liczba; i++)
    array[i]=array[i]*array[0];
    return array;
}


// 5.4Wypełni tablicę ciągiem liczb: 2, 4, 8, 16, 32, …

function potegowanie2(array: number[]){
    for(let i = 0; i < liczba; i++)
    array[i] = Math.pow(array[i],2)
    return array;
}