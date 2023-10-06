"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/users",{

/***/ "./components/jshp/Users.js":
/*!**********************************!*\
  !*** ./components/jshp/Users.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Users; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _OneUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OneUser */ \"./components/jshp/OneUser.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _NewUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NewUser */ \"./components/jshp/NewUser.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Users(param) {\n    let { propsUsers, result = ()=>{} } = param;\n    _s();\n    const [listUsers, setListUsers] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(propsUsers), [temp, setTemp] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), setMyT = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((res)=>{\n        setTemp(res);\n        result(res);\n    }, [\n        result\n    ]), eventHandler = (e)=>{\n        const userItem = e.target.closest(\"[data-email][data-action]\");\n        if (!userItem) return;\n        const { email, action } = userItem.dataset;\n        switch(action){\n            case \"delete\":\n                setListUsers((old)=>listUsers.filter((us)=>us.email !== email));\n                return;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n            onClick: eventHandler,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"caption\", {\n                    children: \"Users\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\react\\\\next-ts-users\\\\next-ts-sass\\\\components\\\\jshp\\\\Users.js\",\n                    lineNumber: 33,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                children: \"name\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\react\\\\next-ts-users\\\\next-ts-sass\\\\components\\\\jshp\\\\Users.js\",\n                                lineNumber: 36,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                children: \"email\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\react\\\\next-ts-users\\\\next-ts-sass\\\\components\\\\jshp\\\\Users.js\",\n                                lineNumber: 37,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                children: \"address.city\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\react\\\\next-ts-users\\\\next-ts-sass\\\\components\\\\jshp\\\\Users.js\",\n                                lineNumber: 38,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                children: \"phone\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\react\\\\next-ts-users\\\\next-ts-sass\\\\components\\\\jshp\\\\Users.js\",\n                                lineNumber: 39,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                children: \"website\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\react\\\\next-ts-users\\\\next-ts-sass\\\\components\\\\jshp\\\\Users.js\",\n                                lineNumber: 40,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                children: \"company.name\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\react\\\\next-ts-users\\\\next-ts-sass\\\\components\\\\jshp\\\\Users.js\",\n                                lineNumber: 41,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\react\\\\next-ts-users\\\\next-ts-sass\\\\components\\\\jshp\\\\Users.js\",\n                        lineNumber: 35,\n                        columnNumber: 7\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\react\\\\next-ts-users\\\\next-ts-sass\\\\components\\\\jshp\\\\Users.js\",\n                    lineNumber: 34,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                    children: [\n                        listUsers.map((user)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_OneUser__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                user: user\n                            }, user.email, false, {\n                                fileName: \"E:\\\\react\\\\next-ts-users\\\\next-ts-sass\\\\components\\\\jshp\\\\Users.js\",\n                                lineNumber: 45,\n                                columnNumber: 28\n                            }, this)),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NewUser__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            setTemp: setMyT\n                        }, void 0, false, {\n                            fileName: \"E:\\\\react\\\\next-ts-users\\\\next-ts-sass\\\\components\\\\jshp\\\\Users.js\",\n                            lineNumber: 46,\n                            columnNumber: 7\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\react\\\\next-ts-users\\\\next-ts-sass\\\\components\\\\jshp\\\\Users.js\",\n                    lineNumber: 44,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\react\\\\next-ts-users\\\\next-ts-sass\\\\components\\\\jshp\\\\Users.js\",\n            lineNumber: 32,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_s(Users, \"z5rOe/qmgSch6GWIpTp98nbZBeQ=\");\n_c = Users;\nvar _c;\n$RefreshReg$(_c, \"Users\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2pzaHAvVXNlcnMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ2E7QUFDYjtBQUdqQixTQUFTSSxNQUFNLEtBQWlDO1FBQWpDLEVBQUVDLFVBQVUsRUFBRUMsU0FBUyxLQUFPLENBQUMsRUFBRSxHQUFqQzs7SUFFNUIsTUFDRSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdQLCtDQUFRQSxDQUFDSSxhQUNyQyxDQUFDSSxNQUFLQyxRQUFRLEdBQUdULCtDQUFRQSxJQUN6QlUsU0FBU1Qsa0RBQVdBLENBQUNVLENBQUFBO1FBQVNGLFFBQVFFO1FBQU1OLE9BQU9NO0lBQU0sR0FBRztRQUFDTjtLQUFPLEdBR3BFTyxlQUFhQyxDQUFBQTtRQUNYLE1BQU1DLFdBQVdELEVBQUVFLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDO1FBRWhDLElBQUcsQ0FBQ0YsVUFBVTtRQUNkLE1BQ0UsRUFBRUcsS0FBSyxFQUFFQyxNQUFNLEVBQUUsR0FBQ0osU0FBU0ssT0FBTztRQUVsQyxPQUFPRDtZQUNMLEtBQUs7Z0JBQ0xYLGFBQWFhLENBQUFBLE1BQUtkLFVBQVVlLE1BQU0sQ0FBQ0MsQ0FBQUEsS0FBSUEsR0FBR0wsS0FBSyxLQUFJQTtnQkFDbkQ7UUFJRjtJQUNOO0lBRUgscUJBQU87a0JBQ0osNEVBQUNNO1lBQU1DLFNBQVNaOzs4QkFDZCw4REFBQ2E7OEJBQVE7Ozs7Ozs4QkFDVCw4REFBQ0M7OEJBQ0QsNEVBQUNDOzswQ0FDQyw4REFBQ0M7MENBQUc7Ozs7OzswQ0FDSiw4REFBQ0E7MENBQUc7Ozs7OzswQ0FDSiw4REFBQ0E7MENBQUc7Ozs7OzswQ0FDSiw4REFBQ0E7MENBQUc7Ozs7OzswQ0FDSiw4REFBQ0E7MENBQUc7Ozs7OzswQ0FDSiw4REFBQ0E7MENBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUdOLDhEQUFDQzs7d0JBQ0F2QixVQUFVd0IsR0FBRyxDQUFDQyxDQUFBQSxxQkFBTSw4REFBQ2hDLGdEQUFPQTtnQ0FBQ2dDLE1BQU1BOytCQUFXQSxLQUFLZCxLQUFLOzs7OztzQ0FDekQsOERBQUNmLGdEQUFPQTs0QkFBQ08sU0FBU0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJeEI7R0E1Q3dCUDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2pzaHAvVXNlcnMuanM/N2ZkMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgT25lVXNlciBmcm9tICcuL09uZVVzZXInO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE5ld1VzZXIgZnJvbSAnLi9OZXdVc2VyJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2Vycyh7IHByb3BzVXNlcnMsIHJlc3VsdCA9ICgpID0+IHt9IH0pIHtcclxuICBcclxuICBjb25zdCBcclxuICAgIFtsaXN0VXNlcnMsIHNldExpc3RVc2Vyc10gPSB1c2VTdGF0ZShwcm9wc1VzZXJzKSwgXHJcbiAgICBbdGVtcCxzZXRUZW1wXSA9IHVzZVN0YXRlKCksIFxyXG4gICAgc2V0TXlUID0gdXNlQ2FsbGJhY2socmVzID0+IHsgc2V0VGVtcChyZXMpOyByZXN1bHQocmVzKTsgfSwgW3Jlc3VsdF0pLCAgICBcclxuICAgICAgIFxyXG5cclxuICAgIGV2ZW50SGFuZGxlcj1lPT57XHJcbiAgICAgIGNvbnN0IHVzZXJJdGVtID0gZS50YXJnZXQuY2xvc2VzdCgnW2RhdGEtZW1haWxdW2RhdGEtYWN0aW9uXScpO1xyXG4gICAgICBcclxuICAgICAgICBpZighdXNlckl0ZW0pIHJldHVybjtcclxuICAgICAgICBjb25zdCBcclxuICAgICAgICAgIHsgZW1haWwsIGFjdGlvbiB9PXVzZXJJdGVtLmRhdGFzZXQ7XHJcblxyXG4gICAgICAgICAgc3dpdGNoKGFjdGlvbil7XHJcbiAgICAgICAgICAgIGNhc2UgJ2RlbGV0ZScgOlxyXG4gICAgICAgICAgICBzZXRMaXN0VXNlcnMob2xkPT5saXN0VXNlcnMuZmlsdGVyKHVzPT51cy5lbWFpbCAhPT1lbWFpbCkpOyBcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAvLyBjYXNlICdhZGQnIDpcclxuICAgICAgICAgICAgLy8gc2V0TGlzdFVzZXJzKG9sZD0+bGlzdFVzZXJzLnB1c2godGVtcCkpOyBcclxuICAgICAgICAgICAgLy8gcmV0dXJuO1xyXG4gICAgICAgICAgfSAgICAgICAgICBcclxuICAgIH0gICAgXHJcblxyXG4gcmV0dXJuIDw+XHJcbiAgICA8dGFibGUgb25DbGljaz17ZXZlbnRIYW5kbGVyfT5cclxuICAgICAgPGNhcHRpb24+VXNlcnM8L2NhcHRpb24+IFxyXG4gICAgICA8dGhlYWQ+XHJcbiAgICAgIDx0cj5cclxuICAgICAgICA8dGg+bmFtZTwvdGg+XHJcbiAgICAgICAgPHRoPmVtYWlsPC90aD4gICAgICAgIFxyXG4gICAgICAgIDx0aD5hZGRyZXNzLmNpdHk8L3RoPlxyXG4gICAgICAgIDx0aD5waG9uZTwvdGg+XHJcbiAgICAgICAgPHRoPndlYnNpdGU8L3RoPlxyXG4gICAgICAgIDx0aD5jb21wYW55Lm5hbWU8L3RoPiAgICAgICAgXHJcbiAgICAgIDwvdHI+XHJcbiAgICAgIDwvdGhlYWQ+IFxyXG4gICAgICA8dGJvZHk+ICAgICAgIFxyXG4gICAgICB7bGlzdFVzZXJzLm1hcCh1c2VyPT48T25lVXNlciB1c2VyPXt1c2VyfSBrZXk9e3VzZXIuZW1haWx9Lz4pfSAgICAgIFxyXG4gICAgICA8TmV3VXNlciBzZXRUZW1wPXtzZXRNeVR9Lz5cclxuICAgICAgPC90Ym9keT4gICAgXHJcbiAgICA8L3RhYmxlPiBcclxuICA8Lz5cclxufSJdLCJuYW1lcyI6WyJPbmVVc2VyIiwidXNlU3RhdGUiLCJ1c2VDYWxsYmFjayIsIk5ld1VzZXIiLCJVc2VycyIsInByb3BzVXNlcnMiLCJyZXN1bHQiLCJsaXN0VXNlcnMiLCJzZXRMaXN0VXNlcnMiLCJ0ZW1wIiwic2V0VGVtcCIsInNldE15VCIsInJlcyIsImV2ZW50SGFuZGxlciIsImUiLCJ1c2VySXRlbSIsInRhcmdldCIsImNsb3Nlc3QiLCJlbWFpbCIsImFjdGlvbiIsImRhdGFzZXQiLCJvbGQiLCJmaWx0ZXIiLCJ1cyIsInRhYmxlIiwib25DbGljayIsImNhcHRpb24iLCJ0aGVhZCIsInRyIiwidGgiLCJ0Ym9keSIsIm1hcCIsInVzZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/jshp/Users.js\n"));

/***/ })

});