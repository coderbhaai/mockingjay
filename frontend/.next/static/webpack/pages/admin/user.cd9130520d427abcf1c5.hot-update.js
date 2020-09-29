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
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
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
    _this.state = {
      tool: 'All Tools',
      addmodalIsOpen: false
    };
    return _this;
  }

  _createClass(AdminSidebar, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "menu"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        id: "menu"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        id: "menu-academico"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-cogs",
        "aria-hidden": "true"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, " ", this.state.tool, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
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
        href: "/admin/seo"
      }, "SEO Tools")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "dropdown-item",
        href: "/admin/smm"
      }, "SMM Tools")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "dropdown-item",
        href: "/admin/adwords"
      }, "Adwords Tools")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "dropdown-item",
        href: "/admin/copywriting"
      }, "Copywriting")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        id: "menu-academico"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-shield",
        "aria-hidden": "true"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, " Projects"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "fa fa-angle-right",
        style: {
          "float": "right"
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "clearfix"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        id: "menu-academico-sub"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        onClick: this.addModalOn,
        className: "noAnchor"
      }, "Add a Project"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "dropdown-item",
        href: ""
      }, "Project 1")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "dropdown-item",
        href: ""
      }, "Project 2")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "dropdown-item",
        href: ""
      }, "Project 3")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-refresh",
        "aria-hidden": "true"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, " Upgrade"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
        isOpen: this.state.addmodalIsOpen,
        className: "adminModal"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "modal-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Add Meta Here"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "closeModal",
        onClick: this.resetData
      }, "X")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        encType: "multipart/form-data",
        onSubmit: this.addMeta
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "URL"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "form-control",
        type: "text",
        placeholder: "URL of Page",
        name: "url",
        required: true,
        value: this.state.url,
        onChange: this.onChange
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
        className: "form-control",
        type: "text",
        placeholder: "Add Title Here",
        name: "title",
        required: true,
        value: this.state.title,
        onChange: this.onChange
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
        className: "form-control",
        type: "text",
        placeholder: "Add Description",
        name: "description",
        required: true,
        value: this.state.description,
        onChange: this.onChange
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Keywords"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
        className: "form-control",
        type: "text",
        placeholder: "Add Keywords",
        name: "keyword",
        required: true,
        value: this.state.keyword,
        onChange: this.onChange
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "my-btn"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "action-btn",
        type: "submit"
      }, "Submit")))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BZG1pblNpZGViYXIuanMiXSwibmFtZXMiOlsiQWRtaW5TaWRlYmFyIiwicHJvcHMiLCJzdGF0ZSIsInRvb2wiLCJhZGRtb2RhbElzT3BlbiIsImFkZE1vZGFsT24iLCJyZXNldERhdGEiLCJhZGRNZXRhIiwidXJsIiwib25DaGFuZ2UiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwia2V5d29yZCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxJQUFNQSxZQUFiO0FBQUE7O0FBQUE7O0FBQ0ksd0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxVQUFJLEVBQXdCLFdBRG5CO0FBRVRDLG9CQUFjLEVBQWM7QUFGbkIsS0FBYjtBQUZlO0FBT2xCOztBQVJMO0FBQUE7QUFBQSw2QkFVYTtBQUNMLDBCQUNJLHFJQUNBO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNJO0FBQUksVUFBRSxFQUFDO0FBQVAsc0JBQ0k7QUFBSSxVQUFFLEVBQUM7QUFBUCxzQkFBeUI7QUFBRyxZQUFJLEVBQUM7QUFBUixzQkFBWTtBQUFHLGlCQUFTLEVBQUMsWUFBYjtBQUEwQix1QkFBWTtBQUF0QyxRQUFaLGVBQTZELDhFQUFRLEtBQUtGLEtBQUwsQ0FBV0MsSUFBbkIsTUFBN0QsZUFBNkY7QUFBTSxpQkFBUyxFQUFDLG1CQUFoQjtBQUFvQyxhQUFLLEVBQUU7QUFBQyxtQkFBTztBQUFSO0FBQTNDLFFBQTdGLGVBQWlLO0FBQUssaUJBQVMsRUFBQztBQUFmLFFBQWpLLENBQXpCLGVBQ0k7QUFBSSxVQUFFLEVBQUM7QUFBUCxzQkFDSSxvRkFBSTtBQUFHLGlCQUFTLEVBQUMsZUFBYjtBQUE2QixZQUFJLEVBQUM7QUFBbEMscUJBQUosQ0FESixlQUVJLG9GQUFJO0FB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QUFmLHNCQUNJLHFGQURKLGVBRUk7QUFBVSxpQkFBUyxFQUFDLGNBQXBCO0FBQW1DLFlBQUksRUFBQyxNQUF4QztBQUErQyxtQkFBVyxFQUFDLGNBQTNEO0FBQTBFLFlBQUksRUFBQyxTQUEvRTtBQUF5RixnQkFBUSxNQUFqRztBQUFrRyxhQUFLLEVBQUUsS0FBS1AsS0FBTCxDQUFXVSxPQUFwSDtBQUE2SCxnQkFBUSxFQUFFLEtBQUtIO0FBQTVJLFFBRkosQ0FiSixDQURKLGVBbUJJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNJO0FBQVEsaUJBQVMsRUFBQyxZQUFsQjtBQUErQixZQUFJLEVBQUM7QUFBcEMsa0JBREosQ0FuQkosQ0FMSixDQXRCQSxDQURKO0FBc0RIO0FBakVMOztBQUFBO0FBQUEsRUFBa0NJLCtDQUFsQztBQW9FZWIsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vdXNlci5jZDkxMzA1MjBkNDI3YWJjZjFjNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJ3JlYWN0c3RyYXAnXHJcblxyXG5leHBvcnQgY2xhc3MgQWRtaW5TaWRlYmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdG9vbDogICAgICAgICAgICAgICAgICAgICAgICdBbGwgVG9vbHMnLFxyXG4gICAgICAgICAgICBhZGRtb2RhbElzT3BlbjogICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cclxuICAgICAgICAgICAgICAgIDx1bCBpZD1cIm1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJtZW51LWFjYWRlbWljb1wiID48YSBocmVmPVwiI1wiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWNvZ3NcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PHNwYW4+IHt0aGlzLnN0YXRlLnRvb2x9IDwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJmYSBmYS1hbmdsZS1yaWdodFwiIHN0eWxlPXt7ZmxvYXQ6IFwicmlnaHRcIn19Pjwvc3Bhbj48ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4XCI+PC9kaXY+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgaWQ9XCJtZW51LWFjYWRlbWljby1zdWJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIi9hZG1pbi9zZW9cIj5TRU8gVG9vbHM8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIi9hZG1pbi9zbW1cIj5TTU0gVG9vbHM8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIi9hZG1pbi9hZHdvcmRzXCI+QWR3b3JkcyBUb29sczwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiL2FkbWluL2NvcHl3cml0aW5nXCI+Q29weXdyaXRpbmc8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBpZD1cIm1lbnUtYWNhZGVtaWNvXCIgPjxhIGhyZWY9XCIjXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtc2hpZWxkXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjxzcGFuPiBQcm9qZWN0czwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJmYSBmYS1hbmdsZS1yaWdodFwiIHN0eWxlPXt7ZmxvYXQ6IFwicmlnaHRcIn19Pjwvc3Bhbj48ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4XCI+PC9kaXY+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgaWQ9XCJtZW51LWFjYWRlbWljby1zdWJcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17dGhpcy5hZGRNb2RhbE9ufSBjbGFzc05hbWU9XCJub0FuY2hvclwiPkFkZCBhIFByb2plY3Q8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiXCI+UHJvamVjdCAxPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCJcIj5Qcm9qZWN0IDI8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIlwiPlByb2plY3QgMzwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpID48YSBocmVmPVwiI1wiPjxpIGNsYXNzTmFtZT1cImZhIGZhLXJlZnJlc2hcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PHNwYW4+IFVwZ3JhZGU8L3NwYW4+PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPE1vZGFsIGlzT3Blbj17dGhpcy5zdGF0ZS5hZGRtb2RhbElzT3Blbn0gY2xhc3NOYW1lPVwiYWRtaW5Nb2RhbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+QWRkIE1ldGEgSGVyZTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbG9zZU1vZGFsXCIgb25DbGljaz17dGhpcy5yZXNldERhdGF9Plg8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIiBvblN1Ym1pdD17dGhpcy5hZGRNZXRhfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+VVJMPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVVJMIG9mIFBhZ2VcIiBuYW1lPVwidXJsXCIgcmVxdWlyZWQgdmFsdWU9e3RoaXMuc3RhdGUudXJsfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlRpdGxlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQWRkIFRpdGxlIEhlcmVcIiBuYW1lPVwidGl0bGVcIiByZXF1aXJlZCB2YWx1ZT17dGhpcy5zdGF0ZS50aXRsZX0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5EZXNjcmlwdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkFkZCBEZXNjcmlwdGlvblwiIG5hbWU9XCJkZXNjcmlwdGlvblwiIHJlcXVpcmVkIHZhbHVlPXt0aGlzLnN0YXRlLmRlc2NyaXB0aW9ufSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPktleXdvcmRzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQWRkIEtleXdvcmRzXCIgbmFtZT1cImtleXdvcmRcIiByZXF1aXJlZCB2YWx1ZT17dGhpcy5zdGF0ZS5rZXl3b3JkfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImFjdGlvbi1idG5cIiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+IFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRtaW5TaWRlYmFyXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=