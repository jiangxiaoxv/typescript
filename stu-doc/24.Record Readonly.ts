type R<T> = {
  readonly [key in keyof T]: T[key]
}

type PersonR = {
  name: string
  age: number
  sex: boolean
}

type PersonRR = R<PersonR>
type PersonReadonlyCopy = Readonly<PersonR>

// record 实现
type RecordCopy<K extends keyof any, T> = {
  [key in K]: T
}
type keyOfAny = string | number | symbol

type K = 'A' | 'B' | 'C'

type B = Record<K, PersonR>

const objRecord: B = {
  A: { name: 'j', age: 12, sex: true },
  B: { name: 'j', age: 12, sex: true },
  C: { name: 'j', age: 12, sex: true },
}
