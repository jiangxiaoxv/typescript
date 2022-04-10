
/* const getArray = <T> (value: T, times: number = 5): T[] => {
    return new Array(times).fill(value)
}

console.log(getArray<number>(2))
console.log(getArray<string>('abc')) */

/* const getArray = <T, U>(param1: T, param2: U, times: number = 3): Array<[T, U]> => {
    return new Array(times).fill([param1, param2])
} */
// console.log(getArray(1, 'abc').forEach(item => {
//     console.log(item[1].fixed(2))
// }))

// let getArray: <T>(arg:T, times?: number) => T[]
// getArray = (arg: any, times: number = 2) => {
//     return new Array(times).fill(arg)
// }
// console.log(getArray('asd'))

/* type GetArray = <T>(arg: T, times: number) => T[]
let getArray: GetArray = (arg: any, times: number) => {
    return new Array(times).fill(arg)
} */

/* interface GetArra <T>{
    (args: T, times: number): T[],
    array: T[]
}

interface GetArray {
    <T> (args: T, times: number): T[]
} */

// 范型约束
/* interface ValueWithLength {
    length: number
}
let getArray = <T extends ValueWithLength> (arg: T, times: number = 2): T[] => {
    return new Array(times).fill(arg)
}
getArray([1, 2], 3)
getArray({
    length: 3
}) */
/* const getProps = <T, K extends keyof T>(object: T, propName: K) => {
    return object[propName]
}
const objs = {
    a: 'a',
    b: 'b'
}
getProps(objs, 'a')
console.log(getProps(objs, 'c')) // 默认不报错， */