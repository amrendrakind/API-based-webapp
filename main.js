/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css?family=Material+Icons+Outlined);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  font-family: \\\"Montserrat\\\", sans-serif;\\n  background: rgb(12, 12, 32);\\n  color: #1d1d1d;\\n}\\n\\nheader {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding: 3px 100px;\\n  font-size: 20px;\\n  background-color: #ddd;\\n}\\n\\n.logo {\\n  width: 120px;\\n}\\n\\n.logo img {\\n  width: 100%;\\n}\\n\\nnav {\\n  width: 50%;\\n  display: flex;\\n  justify-content: space-around;\\n  padding: 15px;\\n  border-radius: 10px;\\n  background-color: #006;\\n}\\n\\nnav a {\\n  text-decoration: none;\\n  color: #fff;\\n}\\n\\n.showCounter {\\n  display: flex;\\n}\\n\\n#count {\\n  color: #fa0;\\n  padding-left: 10px;\\n}\\n\\n.container {\\n  width: 90%;\\n  max-width: 1000px;\\n  margin: 40px auto 100px auto;\\n  display: grid;\\n  grid-template-columns: repeat(3, 1fr);\\n  gap: 50px;\\n}\\n\\n.show {\\n  text-align: center;\\n  background-color: #eee;\\n  border-radius: 15px;\\n  padding-bottom: 15px;\\n}\\n\\n.poster {\\n  width: 90%;\\n  margin-top: 15px;\\n  margin-bottom: 10px;\\n  border-radius: 15px;\\n}\\n\\n.top {\\n  display: flex;\\n  margin: 0 15px;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\n\\n.like {\\n  color: #900;\\n  font-size: 15px;\\n  cursor: pointer;\\n  transition: transform 0.5s;\\n  animation: heart 1s ease-in-out;\\n}\\n\\n@keyframes heart {\\n  25% {\\n    transform: rotate(-45deg);\\n  }\\n\\n  75% {\\n    transform: rotate(45deg);\\n  }\\n}\\n\\n.like:hover {\\n  transform: scale(1.3);\\n}\\n\\n.counter {\\n  font-size: 10px;\\n  color: #900;\\n}\\n\\n.title {\\n  font-size: 16px;\\n  font-weight: 600;\\n}\\n\\n.options {\\n  margin-top: 10px;\\n  display: flex;\\n  justify-content: space-evenly;\\n}\\n\\n.options button {\\n  width: 40%;\\n  padding: 5px;\\n  border-radius: 10px;\\n  background: #006;\\n  color: #eee;\\n}\\n\\nfooter {\\n  background-color: #ddd;\\n  padding: 30px 50px;\\n  color: #005;\\n  font-size: 20px;\\n}\\n\\n.modal {\\n  position: fixed;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%) scale(1);\\n  transition: 200ms ease-in-out;\\n  z-index: 10;\\n  background: rgb(12, 12, 32);\\n  padding: 10px;\\n  width: 700px;\\n  max-width: 80%;\\n  display: flex;\\n  flex-direction: column;\\n  border-radius: 15px;\\n}\\n\\n.modal.active {\\n  transform: translate(-50%, -50%) scale(1);\\n}\\n\\n.close-button {\\n  cursor: pointer;\\n  width: 30px;\\n  align-self: flex-end;\\n  font-size: 25px;\\n  border: none;\\n  background-color: transparent;\\n  font-weight: bold;\\n  color: #ddd;\\n}\\n\\n#overlay {\\n  position: fixed;\\n  opacity: 0;\\n  top: 0;\\n  left: 0;\\n  right: 0;\\n  bottom: 0;\\n  background-color: rgba(0, 0, 0, 0.6);\\n  backdrop-filter: blur(5px);\\n  pointer-events: none;\\n}\\n\\n#overlay.active {\\n  opacity: 1;\\n  pointer-events: all;\\n}\\n\\n.imgContainer {\\n  display: flex;\\n  align-items: center;\\n  margin: 10px 0 10px 10px;\\n}\\n\\n.imgContainer img {\\n  border-radius: 15px;\\n}\\n\\n.data,\\n.addComment,\\n.postComment {\\n  background-color: #eee;\\n  border-radius: 15px;\\n}\\n\\n.data,\\n.information {\\n  display: flex;\\n}\\n\\n.information {\\n  flex-direction: column;\\n  align-items: center;\\n  padding: 10px;\\n}\\n\\n.details div,\\n.details p {\\n  margin-top: 15px;\\n}\\n\\n.details p {\\n  font-size: 13px;\\n}\\n\\n.addComment {\\n  margin-top: 15px;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\n#text,\\n#textarea {\\n  width: 95%;\\n  margin: 10px;\\n  border: none;\\n  padding: 10px;\\n  background: rgb(12, 12, 32);\\n  color: #fff;\\n  border-radius: 8px;\\n}\\n\\n#textarea {\\n  margin-top: 0;\\n  height: 100px;\\n  resize: none;\\n}\\n\\n::placeholder {\\n  color: #ccc;\\n}\\n\\n.submit {\\n  margin-bottom: 10px;\\n  padding: 5px;\\n  background: rgb(12, 12, 32);\\n  color: #fff;\\n  border-radius: 8px;\\n}\\n\\n.commentContainer {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.theCounter {\\n  color: #eee;\\n  display: flex;\\n  margin-top: 10px;\\n}\\n\\n#commentCount {\\n  margin-left: 5px;\\n}\\n\\n.postComment {\\n  list-style: none;\\n  margin: auto;\\n  margin-top: 15px;\\n  padding: 5px 25px;\\n  border-radius: 10px;\\n}\\n\\n.commentList {\\n  color: rgb(12, 12, 32);\\n  display: flex;\\n}\\n\\n.user {\\n  width: 80px;\\n  margin-left: 10px;\\n}\\n\\n.date {\\n  width: 100px;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://api-based-webapp/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://api-based-webapp/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://api-based-webapp/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://api-based-webapp/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://api-based-webapp/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://api-based-webapp/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://api-based-webapp/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://api-based-webapp/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://api-based-webapp/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://api-based-webapp/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_displayShowsWithPopup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/displayShowsWithPopup.js */ \"./src/modules/displayShowsWithPopup.js\");\n\n// import load from './modules/load.js';\n\n\n(0,_modules_displayShowsWithPopup_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n\n//# sourceURL=webpack://api-based-webapp/./src/index.js?");

/***/ }),

/***/ "./src/modules/addComment.js":
/*!***********************************!*\
  !*** ./src/modules/addComment.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _comment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comment.js */ \"./src/modules/comment.js\");\n/* harmony import */ var _postComment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postComment.js */ \"./src/modules/postComment.js\");\n/* harmony import */ var _date_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./date.js */ \"./src/modules/date.js\");\n/* harmony import */ var _commentCounter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./commentCounter.js */ \"./src/modules/commentCounter.js\");\n/* eslint-disable no-unused-vars */\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((cardId) => {\n  const formInformation = document.createElement('form');\n  formInformation.classList.add('addComment');\n\n  const addComment = document.createElement('div');\n  addComment.innerText = 'Add a comment';\n\n  const nameInput = document.createElement('input');\n  nameInput.type = 'text';\n  nameInput.id = 'text';\n  nameInput.required = true;\n  nameInput.minLength = 1;\n  nameInput.maxLength = 30;\n  nameInput.classList.add('yourName');\n  nameInput.placeholder = 'Your name';\n\n  const commentInput = document.createElement('textarea');\n  commentInput.classList.add('yourComment');\n  commentInput.id = 'textarea';\n  commentInput.required = true;\n  commentInput.minLength = 2;\n  commentInput.maxLength = 300;\n  commentInput.placeholder = 'Your insights';\n\n  const CommentBtn = document.createElement('button');\n  CommentBtn.classList.add('submit');\n  CommentBtn.type = 'submit';\n  CommentBtn.innerText = 'Comment';\n\n  formInformation.appendChild(addComment);\n  formInformation.appendChild(nameInput);\n  formInformation.appendChild(commentInput);\n  formInformation.appendChild(CommentBtn);\n\n  formInformation.onsubmit = async (event) => {\n    event.preventDefault();\n    const newComment = new _comment_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n      item_id: (cardId + 1).toString(),\n      username: nameInput.value,\n      comment: commentInput.value,\n    });\n    _postComment_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addComment(newComment.toJSON()).then(\n      (response) => {\n        const liComment = document.querySelectorAll('.liComment');\n        const theCounter = document.getElementById('theCounter');\n        theCounter.innerHTML = `Comments(${(0,_commentCounter_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(liComment)})`;\n        const ulComments = document.getElementById('postComment');\n        const newLiComment = document.createElement('li');\n        newLiComment.innerText = `${(0,_date_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()} ${nameInput.value}: ${commentInput.value}`;\n        ulComments.appendChild(newLiComment);\n        formInformation.reset();\n      },\n      (error) => {\n        // console.log(error);\n      },\n    );\n  };\n  return formInformation;\n});\n\n\n//# sourceURL=webpack://api-based-webapp/./src/modules/addComment.js?");

/***/ }),

/***/ "./src/modules/comment.js":
/*!********************************!*\
  !*** ./src/modules/comment.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Comment)\n/* harmony export */ });\n/* eslint-disable camelcase */\nclass Comment {\n  constructor({ item_id, username, comment }) {\n    this.item_id = item_id;\n    this.username = username;\n    this.comment = comment;\n  }\n\n  toJSON() {\n    return JSON.stringify({\n      item_id: this.item_id,\n      username: this.username,\n      comment: this.comment,\n    });\n  }\n}\n\n//# sourceURL=webpack://api-based-webapp/./src/modules/comment.js?");

/***/ }),

/***/ "./src/modules/commentCounter.js":
/*!***************************************!*\
  !*** ./src/modules/commentCounter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentCounter = (comment) => {\n  if (!comment.length) {\n    return null;\n  }\n  const number = comment.length + 1;\n  return number;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentCounter);\n\n\n//# sourceURL=webpack://api-based-webapp/./src/modules/commentCounter.js?");

/***/ }),

/***/ "./src/modules/date.js":
/*!*****************************!*\
  !*** ./src/modules/date.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst date = () => {\n  const today = new Date();\n  const year = today.getFullYear();\n  const month = today.getMonth() + 1;\n  const theDate = today.getDate();\n  let newMonth = '';\n  if (month.length > 1) {\n    newMonth = month;\n  } else {\n    newMonth = `0${month}`;\n  }\n  const display = `${year}-${newMonth}-${theDate}`;\n  return display;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (date);\n\n//# sourceURL=webpack://api-based-webapp/./src/modules/date.js?");

/***/ }),

/***/ "./src/modules/displayShows.js":
/*!*************************************!*\
  !*** ./src/modules/displayShows.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ \"./src/modules/variables.js\");\n/* harmony import */ var _showsFromAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showsFromAPI.js */ \"./src/modules/showsFromAPI.js\");\n/* harmony import */ var _updateLikes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updateLikes.js */ \"./src/modules/updateLikes.js\");\n/* harmony import */ var _showCounter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./showCounter.js */ \"./src/modules/showCounter.js\");\n\n\n\n\n\nconst displayShows = async (shows) => {\n  shows = await (0,_showsFromAPI_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  const section = shows.slice(0, 6);\n  let info = '';\n  section.forEach((show) => {\n    info += `\n      <div class=\"show\">\n        <img class=\"poster\" src=\"${show.image.medium}\">\n        <div class=\"top\">\n          <h3 class=\"title\">${show.name}</h3>\n          <div class=\"likes\">\n            <span id=\"${show.id}\" class=\"like material-icons-outlined\">favorite</span>\n            <p class=\"counter\"></p>\n          </div>\n        </div>\n        <div class=\"options\">\n          <button class=\"comment\">Comment</button>\n          <button class=\"reservation\">Reservation</button>\n        </div>\n      </div>\n    `;\n  });\n  _variables_js__WEBPACK_IMPORTED_MODULE_0__.intro.innerHTML = info;\n  (0,_updateLikes_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  const show = document.querySelectorAll('.show');\n  (0,_showCounter_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(show);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayShows);\n\n//# sourceURL=webpack://api-based-webapp/./src/modules/displayShows.js?");

/***/ }),

/***/ "./src/modules/displayShowsWithPopup.js":
/*!**********************************************!*\
  !*** ./src/modules/displayShowsWithPopup.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _showsFromAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showsFromAPI.js */ \"./src/modules/showsFromAPI.js\");\n/* harmony import */ var _dynamicDisplay_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamicDisplay.js */ \"./src/modules/dynamicDisplay.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style.css */ \"./src/style.css\");\n/* harmony import */ var _logo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logo.js */ \"./src/modules/logo.js\");\n/* harmony import */ var _likeEvent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./likeEvent.js */ \"./src/modules/likeEvent.js\");\n\n\n\n\n\n\nconst myShow = new _dynamicDisplay_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\nwindow.addEventListener('load', async () => {\n  myShow.showPage(await (0,_showsFromAPI_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n  (0,_logo_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  (0,_likeEvent_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (myShow);\n\n//# sourceURL=webpack://api-based-webapp/./src/modules/displayShowsWithPopup.js?");

/***/ }),

/***/ "./src/modules/dynamicDisplay.js":
/*!***************************************!*\
  !*** ./src/modules/dynamicDisplay.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ dynamicDisplay)\n/* harmony export */ });\n/* harmony import */ var _updateLikes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateLikes.js */ \"./src/modules/updateLikes.js\");\n/* harmony import */ var _addComment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addComment.js */ \"./src/modules/addComment.js\");\n/* harmony import */ var _showCounter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./showCounter.js */ \"./src/modules/showCounter.js\");\n/* harmony import */ var _getComments_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getComments.js */ \"./src/modules/getComments.js\");\n\n\n\n\n\nclass dynamicDisplay {\ngenerateCard = (data, cardId, cardUniqueId, showImage, showName) => {\n  const container = document.getElementById('container');\n\n  const id = cardId + 1;\n  const show = document.createElement('div');\n  show.classList.add('show');\n  const poster = document.createElement('img');\n  poster.classList.add('poster');\n  poster.src = showImage;\n  const top = document.createElement('div');\n  top.classList.add('top');\n  const title = document.createElement('h3');\n  title.classList.add('title');\n  title.innerText = showName;\n  const likes = document.createElement('div');\n  likes.classList.add('likes');\n  const span = document.createElement('span');\n  span.classList.add('like');\n  span.classList.add('material-icons-outlined');\n  span.innerText = 'favorite';\n  span.setAttribute('id', id);\n\n  const counter = document.createElement('p');\n  counter.classList.add('counter');\n\n  const options = document.createElement('div');\n  options.classList.add('options');\n  const commentBtn = document.createElement('button');\n  commentBtn.setAttribute('id', id);\n  commentBtn.innerText = 'Comment';\n  const reservationBtn = document.createElement('button');\n  reservationBtn.setAttribute('id', id);\n  reservationBtn.innerText = 'Reservation';\n\n  show.appendChild(poster);\n  show.appendChild(top);\n\n  top.appendChild(title);\n  top.appendChild(likes);\n\n  likes.appendChild(span);\n  likes.appendChild(counter);\n\n  show.appendChild(options);\n  options.appendChild(commentBtn);\n  options.appendChild(reservationBtn);\n\n  container.appendChild(show);\n\n  commentBtn.addEventListener('click', () => {\n    this.showCommentPopup(data, cardId);\n    const overlay = document.getElementById('overlay');\n    overlay.classList.add('active');\n    const scrollStop = document.querySelector('body');\n    scrollStop.style.overflow = 'hidden';\n  });\n}\n\nshowPage = async (data) => {\n  const noOfCards = 12;\n\n  for (let i = 0; i < noOfCards; i += 1) {\n    const cardId = i;\n    const cardUniqueId = data[i].id;\n    const showImage = data[i].image.medium;\n    const showName = data[i].name;\n    this.generateCard(data, cardId, cardUniqueId, showImage, showName);\n  }\n  (0,_updateLikes_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  const show = Promise.resolve(document.querySelectorAll('.show'));\n  (0,_showCounter_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(await show);\n}\n\nshowCommentPopup = async (data, cardId) => {\n  const modal = document.createElement('div');\n  modal.classList.add('modal');\n  const modalContainer = document.getElementById('modalContainer');\n\n  const closeButton = document.createElement('button');\n  closeButton.classList.add('close-button');\n  closeButton.innerHTML = '&times;';\n\n  const dataDiv = document.createElement('div');\n  dataDiv.classList.add('data');\n\n  const imgContainer = document.createElement('div');\n  imgContainer.classList.add('imgContainer');\n\n  const modalImage = document.createElement('img');\n  modalImage.classList.add('modal-image');\n  modalImage.src = `${data[cardId].image.medium}`;\n\n  const Information = document.createElement('div');\n  Information.classList.add('information');\n\n  const title = document.createElement('h3');\n  title.classList.add('title');\n  title.innerText = `${data[cardId].name}`;\n\n  const details = document.createElement('div');\n  details.classList.add('details');\n\n  const genres = document.createElement('div');\n  genres.innerText = `Genres: ${data[cardId].genres}`;\n\n  const language = document.createElement('div');\n  language.innerText = `Language: ${data[cardId].language}`;\n\n  const summary = document.createElement('p');\n  summary.innerHTML = `${data[cardId].summary}`;\n\n  const commentContainer = document.createElement('div');\n  commentContainer.classList.add('commentContainer');\n\n  const theCounter = document.createElement('div');\n  theCounter.id = 'theCounter';\n  theCounter.classList.add('theCounter');\n\n  const comments = document.createElement('div');\n\n  const commentCount = document.createElement('div');\n  commentCount.id = 'commentCount';\n\n  const postComment = document.createElement('ul');\n  postComment.id = 'postComment';\n  postComment.classList.add('postComment');\n\n  commentContainer.appendChild(theCounter);\n  theCounter.appendChild(comments);\n  theCounter.appendChild(commentCount);\n  commentContainer.appendChild(postComment);\n\n  dataDiv.appendChild(imgContainer);\n  dataDiv.appendChild(Information);\n\n  imgContainer.appendChild(modalImage);\n\n  Information.appendChild(title);\n  Information.appendChild(details);\n  details.appendChild(genres);\n  details.appendChild(language);\n  details.appendChild(summary);\n\n  modal.appendChild(closeButton);\n  modal.appendChild(dataDiv);\n  modal.appendChild(commentContainer);\n  modal.appendChild((0,_addComment_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(cardId));\n\n  modalContainer.appendChild(modal);\n  const allComments = await _getComments_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getComments(cardId + 1);\n  theCounter.innerText = `Comments(${allComments.length})`;\n  allComments.forEach((comment) => {\n    const liComment = document.createElement('li');\n    liComment.classList.add('liComment');\n    liComment.innerText = `${comment.creation_date} ${comment.username}: ${comment.comment}`;\n    postComment.appendChild(liComment);\n  });\n  closeButton.addEventListener('click', () => {\n    modalContainer.removeChild(modal);\n    const overlay = document.getElementById('overlay');\n    overlay.classList.remove('active');\n    const scrollStop = document.querySelector('body');\n    scrollStop.style.overflow = 'scroll';\n  });\n}\n}\n\n//# sourceURL=webpack://api-based-webapp/./src/modules/dynamicDisplay.js?");

/***/ }),

/***/ "./src/modules/getComments.js":
/*!************************************!*\
  !*** ./src/modules/getComments.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getApiClientData)\n/* harmony export */ });\n/* harmony import */ var _url_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url.js */ \"./src/modules/url.js\");\n\n\nclass getApiClientData {\n  static getComments = async (id) => {\n    const commentURI = `${_url_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].COMMENT_URI}?item_id=${id}`;\n    const response = await fetch(commentURI, {\n      method: 'GET',\n      headers: {\n        Accept: 'application/json',\n      },\n    });\n    const responseData = await response.json();\n    return responseData;\n  }\n}\n\n//# sourceURL=webpack://api-based-webapp/./src/modules/getComments.js?");

/***/ }),

/***/ "./src/modules/getLikesFromAPI.js":
/*!****************************************!*\
  !*** ./src/modules/getLikesFromAPI.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getLikesFromAPI = async () => {\n  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WXzERyUj1Xacp8cuF1ms/likes');\n  const result = await response.json();\n  return result;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLikesFromAPI);\n\n//# sourceURL=webpack://api-based-webapp/./src/modules/getLikesFromAPI.js?");

/***/ }),

/***/ "./src/modules/likeEvent.js":
/*!**********************************!*\
  !*** ./src/modules/likeEvent.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _displayShows_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayShows.js */ \"./src/modules/displayShows.js\");\n/* harmony import */ var _postToAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postToAPI.js */ \"./src/modules/postToAPI.js\");\n\n\n\nconst likes = async () => {\n  // await displayShows();\n  const likes = document.querySelectorAll('.like');\n  likes.forEach((like) => {\n    like.addEventListener('click', (e) => {\n      let counter = parseInt(e.path[1].childNodes[1].innerHTML, 10);\n      if (!counter) {\n        counter = 1;\n      } else {\n        counter += 1;\n      }\n      e.path[1].childNodes[1].innerHTML = counter;\n      const position = parseInt(e.path[0].id, 10);\n      _postToAPI_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].newLike(position);\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (likes);\n\n//# sourceURL=webpack://api-based-webapp/./src/modules/likeEvent.js?");

/***/ }),

/***/ "./src/modules/logo.js":
/*!*****************************!*\
  !*** ./src/modules/logo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_movie_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/movie.png */ \"./src/modules/images/movie.png\");\n\n\nconst img = () => {\n  const imgLogo = document.getElementById('imgLogo');\n  const logo = imgLogo.attributes.src;\n  logo.value = _images_movie_png__WEBPACK_IMPORTED_MODULE_0__;\n  return logo;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (img);\n\n//# sourceURL=webpack://api-based-webapp/./src/modules/logo.js?");

/***/ }),

/***/ "./src/modules/postComment.js":
/*!************************************!*\
  !*** ./src/modules/postComment.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ postApiClientData)\n/* harmony export */ });\n/* harmony import */ var _url_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url.js */ \"./src/modules/url.js\");\n\n\nclass postApiClientData {\n    static addComment = async (comment) => {\n      const response = await fetch(_url_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].COMMENT_URI, {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json',\n        },\n        body: comment,\n      });\n      const responseData = await response.text();\n      return responseData;\n    }\n}\n\n//# sourceURL=webpack://api-based-webapp/./src/modules/postComment.js?");

/***/ }),

/***/ "./src/modules/postToAPI.js":
/*!**********************************!*\
  !*** ./src/modules/postToAPI.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable class-methods-use-this */\nclass LikeCounter {\n  // eslint-disable-next-line camelcase\n  newLike(item_id) {\n    fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WXzERyUj1Xacp8cuF1ms/likes', {\n      method: 'POST',\n      body: JSON.stringify({\n        item_id,\n      }),\n      headers: {\n        'Content-type': 'application/json; charset=UTF-8',\n      },\n    })\n      .then((response) => response.text());\n  }\n}\n\nconst likeCounter = new LikeCounter();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (likeCounter);\n\n//# sourceURL=webpack://api-based-webapp/./src/modules/postToAPI.js?");

/***/ }),

/***/ "./src/modules/showCounter.js":
/*!************************************!*\
  !*** ./src/modules/showCounter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ \"./src/modules/variables.js\");\n\n\nconst showCounter = (value) => {\n  if (!value.length) {\n    return null;\n  }\n  const number = _variables_js__WEBPACK_IMPORTED_MODULE_0__.count;\n  number.innerHTML = `(${value.length})`;\n\n  return value.length;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showCounter);\n\n\n//# sourceURL=webpack://api-based-webapp/./src/modules/showCounter.js?");

/***/ }),

/***/ "./src/modules/showsFromAPI.js":
/*!*************************************!*\
  !*** ./src/modules/showsFromAPI.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst loadShows = async () => {\n  const answer = await fetch('https://api.tvmaze.com/shows');\n  const data = await answer.json();\n  return data;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadShows);\n\n//# sourceURL=webpack://api-based-webapp/./src/modules/showsFromAPI.js?");

/***/ }),

/***/ "./src/modules/updateLikes.js":
/*!************************************!*\
  !*** ./src/modules/updateLikes.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getLikesFromAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getLikesFromAPI.js */ \"./src/modules/getLikesFromAPI.js\");\n\n\nconst updateLikes = async () => {\n  const likesPosition = document.querySelectorAll('.like');\n  const info = await (0,_getLikesFromAPI_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  console.log(info);\n  likesPosition.forEach((like) => {\n    const getID = parseInt(like.id, 10);\n    info.forEach((value) => {\n      const compare = value.item_id;\n      if (compare === getID) {\n        like.parentElement.childNodes[1].innerHTML = value.likes;\n      }\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateLikes);\n\n//# sourceURL=webpack://api-based-webapp/./src/modules/updateLikes.js?");

/***/ }),

/***/ "./src/modules/url.js":
/*!****************************!*\
  !*** ./src/modules/url.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Constants)\n/* harmony export */ });\nclass Constants {\n    static apiAddress = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps'\n\n    static uniqueID = 'WXzERyUj1Xacp8cuF1ms';\n\n    static COMMENT_URI = `${this.apiAddress}/${this.uniqueID}/comments`;\n}\n// https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WXzERyUj1Xacp8cuF1ms/comments\n\n//# sourceURL=webpack://api-based-webapp/./src/modules/url.js?");

/***/ }),

/***/ "./src/modules/variables.js":
/*!**********************************!*\
  !*** ./src/modules/variables.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"count\": () => (/* binding */ count),\n/* harmony export */   \"intro\": () => (/* binding */ intro),\n/* harmony export */   \"listOfComment\": () => (/* binding */ listOfComment),\n/* harmony export */   \"refresh\": () => (/* binding */ refresh)\n/* harmony export */ });\nconst intro = document.getElementById('container');\nconst count = document.getElementById('count');\nconst refresh = document.getElementById('refresh');\nconst listOfComment = document.querySelectorAll('.liComment');\n\n//# sourceURL=webpack://api-based-webapp/./src/modules/variables.js?");

/***/ }),

/***/ "./src/modules/images/movie.png":
/*!**************************************!*\
  !*** ./src/modules/images/movie.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ef55a60183c37c7d1fbc.png\";\n\n//# sourceURL=webpack://api-based-webapp/./src/modules/images/movie.png?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;