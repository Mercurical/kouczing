
function silnia(a: number) {
    if(a<0){
        throw new Error("błędny argument");
    }

    let suma=1;
    for(let i =1;i<=a;i++){
         suma=suma*i;
    }
    return suma;
}
try{
    console.log(silnia(5));
} catch(e){
    console.log((e as Error).message);
}
