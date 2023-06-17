function descendingOrder(n) {
    let arr = n.toString().split("");

    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] < arr[j]) {
                let mid = arr[i]
                arr[i] = arr[j];
                arr[j] = mid
            }
        }
    }
    return Number(arr.reverse().join(""));
}

descendingOrder("1021")

const descendingOrderOneLine = n => Number(n.toString().split("").sort().reverse().join(""))

descendingOrderOneLine("1021")