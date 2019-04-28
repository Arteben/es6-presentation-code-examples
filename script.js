
console.log('-let army functions--------')

function makeArmyWithVAR() {
  var shooters = []
  for (var i = 1; i < 11; i++) {
    var shooter = function () {
      console.log('I shooter from VAR with nomer: ', i)
    }
    shooters.push(shooter)
  }
  return shooters
}

function makeArmyWithLET() {
  var shooters = []
  for (let i = 1; i < 11; i++) {
    var shooter = function () {
      console.log('I shooter from LET with nomer: ', i)
    }
    shooters.push(shooter)
  }
  return shooters
}

var numbers = [0, 4, 9]
var varShooters = makeArmyWithVAR()
var letShooters = makeArmyWithLET()
for (let i = 1; i < 3; i++) {
  for (let num of numbers) {
    if (i === 1)
      varShooters[num]()
    else
      letShooters[num]()
  }
}
