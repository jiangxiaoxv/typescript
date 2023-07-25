// 主类型
interface Ax {
  name: string
  age: number
}
// 子类型
interface Bx {
  name: string
  age: number
  sex: string
}

let a: Ax = {
  name: '🌧️',
  age: 33,
}
const b: Bx = {
  name: '小高',
  age: 33,
  sex: '男',
}
// 这就是协变
a = b

/**
 * 逆变
 */
const fna = (params: Ax) => {}
let fnb = (params: Bx) => {}
// fna = fnb // 报错了
fnb = fna

console.log('>>>>>>>>>>>>>>>>>>fna', `${fna}`)

/**
 * 双向协变
 */
fna = fnb // 报错了，需要tsconfig变更
fnb = fna
