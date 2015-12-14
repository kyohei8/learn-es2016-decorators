import Shape from './Shape'

var s = new Shape(10, 30)
console.log(s.position())
s.position = function () {
  return '😜'
}
console.log(s.position())
