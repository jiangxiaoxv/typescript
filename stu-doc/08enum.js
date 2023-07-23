/* var Color
;(function (Color) {
  Color[(Color['red'] = 0)] = 'red'
  Color[(Color['green'] = 3)] = 'green'
  Color['blue'] = 'blue'
  // yellow, //不会递增了
  Color['yellow'] = 'yellow'
})(Color || (Color = {}))
var obj = {
  red: Color.yellow,
}
console.log('>>>>>>>>>>>>>>>>>>obj', obj)
var typesss
;(function (typesss) {
  typesss[(typesss['success'] = 0)] = 'success'
  typesss[(typesss['fail'] = 1)] = 'fail'
})(typesss || (typesss = {}))
console.log('>>>>>>>>>>>>>>>>>>typess.success', 0)
 */
