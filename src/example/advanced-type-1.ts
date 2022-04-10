

/* // 交叉类型
const mergeFunc = <T, U>(arg1: T, arg2: U): T & U => {
    let res = <U & T> {}
    res = Object.assign(arg1, arg2)
    return res
}

console.log(mergeFunc({a: 'a'}, {b: 'b'})) */


// 联合类型
// type1 | type2 | type3
/* const getLength = (content: string | number): number => {
    if (typeof content === 'string') {
        return content.length
    } else {
        return content.toString().length
    }
}
// console.log(getLength(false)) // 报错了 */



/* // 类型保护
const valueList = [123, 'abc']
const getRandomValue = () => {
    const number = Math.random() * 10

    if (number < 5) {
        return valueList[0]
    } else {
        return valueList.toString()
    }
} */
// 真是的类型保护
/* function isString(value: number | string): value is string {
    return typeof value === 'string'
} */
// const item = getRandomValue()
/* console.log(item)
// if (item as string) { // 类型断言
if(isString(item)) { // 类型保护
    console.log(item.length)
} else {
    console.log(item.toFixed())
} */
// typeof 只能识别 == 或者 != 的类型保护
// typeof 只能是string, number, boolean, symbol中的一种
/* if(typeof item == 'string') { // 类型保护
    console.log(item.length)
} else {
    console.log(item.toFixed())
} */
/* if(typeof item == 'object') { // 类型保护
    console.log(item.toString()) // 报错了
} else {
    console.log(item.toFixed())
} */
// instance 类型保护
/* class CreatedByClass1 {
    public age = 18
    constructor() {
        
    }
}
class CreatedByClass2 {
    public name = 'lison'
    constructor() {
        
    }
}
function getRandomItem() {
   return Math.random() < 0.5 ? new CreatedByClass1 : new CreatedByClass2() 
}
const item1 = getRandomItem()
if (item1 instanceof CreatedByClass1) { // 类型保护
    console.log(item1.age)
} else {
    console.log(item1.name)
} */


/* // null 和 undefined, 是任何类型的子类型
let values: string = '123' // (let values: string | undefined) = '123'
// values = null
// values = undefined
// string | undefined / string | null
const sumFunc = (x: number, y?: number) => {
    return x + (y || 0)
}
const getLengthFunction = (value: string | null): number => {
    // if (value == null) {
    //     return 0
    // } else {
    //     return value.length
    // }
    return (value || '').length
}
function getSplicedStr(num: number | null): string {
    function getRes(prefix: string) {
        return prefix + num!.toFixed().toString() // 类型断言
    }
    num = num || 0.1

    return getRes('lison-')
}
console.log(getSplicedStr(3.03)) */

/* // 类型别名
type TypeString = string
let str2: TypeString

type PositionType<T> = {x: T, y: T}
const position1: PositionType<number> = {
    x: 1,
    y: -1
}
const position2: PositionType<string> = {
    x: 'left',
    y: 'top'
}
type Childs<T> = {
    current: T,
    child?: Childs<T>
}
let ccc: Childs<string> = {
    current: 'first',
    child: {
        current: 'second',
        child: {
            current: 'third'
        }
    }
} */
// 类型别名不能循环引用自身
// type Childs = Childs[] // 不合法error
// 类型别名不能使用extends和implements
/* type Alias = {
    num: number,
}
interface Interface {
    num: number
}
let _alias: Alias = {
    num: 123
}
let _interface: Interface = {
    num: 321
}
_alias = _interface */

/* // 字面量类型
type Name = 'Lsion'
const name3: Name = 'Lsion'
// name3 = 'jxx' // 报错了
type Direction = 'north' | 'east' | 'south' | 'west'
function getDirectionFirstLetter(direction: Direction) {
    return direction.substring(0, 1)
}
// console.log(getDirectionFirstLetter('north'))
type Age = 18
interface InfoInterfaces {
    name: string,
    age: Age
}
const _info: InfoInterfaces = {
    name: 'lison',
    // age: 17, // 报错
    age: 18
} */

/**
 * 可辨识联合两要素
 * 1. 具有普通的单例类型属性
 * 2. 一个类型别名包含了哪些类型的联合
 */
/* interface Square {
    kind: 'square',
    size: number
}
interface Rectangele {
    kind: 'rectangle',
    height: number,
    width: number
}
interface Circle {
    kind: 'circle',
    radius: number
} */
/**
 * 3**3 = 27幂运算
 */
/* type Shape = Square | Rectangele | Circle
function assertNever(value: never): never {
    throw new Error('unexpected object:' + value)
}
function getArea(s: Shape): number {
    switch(s.kind) {
        case 'square': return s.size * s.size; break;
        case 'rectangle': return s.height * s.width; break;
        // case 'circle': return Math.PI * s.radius ** 2; break;
        // default: return assertNever(s) 防止漏了
    }
}
let s: Shape = {
    kind: 'circle',
    radius: 3
}
console.log(getArea(s)) */




