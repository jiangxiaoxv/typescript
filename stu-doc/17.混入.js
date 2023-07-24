// var a = {
//     name: 'jx'
// };
// var b = {
//     age: 12
// };
// var c = {
//     sex: 1
// };
// // 对象的混入
// var obj = Object.assign(a, b, c);
// // 类的混入
// var Am = /** @class */ (function () {
//     function Am() {
//         this.type = false;
//     }
//     Am.prototype.changeType = function () {
//         this.type = !this.type;
//     };
//     return Am;
// }());
// var Bm = /** @class */ (function () {
//     function Bm() {
//         this.name = 'jxx';
//     }
//     Bm.prototype.getName = function () {
//         return this.name;
//     };
//     return Bm;
// }());
// // 类的混入
// var Cm = /** @class */ (function () {
//     function Cm() {
//         this.type = false;
//         this.name = 'jxx';
//     }
//     return Cm;
// }());
// mixins(Cm, [Am, Bm]);
// function mixins(curClass, itemClass) {
//     itemClass.forEach(function (item) {
//         console.log('>>>>>>>>>>>>>>>>>>item', item);
//         Object.getOwnPropertyNames(item.prototype).forEach(function (name) {
//             console.log('>>>>>>>>>>>>>>>>>>name', name);
//             curClass.prototype[name] = item.prototype[name];
//         });
//     });
// }
// var cccm = new Cm();
// cccm.changeType();
