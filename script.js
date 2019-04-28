
let [el_1, el_2, el_3] = (function () {
  return [1, 2, 3]
}())
console.log(el_1, el_2, el_3)

let {x: par_1, y: par_2, z: par_3} = (function () {
  return {x: 'x', y: 'y', z: 'z'}
}())
console.log(par_1, par_2, par_3)

let { x, y, z } = (function() {
  return { x: 'x', y: 'y', z: 'z' }
}())
console.log(x, y, z)
