"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"d64421160ec6\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzZhZmIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJkNjQ0MjExNjBlYzZcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/components/Navbar.jsx":
/*!***********************************!*\
  !*** ./app/components/Navbar.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Soc_logo_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Soc-logo.jpg */ \"(app-pages-browser)/./app/components/Soc-logo.jpg\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Navbar() {\n    _s();\n    const [isMobile, setIsMobile] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const handleResize = ()=>{\n            setIsMobile(window.innerWidth <= 768);\n        };\n        handleResize();\n        // Add event listener for window resize\n        window.addEventListener(\"resize\", handleResize);\n    // // Cleanup the event listener on component unmount\n    // return () => {\n    //   window.removeEventListener(\"resize\", handleResize);\n    // };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        id: \"nav-bar\",\n        className: \"flex items-center justify-between px-12 p-2 border-b-2 border-b-gray-100 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: _Soc_logo_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                alt: \"Dojo\",\n                width: 100\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\components\\\\Navbar.jsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            isMobile ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"text-xl focus:outline-none\",\n                children: \"≡\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\components\\\\Navbar.jsx\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center gap-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        className: \"hover:underline\",\n                        href: \"/\",\n                        children: \"Home\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\components\\\\Navbar.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        className: \"hover:underline\",\n                        href: \"/tickets\",\n                        children: \"Tickets\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\components\\\\Navbar.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        className: \"hover:underline\",\n                        href: \"/addTicket\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-green-600 py-3 px-8 text-white\",\n                            children: \"Add Ticket\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\components\\\\Navbar.jsx\",\n                            lineNumber: 42,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\components\\\\Navbar.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\components\\\\Navbar.jsx\",\n                lineNumber: 34,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\components\\\\Navbar.jsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(Navbar, \"MlmSG3uSWWvVgZvDg0SD4XH58F4=\");\n_c = Navbar;\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL05hdmJhci5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDNkI7QUFDRTtBQUNHO0FBRVU7QUFFN0IsU0FBU0s7O0lBQ3RCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUN6Q0MsZ0RBQVNBLENBQUM7UUFDUixNQUFNSSxlQUFlO1lBQ25CRCxZQUFZRSxPQUFPQyxVQUFVLElBQUk7UUFDbkM7UUFDQUY7UUFFQSx1Q0FBdUM7UUFDdkNDLE9BQU9FLGdCQUFnQixDQUFDLFVBQVVIO0lBRWxDLHFEQUFxRDtJQUNyRCxpQkFBaUI7SUFDakIsd0RBQXdEO0lBQ3hELEtBQUs7SUFDUCxHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0k7UUFDQ0MsSUFBRztRQUNIQyxXQUFVOzswQkFFViw4REFBQ2IsbURBQUtBO2dCQUFDYyxLQUFLYixxREFBSUE7Z0JBQUVjLEtBQUk7Z0JBQU9DLE9BQU87Ozs7OztZQUNuQ1gseUJBQ0MsOERBQUNZO2dCQUFPSixXQUFVOzBCQUE2Qjs7Ozs7cUNBRS9DLDhEQUFDSztnQkFBSUwsV0FBVTs7a0NBQ2IsOERBQUNkLGtEQUFJQTt3QkFBQ2MsV0FBVTt3QkFBa0JNLE1BQUs7a0NBQUk7Ozs7OztrQ0FHM0MsOERBQUNwQixrREFBSUE7d0JBQUNjLFdBQVU7d0JBQWtCTSxNQUFLO2tDQUFXOzs7Ozs7a0NBR2xELDhEQUFDcEIsa0RBQUlBO3dCQUFDYyxXQUFVO3dCQUFrQk0sTUFBSztrQ0FDckMsNEVBQUNGOzRCQUFPSixXQUFVO3NDQUFvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTbEU7R0EzQ3dCVDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9OYXZiYXIuanN4PzYwZTEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBsb2dvIGZyb20gXCIuL1NvYy1sb2dvLmpwZ1wiO1xyXG5cclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKCkge1xyXG4gIGNvbnN0IFtpc01vYmlsZSwgc2V0SXNNb2JpbGVdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcclxuICAgICAgc2V0SXNNb2JpbGUod2luZG93LmlubmVyV2lkdGggPD0gNzY4KTsgXHJcbiAgICB9O1xyXG4gICAgaGFuZGxlUmVzaXplKCk7XHJcblxyXG4gICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIGZvciB3aW5kb3cgcmVzaXplXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xyXG5cclxuICAgIC8vIC8vIENsZWFudXAgdGhlIGV2ZW50IGxpc3RlbmVyIG9uIGNvbXBvbmVudCB1bm1vdW50XHJcbiAgICAvLyByZXR1cm4gKCkgPT4ge1xyXG4gICAgLy8gICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xyXG4gICAgLy8gfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2XHJcbiAgICAgIGlkPVwibmF2LWJhclwiXHJcbiAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBweC0xMiBwLTIgYm9yZGVyLWItMiBib3JkZXItYi1ncmF5LTEwMCBcIlxyXG4gICAgPlxyXG4gICAgICA8SW1hZ2Ugc3JjPXtsb2dvfSBhbHQ9XCJEb2pvXCIgd2lkdGg9ezEwMH0+PC9JbWFnZT5cclxuICAgICAge2lzTW9iaWxlID8gKFxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGV4dC14bCBmb2N1czpvdXRsaW5lLW5vbmVcIj4mIzg4MDE7PC9idXR0b24+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtOFwiPlxyXG4gICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiaG92ZXI6dW5kZXJsaW5lXCIgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgSG9tZVxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiaG92ZXI6dW5kZXJsaW5lXCIgaHJlZj1cIi90aWNrZXRzXCI+XHJcbiAgICAgICAgICAgIFRpY2tldHNcclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImhvdmVyOnVuZGVybGluZVwiIGhyZWY9XCIvYWRkVGlja2V0XCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctZ3JlZW4tNjAwIHB5LTMgcHgtOCB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgQWRkIFRpY2tldFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAgey8qIGFsbG93cyB0aGUgbGluayB0byBiZSByZWFkeSB3YWl0aW5nIHRvIGFub3RociBwYWdlLCB0aGUgd2lsbCBiZSBhIHRhZyBpbiB0aGUgaW5zcGVjdCBwYWdlKi99XHJcbiAgICA8L25hdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwiSW1hZ2UiLCJsb2dvIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJOYXZiYXIiLCJpc01vYmlsZSIsInNldElzTW9iaWxlIiwiaGFuZGxlUmVzaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJuYXYiLCJpZCIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsIndpZHRoIiwiYnV0dG9uIiwiZGl2IiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Navbar.jsx\n"));

/***/ })

});