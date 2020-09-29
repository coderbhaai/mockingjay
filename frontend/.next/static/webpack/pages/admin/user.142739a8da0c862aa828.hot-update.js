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
        placeholder: "Name of Project",
        name: "project",
        required: true,
        value: this.state.project,
        onChange: this.onChange
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Sector"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "form-control",
        type: "text",
        placeholder: "Name of Project",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BZG1pblNpZGViYXIuanMiXSwibmFtZXMiOlsiQWRtaW5TaWRlYmFyIiwicHJvcHMiLCJhZGRNb2RhbE9uIiwic2V0U3RhdGUiLCJhZGRtb2RhbElzT3BlbiIsInJlc2V0RGF0YSIsInVybCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJrZXl3b3JkIiwic2VsZWN0ZWRNZXRhIiwic3RhdGUiLCJ0b29sIiwicHJvamVjdCIsIm9uQ2hhbmdlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLElBQU1BLFlBQWI7QUFBQTs7QUFBQTs7QUFDSSx3QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOOztBQURlLFVBUW5CQyxVQVJtQixHQVFSLFlBQUk7QUFDWCxZQUFLQyxRQUFMLENBQWM7QUFDVkMsc0JBQWMsRUFBYztBQURsQixPQUFkO0FBR0gsS0Faa0I7O0FBQUEsVUFjbkJDLFNBZG1CLEdBY1AsWUFBSTtBQUNaLFlBQUtGLFFBQUwsQ0FBYztBQUNWQyxzQkFBYyxFQUFjLEtBRGxCO0FBRVZFLFdBQUcsRUFBeUIsRUFGbEI7QUFHVkMsYUFBSyxFQUF1QixFQUhsQjtBQUlWQyxtQkFBVyxFQUFpQixFQUpsQjtBQUtWQyxlQUFPLEVBQXFCLEVBTGxCO0FBTVZDLG9CQUFZLEVBQWdCO0FBTmxCLE9BQWQ7QUFRSCxLQXZCa0I7O0FBRWYsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLFVBQUksRUFBd0IsV0FEbkI7QUFFVFIsb0JBQWMsRUFBYztBQUZuQixLQUFiO0FBRmU7QUFNbEI7O0FBUEw7QUFBQTtBQUFBLDZCQTRCYTtBQUNMLDBCQUNJLHFJQUNBO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNJO0FBQUksVUFBRSxFQUFDO0FBQVAsc0JBQ0k7QUFBSSxVQUFFLEVBQUM7QUFBUCxzQkFBeUI7QUFB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RSxLQUFLQztBQUE1SSxRQUZKLENBTEosZUFTSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSSxtRkFESixlQUVJO0FBQU8saUJBQVMsRUFBQyxjQUFqQjtBQUFnQyxZQUFJLEVBQUMsTUFBckM7QUFBNEMsbUJBQVcsRUFBQyxpQkFBeEQ7QUFBMEUsWUFBSSxFQUFDLFNBQS9FO0FBQXlGLGdCQUFRLE1BQWpHO0FBQWtHLGFBQUssRUFBRSxLQUFLSCxLQUFMLENBQVdFLE9BQXBIO0FBQTZILGdCQUFRLEVBQUUsS0FBS0M7QUFBNUksUUFGSixDQVRKLGVBYUk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0ksb0ZBREosZUFFSTtBQUFPLGlCQUFTLEVBQUMsY0FBakI7QUFBZ0MsWUFBSSxFQUFDLE1BQXJDO0FBQTRDLG1CQUFXLEVBQUMsaUJBQXhEO0FBQTBFLFlBQUksRUFBQyxTQUEvRTtBQUF5RixnQkFBUSxNQUFqRztBQUFrRyxhQUFLLEVBQUUsS0FBS0gsS0FBTCxDQUFXRSxPQUFwSDtBQUE2SCxnQkFBUSxFQUFFLEtBQUtDO0FBQTVJLFFBRkosQ0FiSixDQURKLGVBbUJJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNJO0FBQVEsaUJBQVMsRUFBQyxTQUFsQjtBQUE0QixZQUFJLEVBQUM7QUFBakMsa0JBREosQ0FuQkosQ0FMSixDQXRCQSxDQURKO0FBc0RIO0FBbkZMOztBQUFBO0FBQUEsRUFBa0NDLCtDQUFsQztBQXNGZWYsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vdXNlci4xNDI3MzlhOGRhMGM4NjJhYTgyOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJ3JlYWN0c3RyYXAnXHJcblxyXG5leHBvcnQgY2xhc3MgQWRtaW5TaWRlYmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdG9vbDogICAgICAgICAgICAgICAgICAgICAgICdBbGwgVG9vbHMnLFxyXG4gICAgICAgICAgICBhZGRtb2RhbElzT3BlbjogICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGFkZE1vZGFsT249KCk9PntcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgYWRkbW9kYWxJc09wZW46ICAgICAgICAgICAgIHRydWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0RGF0YSA9ICgpPT57XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGFkZG1vZGFsSXNPcGVuOiAgICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgdXJsOiAgICAgICAgICAgICAgICAgICAgICAgICcnLFxyXG4gICAgICAgICAgICB0aXRsZTogICAgICAgICAgICAgICAgICAgICAgJycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAgICAgICAgICAgICAgICAnJyxcclxuICAgICAgICAgICAga2V5d29yZDogICAgICAgICAgICAgICAgICAgICcnLFxyXG4gICAgICAgICAgICBzZWxlY3RlZE1ldGE6ICAgICAgICAgICAgICAgJydcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxyXG4gICAgICAgICAgICAgICAgPHVsIGlkPVwibWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBpZD1cIm1lbnUtYWNhZGVtaWNvXCIgPjxhIGhyZWY9XCIjXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY29nc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48c3Bhbj4ge3RoaXMuc3RhdGUudG9vbH0gPC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLXJpZ2h0XCIgc3R5bGU9e3tmbG9hdDogXCJyaWdodFwifX0+PC9zcGFuPjxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIj48L2Rpdj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBpZD1cIm1lbnUtYWNhZGVtaWNvLXN1YlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiL2FkbWluL3Nlb1wiPlNFTyBUb29sczwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiL2FkbWluL3NtbVwiPlNNTSBUb29sczwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiL2FkbWluL2Fkd29yZHNcIj5BZHdvcmRzIFRvb2xzPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIvYWRtaW4vY29weXdyaXRpbmdcIj5Db3B5d3JpdGluZzwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVwibWVudS1hY2FkZW1pY29cIiA+PGEgaHJlZj1cIiNcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1zaGllbGRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PHNwYW4+IFByb2plY3RzPC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLXJpZ2h0XCIgc3R5bGU9e3tmbG9hdDogXCJyaWdodFwifX0+PC9zcGFuPjxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIj48L2Rpdj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBpZD1cIm1lbnUtYWNhZGVtaWNvLXN1YlwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXt0aGlzLmFkZE1vZGFsT259IGNsYXNzTmFtZT1cIm5vQW5jaG9yXCI+QWRkIGEgUHJvamVjdDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCJcIj5Qcm9qZWN0IDE8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIlwiPlByb2plY3QgMjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiXCI+UHJvamVjdCAzPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgPjxhIGhyZWY9XCIjXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtcmVmcmVzaFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48c3Bhbj4gVXBncmFkZTwvc3Bhbj48L2E+PC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8TW9kYWwgaXNPcGVuPXt0aGlzLnN0YXRlLmFkZG1vZGFsSXNPcGVufSBjbGFzc05hbWU9XCJhZG1pbk1vZGFsXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj5BZGQgUHJvamVjdCBIZXJlPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsb3NlTW9kYWxcIiBvbkNsaWNrPXt0aGlzLnJlc2V0RGF0YX0+WDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UHJvamVjdCBOYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTmFtZSBvZiBQcm9qZWN0XCIgbmFtZT1cInByb2plY3RcIiByZXF1aXJlZCB2YWx1ZT17dGhpcy5zdGF0ZS5wcm9qZWN0fSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPldlYnNpdGUgVVJMPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTmFtZSBvZiBQcm9qZWN0XCIgbmFtZT1cInByb2plY3RcIiByZXF1aXJlZCB2YWx1ZT17dGhpcy5zdGF0ZS5wcm9qZWN0fSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlNlY3RvcjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk5hbWUgb2YgUHJvamVjdFwiIG5hbWU9XCJwcm9qZWN0XCIgcmVxdWlyZWQgdmFsdWU9e3RoaXMuc3RhdGUucHJvamVjdH0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Db3VudHJ5PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTmFtZSBvZiBQcm9qZWN0XCIgbmFtZT1cInByb2plY3RcIiByZXF1aXJlZCB2YWx1ZT17dGhpcy5zdGF0ZS5wcm9qZWN0fSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImFtaXRCdG5cIiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+IFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRtaW5TaWRlYmFyXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=