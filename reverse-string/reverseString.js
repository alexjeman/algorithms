function reverseString(s) {
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    const x = s[i];
    const y = s[j];
    s[i] = y;
    s[j] = x;
  }
}

reverseString(["h", "e", "l", "l", "o"]);
