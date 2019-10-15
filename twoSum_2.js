function twoNumberSum(arr, target) {
  for (let i = 0; i < arr.length - 1; i++) {
    let firstNum = arr[i];
    for (let j = 0; j < arr.length; j++) {
      let secondNum = arr[j];
      if (firstNum + secondNum === target) {
        return [firstNum, secondNum];
      }
    }
  }
  return [];
}

let arrayNum = [-2, -1, 2, 5, 7, 8, 9, 10];
let targetNum = 10;

console.log(twoNumberSum(arrayNum, targetNum));
