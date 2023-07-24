// export const a = 2

export namespace A {
  export const a = 2
  export namespace b {
    export class Vue {
      parameters: string
      constructor(parameters: string) {
        this.parameters = parameters
      }
    }
  }
}
// 命名空间合并
export namespace A {
  export const c = 1
}
console.log('>>>>>>>>>>>>>>>>>>A.a', A.a)
const v = A.b.Vue
new v('1')

import AAA = A.b
console.log(AAA.Vue, A.c)
