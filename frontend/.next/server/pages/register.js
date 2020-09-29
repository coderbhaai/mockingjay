module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/register.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert */ "sweetalert");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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





var register = /*#__PURE__*/function (_Component) {
  _inherits(register, _Component);

  var _super = _createSuper(register);

  function register(props) {
    var _this;

    _classCallCheck(this, register);

    _this = _super.call(this, props);

    _this.onChange = function (e) {
      _this.setState(_defineProperty({}, e.target.name, e.target.value));
    };

    _this.callSwal = function (mesg) {
      sweetalert__WEBPACK_IMPORTED_MODULE_2___default()({
        title: mesg,
        timer: 4000
      });
    };

    _this.submitHandler = function (e) {
      e.preventDefault();

      if (_this.state.password != _this.state.password_confirmation) {
        _this.callSwal("Password does not match");
      } else {
        var data = {
          username: _this.state.name,
          email: _this.state.email,
          role: _this.state.role,
          password: _this.state.password
        };
        axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('http://127.0.0.1:8000/user/register/', data).then(function (res) {
          console.log('res.data', res.data);

          if (res.data) {
            localStorage.setItem('user', JSON.stringify(res.data));
            localStorage.setItem('message', "Regsitration Succesful. Welcome !!!");
            window.location.href = '/';

            _this.callSwal("Regsitration Succesful. Welcome !!!");
          }
        })["catch"](function (err) {
          console.log('err', err); // if(err.response.data.email){ this.callSwal(err.response.data.email) }
          // if(err.response.data.username){ this.callSwal(err.response.data.username) }
        });
      }
    };

    _this.state = {
      name: 'amit1',
      email: 'a@a.com',
      role: 'user',
      password: '123456789',
      password_confirmation: '123456789',
      last_login: ''
    };
    return _this;
  }

  _createClass(register, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.scrollTo(0, 0);

      if (typeof Storage !== "undefined" && JSON.parse(localStorage.getItem('user'))) {
        if (JSON.parse(localStorage.getItem('user')).role) {
          window.location.href = '/';
          localStorage.setItem('message', "You are already Logged in");
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container my-5"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "heading"
      }, "Register"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "text-center"
      }, "Register here"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: this.submitHandler
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        name: "name",
        placeholder: "Enter name",
        required: true,
        autoComplete: "name",
        autoFocus: true,
        value: this.state.name,
        onChange: this.onChange
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        className: "form-control",
        required: true,
        value: this.state.role,
        onChange: this.onChange,
        name: "role"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "user"
      }, "User"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "agency"
      }, "Marketing Agency"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "company"
      }, "Company")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "E-Mail Address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "email",
        className: "form-control",
        name: "email",
        placeholder: "Enter email",
        required: true,
        autoComplete: "email",
        value: this.state.email,
        onChange: this.onChange
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "password"
      }, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "password",
        className: "form-control",
        name: "password",
        placeholder: "Enter Password",
        required: true,
        autoComplete: "new-password",
        value: this.state.password,
        onChange: this.onChange
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "password-confirm"
      }, "Confirm Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "password",
        className: "form-control",
        name: "password_confirmation",
        placeholder: "Confirm Password",
        required: true,
        autoComplete: "new-password",
        value: this.state.password_confirmation,
        onChange: this.onChange
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        className: "amitBtn"
      }, "Register")))));
    }
  }]);

  return register;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (register);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "sweetalert":
/*!*****************************!*\
  !*** external "sweetalert" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sweetalert");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcmVnaXN0ZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN3ZWV0YWxlcnRcIiJdLCJuYW1lcyI6WyJyZWdpc3RlciIsInByb3BzIiwib25DaGFuZ2UiLCJlIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJjYWxsU3dhbCIsIm1lc2ciLCJzd2FsIiwidGl0bGUiLCJ0aW1lciIsInN1Ym1pdEhhbmRsZXIiLCJwcmV2ZW50RGVmYXVsdCIsInN0YXRlIiwicGFzc3dvcmQiLCJwYXNzd29yZF9jb25maXJtYXRpb24iLCJkYXRhIiwidXNlcm5hbWUiLCJlbWFpbCIsInJvbGUiLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiZXJyIiwibGFzdF9sb2dpbiIsInNjcm9sbFRvIiwiU3RvcmFnZSIsInBhcnNlIiwiZ2V0SXRlbSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFF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LENBSEosQ0FESjtBQWtDSDs7OztFQTFGa0J1QywrQzs7QUE0RlJ6Qyx1RUFBZixFOzs7Ozs7Ozs7OztBQ2hHQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx1QyIsImZpbGUiOiJwYWdlcy9yZWdpc3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvcmVnaXN0ZXIuanNcIik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHN3YWwgZnJvbSAnc3dlZXRhbGVydCdcclxuXHJcbmNsYXNzIHJlZ2lzdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpICAgIFxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6ICAgICAgICAgICAgICAgICAgICAgICAnYW1pdDEnLFxyXG4gICAgICAgICAgICBlbWFpbDogICAgICAgICAgICAgICAgICAgICAgJ2FAYS5jb20nLFxyXG4gICAgICAgICAgICByb2xlOiAgICAgICAgICAgICAgICAgICAgICAgJ3VzZXInLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogICAgICAgICAgICAgICAgICAgJzEyMzQ1Njc4OScsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkX2NvbmZpcm1hdGlvbjogICAgICAnMTIzNDU2Nzg5JyxcclxuICAgICAgICAgICAgbGFzdF9sb2dpbjogICAgICAgICAgICAgICAgICcnLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxyXG4gICAgICAgIGlmKHR5cGVvZihTdG9yYWdlKSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpKXsgXHJcbiAgICAgICAgICAgIGlmKCBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpLnJvbGUgKXsgXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvJyBcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCAnbWVzc2FnZScsIFwiWW91IGFyZSBhbHJlYWR5IExvZ2dlZCBpblwiIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgb25DaGFuZ2U9IChlKSA9PiB7IHRoaXMuc2V0U3RhdGUoeyBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pIH1cclxuICAgIGNhbGxTd2FsPShtZXNnKT0+eyBzd2FsKHsgdGl0bGU6IG1lc2csIHRpbWVyOiA0MDAwIH0pIH1cclxuXHJcbiAgICBzdWJtaXRIYW5kbGVyID0gZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5wYXNzd29yZCE9IHRoaXMuc3RhdGUucGFzc3dvcmRfY29uZmlybWF0aW9uKXtcclxuICAgICAgICAgICAgdGhpcy5jYWxsU3dhbChcIlBhc3N3b3JkIGRvZXMgbm90IG1hdGNoXCIpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGE9e1xyXG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6ICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubmFtZSwgXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5lbWFpbCxcclxuICAgICAgICAgICAgICAgIHJvbGU6ICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnJvbGUsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5wYXNzd29yZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGF4aW9zLnBvc3QoJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC91c2VyL3JlZ2lzdGVyLycsIGRhdGEpXHJcbiAgICAgICAgICAgIC50aGVuKCByZXM9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXMuZGF0YScsIHJlcy5kYXRhKVxyXG4gICAgICAgICAgICAgICAgaWYocmVzLmRhdGEpe1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkocmVzLmRhdGEpKVxyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCAnbWVzc2FnZScsIFwiUmVnc2l0cmF0aW9uIFN1Y2Nlc2Z1bC4gV2VsY29tZSAhISFcIiApXHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLydcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGxTd2FsKFwiUmVnc2l0cmF0aW9uIFN1Y2Nlc2Z1bC4gV2VsY29tZSAhISFcIilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycj0+e1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2VycicsIGVycilcclxuICAgICAgICAgICAgICAgIC8vIGlmKGVyci5yZXNwb25zZS5kYXRhLmVtYWlsKXsgdGhpcy5jYWxsU3dhbChlcnIucmVzcG9uc2UuZGF0YS5lbWFpbCkgfVxyXG4gICAgICAgICAgICAgICAgLy8gaWYoZXJyLnJlc3BvbnNlLmRhdGEudXNlcm5hbWUpeyB0aGlzLmNhbGxTd2FsKGVyci5yZXNwb25zZS5kYXRhLnVzZXJuYW1lKSB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteS01XCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZGluZ1wiPlJlZ2lzdGVyPC9oMT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+UmVnaXN0ZXIgaGVyZTwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5zdWJtaXRIYW5kbGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5OYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgbmFtZVwiIHJlcXVpcmVkIGF1dG9Db21wbGV0ZT1cIm5hbWVcIiBhdXRvRm9jdXMgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiByZXF1aXJlZCB2YWx1ZT17dGhpcy5zdGF0ZS5yb2xlfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0gbmFtZT1cInJvbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidXNlclwiPlVzZXI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYWdlbmN5XCI+TWFya2V0aW5nIEFnZW5jeTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjb21wYW55XCI+Q29tcGFueTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RS1NYWlsIEFkZHJlc3M8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGVtYWlsXCIgcmVxdWlyZWQgYXV0b0NvbXBsZXRlPVwiZW1haWxcIiB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBQYXNzd29yZFwiIHJlcXVpcmVkIGF1dG9Db21wbGV0ZT1cIm5ldy1wYXNzd29yZFwiIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkLWNvbmZpcm1cIj5Db25maXJtIFBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cInBhc3N3b3JkX2NvbmZpcm1hdGlvblwiIHBsYWNlaG9sZGVyPVwiQ29uZmlybSBQYXNzd29yZFwiIHJlcXVpcmVkIGF1dG9Db21wbGV0ZT1cIm5ldy1wYXNzd29yZFwiIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkX2NvbmZpcm1hdGlvbn0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYW1pdEJ0blwiPlJlZ2lzdGVyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgcmVnaXN0ZXIiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzd2VldGFsZXJ0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=