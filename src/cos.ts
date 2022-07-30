let kurwa: number[] = [6,1,3,5];
// //5.1 Wypełnij tablicę kolejnymi liczbami ciągu Fibonacciego
function ciag (array: number[]){
    array[0] = 1;
    array[1] = 1;
    for (let i = 2; i <= array.length; i++)
    array[i] = array[i - 2] + array[i - 1];
    return array;
}

console.log(ciag(kurwa));