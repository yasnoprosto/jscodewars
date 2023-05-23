//count average function
export function findAverage(array: number[]): number {
    if(array.length === 0 ) return 0
    let sum: number = 0;
    for(let i of array) {
        sum += i
    }
    return sum / array.length;
}