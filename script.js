
//++++
console.log('-block scope ----')
{
  var variableVar = 'variable var'
  let variableLet = 'variable let'
}
console.log(variableVar)
// console.log(variableLet) // - ReferenceError: variableLet is not defined

//++++
console.log('-nested block scope---')
{
  let block_1 = 'block_1'
  {
    // console.log(block_1) // ReferenceError: block_1 is not defined
  }
  function show_block_1() { console.log(block_1) }
  show_block_1()
}

// +++ 
console.log('- initialization let variables ------')
console.log(varA) // undefined
var varA = 'this is variable A'
// console.log(varB) //  ReferenceError: varB is not defined
let varB = 'this is variable B'

//++++++++
console.log('-const redifenetions-----------------')
// const ARR // - error Uncaught SyntaxError: Missing initializer in const declaration
const ARR = [2]
// ARR = [2] // - Uncaught TypeError: Assignment to constant variable.
ARR.push(3)
console.log('const ARR', ARR) // [2,3]
