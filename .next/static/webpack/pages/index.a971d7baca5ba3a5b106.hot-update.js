webpackHotUpdate_N_E("pages/index",{

/***/ "./components/SoundCardSimulator.tsx":
/*!*******************************************!*\
  !*** ./components/SoundCardSimulator.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_tobias_Developer_digitalstage_ov_simulator_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_types_SocketEvents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/types/SocketEvents */ \"./utils/types/SocketEvents.ts\");\n/* harmony import */ var _libs_useStage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../libs/useStage */ \"./libs/useStage.tsx\");\n\n\n\n\nvar _jsxFileName = \"/Users/tobias/Developer/digitalstage/ov-simulator/components/SoundCardSimulator.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\n\nvar AddSoundCardForm = function AddSoundCardForm() {\n  _s();\n\n  var _useStage = Object(_libs_useStage__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(),\n      socket = _useStage.socket;\n\n  var nameRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])();\n  var numInputChannelsRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])();\n  var numOutputChannelsRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])();\n  var addSoundCard = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    if (nameRef.current && numOutputChannelsRef.current && numInputChannelsRef.current && socket) {\n      var name = nameRef.current.value;\n      var numInputChannels = parseInt(numInputChannelsRef.current.value);\n      var numOutputChannels = parseInt(numOutputChannelsRef.current.value);\n      var payload = {\n        initial: {\n          name: name,\n          driver: 'ALSA',\n          numInputChannels: numInputChannels,\n          numOutputChannels: numOutputChannels,\n          sampleRate: 44100,\n          periodSize: 2,\n          numPeriods: 2\n        }\n      };\n      socket.emit(_utils_types_SocketEvents__WEBPACK_IMPORTED_MODULE_3__[\"ClientDeviceEvents\"].ADD_SOUND_CARD, payload);\n    }\n  }, [socket, nameRef, numInputChannelsRef, numOutputChannelsRef]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"form\", {\n    onSubmit: function onSubmit(e) {\n      e.preventDefault();\n      addSoundCard();\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"input\", {\n      type: \"name\",\n      ref: nameRef,\n      minLength: 1,\n      required: true\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"input\", {\n      type: \"number\",\n      ref: numInputChannelsRef,\n      min: 0,\n      max: 8,\n      required: true\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"input\", {\n      type: \"number\",\n      ref: numOutputChannelsRef,\n      min: 0,\n      max: 8,\n      required: true\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n      type: \"submit\",\n      children: \"ADD SOUNDCARD\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(AddSoundCardForm, \"HNlx7EY66nqpXfx7oTW39a/6uro=\", false, function () {\n  return [_libs_useStage__WEBPACK_IMPORTED_MODULE_4__[\"default\"]];\n});\n\n_c = AddSoundCardForm;\n\nvar SoundCardSimulator = function SoundCardSimulator() {\n  _s2();\n\n  var _useStage2 = Object(_libs_useStage__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(),\n      device = _useStage2.device,\n      socket = _useStage2.socket,\n      soundCards = _useStage2.soundCards;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      connectedSoundCardIds = _useState[0],\n      setConnectedSoundCardIds = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (device) {\n      setConnectedSoundCardIds(device.soundCardIds);\n    }\n  }, [device]);\n  var updateConnectedSoundCardIds = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function (soundCardIds) {\n    if (socket && device) {\n      console.log(soundCardIds);\n      socket.emit(_utils_types_SocketEvents__WEBPACK_IMPORTED_MODULE_3__[\"ClientDeviceEvents\"].UPDATE_DEVICE, {\n        _id: device._id,\n        soundCardIds: soundCardIds\n      });\n    }\n  }, [socket, device]);\n  var removeSoundCard = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function (id) {\n    if (socket) {\n      socket.emit(_utils_types_SocketEvents__WEBPACK_IMPORTED_MODULE_3__[\"ClientDeviceEvents\"].REMOVE_SOUND_CARD, id);\n    }\n  }, [socket]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(AddSoundCardForm, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"ul\", {\n      children: soundCards.allIds.map(function (id) {\n        return soundCards.byId[id];\n      }).map(function (soundCard) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"li\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"label\", {\n            htmlFor: soundCard._id,\n            children: soundCard.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 84,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"input\", {\n            id: soundCard._id,\n            type: \"checkbox\",\n            checked: connectedSoundCardIds.indexOf(soundCard._id) !== -1,\n            onChange: function onChange(e) {\n              if (e.currentTarget.checked) {\n                updateConnectedSoundCardIds([].concat(Object(_Users_tobias_Developer_digitalstage_ov_simulator_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(connectedSoundCardIds), [soundCard._id]));\n              } else {\n                updateConnectedSoundCardIds(connectedSoundCardIds.filter(function (id) {\n                  return id !== soundCard._id;\n                }));\n              }\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 85,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n            onClick: function onClick() {\n              return removeSoundCard(soundCard._id);\n            },\n            children: \"DEL\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 97,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 21\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true);\n};\n\n_s2(SoundCardSimulator, \"uJoFmLl+UbzATnwPz3HEv+iOmmo=\", false, function () {\n  return [_libs_useStage__WEBPACK_IMPORTED_MODULE_4__[\"default\"]];\n});\n\n_c2 = SoundCardSimulator;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SoundCardSimulator);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"AddSoundCardForm\");\n$RefreshReg$(_c2, \"SoundCardSimulator\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Tb3VuZENhcmRTaW11bGF0b3IudHN4P2U2MjYiXSwibmFtZXMiOlsiQWRkU291bmRDYXJkRm9ybSIsInVzZVN0YWdlIiwic29ja2V0IiwibmFtZVJlZiIsInVzZVJlZiIsIm51bUlucHV0Q2hhbm5lbHNSZWYiLCJudW1PdXRwdXRDaGFubmVsc1JlZiIsImFkZFNvdW5kQ2FyZCIsInVzZUNhbGxiYWNrIiwiY3VycmVudCIsIm5hbWUiLCJ2YWx1ZSIsIm51bUlucHV0Q2hhbm5lbHMiLCJwYXJzZUludCIsIm51bU91dHB1dENoYW5uZWxzIiwicGF5bG9hZCIsImluaXRpYWwiLCJkcml2ZXIiLCJzYW1wbGVSYXRlIiwicGVyaW9kU2l6ZSIsIm51bVBlcmlvZHMiLCJlbWl0IiwiQ2xpZW50RGV2aWNlRXZlbnRzIiwiQUREX1NPVU5EX0NBUkQiLCJlIiwicHJldmVudERlZmF1bHQiLCJTb3VuZENhcmRTaW11bGF0b3IiLCJkZXZpY2UiLCJzb3VuZENhcmRzIiwidXNlU3RhdGUiLCJjb25uZWN0ZWRTb3VuZENhcmRJZHMiLCJzZXRDb25uZWN0ZWRTb3VuZENhcmRJZHMiLCJ1c2VFZmZlY3QiLCJzb3VuZENhcmRJZHMiLCJ1cGRhdGVDb25uZWN0ZWRTb3VuZENhcmRJZHMiLCJjb25zb2xlIiwibG9nIiwiVVBEQVRFX0RFVklDRSIsIl9pZCIsInJlbW92ZVNvdW5kQ2FyZCIsImlkIiwiUkVNT1ZFX1NPVU5EX0NBUkQiLCJhbGxJZHMiLCJtYXAiLCJieUlkIiwic291bmRDYXJkIiwiaW5kZXhPZiIsImN1cnJlbnRUYXJnZXQiLCJjaGVja2VkIiwiZmlsdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFJQTs7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFBQTs7QUFBQSxrQkFDVkMsOERBQVEsRUFERTtBQUFBLE1BQ3BCQyxNQURvQixhQUNwQkEsTUFE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QUFFUixxQkFBcUIsQ0FBQ2dCLE9BQXRCLENBQThCRCxTQUFTLENBQUNQLEdBQXhDLE1BQWlELENBQUMsQ0FIL0Q7QUFJSSxvQkFBUSxFQUFFLGtCQUFBZCxDQUFDLEVBQUk7QUFDWCxrQkFBSUEsQ0FBQyxDQUFDdUIsYUFBRixDQUFnQkMsT0FBcEIsRUFBNkI7QUFDekJkLDJDQUEyQixzS0FBS0oscUJBQUwsSUFBNEJlLFNBQVMsQ0FBQ1AsR0FBdEMsR0FBM0I7QUFDSCxlQUZELE1BRU87QUFDSEosMkNBQTJCLENBQUNKLHFCQUFxQixDQUFDbUIsTUFBdEIsQ0FBNkIsVUFBQVQsRUFBRTtBQUFBLHlCQUFJQSxFQUFFLEtBQUtLLFNBQVMsQ0FBQ1AsR0FBckI7QUFBQSxpQkFBL0IsQ0FBRCxDQUEzQjtBQUNIO0FBQ0o7QUFWTDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKLGVBY0k7QUFBUSxtQkFBTyxFQUFFO0FBQUEscUJBQU1DLGVBQWUsQ0FBQ00sU0FBUyxDQUFDUCxHQUFYLENBQXJCO0FBQUEsYUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBZEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUQyRDtBQUFBLE9BQTlEO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpKO0FBQUEsa0JBREo7QUE2QkgsQ0F2REQ7O0lBQU1aLGtCO1VBQ21DekIsc0Q7OztNQURuQ3lCLGtCO0FBd0RTQSxpRkFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvU291bmRDYXJkU2ltdWxhdG9yLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSVRlY2tvc0NsaWVudCBmcm9tIFwidGVja29zLWNsaWVudC9kaXN0L0lUZWNrb3NDbGllbnRcIjtcbmltcG9ydCB7Q2xpZW50RGV2aWNlRXZlbnRzfSBmcm9tIFwiLi4vdXRpbHMvdHlwZXMvU29ja2V0RXZlbnRzXCI7XG5pbXBvcnQge0RldmljZX0gZnJvbSBcIi4uL3V0aWxzL3R5cGVzL0RldmljZVwiO1xuaW1wb3J0IHtBZGRTb3VuZENhcmRQYXlsb2FkfSBmcm9tIFwiLi4vdXRpbHMvdHlwZXMvU29ja2V0UGF5bG9hZHNcIjtcbmltcG9ydCB7U291bmRDYXJkfSBmcm9tIFwiLi4vdXRpbHMvdHlwZXMvU291bmRDYXJkXCI7XG5pbXBvcnQgdXNlU3RhZ2UgZnJvbSBcIi4uL2xpYnMvdXNlU3RhZ2VcIjtcblxuY29uc3QgQWRkU291bmRDYXJkRm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCB7c29ja2V0fSA9IHVzZVN0YWdlKCk7XG4gICAgY29uc3QgbmFtZVJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PigpO1xuICAgIGNvbnN0IG51bUlucHV0Q2hhbm5lbHNSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4oKTtcbiAgICBjb25zdCBudW1PdXRwdXRDaGFubmVsc1JlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PigpO1xuXG4gICAgY29uc3QgYWRkU291bmRDYXJkID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBpZiAobmFtZVJlZi5jdXJyZW50ICYmIG51bU91dHB1dENoYW5uZWxzUmVmLmN1cnJlbnQgJiYgbnVtSW5wdXRDaGFubmVsc1JlZi5jdXJyZW50ICYmIHNvY2tldCkge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IG5hbWVSZWYuY3VycmVudC52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IG51bUlucHV0Q2hhbm5lbHMgPSBwYXJzZUludChudW1JbnB1dENoYW5uZWxzUmVmLmN1cnJlbnQudmFsdWUpO1xuICAgICAgICAgICAgY29uc3QgbnVtT3V0cHV0Q2hhbm5lbHMgPSBwYXJzZUludChudW1PdXRwdXRDaGFubmVsc1JlZi5jdXJyZW50LnZhbHVlKTtcbiAgICAgICAgICAgIGNvbnN0IHBheWxvYWQ6IEFkZFNvdW5kQ2FyZFBheWxvYWQgPSB7XG4gICAgICAgICAgICAgICAgaW5pdGlhbDoge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICBkcml2ZXI6ICdBTFNBJyxcbiAgICAgICAgICAgICAgICAgICAgbnVtSW5wdXRDaGFubmVscyxcbiAgICAgICAgICAgICAgICAgICAgbnVtT3V0cHV0Q2hhbm5lbHMsXG4gICAgICAgICAgICAgICAgICAgIHNhbXBsZVJhdGU6IDQ0MTAwLFxuICAgICAgICAgICAgICAgICAgICBwZXJpb2RTaXplOiAyLFxuICAgICAgICAgICAgICAgICAgICBudW1QZXJpb2RzOiAyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNvY2tldC5lbWl0KENsaWVudERldmljZUV2ZW50cy5BRERfU09VTkRfQ0FSRCwgcGF5bG9hZCk7XG4gICAgICAgIH1cbiAgICB9LCBbc29ja2V0LCBuYW1lUmVmLCBudW1JbnB1dENoYW5uZWxzUmVmLCBudW1PdXRwdXRDaGFubmVsc1JlZl0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGFkZFNvdW5kQ2FyZCgpO1xuICAgICAgICB9fT5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibmFtZVwiIHJlZj17bmFtZVJlZn0gbWluTGVuZ3RoPXsxfSByZXF1aXJlZC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHJlZj17bnVtSW5wdXRDaGFubmVsc1JlZn0gbWluPXswfSBtYXg9ezh9IHJlcXVpcmVkLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgcmVmPXtudW1PdXRwdXRDaGFubmVsc1JlZn0gbWluPXswfSBtYXg9ezh9IHJlcXVpcmVkLz5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgIEFERCBTT1VORENBUkRcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgKVxufTtcblxuY29uc3QgU291bmRDYXJkU2ltdWxhdG9yID0gKCkgPT4ge1xuICAgIGNvbnN0IHtkZXZpY2UsIHNvY2tldCwgc291bmRDYXJkc30gPSB1c2VTdGFnZSgpO1xuICAgIGNvbnN0IFtjb25uZWN0ZWRTb3VuZENhcmRJZHMsIHNldENvbm5lY3RlZFNvdW5kQ2FyZElkc10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGRldmljZSkge1xuICAgICAgICAgICAgc2V0Q29ubmVjdGVkU291bmRDYXJkSWRzKGRldmljZS5zb3VuZENhcmRJZHMpO1xuICAgICAgICB9XG4gICAgfSwgW2RldmljZV0pO1xuXG4gICAgY29uc3QgdXBkYXRlQ29ubmVjdGVkU291bmRDYXJkSWRzID0gdXNlQ2FsbGJhY2soKHNvdW5kQ2FyZElkczogc3RyaW5nW10pID0+IHtcbiAgICAgICAgaWYgKHNvY2tldCAmJiBkZXZpY2UpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNvdW5kQ2FyZElkcyk7XG4gICAgICAgICAgICBzb2NrZXQuZW1pdChDbGllbnREZXZpY2VFdmVudHMuVVBEQVRFX0RFVklDRSwge1xuICAgICAgICAgICAgICAgIF9pZDogZGV2aWNlLl9pZCxcbiAgICAgICAgICAgICAgICBzb3VuZENhcmRJZHM6IHNvdW5kQ2FyZElkc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbc29ja2V0LCBkZXZpY2VdKTtcblxuICAgIGNvbnN0IHJlbW92ZVNvdW5kQ2FyZCA9IHVzZUNhbGxiYWNrKChpZDogc3RyaW5nKSA9PiB7XG4gICAgICAgIGlmIChzb2NrZXQpIHtcbiAgICAgICAgICAgIHNvY2tldC5lbWl0KENsaWVudERldmljZUV2ZW50cy5SRU1PVkVfU09VTkRfQ0FSRCwgaWQpO1xuICAgICAgICB9XG4gICAgfSwgW3NvY2tldF0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgPEFkZFNvdW5kQ2FyZEZvcm0vPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHtzb3VuZENhcmRzLmFsbElkcy5tYXAoaWQgPT4gc291bmRDYXJkcy5ieUlkW2lkXSkubWFwKHNvdW5kQ2FyZCA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtzb3VuZENhcmQuX2lkfT57c291bmRDYXJkLm5hbWV9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtzb3VuZENhcmQuX2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17Y29ubmVjdGVkU291bmRDYXJkSWRzLmluZGV4T2Yoc291bmRDYXJkLl9pZCkgIT09IC0xfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUuY3VycmVudFRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVDb25uZWN0ZWRTb3VuZENhcmRJZHMoWy4uLmNvbm5lY3RlZFNvdW5kQ2FyZElkcywgc291bmRDYXJkLl9pZF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlQ29ubmVjdGVkU291bmRDYXJkSWRzKGNvbm5lY3RlZFNvdW5kQ2FyZElkcy5maWx0ZXIoaWQgPT4gaWQgIT09IHNvdW5kQ2FyZC5faWQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiByZW1vdmVTb3VuZENhcmQoc291bmRDYXJkLl9pZCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERFTFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8Lz5cbiAgICApXG59O1xuZXhwb3J0IGRlZmF1bHQgU291bmRDYXJkU2ltdWxhdG9yO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SoundCardSimulator.tsx\n");

/***/ })

})