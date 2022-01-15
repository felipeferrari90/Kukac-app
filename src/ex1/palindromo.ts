
export function getPalindromeBetweenNumbers(min: number, max: number): number[] {
    let numbers:number[] = []
    while(min <= max){
       if(String(min) === String(min).split("").reverse().join("")) numbers.push(min);
       min++;
    }
    return numbers;
}

