function x<T>(a: T, b: T): T[] {
  return [a, b]
}
function xx<T>(a, b): T[] {
  return [a, b]
}
x(1, 2)
xx<number>('a', 'b')

type A<T> = string | number | T
const at: A<boolean> = false

interface AI<T> {
  msg: T
}

const ai: AI<string> = {
  msg: 'ab',
}

function addf<T, K = number>(a: T, b?: K): Array<T | K> {
  return [a, b ? b : a]
}

addf(1, 2)
addf('s', 'ss')
type jia = string
function addy<T extends jia>(a: T, b: T) {
  return a + b
}

addy('1', '2')
const obj = {
  name: 'jxx',
  sex: '女',
}

type Key = keyof typeof obj
function ob<T extends object, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}

interface DataT {
  name: string
  age: number
  sex: string
}
type Options<T extends object> = {
  readonly [key in keyof T]?: T[key]
}

type Bf = Options<DataT>
