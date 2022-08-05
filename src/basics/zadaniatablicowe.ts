//2.1 Wypełnij tablicę wartościami podanymi przez użytkownika.

//2.2 Znajdź najmniejszy i największy element w tablicy.

export function max (array: number []) {
    let max = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }    
    return max;
}
export function min (array: number []) {
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }    
    return min;
}
//2.3 Oblicz średnią wartość elementów tablicy.
export function srednia (array: number[]) {
    let srednia = 0;
    for (let i = 0; i < array.length; i++) {
        srednia += array[i];
    }
    return array.length ? srednia / array.length : 0; 
}
//2.4 Wylicz ilość wystąpień cyfry 3 w tablicy.
export function liczba3 (array:number []) {
    let licznik = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == 3) {
            licznik++;
        }
    }
    return licznik;
}
//2.5 Dowolnym sposobem posortuj elementy tablicy w porządku rosnącym.
export function sortuj (a: number, b: number) {
    return a - b;
}
//2.6 Znajdź medianę elementów tablicy.
export function mediana (array: number[]) {
    if (array.length % 2 !== 0) {
        return array[Math.floor(array.length / 2)];
    }
    return array[(array.length / 2 - 1 + array.length / 2) / 2];
}
//2.7 Wypisz 3 najmniejsze i trzy największe elementy tablicy.
export function pierwsze3 (array: number[]) {
    return array.splice(0, 3);
}
export function ostatnie3 (array: number[]) {
    if (array.length < 3) {
        return array.splice(0, array.length);
    }
    return array.splice(-3);
}

//2.8 Zwiększ wartość każdego elementu tablicy podnosząc go do kwadratu.
export function kwadrat (array: number[]) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= array[i];
    }
    return array;
}
// console.log(kwadrat(tab));
//2.9 Policz ilość liczb parzystych i nieparzystych w tablicy.
export function sumujP (array: number[]) {
    let sumaP = 0;
    if (array.length == 0) {
        return 0;
    } 
    array = array.filter((item: number) => item % 2 == 0);
    for (let i = 0; i < array.length; i++) {
        sumaP += 1;
    }
    return sumaP;
}
export function sumujN (array: number[]) {
    let sumaN = 0;
    if (array.length == 0) {
        return 0;
    } 
    array = array.filter((item: number) => item % 2 != 0);
    for (let i = 0; i < array.length; i++) {
        sumaN++;
    }
    return sumaN;
}
//2.10 Podaj ile liczb zawartych w tablicy jest podzielna bez reszty przez 3.
export function podzielna3 (array: number[]) {
    let licznik = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 3 == 0) {
            licznik++;
        }
    }        
    return licznik;
}
//3.1 Wypełnij ją literami wprowadzonymi przez użytkownika

//3.2 Wypełnij ją 10 literowym wyrazem podanym przez użytkownika.

// console.log(tablica1);
//3.3 Zamień wszystkie wielkie litery na małe i odwrotnie.
export function zamianaNaDuze (array: string[]) {
    return array.map(wyraz => wyraz.toUpperCase());
}
export function zamianaNaMale (array: string[]) {
    return array.map(wyraz => wyraz.toLowerCase());
}
// 4

export function losowanie (array: number[]) {
    for (let i = 0; i < 100; i++) {
        array[i] = Math.floor(Math.random() * 100);
    }
    return array;
}

export function max1 (array: number []) {
    let max = 0, licznik = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] == max) {
            licznik++;
        }
    }
    return { max, licznik };
}
//4.2 Wyświetl na ekran liczby nieparzyste.
export function nieparzyste (array: number[]) {
    return array.filter((item: number) => item % 2 != 0);
}
//4.3 Wyświetl na ekran liczby znajdujące się
//  w komórkach o nieparzystych indeksach.
export function losowanie2 (array: number[]) {
    for (let i = 0; i < 100; i++) {
        array[i] = Math.floor(Math.random() * 100);
    }
    return array.filter((item: number) => item % 2 == 0);
}
//4.4 Program policzy ile liczb zawiera się w przedziale <5, 15)
// po czym wypisze te liczby na ekran.
export function zliczanie2 (array: number[]) {
    return array
        .filter((item: number) => item < 16)
        .filter((item: number) => item > 5);
}
//4.5 Znajdź element najbliższy 
// wartością wprowadzonej przez użytkownika liczbie „a”.

//4.6 Znajdź poprzednik i następnik najmniejszej wartości w tablicy 
// (wartość komórki o numerze o jeden większym i o
//      jeden mniejszym, niż indeks minimum tablicy).
export function max2 (array: number []) {
    let max = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}
export function min2 (array: number []) {
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}
//4.7 Przepisać do nowej tablicy te elementy, których wartość jest >10.
//  Nowa tablica ma mieć rozmiar równy ilości tych elementów.
export function nowa (array: number[]) {
    return array.filter((item: number) => item > 10);
}

//4.8 Utwórz nową tablicę 100 elementową. Wypełnij ją w taki sposób, aby
//B[i] = A[1] + A[2] + A[3] + … + A[i],
//gdzie B to nasza nowa, a A, stara tablica.

//4.9 Posortuj tablicę malejąco.
export function sortuj2 (a: number, b: number) {
    return b - a;
}
//4.10 Podaj ile liczb zawartych w tablicy jest podzielna bez reszty przez 3.
export function zliczanie (array: number[]) {
    let licznik = 0;
    array = array.filter((item: number) => item % 3 == 0);
    for (let i = 0; i < array.length; i++) {
        licznik++;
    }
    return licznik;
}
//5

// //5.1 Wypełnij tablicę kolejnymi liczbami ciągu Fibonacciego
export function ciag (array: number[], liczba: number) {
    array[0] = 1;
    array[1] = 1;
    for (let i = 2; i < liczba; i++) {
        array[i] = array[i - 2] + array[i - 1];
    }
    return array;
}
// 5.2Wypełnij tablicę kolejnymi potęgami liczby 2.
export function potega2 (array: number[], liczba: number) {
    for (let i = 0; i < liczba; i++) {
        array[i] = Math.pow(array[i], 2);
    }
    return array;
}
// 5.3Wypełni tablicę ciągiem liczb: 3, 6, 9, 12, …
export function ciag2 (array: number[], liczba: number) {
    array[0] = 3;
    for (let i = 1; i < liczba; i++) {
        array[i] *= array[0];
    }
    return array;
}
// 5.4Wypełni tablicę ciągiem liczb: 2, 4, 8, 16, 32, …

export function potegowanie2 (array: number[], liczba: number) {
    for (let i = 0; i < liczba; i++) {
        array[i] = Math.pow(array[i], 2);
    }
    return array;
}
export function suma (array: number[]) {
    return array.reduce((a, b) => a + b, 0);
}