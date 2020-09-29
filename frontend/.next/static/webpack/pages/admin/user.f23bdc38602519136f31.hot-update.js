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
        className: "menu"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        id: "menu"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        id: "menu-academico"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-list-ul",
        "aria-hidden": "true"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, " Coding"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "fa fa-angle-right",
        style: {
          "float": "right"
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "clearfix"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        id: "menu-academico-sub"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "SEO Tools"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "SMM Tools"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Adwords Tools"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Copywriting"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "dropdown-item",
        href: "/gyan/nodeJS"
      }, "Node JS")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "dropdown-item",
        href: "/gyan/reactJS"
      }, "React JS")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "dropdown-item",
        href: "/gyan/Laravel"
      }, "Laravel")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "dropdown-item",
        href: "/gyan/Wordpress"
      }, "Wordpress")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "dropdown-item",
        href: "/gyan/Bootstrap"
      }, "Bootstrap")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "dropdown-item",
        href: "/gyan/Frontend"
      }, "Frontend")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "dropdown-item",
        href: "/gyan/DigitalOcean"
      }, "Digital Ocean")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "dropdown-item",
        href: "/gyan/django"
      }, "Django")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "dropdown-item",
        href: "/gyan/python"
      }, "Python")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        id: "menu-academico"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-list-ul",
        "aria-hidden": "true"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, " Graphics"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "fa fa-angle-right",
        style: {
          "float": "right"
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "clearfix"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        id: "menu-academico-sub"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "dropdown-item",
        href: "/photoshop"
      }, "Photoshop")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "dropdown-item",
        href: "/illustrator"
      }, "Illustrator")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "dropdown-item",
        href: "/corel-draw"
      }, "CorelDraw")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        id: "menu-academico"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "dropdown-item",
        href: {
          pathname: "/clients",
          state: {
            active: true
          }
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-list-ul",
        "aria-hidden": "true"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, " Clients"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "fa fa-angle-right",
        style: {
          "float": "right"
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "clearfix"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        id: "menu-academico-sub"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "dropdown-item",
        href: {
          pathname: "/clients",
          state: {
            active: true
          }
        }
      }, "Active Clients")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "dropdown-item",
        href: {
          pathname: "/clients",
          state: {
            active: false
          }
        }
      }, "Not Active Clients")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/financials"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-list-ul",
        "aria-hidden": "true"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, " Financials"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/leads"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-list-ul",
        "aria-hidden": "true"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, " Leads"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/offPage"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-list-ul",
        "aria-hidden": "true"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, " Off Page")))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BZG1pblNpZGViYXIuanMiXSwibmFtZXMiOlsiQWRtaW5TaWRlYmFyIiwicGF0aG5hbWUiLCJzdGF0ZSIsImFjdGl2ZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxZQUFiO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSw2QkFDYTtBQUNMLDBCQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNJO0FBQUksVUFBRSxFQUFDO0FBQVAsc0JBQ0k7QUFBSSxVQUFFLEVBQUM7QUFBUCxzQkFBeUI7QUFBRyxZQUFJLEVBQUM7QUFBUixzQkFBWTtBQUFHLGlCQUFTLEVBQUMsZUFBYjtBQUE2Qix1QkFBWTtBQUF6QyxRQUFaLGVBQWdFLG1GQUFoRSxlQUFvRjtBQUFNLGlCQUFTLEVBQUMsbUJBQWhCO0FBQW9DLGFBQUssRUFBRTtBQUFDLG1CQUFPO0FBQVI7QUFBM0MsUUFBcEYsZUFBd0o7QUFBSyxpQkFBUyxFQUFDO0FBQWYsUUFBeEosQ0FBekIsZUFDSTtBQUFJLFVBQUUsRUFBQztBQUFQLHNCQUNBLG1GQURBLGVBRVIsbUZBRlEsZUFHUix1RkFIUSxlQUlSLHFGQUpRLGVBS0ksb0ZBQUk7QUFBRyxpQkFBUyxFQUFDLGVBQWI7QUFBNkIsWUFBSSxFQUFDO0FBQWxDLG1CQUFKLENBTEosZUFNSSxvRkFBSTtBQUFHLGlCQUFTLEVBQUMsZUFBYjtBQUE2QixZQUFJLEVBQUM7QUFBbEMsb0JBQUosQ0FOSixlQU9JLG9GQUFJO0FBQUcsaUJBQVMsRUFBQyxlQUFiO0FBQTZCLFlBQUksRUFBQztBQUFsQyxtQkFBSixDQVBKLGVBUUksb0ZBQUk7QUFBRyxpQkFBUyxFQUFDLGVBQWI7QUFBNkIsWUFBSSxFQUFDO0FBQWxDLHFCQUFKLENBUkosZUFTSSxvRkFBSTtBQUFHLGlCQUFTLEVB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cGFnZXMvYWRtaW4vdXNlci5mMjNiZGMzODYwMjUxOTEzNmYzMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGNsYXNzIEFkbWluU2lkZWJhciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51XCI+XHJcbiAgICAgICAgICAgICAgICA8dWwgaWQ9XCJtZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVwibWVudS1hY2FkZW1pY29cIiA+PGEgaHJlZj1cIiNcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1saXN0LXVsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjxzcGFuPiBDb2Rpbmc8L3NwYW4+PHNwYW4gY2xhc3NOYW1lPVwiZmEgZmEtYW5nbGUtcmlnaHRcIiBzdHlsZT17e2Zsb2F0OiBcInJpZ2h0XCJ9fT48L3NwYW4+PGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeFwiPjwvZGl2PjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGlkPVwibWVudS1hY2FkZW1pY28tc3ViXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+U0VPIFRvb2xzPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5TTU0gVG9vbHM8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPkFkd29yZHMgVG9vbHM8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPkNvcHl3cml0aW5nPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIi9neWFuL25vZGVKU1wiPk5vZGUgSlM8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIi9neWFuL3JlYWN0SlNcIj5SZWFjdCBKUzwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiL2d5YW4vTGFyYXZlbFwiPkxhcmF2ZWw8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIi9neWFuL1dvcmRwcmVzc1wiPldvcmRwcmVzczwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiL2d5YW4vQm9vdHN0cmFwXCI+Qm9vdHN0cmFwPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIvZ3lhbi9Gcm9udGVuZFwiPkZyb250ZW5kPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIvZ3lhbi9EaWdpdGFsT2NlYW5cIj5EaWdpdGFsIE9jZWFuPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIvZ3lhbi9kamFuZ29cIj5EamFuZ288L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIi9neWFuL3B5dGhvblwiPlB5dGhvbjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVwibWVudS1hY2FkZW1pY29cIiA+PGEgaHJlZj1cIiNcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1saXN0LXVsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjxzcGFuPiBHcmFwaGljczwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJmYSBmYS1hbmdsZS1yaWdodFwiIHN0eWxlPXt7ZmxvYXQ6IFwicmlnaHRcIn19Pjwvc3Bhbj48ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4XCI+PC9kaXY+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgaWQ9XCJtZW51LWFjYWRlbWljby1zdWJcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIvcGhvdG9zaG9wXCI+UGhvdG9zaG9wPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIvaWxsdXN0cmF0b3JcIj5JbGx1c3RyYXRvcjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiL2NvcmVsLWRyYXdcIj5Db3JlbERyYXc8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBpZD1cIm1lbnUtYWNhZGVtaWNvXCIgPjxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPXt7cGF0aG5hbWU6IFwiL2NsaWVudHNcIiwgc3RhdGU6IHsgYWN0aXZlOiB0cnVlIH19fT48aSBjbGFzc05hbWU9XCJmYSBmYS1saXN0LXVsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjxzcGFuPiBDbGllbnRzPC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLXJpZ2h0XCIgc3R5bGU9e3tmbG9hdDogXCJyaWdodFwifX0+PC9zcGFuPjxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIj48L2Rpdj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBpZD1cIm1lbnUtYWNhZGVtaWNvLXN1YlwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj17e3BhdGhuYW1lOiBcIi9jbGllbnRzXCIsIHN0YXRlOiB7IGFjdGl2ZTogdHJ1ZSB9fX0+QWN0aXZlIENsaWVudHM8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj17e3BhdGhuYW1lOiBcIi9jbGllbnRzXCIsIHN0YXRlOiB7IGFjdGl2ZTogZmFsc2UgfX19Pk5vdCBBY3RpdmUgQ2xpZW50czwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpID48YSBocmVmPVwiL2ZpbmFuY2lhbHNcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1saXN0LXVsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjxzcGFuPiBGaW5hbmNpYWxzPC9zcGFuPjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSA+PGEgaHJlZj1cIi9sZWFkc1wiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWxpc3QtdWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PHNwYW4+IExlYWRzPC9zcGFuPjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSA+PGEgaHJlZj1cIi9vZmZQYWdlXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtbGlzdC11bFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48c3Bhbj4gT2ZmIFBhZ2U8L3NwYW4+PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkbWluU2lkZWJhclxyXG4iXSwic291cmNlUm9vdCI6IiJ9