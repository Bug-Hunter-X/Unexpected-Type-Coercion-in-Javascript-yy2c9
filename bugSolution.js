function foo(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    return String(a) + String(b);
  }
}
console.log(foo(1, 2)); // Output: 3
console.log(foo(1, "2")); // Output: 12