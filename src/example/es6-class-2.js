
// 继承
// super
// super 作为函数, 只能在子类的construct中调用


// super 作为对象
// 在普通方法中 -》父类的原型对象
// 在静态方法中 -》 父类

/* class Parent {
    constructor () {
        this.type = 'parent'
    }
    getName() {
        return this.type
    }
    static getType = () => {
        return 'isParent'
    }
} */
/* Parent.getType = () => {
    return 'isParent'
} */

/* class child extends Parent {
    constructor() {
        super()
        console.log('construct ' + super.getName())
    }
    getParentName() {
        console.log('getParentName ' + super.getName())
    }
    static getParentType () {
        console.log('getParentType ' + super.getType())
    }
}
const c = new child()
// c.getParentName()
child.getParentType()
 */
/* class Parent {
    constructor () {
        this.name = 'parent'
    }
    print() {
        console.log(this.name) // 这里的this指向子类， child
    }
    
} */
/* class Child extends Parent {
    constructor() {
        super()
        this.name = 'child'
    }
    childPrint() {
        super.print() // child
        console.log(this.name) // child
    }
} */
// const c = new Child()
// c.childPrint()
// console.log(Child.__proto__) // Parent

/**
 * 子类的__proto__指向父类本身 // es6中
 * 子类的prototype属性的__proto__指向父类的prototype
 * 子类实例的__proto__属性的__proto__ 指向父类的实例的__proto__
 */

/* class CunstomArray extends Array {

    constructor(...args) {
        super(...args)
    }
}
const arr = new CunstomArray(3)
arr.fill('+')
console.log(arr) */


