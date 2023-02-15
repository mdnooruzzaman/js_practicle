function square(n) {
  return n * n;
}
function astro(num) {
  let abc = 0;
  while (num !== 1) {
    if (num < 100) {
      abc = square((num - (num % 10)) / 10) + square(num % 10);
      num = abc;
    } else if (num > 100 && num < 1000) {
      abc =
        square((num - (num % 10)) / 10 - 10) +
        square(num % 10) +
        square((num - (num % 100)) / 100);
      num = abc;
    }
  }
  if (num === 1) {
    STDOUT("Yes");
  } else {
    STDOUT("N0");
  }
}

astro(44);
