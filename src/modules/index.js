
// export 到处是一个接口
// import 导出的值如果在定时器里改变，导出的变量用的地方也是动态变化
// import 导入的普通值是不能够修改的，对象可以修改属性
import './b.js' // 执行了，语句提升到顶部，多次导入，只会执行一次，不会重复引入
// 多个import导入不同内容，会合并，相当于执行一次

// import { sex } from './b.js'

/* import { default as ages} from './b.js'
console.log(ages)
const name = 'jxx'
const age = 18 */
// export {sex} from './b.js'
// console.log(sex) // 报错了
// import age from './b'
// export default age
// export {default as agess} from './b.js'

/* export {
    name,
    name as names,
    age as default
}
export default 'jxx'
export const str =  'jxx' */
/* if (true) {
    export {
        name
    }
} */