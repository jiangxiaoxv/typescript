// infer 是typescript中的关键字，充当占位符
// 定一个类型，如果是数组类型，就返回数组元素的类型 否则就传入什么类型 就返回什么类型
type TYPE<T> = T extends Array<any> ? T[number] : T
type TYPE2<T> = T extends Array<infer U> ? U : T
type TYPE3<T> = T extends Array<infer U> ? U : never

type A = TYPE<string[]>
type AB = TYPE<(string | number)[]>
type AC = TYPE<boolean>
type AC2 = TYPE3<boolean>

type T = [string, number]
type uni = TYPE2<T>
type uni2 = TYPE3<T>

// 提取头部
type Arr = ['a', 'b', 'c']
type First<T extends any[]> = T extends [infer one, infer two, infer three]
  ? two
  : []
type First2<T extends any[]> = T extends [infer one] ? one : []
type First3<T extends any[]> = T extends [infer one, ...any[]] ? one : []
type last<T extends any[]> = T extends [...any[], infer last] ? last : []
type last2<T extends any[]> = T extends [...infer Rest, infer last] ? Rest : []
// type a = First<Arr>
type a = First2<Arr>
type l = last2<Arr>

// infer递归
type Arr2 = [1, 2, 3, 4]
type Arr3 = [4, 3, 2, 1]
type ReverArr<T extends any[]> = T extends [infer first, ...infer Rest]
  ? [...ReverArr<Rest>, first]
  : []

type arr4 = ReverArr<Arr2>
