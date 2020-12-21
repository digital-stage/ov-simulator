webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _libs_useAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../libs/useAuth */ \"./libs/useAuth/index.tsx\");\n/* harmony import */ var _libs_useStage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../libs/useStage */ \"./libs/useStage.tsx\");\n/* harmony import */ var _components_SoundCardSimulator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SoundCardSimulator */ \"./components/SoundCardSimulator.tsx\");\n\n\nvar _jsxFileName = \"/Users/tobias/Developer/digitalstage/ov-simulator/pages/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar email = \"test@digital-stage.org\";\nvar password = \"testtesttest\";\n\nvar Index = function Index() {\n  _s();\n\n  var _useAuth = Object(_libs_useAuth__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(),\n      signInWithEmailAndPassword = _useAuth.signInWithEmailAndPassword,\n      token = _useAuth.token;\n\n  var _useStage = Object(_libs_useStage__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(),\n      device = _useStage.device;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    // Sign in\n    signInWithEmailAndPassword(email, password);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: [\"1.) Get token: \", token ? \"ok\" : \"requesting\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: [\"2.) Identify this Device by it's mac address '\", _libs_useStage__WEBPACK_IMPORTED_MODULE_3__[\"MAC\"], \"':\", device ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"pre\", {\n          children: JSON.stringify(device, null, 2)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 31\n        }, _this) : \"requesting\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: [\"3.) Retrieve existing or create new sound cards:\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_SoundCardSimulator__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: \"4.) Let the user create presets:\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Index, \"F80h0ppMkrHVNGjpn1ZFOyjIfVI=\", false, function () {\n  return [_libs_useAuth__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _libs_useStage__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n});\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiZW1haWwiLCJwYXNzd29yZCIsIkluZGV4IiwidXNlQXV0aCIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwidG9rZW4iLCJ1c2VTdGFnZSIsImRldmljZSIsInVzZUVmZmVjdCIsIk1BQyIsIkpTT04iLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxLQUFLLEdBQUcsd0JBQWQ7QUFDQSxJQUFNQyxRQUFRLEdBQUcsY0FBakI7O0FBR0EsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUFBLGlCQUM0QkMsNkRBQU8sRUFEbkM7QUFBQSxNQUNUQywwQkFEUyxZQUNUQSwwQkFEUztBQUFBLE1BQ21CQyxLQURuQixZQUNtQkEsS0FEbkI7O0FBQUEsa0JBRUNDLDhEQUFRLEVBRlQ7QUFBQSxNQUVUQyxNQUZTLGFBRVRBLE1BRlM7O0FBSWhCQyx5REFBUyxDQUFDLFlBQU07QUFDWjtBQUNBSiw4QkFBMEIsQ0FBQ0osS0FBRCxFQUFRQyxRQUFSLENBQTFCO0FBQ0gsR0FIUSxFQUdOLEVBSE0sQ0FBVDtBQUtBLHNCQUNJO0FBQUEsMkJBQ0k7QUFBQSw4QkFDSTtBQUFBLHNDQUNvQkksS0FBSyxHQUFHLElBQUgsR0FBVSxZQURuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUlJO0FBQUEscUVBQ21ESSxrREFEbkQsUUFFS0YsTUFBTSxnQkFBRztBQUFBLG9CQUFNRyxJQUFJLENBQUNDLFNBQUwsQ0FBZUosTUFBZixFQUF1QixJQUF2QixFQUE2QixDQUE3QjtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQUgsR0FBa0QsWUFGN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkosZUFRSTtBQUFBLG9GQUVJLHFFQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUkosZUFZSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQW9CSCxDQTdCRDs7R0FBTUwsSztVQUMwQ0MscUQsRUFDM0JHLHNEOzs7S0FGZkosSztBQThCU0Esb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXNlQXV0aCBmcm9tIFwiLi4vbGlicy91c2VBdXRoXCI7XG5pbXBvcnQgdXNlU3RhZ2UsIHtNQUN9IGZyb20gXCIuLi9saWJzL3VzZVN0YWdlXCI7XG5pbXBvcnQgU291bmRDYXJkU2ltdWxhdG9yIGZyb20gXCIuLi9jb21wb25lbnRzL1NvdW5kQ2FyZFNpbXVsYXRvclwiO1xuXG5jb25zdCBlbWFpbCA9IFwidGVzdEBkaWdpdGFsLXN0YWdlLm9yZ1wiO1xuY29uc3QgcGFzc3dvcmQgPSBcInRlc3R0ZXN0dGVzdFwiO1xuXG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICAgIGNvbnN0IHtzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCwgdG9rZW59ID0gdXNlQXV0aCgpO1xuICAgIGNvbnN0IHtkZXZpY2V9ID0gdXNlU3RhZ2UoKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vIFNpZ24gaW5cbiAgICAgICAgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKTtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgMS4pIEdldCB0b2tlbjoge3Rva2VuID8gXCJva1wiIDogXCJyZXF1ZXN0aW5nXCJ9XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDIuKSBJZGVudGlmeSB0aGlzIERldmljZSBieSBpdCdzIG1hYyBhZGRyZXNzICd7TUFDfSc6XG4gICAgICAgICAgICAgICAgICAgIHtkZXZpY2UgPyA8cHJlPntKU09OLnN0cmluZ2lmeShkZXZpY2UsIG51bGwsIDIpfTwvcHJlPiA6IFwicmVxdWVzdGluZ1wifVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAzLikgUmV0cmlldmUgZXhpc3Rpbmcgb3IgY3JlYXRlIG5ldyBzb3VuZCBjYXJkczpcbiAgICAgICAgICAgICAgICAgICAgPFNvdW5kQ2FyZFNpbXVsYXRvci8+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDQuKSBMZXQgdGhlIHVzZXIgY3JlYXRlIHByZXNldHM6XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn07XG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})