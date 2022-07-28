// //1.1
// const tab1 = [7, 3, 1, 6, 9, 5, 4, 10, 2, 2];
// console.log(tab1[4]);
// tab1[6] = 12;
// //1.2
// let tab2 = tab1;
// console.log(tab2);
// //1.3
// let tab3 = tab1;
// for(let i = 0 ; i < tab1.length ; i++){
//     tab3[i] = tab3[i] + tab2[i];
// }
// console.log(tab3);
// //1.4
// tab2 = tab1.reverse();
// console.log(tab2);

// //2.1
// const tab = [7, 3, 1, 6, 9, 5, 4, 10, 2, 2];
// //2.2
// function max(array: number []){
//     let max = 0;
//     let licznik= 0;
//     for(let i = 0; i<array.length; i++)
//     if(array[i] > max)
//     max = array[i];
//     for(let i = 0; i<array.length; i++)
//     if(array[i] == max){
//         licznik++
//     }
//     return {max, licznik};
// }
// function min(array: number []){
//     let min = array[0];
//     for(let i = 0; i<array.length; i++)
//     if(array[i] < min)
//     min = array[i];
//     return min;
// }
// //2.3
// function srednia(array: number[]){
//     let srednia = 0;
//     for(let i = 0; i<array.length; i++)
//     srednia = srednia + array[i];
//     return srednia/array.length;
// }
// //2.4
// function liczba3(array:number []){
//     let licznik = 0;
//     for(let i = 0; i<array.length; i++)
//     if(array[i]==3)
//     licznik ++;
//     return licznik;
// }
// //2.5
// function sortuj(a: number, b: number){
//     return a - b;
// }
// console.log(tab.sort(sortuj))
// //2.6
// function mediana(array: number[]){
//     if (array.length %2 !== 0)
//         return Math.floor(array.length / 2);
//     return ((array.length/2 - 1) + (array.length/2)) / 2;
// }
// // console.log(mediana(tab));
// //2.7
// function pierwsze3(array: number[]){
//     return array.splice(0,3)
// }
// function ostatni(array: number[]){
//     return array.pop()
// }
// // console.log(pierwsze3(tab));
// // console.log(ostatni(tab));
// // console.log(ostatni(tab));
// // console.log(ostatni(tab));
// //2.8
// function kwadrat(array: number[]){
//     for(let i = 0; i < array.length; i++)
//     array[i]= array[i]*array[i];
//     return array;
// }
// // console.log(kwadrat(tab));
// //2.9
// function sumujParzyste(array: number[]) {
//     let sumaP = 0;
//     array = array.filter((item: number) => item % 2 == 0);
//     for (let i = 0; i < array.length; i++) {
//         sumaP = sumaP + array[i];
//     }
//     return sumaP;
// }
// function sumujNieparzyste(array: number[]) {
// let sumaN = 0;
//     array = array.filter((item: number) => item % 2 != 0);
//     for (let i = 0; i < array.length; i++) {
//         sumaN = sumaN + array[i];
//     }
// }
// //2.10
// function podzielna3(array: number[]){
//     let licznik = 0;
//     for(let i = 0; i < array.length; i++)
//     if(array[i] % 3 == 0)
//     licznik ++
//     return licznik
// }
// console.log(podzielna3(tab));
// //3.1
// let tablica: string[];
// //3.2
// let slowo = 'podzielnos';
// tablica = [...slowo];
// console.log(tablica);
// //3.3
// function zamianaNaDuze(array: string[]){
//     return array.map(wyraz => wyraz.toUpperCase())
// }
// function zamianaNaMale(array: string[]){
//     return array.map(wyraz => wyraz.toLowerCase())
// }
// //3.4
// function losowo(array: string[]){
//     return 
// }

// 4

// let tablica: number[] = [];
// function losowanie(array: number[]){
//     for(let i = 0; i < 100; i++)
//     array[i]=Math.floor(Math.random() * 100);
//     return array;
// }

//4.1

// function max(array: number []){
//     let max = 0;
//     let licznik= 0;
//     for(let i = 0; i<array.length; i++)
//     if(array[i] > max)
//     max = array[i];
//     for(let i = 0; i<array.length; i++)
//     if(array[i] == max){
//         licznik++
//     }
//     return {max, licznik};
// }
// console.log(max(losowanie(tablica)));

// //4.2

// function nieparzyste(array: number[]) {
//     return array = array.filter((item: number) => item % 2 != 0);
// }

//4.3

// let tablica: number[] = [];
// function losowanie(array: number[]){
//     for(let i = 0; i < 100; i++)
//     array[i]=Math.floor(Math.random() * 100);
//     return array=array.filter((item: number) => item % 2 == 0);
// }
// console.log(losowanie(tablica))
// //4.4 Program policzy ile liczb zawiera się w przedziale <5, 15) , po czym wypisze te liczby na ekran.
// function zliczanie(array: number[]){
//     array = array.filter((item: number) => item > 5);
//     return array =array.filter((item: number) => item < 16);
// }
// console.log(zliczanie(losowanie(tablica)));

// //4.5 Znajdź element najbliższy wartością wprowadzonej przez użytkownika liczbie „a”.

// //4.6 Znajdź poprzednik i następnik najmniejszej wartości w tablicy (wartość komórki o numerze o jeden większym i o jeden mniejszym, niż indeks minimum tablicy).

// function max(array: number []){
//     let max = 0;
//     let licznik= 0;
//     for(let i = 0; i<array.length; i++)
//     if(array[i] > max)
//     max = array[i];
//     for(let i = 0; i<array.length; i++)
//     if(array[i] == max){
//         licznik++
//     }
//     return max;
// }
// function min(array: number []){
//     let min = array[0];
//     for(let i = 0; i<array.length; i++)
//     if(array[i] < min)
//     min = array[i];
//     return min;
// }
// console.log(min(losowanie(tablica))-1);
// console.log(max(losowanie(tablica))+1);

// //4.7 Przepisać do nowej tablicy te elementy, których wartość jest >10. Nowa tablica ma mieć rozmiar równy ilości tych elementów.

// function nowa(array: number[]){
//     return array =array.filter((item: number) => item > 10);
// }
// let tablica2: number[] =[];
// losowanie(tablica);
// tablica2=nowa(tablica);
// console.log(tablica2)

//4.8 Utwórz nową tablicę 100 elementową. Wypełnij ją w taki sposób, aby
// B[i] = A[1] + A[2] + A[3] + … + A[i],
// gdzie B to nasza nowa, a A, stara tablica.

// //4.9 Posortuj tablicę malejąco.

// function sortuj(a: number, b: number){
//     return b - a;
// }
// losowanie(tablica);
// console.log(tablica.sort(sortuj))

// //4.10 Podaj ile liczb zawartych w tablicy jest podzielna bez reszty przez 3.

// function zliczanie(array: number[]){
//     let licznik = 0;
//     array = array.filter((item: number) => item %3 ==0);
//     for(let i = 0; i < array.length; i++)
//     licznik++
//     return licznik;
// }
// losowanie(tablica);
// console.log(zliczanie(tablica));

// //5

// let tablica: number[] = [];
// let liczba =6;

// // //5.1 Wypełnij tablicę kolejnymi liczbami ciągu Fibonacciego
// function ciag (array: number[]){
//     array[0] = 1;
//     array[1] = 1;
//     for (let i = 2; i < liczba; i++)
//     array[i] = array[i - 2] + array[i - 1];
//     return array;
// }
// console.log(ciag(tablica));

// // 5.2Wypełnij tablicę kolejnymi potęgami liczby 2.

// function potega2(array: number[]){
//     for(let i = 0; i < liczba; i++)
//     array[i] = Math.pow(array[i],2)
//     return array;
// }
// console.log(potega2(tablica));
// // 5.3Wypełni tablicę ciągiem liczb: 3, 6, 9, 12, …

// function ciag(array: number[]){
//     array[0]=3;
//     for(let i= 1; i < liczba; i++)
//     array[i]=array[i]*array[0];
//     return array;
// }
// console.log(ciag(tablica))

// // 5.4Wypełni tablicę ciągiem liczb: 2, 4, 8, 16, 32, …

// function potega2(array: number[]){
//     for(let i = 0; i < liczba; i++)
//     array[i] = Math.pow(array[i],2)
//     return array;
// }
// console.log(potega2(tablica))