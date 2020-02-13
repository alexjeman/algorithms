function naiveSearch(text, string) {
  for (let i = 0; i < text.length; i++) {
    for (let j = 0; j < string.length; j++) {
      if (string[j] !== text[i + j]) {
        break;
      }
      if (j === string.length - 1) {
        console.log("Pattern found at index " + i);
      }
    }
  }
}

naiveSearch("lumberjack235", "235");
