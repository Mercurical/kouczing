function parzyste(array: number){
    return (array%2==0)
}
let sum: number =0;
const array: number[]=[1,2,3,4,5].filter(parzyste);
for(let i=0;i<array.length;i++){
    sum=sum+array[i]
}
console.log(sum);
