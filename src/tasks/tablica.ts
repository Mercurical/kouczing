const array: number[] = [1, 2, 3, 4, 5];
function sumujParzyste(array: number[]) {
    let suma=0;
    array = array.filter((item: number) => item % 2 == 0);
    for (let i = 0; i < array.length; i++) {
        suma = suma + array[i];
    }
    return suma;
}
console.log(sumujParzyste(array));
