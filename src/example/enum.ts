
/* enum Status {

    Uploading = 3,
    Success = 2,
    Failed,
    
}
console.log(Status.Uploading)
console.log(Status['Failed'] == Status.Uploading) // true */

/* const test = 1
const getIndex = () => {
    return 2
}
enum Status {

    Uploading = 3,
    // Success = test,
    Success = getIndex(), // 后面的枚举值必须指定初始值
    Failed = 4,
    
} */

/* 
console.log(Status)
2: "Success"
3: "Uploading"
4: "Failed"
Failed: 4
Success: 2
Uploading: 3 */

// 枚举值类面不能使用另一个枚举的值
/* enum Message {
    Error = 'Sorry, error',
    Success = 'Hoho, success',
    Failed = Error,
    // Wocao// 必须指定初始值
}
console.log(Message.Failed) */

// 异构枚举
/* enum Result {
    Faild = 0,
    Success = 'success'
} */

// 1. enum E {A}
// 2. enum E {A = 'a'}
// 3. enum E {A = -1}
// 枚举成员类型
/* enum Animals {
    Dog = 1,
    Cat = 2

}
interface Dog{
    type: Animals.Dog,
    type1: Animals.Dog
}
const dog: Dog = {
    type: Animals.Dog,
    type1: 2, // 没有报错
    // type: Animals.Cat// 报错
}
console.log(dog) */

// 联合枚举类型
/* enum Animals {
    Dog = 1,
    Cat = 2
}
enum Status {
    Off,
    On,
}
interface Light {
    status: Status,
    // status2: Status,
}
const light: Light = {
    status: Status.Off,
    // status2: Animals, // 报错了
}


const enum Animals1 { // bable 转化比enum Animals1更简单
    Dog = 1,
}
const dog = Animals1.Dog
console.log(dog) */
// res.code == Status.Success
