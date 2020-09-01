/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/tasks/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/tasks/first_task/components/child-rect-count.js":
/*!*************************************************************!*\
  !*** ./src/tasks/first_task/components/child-rect-count.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nfunction childRectCount(matrix) {\r\n    \r\n    function OddRectError(matrix) {\r\n        if(matrix.length % 2 != 0 || matrix[0].length % 2 != 0) {\r\n            throw Error(\"Input correct values of matrix\");\r\n        }\r\n    }\r\n    \r\n    OddRectError(matrix);\r\n\r\n    let multip = 1,\r\n        sum = 0;\r\n    \r\n    for(let ord = matrix.length / 2; ord < matrix.length;  ord++) {\r\n\r\n        for(let abs = matrix[0].length / 2; abs < matrix[0].length; abs++) {\r\n            \r\n            multip *= matrix[ord][abs];\r\n            sum += matrix[ord][abs];\r\n        }\r\n    }\r\n\r\n    return {multip: multip, sum: sum};\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (childRectCount);\n\n//# sourceURL=webpack:///./src/tasks/first_task/components/child-rect-count.js?");

/***/ }),

/***/ "./src/tasks/first_task/components/diagonal-count.js":
/*!***********************************************************!*\
  !*** ./src/tasks/first_task/components/diagonal-count.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nfunction diagonalCount (matrix) {\r\n    \r\n    let multip = 1,\r\n        sum = 0;\r\n\r\n    let dioganalDigit = 0;\r\n\r\n    for(let i = 0; i < matrix.length; i++) {\r\n        multip *= matrix[i][dioganalDigit];\r\n        sum += matrix[i][dioganalDigit];\r\n        dioganalDigit++;\r\n    }\r\n\r\n    return {multip: multip, sum: sum};\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (diagonalCount);\n\n//# sourceURL=webpack:///./src/tasks/first_task/components/diagonal-count.js?");

/***/ }),

/***/ "./src/tasks/first_task/components/edges-count.js":
/*!********************************************************!*\
  !*** ./src/tasks/first_task/components/edges-count.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nfunction edgesCount (matrix) {\r\n    \r\n    const upCount = (matrix) => {\r\n        let multip = 1,\r\n              sum = 0;\r\n              \r\n        for (let i = 0; i < matrix[0].length; i++ ){\r\n            multip *= matrix[0][i];\r\n            sum += matrix[0][i];\r\n        }\r\n        return {multip: multip, sum:  sum};\r\n    };\r\n\r\n    const downCount = (matrix) => {\r\n        let multip = 1,\r\n              sum = 0;\r\n        const lastChild = matrix.length - 1;\r\n        for (let i = 0; i < matrix[lastChild].length; i++ ){\r\n            multip *= matrix[lastChild][i];\r\n            sum += matrix[lastChild][i];\r\n        }\r\n        return {multip: multip, sum:  sum};\r\n    };\r\n    const leftCount = (matrix) => {\r\n        let multip = 1,\r\n              sum = 0;\r\n        for (let i = 0; i < matrix.length; i++ ){\r\n            multip *= matrix[i][0];\r\n            sum += matrix[i][0];\r\n        }\r\n        return {multip: multip, sum:  sum};\r\n    };\r\n    const rightCount = (matrix) => {\r\n        let multip = 1,\r\n              sum = 0;\r\n        const lastChaild = matrix[0].length - 1;\r\n        for (let i = 0; i < matrix.length; i++ ){\r\n            multip *= matrix[i][lastChaild];\r\n            sum += matrix[i][lastChaild];\r\n        }\r\n        return {multip: multip, sum:  sum};\r\n    };\r\n\r\n    const multip = upCount(matrix).multip * downCount(matrix).multip * rightCount(matrix).multip * leftCount(matrix).multip;\r\n    const sum = upCount(matrix).sum + downCount(matrix).sum + leftCount(matrix).sum + rightCount(matrix).sum;\r\n\r\n    return {multip: multip, sum: sum};\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (edgesCount);\n\n//# sourceURL=webpack:///./src/tasks/first_task/components/edges-count.js?");

/***/ }),

/***/ "./src/tasks/index.js":
/*!****************************!*\
  !*** ./src/tasks/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _second_task_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./second_task/index */ \"./src/tasks/second_task/index.js\");\n/* harmony import */ var _third_task_test__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./third_task/test */ \"./src/tasks/third_task/test.js\");\n/* harmony import */ var _first_task_components_edges_count__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./first_task/components/edges-count */ \"./src/tasks/first_task/components/edges-count.js\");\n/* harmony import */ var _first_task_components_diagonal_count__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./first_task/components/diagonal-count */ \"./src/tasks/first_task/components/diagonal-count.js\");\n/* harmony import */ var _first_task_components_child_rect_count__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./first_task/components/child-rect-count */ \"./src/tasks/first_task/components/child-rect-count.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\ndocument.querySelector('.first_task_input').addEventListener('change', (e) => {\r\n    e.preventDefault();\r\n    const currentMatrix = e.target.value.split(';');\r\n    for (let i = 0; i < currentMatrix.length; i++) {\r\n        currentMatrix[i] = currentMatrix[i].split(',');\r\n        for(let j = 0; j < currentMatrix[i].length; j++) {\r\n        \t currentMatrix[i][j] = +currentMatrix[i][j]; \r\n        }\r\n    }\r\n\r\n        \r\n\tconst edgesResult = Object(_first_task_components_edges_count__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(currentMatrix);\r\n\tconsole.log(`Count edges sum - ${edgesResult.sum}, multiply - ${edgesResult.multip}`);\r\n\tconst diagonalResult = Object(_first_task_components_diagonal_count__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(currentMatrix);\r\n\tconsole.log(`Count diagonal sum - ${diagonalResult.sum}, multiply - ${diagonalResult.multip}`);\r\n    const childRectCountResult = Object(_first_task_components_child_rect_count__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(currentMatrix);\r\n\r\n    \r\n    \r\n    console.log(`Count rectangle child sum - ${childRectCountResult.sum}, multiply - ${childRectCountResult.multip}`);\r\n});\r\nObject(_second_task_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\nObject(_third_task_test__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack:///./src/tasks/index.js?");

/***/ }),

/***/ "./src/tasks/second_task/index.js":
/*!****************************************!*\
  !*** ./src/tasks/second_task/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nfunction getSecondTask() {\r\n    let $ = (id) => document.querySelector(id);\r\n\r\n\r\n\r\n    const firstInput = $('#first_input'),\r\n        secondInput = $('#second_input'),\r\n        canvasTriangleOne = $('#first_canvas'),\r\n        canvasTriangleTwo = $('#second_canvas'),\r\n        ctxTringleTwo = canvasTriangleTwo.getContext('2d'),\r\n        ctxTriangleOne = canvasTriangleOne.getContext('2d'),\r\n        size = 400;\r\n    canvasTriangleOne.width = size;\r\n    canvasTriangleOne.height = size;\r\n    canvasTriangleTwo.width = size;\r\n    canvasTriangleTwo.height = size;\r\n\r\n    let state = {\r\n        first: null,\r\n        seocnd: null\r\n    };\r\n    \r\n\r\n    function whatIsType(obj) {\r\n        if(obj.first.a === obj.first.b && obj.first.b === obj.first.c) {\r\n            \r\n        }\r\n    }\r\n\r\n\r\n    class Triangle {\r\n        constructor(data={}) {\r\n            this.data = data;\r\n            this.a = this.getLength(this.data.A.x, this.data.B.x, this.data.A.y, this.data.B.y);\r\n            this.b = this.getLength(this.data.B.x, this.data.C.x, this.data.B.y, this.data.C.y);\r\n            this.c = this.getLength(this.data.C.x, this.data.A.x, this.data.C.y, this.data.A.y);\r\n        }\r\n\r\n        getLength(sx, dx, sy, dy) {\r\n            const left = Math.pow((sx-dx), 2);\r\n            const right = Math.pow((sy-dy), 2);\r\n            return (Math.sqrt(left + right)); // расщитываем длинну вектора по координатам\r\n        }\r\n\r\n        getLengths() {\r\n            return {a: this.a, b: this.b, c: this.c};\r\n        }\r\n\r\n        getCorners() {\r\n            \r\n            const alf = (this.a ** 2 + this.c ** 2 - this.b ** 2) / (2*this.a*this.c);\r\n            \r\n            const bet = (this.a ** 2 + this.b ** 2 - this.c ** 2) / (2*this.a*this.b);\r\n            \r\n            const gam = (this.b ** 2 + this.c ** 2 - this.a ** 2) / (2*this.c*this.b);\r\n\r\n            return {alf: alf, bet: bet, gam: gam};   \r\n        }\r\n\r\n        calcRightTringle(hypotenuse, left, right) {\r\n            return Math.pow(hypotenuse, 2) === Math.pow(right, 2) + Math.pow(left, 2);\r\n        }\r\n\r\n        isRightTrianle(a, b, c) {\r\n            if (a > b && a > c) {\r\n                return this.calcRightTringle(a, b, c);\r\n            } \r\n            if (b > a && b > c) {\r\n                return this.calcRightTringle(b, a, c);\r\n            }\r\n            return this.calcRightTringle(c, a, b);\r\n        }\r\n\r\n        calcOtuseTriangle (hypotenuse, left, right) {\r\n            return Math.pow(hypotenuse, 2) > Math.pow(right, 2) + Math.pow(left, 2);\r\n        }\r\n\r\n        isObtuseTriangle (a, b, c) {\r\n            if (a > b && a > c) {\r\n                return this.calcOtuseTriangle(this.a, this.b, this.c);\r\n            } \r\n            if (b > a && b > c) {\r\n                return this.calcOtuseTriangle(this.b, this.a, this.c);\r\n            }\r\n\r\n            return this.calcOtuseTriangle(this.c, this.a, this.b);\r\n        }\r\n\r\n\r\n\r\n\r\n        whatIsType() {\r\n            /* Сначала ищет прямоугльные триугольники, если п.т. не найдены, то круг поиска сужется и находися \r\n            тупоугольные триугольники, не нашилсь, значит возвращаем определение остроугольного треугольника. */\r\n\r\n            if(this.isRightTrianle(this.a, this.b, this.c)) {\r\n                return 'Right';\r\n            }\r\n\r\n            if(this.isObtuseTriangle(this.a, this.b, this.c)) {\r\n                return 'Obtuse';\r\n            }\r\n\r\n            return 'Acute'; \r\n        }\r\n\r\n        print(ctx) {\r\n            ctx.clearRect(0, 0, 400, 400);\r\n            ctx.beginPath();\r\n            ctx.moveTo(this.data.A.x, this.data.A.y);\r\n            ctx.lineTo(this.data.B.x, this.data.B.y);\r\n            ctx.lineTo(this.data.C.x, this.data.C.y);\r\n            ctx.strokeStyle = 'blue';\r\n            ctx.fill = 'blue';\r\n            ctx.closePath();\r\n            ctx.stroke();\r\n        }\r\n    }\r\n\r\n    let rightTriangle, leftTriangle = 0;\r\n\r\n    firstInput.addEventListener('change', (e) => {\r\n        e.preventDefault();\r\n        const data = e.target.value.split(',');\r\n        console.log(data);\r\n        const coords = {\r\n            A: {x: data[0], y: data[1]},\r\n            B: {x: data[2], y: data[3]},\r\n            C: {x: data[4], y: data[5]}\r\n        };\r\n        console.log(coords);\r\n        const firstTriangle = new Triangle(coords);\r\n        firstTriangle.print(ctxTriangleOne);\r\n        leftTriangle = firstTriangle.whatIsType();\r\n        inputInfo(leftTriangle, rightTriangle);\r\n    });\r\n\r\n    secondInput.addEventListener('change', (e) => {\r\n        e.preventDefault();\r\n        const data = e.target.value.split(',');\r\n        console.log(data);\r\n        const coords = {\r\n            A: {x: data[0], y: data[1]},\r\n            B: {x: data[2], y: data[3]},\r\n            C: {x: data[4], y: data[5]}\r\n        };\r\n        console.log(coords);\r\n        const secondTriangle = new Triangle(coords);\r\n        secondTriangle.print(ctxTringleTwo);\r\n        rightTriangle = secondTriangle.whatIsType();\r\n        inputInfo(leftTriangle, rightTriangle);\r\n    });\r\n\r\n    function inputInfo(left, right) {\r\n        document.querySelector('.info-field').innerHTML = `\r\n            Left triangle - ${left} ${right === left? '=' : '&ne;'} Right triangle - ${right}   \r\n        `;\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (getSecondTask);\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/tasks/second_task/index.js?");

/***/ }),

/***/ "./src/tasks/third_task/test.js":
/*!**************************************!*\
  !*** ./src/tasks/third_task/test.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nfunction getThirdTask() {\r\n    document.querySelector('.third_task_input').addEventListener('change', (e) => {\r\n        const numbers= e.target.value.split(',');\r\n        let param = +numbers[0],\r\n            n = +numbers[1],\r\n            a = +numbers[2],\r\n            b = +numbers[3];\r\n        const h = (b - a) / n;\r\n        let result = 0;\r\n        if(n === 1) { \r\n            result += (Math.pow(a,n) * Math.pow(Math.E, param * a) / param) - (n * Math.pow(Math.E, param * a)  / param);\r\n            for (let j = 0; j < n; j++) {\r\n                a += h;\r\n                result += (Math.pow(a,n) * Math.pow(Math.E, param * a) / param) - (n * Math.pow(Math.E, param * a)/param);\r\n            }\r\n            result *= h;\r\n        } \r\n        if (n > 1) {\r\n            result += Math.pow(Math.E, param * a) * (param * a - 1) / Math.pow(param, 2);\r\n            for (let j = 0; j < n; j++) {\r\n                a += h;\r\n                result += Math.pow(Math.E, param * a) * (param * a - 1) / Math.pow(param, 2);\r\n            }\r\n            result *= h;\r\n        } \r\n        Math.round(result, 3);\r\n\r\n        console.log(result);\r\n    });\r\n    \r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (getThirdTask);\r\n\n\n//# sourceURL=webpack:///./src/tasks/third_task/test.js?");

/***/ })

/******/ });