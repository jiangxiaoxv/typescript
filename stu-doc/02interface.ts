/**
 * interface 重名
 * 任意key
 *  ？ readonly
 * 接口继承
 * 定义函数类型
 * 不能多属性，也不能少属性
 */
interface Axxsxs {
  name: string
  age?: number
  readonly sex?: boolean
  // [props: string]: any // 索引签名
}

interface Axxsxs {
  scholl: string
}

const a: Axxsxs = {
  name: 'jxx',
  scholl: '中南',
  sex: true,
}
// a.sex = false
console.log(a)

interface B extends Axxsxs {
  salary: number
}
const b: B = {
  name: 'jxx',
  scholl: '中南',
  salary: 120,
}

/**
 * 函数
 */

interface Fn {
  (name: string): number[]
}
const fn: Fn = function (name: string) {
  return [1]
}
