let arr = [1,2,3]
console.log('arr elements ', ...arr)
// arr elements  1 2 3

let getArgs = (...args) => console.log(args)
getArgs(1, 'arg2', [3])
// Array(3) [1, "arg2", Array(1)]
