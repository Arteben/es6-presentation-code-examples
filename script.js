
var variable = 'variable'

let someObj = {
 variable,
 ['make' + 'Var']: 'makeVar',
 writeFields () {
  console.log(this.variable)
  console.log(this.makeVar)
 }
}

someObj.writeFields()
