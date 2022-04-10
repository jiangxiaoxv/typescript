/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts-modules/zongjie.ts":
/*!***********************************!*\
  !*** ./src/ts-modules/zongjie.ts ***!
  \***********************************/
/***/ (function() {

/* function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj); */
function printLabel(labelledObj) {
    console.log(labelledObj.label);
    // labelledObj.size = 10
}
// let myObj = { size: 10, label: "Size 10 Object" };
// printLabel({label: 'jxx', size: 10});
// printLabel(myObj)
let a = [1, 2, 3, 4];
let ro = a;
// console.log(ro)
// ro[0] = 3
let b = ro;
b[1] = 2;
let mySearch;
mySearch = function (source, subString) {
    let result = source.search(subString);
    return result > -1;
};
mySearch = function (src, sub) {
    let result = src.search(sub);
    return result > -1;
};
mySearch = function (src, sub) {
    let result = src.search(sub);
    return result > -1;
};
let myArray;
myArray = { '12': 's', '1': 's' };
myArray = ['ad', 'ags'];
let myStr = myArray[0];
let myArrays = ["Alice", "Bob"];
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
class DigitalClock {
    constructor(h, m) { }
    tick() {
        console.log("beep beep");
    }
}
let digital = createClock(DigitalClock, 12, 17);
function getCounter() {
    let counter = function (start) {
        return '12';
    };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
class Animal {
    constructor(theName) { this.name = theName; }
    printPrivateName() {
        console.log(this.name);
    }
}
class Rhino extends Animal {
    constructor() { super("Rhino"); }
    printName() {
        super.printPrivateName();
    }
}
let rhino = new Rhino();
function identity(arg) {
    return arg;
}
let myIdentity = identity;
class GenericNumber {
}
let myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };
var E1;
(function (E1) {
    E1[E1["X"] = 1] = "X";
    E1[E1["Y"] = 2] = "Y";
    E1[E1["Z"] = 3] = "Z";
})(E1 || (E1 = {}));
var E2;
(function (E2) {
    E2[E2["A"] = 1] = "A";
    E2[E2["B"] = 2] = "B";
    E2[E2["C"] = 3] = "C";
})(E2 || (E2 = {}));
// console.log(E1.Y)
// console.log(E1.X == E2.A)
var E;
(function (E) {
    E[E["Foo"] = 0] = "Foo";
    E[E["Bar"] = 1] = "Bar";
})(E || (E = {}));
function f(x) {
    if (x !== E.Foo) {
        //             ~~~~~~~~~~~
        // Error! Operator '!==' cannot be applied to types 'E.Foo' and 'E.Bar'.
    }
}
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
})(Enum || (Enum = {}));
let a2 = Enum.A;
let nameOfA = Enum[a2];
// console.log(nameOfA)
// console.log(a2)


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

// import './example/basic-typs'
Object.defineProperty(exports, "__esModule", ({ value: true }));
// import './example/symbol'
// import './example/interface'
// import './example/function'
// import './example/generics'
// import './example/es6-class-1.js'
// import './example/es6-class-2.js'
// import './example/class'
// import './example/enum'
// import './example/inference-compatibility'
// import './example/advanced-type-1'
// import './example/advanced-type-2'
// import './modules/index'
// import './ts-modules/index'
// import './example/merging'
// import './example/decorators'
// import './example/minxin'
// import './example/update'
// import './example/declaration-files'
__webpack_require__(/*! ./ts-modules/zongjie */ "./src/ts-modules/zongjie.ts");

}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbl8yNWE2YWExZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxzQ0FBc0MsZUFBZTtBQUNyRDtBQUNBOztBQUVBLGNBQWM7QUFDZCxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsZUFBZSx1QkFBdUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxnQkFBZ0I7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsZ0JBQWdCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsY0FBYztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsb0JBQW9CO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDakhBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7O0FDdEJhO0FBQ2I7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQU8sQ0FBQyx5REFBc0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXQvLi9zcmMvdHMtbW9kdWxlcy96b25namllLnRzIiwid2VicGFjazovL3R5cGVzY3JpdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90eXBlc2NyaXQvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZnVuY3Rpb24gcHJpbnRMYWJlbChsYWJlbGxlZE9iajogeyBsYWJlbDogc3RyaW5nIH0pIHtcbiAgICBjb25zb2xlLmxvZyhsYWJlbGxlZE9iai5sYWJlbCk7XG59XG5cbmxldCBteU9iaiA9IHsgc2l6ZTogMTAsIGxhYmVsOiBcIlNpemUgMTAgT2JqZWN0XCIgfTtcbnByaW50TGFiZWwobXlPYmopOyAqL1xuZnVuY3Rpb24gcHJpbnRMYWJlbChsYWJlbGxlZE9iaikge1xuICAgIGNvbnNvbGUubG9nKGxhYmVsbGVkT2JqLmxhYmVsKTtcbiAgICAvLyBsYWJlbGxlZE9iai5zaXplID0gMTBcbn1cbi8vIGxldCBteU9iaiA9IHsgc2l6ZTogMTAsIGxhYmVsOiBcIlNpemUgMTAgT2JqZWN0XCIgfTtcbi8vIHByaW50TGFiZWwoe2xhYmVsOiAnanh4Jywgc2l6ZTogMTB9KTtcbi8vIHByaW50TGFiZWwobXlPYmopXG5sZXQgYSA9IFsxLCAyLCAzLCA0XTtcbmxldCBybyA9IGE7XG4vLyBjb25zb2xlLmxvZyhybylcbi8vIHJvWzBdID0gM1xubGV0IGIgPSBybztcbmJbMV0gPSAyO1xubGV0IG15U2VhcmNoO1xubXlTZWFyY2ggPSBmdW5jdGlvbiAoc291cmNlLCBzdWJTdHJpbmcpIHtcbiAgICBsZXQgcmVzdWx0ID0gc291cmNlLnNlYXJjaChzdWJTdHJpbmcpO1xuICAgIHJldHVybiByZXN1bHQgPiAtMTtcbn07XG5teVNlYXJjaCA9IGZ1bmN0aW9uIChzcmMsIHN1Yikge1xuICAgIGxldCByZXN1bHQgPSBzcmMuc2VhcmNoKHN1Yik7XG4gICAgcmV0dXJuIHJlc3VsdCA+IC0xO1xufTtcbm15U2VhcmNoID0gZnVuY3Rpb24gKHNyYywgc3ViKSB7XG4gICAgbGV0IHJlc3VsdCA9IHNyYy5zZWFyY2goc3ViKTtcbiAgICByZXR1cm4gcmVzdWx0ID4gLTE7XG59O1xubGV0IG15QXJyYXk7XG5teUFycmF5ID0geyAnMTInOiAncycsICcxJzogJ3MnIH07XG5teUFycmF5ID0gWydhZCcsICdhZ3MnXTtcbmxldCBteVN0ciA9IG15QXJyYXlbMF07XG5sZXQgbXlBcnJheXMgPSBbXCJBbGljZVwiLCBcIkJvYlwiXTtcbmZ1bmN0aW9uIGNyZWF0ZUNsb2NrKGN0b3IsIGhvdXIsIG1pbnV0ZSkge1xuICAgIHJldHVybiBuZXcgY3Rvcihob3VyLCBtaW51dGUpO1xufVxuY2xhc3MgRGlnaXRhbENsb2NrIHtcbiAgICBjb25zdHJ1Y3RvcihoLCBtKSB7IH1cbiAgICB0aWNrKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImJlZXAgYmVlcFwiKTtcbiAgICB9XG59XG5sZXQgZGlnaXRhbCA9IGNyZWF0ZUNsb2NrKERpZ2l0YWxDbG9jaywgMTIsIDE3KTtcbmZ1bmN0aW9uIGdldENvdW50ZXIoKSB7XG4gICAgbGV0IGNvdW50ZXIgPSBmdW5jdGlvbiAoc3RhcnQpIHtcbiAgICAgICAgcmV0dXJuICcxMic7XG4gICAgfTtcbiAgICBjb3VudGVyLmludGVydmFsID0gMTIzO1xuICAgIGNvdW50ZXIucmVzZXQgPSBmdW5jdGlvbiAoKSB7IH07XG4gICAgcmV0dXJuIGNvdW50ZXI7XG59XG5sZXQgYyA9IGdldENvdW50ZXIoKTtcbmMoMTApO1xuYy5yZXNldCgpO1xuYy5pbnRlcnZhbCA9IDUuMDtcbmNsYXNzIEFuaW1hbCB7XG4gICAgY29uc3RydWN0b3IodGhlTmFtZSkgeyB0aGlzLm5hbWUgPSB0aGVOYW1lOyB9XG4gICAgcHJpbnRQcml2YXRlTmFtZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5uYW1lKTtcbiAgICB9XG59XG5jbGFzcyBSaGlubyBleHRlbmRzIEFuaW1hbCB7XG4gICAgY29uc3RydWN0b3IoKSB7IHN1cGVyKFwiUmhpbm9cIik7IH1cbiAgICBwcmludE5hbWUoKSB7XG4gICAgICAgIHN1cGVyLnByaW50UHJpdmF0ZU5hbWUoKTtcbiAgICB9XG59XG5sZXQgcmhpbm8gPSBuZXcgUmhpbm8oKTtcbmZ1bmN0aW9uIGlkZW50aXR5KGFyZykge1xuICAgIHJldHVybiBhcmc7XG59XG5sZXQgbXlJZGVudGl0eSA9IGlkZW50aXR5O1xuY2xhc3MgR2VuZXJpY051bWJlciB7XG59XG5sZXQgbXlHZW5lcmljTnVtYmVyID0gbmV3IEdlbmVyaWNOdW1iZXIoKTtcbm15R2VuZXJpY051bWJlci56ZXJvVmFsdWUgPSAwO1xubXlHZW5lcmljTnVtYmVyLmFkZCA9IGZ1bmN0aW9uICh4LCB5KSB7IHJldHVybiB4ICsgeTsgfTtcbnZhciBFMTtcbihmdW5jdGlvbiAoRTEpIHtcbiAgICBFMVtFMVtcIlhcIl0gPSAxXSA9IFwiWFwiO1xuICAgIEUxW0UxW1wiWVwiXSA9IDJdID0gXCJZXCI7XG4gICAgRTFbRTFbXCJaXCJdID0gM10gPSBcIlpcIjtcbn0pKEUxIHx8IChFMSA9IHt9KSk7XG52YXIgRTI7XG4oZnVuY3Rpb24gKEUyKSB7XG4gICAgRTJbRTJbXCJBXCJdID0gMV0gPSBcIkFcIjtcbiAgICBFMltFMltcIkJcIl0gPSAyXSA9IFwiQlwiO1xuICAgIEUyW0UyW1wiQ1wiXSA9IDNdID0gXCJDXCI7XG59KShFMiB8fCAoRTIgPSB7fSkpO1xuLy8gY29uc29sZS5sb2coRTEuWSlcbi8vIGNvbnNvbGUubG9nKEUxLlggPT0gRTIuQSlcbnZhciBFO1xuKGZ1bmN0aW9uIChFKSB7XG4gICAgRVtFW1wiRm9vXCJdID0gMF0gPSBcIkZvb1wiO1xuICAgIEVbRVtcIkJhclwiXSA9IDFdID0gXCJCYXJcIjtcbn0pKEUgfHwgKEUgPSB7fSkpO1xuZnVuY3Rpb24gZih4KSB7XG4gICAgaWYgKHggIT09IEUuRm9vKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIH5+fn5+fn5+fn5+XG4gICAgICAgIC8vIEVycm9yISBPcGVyYXRvciAnIT09JyBjYW5ub3QgYmUgYXBwbGllZCB0byB0eXBlcyAnRS5Gb28nIGFuZCAnRS5CYXInLlxuICAgIH1cbn1cbnZhciBFbnVtO1xuKGZ1bmN0aW9uIChFbnVtKSB7XG4gICAgRW51bVtFbnVtW1wiQVwiXSA9IDBdID0gXCJBXCI7XG59KShFbnVtIHx8IChFbnVtID0ge30pKTtcbmxldCBhMiA9IEVudW0uQTtcbmxldCBuYW1lT2ZBID0gRW51bVthMl07XG4vLyBjb25zb2xlLmxvZyhuYW1lT2ZBKVxuLy8gY29uc29sZS5sb2coYTIpXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBpbXBvcnQgJy4vZXhhbXBsZS9iYXNpYy10eXBzJ1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8gaW1wb3J0ICcuL2V4YW1wbGUvc3ltYm9sJ1xuLy8gaW1wb3J0ICcuL2V4YW1wbGUvaW50ZXJmYWNlJ1xuLy8gaW1wb3J0ICcuL2V4YW1wbGUvZnVuY3Rpb24nXG4vLyBpbXBvcnQgJy4vZXhhbXBsZS9nZW5lcmljcydcbi8vIGltcG9ydCAnLi9leGFtcGxlL2VzNi1jbGFzcy0xLmpzJ1xuLy8gaW1wb3J0ICcuL2V4YW1wbGUvZXM2LWNsYXNzLTIuanMnXG4vLyBpbXBvcnQgJy4vZXhhbXBsZS9jbGFzcydcbi8vIGltcG9ydCAnLi9leGFtcGxlL2VudW0nXG4vLyBpbXBvcnQgJy4vZXhhbXBsZS9pbmZlcmVuY2UtY29tcGF0aWJpbGl0eSdcbi8vIGltcG9ydCAnLi9leGFtcGxlL2FkdmFuY2VkLXR5cGUtMSdcbi8vIGltcG9ydCAnLi9leGFtcGxlL2FkdmFuY2VkLXR5cGUtMidcbi8vIGltcG9ydCAnLi9tb2R1bGVzL2luZGV4J1xuLy8gaW1wb3J0ICcuL3RzLW1vZHVsZXMvaW5kZXgnXG4vLyBpbXBvcnQgJy4vZXhhbXBsZS9tZXJnaW5nJ1xuLy8gaW1wb3J0ICcuL2V4YW1wbGUvZGVjb3JhdG9ycydcbi8vIGltcG9ydCAnLi9leGFtcGxlL21pbnhpbidcbi8vIGltcG9ydCAnLi9leGFtcGxlL3VwZGF0ZSdcbi8vIGltcG9ydCAnLi9leGFtcGxlL2RlY2xhcmF0aW9uLWZpbGVzJ1xucmVxdWlyZShcIi4vdHMtbW9kdWxlcy96b25namllXCIpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9