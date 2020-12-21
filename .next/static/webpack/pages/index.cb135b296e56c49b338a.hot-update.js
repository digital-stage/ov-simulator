webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PresetEditor.tsx":
/*!*************************************!*\
  !*** ./components/PresetEditor.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_tobias_Developer_digitalstage_ov_simulator_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _libs_useStage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../libs/useStage */ \"./libs/useStage.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var lodash_indexOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/indexOf */ \"./node_modules/lodash/indexOf.js\");\n/* harmony import */ var lodash_indexOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_indexOf__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\nvar _jsxFileName = \"/Users/tobias/Developer/digitalstage/ov-simulator/components/PresetEditor.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\n\nvar upsert = function upsert(arr, value) {\n  if (!arr) {\n    return [value];\n  }\n\n  if (lodash_indexOf__WEBPACK_IMPORTED_MODULE_4___default()(arr, value) === -1) {\n    return [].concat(Object(_Users_tobias_Developer_digitalstage_ov_simulator_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr), [value]);\n  }\n\n  return Object(_Users_tobias_Developer_digitalstage_ov_simulator_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr);\n};\n\nvar ChannelActivator = function ChannelActivator(props) {\n  _s();\n\n  var numChannels = props.numChannels,\n      channels = props.channels,\n      onChange = props.onChange;\n  var enableChannel = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useCallback\"])(function (channelId) {\n    onChange(upsert(channels, channelId));\n  }, [channels]);\n  var disableChannel = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useCallback\"])(function (channelId) {\n    onChange(channels.filter(function (id) {\n      return id !== channelId;\n    }));\n  }, [channels]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: Array.from(Array(numChannels).keys()).map(function (channelId) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"input\", {\n          id: \"input-\" + channelId,\n          type: \"checkbox\",\n          value: channelId\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"label\", {\n          htmlFor: \"input-\" + channelId,\n          children: channelId + 1\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true);\n    })\n  }, void 0, false);\n};\n\n_s(ChannelActivator, \"jqJT98q2Fz8PxfZqTMxwtebQNS0=\");\n\n_c = ChannelActivator;\n\nvar PresetEditor = function PresetEditor(props) {\n  _s2();\n\n  var soundCard = props.soundCard;\n\n  var _useStage = Object(_libs_useStage__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(),\n      presets = _useStage.presets;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h3\", {\n      children: soundCard.name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"ul\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"li\", {\n        children: [soundCard.numInputChannels, \" input channels\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"li\", {\n        children: [soundCard.numOutputChannels, \" output channels\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"li\", {\n        children: [soundCard.sampleRate, \" Hz sample rate\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"ul\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"li\", {\n        children: presets.bySoundCard[soundCard._id] && presets.bySoundCard[soundCard._id].map(function (id) {\n          return presets.byId[id];\n        }).map(function (preset) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n            children: [preset.name, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n              children: [\"Input:\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"ul\", {\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"li\", {\n                  children: Array.from(Array(soundCard.numInputChannels).keys()).map(function (channelId) {\n                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"input\", {\n                        id: \"input-\" + channelId,\n                        type: \"checkbox\",\n                        value: channelId\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 75,\n                        columnNumber: 49\n                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"label\", {\n                        htmlFor: \"input-\" + channelId,\n                        children: channelId + 1\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 76,\n                        columnNumber: 49\n                      }, _this)]\n                    }, void 0, true);\n                  })\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 72,\n                  columnNumber: 37\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 71,\n                columnNumber: 33\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 69,\n              columnNumber: 29\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n              children: [\"Output:\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"ul\", {\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"li\", {\n                  children: Array.from(Array(soundCard.numOutputChannels).keys()).map(function (channelId) {\n                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"input\", {\n                        id: \"output-\" + channelId,\n                        type: \"checkbox\",\n                        value: channelId\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 88,\n                        columnNumber: 49\n                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"label\", {\n                        htmlFor: \"output-\" + channelId,\n                        children: channelId + 1\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 89,\n                        columnNumber: 49\n                      }, _this)]\n                    }, void 0, true);\n                  })\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 85,\n                  columnNumber: 37\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 84,\n                columnNumber: 33\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 82,\n              columnNumber: 29\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 67,\n            columnNumber: 25\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 51,\n    columnNumber: 9\n  }, _this);\n};\n\n_s2(PresetEditor, \"ZI+ANa380MXm61R17YTaLh5v+Wc=\", false, function () {\n  return [_libs_useStage__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n});\n\n_c2 = PresetEditor;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PresetEditor);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ChannelActivator\");\n$RefreshReg$(_c2, \"PresetEditor\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QcmVzZXRFZGl0b3IudHN4PzgzYjEiXSwibmFtZXMiOlsidXBzZXJ0IiwiYXJyIiwidmFsdWUiLCJpbmRleE9mIiwiQ2hhbm5lbEFjdGl2YXRvciIsInByb3BzIiwibnVtQ2hhbm5lbHMiLCJjaGFubmVscyIsIm9uQ2hhbmdlIiwiZW5hYmxlQ2hhbm5lbCIsInVzZUNhbGxiYWNrIiwiY2hhbm5lbElkIiwiZGlzYWJsZUNoYW5uZWwiLCJmaWx0ZXIiLCJpZCIsIkFycmF5IiwiZnJvbSIsImtleXMiLCJtYXAiLCJQcmVzZXRFZGl0b3IiLCJzb3VuZENhcmQiLCJ1c2VTdGFnZSIsInByZXNldHMiLCJuYW1lIiwibnVtSW5wdXRDaGFubmVscyIsIm51bU91dHB1dENoYW5uZWxzIiwic2FtcGxlUmF0ZSIsImJ5U291bmRDYXJkIiwiX2lkIiwiYnlJZCIsInByZXNldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUlDLEdBQUosRUFBd0JDLEtBQXhCLEVBQTBDO0FBQ3JELE1BQUksQ0FBQ0QsR0FBTCxFQUFVO0FBQ04sV0FBTyxDQUFDQyxLQUFELENBQVA7QUFDSDs7QUFDRCxNQUFJQyxxREFBTyxDQUFJRixHQUFKLEVBQVNDLEtBQVQsQ0FBUCxLQUEyQixDQUFDLENBQWhDLEVBQW1DO0FBQy9CLGdMQUFXRCxHQUFYLElBQWdCQyxLQUFoQjtBQUNIOztBQUNELG9LQUFXRCxHQUFYO0FBQ0gsQ0FSRDs7QUFVQSxJQUFNRyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLEtBQUQsRUFJbkI7QUFBQTs7QUFBQSxNQUNLQyxXQURMLEdBQ3dDRCxLQUR4QyxDQUNLQyxXQURMO0FBQUEsTUFDa0JDLFFBRGxCLEdBQ3dDRixLQUR4QyxDQUNrQkUsUUFEbEI7QUFBQSxNQUM0QkMsUUFENUIsR0FDd0NILEtBRHhD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QUFBQTtBQUFBLCtCQUZKO0FBQUEsb0NBRHNEO0FBQUEsbUJBQXpEO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKLGVBZUk7QUFBQSxpREFFSTtBQUFBLHVDQUNJO0FBQUEsNEJBQ0tJLEtBQUssQ0FBQ0MsSUFBTixDQUFXRCxLQUFLLENBQUNLLFNBQVMsQ0FBQ0ssaUJBQVgsQ0FBTCxDQUFtQ1IsSUFBbkMsRUFBWCxFQUFzREMsR0FBdEQsQ0FBMEQsVUFBQ1AsU0FBRDtBQUFBLHdDQUN2RDtBQUFBLDhDQUNJO0FBQU8sMEJBQUUsRUFBRSxZQUFZQSxTQUF2QjtBQUFrQyw0QkFBSSxFQUFDLFVBQXZDO0FBQWtELDZCQUFLLEVBQUVBO0FBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBREosZUFFSTtBQUFPLCtCQUFPLEVBQUUsWUFBWUEsU0FBNUI7QUFBQSxrQ0FBd0NBLFNBQVMsR0FBRztBQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUZKO0FBQUEsb0NBRHVEO0FBQUEsbUJBQTFEO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFENEc7QUFBQSxTQUF6RTtBQUQzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBbURILENBekREOztJQUFNUSxZO1VBSWdCRSxzRDs7O01BSmhCRixZO0FBMERTQSwyRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUHJlc2V0RWRpdG9yLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U291bmRDYXJkfSBmcm9tIFwiLi4vdXRpbHMvdHlwZXMvU291bmRDYXJkXCI7XG5pbXBvcnQgdXNlU3RhZ2UgZnJvbSBcIi4uL2xpYnMvdXNlU3RhZ2VcIjtcbmltcG9ydCB7dXNlQ2FsbGJhY2t9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGluZGV4T2YgZnJvbSAnbG9kYXNoL2luZGV4T2YnO1xuXG5jb25zdCB1cHNlcnQgPSA8VD4oYXJyOiBSZWFkb25seTxUW10+LCB2YWx1ZTogVCk6IFRbXSA9PiB7XG4gICAgaWYgKCFhcnIpIHtcbiAgICAgICAgcmV0dXJuIFt2YWx1ZV07XG4gICAgfVxuICAgIGlmIChpbmRleE9mPFQ+KGFyciwgdmFsdWUpID09PSAtMSkge1xuICAgICAgICByZXR1cm4gWy4uLmFyciwgdmFsdWVdO1xuICAgIH1cbiAgICByZXR1cm4gWy4uLmFycl07XG59O1xuXG5jb25zdCBDaGFubmVsQWN0aXZhdG9yID0gKHByb3BzOiB7XG4gICAgbnVtQ2hhbm5lbHM6IG51bWJlcjtcbiAgICBjaGFubmVsczogbnVtYmVyW107XG4gICAgb25DaGFuZ2U6IChjaGFubmVsczogbnVtYmVyW10pID0+IHZvaWQ7XG59KSA9PiB7XG4gICAgY29uc3Qge251bUNoYW5uZWxzLCBjaGFubmVscywgb25DaGFuZ2V9ID0gcHJvcHM7XG5cbiAgICBjb25zdCBlbmFibGVDaGFubmVsID0gdXNlQ2FsbGJhY2soKGNoYW5uZWxJZDogbnVtYmVyKSA9PiB7XG4gICAgICAgIG9uQ2hhbmdlKHVwc2VydChjaGFubmVscywgY2hhbm5lbElkKSk7XG4gICAgfSwgW2NoYW5uZWxzXSk7XG5cbiAgICBjb25zdCBkaXNhYmxlQ2hhbm5lbCA9IHVzZUNhbGxiYWNrKChjaGFubmVsSWQ6IG51bWJlcikgPT4ge1xuICAgICAgICBvbkNoYW5nZShjaGFubmVscy5maWx0ZXIoaWQgPT4gaWQgIT09IGNoYW5uZWxJZCkpO1xuICAgIH0sIFtjaGFubmVsc10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHtBcnJheS5mcm9tKEFycmF5KG51bUNoYW5uZWxzKS5rZXlzKCkpLm1hcChjaGFubmVsSWQgPT4gKFxuICAgICAgICAgICAgICAgIDw+XG5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPXtcImlucHV0LVwiICsgY2hhbm5lbElkfSB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT17Y2hhbm5lbElkfS8+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtcImlucHV0LVwiICsgY2hhbm5lbElkfT57Y2hhbm5lbElkICsgMX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8Lz5cbiAgICApXG59O1xuXG5jb25zdCBQcmVzZXRFZGl0b3IgPSAocHJvcHM6IHtcbiAgICBzb3VuZENhcmQ6IFNvdW5kQ2FyZFxufSkgPT4ge1xuICAgIGNvbnN0IHtzb3VuZENhcmR9ID0gcHJvcHM7XG4gICAgY29uc3Qge3ByZXNldHN9ID0gdXNlU3RhZ2UoKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDM+e3NvdW5kQ2FyZC5uYW1lfTwvaDM+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICB7c291bmRDYXJkLm51bUlucHV0Q2hhbm5lbHN9IGlucHV0IGNoYW5uZWxzXG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIHtzb3VuZENhcmQubnVtT3V0cHV0Q2hhbm5lbHN9IG91dHB1dCBjaGFubmVsc1xuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICB7c291bmRDYXJkLnNhbXBsZVJhdGV9IEh6IHNhbXBsZSByYXRlXG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICB7cHJlc2V0cy5ieVNvdW5kQ2FyZFtzb3VuZENhcmQuX2lkXSAmJiBwcmVzZXRzLmJ5U291bmRDYXJkW3NvdW5kQ2FyZC5faWRdLm1hcChpZCA9PiBwcmVzZXRzLmJ5SWRbaWRdKS5tYXAocHJlc2V0ID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3ByZXNldC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnB1dDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtBcnJheS5mcm9tKEFycmF5KHNvdW5kQ2FyZC5udW1JbnB1dENoYW5uZWxzKS5rZXlzKCkpLm1hcCgoY2hhbm5lbElkKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9e1wiaW5wdXQtXCIgKyBjaGFubmVsSWR9IHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPXtjaGFubmVsSWR9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtcImlucHV0LVwiICsgY2hhbm5lbElkfT57Y2hhbm5lbElkICsgMX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPdXRwdXQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7QXJyYXkuZnJvbShBcnJheShzb3VuZENhcmQubnVtT3V0cHV0Q2hhbm5lbHMpLmtleXMoKSkubWFwKChjaGFubmVsSWQpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD17XCJvdXRwdXQtXCIgKyBjaGFubmVsSWR9IHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPXtjaGFubmVsSWR9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtcIm91dHB1dC1cIiArIGNoYW5uZWxJZH0+e2NoYW5uZWxJZCArIDF9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufTtcbmV4cG9ydCBkZWZhdWx0IFByZXNldEVkaXRvcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/PresetEditor.tsx\n");

/***/ })

})