
/* 
class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
        // return {a: x}
    }
    getPosition() {
        return `${this.x}, ${this.y}`
    }
} */
/* const p1 = new Point(1, 3)
console.log(Point(2, 3)) // 报错 */
/* class Info {
    constructor(age) {
        this._age = age
    }
    get age() {
        console.log('wocao')
        return this._age
    }
    set age(value) {
        console.log('set')
        this._age = value
    }
} */
/* let i = new Info(17)
console.log(i.age) */



/* 
const infos = class c {
    constructor() {}

}
const infoss = class {
    constructor() {}

}
console.log(new c()) // 报错了
console.log(new infos()) */

// 静态方法
/* class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    getPosition() {
        return `${this.x}, ${this.y}`
    }
    static getClassName() {
        return Point.name
    }
}
let p = new Point(1,2) */
// console.log(p.getClassName()) // 报错了
// console.log(Point.getClassName())


/* class Point {
    constructor(x) {
        this.x = x
    }
    static z = 10 // 类静态属性的一种方法
}
Point.y = 2 // 类静态属性的一种方法
let p = new Point(1,2)
console.log(Point.z) */

// a.js
/* const _func3 = () => {} // 私有属性
const func1 = Symbol('func1')
class Point {
    constructor(x) {
        this.x = x
    }
    static [func1] () {}
    func2 () {
        _func3.call(this)
    }
    _func3 () {}
} */

/* class Point {
    constructor(x) {
        this.x = x
    }
    #OwnProp = 12 // 私有属性, 还没有提案
}

// console.log(new Point(2), Point) */


/* function Point() {
    console.log(new.target)
}
const p = new Point() // Point
const p2 = Point() // undefined */

/* class Point {
    constructor() {
        console.log(new.target)
    }
}

const p = new Point() // Point
const p2 = Point() // 报错  */


/* class parent {
    constructor() {
        
        if (new.target == parent) {
            throw new Error('不能通过父类实例花')
        } else {
            console.log(new.target) // child extends parent
        }
    }
}
class child extends parent{
    constructor() {
        super()
    }
}
const c = new child() // child extends parent
const p = new parent() // 跑错 */