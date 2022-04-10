
// 布尔类型
// let bool: boolean = false
// let bool = false
// bool = 13

// 数值类型
// let num: number = 123
// num = 'abc'

// num = 0b111011
// num = 0o173
// num = 0x7b

// 字符串类型
// let str: string
// str = 'abc'
// str = `数值是${num}`
// console.log(str)


// 数组类型
// let arr: number[] = [12,13, '1']
// let arr: number[]
// arr = [1,3]

// let arr2: Array<number> = [1,2,'']
// let arr3: (string | number)[] = [1, 2, 'ss']

// 元组类型，固定长度，固定类型, 一一对应
// let tuple: [string, number]
// tuple = ['12', 23]
// tuple = [23, '1',1]
// tuple = [12, 134,2141]

// 枚举类型
/* enum Roles{
    Super_Admin = '234',
    Admin = 4,
    User = '12',
}
// console.log(typeof Roles.Super_Admin)
let roles = Roles.Admin
if (roles === Roles.Admin) {
    // console.log(Roles.Admin)
}

let value: any = 12
value = '13asdg'
value = true

value = [121,13] */

// void 没有任何类型
/* const consoleText = (text: any):void => {
    console.log(text + 1)
}
let v: void
v = undefined
v = null

let u: undefined
// u = 1
u = undefined
// u = null

let n: null
n = null
// n = undefined
// never类型，死循环，跑错了
let errorFunc = (message: string): never => {
    throw new Error('sas')
}
errorFunc = (): never => {
    
    while(true) {
        console.log('wocao')
    }
} */
// let neverVariable: never = (() => {
//     while(true) {}
// })()
// num = neverVariable // 数值类型
// neverVariable = num // 报错了

/* let obj = {
    name: 'lison'
}
let obj2 = obj
obj2.name = 'L'
// console.log(obj)
function getObject(obj: object):void {
    console.log(obj)
}
// getObject(obj2)

// 类型断言
const getLength = (target: string | number): number => {

    if ((target as string).length || (<string>target).length == 0) {
        return (<string>target).length
    } else {
        return target.toString().length
    }
    
} */

// console.log(getLength('wet'))
