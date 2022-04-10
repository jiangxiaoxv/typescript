
/* function add(args1: number, args2: number): number {
    return args1 + args2
} */

/* const add = (args1: number, args2: number): number => {
    return args2 + args1
} */

// let add: (x: number, y:number) => number
// add = (args1: number, args2: number): number => args2 + args1
// add = (args1: number, args2: number) => args2

/* interface Add{
    (x: number, y: number): number
}
type Add2 = (x: number, y: number) => number

let addFunc: Add = (x: number, y: number): number => {
    return x + y
}
let addFunc2: Add2 = (x: number, y: number): number => {
    return x + y
} */

// type AddFunction = (arg1: number, arg2: number, args3?: number) => number
// let addFunction: AddFunction
// addFunction = (x: number, y: number) => x + y
/* let addFunction = (x: number, y: number = 12) => x + y
console.log(addFunction(1, 3))
console.log(addFunction(1)) */

/* const handleData = (arg1: number, ...args2: number[]) => {

} */
// 函数的重载
/* function handleData(x: string): string[]
function handleData(x: number): number[]
function handleData(x: any): any {
    if (typeof x == 'string') {
        return x.split('')
    } else {
        return x.toString().split('').map((item) => {
            return item * 2
        })
    }
}
console.log(handleData(232))
console.log(handleData('12asd'))
console.log(handleData(false)) */






