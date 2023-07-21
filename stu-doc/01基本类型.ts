/** 01
 * npm i @types/node
 */
/* let a: any = []
a = 1

const b: unknown = 1
const c = 2

// c = b

// unknown 只能赋值给自身， 或者是any; 类型不能读取属性
const xiaoman: unknown = { s: 'jxx' }
console.log(xiaoman.s) */

///

/**02
 * Object 可以用来声明说有类型
 * object 用来声明是引用类型的数据对象
 * {} == new Object 包含所有的类型 与 Object没有什么区别, 对变量无法进行属性的增加
 */
/* const a: Object = 2
const a1: Object = '123'
const a2: Object = []
const a3: Object = {}
const a4: Object = () => ({})

const b: object = {}
// const c: object = 12 // 报错了
const c: {} = {}
const c1: {} = 12
const c2: {} = '12'
const c3: {} = []
// c1.obj = {}  报错了 */

/**
 * void 类型的变量没有什么大用，只能赋予undefined 和null， 函数返回值：void
 * null 和 undefined 是所有类型的字类型
 * undefined 不能赋予 null
 * null 也不能赋值给 undefined
 * never表示哪些用不存在的值类型；会抛出异常，或 根本不会有返回值的函数表达式
 * never类型是任何类型的字类型，也可以赋值给任何类型，然而没有类型是never的字类型可以赋值给never类型，除了其本身之外
 * 即使any也不可以赋值给never
 * unknown 只能赋值给自身， 或者是any; 类型不能读取属性
 */
const bb: void = undefined
// const cc = undefined
// const cc: null = undefined
const un: unknown = 2
const c: number = un // 报错了
