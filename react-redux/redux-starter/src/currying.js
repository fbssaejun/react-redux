function add(a) {
  return function(b) {
    return a + b;
  }
}

const refactoredAdd = a => b => a + b; // (a, b) => a + b

add(1)(5); // Equivalent to add(1,5),  1 + 5
refactoredAdd(1)(5) // Equivalent to add(1,5),  1 + 5
