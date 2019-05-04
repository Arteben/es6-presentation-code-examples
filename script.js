
var variable = 'variable'

let someObj = {
 variable,
 ['make' + 'Var']: 'makeVar',
 writeFields () {
  console.log(this.variable) // variable
  console.log(this.makeVar) // makeVar
 }
}

someObj.writeFields()
