webpackHotUpdate_N_E("pages/admin/user",{

/***/ "./components/AdminSidebar.js":
/*!************************************!*\
  !*** ./components/AdminSidebar.js ***!
  \************************************/
/*! exports provided: AdminSidebar, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminSidebar", function() { return AdminSidebar; });
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


var AdminSidebar = /*#__PURE__*/function (_Component) {
  _inherits(AdminSidebar, _Component);

  var _super = _createSuper(AdminSidebar);

  function AdminSidebar() {
    _classCallCheck(this, AdminSidebar);

    return _super.apply(this, arguments);
  }

  _createClass(AdminSidebar, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "sidebar"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "top"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", null, "All Tools ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/icons/arrow-down-black.svg",
        "class": "arrow"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "tools"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "SEO Tools"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "SMM Tools"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Adwords Tools"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Copywriting")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        "class": "actionList"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Link 1 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/icons/arrow-down-black.svg",
        "class": "arrow"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "hide"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        "class": "actionSubList"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: ""
      }, "sub link 1")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: ""
      }, "sub link 2")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: ""
      }, "sub link 3")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: ""
      }, "sub link 4")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: ""
      }, "sub link 5"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Link 2")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Link 3")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Link 4")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Link")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Link")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Link")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Link"))));
    }
  }]);

  return AdminSidebar;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (AdminSidebar);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BZG1pblNpZGViYXIuanMiXSwibmFtZXMiOlsiQWRtaW5TaWRlYmFyIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLFlBQWI7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLDZCQUNhO0FBQ0wsMEJBQ0k7QUFBSyxpQkFBTTtBQUFYLHNCQUNBO0FBQUssaUJBQU07QUFBWCxzQkFDSSxzR0FBa0I7QUFBSyxXQUFHLEVBQUMsMkNBQVQ7QUFBcUQsaUJBQU07QUFBM0QsUUFBbEIsQ0FESixlQUVJO0FBQUssaUJBQU07QUFBWCxzQkFDSSxvRkFDSSxtRkFESixlQUVJLG1GQUZKLGVBR0ksdUZBSEosZUFJSSxxRkFKSixDQURKLENBRkosQ0FEQSxlQVlBO0FBQUksaUJBQU07QUFBVixzQkFDSSxvRkFDSSxpR0FBYTtBQUFLLFdBQUcsRUFBQywyQ0FBVDtBQUFxRCxpQkFBTTtBQUEzRCxRQUFiLENBREosZUFFSTtBQUFLLGlCQUFNO0FBQVgsc0JBQ0k7QUFBSSxpQkFBTTtBQUFWLHNCQUNJLG9GQUFJO0FBQUcsWUFBSSxFQUFDO0FBQVIsc0JBQUosQ0FESixlQUVJLG9GQUFJO0FBQUcsWUFBSSxFQUFDO0FBQVIsc0JBQUosQ0FGSixlQUdJLG9GQUFJO0FBQUcsWUFBSSxFQUFDO0FBQVIsc0JBQUosQ0FISixlQUlJLG9GQUFJO0FBQUcsWUFBSSxFQUFDO0FBQVIsc0JBQUosQ0FKSixlQUtJLG9GQUFJO0FBQUcsWUFBSSxFQUFDO0FBQVIsc0JBQUosQ0FMSixDQURKLENBRkosQ0FESixlQWFJLG9GQUFJO0FBQUcsWUFBSSxFQUFDO0FBQVIsa0JBQUosQ0FiSixlQWNJLG9GQUFJO0FBQUcsWUFBSSxFQUFDO0FBQVIsa0JBQUosQ0FkSixlQWVJLG9GQUFJO0FBQUcsWUFBSSxFQUFDO0FBQVIsa0JBQUosQ0FmSixlQWdCSSxvRkFBSTtBQUFHLFlBQUksRUFBQztBQUFSLGdCQUFKLENBaEJKLGVBaUJJLG9GQUFJO0FBQUcsWUFBSSxFQUFDO0FBQVIsZ0JBQUosQ0FqQkosZUFrQkksb0ZBQUk7QUFBRyxZQUFJLEVBQUM7QUFBUixnQkFBSixDQWxCSixlQW1CSSxvRkFBSTtBQUFHLFlBQUksRUFBQztBQUFSLGdCQUFKLENBbkJKLENBWkEsQ0FESjtBQW9DSDtBQXRDTDs7QUFBQTtBQUFBLEVBQWtDQywrQ0FBbEM7QUF5Q2VELDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL3VzZXIuYmMwMzZkNjMwYzYwM2RkNmZkZTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBjbGFzcyBBZG1pblNpZGViYXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b3BcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24+QWxsIFRvb2xzIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWFnZXMvaWNvbnMvYXJyb3ctZG93bi1ibGFjay5zdmdcIiBjbGFzcz1cImFycm93XCIvPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvb2xzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+U0VPIFRvb2xzPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlNNTSBUb29sczwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5BZHdvcmRzIFRvb2xzPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkNvcHl3cml0aW5nPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJhY3Rpb25MaXN0XCI+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+TGluayAxIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWFnZXMvaWNvbnMvYXJyb3ctZG93bi1ibGFjay5zdmdcIiBjbGFzcz1cImFycm93XCIvPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGlkZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJhY3Rpb25TdWJMaXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIlwiPnN1YiBsaW5rIDE8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiXCI+c3ViIGxpbmsgMjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJcIj5zdWIgbGluayAzPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIlwiPnN1YiBsaW5rIDQ8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiXCI+c3ViIGxpbmsgNTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkxpbmsgMjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+TGluayAzPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5MaW5rIDQ8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkxpbms8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkxpbms8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkxpbms8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkxpbms8L2E+PC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkbWluU2lkZWJhclxyXG4iXSwic291cmNlUm9vdCI6IiJ9