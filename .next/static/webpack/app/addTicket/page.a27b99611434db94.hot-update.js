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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AddTicketForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\nconst url = \"https://help-dev-data.onrender.com/\";\n\n\nfunction AddTicketForm() {\n    _s();\n    const [author, setAuthor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [room, setRoom] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"open\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const submitForm = async (e)=>{\n        e.preventDefault();\n        const newTicket = {\n            author,\n            title,\n            description,\n            room,\n            status\n        };\n        const response = await fetch(\"\".concat(url, \"tickets\"), {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(newTicket)\n        });\n        if (response.ok) {\n            router.refresh();\n            router.push(\"/tickets\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"flex flex-row justify-center items-center mb-80\",\n        onSubmit: submitForm,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"boarder-radius:0.5rem bg-gray-100 w-full max-w-4xl h-full text-2xl\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    id: \"form-title\",\n                    className: \"text-center m-4 px-64 text-5xl\",\n                    children: \"New ticket form\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\addTicket\\\\AddTicketForm.jsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"tickets-form\",\n                    className: \"flex flex-row w-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            id: \"form-fields\",\n                            className: \"left m-4 w-1/2 flex flex-col place-content-between h-56\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-row items-center gap-3\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: \"Author\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\addTicket\\\\AddTicketForm.jsx\",\n                                                lineNumber: 57,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\addTicket\\\\AddTicketForm.jsx\",\n                                            lineNumber: 56,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            className: \"w-full text-base h-8 px-3 rounded\",\n                                            type: \"text\",\n                                            required: true,\n                                            placeholder: \"Tell us your name\",\n                                            name: \"author\",\n                                            value: author,\n                                            onChange: (e)=>setAuthor(e.target.value)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\addTicket\\\\AddTicketForm.jsx\",\n                                            lineNumber: 59,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\addTicket\\\\AddTicketForm.jsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"flex flex-row items-center gap-9\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"\",\n                                            children: \"Title\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\addTicket\\\\AddTicketForm.jsx\",\n                                            lineNumber: 70,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            className: \"w-full text-base h-8 px-3 rounded\",\n                                            type: \"text\",\n                                            required: true,\n                                            placeholder: \"Tell us the title of your problem\",\n                                            name: \"title\",\n                                            value: title,\n                                            onChange: (e)=>setTitle(e.target.value)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\addTicket\\\\AddTicketForm.jsx\",\n                                            lineNumber: 71,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\addTicket\\\\AddTicketForm.jsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"flex flex-row items-center gap-5\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"Room\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\addTicket\\\\AddTicketForm.jsx\",\n                                            lineNumber: 82,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            className: \"w-full text-base h-8 px-3 rounded\",\n                                            type: \"text\",\n                                            required: true,\n                                            placeholder: \"Your room number\",\n                                            name: \"room\",\n                                            value: room,\n                                            onChange: (e)=>setRoom(e.target.value)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\addTicket\\\\AddTicketForm.jsx\",\n                                            lineNumber: 83,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\addTicket\\\\AddTicketForm.jsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\addTicket\\\\AddTicketForm.jsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"right w-1/2 m-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                className: \"h-full w-full text-base rounded\",\n                                required: true,\n                                placeholder: \"Tell us about a problem\",\n                                name: \"description\",\n                                value: description,\n                                onChange: (e)=>setDescription(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\addTicket\\\\AddTicketForm.jsx\",\n                                lineNumber: 96,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\addTicket\\\\AddTicketForm.jsx\",\n                            lineNumber: 94,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\addTicket\\\\AddTicketForm.jsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row justify-center mt-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"bg-green-600 text-white mb-4 py-3 px-9\",\n                        children: \"Submit!\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\addTicket\\\\AddTicketForm.jsx\",\n                        lineNumber: 107,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\addTicket\\\\AddTicketForm.jsx\",\n                    lineNumber: 106,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\addTicket\\\\AddTicketForm.jsx\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\School of code\\\\SOC group practice\\\\My Project\\\\Public repo\\\\Help-dev next.js app\\\\Help-dev-app\\\\app\\\\addTicket\\\\AddTicketForm.jsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n_s(AddTicketForm, \"wlEeFIV9tCQ5cjsfFUnQPWzJ58o=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = AddTicketForm;\nvar _c;\n$RefreshReg$(_c, \"AddTicketForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hZGRUaWNrZXQvQWRkVGlja2V0Rm9ybS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSxNQUFNQSxNQUFNO0FBQ3FCO0FBQ1c7QUFFN0IsU0FBU0c7O0lBQ3RCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNLLE9BQU9DLFNBQVMsR0FBR04sK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDTyxhQUFhQyxlQUFlLEdBQUdSLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ1MsTUFBTUMsUUFBUSxHQUFHViwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNXLFFBQVFDLFVBQVUsR0FBR1osK0NBQVFBLENBQUM7SUFFckMsTUFBTWEsU0FBU1osMERBQVNBO0lBRXhCLE1BQU1hLGFBQWEsT0FBT0M7UUFDeEJBLEVBQUVDLGNBQWM7UUFFaEIsTUFBTUMsWUFBWTtZQUNoQmQ7WUFDQUU7WUFDQUU7WUFDQUU7WUFDQUU7UUFDRjtRQUVBLE1BQU1PLFdBQVcsTUFBTUMsTUFBTSxHQUFPLE9BQUpwQixLQUFJLFlBQVU7WUFDNUNxQixRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1lBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ1A7UUFDdkI7UUFFQSxJQUFJQyxTQUFTTyxFQUFFLEVBQUU7WUFDZlosT0FBT2EsT0FBTztZQUNkYixPQUFPYyxJQUFJLENBQUM7UUFDZDtJQUNGO0lBRUEscUJBQ0UsOERBQUNDO1FBQ0NDLFdBQVU7UUFDVkMsVUFBVWhCO2tCQUdWLDRFQUFDaUI7WUFBSUYsV0FBVTs7OEJBQ2IsOERBQUNHO29CQUFHQyxJQUFHO29CQUFhSixXQUFVOzhCQUFpQzs7Ozs7OzhCQUcvRCw4REFBQ0U7b0JBQUlFLElBQUc7b0JBQWVKLFdBQVU7O3NDQUMvQiw4REFBQ0U7NEJBQ0NFLElBQUc7NEJBQ0hKLFdBQVU7OzhDQUVWLDhEQUFDRTtvQ0FBSUYsV0FBVTs7c0RBQ2IsOERBQUNLO3NEQUNDLDRFQUFDQzswREFBRTs7Ozs7Ozs7Ozs7c0RBRUwsOERBQUNDOzRDQUNDUCxXQUFVOzRDQUNWUSxNQUFLOzRDQUNMQyxRQUFROzRDQUNSQyxhQUFZOzRDQUNaQyxNQUFLOzRDQUNMQyxPQUFPdEM7NENBQ1B1QyxVQUFVLENBQUMzQixJQUFNWCxVQUFVVyxFQUFFNEIsTUFBTSxDQUFDRixLQUFLOzs7Ozs7Ozs7Ozs7OENBRzdDLDhEQUFDUDtvQ0FBTUwsV0FBVTs7c0RBQ2YsOERBQUNNOzRDQUFFTixXQUFVO3NEQUFHOzs7Ozs7c0RBQ2hCLDhEQUFDTzs0Q0FDQ1AsV0FBVTs0Q0FDVlEsTUFBSzs0Q0FDTEMsUUFBUTs0Q0FDUkMsYUFBWTs0Q0FDWkMsTUFBSzs0Q0FDTEMsT0FBT3BDOzRDQUNQcUMsVUFBVSxDQUFDM0IsSUFBTVQsU0FBU1MsRUFBRTRCLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7Ozs7Ozs7OzhDQUc1Qyw4REFBQ1A7b0NBQU1MLFdBQVU7O3NEQUNmLDhEQUFDTTtzREFBRTs7Ozs7O3NEQUNILDhEQUFDQzs0Q0FDQ1AsV0FBVTs0Q0FDVlEsTUFBSzs0Q0FDTEMsUUFBUTs0Q0FDUkMsYUFBWTs0Q0FDWkMsTUFBSzs0Q0FDTEMsT0FBT2hDOzRDQUNQaUMsVUFBVSxDQUFDM0IsSUFBTUwsUUFBUUssRUFBRTRCLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUk3Qyw4REFBQ1Y7NEJBQUlGLFdBQVU7c0NBRWIsNEVBQUNlO2dDQUNDZixXQUFVO2dDQUNWUyxRQUFRO2dDQUNSQyxhQUFZO2dDQUNaQyxNQUFLO2dDQUNMQyxPQUFPbEM7Z0NBQ1BtQyxVQUFVLENBQUMzQixJQUFNUCxlQUFlTyxFQUFFNEIsTUFBTSxDQUFDRixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFJcEQsOERBQUNWO29CQUFJRixXQUFVOzhCQUNiLDRFQUFDZ0I7d0JBQ0NSLE1BQUs7d0JBQ0xSLFdBQVU7a0NBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPWDtHQS9Hd0IzQjs7UUFPUEQsc0RBQVNBOzs7S0FQRkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2FkZFRpY2tldC9BZGRUaWNrZXRGb3JtLmpzeD84NzU2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5jb25zdCB1cmwgPSBcImh0dHBzOi8vaGVscC1kZXYtZGF0YS5vbnJlbmRlci5jb20vXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkZFRpY2tldEZvcm0oKSB7XHJcbiAgY29uc3QgW2F1dGhvciwgc2V0QXV0aG9yXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcm9vbSwgc2V0Um9vbV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoXCJvcGVuXCIpO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3Qgc3VibWl0Rm9ybSA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgbmV3VGlja2V0ID0ge1xyXG4gICAgICBhdXRob3IsXHJcbiAgICAgIHRpdGxlLFxyXG4gICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgcm9vbSxcclxuICAgICAgc3RhdHVzLFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3VybH10aWNrZXRzYCwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5ld1RpY2tldCksXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgcm91dGVyLnJlZnJlc2goKTtcclxuICAgICAgcm91dGVyLnB1c2goXCIvdGlja2V0c1wiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm1cclxuICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbWItODBcIlxyXG4gICAgICBvblN1Ym1pdD17c3VibWl0Rm9ybX1cclxuICAgID5cclxuICAgICAgey8qIDxkaXY+PC9kaXY+ICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvYXJkZXItcmFkaXVzOjAuNXJlbSBiZy1ncmF5LTEwMCB3LWZ1bGwgbWF4LXctNHhsIGgtZnVsbCB0ZXh0LTJ4bFwiPlxyXG4gICAgICAgIDxoMSBpZD1cImZvcm0tdGl0bGVcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtLTQgcHgtNjQgdGV4dC01eGxcIj5cclxuICAgICAgICAgIE5ldyB0aWNrZXQgZm9ybVxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICAgPGRpdiBpZD1cInRpY2tldHMtZm9ybVwiIGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgdy1mdWxsXCI+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGlkPVwiZm9ybS1maWVsZHNcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJsZWZ0IG0tNCB3LTEvMiBmbGV4IGZsZXgtY29sIHBsYWNlLWNvbnRlbnQtYmV0d2VlbiBoLTU2XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgIDxwPkF1dGhvcjwvcD5cclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtYmFzZSBoLTggcHgtMyByb3VuZGVkXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRlbGwgdXMgeW91ciBuYW1lXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJhdXRob3JcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2F1dGhvcn1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QXV0aG9yKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGdhcC05XCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiXCI+VGl0bGU8L3A+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1iYXNlIGgtOCBweC0zIHJvdW5kZWRcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGVsbCB1cyB0aGUgdGl0bGUgb2YgeW91ciBwcm9ibGVtXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGl0bGV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIgZ2FwLTVcIj5cclxuICAgICAgICAgICAgICA8cD5Sb29tPC9wPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtYmFzZSBoLTggcHgtMyByb3VuZGVkXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgcm9vbSBudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInJvb21cIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Jvb219XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFJvb20oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHQgdy0xLzIgbS00XCI+XHJcbiAgICAgICAgICAgIHsvKiA8cD5EZXNjcmlwdGlvbjwvcD4gKi99XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtZnVsbCB3LWZ1bGwgdGV4dC1iYXNlIHJvdW5kZWRcIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUZWxsIHVzIGFib3V0IGEgcHJvYmxlbVwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXREZXNjcmlwdGlvbihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1jZW50ZXIgbXQtNFwiPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JlZW4tNjAwIHRleHQtd2hpdGUgbWItNCBweS0zIHB4LTlcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBTdWJtaXQhXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXJsIiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJBZGRUaWNrZXRGb3JtIiwiYXV0aG9yIiwic2V0QXV0aG9yIiwidGl0bGUiLCJzZXRUaXRsZSIsImRlc2NyaXB0aW9uIiwic2V0RGVzY3JpcHRpb24iLCJyb29tIiwic2V0Um9vbSIsInN0YXR1cyIsInNldFN0YXR1cyIsInJvdXRlciIsInN1Ym1pdEZvcm0iLCJlIiwicHJldmVudERlZmF1bHQiLCJuZXdUaWNrZXQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJyZWZyZXNoIiwicHVzaCIsImZvcm0iLCJjbGFzc05hbWUiLCJvblN1Ym1pdCIsImRpdiIsImgxIiwiaWQiLCJsYWJlbCIsInAiLCJpbnB1dCIsInR5cGUiLCJyZXF1aXJlZCIsInBsYWNlaG9sZGVyIiwibmFtZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ0ZXh0YXJlYSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/addTicket/AddTicketForm.jsx\n"));

/***/ })

});