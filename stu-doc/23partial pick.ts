type Personp = {
  name: string
  age: number
  text: string
}

type PartialCopy<T> = {
  [key in keyof T]?: T[key]
}
type pcopy = PartialCopy<Personp>
type p = Partial<Personp>

// pcik

type pickCopy<T, K extends keyof T> = {
  [key in K]: T[key]
}

type ppick = Pick<Personp, 'age' | 'name'>
type ppickCopy = pickCopy<Personp, 'age'>
