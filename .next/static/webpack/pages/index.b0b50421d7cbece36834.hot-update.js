webpackHotUpdate_N_E("pages/index",{

/***/ "./utils/reducers/TrackPresetReducer.ts":
/*!**********************************************!*\
  !*** ./utils/reducers/TrackPresetReducer.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_tobias_Developer_digitalstage_ov_simulator_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _types_SocketEvents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/SocketEvents */ \"./utils/types/SocketEvents.ts\");\n/* harmony import */ var _upsert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../upsert */ \"./utils/upsert.ts\");\n/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/omit */ \"./node_modules/lodash/omit.js\");\n/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_3__);\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_tobias_Developer_digitalstage_ov_simulator_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nfunction TrackPresetReducer(state, action) {\n  switch (action.type) {\n    case _types_SocketEvents__WEBPACK_IMPORTED_MODULE_1__[\"ServerDeviceEvents\"].TRACK_PRESET_ADDED:\n      {\n        var trackPreset = action.payload;\n        return {\n          byId: _objectSpread(_objectSpread({}, state.byId), {}, Object(_Users_tobias_Developer_digitalstage_ov_simulator_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, trackPreset._id, trackPreset)),\n          bySoundCard: _objectSpread(_objectSpread({}, state.bySoundCard), {}, Object(_Users_tobias_Developer_digitalstage_ov_simulator_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, trackPreset.soundCardId, Object(_upsert__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(state.bySoundCard[trackPreset.soundCardId] || [], trackPreset._id))),\n          allIds: Object(_upsert__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(state.allIds, trackPreset._id)\n        };\n      }\n\n    case _types_SocketEvents__WEBPACK_IMPORTED_MODULE_1__[\"ServerDeviceEvents\"].TRACK_PRESET_CHANGED:\n      {\n        var _trackPreset = action.payload;\n        return _objectSpread(_objectSpread({}, state), {}, {\n          byId: _objectSpread(_objectSpread({}, state.byId), {}, Object(_Users_tobias_Developer_digitalstage_ov_simulator_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, _trackPreset._id, _objectSpread(_objectSpread({}, state.byId[_trackPreset._id]), _trackPreset)))\n        });\n      }\n\n    case _types_SocketEvents__WEBPACK_IMPORTED_MODULE_1__[\"ServerDeviceEvents\"].TRACK_PRESET_REMOVED:\n      {\n        var removedId = action.payload;\n        var _trackPreset2 = state.byId[removedId];\n        if (!_trackPreset2) return state;\n        return _objectSpread(_objectSpread({}, state), {}, {\n          byId: lodash_omit__WEBPACK_IMPORTED_MODULE_3___default()(state.byId, removedId),\n          bySoundCard: _objectSpread(_objectSpread({}, state.bySoundCard), {}, Object(_Users_tobias_Developer_digitalstage_ov_simulator_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, _trackPreset2.soundCardId, state.bySoundCard[_trackPreset2.soundCardId].filter(function (id) {\n            return id !== removedId;\n          }))),\n          allIds: state.allIds.filter(function (id) {\n            return id !== removedId;\n          })\n        });\n      }\n\n    default:\n      throw new Error();\n  }\n}\n\n_c = TrackPresetReducer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TrackPresetReducer);\n\nvar _c;\n\n$RefreshReg$(_c, \"TrackPresetReducer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvcmVkdWNlcnMvVHJhY2tQcmVzZXRSZWR1Y2VyLnRzP2VmZWQiXSwibmFtZXMiOlsiVHJhY2tQcmVzZXRSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiU2VydmVyRGV2aWNlRXZlbnRzIiwiVFJBQ0tfUFJFU0VUX0FEREVEIiwidHJhY2tQcmVzZXQiLCJwYXlsb2FkIiwiYnlJZCIsIl9pZCIsImJ5U291bmRDYXJkIiwic291bmRDYXJkSWQiLCJ1cHNlcnQiLCJhbGxJZHMiLCJUUkFDS19QUkVTRVRfQ0hBTkdFRCIsIlRSQUNLX1BSRVNFVF9SRU1PVkVEIiwicmVtb3ZlZElkIiwib21pdCIsImZpbHRlciIsImlkIiwiRXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFrQkEsU0FBU0Esa0JBQVQsQ0FBNEJDLEtBQTVCLEVBQWlEQyxNQUFqRCxFQUEwRjtBQUN0RixVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDSSxTQUFLQyxzRUFBa0IsQ0FBQ0Msa0JBQXhCO0FBQTRDO0FBQ3hDLFlBQU1DLFdBQXdCLEdBQUdKLE1BQU0sQ0FBQ0ssT0FBeEM7QUFDQSxlQUFPO0FBQ0hDLGNBQUksa0NBQ0dQLEtBQUssQ0FBQ08sSUFEVCxtS0FFQ0YsV0FBVyxDQUFDRyxHQUZiLEVBRW1CSCxXQUZuQixFQUREO0FBS0hJLHFCQUFXLGtDQUNKVCxLQUFLLENBQUNTLFdBREYsbUtBRU5KLFdBQVcsQ0FBQ0ssV0FGTixFQUVvQkMsdURBQU0sQ0FBU1gsS0FBSyxDQUFDUyxXQUFOLENBQWtCSixXQUFXLENBQUNLLFdBQTlCLEtBQThDLEVBQXZELEVBQTJETCxXQUFXLENBQUNHLEdBQXZFLENBRjFCLEVBTFI7QUFTSEksZ0JBQU0sRUFBRUQsdURBQU0sQ0FBU1gsS0FBSyxDQUFDWSxNQUFmLEVBQXVCUCxXQUFXLENBQUNHLEdBQW5DO0FBVFgsU0FBUDtBQVdIOztBQUNELFNBQUtMLHNFQUFrQixDQUFDVSxvQkFBeEI7QUFBOEM7QUFDMUMsWUFBTVIsWUFBd0IsR0FBR0osTUFBTSxDQUFDSyxPQUF4QztBQUNBLCtDQUNPTixLQURQO0FBRUlPLGNBQUksa0NBQ0dQLEtBQUssQ0FBQ08sSUFEVCxtS0FFQ0YsWUFBVyxDQUFDRyxHQUZiLGtDQUdPUixLQUFLLENBQUNPLElBQU4sQ0FBV0YsWUFBVyxDQUFDRyxHQUF2QixDQUhQLEdBSU9ILFlBSlA7QUFGUjtBQVVIOztBQUNELFNBQUtGLHNFQUFrQixDQUFDVyxvQkFBeEI7QUFBOEM7QUFDMUMsWUFBTUMsU0FBaUIsR0FBR2QsTUFBTSxDQUFDSyxPQUFqQztBQUNBLFlBQU1ELGFBQXdCLEdBQUdMLEtBQUssQ0FBQ08sSUFBTixDQUFXUSxTQUFYLENBQWpDO0FBQ0EsWUFBSSxDQUFDVixhQUFMLEVBQ0ksT0FBT0wsS0FBUDtBQUNKLCtDQUNPQSxLQURQO0FBRUlPLGNBQUksRUFBRVMsa0RBQUksQ0FBQ2hCLEtBQUssQ0FBQ08sSUFBUCxFQUFhUSxTQUFiLENBRmQ7QUFHSU4scUJBQVcsa0NBQ0pULEtBQUssQ0FBQ1MsV0FERixtS0FFTkosYUFBVyxDQUFDSyxXQUZOLEVBRW9CVixLQUFLLENBQUNTLFdBQU4sQ0FBa0JKLGFBQVcsQ0FBQ0ssV0FBOUIsRUFBMkNPLE1BQTNDLENBQWtELFVBQUFDLEVBQUU7QUFBQSxtQkFBSUEsRUFBRSxLQUFLSCxTQUFYO0FBQUEsV0FBcEQsQ0FGcEIsRUFIZjtBQU9JSCxnQkFBTSxFQUFFWixLQUFLLENBQUNZLE1BQU4sQ0FBYUssTUFBYixDQUFvQixVQUFBQyxFQUFFO0FBQUEsbUJBQUlBLEVBQUUsS0FBS0gsU0FBWDtBQUFBLFdBQXRCO0FBUFo7QUFTSDs7QUFDRDtBQUNJLFlBQU0sSUFBSUksS0FBSixFQUFOO0FBNUNSO0FBOENIOztLQS9DUXBCLGtCO0FBaURNQSxpRkFBZiIsImZpbGUiOiIuL3V0aWxzL3JlZHVjZXJzL1RyYWNrUHJlc2V0UmVkdWNlci50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2VydmVyRGV2aWNlRXZlbnRzfSBmcm9tIFwiLi4vdHlwZXMvU29ja2V0RXZlbnRzXCI7XG5pbXBvcnQgdXBzZXJ0IGZyb20gXCIuLi91cHNlcnRcIjtcbmltcG9ydCBvbWl0IGZyb20gJ2xvZGFzaC9vbWl0JztcbmltcG9ydCB7VHJhY2tQcmVzZXR9IGZyb20gXCIuLi90eXBlcy9UcmFja1ByZXNldFwiO1xuXG5leHBvcnQgdHlwZSBUcmFja1ByZXNldEFjdGlvbiA9XG4gICAgeyB0eXBlOiBTZXJ2ZXJEZXZpY2VFdmVudHMuVFJBQ0tfUFJFU0VUX0FEREVELCBwYXlsb2FkOiBUcmFja1ByZXNldCB9XG4gICAgfCB7IHR5cGU6IFNlcnZlckRldmljZUV2ZW50cy5UUkFDS19QUkVTRVRfQ0hBTkdFRCwgcGF5bG9hZDogVHJhY2tQcmVzZXQgfVxuICAgIHwgeyB0eXBlOiBTZXJ2ZXJEZXZpY2VFdmVudHMuVFJBQ0tfUFJFU0VUX1JFTU9WRUQsIHBheWxvYWQ6IHN0cmluZyB9O1xuXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNrUHJlc2V0cyB7XG4gICAgYnlJZDoge1xuICAgICAgICBbaWQ6IHN0cmluZ106IFRyYWNrUHJlc2V0XG4gICAgfVxuICAgIGJ5U291bmRDYXJkOiB7XG4gICAgICAgIFtzb3VuZENhcmRJZDogc3RyaW5nXTogc3RyaW5nW11cbiAgICB9XG4gICAgYWxsSWRzOiBzdHJpbmdbXVxufVxuXG5mdW5jdGlvbiBUcmFja1ByZXNldFJlZHVjZXIoc3RhdGU6IFRyYWNrUHJlc2V0cywgYWN0aW9uOiBUcmFja1ByZXNldEFjdGlvbik6IFRyYWNrUHJlc2V0cyB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIFNlcnZlckRldmljZUV2ZW50cy5UUkFDS19QUkVTRVRfQURERUQ6IHtcbiAgICAgICAgICAgIGNvbnN0IHRyYWNrUHJlc2V0OiBUcmFja1ByZXNldCA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBieUlkOiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLmJ5SWQsXG4gICAgICAgICAgICAgICAgICAgIFt0cmFja1ByZXNldC5faWRdOiB0cmFja1ByZXNldFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYnlTb3VuZENhcmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUuYnlTb3VuZENhcmQsXG4gICAgICAgICAgICAgICAgICAgIFt0cmFja1ByZXNldC5zb3VuZENhcmRJZF06IHVwc2VydDxzdHJpbmc+KHN0YXRlLmJ5U291bmRDYXJkW3RyYWNrUHJlc2V0LnNvdW5kQ2FyZElkXSB8fCBbXSwgdHJhY2tQcmVzZXQuX2lkKSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGFsbElkczogdXBzZXJ0PHN0cmluZz4oc3RhdGUuYWxsSWRzLCB0cmFja1ByZXNldC5faWQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBTZXJ2ZXJEZXZpY2VFdmVudHMuVFJBQ0tfUFJFU0VUX0NIQU5HRUQ6IHtcbiAgICAgICAgICAgIGNvbnN0IHRyYWNrUHJlc2V0OiBUcmFja1ByZXNldCA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBieUlkOiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLmJ5SWQsXG4gICAgICAgICAgICAgICAgICAgIFt0cmFja1ByZXNldC5faWRdOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5ieUlkW3RyYWNrUHJlc2V0Ll9pZF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi50cmFja1ByZXNldFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhc2UgU2VydmVyRGV2aWNlRXZlbnRzLlRSQUNLX1BSRVNFVF9SRU1PVkVEOiB7XG4gICAgICAgICAgICBjb25zdCByZW1vdmVkSWQ6IHN0cmluZyA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgICAgICAgY29uc3QgdHJhY2tQcmVzZXQ6IFRyYWNrUHJlc2V0ID0gc3RhdGUuYnlJZFtyZW1vdmVkSWRdO1xuICAgICAgICAgICAgaWYgKCF0cmFja1ByZXNldClcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGJ5SWQ6IG9taXQoc3RhdGUuYnlJZCwgcmVtb3ZlZElkKSxcbiAgICAgICAgICAgICAgICBieVNvdW5kQ2FyZDoge1xuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5ieVNvdW5kQ2FyZCxcbiAgICAgICAgICAgICAgICAgICAgW3RyYWNrUHJlc2V0LnNvdW5kQ2FyZElkXTogc3RhdGUuYnlTb3VuZENhcmRbdHJhY2tQcmVzZXQuc291bmRDYXJkSWRdLmZpbHRlcihpZCA9PiBpZCAhPT0gcmVtb3ZlZElkKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYWxsSWRzOiBzdGF0ZS5hbGxJZHMuZmlsdGVyKGlkID0+IGlkICE9PSByZW1vdmVkSWQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJhY2tQcmVzZXRSZWR1Y2VyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/reducers/TrackPresetReducer.ts\n");

/***/ })

})