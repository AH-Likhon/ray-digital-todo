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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/ri */ \"(app-client)/./node_modules/react-icons/ri/index.esm.js\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bi */ \"(app-client)/./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-client)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ \"(app-client)/./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"(app-client)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* __next_internal_client_entry_do_not_use__  auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Page = ()=>{\n    _s();\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [todoText, setTodoText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [fetchSingleTodo, setFetchSingleTodo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const loggedEmail = js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"userEmail\");\n    // console.log('USEr adata:::', Cookies.get(\"userEmail\"));\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:5000/api/todos?email=\".concat(loggedEmail)).then((res)=>setTodos(res.data));\n    }, [\n        todos,\n        loggedEmail\n    ]);\n    const handleOnSubmit = async (e)=>{\n        e.preventDefault();\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"http://localhost:5000/api/add\", {\n            todoText,\n            email: loggedEmail\n        }).then(()=>{\n            // console.log(response.data)\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.success(\"Successfully Added\");\n            e.target.reset();\n        // setTodos([...todos, todoText])\n        }).catch(function(error) {\n            // console.log(error.response.data.message)\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.error(error.response.data.message);\n        });\n    };\n    const handleDelete = (e, id)=>{\n        e.preventDefault();\n        // console.log('Id::::', id);\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"][\"delete\"](\"http://localhost:5000/api/\".concat(id)).then((res)=>react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.success(res.data.message));\n    };\n    const passIdForUpdate = (id)=>{\n        // e.preventDefault();\n        // console.log('Id::::', id);\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:5000/api/todo/\".concat(id)).then((res)=>{\n            // console.log('Specific Data:::', res.data);\n            setFetchSingleTodo(res.data);\n        });\n    };\n    const handleOnUpdate = (e)=>{\n        e.preventDefault();\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].put(\"http://localhost:5000/api/\".concat(fetchSingleTodo._id), fetchSingleTodo).then((res)=>{\n            e.target.reset();\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.success(res.data.message);\n        }).catch(function(error) {\n            console.log(error);\n        // toast.error(error.response.data.message);\n        });\n    };\n    // console.log('Todos Text:::', fetchSingleTodo);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-1/2 bg-base-100 absolute top-8 left-1/4 p-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-center text-2xl font-semibold\",\n                children: \"Todo List\"\n            }, void 0, false, {\n                fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                lineNumber: 81,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"absolute top-0 right-0 rounded-l-none btn btn-active btn-ghost capitalize font-medium text-base\",\n                children: \"Update\"\n            }, void 0, false, {\n                fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                lineNumber: 84,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleOnSubmit,\n                className: \"relative w-5/6 mx-auto my-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Type your todo here\",\n                        onChange: (e)=>setTodoText(e.target.value),\n                        className: \"input input-bordered w-full focus:outline-none\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"absolute top-0 right-0 rounded-l-none btn btn-active btn-ghost capitalize font-medium text-base\",\n                        children: \"Add\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.Toaster, {}, void 0, false, {\n                        fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                        lineNumber: 106,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                lineNumber: 89,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"menu bg-sky-500/50 w-6/6 text-white mx-auto mt-8\",\n                children: todos.map((item)=>{\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"border border-gray-700\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"flex items-center justify-between py-0\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: item.todoText\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                                        lineNumber: 117,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-center justify-center gap-4\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"my-modal\",\n                                                className: \"btn btn-ghost hover:bg-transparent text-lg p-0\",\n                                                onClick: ()=>passIdForUpdate(item._id),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_5__.BiEdit, {}, void 0, false, {\n                                                    fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                                                    lineNumber: 126,\n                                                    columnNumber: 33\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                                                lineNumber: 121,\n                                                columnNumber: 29\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ri__WEBPACK_IMPORTED_MODULE_6__.RiDeleteBin6Line, {\n                                                onClick: (e)=>handleDelete(e, item._id)\n                                            }, void 0, false, {\n                                                fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                                                lineNumber: 128,\n                                                columnNumber: 37\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                                        lineNumber: 120,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                                lineNumber: 116,\n                                columnNumber: 29\n                            }, undefined)\n                        }, item === null || item === void 0 ? void 0 : item._id, false, {\n                            fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                            lineNumber: 112,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false);\n                })\n            }, void 0, false, {\n                fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                lineNumber: 109,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"checkbox\",\n                id: \"my-modal\",\n                className: \"modal-toggle\"\n            }, void 0, false, {\n                fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                lineNumber: 137,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"modal\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"modal-box\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: handleOnUpdate,\n                            className: \"relative w-5/6 mx-auto mt-6 mb-0\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    placeholder: fetchSingleTodo.todoText,\n                                    onChange: (e)=>setFetchSingleTodo({\n                                            ...fetchSingleTodo,\n                                            todoText: e.target.value\n                                        }),\n                                    className: \"input input-bordered w-full focus:outline-none\"\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                                    lineNumber: 144,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"modal-action\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"submit\",\n                                        className: \"absolute top-0 right-0 rounded-l-none btn btn-active btn-ghost capitalize font-medium text-base\",\n                                        children: \"Update\"\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                                        lineNumber: 151,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                                    lineNumber: 150,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                            lineNumber: 140,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"my-modal\",\n                            className: \"btn btn-sm btn-circle absolute right-2 top-2\",\n                            children: \"✕\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                            lineNumber: 160,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                    lineNumber: 139,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                lineNumber: 138,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n        lineNumber: 78,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Page, \"cyL2EvLGSxutXUwpW/Ns5kUERlo=\");\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ly9fTl9FLy4vc3JjL2FwcC90b2RvL3BhZ2UudHN4PzdkZTciXSwic291cmNlc0NvbnRlbnQiOlsiXHJcblwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJpRGVsZXRlQmluNkxpbmUgfSBmcm9tICdyZWFjdC1pY29ucy9yaSc7XHJcbmltcG9ydCB7IEJpRWRpdCB9IGZyb20gJ3JlYWN0LWljb25zL2JpJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgVG9hc3RlciwgdG9hc3QgfSBmcm9tICdyZWFjdC1ob3QtdG9hc3QnO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5cclxuY29uc3QgUGFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFt0b2Rvcywgc2V0VG9kb3NdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3RvZG9UZXh0LCBzZXRUb2RvVGV4dF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZmV0Y2hTaW5nbGVUb2RvLCBzZXRGZXRjaFNpbmdsZVRvZG9dID0gdXNlU3RhdGU8YW55Pih7fSk7XHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBsb2dnZWRFbWFpbCA9IENvb2tpZXMuZ2V0KFwidXNlckVtYWlsXCIpO1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKCdVU0VyIGFkYXRhOjo6JywgQ29va2llcy5nZXQoXCJ1c2VyRW1haWxcIikpO1xyXG4gICAgXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdG9kb3M/ZW1haWw9JHtsb2dnZWRFbWFpbH1gKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiBzZXRUb2RvcyhyZXMuZGF0YSkpXHJcbiAgICB9LFt0b2RvcywgbG9nZ2VkRW1haWxdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVPblN1Ym1pdCA9IGFzeW5jIChlOmFueSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS9hZGQnLCB7IHRvZG9UZXh0LCBlbWFpbDogbG9nZ2VkRW1haWwgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSlcclxuICAgICAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoJ1N1Y2Nlc3NmdWxseSBBZGRlZCcpO1xyXG4gICAgICAgICAgICAgICAgZS50YXJnZXQucmVzZXQoKTtcclxuICAgICAgICAgICAgICAgIC8vIHNldFRvZG9zKFsuLi50b2RvcywgdG9kb1RleHRdKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgICB0b2FzdC5lcnJvcihlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZURlbGV0ZSA9IChlOmFueSwgaWQ6YW55KSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdJZDo6OjonLCBpZCk7XHJcblxyXG4gICAgICAgIGF4aW9zLmRlbGV0ZShgaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS8ke2lkfWApXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gdG9hc3Quc3VjY2VzcyhyZXMuZGF0YS5tZXNzYWdlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcGFzc0lkRm9yVXBkYXRlID0gKGlkOmFueSkgPT4ge1xyXG4gICAgICAgIC8vIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnSWQ6Ojo6JywgaWQpO1xyXG5cclxuICAgICAgICBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdG9kby8ke2lkfWApXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ1NwZWNpZmljIERhdGE6OjonLCByZXMuZGF0YSk7XHJcbiAgICAgICAgICAgIHNldEZldGNoU2luZ2xlVG9kbyhyZXMuZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlT25VcGRhdGUgPSAoZTphbnkpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGF4aW9zLnB1dChgaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS8ke2ZldGNoU2luZ2xlVG9kby5faWR9YCwgZmV0Y2hTaW5nbGVUb2RvKVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgZS50YXJnZXQucmVzZXQoKTtcclxuICAgICAgICAgICAgdG9hc3Quc3VjY2VzcyhyZXMuZGF0YS5tZXNzYWdlKVxyXG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgLy8gdG9hc3QuZXJyb3IoZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gXHJcbiAgICBcclxuICAgIC8vIGNvbnNvbGUubG9nKCdUb2RvcyBUZXh0Ojo6JywgZmV0Y2hTaW5nbGVUb2RvKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0ndy0xLzIgYmctYmFzZS0xMDAgYWJzb2x1dGUgdG9wLTggbGVmdC0xLzQgcC02J1xyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgdGV4dC0yeGwgZm9udC1zZW1pYm9sZCc+XHJcbiAgICAgICAgICAgICAgICBUb2RvIExpc3RcclxuICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgcmlnaHQtMCByb3VuZGVkLWwtbm9uZSBidG4gYnRuLWFjdGl2ZSBidG4tZ2hvc3QgY2FwaXRhbGl6ZSBmb250LW1lZGl1bSB0ZXh0LWJhc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXBkYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlT25TdWJtaXR9XHJcbiAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LTUvNiBteC1hdXRvIG15LTRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciB0b2RvIGhlcmVcIiBcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRvZG9UZXh0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBpbnB1dC1ib3JkZXJlZCB3LWZ1bGwgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgIC8+IFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPSdzdWJtaXQnXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgcmlnaHQtMCByb3VuZGVkLWwtbm9uZSBidG4gYnRuLWFjdGl2ZSBidG4tZ2hvc3QgY2FwaXRhbGl6ZSBmb250LW1lZGl1bSB0ZXh0LWJhc2VcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEFkZFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgPFRvYXN0ZXIgLz5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lbnUgYmctc2t5LTUwMC81MCB3LTYvNiB0ZXh0LXdoaXRlIG14LWF1dG8gbXQtOFwiPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvZG9zLm1hcCgoaXRlbTogYW55KSA9PiA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0/Ll9pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYm9yZGVyIGJvcmRlci1ncmF5LTcwMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHktMCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnRvZG9UZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtNCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cIm15LW1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWdob3N0IGhvdmVyOmJnLXRyYW5zcGFyZW50IHRleHQtbGcgcC0wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwYXNzSWRGb3JVcGRhdGUoaXRlbS5faWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmlFZGl0IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmlEZWxldGVCaW42TGluZSBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlRGVsZXRlKGUsIGl0ZW0uX2lkKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgey8qIE1vZGFsICAqL30gXHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJteS1tb2RhbFwiIGNsYXNzTmFtZT1cIm1vZGFsLXRvZ2dsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVPblVwZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIHctNS82IG14LWF1dG8gbXQtNiBtYi0wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2ZldGNoU2luZ2xlVG9kby50b2RvVGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZldGNoU2luZ2xlVG9kbyh7Li4uZmV0Y2hTaW5nbGVUb2RvLCB0b2RvVGV4dDogZS50YXJnZXQudmFsdWV9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBpbnB1dC1ib3JkZXJlZCB3LWZ1bGwgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1hY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdzdWJtaXQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIHJpZ2h0LTAgcm91bmRlZC1sLW5vbmUgYnRuIGJ0bi1hY3RpdmUgYnRuLWdob3N0IGNhcGl0YWxpemUgZm9udC1tZWRpdW0gdGV4dC1iYXNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVwZGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibXktbW9kYWxcIiBjbGFzc05hbWU9XCJidG4gYnRuLXNtIGJ0bi1jaXJjbGUgYWJzb2x1dGUgcmlnaHQtMiB0b3AtMlwiPuKclTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlJpRGVsZXRlQmluNkxpbmUiLCJCaUVkaXQiLCJheGlvcyIsIlRvYXN0ZXIiLCJ0b2FzdCIsIkNvb2tpZXMiLCJQYWdlIiwidG9kb3MiLCJzZXRUb2RvcyIsInRvZG9UZXh0Iiwic2V0VG9kb1RleHQiLCJmZXRjaFNpbmdsZVRvZG8iLCJzZXRGZXRjaFNpbmdsZVRvZG8iLCJsb2dnZWRFbWFpbCIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwiaGFuZGxlT25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJwb3N0IiwiZW1haWwiLCJzdWNjZXNzIiwidGFyZ2V0IiwicmVzZXQiLCJjYXRjaCIsImVycm9yIiwicmVzcG9uc2UiLCJtZXNzYWdlIiwiaGFuZGxlRGVsZXRlIiwiaWQiLCJkZWxldGUiLCJwYXNzSWRGb3JVcGRhdGUiLCJoYW5kbGVPblVwZGF0ZSIsInB1dCIsIl9pZCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImJ1dHRvbiIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJ2YWx1ZSIsInVsIiwibWFwIiwiaXRlbSIsImxpIiwiYSIsInAiLCJsYWJlbCIsImh0bWxGb3IiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/app/todo/page.tsx\n"));

/***/ })

});