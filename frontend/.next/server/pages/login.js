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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/login.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: login, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
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



var login = /*#__PURE__*/function (_Component) {
  _inherits(login, _Component);

  var _super = _createSuper(login);

  function login(props) {
    var _this;

    _classCallCheck(this, login);

    _this = _super.call(this, props);

    _this.onChange = function (e) {
      _this.setState(_defineProperty({}, e.target.name, e.target.value));
    };

    _this.submitHandler = function (e) {
      e.preventDefault();
      var data = {
        username: _this.state.email,
        password: _this.state.password
      };
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('http://127.0.0.1:8000/api/login/', data) // fetch('http://127.0.0.1:8000/auth/', {
      //     method: 'POST',
      //     headers: {'Content-Type': 'application/json'},
      //     body:JSON.stringify(data)
      // })
      // .then(res=>res.json())
      .then(function (res) {
        if (res.data) {
          localStorage.setItem('user', JSON.stringify(res.data));
          localStorage.setItem('message', "You are logged in");
          window.location.href = '/';

          _this.callSwal("You are logged in");
        }
      })["catch"](function (err) {
        console.log('err.response.data', err.response.data);
      });
    };

    _this.state = {
      email: 'amit4',
      password: '123456789'
    };
    return _this;
  }

  _createClass(login, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container my-5"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "heading"
      }, "Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "text-center"
      }, "Login Here"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: this.submitHandler
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "E-Mail Address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "form-control",
        name: "email",
        required: true,
        placeholder: "Email Please",
        onChange: this.onChange,
        value: this.state.email
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "password",
        className: "form-control",
        name: "password",
        required: true,
        placeholder: "Password Please",
        onChange: this.onChange,
        value: this.state.password
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "amitBtn",
        type: "submit"
      }, "Login", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null))))));
    }
  }]);

  return login;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (login);

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvbG9naW4uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbImxvZ2luIiwicHJvcHMiLCJvbkNoYW5nZSIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInN1Ym1pdEhhbmRsZXIiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGEiLCJ1c2VybmFtZSIsInN0YXRlIiwiZW1haWwiLCJwYXNzd29yZCIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXMiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImNhbGxTd2FsIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFFTyxJQUFNQSxLQUFiO0FBQUE7O0FBQUE7O0FBQ0ksaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZSxVQVNuQkMsUUFUbUIsR0FTVCxVQUFDQyxDQUFELEVBQU87QUFBRSxZQUFLQyxRQUFMLHFCQUFpQkQsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLElBQTFCLEVBQWlDSCxDQUFDLENBQUNFLE1BQUYsQ0FBU0UsS0FBMUM7QUFBb0QsS0FUcEQ7O0FBQUEsVUFXbkJDLGFBWG1CLEdBV0gsVUFBQUwsQ0FBQyxFQUFHO0FBQ2hCQSxPQUFDLENBQUNNLGNBQUY7QUFDQSxVQUFNQyxJQUFJLEdBQUM7QUFDUEMsZ0JBQVEsRUFBdUIsTUFBS0MsS0FBTCxDQUFXQyxLQURuQztBQUVQQyxnQkFBUSxFQUFvQixNQUFLRixLQUFMLENBQVdFO0FBRmhDLE9BQVg7QUFJQUMsa0RBQUssQ0FBQ0MsSUFBTixDQUFXLGtDQUFYLEVBQStDTixJQUEvQyxFQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BLE9BT0NPLElBUEQsQ0FPTSxVQUFBQyxHQUFHLEVBQUc7QUFDUixZQUFHQSxHQUFHLENBQUNSLElBQVAsRUFBWTtBQUNSUyxzQkFBWSxDQUFDQyxPQUFiLENBQXFCLE1BQXJCLEVBQTZCQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUosR0FBRyxDQUFDUixJQUFuQixDQUE3QjtBQUNBUyxzQkFBWSxDQUFDQyxPQUFiLENBQXNCLFNBQXRCLEVBQWlDLG1CQUFqQztBQUNBRyxnQkFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUFoQixHQUF1QixHQUF2Qjs7QUFDQSxnQkFBS0MsUUFBTCxDQUFjLG1CQUFkO0FBQ0g7QUFDSixPQWRELFdBY1MsVUFBQUMsR0FBRyxFQUFFO0FBQ1ZDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaLEVBQWlDRixHQUFHLENBQUNHLFFBQUosQ0FBYXBCLElBQTlDO0FBQ0gsT0FoQkQ7QUFpQkgsS0FsQ2tCOztBQUdmLFVBQUtFLEtBQUwsR0FBYTtBQUNUQyxXQUFLLEVBQXVCLE9BRG5CO0FBRVRDLGNBQVEsRUFBb0I7QUFGbkIsS0FBYjtBQUhlO0FBT2xCOztBQVJMO0FBQUE7QUFBQSw2QkFxQ2E7QUFDTCwwQkFDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSTtBQUFJLGlCQUFTLEVBQUM7QUFBZCxpQkFESixlQUVJO0FBQUcsaUJBQVMsRUFBQztBQUFiLHNCQUZKLGVBR0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0k7QUFBTyxnQkFBUSxFQUFFLEtBQUtOO0FBQXRCLHNCQUNJLHFGQUNJLDJGQURKLGVBRUk7QUFBTyxpQkFBUyxFQUFDLGNBQWpCO0FBQWdDLFlBQUksRUFBQyxPQUFyQztBQUE2QyxnQkFBUSxNQUFyRDtBQUFzRCxtQkFBVyxFQUFDLGNBQWxFO0FBQWlGLGdCQUFRLEVBQUUsS0FBS04sUUFBaEc7QUFBMEcsYUFBSyxFQUFFLEtBQUtVLEtBQUwsQ0FBV0M7QUFBNUgsUUFGSixDQURKLGVBS0kscUZBQ0kscUZBREosZUFFSTtBQUFPLFlBQUksRUFBQyxVQUFaO0FBQXVCLGlCQUFTLEVBQUMsY0FBakM7QUFBZ0QsWUFBSSxFQUFDLFVBQXJEO0FBQWdFLGdCQUFRLE1BQXhFO0FBQXlFLG1CQUFXLEVBQUMsaUJBQXJGO0FBQXVHLGdCQUFRLEVBQUUsS0FBS1gsUUFBdEg7QUFBZ0ksYUFBSyxFQUFFLEtBQUtVLEtBQUwsQ0FBV0U7QUFBbEosUUFGSixDQUxKLGVBU0k7QUFBUSxpQkFBUyxFQUFDLFNBQWxCO0FBQTRCLFlBQUksRUFBQztBQUFqQywrQkFBK0Msd0VBQS9DLENBVEosQ0FESixDQURKLENBSEosQ0FESjtBQXNCSDtBQTVETDs7QUFBQTtBQUFBLEVBQTJCaUIsK0NBQTNCO0FBK0RlL0Isb0VBQWYsRTs7Ozs7Ozs7Ozs7QUNsRUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoicGFnZXMvbG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2xvZ2luLmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5leHBvcnQgY2xhc3MgbG9naW4gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgIFxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGVtYWlsOiAgICAgICAgICAgICAgICAgICAgICAnYW1pdDQnLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogICAgICAgICAgICAgICAgICAgJzEyMzQ1Njc4OSdcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2U9IChlKSA9PiB7IHRoaXMuc2V0U3RhdGUoeyBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pIH1cclxuXHJcbiAgICBzdWJtaXRIYW5kbGVyID0gZSA9PntcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBjb25zdCBkYXRhPXtcclxuICAgICAgICAgICAgdXNlcm5hbWU6ICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZW1haWwsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnBhc3N3b3JkLFxyXG4gICAgICAgIH1cclxuICAgICAgICBheGlvcy5wb3N0KCdodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luLycsIGRhdGEgKVxyXG4gICAgICAgIC8vIGZldGNoKCdodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXV0aC8nLCB7XHJcbiAgICAgICAgLy8gICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIC8vICAgICBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30sXHJcbiAgICAgICAgLy8gICAgIGJvZHk6SlNPTi5zdHJpbmdpZnkoZGF0YSlcclxuICAgICAgICAvLyB9KVxyXG4gICAgICAgIC8vIC50aGVuKHJlcz0+cmVzLmpzb24oKSlcclxuICAgICAgICAudGhlbihyZXM9PiB7XHJcbiAgICAgICAgICAgIGlmKHJlcy5kYXRhKXtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkocmVzLmRhdGEpKVxyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oICdtZXNzYWdlJywgXCJZb3UgYXJlIGxvZ2dlZCBpblwiIClcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8nXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGxTd2FsKFwiWW91IGFyZSBsb2dnZWQgaW5cIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLmNhdGNoKGVycj0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyLnJlc3BvbnNlLmRhdGEnLCBlcnIucmVzcG9uc2UuZGF0YSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteS01XCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZGluZ1wiPkxvZ2luPC9oMT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+TG9naW4gSGVyZTwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSAgb25TdWJtaXQ9e3RoaXMuc3VibWl0SGFuZGxlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5FLU1haWwgQWRkcmVzczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJlbWFpbFwiIHJlcXVpcmVkIHBsYWNlaG9sZGVyPVwiRW1haWwgUGxlYXNlXCIgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cInBhc3N3b3JkXCIgcmVxdWlyZWQgcGxhY2Vob2xkZXI9XCJQYXNzd29yZCBQbGVhc2VcIiBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhbWl0QnRuXCIgdHlwZT1cInN1Ym1pdFwiPkxvZ2luPHNwYW4+PC9zcGFuPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9naW4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9