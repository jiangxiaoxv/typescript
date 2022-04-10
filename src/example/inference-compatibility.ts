

// 隐氏类型转换
/* let names = 'lison'
console.log(names)

// let arr5: Array<number | string>= [1, 'a']
let arr5 = [2, 'b']
// arr5 = [1, 'd', false] // 跑错
console.log(arr5)


window.onmousedown = (mouseEvent) => {
    console.log(mouseEvent.a)
}
 */

/* interface Info {
    name: string,
    info: {age: number}
}
let infos: Info
const infos1 = {name: 'lison', info: {age: 19}}
const infos2 = {age: 18}
const infos3 = {name: 'lison', age: 18, info: {age: 20}}

infos = infos1
// infos = infos2 // 报错
infos = infos3 // 没有报错 递归深层次检测 */


/* // 函数的兼容性, 多个参数可以赋值给少的
let x = (a: number) => 0
let y = (b: number, c: string) => 0

y = x
// x = y // 报错

const arrs = [1, 2, 3]
arrs.forEach((item, index, array) => {
    console.log(item)
})
arrs.forEach((item) => {
    console.log(item)
}) */

// let x = (a: number) => 0
// let y = (b: string) => 0
// x = y

/* // 可选参数和剩余参数
const getSum = (arr: number[], callback: (...args: number[]) => number) :number => {
    return callback(...arr)
}
let res = getSum([1, 2, 3], (...args: number[]): number => args.reduce((a, b) => {
    return a + b
}, 0)) */

/* // 函数参数双向协变
let funcA = (arg: number | string): void => {}
let funcB = (arg: number): void => {}

funcA =  funcB
funcB = funcA */


// 返回值类型
/* let x = (): string | number => 0
let y = (): string => 'a'
let z = (): boolean => false
x = y
y = x // 报错
y = z // 报错 */


/* // 函数重载
function merge(arg1: number, arg2: number): number
function merge(arg1: string, arg2: string): string
function merge(arg1: any, arg2: any) {
    return arg1 + arg2
}

function sum(arg1: number, arg2: number): number
function sum(arg1: any, arg2: any): any {
    return arg1 + arg2
}

let func = merge

// func =  sum // 报错 */


// 枚举
/* enum StatusInterface {
    On,
    Off,
}
enum AnimalEnum {
    Dog,
    Cat

}
let s = StatusInterface.On
s = 1
s = 2
// s = Animation.Dog // 报错 */

// 类的兼容性
/* class AnimalClass {
    public static age: number
    constructor(public name: string) {
        
    }
}
class PeopleClass {
    public static age: string
    constructor(public name: string) {}
}
class FoodIsClass {
    constructor(public name: number) {
        
    }
} */
// 检测的是实例， 不会检测静态成员
/* let animal: AnimalClass
let people: PeopleClass
let food: FoodIsClass
animal = people */
// animal = food // 报错

// private protected 会对兼容性产生影响

/* class ParentClass {
    private age: number
    constructor() {
        
    }
}
class ChildrenClass extends ParentClass {
    constructor() {
        super()
    }
}
class OtherClass {
    private age: number
    constructor() {
        
    }
}
const children: ParentClass = new ChildrenClass()
// const other: ParentClass = new OtherClass() // 报错 */


// 范型的兼容性
/* interface Data<T> {}
let data1: Data<number>
let data2: Data<string>
data1 = data2 */

/* interface Data<T> {
    data: T
}
let data1: Data<number>
let data2: Data<string> */
// data1 = data2 // 报错







