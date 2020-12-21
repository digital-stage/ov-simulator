webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _libs_useAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../libs/useAuth */ \"./libs/useAuth/index.tsx\");\n/* harmony import */ var _libs_useStage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../libs/useStage */ \"./libs/useStage.tsx\");\n/* harmony import */ var _components_SoundCardSimulator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SoundCardSimulator */ \"./components/SoundCardSimulator.tsx\");\n\n\nvar _jsxFileName = \"/Users/tobias/Developer/digitalstage/ov-simulator/pages/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar email = \"test@digital-stage.org\";\nvar password = \"testtesttest\";\n\nvar Index = function Index() {\n  _s();\n\n  var _useAuth = Object(_libs_useAuth__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(),\n      signInWithEmailAndPassword = _useAuth.signInWithEmailAndPassword,\n      token = _useAuth.token;\n\n  var _useStage = Object(_libs_useStage__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(),\n      device = _useStage.device,\n      soundCards = _useStage.soundCards;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    // Sign in\n    signInWithEmailAndPassword(email, password);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"Usually any ov-client will do the following steps when connecting:\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: [\"1.) Get token: \", token ? \"ok\" : \"requesting\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: [\"2.) Identify this Device by it's mac address '\", _libs_useStage__WEBPACK_IMPORTED_MODULE_3__[\"MAC\"], \"':\", device ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"pre\", {\n          children: JSON.stringify(device, null, 2)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 31\n        }, _this) : \"requesting\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: [\"The ov-client now can update the server about the connected sound cards.\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_SoundCardSimulator__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"Inside the webclient we now have the following entities:\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      children: [device && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: [\"Change this ov-client:\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"select\", {\n              children: device.soundCardIds.map(function (id) {\n                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n                  value: id,\n                  children: soundCards.byId[id].name\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 48,\n                  columnNumber: 41\n                }, _this);\n              })\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 46,\n              columnNumber: 33\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 29\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 25\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 21\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: [\"Available sound cards:\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n          children: soundCards.allIds.map(function (id) {\n            return soundCards.byId[id];\n          }).map(function (soundCard) {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n              children: [soundCard.name, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                children: [\"PRESETS:\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {}, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 66,\n                    columnNumber: 41\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 65,\n                  columnNumber: 37\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n                  children: \"ADD PRESETS\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 70,\n                  columnNumber: 37\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 63,\n                columnNumber: 33\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 61,\n              columnNumber: 29\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Index, \"shucUOEgtNa10tJ4rdPNcNRBejc=\", false, function () {\n  return [_libs_useAuth__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _libs_useStage__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n});\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiZW1haWwiLCJwYXNzd29yZCIsIkluZGV4IiwidXNlQXV0aCIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwidG9rZW4iLCJ1c2VTdGFnZSIsImRldmljZSIsInNvdW5kQ2FyZHMiLCJ1c2VFZmZlY3QiLCJNQUMiLCJKU09OIiwic3RyaW5naWZ5Iiwic291bmRDYXJkSWRzIiwibWFwIiwiaWQiLCJieUlkIiwibmFtZSIsImFsbElkcyIsInNvdW5kQ2FyZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBRyx3QkFBZDtBQUNBLElBQU1DLFFBQVEsR0FBRyxjQUFqQjs7QUFHQSxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQUEsaUJBQzRCQyw2REFBTyxFQURuQztBQUFBLE1BQ1RDLDBCQURTLFlBQ1RBLDBCQURTO0FBQUEsTUFDbUJDLEtBRG5CLFlBQ21CQSxLQURuQjs7QUFBQSxrQkFFYUMsOERBQVEsRUFGckI7QUFBQSxNQUVUQyxNQUZTLGFBRVRBLE1BRlM7QUFBQSxNQUVEQyxVQUZDLGFBRURBLFVBRkM7O0FBSWhCQyx5REFBUyxDQUFDLFlBQU07QUFDWjtBQUNBTCw4QkFBMEIsQ0FBQ0osS0FBRCxFQUFRQyxRQUFSLENBQTFCO0FBQ0gsR0FIUSxFQUdOLEVBSE0sQ0FBVDtBQUtBLHNCQUNJO0FBQUEsNEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUlJO0FBQUEsOEJBQ0k7QUFBQSxzQ0FDb0JJLEtBQUssR0FBRyxJQUFILEdBQVUsWUFEbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFJSTtBQUFBLHFFQUNtREssa0RBRG5ELFFBRUtILE1BQU0sZ0JBQUc7QUFBQSxvQkFBTUksSUFBSSxDQUFDQyxTQUFMLENBQWVMLE1BQWYsRUFBdUIsSUFBdkIsRUFBNkIsQ0FBN0I7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFILEdBQWtELFlBRjdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpKLGVBUUk7QUFBQSw0R0FFSSxxRUFBQyxzRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpKLGVBaUJJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBakJKLGVBb0JJO0FBQUEsaUJBQ0tBLE1BQU0saUJBQ0g7QUFBQSwwREFFSTtBQUFBLGlDQUNJO0FBQUEsbUNBQ0k7QUFBQSx3QkFDS0EsTUFBTSxDQUFDTSxZQUFQLENBQW9CQyxHQUFwQixDQUF3QixVQUFBQyxFQUFFO0FBQUEsb0NBQ3ZCO0FBQVEsdUJBQUssRUFBRUEsRUFBZjtBQUFBLDRCQUNLUCxVQUFVLENBQUNRLElBQVgsQ0FBZ0JELEVBQWhCLEVBQW9CRTtBQUR6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUR1QjtBQUFBLGVBQTFCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZSLGVBaUJJO0FBQUEsMERBRUk7QUFBQSxvQkFDS1QsVUFBVSxDQUFDVSxNQUFYLENBQWtCSixHQUFsQixDQUFzQixVQUFBQyxFQUFFO0FBQUEsbUJBQUlQLFVBQVUsQ0FBQ1EsSUFBWCxDQUFnQkQsRUFBaEIsQ0FBSjtBQUFBLFdBQXhCLEVBQWlERCxHQUFqRCxDQUFxRCxVQUFBSyxTQUFTO0FBQUEsZ0NBQzNEO0FBQUEseUJBQ0tBLFNBQVMsQ0FBQ0YsSUFEZixlQUVJO0FBQUEsb0RBRUk7QUFBQSx5Q0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGSixlQU9JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRDJEO0FBQUEsV0FBOUQ7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWpCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFwQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUE4REgsQ0F2RUQ7O0dBQU1mLEs7VUFDMENDLHFELEVBQ2ZHLHNEOzs7S0FGM0JKLEs7QUF3RVNBLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHVzZUF1dGggZnJvbSBcIi4uL2xpYnMvdXNlQXV0aFwiO1xuaW1wb3J0IHVzZVN0YWdlLCB7TUFDfSBmcm9tIFwiLi4vbGlicy91c2VTdGFnZVwiO1xuaW1wb3J0IFNvdW5kQ2FyZFNpbXVsYXRvciBmcm9tIFwiLi4vY29tcG9uZW50cy9Tb3VuZENhcmRTaW11bGF0b3JcIjtcblxuY29uc3QgZW1haWwgPSBcInRlc3RAZGlnaXRhbC1zdGFnZS5vcmdcIjtcbmNvbnN0IHBhc3N3b3JkID0gXCJ0ZXN0dGVzdHRlc3RcIjtcblxuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgICBjb25zdCB7c2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQsIHRva2VufSA9IHVzZUF1dGgoKTtcbiAgICBjb25zdCB7ZGV2aWNlLCBzb3VuZENhcmRzfSA9IHVzZVN0YWdlKCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAvLyBTaWduIGluXG4gICAgICAgIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZCk7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIFVzdWFsbHkgYW55IG92LWNsaWVudCB3aWxsIGRvIHRoZSBmb2xsb3dpbmcgc3RlcHMgd2hlbiBjb25uZWN0aW5nOlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgMS4pIEdldCB0b2tlbjoge3Rva2VuID8gXCJva1wiIDogXCJyZXF1ZXN0aW5nXCJ9XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDIuKSBJZGVudGlmeSB0aGlzIERldmljZSBieSBpdCdzIG1hYyBhZGRyZXNzICd7TUFDfSc6XG4gICAgICAgICAgICAgICAgICAgIHtkZXZpY2UgPyA8cHJlPntKU09OLnN0cmluZ2lmeShkZXZpY2UsIG51bGwsIDIpfTwvcHJlPiA6IFwicmVxdWVzdGluZ1wifVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICBUaGUgb3YtY2xpZW50IG5vdyBjYW4gdXBkYXRlIHRoZSBzZXJ2ZXIgYWJvdXQgdGhlIGNvbm5lY3RlZCBzb3VuZCBjYXJkcy5cbiAgICAgICAgICAgICAgICAgICAgPFNvdW5kQ2FyZFNpbXVsYXRvci8+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBJbnNpZGUgdGhlIHdlYmNsaWVudCB3ZSBub3cgaGF2ZSB0aGUgZm9sbG93aW5nIGVudGl0aWVzOlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHtkZXZpY2UgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICBDaGFuZ2UgdGhpcyBvdi1jbGllbnQ6XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RldmljZS5zb3VuZENhcmRJZHMubWFwKGlkID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtpZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzb3VuZENhcmRzLmJ5SWRbaWRdLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIEF2YWlsYWJsZSBzb3VuZCBjYXJkczpcbiAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAge3NvdW5kQ2FyZHMuYWxsSWRzLm1hcChpZCA9PiBzb3VuZENhcmRzLmJ5SWRbaWRdKS5tYXAoc291bmRDYXJkID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzb3VuZENhcmQubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQUkVTRVRTOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBREQgUFJFU0VUU1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn07XG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})