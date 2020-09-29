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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _defineProperty({
        "class": "tools"
      }, "class", true), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "SEO Tools"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "SMM Tools"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Adwords Tools"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Copywriting")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BZG1pblNpZGViYXIuanMiXSwibmFtZXMiOlsiQWRtaW5TaWRlYmFyIiwicHJvcHMiLCJ0b2dnbGVUb29sIiwic2V0U3RhdGUiLCJkaXNwbGF5dG9vbHMiLCJzdGF0ZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLFlBQWI7QUFBQTs7QUFBQTs7QUFDSSx3QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOOztBQURlLFVBU25CQyxVQVRtQixHQVNSLFlBQUk7QUFDWCxZQUFLQyxRQUFMLENBQWM7QUFDVkMsb0JBQVksRUFBUSxDQUFDLE1BQUtDLEtBQUwsQ0FBV0Q7QUFEdEIsT0FBZDtBQUdILEtBYmtCOztBQUdmLFVBQUtDLEtBQUwsR0FBYTtBQUNURCxrQkFBWSxFQUFlO0FBRGxCLEtBQWI7QUFIZTtBQU9sQjs7QUFSTDtBQUFBO0FBQUEsNkJBZWE7QUFDTCwwQkFDSTtBQUFLLGlCQUFNO0FBQVgsc0JBQ0k7QUFBSyxpQkFBTTtBQUFYLHNCQUNJO0FBQVEsZUFBTyxFQUFFLEtBQUtGO0FBQXRCLG9DQUE0QztBQUFLLFdBQUcsRUFBQywyQ0FBVDtBQUFxRCxpQkFBTTtBQUEzRCxRQUE1QyxDQURKLGVBRUk7QUFBSyxpQkFBTTtBQUFYLHNDQUNJLG9GQUNJLG1GQURKLGVBRUksbUZBRkosZUFHSSx1RkFISixlQUlJLHFGQUpKLENBREosQ0FGSixDQURKLGVBWUk7QUFBSSxpQkFBTTtBQUFWLHNCQUNJLG9GQUNJLGlHQUFhO0FBQUssV0FBRyxFQUFDLDJDQUFUO0FBQXFELGlCQUFNO0FBQTNELFFBQWIsQ0FESixlQUVJO0FBQUssaUJBQU07QUFBWCxzQkFDSTtBQUFJLGlCQUFNO0FBQVYsc0JBQ0ksb0ZBQUk7QUFBRyxZQUFJLEVBQUM7QUFBUixzQkFBSixDQURKLGVBRUksb0ZBQUk7QUFBRyxZQUFJLEVBQUM7QUFBUixzQkFBSixDQUZKLGVBR0ksb0ZBQUk7QUFBRyxZQUFJLEVBQUM7QUFBUixzQkFBSixDQUhKLGVBSUksb0ZBQUk7QUFBRyxZQUFJLEVBQUM7QUFBUixzQkFBSixDQUpKLGVBS0ksb0ZBQUk7QUFBRyxZQUFJLEVBQUM7QUFBUixzQkFBSixDQUxKLENBREosQ0FGSixDQURKLGVBYUksb0ZBQUk7QUFBRyxZQUFJLEVBQUM7QUFBUixrQkFBSixDQWJKLGVBY0ksb0ZBQUk7QUFBRyxZQUFJLEVBQUM7QUFBUixrQkFBSixDQWRKLGVBZUksb0ZBQUk7QUFBRyxZQUFJLEVBQUM7QUFBUixrQkFBSixDQWZKLGVBZ0JJLG9GQUFJO0FBQUcsWUFBSSxFQUFDO0FBQVIsZ0JBQUosQ0FoQkosZUFpQkksb0ZBQUk7QUFBRyxZQUFJLEVBQUM7QUFBUixnQkFBSixDQWpCSixlQWtCSSxvRkFBSTtBQUFHLFlBQUksRUFBQztBQUFSLGdCQUFKLENBbEJKLGVBbUJJLG9GQUFJO0FBQUcsWUFBSSxFQUFDO0FBQVIsZ0JBQUosQ0FuQkosQ0FaSixDQURKO0FBb0NIO0FBcERMOztBQUFBO0FBQUEsRUFBa0NJLCtDQUFsQztBQXVEZU4sMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vdXNlci5hOTcwMzFkYjBhYjg2NjUzMGM3NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGNsYXNzIEFkbWluU2lkZWJhciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZGlzcGxheXRvb2xzOiAgICAgICAgICAgICAgZmFsc2UsXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgdG9nZ2xlVG9vbD0oKT0+e1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBkaXNwbGF5dG9vbHM6ICAgICAgICF0aGlzLnN0YXRlLmRpc3BsYXl0b29sc1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGViYXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMudG9nZ2xlVG9vbH0+QWxsIFRvb2xzIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWFnZXMvaWNvbnMvYXJyb3ctZG93bi1ibGFjay5zdmdcIiBjbGFzcz1cImFycm93XCIvPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b29sc1wiIGNsYXNzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+U0VPIFRvb2xzPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5TTU0gVG9vbHM8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkFkd29yZHMgVG9vbHM8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkNvcHl3cml0aW5nPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiYWN0aW9uTGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+TGluayAxIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWFnZXMvaWNvbnMvYXJyb3ctZG93bi1ibGFjay5zdmdcIiBjbGFzcz1cImFycm93XCIvPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhpZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImFjdGlvblN1Ykxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIlwiPnN1YiBsaW5rIDE8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIlwiPnN1YiBsaW5rIDI8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIlwiPnN1YiBsaW5rIDM8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIlwiPnN1YiBsaW5rIDQ8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIlwiPnN1YiBsaW5rIDU8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+TGluayAyPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+TGluayAzPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+TGluayA0PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+TGluazwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkxpbms8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5MaW5rPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+TGluazwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZG1pblNpZGViYXJcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==