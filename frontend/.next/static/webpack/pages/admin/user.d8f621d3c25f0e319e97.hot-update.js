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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BZG1pblNpZGViYXIuanMiXSwibmFtZXMiOlsiQWRtaW5TaWRlYmFyIiwicGF0aG5hbWUiLCJzdGF0ZSIsImFjdGl2ZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxZQUFiO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSw2QkFDYTtBQUNMLDBCQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNJO0FBQUksVUFBRSxFQUFDO0FBQVAsc0JBQ0k7QUFBSSxVQUFFLEVBQUM7QUFBUCxzQkFBeUI7QUFBRyxZQUFJLEVBQUM7QUFBUixzQkFBWTtBQUFHLGlCQUFTLEVBQUMsZUFBYjtBQUE2Qix1QkFBWTtBQUF6QyxRQUFaLGVBQWdFLG1GQUFoRSxlQUFvRjtBQUFNLGlCQUFTLEVBQUMsbUJBQWhCO0FBQW9DLGFBQUssRUFBRTtBQUFDLG1CQUFPO0FBQVI7QUFBM0MsUUFBcEYsZUFBd0o7QUFBSyxpQkFBUyxFQUFDO0FBQWYsUUFBeEosQ0FBekIsZUFDSTtBQUFJLFVBQUUsRUFBQztBQUFQLHNCQUNJLG9GQUFJO0FBQUcsaUJBQVMsRUFBQyxlQUFiO0FBQTZCLFlBQUksRUFBQztBQUFsQyxtQkFBSixDQURKLGVBRUksb0ZBQUk7QUFBRyxpQkFBUyxFQUFDLGVBQWI7QUFBNkIsWUFBSSxFQUFDO0FBQWxDLG9CQUFKLENBRkosZUFHSSxvRkFBSTtBQUFHLGlCQUFTLEVBQUMsZUFBYjtBQUE2QixZQUFJLEVBQUM7QUFBbEMsbUJBQUosQ0FISixlQUlJLG9GQUFJO0FBQUcsaUJBQVMsRUFBQyxlQUFiO0FBQTZCLFlBQUksRUFBQztBQUFsQyxxQkFBSixDQUpKLGVBS0ksb0ZBQUk7QUFBRyxpQkFBUyxFQUFDLGVBQWI7QUFBNkIsWUFBSSxFQUFDO0FBQWxDLHFCQUFKLENBTEosZUFN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dGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgY2xhc3MgQWRtaW5TaWRlYmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cclxuICAgICAgICAgICAgICAgIDx1bCBpZD1cIm1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJtZW51LWFjYWRlbWljb1wiID48YSBocmVmPVwiI1wiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWxpc3QtdWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PHNwYW4+IENvZGluZzwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJmYSBmYS1hbmdsZS1yaWdodFwiIHN0eWxlPXt7ZmxvYXQ6IFwicmlnaHRcIn19Pjwvc3Bhbj48ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4XCI+PC9kaXY+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgaWQ9XCJtZW51LWFjYWRlbWljby1zdWJcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIvZ3lhbi9ub2RlSlNcIj5Ob2RlIEpTPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIvZ3lhbi9yZWFjdEpTXCI+UmVhY3QgSlM8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIi9neWFuL0xhcmF2ZWxcIj5MYXJhdmVsPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIvZ3lhbi9Xb3JkcHJlc3NcIj5Xb3JkcHJlc3M8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIi9neWFuL0Jvb3RzdHJhcFwiPkJvb3RzdHJhcDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiL2d5YW4vRnJvbnRlbmRcIj5Gcm9udGVuZDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiL2d5YW4vRGlnaXRhbE9jZWFuXCI+RGlnaXRhbCBPY2VhbjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiL2d5YW4vZGphbmdvXCI+RGphbmdvPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIvZ3lhbi9weXRob25cIj5QeXRob248L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBpZD1cIm1lbnUtYWNhZGVtaWNvXCIgPjxhIGhyZWY9XCIjXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtbGlzdC11bFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48c3Bhbj4gR3JhcGhpY3M8L3NwYW4+PHNwYW4gY2xhc3NOYW1lPVwiZmEgZmEtYW5nbGUtcmlnaHRcIiBzdHlsZT17e2Zsb2F0OiBcInJpZ2h0XCJ9fT48L3NwYW4+PGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeFwiPjwvZGl2PjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGlkPVwibWVudS1hY2FkZW1pY28tc3ViXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiL3Bob3Rvc2hvcFwiPlBob3Rvc2hvcDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiL2lsbHVzdHJhdG9yXCI+SWxsdXN0cmF0b3I8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIi9jb3JlbC1kcmF3XCI+Q29yZWxEcmF3PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJtZW51LWFjYWRlbWljb1wiID48YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj17e3BhdGhuYW1lOiBcIi9jbGllbnRzXCIsIHN0YXRlOiB7IGFjdGl2ZTogdHJ1ZSB9fX0+PGkgY2xhc3NOYW1lPVwiZmEgZmEtbGlzdC11bFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48c3Bhbj4gQ2xpZW50czwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJmYSBmYS1hbmdsZS1yaWdodFwiIHN0eWxlPXt7ZmxvYXQ6IFwicmlnaHRcIn19Pjwvc3Bhbj48ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4XCI+PC9kaXY+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgaWQ9XCJtZW51LWFjYWRlbWljby1zdWJcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9e3twYXRobmFtZTogXCIvY2xpZW50c1wiLCBzdGF0ZTogeyBhY3RpdmU6IHRydWUgfX19PkFjdGl2ZSBDbGllbnRzPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9e3twYXRobmFtZTogXCIvY2xpZW50c1wiLCBzdGF0ZTogeyBhY3RpdmU6IGZhbHNlIH19fT5Ob3QgQWN0aXZlIENsaWVudHM8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSA+PGEgaHJlZj1cIi9maW5hbmNpYWxzXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtbGlzdC11bFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48c3Bhbj4gRmluYW5jaWFsczwvc3Bhbj48L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgPjxhIGhyZWY9XCIvbGVhZHNcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1saXN0LXVsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjxzcGFuPiBMZWFkczwvc3Bhbj48L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgPjxhIGhyZWY9XCIvb2ZmUGFnZVwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWxpc3QtdWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PHNwYW4+IE9mZiBQYWdlPC9zcGFuPjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZG1pblNpZGViYXJcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==