webpackHotUpdate_N_E("pages/admin/user",{

/***/ "./components/TopBar.js":
/*!******************************!*\
  !*** ./components/TopBar.js ***!
  \******************************/
/*! exports provided: TopBar, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopBar", function() { return TopBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var TopBar = /*#__PURE__*/function (_Component) {
  _inherits(TopBar, _Component);

  var _super = _createSuper(TopBar);

  function TopBar() {
    _classCallCheck(this, TopBar);

    return _super.apply(this, arguments);
  }

  _createClass(TopBar, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "tn-upgrade js-user-upgrade"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/billing/offers/buy/pro-one-month",
        "class": "tn-upgrade__trigger -icon-left",
        "data-js-upgrade-trigger": ""
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        "class": "s-icon -cart -s"
      }), "Upgrade "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        "class": "tn-dropdown-arrow -dark tn-upgrade__dropdown-arrow"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "tn-upgrade__dropdown tn-dropdown -dark",
        "data-test": "top-navigation__upgrade-dropdown"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        "class": "tn-upgrade__dropdown-header"
      }, "Pro"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        "class": "tn-upgrade__list"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        "class": "tn-upgrade__list-item"
      }, "10,000 results per report"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        "class": "tn-upgrade__list-item"
      }, "3,000 reports per day"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        "class": "tn-upgrade__list-item"
      }, "Tracking: 500 keywords, 3 campaigns")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "tn-dropdown__footer tn-upgrade__footer"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/prices/",
        "class": "s-btn -xs -hollow -trans",
        "data-js-upgrade-see-all": ""
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        "class": "s-btn__text"
      }, "See all plans & pricing"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        "class": "tn-upgrade__dropdown-close",
        "data-js-upgrade-close": "",
        "data-test": "top-navigation__upgrade-dropdown-close"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        "class": "s-icon -close -xs"
      })))));
    }
  }]);

  return TopBar;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (TopBar);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ub3BCYXIuanMiXSwibmFtZXMiOlsiVG9wQmFyIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLE1BQWI7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLDZCQUNhO0FBQ0wsMEJBQ0kscUZBQ0k7QUFBSyxpQkFBTTtBQUFYLHNCQUNoQjtBQUFHLFlBQUksRUFBQyxtQ0FBUjtBQUE0QyxpQkFBTSxnQ0FBbEQ7QUFBbUYsbUNBQXdCO0FBQTNHLHNCQUNBO0FBQUcsaUJBQU07QUFBVCxRQURBLGFBRGdCLGVBSWhCO0FBQU0saUJBQU07QUFBWixRQUpnQixlQUtoQjtBQUFLLGlCQUFNLHdDQUFYO0FBQW9ELHFCQUFVO0FBQTlELHNCQUNBO0FBQUksaUJBQU07QUFBVixlQURBLGVBRUE7QUFBSSxpQkFBTTtBQUFWLHNCQUNBO0FBQUksaUJBQU07QUFBVixxQ0FEQSxlQUVBO0FBQUksaUJBQU07QUFBVixpQ0FGQSxlQUdBO0FBQUksaUJBQU07QUFBViwrQ0FIQSxDQUZBLGVBT0E7QUFBSyxpQkFBTTtBQUFYLHNCQUNBO0FBQUcsWUFBSSxFQUFDLFVBQVI7QUFBbUIsaUJBQU0sMEJBQXpCO0FBQW9ELG1DQUF3QjtBQUE1RSxzQkFDQTtBQUFNLGlCQUFNO0FBQVosbUNBREEsQ0FEQSxDQVBBLGVBWUE7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFzQixpQkFBTSw0QkFBNUI7QUFBeUQsaUNBQXNCLEVBQS9FO0FBQWtGLHFCQUFVO0FBQTVGLHNCQUFxSTtBQUFHLGlCQUFNO0FBQVQsUUFBckksQ0FaQSxDQUxnQixDQURKLENBREo7QUF3Qkg7QUExQkw7O0FBQUE7QUFBQSxFQUE0QkMsK0NBQTVCO0FBNkJlRCxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi91c2VyLjkyYTRmM2UyMzZjZTI3YzMzZjE2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgY2xhc3MgVG9wQmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRuLXVwZ3JhZGUganMtdXNlci11cGdyYWRlXCI+XHJcbjxhIGhyZWY9XCIvYmlsbGluZy9vZmZlcnMvYnV5L3Byby1vbmUtbW9udGhcIiBjbGFzcz1cInRuLXVwZ3JhZGVfX3RyaWdnZXIgLWljb24tbGVmdFwiIGRhdGEtanMtdXBncmFkZS10cmlnZ2VyPVwiXCI+XHJcbjxpIGNsYXNzPVwicy1pY29uIC1jYXJ0IC1zXCI+PC9pPlxyXG5VcGdyYWRlIDwvYT5cclxuPHNwYW4gY2xhc3M9XCJ0bi1kcm9wZG93bi1hcnJvdyAtZGFyayB0bi11cGdyYWRlX19kcm9wZG93bi1hcnJvd1wiPjwvc3Bhbj5cclxuPGRpdiBjbGFzcz1cInRuLXVwZ3JhZGVfX2Ryb3Bkb3duIHRuLWRyb3Bkb3duIC1kYXJrXCIgZGF0YS10ZXN0PVwidG9wLW5hdmlnYXRpb25fX3VwZ3JhZGUtZHJvcGRvd25cIj5cclxuPGgzIGNsYXNzPVwidG4tdXBncmFkZV9fZHJvcGRvd24taGVhZGVyXCI+UHJvPC9oMz5cclxuPHVsIGNsYXNzPVwidG4tdXBncmFkZV9fbGlzdFwiPlxyXG48bGkgY2xhc3M9XCJ0bi11cGdyYWRlX19saXN0LWl0ZW1cIj4xMCwwMDAgcmVzdWx0cyBwZXIgcmVwb3J0PC9saT5cclxuPGxpIGNsYXNzPVwidG4tdXBncmFkZV9fbGlzdC1pdGVtXCI+MywwMDAgcmVwb3J0cyBwZXIgZGF5PC9saT5cclxuPGxpIGNsYXNzPVwidG4tdXBncmFkZV9fbGlzdC1pdGVtXCI+VHJhY2tpbmc6IDUwMCBrZXl3b3JkcywgMyBjYW1wYWlnbnM8L2xpPlxyXG48L3VsPlxyXG48ZGl2IGNsYXNzPVwidG4tZHJvcGRvd25fX2Zvb3RlciB0bi11cGdyYWRlX19mb290ZXJcIj5cclxuPGEgaHJlZj1cIi9wcmljZXMvXCIgY2xhc3M9XCJzLWJ0biAteHMgLWhvbGxvdyAtdHJhbnNcIiBkYXRhLWpzLXVwZ3JhZGUtc2VlLWFsbD1cIlwiPlxyXG48c3BhbiBjbGFzcz1cInMtYnRuX190ZXh0XCI+U2VlIGFsbCBwbGFucyAmYW1wOyBwcmljaW5nPC9zcGFuPlxyXG48L2E+XHJcbjwvZGl2PlxyXG48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInRuLXVwZ3JhZGVfX2Ryb3Bkb3duLWNsb3NlXCIgZGF0YS1qcy11cGdyYWRlLWNsb3NlPVwiXCIgZGF0YS10ZXN0PVwidG9wLW5hdmlnYXRpb25fX3VwZ3JhZGUtZHJvcGRvd24tY2xvc2VcIj48aSBjbGFzcz1cInMtaWNvbiAtY2xvc2UgLXhzXCI+PC9pPjwvYnV0dG9uPlxyXG48L2Rpdj5cclxuPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9wQmFyXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=