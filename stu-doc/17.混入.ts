// 对象混入
interface NameM {
  name: string
}
interface AgeM {
  age: number
}
interface SexM {
  sex: number
}
const a: NameM = {
  name: 'jx',
}
const b: AgeM = {
  age: 12,
}
const c: SexM = {
  sex: 1,
}
// 对象的混入
const obj = Object.assign(a, b, c)
// 类的混入

class Am {
  type = false
  changeType() {
    this.type = !this.type
  }
}

class Bm {
  name = 'jxx'
  getName(): string {
    return this.name
  }
}
// 类的混入
class Cm implements Am, Bm {
  type = false
  name = 'jxx'
  changeType: () => void
  getName: () => string
}

mixins(Cm, [Am, Bm])
function mixins(curClass: any, itemClass: any[]) {
  itemClass.forEach((item) => {
    console.log('>>>>>>>>>>>>>>>>>>item', item)
    Object.getOwnPropertyNames(item.prototype).forEach((name) => {
      console.log('>>>>>>>>>>>>>>>>>>name', name)
      curClass.prototype[name] = item.prototype[name]
    })
  })
}

const cccm = new Cm()
cccm.changeType()
