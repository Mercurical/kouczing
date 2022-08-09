// //5.1 Wypełnij tablicę kolejnymi liczbami ciągu Fibonacciego
export function ciag (array: number[]) {
    array[0] = 1;
    array[1] = 1;
    for (let i = 2; i <= array.length; i++) {
        array[i] = array[i - 2] + array[i - 1];
    }
    return array;
}