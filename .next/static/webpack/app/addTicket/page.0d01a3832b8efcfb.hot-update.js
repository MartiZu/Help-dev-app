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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AddTicketForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\nconst url = \"https://help-dev-data.onrender.com/\";\n\n\nfunction AddTicketForm() {\n    _s();\n    const [author, setAuthor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [room, setRoom] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"open\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const submitForm = async (e)=>{\n        e.preventDefault();\n        const newTicket = {\n            author,\n            title,\n            description,\n            room,\n            status\n        };\n        const response = await fetch(\"\".concat(url, \"tickets\"), {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(newTicket)\n        });\n        if (response.ok) {\n            router.refresh();\n            router.push(\"/tickets\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"flex flex-col justify-center items-center lg:w-1/2\",\n        onSubmit: submitForm,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-gray-100 w-full max-w-4xl p-4 text-2xl rounded-md\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-center mb-6 text-5xl\",\n                    children: \"New ticket form\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\addTicket\\\\AddTicketForm.jsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col lg:flex-row\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"lg:w-1/2 flex flex-col lg:pr-4 mb-4 lg:mb-0\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"mb-4 flex flex-col lg:flex-row items-center lg:items-start gap-3\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"Author\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\addTicket\\\\AddTicketForm.jsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\addTicket\\\\AddTicketForm.jsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: \"w-full lg:w-64 text-base h-8 px-3 rounded\",\n                                    type: \"text\",\n                                    required: true,\n                                    placeholder: \"Tell us your name\",\n                                    name: \"author\",\n                                    value: author,\n                                    onChange: (e)=>setAuthor(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\addTicket\\\\AddTicketForm.jsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"mb-4 flex flex-col lg:flex-row items-center lg:items-start gap-3\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                        children: \"Title\"\n                                    }, void 0, false)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\addTicket\\\\AddTicketForm.jsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: \"w-full lg:w-64 text-base h-8 px-3 rounded\",\n                                    type: \"text\",\n                                    required: true,\n                                    placeholder: \"Tell us the title of your problem\",\n                                    name: \"title\",\n                                    value: title,\n                                    onChange: (e)=>setTitle(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\addTicket\\\\AddTicketForm.jsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"flex flex-col lg:flex-row items-center lg:items-start gap-3\",\n                                    children: \"Room\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\addTicket\\\\AddTicketForm.jsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: \"w-full lg:w-64 text-base h-8 px-3 rounded\",\n                                    type: \"text\",\n                                    required: true,\n                                    placeholder: \"Your room number\",\n                                    name: \"room\",\n                                    value: room,\n                                    onChange: (e)=>setRoom(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\addTicket\\\\AddTicketForm.jsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\addTicket\\\\AddTicketForm.jsx\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"lg:w-1/2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                className: \"w-full h-40 lg:h-full text-base rounded p\",\n                                required: true,\n                                placeholder: \"Tell us about a problem\",\n                                name: \"description\",\n                                value: description,\n                                onChange: (e)=>setDescription(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\addTicket\\\\AddTicketForm.jsx\",\n                                lineNumber: 87,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\addTicket\\\\AddTicketForm.jsx\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\addTicket\\\\AddTicketForm.jsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center mt-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"bg-green-600 text-white mb-4 py-3 px-9\",\n                        children: \"Submit!\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\addTicket\\\\AddTicketForm.jsx\",\n                        lineNumber: 98,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\addTicket\\\\AddTicketForm.jsx\",\n                    lineNumber: 97,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\addTicket\\\\AddTicketForm.jsx\",\n            lineNumber: 45,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\addTicket\\\\AddTicketForm.jsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n_s(AddTicketForm, \"wlEeFIV9tCQ5cjsfFUnQPWzJ58o=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = AddTicketForm;\nvar _c;\n$RefreshReg$(_c, \"AddTicketForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hZGRUaWNrZXQvQWRkVGlja2V0Rm9ybS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSxNQUFNQSxNQUFNO0FBQ3FCO0FBQ1c7QUFFN0IsU0FBU0c7O0lBQ3RCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNLLE9BQU9DLFNBQVMsR0FBR04sK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDTyxhQUFhQyxlQUFlLEdBQUdSLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ1MsTUFBTUMsUUFBUSxHQUFHViwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNXLFFBQVFDLFVBQVUsR0FBR1osK0NBQVFBLENBQUM7SUFFckMsTUFBTWEsU0FBU1osMERBQVNBO0lBRXhCLE1BQU1hLGFBQWEsT0FBT0M7UUFDeEJBLEVBQUVDLGNBQWM7UUFFaEIsTUFBTUMsWUFBWTtZQUNoQmQ7WUFDQUU7WUFDQUU7WUFDQUU7WUFDQUU7UUFDRjtRQUVBLE1BQU1PLFdBQVcsTUFBTUMsTUFBTSxHQUFPLE9BQUpwQixLQUFJLFlBQVU7WUFDNUNxQixRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1lBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ1A7UUFDdkI7UUFFQSxJQUFJQyxTQUFTTyxFQUFFLEVBQUU7WUFDZlosT0FBT2EsT0FBTztZQUNkYixPQUFPYyxJQUFJLENBQUM7UUFDZDtJQUNGO0lBRUEscUJBQ0UsOERBQUNDO1FBQ0NDLFdBQVU7UUFDVkMsVUFBVWhCO2tCQUVWLDRFQUFDaUI7WUFBSUYsV0FBVTs7OEJBQ2IsOERBQUNHO29CQUFHSCxXQUFVOzhCQUE0Qjs7Ozs7OzhCQUMxQyw4REFBQ0U7b0JBQUlGLFdBQVU7O3NDQUNiLDhEQUFDRTs0QkFBSUYsV0FBVTs7OENBQ2IsOERBQUNJO29DQUFNSixXQUFVOzhDQUNmLDRFQUFDSztrREFBSzs7Ozs7Ozs7Ozs7OENBRU4sOERBQUNDO29DQUNDTixXQUFVO29DQUNWTyxNQUFLO29DQUNMQyxRQUFRO29DQUNSQyxhQUFZO29DQUNaQyxNQUFLO29DQUNMQyxPQUFPckM7b0NBQ1BzQyxVQUFVLENBQUMxQixJQUFNWCxVQUFVVyxFQUFFMkIsTUFBTSxDQUFDRixLQUFLOzs7Ozs7OENBRTdDLDhEQUFDUDtvQ0FBTUosV0FBVTs4Q0FDZjtrREFBRTs7Ozs7Ozs4Q0FFRiw4REFBQ007b0NBQ0NOLFdBQVU7b0NBQ1ZPLE1BQUs7b0NBQ0xDLFFBQVE7b0NBQ1JDLGFBQVk7b0NBQ1pDLE1BQUs7b0NBQ0xDLE9BQU9uQztvQ0FDUG9DLFVBQVUsQ0FBQzFCLElBQU1ULFNBQVNTLEVBQUUyQixNQUFNLENBQUNGLEtBQUs7Ozs7Ozs4Q0FFNUMsOERBQUNQO29DQUFNSixXQUFVOzhDQUE4RDs7Ozs7OzhDQUc3RSw4REFBQ007b0NBQ0NOLFdBQVU7b0NBQ1ZPLE1BQUs7b0NBQ0xDLFFBQVE7b0NBQ1JDLGFBQVk7b0NBQ1pDLE1BQUs7b0NBQ0xDLE9BQU8vQjtvQ0FDUGdDLFVBQVUsQ0FBQzFCLElBQU1MLFFBQVFLLEVBQUUyQixNQUFNLENBQUNGLEtBQUs7Ozs7Ozs7Ozs7OztzQ0FHN0MsOERBQUNUOzRCQUFJRixXQUFVO3NDQUNiLDRFQUFDYztnQ0FDQ2QsV0FBVTtnQ0FDVlEsUUFBUTtnQ0FDUkMsYUFBWTtnQ0FDWkMsTUFBSztnQ0FDTEMsT0FBT2pDO2dDQUNQa0MsVUFBVSxDQUFDMUIsSUFBTVAsZUFBZU8sRUFBRTJCLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBSXBELDhEQUFDVDtvQkFBSUYsV0FBVTs4QkFDYiw0RUFBQ2U7d0JBQ0NSLE1BQUs7d0JBQ0xQLFdBQVU7a0NBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPWDtHQXRHd0IzQjs7UUFPUEQsc0RBQVNBOzs7S0FQRkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2FkZFRpY2tldC9BZGRUaWNrZXRGb3JtLmpzeD84NzU2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5jb25zdCB1cmwgPSBcImh0dHBzOi8vaGVscC1kZXYtZGF0YS5vbnJlbmRlci5jb20vXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkZFRpY2tldEZvcm0oKSB7XHJcbiAgY29uc3QgW2F1dGhvciwgc2V0QXV0aG9yXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcm9vbSwgc2V0Um9vbV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoXCJvcGVuXCIpO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3Qgc3VibWl0Rm9ybSA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgbmV3VGlja2V0ID0ge1xyXG4gICAgICBhdXRob3IsXHJcbiAgICAgIHRpdGxlLFxyXG4gICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgcm9vbSxcclxuICAgICAgc3RhdHVzLFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3VybH10aWNrZXRzYCwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5ld1RpY2tldCksXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgcm91dGVyLnJlZnJlc2goKTtcclxuICAgICAgcm91dGVyLnB1c2goXCIvdGlja2V0c1wiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm1cclxuICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbGc6dy0xLzJcIlxyXG4gICAgICBvblN1Ym1pdD17c3VibWl0Rm9ybX1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTEwMCB3LWZ1bGwgbWF4LXctNHhsIHAtNCB0ZXh0LTJ4bCByb3VuZGVkLW1kXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTYgdGV4dC01eGxcIj5OZXcgdGlja2V0IGZvcm08L2gxPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzp3LTEvMiBmbGV4IGZsZXgtY29sIGxnOnByLTQgbWItNCBsZzptYi0wXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtYi00IGZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgaXRlbXMtY2VudGVyIGxnOml0ZW1zLXN0YXJ0IGdhcC0zXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4+QXV0aG9yPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGxnOnctNjQgdGV4dC1iYXNlIGgtOCBweC0zIHJvdW5kZWRcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGVsbCB1cyB5b3VyIG5hbWVcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImF1dGhvclwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17YXV0aG9yfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRBdXRob3IoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtYi00IGZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgaXRlbXMtY2VudGVyIGxnOml0ZW1zLXN0YXJ0IGdhcC0zXCI+XHJcbiAgICAgICAgICAgICAgPD5UaXRsZTwvPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGxnOnctNjQgdGV4dC1iYXNlIGgtOCBweC0zIHJvdW5kZWRcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGVsbCB1cyB0aGUgdGl0bGUgb2YgeW91ciBwcm9ibGVtXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGl0bGV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyBpdGVtcy1jZW50ZXIgbGc6aXRlbXMtc3RhcnQgZ2FwLTNcIj5cclxuICAgICAgICAgICAgICBSb29tXHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgbGc6dy02NCB0ZXh0LWJhc2UgaC04IHB4LTMgcm91bmRlZFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIHJvb20gbnVtYmVyXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJyb29tXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtyb29tfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSb29tKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOnctMS8yXCI+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLTQwIGxnOmgtZnVsbCB0ZXh0LWJhc2Ugcm91bmRlZCBwXCJcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGVsbCB1cyBhYm91dCBhIHByb2JsZW1cIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RGVzY3JpcHRpb24oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG10LTRcIj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyZWVuLTYwMCB0ZXh0LXdoaXRlIG1iLTQgcHktMyBweC05XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgU3VibWl0IVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVybCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiQWRkVGlja2V0Rm9ybSIsImF1dGhvciIsInNldEF1dGhvciIsInRpdGxlIiwic2V0VGl0bGUiLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwicm9vbSIsInNldFJvb20iLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJyb3V0ZXIiLCJzdWJtaXRGb3JtIiwiZSIsInByZXZlbnREZWZhdWx0IiwibmV3VGlja2V0IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwicmVmcmVzaCIsInB1c2giLCJmb3JtIiwiY2xhc3NOYW1lIiwib25TdWJtaXQiLCJkaXYiLCJoMSIsImxhYmVsIiwic3BhbiIsImlucHV0IiwidHlwZSIsInJlcXVpcmVkIiwicGxhY2Vob2xkZXIiLCJuYW1lIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInRleHRhcmVhIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/addTicket/AddTicketForm.jsx\n"));

/***/ })

});