webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PresetEditor.tsx":
/*!*************************************!*\
  !*** ./components/PresetEditor.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _libs_useStage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../libs/useStage */ \"./libs/useStage.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _jsxFileName = \"/Users/tobias/Developer/digitalstage/ov-simulator/components/PresetEditor.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\nvar ChannelActivator = function ChannelActivator(props) {\n  _s();\n\n  var numChannels = props.numChannels,\n      channels = props.channels,\n      onChange = props.onChange;\n  var enableChannel = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function (channelId) {\n    onChange(upsert(channels, channelId));\n  }, [channels]);\n  var disableChannel = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function (channelId) {\n    onChange(channels.filter(function (id) {\n      return id !== channelId;\n    }));\n  }, [channels]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: Array.from(Array(soundCard.numInputChannels).keys()).map(function (channelId) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          id: \"input-\" + channelId,\n          type: \"checkbox\",\n          value: channelId\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          htmlFor: \"input-\" + channelId,\n          children: channelId + 1\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true);\n    })\n  }, void 0, false);\n};\n\n_s(ChannelActivator, \"jqJT98q2Fz8PxfZqTMxwtebQNS0=\");\n\n_c = ChannelActivator;\n\nvar PresetEditor = function PresetEditor(props) {\n  _s2();\n\n  var soundCard = props.soundCard;\n\n  var _useStage = Object(_libs_useStage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(),\n      presets = _useStage.presets;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n      children: soundCard.name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: [soundCard.numInputChannels, \" input channels\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: [soundCard.numOutputChannels, \" output channels\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: [soundCard.sampleRate, \" Hz sample rate\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: presets.bySoundCard[soundCard._id] && presets.bySoundCard[soundCard._id].map(function (id) {\n          return presets.byId[id];\n        }).map(function (preset) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: [preset.name, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              children: [\"Input:\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                  children: Array.from(Array(soundCard.numInputChannels).keys()).map(function (channelId) {\n                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n                        id: \"input-\" + channelId,\n                        type: \"checkbox\",\n                        value: channelId\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 65,\n                        columnNumber: 49\n                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n                        htmlFor: \"input-\" + channelId,\n                        children: channelId + 1\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 66,\n                        columnNumber: 49\n                      }, _this)]\n                    }, void 0, true);\n                  })\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 62,\n                  columnNumber: 37\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 61,\n                columnNumber: 33\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 59,\n              columnNumber: 29\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              children: [\"Output:\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                  children: Array.from(Array(soundCard.numOutputChannels).keys()).map(function (channelId) {\n                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n                        id: \"output-\" + channelId,\n                        type: \"checkbox\",\n                        value: channelId\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 78,\n                        columnNumber: 49\n                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n                        htmlFor: \"output-\" + channelId,\n                        children: channelId + 1\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 79,\n                        columnNumber: 49\n                      }, _this)]\n                    }, void 0, true);\n                  })\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 75,\n                  columnNumber: 37\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 74,\n                columnNumber: 33\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 72,\n              columnNumber: 29\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 25\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 41,\n    columnNumber: 9\n  }, _this);\n};\n\n_s2(PresetEditor, \"ZI+ANa380MXm61R17YTaLh5v+Wc=\", false, function () {\n  return [_libs_useStage__WEBPACK_IMPORTED_MODULE_1__[\"default\"]];\n});\n\n_c2 = PresetEditor;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PresetEditor);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ChannelActivator\");\n$RefreshReg$(_c2, \"PresetEditor\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QcmVzZXRFZGl0b3IudHN4PzgzYjEiXSwibmFtZXMiOlsiQ2hhbm5lbEFjdGl2YXRvciIsInByb3BzIiwibnVtQ2hhbm5lbHMiLCJjaGFubmVscyIsIm9uQ2hhbmdlIiwiZW5hYmxlQ2hhbm5lbCIsInVzZUNhbGxiYWNrIiwiY2hhbm5lbElkIiwidXBzZXJ0IiwiZGlzYWJsZUNoYW5uZWwiLCJmaWx0ZXIiLCJpZCIsIkFycmF5IiwiZnJvbSIsInNvdW5kQ2FyZCIsIm51bUlucHV0Q2hhbm5lbHMiLCJrZXlzIiwibWFwIiwiUHJlc2V0RWRpdG9yIiwidXNlU3RhZ2UiLCJwcmVzZXRzIiwibmFtZSIsIm51bU91dHB1dENoYW5uZWxzIiwic2FtcGxlUmF0ZSIsImJ5U291bmRDYXJkIiwiX2lkIiwiYnlJZCIsInByZXNldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOztBQUdBLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsS0FBRCxFQUluQjtBQUFBOztBQUFBLE1BQ0tDLFdBREwsR0FDd0NELEtBRHhDLENBQ0tDLFdBREw7QUFBQSxNQUNrQkMsUUFEbEIsR0FDd0NGLEtBRHhDLENBQ2tCRSxRQURsQjtBQUFBLE1BQzRCQyxRQUQ1QixHQUN3Q0gsS0FEeEMsQ0FDNEJHLFFBRDVCO0FBR0YsTUFBTUMsYUFBYSxHQUFHQyx5REFBVyxDQUFDLFVBQUNDLFNBQUQsRUFBdUI7QUFDckRILFlBQVEsQ0FBQ0ksTUFBTSxDQUFDTCxRQUFELEVBQVdJLFNBQVgsQ0FBUCxDQUFSO0FBQ0gsR0FGZ0MsRUFFOUIsQ0FBQ0osUUFBRCxDQUY4QixDQUFqQztBQUlBLE1BQU1NLGNBQWMsR0FBR0gseURBQVcsQ0FBQyxVQUFDQyxTQUFELEVBQXVCO0FBQ3RESCxZQUFRLENBQUNELFFBQVEsQ0FBQ08sTUFBVCxDQUFnQixVQUFBQyxFQUFFO0FBQUEsYUFBSUEsRUFBRSxLQUFLSixTQUFY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QSx3Q0FDdkQ7QUFBQSw4Q0FDSTtBQUFPLDBCQUFFLEVBQUUsWUFBWUEsU0FBdkI7QUFBa0MsNEJBQUksRUFBQyxVQUF2QztBQUFrRCw2QkFBSyxFQUFFQTtBQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURKLGVBRUk7QUFBTywrQkFBTyxFQUFFLFlBQVlBLFNBQTVCO0FBQUEsa0NBQXdDQSxTQUFTLEdBQUc7QUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFGSjtBQUFBLG9DQUR1RDtBQUFBLG1CQUExRDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFmSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRDRHO0FBQUEsU0FBekU7QUFEM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFiSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQW1ESCxDQXpERDs7SUFBTVcsWTtVQUlnQkMsc0Q7OztNQUpoQkQsWTtBQTBEU0EsMkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1ByZXNldEVkaXRvci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NvdW5kQ2FyZH0gZnJvbSBcIi4uL3V0aWxzL3R5cGVzL1NvdW5kQ2FyZFwiO1xuaW1wb3J0IHVzZVN0YWdlIGZyb20gXCIuLi9saWJzL3VzZVN0YWdlXCI7XG5pbXBvcnQge3VzZUNhbGxiYWNrfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBpbmRleE9mIGZyb20gJ2xvZGFzaC9pbmRleE9mJztcblxuY29uc3QgQ2hhbm5lbEFjdGl2YXRvciA9IChwcm9wczoge1xuICAgIG51bUNoYW5uZWxzOiBudW1iZXI7XG4gICAgY2hhbm5lbHM6IG51bWJlcltdO1xuICAgIG9uQ2hhbmdlOiAoY2hhbm5lbHM6IG51bWJlcltdKSA9PiB2b2lkO1xufSkgPT4ge1xuICAgIGNvbnN0IHtudW1DaGFubmVscywgY2hhbm5lbHMsIG9uQ2hhbmdlfSA9IHByb3BzO1xuXG4gICAgY29uc3QgZW5hYmxlQ2hhbm5lbCA9IHVzZUNhbGxiYWNrKChjaGFubmVsSWQ6IG51bWJlcikgPT4ge1xuICAgICAgICBvbkNoYW5nZSh1cHNlcnQoY2hhbm5lbHMsIGNoYW5uZWxJZCkpO1xuICAgIH0sIFtjaGFubmVsc10pO1xuXG4gICAgY29uc3QgZGlzYWJsZUNoYW5uZWwgPSB1c2VDYWxsYmFjaygoY2hhbm5lbElkOiBudW1iZXIpID0+IHtcbiAgICAgICAgb25DaGFuZ2UoY2hhbm5lbHMuZmlsdGVyKGlkID0+IGlkICE9PSBjaGFubmVsSWQpKTtcbiAgICB9LCBbY2hhbm5lbHNdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7QXJyYXkuZnJvbShBcnJheShzb3VuZENhcmQubnVtSW5wdXRDaGFubmVscykua2V5cygpKS5tYXAoY2hhbm5lbElkID0+IChcbiAgICAgICAgICAgICAgICA8PlxuXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD17XCJpbnB1dC1cIiArIGNoYW5uZWxJZH0gdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9e2NoYW5uZWxJZH0vPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17XCJpbnB1dC1cIiArIGNoYW5uZWxJZH0+e2NoYW5uZWxJZCArIDF9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC8+XG4gICAgKVxufTtcblxuY29uc3QgUHJlc2V0RWRpdG9yID0gKHByb3BzOiB7XG4gICAgc291bmRDYXJkOiBTb3VuZENhcmRcbn0pID0+IHtcbiAgICBjb25zdCB7c291bmRDYXJkfSA9IHByb3BzO1xuICAgIGNvbnN0IHtwcmVzZXRzfSA9IHVzZVN0YWdlKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgzPntzb3VuZENhcmQubmFtZX08L2gzPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAge3NvdW5kQ2FyZC5udW1JbnB1dENoYW5uZWxzfSBpbnB1dCBjaGFubmVsc1xuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICB7c291bmRDYXJkLm51bU91dHB1dENoYW5uZWxzfSBvdXRwdXQgY2hhbm5lbHNcbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAge3NvdW5kQ2FyZC5zYW1wbGVSYXRlfSBIeiBzYW1wbGUgcmF0ZVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAge3ByZXNldHMuYnlTb3VuZENhcmRbc291bmRDYXJkLl9pZF0gJiYgcHJlc2V0cy5ieVNvdW5kQ2FyZFtzb3VuZENhcmQuX2lkXS5tYXAoaWQgPT4gcHJlc2V0cy5ieUlkW2lkXSkubWFwKHByZXNldCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcmVzZXQubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5wdXQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7QXJyYXkuZnJvbShBcnJheShzb3VuZENhcmQubnVtSW5wdXRDaGFubmVscykua2V5cygpKS5tYXAoKGNoYW5uZWxJZCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPXtcImlucHV0LVwiICsgY2hhbm5lbElkfSB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT17Y2hhbm5lbElkfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17XCJpbnB1dC1cIiArIGNoYW5uZWxJZH0+e2NoYW5uZWxJZCArIDF9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT3V0cHV0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge0FycmF5LmZyb20oQXJyYXkoc291bmRDYXJkLm51bU91dHB1dENoYW5uZWxzKS5rZXlzKCkpLm1hcCgoY2hhbm5lbElkKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9e1wib3V0cHV0LVwiICsgY2hhbm5lbElkfSB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT17Y2hhbm5lbElkfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17XCJvdXRwdXQtXCIgKyBjaGFubmVsSWR9PntjaGFubmVsSWQgKyAxfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn07XG5leHBvcnQgZGVmYXVsdCBQcmVzZXRFZGl0b3I7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/PresetEditor.tsx\n");

/***/ })

})