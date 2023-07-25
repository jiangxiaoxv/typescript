const set: Set<number> = new Set([1, 2, 2])
console.log('>>>>>>>>>>>>>>>>>>${set}', `${set}`)

const map: Map<object, any> = new Map()

// 1. type字段的产生用于定义package.json文件和该文件所在目录根目录中.js文件和无拓展名文件的处理方式。值为'moduel'则当作es模块处理；值为'commonjs'则被当作commonJs模块处理
// 2. 目前node默认的是如果pacakage.json没有定义type字段，则按照commonJs规范处理
// 3. node官方建议包的开发者明确指定package.json中type字段的值
// 4. 无论package.json中的type字段为何值，.mjs的文件都按照es模块来处理，.cjs的文件都按照commonJs模块来处理
