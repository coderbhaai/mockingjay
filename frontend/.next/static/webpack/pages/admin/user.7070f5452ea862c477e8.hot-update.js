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

  function AdminSidebar(props) {
    var _this;

    _classCallCheck(this, AdminSidebar);

    _this = _super.call(this, props);

    _this.toggleTool = function () {
      _this.setState({
        displaytools: !_this.state.displaytools
      });
    };

    _this.state = {
      displaytools: false
    };
    return _this;
  }

  _createClass(AdminSidebar, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "sidebar"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "top"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.toggleTool
      }, "All Tools ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/icons/arrow-down-black.svg",
        "class": "arrow"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "tools",
        className: true
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BZG1pblNpZGViYXIuanMiXSwibmFtZXMiOlsiQWRtaW5TaWRlYmFyIiwicHJvcHMiLCJ0b2dnbGVUb29sIiwic2V0U3RhdGUiLCJkaXNwbGF5dG9vbHMiLCJzdGF0ZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxZQUFiO0FBQUE7O0FBQUE7O0FBQ0ksd0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZSxVQVNuQkMsVUFUbUIsR0FTUixZQUFJO0FBQ1gsWUFBS0MsUUFBTCxDQUFjO0FBQ1ZDLG9CQUFZLEVBQVEsQ0FBQyxNQUFLQyxLQUFMLENBQVdEO0FBRHRCLE9BQWQ7QUFHSCxLQWJrQjs7QUFHZixVQUFLQyxLQUFMLEdBQWE7QUFDVEQsa0JBQVksRUFBZTtBQURsQixLQUFiO0FBSGU7QUFPbEI7O0FBUkw7QUFBQTtBQUFBLDZCQWVhO0FBQ0wsMEJBQ0k7QUFBSyxpQkFBTTtBQUFYLHNCQUNJO0FBQUssaUJBQU07QUFBWCxzQkFDSTtBQUFRLGVBQU8sRUFBRSxLQUFLRjtBQUF0QixvQ0FBNEM7QUFBSyxXQUFHLEVBQUMsMkNBQVQ7QUFBcUQsaUJBQU07QUFBM0QsUUFBNUMsQ0FESixlQUVJO0FBQUssaUJBQU0sT0FBWDtBQUFtQixpQkFBUztBQUE1QixzQkFDSSxvRkFDSSxtRkFESixlQUVJLG1GQUZKLGVBR0ksdUZBSEosZUFJSSxxRkFKSixDQURKLENBRkosQ0FESixlQVlJO0FBQUksaUJBQU07QUFBVixzQkFDSSxvRkFDSSxpR0FBYTtBQUFLLFdBQUcsRUFBQywyQ0FBVDtBQUFxRCxpQkFBTTtBQUEzRCxRQUFiLENBREosZUFFSTtBQUFLLGlCQUFNO0FBQVgsc0JBQ0k7QUFBSSxpQkFBTTtBQUFWLHNCQUNJLG9GQUFJO0FBQUcsWUFBSSxFQUFDO0FBQVIsc0JBQUosQ0FESixlQUVJLG9GQUFJO0FBQUcsWUFBSSxFQUFDO0FBQVIsc0JBQUosQ0FGSixlQUdJLG9GQUFJO0FBQUcsWUFBSSxFQUFDO0FBQVIsc0JBQUosQ0FISixlQUlJLG9GQUFJO0FBQUcsWUFBSSxFQUFDO0FBQVIsc0JBQUosQ0FKSixlQUtJLG9GQUFJO0FBQUcsWUFBSSxFQUFDO0FBQVIsc0JBQUosQ0FMSixDQURKLENBRkosQ0FESixlQWFJLG9GQUFJO0FBQUcsWUFBSSxFQUFDO0FBQVIsa0JBQUosQ0FiSixlQWNJLG9GQUFJO0FBQUcsWUFBSSxFQUFDO0FBQVIsa0JBQUosQ0FkSixlQWVJLG9GQUFJO0FBQUcsWUFBSSxFQUFDO0FBQVIsa0JBQUosQ0FmSixlQWdCSSxvRkFBSTtBQUFHLFlBQUksRUFBQztBQUFSLGdCQUFKLENBaEJKLGVBaUJJLG9GQUFJO0FBQUcsWUFBSSxFQUFDO0FBQVIsZ0JBQUosQ0FqQkosZUFrQkksb0ZBQUk7QUFBRyxZQUFJLEVBQUM7QUFBUixnQkFBSixDQWxCSixlQW1CSSxvRkFBSTtBQUFHLFlBQUksRUFBQztBQUFSLGdCQUFKLENBbkJKLENBWkosQ0FESjtBQW9DSDtBQXBETDs7QUFBQTtBQUFBLEVBQWtDSSwrQ0FBbEM7QUF1RGVOLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL3VzZXIuNzA3MGY1NDUyZWE4NjJjNDc3ZTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBjbGFzcyBBZG1pblNpZGViYXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgIFxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXl0b29sczogICAgICAgICAgICAgIGZhbHNlLFxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRvZ2dsZVRvb2w9KCk9PntcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgZGlzcGxheXRvb2xzOiAgICAgICAhdGhpcy5zdGF0ZS5kaXNwbGF5dG9vbHNcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnRvZ2dsZVRvb2x9PkFsbCBUb29scyA8aW1nIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2ljb25zL2Fycm93LWRvd24tYmxhY2suc3ZnXCIgY2xhc3M9XCJhcnJvd1wiLz48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9vbHNcIiBjbGFzc05hbWU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5TRU8gVG9vbHM8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlNNTSBUb29sczwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+QWR3b3JkcyBUb29sczwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Q29weXdyaXRpbmc8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJhY3Rpb25MaXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5MaW5rIDEgPGltZyBzcmM9XCIvc3RhdGljL2ltYWdlcy9pY29ucy9hcnJvdy1kb3duLWJsYWNrLnN2Z1wiIGNsYXNzPVwiYXJyb3dcIi8+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGlkZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiYWN0aW9uU3ViTGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiXCI+c3ViIGxpbmsgMTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiXCI+c3ViIGxpbmsgMjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiXCI+c3ViIGxpbmsgMzwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiXCI+c3ViIGxpbmsgNDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiXCI+c3ViIGxpbmsgNTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5MaW5rIDI8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5MaW5rIDM8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5MaW5rIDQ8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5MaW5rPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+TGluazwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkxpbms8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5MaW5rPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkbWluU2lkZWJhclxyXG4iXSwic291cmNlUm9vdCI6IiJ9