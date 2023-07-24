function* gen() {
  yield 'xiao' // 可以同步或者异步
  yield new Promise((res, rej) => {
    try {
      setTimeout(() => {
        res(5)
      }, 1000)
    } catch (err) {
      console.log('>>>>>>>>>>>>>>>>>>err', err)
    }
  })
  yield 1
}

const man = gen()
let value
// console.log('>>>>>>>>>>>>>>>>>>', man.next())

while (!(value = man.next()).done) {
  console.log(value)
}

const map = new Map()
map.set('1', '2')

console.log('>>>>>>>>>>>>>>>>>>', map[Symbol.iterator]().next())

// 解构也是调用Symbol.iterator
