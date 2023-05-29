//counting vowel in string

function getCount(str) {
    let count = 0;
    const vowelArray = ["a", "e", "i", "o", "u"];
    const strToArray = str.split("");

    for (const el of strToArray) {
        if (vowelArray.find(v => v === el)) count++;
    }

    return count
}

getCount("akjdekkikkokkk");

//disemvowel trolls

function disemvowel(str) {
    const  vowelArray = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    const strToArray = str.split("");

    for (let i = 0; i < strToArray.length; i++) {
        if (vowelArray.includes(strToArray[i])) {
            strToArray.splice(i, 1);
            i--;
        }
    }

    return strToArray.join("");
}

disemvowel("This website is for losers LOL!");