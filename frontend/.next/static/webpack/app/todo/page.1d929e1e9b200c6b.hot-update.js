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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/ri */ \"(app-client)/./node_modules/react-icons/ri/index.esm.js\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bi */ \"(app-client)/./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-client)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ \"(app-client)/./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"(app-client)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* __next_internal_client_entry_do_not_use__  auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Page = ()=>{\n    _s();\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [todoText, setTodoText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [fetchSingleTodo, setFetchSingleTodo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const loggedEmail = js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"userEmail\");\n    const loggedin = js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"loggedin\");\n    console.log(\"USEr adata:::\", loggedin);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:5000/api/todos?email=\".concat(loggedEmail)).then((res)=>setTodos(res.data));\n    }, [\n        todos,\n        loggedEmail\n    ]);\n    const handleOnSubmit = async (e)=>{\n        e.preventDefault();\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"http://localhost:5000/api/add\", {\n            todoText,\n            email: loggedEmail\n        }).then(()=>{\n            // console.log(response.data)\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.success(\"Successfully Added\");\n            e.target.reset();\n        // setTodos([...todos, todoText])\n        }).catch(function(error) {\n            // console.log(error.response.data.message)\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.error(error.response.data.message);\n        });\n    };\n    const handleDelete = (e, id)=>{\n        e.preventDefault();\n        // console.log('Id::::', id);\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"][\"delete\"](\"http://localhost:5000/api/\".concat(id)).then((res)=>react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.success(res.data.message));\n    };\n    const passIdForUpdate = (id)=>{\n        // e.preventDefault();\n        // console.log('Id::::', id);\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:5000/api/todo/\".concat(id)).then((res)=>{\n            // console.log('Specific Data:::', res.data);\n            setFetchSingleTodo(res.data);\n        });\n    };\n    const handleOnUpdate = (e)=>{\n        e.preventDefault();\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].put(\"http://localhost:5000/api/\".concat(fetchSingleTodo._id), fetchSingleTodo).then((res)=>{\n            e.target.reset();\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.success(res.data.message);\n        }).catch(function(error) {\n            console.log(error);\n        // toast.error(error.response.data.message);\n        });\n    };\n    // console.log('Todos Text:::', fetchSingleTodo);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-1/2 bg-base-100 absolute top-8 left-1/4 p-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-center text-2xl font-semibold\",\n                children: \"Todo List\"\n            }, void 0, false, {\n                fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                lineNumber: 82,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"absolute top-0 right-0 rounded-l-none btn btn-active btn-ghost capitalize font-medium text-base\",\n                children: \"LogOut\"\n            }, void 0, false, {\n                fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                lineNumber: 85,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleOnSubmit,\n                className: \"relative w-5/6 mx-auto my-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Type your todo here\",\n                        onChange: (e)=>setTodoText(e.target.value),\n                        className: \"input input-bordered w-full focus:outline-none\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"absolute top-0 right-0 rounded-l-none btn btn-active btn-ghost capitalize font-medium text-base\",\n                        children: \"Add\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.Toaster, {}, void 0, false, {\n                        fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                        lineNumber: 108,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                lineNumber: 91,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"menu bg-sky-500/50 w-6/6 text-white mx-auto mt-8\",\n                children: todos.map((item)=>{\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"border border-gray-700\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"flex items-center justify-between py-0\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: item.todoText\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                                        lineNumber: 119,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-center justify-center gap-4\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"my-modal\",\n                                                className: \"btn btn-ghost hover:bg-transparent text-lg p-0\",\n                                                onClick: ()=>passIdForUpdate(item._id),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_5__.BiEdit, {}, void 0, false, {\n                                                    fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                                                    lineNumber: 128,\n                                                    columnNumber: 33\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                                                lineNumber: 123,\n                                                columnNumber: 29\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ri__WEBPACK_IMPORTED_MODULE_6__.RiDeleteBin6Line, {\n                                                onClick: (e)=>handleDelete(e, item._id)\n                                            }, void 0, false, {\n                                                fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                                                lineNumber: 130,\n                                                columnNumber: 37\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                                        lineNumber: 122,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                                lineNumber: 118,\n                                columnNumber: 29\n                            }, undefined)\n                        }, item === null || item === void 0 ? void 0 : item._id, false, {\n                            fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                            lineNumber: 114,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false);\n                })\n            }, void 0, false, {\n                fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                lineNumber: 111,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"checkbox\",\n                id: \"my-modal\",\n                className: \"modal-toggle\"\n            }, void 0, false, {\n                fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                lineNumber: 139,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"modal\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"modal-box\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: handleOnUpdate,\n                            className: \"relative w-5/6 mx-auto mt-6 mb-0\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    placeholder: fetchSingleTodo.todoText,\n                                    onChange: (e)=>setFetchSingleTodo({\n                                            ...fetchSingleTodo,\n                                            todoText: e.target.value\n                                        }),\n                                    className: \"input input-bordered w-full focus:outline-none\"\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                                    lineNumber: 146,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"modal-action\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"submit\",\n                                        className: \"absolute top-0 right-0 rounded-l-none btn btn-active btn-ghost capitalize font-medium text-base\",\n                                        children: \"Update\"\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                                        lineNumber: 153,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                                    lineNumber: 152,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                            lineNumber: 142,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"my-modal\",\n                            className: \"btn btn-sm btn-circle absolute right-2 top-2\",\n                            children: \"✕\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                            lineNumber: 162,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                    lineNumber: 141,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                lineNumber: 140,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n        lineNumber: 79,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Page, \"cyL2EvLGSxutXUwpW/Ns5kUERlo=\");\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QStKTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3RvZG8vcGFnZS50c3g/N2RlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUmlEZWxldGVCaW42TGluZSB9IGZyb20gJ3JlYWN0LWljb25zL3JpJztcclxuaW1wb3J0IHsgQmlFZGl0IH0gZnJvbSAncmVhY3QtaWNvbnMvYmknO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBUb2FzdGVyLCB0b2FzdCB9IGZyb20gJ3JlYWN0LWhvdC10b2FzdCc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcblxyXG5jb25zdCBQYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3RvZG9zLCBzZXRUb2Rvc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbdG9kb1RleHQsIHNldFRvZG9UZXh0XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtmZXRjaFNpbmdsZVRvZG8sIHNldEZldGNoU2luZ2xlVG9kb10gPSB1c2VTdGF0ZTxhbnk+KHt9KTtcclxuICAgIFxyXG5cclxuICAgIGNvbnN0IGxvZ2dlZEVtYWlsID0gQ29va2llcy5nZXQoXCJ1c2VyRW1haWxcIik7XHJcbiAgICBjb25zdCBsb2dnZWRpbiA9IENvb2tpZXMuZ2V0KFwibG9nZ2VkaW5cIik7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ1VTRXIgYWRhdGE6OjonLCBsb2dnZWRpbik7XHJcbiAgICBcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS90b2Rvcz9lbWFpbD0ke2xvZ2dlZEVtYWlsfWApXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHNldFRvZG9zKHJlcy5kYXRhKSlcclxuICAgIH0sW3RvZG9zLCBsb2dnZWRFbWFpbF0pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZU9uU3VibWl0ID0gYXN5bmMgKGU6YW55KSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL2FkZCcsIHsgdG9kb1RleHQsIGVtYWlsOiBsb2dnZWRFbWFpbCB9KVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKVxyXG4gICAgICAgICAgICAgICAgdG9hc3Quc3VjY2VzcygnU3VjY2Vzc2Z1bGx5IEFkZGVkJyk7XHJcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgLy8gc2V0VG9kb3MoWy4uLnRvZG9zLCB0b2RvVGV4dF0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSlcclxuICAgICAgICAgICAgICAgIHRvYXN0LmVycm9yKGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRGVsZXRlID0gKGU6YW55LCBpZDphbnkpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ0lkOjo6OicsIGlkKTtcclxuXHJcbiAgICAgICAgYXhpb3MuZGVsZXRlKGBodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpLyR7aWR9YClcclxuICAgICAgICAudGhlbigocmVzKSA9PiB0b2FzdC5zdWNjZXNzKHJlcy5kYXRhLm1lc3NhZ2UpKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwYXNzSWRGb3JVcGRhdGUgPSAoaWQ6YW55KSA9PiB7XHJcbiAgICAgICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdJZDo6OjonLCBpZCk7XHJcblxyXG4gICAgICAgIGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS90b2RvLyR7aWR9YClcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnU3BlY2lmaWMgRGF0YTo6OicsIHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgc2V0RmV0Y2hTaW5nbGVUb2RvKHJlcy5kYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVPblVwZGF0ZSA9IChlOmFueSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgYXhpb3MucHV0KGBodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpLyR7ZmV0Y2hTaW5nbGVUb2RvLl9pZH1gLCBmZXRjaFNpbmdsZVRvZG8pXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBlLnRhcmdldC5yZXNldCgpO1xyXG4gICAgICAgICAgICB0b2FzdC5zdWNjZXNzKHJlcy5kYXRhLm1lc3NhZ2UpXHJcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICAvLyB0b2FzdC5lcnJvcihlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBcclxuICAgIFxyXG4gICAgLy8gY29uc29sZS5sb2coJ1RvZG9zIFRleHQ6OjonLCBmZXRjaFNpbmdsZVRvZG8pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSd3LTEvMiBiZy1iYXNlLTEwMCBhYnNvbHV0ZSB0b3AtOCBsZWZ0LTEvNCBwLTYnXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciB0ZXh0LTJ4bCBmb250LXNlbWlib2xkJz5cclxuICAgICAgICAgICAgICAgIFRvZG8gTGlzdFxyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgcmlnaHQtMCByb3VuZGVkLWwtbm9uZSBidG4gYnRuLWFjdGl2ZSBidG4tZ2hvc3QgY2FwaXRhbGl6ZSBmb250LW1lZGl1bSB0ZXh0LWJhc2VcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBMb2dPdXRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZU9uU3VibWl0fVxyXG4gICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy01LzYgbXgtYXV0byBteS00XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgdG9kbyBoZXJlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUb2RvVGV4dChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQgaW5wdXQtYm9yZGVyZWQgdy1mdWxsIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAvPiBcclxuICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIHJpZ2h0LTAgcm91bmRlZC1sLW5vbmUgYnRuIGJ0bi1hY3RpdmUgYnRuLWdob3N0IGNhcGl0YWxpemUgZm9udC1tZWRpdW0gdGV4dC1iYXNlXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBBZGRcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgIDxUb2FzdGVyIC8+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZW51IGJnLXNreS01MDAvNTAgdy02LzYgdGV4dC13aGl0ZSBteC1hdXRvIG10LThcIj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2Rvcy5tYXAoKGl0ZW06IGFueSkgPT4gPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtPy5faWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2JvcmRlciBib3JkZXItZ3JheS03MDAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB5LTAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50b2RvVGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJteS1tb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1naG9zdCBob3ZlcjpiZy10cmFuc3BhcmVudCB0ZXh0LWxnIHAtMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcGFzc0lkRm9yVXBkYXRlKGl0ZW0uX2lkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJpRWRpdCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJpRGVsZXRlQmluNkxpbmUgb25DbGljaz17KGUpID0+IGhhbmRsZURlbGV0ZShlLCBpdGVtLl9pZCl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8Lz4pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgIHsvKiBNb2RhbCAgKi99IFxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwibXktbW9kYWxcIiBjbGFzc05hbWU9XCJtb2RhbC10b2dnbGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlT25VcGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LTUvNiBteC1hdXRvIG10LTYgbWItMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtmZXRjaFNpbmdsZVRvZG8udG9kb1RleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGZXRjaFNpbmdsZVRvZG8oey4uLmZldGNoU2luZ2xlVG9kbywgdG9kb1RleHQ6IGUudGFyZ2V0LnZhbHVlfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQgaW5wdXQtYm9yZGVyZWQgdy1mdWxsIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCByaWdodC0wIHJvdW5kZWQtbC1ub25lIGJ0biBidG4tYWN0aXZlIGJ0bi1naG9zdCBjYXBpdGFsaXplIGZvbnQtbWVkaXVtIHRleHQtYmFzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVcGRhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm15LW1vZGFsXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4tY2lyY2xlIGFic29sdXRlIHJpZ2h0LTIgdG9wLTJcIj7inJU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2U7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJSaURlbGV0ZUJpbjZMaW5lIiwiQmlFZGl0IiwiYXhpb3MiLCJUb2FzdGVyIiwidG9hc3QiLCJDb29raWVzIiwiUGFnZSIsInRvZG9zIiwic2V0VG9kb3MiLCJ0b2RvVGV4dCIsInNldFRvZG9UZXh0IiwiZmV0Y2hTaW5nbGVUb2RvIiwic2V0RmV0Y2hTaW5nbGVUb2RvIiwibG9nZ2VkRW1haWwiLCJnZXQiLCJsb2dnZWRpbiIsImNvbnNvbGUiLCJsb2ciLCJ0aGVuIiwicmVzIiwiZGF0YSIsImhhbmRsZU9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicG9zdCIsImVtYWlsIiwic3VjY2VzcyIsInRhcmdldCIsInJlc2V0IiwiY2F0Y2giLCJlcnJvciIsInJlc3BvbnNlIiwibWVzc2FnZSIsImhhbmRsZURlbGV0ZSIsImlkIiwiZGVsZXRlIiwicGFzc0lkRm9yVXBkYXRlIiwiaGFuZGxlT25VcGRhdGUiLCJwdXQiLCJfaWQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImJ1dHRvbiIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJ2YWx1ZSIsInVsIiwibWFwIiwiaXRlbSIsImxpIiwiYSIsInAiLCJsYWJlbCIsImh0bWxGb3IiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/app/todo/page.tsx\n"));

/***/ })

});