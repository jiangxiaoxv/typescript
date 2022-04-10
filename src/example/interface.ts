


/* interface NameInfo {
    firstName: string,
    lastName: string
}

const getFullName = ({firstName, lastName}: NameInfo) => {
    return `${firstName} ${lastName}`
}

console.log(getFullName({
    firstName: 'hah',
    lastName: 'yang'
})) */
// interface Vegetable {
//     color?: string,
//     type: string,
//     // [propNameC: string]: any
// }
// const getVegetables = ({color, type}: Vegetable) => {
//     return `A ${color ? (color + '') : ''}${type}`
// }
// let vegetableInfo = {
//     type: 'tomato',
//     size: 2,
//     // color: 'red'
// }
// let vegetableObj:Vegetable = {
//     type: 'tomato'
// }
// vegetableObj['type'] = '231'

// console.log(getVegetables(vegetableInfo)) // 绕过多余属性检查 
/* console.log(getVegetables({
    type: 'tomato',
    size: 2,
    // color: 'red'
} as Vegetable)) */
/* 
interface ArrInter {
    0: number,
    readonly 1: string,
}
let arr: ArrInter = [1, 'a']
// arr[1] = 'b'


interface AddFunc {
    (num1: number, num2: number): number
} */
/* const add: AddFunc = (n1, n2) => {
    return n1 + n2
} */


// 索引类型
// interface RoleDic {
//     [id: number]: string
// }

// const role1: RoleDic = {
//     'a': 'super_admin'
// }

/* interface RoleDic{
    [id: string]: string
}
const role2: RoleDic = {
    a: 'super_admin',
    1: 'admin', // 1.toString()
}
const obj8 = {
    123: 'a',
    // '123': 'b'
} */


// 借口继承

/* interface Vegetables {
    color: string
}
interface Tomato extends Vegetables {
    // color: string,
    radius: number,
}
interface Carrot extends Vegetables{
    // color: string,
    length: number
}
const tomato: Tomato = {
    radius: 12,
    color: 'red', // 接口继承
}
const carrot: Carrot = {
    length: 2,
    color: 'red'
}

interface Cunter{
    (): void, // 方法
    count: number // 接口属性
}
 */
// const getCounter  = (): Cunter => {
//     /* const c = {
//         count: 1
//     } */
//     const c = () => {
//         return c.count++
//     }
//     c.count = 0
//     return c
// }
/* const counter: Cunter = getCounter()
counter()
console.log(counter.count)
counter()
console.log(counter.count)
counter() */
