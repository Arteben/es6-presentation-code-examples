
//+++
console.log('+++ short notations for arror functions')

let arrowFunction1 = () => 'simple text from arrow function 1'

let arrowFunction2 = (a, b) => ('AF2,  a + b = ' + (a + b))

let arrowFunction3 = (num) => {
  if (num > 0) { 
    return  num + ' is positive number!' 
  }
}

console.log(arrowFunction1())
console.log(arrowFunction2(1, 2))
console.log(arrowFunction3(5))

//+++
console.log('+++ context this')
let simpleObj = {
  variable: 'variable',
  method: function () {
    let arowFunction = () => {
      console.log(this.variable)
    }
    arowFunction()
  }
}

simpleObj.method() // variable




