webpackHotUpdate_N_E("pages/admin/user",{

/***/ "./components/blogs/Sidebar.js":
/*!*************************************!*\
  !*** ./components/blogs/Sidebar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _s2 = $RefreshSig$();

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function Sidebar(props) {
  _s2();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState2 = _slicedToArray(_useState, 2),
      search = _useState2[0],
      setSearch = _useState2[1];

  console.log('search', search);

  var changeText = function changeText(e) {
    setSearch(function (search) {
      return e.target.value;
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-3 blogbar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group flex-center-h"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Search for Blogs here"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "form-control",
    type: "text",
    placeholder: "Search for",
    name: "query",
    required: true,
    onChange: function onChange(e) {
      return changeText(e);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "Submit",
    className: "amitBtn"
  }, "Search")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "categories mt-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Recently Published"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, props.blogs.map(function (i, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/blog/" + i.slug
    }, i.title));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "categories mt-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Category List"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, props.category.map(function (i, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/category/" + i.slug
    }, i.title));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "categories mt-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Tag List"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, props.tag.map(function (i, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/tag/" + i.slug
    }, i.title));
  }))));
}

_s2(Sidebar, "xMSft3/sbCidYXUzqinUsZIh+qY=");

_c = Sidebar;
/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

var _c;

$RefreshReg$(_c, "Sidebar");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/admin/user.js":
/*!*****************************!*\
  !*** ./pages/admin/user.js ***!
  \*****************************/
/*! exports provided: user, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "user", function() { return user; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_blogs_Sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/blogs/Sidebar */ "./components/blogs/Sidebar.js");
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



var user = /*#__PURE__*/function (_Component) {
  _inherits(user, _Component);

  var _super = _createSuper(user);

  function user() {
    _classCallCheck(this, user);

    return _super.apply(this, arguments);
  }

  _createClass(user, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        "class": "main"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "container-fluid"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "col-sm-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_blogs_Sidebar__WEBPACK_IMPORTED_MODULE_1__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "col-sm-10"
      }))));
    }
  }]);

  return user;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (user);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ibG9ncy9TaWRlYmFyLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9hZG1pbi91c2VyLmpzIl0sIm5hbWVzIjpbIlNpZGViYXIiLCJwcm9wcyIsInVzZVN0YXRlIiwic2VhcmNoIiwic2V0U2VhcmNoIiwiY29uc29sZSIsImxvZyIsImNoYW5nZVRleHQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJibG9ncyIsIm1hcCIsImkiLCJpbmRleCIsInNsdWciLCJ0aXRsZSIsImNhdGVnb3J5IiwidGFnIiwidXNlciIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsT0FBVCxDQUFpQkMsS0FBakIsRUFBd0I7QUFBQTs7QUFBQSxrQkFDUUMsc0RBQVEsQ0FBQyxFQUFELENBRGhCO0FBQUE7QUFBQSxNQUNiQyxNQURhO0FBQUEsTUFDTEMsU0FESzs7QUFFcEJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBc0JILE1BQXRCOztBQUNBLE1BQU1JLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLENBQUQsRUFBSztBQUNwQkosYUFBUyxDQUFDLFVBQUFELE1BQU07QUFBQSxhQUFJSyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBYjtBQUFBLEtBQVAsQ0FBVDtBQUNILEdBRkQ7O0FBR0Esc0JBQ0k7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDSTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNJLCtGQURKLGVBRUk7QUFBTyxhQUFTLEVBQUMsY0FBakI7QUFBZ0MsUUFBSSxFQUFDLE1BQXJDO0FBQTRDLGVBQVcsRUFBQyxZQUF4RDtBQUFxRSxRQUFJLEVBQUMsT0FBMUU7QUFBa0YsWUFBUSxNQUExRjtBQUEyRixZQUFRLEVBQUUsa0JBQUNGLENBQUQ7QUFBQSxhQUFLRCxVQUFVLENBQUNDLENBQUQsQ0FBZjtBQUFBO0FBQXJHLElBRkosZUFHSTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQXNCLGFBQVMsRUFBQztBQUFoQyxjQUhKLENBREosZUFNSTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNJLDRGQURKLGVBRUksdUVBQUtQLEtBQUssQ0FBQ1UsS0FBTixDQUFZQyxHQUFaLENBQWdCLFVBQUNDLENBQUQsRUFBR0MsS0FBSDtBQUFBLHdCQUFhO0FBQUksU0FBRyxFQUFFQTtBQUFULG9CQUFnQjtBQUFHLFVBQUksRUFBRSxXQUFTRCxDQUFDLENBQUNFO0FBQXBCLE9BQTJCRixDQUFDLENBQUNHLEtBQTdCLENBQWhCLENBQWI7QUFBQSxHQUFoQixDQUFMLENBRkosQ0FOSixlQVVJO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0ksdUZBREosZUFFSSx1RUFBS2YsS0FBSyxDQUFDZ0IsUUFBTixDQUFlTCxHQUFmLENBQW1CLFVBQUNDLENBQUQsRUFBR0MsS0FBSDtBQUFBLHdCQUFhO0FBQUksU0FBRyxFQUFFQTtBQUFULG9CQUFnQjtBQUFHLFVBQUksRUFBRSxlQUFhRCxDQUFDLENBQUNFO0FBQXhCLE9BQStCRixDQUFDLENBQUNHLEtBQWpDLENBQWhCLENBQWI7QUFBQSxHQUFuQixDQUFMLENBRkosQ0FWSixlQWNJO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0ksa0ZBREosZUFFSSx1RUFBS2YsS0FBSyxDQUFDaUIsR0FBTixDQUFVTixHQUFWLENBQWMsVUFBQ0MsQ0FBRCxFQUFHQyxLQUFIO0FBQUEsd0JBQWE7QUFBSSxTQUFHLEVBQUVBO0FBQVQsb0JBQWdCO0FBQUcsVUFBSSxFQUFFLFVBQVFELENBQUMsQ0FBQ0U7QUFBbkIsT0FBMEJGLENBQUMsQ0FBQ0csS0FBNUIsQ0FBaEIsQ0FBYjtBQUFBLEdBQWQsQ0FBTCxDQUZKLENBZEosQ0FESjtBQXFCSDs7SUEzQlFoQixPOztLQUFBQSxPO0FBNkJNQSxzRUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CQTtBQUNBO0FBRU8sSUFBTW1CLElBQWI7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLDZCQUNhO0FBQ0wsMEJBQ0k7QUFBUyxpQkFBTTtBQUFmLHNCQUNJO0FBQUssaUJBQU07QUFBWCxzQkFDSTtBQUFLLGlCQUFNO0FBQVgsc0JBQ0k7QUFBSyxpQkFBTTtBQUFYLHNCQUNJLDJEQUFDLGlFQUFELE9BREosQ0FESixlQUlJO0FBQUssaUJBQU07QUFBWCxRQUpKLENBREosQ0FESixDQURKO0FBYUg7QUFmTDs7QUFBQTtBQUFBLEVBQTBCQywrQ0FBMUI7QUFrQmVELG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL3VzZXIuMzAyYzlmNWViZDYxZGU0ODA5ZmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIFNpZGViYXIocHJvcHMpIHtcclxuICAgIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zb2xlLmxvZygnc2VhcmNoJywgc2VhcmNoKVxyXG4gICAgY29uc3QgY2hhbmdlVGV4dCA9IChlKT0+e1xyXG4gICAgICAgIHNldFNlYXJjaChzZWFyY2ggPT4gZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0zIGJsb2diYXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGZsZXgtY2VudGVyLWhcIj5cclxuICAgICAgICAgICAgICAgIDxoMz5TZWFyY2ggZm9yIEJsb2dzIGhlcmU8L2gzPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggZm9yXCIgbmFtZT1cInF1ZXJ5XCIgcmVxdWlyZWQgb25DaGFuZ2U9eyhlKT0+Y2hhbmdlVGV4dChlKX0vPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiU3VibWl0XCIgY2xhc3NOYW1lPVwiYW1pdEJ0blwiPlNlYXJjaDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yaWVzIG10LTVcIj5cclxuICAgICAgICAgICAgICAgIDxoMz5SZWNlbnRseSBQdWJsaXNoZWQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgPHVsPntwcm9wcy5ibG9ncy5tYXAoKGksaW5kZXgpPT4oIDxsaSBrZXk9e2luZGV4fT48YSBocmVmPXtcIi9ibG9nL1wiK2kuc2x1Z30+e2kudGl0bGV9PC9hPjwvbGk+ICkpfTwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3JpZXMgbXQtNVwiPlxyXG4gICAgICAgICAgICAgICAgPGgzPkNhdGVnb3J5IExpc3Q8L2gzPlxyXG4gICAgICAgICAgICAgICAgPHVsPntwcm9wcy5jYXRlZ29yeS5tYXAoKGksaW5kZXgpPT4oIDxsaSBrZXk9e2luZGV4fT48YSBocmVmPXtcIi9jYXRlZ29yeS9cIitpLnNsdWd9PntpLnRpdGxlfTwvYT48L2xpPiApKX08L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yaWVzIG10LTVcIj5cclxuICAgICAgICAgICAgICAgIDxoMz5UYWcgTGlzdDwvaDM+XHJcbiAgICAgICAgICAgICAgICA8dWw+e3Byb3BzLnRhZy5tYXAoKGksaW5kZXgpPT4oIDxsaSBrZXk9e2luZGV4fT48YSBocmVmPXtcIi90YWcvXCIraS5zbHVnfT57aS50aXRsZX08L2E+PC9saT4gKSl9PC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXJcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Jsb2dzL1NpZGViYXInXHJcblxyXG5leHBvcnQgY2xhc3MgdXNlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJtYWluXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaWRlYmFyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlclxyXG4iXSwic291cmNlUm9vdCI6IiJ9