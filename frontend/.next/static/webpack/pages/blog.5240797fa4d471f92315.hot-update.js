webpackHotUpdate_N_E("pages/blog",{

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/*! exports provided: blog, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blog", function() { return blog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_blogs_BlogList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/blogs/BlogList */ "./components/blogs/BlogList.js");
/* harmony import */ var _components_blogs_BlogBanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/blogs/BlogBanner */ "./components/blogs/BlogBanner.js");
/* harmony import */ var _components_blogs_Parallax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/blogs/Parallax */ "./components/blogs/Parallax.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
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






var blog = /*#__PURE__*/function (_Component) {
  _inherits(blog, _Component);

  var _super = _createSuper(blog);

  function blog(props) {
    var _this;

    _classCallCheck(this, blog);

    _this = _super.call(this, props);
    _this.state = {
      blogs: []
    };
    return _this;
  }

  _createClass(blog, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_4___default.a.get('http://127.0.0.1:8000/blog/list').then(function (res) {
        console.log('res.data', res.data);

        _this2.setState({
          blogs: res.data
        });
      })["catch"](function (err) {
        console.log('err.response.data', err.response);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_blogs_BlogBanner__WEBPACK_IMPORTED_MODULE_2__["default"], {
        blogs: this.state.blogs
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container my-5"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "heading"
      }, "Interesting Reads"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_blogs_BlogList__WEBPACK_IMPORTED_MODULE_1__["default"], {
        blogs: this.state.blogs,
        heading: "Interesting Reads"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_blogs_Parallax__WEBPACK_IMPORTED_MODULE_3__["default"], null));
    }
  }]);

  return blog;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (blog);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy5qcyJdLCJuYW1lcyI6WyJibG9nIiwicHJvcHMiLCJzdGF0ZSIsImJsb2dzIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJzZXRTdGF0ZSIsImVyciIsInJlc3BvbnNlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxJQUFiO0FBQUE7O0FBQUE7O0FBQ0ksZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNSQyxXQUFLLEVBQVU7QUFEUCxLQUFiO0FBRmU7QUFLbEI7O0FBTkw7QUFBQTtBQUFBLHdDQVF1QjtBQUFBOztBQUNmQyxrREFBSyxDQUFDQyxHQUFOLENBQVUsaUNBQVYsRUFDS0MsSUFETCxDQUNXLFVBQUFDLEdBQUcsRUFBRTtBQUNSQyxlQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCRixHQUFHLENBQUNHLElBQTVCOztBQUNBLGNBQUksQ0FBQ0MsUUFBTCxDQUFjO0FBQ1ZSLGVBQUssRUFBT0ksR0FBRyxDQUFDRztBQUROLFNBQWQ7QUFHSCxPQU5MLFdBT1csVUFBQUUsR0FBRyxFQUFFO0FBQUVKLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaLEVBQWlDRyxHQUFHLENBQUNDLFFBQXJDO0FBQWdELE9BUGxFO0FBUUg7QUFqQkw7QUFBQTtBQUFBLDZCQW1CYTtBQUNMLDBCQUNJLHFJQUNJLDJEQUFDLG9FQUFEO0FBQVksYUFBSyxFQUFFLEtBQUtYLEtBQUwsQ0FBV0M7QUFBOUIsUUFESixlQUVJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNJO0FBQUksaUJBQVMsRUFBQztBQUFkLDZCQURKLGVBRUksMkRBQUMsa0VBQUQ7QUFBVSxhQUFLLEVBQUksS0FBS0QsS0FBTCxDQUFXQyxLQUE5QjtBQUFxQyxlQUFPLEVBQUM7QUFBN0MsUUFGSixDQUZKLGVBTUksMkRBQUMsa0VBQUQsT0FOSixDQURKO0FBVUg7QUE5Qkw7O0FBQUE7QUFBQSxFQUEwQlcsK0NBQTFCO0FBaUNlZCxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ibG9nLjUyNDA3OTdmYTRkNDcxZjkyMzE1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBCbG9nTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL2Jsb2dzL0Jsb2dMaXN0J1xyXG5pbXBvcnQgQmxvZ0Jhbm5lciBmcm9tICcuLi9jb21wb25lbnRzL2Jsb2dzL0Jsb2dCYW5uZXInXHJcbmltcG9ydCBQYXJhbGxheCBmcm9tICcuLi9jb21wb25lbnRzL2Jsb2dzL1BhcmFsbGF4J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5leHBvcnQgY2xhc3MgYmxvZyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKSAgICBcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICAgYmxvZ3M6ICAgICAgICAgW11cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICBheGlvcy5nZXQoJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC9ibG9nL2xpc3QnKVxyXG4gICAgICAgICAgICAudGhlbiggcmVzPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmVzLmRhdGEnLCByZXMuZGF0YSlcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGJsb2dzOiAgICAgIHJlcy5kYXRhXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyPT57IGNvbnNvbGUubG9nKCdlcnIucmVzcG9uc2UuZGF0YScsIGVyci5yZXNwb25zZSkgfSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxCbG9nQmFubmVyIGJsb2dzPXt0aGlzLnN0YXRlLmJsb2dzfS8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteS01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImhlYWRpbmdcIj5JbnRlcmVzdGluZyBSZWFkczwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJsb2dMaXN0IGJsb2dzID0ge3RoaXMuc3RhdGUuYmxvZ3N9IGhlYWRpbmc9XCJJbnRlcmVzdGluZyBSZWFkc1wiLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPFBhcmFsbGF4Lz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBibG9nXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=