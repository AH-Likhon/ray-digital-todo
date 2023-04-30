"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/todo/page",{

/***/ "(app-client)/./src/app/todo/page.tsx":
/*!*******************************!*\
  !*** ./src/app/todo/page.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/ri */ \"(app-client)/./node_modules/react-icons/ri/index.esm.js\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bi */ \"(app-client)/./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-client)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ \"(app-client)/./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"(app-client)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* __next_internal_client_entry_do_not_use__  auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Page = ()=>{\n    _s();\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [todoText, setTodoText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [fetchSingleTodo, setFetchSingleTodo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const loggedEmail = js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"userEmail\");\n    // console.log('USEr adata:::', Cookies.get(\"userEmail\"));\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:5000/api/todos?email=\".concat(loggedEmail)).then((res)=>setTodos(res.data));\n    }, [\n        todos,\n        loggedEmail\n    ]);\n    const handleOnSubmit = async (e)=>{\n        e.preventDefault();\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"http://localhost:5000/api/add\", {\n            todoText,\n            email: loggedEmail\n        }).then(()=>{\n            // console.log(response.data)\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.success(\"Successfully Added\");\n            e.target.reset();\n        // setTodos([...todos, todoText])\n        }).catch(function(error) {\n            // console.log(error.response.data.message)\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.error(error.response.data.message);\n        });\n    };\n    const handleDelete = (e, id)=>{\n        e.preventDefault();\n        // console.log('Id::::', id);\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"][\"delete\"](\"http://localhost:5000/api/\".concat(id)).then((res)=>react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.success(res.data.message));\n    };\n    const passIdForUpdate = (id)=>{\n        // e.preventDefault();\n        // console.log('Id::::', id);\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:5000/api/todo/\".concat(id)).then((res)=>{\n            // console.log('Specific Data:::', res.data);\n            setFetchSingleTodo(res.data);\n        });\n    };\n    const handleOnUpdate = (e)=>{\n        e.preventDefault();\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].put(\"http://localhost:5000/api/\".concat(fetchSingleTodo._id), fetchSingleTodo).then((res)=>{\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.success(res.data.message);\n            e.target.reset();\n        }).catch(function(error) {\n            // console.log(error.response.data.message)\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.error(error.response.data.message);\n        });\n    };\n    // console.log('Todos Text:::', fetchSingleTodo);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-1/2 bg-base-100 absolute top-8 left-1/4 p-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-center text-2xl font-semibold\",\n                children: \"Todo List\"\n            }, void 0, false, {\n                fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                lineNumber: 81,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleOnSubmit,\n                className: \"relative w-5/6 mx-auto my-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Type your todo here\",\n                        onChange: (e)=>setTodoText(e.target.value),\n                        className: \"input input-bordered w-full focus:outline-none\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"absolute top-0 right-0 rounded-l-none btn btn-active btn-ghost capitalize font-medium text-base\",\n                        children: \"Add\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.Toaster, {}, void 0, false, {\n                        fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                lineNumber: 84,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"menu bg-sky-500/50 w-6/6 text-white mx-auto mt-8\",\n                children: todos.map((item)=>{\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"border border-gray-700\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"flex items-center justify-between py-0\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: item.todoText\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                                        lineNumber: 112,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-center justify-center gap-4\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"my-modal\",\n                                                className: \"btn btn-ghost hover:bg-transparent text-lg p-0\",\n                                                onClick: ()=>passIdForUpdate(item._id),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_5__.BiEdit, {}, void 0, false, {\n                                                    fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                                                    lineNumber: 121,\n                                                    columnNumber: 33\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                                                lineNumber: 116,\n                                                columnNumber: 29\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ri__WEBPACK_IMPORTED_MODULE_6__.RiDeleteBin6Line, {\n                                                onClick: (e)=>handleDelete(e, item._id)\n                                            }, void 0, false, {\n                                                fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                                                lineNumber: 124,\n                                                columnNumber: 37\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                                        lineNumber: 115,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                                lineNumber: 111,\n                                columnNumber: 29\n                            }, undefined)\n                        }, item === null || item === void 0 ? void 0 : item._id, false, {\n                            fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                            lineNumber: 107,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false);\n                })\n            }, void 0, false, {\n                fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                lineNumber: 104,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"checkbox\",\n                id: \"my-modal\",\n                className: \"modal-toggle\"\n            }, void 0, false, {\n                fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                lineNumber: 133,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"modal\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"modal-box\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: handleOnUpdate,\n                            className: \"relative w-5/6 mx-auto mt-6 mb-0\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    placeholder: fetchSingleTodo.todoText,\n                                    onChange: (e)=>setFetchSingleTodo({\n                                            ...fetchSingleTodo,\n                                            todoText: e.target.value\n                                        }),\n                                    className: \"input input-bordered w-full focus:outline-none\"\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                                    lineNumber: 140,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"modal-action\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"absolute top-0 right-0 rounded-l-none btn btn-active btn-ghost capitalize font-medium text-base\",\n                                        onClick: handleOnUpdate,\n                                        children: \"Update\"\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                                        lineNumber: 147,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                                    lineNumber: 146,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                            lineNumber: 136,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"my-modal\",\n                            className: \"btn btn-sm btn-circle absolute right-2 top-2\",\n                            children: \"✕\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                            lineNumber: 156,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                    lineNumber: 135,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                lineNumber: 134,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n        lineNumber: 78,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Page, \"cyL2EvLGSxutXUwpW/Ns5kUERlo=\");\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Li9zcmMvYXBwL3RvZG8vcGFnZS50c3g/N2RlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUmlEZWxldGVCaW42TGluZSB9IGZyb20gJ3JlYWN0LWljb25zL3JpJztcclxuaW1wb3J0IHsgQmlFZGl0IH0gZnJvbSAncmVhY3QtaWNvbnMvYmknO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBUb2FzdGVyLCB0b2FzdCB9IGZyb20gJ3JlYWN0LWhvdC10b2FzdCc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcblxyXG5jb25zdCBQYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3RvZG9zLCBzZXRUb2Rvc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbdG9kb1RleHQsIHNldFRvZG9UZXh0XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtmZXRjaFNpbmdsZVRvZG8sIHNldEZldGNoU2luZ2xlVG9kb10gPSB1c2VTdGF0ZTxhbnk+KHt9KTtcclxuICAgIFxyXG5cclxuICAgIGNvbnN0IGxvZ2dlZEVtYWlsID0gQ29va2llcy5nZXQoXCJ1c2VyRW1haWxcIik7XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coJ1VTRXIgYWRhdGE6OjonLCBDb29raWVzLmdldChcInVzZXJFbWFpbFwiKSk7XHJcbiAgICBcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS90b2Rvcz9lbWFpbD0ke2xvZ2dlZEVtYWlsfWApXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHNldFRvZG9zKHJlcy5kYXRhKSlcclxuICAgIH0sW3RvZG9zLCBsb2dnZWRFbWFpbF0pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZU9uU3VibWl0ID0gYXN5bmMgKGU6YW55KSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL2FkZCcsIHsgdG9kb1RleHQsIGVtYWlsOiBsb2dnZWRFbWFpbCB9KVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKVxyXG4gICAgICAgICAgICAgICAgdG9hc3Quc3VjY2VzcygnU3VjY2Vzc2Z1bGx5IEFkZGVkJyk7XHJcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgLy8gc2V0VG9kb3MoWy4uLnRvZG9zLCB0b2RvVGV4dF0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSlcclxuICAgICAgICAgICAgICAgIHRvYXN0LmVycm9yKGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRGVsZXRlID0gKGU6YW55LCBpZDphbnkpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ0lkOjo6OicsIGlkKTtcclxuXHJcbiAgICAgICAgYXhpb3MuZGVsZXRlKGBodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpLyR7aWR9YClcclxuICAgICAgICAudGhlbigocmVzKSA9PiB0b2FzdC5zdWNjZXNzKHJlcy5kYXRhLm1lc3NhZ2UpKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwYXNzSWRGb3JVcGRhdGUgPSAoaWQ6YW55KSA9PiB7XHJcbiAgICAgICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdJZDo6OjonLCBpZCk7XHJcblxyXG4gICAgICAgIGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS90b2RvLyR7aWR9YClcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnU3BlY2lmaWMgRGF0YTo6OicsIHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgc2V0RmV0Y2hTaW5nbGVUb2RvKHJlcy5kYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVPblVwZGF0ZSA9IChlOmFueSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgYXhpb3MucHV0KGBodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpLyR7ZmV0Y2hTaW5nbGVUb2RvLl9pZH1gLCBmZXRjaFNpbmdsZVRvZG8pXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICB0b2FzdC5zdWNjZXNzKHJlcy5kYXRhLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgIGUudGFyZ2V0LnJlc2V0KCk7XHJcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSlcclxuICAgICAgICAgICAgdG9hc3QuZXJyb3IoZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gXHJcbiAgICBcclxuICAgIC8vIGNvbnNvbGUubG9nKCdUb2RvcyBUZXh0Ojo6JywgZmV0Y2hTaW5nbGVUb2RvKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0ndy0xLzIgYmctYmFzZS0xMDAgYWJzb2x1dGUgdG9wLTggbGVmdC0xLzQgcC02J1xyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgdGV4dC0yeGwgZm9udC1zZW1pYm9sZCc+XHJcbiAgICAgICAgICAgICAgICBUb2RvIExpc3RcclxuICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVPblN1Ym1pdH1cclxuICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIHctNS82IG14LWF1dG8gbXktNFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIHRvZG8gaGVyZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VG9kb1RleHQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0IGlucHV0LWJvcmRlcmVkIHctZnVsbCBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgLz4gXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCByaWdodC0wIHJvdW5kZWQtbC1ub25lIGJ0biBidG4tYWN0aXZlIGJ0bi1naG9zdCBjYXBpdGFsaXplIGZvbnQtbWVkaXVtIHRleHQtYmFzZVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgQWRkXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8VG9hc3RlciAvPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVudSBiZy1za3ktNTAwLzUwIHctNi82IHRleHQtd2hpdGUgbXgtYXV0byBtdC04XCI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9kb3MubWFwKChpdGVtOiBhbnkpID0+IDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbT8uX2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdib3JkZXIgYm9yZGVyLWdyYXktNzAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBweS0wJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udG9kb1RleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC00Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwibXktbW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZ2hvc3QgaG92ZXI6YmctdHJhbnNwYXJlbnQgdGV4dC1sZyBwLTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHBhc3NJZEZvclVwZGF0ZShpdGVtLl9pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCaUVkaXQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8QmlFZGl0IG9uQ2xpY2s9e2UgPT4gc2V0TW9kYWwodHJ1ZSl9Lz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSaURlbGV0ZUJpbjZMaW5lIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVEZWxldGUoZSwgaXRlbS5faWQpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICB7LyogTW9kYWwgICovfSBcclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cIm15LW1vZGFsXCIgY2xhc3NOYW1lPVwibW9kYWwtdG9nZ2xlXCIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZU9uVXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy01LzYgbXgtYXV0byBtdC02IG1iLTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17ZmV0Y2hTaW5nbGVUb2RvLnRvZG9UZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RmV0Y2hTaW5nbGVUb2RvKHsuLi5mZXRjaFNpbmdsZVRvZG8sIHRvZG9UZXh0OiBlLnRhcmdldC52YWx1ZX0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0IGlucHV0LWJvcmRlcmVkIHctZnVsbCBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWFjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIHJpZ2h0LTAgcm91bmRlZC1sLW5vbmUgYnRuIGJ0bi1hY3RpdmUgYnRuLWdob3N0IGNhcGl0YWxpemUgZm9udC1tZWRpdW0gdGV4dC1iYXNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlT25VcGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVcGRhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm15LW1vZGFsXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4tY2lyY2xlIGFic29sdXRlIHJpZ2h0LTIgdG9wLTJcIj7inJU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2U7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJSaURlbGV0ZUJpbjZMaW5lIiwiQmlFZGl0IiwiYXhpb3MiLCJUb2FzdGVyIiwidG9hc3QiLCJDb29raWVzIiwiUGFnZSIsInRvZG9zIiwic2V0VG9kb3MiLCJ0b2RvVGV4dCIsInNldFRvZG9UZXh0IiwiZmV0Y2hTaW5nbGVUb2RvIiwic2V0RmV0Y2hTaW5nbGVUb2RvIiwibG9nZ2VkRW1haWwiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImhhbmRsZU9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicG9zdCIsImVtYWlsIiwic3VjY2VzcyIsInRhcmdldCIsInJlc2V0IiwiY2F0Y2giLCJlcnJvciIsInJlc3BvbnNlIiwibWVzc2FnZSIsImhhbmRsZURlbGV0ZSIsImlkIiwiZGVsZXRlIiwicGFzc0lkRm9yVXBkYXRlIiwiaGFuZGxlT25VcGRhdGUiLCJwdXQiLCJfaWQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJ2YWx1ZSIsImJ1dHRvbiIsInVsIiwibWFwIiwiaXRlbSIsImxpIiwiYSIsInAiLCJsYWJlbCIsImh0bWxGb3IiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/app/todo/page.tsx\n"));

/***/ })

});