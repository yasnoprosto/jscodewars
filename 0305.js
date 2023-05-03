// basic operators 
//ternar
function basicOp(o, v1, v2) {
    return o === '+' ? v1 + v2 : o === '-' ? v1 - v2 : o === '*' ? v1 * v2 : o === '/' ? v1 / v2 : null
  }
//switch case
function basicOp2(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}

//logical calculator

function logicalCalc(array, op){
    let intermediate = array[0];
     for(let i = 1; i < array.length; i++) {
       if(op === "AND") intermediate = intermediate && array[i]
         if(op === "OR") intermediate = intermediate || array[i]
           if(op === "XOR") intermediate = intermediate !== array[i]
     }
     return intermediate
   }