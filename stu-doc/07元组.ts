const arry: readonly [number, boolean] = [1, false]
const arry2: readonly [x: number, y?: boolean] = [1, false]

// arry.push(1)
type first = (typeof arry2)[0]
type len = typeof arry2.length
