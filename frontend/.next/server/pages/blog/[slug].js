module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/blog/[slug].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/blogs/BlogBanner.js":
/*!****************************************!*\
  !*** ./components/blogs/BlogBanner.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function BlogBanner(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "carouselExampleFade",
    className: "carousel slide carousel-fade",
    "data-ride": "carousel",
    "data-interval": "50000"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "carousel-inner blogBanner"
  }, props.blogs.slice(0, 1).map(function (i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "carousel-item active",
      key: i.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: i.coverImg
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "carousel-caption"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/blog/" + i.slug
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, i.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/blog/" + i.slug,
      className: "amitBtn"
    }, "Read More")));
  }), props.blogs.slice(1, 3).map(function (i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "carousel-item",
      key: i.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: i.coverImg
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "carousel-caption"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/blog/" + i.slug
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, i.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/blog/" + i.slug,
      className: "amitBtn"
    }, "Read More")));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "carousel-control-prev",
    href: "#carouselExampleFade",
    role: "button",
    "data-slide": "prev"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "carousel-control-prev-icon",
    "aria-hidden": "true"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "carousel-control-next",
    href: "#carouselExampleFade",
    role: "button",
    "data-slide": "next"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "carousel-control-next-icon",
    "aria-hidden": "true"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (BlogBanner);

/***/ }),

/***/ "./components/blogs/BlogList.js":
/*!**************************************!*\
  !*** ./components/blogs/BlogList.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function BlogList(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row blogs mt-5"
  }, props.blogs.map(function (i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-sm-4 ",
      key: i.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/blog/" + i.slug
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: i.coverImg
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "name"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, i.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "amitBtn"
    }, "Read More")))));
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (BlogList);

/***/ }),

/***/ "./components/blogs/Parallax.js":
/*!**************************************!*\
  !*** ./components/blogs/Parallax.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function Parallax() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "parallax mb-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Want to  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, " publish your blog"), " with us?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    "data-toggle": "modal",
    "data-target": "#exampleModalCenter",
    className: "amitBtn"
  }, "Write for us"));
}

/* harmony default export */ __webpack_exports__["default"] = (Parallax);

/***/ }),

/***/ "./components/blogs/Sidebar.js":
/*!*************************************!*\
  !*** ./components/blogs/Sidebar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function Sidebar(props) {
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

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./pages/blog/[slug].js":
/*!******************************!*\
  !*** ./pages/blog/[slug].js ***!
  \******************************/
/*! exports provided: blog, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blog", function() { return blog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_blogs_BlogList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/blogs/BlogList */ "./components/blogs/BlogList.js");
/* harmony import */ var _components_blogs_BlogBanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/blogs/BlogBanner */ "./components/blogs/BlogBanner.js");
/* harmony import */ var _components_blogs_Parallax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/blogs/Parallax */ "./components/blogs/Parallax.js");
/* harmony import */ var _components_blogs_Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/blogs/Sidebar */ "./components/blogs/Sidebar.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
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







var blog = /*#__PURE__*/function (_Component) {
  _inherits(blog, _Component);

  var _super = _createSuper(blog);

  function blog(props) {
    var _this;

    _classCallCheck(this, blog);

    _this = _super.call(this, props);
    _this.state = {
      blogs: [],
      category: [],
      tag: [],
      coverImg: '',
      single: []
    };
    return _this;
  }

  _createClass(blog, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var url = window.location.href.split("/").pop();
      axios__WEBPACK_IMPORTED_MODULE_5___default.a.get('http://127.0.0.1:8000/api/blog/?slug=' + url).then(function (res) {
        console.log('res.data', res.data);

        _this2.setState({
          blogs: res.data.result.blogs,
          category: res.data.result.category,
          tag: res.data.result.tag,
          coverImg: res.data.result.single[0].coverImg,
          single: res.data.result.single[0]
        });
      })["catch"](function (err) {
        console.log('err.response.data', err.response);
      });
    }
  }, {
    key: "render",
    value: function render() {
      console.log('this.state', this.state);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "banner"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "http://127.0.0.1:8000/media/" + this.state.coverImg,
        alt: ""
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, this.state.single.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container my-5"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "heading"
      }, this.state.single.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-9"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, this.state.single.body)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_blogs_Sidebar__WEBPACK_IMPORTED_MODULE_4__["default"], {
        blogs: this.state.blogs,
        category: this.state.category,
        tag: this.state.tag
      }))));
    }
  }]);

  return blog;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (blog);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ibG9ncy9CbG9nQmFubmVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYmxvZ3MvQmxvZ0xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ibG9ncy9QYXJhbGxheC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Jsb2dzL1NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYmxvZy9bc2x1Z10uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbIkJsb2dCYW5uZXIiLCJwcm9wcyIsImJsb2dzIiwic2xpY2UiLCJtYXAiLCJpIiwiaWQiLCJjb3ZlckltZyIsInNsdWciLCJ0aXRsZSIsIkJsb2dMaXN0IiwiUGFyYWxsYXgiLCJTaWRlYmFyIiwidXNlU3RhdGUiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJjb25zb2xlIiwibG9nIiwiY2hhbmdlVGV4dCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImluZGV4IiwiY2F0ZWdvcnkiLCJ0YWciLCJibG9nIiwic3RhdGUiLCJzaW5nbGUiLCJ1cmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJzcGxpdCIsInBvcCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJzZXRTdGF0ZSIsInJlc3VsdCIsImVyciIsInJlc3BvbnNlIiwiYm9keSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUFBO0FBQUE7QUFBQTs7QUFFQSxTQUFTQSxVQUFULENBQW9CQyxLQUFwQixFQUEyQjtBQUN2QixzQkFDSTtBQUFLLE1BQUUsRUFBQyxxQkFBUjtBQUE4QixhQUFTLEVBQUMsOEJBQXhDO0FBQXVFLGlCQUFVLFVBQWpGO0FBQTRGLHFCQUFjO0FBQTFHLGtCQUNJO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDS0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLEtBQVosQ0FBa0IsQ0FBbEIsRUFBcUIsQ0FBckIsRUFBd0JDLEdBQXhCLENBQTRCLFVBQUNDLENBQUQsRUFBSztBQUM5Qix3QkFDSTtBQUFLLGVBQVMsRUFBQyxzQkFBZjtBQUFzQyxTQUFHLEVBQUVBLENBQUMsQ0FBQ0M7QUFBN0Msb0JBQ0k7QUFBSyxTQUFHLEVBQUVELENBQUMsQ0FBQ0U7QUFBWixNQURKLGVBRUk7QUFBSyxlQUFTLEVBQUM7QUFBZixvQkFDSTtBQUFHLFVBQUksRUFBRSxXQUFXRixDQUFDLENBQUNHO0FBQXRCLG9CQUE0Qix1RUFBS0gsQ0FBQyxDQUFDSSxLQUFQLENBQTVCLENBREosZUFFSTtBQUFHLFVBQUksRUFBRSxXQUFXSixDQUFDLENBQUNHLElBQXRCO0FBQTRCLGVBQVMsRUFBQztBQUF0QyxtQkFGSixDQUZKLENBREo7QUFRRSxHQVRMLENBREwsRUFXS1AsS0FBSyxDQUFDQyxLQUFOLENBQVlDLEtBQVosQ0FBa0IsQ0FBbEIsRUFBcUIsQ0FBckIsRUFBd0JDLEdBQXhCLENBQTRCLFVBQUNDLENBQUQsRUFBSztBQUM5Qix3QkFDSTtBQUFLLGVBQVMsRUFBQyxlQUFmO0FBQStCLFNBQUcsRUFBRUEsQ0FBQyxDQUFDQztBQUF0QyxvQkFDSTtBQUFLLFNBQUcsRUFBRUQsQ0FBQyxDQUFDRTtBQUFaLE1BREosZUFFSTtBQUFLLGVBQVMsRUFBQztBQUFmLG9CQUNJO0FBQUcsVUFBSSxFQUFFLFdBQVdGLENBQUMsQ0FBQ0c7QUFBdEIsb0JBQTRCLHVFQUFLSCxDQUFDLENBQUNJLEtBQVAsQ0FBNUIsQ0FESixlQUVJO0FBQUcsVUFBSSxFQUFFLFdBQVdKLENBQUMsQ0FBQ0csSUFBdEI7QUFBNEIsZUFBUyxFQUFDO0FBQXRDLG1CQUZKLENBRkosQ0FESjtBQVFFLEdBVEwsQ0FYTCxDQURKLGVBdUJJO0FBQUcsYUFBUyxFQUFDLHVCQUFiO0FBQXFDLFFBQUksRUFBQyxzQkFBMUM7QUFBaUUsUUFBSSxFQUFDLFFBQXRFO0FBQStFLGtCQUFXO0FBQTFGLGtCQUFpRztBQUFNLGFBQVMsRUFBQyw0QkFBaEI7QUFBNkMsbUJBQVk7QUFBekQsSUFBakcsQ0F2QkosZUF3Qkk7QUFBRyxhQUFTLEVBQUMsdUJBQWI7QUFBcUMsUUFBSSxFQUFDLHNCQUExQztBQUFpRSxRQUFJLEVBQUMsUUFBdEU7QUFBK0Usa0JBQVc7QUFBMUYsa0JBQWlHO0FBQU0sYUFBUyxFQUFDLDRCQUFoQjtBQUE2QyxtQkFBWTtBQUF6RCxJQUFqRyxDQXhCSixDQURKO0FBNEJIOztBQUVjUix5RUFBZixFOzs7Ozs7Ozs7Ozs7QUNqQ0E7QUFBQTtBQUFBO0FBQUE7O0FBRUEsU0FBU1UsUUFBVCxDQUFrQlQsS0FBbEIsRUFBeUI7QUFDckIsc0JBQ0kscUlBQ0k7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNNQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUUsR0FBWixDQUFnQixVQUFDQyxDQUFELEVBQUs7QUFDdkIsd0JBQ0k7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUEyQixTQUFHLEVBQUVBLENBQUMsQ0FBQ0M7QUFBbEMsb0JBQ0k7QUFBSyxlQUFTLEVBQUM7QUFBZixvQkFDSTtBQUFHLFVBQUksRUFBRSxXQUFXRCxDQUFDLENBQUNHO0FBQXRCLG9CQUNJLHFGQUFLO0FBQUssU0FBRyxFQUFFSCxDQUFDLENBQUNFO0FBQVosTUFBTCxDQURKLGVBRUk7QUFBSyxlQUFTLEVBQUM7QUFBZixvQkFDSSx1RUFBS0YsQ0FBQyxDQUFDSSxLQUFQLENBREosZUFFSTtBQUFRLGVBQVMsRUFBQztBQUFsQixtQkFGSixDQUZKLENBREosQ0FESixDQURKO0FBWUUsR0FiQSxDQUROLENBREosQ0FESjtBQW9CSDs7QUFFY0MsdUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDekJBO0FBQUE7QUFBQTtBQUFBOztBQUVBLFNBQVNDLFFBQVQsR0FBb0I7QUFDaEIsc0JBQ0k7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDSSxpR0FBYSw4RkFBYixjQURKLGVBRUk7QUFBRyxtQkFBWSxPQUFmO0FBQXVCLG1CQUFZLHFCQUFuQztBQUF5RCxhQUFTLEVBQUM7QUFBbkUsb0JBRkosQ0FESjtBQU1IOztBQUVjQSx1RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTs7QUFFQSxTQUFTQyxPQUFULENBQWlCWCxLQUFqQixFQUF3QjtBQUFBLGtCQUNRWSxzREFBUSxDQUFDLEVBQUQsQ0FEaEI7QUFBQTtBQUFBLE1BQ2JDLE1BRGE7QUFBQSxNQUNMQyxTQURLOztBQUVwQkMsU0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQkgsTUFBdEI7O0FBQ0EsTUFBTUksVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsQ0FBRCxFQUFLO0FBQ3BCSixhQUFTLENBQUMsVUFBQUQsTUFBTTtBQUFBLGFBQUlLLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFiO0FBQUEsS0FBUCxDQUFUO0FBQ0gsR0FGRDs7QUFHQSxzQkFDSTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNJO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0ksK0ZBREosZUFFSTtBQUFPLGFBQVMsRUFBQyxjQUFqQjtBQUFnQyxRQUFJLEVBQUMsTUFBckM7QUFBNEMsZUFBVyxFQUFDLFlBQXhEO0FBQXFFLFFBQUksRUFBQyxPQUExRTtBQUFrRixZQUFRLE1BQTFGO0FBQTJGLFlBQVEsRUFBRSxrQkFBQ0YsQ0FBRDtBQUFBLGFBQUtELFVBQVUsQ0FBQ0MsQ0FBRCxDQUFmO0FBQUE7QUFBckcsSUFGSixlQUdJO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBc0IsYUFBUyxFQUFDO0FBQWhDLGNBSEosQ0FESixlQU1JO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0ksNEZBREosZUFFSSx1RUFBS2xCLEtBQUssQ0FBQ0MsS0FBTixDQUFZRSxHQUFaLENBQWdCLFVBQUNDLENBQUQsRUFBR2lCLEtBQUg7QUFBQSx3QkFBYTtBQUFJLFNBQUcsRUFBRUE7QUFBVCxvQkFBZ0I7QUFBRyxVQUFJLEVBQUUsV0FBU2pCLENBQUMsQ0FBQ0c7QUFBcEIsT0FBMkJILENBQUMsQ0FBQ0ksS0FBN0IsQ0FBaEIsQ0FBYjtBQUFBLEdBQWhCLENBQUwsQ0FGSixDQU5KLGVBVUk7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDSSx1RkFESixlQUVJLHVFQUFLUixLQUFLLENBQUNzQixRQUFOLENBQWVuQixHQUFmLENBQW1CLFVBQUNDLENBQUQsRUFBR2lCLEtBQUg7QUFBQSx3QkFBYTtBQUFJLFNBQUcsRUFBRUE7QUFBVCxvQkFBZ0I7QUFBRyxVQUFJLEVBQUUsZUFBYWpCLENBQUMsQ0FBQ0c7QUFBeEIsT0FBK0JILENBQUMsQ0FBQ0ksS0FBakMsQ0FBaEIsQ0FBYjtBQUFBLEdBQW5CLENBQUwsQ0FGSixDQVZKLGVBY0k7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDSSxrRkFESixlQUVJLHVFQUFLUixLQUFLLENBQUN1QixHQUFOLENBQVVwQixHQUFWLENBQWMsVUFBQ0MsQ0FBRCxFQUFHaUIsS0FBSDtBQUFBLHdCQUFhO0FBQUksU0FBRyxFQUFFQTtBQUFULG9CQUFnQjtBQUFHLFVBQUksRUFBRSxVQUFRakIsQ0FBQyxDQUFDRztBQUFuQixPQUEwQkgsQ0FBQyxDQUFDSSxLQUE1QixDQUFoQixDQUFiO0FBQUEsR0FBZCxDQUFMLENBRkosQ0FkSixDQURKO0FBcUJIOztBQUVjRyxzRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNYSxJQUFiO0FBQUE7O0FBQUE7O0FBQ0ksZ0JBQVl4QixLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxVQUFLeUIsS0FBTCxHQUFhO0FBQ1R4QixXQUFLLEVBQVcsRUFEUDtBQUVUcUIsY0FBUSxFQUFRLEVBRlA7QUFHVEMsU0FBRyxFQUFhLEVBSFA7QUFJVGpCLGNBQVEsRUFBUSxFQUpQO0FBS1RvQixZQUFNLEVBQVU7QUFMUCxLQUFiO0FBRmU7QUFTbEI7O0FBVkw7QUFBQTtBQUFBLHdDQVl1QjtBQUFBOztBQUNmLFVBQU1DLEdBQUcsR0FBR0MsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUFoQixDQUFxQkMsS0FBckIsQ0FBMkIsR0FBM0IsRUFBZ0NDLEdBQWhDLEVBQVo7QUFDQUMsa0RBQUssQ0FBQ0MsR0FBTixDQUFVLDBDQUF3Q1AsR0FBbEQsRUFDS1EsSUFETCxDQUNXLFVBQUFDLEdBQUcsRUFBRTtBQUNSckIsZUFBTyxDQUFDQyxHQUFSLENBQVksVUFBWixFQUF3Qm9CLEdBQUcsQ0FBQ0MsSUFBNUI7O0FBQ0EsY0FBSSxDQUFDQyxRQUFMLENBQWM7QUFDVnJDLGVBQUssRUFBZW1DLEdBQUcsQ0FBQ0MsSUFBSixDQUFTRSxNQUFULENBQWdCdEMsS0FEMUI7QUFFVnFCLGtCQUFRLEVBQVljLEdBQUcsQ0FBQ0MsSUFBSixDQUFTRSxNQUFULENBQWdCakIsUUFGMUI7QUFHVkMsYUFBRyxFQUFpQmEsR0FBRyxDQUFDQyxJQUFKLENBQVNFLE1BQVQsQ0FBZ0JoQixHQUgxQjtBQUlWakIsa0JBQVEsRUFBWThCLEdBQUcsQ0FBQ0MsSUFBSixDQUFTRSxNQUFULENBQWdCYixNQUFoQixDQUF1QixDQUF2QixFQUEwQnBCLFFBSnBDO0FBS1ZvQixnQkFBTSxFQUFjVSxHQUFHLENBQUNDLElBQUosQ0FBU0UsTUFBVCxDQUFnQmIsTUFBaEIsQ0FBdUIsQ0FBdkI7QUFMVixTQUFkO0FBT0gsT0FWTCxXQVdXLFVBQUFjLEdBQUcsRUFBRTtBQUFFekIsZUFBTyxDQUFDQyxHQUFSLENBQVksbUJBQVosRUFBaUN3QixHQUFHLENBQUNDLFFBQXJDO0FBQWdELE9BWGxFO0FBWUg7QUExQkw7QUFBQTtBQUFBLDZCQTRCYTtBQUNMMUIsYUFBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUEwQixLQUFLUyxLQUEvQjtBQUNBLDBCQUNJLHFJQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNJO0FBQUssV0FBRyxFQUFFLGlDQUErQixLQUFLQSxLQUFMLENBQVduQixRQUFwRDtBQUE4RCxXQUFHLEVBQUM7QUFBbEUsUUFESixlQUVJLHVFQUFLLEtBQUttQixLQUFMLENBQVdDLE1BQVgsQ0FBa0JsQixLQUF2QixDQUZKLENBREosZUFLSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSTtBQUFJLGlCQUFTLEVBQUM7QUFBZCxTQUF5QixLQUFLaUIsS0FBTCxDQUFXQyxNQUFYLENBQWtCbEIsS0FBM0MsQ0FESixlQUVJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNJLHNFQUFJLEtBQUtpQixLQUFMLENBQVdDLE1BQVgsQ0FBa0JnQixJQUF0QixDQURKLENBREosZUFLSSwyREFBQyxpRUFBRDtBQUFTLGFBQUssRUFBRSxLQUFLakIsS0FBTCxDQUFXeEIsS0FBM0I7QUFBa0MsZ0JBQVEsRUFBRSxLQUFLd0IsS0FBTCxDQUFXSCxRQUF2RDtBQUFpRSxXQUFHLEVBQUUsS0FBS0csS0FBTCxDQUFXRjtBQUFqRixRQUxKLENBRkosQ0FMSixDQURKO0FBa0JIO0FBaERMOztBQUFBO0FBQUEsRUFBMEJvQiwrQ0FBMUI7QUFrRGVuQixtRUFBZixFOzs7Ozs7Ozs7OztBQ3pEQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy9ibG9nL1tzbHVnXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYmxvZy9bc2x1Z10uanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBCbG9nQmFubmVyKHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9XCJjYXJvdXNlbEV4YW1wbGVGYWRlXCIgY2xhc3NOYW1lPVwiY2Fyb3VzZWwgc2xpZGUgY2Fyb3VzZWwtZmFkZVwiIGRhdGEtcmlkZT1cImNhcm91c2VsXCIgZGF0YS1pbnRlcnZhbD1cIjUwMDAwXCIgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLWlubmVyIGJsb2dCYW5uZXJcIj5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5ibG9ncy5zbGljZSgwLCAxKS5tYXAoKGkpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLWl0ZW0gYWN0aXZlXCIga2V5PXtpLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpLmNvdmVySW1nfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLWNhcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtcIi9ibG9nL1wiICsgaS5zbHVnfT48aDI+e2kudGl0bGV9PC9oMj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17XCIvYmxvZy9cIiArIGkuc2x1Z30gY2xhc3NOYW1lPVwiYW1pdEJ0blwiPlJlYWQgTW9yZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfSl9XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuYmxvZ3Muc2xpY2UoMSwgMykubWFwKChpKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1pdGVtXCIga2V5PXtpLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpLmNvdmVySW1nfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLWNhcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtcIi9ibG9nL1wiICsgaS5zbHVnfT48aDI+e2kudGl0bGV9PC9oMj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17XCIvYmxvZy9cIiArIGkuc2x1Z30gY2xhc3NOYW1lPVwiYW1pdEJ0blwiPlJlYWQgTW9yZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjYXJvdXNlbC1jb250cm9sLXByZXZcIiBocmVmPVwiI2Nhcm91c2VsRXhhbXBsZUZhZGVcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS1zbGlkZT1cInByZXZcIj48c3BhbiBjbGFzc05hbWU9XCJjYXJvdXNlbC1jb250cm9sLXByZXYtaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj48L2E+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNhcm91c2VsLWNvbnRyb2wtbmV4dFwiIGhyZWY9XCIjY2Fyb3VzZWxFeGFtcGxlRmFkZVwiIHJvbGU9XCJidXR0b25cIiBkYXRhLXNsaWRlPVwibmV4dFwiPjxzcGFuIGNsYXNzTmFtZT1cImNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPjwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmxvZ0Jhbm5lciIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIEJsb2dMaXN0KHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGJsb2dzIG10LTVcIj5cclxuICAgICAgICAgICAgICAgIHsgcHJvcHMuYmxvZ3MubWFwKChpKT0+e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTQgXCIga2V5PXtpLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtcIi9ibG9nL1wiICsgaS5zbHVnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbWcgc3JjPXtpLmNvdmVySW1nIH0vPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+e2kudGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhbWl0QnRuXCI+UmVhZCBNb3JlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmxvZ0xpc3QiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBQYXJhbGxheCgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJhbGxheCBtYi01XCI+XHJcbiAgICAgICAgICAgIDxoMz5XYW50IHRvICA8c3Bhbj4gcHVibGlzaCB5b3VyIGJsb2c8L3NwYW4+IHdpdGggdXM/PC9oMz5cclxuICAgICAgICAgICAgPGEgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI2V4YW1wbGVNb2RhbENlbnRlclwiIGNsYXNzTmFtZT1cImFtaXRCdG5cIj5Xcml0ZSBmb3IgdXM8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhcmFsbGF4IiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gU2lkZWJhcihwcm9wcykge1xyXG4gICAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnNvbGUubG9nKCdzZWFyY2gnLCBzZWFyY2gpXHJcbiAgICBjb25zdCBjaGFuZ2VUZXh0ID0gKGUpPT57XHJcbiAgICAgICAgc2V0U2VhcmNoKHNlYXJjaCA9PiBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTMgYmxvZ2JhclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgZmxleC1jZW50ZXItaFwiPlxyXG4gICAgICAgICAgICAgICAgPGgzPlNlYXJjaCBmb3IgQmxvZ3MgaGVyZTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaCBmb3JcIiBuYW1lPVwicXVlcnlcIiByZXF1aXJlZCBvbkNoYW5nZT17KGUpPT5jaGFuZ2VUZXh0KGUpfS8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJTdWJtaXRcIiBjbGFzc05hbWU9XCJhbWl0QnRuXCI+U2VhcmNoPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3JpZXMgbXQtNVwiPlxyXG4gICAgICAgICAgICAgICAgPGgzPlJlY2VudGx5IFB1Ymxpc2hlZDwvaDM+XHJcbiAgICAgICAgICAgICAgICA8dWw+e3Byb3BzLmJsb2dzLm1hcCgoaSxpbmRleCk9PiggPGxpIGtleT17aW5kZXh9PjxhIGhyZWY9e1wiL2Jsb2cvXCIraS5zbHVnfT57aS50aXRsZX08L2E+PC9saT4gKSl9PC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcmllcyBtdC01XCI+XHJcbiAgICAgICAgICAgICAgICA8aDM+Q2F0ZWdvcnkgTGlzdDwvaDM+XHJcbiAgICAgICAgICAgICAgICA8dWw+e3Byb3BzLmNhdGVnb3J5Lm1hcCgoaSxpbmRleCk9PiggPGxpIGtleT17aW5kZXh9PjxhIGhyZWY9e1wiL2NhdGVnb3J5L1wiK2kuc2x1Z30+e2kudGl0bGV9PC9hPjwvbGk+ICkpfTwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3JpZXMgbXQtNVwiPlxyXG4gICAgICAgICAgICAgICAgPGgzPlRhZyBMaXN0PC9oMz5cclxuICAgICAgICAgICAgICAgIDx1bD57cHJvcHMudGFnLm1hcCgoaSxpbmRleCk9PiggPGxpIGtleT17aW5kZXh9PjxhIGhyZWY9e1wiL3RhZy9cIitpLnNsdWd9PntpLnRpdGxlfTwvYT48L2xpPiApKX08L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhclxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBCbG9nTGlzdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Jsb2dzL0Jsb2dMaXN0J1xyXG5pbXBvcnQgQmxvZ0Jhbm5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Jsb2dzL0Jsb2dCYW5uZXInXHJcbmltcG9ydCBQYXJhbGxheCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Jsb2dzL1BhcmFsbGF4J1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Jsb2dzL1NpZGViYXInXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbmV4cG9ydCBjbGFzcyBibG9nIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpICAgIFxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGJsb2dzOiAgICAgICAgICBbXSxcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICAgICAgIFtdLFxyXG4gICAgICAgICAgICB0YWc6ICAgICAgICAgICAgW10sXHJcbiAgICAgICAgICAgIGNvdmVySW1nOiAgICAgICAnJyxcclxuICAgICAgICAgICAgc2luZ2xlOiAgICAgICAgIFtdXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgY29uc3QgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoXCIvXCIpLnBvcCgpO1xyXG4gICAgICAgIGF4aW9zLmdldCgnaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FwaS9ibG9nLz9zbHVnPScrdXJsKVxyXG4gICAgICAgICAgICAudGhlbiggcmVzPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmVzLmRhdGEnLCByZXMuZGF0YSlcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGJsb2dzOiAgICAgICAgICAgICAgcmVzLmRhdGEucmVzdWx0LmJsb2dzLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAgICAgICAgICAgcmVzLmRhdGEucmVzdWx0LmNhdGVnb3J5LFxyXG4gICAgICAgICAgICAgICAgICAgIHRhZzogICAgICAgICAgICAgICAgcmVzLmRhdGEucmVzdWx0LnRhZyxcclxuICAgICAgICAgICAgICAgICAgICBjb3ZlckltZzogICAgICAgICAgIHJlcy5kYXRhLnJlc3VsdC5zaW5nbGVbMF0uY292ZXJJbWcsXHJcbiAgICAgICAgICAgICAgICAgICAgc2luZ2xlOiAgICAgICAgICAgICByZXMuZGF0YS5yZXN1bHQuc2luZ2xlWzBdLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycj0+eyBjb25zb2xlLmxvZygnZXJyLnJlc3BvbnNlLmRhdGEnLCBlcnIucmVzcG9uc2UpIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGlzLnN0YXRlJywgdGhpcy5zdGF0ZSlcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17XCJodHRwOi8vMTI3LjAuMC4xOjgwMDAvbWVkaWEvXCIrdGhpcy5zdGF0ZS5jb3ZlckltZ30gYWx0PVwiXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT57dGhpcy5zdGF0ZS5zaW5nbGUudGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXktNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJoZWFkaW5nXCI+e3RoaXMuc3RhdGUuc2luZ2xlLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tOVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3RoaXMuc3RhdGUuc2luZ2xlLmJvZHl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHslIGluY2x1ZGUgJ2NvbW1lbnRzLmh0bWwnICV9ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNpZGViYXIgYmxvZ3M9e3RoaXMuc3RhdGUuYmxvZ3N9IGNhdGVnb3J5PXt0aGlzLnN0YXRlLmNhdGVnb3J5fSB0YWc9e3RoaXMuc3RhdGUudGFnfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGJsb2ciLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9