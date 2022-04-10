
# npm i typescript -g
1. tsc -h

# 元祖是可以push，但是不能访问

# 枚举类型的值被定义了就不能够修改

# 索引类型
    interface IIndexArray {
        [key: number]: string;
    }
    let arrIndexArray: Array<IIndexArray> = ['1']

# 函数式接口
    interface Add {
        (x: number, y: number): number
    }
    type Add = (x: number, y: number) => number
    let add: Add = (x, y) => {x + y}

# 混合函数式接口
    interface Lib{
        ():void;
        version: string;
        doSometing(): void
    }

# 类的构造函数被private修饰
  是不能被实例化和继承的
  protected 是不能被实例化,单可以继承的
  
# 多态

# 接口只能约束类的功能成员不能约束构造函数

# 泛型不支持static

# 函数兼容 1 参数个数 2 参数类型 3 返回值
# 枚举类型兼容性 和数字兼容，枚举类型之间不兼容
# 实例兼容只要实例属性相同，但不能有私有成员
  口诀：
      - 结构之间兼容： 成员少的兼容成员多的
      - 函数之间兼容： 参数多的兼容参数少的

# 类型保护
  1. instanceof 
  2. in 
  3. typeof 
  4. function isJava(lang:Java | Javascript): lang is Java{
      return (lang as Java).helloJava !== undefined
  }

# 交叉类型
  1. interface Dog {
      run(): void
  }
  2. interface Cat {
      jump(): void
  }
  3. let pet: Dog & Cat = {
      run() {},
      jump() {}
  }
  4. function say(an: Animals) {
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
    }

# 索引类型
    1. keyof T
        interface Obj {
            a: number;
            b: string;
        }
        let keys: keyof Obj = 'a'
        let keyss: keyof Obj = 'b'
        // let keysss: keyof Obj = 'c'
        console.log(keys)
    2. T[K]
        let value: obj['a']
    3. T extends U
        let obj = {
            a: 1,
            b: 2
        }
        function getV<T,K extends keyof T>(obj: T, keys: K[]):T[K][] {
            return keys.map(key => obj[key])
        }
# 映射类型

