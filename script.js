var sum = function (a = 1, b = 1) {
  return a + b
}

console.log('default sum (1 + 1)', sum())
console.log('sum  10 + 10, ', sum(10, 10))