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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ \"(app-client)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"(app-client)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hot-toast */ \"(app-client)/./node_modules/react-hot-toast/dist/index.mjs\");\n/* __next_internal_client_entry_do_not_use__  auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n// import { Router } from \"next/router\";\nconst Page = ()=>{\n    _s();\n    const [userData, setUserData] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({\n        email: \"\",\n        password: \"\"\n    });\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handleOnSubmit = (e)=>{\n        e.preventDefault();\n        // console.log('value::', userData);\n        axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(\"http://localhost:5000/api/login\", userData).then(function(response) {\n            // console.log(response.data)\n            js_cookie__WEBPACK_IMPORTED_MODULE_1__[\"default\"].set(\"loggedin\", \"true\");\n            js_cookie__WEBPACK_IMPORTED_MODULE_1__[\"default\"].set(\"userEmail\", userData);\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_5__[\"default\"].success(response.data.message);\n            router.push(\"/todo\");\n        }).catch(function(error) {\n            // console.log(error.response.data.message)\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(error.response.data.message);\n        });\n    };\n    const handleOnChange = (e)=>{\n        const field = e.target.name;\n        const value = e.target.value;\n        setUserData({\n            ...userData,\n            [\"\".concat(field)]: value\n        });\n        e.preventDefault();\n    // console.log('value::', userData);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"card w-1/2 bg-base-100 shadow shadow-gray-100 absolute top-24 left-1/4 border rounded-lg p-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-center text-2xl font-semibold\",\n                children: \"SignIn\"\n            }, void 0, false, {\n                fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\login\\\\page.tsx\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleOnSubmit,\n                className: \"card-body w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"label\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-base font-medium\",\n                            children: \"Email:\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\login\\\\page.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\login\\\\page.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        onChange: handleOnChange,\n                        name: \"email\",\n                        type: \"email\",\n                        value: userData === null || userData === void 0 ? void 0 : userData.email,\n                        placeholder: \"Enter your email\",\n                        className: \"input input-bordered input-ghost input-md w-full mb-2 focus:outline-0\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\login\\\\page.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"label\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-base font-medium\",\n                            children: \"Password:\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\login\\\\page.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\login\\\\page.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        onChange: handleOnChange,\n                        value: userData === null || userData === void 0 ? void 0 : userData.password,\n                        name: \"password\",\n                        type: \"password\",\n                        placeholder: \"Enter your password\",\n                        className: \"input input-bordered input-ghost input-md w-full mb-2 focus:outline-0\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\login\\\\page.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"btn capitalize font-medium text-base mb-2\",\n                        children: \"SignIn\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\login\\\\page.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Don't have an account? \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/register\",\n                                children: \"Sign up\"\n                            }, void 0, false, {\n                                fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\login\\\\page.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 44\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\login\\\\page.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\login\\\\page.tsx\",\n                lineNumber: 62,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_5__.Toaster, {}, void 0, false, {\n                fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\login\\\\page.tsx\",\n                lineNumber: 105,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\E\\\\01-Javascript 2021\\\\01- Jankar Mahbub\\\\Company Task\\\\Ray Digital\\\\todo\\\\frontend\\\\src\\\\app\\\\login\\\\page.tsx\",\n        lineNumber: 58,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Page, \"7/7LUmeHTwlXxgcv+bqcNr8DoFw=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9sb2dpbi9wYWdlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRWdDO0FBQ047QUFDRztBQUNlO0FBQ0o7QUFDUztBQUNqRCx3Q0FBd0M7QUFFeEMsTUFBTVEsT0FBTyxJQUFNOztJQUNmLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTCwrQ0FBUUEsQ0FBQztRQUNyQ00sT0FBTztRQUNQQyxVQUFVO0lBQ2Q7SUFFQSxNQUFNQyxTQUFTViwwREFBU0E7SUFFeEIsTUFBTVcsaUJBQWlCLENBQUNDLElBQVc7UUFDL0JBLEVBQUVDLGNBQWM7UUFFaEIsb0NBQW9DO1FBRXBDZixrREFBVSxDQUNOLG1DQUFtQ1EsVUFDbENTLElBQUksQ0FBQyxTQUFVQyxRQUFRLEVBQUU7WUFDdEIsNkJBQTZCO1lBQzdCbkIscURBQVcsQ0FBQyxZQUFZO1lBQ3hCQSxxREFBVyxDQUFDLGFBQWFTO1lBQ3pCSCwrREFBYSxDQUFDYSxTQUFTRyxJQUFJLENBQUNDLE9BQU87WUFDbkNWLE9BQU9XLElBQUksQ0FBQztRQUVoQixHQUNDQyxLQUFLLENBQUMsU0FBVUMsS0FBSyxFQUFFO1lBQ3BCLDJDQUEyQztZQUMzQ3BCLDZEQUFXLENBQUNvQixNQUFNUCxRQUFRLENBQUNHLElBQUksQ0FBQ0MsT0FBTztRQUMzQztJQUNSO0lBRUEsTUFBTUksaUJBQWlCLENBQUNaLElBQVc7UUFFL0IsTUFBTWEsUUFBUWIsRUFBRWMsTUFBTSxDQUFDQyxJQUFJO1FBQzNCLE1BQU1DLFFBQVFoQixFQUFFYyxNQUFNLENBQUNFLEtBQUs7UUFJNUJyQixZQUFZO1lBQ1IsR0FBR0QsUUFBUTtZQUNYLENBQUMsR0FBUyxPQUFObUIsT0FBUSxFQUFFRztRQUNsQjtRQUVBaEIsRUFBRUMsY0FBYztJQUVoQixvQ0FBb0M7SUFDeEM7SUFFQSxxQkFDSSw4REFBQ2dCO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBcUM7Ozs7OzswQkFHbkQsOERBQUNFO2dCQUNHQyxVQUFVdEI7Z0JBQ1ZtQixXQUFVOztrQ0FFViw4REFBQ0k7d0JBQU1KLFdBQVU7a0NBQ2IsNEVBQUNLOzRCQUFLTCxXQUFVO3NDQUF3Qjs7Ozs7Ozs7Ozs7a0NBRTVDLDhEQUFDTTt3QkFDR0MsVUFBVWI7d0JBQ1ZHLE1BQUs7d0JBQ0xXLE1BQUs7d0JBQ0xWLE9BQU90QixxQkFBQUEsc0JBQUFBLEtBQUFBLElBQUFBLFNBQVVFLEtBQUs7d0JBQ3RCK0IsYUFBWTt3QkFDWlQsV0FBVTt3QkFDVlUsUUFBUTs7Ozs7O2tDQUdaLDhEQUFDTjt3QkFBTUosV0FBVTtrQ0FDYiw0RUFBQ0s7NEJBQUtMLFdBQVU7c0NBQXdCOzs7Ozs7Ozs7OztrQ0FFNUMsOERBQUNNO3dCQUNHQyxVQUFVYjt3QkFDVkksT0FBT3RCLHFCQUFBQSxzQkFBQUEsS0FBQUEsSUFBQUEsU0FBVUcsUUFBUTt3QkFDekJrQixNQUFLO3dCQUNMVyxNQUFLO3dCQUNMQyxhQUFZO3dCQUNaVCxXQUFVO3dCQUNWVSxRQUFROzs7Ozs7a0NBR1osOERBQUNDO3dCQUNHSCxNQUFLO3dCQUNMUixXQUFVO2tDQUNiOzs7Ozs7a0NBSUQsOERBQUNZOzs0QkFBRTswQ0FDd0IsOERBQUMzQyxrREFBSUE7Z0NBQUM0QyxNQUFLOzBDQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBS3RELDhEQUFDdkMsb0RBQU9BOzs7Ozs7Ozs7OztBQUdwQjtHQWpHTUM7O1FBTWFMLHNEQUFTQTs7O0tBTnRCSztBQW1HTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2xvZ2luL3BhZ2UudHN4P2ZjNjMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHRvYXN0LCB7IFRvYXN0ZXIgfSBmcm9tICdyZWFjdC1ob3QtdG9hc3QnO1xyXG4vLyBpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IFBhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbdXNlckRhdGEsIHNldFVzZXJEYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICcnXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVPblN1Ym1pdCA9IChlOiBhbnkpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd2YWx1ZTo6JywgdXNlckRhdGEpO1xyXG5cclxuICAgICAgICBheGlvcy5wb3N0KFxyXG4gICAgICAgICAgICAnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS9sb2dpbicsIHVzZXJEYXRhKVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpXHJcbiAgICAgICAgICAgICAgICBDb29raWVzLnNldChcImxvZ2dlZGluXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICAgICAgICAgIENvb2tpZXMuc2V0KFwidXNlckVtYWlsXCIsIHVzZXJEYXRhKTtcclxuICAgICAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MocmVzcG9uc2UuZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvdG9kbycpO1xyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlKVxyXG4gICAgICAgICAgICAgICAgdG9hc3QuZXJyb3IoZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVPbkNoYW5nZSA9IChlOiBhbnkpID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgZmllbGQgPSBlLnRhcmdldC5uYW1lO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcblxyXG5cclxuXHJcbiAgICAgICAgc2V0VXNlckRhdGEoe1xyXG4gICAgICAgICAgICAuLi51c2VyRGF0YSxcclxuICAgICAgICAgICAgW2Ake2ZpZWxkfWBdOiB2YWx1ZVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3ZhbHVlOjonLCB1c2VyRGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZCB3LTEvMiBiZy1iYXNlLTEwMCBzaGFkb3cgc2hhZG93LWdyYXktMTAwIGFic29sdXRlIHRvcC0yNCBsZWZ0LTEvNCBib3JkZXIgcm91bmRlZC1sZyBwLTYnPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciB0ZXh0LTJ4bCBmb250LXNlbWlib2xkJz5cclxuICAgICAgICAgICAgICAgIFNpZ25JblxyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZU9uU3VibWl0fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IHctZnVsbFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LW1lZGl1bVwiPkVtYWlsOjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0nZW1haWwnXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dXNlckRhdGE/LmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQgaW5wdXQtYm9yZGVyZWQgaW5wdXQtZ2hvc3QgaW5wdXQtbWQgdy1mdWxsIG1iLTIgZm9jdXM6b3V0bGluZS0wXCJcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1tZWRpdW1cIj5QYXNzd29yZDo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VyRGF0YT8ucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0ncGFzc3dvcmQnXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0IGlucHV0LWJvcmRlcmVkIGlucHV0LWdob3N0IGlucHV0LW1kIHctZnVsbCBtYi0yIGZvY3VzOm91dGxpbmUtMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gY2FwaXRhbGl6ZSBmb250LW1lZGl1bSB0ZXh0LWJhc2UgbWItMlwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgU2lnbkluXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICBEb24ndCBoYXZlIGFuIGFjY291bnQ/IDxMaW5rIGhyZWY9Jy9yZWdpc3Rlcic+U2lnbiB1cDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgIDxUb2FzdGVyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZTsiXSwibmFtZXMiOlsiQ29va2llcyIsImF4aW9zIiwiTGluayIsInVzZVJvdXRlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJ0b2FzdCIsIlRvYXN0ZXIiLCJQYWdlIiwidXNlckRhdGEiLCJzZXRVc2VyRGF0YSIsImVtYWlsIiwicGFzc3dvcmQiLCJyb3V0ZXIiLCJoYW5kbGVPblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJzZXQiLCJzdWNjZXNzIiwiZGF0YSIsIm1lc3NhZ2UiLCJwdXNoIiwiY2F0Y2giLCJlcnJvciIsImhhbmRsZU9uQ2hhbmdlIiwiZmllbGQiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwic3BhbiIsImlucHV0Iiwib25DaGFuZ2UiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsImJ1dHRvbiIsInAiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/app/login/page.tsx\n"));

/***/ })

});