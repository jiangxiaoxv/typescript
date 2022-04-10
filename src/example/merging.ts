/* 
interface Infointer {
    name: string,
    getRes(input: string): number // 联合， 函数重载
}
interface Infointer {
    age: number,
    // name: boolean,// 类型不同报错了
    name: string,
    getRes(input: number): string // 联合, 函数重载
}
// 接口合并声明
let infoInter: Infointer
infoInter = {
    name: 'lison',
    age: 18,
    getRes(input: any) {
        if (typeof input == 'number') {
            return this.age
        } 
        if (typeof input == 'string') {
            return this.name
        } 
        return {}
    }
}
// console.log(infoInter)
console.log(typeof infoInter.getRes(12+'')) // 参数只能是number ｜ string， 返回值同样
 */
console.log('wocao1')
export function wocao() {
    console.log('草泥马')
}