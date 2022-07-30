export default function ciag (a: number): number{
    if(a === 0){
        return 0;
    }
    if(a === 1 || a === 2){
        return 1;
    }
    return ciag(a - 2) + ciag(a - 1);
    
}
