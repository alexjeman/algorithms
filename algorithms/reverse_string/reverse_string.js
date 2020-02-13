function reverseString(string) {
  for (let i = 0, j = string.length - 1; i < j; i++, j--) {
    let tmp = string[i];
    string[i] = string[j];
    string[j] = tmp;
  }
  return string;
}

console.log(reverseString(["h", "e", "l", "l", "o"]));
