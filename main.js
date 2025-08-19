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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/styles.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/styles.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root{\r\n    --bg-color: rgba(0,0,0,.7);\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nhtml {\r\n    overflow-y: scroll;\r\n    font-size: clamp(14px, 1.2vw, 18px);\r\n}\r\nbody {\r\n    font-family: \"Trebuchet MS\", cursive;\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-height: 100dvh;\r\n    color: white;\r\n}\r\n.background-image {\r\n    position: fixed;\r\n    inset: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n    z-index: -1;\r\n    pointer-events: none;\r\n}\r\n\r\n/* header */\r\n.header-nav {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 100;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content:space-between;\r\n    padding: 16px 24px;\r\n    background: var(--bg-color);\r\n}\r\n.header-restaurant-name{ \r\n    font-weight: bold;\r\n    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);\r\n    margin: 0; \r\n    font-size: clamp(2rem, 3.2vw, 2.5rem);\r\n    color: var(--font-color); \r\n}\r\n\r\n.header-restaurant-name a{\r\n    color: inherit;\r\n    text-decoration: none;\r\n}\r\n\r\n.header-nav-buttons {\r\n    display: flex;\r\n    font-size: clamp(1.5rem, 2vw, 1.9rem);\r\n    gap: clamp(0.2rem, 1.2vw, 1.8rem); \r\n}\r\n\r\n.header-nav-buttons > button {\r\n    font: inherit;\r\n    padding: 10px 20px;\r\n    background: none;\r\n    border: none;\r\n    color: white;\r\n    transition: transform 0.3s ease;\r\n}\r\n.header-nav-buttons > button:hover{\r\n    transform: translateY(-5px);\r\n}\r\n.header-nav-buttons > button.active{\r\n    color: #fff;\r\n  text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);\r\n}\r\n\r\n/* main */\r\n.main{\r\n    flex: 1;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n}\r\n\r\n/* content */\r\n#content {\r\n    flex: 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n/* footer */\r\nfooter {\r\n    height: clamp(2rem, 1.2vw, 2.5rem);\r\n}\r\n.footer-nav{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 100%;\r\n    background: var(--bg-color);\r\n}\r\n.footer-nav-copyright{\r\n    font-size: clamp(1rem, 1.2vw, 1.25rem);\r\n}\r\n\r\n/* homepage */\r\n.home-items-div{\r\n    margin-top: 120px;\r\n    width: min(92%, 600px);\r\n    background: var(--bg-color);\r\n    border-radius: 20px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 10px;\r\n}\r\n.home-text{\r\n    font-size: clamp(1.2rem, 1.5vw, 2.125rem);\r\n    margin-bottom: 20px;\r\n}\r\n.chef-image{\r\n    width: 90%;\r\n    border-radius: 20px;\r\n    transition: filter 0.3s ease;\r\n}\r\n.chef-image:hover{\r\n    filter: brightness(1.2);\r\n}\r\n.text-below-chef{\r\n    font-size: clamp(1.2rem, 1.5vw, 2.125rem);\r\n    text-align: center;\r\n    margin: 20px;\r\n}\r\n\r\n/* menu */\r\n.menu-container{\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    gap: 30px;\r\n    width: min(92%, 600px);\r\n    margin-top: 120px;\r\n    margin-bottom: 40px;\r\n    padding: 15px;\r\n    background: var(--bg-color);\r\n    border-radius: 20px;\r\n}\r\n\r\n.menu-item{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.menu-item-name-desc-container > p{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.menu-img{\r\n    width: 100%;\r\n    border-radius: 20px;\r\n    object-fit: cover;\r\n    transition: filter 0.3s ease;\r\n}\r\n.menu-img:hover{\r\n    filter: brightness(1.2);\r\n}\r\n\r\n.item-name-p{\r\n    margin-top: 10px;\r\n    font-size: clamp(1.2rem, 1.5vw, 1.8rem);\r\n    font-weight: bold;\r\n    text-align: center;\r\n}\r\n\r\n.item-desc-p{\r\n    font-size: clamp(0.95rem, 1.6vw, 1.1rem);\r\n    text-align: left;\r\n    margin: 10px;\r\n}\r\n\r\n/* contact */\r\n.contact-container{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    margin-top: 120px;\r\n    width: min(100%, 600px);\r\n}\r\n.contact-div{\r\n    background: var(--bg-color);\r\n    border-radius: 20px;\r\n    padding: 10px;\r\n}\r\n\r\n.contact-location{\r\n    margin: 10px;\r\n    font-size: clamp(1.1rem, 2.4vw, 1.875rem);\r\n    font-weight: bold;\r\n    \r\n}\r\n\r\n.contact-phone > p{\r\n    font-size: clamp(0.5rem, 1.9vw, 1.575rem);\r\n}\r\n\r\n.contact-phone{\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    margin: 20px;\r\n}\r\n.phone-number-p, .actual-time-text-p{\r\n    text-align: right;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ }),

/***/ "./src/functions/domFunctions.js":
/*!***************************************!*\
  !*** ./src/functions/domFunctions.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createBtn: () => (/* binding */ createBtn),\n/* harmony export */   createDiv: () => (/* binding */ createDiv),\n/* harmony export */   createH1: () => (/* binding */ createH1),\n/* harmony export */   createH2: () => (/* binding */ createH2),\n/* harmony export */   createH3: () => (/* binding */ createH3),\n/* harmony export */   createImg: () => (/* binding */ createImg),\n/* harmony export */   createP: () => (/* binding */ createP)\n/* harmony export */ });\nfunction createDiv(className = \"\"){\r\n    const div = document.createElement(\"div\");\r\n    if (className){\r\n        div.classList.add(className);\r\n    }\r\n    return div;\r\n}\r\n\r\nfunction createP(className = \"\") {\r\n    const p = document.createElement(\"p\");\r\n    if (className) {\r\n        p.classList.add(className);\r\n    }\r\n    return p;\r\n}\r\n\r\nfunction createH1(className = \"\") {\r\n    const h1 = document.createElement(\"h1\");\r\n    if (className) {\r\n        h1.classList.add(className);\r\n    }\r\n    return h1;\r\n}\r\n\r\nfunction createH2(className = \"\") {\r\n    const h2 = document.createElement(\"h2\");\r\n    if (className) {\r\n        h2.classList.add(className);\r\n    }\r\n    return h2;\r\n}\r\n\r\nfunction createH3(className = \"\") {\r\n    const h3 = document.createElement(\"h3\");\r\n    if (className) {\r\n        h3.classList.add(className);\r\n    }\r\n    return h3;\r\n}\r\n\r\nfunction createImg(src = \"\", className=\"\"){\r\n    const img = new Image();\r\n    if (src) {\r\n        img.src = src;\r\n    }\r\n    if (className) {\r\n        img.classList.add(className);\r\n    }\r\n    return img;\r\n}\r\n\r\nfunction createBtn(className = \"\"){\r\n    const btn = document.createElement(\"button\");\r\n    if (className){\r\n        btn.classList.add(className);\r\n    }\r\n    return btn;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/functions/domFunctions.js?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/styles.css */ \"./src/style/styles.css\");\n/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home */ \"./src/pages/home.js\");\n/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/menu */ \"./src/pages/menu.js\");\n/* harmony import */ var _pages_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/contact */ \"./src/pages/contact.js\");\n/* harmony import */ var _pages_images_background_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/images/background.png */ \"./src/pages/images/background.png\");\n/* harmony import */ var _functions_domFunctions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./functions/domFunctions */ \"./src/functions/domFunctions.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet content = document.getElementById(\"content\");\r\n\r\nfunction createBackgroundImage(){\r\n    const image = (0,_functions_domFunctions__WEBPACK_IMPORTED_MODULE_5__.createImg)(_pages_images_background_png__WEBPACK_IMPORTED_MODULE_4__, \"background-image\");\r\n    image.alt = \"Pasta\";\r\n    return image;\r\n}\r\n\r\nfunction createHeader(){\r\n    const header = document.createElement(\"header\");\r\n    const navBar = document.createElement(\"nav\");\r\n    navBar.classList.add(\"header-nav\");\r\n\r\n    const title = (0,_functions_domFunctions__WEBPACK_IMPORTED_MODULE_5__.createH1)(\"header-restaurant-name\")\r\n    const linktitle = document.createElement(\"a\");\r\n    linktitle.href = \"./\";\r\n    linktitle.textContent = \"PASTARIFFIC\";\r\n\r\n    title.append(linktitle);\r\n\r\n    const createNavButtonsDiv = (0,_functions_domFunctions__WEBPACK_IMPORTED_MODULE_5__.createDiv)(\"header-nav-buttons\");\r\n    createNavButtonsDiv.addEventListener('click', (e) =>{\r\n        const isButton = e.target.nodeName === 'BUTTON';\r\n        if(!isButton){\r\n            return;\r\n        }\r\n        else {\r\n            createNavButtonsDiv.querySelectorAll(\"button\")\r\n            .forEach(btn => btn.classList.remove(\"active\"));\r\n\r\n            e.target.classList.add(\"active\");\r\n\r\n            pageLoader(createNavButtonsDiv, e.target.classList[0]);\r\n        }\r\n    })\r\n\r\n    const homeButton = (0,_functions_domFunctions__WEBPACK_IMPORTED_MODULE_5__.createBtn)(\"home-btn\");\r\n    homeButton.classList.add(\"active\");\r\n    homeButton.textContent = \"Home\";\r\n\r\n    const menuButton = (0,_functions_domFunctions__WEBPACK_IMPORTED_MODULE_5__.createBtn)(\"menu-btn\");\r\n    menuButton.textContent = \"Menu\";\r\n\r\n    const contactButton = (0,_functions_domFunctions__WEBPACK_IMPORTED_MODULE_5__.createBtn)(\"contact-btn\");\r\n    contactButton.textContent = \"Contact\";\r\n\r\n    createNavButtonsDiv.append(homeButton, menuButton, contactButton);\r\n    navBar.append(title, createNavButtonsDiv);\r\n    header.append(navBar);\r\n    return header;\r\n};\r\n\r\nfunction createMain(button = \"home-btn\"){\r\n    let main = document.querySelector(\".main\");\r\n    if (main) {\r\n        main.textContent = \"\";\r\n    } \r\n    else {\r\n        main = (0,_functions_domFunctions__WEBPACK_IMPORTED_MODULE_5__.createDiv)(\"main\");\r\n    }\r\n    \r\n    let mainContent = ''; \r\n    if (button === \"home-btn\"){\r\n        mainContent = (0,_pages_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    }\r\n    else if (button === \"menu-btn\"){\r\n        mainContent = (0,_pages_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n    }\r\n    else if (button === \"contact-btn\"){\r\n        mainContent = (0,_pages_contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n    }\r\n    main.append(mainContent);\r\n    return main;\r\n}\r\n\r\nfunction createFooter(){\r\n    const footer = document.createElement(\"footer\");\r\n    const navBar = document.createElement(\"nav\");\r\n    navBar.classList.add(\"footer-nav\");\r\n    const h1 = (0,_functions_domFunctions__WEBPACK_IMPORTED_MODULE_5__.createH1)(\"footer-nav-copyright\");\r\n    h1.textContent = \"Made by dziugasj123\";\r\n    navBar.append(h1);\r\n    footer.append(navBar);\r\n    return footer;\r\n}\r\n\r\nfunction pageLoader(buttonsContainer,button){\r\n    for(const child of buttonsContainer.children){\r\n        if (child.classList.contains(button)){\r\n            createMain(button);\r\n            break;\r\n        }\r\n    }\r\n}\r\n\r\nfunction createWebsite(){\r\n    content.append(\r\n        createBackgroundImage(), \r\n        createHeader(), \r\n        createMain(), \r\n        createFooter()\r\n    );\r\n}\r\n\r\ncreateWebsite();\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?\n}");

/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _functions_domFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/domFunctions */ \"./src/functions/domFunctions.js\");\n\r\n\r\nclass ContactItem{\r\n    constructor(loc, numb, open){\r\n        this.loc = loc;\r\n        this.numb = numb;\r\n        this.open = open;\r\n    }\r\n}\r\n\r\nconst contactItems = [\r\n    new ContactItem(\r\n        \"Highland Dr. 198, Chicago\",\r\n        \"+37061234567\",\r\n        \"I - VII 11:00 - 22:00\"\r\n    ),\r\n    new ContactItem(\r\n        \"Maple Ave. 742, New York\",\r\n        \"+37069847215\",\r\n        \"I - VII 14:00 - 23:00\"\r\n    ),\r\n];\r\n\r\nfunction loadContact(){\r\n    const contactContainer = (0,_functions_domFunctions__WEBPACK_IMPORTED_MODULE_0__.createDiv)(\"contact-container\");\r\n    renderContacts(contactContainer);\r\n    return contactContainer;\r\n}\r\n\r\nfunction renderContacts(contactContainer){\r\n    for (let i = 0; i < contactItems.length; i++){\r\n        const contactDiv = (0,_functions_domFunctions__WEBPACK_IMPORTED_MODULE_0__.createDiv)(\"contact-div\")\r\n        const locationDiv = (0,_functions_domFunctions__WEBPACK_IMPORTED_MODULE_0__.createDiv)(\"contact-location\");\r\n\r\n        const location = (0,_functions_domFunctions__WEBPACK_IMPORTED_MODULE_0__.createP)(\"contact-location\");\r\n        location.textContent = contactItems[i].loc;\r\n\r\n        const phoneTimeDiv = (0,_functions_domFunctions__WEBPACK_IMPORTED_MODULE_0__.createDiv)(\"contact-phone\");\r\n        const phoneText = (0,_functions_domFunctions__WEBPACK_IMPORTED_MODULE_0__.createP)(\"contact-phone-p\");\r\n        phoneText.textContent = \"Order online:\"\r\n        const phoneNumber = (0,_functions_domFunctions__WEBPACK_IMPORTED_MODULE_0__.createP)(\"phone-number-p\");\r\n        phoneNumber.textContent = contactItems[i].numb;\r\n\r\n        const timeText = (0,_functions_domFunctions__WEBPACK_IMPORTED_MODULE_0__.createP)(\"time-text-p\");\r\n        timeText.textContent = \"Openning times: \";\r\n\r\n        const actualTime = (0,_functions_domFunctions__WEBPACK_IMPORTED_MODULE_0__.createP)(\"actual-time-text-p\");\r\n        actualTime.textContent = contactItems[i].open;\r\n\r\n        phoneTimeDiv.append(phoneText, phoneNumber, timeText, actualTime);\r\n        locationDiv.append(location);\r\n        contactDiv.append(locationDiv, phoneTimeDiv);\r\n        contactContainer.append(contactDiv);\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n//# sourceURL=webpack://restaurant-page/./src/pages/contact.js?\n}");

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_chef_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/chef.png */ \"./src/pages/images/chef.png\");\n/* harmony import */ var _functions_domFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/domFunctions */ \"./src/functions/domFunctions.js\");\n\r\n\r\nfunction loadHome() {\r\n    const homeItemsDiv = (0,_functions_domFunctions__WEBPACK_IMPORTED_MODULE_1__.createDiv)(\"home-items-div\");\r\n\r\n    const h2 = (0,_functions_domFunctions__WEBPACK_IMPORTED_MODULE_1__.createH2)(\"home-text\");\r\n    h2.textContent = \"Made with love since 1853\";\r\n\r\n    const chefImage = (0,_functions_domFunctions__WEBPACK_IMPORTED_MODULE_1__.createImg)(_images_chef_png__WEBPACK_IMPORTED_MODULE_0__, \"chef-image\");\r\n    chefImage.alt = \"Chef\";\r\n\r\n    const h3 = (0,_functions_domFunctions__WEBPACK_IMPORTED_MODULE_1__.createH3)(\"text-below-chef\");\r\n    h3.textContent = \"From our kitchen to your table, every plate tells a story of tradition, passion, and the freshest ingredients.\";\r\n\r\n    homeItemsDiv.append(h2, chefImage, h3);\r\n    return homeItemsDiv;\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://restaurant-page/./src/pages/home.js?\n}");

/***/ }),

/***/ "./src/pages/images/background.png":
/*!*****************************************!*\
  !*** ./src/pages/images/background.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"783eab33786e701ac372.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/pages/images/background.png?\n}");

/***/ }),

/***/ "./src/pages/images/chef.png":
/*!***********************************!*\
  !*** ./src/pages/images/chef.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"3c37b618953d492816be.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/pages/images/chef.png?\n}");

/***/ }),

/***/ "./src/pages/images/pasta_dish_1.png":
/*!*******************************************!*\
  !*** ./src/pages/images/pasta_dish_1.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"f6d7cd9a4172e6d3e5b2.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/pages/images/pasta_dish_1.png?\n}");

/***/ }),

/***/ "./src/pages/images/pasta_dish_2.png":
/*!*******************************************!*\
  !*** ./src/pages/images/pasta_dish_2.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"b1ff55374cef4dffe5b0.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/pages/images/pasta_dish_2.png?\n}");

/***/ }),

/***/ "./src/pages/images/pasta_dish_3.png":
/*!*******************************************!*\
  !*** ./src/pages/images/pasta_dish_3.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"33ec0bccc5fa1d6e9b1a.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/pages/images/pasta_dish_3.png?\n}");

/***/ }),

/***/ "./src/pages/images/pasta_dish_4.png":
/*!*******************************************!*\
  !*** ./src/pages/images/pasta_dish_4.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"b5c77a8a0d7edfed3469.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/pages/images/pasta_dish_4.png?\n}");

/***/ }),

/***/ "./src/pages/images/pasta_dish_5.png":
/*!*******************************************!*\
  !*** ./src/pages/images/pasta_dish_5.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"efff09020c4e5694ab03.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/pages/images/pasta_dish_5.png?\n}");

/***/ }),

/***/ "./src/pages/images/pasta_dish_6.png":
/*!*******************************************!*\
  !*** ./src/pages/images/pasta_dish_6.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"0c4593eae3b38a029aa2.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/pages/images/pasta_dish_6.png?\n}");

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_pasta_dish_1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/pasta_dish_1.png */ \"./src/pages/images/pasta_dish_1.png\");\n/* harmony import */ var _images_pasta_dish_2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/pasta_dish_2.png */ \"./src/pages/images/pasta_dish_2.png\");\n/* harmony import */ var _images_pasta_dish_3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/pasta_dish_3.png */ \"./src/pages/images/pasta_dish_3.png\");\n/* harmony import */ var _images_pasta_dish_4_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/pasta_dish_4.png */ \"./src/pages/images/pasta_dish_4.png\");\n/* harmony import */ var _images_pasta_dish_5_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/pasta_dish_5.png */ \"./src/pages/images/pasta_dish_5.png\");\n/* harmony import */ var _images_pasta_dish_6_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/pasta_dish_6.png */ \"./src/pages/images/pasta_dish_6.png\");\n/* harmony import */ var _functions_domFunctions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../functions/domFunctions */ \"./src/functions/domFunctions.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass MenuItem {\r\n    constructor(name, desc, img){\r\n        this.name = name;\r\n        this.desc = desc;\r\n        this.img = img;\r\n    }\r\n}\r\n\r\nconst menuItems = [\r\n    new MenuItem(\r\n        \"Cacio e Pepe\",\r\n        \"A Roman pasta dish made simply with pecorino cheese and black pepper. Very creamy and rich despite its simplicity.\",\r\n        _images_pasta_dish_1_png__WEBPACK_IMPORTED_MODULE_0__\r\n    ),\r\n    new MenuItem(\r\n        \"Spaghetti al Pomodoro\",\r\n        \"Classic spaghetti with a fresh tomato sauce, usually made with ripe tomatoes, garlic, and olive oil.\",\r\n        _images_pasta_dish_2_png__WEBPACK_IMPORTED_MODULE_1__\r\n    ),\r\n    new MenuItem(\r\n        \"Spaghetti alla Napoletana\",\r\n        \"Similar to pomodoro, but garnished with fresh basil leaves, highlighting Naples’ signature flavors.\",\r\n        _images_pasta_dish_3_png__WEBPACK_IMPORTED_MODULE_2__\r\n    ),\r\n    new MenuItem(\r\n        \"Pasta al Pesto\",\r\n        \"Pasta with green basil pesto sauce, made from basil, pine nuts, Parmesan, garlic, and olive oil.\",\r\n        _images_pasta_dish_4_png__WEBPACK_IMPORTED_MODULE_3__\r\n    ),\r\n    new MenuItem(\r\n        \"Lasagna\",\r\n        \"Layers of pasta sheets baked with tomato sauce, béchamel (or ricotta), cheese, and sometimes meat or vegetables.\",\r\n        _images_pasta_dish_5_png__WEBPACK_IMPORTED_MODULE_4__\r\n    ),\r\n    new MenuItem(\r\n        \"Pasta al Pesto Genovese\",\r\n        \"Another pesto pasta, but here the pesto is chunkier.\",\r\n        _images_pasta_dish_6_png__WEBPACK_IMPORTED_MODULE_5__\r\n    ),\r\n];\r\n\r\nfunction loadMenu(){\r\n    const menuContainer = (0,_functions_domFunctions__WEBPACK_IMPORTED_MODULE_6__.createDiv)(\"menu-container\");\r\n    renderImages(menuContainer);\r\n    return menuContainer;\r\n}\r\n\r\nfunction renderImages(menuContainer){\r\n    for (let i = 0; i < menuItems.length; i++){\r\n        const image = (0,_functions_domFunctions__WEBPACK_IMPORTED_MODULE_6__.createImg)(menuItems[i].img, \"menu-img\");\r\n\r\n        const menuItemContainer = (0,_functions_domFunctions__WEBPACK_IMPORTED_MODULE_6__.createDiv)(\"menu-item\");\r\n\r\n        const itemNameDescContainer = (0,_functions_domFunctions__WEBPACK_IMPORTED_MODULE_6__.createDiv)(\"menu-item-name-desc-container\");\r\n\r\n        const itemName = (0,_functions_domFunctions__WEBPACK_IMPORTED_MODULE_6__.createP)(\"item-name-p\");\r\n        itemName.textContent = menuItems[i].name;\r\n\r\n        const itemDesc = (0,_functions_domFunctions__WEBPACK_IMPORTED_MODULE_6__.createP)(\"item-desc-p\");\r\n        itemDesc.textContent = menuItems[i].desc;\r\n\r\n        itemNameDescContainer.append(itemName, itemDesc)\r\n        menuItemContainer.append(image, itemNameDescContainer);\r\n        menuContainer.append(menuItemContainer);\r\n    }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/pages/menu.js?\n}");

/***/ }),

/***/ "./src/style/styles.css":
/*!******************************!*\
  !*** ./src/style/styles.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style/styles.css?\n}");

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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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