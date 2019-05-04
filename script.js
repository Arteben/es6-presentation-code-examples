
// ++++ simple promises
console.log('simple promises----------')
var simplePromise = new Promise((_resolve, _reject) => {
  _resolve('begin')
})

simplePromise.then((str) => `${str} thirst`)
             .then((str) => `${str} second`)
             .then((str) => console.log(str))

// ++ promises with catch
console.log('--- catch promises-----------')
var catchPromise = new Promise ((_resolve, _reject) => {
 console.log('Some error!')
 _reject()
})

catchPromise.then(() => { }).then(()=>{ }).then()
catchPromise.catch(() => {
 console.log('catch error!')
})