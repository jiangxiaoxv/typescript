const person = { name: 'jxx', age: 24, attr: '猛男' }

// proxy 支持对象 数组 函数 set map
/* const personProxy = new Proxy(person, {
  get(target, key, receiver) {
    if (target.age <= 18) {
      return Reflect.get(target, key, receiver)
    }
    return '成年啦'
  },
  set(target, key, value, receiver) {
    return true
  },
  // 拦截函数调用
  apply() {},
  // in
  has() {},
  // for in
  ownKeys() {},
  // new 操作符
  construct() {},
  // 拦截删除
  deleteProperty() {},
}) */
const list: Set<Function> = new Set()
const autorun = (cb: Function) => {
  if (!list.has(cb)) {
    list.add(cb)
  }
}
const observable = <T extends object>(params: T) => {
  return new Proxy(params, {
    set(target, key, value, receiver) {
      const result = Reflect.set(target, key, value, receiver)
      list.forEach((fn) => fn())
      return result
    },
    get(target, key, receiver) {
      return Reflect.get(target, key, receiver)
    },
  })
}
const personProxy = observable(person)
autorun(() => {
  console.log('>>>>>>>>>>>>>>>>>>有变化了', `有变化了`)
})

personProxy.attr = '真萌呀'
