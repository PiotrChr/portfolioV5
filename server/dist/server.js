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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/env.js":
/*!***********************!*\
  !*** ./config/env.js ***!
  \***********************/
/*! exports provided: env */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"env\", function() { return env; });\n__webpack_require__(/*! dotenv */ \"dotenv\").config();\n\nvar allowedEnvVariables = ['CONTENTFUL_CD_ACCESS_TOKEN', 'CONTENTFUL_PREVIEW_ACCESS_TOKEN', 'CONTENTFUL_PREVIEW_SPACE_ID', 'CONTENTFUL_ENV']; // TODO: Improve type\n// type EnvVars = {\n//     [key: string]: string\n// };\n\nvar env = allowedEnvVariables.reduce(function (acc, envVar) {\n  if (!process.env[envVar]) {\n    console.log(process.env);\n    throw new Error(\"\".concat(envVar, \" env variable not found in process.env\"));\n  }\n\n  acc[envVar] = process.env[envVar];\n  return acc;\n}, {});\n\n//# sourceURL=webpack:///./config/env.js?");

/***/ }),

/***/ "./server/src/controller/BlogController.ts":
/*!*************************************************!*\
  !*** ./server/src/controller/BlogController.ts ***!
  \*************************************************/
/*! exports provided: BlogController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BlogController\", function() { return BlogController; });\nvar BlogController = function BlogController(req, res) {\n  var postId = req.params.postId;\n};\n\n//# sourceURL=webpack:///./server/src/controller/BlogController.ts?");

/***/ }),

/***/ "./server/src/controller/IndexController.tsx":
/*!***************************************************!*\
  !*** ./server/src/controller/IndexController.tsx ***!
  \***************************************************/
/*! exports provided: IndexController, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IndexController\", function() { return IndexController; });\nvar IndexController = function IndexController(req, res) {\n  res.send({\n    test: 1\n  }.toString());\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexController);\n\n//# sourceURL=webpack:///./server/src/controller/IndexController.tsx?");

/***/ }),

/***/ "./server/src/controller/index.ts":
/*!****************************************!*\
  !*** ./server/src/controller/index.ts ***!
  \****************************************/
/*! exports provided: Index, Blog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _IndexController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IndexController */ \"./server/src/controller/IndexController.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Index\", function() { return _IndexController__WEBPACK_IMPORTED_MODULE_0__[\"IndexController\"]; });\n\n/* harmony import */ var _BlogController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlogController */ \"./server/src/controller/BlogController.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Blog\", function() { return _BlogController__WEBPACK_IMPORTED_MODULE_1__[\"BlogController\"]; });\n\n\n\n\n//# sourceURL=webpack:///./server/src/controller/index.ts?");

/***/ }),

/***/ "./server/src/index.ts":
/*!*****************************!*\
  !*** ./server/src/index.ts ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _router_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router/routes */ \"./server/src/router/routes.ts\");\n__webpack_require__(/*! @Config/env */ \"./config/env.js\");\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\nvar port = 8000;\napp.use('/', _router_routes__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\napp.listen(port, function () {\n  return console.log(\"Example app listening on port \".concat(port, \"!\"));\n});\n\n//# sourceURL=webpack:///./server/src/index.ts?");

/***/ }),

/***/ "./server/src/middleware/cache.ts":
/*!****************************************!*\
  !*** ./server/src/middleware/cache.ts ***!
  \****************************************/
/*! exports provided: cache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cache\", function() { return cache; });\n/* harmony import */ var memory_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! memory-cache */ \"memory-cache\");\n/* harmony import */ var memory_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(memory_cache__WEBPACK_IMPORTED_MODULE_0__);\n\nvar cache = function cache(duration) {\n  return function (req, res, next) {\n    var key = \"__express__\" + req.originalUrl || false;\n    var cachedBody = memory_cache__WEBPACK_IMPORTED_MODULE_0___default.a.get(key);\n\n    if (cachedBody) {\n      res.send(cachedBody);\n      return;\n    } else {\n      res.sendResponse = res.send;\n\n      res.send = function (body) {\n        memory_cache__WEBPACK_IMPORTED_MODULE_0___default.a.put(key, body, duration * 1000);\n        return res.sendResponse(body);\n      };\n    }\n  };\n};\n\n//# sourceURL=webpack:///./server/src/middleware/cache.ts?");

/***/ }),

/***/ "./server/src/router/routes.ts":
/*!*************************************!*\
  !*** ./server/src/router/routes.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Server_middleware_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Server/middleware/cache */ \"./server/src/middleware/cache.ts\");\n/* harmony import */ var _Server_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Server/controller */ \"./server/src/controller/index.ts\");\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n\n\nrouter.get('/', _Server_controller__WEBPACK_IMPORTED_MODULE_2__[\"Index\"]);\nrouter.get('/api/content/blog/:post?', Object(_Server_middleware_cache__WEBPACK_IMPORTED_MODULE_1__[\"cache\"])(5), _Server_controller__WEBPACK_IMPORTED_MODULE_2__[\"Blog\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./server/src/router/routes.ts?");

/***/ }),

/***/ 0:
/*!***********************************!*\
  !*** multi ./server/src/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /Users/piotrchrusciel/Documents/work.nosync/portfolioV5/server/src/index.ts */\"./server/src/index.ts\");\n\n\n//# sourceURL=webpack:///multi_./server/src/index.ts?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "memory-cache":
/*!*******************************!*\
  !*** external "memory-cache" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"memory-cache\");\n\n//# sourceURL=webpack:///external_%22memory-cache%22?");

/***/ })

/******/ });