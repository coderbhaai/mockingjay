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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BZG1pblNpZGViYXIuanMiXSwibmFtZXMiOlsiQWRtaW5TaWRlYmFyIiwicHJvcHMiLCJhZGRNb2RhbE9uIiwic2V0U3RhdGUiLCJhZGRtb2RhbElzT3BlbiIsInN0YXRlIiwidG9vbCIsInJlc2V0RGF0YSIsImFkZE1ldGEiLCJ1cmwiLCJvbkNoYW5nZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJrZXl3b3JkIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLElBQU1BLFlBQWI7QUFBQTs7QUFBQTs7QUFDSSx3QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOOztBQURlLFVBUW5CQyxVQVJtQixHQVFSLFlBQUk7QUFDWCxZQUFLQyxRQUFMLENBQWM7QUFDVkMsc0JBQWMsRUFBRTtBQUROLE9BQWQ7QUFHSCxLQVprQjs7QUFFZixVQUFLQyxLQUFMLEdBQWE7QUFDVEMsVUFBSSxFQUF3QixXQURuQjtBQUVURixvQkFBYyxFQUFjO0FBRm5CLEtBQWI7QUFGZTtBQU1sQjs7QUFQTDtBQUFBO0FBQUEsNkJBZWE7QUFDTCwwQkFDSSxxSUFDQTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSTtBQUFJLFVBQUUsRUFBQztBQUFQLHNCQUNJO0FBQUksVUFBRSxFQUFDO0FBQVAsc0JBQXlCO0FBQUcsWUFBSSxFQUFDO0FBQVIsc0JBQVk7QUFBRyxpQkFBUyxFQUFDLFlBQWI7QUFBMEIsdUJBQVk7QUFBdEMsUUFBWixlQUE2RCw4RUFBUSxLQUFLQyxLQUFMLENBQVdDLElBQW5CLE1BQTdELGVBQTZGO0FBQU0saUJBQVMsRUFBQyxtQkFBaEI7QUFBb0MsYUFBSyxFQUFFO0FBQUMsbUJBQU87QUFBUjtBQUEzQyxRQUE3RixlQUFpSztBQUFLLGlCQUFTLEVBQUM7QUFBZixRQUFqSyxDQUF6QixlQUNJ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QUFBeUcsYUFBSyxFQUFFLEtBQUtMLEtBQUwsQ0FBV08sV0FBM0g7QUFBd0ksZ0JBQVEsRUFBRSxLQUFLRjtBQUF2SixRQUZKLENBVEosZUFhSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSSxxRkFESixlQUVJO0FBQVUsaUJBQVMsRUFBQyxjQUFwQjtBQUFtQyxZQUFJLEVBQUMsTUFBeEM7QUFBK0MsbUJBQVcsRUFBQyxjQUEzRDtBQUEwRSxZQUFJLEVBQUMsU0FBL0U7QUFBeUYsZ0JBQVEsTUFBakc7QUFBa0csYUFBSyxFQUFFLEtBQUtMLEtBQUwsQ0FBV1EsT0FBcEg7QUFBNkgsZ0JBQVEsRUFBRSxLQUFLSDtBQUE1SSxRQUZKLENBYkosQ0FESixlQW1CSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSTtBQUFRLGlCQUFTLEVBQUMsWUFBbEI7QUFBK0IsWUFBSSxFQUFDO0FBQXBDLGtCQURKLENBbkJKLENBTEosQ0F0QkEsQ0FESjtBQXNESDtBQXRFTDs7QUFBQTtBQUFBLEVBQWtDSSwrQ0FBbEM7QUF5RWVkLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL3VzZXIuYjgyYTZlMWIyYThkZjVjNTBiMmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICdyZWFjdHN0cmFwJ1xyXG5cclxuZXhwb3J0IGNsYXNzIEFkbWluU2lkZWJhciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHRvb2w6ICAgICAgICAgICAgICAgICAgICAgICAnQWxsIFRvb2xzJyxcclxuICAgICAgICAgICAgYWRkbW9kYWxJc09wZW46ICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBhZGRNb2RhbE9uPSgpPT57XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGFkZG1vZGFsSXNPcGVuOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51XCI+XHJcbiAgICAgICAgICAgICAgICA8dWwgaWQ9XCJtZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVwibWVudS1hY2FkZW1pY29cIiA+PGEgaHJlZj1cIiNcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1jb2dzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjxzcGFuPiB7dGhpcy5zdGF0ZS50b29sfSA8L3NwYW4+PHNwYW4gY2xhc3NOYW1lPVwiZmEgZmEtYW5nbGUtcmlnaHRcIiBzdHlsZT17e2Zsb2F0OiBcInJpZ2h0XCJ9fT48L3NwYW4+PGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeFwiPjwvZGl2PjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGlkPVwibWVudS1hY2FkZW1pY28tc3ViXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIvYWRtaW4vc2VvXCI+U0VPIFRvb2xzPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIvYWRtaW4vc21tXCI+U01NIFRvb2xzPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIvYWRtaW4vYWR3b3Jkc1wiPkFkd29yZHMgVG9vbHM8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIi9hZG1pbi9jb3B5d3JpdGluZ1wiPkNvcHl3cml0aW5nPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJtZW51LWFjYWRlbWljb1wiID48YSBocmVmPVwiI1wiPjxpIGNsYXNzTmFtZT1cImZhIGZhLXNoaWVsZFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48c3Bhbj4gUHJvamVjdHM8L3NwYW4+PHNwYW4gY2xhc3NOYW1lPVwiZmEgZmEtYW5nbGUtcmlnaHRcIiBzdHlsZT17e2Zsb2F0OiBcInJpZ2h0XCJ9fT48L3NwYW4+PGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeFwiPjwvZGl2PjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGlkPVwibWVudS1hY2FkZW1pY28tc3ViXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9e3RoaXMuYWRkTW9kYWxPbn0gY2xhc3NOYW1lPVwibm9BbmNob3JcIj5BZGQgYSBQcm9qZWN0PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIlwiPlByb2plY3QgMTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiXCI+UHJvamVjdCAyPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCJcIj5Qcm9qZWN0IDM8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSA+PGEgaHJlZj1cIiNcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1yZWZyZXNoXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjxzcGFuPiBVcGdyYWRlPC9zcGFuPjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxNb2RhbCBpc09wZW49e3RoaXMuc3RhdGUuYWRkbW9kYWxJc09wZW59IGNsYXNzTmFtZT1cImFkbWluTW9kYWxcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPkFkZCBNZXRhIEhlcmU8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xvc2VNb2RhbFwiIG9uQ2xpY2s9e3RoaXMucmVzZXREYXRhfT5YPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGVuY1R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIgb25TdWJtaXQ9e3RoaXMuYWRkTWV0YX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlVSTDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlVSTCBvZiBQYWdlXCIgbmFtZT1cInVybFwiIHJlcXVpcmVkIHZhbHVlPXt0aGlzLnN0YXRlLnVybH0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5UaXRsZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkFkZCBUaXRsZSBIZXJlXCIgbmFtZT1cInRpdGxlXCIgcmVxdWlyZWQgdmFsdWU9e3RoaXMuc3RhdGUudGl0bGV9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RGVzY3JpcHRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJBZGQgRGVzY3JpcHRpb25cIiBuYW1lPVwiZGVzY3JpcHRpb25cIiByZXF1aXJlZCB2YWx1ZT17dGhpcy5zdGF0ZS5kZXNjcmlwdGlvbn0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5LZXl3b3JkczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkFkZCBLZXl3b3Jkc1wiIG5hbWU9XCJrZXl3b3JkXCIgcmVxdWlyZWQgdmFsdWU9e3RoaXMuc3RhdGUua2V5d29yZH0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhY3Rpb24tYnRuXCIgdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPiBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkbWluU2lkZWJhclxyXG4iXSwic291cmNlUm9vdCI6IiJ9