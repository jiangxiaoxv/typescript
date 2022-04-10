

// Symbol是独一无二的，
/**
 * 
 * Symbol不能与其他类型作运算
 */
// let s = Symbol()
// console.log(s)
// let s2 = Symbol()
// console.log(s == s2 ) // false

// let s3 = Symbol('lison')
/* let s4 = Symbol('lision')
console.log(s4.toString())
console.log(Boolean(s4))
console.log(!s4)
console.log(!!Symbol()) */
// console.log(s3 == s4 ) // false

/* let prop = 'name'
const info = {
    [prop]: 'lison',
    [`myname${prop}`]: 'lision',
}
// console.log(info)
const s5 = Symbol('name')
const info2 = {
    [s5]: 'lison',
    age: 17,
    sex: 'man'
} */
// console.log(info2)
// info2[s5] = '12'
// console.log(info2)
// info2.s5 = '12' // 报错

// for in 循坏不能遍历到symbol属性

/* for(const key in info2) {
    // console.log(key)
}
 */
// console.log(Object.keys(info2)) // 同样没有sumbol属性

// console.log(Object.getOwnPropertyNames(info2)) // 同样没有sumbol属性

// console.log(JSON.stringify(info2)) //// 同样没有sumbol属性

// console.log(Object.getOwnPropertySymbols(info2)) // [Symbol(name)]
// console.log(Reflect.ownKeys(info2)) // ['age', 'sex', Symbol(name)]


// Symbol.for() // 全局范围，sercieworker，ifrom查找
// Symbol.keyFor()

// const s6 = Symbol('lison')
// const s7 = Symbol('lison')

// console.log(s6 == s7) // false

// const s8 = Symbol.for('lison')
// const s9 = Symbol.for('lison')

// console.log(s8 === s9) // true

// console.log(Symbol.keyFor(s6)) // undefined
// console.log(Symbol.keyFor(s8)) // lison
// 11 个Symbol内置属性值
// Symbol.hasInstance
/* const obj1= {
    [Symbol.hasInstance](otherObj) {
        console.log(otherObj) // {a: 'a'}
        // return true
    }
} */
// console.log({a: 'a'} instanceof <any>obj1) // false

// let arr = [1, 2]
// console.log([].concat(arr, [3, 4])) // [1, 2, 3, 4]
// arr[Symbol.isConcatSpreadable] = false
// console.log([].concat(arr, [3, 4])) // [Array(2), 3, 4]
// console.log(arr[Symbol.isConcatSpreadable]) // false

/* class C extends Array{

    constructor(...args) {
        super(...args)
    }
    static get [Symbol.species]() {
        return Array
    }
    getName() {
        return 'lison'
    }
} */
// const c = new C(1, 2, 3)
// const a = c.map((item) => item + 1)
// console.log(c)
// console.log(a)
// console.log(a instanceof C) // 90行代码影响结果false
// console.log(a instanceof Array) // true

/* let obj3 = {
    [Symbol.match](string) {
        // console.log(string.length) // 6
        // return true
    },
    [Symbol.split](string) {
        // console.log(string)
        // console.log('split', string.length) // 6
        // return string.split('')
    }
} */
// console.log('abcdea'.match(<RegExp>obj3)) // false
// Symbol.repalce
// Symbol.search
// Symbol.split
// console.log('abcdea'.split(<any>obj3)) // undefined

// let arr = [1, 3, 5]
// let ite = arr[Symbol.iterator]()
// console.log(ite.next())

/* let obj4:unknown = {
    [Symbol.toPrimitive](type) {
        console.log(type)
    }
} */
// const res = (obj4 as number)++
// console.log(obj4)


/* Symbol.toString()
let obj5 = {
    // [Symbol.toStringTag]: 'lison'
    get [Symbol.toStringTag]() {
        return 'lison'
    }
} */
// console.log(obj5.toString()) // [object lison]

/* const obj6 = {
    a: 'a',
    b: 'b'
}
console.log(Array.prototype[Symbol.unscopables]) */