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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Project Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "form-control",
        type: "text",
        placeholder: "Name of Project",
        name: "project",
        required: true,
        value: this.state.project,
        onChange: this.onChange
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Website URL"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "form-control",
        type: "text",
        placeholder: "Website URL",
        name: "url",
        required: true,
        value: this.state.url,
        onChange: this.onChange
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Sector"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "form-control",
        type: "text",
        placeholder: "Sector",
        name: "project",
        required: true,
        value: this.state.project,
        onChange: this.onChange
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Country"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "form-control",
        type: "text",
        placeholder: "Name of Project",
        name: "project",
        required: true,
        value: this.state.project,
        onChange: this.onChange
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "my-btn"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BZG1pblNpZGViYXIuanMiXSwibmFtZXMiOlsiQWRtaW5TaWRlYmFyIiwicHJvcHMiLCJhZGRNb2RhbE9uIiwic2V0U3RhdGUiLCJhZGRtb2RhbElzT3BlbiIsInJlc2V0RGF0YSIsInVybCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJrZXl3b3JkIiwic2VsZWN0ZWRNZXRhIiwic3RhdGUiLCJ0b29sIiwicHJvamVjdCIsIm9uQ2hhbmdlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLElBQU1BLFlBQWI7QUFBQTs7QUFBQTs7QUFDSSx3QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOOztBQURlLFVBUW5CQyxVQVJtQixHQVFSLFlBQUk7QUFDWCxZQUFLQyxRQUFMLENBQWM7QUFDVkMsc0JBQWMsRUFBYztBQURsQixPQUFkO0FBR0gsS0Faa0I7O0FBQUEsVUFjbkJDLFNBZG1CLEdBY1AsWUFBSTtBQUNaLFlBQUtGLFFBQUwsQ0FBYztBQUNWQyxzQkFBYyxFQUFjLEtBRGxCO0FBRVZFLFdBQUcsRUFBeUIsRUFGbEI7QUFHVkMsYUFBSyxFQUF1QixFQUhsQjtBQUlWQyxtQkFBVyxFQUFpQixFQUpsQjtBQUtWQyxlQUFPLEVBQXFCLEVBTGxCO0FBTVZDLG9CQUFZLEVBQWdCO0FBTmxCLE9BQWQ7QUFRSCxLQXZCa0I7O0FBRWYsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLFVBQUksRUFBd0IsV0FEbkI7QUFFVFIsb0JBQWMsRUFBYztBQUZuQixLQUFiO0FBRmU7QUFNbEI7O0FBUEw7QUFBQTtBQUFBLDZCQTRCYTtBQUNMLDBCQUNJLHFJQUNBO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNJO0FBQUksVUFBRSxFQUFDO0FBQVAsc0JBQ0k7QUFBSSxVQUFFLEVBQUM7QUFBUCxzQkFBeUI7QUFB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LEtBQUtRO0FBQWhJLFFBRkosQ0FMSixlQVNJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNJLG1GQURKLGVBRUk7QUFBTyxpQkFBUyxFQUFDLGNBQWpCO0FBQWdDLFlBQUksRUFBQyxNQUFyQztBQUE0QyxtQkFBVyxFQUFDLFFBQXhEO0FBQWlFLFlBQUksRUFBQyxTQUF0RTtBQUFnRixnQkFBUSxNQUF4RjtBQUF5RixhQUFLLEVBQUUsS0FBS0gsS0FBTCxDQUFXRSxPQUEzRztBQUFvSCxnQkFBUSxFQUFFLEtBQUtDO0FBQW5JLFFBRkosQ0FUSixlQWFJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNJLG9GQURKLGVBRUk7QUFBTyxpQkFBUyxFQUFDLGNBQWpCO0FBQWdDLFlBQUksRUFBQyxNQUFyQztBQUE0QyxtQkFBVyxFQUFDLGlCQUF4RDtBQUEwRSxZQUFJLEVBQUMsU0FBL0U7QUFBeUYsZ0JBQVEsTUFBakc7QUFBa0csYUFBSyxFQUFFLEtBQUtILEtBQUwsQ0FBV0UsT0FBcEg7QUFBNkgsZ0JBQVEsRUFBRSxLQUFLQztBQUE1SSxRQUZKLENBYkosQ0FESixlQW1CSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSTtBQUFRLGlCQUFTLEVBQUMsU0FBbEI7QUFBNEIsWUFBSSxFQUFDO0FBQWpDLGtCQURKLENBbkJKLENBTEosQ0F0QkEsQ0FESjtBQXNESDtBQW5GTDs7QUFBQTtBQUFBLEVBQWtDQywrQ0FBbEM7QUFzRmVmLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL3VzZXIuYmQxODIwYzVmZTQwMmFhYWYwZTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICdyZWFjdHN0cmFwJ1xyXG5cclxuZXhwb3J0IGNsYXNzIEFkbWluU2lkZWJhciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHRvb2w6ICAgICAgICAgICAgICAgICAgICAgICAnQWxsIFRvb2xzJyxcclxuICAgICAgICAgICAgYWRkbW9kYWxJc09wZW46ICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBhZGRNb2RhbE9uPSgpPT57XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGFkZG1vZGFsSXNPcGVuOiAgICAgICAgICAgICB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXNldERhdGEgPSAoKT0+e1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBhZGRtb2RhbElzT3BlbjogICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgIHVybDogICAgICAgICAgICAgICAgICAgICAgICAnJyxcclxuICAgICAgICAgICAgdGl0bGU6ICAgICAgICAgICAgICAgICAgICAgICcnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogICAgICAgICAgICAgICAgJycsXHJcbiAgICAgICAgICAgIGtleXdvcmQ6ICAgICAgICAgICAgICAgICAgICAnJyxcclxuICAgICAgICAgICAgc2VsZWN0ZWRNZXRhOiAgICAgICAgICAgICAgICcnXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cclxuICAgICAgICAgICAgICAgIDx1bCBpZD1cIm1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJtZW51LWFjYWRlbWljb1wiID48YSBocmVmPVwiI1wiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWNvZ3NcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PHNwYW4+IHt0aGlzLnN0YXRlLnRvb2x9IDwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJmYSBmYS1hbmdsZS1yaWdodFwiIHN0eWxlPXt7ZmxvYXQ6IFwicmlnaHRcIn19Pjwvc3Bhbj48ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4XCI+PC9kaXY+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgaWQ9XCJtZW51LWFjYWRlbWljby1zdWJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIi9hZG1pbi9zZW9cIj5TRU8gVG9vbHM8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIi9hZG1pbi9zbW1cIj5TTU0gVG9vbHM8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIi9hZG1pbi9hZHdvcmRzXCI+QWR3b3JkcyBUb29sczwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiL2FkbWluL2NvcHl3cml0aW5nXCI+Q29weXdyaXRpbmc8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBpZD1cIm1lbnUtYWNhZGVtaWNvXCIgPjxhIGhyZWY9XCIjXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtc2hpZWxkXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjxzcGFuPiBQcm9qZWN0czwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJmYSBmYS1hbmdsZS1yaWdodFwiIHN0eWxlPXt7ZmxvYXQ6IFwicmlnaHRcIn19Pjwvc3Bhbj48ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4XCI+PC9kaXY+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgaWQ9XCJtZW51LWFjYWRlbWljby1zdWJcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17dGhpcy5hZGRNb2RhbE9ufSBjbGFzc05hbWU9XCJub0FuY2hvclwiPkFkZCBhIFByb2plY3Q8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiXCI+UHJvamVjdCAxPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCJcIj5Qcm9qZWN0IDI8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIlwiPlByb2plY3QgMzwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpID48YSBocmVmPVwiI1wiPjxpIGNsYXNzTmFtZT1cImZhIGZhLXJlZnJlc2hcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PHNwYW4+IFVwZ3JhZGU8L3NwYW4+PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPE1vZGFsIGlzT3Blbj17dGhpcy5zdGF0ZS5hZGRtb2RhbElzT3Blbn0gY2xhc3NOYW1lPVwiYWRtaW5Nb2RhbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+QWRkIFByb2plY3QgSGVyZTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbG9zZU1vZGFsXCIgb25DbGljaz17dGhpcy5yZXNldERhdGF9Plg8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlByb2plY3QgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk5hbWUgb2YgUHJvamVjdFwiIG5hbWU9XCJwcm9qZWN0XCIgcmVxdWlyZWQgdmFsdWU9e3RoaXMuc3RhdGUucHJvamVjdH0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5XZWJzaXRlIFVSTDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIldlYnNpdGUgVVJMXCIgbmFtZT1cInVybFwiIHJlcXVpcmVkIHZhbHVlPXt0aGlzLnN0YXRlLnVybH0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5TZWN0b3I8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWN0b3JcIiBuYW1lPVwicHJvamVjdFwiIHJlcXVpcmVkIHZhbHVlPXt0aGlzLnN0YXRlLnByb2plY3R9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Q291bnRyeTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk5hbWUgb2YgUHJvamVjdFwiIG5hbWU9XCJwcm9qZWN0XCIgcmVxdWlyZWQgdmFsdWU9e3RoaXMuc3RhdGUucHJvamVjdH0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhbWl0QnRuXCIgdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPiBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkbWluU2lkZWJhclxyXG4iXSwic291cmNlUm9vdCI6IiJ9