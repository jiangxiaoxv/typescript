/**
 *
 * @param targetConstruct 构造函数
 */

const Base = (name: string) => {
  const fn: ClassDecorator = (targetConstruct, sec) => {
    console.log('>>>>>>>>>>>>>>>>>>targetConstruct', targetConstruct)
    targetConstruct.prototype.name = name
    targetConstruct.prototype.fn = () => {
      console.log('>>>>>>>>>>>>>>>>>>下一期彩票代码', '下一期彩票代码', sec)
      console.log('>>>>>>>>>>>>>>>>>>${targetConstruct}', `${targetConstruct}`)
    }
  }
  return fn
}

@Base('jxx')
class Http {}
const h = new Http()
console.log('>>>>>>>>>>>>>>>>>>${name}', `${h}.name`)

/**
 *
 */
