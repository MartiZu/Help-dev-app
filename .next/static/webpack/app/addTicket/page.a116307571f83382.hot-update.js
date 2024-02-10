"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/addTicket/page",{

/***/ "(app-pages-browser)/./app/addTicket/AddTicketForm.jsx":
/*!*****************************************!*\
  !*** ./app/addTicket/AddTicketForm.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AddTicketForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\nconst url = \"https://help-dev-data.onrender.com/\";\n\n\nfunction AddTicketForm() {\n    _s();\n    const [author, setAuthor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [room, setRoom] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"open\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const submitForm = async (e)=>{\n        e.preventDefault();\n        const newTicket = {\n            author,\n            title,\n            description,\n            room,\n            status\n        };\n        const response = await fetch(\"\".concat(url, \"tickets\"), {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(newTicket)\n        });\n        if (response.ok) {\n            router.refresh();\n            router.push(\"/tickets\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"flex flex-col justify-center items-center mb-8\",\n        onSubmit: submitForm,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-gray-100 w-full max-w-4xl p-4 text-2xl rounded-md\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-center mb-6 text-5xl\",\n                    children: \"New ticket form\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\addTicket\\\\AddTicketForm.jsx\",\n                    lineNumber: 43,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col lg:flex-row\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"lg:w-1/2 flex flex-col lg:pr-4 mb-4 lg:mb-0\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"mb-4 flex flex-col lg:flex-row items-center lg:items-start gap-3\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: \"Author\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\addTicket\\\\AddTicketForm.jsx\",\n                                            lineNumber: 47,\n                                            columnNumber: 11\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            className: \"w-full lg:w-64 text-base h-8 px-3 rounded\",\n                                            type: \"text\",\n                                            required: true,\n                                            placeholder: \"Tell us your name\",\n                                            name: \"author\",\n                                            value: author,\n                                            onChange: (e)=>setAuthor(e.target.value)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\addTicket\\\\AddTicketForm.jsx\",\n                                            lineNumber: 48,\n                                            columnNumber: 11\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\addTicket\\\\AddTicketForm.jsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 9\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"mb-4 flex flex-col lg:flex-row items-center lg:items-start gap-3\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: \"Title\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\addTicket\\\\AddTicketForm.jsx\",\n                                            lineNumber: 59,\n                                            columnNumber: 11\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            className: \"w-full lg:w-64 text-base h-8 px-3 rounded\",\n                                            type: \"text\",\n                                            required: true,\n                                            placeholder: \"Tell us the title of your problem\",\n                                            name: \"title\",\n                                            value: title,\n                                            onChange: (e)=>setTitle(e.target.value)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\addTicket\\\\AddTicketForm.jsx\",\n                                            lineNumber: 60,\n                                            columnNumber: 11\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\addTicket\\\\AddTicketForm.jsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 9\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"flex flex-col lg:flex-row items-center lg:items-start gap-3\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: \"Room\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\addTicket\\\\AddTicketForm.jsx\",\n                                            lineNumber: 71,\n                                            columnNumber: 11\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            className: \"w-full lg:w-64 text-base h-8 px-3 rounded\",\n                                            type: \"text\",\n                                            required: true,\n                                            placeholder: \"Your room number\",\n                                            name: \"room\",\n                                            value: room,\n                                            onChange: (e)=>setRoom(e.target.value)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\addTicket\\\\AddTicketForm.jsx\",\n                                            lineNumber: 72,\n                                            columnNumber: 11\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\addTicket\\\\AddTicketForm.jsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 9\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\addTicket\\\\AddTicketForm.jsx\",\n                            lineNumber: 45,\n                            columnNumber: 7\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"lg:w-1/2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                className: \"w-full h-40 lg:h-full text-base rounded\",\n                                required: true,\n                                placeholder: \"Tell us about a problem\",\n                                name: \"description\",\n                                value: description,\n                                onChange: (e)=>setDescription(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\addTicket\\\\AddTicketForm.jsx\",\n                                lineNumber: 84,\n                                columnNumber: 9\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\addTicket\\\\AddTicketForm.jsx\",\n                            lineNumber: 83,\n                            columnNumber: 7\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\addTicket\\\\AddTicketForm.jsx\",\n                    lineNumber: 44,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center mt-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"bg-green-600 text-white mb-4 py-3 px-9\",\n                        children: \"Submit!\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\addTicket\\\\AddTicketForm.jsx\",\n                        lineNumber: 95,\n                        columnNumber: 7\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\addTicket\\\\AddTicketForm.jsx\",\n                    lineNumber: 94,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\addTicket\\\\AddTicketForm.jsx\",\n            lineNumber: 42,\n            columnNumber: 3\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\addTicket\\\\AddTicketForm.jsx\",\n        lineNumber: 41,\n        columnNumber: 1\n    }, this);\n}\n_s(AddTicketForm, \"wlEeFIV9tCQ5cjsfFUnQPWzJ58o=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = AddTicketForm;\nvar _c;\n$RefreshReg$(_c, \"AddTicketForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hZGRUaWNrZXQvQWRkVGlja2V0Rm9ybS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSxNQUFNQSxNQUFNO0FBQ3FCO0FBQ1c7QUFFN0IsU0FBU0c7O0lBQ3RCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNLLE9BQU9DLFNBQVMsR0FBR04sK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDTyxhQUFhQyxlQUFlLEdBQUdSLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ1MsTUFBTUMsUUFBUSxHQUFHViwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNXLFFBQVFDLFVBQVUsR0FBR1osK0NBQVFBLENBQUM7SUFFckMsTUFBTWEsU0FBU1osMERBQVNBO0lBRXhCLE1BQU1hLGFBQWEsT0FBT0M7UUFDeEJBLEVBQUVDLGNBQWM7UUFFaEIsTUFBTUMsWUFBWTtZQUNoQmQ7WUFDQUU7WUFDQUU7WUFDQUU7WUFDQUU7UUFDRjtRQUVBLE1BQU1PLFdBQVcsTUFBTUMsTUFBTSxHQUFPLE9BQUpwQixLQUFJLFlBQVU7WUFDNUNxQixRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1lBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ1A7UUFDdkI7UUFFQSxJQUFJQyxTQUFTTyxFQUFFLEVBQUU7WUFDZlosT0FBT2EsT0FBTztZQUNkYixPQUFPYyxJQUFJLENBQUM7UUFDZDtJQUNGO0lBRUEscUJBQ0YsOERBQUNDO1FBQUtDLFdBQVU7UUFBaURDLFVBQVVoQjtrQkFDekUsNEVBQUNpQjtZQUFJRixXQUFVOzs4QkFDYiw4REFBQ0c7b0JBQUdILFdBQVU7OEJBQTRCOzs7Ozs7OEJBQzFDLDhEQUFDRTtvQkFBSUYsV0FBVTs7c0NBQ2IsOERBQUNFOzRCQUFJRixXQUFVOzs4Q0FDYiw4REFBQ0k7b0NBQU1KLFdBQVU7O3NEQUNmLDhEQUFDSztzREFBSzs7Ozs7O3NEQUNOLDhEQUFDQzs0Q0FDQ04sV0FBVTs0Q0FDVk8sTUFBSzs0Q0FDTEMsUUFBUTs0Q0FDUkMsYUFBWTs0Q0FDWkMsTUFBSzs0Q0FDTEMsT0FBT3JDOzRDQUNQc0MsVUFBVSxDQUFDMUIsSUFBTVgsVUFBVVcsRUFBRTJCLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7Ozs7Ozs7OzhDQUc3Qyw4REFBQ1A7b0NBQU1KLFdBQVU7O3NEQUNmLDhEQUFDSztzREFBSzs7Ozs7O3NEQUNOLDhEQUFDQzs0Q0FDQ04sV0FBVTs0Q0FDVk8sTUFBSzs0Q0FDTEMsUUFBUTs0Q0FDUkMsYUFBWTs0Q0FDWkMsTUFBSzs0Q0FDTEMsT0FBT25DOzRDQUNQb0MsVUFBVSxDQUFDMUIsSUFBTVQsU0FBU1MsRUFBRTJCLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7Ozs7Ozs7OzhDQUc1Qyw4REFBQ1A7b0NBQU1KLFdBQVU7O3NEQUNmLDhEQUFDSztzREFBSzs7Ozs7O3NEQUNOLDhEQUFDQzs0Q0FDQ04sV0FBVTs0Q0FDVk8sTUFBSzs0Q0FDTEMsUUFBUTs0Q0FDUkMsYUFBWTs0Q0FDWkMsTUFBSzs0Q0FDTEMsT0FBTy9COzRDQUNQZ0MsVUFBVSxDQUFDMUIsSUFBTUwsUUFBUUssRUFBRTJCLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUk3Qyw4REFBQ1Q7NEJBQUlGLFdBQVU7c0NBQ2IsNEVBQUNjO2dDQUNDZCxXQUFVO2dDQUNWUSxRQUFRO2dDQUNSQyxhQUFZO2dDQUNaQyxNQUFLO2dDQUNMQyxPQUFPakM7Z0NBQ1BrQyxVQUFVLENBQUMxQixJQUFNUCxlQUFlTyxFQUFFMkIsTUFBTSxDQUFDRixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFJcEQsOERBQUNUO29CQUFJRixXQUFVOzhCQUNiLDRFQUFDZTt3QkFDQ1IsTUFBSzt3QkFDTFAsV0FBVTtrQ0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9QO0dBbkd3QjNCOztRQU9QRCxzREFBU0E7OztLQVBGQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvYWRkVGlja2V0L0FkZFRpY2tldEZvcm0uanN4Pzg3NTYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmNvbnN0IHVybCA9IFwiaHR0cHM6Ly9oZWxwLWRldi1kYXRhLm9ucmVuZGVyLmNvbS9cIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkVGlja2V0Rm9ybSgpIHtcclxuICBjb25zdCBbYXV0aG9yLCBzZXRBdXRob3JdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtyb29tLCBzZXRSb29tXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZShcIm9wZW5cIik7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBzdWJtaXRGb3JtID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBuZXdUaWNrZXQgPSB7XHJcbiAgICAgIGF1dGhvcixcclxuICAgICAgdGl0bGUsXHJcbiAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICByb29tLFxyXG4gICAgICBzdGF0dXMsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7dXJsfXRpY2tldHNgLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobmV3VGlja2V0KSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICByb3V0ZXIucmVmcmVzaCgpO1xyXG4gICAgICByb3V0ZXIucHVzaChcIi90aWNrZXRzXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbjxmb3JtIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG1iLThcIiBvblN1Ym1pdD17c3VibWl0Rm9ybX0+XHJcbiAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTEwMCB3LWZ1bGwgbWF4LXctNHhsIHAtNCB0ZXh0LTJ4bCByb3VuZGVkLW1kXCI+XHJcbiAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItNiB0ZXh0LTV4bFwiPk5ldyB0aWNrZXQgZm9ybTwvaDE+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3dcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzp3LTEvMiBmbGV4IGZsZXgtY29sIGxnOnByLTQgbWItNCBsZzptYi0wXCI+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1iLTQgZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyBpdGVtcy1jZW50ZXIgbGc6aXRlbXMtc3RhcnQgZ2FwLTNcIj5cclxuICAgICAgICAgIDxzcGFuPkF1dGhvcjwvc3Bhbj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgbGc6dy02NCB0ZXh0LWJhc2UgaC04IHB4LTMgcm91bmRlZFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUZWxsIHVzIHlvdXIgbmFtZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJhdXRob3JcIlxyXG4gICAgICAgICAgICB2YWx1ZT17YXV0aG9yfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEF1dGhvcihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1iLTQgZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyBpdGVtcy1jZW50ZXIgbGc6aXRlbXMtc3RhcnQgZ2FwLTNcIj5cclxuICAgICAgICAgIDxzcGFuPlRpdGxlPC9zcGFuPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBsZzp3LTY0IHRleHQtYmFzZSBoLTggcHgtMyByb3VuZGVkXCJcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRlbGwgdXMgdGhlIHRpdGxlIG9mIHlvdXIgcHJvYmxlbVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt0aXRsZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgaXRlbXMtY2VudGVyIGxnOml0ZW1zLXN0YXJ0IGdhcC0zXCI+XHJcbiAgICAgICAgICA8c3Bhbj5Sb29tPC9zcGFuPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBsZzp3LTY0IHRleHQtYmFzZSBoLTggcHgtMyByb3VuZGVkXCJcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgcm9vbSBudW1iZXJcIlxyXG4gICAgICAgICAgICBuYW1lPVwicm9vbVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtyb29tfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFJvb20oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzp3LTEvMlwiPlxyXG4gICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtNDAgbGc6aC1mdWxsIHRleHQtYmFzZSByb3VuZGVkXCJcclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRlbGwgdXMgYWJvdXQgYSBwcm9ibGVtXCJcclxuICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG10LTRcIj5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImJnLWdyZWVuLTYwMCB0ZXh0LXdoaXRlIG1iLTQgcHktMyBweC05XCJcclxuICAgICAgPlxyXG4gICAgICAgIFN1Ym1pdCFcclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9mb3JtPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVybCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiQWRkVGlja2V0Rm9ybSIsImF1dGhvciIsInNldEF1dGhvciIsInRpdGxlIiwic2V0VGl0bGUiLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwicm9vbSIsInNldFJvb20iLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJyb3V0ZXIiLCJzdWJtaXRGb3JtIiwiZSIsInByZXZlbnREZWZhdWx0IiwibmV3VGlja2V0IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwicmVmcmVzaCIsInB1c2giLCJmb3JtIiwiY2xhc3NOYW1lIiwib25TdWJtaXQiLCJkaXYiLCJoMSIsImxhYmVsIiwic3BhbiIsImlucHV0IiwidHlwZSIsInJlcXVpcmVkIiwicGxhY2Vob2xkZXIiLCJuYW1lIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInRleHRhcmVhIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/addTicket/AddTicketForm.jsx\n"));

/***/ })

});