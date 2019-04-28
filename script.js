let arr = [1,2,3]
console.log('arr elements ', ...arr)

let getArgs = (...args) => console.log(args)
getArgs(1, 'arg2', [3])
