"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/Navbar.jsx":
/*!***********************************!*\
  !*** ./app/components/Navbar.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Soc_logo_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Soc-logo.jpg */ \"(app-pages-browser)/./app/components/Soc-logo.jpg\");\n/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Sidebar */ \"(app-pages-browser)/./app/components/Sidebar.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Navbar() {\n    _s();\n    const [isMobile, setIsMobile] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const [showSideMenu, setShowSideMenu] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        const handleResize = ()=>{\n            if (window.innerWidth <= 768) {\n                setIsMobile(true);\n            } else {\n                setIsMobile(false);\n            }\n        };\n        // Initial check\n        handleResize();\n        // Add event listener for window resize\n        window.addEventListener(\"resize\", handleResize);\n        // Cleanup the event listener on component unmount\n        return ()=>{\n            window.removeEventListener(\"resize\", handleResize);\n        };\n    }, []);\n    const toggleSideMenu = ()=>{\n        setShowSideMenu(!showSideMenu);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        id: \"nav-bar\",\n        className: \"flex items-center justify-between px-4 py-2 border-b-2 border-b-gray-100 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: _Soc_logo_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                alt: \"Dojo\",\n                width: 100\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\components\\\\Navbar.jsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            isMobile ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"text-xl focus:outline-none\",\n                onClick: toggleSideMenu,\n                children: \"≡\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\components\\\\Navbar.jsx\",\n                lineNumber: 45,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center gap-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        className: \"hover:underline\",\n                        href: \"/\",\n                        children: \"Home\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\components\\\\Navbar.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        className: \"hover:underline\",\n                        href: \"/tickets\",\n                        children: \"Tickets\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\components\\\\Navbar.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        className: \"hover:underline\",\n                        href: \"/addTicket\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-green-600 py-3 px-8 text-white\",\n                            children: \"Add Ticket\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\components\\\\Navbar.jsx\",\n                            lineNumber: 55,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\components\\\\Navbar.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\components\\\\Navbar.jsx\",\n                lineNumber: 47,\n                columnNumber: 9\n            }, this),\n            isMobile && showSideMenu && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Sidebar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                close: true\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\components\\\\Navbar.jsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\components\\\\Navbar.jsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this);\n}\n_s(Navbar, \"lizj8MgG3l0978Niv96WsaKN0Vs=\");\n_c = Navbar;\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL05hdmJhci5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQzZCO0FBQ0U7QUFDRztBQUNIO0FBRWE7QUFFN0IsU0FBU007O0lBQ3RCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNLLGNBQWNDLGdCQUFnQixHQUFHTiwrQ0FBUUEsQ0FBQztJQUVqREMsZ0RBQVNBLENBQUM7UUFDUixNQUFNTSxlQUFlO1lBQ25CLElBQUlDLE9BQU9DLFVBQVUsSUFBSSxLQUFLO2dCQUM1QkwsWUFBWTtZQUNkLE9BQU87Z0JBQ0xBLFlBQVk7WUFDZDtRQUNGO1FBRUEsZ0JBQWdCO1FBQ2hCRztRQUVBLHVDQUF1QztRQUN2Q0MsT0FBT0UsZ0JBQWdCLENBQUMsVUFBVUg7UUFFbEMsa0RBQWtEO1FBQ2xELE9BQU87WUFDTEMsT0FBT0csbUJBQW1CLENBQUMsVUFBVUo7UUFDdkM7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNSyxpQkFBaUI7UUFDckJOLGdCQUFnQixDQUFDRDtJQUNuQjtJQUVBLHFCQUNFLDhEQUFDUTtRQUNDQyxJQUFHO1FBQ0hDLFdBQVU7OzBCQUVWLDhEQUFDbEIsbURBQUtBO2dCQUFDbUIsS0FBS2xCLHFEQUFJQTtnQkFBRW1CLEtBQUk7Z0JBQU9DLE9BQU87Ozs7OztZQUNuQ2YseUJBQ0MsOERBQUNnQjtnQkFBT0osV0FBVTtnQkFBNkJLLFNBQVNSOzBCQUFnQjs7Ozs7cUNBRXhFLDhEQUFDUztnQkFBSU4sV0FBVTs7a0NBQ2IsOERBQUNuQixrREFBSUE7d0JBQUNtQixXQUFVO3dCQUFrQk8sTUFBSztrQ0FBSTs7Ozs7O2tDQUczQyw4REFBQzFCLGtEQUFJQTt3QkFBQ21CLFdBQVU7d0JBQWtCTyxNQUFLO2tDQUFXOzs7Ozs7a0NBR2xELDhEQUFDMUIsa0RBQUlBO3dCQUFDbUIsV0FBVTt3QkFBa0JPLE1BQUs7a0NBQ3JDLDRFQUFDSDs0QkFBT0osV0FBVTtzQ0FBb0M7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTzNEWixZQUFZRSw4QkFDYiw4REFBQ04sZ0RBQU9BO2dCQUFDd0IsS0FBSzs7Ozs7Ozs7Ozs7O0FBSXBCO0dBMUR3QnJCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL05hdmJhci5qc3g/NjBlMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IGxvZ28gZnJvbSBcIi4vU29jLWxvZ28uanBnXCI7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuL1NpZGViYXJcIlxyXG5cclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKCkge1xyXG4gIGNvbnN0IFtpc01vYmlsZSwgc2V0SXNNb2JpbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzaG93U2lkZU1lbnUsIHNldFNob3dTaWRlTWVudV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PiB7XHJcbiAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8PSA3NjgpIHtcclxuICAgICAgICBzZXRJc01vYmlsZSh0cnVlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRJc01vYmlsZShmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gSW5pdGlhbCBjaGVja1xyXG4gICAgaGFuZGxlUmVzaXplKCk7XHJcblxyXG4gICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIGZvciB3aW5kb3cgcmVzaXplXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xyXG5cclxuICAgIC8vIENsZWFudXAgdGhlIGV2ZW50IGxpc3RlbmVyIG9uIGNvbXBvbmVudCB1bm1vdW50XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZVNpZGVNZW51ID0gKCkgPT4ge1xyXG4gICAgc2V0U2hvd1NpZGVNZW51KCFzaG93U2lkZU1lbnUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2XHJcbiAgICAgIGlkPVwibmF2LWJhclwiXHJcbiAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBweC00IHB5LTIgYm9yZGVyLWItMiBib3JkZXItYi1ncmF5LTEwMCBcIlxyXG4gICAgPlxyXG4gICAgICA8SW1hZ2Ugc3JjPXtsb2dvfSBhbHQ9XCJEb2pvXCIgd2lkdGg9ezEwMH0+PC9JbWFnZT5cclxuICAgICAge2lzTW9iaWxlID8gKFxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGV4dC14bCBmb2N1czpvdXRsaW5lLW5vbmVcIiBvbkNsaWNrPXt0b2dnbGVTaWRlTWVudX0+JiM4ODAxOzwvYnV0dG9uPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLThcIj5cclxuICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImhvdmVyOnVuZGVybGluZVwiIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIEhvbWVcclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImhvdmVyOnVuZGVybGluZVwiIGhyZWY9XCIvdGlja2V0c1wiPlxyXG4gICAgICAgICAgICBUaWNrZXRzXHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJob3Zlcjp1bmRlcmxpbmVcIiBocmVmPVwiL2FkZFRpY2tldFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWdyZWVuLTYwMCBweS0zIHB4LTggdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgIEFkZCBUaWNrZXRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7aXNNb2JpbGUgJiYgc2hvd1NpZGVNZW51ICYmIChcclxuICAgICAgPFNpZGViYXIgY2xvc2UvPlxyXG4gICAgICApfVxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiTGluayIsIkltYWdlIiwibG9nbyIsIlNpZGViYXIiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk5hdmJhciIsImlzTW9iaWxlIiwic2V0SXNNb2JpbGUiLCJzaG93U2lkZU1lbnUiLCJzZXRTaG93U2lkZU1lbnUiLCJoYW5kbGVSZXNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0b2dnbGVTaWRlTWVudSIsIm5hdiIsImlkIiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJidXR0b24iLCJvbkNsaWNrIiwiZGl2IiwiaHJlZiIsImNsb3NlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Navbar.jsx\n"));

/***/ })

});