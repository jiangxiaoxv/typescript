const a1 = Symbol(1)
const a2 = Symbol(1)

// console.log(Symbol.for('xi') === Symbol.for('xi'), a1 == a2)
const obj = {
  name: 1,
  [a1]: 1,
  [a2]: 2,
}
// for in 不能读到symbol
for (const key in obj) {
  console.log('>>>>>>>>>>>>>>>>>>key', key)
  console.log('>>>>>>>>>>>>>>>>>>Object.keys(obj)', Object.keys(obj))
  console.log(
    '>>>>>>>>>>>>>>>>>>Object.getOwnPropertySymbols(obj)',
    Object.getOwnPropertySymbols(obj)
  )
}
// 能读取symbol属性和普通属性
console.log('>>>>>>>>>>>>>>>>>>Reflect.ownKeys(obj)', Reflect.ownKeys(obj))

const map = new Map()
map.set(2, '2')
map.set(1, '1')
map.set('b', 'b')
map.set('a', 'a')
/* console.log(
  '>>>>>>>>>>>>>>>>>>Object.keys(map)',
  Object.keys(map), // []
  Object.values(map), // []
  Object.entries(map), // []
  // map.entries(),
  map.keys().next().value // 有用
) */
