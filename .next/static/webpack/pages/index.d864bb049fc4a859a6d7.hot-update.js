webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PresetEditor.tsx":
/*!*************************************!*\
  !*** ./components/PresetEditor.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _libs_useStage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../libs/useStage */ \"./libs/useStage.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_upsert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/upsert */ \"./utils/upsert.ts\");\n/* harmony import */ var _utils_types_SocketEvents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/types/SocketEvents */ \"./utils/types/SocketEvents.ts\");\n\n\n\nvar _jsxFileName = \"/Users/tobias/Developer/digitalstage/ov-simulator/components/PresetEditor.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\n\n\n\nvar ChannelActivator = function ChannelActivator(props) {\n  _s();\n\n  var numChannels = props.numChannels,\n      channels = props.channels,\n      onChange = props.onChange;\n\n  var _useStage = Object(_libs_useStage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(),\n      socket = _useStage.socket;\n\n  var enableChannel = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function (channelId) {\n    onChange(Object(_utils_upsert__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(channels, channelId));\n  }, [channels]);\n  var disableChannel = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function (channelId) {\n    onChange(channels.filter(function (id) {\n      return id !== channelId;\n    }));\n  }, [channels]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: Array.from(Array(numChannels).keys()).map(function (channelId) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          id: \"input-\" + channelId,\n          type: \"checkbox\",\n          value: channelId,\n          checked: channels.indexOf(channelId) !== -1,\n          onChange: function onChange(e) {\n            if (e.currentTarget.checked) {\n              enableChannel(channelId);\n            } else {\n              disableChannel(channelId);\n            }\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          htmlFor: \"input-\" + channelId,\n          children: channelId + 1\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true);\n    })\n  }, void 0, false);\n};\n\n_s(ChannelActivator, \"FvqmI9bLY2pGzQLGDNdFCHv7iTI=\", false, function () {\n  return [_libs_useStage__WEBPACK_IMPORTED_MODULE_1__[\"default\"]];\n});\n\n_c = ChannelActivator;\n\nvar PresetEditor = function PresetEditor(props) {\n  _s2();\n\n  var soundCard = props.soundCard;\n\n  var _useStage2 = Object(_libs_useStage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(),\n      socket = _useStage2.socket,\n      presets = _useStage2.presets;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n      children: soundCard.name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: [soundCard.numInputChannels, \" input channels\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: [soundCard.numOutputChannels, \" output channels\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: [soundCard.sampleRate, \" Hz sample rate\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: [\"Presets:\", presets.bySoundCard[soundCard._id] && presets.bySoundCard[soundCard._id].map(function (id) {\n          return presets.byId[id];\n        }).map(function (preset) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            style: {\n              border: '1px solid black'\n            },\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h5\", {\n              style: {\n                margin: 0\n              },\n              children: preset.name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 76,\n              columnNumber: 29\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              style: {\n                margin: 0\n              },\n              children: [\"Input:\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ChannelActivator, {\n                numChannels: soundCard.numInputChannels,\n                channels: preset.inputChannels,\n                onChange: function onChange(channels) {\n                  socket.emit(_utils_types_SocketEvents__WEBPACK_IMPORTED_MODULE_4__[\"ClientDeviceEvents\"].CHANGE_TRACK_PRESET, {\n                    id: preset._id,\n                    update: {\n                      inputChannels: channels\n                    }\n                  });\n                }\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 85,\n                columnNumber: 33\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 81,\n              columnNumber: 29\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              style: {\n                margin: 0\n              },\n              children: [\"Output:\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ChannelActivator, {\n                numChannels: soundCard.numOutputChannels,\n                channels: preset.outputChannels,\n                onChange: function onChange(channels) {\n                  socket.emit(_utils_types_SocketEvents__WEBPACK_IMPORTED_MODULE_4__[\"ClientDeviceEvents\"].CHANGE_TRACK_PRESET, {\n                    id: preset._id,\n                    update: {\n                      outputChannels: channels\n                    }\n                  });\n                }\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 102,\n                columnNumber: 33\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 98,\n              columnNumber: 29\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              style: {\n                textAlign: 'right'\n              },\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n                disabled: preset.name === \"Default\",\n                onClick: function onClick() {\n                  socket.emit(_utils_types_SocketEvents__WEBPACK_IMPORTED_MODULE_4__[\"ClientDeviceEvents\"].REMOVE_TRACK_PRESET, preset._id);\n                },\n                children: \"Remove Preset\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 118,\n                columnNumber: 33\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 115,\n              columnNumber: 29\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 73,\n            columnNumber: 25\n          }, _this);\n        })]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          socket.emit(_utils_types_SocketEvents__WEBPACK_IMPORTED_MODULE_4__[\"ClientDeviceEvents\"].ADD_TRACK_PRESET, {\n            name: 'Unnamed',\n            soundCardId: soundCard._id,\n            inputChannels: [],\n            outputChannels: []\n          });\n        },\n        children: \"Add Preset\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 128,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 56,\n    columnNumber: 9\n  }, _this);\n};\n\n_s2(PresetEditor, \"2RS11EwG6Cn+2/EJurP+lz3NR04=\", false, function () {\n  return [_libs_useStage__WEBPACK_IMPORTED_MODULE_1__[\"default\"]];\n});\n\n_c2 = PresetEditor;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PresetEditor);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ChannelActivator\");\n$RefreshReg$(_c2, \"PresetEditor\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QcmVzZXRFZGl0b3IudHN4PzgzYjEiXSwibmFtZXMiOlsiQ2hhbm5lbEFjdGl2YXRvciIsInByb3BzIiwibnVtQ2hhbm5lbHMiLCJjaGFubmVscyIsIm9uQ2hhbmdlIiwidXNlU3RhZ2UiLCJzb2NrZXQiLCJlbmFibGVDaGFubmVsIiwidXNlQ2FsbGJhY2siLCJjaGFubmVsSWQiLCJ1cHNlcnQiLCJkaXNhYmxlQ2hhbm5lbCIsImZpbHRlciIsImlkIiwiQXJyYXkiLCJmcm9tIiwia2V5cyIsIm1hcCIsImluZGV4T2YiLCJlIiwiY3VycmVudFRhcmdldCIsImNoZWNrZWQiLCJQcmVzZXRFZGl0b3IiLCJzb3VuZENhcmQiLCJwcmVzZXRzIiwibmFtZSIsIm51bUlucHV0Q2hhbm5lbHMiLCJudW1PdXRwdXRDaGFubmVscyIsInNhbXBsZVJhdGUiLCJieVNvdW5kQ2FyZCIsIl9pZCIsImJ5SWQiLCJwcmVzZXQiLCJib3JkZXIiLCJtYXJnaW4iLCJpbnB1dENoYW5uZWxzIiwiZW1pdCIsIkNsaWVudERldmljZUV2ZW50cyIsIkNIQU5HRV9UUkFDS19QUkVTRVQiLCJ1cGRhdGUiLCJvdXRwdXRDaGFubmVscyIsInRleHRBbGlnbiIsIlJFTU9WRV9UUkFDS19QUkVTRVQiLCJBRERfVFJBQ0tfUFJFU0VUIiwic291bmRDYXJkSWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsS0FBRCxFQUluQjtBQUFBOztBQUFBLE1BQ0tDLFdBREwsR0FDd0NELEtBRHhDLENBQ0tDLFdBREw7QUFBQSxNQUNrQkMsUUFEbEIsR0FDd0NGLEtBRHhDLENBQ2tCRSxRQURsQjtBQUFBLE1BQzRCQyxRQUQ1QixHQUN3Q0gsS0FEeEMsQ0FDNEJHLFFBRDVCOztBQUFBLGtCQUVlQyw4REFBUSxFQUZ2QjtBQUFB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QVo7QUFBQSxxQ0FHSTtBQUNJLHdCQUFRLEVBQUVULE1BQU0sQ0FBQ1AsSUFBUCxLQUFnQixTQUQ5QjtBQUVJLHVCQUFPLEVBQUUsbUJBQU07QUFDWG5CLHdCQUFNLENBQUM4QixJQUFQLENBQVlDLDRFQUFrQixDQUFDSyxtQkFBL0IsRUFBb0RWLE1BQU0sQ0FBQ0YsR0FBM0Q7QUFDSCxpQkFKTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBMUNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFENEc7QUFBQSxTQUF6RSxDQUYzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQTJESTtBQUNJLGVBQU8sRUFBRSxtQkFBTTtBQUNYeEIsZ0JBQU0sQ0FBQzhCLElBQVAsQ0FBWUMsNEVBQWtCLENBQUNNLGdCQUEvQixFQUFpRDtBQUM3Q2xCLGdCQUFJLEVBQUUsU0FEdUM7QUFFN0NtQix1QkFBVyxFQUFFckIsU0FBUyxDQUFDTyxHQUZzQjtBQUc3Q0sseUJBQWEsRUFBRSxFQUg4QjtBQUk3Q0ssMEJBQWMsRUFBRTtBQUo2QixXQUFqRDtBQU1ILFNBUkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUEzREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBYko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUF1RkgsQ0E3RkQ7O0lBQU1sQixZO1VBSXdCakIsc0Q7OztNQUp4QmlCLFk7QUE4RlNBLDJFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9QcmVzZXRFZGl0b3IudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTb3VuZENhcmR9IGZyb20gXCIuLi91dGlscy90eXBlcy9Tb3VuZENhcmRcIjtcbmltcG9ydCB1c2VTdGFnZSBmcm9tIFwiLi4vbGlicy91c2VTdGFnZVwiO1xuaW1wb3J0IHt1c2VDYWxsYmFja30gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXBzZXJ0IGZyb20gXCIuLi91dGlscy91cHNlcnRcIjtcbmltcG9ydCB7Q2xpZW50RGV2aWNlRXZlbnRzfSBmcm9tIFwiLi4vdXRpbHMvdHlwZXMvU29ja2V0RXZlbnRzXCI7XG5pbXBvcnQge0FkZFRyYWNrUHJlc2V0UGF5bG9hZCwgQ2hhbmdlVHJhY2tQcmVzZXRQYXlsb2FkfSBmcm9tIFwiLi4vdXRpbHMvdHlwZXMvU29ja2V0UGF5bG9hZHNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBDaGFubmVsQWN0aXZhdG9yID0gKHByb3BzOiB7XG4gICAgbnVtQ2hhbm5lbHM6IG51bWJlcjtcbiAgICBjaGFubmVsczogbnVtYmVyW107XG4gICAgb25DaGFuZ2U6IChjaGFubmVsczogbnVtYmVyW10pID0+IHZvaWQ7XG59KSA9PiB7XG4gICAgY29uc3Qge251bUNoYW5uZWxzLCBjaGFubmVscywgb25DaGFuZ2V9ID0gcHJvcHM7XG4gICAgY29uc3Qge3NvY2tldH0gPSB1c2VTdGFnZSgpO1xuXG4gICAgY29uc3QgZW5hYmxlQ2hhbm5lbCA9IHVzZUNhbGxiYWNrKChjaGFubmVsSWQ6IG51bWJlcikgPT4ge1xuICAgICAgICBvbkNoYW5nZSh1cHNlcnQoY2hhbm5lbHMsIGNoYW5uZWxJZCkpO1xuICAgIH0sIFtjaGFubmVsc10pO1xuXG4gICAgY29uc3QgZGlzYWJsZUNoYW5uZWwgPSB1c2VDYWxsYmFjaygoY2hhbm5lbElkOiBudW1iZXIpID0+IHtcbiAgICAgICAgb25DaGFuZ2UoY2hhbm5lbHMuZmlsdGVyKGlkID0+IGlkICE9PSBjaGFubmVsSWQpKTtcbiAgICB9LCBbY2hhbm5lbHNdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7QXJyYXkuZnJvbShBcnJheShudW1DaGFubmVscykua2V5cygpKS5tYXAoY2hhbm5lbElkID0+IChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtcImlucHV0LVwiICsgY2hhbm5lbElkfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjaGFubmVsSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtjaGFubmVscy5pbmRleE9mKGNoYW5uZWxJZCkgIT09IC0xfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmN1cnJlbnRUYXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVDaGFubmVsKGNoYW5uZWxJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUNoYW5uZWwoY2hhbm5lbElkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17XCJpbnB1dC1cIiArIGNoYW5uZWxJZH0+e2NoYW5uZWxJZCArIDF9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8Lz5cbiAgICApXG59O1xuXG5jb25zdCBQcmVzZXRFZGl0b3IgPSAocHJvcHM6IHtcbiAgICBzb3VuZENhcmQ6IFNvdW5kQ2FyZFxufSkgPT4ge1xuICAgIGNvbnN0IHtzb3VuZENhcmR9ID0gcHJvcHM7XG4gICAgY29uc3Qge3NvY2tldCwgcHJlc2V0c30gPSB1c2VTdGFnZSgpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMz57c291bmRDYXJkLm5hbWV9PC9oMz5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIHtzb3VuZENhcmQubnVtSW5wdXRDaGFubmVsc30gaW5wdXQgY2hhbm5lbHNcbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAge3NvdW5kQ2FyZC5udW1PdXRwdXRDaGFubmVsc30gb3V0cHV0IGNoYW5uZWxzXG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIHtzb3VuZENhcmQuc2FtcGxlUmF0ZX0gSHogc2FtcGxlIHJhdGVcbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIFByZXNldHM6XG4gICAgICAgICAgICAgICAgICAgIHtwcmVzZXRzLmJ5U291bmRDYXJkW3NvdW5kQ2FyZC5faWRdICYmIHByZXNldHMuYnlTb3VuZENhcmRbc291bmRDYXJkLl9pZF0ubWFwKGlkID0+IHByZXNldHMuYnlJZFtpZF0pLm1hcChwcmVzZXQgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCBibGFjaydcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ByZXNldC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElucHV0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hhbm5lbEFjdGl2YXRvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtQ2hhbm5lbHM9e3NvdW5kQ2FyZC5udW1JbnB1dENoYW5uZWxzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbm5lbHM9e3ByZXNldC5pbnB1dENoYW5uZWxzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5uZWxzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb2NrZXQuZW1pdChDbGllbnREZXZpY2VFdmVudHMuQ0hBTkdFX1RSQUNLX1BSRVNFVCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogcHJlc2V0Ll9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENoYW5uZWxzOiBjaGFubmVsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBhcyBDaGFuZ2VUcmFja1ByZXNldFBheWxvYWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT3V0cHV0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hhbm5lbEFjdGl2YXRvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtQ2hhbm5lbHM9e3NvdW5kQ2FyZC5udW1PdXRwdXRDaGFubmVsc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5uZWxzPXtwcmVzZXQub3V0cHV0Q2hhbm5lbHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hhbm5lbHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KENsaWVudERldmljZUV2ZW50cy5DSEFOR0VfVFJBQ0tfUFJFU0VULCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBwcmVzZXQuX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dENoYW5uZWxzOiBjaGFubmVsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBhcyBDaGFuZ2VUcmFja1ByZXNldFBheWxvYWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ3JpZ2h0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17cHJlc2V0Lm5hbWUgPT09IFwiRGVmYXVsdFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KENsaWVudERldmljZUV2ZW50cy5SRU1PVkVfVFJBQ0tfUFJFU0VULCBwcmVzZXQuX2lkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5SZW1vdmUgUHJlc2V0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KENsaWVudERldmljZUV2ZW50cy5BRERfVFJBQ0tfUFJFU0VULCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ1VubmFtZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdW5kQ2FyZElkOiBzb3VuZENhcmQuX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q2hhbm5lbHM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dENoYW5uZWxzOiBbXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBhcyBBZGRUcmFja1ByZXNldFBheWxvYWQpXG4gICAgICAgICAgICAgICAgICAgIH19XG5cbiAgICAgICAgICAgICAgICA+QWRkIFByZXNldDwvYnV0dG9uPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufTtcbmV4cG9ydCBkZWZhdWx0IFByZXNldEVkaXRvcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/PresetEditor.tsx\n");

/***/ })

})