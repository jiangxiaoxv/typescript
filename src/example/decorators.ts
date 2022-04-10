
// 装饰器
// 装饰器不能用在声明文件和外部
/* function setProp(target) {
    return function(name) {}
}
@setProp()
function d(name: string) {} */

/* function setName() {
    console.log('get setName')
    return (target) => {
        console.log('setName')
    }
}
function setAge() {
    console.log('get setAge')
    return (target) => {
        console.log('setAge')
    }
} */
/* @setName()
@setAge()
class ClassDec {
    constructor(parameters) {
        
    }
} */
/* 
let sign = null
function setName(name: string) {
    return function(target: new() => any) {
        sign = target // 类本身，也是构造函数
        console.log(target.name)
    }
}
// 装饰器可以修改类原型与构造函数
@setName('lison')
class ClassDec {
    constructor() {
        
    }
} */
/* console.log(sign === ClassDec) // true
console.log(sign === ClassDec.prototype.constructor)// true */

/* 
function addName(constructor:  new() => any) {
    constructor.prototype.name = 'lison'
}
@addName
class ClassD {
    constructor() {
        
    }
}
interface ClassD{
    name: string
}
const d = new ClassD()
console.log(d.name) // 通过声明合并解决问题 */
/* 
function classDecorator<T extends {new (...args:any[]): {}}>(target: T) {
    return class extends target {
        public newProperty = 'new property' // 优先级高于类内构
        public hello = 'override'
    }
}

@classDecorator
class Gteeter {
    public property = 'property'
    public hello: string
    constructor(m: string) {
        this.hello = m
    }
} */
/**
 * hello: "override"
 * newProperty: "new property"
 * property: "property"
 */
// console.log(new Gteeter('world'))

// 方法装饰器
/**
 * 1. configurable
 * 2. writeable
 * 3. enumerable
 */
/* interface ObjWithAnyKeys{
    [key: string]: any
}
let obj12: ObjWithAnyKeys = {}
Object.defineProperty(obj12, 'name', {
    value: 'wocao',
    configurable: true, // 不可逆
    enumerable: true,
    writable: true,
})
// obj12.name = 'test'
// console.log(obj12.name) // 不能识别类型
for(let key in obj12) {
    console.log(key)
} */

// 不支持es5的，不能使用属性装饰副
/* function enumerable(bool: boolean) {
    return function(target: any, propertyName: string, descriptor: PropertyDescriptor) {
        console.log(target, propertyName) // 类本身 || 类的原型对象
        descriptor.enumerable = bool
    }
// } */
// function enumerable(bool: boolean): any {
//     return function(target: any, propertyName: string, descriptor: PropertyDescriptor) {
//         let method = descriptor.value
//         // console.log(target == ClassF.prototype)
//         // method.apply(target)
//         // console.log('wocao')
//         /* return {
//             value: function() {
//                 return 'not age'
//             },
//             enumerable: bool,
//         } */
//     }
// }
// class ClassF {
//     constructor(public age: number) {
        
//     }
//     // 装饰的是静态成员时target是类的构造函数
//     // 装饰的是实例成员时target时类的原型对象
//     @enumerable(false)
//     public getAge() {
//         return this.age
//     }
//     /* @enumerable(false)
//     static getName() {
//         console.log('wocaoName')
//     } */
// }
// const classF = new ClassF(18)
// console.log(classF.getAge())
// for (const key in classF) {
//     console.log(key)
// }


/* function enumerable(bool: boolean) {
    return (target: any, property: string, des: PropertyDescriptor) => {
        des.enumerable = bool
    }
}
class ClassG {
    private _name: string
    constructor(name: string) {
        this._name = name
    }
    @enumerable(false)
    get name() {
        return this._name
    }
    // @enumerable(false) //报错了，get，set只能使用一个装饰器
    set name(name: string) {
        this._name = name
    }
}
const classG = new ClassG('lison')
for (const key in classG) {
    console.log(key)
} */
// 属性装饰器
/* function printPropertyName(target: any, propertyName: string) {
    console.log(target == ClassH.prototype)
    console.log(target)
    console.log(target[propertyName])
}
class ClassH {
    @printPropertyName
    public name: string
    public age: number = 18
    constructor(parameters) {
        
    }
}
let as = new ClassH('')
console.log(as) */
/* 
function required(target: any, propertyName: string, index: number) {
    console.log(target == ClassI.prototype)
    console.log(`修饰的是${propertyName}的第${index+1}参数`)
}
class ClassI {
    public name: string
    public age: number
    public getInfo(prefix: string, @required infoType: string): any {
        return prefix + ' ' + this[infoType]
    }
    constructor() {
        
    }
}
interface ClassI {
    [key: string]: string | number | Function
}
const classI = new ClassI()
classI.getInfo('hihi', 'age') */

