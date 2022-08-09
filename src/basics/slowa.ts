export function palindrome (cokolwiek: string) { 
    const odwrocone = cokolwiek.split("").reverse().join("");
    return cokolwiek === odwrocone;
}

export function anagram (slowoA: string, slowoB: string) {
    return slowoA.split("").sort().join("") === 
        slowoB.split("").sort().join("");
}