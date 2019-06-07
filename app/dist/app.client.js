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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/src/app.client.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/src/app.client.tsx":
/*!********************************!*\
  !*** ./app/src/app.client.tsx ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! connected-react-router */ \"connected-react-router\");\n/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(connected_react_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/store */ \"./app/src/store/store.ts\");\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/App */ \"./app/src/components/App.tsx\");\n/* harmony import */ var _i18n_intlProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./i18n/intlProvider */ \"./app/src/i18n/intlProvider.tsx\");\n/* harmony import */ var _store_history__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store/history */ \"./app/src/store/history.ts\");\n\n\n\n\n\n\n\n\nvar history = Object(_store_history__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(); // Create/use the store\n// history MUST be passed here if you want syncing between server on initial route\n\nvar store = window.store || Object(_store_store__WEBPACK_IMPORTED_MODULE_4__[\"configureStore\"])({\n  initialState: window.__PRELOADED_STATE__,\n  history: history\n});\nObject(react_dom__WEBPACK_IMPORTED_MODULE_1__[\"hydrate\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"Provider\"], {\n  store: store\n}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(connected_react_router__WEBPACK_IMPORTED_MODULE_3__[\"ConnectedRouter\"], {\n  history: history\n}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_i18n_intlProvider__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null)))), document.getElementById('app')); // if (process.env.NODE_ENV === 'development') {\n//     if (module.hot) {\n//         module.hot.accept();\n//     }\n//     if (!window.store) {\n//         window.store = store;\n//     }\n// }\n\n//# sourceURL=webpack:///./app/src/app.client.tsx?");

/***/ }),

/***/ "./app/src/components/App.tsx":
/*!************************************!*\
  !*** ./app/src/components/App.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _App_components_common_Helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @App/components/common/Helmet */ \"./app/src/components/common/Helmet.tsx\");\n\n\n\nvar App = function App() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_common_Helmet__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    mainTitle: \"Piotr Portfolio\"\n  }), \"Something\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./app/src/components/App.tsx?");

/***/ }),

/***/ "./app/src/components/common/Helmet.tsx":
/*!**********************************************!*\
  !*** ./app/src/components/common/Helmet.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (_ref) {\n  var title = _ref.title,\n      description = _ref.description,\n      mainTitle = _ref.mainTitle;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__[\"Helmet\"], {\n    titleTemplate: \"%s - \".concat(mainTitle)\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n    charSet: \"utf-8\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"title\", null, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n    name: \"description\",\n    content: description\n  })));\n});\n\n//# sourceURL=webpack:///./app/src/components/common/Helmet.tsx?");

/***/ }),

/***/ "./app/src/i18n/intlProvider.tsx":
/*!***************************************!*\
  !*** ./app/src/i18n/intlProvider.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! i18next */ \"i18next\");\n/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(i18next__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ \"react-i18next\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _App_store_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @App/store/selectors */ \"./app/src/store/selectors.ts\");\n/* harmony import */ var _Config_locales_de_DE_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Config/locales/de_DE.json */ \"./config/locales/de_DE.json\");\nvar _Config_locales_de_DE_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! @Config/locales/de_DE.json */ \"./config/locales/de_DE.json\", 1);\n/* harmony import */ var _Config_locales_en_US_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Config/locales/en_US.json */ \"./config/locales/en_US.json\");\nvar _Config_locales_en_US_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! @Config/locales/en_US.json */ \"./config/locales/en_US.json\", 1);\n/* harmony import */ var _Config_locales_pl_PL_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Config/locales/pl_PL.json */ \"./config/locales/pl_PL.json\");\nvar _Config_locales_pl_PL_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! @Config/locales/pl_PL.json */ \"./config/locales/pl_PL.json\", 1);\n\n\n\n\n\n\n\n\n\ni18next__WEBPACK_IMPORTED_MODULE_1___default.a.init({\n  fallbackLng: 'en_US',\n  fallbackNS: ['translation'],\n  resources: {\n    de_DE: _Config_locales_de_DE_json__WEBPACK_IMPORTED_MODULE_6__,\n    en_US: _Config_locales_en_US_json__WEBPACK_IMPORTED_MODULE_7__,\n    pl_PL: _Config_locales_pl_PL_json__WEBPACK_IMPORTED_MODULE_8__\n  },\n  parseMissingKeyHandler: function parseMissingKeyHandler(missing) {\n    if (true) {\n      console.warn('MISSING TRANSLATION:', missing);\n    }\n\n    return missing;\n  }\n});\ni18next__WEBPACK_IMPORTED_MODULE_1___default.a.languages = ['de_DE', 'en_US', 'pl_PL'];\n\nvar I18N = function I18N(_ref) {\n  var children = _ref.children,\n      locale = _ref.locale;\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    i18next__WEBPACK_IMPORTED_MODULE_1___default.a.changeLanguage(locale);\n  }, [locale]);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_i18next__WEBPACK_IMPORTED_MODULE_3__[\"I18nextProvider\"], {\n    i18n: i18next__WEBPACK_IMPORTED_MODULE_1___default.a\n  }, children);\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  console.log(state);\n  return {\n    locale: Object(_App_store_selectors__WEBPACK_IMPORTED_MODULE_5__[\"getLocale\"])(state)\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"withRouter\"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"connect\"])(mapStateToProps, null, null, {\n  pure: false\n})(react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(I18N))));\n\n//# sourceURL=webpack:///./app/src/i18n/intlProvider.tsx?");

/***/ }),

/***/ "./app/src/store/actions/env/initialState.ts":
/*!***************************************************!*\
  !*** ./app/src/store/actions/env/initialState.ts ***!
  \***************************************************/
/*! exports provided: ActionTypes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ActionTypes\", function() { return ActionTypes; });\n;\nvar ActionTypes = {\n  SET_LOCALE: 'SET_LOCALE'\n};\nvar envState = {\n  locale: 'en_US'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (envState);\n\n//# sourceURL=webpack:///./app/src/store/actions/env/initialState.ts?");

/***/ }),

/***/ "./app/src/store/actions/env/reducer.ts":
/*!**********************************************!*\
  !*** ./app/src/store/actions/env/reducer.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ \"immer\");\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _App_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @App/store */ \"./app/src/store/index.ts\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _App_store__WEBPACK_IMPORTED_MODULE_1__[\"initialState\"];\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n  console.log(state);\n  return Object(immer__WEBPACK_IMPORTED_MODULE_0__[\"produce\"])(state, function (draft) {\n    var type = action.type,\n        payload = action.payload;\n\n    switch (type) {\n      case _App_store__WEBPACK_IMPORTED_MODULE_1__[\"ActionTypes\"].SET_LOCALE:\n        {\n          draft.env.locale = payload;\n          return;\n        }\n    }\n  });\n});\n\n//# sourceURL=webpack:///./app/src/store/actions/env/reducer.ts?");

/***/ }),

/***/ "./app/src/store/history.ts":
/*!**********************************!*\
  !*** ./app/src/store/history.ts ***!
  \**********************************/
/*! exports provided: createUniversalHistory, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createUniversalHistory\", function() { return createUniversalHistory; });\n/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! history */ \"history\");\n/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(history__WEBPACK_IMPORTED_MODULE_0__);\n\nvar createUniversalHistory = function createUniversalHistory() {\n  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n      _ref$initialEntries = _ref.initialEntries,\n      initialEntries = _ref$initialEntries === void 0 ? [] : _ref$initialEntries;\n\n  if (__BROWSER__) {\n    var history = window.browserHistory || Object(history__WEBPACK_IMPORTED_MODULE_0__[\"createBrowserHistory\"])();\n\n    if ( true && !window.browserHistory) {\n      window.browserHistory = history;\n    }\n\n    return history;\n  }\n\n  return Object(history__WEBPACK_IMPORTED_MODULE_0__[\"createMemoryHistory\"])({\n    initialEntries: initialEntries\n  });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (createUniversalHistory);\n\n//# sourceURL=webpack:///./app/src/store/history.ts?");

/***/ }),

/***/ "./app/src/store/index.ts":
/*!********************************!*\
  !*** ./app/src/store/index.ts ***!
  \********************************/
/*! exports provided: ActionTypes, initialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initialState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialState */ \"./app/src/store/initialState.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ActionTypes\", function() { return _initialState__WEBPACK_IMPORTED_MODULE_0__[\"ActionTypes\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return _initialState__WEBPACK_IMPORTED_MODULE_0__[\"initialState\"]; });\n\n// export { initialState } from './initialState';\n\n\n//# sourceURL=webpack:///./app/src/store/index.ts?");

/***/ }),

/***/ "./app/src/store/initialState.ts":
/*!***************************************!*\
  !*** ./app/src/store/initialState.ts ***!
  \***************************************/
/*! exports provided: ActionTypes, initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ActionTypes\", function() { return ActionTypes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony import */ var _App_store_actions_env_initialState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @App/store/actions/env/initialState */ \"./app/src/store/actions/env/initialState.ts\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar ActionTypes = _objectSpread({}, _App_store_actions_env_initialState__WEBPACK_IMPORTED_MODULE_0__[\"ActionTypes\"]);\nvar initialState = {\n  env: _App_store_actions_env_initialState__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (initialState);\n\n//# sourceURL=webpack:///./app/src/store/initialState.ts?");

/***/ }),

/***/ "./app/src/store/reducer.tsx":
/*!***********************************!*\
  !*** ./app/src/store/reducer.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! connected-react-router */ \"connected-react-router\");\n/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(connected_react_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _actions_env_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions/env/reducer */ \"./app/src/store/actions/env/reducer.ts\");\n\n\n\n\nvar createRootReducer = function createRootReducer(history) {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n    app: _actions_env_reducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    router: Object(connected_react_router__WEBPACK_IMPORTED_MODULE_1__[\"connectRouter\"])(history)\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createRootReducer);\n\n//# sourceURL=webpack:///./app/src/store/reducer.tsx?");

/***/ }),

/***/ "./app/src/store/selectors.ts":
/*!************************************!*\
  !*** ./app/src/store/selectors.ts ***!
  \************************************/
/*! exports provided: app, getLocale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"app\", function() { return app; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLocale\", function() { return getLocale; });\n/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ \"reselect\");\n/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_0__);\n/* eslint-disable import/prefer-default-export */\n\nvar app = function app(state) {\n  return state.app;\n};\nvar getLocale = Object(reselect__WEBPACK_IMPORTED_MODULE_0__[\"createSelector\"])([app], function (app) {\n  return app.env.locale;\n});\n\n//# sourceURL=webpack:///./app/src/store/selectors.ts?");

/***/ }),

/***/ "./app/src/store/store.ts":
/*!********************************!*\
  !*** ./app/src/store/store.ts ***!
  \********************************/
/*! exports provided: configureStore, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"configureStore\", function() { return configureStore; });\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! connected-react-router */ \"connected-react-router\");\n/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(connected_react_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducer */ \"./app/src/store/reducer.tsx\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n\n\n\n\nvar configureStore = function configureStore(_ref) {\n  var _ref2;\n\n  var history = _ref.history,\n      initialState = _ref.initialState,\n      _ref$middleware = _ref.middleware,\n      middleware = _ref$middleware === void 0 ? [] : _ref$middleware;\n\n  var devtools = typeof window !== 'undefined' && typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({\n    actionsBlacklist: []\n  });\n\n  var composeEnhancers = devtools || redux__WEBPACK_IMPORTED_MODULE_1__[\"compose\"];\n  var store = Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"createStore\"])(Object(_reducer__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(history), initialState, composeEnhancers(redux__WEBPACK_IMPORTED_MODULE_1__[\"applyMiddleware\"].apply(void 0, _toConsumableArray((_ref2 = [redux_thunk__WEBPACK_IMPORTED_MODULE_0___default.a, Object(connected_react_router__WEBPACK_IMPORTED_MODULE_2__[\"routerMiddleware\"])(history)]).concat.apply(_ref2, _toConsumableArray(middleware))))));\n  return store;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (configureStore);\n\n//# sourceURL=webpack:///./app/src/store/store.ts?");

/***/ }),

/***/ "./config/locales/de_DE.json":
/*!***********************************!*\
  !*** ./config/locales/de_DE.json ***!
  \***********************************/
/*! exports provided: translation, default */
/***/ (function(module) {

eval("module.exports = {\"translation\":{\"features\":\"Features\",\"i18n-example\":\"i18n Example\",\"i18n-support\":\"i18n support (via React i18Next)\"}};\n\n//# sourceURL=webpack:///./config/locales/de_DE.json?");

/***/ }),

/***/ "./config/locales/en_US.json":
/*!***********************************!*\
  !*** ./config/locales/en_US.json ***!
  \***********************************/
/*! exports provided: translation, default */
/***/ (function(module) {

eval("module.exports = {\"translation\":{\"features\":\"Features\",\"i18n-example\":\"i18n Example\",\"i18n-support\":\"i18n support (via React i18Next)\"}};\n\n//# sourceURL=webpack:///./config/locales/en_US.json?");

/***/ }),

/***/ "./config/locales/pl_PL.json":
/*!***********************************!*\
  !*** ./config/locales/pl_PL.json ***!
  \***********************************/
/*! exports provided: translation, default */
/***/ (function(module) {

eval("module.exports = {\"translation\":{\"features\":\"Features\",\"i18n-example\":\"i18n Example\",\"i18n-support\":\"i18n support (via React i18Next)\"}};\n\n//# sourceURL=webpack:///./config/locales/pl_PL.json?");

/***/ }),

/***/ "connected-react-router":
/*!*****************************************!*\
  !*** external "connected-react-router" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"connected-react-router\");\n\n//# sourceURL=webpack:///external_%22connected-react-router%22?");

/***/ }),

/***/ "history":
/*!**************************!*\
  !*** external "history" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"history\");\n\n//# sourceURL=webpack:///external_%22history%22?");

/***/ }),

/***/ "i18next":
/*!**************************!*\
  !*** external "i18next" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"i18next\");\n\n//# sourceURL=webpack:///external_%22i18next%22?");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"immer\");\n\n//# sourceURL=webpack:///external_%22immer%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");\n\n//# sourceURL=webpack:///external_%22react-dom%22?");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-helmet\");\n\n//# sourceURL=webpack:///external_%22react-helmet%22?");

/***/ }),

/***/ "react-i18next":
/*!********************************!*\
  !*** external "react-i18next" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-i18next\");\n\n//# sourceURL=webpack:///external_%22react-i18next%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ }),

/***/ "reselect":
/*!***************************!*\
  !*** external "reselect" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"reselect\");\n\n//# sourceURL=webpack:///external_%22reselect%22?");

/***/ })

/******/ });