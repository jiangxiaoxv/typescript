/* const arr: number[] = [1, 2]
const arr1: Array<boolean> = [true, false]
console.log(arr, arr1)

// 对象数组
interface IArr {
  name: string
}

const arrI: IArr[] = [
  {
    name: 'jxx',
  },
]
// 二维数组
const arrs: number[][] = []
const arrA: Array<Array<number>> = [[]]

console.log(arrs, arrA)

function farr(...args: any[]) {
  console.log('>>>>>>>>>>>>>>>>>>args', args)
}
farr()

// IArguments 类数组类型
//   去自定义类数组
// const a: IArguments = []

interface IIArguments {
  callee: Function
  length: number
  [index: number]: any
}

let arg: IIArguments */
