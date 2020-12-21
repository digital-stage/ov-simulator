webpackHotUpdate_N_E("pages/index",{

/***/ "./components/SoundCardSimulator.tsx":
/*!*******************************************!*\
  !*** ./components/SoundCardSimulator.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_types_SocketEvents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/types/SocketEvents */ \"./utils/types/SocketEvents.ts\");\n/* harmony import */ var _libs_useStage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../libs/useStage */ \"./libs/useStage.tsx\");\n\n\nvar _jsxFileName = \"/Users/tobias/Developer/digitalstage/ov-simulator/components/SoundCardSimulator.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\n\nvar AddSoundCardForm = function AddSoundCardForm() {\n  _s();\n\n  var _useStage = Object(_libs_useStage__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(),\n      socket = _useStage.socket;\n\n  var nameRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n  var addSoundCard = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function () {\n    if (nameRef.current && socket) {\n      var name = nameRef.current.value;\n      var payload = {\n        initial: {\n          name: name,\n          driver: 'ALSA',\n          numInputChannels: 8,\n          numOutputChannels: 4,\n          sampleRate: 44100,\n          periodSize: 2,\n          numPeriods: 2\n        }\n      };\n      socket.emit(_utils_types_SocketEvents__WEBPACK_IMPORTED_MODULE_2__[\"ClientDeviceEvents\"].ADD_SOUND_CARD, payload);\n    }\n  }, [socket, nameRef]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n      type: \"name\",\n      ref: nameRef\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      type: \"submit\",\n      onClick: function onClick(e) {\n        e.preventDefault();\n        addSoundCard();\n      },\n      children: \"ADD SOUNDCARD\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(AddSoundCardForm, \"b3P7bOV7EerVDoi977ClqMkozOg=\", false, function () {\n  return [_libs_useStage__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n});\n\n_c = AddSoundCardForm;\n\nvar SoundCardSimulator = function SoundCardSimulator() {\n  _s2();\n\n  var _useStage2 = Object(_libs_useStage__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(),\n      socket = _useStage2.socket,\n      soundCards = _useStage2.soundCards;\n\n  var removeSoundCard = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function (id) {\n    if (socket) {\n      socket.emit(_utils_types_SocketEvents__WEBPACK_IMPORTED_MODULE_2__[\"ClientDeviceEvents\"].REMOVE_SOUND_CARD, id);\n    }\n  }, [socket]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"The ov-client will add a entity for all newly identified sound cards automatically.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(AddSoundCardForm, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      children: soundCards.allIds.map(function (id) {\n        return soundCards.byId[id];\n      }).map(function (soundCard) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: [soundCard.name, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            onClick: function onClick() {\n              return removeSoundCard(soundCard._id);\n            },\n            children: \"DEL\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 65,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 21\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 54,\n    columnNumber: 9\n  }, _this);\n};\n\n_s2(SoundCardSimulator, \"f3la9UNCQoeJ775x6GXcIOB7L4I=\", false, function () {\n  return [_libs_useStage__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n});\n\n_c2 = SoundCardSimulator;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SoundCardSimulator);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"AddSoundCardForm\");\n$RefreshReg$(_c2, \"SoundCardSimulator\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Tb3VuZENhcmRTaW11bGF0b3IudHN4P2U2MjYiXSwibmFtZXMiOlsiQWRkU291bmRDYXJkRm9ybSIsInVzZVN0YWdlIiwic29ja2V0IiwibmFtZVJlZiIsInVzZVJlZiIsImFkZFNvdW5kQ2FyZCIsInVzZUNhbGxiYWNrIiwiY3VycmVudCIsIm5hbWUiLCJ2YWx1ZSIsInBheWxvYWQiLCJpbml0aWFsIiwiZHJpdmVyIiwibnVtSW5wdXRDaGFubmVscyIsIm51bU91dHB1dENoYW5uZWxzIiwic2FtcGxlUmF0ZSIsInBlcmlvZFNpemUiLCJudW1QZXJpb2RzIiwiZW1pdCIsIkNsaWVudERldmljZUV2ZW50cyIsIkFERF9TT1VORF9DQVJEIiwiZSIsInByZXZlbnREZWZhdWx0IiwiU291bmRDYXJkU2ltdWxhdG9yIiwic291bmRDYXJkcyIsInJlbW92ZVNvdW5kQ2FyZCIsImlkIiwiUkVNT1ZFX1NPVU5EX0NBUkQiLCJhbGxJZHMiLCJtYXAiLCJieUlkIiwic291bmRDYXJkIiwiX2lkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFJQTs7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFBQTs7QUFBQSxrQkFDVkMsOERBQVEsRUFERTtBQUFBLE1BQ3BCQyxNQURvQixhQUNwQkEsTUFEb0I7O0FBRTNCLE1BQU1DLE9BQU8sR0FBR0Msb0RBQU0sRUFBdEI7QUFFQSxNQUFNQyxZQUFZLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUNuQyxRQUFJSCxPQUFPLENBQUNJLE9BQVIsSUFBbUJMLE1BQXZCLEVBQStCO0FBQzNCLFVBQU1NLElBQUksR0FBR0wsT0FBTyxDQUFDSSxPQUFSLENBQWdCRSxLQUE3QjtBQUNBLFVBQU1DLE9BQTRCLEdBQUc7QUFDakNDLGVBQU8sRUFBRTtBQUNMSCxjQUFJLEVBQUVBLElBREQ7QUFFTEksZ0JBQU0sRUFBRSxNQUZIO0FBR0xDLDBCQUFnQixFQUFFLENBSGI7QUFJTEMsMkJBQWlCLEVBQUUsQ0FKZDtBQUtMQyxvQkFBVSxFQUFFLEtBTFA7QUFNTEMsb0JBQVUsRUFBRSxDQU5QO0FBT0xDLG9CQUFVLEVBQUU7QUFQUDtBQUR3QixPQUFyQztBQVdBZixZQUFNLENBQUNnQixJQUFQLENBQVlDLDRFQUFrQixDQUFDQyxjQUEvQixFQUErQ1YsT0FBL0M7QUFDSDtBQUNKLEdBaEIrQixFQWdCN0IsQ0FBQ1IsTUFBRCxFQUFTQyxPQUFULENBaEI2QixDQUFoQztBQWtCQSxzQkFDSTtBQUFBLDRCQUNJO0FBQU8sVUFBSSxFQUFDLE1BQVo7QUFBbUIsU0FBRyxFQUFFQTtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSTtBQUFRLFVBQUksRUFBQyxRQUFiO0FBQXNCLGFBQU8sRUFBRSxpQkFBQ2tCLENBQUQsRUFBTztBQUNsQ0EsU0FBQyxDQUFDQyxjQUFGO0FBQ0FqQixvQkFBWTtBQUNmLE9BSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVdILENBakNEOztHQUFNTCxnQjtVQUNlQyxzRDs7O0tBRGZELGdCOztBQW1DTixJQUFNdUIsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixHQUFNO0FBQUE7O0FBQUEsbUJBQ0F0Qiw4REFBUSxFQURSO0FBQUEsTUFDdEJDLE1BRHNCLGNBQ3RCQSxNQURzQjtBQUFBLE1BQ2RzQixVQURjLGNBQ2RBLFVBRGM7O0FBRzdCLE1BQU1DLGVBQWUsR0FBR25CLHlEQUFXLENBQUMsVUFBQ29CLEVBQUQsRUFBZ0I7QUFDaEQsUUFBSXhCLE1BQUosRUFBWTtBQUNSQSxZQUFNLENBQUNnQixJQUFQLENBQVlDLDRFQUFrQixDQUFDUSxpQkFBL0IsRUFBa0RELEVBQWxEO0FBQ0g7QUFDSixHQUprQyxFQUloQyxDQUFDeEIsTUFBRCxDQUpnQyxDQUFuQztBQU1BLHNCQUNJO0FBQUEsNEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUlJO0FBQUEsNkJBQ0kscUVBQUMsZ0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKSixlQU9JO0FBQUEsZ0JBQ0tzQixVQUFVLENBQUNJLE1BQVgsQ0FBa0JDLEdBQWxCLENBQXNCLFVBQUFILEVBQUU7QUFBQSxlQUFJRixVQUFVLENBQUNNLElBQVgsQ0FBZ0JKLEVBQWhCLENBQUo7QUFBQSxPQUF4QixFQUFpREcsR0FBakQsQ0FBcUQsVUFBQUUsU0FBUztBQUFBLDRCQUMzRDtBQUFBLHFCQUNLQSxTQUFTLENBQUN2QixJQURmLGVBRUk7QUFBUSxtQkFBTyxFQUFFO0FBQUEscUJBQU1pQixlQUFlLENBQUNNLFNBQVMsQ0FBQ0MsR0FBWCxDQUFyQjtBQUFBLGFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEMkQ7QUFBQSxPQUE5RDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQW9CSCxDQTdCRDs7SUFBTVQsa0I7VUFDMkJ0QixzRDs7O01BRDNCc0Isa0I7QUE4QlNBLGlGQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Tb3VuZENhcmRTaW11bGF0b3IudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJVGVja29zQ2xpZW50IGZyb20gXCJ0ZWNrb3MtY2xpZW50L2Rpc3QvSVRlY2tvc0NsaWVudFwiO1xuaW1wb3J0IHtDbGllbnREZXZpY2VFdmVudHN9IGZyb20gXCIuLi91dGlscy90eXBlcy9Tb2NrZXRFdmVudHNcIjtcbmltcG9ydCB7RGV2aWNlfSBmcm9tIFwiLi4vdXRpbHMvdHlwZXMvRGV2aWNlXCI7XG5pbXBvcnQge0FkZFNvdW5kQ2FyZFBheWxvYWR9IGZyb20gXCIuLi91dGlscy90eXBlcy9Tb2NrZXRQYXlsb2Fkc1wiO1xuaW1wb3J0IHtTb3VuZENhcmR9IGZyb20gXCIuLi91dGlscy90eXBlcy9Tb3VuZENhcmRcIjtcbmltcG9ydCB1c2VTdGFnZSBmcm9tIFwiLi4vbGlicy91c2VTdGFnZVwiO1xuXG5jb25zdCBBZGRTb3VuZENhcmRGb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IHtzb2NrZXR9ID0gdXNlU3RhZ2UoKTtcbiAgICBjb25zdCBuYW1lUmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KCk7XG5cbiAgICBjb25zdCBhZGRTb3VuZENhcmQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGlmIChuYW1lUmVmLmN1cnJlbnQgJiYgc29ja2V0KSB7XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gbmFtZVJlZi5jdXJyZW50LnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgcGF5bG9hZDogQWRkU291bmRDYXJkUGF5bG9hZCA9IHtcbiAgICAgICAgICAgICAgICBpbml0aWFsOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGRyaXZlcjogJ0FMU0EnLFxuICAgICAgICAgICAgICAgICAgICBudW1JbnB1dENoYW5uZWxzOiA4LFxuICAgICAgICAgICAgICAgICAgICBudW1PdXRwdXRDaGFubmVsczogNCxcbiAgICAgICAgICAgICAgICAgICAgc2FtcGxlUmF0ZTogNDQxMDAsXG4gICAgICAgICAgICAgICAgICAgIHBlcmlvZFNpemU6IDIsXG4gICAgICAgICAgICAgICAgICAgIG51bVBlcmlvZHM6IDJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc29ja2V0LmVtaXQoQ2xpZW50RGV2aWNlRXZlbnRzLkFERF9TT1VORF9DQVJELCBwYXlsb2FkKTtcbiAgICAgICAgfVxuICAgIH0sIFtzb2NrZXQsIG5hbWVSZWZdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm5hbWVcIiByZWY9e25hbWVSZWZ9Lz5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGFkZFNvdW5kQ2FyZCgpO1xuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgQUREIFNPVU5EQ0FSRFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICApXG59O1xuXG5jb25zdCBTb3VuZENhcmRTaW11bGF0b3IgPSAoKSA9PiB7XG4gICAgY29uc3Qge3NvY2tldCwgc291bmRDYXJkc30gPSB1c2VTdGFnZSgpO1xuXG4gICAgY29uc3QgcmVtb3ZlU291bmRDYXJkID0gdXNlQ2FsbGJhY2soKGlkOiBzdHJpbmcpID0+IHtcbiAgICAgICAgaWYgKHNvY2tldCkge1xuICAgICAgICAgICAgc29ja2V0LmVtaXQoQ2xpZW50RGV2aWNlRXZlbnRzLlJFTU9WRV9TT1VORF9DQVJELCBpZCk7XG4gICAgICAgIH1cbiAgICB9LCBbc29ja2V0XSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBUaGUgb3YtY2xpZW50IHdpbGwgYWRkIGEgZW50aXR5IGZvciBhbGwgbmV3bHkgaWRlbnRpZmllZCBzb3VuZCBjYXJkcyBhdXRvbWF0aWNhbGx5LlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgPEFkZFNvdW5kQ2FyZEZvcm0vPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHtzb3VuZENhcmRzLmFsbElkcy5tYXAoaWQgPT4gc291bmRDYXJkcy5ieUlkW2lkXSkubWFwKHNvdW5kQ2FyZCA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtzb3VuZENhcmQubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcmVtb3ZlU291bmRDYXJkKHNvdW5kQ2FyZC5faWQpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBERUxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufTtcbmV4cG9ydCBkZWZhdWx0IFNvdW5kQ2FyZFNpbXVsYXRvcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SoundCardSimulator.tsx\n");

/***/ })

})