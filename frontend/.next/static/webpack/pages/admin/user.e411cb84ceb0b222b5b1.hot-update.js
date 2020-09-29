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
        add: add
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BZG1pblNpZGViYXIuanMiXSwibmFtZXMiOlsiQWRtaW5TaWRlYmFyIiwicHJvcHMiLCJhZGRNb2RhbE9uIiwic2V0U3RhdGUiLCJhZGQiLCJzdGF0ZSIsInRvb2wiLCJhZGRtb2RhbElzT3BlbiIsInJlc2V0RGF0YSIsImFkZE1ldGEiLCJ1cmwiLCJvbkNoYW5nZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJrZXl3b3JkIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLElBQU1BLFlBQWI7QUFBQTs7QUFBQTs7QUFDSSx3QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOOztBQURlLFVBUW5CQyxVQVJtQixHQVFSLFlBQUk7QUFDWCxZQUFLQyxRQUFMLENBQWM7QUFDVkMsV0FBRyxFQUFIQTtBQURVLE9BQWQ7QUFHSCxLQVprQjs7QUFFZixVQUFLQyxLQUFMLEdBQWE7QUFDVEMsVUFBSSxFQUF3QixXQURuQjtBQUVUQyxvQkFBYyxFQUFjO0FBRm5CLEtBQWI7QUFGZTtBQU1sQjs7QUFQTDtBQUFBO0FBQUEsNkJBZWE7QUFDTCwwQkFDSSxxSUFDQTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSTtBQUFJLFVBQUUsRUFBQztBQUFQLHNCQUNJO0FBQUksVUFBRSxFQUFDO0FBQVAsc0JBQXlCO0FBQUcsWUFBSSxFQUFDO0FBQVIsc0JBQVk7QUFBRyxpQkFBUyxFQUFDLFlBQWI7QUFBMEIsdUJBQVk7QUFBdEMsUUFBWixlQUE2RCw4RUFBUSxLQUFLRixLQUFMLENBQVdDLElBQW5CLE1BQTdELGVBQTZGO0FBQU0saUJBQVMsRUFBQyxtQkFBaEI7QUFBb0MsYUFBSyxFQUFFO0FBQUMsbUJBQU87QUFBUjtBQUEzQyxRQUE3RixlQUFpSztBQUFLLGlCQUFTLEVBQUM7QUFBZixRQUFqSyxDQUF6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TUFBeEc7QUFBeUcsYUFBSyxFQUFFLEtBQUtOLEtBQUwsQ0FBV1EsV0FBM0g7QUFBd0ksZ0JBQVEsRUFBRSxLQUFLRjtBQUF2SixRQUZKLENBVEosZUFhSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSSxxRkFESixlQUVJO0FBQVUsaUJBQVMsRUFBQyxjQUFwQjtBQUFtQyxZQUFJLEVBQUMsTUFBeEM7QUFBK0MsbUJBQVcsRUFBQyxjQUEzRDtBQUEwRSxZQUFJLEVBQUMsU0FBL0U7QUFBeUYsZ0JBQVEsTUFBakc7QUFBa0csYUFBSyxFQUFFLEtBQUtOLEtBQUwsQ0FBV1MsT0FBcEg7QUFBNkgsZ0JBQVEsRUFBRSxLQUFLSDtBQUE1SSxRQUZKLENBYkosQ0FESixlQW1CSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSTtBQUFRLGlCQUFTLEVBQUMsWUFBbEI7QUFBK0IsWUFBSSxFQUFDO0FBQXBDLGtCQURKLENBbkJKLENBTEosQ0F0QkEsQ0FESjtBQXNESDtBQXRFTDs7QUFBQTtBQUFBLEVBQWtDSSwrQ0FBbEM7QUF5RWVmLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL3VzZXIuZTQxMWNiODRjZWIwYjIyMmI1YjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICdyZWFjdHN0cmFwJ1xyXG5cclxuZXhwb3J0IGNsYXNzIEFkbWluU2lkZWJhciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHRvb2w6ICAgICAgICAgICAgICAgICAgICAgICAnQWxsIFRvb2xzJyxcclxuICAgICAgICAgICAgYWRkbW9kYWxJc09wZW46ICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBhZGRNb2RhbE9uPSgpPT57XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGFkZFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxyXG4gICAgICAgICAgICAgICAgPHVsIGlkPVwibWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBpZD1cIm1lbnUtYWNhZGVtaWNvXCIgPjxhIGhyZWY9XCIjXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY29nc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48c3Bhbj4ge3RoaXMuc3RhdGUudG9vbH0gPC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLXJpZ2h0XCIgc3R5bGU9e3tmbG9hdDogXCJyaWdodFwifX0+PC9zcGFuPjxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIj48L2Rpdj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBpZD1cIm1lbnUtYWNhZGVtaWNvLXN1YlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiL2FkbWluL3Nlb1wiPlNFTyBUb29sczwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiL2FkbWluL3NtbVwiPlNNTSBUb29sczwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiL2FkbWluL2Fkd29yZHNcIj5BZHdvcmRzIFRvb2xzPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIvYWRtaW4vY29weXdyaXRpbmdcIj5Db3B5d3JpdGluZzwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVwibWVudS1hY2FkZW1pY29cIiA+PGEgaHJlZj1cIiNcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1zaGllbGRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PHNwYW4+IFByb2plY3RzPC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLXJpZ2h0XCIgc3R5bGU9e3tmbG9hdDogXCJyaWdodFwifX0+PC9zcGFuPjxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIj48L2Rpdj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBpZD1cIm1lbnUtYWNhZGVtaWNvLXN1YlwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXt0aGlzLmFkZE1vZGFsT259IGNsYXNzTmFtZT1cIm5vQW5jaG9yXCI+QWRkIGEgUHJvamVjdDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCJcIj5Qcm9qZWN0IDE8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIlwiPlByb2plY3QgMjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiXCI+UHJvamVjdCAzPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgPjxhIGhyZWY9XCIjXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtcmVmcmVzaFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48c3Bhbj4gVXBncmFkZTwvc3Bhbj48L2E+PC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8TW9kYWwgaXNPcGVuPXt0aGlzLnN0YXRlLmFkZG1vZGFsSXNPcGVufSBjbGFzc05hbWU9XCJhZG1pbk1vZGFsXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj5BZGQgTWV0YSBIZXJlPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsb3NlTW9kYWxcIiBvbkNsaWNrPXt0aGlzLnJlc2V0RGF0YX0+WDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIG9uU3VibWl0PXt0aGlzLmFkZE1ldGF9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5VUkw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJVUkwgb2YgUGFnZVwiIG5hbWU9XCJ1cmxcIiByZXF1aXJlZCB2YWx1ZT17dGhpcy5zdGF0ZS51cmx9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+VGl0bGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJBZGQgVGl0bGUgSGVyZVwiIG5hbWU9XCJ0aXRsZVwiIHJlcXVpcmVkIHZhbHVlPXt0aGlzLnN0YXRlLnRpdGxlfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkRlc2NyaXB0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQWRkIERlc2NyaXB0aW9uXCIgbmFtZT1cImRlc2NyaXB0aW9uXCIgcmVxdWlyZWQgdmFsdWU9e3RoaXMuc3RhdGUuZGVzY3JpcHRpb259IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+S2V5d29yZHM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJBZGQgS2V5d29yZHNcIiBuYW1lPVwia2V5d29yZFwiIHJlcXVpcmVkIHZhbHVlPXt0aGlzLnN0YXRlLmtleXdvcmR9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYWN0aW9uLWJ0blwiIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj4gXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZG1pblNpZGViYXJcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==