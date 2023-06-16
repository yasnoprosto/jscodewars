const highAndLow = numbers => {
    debugger
    let arrOfNumbers = []
    let arrOfStrings = numbers.split(" ");
    for (let i = 0; i < arrOfStrings.length; i++) {
        arrOfNumbers[i] = Number(arrOfStrings[i])
    }

    let min = arrOfNumbers[0];
    let max = arrOfNumbers[0];

    for(let i = 0; i < arrOfNumbers.length; i++) {
        if(arrOfNumbers[i] < min) {
            min = arrOfNumbers[i]
        }
        if(arrOfNumbers[i] > max) {
            max = arrOfNumbers[i]
        }
    }

    arrOfNumbers = []
    arrOfNumbers.push(max, min);
    return arrOfNumbers.join(" ")
};

const highAndLow2 = (numbers) => {
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`
}










highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")
highAndLow2("8 3 -5 42 -1 0 0 -9 4 7 4 -4")