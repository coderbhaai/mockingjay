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

    _this.addModalOn = function () {
      _this.setState({
        addmodalIsOpen: true
      });
    };

    _this.resetData = function () {
      _this.setState({
        addmodalIsOpen: false,
        url: '',
        title: '',
        description: '',
        keyword: '',
        selectedMeta: ''
      });
    };

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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Add Project Here"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "closeModal",
        onClick: this.resetData
      }, "X")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "my-btn col-sm-6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "amitBtn",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BZG1pblNpZGViYXIuanMiXSwibmFtZXMiOlsiQWRtaW5TaWRlYmFyIiwicHJvcHMiLCJhZGRNb2RhbE9uIiwic2V0U3RhdGUiLCJhZGRtb2RhbElzT3BlbiIsInJlc2V0RGF0YSIsInVybCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJrZXl3b3JkIiwic2VsZWN0ZWRNZXRhIiwic3RhdGUiLCJ0b29sIiwib25DaGFuZ2UiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sSUFBTUEsWUFBYjtBQUFBOztBQUFBOztBQUNJLHdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47O0FBRGUsVUFRbkJDLFVBUm1CLEdBUVIsWUFBSTtBQUNYLFlBQUtDLFFBQUwsQ0FBYztBQUNWQyxzQkFBYyxFQUFjO0FBRGxCLE9BQWQ7QUFHSCxLQVprQjs7QUFBQSxVQWNuQkMsU0FkbUIsR0FjUCxZQUFJO0FBQ1osWUFBS0YsUUFBTCxDQUFjO0FBQ1ZDLHNCQUFjLEVBQWMsS0FEbEI7QUFFVkUsV0FBRyxFQUF5QixFQUZsQjtBQUdWQyxhQUFLLEVBQXVCLEVBSGxCO0FBSVZDLG1CQUFXLEVBQWlCLEVBSmxCO0FBS1ZDLGVBQU8sRUFBcUIsRUFMbEI7QUFNVkMsb0JBQVksRUFBZ0I7QUFObEIsT0FBZDtBQVFILEtBdkJrQjs7QUFFZixVQUFLQyxLQUFMLEdBQWE7QUFDVEMsVUFBSSxFQUF3QixXQURuQjtBQUVUUixvQkFBYyxFQUFjO0FBRm5CLEtBQWI7QUFGZTtBQU1sQjs7QUFQTDtBQUFBO0FBQUEsNkJBNEJhO0FBQ0wsMEJBQ0kscUlBQ0E7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0k7QUFBSSxVQUFFLEVBQUM7QUFBUCxzQkFDSTtBQUFJLFVBQUUsRUFBQztBQUFQLHNCQUF5QjtBQUFHLFlBQUksRUFB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OWQzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAncmVhY3RzdHJhcCdcclxuXHJcbmV4cG9ydCBjbGFzcyBBZG1pblNpZGViYXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB0b29sOiAgICAgICAgICAgICAgICAgICAgICAgJ0FsbCBUb29scycsXHJcbiAgICAgICAgICAgIGFkZG1vZGFsSXNPcGVuOiAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgYWRkTW9kYWxPbj0oKT0+e1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBhZGRtb2RhbElzT3BlbjogICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXREYXRhID0gKCk9PntcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgYWRkbW9kYWxJc09wZW46ICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICB1cmw6ICAgICAgICAgICAgICAgICAgICAgICAgJycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAgICAgICAgICAgICAgICAgICAgICAnJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICAgICAgICAgICAgICAgICcnLFxyXG4gICAgICAgICAgICBrZXl3b3JkOiAgICAgICAgICAgICAgICAgICAgJycsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkTWV0YTogICAgICAgICAgICAgICAnJ1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51XCI+XHJcbiAgICAgICAgICAgICAgICA8dWwgaWQ9XCJtZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVwibWVudS1hY2FkZW1pY29cIiA+PGEgaHJlZj1cIiNcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1jb2dzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjxzcGFuPiB7dGhpcy5zdGF0ZS50b29sfSA8L3NwYW4+PHNwYW4gY2xhc3NOYW1lPVwiZmEgZmEtYW5nbGUtcmlnaHRcIiBzdHlsZT17e2Zsb2F0OiBcInJpZ2h0XCJ9fT48L3NwYW4+PGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeFwiPjwvZGl2PjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGlkPVwibWVudS1hY2FkZW1pY28tc3ViXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIvYWRtaW4vc2VvXCI+U0VPIFRvb2xzPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIvYWRtaW4vc21tXCI+U01NIFRvb2xzPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIvYWRtaW4vYWR3b3Jkc1wiPkFkd29yZHMgVG9vbHM8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIi9hZG1pbi9jb3B5d3JpdGluZ1wiPkNvcHl3cml0aW5nPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJtZW51LWFjYWRlbWljb1wiID48YSBocmVmPVwiI1wiPjxpIGNsYXNzTmFtZT1cImZhIGZhLXNoaWVsZFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48c3Bhbj4gUHJvamVjdHM8L3NwYW4+PHNwYW4gY2xhc3NOYW1lPVwiZmEgZmEtYW5nbGUtcmlnaHRcIiBzdHlsZT17e2Zsb2F0OiBcInJpZ2h0XCJ9fT48L3NwYW4+PGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeFwiPjwvZGl2PjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGlkPVwibWVudS1hY2FkZW1pY28tc3ViXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9e3RoaXMuYWRkTW9kYWxPbn0gY2xhc3NOYW1lPVwibm9BbmNob3JcIj5BZGQgYSBQcm9qZWN0PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIlwiPlByb2plY3QgMTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiXCI+UHJvamVjdCAyPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCJcIj5Qcm9qZWN0IDM8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSA+PGEgaHJlZj1cIiNcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1yZWZyZXNoXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjxzcGFuPiBVcGdyYWRlPC9zcGFuPjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxNb2RhbCBpc09wZW49e3RoaXMuc3RhdGUuYWRkbW9kYWxJc09wZW59IGNsYXNzTmFtZT1cImFkbWluTW9kYWxcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPkFkZCBQcm9qZWN0IEhlcmU8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xvc2VNb2RhbFwiIG9uQ2xpY2s9e3RoaXMucmVzZXREYXRhfT5YPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5VUkw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJVUkwgb2YgUGFnZVwiIG5hbWU9XCJ1cmxcIiByZXF1aXJlZCB2YWx1ZT17dGhpcy5zdGF0ZS51cmx9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktYnRuIGNvbC1zbS02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYW1pdEJ0blwiIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj4gXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZG1pblNpZGViYXJcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==