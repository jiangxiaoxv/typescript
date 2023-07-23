// 内置对象
// ecma Number Date RegExp Error XMLHtttprequest
// dom querySelect MouseEvent
// bom promise localstorage cooki location

const num: Number = new Number(1)
const date: Date = new Date()
const xhr: XMLHttpRequest = new XMLHttpRequest()

const div = document.querySelector('input')
const timer: NodeJS.Timeout = setTimeout(() => {
  console.log('>>>>>>>>>>>>>>>>>>hah')
}, 100)

const divs: NodeListOf<HTMLDivElement | HTMLElement> =
  document.querySelectorAll('div')

const local: Storage = localStorage

const lo: Location = location
const promise: Promise<number> = new Promise((res, rej) => {
  res(1)
})
promise.then((res) => {
  console.log(
    '>>>>>>>>>>>>>>>>>>res',
    res,
    num,
    date,
    xhr,
    timer,
    div,
    divs,
    local,
    lo
  )
})
