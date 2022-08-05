import {
    max,
    min,
    suma,
    liczba3,
    sortuj, 
    mediana, 
    ostatnie3, 
    pierwsze3, 
    kwadrat, 
    sumujN, 
    sumujP, 
    podzielna3, 
    zamianaNaDuze, 
    zamianaNaMale
} from "../basics/zadaniatablicowe";

describe("testowanie zadan tablicowych", () => {
    it("max returns maximum value from given non-empty array", () => {
        const array = [5, 6, 7, 8];
        expect(max(array)).toBe(8);
    });
    it("min returns minimum value from given non-empty array", () => {
        const array = [5, 6, 7, 8];
        expect(min(array)).toBe(5);
    });
    const sumaArgs = [
        [[5, 6, 7, 8], 26],
        [[], 0],
        [[4, 2, 1, -9], -2]
    ]; 
    it.each(sumaArgs)(
        "suma returns sum of all array elements",
        (tablica, wynik) => {
            expect(suma(tablica as number[])).toBe(wynik);
        }
    );
    it("returns number value=3 from non-empty array", () => {
        const array = [5, 6, 7, 8];
        expect(liczba3(array)).toBe(0);
    });
    it("returns median element from non-empty array", () => {
        const array = [5, 6, 7, 8, 9];
        expect(mediana(array.sort(sortuj))).toBe(7);
    });
    it("returns 3 last value form non-empty array", () => {
        const array = [5, 6];
        expect(ostatnie3(array)).toStrictEqual([5, 6]);
    });
    it("returns 3 first value form non-empty array", () => {
        const array = [5, 6];
        expect(pierwsze3(array)).toStrictEqual([5, 6]);
    });
    it("returns array where all values are square form non-empty array", () => {
        const array = [5, 6];
        expect(kwadrat(array)).toStrictEqual([25, 36]);
    });
    it(
        "returns sum of number from non-empty array where argue are %2 = 0 ",
        () => {
            const array = [5, 6, 7, 8];
            expect(sumujP(array)).toBe(2);
        }
    );
    it(
        "returns sum of number from non-empty array where argue are %2 != 0 ",
        () => {
            const array = [5, 6, 7, 8];
            expect(sumujN(array)).toBe(2);
        }
    );
    it(
        "returns sum of number from non-empty array where argue are %3 = 0 ",
        () => {
            const array = [5, 6, 7, 8];
            expect(podzielna3(array)).toBe(1);
        }
    );
    it(
        "returns string of array where all lower liters change to big ",
        () => {
            const array = ["p,a,p,a,j"];
            expect(zamianaNaDuze(array)).toStrictEqual(["P,A,P,A,J"]);
        }
    );
    it(
        "returns string of array where all big liters change to lower ",
        () => {
            const array = ["P,A,P,A,J"];
            expect(zamianaNaMale(array)).toStrictEqual(["p,a,p,a,j"]);
        }
    );
});

