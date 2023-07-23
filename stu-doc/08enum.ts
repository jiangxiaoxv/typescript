enum Color {
  red,
  green = 3,
  blue = 'blue',
  // yellow, //不会递增了
  yellow = 'yellow',
}

// Color.red = 2 // 报错了；只读属性

// 接口类型
interface AE {
  red: Color
}

const obj: AE = {
  red: Color.yellow,
}

console.log('>>>>>>>>>>>>>>>>>>obj', obj)

// const 枚举
const enum typess {
  success,
  fail,
}
enum typesss {
  success,
  fail = 'fail',
}

console.log('>>>>>>>>>>>>>>>>>>typess.success', typess.success)

// 反向映射(字符串不支持)
enum Types {
  success,
}

const success: number = Types.success

console.log(success)

const key = Types[success]
console.log('>>>>>>>>>>>>>>>>>>key', key)
