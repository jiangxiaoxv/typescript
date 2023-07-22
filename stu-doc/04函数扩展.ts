/**
 * 函数定义类型和返回值 ｜ 箭头函数定义类型和返回值
 * 函数默认的参数 ｜ 函数可选参数
 * 参数是一个对象如何定义
 * 函数this类型
 * 函数重载
 */

/* function add(a = 10, b = 20) {
  return a + b
}
const addd = (a: number, b?: number) => {
  b = b ? b : 10
  return a + b
}

interface User {
  name: string
  age: number
}

function addU(user: User) {
  return user
}

interface IObj {
  user: number[]
  add: (this: IObj, num: number) => void
}
// 同时可以定义this类型 在js中无法使用 必须是第一个参数定义this的类型
const obj: IObj = {
  user: [1, 2],
  // 必须是第一个参数定义this的类型
  add(this: IObj, num: number) {
    // this. // this上没有代码属性提示
    this.user.push(num)
  },
}
obj.add(3)

// 函数重载
const userO: number[] = [1, 2, 3]

function findNumO(add: number[]): number[]
function findNumO(ids: number): number[]
function findNumO(): number[]
function findNumO(ids?: number | number[]): number[] {
  if (typeof ids == 'number') {
    return userO.filter((v) => v == ids)
  } else if (Array.isArray(ids)) {
    userO.push(...ids)
    return userO
  } else {
    return userO
  }
} */
