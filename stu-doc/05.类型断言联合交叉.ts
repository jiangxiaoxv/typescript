// 联合类型
const phone: number | string = 12345678901
console.log('>>>>>>>>>>>>>>>>>>phone', phone)

const fn = function (type: number | boolean): boolean {
  console.log('>>>>>>>>>>>>>>>>>>type', type)
  return !!type
}

console.log(fn)

// 交叉类型
interface People {
  name: string
  age: number
}

interface Man {
  sex: number
}

const xiao = (man: People & Man): void => {
  console.log('>>>>>>>>>>>>>>>>>>man', man)
}
// 同时满足两个类型
xiao({
  name: 'jxx',
  age: 31,
  sex: 1,
})

// 类型断言
const fn2 = function (num: number | string): void {
  console.log('>>>>>>>>>>>>>>>>>>num as  string', (num as string).length)
}
fn2(1)
