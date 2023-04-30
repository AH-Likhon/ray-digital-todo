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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/ri */ \"(app-client)/./node_modules/react-icons/ri/index.esm.js\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bi */ \"(app-client)/./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-client)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ \"(app-client)/./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"(app-client)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* __next_internal_client_entry_do_not_use__  auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Page = ()=>{\n    _s();\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [todoText, setTodoText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [fetchSingleTodo, setFetchSingleTodo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const loggedEmail = js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"userEmail\");\n    const loggedin = js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"loggedin\");\n    // console.log('USEr adata:::', loggedin);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:5000/api/todos?email=\".concat(loggedEmail)).then((res)=>setTodos(res.data));\n    }, [\n        todos,\n        loggedEmail\n    ]);\n    const handleOnSubmit = async (e)=>{\n        e.preventDefault();\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"http://localhost:5000/api/add\", {\n            todoText,\n            email: loggedEmail\n        }).then(()=>{\n            // console.log(response.data)\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.success(\"Successfully Added\");\n            e.target.reset();\n        // setTodos([...todos, todoText])\n        }).catch(function(error) {\n            // console.log(error.response.data.message)\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.error(error.response.data.message);\n        });\n    };\n    const handleDelete = (e, id)=>{\n        e.preventDefault();\n        // console.log('Id::::', id);\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"][\"delete\"](\"http://localhost:5000/api/\".concat(id)).then((res)=>react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.success(res.data.message));\n    };\n    const passIdForUpdate = (id)=>{\n        // e.preventDefault();\n        // console.log('Id::::', id);\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:5000/api/todo/\".concat(id)).then((res)=>{\n            // console.log('Specific Data:::', res.data);\n            setFetchSingleTodo(res.data);\n        });\n    };\n    const handleOnUpdate = (e)=>{\n        e.preventDefault();\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].put(\"http://localhost:5000/api/\".concat(fetchSingleTodo._id), fetchSingleTodo).then((res)=>{\n            e.target.reset();\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.success(res.data.message);\n        }).catch(function(error) {\n            console.log(error);\n        // toast.error(error.response.data.message);\n        });\n    };\n    // console.log('Todos Text:::', fetchSingleTodo);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-1/2 bg-base-100 absolute top-8 left-1/4 p-6 relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-center text-2xl font-semibold\",\n                        children: \"Todo List\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleOnSubmit,\n                        className: \"relative w-5/6 mx-auto my-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                placeholder: \"Type your todo here\",\n                                onChange: (e)=>setTodoText(e.target.value),\n                                className: \"input input-bordered w-full focus:outline-none\"\n                            }, void 0, false, {\n                                fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                className: \"absolute top-0 right-0 rounded-l-none btn btn-active btn-ghost capitalize font-medium text-base\",\n                                children: \"Add\"\n                            }, void 0, false, {\n                                fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.Toaster, {}, void 0, false, {\n                                fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                                lineNumber: 104,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"menu bg-sky-500/50 w-6/6 text-white mx-auto mt-8\",\n                        children: todos.map((item)=>{\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"border border-gray-700\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        className: \"flex items-center justify-between py-0\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: item.todoText\n                                            }, void 0, false, {\n                                                fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                                                lineNumber: 115,\n                                                columnNumber: 37\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex items-center justify-center gap-4\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                        htmlFor: \"my-modal\",\n                                                        className: \"btn btn-ghost hover:bg-transparent text-lg p-0\",\n                                                        onClick: ()=>passIdForUpdate(item._id),\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_5__.BiEdit, {}, void 0, false, {\n                                                            fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                                                            lineNumber: 124,\n                                                            columnNumber: 37\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                                                        lineNumber: 119,\n                                                        columnNumber: 33\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ri__WEBPACK_IMPORTED_MODULE_6__.RiDeleteBin6Line, {\n                                                        onClick: (e)=>handleDelete(e, item._id)\n                                                    }, void 0, false, {\n                                                        fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                                                        lineNumber: 126,\n                                                        columnNumber: 41\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                                                lineNumber: 118,\n                                                columnNumber: 33\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                                        lineNumber: 114,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, item === null || item === void 0 ? void 0 : item._id, false, {\n                                    fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                                    lineNumber: 110,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false);\n                        })\n                    }, void 0, false, {\n                        fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                        lineNumber: 107,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"checkbox\",\n                        id: \"my-modal\",\n                        className: \"modal-toggle\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                        lineNumber: 135,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"modal\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"modal-box\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                    onSubmit: handleOnUpdate,\n                                    className: \"relative w-5/6 mx-auto mt-6 mb-0\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            placeholder: fetchSingleTodo.todoText,\n                                            onChange: (e)=>setFetchSingleTodo({\n                                                    ...fetchSingleTodo,\n                                                    todoText: e.target.value\n                                                }),\n                                            className: \"input input-bordered w-full focus:outline-none\"\n                                        }, void 0, false, {\n                                            fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                                            lineNumber: 142,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"modal-action\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                type: \"submit\",\n                                                className: \"absolute top-0 right-0 rounded-l-none btn btn-active btn-ghost capitalize font-medium text-base\",\n                                                children: \"Update\"\n                                            }, void 0, false, {\n                                                fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                                                lineNumber: 149,\n                                                columnNumber: 37\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                                            lineNumber: 148,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                                    lineNumber: 138,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"my-modal\",\n                                    className: \"btn btn-sm btn-circle absolute right-2 top-2\",\n                                    children: \"✕\"\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                                    lineNumber: 158,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                            lineNumber: 137,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                        lineNumber: 136,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                lineNumber: 80,\n                columnNumber: 13\n            }, undefined),\n            loggedin && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"absolute top-0 right-0 rounded btn btn-outline hover:btn-active hover:btn capitalize font-medium text-base\",\n                children: \"LogOut\"\n            }, void 0, false, {\n                fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\todo\\\\page.tsx\",\n                lineNumber: 164,\n                columnNumber: 26\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Page, \"cyL2EvLGSxutXUwpW/Ns5kUERlo=\");\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC90b2RvL3BhZ2UudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBR21EO0FBQ0Q7QUFDVjtBQUNkO0FBQ3VCO0FBQ2pCO0FBRWhDLE1BQU1TLE9BQU8sSUFBTTs7SUFDZixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1QsK0NBQVFBLENBQUMsRUFBRTtJQUNyQyxNQUFNLENBQUNVLFVBQVVDLFlBQVksR0FBR1gsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDWSxpQkFBaUJDLG1CQUFtQixHQUFHYiwrQ0FBUUEsQ0FBTSxDQUFDO0lBRzdELE1BQU1jLGNBQWNSLHFEQUFXLENBQUM7SUFDaEMsTUFBTVUsV0FBV1YscURBQVcsQ0FBQztJQUU3QiwwQ0FBMEM7SUFHMUNQLGdEQUFTQSxDQUFDLElBQU07UUFDWkksaURBQVMsQ0FBQyx5Q0FBcUQsT0FBWlcsY0FDbERHLElBQUksQ0FBQ0MsQ0FBQUEsTUFBT1QsU0FBU1MsSUFBSUMsSUFBSTtJQUNsQyxHQUFFO1FBQUNYO1FBQU9NO0tBQVk7SUFFdEIsTUFBTU0saUJBQWlCLE9BQU9DLElBQVU7UUFDcENBLEVBQUVDLGNBQWM7UUFFaEJuQixrREFBVSxDQUFDLGlDQUFpQztZQUFFTztZQUFVYyxPQUFPVjtRQUFZLEdBQ3RFRyxJQUFJLENBQUMsSUFBTTtZQUNSLDZCQUE2QjtZQUM3QlosMERBQWEsQ0FBQztZQUNkZ0IsRUFBRUssTUFBTSxDQUFDQyxLQUFLO1FBQ2QsaUNBQWlDO1FBQ3JDLEdBQ0NDLEtBQUssQ0FBQyxTQUFVQyxLQUFLLEVBQUU7WUFDcEIsMkNBQTJDO1lBQzNDeEIsd0RBQVcsQ0FBQ3dCLE1BQU1DLFFBQVEsQ0FBQ1gsSUFBSSxDQUFDWSxPQUFPO1FBQzNDO0lBQ1I7SUFFQSxNQUFNQyxlQUFlLENBQUNYLEdBQU9ZLEtBQVc7UUFDcENaLEVBQUVDLGNBQWM7UUFDaEIsNkJBQTZCO1FBRTdCbkIsdURBQVksQ0FBQyw2QkFBZ0MsT0FBSDhCLEtBQ3pDaEIsSUFBSSxDQUFDLENBQUNDLE1BQVFiLDBEQUFhLENBQUNhLElBQUlDLElBQUksQ0FBQ1ksT0FBTztJQUNqRDtJQUVBLE1BQU1JLGtCQUFrQixDQUFDRixLQUFXO1FBQ2hDLHNCQUFzQjtRQUN0Qiw2QkFBNkI7UUFFN0I5QixpREFBUyxDQUFDLGtDQUFxQyxPQUFIOEIsS0FDM0NoQixJQUFJLENBQUNDLENBQUFBLE1BQU87WUFDVCw2Q0FBNkM7WUFDN0NMLG1CQUFtQkssSUFBSUMsSUFBSTtRQUMvQjtJQUNKO0lBRUEsTUFBTWlCLGlCQUFpQixDQUFDZixJQUFVO1FBQzlCQSxFQUFFQyxjQUFjO1FBRWhCbkIsaURBQVMsQ0FBQyw2QkFBaUQsT0FBcEJTLGdCQUFnQjBCLEdBQUcsR0FBSTFCLGlCQUM3REssSUFBSSxDQUFDLENBQUNDLE1BQVE7WUFDWEcsRUFBRUssTUFBTSxDQUFDQyxLQUFLO1lBQ2R0QiwwREFBYSxDQUFDYSxJQUFJQyxJQUFJLENBQUNZLE9BQU87UUFDbEMsR0FBR0gsS0FBSyxDQUFDLFNBQVVDLEtBQUssRUFBRTtZQUN0QlUsUUFBUUMsR0FBRyxDQUFDWDtRQUNaLDRDQUE0QztRQUNoRDtJQUNKO0lBRUEsaURBQWlEO0lBRWpELHFCQUNJOzswQkFDSSw4REFBQ1k7Z0JBQ0dDLFdBQVU7O2tDQUVWLDhEQUFDQzt3QkFBR0QsV0FBVTtrQ0FBcUM7Ozs7OztrQ0FJbkQsOERBQUNFO3dCQUNEQyxVQUFVekI7d0JBQ1ZzQixXQUFVOzswQ0FFTiw4REFBQ0k7Z0NBQ0dDLE1BQUs7Z0NBQ0xDLGFBQVk7Z0NBQ1pDLFVBQVUsQ0FBQzVCLElBQU1WLFlBQVlVLEVBQUVLLE1BQU0sQ0FBQ3dCLEtBQUs7Z0NBQzNDUixXQUFVOzs7Ozs7MENBRWQsOERBQUNTO2dDQUNHSixNQUFLO2dDQUNMTCxXQUFVOzBDQUNiOzs7Ozs7MENBSUQsOERBQUN0QyxvREFBT0E7Ozs7Ozs7Ozs7O2tDQUdaLDhEQUFDZ0Q7d0JBQUdWLFdBQVU7a0NBRU5sQyxNQUFNNkMsR0FBRyxDQUFDLENBQUNDOzBDQUFjOzBDQUNyQiw0RUFBQ0M7b0NBRUdiLFdBQVU7OENBRVYsNEVBQUNjO3dDQUFFZCxXQUFVOzswREFDVCw4REFBQ2U7MERBQ0lILEtBQUs1QyxRQUFROzs7Ozs7MERBRXRCLDhEQUFDK0I7Z0RBQUlDLFdBQVU7O2tFQUNmLDhEQUFDZ0I7d0RBQ0dDLFNBQVE7d0RBQ1JqQixXQUFVO3dEQUNWa0IsU0FBUyxJQUFNekIsZ0JBQWdCbUIsS0FBS2hCLEdBQUc7a0VBRXZDLDRFQUFDcEMsa0RBQU1BOzs7Ozs7Ozs7O2tFQUVILDhEQUFDRCw0REFBZ0JBO3dEQUFDMkQsU0FBUyxDQUFDdkMsSUFBTVcsYUFBYVgsR0FBR2lDLEtBQUtoQixHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBZjdEZ0IsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNaEIsR0FBRzs7Ozs7Ozs7Ozs7O2tDQXdCMUIsOERBQUNRO3dCQUFNQyxNQUFLO3dCQUFXZCxJQUFHO3dCQUFXUyxXQUFVOzs7Ozs7a0NBQy9DLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDWCw0RUFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNYLDhEQUFDRTtvQ0FDR0MsVUFBVVQ7b0NBQ1ZNLFdBQVU7O3NEQUVWLDhEQUFDSTs0Q0FDR0MsTUFBSzs0Q0FDTEMsYUFBYXBDLGdCQUFnQkYsUUFBUTs0Q0FDckN1QyxVQUFVLENBQUM1QixJQUFNUixtQkFBbUI7b0RBQUMsR0FBR0QsZUFBZTtvREFBRUYsVUFBVVcsRUFBRUssTUFBTSxDQUFDd0IsS0FBSztnREFBQTs0Q0FDakZSLFdBQVU7Ozs7OztzREFFZCw4REFBQ0Q7NENBQUlDLFdBQVU7c0RBQ1gsNEVBQUNTO2dEQUNHSixNQUFLO2dEQUNMTCxXQUFVOzBEQUNiOzs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FNVCw4REFBQ2dCO29DQUFNQyxTQUFRO29DQUFXakIsV0FBVTs4Q0FBK0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTWxHMUIsMEJBQVksOERBQUNtQztnQkFDVlQsV0FBVTswQkFDYjs7Ozs7Ozs7QUFLYjtHQWhLTW5DO0tBQUFBO0FBa0tOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvdG9kby9wYWdlLnRzeD83ZGU3Il0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5cInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSaURlbGV0ZUJpbjZMaW5lIH0gZnJvbSAncmVhY3QtaWNvbnMvcmknO1xyXG5pbXBvcnQgeyBCaUVkaXQgfSBmcm9tICdyZWFjdC1pY29ucy9iaSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IFRvYXN0ZXIsIHRvYXN0IH0gZnJvbSAncmVhY3QtaG90LXRvYXN0JztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuXHJcbmNvbnN0IFBhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbdG9kb3MsIHNldFRvZG9zXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFt0b2RvVGV4dCwgc2V0VG9kb1RleHRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2ZldGNoU2luZ2xlVG9kbywgc2V0RmV0Y2hTaW5nbGVUb2RvXSA9IHVzZVN0YXRlPGFueT4oe30pO1xyXG4gICAgXHJcblxyXG4gICAgY29uc3QgbG9nZ2VkRW1haWwgPSBDb29raWVzLmdldChcInVzZXJFbWFpbFwiKTtcclxuICAgIGNvbnN0IGxvZ2dlZGluID0gQ29va2llcy5nZXQoXCJsb2dnZWRpblwiKTtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZygnVVNFciBhZGF0YTo6OicsIGxvZ2dlZGluKTtcclxuICAgIFxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3RvZG9zP2VtYWlsPSR7bG9nZ2VkRW1haWx9YClcclxuICAgICAgICAudGhlbihyZXMgPT4gc2V0VG9kb3MocmVzLmRhdGEpKVxyXG4gICAgfSxbdG9kb3MsIGxvZ2dlZEVtYWlsXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlT25TdWJtaXQgPSBhc3luYyAoZTphbnkpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvYWRkJywgeyB0b2RvVGV4dCwgZW1haWw6IGxvZ2dlZEVtYWlsIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpXHJcbiAgICAgICAgICAgICAgICB0b2FzdC5zdWNjZXNzKCdTdWNjZXNzZnVsbHkgQWRkZWQnKTtcclxuICAgICAgICAgICAgICAgIGUudGFyZ2V0LnJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICAvLyBzZXRUb2RvcyhbLi4udG9kb3MsIHRvZG9UZXh0XSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlKVxyXG4gICAgICAgICAgICAgICAgdG9hc3QuZXJyb3IoZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVEZWxldGUgPSAoZTphbnksIGlkOmFueSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnSWQ6Ojo6JywgaWQpO1xyXG5cclxuICAgICAgICBheGlvcy5kZWxldGUoYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvJHtpZH1gKVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHRvYXN0LnN1Y2Nlc3MocmVzLmRhdGEubWVzc2FnZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBhc3NJZEZvclVwZGF0ZSA9IChpZDphbnkpID0+IHtcclxuICAgICAgICAvLyBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ0lkOjo6OicsIGlkKTtcclxuXHJcbiAgICAgICAgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3RvZG8vJHtpZH1gKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdTcGVjaWZpYyBEYXRhOjo6JywgcmVzLmRhdGEpO1xyXG4gICAgICAgICAgICBzZXRGZXRjaFNpbmdsZVRvZG8ocmVzLmRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZU9uVXBkYXRlID0gKGU6YW55KSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBheGlvcy5wdXQoYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvJHtmZXRjaFNpbmdsZVRvZG8uX2lkfWAsIGZldGNoU2luZ2xlVG9kbylcclxuICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGUudGFyZ2V0LnJlc2V0KCk7XHJcbiAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MocmVzLmRhdGEubWVzc2FnZSlcclxuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIC8vIHRvYXN0LmVycm9yKGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IFxyXG4gICAgXHJcbiAgICAvLyBjb25zb2xlLmxvZygnVG9kb3MgVGV4dDo6OicsIGZldGNoU2luZ2xlVG9kbyk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3LTEvMiBiZy1iYXNlLTEwMCBhYnNvbHV0ZSB0b3AtOCBsZWZ0LTEvNCBwLTYgcmVsYXRpdmUnXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQtY2VudGVyIHRleHQtMnhsIGZvbnQtc2VtaWJvbGQnPlxyXG4gICAgICAgICAgICAgICAgICAgIFRvZG8gTGlzdFxyXG4gICAgICAgICAgICAgICAgPC9oMj5cclxuXHJcbiAgICAgICAgICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZU9uU3VibWl0fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy01LzYgbXgtYXV0byBteS00XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIHRvZG8gaGVyZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRvZG9UZXh0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQgaW5wdXQtYm9yZGVyZWQgdy1mdWxsIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz4gXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCByaWdodC0wIHJvdW5kZWQtbC1ub25lIGJ0biBidG4tYWN0aXZlIGJ0bi1naG9zdCBjYXBpdGFsaXplIGZvbnQtbWVkaXVtIHRleHQtYmFzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBZGRcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPFRvYXN0ZXIgLz5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVudSBiZy1za3ktNTAwLzUwIHctNi82IHRleHQtd2hpdGUgbXgtYXV0byBtdC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2Rvcy5tYXAoKGl0ZW06IGFueSkgPT4gPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0/Ll9pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2JvcmRlciBib3JkZXItZ3JheS03MDAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHktMCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udG9kb1RleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cIm15LW1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1naG9zdCBob3ZlcjpiZy10cmFuc3BhcmVudCB0ZXh0LWxnIHAtMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHBhc3NJZEZvclVwZGF0ZShpdGVtLl9pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmlFZGl0IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSaURlbGV0ZUJpbjZMaW5lIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVEZWxldGUoZSwgaXRlbS5faWQpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPilcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgey8qIE1vZGFsICAqL30gXHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwibXktbW9kYWxcIiBjbGFzc05hbWU9XCJtb2RhbC10b2dnbGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZU9uVXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIHctNS82IG14LWF1dG8gbXQtNiBtYi0wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtmZXRjaFNpbmdsZVRvZG8udG9kb1RleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RmV0Y2hTaW5nbGVUb2RvKHsuLi5mZXRjaFNpbmdsZVRvZG8sIHRvZG9UZXh0OiBlLnRhcmdldC52YWx1ZX0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBpbnB1dC1ib3JkZXJlZCB3LWZ1bGwgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWFjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgcmlnaHQtMCByb3VuZGVkLWwtbm9uZSBidG4gYnRuLWFjdGl2ZSBidG4tZ2hvc3QgY2FwaXRhbGl6ZSBmb250LW1lZGl1bSB0ZXh0LWJhc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVcGRhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJteS1tb2RhbFwiIGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLWNpcmNsZSBhYnNvbHV0ZSByaWdodC0yIHRvcC0yXCI+4pyVPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHtsb2dnZWRpbiAmJiA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgcmlnaHQtMCByb3VuZGVkIGJ0biBidG4tb3V0bGluZSBob3ZlcjpidG4tYWN0aXZlIGhvdmVyOmJ0biBjYXBpdGFsaXplIGZvbnQtbWVkaXVtIHRleHQtYmFzZVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIExvZ091dFxyXG4gICAgICAgICAgICA8L2J1dHRvbj59XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlJpRGVsZXRlQmluNkxpbmUiLCJCaUVkaXQiLCJheGlvcyIsIlRvYXN0ZXIiLCJ0b2FzdCIsIkNvb2tpZXMiLCJQYWdlIiwidG9kb3MiLCJzZXRUb2RvcyIsInRvZG9UZXh0Iiwic2V0VG9kb1RleHQiLCJmZXRjaFNpbmdsZVRvZG8iLCJzZXRGZXRjaFNpbmdsZVRvZG8iLCJsb2dnZWRFbWFpbCIsImdldCIsImxvZ2dlZGluIiwidGhlbiIsInJlcyIsImRhdGEiLCJoYW5kbGVPblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBvc3QiLCJlbWFpbCIsInN1Y2Nlc3MiLCJ0YXJnZXQiLCJyZXNldCIsImNhdGNoIiwiZXJyb3IiLCJyZXNwb25zZSIsIm1lc3NhZ2UiLCJoYW5kbGVEZWxldGUiLCJpZCIsImRlbGV0ZSIsInBhc3NJZEZvclVwZGF0ZSIsImhhbmRsZU9uVXBkYXRlIiwicHV0IiwiX2lkIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInZhbHVlIiwiYnV0dG9uIiwidWwiLCJtYXAiLCJpdGVtIiwibGkiLCJhIiwicCIsImxhYmVsIiwiaHRtbEZvciIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/app/todo/page.tsx\n"));

/***/ })

});