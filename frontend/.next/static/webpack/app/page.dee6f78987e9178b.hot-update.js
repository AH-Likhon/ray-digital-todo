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

/***/ "(app-client)/./src/app/login/page.tsx":
/*!********************************!*\
  !*** ./src/app/login/page.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ \"(app-client)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"(app-client)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hot-toast */ \"(app-client)/./node_modules/react-hot-toast/dist/index.mjs\");\n/* __next_internal_client_entry_do_not_use__  auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Page = ()=>{\n    _s();\n    const [userData, setUserData] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({\n        email: \"\",\n        password: \"\"\n    });\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handleOnSubmit = (e)=>{\n        e.preventDefault();\n        // console.log('value::', userData);\n        axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(\"http://localhost:5000/api/login\", userData).then(function(response) {\n            // console.log(response.data)\n            js_cookie__WEBPACK_IMPORTED_MODULE_1__[\"default\"].set(\"loggedin\", \"true\");\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_5__[\"default\"].success(response.data.message);\n            // router.push('/todo', { params: userData });\n            // router.push({\n            //     pathname: '/todo',\n            //     query: { \n            //         userData: { ...userData }\n            //      }\n            //   });\n            Router.push({\n                pathname: \"/todo\",\n                query: {\n                    userData: {\n                        ...userData\n                    }\n                }\n            }, \"/todo\");\n        }).catch(function(error) {\n            // console.log(error.response.data.message)\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(error.response.data.message);\n        });\n    };\n    const handleOnChange = (e)=>{\n        const field = e.target.name;\n        const value = e.target.value;\n        setUserData({\n            ...userData,\n            [\"\".concat(field)]: value\n        });\n        e.preventDefault();\n    // console.log('value::', userData);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"card w-1/2 bg-base-100 shadow shadow-gray-100 absolute top-24 left-1/4 border rounded-lg p-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-center text-2xl font-semibold\",\n                children: \"SignIn\"\n            }, void 0, false, {\n                fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\login\\\\page.tsx\",\n                lineNumber: 70,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleOnSubmit,\n                className: \"card-body w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"label\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-base font-medium\",\n                            children: \"Email:\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\login\\\\page.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\login\\\\page.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        onChange: handleOnChange,\n                        name: \"email\",\n                        type: \"email\",\n                        value: userData === null || userData === void 0 ? void 0 : userData.email,\n                        placeholder: \"Enter your email\",\n                        className: \"input input-bordered input-ghost input-md w-full mb-2 focus:outline-0\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\login\\\\page.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"label\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-base font-medium\",\n                            children: \"Password:\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\login\\\\page.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\login\\\\page.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        onChange: handleOnChange,\n                        value: userData === null || userData === void 0 ? void 0 : userData.password,\n                        name: \"password\",\n                        type: \"password\",\n                        placeholder: \"Enter your password\",\n                        className: \"input input-bordered input-ghost input-md w-full mb-2 focus:outline-0\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\login\\\\page.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"btn capitalize font-medium text-base mb-2\",\n                        children: \"SignIn\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\login\\\\page.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Don't have an account? \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/register\",\n                                children: \"Sign up\"\n                            }, void 0, false, {\n                                fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\login\\\\page.tsx\",\n                                lineNumber: 111,\n                                columnNumber: 44\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\login\\\\page.tsx\",\n                        lineNumber: 110,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\login\\\\page.tsx\",\n                lineNumber: 73,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_5__.Toaster, {}, void 0, false, {\n                fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\login\\\\page.tsx\",\n                lineNumber: 116,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\login\\\\page.tsx\",\n        lineNumber: 69,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Page, \"7/7LUmeHTwlXxgcv+bqcNr8DoFw=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9sb2dpbi9wYWdlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRWdDO0FBQ047QUFDRztBQUNlO0FBQ0o7QUFDUztBQUVqRCxNQUFNUSxPQUFPLElBQU07O0lBQ2YsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdMLCtDQUFRQSxDQUFDO1FBQ3JDTSxPQUFPO1FBQ1BDLFVBQVU7SUFDZDtJQUVBLE1BQU1DLFNBQWFWLDBEQUFTQTtJQUU1QixNQUFNVyxpQkFBaUIsQ0FBQ0MsSUFBVztRQUMvQkEsRUFBRUMsY0FBYztRQUVoQixvQ0FBb0M7UUFFcENmLGtEQUFVLENBQ04sbUNBQW1DUSxVQUNsQ1MsSUFBSSxDQUFDLFNBQVVDLFFBQVEsRUFBRTtZQUN0Qiw2QkFBNkI7WUFDN0JuQixxREFBVyxDQUFDLFlBQVk7WUFDeEJNLCtEQUFhLENBQUNhLFNBQVNHLElBQUksQ0FBQ0MsT0FBTztZQUNuQyw4Q0FBOEM7WUFFOUMsZ0JBQWdCO1lBQ2hCLHlCQUF5QjtZQUN6QixnQkFBZ0I7WUFDaEIsb0NBQW9DO1lBQ3BDLFNBQVM7WUFDVCxRQUFRO1lBRU5DLE9BQU9DLElBQUksQ0FBQztnQkFDVkMsVUFBVTtnQkFDVkMsT0FBTztvQkFDSGxCLFVBQVU7d0JBQUUsR0FBR0EsUUFBUTtvQkFBQztnQkFDM0I7WUFDSCxHQUFHO1FBQ1QsR0FDQ21CLEtBQUssQ0FBQyxTQUFVQyxLQUFLLEVBQUU7WUFDcEIsMkNBQTJDO1lBQzNDdkIsNkRBQVcsQ0FBQ3VCLE1BQU1WLFFBQVEsQ0FBQ0csSUFBSSxDQUFDQyxPQUFPO1FBQzNDO0lBQ1I7SUFFQSxNQUFNTyxpQkFBaUIsQ0FBQ2YsSUFBVztRQUUvQixNQUFNZ0IsUUFBUWhCLEVBQUVpQixNQUFNLENBQUNDLElBQUk7UUFDM0IsTUFBTUMsUUFBUW5CLEVBQUVpQixNQUFNLENBQUNFLEtBQUs7UUFJNUJ4QixZQUFZO1lBQ1IsR0FBR0QsUUFBUTtZQUNYLENBQUMsR0FBUyxPQUFOc0IsT0FBUSxFQUFFRztRQUNsQjtRQUVBbkIsRUFBRUMsY0FBYztJQUVoQixvQ0FBb0M7SUFDeEM7SUFFQSxxQkFDSSw4REFBQ21CO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBcUM7Ozs7OzswQkFHbkQsOERBQUNFO2dCQUNHQyxVQUFVekI7Z0JBQ1ZzQixXQUFVOztrQ0FFViw4REFBQ0k7d0JBQU1KLFdBQVU7a0NBQ2IsNEVBQUNLOzRCQUFLTCxXQUFVO3NDQUF3Qjs7Ozs7Ozs7Ozs7a0NBRTVDLDhEQUFDTTt3QkFDR0MsVUFBVWI7d0JBQ1ZHLE1BQUs7d0JBQ0xXLE1BQUs7d0JBQ0xWLE9BQU96QixxQkFBQUEsc0JBQUFBLEtBQUFBLElBQUFBLFNBQVVFLEtBQUs7d0JBQ3RCa0MsYUFBWTt3QkFDWlQsV0FBVTt3QkFDVlUsUUFBUTs7Ozs7O2tDQUdaLDhEQUFDTjt3QkFBTUosV0FBVTtrQ0FDYiw0RUFBQ0s7NEJBQUtMLFdBQVU7c0NBQXdCOzs7Ozs7Ozs7OztrQ0FFNUMsOERBQUNNO3dCQUNHQyxVQUFVYjt3QkFDVkksT0FBT3pCLHFCQUFBQSxzQkFBQUEsS0FBQUEsSUFBQUEsU0FBVUcsUUFBUTt3QkFDekJxQixNQUFLO3dCQUNMVyxNQUFLO3dCQUNMQyxhQUFZO3dCQUNaVCxXQUFVO3dCQUNWVSxRQUFROzs7Ozs7a0NBR1osOERBQUNDO3dCQUNHSCxNQUFLO3dCQUNMUixXQUFVO2tDQUNiOzs7Ozs7a0NBSUQsOERBQUNZOzs0QkFBRTswQ0FDd0IsOERBQUM5QyxrREFBSUE7Z0NBQUMrQyxNQUFLOzBDQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBS3RELDhEQUFDMUMsb0RBQU9BOzs7Ozs7Ozs7OztBQUdwQjtHQTdHTUM7O1FBTWlCTCxzREFBU0E7OztLQU4xQks7QUErR04sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9sb2dpbi9wYWdlLnRzeD9mYzYzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB0b2FzdCwgeyBUb2FzdGVyIH0gZnJvbSAncmVhY3QtaG90LXRvYXN0JztcclxuXHJcbmNvbnN0IFBhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbdXNlckRhdGEsIHNldFVzZXJEYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICcnXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCByb3V0ZXI6YW55ID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlT25TdWJtaXQgPSAoZTogYW55KSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZygndmFsdWU6OicsIHVzZXJEYXRhKTtcclxuXHJcbiAgICAgICAgYXhpb3MucG9zdChcclxuICAgICAgICAgICAgJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvbG9naW4nLCB1c2VyRGF0YSlcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKVxyXG4gICAgICAgICAgICAgICAgQ29va2llcy5zZXQoXCJsb2dnZWRpblwiLCBcInRydWVcIik7XHJcbiAgICAgICAgICAgICAgICB0b2FzdC5zdWNjZXNzKHJlc3BvbnNlLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAvLyByb3V0ZXIucHVzaCgnL3RvZG8nLCB7IHBhcmFtczogdXNlckRhdGEgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHBhdGhuYW1lOiAnL3RvZG8nLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHF1ZXJ5OiB7IFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB1c2VyRGF0YTogeyAuLi51c2VyRGF0YSB9XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvdG9kbycsXHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlckRhdGE6IHsgLi4udXNlckRhdGEgfVxyXG4gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH0sICcvdG9kbycpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgICB0b2FzdC5lcnJvcihlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZU9uQ2hhbmdlID0gKGU6IGFueSkgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCBmaWVsZCA9IGUudGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuXHJcblxyXG5cclxuICAgICAgICBzZXRVc2VyRGF0YSh7XHJcbiAgICAgICAgICAgIC4uLnVzZXJEYXRhLFxyXG4gICAgICAgICAgICBbYCR7ZmllbGR9YF06IHZhbHVlXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZygndmFsdWU6OicsIHVzZXJEYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkIHctMS8yIGJnLWJhc2UtMTAwIHNoYWRvdyBzaGFkb3ctZ3JheS0xMDAgYWJzb2x1dGUgdG9wLTI0IGxlZnQtMS80IGJvcmRlciByb3VuZGVkLWxnIHAtNic+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQtY2VudGVyIHRleHQtMnhsIGZvbnQtc2VtaWJvbGQnPlxyXG4gICAgICAgICAgICAgICAgU2lnbkluXHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlT25TdWJtaXR9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkLWJvZHkgdy1mdWxsXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtbWVkaXVtXCI+RW1haWw6PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdlbWFpbCdcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VyRGF0YT8uZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBpbnB1dC1ib3JkZXJlZCBpbnB1dC1naG9zdCBpbnB1dC1tZCB3LWZ1bGwgbWItMiBmb2N1czpvdXRsaW5lLTBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LW1lZGl1bVwiPlBhc3N3b3JkOjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJEYXRhPy5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdwYXNzd29yZCdcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQgaW5wdXQtYm9yZGVyZWQgaW5wdXQtZ2hvc3QgaW5wdXQtbWQgdy1mdWxsIG1iLTIgZm9jdXM6b3V0bGluZS0wXCJcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBjYXBpdGFsaXplIGZvbnQtbWVkaXVtIHRleHQtYmFzZSBtYi0yXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBTaWduSW5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIERvbid0IGhhdmUgYW4gYWNjb3VudD8gPExpbmsgaHJlZj0nL3JlZ2lzdGVyJz5TaWduIHVwPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICAgICAgPFRvYXN0ZXIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlOyJdLCJuYW1lcyI6WyJDb29raWVzIiwiYXhpb3MiLCJMaW5rIiwidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInRvYXN0IiwiVG9hc3RlciIsIlBhZ2UiLCJ1c2VyRGF0YSIsInNldFVzZXJEYXRhIiwiZW1haWwiLCJwYXNzd29yZCIsInJvdXRlciIsImhhbmRsZU9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsInNldCIsInN1Y2Nlc3MiLCJkYXRhIiwibWVzc2FnZSIsIlJvdXRlciIsInB1c2giLCJwYXRobmFtZSIsInF1ZXJ5IiwiY2F0Y2giLCJlcnJvciIsImhhbmRsZU9uQ2hhbmdlIiwiZmllbGQiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwic3BhbiIsImlucHV0Iiwib25DaGFuZ2UiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsImJ1dHRvbiIsInAiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/app/login/page.tsx\n"));

/***/ })

});