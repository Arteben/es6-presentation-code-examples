
// ++++ simple promises
// console.log('simple promises----------')
// var simplePromise = new Promise((_resolve, _reject) => {
//   _resolve('begin')
// })

// simplePromise.then((str) => `${str} first`)
//              .then((str) => `${str} second`)
//              .then((str) => console.log(str))
//                              begin first second

// ++ promises with catch
console.log('--- catch promises-----------')
var catchPromise = new Promise ((_resolve, _reject) => {
 console.log('there is some error!')
 _reject()
})

catchPromise.then(() => { }).then(()=>{ }).then()
catchPromise.catch(() => {
 console.log('catch error!')
})

console.log('there is after catch...')

// there is some error!
// there is after catch...
// catch error!

// // ++ promises with catch
// console.log('--- catch promises-more----------')
// var catchPromiseMore = new Promise((_resolve, _reject) => {
//  _resolve('catchPromise ')
// })

// var catchPromiseInside

// catchPromiseMore.then((str) => { 
//   console.log( 'resolve! ')
//   catchPromiseInside = new Promise((_sesolve, _reject) => {
//    _reject(str + 'catchPromiseInside ')
//   })
//   return catchPromiseInside
// })

// catchPromiseInside.catch((str) => {
//  console.log(str + 'catch error+++++++++!')
// })