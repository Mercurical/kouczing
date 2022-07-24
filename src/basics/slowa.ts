// // zdanie zrobic palindrom i anagram
function palindrome(cokolwiek: string ) { 
    const odwrocone = cokolwiek.split('').reverse().join('');
    return cokolwiek === odwrocone;
}
const slowo = 'asd';
console.log(palindrome(slowo));

function anagram (slowoA: string , slowoB: string){
    return slowoA.split('').sort().join('') === slowoB.split('').sort().join('');
}
const slowo1 = "niedziela";
const slowo2 = "dzielenia";
console.log(anagram(slowo1,slowo2));