// adding length of word to array elements
const addLength = (str) => {
  let arr = str.split(" ");
  for (let i = 0; i <= arr.length - 1; i++) {
    arr[i] += " " + arr[i].length;
  }
  return arr;
};

// и через map
const addLength2 = () => {
  return str.split(" ").map((e) => (e += " " + e.length));
};

//boolean to string convert
const booleanToString = (b) => {
  if (b) return "true";
  return "false";
};
//another way
const booleanToString2 = (b) => {
  return b.toString();
};

//mango 3+2
const mango = (q, p) => {
  const offerQuantity = Math.floor(q / 3);
  const remainderQuantity = q % 3;
  const totalCost = offerQuantity * 2 * p + remainderQuantity * p;
  return totalCost;
};
//more laconic mango 3+2
const mango2 = (q, p) => {
  return p * (q - Math.floor(q / 3));
};

//what quarter of month
const quarterOf = (month) => {
    return month <= 3 ? 1 : month <= 6 ? 2 : month <= 9 ? 3 : 4
}
