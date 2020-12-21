webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PresetEditor.tsx":
/*!*************************************!*\
  !*** ./components/PresetEditor.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _libs_useStage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../libs/useStage */ \"./libs/useStage.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_upsert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/upsert */ \"./utils/upsert.ts\");\n/* harmony import */ var _utils_types_SocketEvents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/types/SocketEvents */ \"./utils/types/SocketEvents.ts\");\n\n\n\nvar _jsxFileName = \"/Users/tobias/Developer/digitalstage/ov-simulator/components/PresetEditor.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\n\n\n\nvar ChannelActivator = function ChannelActivator(props) {\n  _s();\n\n  var numChannels = props.numChannels,\n      channels = props.channels,\n      onChange = props.onChange;\n\n  var _useStage = Object(_libs_useStage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(),\n      socket = _useStage.socket;\n\n  var enableChannel = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function (channelId) {\n    onChange(Object(_utils_upsert__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(channels, channelId));\n  }, [channels]);\n  var disableChannel = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function (channelId) {\n    onChange(channels.filter(function (id) {\n      return id !== channelId;\n    }));\n  }, [channels]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: Array.from(Array(numChannels).keys()).map(function (channelId) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          id: \"input-\" + channelId,\n          type: \"checkbox\",\n          value: channelId,\n          checked: channels.indexOf(channelId) !== -1,\n          onChange: function onChange(e) {\n            if (e.currentTarget.checked) {\n              enableChannel(channelId);\n            } else {\n              disableChannel(channelId);\n            }\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          htmlFor: \"input-\" + channelId,\n          children: channelId + 1\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true);\n    })\n  }, void 0, false);\n};\n\n_s(ChannelActivator, \"FvqmI9bLY2pGzQLGDNdFCHv7iTI=\", false, function () {\n  return [_libs_useStage__WEBPACK_IMPORTED_MODULE_1__[\"default\"]];\n});\n\n_c = ChannelActivator;\n\nvar PresetEditor = function PresetEditor(props) {\n  _s2();\n\n  var soundCard = props.soundCard;\n\n  var _useStage2 = Object(_libs_useStage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(),\n      socket = _useStage2.socket,\n      presets = _useStage2.presets;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n      children: soundCard.name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: [soundCard.numInputChannels, \" input channels\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: [soundCard.numOutputChannels, \" output channels\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: [soundCard.sampleRate, \" Hz sample rate\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: [\"Presets:\", presets.bySoundCard[soundCard._id] && presets.bySoundCard[soundCard._id].map(function (id) {\n          return presets.byId[id];\n        }).map(function (preset) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            style: {\n              border: '1px solid black'\n            },\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h5\", {\n              style: {\n                margin: 0\n              },\n              children: preset.name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 76,\n              columnNumber: 29\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              style: {\n                margin: 0\n              },\n              children: [\"Input:\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ChannelActivator, {\n                numChannels: soundCard.numInputChannels,\n                channels: preset.inputChannels,\n                onChange: function onChange(channels) {\n                  socket.emit(_utils_types_SocketEvents__WEBPACK_IMPORTED_MODULE_4__[\"ClientDeviceEvents\"].CHANGE_TRACK_PRESET, {\n                    id: preset._id,\n                    update: {\n                      inputChannels: channels\n                    }\n                  });\n                }\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 85,\n                columnNumber: 33\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 81,\n              columnNumber: 29\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              style: {\n                margin: 0\n              },\n              children: [\"Output:\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ChannelActivator, {\n                numChannels: soundCard.numOutputChannels,\n                channels: preset.outputChannels,\n                onChange: function onChange(channels) {\n                  socket.emit(_utils_types_SocketEvents__WEBPACK_IMPORTED_MODULE_4__[\"ClientDeviceEvents\"].CHANGE_TRACK_PRESET, {\n                    id: preset._id,\n                    update: {\n                      outputChannels: channels\n                    }\n                  });\n                }\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 102,\n                columnNumber: 33\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 98,\n              columnNumber: 29\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              style: {\n                textAlign: 'right'\n              },\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n                onClick: function onClick() {},\n                children: \"Remove Preset\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 118,\n                columnNumber: 33\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 115,\n              columnNumber: 29\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 73,\n            columnNumber: 25\n          }, _this);\n        })]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        children: \"Add Preset\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 127,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 56,\n    columnNumber: 9\n  }, _this);\n};\n\n_s2(PresetEditor, \"2RS11EwG6Cn+2/EJurP+lz3NR04=\", false, function () {\n  return [_libs_useStage__WEBPACK_IMPORTED_MODULE_1__[\"default\"]];\n});\n\n_c2 = PresetEditor;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PresetEditor);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ChannelActivator\");\n$RefreshReg$(_c2, \"PresetEditor\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QcmVzZXRFZGl0b3IudHN4PzgzYjEiXSwibmFtZXMiOlsiQ2hhbm5lbEFjdGl2YXRvciIsInByb3BzIiwibnVtQ2hhbm5lbHMiLCJjaGFubmVscyIsIm9uQ2hhbmdlIiwidXNlU3RhZ2UiLCJzb2NrZXQiLCJlbmFibGVDaGFubmVsIiwidXNlQ2FsbGJhY2siLCJjaGFubmVsSWQiLCJ1cHNlcnQiLCJkaXNhYmxlQ2hhbm5lbCIsImZpbHRlciIsImlkIiwiQXJyYXkiLCJmcm9tIiwia2V5cyIsIm1hcCIsImluZGV4T2YiLCJlIiwiY3VycmVudFRhcmdldCIsImNoZWNrZWQiLCJQcmVzZXRFZGl0b3IiLCJzb3VuZENhcmQiLCJwcmVzZXRzIiwibmFtZSIsIm51bUlucHV0Q2hhbm5lbHMiLCJudW1PdXRwdXRDaGFubmVscyIsInNhbXBsZVJhdGUiLCJieVNvdW5kQ2FyZCIsIl9pZCIsImJ5SWQiLCJwcmVzZXQiLCJib3JkZXIiLCJtYXJnaW4iLCJpbnB1dENoYW5uZWxzIiwiZW1pdCIsIkNsaWVudERldmljZUV2ZW50cyIsIkNIQU5HRV9UUkFDS19QUkVTRVQiLCJ1cGRhdGUiLCJvdXRwdXRDaGFubmVscyIsInRleHRBbGlnbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxLQUFELEVBSW5CO0FBQUE7O0FBQUEsTUFDS0MsV0FETCxHQUN3Q0QsS0FEeEMsQ0FDS0MsV0FETDtBQUFBLE1BQ2tCQyxRQURsQixHQUN3Q0YsS0FEeEMsQ0FDa0JFLFFBRGxCO0FBQUEsTUFDNEJDLFFBRDVCLEdBQ3dDSCxLQUR4QyxDQUM0QkcsUUFENUI7O0FBQUEsa0JBRWVDLDhEQUFRLEVBRnZCO0FBQUEsTUFFS0MsTUFGTCxhQUVLQSxNQUZMOztBQUlGLE1BQU1DLGFBQWEsR0FBR0MseURBQVcsQ0FBQyxVQUFDQyxTQUFELEVBQXVCO0FBQ3JETCxZQUFRLENBQUNNLDZEQUFNLENBQUNQLFFBQUQsRUFBV00sU0FBWCxDQUFQLENBQVI7QUFDSCxHQUZnQyxFQUU5QixDQUFDTixRQUFELENBRjhCLENBQWpDO0FBSUEsTUFBTVEsY0FBYyxHQUFHSCx5REFBVyxDQUFDLFVBQUNDLFNBQUQsRUFBdUI7QUFDdERMLFlBQVEsQ0FBQ0QsUUFBUSxDQUFDUyxNQUFULENBQWdCLFVBQUFDLEVBQUU7QUFBQSxhQUFJQSxFQUFFLEtBQUtKLFNBQVg7QUFBQSxLQUFsQixDQUFELENBQVI7QUFDSCxHQUZpQyxFQUUvQixDQUFDTixRQUFELENBRitCLENBQWxDO0FBSUEsc0JBQ0k7QUFBQSxjQUNLVyxLQUFLLENBQUNDLElBQU4sQ0FBV0QsS0FBSyxDQUFDWixXQUFELENBQUwsQ0FBbUJjLElBQW5CLEVBQVgsRUFBc0NDLEdBQXRDLENBQTBDLFVBQUFSLFNBQVM7QUFBQSwwQkFDaEQ7QUFBQSxnQ0FDSTtBQUNJLFlBQUUsRUFBRSxXQUFXQSxTQURuQjtBQUVJLGNBQUksRUFBQyxVQUZUO0FBR0ksZUFBSyxFQUFFQSxTQUhYO0FBSUksaUJBQU8sRUFBRU4sUUFBUSxDQUFDZSxPQUFULENBQWlCVCxTQUFqQixNQUFnQyxDQUFDLENBSjlDO0FBS0ksa0JBQVEsRUFBRSxrQkFBQVUsQ0FBQyxFQUFJO0FBQ1gsZ0JBQUlBLENBQUMsQ0FBQ0MsYUFBRixDQUFnQkMsT0FBcEIsRUFBNkI7QUFDekJkLDJCQUFhLENBQUNFLFNBQUQsQ0FBYjtBQUNILGFBRkQsTUFFTztBQUNIRSw0QkFBYyxDQUFDRixTQUFELENBQWQ7QUFDSDtBQUNKO0FBWEw7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQWNJO0FBQU8saUJBQU8sRUFBRSxXQUFXQSxTQUEzQjtBQUFBLG9CQUF1Q0EsU0FBUyxHQUFHO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZEo7QUFBQSxzQkFEZ0Q7QUFBQSxLQUFuRDtBQURMLG1CQURKO0FBc0JILENBdENEOztHQUFNVCxnQjtVQU1lSyxzRDs7O0tBTmZMLGdCOztBQXdDTixJQUFNc0IsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ3JCLEtBQUQsRUFFZjtBQUFBOztBQUFBLE1BQ0tzQixTQURMLEdBQ2tCdEIsS0FEbEIsQ0FDS3NCLFNBREw7O0FBQUEsbUJBRXdCbEIsOERBQVEsRUFGaEM7QUFBQSxNQUVLQyxNQUZMLGNBRUtBLE1BRkw7QUFBQSxNQUVha0IsT0FGYixjQUVhQSxPQUZiOztBQUlGLHNCQUNJO0FBQUEsNEJBQ0k7QUFBQSxnQkFBS0QsU0FBUyxDQUFDRTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUVJO0FBQUEsOEJBQ0k7QUFBQSxtQkFDS0YsU0FBUyxDQUFDRyxnQkFEZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUlJO0FBQUEsbUJBQ0tILFNBQVMsQ0FBQ0ksaUJBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkosZUFPSTtBQUFBLG1CQUNLSixTQUFTLENBQUNLLFVBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkosZUFhSTtBQUFBLDhCQUNJO0FBQUEsK0JBRUtKLE9BQU8sQ0FBQ0ssV0FBUixDQUFvQk4sU0FBUyxDQUFDTyxHQUE5QixLQUFzQ04sT0FBTyxDQUFDSyxXQUFSLENBQW9CTixTQUFTLENBQUNPLEdBQTlCLEVBQW1DYixHQUFuQyxDQUF1QyxVQUFBSixFQUFFO0FBQUEsaUJBQUlXLE9BQU8sQ0FBQ08sSUFBUixDQUFhbEIsRUFBYixDQUFKO0FBQUEsU0FBekMsRUFBK0RJLEdBQS9ELENBQW1FLFVBQUFlLE1BQU07QUFBQSw4QkFDNUc7QUFBSyxpQkFBSyxFQUFFO0FBQ1JDLG9CQUFNLEVBQUU7QUFEQSxhQUFaO0FBQUEsb0NBR0k7QUFBSSxtQkFBSyxFQUFFO0FBQ1BDLHNCQUFNLEVBQUU7QUFERCxlQUFYO0FBQUEsd0JBR0tGLE1BQU0sQ0FBQ1A7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhKLGVBUUk7QUFBRyxtQkFBSyxFQUFFO0FBQ05TLHNCQUFNLEVBQUU7QUFERixlQUFWO0FBQUEsZ0RBSUkscUVBQUMsZ0JBQUQ7QUFDSSwyQkFBVyxFQUFFWCxTQUFTLENBQUNHLGdCQUQzQjtBQUVJLHdCQUFRLEVBQUVNLE1BQU0sQ0FBQ0csYUFGckI7QUFHSSx3QkFBUSxFQUFFLGtCQUFBaEMsUUFBUSxFQUFJO0FBQ2xCRyx3QkFBTSxDQUFDOEIsSUFBUCxDQUFZQyw0RUFBa0IsQ0FBQ0MsbUJBQS9CLEVBQW9EO0FBQ2hEekIsc0JBQUUsRUFBRW1CLE1BQU0sQ0FBQ0YsR0FEcUM7QUFFaERTLDBCQUFNLEVBQUU7QUFDSkosbUNBQWEsRUFBRWhDO0FBRFg7QUFGd0MsbUJBQXBEO0FBTUg7QUFWTDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFSSixlQXlCSTtBQUFHLG1CQUFLLEVBQUU7QUFDTitCLHNCQUFNLEVBQUU7QUFERixlQUFWO0FBQUEsaURBSUkscUVBQUMsZ0JBQUQ7QUFDSSwyQkFBVyxFQUFFWCxTQUFTLENBQUNJLGlCQUQzQjtBQUVJLHdCQUFRLEVBQUVLLE1BQU0sQ0FBQ1EsY0FGckI7QUFHSSx3QkFBUSxFQUFFLGtCQUFBckMsUUFBUSxFQUFJO0FBQ2xCRyx3QkFBTSxDQUFDOEIsSUFBUCxDQUFZQyw0RUFBa0IsQ0FBQ0MsbUJBQS9CLEVBQW9EO0FBQ2hEekIsc0JBQUUsRUFBRW1CLE1BQU0sQ0FBQ0YsR0FEcUM7QUFFaERTLDBCQUFNLEVBQUU7QUFDSkMsb0NBQWMsRUFBRXJDO0FBRFo7QUFGd0MsbUJBQXBEO0FBTUg7QUFWTDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkF6QkosZUEwQ0k7QUFBSyxtQkFBSyxFQUFFO0FBQ1JzQyx5QkFBUyxFQUFFO0FBREgsZUFBWjtBQUFBLHFDQUdJO0FBQ0ksdUJBQU8sRUFBRSxtQkFBTSxDQUVkLENBSEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQTFDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRDRHO0FBQUEsU0FBekUsQ0FGM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUEwREk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUExREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBYko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUE0RUgsQ0FsRkQ7O0lBQU1uQixZO1VBSXdCakIsc0Q7OztNQUp4QmlCLFk7QUFtRlNBLDJFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9QcmVzZXRFZGl0b3IudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTb3VuZENhcmR9IGZyb20gXCIuLi91dGlscy90eXBlcy9Tb3VuZENhcmRcIjtcbmltcG9ydCB1c2VTdGFnZSBmcm9tIFwiLi4vbGlicy91c2VTdGFnZVwiO1xuaW1wb3J0IHt1c2VDYWxsYmFja30gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXBzZXJ0IGZyb20gXCIuLi91dGlscy91cHNlcnRcIjtcbmltcG9ydCB7Q2xpZW50RGV2aWNlRXZlbnRzfSBmcm9tIFwiLi4vdXRpbHMvdHlwZXMvU29ja2V0RXZlbnRzXCI7XG5pbXBvcnQge0NoYW5nZVRyYWNrUHJlc2V0UGF5bG9hZH0gZnJvbSBcIi4uL3V0aWxzL3R5cGVzL1NvY2tldFBheWxvYWRzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgQ2hhbm5lbEFjdGl2YXRvciA9IChwcm9wczoge1xuICAgIG51bUNoYW5uZWxzOiBudW1iZXI7XG4gICAgY2hhbm5lbHM6IG51bWJlcltdO1xuICAgIG9uQ2hhbmdlOiAoY2hhbm5lbHM6IG51bWJlcltdKSA9PiB2b2lkO1xufSkgPT4ge1xuICAgIGNvbnN0IHtudW1DaGFubmVscywgY2hhbm5lbHMsIG9uQ2hhbmdlfSA9IHByb3BzO1xuICAgIGNvbnN0IHtzb2NrZXR9ID0gdXNlU3RhZ2UoKTtcblxuICAgIGNvbnN0IGVuYWJsZUNoYW5uZWwgPSB1c2VDYWxsYmFjaygoY2hhbm5lbElkOiBudW1iZXIpID0+IHtcbiAgICAgICAgb25DaGFuZ2UodXBzZXJ0KGNoYW5uZWxzLCBjaGFubmVsSWQpKTtcbiAgICB9LCBbY2hhbm5lbHNdKTtcblxuICAgIGNvbnN0IGRpc2FibGVDaGFubmVsID0gdXNlQ2FsbGJhY2soKGNoYW5uZWxJZDogbnVtYmVyKSA9PiB7XG4gICAgICAgIG9uQ2hhbmdlKGNoYW5uZWxzLmZpbHRlcihpZCA9PiBpZCAhPT0gY2hhbm5lbElkKSk7XG4gICAgfSwgW2NoYW5uZWxzXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAge0FycmF5LmZyb20oQXJyYXkobnVtQ2hhbm5lbHMpLmtleXMoKSkubWFwKGNoYW5uZWxJZCA9PiAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17XCJpbnB1dC1cIiArIGNoYW5uZWxJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y2hhbm5lbElkfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17Y2hhbm5lbHMuaW5kZXhPZihjaGFubmVsSWQpICE9PSAtMX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5jdXJyZW50VGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlQ2hhbm5lbChjaGFubmVsSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVDaGFubmVsKGNoYW5uZWxJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e1wiaW5wdXQtXCIgKyBjaGFubmVsSWR9PntjaGFubmVsSWQgKyAxfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC8+XG4gICAgKVxufTtcblxuY29uc3QgUHJlc2V0RWRpdG9yID0gKHByb3BzOiB7XG4gICAgc291bmRDYXJkOiBTb3VuZENhcmRcbn0pID0+IHtcbiAgICBjb25zdCB7c291bmRDYXJkfSA9IHByb3BzO1xuICAgIGNvbnN0IHtzb2NrZXQsIHByZXNldHN9ID0gdXNlU3RhZ2UoKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDM+e3NvdW5kQ2FyZC5uYW1lfTwvaDM+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICB7c291bmRDYXJkLm51bUlucHV0Q2hhbm5lbHN9IGlucHV0IGNoYW5uZWxzXG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIHtzb3VuZENhcmQubnVtT3V0cHV0Q2hhbm5lbHN9IG91dHB1dCBjaGFubmVsc1xuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICB7c291bmRDYXJkLnNhbXBsZVJhdGV9IEh6IHNhbXBsZSByYXRlXG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICBQcmVzZXRzOlxuICAgICAgICAgICAgICAgICAgICB7cHJlc2V0cy5ieVNvdW5kQ2FyZFtzb3VuZENhcmQuX2lkXSAmJiBwcmVzZXRzLmJ5U291bmRDYXJkW3NvdW5kQ2FyZC5faWRdLm1hcChpZCA9PiBwcmVzZXRzLmJ5SWRbaWRdKS5tYXAocHJlc2V0ID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgYmxhY2snXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcmVzZXQubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnB1dDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoYW5uZWxBY3RpdmF0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bUNoYW5uZWxzPXtzb3VuZENhcmQubnVtSW5wdXRDaGFubmVsc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5uZWxzPXtwcmVzZXQuaW5wdXRDaGFubmVsc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGFubmVscyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoQ2xpZW50RGV2aWNlRXZlbnRzLkNIQU5HRV9UUkFDS19QUkVTRVQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHByZXNldC5faWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDaGFubmVsczogY2hhbm5lbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gYXMgQ2hhbmdlVHJhY2tQcmVzZXRQYXlsb2FkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE91dHB1dDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoYW5uZWxBY3RpdmF0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bUNoYW5uZWxzPXtzb3VuZENhcmQubnVtT3V0cHV0Q2hhbm5lbHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFubmVscz17cHJlc2V0Lm91dHB1dENoYW5uZWxzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5uZWxzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb2NrZXQuZW1pdChDbGllbnREZXZpY2VFdmVudHMuQ0hBTkdFX1RSQUNLX1BSRVNFVCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogcHJlc2V0Ll9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRDaGFubmVsczogY2hhbm5lbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gYXMgQ2hhbmdlVHJhY2tQcmVzZXRQYXlsb2FkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdyaWdodCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+UmVtb3ZlIFByZXNldDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbj5BZGQgUHJlc2V0PC9idXR0b24+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59O1xuZXhwb3J0IGRlZmF1bHQgUHJlc2V0RWRpdG9yO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/PresetEditor.tsx\n");

/***/ })

})