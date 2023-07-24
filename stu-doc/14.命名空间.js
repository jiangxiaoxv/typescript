"use strict";
// export const a = 2
exports.__esModule = true;
exports.A = void 0;
var A;
(function (A) {
    A.a = 2;
    var b;
    (function (b) {
        var Vue = /** @class */ (function () {
            function Vue(parameters) {
                this.parameters = parameters;
            }
            return Vue;
        }());
        b.Vue = Vue;
    })(b = A.b || (A.b = {}));
})(A = exports.A || (exports.A = {}));
// 命名空间合并
(function (A) {
    A.c = 1;
})(A = exports.A || (exports.A = {}));
console.log('>>>>>>>>>>>>>>>>>>A.a', A.a);
var v = A.b.Vue;
new v('1');
var AAA = A.b;
console.log(AAA.Vue, A.c);
