
console.log('-let block scope ----')
var i = 10
{
  // i = 4 - error with "Uncaught ReferenceError: i is not defined"
  let i = 0
  console.log('i form block: ', i)
}
console.log('i form gloabal: ', i)

console.log('-const redifenetions-----------------')

// const ARR - error Uncaught SyntaxError: Missing initializer in const declaration
const ARR = [2]
// ARR = { 2: 2 } - Uncaught TypeError: Assignment to constant variable.
ARR.push(3)
{
  const ARR = 'ARR in block!'
  console.log(ARR)
}
console.log('const ARR in global', ARR) 

