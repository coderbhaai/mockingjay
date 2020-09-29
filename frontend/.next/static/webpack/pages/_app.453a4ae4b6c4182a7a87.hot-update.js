webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: Layout, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
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





var Layout = /*#__PURE__*/function (_Component) {
  _inherits(Layout, _Component);

  var _super = _createSuper(Layout);

  function Layout() {
    _classCallCheck(this, Layout);

    return _super.apply(this, arguments);
  }

  _createClass(Layout, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "BitzPrice"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
        href: "/static/css/style.css",
        rel: "stylesheet",
        key: "style"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
        href: "/static/css/style.css",
        rel: "stylesheet",
        key: "style"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
        src: "/static/js/jquery-3.1.0.js"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
        src: "/static/js/bootstrap.min.js"
      }));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Layout);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQuanMiXSwibmFtZXMiOlsiTGF5b3V0IiwiY2hpbGRyZW4iLCJwcm9wcyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsTUFBYjtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsNkJBQ2E7QUFBQSxVQUNHQyxRQURILEdBQ2dCLEtBQUtDLEtBRHJCLENBQ0dELFFBREg7QUFFTCwwQkFDSSxxSUFDSSwyREFBQyxnREFBRCxxQkFDSSxzRkFESixlQUVJO0FBQU0sWUFBSSxFQUFDLHVCQUFYO0FBQW1DLFdBQUcsRUFBQyxZQUF2QztBQUFvRCxXQUFHLEVBQUM7QUFBeEQsUUFGSixlQUdJO0FBQU0sWUFBSSxFQUFDLHVCQUFYO0FBQW1DLFdBQUcsRUFBQyxZQUF2QztBQUFvRCxXQUFHLEVBQUM7QUFBeEQsUUFISixDQURKLGVBTUksMkRBQUMsK0NBQUQsT0FOSixFQU9LQSxRQVBMLGVBUUksMkRBQUMsK0NBQUQsT0FSSixlQVNJO0FBQVEsV0FBRyxFQUFDO0FBQVosUUFUSixlQVVJO0FBQVEsV0FBRyxFQUFDO0FBQVosUUFWSixDQURKO0FBY0g7QUFqQkw7O0FBQUE7QUFBQSxFQUE0QkUsK0NBQTVCO0FBb0JlSCxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjQ1M2E0YWU0YjZjNDE4MmE3YTg3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcidcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3RlcidcclxuXHJcbmV4cG9ydCBjbGFzcyBMYXlvdXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPkJpdHpQcmljZTwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cIi9zdGF0aWMvY3NzL3N0eWxlLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiBrZXk9XCJzdHlsZVwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiL3N0YXRpYy9jc3Mvc3R5bGUuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIGtleT1cInN0eWxlXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICAgICAgPEhlYWRlci8+XHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICA8Rm9vdGVyLz5cclxuICAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiL3N0YXRpYy9qcy9qcXVlcnktMy4xLjAuanNcIj48L3NjcmlwdD5cclxuICAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiL3N0YXRpYy9qcy9ib290c3RyYXAubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=