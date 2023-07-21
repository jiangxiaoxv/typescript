/* function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj); */

/* interface LabelledValue {
    label: string,
    readonly size: number,
    [prop: string]: string | number,
    [index: number]: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
    // labelledObj.size = 10
}

// let myObj = { size: 10, label: "Size 10 Object" };
// printLabel({label: 'jxx', size: 10});
// printLabel(myObj)
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
// console.log(ro)
// ro[0] = 3

let b: number[] = ro as number[]
b[1] = 2
// console.log(b)

interface SearchFunc {
    (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}
mySearch = function (src: string, sub: string): boolean {
    let result = src.search(sub);
    return result > -1;
}
mySearch = function (src, sub) {
    let result = src.search(sub);
    return result > -1;
}


interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = {'12': 's', '1': 's'};
myArray = ['ad', 'ags']

let myStr: string = myArray[0];
// console.log(myStr)

interface ReadonlyStringArray {
    readonly [index: number]: string;
}
let myArrays: ReadonlyStringArray = ["Alice", "Bob"];


interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
    tick();
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
}
class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep beep");
    }
}
let digital = createClock(DigitalClock, 12, 17);


interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) { 
        return '12'
    };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;

abstract class Animal {
    private name: string;
    constructor(theName: string) { this.name = theName; }
    printPrivateName () {
        console.log(this.name)
    }
}

class Rhino extends Animal {
    
    constructor() { super("Rhino");}
    printName() {
        super.printPrivateName()
    }
}

let rhino = new Rhino();
// rhino.printName()
// let animal = new Animal('lqq')



/* function identity<T>(arg: T): T {
    return arg;
}
// console.log(identity(12))
let myIdentity: <U>(arg: U) => U;
myIdentity = <T>(str: T) =>  {
    return str
}
// console.log(myIdentity)
let myIdentitys: <U>(arg: U) => U = identity;
console.log(myIdentitys) */

/* interface GenericIdentityFn {
    <T>(arg: T): T;
}

function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: GenericIdentityFn = identity;


class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };

enum E1 { X = 1, Y, Z }

enum E2 {
    A = 1, B, C
}
// console.log(E1.Y)
// console.log(E1.X == E2.A)

enum E {
    Foo,
    Bar,
}

function f(x: E) {
    if (x !== E.Foo) {
        //             ~~~~~~~~~~~
        // Error! Operator '!==' cannot be applied to types 'E.Foo' and 'E.Bar'.
    }
}

enum Enum {
    A
}
let a2 = Enum.A;
let nameOfA = Enum[a2];
// console.log(nameOfA)
// console.log(a2)

enum TEnum {
    A,
    B = TEnum.A,
    C = Math.random(),
    e = '123'.length
}
// console.log(TEnum.B === TEnum.A) // true
interface IIndexArray {
    [key: number]: string;
}
let arrIndexArray: Array<IIndexArray> = ['1']

let com: () => {}
com = () => {
    return {}
}
type Add = (x: number, y: number) => number
let addsssss: Add = (x, y) => x + y


interface Lib {
    (): any;
    version: string;
    doSometing(): void
}  */
/* let lib: Lib = (() => {}) as Lib
lib.version = '1.0'
lib.doSometing = () => {} */
/* function getLib(): Lib {
    let lib: Lib = (() => {
        return lib.version
    }) as Lib
    lib.version = '1.0'
    lib.doSometing = () => {}
    return lib
}
let lib1 = getLib()
lib1()
lib1.doSometing()
let lib2 = getLib() */

/* interface Obj {
    a: string;
    b: number;
    c: boolean;
}
// 同态
type ReadonlyObj = Readonly<Obj>
type PartialObj = Partial<Obj>
type PickObj = Pick<Obj, 'a' | 'b'>

// 非同态
type RecordObj = Record<'x' | 'y', Obj>

type TypeName<T> = 
        T extends string ? "string": 
            T extends number ? "number":
                T extends boolean ? "boolean" : "object"

type T1 = TypeName<string>
type T2 = TypeName<string[]>

type T3 = TypeName<string | string[]>
type Diff<T, U> = T extends U ? never : T
type T4 = Diff<"a" | "b" | "c", "a" | "e">

type NotNull<T> = Diff<T, undefined | null>
type T5 = NotNull<string | number | undefined | null>

// Exclude<T, U>, NonNullable<T> Extract<T, U>
type T6 = Exclude<string | number, number>

// ReturnType<T>
type T7 = ReturnType<() => string> */

/// <reference path="a.ts" />
namespace shape {
  export function square(x: number) {
    return x * x
  }
}
import { log } from 'console'
import square = shape.square
// console.log(s)
console.log(square(1))
console.log('正在学习typescript')
