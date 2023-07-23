type stype = string | number

const str: stype = 'ha'
console.log('>>>>>>>>>>>>>>>>>>str', str)

interface Atype {
  name: string
}
interface Atype {
  school: string
}
interface BType extends Atype {
  age: number
}
// extends 是包含的意思
// 左边的值，会作为右边类型的子类型
// any unknow
// object
// Number
// number string
// never
type numt = 1 extends number ? 1 : 0
type numta = 1 extends any ? 1 : 0
type numn = 1 extends never ? 1 : 0

// never 类型
type A = string & number
type B = string | never // never 被忽略了，在联合类型中
function xm(): never {
  throw new Error('hah')
}

function xm2(): never {
  while (true) {
    console.log('>>>>>>>>>>>>>>>>>>1', 1)
  }
}

type Ae = '唱' | '跳' | 'w'
function kun(value: Ae) {
  switch (value) {
    case '唱':
      break
    case '跳':
      break
    case 'w':
      break
    default:
      // 兜底逻辑
      const error: never = value
      console.log('>>>>>>>>>>>>>>>>>>error', error)

      break
  }
}
