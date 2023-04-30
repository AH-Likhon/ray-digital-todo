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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/ri */ \"(app-client)/./node_modules/react-icons/ri/index.esm.js\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bi */ \"(app-client)/./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-client)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ \"(app-client)/./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"(app-client)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* __next_internal_client_entry_do_not_use__  auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Page = ()=>{\n    _s();\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [todoText, setTodoText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [fetchSingleTodo, setFetchSingleTodo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const loggedEmail = js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"userEmail\");\n    const loggedin = js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"loggedin\");\n    // console.log('USEr adata:::', loggedin);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:5000/api/todos?email=\".concat(loggedEmail)).then((res)=>setTodos(res.data));\n    }, [\n        todos,\n        loggedEmail\n    ]);\n    const handleOnSubmit = async (e)=>{\n        e.preventDefault();\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"http://localhost:5000/api/add\", {\n            todoText,\n            email: loggedEmail\n        }).then(()=>{\n            // console.log(response.data)\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.success(\"Successfully Added\");\n            e.target.reset();\n        // setTodos([...todos, todoText])\n        }).catch(function(error) {\n            // console.log(error.response.data.message)\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.error(error.response.data.message);\n        });\n    };\n    const handleDelete = (e, id)=>{\n        e.preventDefault();\n        // console.log('Id::::', id);\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"][\"delete\"](\"http://localhost:5000/api/\".concat(id)).then((res)=>react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.success(res.data.message));\n    };\n    const passIdForUpdate = (id)=>{\n        // e.preventDefault();\n        // console.log('Id::::', id);\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:5000/api/todo/\".concat(id)).then((res)=>{\n            // console.log('Specific Data:::', res.data);\n            setFetchSingleTodo(res.data);\n        });\n    };\n    const handleOnUpdate = (e)=>{\n        e.preventDefault();\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].put(\"http://localhost:5000/api/\".concat(fetchSingleTodo._id), fetchSingleTodo).then((res)=>{\n            e.target.reset();\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.success(res.data.message);\n        }).catch(function(error) {\n            console.log(error);\n        // toast.error(error.response.data.message);\n        });\n    };\n    // console.log('Todos Text:::', fetchSingleTodo);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-1/2 bg-base-100 absolute top-8 left-1/4 p-6 relat\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-center text-2xl font-semibold\",\n                children: \"Todo List\"\n            }, void 0, false, {\n                fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                lineNumber: 82,\n                columnNumber: 13\n            }, undefined),\n            loggedin && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"absolute top-0 right-0 rounded-l-none btn btn-active btn-ghost capitalize font-medium text-base\",\n                children: \"LogOut\"\n            }, void 0, false, {\n                fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                lineNumber: 85,\n                columnNumber: 26\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleOnSubmit,\n                className: \"relative w-5/6 mx-auto my-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Type your todo here\",\n                        onChange: (e)=>setTodoText(e.target.value),\n                        className: \"input input-bordered w-full focus:outline-none\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"absolute top-0 right-0 rounded-l-none btn btn-active btn-ghost capitalize font-medium text-base\",\n                        children: \"Add\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.Toaster, {}, void 0, false, {\n                        fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                        lineNumber: 108,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                lineNumber: 91,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"menu bg-sky-500/50 w-6/6 text-white mx-auto mt-8\",\n                children: todos.map((item)=>{\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"border border-gray-700\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"flex items-center justify-between py-0\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: item.todoText\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                                        lineNumber: 119,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-center justify-center gap-4\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"my-modal\",\n                                                className: \"btn btn-ghost hover:bg-transparent text-lg p-0\",\n                                                onClick: ()=>passIdForUpdate(item._id),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_5__.BiEdit, {}, void 0, false, {\n                                                    fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                                                    lineNumber: 128,\n                                                    columnNumber: 33\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                                                lineNumber: 123,\n                                                columnNumber: 29\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ri__WEBPACK_IMPORTED_MODULE_6__.RiDeleteBin6Line, {\n                                                onClick: (e)=>handleDelete(e, item._id)\n                                            }, void 0, false, {\n                                                fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                                                lineNumber: 130,\n                                                columnNumber: 37\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                                        lineNumber: 122,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                                lineNumber: 118,\n                                columnNumber: 29\n                            }, undefined)\n                        }, item === null || item === void 0 ? void 0 : item._id, false, {\n                            fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                            lineNumber: 114,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false);\n                })\n            }, void 0, false, {\n                fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                lineNumber: 111,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"checkbox\",\n                id: \"my-modal\",\n                className: \"modal-toggle\"\n            }, void 0, false, {\n                fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                lineNumber: 139,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"modal\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"modal-box\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: handleOnUpdate,\n                            className: \"relative w-5/6 mx-auto mt-6 mb-0\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    placeholder: fetchSingleTodo.todoText,\n                                    onChange: (e)=>setFetchSingleTodo({\n                                            ...fetchSingleTodo,\n                                            todoText: e.target.value\n                                        }),\n                                    className: \"input input-bordered w-full focus:outline-none\"\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                                    lineNumber: 146,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"modal-action\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"submit\",\n                                        className: \"absolute top-0 right-0 rounded-l-none btn btn-active btn-ghost capitalize font-medium text-base\",\n                                        children: \"Update\"\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                                        lineNumber: 153,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                                    lineNumber: 152,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                            lineNumber: 142,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"my-modal\",\n                            className: \"btn btn-sm btn-circle absolute right-2 top-2\",\n                            children: \"✕\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                            lineNumber: 162,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                    lineNumber: 141,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                lineNumber: 140,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n        lineNumber: 79,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Page, \"cyL2EvLGSxutXUwpW/Ns5kUERlo=\");\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC90b2RvL3BhZ2UudHN4PzdkZTciXSwic291cmNlc0NvbnRlbnQiOlsiXHJcblwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJpRGVsZXRlQmluNkxpbmUgfSBmcm9tICdyZWFjdC1pY29ucy9yaSc7XHJcbmltcG9ydCB7IEJpRWRpdCB9IGZyb20gJ3JlYWN0LWljb25zL2JpJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgVG9hc3RlciwgdG9hc3QgfSBmcm9tICdyZWFjdC1ob3QtdG9hc3QnO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5cclxuY29uc3QgUGFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFt0b2Rvcywgc2V0VG9kb3NdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3RvZG9UZXh0LCBzZXRUb2RvVGV4dF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZmV0Y2hTaW5nbGVUb2RvLCBzZXRGZXRjaFNpbmdsZVRvZG9dID0gdXNlU3RhdGU8YW55Pih7fSk7XHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBsb2dnZWRFbWFpbCA9IENvb2tpZXMuZ2V0KFwidXNlckVtYWlsXCIpO1xyXG4gICAgY29uc3QgbG9nZ2VkaW4gPSBDb29raWVzLmdldChcImxvZ2dlZGluXCIpO1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKCdVU0VyIGFkYXRhOjo6JywgbG9nZ2VkaW4pO1xyXG4gICAgXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdG9kb3M/ZW1haWw9JHtsb2dnZWRFbWFpbH1gKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiBzZXRUb2RvcyhyZXMuZGF0YSkpXHJcbiAgICB9LFt0b2RvcywgbG9nZ2VkRW1haWxdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVPblN1Ym1pdCA9IGFzeW5jIChlOmFueSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS9hZGQnLCB7IHRvZG9UZXh0LCBlbWFpbDogbG9nZ2VkRW1haWwgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSlcclxuICAgICAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoJ1N1Y2Nlc3NmdWxseSBBZGRlZCcpO1xyXG4gICAgICAgICAgICAgICAgZS50YXJnZXQucmVzZXQoKTtcclxuICAgICAgICAgICAgICAgIC8vIHNldFRvZG9zKFsuLi50b2RvcywgdG9kb1RleHRdKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgICB0b2FzdC5lcnJvcihlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZURlbGV0ZSA9IChlOmFueSwgaWQ6YW55KSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdJZDo6OjonLCBpZCk7XHJcblxyXG4gICAgICAgIGF4aW9zLmRlbGV0ZShgaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS8ke2lkfWApXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gdG9hc3Quc3VjY2VzcyhyZXMuZGF0YS5tZXNzYWdlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcGFzc0lkRm9yVXBkYXRlID0gKGlkOmFueSkgPT4ge1xyXG4gICAgICAgIC8vIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnSWQ6Ojo6JywgaWQpO1xyXG5cclxuICAgICAgICBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdG9kby8ke2lkfWApXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ1NwZWNpZmljIERhdGE6OjonLCByZXMuZGF0YSk7XHJcbiAgICAgICAgICAgIHNldEZldGNoU2luZ2xlVG9kbyhyZXMuZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlT25VcGRhdGUgPSAoZTphbnkpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGF4aW9zLnB1dChgaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS8ke2ZldGNoU2luZ2xlVG9kby5faWR9YCwgZmV0Y2hTaW5nbGVUb2RvKVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgZS50YXJnZXQucmVzZXQoKTtcclxuICAgICAgICAgICAgdG9hc3Quc3VjY2VzcyhyZXMuZGF0YS5tZXNzYWdlKVxyXG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgLy8gdG9hc3QuZXJyb3IoZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gXHJcbiAgICBcclxuICAgIC8vIGNvbnNvbGUubG9nKCdUb2RvcyBUZXh0Ojo6JywgZmV0Y2hTaW5nbGVUb2RvKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0ndy0xLzIgYmctYmFzZS0xMDAgYWJzb2x1dGUgdG9wLTggbGVmdC0xLzQgcC02IHJlbGF0J1xyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgdGV4dC0yeGwgZm9udC1zZW1pYm9sZCc+XHJcbiAgICAgICAgICAgICAgICBUb2RvIExpc3RcclxuICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAge2xvZ2dlZGluICYmIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCByaWdodC0wIHJvdW5kZWQtbC1ub25lIGJ0biBidG4tYWN0aXZlIGJ0bi1naG9zdCBjYXBpdGFsaXplIGZvbnQtbWVkaXVtIHRleHQtYmFzZVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIExvZ091dFxyXG4gICAgICAgICAgICA8L2J1dHRvbj59XHJcblxyXG4gICAgICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZU9uU3VibWl0fVxyXG4gICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy01LzYgbXgtYXV0byBteS00XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgdG9kbyBoZXJlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUb2RvVGV4dChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQgaW5wdXQtYm9yZGVyZWQgdy1mdWxsIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAvPiBcclxuICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIHJpZ2h0LTAgcm91bmRlZC1sLW5vbmUgYnRuIGJ0bi1hY3RpdmUgYnRuLWdob3N0IGNhcGl0YWxpemUgZm9udC1tZWRpdW0gdGV4dC1iYXNlXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBBZGRcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgIDxUb2FzdGVyIC8+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZW51IGJnLXNreS01MDAvNTAgdy02LzYgdGV4dC13aGl0ZSBteC1hdXRvIG10LThcIj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2Rvcy5tYXAoKGl0ZW06IGFueSkgPT4gPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtPy5faWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2JvcmRlciBib3JkZXItZ3JheS03MDAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB5LTAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50b2RvVGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJteS1tb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1naG9zdCBob3ZlcjpiZy10cmFuc3BhcmVudCB0ZXh0LWxnIHAtMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcGFzc0lkRm9yVXBkYXRlKGl0ZW0uX2lkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJpRWRpdCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJpRGVsZXRlQmluNkxpbmUgb25DbGljaz17KGUpID0+IGhhbmRsZURlbGV0ZShlLCBpdGVtLl9pZCl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8Lz4pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgIHsvKiBNb2RhbCAgKi99IFxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwibXktbW9kYWxcIiBjbGFzc05hbWU9XCJtb2RhbC10b2dnbGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlT25VcGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LTUvNiBteC1hdXRvIG10LTYgbWItMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtmZXRjaFNpbmdsZVRvZG8udG9kb1RleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGZXRjaFNpbmdsZVRvZG8oey4uLmZldGNoU2luZ2xlVG9kbywgdG9kb1RleHQ6IGUudGFyZ2V0LnZhbHVlfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQgaW5wdXQtYm9yZGVyZWQgdy1mdWxsIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCByaWdodC0wIHJvdW5kZWQtbC1ub25lIGJ0biBidG4tYWN0aXZlIGJ0bi1naG9zdCBjYXBpdGFsaXplIGZvbnQtbWVkaXVtIHRleHQtYmFzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVcGRhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm15LW1vZGFsXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4tY2lyY2xlIGFic29sdXRlIHJpZ2h0LTIgdG9wLTJcIj7inJU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2U7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJSaURlbGV0ZUJpbjZMaW5lIiwiQmlFZGl0IiwiYXhpb3MiLCJUb2FzdGVyIiwidG9hc3QiLCJDb29raWVzIiwiUGFnZSIsInRvZG9zIiwic2V0VG9kb3MiLCJ0b2RvVGV4dCIsInNldFRvZG9UZXh0IiwiZmV0Y2hTaW5nbGVUb2RvIiwic2V0RmV0Y2hTaW5nbGVUb2RvIiwibG9nZ2VkRW1haWwiLCJnZXQiLCJsb2dnZWRpbiIsInRoZW4iLCJyZXMiLCJkYXRhIiwiaGFuZGxlT25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJwb3N0IiwiZW1haWwiLCJzdWNjZXNzIiwidGFyZ2V0IiwicmVzZXQiLCJjYXRjaCIsImVycm9yIiwicmVzcG9uc2UiLCJtZXNzYWdlIiwiaGFuZGxlRGVsZXRlIiwiaWQiLCJkZWxldGUiLCJwYXNzSWRGb3JVcGRhdGUiLCJoYW5kbGVPblVwZGF0ZSIsInB1dCIsIl9pZCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImJ1dHRvbiIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJ2YWx1ZSIsInVsIiwibWFwIiwiaXRlbSIsImxpIiwiYSIsInAiLCJsYWJlbCIsImh0bWxGb3IiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/app/todo/page.tsx\n"));

/***/ })

});