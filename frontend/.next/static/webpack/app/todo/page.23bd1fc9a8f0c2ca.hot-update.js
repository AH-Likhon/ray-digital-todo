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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ri */ \"(app-client)/./node_modules/react-icons/ri/index.esm.js\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/bi */ \"(app-client)/./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-client)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ \"(app-client)/./node_modules/react-hot-toast/dist/index.mjs\");\n/* __next_internal_client_entry_do_not_use__  auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Page = ()=>{\n    _s();\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [todoText, setTodoText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [modal, setModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [fetchSingleTodo, setFetchSingleTodo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://localhost:5000/api/todos\").then((res)=>setTodos(res.data));\n    }, [\n        todos\n    ]);\n    const handleOnSubmit = async (e)=>{\n        e.preventDefault();\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://localhost:5000/api/add\", {\n            todoText\n        }).then(()=>{\n            // console.log(response.data)\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.success(\"Successfully Added\");\n            e.target.reset();\n        // setTodos([...todos, todoText])\n        }).catch(function(error) {\n            // console.log(error.response.data.message)\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.error(error.response.data.message);\n        });\n    };\n    const handleDelete = (e, id)=>{\n        e.preventDefault();\n        // console.log('Id::::', id);\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"][\"delete\"](\"http://localhost:5000/api/\".concat(id)).then((res)=>react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.success(res.data.message));\n    };\n    const passIdForUpdate = (id)=>{\n        // e.preventDefault();\n        console.log(\"Id::::\", id);\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://localhost:5000/api/todo/\".concat(id)).then((res)=>{\n            // console.log('Specific Data:::', res.data);\n            setFetchSingleTodo(res.data.todoText);\n        });\n    // axios.put(`http://localhost:5000/api/${id}`)\n    // .then((res) => toast.success(res.data.message));\n    };\n    console.log(\"Todos Text:::\", fetchS);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-1/2 bg-base-100 absolute top-8 left-1/4 p-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-center text-2xl font-semibold\",\n                children: \"Todo List\"\n            }, void 0, false, {\n                fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                lineNumber: 65,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleOnSubmit,\n                className: \"relative w-5/6 mx-auto my-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Type your todo here\",\n                        onChange: (e)=>setTodoText(e.target.value),\n                        className: \"input input-bordered w-full focus:outline-none\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"absolute top-0 right-0 rounded-l-none btn btn-active btn-ghost capitalize font-medium text-base\",\n                        children: \"Add\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.Toaster, {}, void 0, false, {\n                        fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                lineNumber: 68,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"menu bg-sky-500/50 w-6/6 text-white mx-auto mt-8\",\n                children: todos.map((item)=>{\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"hover:bg-transparent flex items-center justify-between\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: item.todoText\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                                        lineNumber: 93,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-center justify-center gap-4\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"my-modal\",\n                                                className: \"btn btn-ghost hover:bg-transparent text-lg p-0\",\n                                                onClick: ()=>passIdForUpdate(item._id),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_4__.BiEdit, {}, void 0, false, {\n                                                    fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                                                    lineNumber: 102,\n                                                    columnNumber: 33\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                                                lineNumber: 97,\n                                                columnNumber: 29\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ri__WEBPACK_IMPORTED_MODULE_5__.RiDeleteBin6Line, {\n                                                onClick: (e)=>handleDelete(e, item._id)\n                                            }, void 0, false, {\n                                                fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                                                lineNumber: 105,\n                                                columnNumber: 37\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                                        lineNumber: 96,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 29\n                            }, undefined)\n                        }, item === null || item === void 0 ? void 0 : item._id, false, {\n                            fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false);\n                })\n            }, void 0, false, {\n                fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                lineNumber: 88,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"checkbox\",\n                id: \"my-modal\",\n                className: \"modal-toggle\"\n            }, void 0, false, {\n                fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                lineNumber: 114,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"modal\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"modal-box\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        // onSubmit={handleOnSubmit}\n                        className: \"relative w-5/6 mx-auto my-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                placeholder: fetchSingleTodo,\n                                onChange: (e)=>setFetchSingleTodo({\n                                        ...fetchSingleTodo,\n                                        todoText: e.target.value\n                                    }),\n                                className: \"input input-bordered w-full focus:outline-none\"\n                            }, void 0, false, {\n                                fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                                lineNumber: 121,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"modal-action\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"my-modal\",\n                                    // type='submit'\n                                    className: \"absolute top-0 right-0 rounded-l-none btn btn-active btn-ghost capitalize font-medium text-base \",\n                                    children: \"Update\"\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                                    lineNumber: 128,\n                                    columnNumber: 33\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                                lineNumber: 127,\n                                columnNumber: 29\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                        lineNumber: 117,\n                        columnNumber: 25\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                    lineNumber: 116,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                lineNumber: 115,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n        lineNumber: 62,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Page, \"xwZ/pIGzrDPs5bMUtCbRT6J8mMY=\");\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC90b2RvL3BhZ2UudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFHbUQ7QUFDRDtBQUNWO0FBQ2Q7QUFDdUI7QUFFakQsTUFBTVEsT0FBTyxJQUFNOztJQUNmLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHUiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3JDLE1BQU0sQ0FBQ1MsVUFBVUMsWUFBWSxHQUFHViwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNXLE9BQU9DLFNBQVMsR0FBR1osK0NBQVFBLENBQUMsS0FBSztJQUN4QyxNQUFNLENBQUNhLGlCQUFpQkMsbUJBQW1CLEdBQUdkLCtDQUFRQSxDQUFNLENBQUM7SUFFN0RELGdEQUFTQSxDQUFDLElBQU07UUFDWkksaURBQVMsQ0FBQyxtQ0FDVGEsSUFBSSxDQUFDQyxDQUFBQSxNQUFPVCxTQUFTUyxJQUFJQyxJQUFJO0lBQ2xDLEdBQUU7UUFBQ1g7S0FBTTtJQUVULE1BQU1ZLGlCQUFpQixPQUFPQyxJQUFVO1FBQ3BDQSxFQUFFQyxjQUFjO1FBRWhCbEIsa0RBQVUsQ0FBQyxpQ0FBaUM7WUFBRU07UUFBUyxHQUNsRE8sSUFBSSxDQUFDLElBQU07WUFDUiw2QkFBNkI7WUFDN0JYLDBEQUFhLENBQUM7WUFDZGUsRUFBRUksTUFBTSxDQUFDQyxLQUFLO1FBQ2QsaUNBQWlDO1FBQ3JDLEdBQ0NDLEtBQUssQ0FBQyxTQUFVQyxLQUFLLEVBQUU7WUFDcEIsMkNBQTJDO1lBQzNDdEIsd0RBQVcsQ0FBQ3NCLE1BQU1DLFFBQVEsQ0FBQ1YsSUFBSSxDQUFDVyxPQUFPO1FBQzNDO0lBQ1I7SUFFQSxNQUFNQyxlQUFlLENBQUNWLEdBQU9XLEtBQVc7UUFDcENYLEVBQUVDLGNBQWM7UUFDaEIsNkJBQTZCO1FBRTdCbEIsdURBQVksQ0FBQyw2QkFBZ0MsT0FBSDRCLEtBQ3pDZixJQUFJLENBQUMsQ0FBQ0MsTUFBUVosMERBQWEsQ0FBQ1ksSUFBSUMsSUFBSSxDQUFDVyxPQUFPO0lBQ2pEO0lBRUEsTUFBTUksa0JBQWtCLENBQUNGLEtBQVc7UUFDaEMsc0JBQXNCO1FBQ3RCRyxRQUFRQyxHQUFHLENBQUMsVUFBVUo7UUFFdEI1QixpREFBUyxDQUFDLGtDQUFxQyxPQUFINEIsS0FDM0NmLElBQUksQ0FBQ0MsQ0FBQUEsTUFBTztZQUNULDZDQUE2QztZQUM3Q0gsbUJBQW1CRyxJQUFJQyxJQUFJLENBQUNULFFBQVE7UUFDeEM7SUFFQSwrQ0FBK0M7SUFDL0MsbURBQW1EO0lBQ3ZEO0lBRUF5QixRQUFRQyxHQUFHLENBQUMsaUJBQWlCQztJQUU3QixxQkFDSSw4REFBQ0M7UUFDR0MsV0FBVTs7MEJBRVYsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUFxQzs7Ozs7OzBCQUduRCw4REFBQ0U7Z0JBQ0FDLFVBQVV0QjtnQkFDVm1CLFdBQVU7O2tDQUVQLDhEQUFDSTt3QkFDR0MsTUFBSzt3QkFDTEMsYUFBWTt3QkFDWkMsVUFBVSxDQUFDekIsSUFBTVYsWUFBWVUsRUFBRUksTUFBTSxDQUFDc0IsS0FBSzt3QkFDM0NSLFdBQVU7Ozs7OztrQ0FFZCw4REFBQ1M7d0JBQ0dKLE1BQUs7d0JBQ0xMLFdBQVU7a0NBQ2I7Ozs7OztrQ0FJRCw4REFBQ2xDLG9EQUFPQTs7Ozs7Ozs7Ozs7MEJBR1osOERBQUM0QztnQkFBR1YsV0FBVTswQkFFTi9CLE1BQU0wQyxHQUFHLENBQUMsQ0FBQ0M7a0NBQWM7a0NBQ3JCLDRFQUFDQztzQ0FDRyw0RUFBQ0M7Z0NBQUVkLFdBQVU7O2tEQUNULDhEQUFDZTtrREFDSUgsS0FBS3pDLFFBQVE7Ozs7OztrREFFdEIsOERBQUM0Qjt3Q0FBSUMsV0FBVTs7MERBQ2YsOERBQUNnQjtnREFDR0MsU0FBUTtnREFDUmpCLFdBQVU7Z0RBQ1ZrQixTQUFTLElBQU12QixnQkFBZ0JpQixLQUFLTyxHQUFHOzBEQUV2Qyw0RUFBQ3ZELGtEQUFNQTs7Ozs7Ozs7OzswREFHSCw4REFBQ0QsNERBQWdCQTtnREFBQ3VELFNBQVMsQ0FBQ3BDLElBQU1VLGFBQWFWLEdBQUc4QixLQUFLTyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MkJBZDdEUCxpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLEtBQU1PLEdBQUc7Ozs7Ozs7Ozs7OzswQkF1QjFCLDhEQUFDZjtnQkFBTUMsTUFBSztnQkFBV1osSUFBRztnQkFBV08sV0FBVTs7Ozs7OzBCQUMvQyw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNEO29CQUFJQyxXQUFVOzhCQUNYLDRFQUFDRTt3QkFDRyw0QkFBNEI7d0JBQzVCRixXQUFVOzswQ0FFViw4REFBQ0k7Z0NBQ0dDLE1BQUs7Z0NBQ0xDLGFBQWEvQjtnQ0FDYmdDLFVBQVUsQ0FBQ3pCLElBQU1OLG1CQUFtQjt3Q0FBQyxHQUFHRCxlQUFlO3dDQUFFSixVQUFVVyxFQUFFSSxNQUFNLENBQUNzQixLQUFLO29DQUFBO2dDQUNqRlIsV0FBVTs7Ozs7OzBDQUVkLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FDWCw0RUFBQ2dCO29DQUNEQyxTQUFRO29DQUNKLGdCQUFnQjtvQ0FDaEJqQixXQUFVOzhDQUNiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXakM7R0FySU1oQztLQUFBQTtBQXVJTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3RvZG8vcGFnZS50c3g/N2RlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUmlEZWxldGVCaW42TGluZSB9IGZyb20gJ3JlYWN0LWljb25zL3JpJztcclxuaW1wb3J0IHsgQmlFZGl0IH0gZnJvbSAncmVhY3QtaWNvbnMvYmknO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBUb2FzdGVyLCB0b2FzdCB9IGZyb20gJ3JlYWN0LWhvdC10b2FzdCc7XHJcblxyXG5jb25zdCBQYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3RvZG9zLCBzZXRUb2Rvc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbdG9kb1RleHQsIHNldFRvZG9UZXh0XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFttb2RhbCwgc2V0TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2ZldGNoU2luZ2xlVG9kbywgc2V0RmV0Y2hTaW5nbGVUb2RvXSA9IHVzZVN0YXRlPGFueT4oe30pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3RvZG9zJylcclxuICAgICAgICAudGhlbihyZXMgPT4gc2V0VG9kb3MocmVzLmRhdGEpKVxyXG4gICAgfSxbdG9kb3NdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVPblN1Ym1pdCA9IGFzeW5jIChlOmFueSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS9hZGQnLCB7IHRvZG9UZXh0IH0pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpXHJcbiAgICAgICAgICAgICAgICB0b2FzdC5zdWNjZXNzKCdTdWNjZXNzZnVsbHkgQWRkZWQnKTtcclxuICAgICAgICAgICAgICAgIGUudGFyZ2V0LnJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICAvLyBzZXRUb2RvcyhbLi4udG9kb3MsIHRvZG9UZXh0XSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlKVxyXG4gICAgICAgICAgICAgICAgdG9hc3QuZXJyb3IoZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVEZWxldGUgPSAoZTphbnksIGlkOmFueSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnSWQ6Ojo6JywgaWQpO1xyXG5cclxuICAgICAgICBheGlvcy5kZWxldGUoYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvJHtpZH1gKVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHRvYXN0LnN1Y2Nlc3MocmVzLmRhdGEubWVzc2FnZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBhc3NJZEZvclVwZGF0ZSA9IChpZDphbnkpID0+IHtcclxuICAgICAgICAvLyBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0lkOjo6OicsIGlkKTtcclxuXHJcbiAgICAgICAgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3RvZG8vJHtpZH1gKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdTcGVjaWZpYyBEYXRhOjo6JywgcmVzLmRhdGEpO1xyXG4gICAgICAgICAgICBzZXRGZXRjaFNpbmdsZVRvZG8ocmVzLmRhdGEudG9kb1RleHQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBheGlvcy5wdXQoYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvJHtpZH1gKVxyXG4gICAgICAgIC8vIC50aGVuKChyZXMpID0+IHRvYXN0LnN1Y2Nlc3MocmVzLmRhdGEubWVzc2FnZSkpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZygnVG9kb3MgVGV4dDo6OicsIGZldGNoUyk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9J3ctMS8yIGJnLWJhc2UtMTAwIGFic29sdXRlIHRvcC04IGxlZnQtMS80IHAtNidcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQtY2VudGVyIHRleHQtMnhsIGZvbnQtc2VtaWJvbGQnPlxyXG4gICAgICAgICAgICAgICAgVG9kbyBMaXN0XHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlT25TdWJtaXR9XHJcbiAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LTUvNiBteC1hdXRvIG15LTRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciB0b2RvIGhlcmVcIiBcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRvZG9UZXh0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBpbnB1dC1ib3JkZXJlZCB3LWZ1bGwgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgIC8+IFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPSdzdWJtaXQnXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgcmlnaHQtMCByb3VuZGVkLWwtbm9uZSBidG4gYnRuLWFjdGl2ZSBidG4tZ2hvc3QgY2FwaXRhbGl6ZSBmb250LW1lZGl1bSB0ZXh0LWJhc2VcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEFkZFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgPFRvYXN0ZXIgLz5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lbnUgYmctc2t5LTUwMC81MCB3LTYvNiB0ZXh0LXdoaXRlIG14LWF1dG8gbXQtOFwiPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvZG9zLm1hcCgoaXRlbTogYW55KSA9PiA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpdGVtPy5faWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdob3ZlcjpiZy10cmFuc3BhcmVudCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50b2RvVGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJteS1tb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1naG9zdCBob3ZlcjpiZy10cmFuc3BhcmVudCB0ZXh0LWxnIHAtMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcGFzc0lkRm9yVXBkYXRlKGl0ZW0uX2lkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJpRWRpdCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxCaUVkaXQgb25DbGljaz17ZSA9PiBzZXRNb2RhbCh0cnVlKX0vPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJpRGVsZXRlQmluNkxpbmUgb25DbGljaz17KGUpID0+IGhhbmRsZURlbGV0ZShlLCBpdGVtLl9pZCl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8Lz4pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgIHsvKiBNb2RhbCAgKi99IFxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwibXktbW9kYWxcIiBjbGFzc05hbWU9XCJtb2RhbC10b2dnbGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBvblN1Ym1pdD17aGFuZGxlT25TdWJtaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LTUvNiBteC1hdXRvIG15LTRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17ZmV0Y2hTaW5nbGVUb2RvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RmV0Y2hTaW5nbGVUb2RvKHsuLi5mZXRjaFNpbmdsZVRvZG8sIHRvZG9UZXh0OiBlLnRhcmdldC52YWx1ZX0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0IGlucHV0LWJvcmRlcmVkIHctZnVsbCBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWFjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwibXktbW9kYWxcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdHlwZT0nc3VibWl0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCByaWdodC0wIHJvdW5kZWQtbC1ub25lIGJ0biBidG4tYWN0aXZlIGJ0bi1naG9zdCBjYXBpdGFsaXplIGZvbnQtbWVkaXVtIHRleHQtYmFzZSBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXBkYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2U7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJSaURlbGV0ZUJpbjZMaW5lIiwiQmlFZGl0IiwiYXhpb3MiLCJUb2FzdGVyIiwidG9hc3QiLCJQYWdlIiwidG9kb3MiLCJzZXRUb2RvcyIsInRvZG9UZXh0Iiwic2V0VG9kb1RleHQiLCJtb2RhbCIsInNldE1vZGFsIiwiZmV0Y2hTaW5nbGVUb2RvIiwic2V0RmV0Y2hTaW5nbGVUb2RvIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJoYW5kbGVPblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBvc3QiLCJzdWNjZXNzIiwidGFyZ2V0IiwicmVzZXQiLCJjYXRjaCIsImVycm9yIiwicmVzcG9uc2UiLCJtZXNzYWdlIiwiaGFuZGxlRGVsZXRlIiwiaWQiLCJkZWxldGUiLCJwYXNzSWRGb3JVcGRhdGUiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2hTIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwidmFsdWUiLCJidXR0b24iLCJ1bCIsIm1hcCIsIml0ZW0iLCJsaSIsImEiLCJwIiwibGFiZWwiLCJodG1sRm9yIiwib25DbGljayIsIl9pZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/app/todo/page.tsx\n"));

/***/ })

});