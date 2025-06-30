/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktraining_ts"] = self["webpackChunktraining_ts"] || []).push([["src_components_Dashboard_index_tsx"],{

/***/ "./src/Utils/assets.tsx":
/*!******************************!*\
  !*** ./src/Utils/assets.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   icons: () => (/* binding */ icons)\n/* harmony export */ });\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.mjs\");\n/* harmony import */ var react_icons_ci__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/ci */ \"./node_modules/react-icons/ci/index.mjs\");\n/* harmony import */ var react_icons_tb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/tb */ \"./node_modules/react-icons/tb/index.mjs\");\n\n\n\n\nconst icons = {\n  Shopping: react_icons_fa__WEBPACK_IMPORTED_MODULE_0__.FaShoppingBag,\n  Todo: react_icons_ci__WEBPACK_IMPORTED_MODULE_1__.CiBoxList,\n  Blog: react_icons_tb__WEBPACK_IMPORTED_MODULE_2__.TbBrandBlogger,\n  CloseBox: react_icons_fa__WEBPACK_IMPORTED_MODULE_0__.FaWindowClose\n};\n\n//# sourceURL=webpack://training-ts/./src/Utils/assets.tsx?");

/***/ }),

/***/ "./src/components/Dashboard/index.tsx":
/*!********************************************!*\
  !*** ./src/components/Dashboard/index.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ \"./node_modules/react-router/dist/development/chunk-NL6KNZEE.mjs\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ \"./src/components/Dashboard/styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Utils_assets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utils/assets */ \"./src/Utils/assets.tsx\");\n\n\n\n\nconst Dashboard = () => {\n  const navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();\n  const menu = [{\n    id: 1,\n    name: 'Shopping Cart',\n    path: '/shopping',\n    icon: 'Shopping'\n  }, {\n    id: 2,\n    name: 'Todo List',\n    path: '/todo',\n    icon: 'Todo'\n  }, {\n    id: 3,\n    name: 'Blog Post',\n    path: '/blog',\n    icon: 'Blog'\n  }];\n  const getIcon = function (iconName) {\n    let size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 24;\n    if (!iconName) return null;\n    const IconComponent = _Utils_assets__WEBPACK_IMPORTED_MODULE_2__.icons[iconName];\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IconComponent, {\n      size\n    });\n  };\n  const handleRoute = path => {\n    navigate(path);\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"dashboard-div\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", null, \"Welcome to React + Typescript Training\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"dashboard-content\"\n  }, menu.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"menu-lists\",\n    key: item.id,\n    onClick: () => handleRoute(item.path)\n  }, getIcon(item.icon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: \"menu-title\"\n  }, item.name)))));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);\n\n//# sourceURL=webpack://training-ts/./src/components/Dashboard/index.tsx?");

/***/ }),

/***/ "./src/components/Dashboard/styles.css":
/*!*********************************************!*\
  !*** ./src/components/Dashboard/styles.css ***!
  \*********************************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (1:3)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n>    .dashboard-div {\\n|        display: grid;\\n|        place-items: center;\");\n\n//# sourceURL=webpack://training-ts/./src/components/Dashboard/styles.css?");

/***/ })

}]);