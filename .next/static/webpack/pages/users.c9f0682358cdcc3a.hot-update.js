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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Users; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _OneUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OneUser */ \"./components/jshp/OneUser.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _NewUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NewUser */ \"./components/jshp/NewUser.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Users(param) {\n    let { propsUsers, result = ()=>{} } = param;\n    _s();\n    const [listUsers, setListUsers] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(users), [temp, setTemp] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), setMyT = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((res)=>{\n        setTemp(res);\n        result(res);\n    }, [\n        result\n    ]), eventHandler = (e)=>{\n        const userItem = e.target.closest(\"[data-email][data-action]\");\n        if (!userItem) return;\n        const { email, action } = userItem.dataset;\n        switch(action){\n            case \"delete\":\n                setListUsers((old)=>listUsers.filter((us)=>us.email !== email));\n                return;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n            onClick: eventHandler,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"caption\", {\n                    children: \"Users\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\react\\\\next-ts-users\\\\next-ts-sass\\\\components\\\\jshp\\\\Users.js\",\n                    lineNumber: 34,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                children: \"name\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\react\\\\next-ts-users\\\\next-ts-sass\\\\components\\\\jshp\\\\Users.js\",\n                                lineNumber: 37,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                children: \"email\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\react\\\\next-ts-users\\\\next-ts-sass\\\\components\\\\jshp\\\\Users.js\",\n                                lineNumber: 38,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                children: \"address.city\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\react\\\\next-ts-users\\\\next-ts-sass\\\\components\\\\jshp\\\\Users.js\",\n                                lineNumber: 39,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                children: \"phone\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\react\\\\next-ts-users\\\\next-ts-sass\\\\components\\\\jshp\\\\Users.js\",\n                                lineNumber: 40,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                children: \"website\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\react\\\\next-ts-users\\\\next-ts-sass\\\\components\\\\jshp\\\\Users.js\",\n                                lineNumber: 41,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                children: \"company.name\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\react\\\\next-ts-users\\\\next-ts-sass\\\\components\\\\jshp\\\\Users.js\",\n                                lineNumber: 42,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\react\\\\next-ts-users\\\\next-ts-sass\\\\components\\\\jshp\\\\Users.js\",\n                        lineNumber: 36,\n                        columnNumber: 7\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\react\\\\next-ts-users\\\\next-ts-sass\\\\components\\\\jshp\\\\Users.js\",\n                    lineNumber: 35,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                    children: [\n                        listUsers.map((user)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_OneUser__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                user: user\n                            }, user.email, false, {\n                                fileName: \"E:\\\\react\\\\next-ts-users\\\\next-ts-sass\\\\components\\\\jshp\\\\Users.js\",\n                                lineNumber: 46,\n                                columnNumber: 28\n                            }, this)),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NewUser__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            setTemp: setMyT\n                        }, void 0, false, {\n                            fileName: \"E:\\\\react\\\\next-ts-users\\\\next-ts-sass\\\\components\\\\jshp\\\\Users.js\",\n                            lineNumber: 47,\n                            columnNumber: 7\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\react\\\\next-ts-users\\\\next-ts-sass\\\\components\\\\jshp\\\\Users.js\",\n                    lineNumber: 45,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\react\\\\next-ts-users\\\\next-ts-sass\\\\components\\\\jshp\\\\Users.js\",\n            lineNumber: 33,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_s(Users, \"op6KYsu0f6ATVQzJPbrCVkwOa6o=\");\n_c = Users;\nvar _c;\n$RefreshReg$(_c, \"Users\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2pzaHAvVXNlcnMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ2E7QUFDYjtBQUlqQixTQUFTSSxNQUFNLEtBQWlDO1FBQWpDLEVBQUVDLFVBQVUsRUFBRUMsU0FBUyxLQUFPLENBQUMsRUFBRSxHQUFqQzs7SUFFNUIsTUFDRSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdQLCtDQUFRQSxDQUFDUSxRQUNyQyxDQUFDQyxNQUFLQyxRQUFRLEdBQUdWLCtDQUFRQSxJQUN6QlcsU0FBU1Ysa0RBQVdBLENBQUNXLENBQUFBO1FBQVNGLFFBQVFFO1FBQU1QLE9BQU9PO0lBQU0sR0FBRztRQUFDUDtLQUFPLEdBR3BFUSxlQUFhQyxDQUFBQTtRQUNYLE1BQU1DLFdBQVdELEVBQUVFLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDO1FBRWhDLElBQUcsQ0FBQ0YsVUFBVTtRQUNkLE1BQ0UsRUFBRUcsS0FBSyxFQUFFQyxNQUFNLEVBQUUsR0FBQ0osU0FBU0ssT0FBTztRQUVsQyxPQUFPRDtZQUNMLEtBQUs7Z0JBQ0xaLGFBQWFjLENBQUFBLE1BQUtmLFVBQVVnQixNQUFNLENBQUNDLENBQUFBLEtBQUlBLEdBQUdMLEtBQUssS0FBSUE7Z0JBQ25EO1FBSUY7SUFDTjtJQUVILHFCQUFPO2tCQUNKLDRFQUFDTTtZQUFNQyxTQUFTWjs7OEJBQ2QsOERBQUNhOzhCQUFROzs7Ozs7OEJBQ1QsOERBQUNDOzhCQUNELDRFQUFDQzs7MENBQ0MsOERBQUNDOzBDQUFHOzs7Ozs7MENBQ0osOERBQUNBOzBDQUFHOzs7Ozs7MENBQ0osOERBQUNBOzBDQUFHOzs7Ozs7MENBQ0osOERBQUNBOzBDQUFHOzs7Ozs7MENBQ0osOERBQUNBOzBDQUFHOzs7Ozs7MENBQ0osOERBQUNBOzBDQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFHTiw4REFBQ0M7O3dCQUNBeEIsVUFBVXlCLEdBQUcsQ0FBQ0MsQ0FBQUEscUJBQU0sOERBQUNqQyxnREFBT0E7Z0NBQUNpQyxNQUFNQTsrQkFBV0EsS0FBS2QsS0FBSzs7Ozs7c0NBQ3pELDhEQUFDaEIsZ0RBQU9BOzRCQUFDUSxTQUFTQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUl4QjtHQTVDd0JSO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvanNocC9Vc2Vycy5qcz83ZmQyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBPbmVVc2VyIGZyb20gJy4vT25lVXNlcic7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTmV3VXNlciBmcm9tICcuL05ld1VzZXInO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2Vycyh7IHByb3BzVXNlcnMsIHJlc3VsdCA9ICgpID0+IHt9IH0pIHtcclxuICBcclxuICBjb25zdCBcclxuICAgIFtsaXN0VXNlcnMsIHNldExpc3RVc2Vyc10gPSB1c2VTdGF0ZSh1c2VycyksIFxyXG4gICAgW3RlbXAsc2V0VGVtcF0gPSB1c2VTdGF0ZSgpLCBcclxuICAgIHNldE15VCA9IHVzZUNhbGxiYWNrKHJlcyA9PiB7IHNldFRlbXAocmVzKTsgcmVzdWx0KHJlcyk7IH0sIFtyZXN1bHRdKSwgICAgXHJcbiAgICAgICBcclxuXHJcbiAgICBldmVudEhhbmRsZXI9ZT0+e1xyXG4gICAgICBjb25zdCB1c2VySXRlbSA9IGUudGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLWVtYWlsXVtkYXRhLWFjdGlvbl0nKTtcclxuICAgICAgXHJcbiAgICAgICAgaWYoIXVzZXJJdGVtKSByZXR1cm47XHJcbiAgICAgICAgY29uc3QgXHJcbiAgICAgICAgICB7IGVtYWlsLCBhY3Rpb24gfT11c2VySXRlbS5kYXRhc2V0O1xyXG5cclxuICAgICAgICAgIHN3aXRjaChhY3Rpb24pe1xyXG4gICAgICAgICAgICBjYXNlICdkZWxldGUnIDpcclxuICAgICAgICAgICAgc2V0TGlzdFVzZXJzKG9sZD0+bGlzdFVzZXJzLmZpbHRlcih1cz0+dXMuZW1haWwgIT09ZW1haWwpKTsgXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgLy8gY2FzZSAnYWRkJyA6XHJcbiAgICAgICAgICAgIC8vIHNldExpc3RVc2VycyhvbGQ9Pmxpc3RVc2Vycy5wdXNoKHRlbXApKTsgXHJcbiAgICAgICAgICAgIC8vIHJldHVybjtcclxuICAgICAgICAgIH0gICAgICAgICAgXHJcbiAgICB9ICAgIFxyXG5cclxuIHJldHVybiA8PlxyXG4gICAgPHRhYmxlIG9uQ2xpY2s9e2V2ZW50SGFuZGxlcn0+XHJcbiAgICAgIDxjYXB0aW9uPlVzZXJzPC9jYXB0aW9uPiBcclxuICAgICAgPHRoZWFkPlxyXG4gICAgICA8dHI+XHJcbiAgICAgICAgPHRoPm5hbWU8L3RoPlxyXG4gICAgICAgIDx0aD5lbWFpbDwvdGg+ICAgICAgICBcclxuICAgICAgICA8dGg+YWRkcmVzcy5jaXR5PC90aD5cclxuICAgICAgICA8dGg+cGhvbmU8L3RoPlxyXG4gICAgICAgIDx0aD53ZWJzaXRlPC90aD5cclxuICAgICAgICA8dGg+Y29tcGFueS5uYW1lPC90aD4gICAgICAgIFxyXG4gICAgICA8L3RyPlxyXG4gICAgICA8L3RoZWFkPiBcclxuICAgICAgPHRib2R5PiAgICAgICBcclxuICAgICAge2xpc3RVc2Vycy5tYXAodXNlcj0+PE9uZVVzZXIgdXNlcj17dXNlcn0ga2V5PXt1c2VyLmVtYWlsfS8+KX0gICAgICBcclxuICAgICAgPE5ld1VzZXIgc2V0VGVtcD17c2V0TXlUfS8+XHJcbiAgICAgIDwvdGJvZHk+ICAgIFxyXG4gICAgPC90YWJsZT4gXHJcbiAgPC8+XHJcbn0iXSwibmFtZXMiOlsiT25lVXNlciIsInVzZVN0YXRlIiwidXNlQ2FsbGJhY2siLCJOZXdVc2VyIiwiVXNlcnMiLCJwcm9wc1VzZXJzIiwicmVzdWx0IiwibGlzdFVzZXJzIiwic2V0TGlzdFVzZXJzIiwidXNlcnMiLCJ0ZW1wIiwic2V0VGVtcCIsInNldE15VCIsInJlcyIsImV2ZW50SGFuZGxlciIsImUiLCJ1c2VySXRlbSIsInRhcmdldCIsImNsb3Nlc3QiLCJlbWFpbCIsImFjdGlvbiIsImRhdGFzZXQiLCJvbGQiLCJmaWx0ZXIiLCJ1cyIsInRhYmxlIiwib25DbGljayIsImNhcHRpb24iLCJ0aGVhZCIsInRyIiwidGgiLCJ0Ym9keSIsIm1hcCIsInVzZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/jshp/Users.js\n"));

/***/ })

});