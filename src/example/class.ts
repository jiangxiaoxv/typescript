

/* class Point{
    x: number
    y: number
    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }
    public getPosition() {
        return `${this.x}, ${this.y}`
    }
}

const point = new Point(1, 2)
console.log(point.getPosition())

class Parent {
    public name: string
    constructor(name: string) {
        this.name = name
    }

}
class Child extends Parent {
    constructor(name: string) {
        super(name)
    }

} */

// public公共
// private 私有的，类外边是不能被访问的
// protected 受保护的，只能在子类或者父类中访问
/* class Parent {
    public name: string
    private age: number
    constructor(name: string, age: number = 19) {
        this.name = name
        this.age = age
    }
    
}

class Child extends Parent {
    constructor(name: string) {
        super(name)
    }

} */

// const p = new Parent('jxx', 10)
// console.log(p.age) // 报错
// const c = new Child('jxx')
// console.log(c.age)

/* class Parent {
    public name: string
    protected age: number
    protected constructor(name: string, age: number = 19) {
        this.name = name
        this.age = age
    }
    protected getAge() {
        return this.age
    }
}

class Child extends Parent {
    constructor(name: string) {
        super(name)
        // console.log(this.age)
        // console.log(this.getAge())
    }


} */
// protectd 修饰父类的构造行数，则不能通过父类创造实例
// const p = new Parent('jxx', 10)
// const c = new Child('jxx')

// readonly
/* 
class UserInfo {
    public readonly name: string
    constructor(name: string) {
        this.name = name
    }
}
const userInfo = new UserInfo('lison')
console.log(userInfo)
// userInfo.name = 'jxx' */


/* 
class A {
    // 加上public 相当于this.name = name
    constructor(public name: string) {

    }
}
const a1 = new A('lison')

console.log(a1) */


/* class Parent {
    public static age: number = 18
    public static getAge() {
        return Parent.age
    }
    constructor() {

    }
}
const p = new Parent() */
// console.log(p.age)
// console.log(Parent.age)


/* class Info {
    public name: string
    public age?: number
    public _infoStr: string

    constructor(name: string, age?: number, public sex?: string) {
        this.name = name
        this.age = age
    }
    get infoStr() {
        return `${this.name}: ${this.age}`
    }
    set infoStr(value) {
        console.log(`setter: ${value}`)
        this._infoStr = value
    }
}
const info1 = new Info('lison')
const info3 = new Info('lison', 18)
// console.log(info3)
const info4 = new Info('lison', 18, 'man')
info4.infoStr = 'wocao'
// console.log(info4)
console.log(info4.infoStr) */

/* abstract class People {
    constructor(public name: string) {
        
    }
    public abstract printName(): void
} */
// const p1 = new People()
/* class Man extends People {
    constructor(name: string) {
        super(name)
        this.name = name
    }
    public printName(): void {
        console.log(this.name)
    }
}
const m = new Man('lison')
m.printName() */

/* abstract class People {

    public abstract _name: string
    abstract get insideName(): string
    abstract set insideName(value: string)// : string // 不能标志返回类型
    
}
class P extends People {
    public _name: string
    public insideName: string
    
} */
/* class People {
    constructor(public name: string) {}
}
let p2: People =  new People('lison')
console.log(p2)
class Animal {
    constructor(public name: string) {
        
    }
}
p2 = new Animal('hah')
console.log(p2) */

// ,;都可以隔开
/* interface FoodInterface {
    type: string,
    name: string;
}
class FoodClass implements FoodInterface {
    public static type: string = ''
    name: string = ''
    type: string
    constructor(type: string, name?: string) {
        
    }
} */
// 接口可以继承类，只会继承成员（类型），不会继承实现

/* class A {
    protected name: string // 只能在A，I中访问，不能在B中访问， 此时B extends A，解决问题
    constructor(parameters) {
        
    }
}
interface I extends A {

} */
/* class B implements I {
    protected name: string;
    
} */
/* class B extends A implements I {
    protected name: string;
    
} */

/* const create = <T>(c: new() => T): T => {
    return new c()
}
class Infos {
    public age: number
    constructor(age: number = 18) {
        this.age = age
    }
}
create(Infos)
console.log(create<Infos>(Infos).age) */
// console.log(create<Infos>(Infos).name)

/* class Dog {
    readonly name: string;
    protected constructor(name: string) {
        this.name = name;
    }
    setName(name: string) {
        // this.name = name;
    }
}
// let dog = new Dog('lqq')
class Animals {
    state = 1
    // private state2 = 0;
}
interface Human extends Animals {
    // new (name: string)
    // name: string;
    // eat(): void;
}
class Asian implements Human{
    state: number;
   
    name: string
    constructor(name: string) {
        this.name = name;
    }
    
    eat() {}
} */

/* interface Dog {
    run(): void;
    name: 'dog';
    
} 
interface Cat {
    jump(): void;
    name: 'cat'
}
interface Tiger {
    eat(): void;
    name: 'tiger'
} */
/* let pet: Dog & Cat = {
    run() {},
    jump() {},
    name: 'dog'
} */
/* type Animals = Dog | Cat | Tiger
function say(an: Animals) {
    switch(an.name) {
        case 'cat':
            an.jump()
            break;
        case 'dog':
            an.run()
            break;
        case 'tiger':
            an.eat()
            break;
        default:
            ((e: never) => {throw  new Error(e)})(an)
    }
} */

