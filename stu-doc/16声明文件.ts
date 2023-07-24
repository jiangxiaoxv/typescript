// declare
// 当使用第三方库时，我们需要引用他的声明文件，才能获得对应的代码补全、接口提示等功能

/* declare function fn() {
  console.log('>>>>>>>>>>>>>>>>>>1', 1)
} */
import axios from 'axios'
import express from 'express'

const app = express()
const router = express.Router()

app.use('/api', router)

router.get('/api', (req, res) => {
  res.json({
    code: 200,
  })
})

app.listen(9001, () => {
  console.log('>>>>>>>>>>>>>>>>>>')
})

declare const s = 1 // 声明全局变量
