/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/application.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/channels sync recursive _channel\\.js$":
/*!****************************************************!*\
  !*** ./app/javascript/channels sync _channel\.js$ ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./timeline_channel.js": "./app/javascript/channels/timeline_channel.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./app/javascript/channels sync recursive _channel\\.js$";

/***/ }),

/***/ "./app/javascript/channels/consumer.js":
/*!*********************************************!*\
  !*** ./app/javascript/channels/consumer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rails_actioncable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rails/actioncable */ "./node_modules/@rails/actioncable/app/assets/javascripts/action_cable.js");
/* harmony import */ var _rails_actioncable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rails_actioncable__WEBPACK_IMPORTED_MODULE_0__);
// Action Cable provides the framework to deal with WebSockets in Rails.
// You can generate new channels where WebSocket features live using the `bin/rails generate channel` command.

/* harmony default export */ __webpack_exports__["default"] = (Object(_rails_actioncable__WEBPACK_IMPORTED_MODULE_0__["createConsumer"])());

/***/ }),

/***/ "./app/javascript/channels/index.js":
/*!******************************************!*\
  !*** ./app/javascript/channels/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.
var channels = __webpack_require__("./app/javascript/channels sync recursive _channel\\.js$");

channels.keys().forEach(channels);

/***/ }),

/***/ "./app/javascript/channels/timeline_channel.js":
/*!*****************************************************!*\
  !*** ./app/javascript/channels/timeline_channel.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _consumer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consumer */ "./app/javascript/channels/consumer.js");
/* harmony import */ var cable_ready__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cable_ready */ "./node_modules/cable_ready/javascript/index.js");
// import FetchCompileWasmTemplatePlugin from "webpack/lib/web/FetchCompileWasmTemplatePlugin";


_consumer__WEBPACK_IMPORTED_MODULE_0__["default"].subscriptions.create("TimelineChannel", {
  connected: function connected() {
    console.log("******** Subscription Created");
  },
  disconnected: function disconnected() {
    console.log("******** Subscription disconnected");
  },
  received: function received(data) {
    console.log("******** Received data:", data.operations);
    if (data.cableReady) cable_ready__WEBPACK_IMPORTED_MODULE_1__["default"].perform(data.operations);
  }
});

/***/ }),

/***/ "./app/javascript/controllers sync recursive _controller\\.js$":
/*!**********************************************************!*\
  !*** ./app/javascript/controllers sync _controller\.js$ ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./application_controller.js": "./app/javascript/controllers/application_controller.js",
	"./example_controller.js": "./app/javascript/controllers/example_controller.js",
	"./hello_controller.js": "./app/javascript/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./app/javascript/controllers sync recursive _controller\\.js$";

/***/ }),

/***/ "./app/javascript/controllers/application_controller.js":
/*!**************************************************************!*\
  !*** ./app/javascript/controllers/application_controller.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/dist/stimulus.js");
/* harmony import */ var stimulus_reflex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stimulus_reflex */ "./node_modules/stimulus_reflex/javascript/stimulus_reflex.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



/* This is your ApplicationController.
 * All StimulusReflex controllers should inherit from this class.
 *
 * Example:
 *
 *   import ApplicationController from './application_controller'
 *
 *   export default class extends ApplicationController { ... }
 *
 * Learn more at: https://docs.stimulusreflex.com
 */

var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      stimulus_reflex__WEBPACK_IMPORTED_MODULE_1__["default"].register(this);
    }
    /* Application-wide lifecycle methods
     *
     * Use these methods to handle lifecycle concerns for the entire application.
     * Using the lifecycle is optional, so feel free to delete these stubs if you don't need them.
     *
     * Arguments:
     *
     *   element - the element that triggered the reflex
     *             may be different than the Stimulus controller's this.element
     *
     *   reflex - the name of the reflex e.g. "Example#demo"
     *
     *   error/noop - the error message (for reflexError), otherwise null
     *
     *   reflexId - a UUID4 or developer-provided unique identifier for each Reflex
     */

  }, {
    key: "beforeReflex",
    value: function beforeReflex(element, reflex, noop, reflexId) {// document.body.classList.add('wait')
    }
  }, {
    key: "reflexSuccess",
    value: function reflexSuccess(element, reflex, noop, reflexId) {// show success message
    }
  }, {
    key: "reflexError",
    value: function reflexError(element, reflex, error, reflexId) {// show error message
    }
  }, {
    key: "reflexHalted",
    value: function reflexHalted(element, reflex, error, reflexId) {// handle aborted Reflex action
    }
  }, {
    key: "afterReflex",
    value: function afterReflex(element, reflex, noop, reflexId) {// document.body.classList.remove('wait')
    }
  }, {
    key: "finalizeReflex",
    value: function finalizeReflex(element, reflex, noop, reflexId) {// all operations have completed, animation etc is now safe
    }
  }]);

  return _default;
}(stimulus__WEBPACK_IMPORTED_MODULE_0__["Controller"]);



/***/ }),

/***/ "./app/javascript/controllers/example_controller.js":
/*!**********************************************************!*\
  !*** ./app/javascript/controllers/example_controller.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _application_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application_controller */ "./app/javascript/controllers/application_controller.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/* This is the custom StimulusReflex controller for the Example Reflex.
 * Learn more at: https://docs.stimulusreflex.com
 */

var _default = /*#__PURE__*/function (_ApplicationControlle) {
  _inherits(_default, _ApplicationControlle);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value:
    /*
     * Regular Stimulus lifecycle methods
     * Learn more at: https://stimulusjs.org/reference/lifecycle-callbacks
     *
     * If you intend to use this controller as a regular stimulus controller as well,
     * make sure any Stimulus lifecycle methods overridden in ApplicationController call super.
     *
     * Important:
     * By default, StimulusReflex overrides the -connect- method so make sure you
     * call super if you intend to do anything else when this controller connects.
    */
    function connect() {
      _get(_getPrototypeOf(_default.prototype), "connect", this).call(this); // add your code here, if applicable

    }
    /* Reflex specific lifecycle methods.
     *
     * For every method defined in your Reflex class, a matching set of lifecycle methods become available
     * in this javascript controller. These are optional, so feel free to delete these stubs if you don't
     * need them.
     *
     * Important:
     * Make sure to add data-controller="example" to your markup alongside
     * data-reflex="Example#dance" for the lifecycle methods to fire properly.
     *
     * Example:
     *
     *   <a href="#" data-reflex="click->Example#dance" data-controller="example">Dance!</a>
     *
     * Arguments:
     *
     *   element - the element that triggered the reflex
     *             may be different than the Stimulus controller's this.element
     *
     *   reflex - the name of the reflex e.g. "Example#dance"
     *
     *   error/noop - the error message (for reflexError), otherwise null
     *
     *   reflexId - a UUID4 or developer-provided unique identifier for each Reflex
     */
    // Assuming you create a "Example#dance" action in your Reflex class
    // you'll be able to use the following lifecycle methods:
    // beforeDance(element, reflex, noop, reflexId) {
    //  element.innerText = 'Putting dance shoes on...'
    // }
    // danceSuccess(element, reflex, noop, reflexId) {
    //   element.innerText = '\nDanced like no one was watching! Was someone watching?'
    // }
    // danceError(element, reflex, error, reflexId) {
    //   console.error('danceError', error);
    //   element.innerText = "\nCouldn\'t dance!"
    // }
    // afterDance(element, reflex, noop, reflexId) {
    //   element.innerText = '\nWhatever that was, it\'s over now.'
    // }
    // finalizeDance(element, reflex, noop, reflexId) {
    //   element.innerText = '\nNow, the cleanup can begin!'
    // }

  }]);

  return _default;
}(_application_controller__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./app/javascript/controllers/hello_controller.js":
/*!********************************************************!*\
  !*** ./app/javascript/controllers/hello_controller.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/dist/stimulus.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// Visit The Stimulus Handbook for more details 
// https://stimulusjs.org/handbook/introduction
// 
// This example controller works with specially annotated HTML like:
//
// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>


var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.outputTarget.textContent = 'Hello, Stimulus!';
    }
  }]);

  return _default;
}(stimulus__WEBPACK_IMPORTED_MODULE_0__["Controller"]);

_default.targets = ["output"];


/***/ }),

/***/ "./app/javascript/controllers/index.js":
/*!*********************************************!*\
  !*** ./app/javascript/controllers/index.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/dist/stimulus.js");
/* harmony import */ var stimulus_webpack_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stimulus/webpack-helpers */ "./node_modules/stimulus/webpack-helpers.js");
/* harmony import */ var stimulus_reflex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! stimulus_reflex */ "./node_modules/stimulus_reflex/javascript/stimulus_reflex.js");
/* harmony import */ var _channels_consumer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../channels/consumer */ "./app/javascript/channels/consumer.js");
/* harmony import */ var _controllers_application_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../controllers/application_controller */ "./app/javascript/controllers/application_controller.js");
// Load all the controllers within this directory and all subdirectories. 
// Controller files must be named *_controller.js.





var application = stimulus__WEBPACK_IMPORTED_MODULE_0__["Application"].start();

var context = __webpack_require__("./app/javascript/controllers sync recursive _controller\\.js$");

application.load(Object(stimulus_webpack_helpers__WEBPACK_IMPORTED_MODULE_1__["definitionsFromContext"])(context));
stimulus_reflex__WEBPACK_IMPORTED_MODULE_2__["default"].initialize(application, {
  consumer: _channels_consumer__WEBPACK_IMPORTED_MODULE_3__["default"],
  controller: _controllers_application_controller__WEBPACK_IMPORTED_MODULE_4__["default"],
  isolate: true
});
stimulus_reflex__WEBPACK_IMPORTED_MODULE_2__["default"].debug = "development" === 'development';

/***/ }),

/***/ "./app/javascript/packs/application.js":
/*!*********************************************!*\
  !*** ./app/javascript/packs/application.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rails_ujs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rails/ujs */ "./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js");
/* harmony import */ var _rails_ujs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rails_ujs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var turbolinks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! turbolinks */ "./node_modules/turbolinks/dist/turbolinks.js");
/* harmony import */ var turbolinks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(turbolinks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _rails_activestorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rails/activestorage */ "./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js");
/* harmony import */ var _rails_activestorage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rails_activestorage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var channels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! channels */ "./app/javascript/channels/index.js");
/* harmony import */ var channels__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(channels__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var controllers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! controllers */ "./app/javascript/controllers/index.js");
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.




_rails_ujs__WEBPACK_IMPORTED_MODULE_0___default.a.start();
turbolinks__WEBPACK_IMPORTED_MODULE_1___default.a.start();
_rails_activestorage__WEBPACK_IMPORTED_MODULE_2__["start"]();


/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/@hotwired/stimulus-webpack-helpers/dist/stimulus-webpack-helpers.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@hotwired/stimulus-webpack-helpers/dist/stimulus-webpack-helpers.js ***!
  \******************************************************************************************/
/*! exports provided: definitionForModuleAndIdentifier, definitionForModuleWithContextAndKey, definitionsFromContext, identifierForContextKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "definitionForModuleAndIdentifier", function() { return definitionForModuleAndIdentifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "definitionForModuleWithContextAndKey", function() { return definitionForModuleWithContextAndKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "definitionsFromContext", function() { return definitionsFromContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identifierForContextKey", function() { return identifierForContextKey; });
/*
Stimulus Webpack Helpers 1.0.0
Copyright © 2021 Basecamp, LLC
 */
function definitionsFromContext(context) {
  return context.keys().map(function (key) {
    return definitionForModuleWithContextAndKey(context, key);
  }).filter(function (value) {
    return value;
  });
}

function definitionForModuleWithContextAndKey(context, key) {
  var identifier = identifierForContextKey(key);

  if (identifier) {
    return definitionForModuleAndIdentifier(context(key), identifier);
  }
}

function definitionForModuleAndIdentifier(module, identifier) {
  var controllerConstructor = module.default;

  if (typeof controllerConstructor == "function") {
    return {
      identifier: identifier,
      controllerConstructor: controllerConstructor
    };
  }
}

function identifierForContextKey(key) {
  var logicalName = (key.match(/^(?:\.\/)?(.+)(?:[_-]controller\..+?)$/) || [])[1];

  if (logicalName) {
    return logicalName.replace(/_/g, "-").replace(/\//g, "--");
  }
}



/***/ }),

/***/ "./node_modules/@hotwired/stimulus/dist/stimulus.js":
/*!**********************************************************!*\
  !*** ./node_modules/@hotwired/stimulus/dist/stimulus.js ***!
  \**********************************************************/
/*! exports provided: Application, AttributeObserver, Context, Controller, ElementObserver, IndexedMultimap, Multimap, StringMapObserver, TokenListObserver, ValueListObserver, add, defaultSchema, del, fetch, prune */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Application", function() { return Application; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributeObserver", function() { return AttributeObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return Controller; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementObserver", function() { return ElementObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexedMultimap", function() { return IndexedMultimap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Multimap", function() { return Multimap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringMapObserver", function() { return StringMapObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenListObserver", function() { return TokenListObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueListObserver", function() { return ValueListObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return _add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultSchema", function() { return defaultSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "del", function() { return del; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch", function() { return fetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prune", function() { return prune; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Stimulus 3.0.1
Copyright © 2021 Basecamp, LLC
 */
var EventListener = /*#__PURE__*/function () {
  function EventListener(eventTarget, eventName, eventOptions) {
    _classCallCheck(this, EventListener);

    this.eventTarget = eventTarget;
    this.eventName = eventName;
    this.eventOptions = eventOptions;
    this.unorderedBindings = new Set();
  }

  _createClass(EventListener, [{
    key: "connect",
    value: function connect() {
      this.eventTarget.addEventListener(this.eventName, this, this.eventOptions);
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      this.eventTarget.removeEventListener(this.eventName, this, this.eventOptions);
    }
  }, {
    key: "bindingConnected",
    value: function bindingConnected(binding) {
      this.unorderedBindings.add(binding);
    }
  }, {
    key: "bindingDisconnected",
    value: function bindingDisconnected(binding) {
      this.unorderedBindings.delete(binding);
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(event) {
      var extendedEvent = extendEvent(event);

      var _iterator = _createForOfIteratorHelper(this.bindings),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var binding = _step.value;

          if (extendedEvent.immediatePropagationStopped) {
            break;
          } else {
            binding.handleEvent(extendedEvent);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "bindings",
    get: function get() {
      return Array.from(this.unorderedBindings).sort(function (left, right) {
        var leftIndex = left.index,
            rightIndex = right.index;
        return leftIndex < rightIndex ? -1 : leftIndex > rightIndex ? 1 : 0;
      });
    }
  }]);

  return EventListener;
}();

function extendEvent(event) {
  if ("immediatePropagationStopped" in event) {
    return event;
  } else {
    var _stopImmediatePropagation = event.stopImmediatePropagation;
    return Object.assign(event, {
      immediatePropagationStopped: false,
      stopImmediatePropagation: function stopImmediatePropagation() {
        this.immediatePropagationStopped = true;

        _stopImmediatePropagation.call(this);
      }
    });
  }
}

var Dispatcher = /*#__PURE__*/function () {
  function Dispatcher(application) {
    _classCallCheck(this, Dispatcher);

    this.application = application;
    this.eventListenerMaps = new Map();
    this.started = false;
  }

  _createClass(Dispatcher, [{
    key: "start",
    value: function start() {
      if (!this.started) {
        this.started = true;
        this.eventListeners.forEach(function (eventListener) {
          return eventListener.connect();
        });
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.started) {
        this.started = false;
        this.eventListeners.forEach(function (eventListener) {
          return eventListener.disconnect();
        });
      }
    }
  }, {
    key: "eventListeners",
    get: function get() {
      return Array.from(this.eventListenerMaps.values()).reduce(function (listeners, map) {
        return listeners.concat(Array.from(map.values()));
      }, []);
    }
  }, {
    key: "bindingConnected",
    value: function bindingConnected(binding) {
      this.fetchEventListenerForBinding(binding).bindingConnected(binding);
    }
  }, {
    key: "bindingDisconnected",
    value: function bindingDisconnected(binding) {
      this.fetchEventListenerForBinding(binding).bindingDisconnected(binding);
    }
  }, {
    key: "handleError",
    value: function handleError(error, message) {
      var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      this.application.handleError(error, "Error ".concat(message), detail);
    }
  }, {
    key: "fetchEventListenerForBinding",
    value: function fetchEventListenerForBinding(binding) {
      var eventTarget = binding.eventTarget,
          eventName = binding.eventName,
          eventOptions = binding.eventOptions;
      return this.fetchEventListener(eventTarget, eventName, eventOptions);
    }
  }, {
    key: "fetchEventListener",
    value: function fetchEventListener(eventTarget, eventName, eventOptions) {
      var eventListenerMap = this.fetchEventListenerMapForEventTarget(eventTarget);
      var cacheKey = this.cacheKey(eventName, eventOptions);
      var eventListener = eventListenerMap.get(cacheKey);

      if (!eventListener) {
        eventListener = this.createEventListener(eventTarget, eventName, eventOptions);
        eventListenerMap.set(cacheKey, eventListener);
      }

      return eventListener;
    }
  }, {
    key: "createEventListener",
    value: function createEventListener(eventTarget, eventName, eventOptions) {
      var eventListener = new EventListener(eventTarget, eventName, eventOptions);

      if (this.started) {
        eventListener.connect();
      }

      return eventListener;
    }
  }, {
    key: "fetchEventListenerMapForEventTarget",
    value: function fetchEventListenerMapForEventTarget(eventTarget) {
      var eventListenerMap = this.eventListenerMaps.get(eventTarget);

      if (!eventListenerMap) {
        eventListenerMap = new Map();
        this.eventListenerMaps.set(eventTarget, eventListenerMap);
      }

      return eventListenerMap;
    }
  }, {
    key: "cacheKey",
    value: function cacheKey(eventName, eventOptions) {
      var parts = [eventName];
      Object.keys(eventOptions).sort().forEach(function (key) {
        parts.push("".concat(eventOptions[key] ? "" : "!").concat(key));
      });
      return parts.join(":");
    }
  }]);

  return Dispatcher;
}();

var descriptorPattern = /^((.+?)(@(window|document))?->)?(.+?)(#([^:]+?))(:(.+))?$/;

function parseActionDescriptorString(descriptorString) {
  var source = descriptorString.trim();
  var matches = source.match(descriptorPattern) || [];
  return {
    eventTarget: parseEventTarget(matches[4]),
    eventName: matches[2],
    eventOptions: matches[9] ? parseEventOptions(matches[9]) : {},
    identifier: matches[5],
    methodName: matches[7]
  };
}

function parseEventTarget(eventTargetName) {
  if (eventTargetName == "window") {
    return window;
  } else if (eventTargetName == "document") {
    return document;
  }
}

function parseEventOptions(eventOptions) {
  return eventOptions.split(":").reduce(function (options, token) {
    return Object.assign(options, _defineProperty({}, token.replace(/^!/, ""), !/^!/.test(token)));
  }, {});
}

function stringifyEventTarget(eventTarget) {
  if (eventTarget == window) {
    return "window";
  } else if (eventTarget == document) {
    return "document";
  }
}

function camelize(value) {
  return value.replace(/(?:[_-])([a-z0-9])/g, function (_, char) {
    return char.toUpperCase();
  });
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function dasherize(value) {
  return value.replace(/([A-Z])/g, function (_, char) {
    return "-".concat(char.toLowerCase());
  });
}

function tokenize(value) {
  return value.match(/[^\s]+/g) || [];
}

var Action = /*#__PURE__*/function () {
  function Action(element, index, descriptor) {
    _classCallCheck(this, Action);

    this.element = element;
    this.index = index;
    this.eventTarget = descriptor.eventTarget || element;
    this.eventName = descriptor.eventName || getDefaultEventNameForElement(element) || error("missing event name");
    this.eventOptions = descriptor.eventOptions || {};
    this.identifier = descriptor.identifier || error("missing identifier");
    this.methodName = descriptor.methodName || error("missing method name");
  }

  _createClass(Action, [{
    key: "toString",
    value: function toString() {
      var eventNameSuffix = this.eventTargetName ? "@".concat(this.eventTargetName) : "";
      return "".concat(this.eventName).concat(eventNameSuffix, "->").concat(this.identifier, "#").concat(this.methodName);
    }
  }, {
    key: "params",
    get: function get() {
      if (this.eventTarget instanceof Element) {
        return this.getParamsFromEventTargetAttributes(this.eventTarget);
      } else {
        return {};
      }
    }
  }, {
    key: "getParamsFromEventTargetAttributes",
    value: function getParamsFromEventTargetAttributes(eventTarget) {
      var params = {};
      var pattern = new RegExp("^data-".concat(this.identifier, "-(.+)-param$"));
      var attributes = Array.from(eventTarget.attributes);
      attributes.forEach(function (_ref) {
        var name = _ref.name,
            value = _ref.value;
        var match = name.match(pattern);
        var key = match && match[1];

        if (key) {
          Object.assign(params, _defineProperty({}, camelize(key), typecast(value)));
        }
      });
      return params;
    }
  }, {
    key: "eventTargetName",
    get: function get() {
      return stringifyEventTarget(this.eventTarget);
    }
  }], [{
    key: "forToken",
    value: function forToken(token) {
      return new this(token.element, token.index, parseActionDescriptorString(token.content));
    }
  }]);

  return Action;
}();

var defaultEventNames = {
  "a": function a(e) {
    return "click";
  },
  "button": function button(e) {
    return "click";
  },
  "form": function form(e) {
    return "submit";
  },
  "details": function details(e) {
    return "toggle";
  },
  "input": function input(e) {
    return e.getAttribute("type") == "submit" ? "click" : "input";
  },
  "select": function select(e) {
    return "change";
  },
  "textarea": function textarea(e) {
    return "input";
  }
};

function getDefaultEventNameForElement(element) {
  var tagName = element.tagName.toLowerCase();

  if (tagName in defaultEventNames) {
    return defaultEventNames[tagName](element);
  }
}

function error(message) {
  throw new Error(message);
}

function typecast(value) {
  try {
    return JSON.parse(value);
  } catch (o_O) {
    return value;
  }
}

var Binding = /*#__PURE__*/function () {
  function Binding(context, action) {
    _classCallCheck(this, Binding);

    this.context = context;
    this.action = action;
  }

  _createClass(Binding, [{
    key: "index",
    get: function get() {
      return this.action.index;
    }
  }, {
    key: "eventTarget",
    get: function get() {
      return this.action.eventTarget;
    }
  }, {
    key: "eventOptions",
    get: function get() {
      return this.action.eventOptions;
    }
  }, {
    key: "identifier",
    get: function get() {
      return this.context.identifier;
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(event) {
      if (this.willBeInvokedByEvent(event)) {
        this.invokeWithEvent(event);
      }
    }
  }, {
    key: "eventName",
    get: function get() {
      return this.action.eventName;
    }
  }, {
    key: "method",
    get: function get() {
      var method = this.controller[this.methodName];

      if (typeof method == "function") {
        return method;
      }

      throw new Error("Action \"".concat(this.action, "\" references undefined method \"").concat(this.methodName, "\""));
    }
  }, {
    key: "invokeWithEvent",
    value: function invokeWithEvent(event) {
      var target = event.target,
          currentTarget = event.currentTarget;

      try {
        var params = this.action.params;
        var actionEvent = Object.assign(event, {
          params: params
        });
        this.method.call(this.controller, actionEvent);
        this.context.logDebugActivity(this.methodName, {
          event: event,
          target: target,
          currentTarget: currentTarget,
          action: this.methodName
        });
      } catch (error) {
        var identifier = this.identifier,
            controller = this.controller,
            element = this.element,
            index = this.index;
        var detail = {
          identifier: identifier,
          controller: controller,
          element: element,
          index: index,
          event: event
        };
        this.context.handleError(error, "invoking action \"".concat(this.action, "\""), detail);
      }
    }
  }, {
    key: "willBeInvokedByEvent",
    value: function willBeInvokedByEvent(event) {
      var eventTarget = event.target;

      if (this.element === eventTarget) {
        return true;
      } else if (eventTarget instanceof Element && this.element.contains(eventTarget)) {
        return this.scope.containsElement(eventTarget);
      } else {
        return this.scope.containsElement(this.action.element);
      }
    }
  }, {
    key: "controller",
    get: function get() {
      return this.context.controller;
    }
  }, {
    key: "methodName",
    get: function get() {
      return this.action.methodName;
    }
  }, {
    key: "element",
    get: function get() {
      return this.scope.element;
    }
  }, {
    key: "scope",
    get: function get() {
      return this.context.scope;
    }
  }]);

  return Binding;
}();

var ElementObserver = /*#__PURE__*/function () {
  function ElementObserver(element, delegate) {
    var _this = this;

    _classCallCheck(this, ElementObserver);

    this.mutationObserverInit = {
      attributes: true,
      childList: true,
      subtree: true
    };
    this.element = element;
    this.started = false;
    this.delegate = delegate;
    this.elements = new Set();
    this.mutationObserver = new MutationObserver(function (mutations) {
      return _this.processMutations(mutations);
    });
  }

  _createClass(ElementObserver, [{
    key: "start",
    value: function start() {
      if (!this.started) {
        this.started = true;
        this.mutationObserver.observe(this.element, this.mutationObserverInit);
        this.refresh();
      }
    }
  }, {
    key: "pause",
    value: function pause(callback) {
      if (this.started) {
        this.mutationObserver.disconnect();
        this.started = false;
      }

      callback();

      if (!this.started) {
        this.mutationObserver.observe(this.element, this.mutationObserverInit);
        this.started = true;
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.started) {
        this.mutationObserver.takeRecords();
        this.mutationObserver.disconnect();
        this.started = false;
      }
    }
  }, {
    key: "refresh",
    value: function refresh() {
      if (this.started) {
        var matches = new Set(this.matchElementsInTree());

        for (var _i = 0, _Array$from = Array.from(this.elements); _i < _Array$from.length; _i++) {
          var element = _Array$from[_i];

          if (!matches.has(element)) {
            this.removeElement(element);
          }
        }

        for (var _i2 = 0, _Array$from2 = Array.from(matches); _i2 < _Array$from2.length; _i2++) {
          var _element = _Array$from2[_i2];
          this.addElement(_element);
        }
      }
    }
  }, {
    key: "processMutations",
    value: function processMutations(mutations) {
      if (this.started) {
        var _iterator2 = _createForOfIteratorHelper(mutations),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var mutation = _step2.value;
            this.processMutation(mutation);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    }
  }, {
    key: "processMutation",
    value: function processMutation(mutation) {
      if (mutation.type == "attributes") {
        this.processAttributeChange(mutation.target, mutation.attributeName);
      } else if (mutation.type == "childList") {
        this.processRemovedNodes(mutation.removedNodes);
        this.processAddedNodes(mutation.addedNodes);
      }
    }
  }, {
    key: "processAttributeChange",
    value: function processAttributeChange(node, attributeName) {
      var element = node;

      if (this.elements.has(element)) {
        if (this.delegate.elementAttributeChanged && this.matchElement(element)) {
          this.delegate.elementAttributeChanged(element, attributeName);
        } else {
          this.removeElement(element);
        }
      } else if (this.matchElement(element)) {
        this.addElement(element);
      }
    }
  }, {
    key: "processRemovedNodes",
    value: function processRemovedNodes(nodes) {
      for (var _i3 = 0, _Array$from3 = Array.from(nodes); _i3 < _Array$from3.length; _i3++) {
        var node = _Array$from3[_i3];
        var element = this.elementFromNode(node);

        if (element) {
          this.processTree(element, this.removeElement);
        }
      }
    }
  }, {
    key: "processAddedNodes",
    value: function processAddedNodes(nodes) {
      for (var _i4 = 0, _Array$from4 = Array.from(nodes); _i4 < _Array$from4.length; _i4++) {
        var node = _Array$from4[_i4];
        var element = this.elementFromNode(node);

        if (element && this.elementIsActive(element)) {
          this.processTree(element, this.addElement);
        }
      }
    }
  }, {
    key: "matchElement",
    value: function matchElement(element) {
      return this.delegate.matchElement(element);
    }
  }, {
    key: "matchElementsInTree",
    value: function matchElementsInTree() {
      var tree = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.element;
      return this.delegate.matchElementsInTree(tree);
    }
  }, {
    key: "processTree",
    value: function processTree(tree, processor) {
      var _iterator3 = _createForOfIteratorHelper(this.matchElementsInTree(tree)),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var element = _step3.value;
          processor.call(this, element);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  }, {
    key: "elementFromNode",
    value: function elementFromNode(node) {
      if (node.nodeType == Node.ELEMENT_NODE) {
        return node;
      }
    }
  }, {
    key: "elementIsActive",
    value: function elementIsActive(element) {
      if (element.isConnected != this.element.isConnected) {
        return false;
      } else {
        return this.element.contains(element);
      }
    }
  }, {
    key: "addElement",
    value: function addElement(element) {
      if (!this.elements.has(element)) {
        if (this.elementIsActive(element)) {
          this.elements.add(element);

          if (this.delegate.elementMatched) {
            this.delegate.elementMatched(element);
          }
        }
      }
    }
  }, {
    key: "removeElement",
    value: function removeElement(element) {
      if (this.elements.has(element)) {
        this.elements.delete(element);

        if (this.delegate.elementUnmatched) {
          this.delegate.elementUnmatched(element);
        }
      }
    }
  }]);

  return ElementObserver;
}();

var AttributeObserver = /*#__PURE__*/function () {
  function AttributeObserver(element, attributeName, delegate) {
    _classCallCheck(this, AttributeObserver);

    this.attributeName = attributeName;
    this.delegate = delegate;
    this.elementObserver = new ElementObserver(element, this);
  }

  _createClass(AttributeObserver, [{
    key: "element",
    get: function get() {
      return this.elementObserver.element;
    }
  }, {
    key: "selector",
    get: function get() {
      return "[".concat(this.attributeName, "]");
    }
  }, {
    key: "start",
    value: function start() {
      this.elementObserver.start();
    }
  }, {
    key: "pause",
    value: function pause(callback) {
      this.elementObserver.pause(callback);
    }
  }, {
    key: "stop",
    value: function stop() {
      this.elementObserver.stop();
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.elementObserver.refresh();
    }
  }, {
    key: "started",
    get: function get() {
      return this.elementObserver.started;
    }
  }, {
    key: "matchElement",
    value: function matchElement(element) {
      return element.hasAttribute(this.attributeName);
    }
  }, {
    key: "matchElementsInTree",
    value: function matchElementsInTree(tree) {
      var match = this.matchElement(tree) ? [tree] : [];
      var matches = Array.from(tree.querySelectorAll(this.selector));
      return match.concat(matches);
    }
  }, {
    key: "elementMatched",
    value: function elementMatched(element) {
      if (this.delegate.elementMatchedAttribute) {
        this.delegate.elementMatchedAttribute(element, this.attributeName);
      }
    }
  }, {
    key: "elementUnmatched",
    value: function elementUnmatched(element) {
      if (this.delegate.elementUnmatchedAttribute) {
        this.delegate.elementUnmatchedAttribute(element, this.attributeName);
      }
    }
  }, {
    key: "elementAttributeChanged",
    value: function elementAttributeChanged(element, attributeName) {
      if (this.delegate.elementAttributeValueChanged && this.attributeName == attributeName) {
        this.delegate.elementAttributeValueChanged(element, attributeName);
      }
    }
  }]);

  return AttributeObserver;
}();

var StringMapObserver = /*#__PURE__*/function () {
  function StringMapObserver(element, delegate) {
    var _this2 = this;

    _classCallCheck(this, StringMapObserver);

    this.element = element;
    this.delegate = delegate;
    this.started = false;
    this.stringMap = new Map();
    this.mutationObserver = new MutationObserver(function (mutations) {
      return _this2.processMutations(mutations);
    });
  }

  _createClass(StringMapObserver, [{
    key: "start",
    value: function start() {
      if (!this.started) {
        this.started = true;
        this.mutationObserver.observe(this.element, {
          attributes: true,
          attributeOldValue: true
        });
        this.refresh();
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.started) {
        this.mutationObserver.takeRecords();
        this.mutationObserver.disconnect();
        this.started = false;
      }
    }
  }, {
    key: "refresh",
    value: function refresh() {
      if (this.started) {
        var _iterator4 = _createForOfIteratorHelper(this.knownAttributeNames),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var attributeName = _step4.value;
            this.refreshAttribute(attributeName, null);
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }
    }
  }, {
    key: "processMutations",
    value: function processMutations(mutations) {
      if (this.started) {
        var _iterator5 = _createForOfIteratorHelper(mutations),
            _step5;

        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var mutation = _step5.value;
            this.processMutation(mutation);
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      }
    }
  }, {
    key: "processMutation",
    value: function processMutation(mutation) {
      var attributeName = mutation.attributeName;

      if (attributeName) {
        this.refreshAttribute(attributeName, mutation.oldValue);
      }
    }
  }, {
    key: "refreshAttribute",
    value: function refreshAttribute(attributeName, oldValue) {
      var key = this.delegate.getStringMapKeyForAttribute(attributeName);

      if (key != null) {
        if (!this.stringMap.has(attributeName)) {
          this.stringMapKeyAdded(key, attributeName);
        }

        var value = this.element.getAttribute(attributeName);

        if (this.stringMap.get(attributeName) != value) {
          this.stringMapValueChanged(value, key, oldValue);
        }

        if (value == null) {
          var _oldValue = this.stringMap.get(attributeName);

          this.stringMap.delete(attributeName);
          if (_oldValue) this.stringMapKeyRemoved(key, attributeName, _oldValue);
        } else {
          this.stringMap.set(attributeName, value);
        }
      }
    }
  }, {
    key: "stringMapKeyAdded",
    value: function stringMapKeyAdded(key, attributeName) {
      if (this.delegate.stringMapKeyAdded) {
        this.delegate.stringMapKeyAdded(key, attributeName);
      }
    }
  }, {
    key: "stringMapValueChanged",
    value: function stringMapValueChanged(value, key, oldValue) {
      if (this.delegate.stringMapValueChanged) {
        this.delegate.stringMapValueChanged(value, key, oldValue);
      }
    }
  }, {
    key: "stringMapKeyRemoved",
    value: function stringMapKeyRemoved(key, attributeName, oldValue) {
      if (this.delegate.stringMapKeyRemoved) {
        this.delegate.stringMapKeyRemoved(key, attributeName, oldValue);
      }
    }
  }, {
    key: "knownAttributeNames",
    get: function get() {
      return Array.from(new Set(this.currentAttributeNames.concat(this.recordedAttributeNames)));
    }
  }, {
    key: "currentAttributeNames",
    get: function get() {
      return Array.from(this.element.attributes).map(function (attribute) {
        return attribute.name;
      });
    }
  }, {
    key: "recordedAttributeNames",
    get: function get() {
      return Array.from(this.stringMap.keys());
    }
  }]);

  return StringMapObserver;
}();

function _add(map, key, value) {
  fetch(map, key).add(value);
}

function del(map, key, value) {
  fetch(map, key).delete(value);
  prune(map, key);
}

function fetch(map, key) {
  var values = map.get(key);

  if (!values) {
    values = new Set();
    map.set(key, values);
  }

  return values;
}

function prune(map, key) {
  var values = map.get(key);

  if (values != null && values.size == 0) {
    map.delete(key);
  }
}

var Multimap = /*#__PURE__*/function () {
  function Multimap() {
    _classCallCheck(this, Multimap);

    this.valuesByKey = new Map();
  }

  _createClass(Multimap, [{
    key: "keys",
    get: function get() {
      return Array.from(this.valuesByKey.keys());
    }
  }, {
    key: "values",
    get: function get() {
      var sets = Array.from(this.valuesByKey.values());
      return sets.reduce(function (values, set) {
        return values.concat(Array.from(set));
      }, []);
    }
  }, {
    key: "size",
    get: function get() {
      var sets = Array.from(this.valuesByKey.values());
      return sets.reduce(function (size, set) {
        return size + set.size;
      }, 0);
    }
  }, {
    key: "add",
    value: function add(key, value) {
      _add(this.valuesByKey, key, value);
    }
  }, {
    key: "delete",
    value: function _delete(key, value) {
      del(this.valuesByKey, key, value);
    }
  }, {
    key: "has",
    value: function has(key, value) {
      var values = this.valuesByKey.get(key);
      return values != null && values.has(value);
    }
  }, {
    key: "hasKey",
    value: function hasKey(key) {
      return this.valuesByKey.has(key);
    }
  }, {
    key: "hasValue",
    value: function hasValue(value) {
      var sets = Array.from(this.valuesByKey.values());
      return sets.some(function (set) {
        return set.has(value);
      });
    }
  }, {
    key: "getValuesForKey",
    value: function getValuesForKey(key) {
      var values = this.valuesByKey.get(key);
      return values ? Array.from(values) : [];
    }
  }, {
    key: "getKeysForValue",
    value: function getKeysForValue(value) {
      return Array.from(this.valuesByKey).filter(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
            key = _ref3[0],
            values = _ref3[1];

        return values.has(value);
      }).map(function (_ref4) {
        var _ref5 = _slicedToArray(_ref4, 2),
            key = _ref5[0],
            values = _ref5[1];

        return key;
      });
    }
  }]);

  return Multimap;
}();

var IndexedMultimap = /*#__PURE__*/function (_Multimap) {
  _inherits(IndexedMultimap, _Multimap);

  var _super = _createSuper(IndexedMultimap);

  function IndexedMultimap() {
    var _this3;

    _classCallCheck(this, IndexedMultimap);

    _this3 = _super.call(this);
    _this3.keysByValue = new Map();
    return _this3;
  }

  _createClass(IndexedMultimap, [{
    key: "values",
    get: function get() {
      return Array.from(this.keysByValue.keys());
    }
  }, {
    key: "add",
    value: function add(key, value) {
      _get(_getPrototypeOf(IndexedMultimap.prototype), "add", this).call(this, key, value);

      _add(this.keysByValue, value, key);
    }
  }, {
    key: "delete",
    value: function _delete(key, value) {
      _get(_getPrototypeOf(IndexedMultimap.prototype), "delete", this).call(this, key, value);

      del(this.keysByValue, value, key);
    }
  }, {
    key: "hasValue",
    value: function hasValue(value) {
      return this.keysByValue.has(value);
    }
  }, {
    key: "getKeysForValue",
    value: function getKeysForValue(value) {
      var set = this.keysByValue.get(value);
      return set ? Array.from(set) : [];
    }
  }]);

  return IndexedMultimap;
}(Multimap);

var TokenListObserver = /*#__PURE__*/function () {
  function TokenListObserver(element, attributeName, delegate) {
    _classCallCheck(this, TokenListObserver);

    this.attributeObserver = new AttributeObserver(element, attributeName, this);
    this.delegate = delegate;
    this.tokensByElement = new Multimap();
  }

  _createClass(TokenListObserver, [{
    key: "started",
    get: function get() {
      return this.attributeObserver.started;
    }
  }, {
    key: "start",
    value: function start() {
      this.attributeObserver.start();
    }
  }, {
    key: "pause",
    value: function pause(callback) {
      this.attributeObserver.pause(callback);
    }
  }, {
    key: "stop",
    value: function stop() {
      this.attributeObserver.stop();
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.attributeObserver.refresh();
    }
  }, {
    key: "element",
    get: function get() {
      return this.attributeObserver.element;
    }
  }, {
    key: "attributeName",
    get: function get() {
      return this.attributeObserver.attributeName;
    }
  }, {
    key: "elementMatchedAttribute",
    value: function elementMatchedAttribute(element) {
      this.tokensMatched(this.readTokensForElement(element));
    }
  }, {
    key: "elementAttributeValueChanged",
    value: function elementAttributeValueChanged(element) {
      var _this$refreshTokensFo = this.refreshTokensForElement(element),
          _this$refreshTokensFo2 = _slicedToArray(_this$refreshTokensFo, 2),
          unmatchedTokens = _this$refreshTokensFo2[0],
          matchedTokens = _this$refreshTokensFo2[1];

      this.tokensUnmatched(unmatchedTokens);
      this.tokensMatched(matchedTokens);
    }
  }, {
    key: "elementUnmatchedAttribute",
    value: function elementUnmatchedAttribute(element) {
      this.tokensUnmatched(this.tokensByElement.getValuesForKey(element));
    }
  }, {
    key: "tokensMatched",
    value: function tokensMatched(tokens) {
      var _this4 = this;

      tokens.forEach(function (token) {
        return _this4.tokenMatched(token);
      });
    }
  }, {
    key: "tokensUnmatched",
    value: function tokensUnmatched(tokens) {
      var _this5 = this;

      tokens.forEach(function (token) {
        return _this5.tokenUnmatched(token);
      });
    }
  }, {
    key: "tokenMatched",
    value: function tokenMatched(token) {
      this.delegate.tokenMatched(token);
      this.tokensByElement.add(token.element, token);
    }
  }, {
    key: "tokenUnmatched",
    value: function tokenUnmatched(token) {
      this.delegate.tokenUnmatched(token);
      this.tokensByElement.delete(token.element, token);
    }
  }, {
    key: "refreshTokensForElement",
    value: function refreshTokensForElement(element) {
      var previousTokens = this.tokensByElement.getValuesForKey(element);
      var currentTokens = this.readTokensForElement(element);
      var firstDifferingIndex = zip(previousTokens, currentTokens).findIndex(function (_ref6) {
        var _ref7 = _slicedToArray(_ref6, 2),
            previousToken = _ref7[0],
            currentToken = _ref7[1];

        return !tokensAreEqual(previousToken, currentToken);
      });

      if (firstDifferingIndex == -1) {
        return [[], []];
      } else {
        return [previousTokens.slice(firstDifferingIndex), currentTokens.slice(firstDifferingIndex)];
      }
    }
  }, {
    key: "readTokensForElement",
    value: function readTokensForElement(element) {
      var attributeName = this.attributeName;
      var tokenString = element.getAttribute(attributeName) || "";
      return parseTokenString(tokenString, element, attributeName);
    }
  }]);

  return TokenListObserver;
}();

function parseTokenString(tokenString, element, attributeName) {
  return tokenString.trim().split(/\s+/).filter(function (content) {
    return content.length;
  }).map(function (content, index) {
    return {
      element: element,
      attributeName: attributeName,
      content: content,
      index: index
    };
  });
}

function zip(left, right) {
  var length = Math.max(left.length, right.length);
  return Array.from({
    length: length
  }, function (_, index) {
    return [left[index], right[index]];
  });
}

function tokensAreEqual(left, right) {
  return left && right && left.index == right.index && left.content == right.content;
}

var ValueListObserver = /*#__PURE__*/function () {
  function ValueListObserver(element, attributeName, delegate) {
    _classCallCheck(this, ValueListObserver);

    this.tokenListObserver = new TokenListObserver(element, attributeName, this);
    this.delegate = delegate;
    this.parseResultsByToken = new WeakMap();
    this.valuesByTokenByElement = new WeakMap();
  }

  _createClass(ValueListObserver, [{
    key: "started",
    get: function get() {
      return this.tokenListObserver.started;
    }
  }, {
    key: "start",
    value: function start() {
      this.tokenListObserver.start();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.tokenListObserver.stop();
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.tokenListObserver.refresh();
    }
  }, {
    key: "element",
    get: function get() {
      return this.tokenListObserver.element;
    }
  }, {
    key: "attributeName",
    get: function get() {
      return this.tokenListObserver.attributeName;
    }
  }, {
    key: "tokenMatched",
    value: function tokenMatched(token) {
      var element = token.element;

      var _this$fetchParseResul = this.fetchParseResultForToken(token),
          value = _this$fetchParseResul.value;

      if (value) {
        this.fetchValuesByTokenForElement(element).set(token, value);
        this.delegate.elementMatchedValue(element, value);
      }
    }
  }, {
    key: "tokenUnmatched",
    value: function tokenUnmatched(token) {
      var element = token.element;

      var _this$fetchParseResul2 = this.fetchParseResultForToken(token),
          value = _this$fetchParseResul2.value;

      if (value) {
        this.fetchValuesByTokenForElement(element).delete(token);
        this.delegate.elementUnmatchedValue(element, value);
      }
    }
  }, {
    key: "fetchParseResultForToken",
    value: function fetchParseResultForToken(token) {
      var parseResult = this.parseResultsByToken.get(token);

      if (!parseResult) {
        parseResult = this.parseToken(token);
        this.parseResultsByToken.set(token, parseResult);
      }

      return parseResult;
    }
  }, {
    key: "fetchValuesByTokenForElement",
    value: function fetchValuesByTokenForElement(element) {
      var valuesByToken = this.valuesByTokenByElement.get(element);

      if (!valuesByToken) {
        valuesByToken = new Map();
        this.valuesByTokenByElement.set(element, valuesByToken);
      }

      return valuesByToken;
    }
  }, {
    key: "parseToken",
    value: function parseToken(token) {
      try {
        var value = this.delegate.parseValueForToken(token);
        return {
          value: value
        };
      } catch (error) {
        return {
          error: error
        };
      }
    }
  }]);

  return ValueListObserver;
}();

var BindingObserver = /*#__PURE__*/function () {
  function BindingObserver(context, delegate) {
    _classCallCheck(this, BindingObserver);

    this.context = context;
    this.delegate = delegate;
    this.bindingsByAction = new Map();
  }

  _createClass(BindingObserver, [{
    key: "start",
    value: function start() {
      if (!this.valueListObserver) {
        this.valueListObserver = new ValueListObserver(this.element, this.actionAttribute, this);
        this.valueListObserver.start();
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.valueListObserver) {
        this.valueListObserver.stop();
        delete this.valueListObserver;
        this.disconnectAllActions();
      }
    }
  }, {
    key: "element",
    get: function get() {
      return this.context.element;
    }
  }, {
    key: "identifier",
    get: function get() {
      return this.context.identifier;
    }
  }, {
    key: "actionAttribute",
    get: function get() {
      return this.schema.actionAttribute;
    }
  }, {
    key: "schema",
    get: function get() {
      return this.context.schema;
    }
  }, {
    key: "bindings",
    get: function get() {
      return Array.from(this.bindingsByAction.values());
    }
  }, {
    key: "connectAction",
    value: function connectAction(action) {
      var binding = new Binding(this.context, action);
      this.bindingsByAction.set(action, binding);
      this.delegate.bindingConnected(binding);
    }
  }, {
    key: "disconnectAction",
    value: function disconnectAction(action) {
      var binding = this.bindingsByAction.get(action);

      if (binding) {
        this.bindingsByAction.delete(action);
        this.delegate.bindingDisconnected(binding);
      }
    }
  }, {
    key: "disconnectAllActions",
    value: function disconnectAllActions() {
      var _this6 = this;

      this.bindings.forEach(function (binding) {
        return _this6.delegate.bindingDisconnected(binding);
      });
      this.bindingsByAction.clear();
    }
  }, {
    key: "parseValueForToken",
    value: function parseValueForToken(token) {
      var action = Action.forToken(token);

      if (action.identifier == this.identifier) {
        return action;
      }
    }
  }, {
    key: "elementMatchedValue",
    value: function elementMatchedValue(element, action) {
      this.connectAction(action);
    }
  }, {
    key: "elementUnmatchedValue",
    value: function elementUnmatchedValue(element, action) {
      this.disconnectAction(action);
    }
  }]);

  return BindingObserver;
}();

var ValueObserver = /*#__PURE__*/function () {
  function ValueObserver(context, receiver) {
    _classCallCheck(this, ValueObserver);

    this.context = context;
    this.receiver = receiver;
    this.stringMapObserver = new StringMapObserver(this.element, this);
    this.valueDescriptorMap = this.controller.valueDescriptorMap;
    this.invokeChangedCallbacksForDefaultValues();
  }

  _createClass(ValueObserver, [{
    key: "start",
    value: function start() {
      this.stringMapObserver.start();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.stringMapObserver.stop();
    }
  }, {
    key: "element",
    get: function get() {
      return this.context.element;
    }
  }, {
    key: "controller",
    get: function get() {
      return this.context.controller;
    }
  }, {
    key: "getStringMapKeyForAttribute",
    value: function getStringMapKeyForAttribute(attributeName) {
      if (attributeName in this.valueDescriptorMap) {
        return this.valueDescriptorMap[attributeName].name;
      }
    }
  }, {
    key: "stringMapKeyAdded",
    value: function stringMapKeyAdded(key, attributeName) {
      var descriptor = this.valueDescriptorMap[attributeName];

      if (!this.hasValue(key)) {
        this.invokeChangedCallback(key, descriptor.writer(this.receiver[key]), descriptor.writer(descriptor.defaultValue));
      }
    }
  }, {
    key: "stringMapValueChanged",
    value: function stringMapValueChanged(value, name, oldValue) {
      var descriptor = this.valueDescriptorNameMap[name];
      if (value === null) return;

      if (oldValue === null) {
        oldValue = descriptor.writer(descriptor.defaultValue);
      }

      this.invokeChangedCallback(name, value, oldValue);
    }
  }, {
    key: "stringMapKeyRemoved",
    value: function stringMapKeyRemoved(key, attributeName, oldValue) {
      var descriptor = this.valueDescriptorNameMap[key];

      if (this.hasValue(key)) {
        this.invokeChangedCallback(key, descriptor.writer(this.receiver[key]), oldValue);
      } else {
        this.invokeChangedCallback(key, descriptor.writer(descriptor.defaultValue), oldValue);
      }
    }
  }, {
    key: "invokeChangedCallbacksForDefaultValues",
    value: function invokeChangedCallbacksForDefaultValues() {
      var _iterator6 = _createForOfIteratorHelper(this.valueDescriptors),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var _ref9 = _step6.value;
          var key = _ref9.key;
          var name = _ref9.name;
          var defaultValue = _ref9.defaultValue;
          var writer = _ref9.writer;

          if (defaultValue != undefined && !this.controller.data.has(key)) {
            this.invokeChangedCallback(name, writer(defaultValue), undefined);
          }
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
    }
  }, {
    key: "invokeChangedCallback",
    value: function invokeChangedCallback(name, rawValue, rawOldValue) {
      var changedMethodName = "".concat(name, "Changed");
      var changedMethod = this.receiver[changedMethodName];

      if (typeof changedMethod == "function") {
        var descriptor = this.valueDescriptorNameMap[name];
        var value = descriptor.reader(rawValue);
        var oldValue = rawOldValue;

        if (rawOldValue) {
          oldValue = descriptor.reader(rawOldValue);
        }

        changedMethod.call(this.receiver, value, oldValue);
      }
    }
  }, {
    key: "valueDescriptors",
    get: function get() {
      var valueDescriptorMap = this.valueDescriptorMap;
      return Object.keys(valueDescriptorMap).map(function (key) {
        return valueDescriptorMap[key];
      });
    }
  }, {
    key: "valueDescriptorNameMap",
    get: function get() {
      var _this7 = this;

      var descriptors = {};
      Object.keys(this.valueDescriptorMap).forEach(function (key) {
        var descriptor = _this7.valueDescriptorMap[key];
        descriptors[descriptor.name] = descriptor;
      });
      return descriptors;
    }
  }, {
    key: "hasValue",
    value: function hasValue(attributeName) {
      var descriptor = this.valueDescriptorNameMap[attributeName];
      var hasMethodName = "has".concat(capitalize(descriptor.name));
      return this.receiver[hasMethodName];
    }
  }]);

  return ValueObserver;
}();

var TargetObserver = /*#__PURE__*/function () {
  function TargetObserver(context, delegate) {
    _classCallCheck(this, TargetObserver);

    this.context = context;
    this.delegate = delegate;
    this.targetsByName = new Multimap();
  }

  _createClass(TargetObserver, [{
    key: "start",
    value: function start() {
      if (!this.tokenListObserver) {
        this.tokenListObserver = new TokenListObserver(this.element, this.attributeName, this);
        this.tokenListObserver.start();
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.tokenListObserver) {
        this.disconnectAllTargets();
        this.tokenListObserver.stop();
        delete this.tokenListObserver;
      }
    }
  }, {
    key: "tokenMatched",
    value: function tokenMatched(_ref10) {
      var element = _ref10.element,
          name = _ref10.content;

      if (this.scope.containsElement(element)) {
        this.connectTarget(element, name);
      }
    }
  }, {
    key: "tokenUnmatched",
    value: function tokenUnmatched(_ref11) {
      var element = _ref11.element,
          name = _ref11.content;
      this.disconnectTarget(element, name);
    }
  }, {
    key: "connectTarget",
    value: function connectTarget(element, name) {
      var _this8 = this;

      var _a;

      if (!this.targetsByName.has(name, element)) {
        this.targetsByName.add(name, element);
        (_a = this.tokenListObserver) === null || _a === void 0 ? void 0 : _a.pause(function () {
          return _this8.delegate.targetConnected(element, name);
        });
      }
    }
  }, {
    key: "disconnectTarget",
    value: function disconnectTarget(element, name) {
      var _this9 = this;

      var _a;

      if (this.targetsByName.has(name, element)) {
        this.targetsByName.delete(name, element);
        (_a = this.tokenListObserver) === null || _a === void 0 ? void 0 : _a.pause(function () {
          return _this9.delegate.targetDisconnected(element, name);
        });
      }
    }
  }, {
    key: "disconnectAllTargets",
    value: function disconnectAllTargets() {
      var _iterator7 = _createForOfIteratorHelper(this.targetsByName.keys),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var name = _step7.value;

          var _iterator8 = _createForOfIteratorHelper(this.targetsByName.getValuesForKey(name)),
              _step8;

          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              var element = _step8.value;
              this.disconnectTarget(element, name);
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
    }
  }, {
    key: "attributeName",
    get: function get() {
      return "data-".concat(this.context.identifier, "-target");
    }
  }, {
    key: "element",
    get: function get() {
      return this.context.element;
    }
  }, {
    key: "scope",
    get: function get() {
      return this.context.scope;
    }
  }]);

  return TargetObserver;
}();

var Context = /*#__PURE__*/function () {
  function Context(module, scope) {
    var _this10 = this;

    _classCallCheck(this, Context);

    this.logDebugActivity = function (functionName) {
      var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var identifier = _this10.identifier,
          controller = _this10.controller,
          element = _this10.element;
      detail = Object.assign({
        identifier: identifier,
        controller: controller,
        element: element
      }, detail);

      _this10.application.logDebugActivity(_this10.identifier, functionName, detail);
    };

    this.module = module;
    this.scope = scope;
    this.controller = new module.controllerConstructor(this);
    this.bindingObserver = new BindingObserver(this, this.dispatcher);
    this.valueObserver = new ValueObserver(this, this.controller);
    this.targetObserver = new TargetObserver(this, this);

    try {
      this.controller.initialize();
      this.logDebugActivity("initialize");
    } catch (error) {
      this.handleError(error, "initializing controller");
    }
  }

  _createClass(Context, [{
    key: "connect",
    value: function connect() {
      this.bindingObserver.start();
      this.valueObserver.start();
      this.targetObserver.start();

      try {
        this.controller.connect();
        this.logDebugActivity("connect");
      } catch (error) {
        this.handleError(error, "connecting controller");
      }
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      try {
        this.controller.disconnect();
        this.logDebugActivity("disconnect");
      } catch (error) {
        this.handleError(error, "disconnecting controller");
      }

      this.targetObserver.stop();
      this.valueObserver.stop();
      this.bindingObserver.stop();
    }
  }, {
    key: "application",
    get: function get() {
      return this.module.application;
    }
  }, {
    key: "identifier",
    get: function get() {
      return this.module.identifier;
    }
  }, {
    key: "schema",
    get: function get() {
      return this.application.schema;
    }
  }, {
    key: "dispatcher",
    get: function get() {
      return this.application.dispatcher;
    }
  }, {
    key: "element",
    get: function get() {
      return this.scope.element;
    }
  }, {
    key: "parentElement",
    get: function get() {
      return this.element.parentElement;
    }
  }, {
    key: "handleError",
    value: function handleError(error, message) {
      var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var identifier = this.identifier,
          controller = this.controller,
          element = this.element;
      detail = Object.assign({
        identifier: identifier,
        controller: controller,
        element: element
      }, detail);
      this.application.handleError(error, "Error ".concat(message), detail);
    }
  }, {
    key: "targetConnected",
    value: function targetConnected(element, name) {
      this.invokeControllerMethod("".concat(name, "TargetConnected"), element);
    }
  }, {
    key: "targetDisconnected",
    value: function targetDisconnected(element, name) {
      this.invokeControllerMethod("".concat(name, "TargetDisconnected"), element);
    }
  }, {
    key: "invokeControllerMethod",
    value: function invokeControllerMethod(methodName) {
      var controller = this.controller;

      if (typeof controller[methodName] == "function") {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        controller[methodName].apply(controller, args);
      }
    }
  }]);

  return Context;
}();

function readInheritableStaticArrayValues(constructor, propertyName) {
  var ancestors = getAncestorsForConstructor(constructor);
  return Array.from(ancestors.reduce(function (values, constructor) {
    getOwnStaticArrayValues(constructor, propertyName).forEach(function (name) {
      return values.add(name);
    });
    return values;
  }, new Set()));
}

function readInheritableStaticObjectPairs(constructor, propertyName) {
  var ancestors = getAncestorsForConstructor(constructor);
  return ancestors.reduce(function (pairs, constructor) {
    pairs.push.apply(pairs, _toConsumableArray(getOwnStaticObjectPairs(constructor, propertyName)));
    return pairs;
  }, []);
}

function getAncestorsForConstructor(constructor) {
  var ancestors = [];

  while (constructor) {
    ancestors.push(constructor);
    constructor = Object.getPrototypeOf(constructor);
  }

  return ancestors.reverse();
}

function getOwnStaticArrayValues(constructor, propertyName) {
  var definition = constructor[propertyName];
  return Array.isArray(definition) ? definition : [];
}

function getOwnStaticObjectPairs(constructor, propertyName) {
  var definition = constructor[propertyName];
  return definition ? Object.keys(definition).map(function (key) {
    return [key, definition[key]];
  }) : [];
}

function bless(constructor) {
  return shadow(constructor, getBlessedProperties(constructor));
}

function shadow(constructor, properties) {
  var shadowConstructor = extend(constructor);
  var shadowProperties = getShadowProperties(constructor.prototype, properties);
  Object.defineProperties(shadowConstructor.prototype, shadowProperties);
  return shadowConstructor;
}

function getBlessedProperties(constructor) {
  var blessings = readInheritableStaticArrayValues(constructor, "blessings");
  return blessings.reduce(function (blessedProperties, blessing) {
    var properties = blessing(constructor);

    for (var key in properties) {
      var descriptor = blessedProperties[key] || {};
      blessedProperties[key] = Object.assign(descriptor, properties[key]);
    }

    return blessedProperties;
  }, {});
}

function getShadowProperties(prototype, properties) {
  return getOwnKeys(properties).reduce(function (shadowProperties, key) {
    var descriptor = getShadowedDescriptor(prototype, properties, key);

    if (descriptor) {
      Object.assign(shadowProperties, _defineProperty({}, key, descriptor));
    }

    return shadowProperties;
  }, {});
}

function getShadowedDescriptor(prototype, properties, key) {
  var shadowingDescriptor = Object.getOwnPropertyDescriptor(prototype, key);
  var shadowedByValue = shadowingDescriptor && "value" in shadowingDescriptor;

  if (!shadowedByValue) {
    var descriptor = Object.getOwnPropertyDescriptor(properties, key).value;

    if (shadowingDescriptor) {
      descriptor.get = shadowingDescriptor.get || descriptor.get;
      descriptor.set = shadowingDescriptor.set || descriptor.set;
    }

    return descriptor;
  }
}

var getOwnKeys = function () {
  if (typeof Object.getOwnPropertySymbols == "function") {
    return function (object) {
      return [].concat(_toConsumableArray(Object.getOwnPropertyNames(object)), _toConsumableArray(Object.getOwnPropertySymbols(object)));
    };
  } else {
    return Object.getOwnPropertyNames;
  }
}();

var extend = function () {
  function extendWithReflect(constructor) {
    function extended() {
      return Reflect.construct(constructor, arguments, this instanceof extended ? this.constructor : void 0);
    }

    extended.prototype = Object.create(constructor.prototype, {
      constructor: {
        value: extended
      }
    });
    Reflect.setPrototypeOf(extended, constructor);
    return extended;
  }

  function testReflectExtension() {
    var a = function a() {
      this.a.call(this);
    };

    var b = extendWithReflect(a);

    b.prototype.a = function () {};

    return new b();
  }

  try {
    testReflectExtension();
    return extendWithReflect;
  } catch (error) {
    return function (constructor) {
      return /*#__PURE__*/function (_constructor) {
        _inherits(extended, _constructor);

        var _super2 = _createSuper(extended);

        function extended() {
          _classCallCheck(this, extended);

          return _super2.apply(this, arguments);
        }

        return extended;
      }(constructor);
    };
  }
}();

function blessDefinition(definition) {
  return {
    identifier: definition.identifier,
    controllerConstructor: bless(definition.controllerConstructor)
  };
}

var Module = /*#__PURE__*/function () {
  function Module(application, definition) {
    _classCallCheck(this, Module);

    this.application = application;
    this.definition = blessDefinition(definition);
    this.contextsByScope = new WeakMap();
    this.connectedContexts = new Set();
  }

  _createClass(Module, [{
    key: "identifier",
    get: function get() {
      return this.definition.identifier;
    }
  }, {
    key: "controllerConstructor",
    get: function get() {
      return this.definition.controllerConstructor;
    }
  }, {
    key: "contexts",
    get: function get() {
      return Array.from(this.connectedContexts);
    }
  }, {
    key: "connectContextForScope",
    value: function connectContextForScope(scope) {
      var context = this.fetchContextForScope(scope);
      this.connectedContexts.add(context);
      context.connect();
    }
  }, {
    key: "disconnectContextForScope",
    value: function disconnectContextForScope(scope) {
      var context = this.contextsByScope.get(scope);

      if (context) {
        this.connectedContexts.delete(context);
        context.disconnect();
      }
    }
  }, {
    key: "fetchContextForScope",
    value: function fetchContextForScope(scope) {
      var context = this.contextsByScope.get(scope);

      if (!context) {
        context = new Context(this, scope);
        this.contextsByScope.set(scope, context);
      }

      return context;
    }
  }]);

  return Module;
}();

var ClassMap = /*#__PURE__*/function () {
  function ClassMap(scope) {
    _classCallCheck(this, ClassMap);

    this.scope = scope;
  }

  _createClass(ClassMap, [{
    key: "has",
    value: function has(name) {
      return this.data.has(this.getDataKey(name));
    }
  }, {
    key: "get",
    value: function get(name) {
      return this.getAll(name)[0];
    }
  }, {
    key: "getAll",
    value: function getAll(name) {
      var tokenString = this.data.get(this.getDataKey(name)) || "";
      return tokenize(tokenString);
    }
  }, {
    key: "getAttributeName",
    value: function getAttributeName(name) {
      return this.data.getAttributeNameForKey(this.getDataKey(name));
    }
  }, {
    key: "getDataKey",
    value: function getDataKey(name) {
      return "".concat(name, "-class");
    }
  }, {
    key: "data",
    get: function get() {
      return this.scope.data;
    }
  }]);

  return ClassMap;
}();

var DataMap = /*#__PURE__*/function () {
  function DataMap(scope) {
    _classCallCheck(this, DataMap);

    this.scope = scope;
  }

  _createClass(DataMap, [{
    key: "element",
    get: function get() {
      return this.scope.element;
    }
  }, {
    key: "identifier",
    get: function get() {
      return this.scope.identifier;
    }
  }, {
    key: "get",
    value: function get(key) {
      var name = this.getAttributeNameForKey(key);
      return this.element.getAttribute(name);
    }
  }, {
    key: "set",
    value: function set(key, value) {
      var name = this.getAttributeNameForKey(key);
      this.element.setAttribute(name, value);
      return this.get(key);
    }
  }, {
    key: "has",
    value: function has(key) {
      var name = this.getAttributeNameForKey(key);
      return this.element.hasAttribute(name);
    }
  }, {
    key: "delete",
    value: function _delete(key) {
      if (this.has(key)) {
        var name = this.getAttributeNameForKey(key);
        this.element.removeAttribute(name);
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "getAttributeNameForKey",
    value: function getAttributeNameForKey(key) {
      return "data-".concat(this.identifier, "-").concat(dasherize(key));
    }
  }]);

  return DataMap;
}();

var Guide = /*#__PURE__*/function () {
  function Guide(logger) {
    _classCallCheck(this, Guide);

    this.warnedKeysByObject = new WeakMap();
    this.logger = logger;
  }

  _createClass(Guide, [{
    key: "warn",
    value: function warn(object, key, message) {
      var warnedKeys = this.warnedKeysByObject.get(object);

      if (!warnedKeys) {
        warnedKeys = new Set();
        this.warnedKeysByObject.set(object, warnedKeys);
      }

      if (!warnedKeys.has(key)) {
        warnedKeys.add(key);
        this.logger.warn(message, object);
      }
    }
  }]);

  return Guide;
}();

function attributeValueContainsToken(attributeName, token) {
  return "[".concat(attributeName, "~=\"").concat(token, "\"]");
}

var TargetSet = /*#__PURE__*/function () {
  function TargetSet(scope) {
    _classCallCheck(this, TargetSet);

    this.scope = scope;
  }

  _createClass(TargetSet, [{
    key: "element",
    get: function get() {
      return this.scope.element;
    }
  }, {
    key: "identifier",
    get: function get() {
      return this.scope.identifier;
    }
  }, {
    key: "schema",
    get: function get() {
      return this.scope.schema;
    }
  }, {
    key: "has",
    value: function has(targetName) {
      return this.find(targetName) != null;
    }
  }, {
    key: "find",
    value: function find() {
      var _this11 = this;

      for (var _len2 = arguments.length, targetNames = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        targetNames[_key2] = arguments[_key2];
      }

      return targetNames.reduce(function (target, targetName) {
        return target || _this11.findTarget(targetName) || _this11.findLegacyTarget(targetName);
      }, undefined);
    }
  }, {
    key: "findAll",
    value: function findAll() {
      var _this12 = this;

      for (var _len3 = arguments.length, targetNames = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        targetNames[_key3] = arguments[_key3];
      }

      return targetNames.reduce(function (targets, targetName) {
        return [].concat(_toConsumableArray(targets), _toConsumableArray(_this12.findAllTargets(targetName)), _toConsumableArray(_this12.findAllLegacyTargets(targetName)));
      }, []);
    }
  }, {
    key: "findTarget",
    value: function findTarget(targetName) {
      var selector = this.getSelectorForTargetName(targetName);
      return this.scope.findElement(selector);
    }
  }, {
    key: "findAllTargets",
    value: function findAllTargets(targetName) {
      var selector = this.getSelectorForTargetName(targetName);
      return this.scope.findAllElements(selector);
    }
  }, {
    key: "getSelectorForTargetName",
    value: function getSelectorForTargetName(targetName) {
      var attributeName = this.schema.targetAttributeForScope(this.identifier);
      return attributeValueContainsToken(attributeName, targetName);
    }
  }, {
    key: "findLegacyTarget",
    value: function findLegacyTarget(targetName) {
      var selector = this.getLegacySelectorForTargetName(targetName);
      return this.deprecate(this.scope.findElement(selector), targetName);
    }
  }, {
    key: "findAllLegacyTargets",
    value: function findAllLegacyTargets(targetName) {
      var _this13 = this;

      var selector = this.getLegacySelectorForTargetName(targetName);
      return this.scope.findAllElements(selector).map(function (element) {
        return _this13.deprecate(element, targetName);
      });
    }
  }, {
    key: "getLegacySelectorForTargetName",
    value: function getLegacySelectorForTargetName(targetName) {
      var targetDescriptor = "".concat(this.identifier, ".").concat(targetName);
      return attributeValueContainsToken(this.schema.targetAttribute, targetDescriptor);
    }
  }, {
    key: "deprecate",
    value: function deprecate(element, targetName) {
      if (element) {
        var identifier = this.identifier;
        var attributeName = this.schema.targetAttribute;
        var revisedAttributeName = this.schema.targetAttributeForScope(identifier);
        this.guide.warn(element, "target:".concat(targetName), "Please replace ".concat(attributeName, "=\"").concat(identifier, ".").concat(targetName, "\" with ").concat(revisedAttributeName, "=\"").concat(targetName, "\". ") + "The ".concat(attributeName, " attribute is deprecated and will be removed in a future version of Stimulus."));
      }

      return element;
    }
  }, {
    key: "guide",
    get: function get() {
      return this.scope.guide;
    }
  }]);

  return TargetSet;
}();

var Scope = /*#__PURE__*/function () {
  function Scope(schema, element, identifier, logger) {
    var _this14 = this;

    _classCallCheck(this, Scope);

    this.targets = new TargetSet(this);
    this.classes = new ClassMap(this);
    this.data = new DataMap(this);

    this.containsElement = function (element) {
      return element.closest(_this14.controllerSelector) === _this14.element;
    };

    this.schema = schema;
    this.element = element;
    this.identifier = identifier;
    this.guide = new Guide(logger);
  }

  _createClass(Scope, [{
    key: "findElement",
    value: function findElement(selector) {
      return this.element.matches(selector) ? this.element : this.queryElements(selector).find(this.containsElement);
    }
  }, {
    key: "findAllElements",
    value: function findAllElements(selector) {
      return [].concat(_toConsumableArray(this.element.matches(selector) ? [this.element] : []), _toConsumableArray(this.queryElements(selector).filter(this.containsElement)));
    }
  }, {
    key: "queryElements",
    value: function queryElements(selector) {
      return Array.from(this.element.querySelectorAll(selector));
    }
  }, {
    key: "controllerSelector",
    get: function get() {
      return attributeValueContainsToken(this.schema.controllerAttribute, this.identifier);
    }
  }]);

  return Scope;
}();

var ScopeObserver = /*#__PURE__*/function () {
  function ScopeObserver(element, schema, delegate) {
    _classCallCheck(this, ScopeObserver);

    this.element = element;
    this.schema = schema;
    this.delegate = delegate;
    this.valueListObserver = new ValueListObserver(this.element, this.controllerAttribute, this);
    this.scopesByIdentifierByElement = new WeakMap();
    this.scopeReferenceCounts = new WeakMap();
  }

  _createClass(ScopeObserver, [{
    key: "start",
    value: function start() {
      this.valueListObserver.start();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.valueListObserver.stop();
    }
  }, {
    key: "controllerAttribute",
    get: function get() {
      return this.schema.controllerAttribute;
    }
  }, {
    key: "parseValueForToken",
    value: function parseValueForToken(token) {
      var element = token.element,
          identifier = token.content;
      var scopesByIdentifier = this.fetchScopesByIdentifierForElement(element);
      var scope = scopesByIdentifier.get(identifier);

      if (!scope) {
        scope = this.delegate.createScopeForElementAndIdentifier(element, identifier);
        scopesByIdentifier.set(identifier, scope);
      }

      return scope;
    }
  }, {
    key: "elementMatchedValue",
    value: function elementMatchedValue(element, value) {
      var referenceCount = (this.scopeReferenceCounts.get(value) || 0) + 1;
      this.scopeReferenceCounts.set(value, referenceCount);

      if (referenceCount == 1) {
        this.delegate.scopeConnected(value);
      }
    }
  }, {
    key: "elementUnmatchedValue",
    value: function elementUnmatchedValue(element, value) {
      var referenceCount = this.scopeReferenceCounts.get(value);

      if (referenceCount) {
        this.scopeReferenceCounts.set(value, referenceCount - 1);

        if (referenceCount == 1) {
          this.delegate.scopeDisconnected(value);
        }
      }
    }
  }, {
    key: "fetchScopesByIdentifierForElement",
    value: function fetchScopesByIdentifierForElement(element) {
      var scopesByIdentifier = this.scopesByIdentifierByElement.get(element);

      if (!scopesByIdentifier) {
        scopesByIdentifier = new Map();
        this.scopesByIdentifierByElement.set(element, scopesByIdentifier);
      }

      return scopesByIdentifier;
    }
  }]);

  return ScopeObserver;
}();

var Router = /*#__PURE__*/function () {
  function Router(application) {
    _classCallCheck(this, Router);

    this.application = application;
    this.scopeObserver = new ScopeObserver(this.element, this.schema, this);
    this.scopesByIdentifier = new Multimap();
    this.modulesByIdentifier = new Map();
  }

  _createClass(Router, [{
    key: "element",
    get: function get() {
      return this.application.element;
    }
  }, {
    key: "schema",
    get: function get() {
      return this.application.schema;
    }
  }, {
    key: "logger",
    get: function get() {
      return this.application.logger;
    }
  }, {
    key: "controllerAttribute",
    get: function get() {
      return this.schema.controllerAttribute;
    }
  }, {
    key: "modules",
    get: function get() {
      return Array.from(this.modulesByIdentifier.values());
    }
  }, {
    key: "contexts",
    get: function get() {
      return this.modules.reduce(function (contexts, module) {
        return contexts.concat(module.contexts);
      }, []);
    }
  }, {
    key: "start",
    value: function start() {
      this.scopeObserver.start();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.scopeObserver.stop();
    }
  }, {
    key: "loadDefinition",
    value: function loadDefinition(definition) {
      this.unloadIdentifier(definition.identifier);
      var module = new Module(this.application, definition);
      this.connectModule(module);
    }
  }, {
    key: "unloadIdentifier",
    value: function unloadIdentifier(identifier) {
      var module = this.modulesByIdentifier.get(identifier);

      if (module) {
        this.disconnectModule(module);
      }
    }
  }, {
    key: "getContextForElementAndIdentifier",
    value: function getContextForElementAndIdentifier(element, identifier) {
      var module = this.modulesByIdentifier.get(identifier);

      if (module) {
        return module.contexts.find(function (context) {
          return context.element == element;
        });
      }
    }
  }, {
    key: "handleError",
    value: function handleError(error, message, detail) {
      this.application.handleError(error, message, detail);
    }
  }, {
    key: "createScopeForElementAndIdentifier",
    value: function createScopeForElementAndIdentifier(element, identifier) {
      return new Scope(this.schema, element, identifier, this.logger);
    }
  }, {
    key: "scopeConnected",
    value: function scopeConnected(scope) {
      this.scopesByIdentifier.add(scope.identifier, scope);
      var module = this.modulesByIdentifier.get(scope.identifier);

      if (module) {
        module.connectContextForScope(scope);
      }
    }
  }, {
    key: "scopeDisconnected",
    value: function scopeDisconnected(scope) {
      this.scopesByIdentifier.delete(scope.identifier, scope);
      var module = this.modulesByIdentifier.get(scope.identifier);

      if (module) {
        module.disconnectContextForScope(scope);
      }
    }
  }, {
    key: "connectModule",
    value: function connectModule(module) {
      this.modulesByIdentifier.set(module.identifier, module);
      var scopes = this.scopesByIdentifier.getValuesForKey(module.identifier);
      scopes.forEach(function (scope) {
        return module.connectContextForScope(scope);
      });
    }
  }, {
    key: "disconnectModule",
    value: function disconnectModule(module) {
      this.modulesByIdentifier.delete(module.identifier);
      var scopes = this.scopesByIdentifier.getValuesForKey(module.identifier);
      scopes.forEach(function (scope) {
        return module.disconnectContextForScope(scope);
      });
    }
  }]);

  return Router;
}();

var defaultSchema = {
  controllerAttribute: "data-controller",
  actionAttribute: "data-action",
  targetAttribute: "data-target",
  targetAttributeForScope: function targetAttributeForScope(identifier) {
    return "data-".concat(identifier, "-target");
  }
};

var Application = /*#__PURE__*/function () {
  function Application() {
    var _this15 = this;

    var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.documentElement;
    var schema = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSchema;

    _classCallCheck(this, Application);

    this.logger = console;
    this.debug = false;

    this.logDebugActivity = function (identifier, functionName) {
      var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (_this15.debug) {
        _this15.logFormattedMessage(identifier, functionName, detail);
      }
    };

    this.element = element;
    this.schema = schema;
    this.dispatcher = new Dispatcher(this);
    this.router = new Router(this);
  }

  _createClass(Application, [{
    key: "start",
    value: function () {
      var _start = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return domReady();

              case 2:
                this.logDebugActivity("application", "starting");
                this.dispatcher.start();
                this.router.start();
                this.logDebugActivity("application", "start");

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function start() {
        return _start.apply(this, arguments);
      }

      return start;
    }()
  }, {
    key: "stop",
    value: function stop() {
      this.logDebugActivity("application", "stopping");
      this.dispatcher.stop();
      this.router.stop();
      this.logDebugActivity("application", "stop");
    }
  }, {
    key: "register",
    value: function register(identifier, controllerConstructor) {
      if (controllerConstructor.shouldLoad) {
        this.load({
          identifier: identifier,
          controllerConstructor: controllerConstructor
        });
      }
    }
  }, {
    key: "load",
    value: function load(head) {
      var _this16 = this;

      for (var _len4 = arguments.length, rest = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        rest[_key4 - 1] = arguments[_key4];
      }

      var definitions = Array.isArray(head) ? head : [head].concat(rest);
      definitions.forEach(function (definition) {
        return _this16.router.loadDefinition(definition);
      });
    }
  }, {
    key: "unload",
    value: function unload(head) {
      var _this17 = this;

      for (var _len5 = arguments.length, rest = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        rest[_key5 - 1] = arguments[_key5];
      }

      var identifiers = Array.isArray(head) ? head : [head].concat(rest);
      identifiers.forEach(function (identifier) {
        return _this17.router.unloadIdentifier(identifier);
      });
    }
  }, {
    key: "controllers",
    get: function get() {
      return this.router.contexts.map(function (context) {
        return context.controller;
      });
    }
  }, {
    key: "getControllerForElementAndIdentifier",
    value: function getControllerForElementAndIdentifier(element, identifier) {
      var context = this.router.getContextForElementAndIdentifier(element, identifier);
      return context ? context.controller : null;
    }
  }, {
    key: "handleError",
    value: function handleError(error, message, detail) {
      var _a;

      this.logger.error("%s\n\n%o\n\n%o", message, error, detail);
      (_a = window.onerror) === null || _a === void 0 ? void 0 : _a.call(window, message, "", 0, 0, error);
    }
  }, {
    key: "logFormattedMessage",
    value: function logFormattedMessage(identifier, functionName) {
      var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      detail = Object.assign({
        application: this
      }, detail);
      this.logger.groupCollapsed("".concat(identifier, " #").concat(functionName));
      this.logger.log("details:", Object.assign({}, detail));
      this.logger.groupEnd();
    }
  }], [{
    key: "start",
    value: function start(element, schema) {
      var application = new Application(element, schema);
      application.start();
      return application;
    }
  }]);

  return Application;
}();

function domReady() {
  return new Promise(function (resolve) {
    if (document.readyState == "loading") {
      document.addEventListener("DOMContentLoaded", function () {
        return resolve();
      });
    } else {
      resolve();
    }
  });
}

function ClassPropertiesBlessing(constructor) {
  var classes = readInheritableStaticArrayValues(constructor, "classes");
  return classes.reduce(function (properties, classDefinition) {
    return Object.assign(properties, propertiesForClassDefinition(classDefinition));
  }, {});
}

function propertiesForClassDefinition(key) {
  var _ref12;

  return _ref12 = {}, _defineProperty(_ref12, "".concat(key, "Class"), {
    get: function get() {
      var classes = this.classes;

      if (classes.has(key)) {
        return classes.get(key);
      } else {
        var attribute = classes.getAttributeName(key);
        throw new Error("Missing attribute \"".concat(attribute, "\""));
      }
    }
  }), _defineProperty(_ref12, "".concat(key, "Classes"), {
    get: function get() {
      return this.classes.getAll(key);
    }
  }), _defineProperty(_ref12, "has".concat(capitalize(key), "Class"), {
    get: function get() {
      return this.classes.has(key);
    }
  }), _ref12;
}

function TargetPropertiesBlessing(constructor) {
  var targets = readInheritableStaticArrayValues(constructor, "targets");
  return targets.reduce(function (properties, targetDefinition) {
    return Object.assign(properties, propertiesForTargetDefinition(targetDefinition));
  }, {});
}

function propertiesForTargetDefinition(name) {
  var _ref13;

  return _ref13 = {}, _defineProperty(_ref13, "".concat(name, "Target"), {
    get: function get() {
      var target = this.targets.find(name);

      if (target) {
        return target;
      } else {
        throw new Error("Missing target element \"".concat(name, "\" for \"").concat(this.identifier, "\" controller"));
      }
    }
  }), _defineProperty(_ref13, "".concat(name, "Targets"), {
    get: function get() {
      return this.targets.findAll(name);
    }
  }), _defineProperty(_ref13, "has".concat(capitalize(name), "Target"), {
    get: function get() {
      return this.targets.has(name);
    }
  }), _ref13;
}

function ValuePropertiesBlessing(constructor) {
  var valueDefinitionPairs = readInheritableStaticObjectPairs(constructor, "values");
  var propertyDescriptorMap = {
    valueDescriptorMap: {
      get: function get() {
        var _this18 = this;

        return valueDefinitionPairs.reduce(function (result, valueDefinitionPair) {
          var valueDescriptor = parseValueDefinitionPair(valueDefinitionPair);

          var attributeName = _this18.data.getAttributeNameForKey(valueDescriptor.key);

          return Object.assign(result, _defineProperty({}, attributeName, valueDescriptor));
        }, {});
      }
    }
  };
  return valueDefinitionPairs.reduce(function (properties, valueDefinitionPair) {
    return Object.assign(properties, propertiesForValueDefinitionPair(valueDefinitionPair));
  }, propertyDescriptorMap);
}

function propertiesForValueDefinitionPair(valueDefinitionPair) {
  var _ref14;

  var definition = parseValueDefinitionPair(valueDefinitionPair);
  var key = definition.key,
      name = definition.name,
      read = definition.reader,
      write = definition.writer;
  return _ref14 = {}, _defineProperty(_ref14, name, {
    get: function get() {
      var value = this.data.get(key);

      if (value !== null) {
        return read(value);
      } else {
        return definition.defaultValue;
      }
    },
    set: function set(value) {
      if (value === undefined) {
        this.data.delete(key);
      } else {
        this.data.set(key, write(value));
      }
    }
  }), _defineProperty(_ref14, "has".concat(capitalize(name)), {
    get: function get() {
      return this.data.has(key) || definition.hasCustomDefaultValue;
    }
  }), _ref14;
}

function parseValueDefinitionPair(_ref15) {
  var _ref16 = _slicedToArray(_ref15, 2),
      token = _ref16[0],
      typeDefinition = _ref16[1];

  return valueDescriptorForTokenAndTypeDefinition(token, typeDefinition);
}

function parseValueTypeConstant(constant) {
  switch (constant) {
    case Array:
      return "array";

    case Boolean:
      return "boolean";

    case Number:
      return "number";

    case Object:
      return "object";

    case String:
      return "string";
  }
}

function parseValueTypeDefault(defaultValue) {
  switch (_typeof(defaultValue)) {
    case "boolean":
      return "boolean";

    case "number":
      return "number";

    case "string":
      return "string";
  }

  if (Array.isArray(defaultValue)) return "array";
  if (Object.prototype.toString.call(defaultValue) === "[object Object]") return "object";
}

function parseValueTypeObject(typeObject) {
  var typeFromObject = parseValueTypeConstant(typeObject.type);

  if (typeFromObject) {
    var defaultValueType = parseValueTypeDefault(typeObject.default);

    if (typeFromObject !== defaultValueType) {
      throw new Error("Type \"".concat(typeFromObject, "\" must match the type of the default value. Given default value: \"").concat(typeObject.default, "\" as \"").concat(defaultValueType, "\""));
    }

    return typeFromObject;
  }
}

function parseValueTypeDefinition(typeDefinition) {
  var typeFromObject = parseValueTypeObject(typeDefinition);
  var typeFromDefaultValue = parseValueTypeDefault(typeDefinition);
  var typeFromConstant = parseValueTypeConstant(typeDefinition);
  var type = typeFromObject || typeFromDefaultValue || typeFromConstant;
  if (type) return type;
  throw new Error("Unknown value type \"".concat(typeDefinition, "\""));
}

function defaultValueForDefinition(typeDefinition) {
  var constant = parseValueTypeConstant(typeDefinition);
  if (constant) return defaultValuesByType[constant];
  var defaultValue = typeDefinition.default;
  if (defaultValue !== undefined) return defaultValue;
  return typeDefinition;
}

function valueDescriptorForTokenAndTypeDefinition(token, typeDefinition) {
  var key = "".concat(dasherize(token), "-value");
  var type = parseValueTypeDefinition(typeDefinition);
  return {
    type: type,
    key: key,
    name: camelize(key),

    get defaultValue() {
      return defaultValueForDefinition(typeDefinition);
    },

    get hasCustomDefaultValue() {
      return parseValueTypeDefault(typeDefinition) !== undefined;
    },

    reader: readers[type],
    writer: writers[type] || writers.default
  };
}

var defaultValuesByType = {
  get array() {
    return [];
  },

  boolean: false,
  number: 0,

  get object() {
    return {};
  },

  string: ""
};
var readers = {
  array: function array(value) {
    var array = JSON.parse(value);

    if (!Array.isArray(array)) {
      throw new TypeError("Expected array");
    }

    return array;
  },
  boolean: function boolean(value) {
    return !(value == "0" || value == "false");
  },
  number: function number(value) {
    return Number(value);
  },
  object: function object(value) {
    var object = JSON.parse(value);

    if (object === null || _typeof(object) != "object" || Array.isArray(object)) {
      throw new TypeError("Expected object");
    }

    return object;
  },
  string: function string(value) {
    return value;
  }
};
var writers = {
  default: writeString,
  array: writeJSON,
  object: writeJSON
};

function writeJSON(value) {
  return JSON.stringify(value);
}

function writeString(value) {
  return "".concat(value);
}

var Controller = /*#__PURE__*/function () {
  function Controller(context) {
    _classCallCheck(this, Controller);

    this.context = context;
  }

  _createClass(Controller, [{
    key: "application",
    get: function get() {
      return this.context.application;
    }
  }, {
    key: "scope",
    get: function get() {
      return this.context.scope;
    }
  }, {
    key: "element",
    get: function get() {
      return this.scope.element;
    }
  }, {
    key: "identifier",
    get: function get() {
      return this.scope.identifier;
    }
  }, {
    key: "targets",
    get: function get() {
      return this.scope.targets;
    }
  }, {
    key: "classes",
    get: function get() {
      return this.scope.classes;
    }
  }, {
    key: "data",
    get: function get() {
      return this.scope.data;
    }
  }, {
    key: "initialize",
    value: function initialize() {}
  }, {
    key: "connect",
    value: function connect() {}
  }, {
    key: "disconnect",
    value: function disconnect() {}
  }, {
    key: "dispatch",
    value: function dispatch(eventName) {
      var _ref17 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref17$target = _ref17.target,
          target = _ref17$target === void 0 ? this.element : _ref17$target,
          _ref17$detail = _ref17.detail,
          detail = _ref17$detail === void 0 ? {} : _ref17$detail,
          _ref17$prefix = _ref17.prefix,
          prefix = _ref17$prefix === void 0 ? this.identifier : _ref17$prefix,
          _ref17$bubbles = _ref17.bubbles,
          bubbles = _ref17$bubbles === void 0 ? true : _ref17$bubbles,
          _ref17$cancelable = _ref17.cancelable,
          cancelable = _ref17$cancelable === void 0 ? true : _ref17$cancelable;

      var type = prefix ? "".concat(prefix, ":").concat(eventName) : eventName;
      var event = new CustomEvent(type, {
        detail: detail,
        bubbles: bubbles,
        cancelable: cancelable
      });
      target.dispatchEvent(event);
      return event;
    }
  }], [{
    key: "shouldLoad",
    get: function get() {
      return true;
    }
  }]);

  return Controller;
}();

Controller.blessings = [ClassPropertiesBlessing, TargetPropertiesBlessing, ValuePropertiesBlessing];
Controller.targets = [];
Controller.values = {};


/***/ }),

/***/ "./node_modules/@rails/actioncable/app/assets/javascripts/action_cable.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@rails/actioncable/app/assets/javascripts/action_cable.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof2(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

(function (global, factory) {
  ( false ? undefined : _typeof2(exports)) === "object" && typeof module !== "undefined" ? factory(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (exports) {
  "use strict";

  var adapters = {
    logger: self.console,
    WebSocket: self.WebSocket
  };
  var logger = {
    log: function log() {
      if (this.enabled) {
        var _adapters$logger;

        for (var _len = arguments.length, messages = Array(_len), _key = 0; _key < _len; _key++) {
          messages[_key] = arguments[_key];
        }

        messages.push(Date.now());

        (_adapters$logger = adapters.logger).log.apply(_adapters$logger, ["[ActionCable]"].concat(messages));
      }
    }
  };

  var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
    return _typeof2(obj);
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
  };

  var classCallCheck = function classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var now = function now() {
    return new Date().getTime();
  };

  var secondsSince = function secondsSince(time) {
    return (now() - time) / 1e3;
  };

  var clamp = function clamp(number, min, max) {
    return Math.max(min, Math.min(max, number));
  };

  var ConnectionMonitor = function () {
    function ConnectionMonitor(connection) {
      classCallCheck(this, ConnectionMonitor);
      this.visibilityDidChange = this.visibilityDidChange.bind(this);
      this.connection = connection;
      this.reconnectAttempts = 0;
    }

    ConnectionMonitor.prototype.start = function start() {
      if (!this.isRunning()) {
        this.startedAt = now();
        delete this.stoppedAt;
        this.startPolling();
        addEventListener("visibilitychange", this.visibilityDidChange);
        logger.log("ConnectionMonitor started. pollInterval = " + this.getPollInterval() + " ms");
      }
    };

    ConnectionMonitor.prototype.stop = function stop() {
      if (this.isRunning()) {
        this.stoppedAt = now();
        this.stopPolling();
        removeEventListener("visibilitychange", this.visibilityDidChange);
        logger.log("ConnectionMonitor stopped");
      }
    };

    ConnectionMonitor.prototype.isRunning = function isRunning() {
      return this.startedAt && !this.stoppedAt;
    };

    ConnectionMonitor.prototype.recordPing = function recordPing() {
      this.pingedAt = now();
    };

    ConnectionMonitor.prototype.recordConnect = function recordConnect() {
      this.reconnectAttempts = 0;
      this.recordPing();
      delete this.disconnectedAt;
      logger.log("ConnectionMonitor recorded connect");
    };

    ConnectionMonitor.prototype.recordDisconnect = function recordDisconnect() {
      this.disconnectedAt = now();
      logger.log("ConnectionMonitor recorded disconnect");
    };

    ConnectionMonitor.prototype.startPolling = function startPolling() {
      this.stopPolling();
      this.poll();
    };

    ConnectionMonitor.prototype.stopPolling = function stopPolling() {
      clearTimeout(this.pollTimeout);
    };

    ConnectionMonitor.prototype.poll = function poll() {
      var _this = this;

      this.pollTimeout = setTimeout(function () {
        _this.reconnectIfStale();

        _this.poll();
      }, this.getPollInterval());
    };

    ConnectionMonitor.prototype.getPollInterval = function getPollInterval() {
      var _constructor$pollInte = this.constructor.pollInterval,
          min = _constructor$pollInte.min,
          max = _constructor$pollInte.max,
          multiplier = _constructor$pollInte.multiplier;
      var interval = multiplier * Math.log(this.reconnectAttempts + 1);
      return Math.round(clamp(interval, min, max) * 1e3);
    };

    ConnectionMonitor.prototype.reconnectIfStale = function reconnectIfStale() {
      if (this.connectionIsStale()) {
        logger.log("ConnectionMonitor detected stale connection. reconnectAttempts = " + this.reconnectAttempts + ", pollInterval = " + this.getPollInterval() + " ms, time disconnected = " + secondsSince(this.disconnectedAt) + " s, stale threshold = " + this.constructor.staleThreshold + " s");
        this.reconnectAttempts++;

        if (this.disconnectedRecently()) {
          logger.log("ConnectionMonitor skipping reopening recent disconnect");
        } else {
          logger.log("ConnectionMonitor reopening");
          this.connection.reopen();
        }
      }
    };

    ConnectionMonitor.prototype.connectionIsStale = function connectionIsStale() {
      return secondsSince(this.pingedAt ? this.pingedAt : this.startedAt) > this.constructor.staleThreshold;
    };

    ConnectionMonitor.prototype.disconnectedRecently = function disconnectedRecently() {
      return this.disconnectedAt && secondsSince(this.disconnectedAt) < this.constructor.staleThreshold;
    };

    ConnectionMonitor.prototype.visibilityDidChange = function visibilityDidChange() {
      var _this2 = this;

      if (document.visibilityState === "visible") {
        setTimeout(function () {
          if (_this2.connectionIsStale() || !_this2.connection.isOpen()) {
            logger.log("ConnectionMonitor reopening stale connection on visibilitychange. visibilityState = " + document.visibilityState);

            _this2.connection.reopen();
          }
        }, 200);
      }
    };

    return ConnectionMonitor;
  }();

  ConnectionMonitor.pollInterval = {
    min: 3,
    max: 30,
    multiplier: 5
  };
  ConnectionMonitor.staleThreshold = 6;
  var INTERNAL = {
    message_types: {
      welcome: "welcome",
      disconnect: "disconnect",
      ping: "ping",
      confirmation: "confirm_subscription",
      rejection: "reject_subscription"
    },
    disconnect_reasons: {
      unauthorized: "unauthorized",
      invalid_request: "invalid_request",
      server_restart: "server_restart"
    },
    default_mount_path: "/cable",
    protocols: ["actioncable-v1-json", "actioncable-unsupported"]
  };
  var message_types = INTERNAL.message_types,
      protocols = INTERNAL.protocols;
  var supportedProtocols = protocols.slice(0, protocols.length - 1);
  var indexOf = [].indexOf;

  var Connection = function () {
    function Connection(consumer) {
      classCallCheck(this, Connection);
      this.open = this.open.bind(this);
      this.consumer = consumer;
      this.subscriptions = this.consumer.subscriptions;
      this.monitor = new ConnectionMonitor(this);
      this.disconnected = true;
    }

    Connection.prototype.send = function send(data) {
      if (this.isOpen()) {
        this.webSocket.send(JSON.stringify(data));
        return true;
      } else {
        return false;
      }
    };

    Connection.prototype.open = function open() {
      if (this.isActive()) {
        logger.log("Attempted to open WebSocket, but existing socket is " + this.getState());
        return false;
      } else {
        logger.log("Opening WebSocket, current state is " + this.getState() + ", subprotocols: " + protocols);

        if (this.webSocket) {
          this.uninstallEventHandlers();
        }

        this.webSocket = new adapters.WebSocket(this.consumer.url, protocols);
        this.installEventHandlers();
        this.monitor.start();
        return true;
      }
    };

    Connection.prototype.close = function close() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        allowReconnect: true
      },
          allowReconnect = _ref.allowReconnect;

      if (!allowReconnect) {
        this.monitor.stop();
      }

      if (this.isActive()) {
        return this.webSocket.close();
      }
    };

    Connection.prototype.reopen = function reopen() {
      logger.log("Reopening WebSocket, current state is " + this.getState());

      if (this.isActive()) {
        try {
          return this.close();
        } catch (error) {
          logger.log("Failed to reopen WebSocket", error);
        } finally {
          logger.log("Reopening WebSocket in " + this.constructor.reopenDelay + "ms");
          setTimeout(this.open, this.constructor.reopenDelay);
        }
      } else {
        return this.open();
      }
    };

    Connection.prototype.getProtocol = function getProtocol() {
      if (this.webSocket) {
        return this.webSocket.protocol;
      }
    };

    Connection.prototype.isOpen = function isOpen() {
      return this.isState("open");
    };

    Connection.prototype.isActive = function isActive() {
      return this.isState("open", "connecting");
    };

    Connection.prototype.isProtocolSupported = function isProtocolSupported() {
      return indexOf.call(supportedProtocols, this.getProtocol()) >= 0;
    };

    Connection.prototype.isState = function isState() {
      for (var _len = arguments.length, states = Array(_len), _key = 0; _key < _len; _key++) {
        states[_key] = arguments[_key];
      }

      return indexOf.call(states, this.getState()) >= 0;
    };

    Connection.prototype.getState = function getState() {
      if (this.webSocket) {
        for (var state in adapters.WebSocket) {
          if (adapters.WebSocket[state] === this.webSocket.readyState) {
            return state.toLowerCase();
          }
        }
      }

      return null;
    };

    Connection.prototype.installEventHandlers = function installEventHandlers() {
      for (var eventName in this.events) {
        var handler = this.events[eventName].bind(this);
        this.webSocket["on" + eventName] = handler;
      }
    };

    Connection.prototype.uninstallEventHandlers = function uninstallEventHandlers() {
      for (var eventName in this.events) {
        this.webSocket["on" + eventName] = function () {};
      }
    };

    return Connection;
  }();

  Connection.reopenDelay = 500;
  Connection.prototype.events = {
    message: function message(event) {
      if (!this.isProtocolSupported()) {
        return;
      }

      var _JSON$parse = JSON.parse(event.data),
          identifier = _JSON$parse.identifier,
          message = _JSON$parse.message,
          reason = _JSON$parse.reason,
          reconnect = _JSON$parse.reconnect,
          type = _JSON$parse.type;

      switch (type) {
        case message_types.welcome:
          this.monitor.recordConnect();
          return this.subscriptions.reload();

        case message_types.disconnect:
          logger.log("Disconnecting. Reason: " + reason);
          return this.close({
            allowReconnect: reconnect
          });

        case message_types.ping:
          return this.monitor.recordPing();

        case message_types.confirmation:
          return this.subscriptions.notify(identifier, "connected");

        case message_types.rejection:
          return this.subscriptions.reject(identifier);

        default:
          return this.subscriptions.notify(identifier, "received", message);
      }
    },
    open: function open() {
      logger.log("WebSocket onopen event, using '" + this.getProtocol() + "' subprotocol");
      this.disconnected = false;

      if (!this.isProtocolSupported()) {
        logger.log("Protocol is unsupported. Stopping monitor and disconnecting.");
        return this.close({
          allowReconnect: false
        });
      }
    },
    close: function close(event) {
      logger.log("WebSocket onclose event");

      if (this.disconnected) {
        return;
      }

      this.disconnected = true;
      this.monitor.recordDisconnect();
      return this.subscriptions.notifyAll("disconnected", {
        willAttemptReconnect: this.monitor.isRunning()
      });
    },
    error: function error() {
      logger.log("WebSocket onerror event");
    }
  };

  var extend = function extend(object, properties) {
    if (properties != null) {
      for (var key in properties) {
        var value = properties[key];
        object[key] = value;
      }
    }

    return object;
  };

  var Subscription = function () {
    function Subscription(consumer) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var mixin = arguments[2];
      classCallCheck(this, Subscription);
      this.consumer = consumer;
      this.identifier = JSON.stringify(params);
      extend(this, mixin);
    }

    Subscription.prototype.perform = function perform(action) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      data.action = action;
      return this.send(data);
    };

    Subscription.prototype.send = function send(data) {
      return this.consumer.send({
        command: "message",
        identifier: this.identifier,
        data: JSON.stringify(data)
      });
    };

    Subscription.prototype.unsubscribe = function unsubscribe() {
      return this.consumer.subscriptions.remove(this);
    };

    return Subscription;
  }();

  var Subscriptions = function () {
    function Subscriptions(consumer) {
      classCallCheck(this, Subscriptions);
      this.consumer = consumer;
      this.subscriptions = [];
    }

    Subscriptions.prototype.create = function create(channelName, mixin) {
      var channel = channelName;
      var params = (typeof channel === "undefined" ? "undefined" : _typeof(channel)) === "object" ? channel : {
        channel: channel
      };
      var subscription = new Subscription(this.consumer, params, mixin);
      return this.add(subscription);
    };

    Subscriptions.prototype.add = function add(subscription) {
      this.subscriptions.push(subscription);
      this.consumer.ensureActiveConnection();
      this.notify(subscription, "initialized");
      this.sendCommand(subscription, "subscribe");
      return subscription;
    };

    Subscriptions.prototype.remove = function remove(subscription) {
      this.forget(subscription);

      if (!this.findAll(subscription.identifier).length) {
        this.sendCommand(subscription, "unsubscribe");
      }

      return subscription;
    };

    Subscriptions.prototype.reject = function reject(identifier) {
      var _this = this;

      return this.findAll(identifier).map(function (subscription) {
        _this.forget(subscription);

        _this.notify(subscription, "rejected");

        return subscription;
      });
    };

    Subscriptions.prototype.forget = function forget(subscription) {
      this.subscriptions = this.subscriptions.filter(function (s) {
        return s !== subscription;
      });
      return subscription;
    };

    Subscriptions.prototype.findAll = function findAll(identifier) {
      return this.subscriptions.filter(function (s) {
        return s.identifier === identifier;
      });
    };

    Subscriptions.prototype.reload = function reload() {
      var _this2 = this;

      return this.subscriptions.map(function (subscription) {
        return _this2.sendCommand(subscription, "subscribe");
      });
    };

    Subscriptions.prototype.notifyAll = function notifyAll(callbackName) {
      var _this3 = this;

      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return this.subscriptions.map(function (subscription) {
        return _this3.notify.apply(_this3, [subscription, callbackName].concat(args));
      });
    };

    Subscriptions.prototype.notify = function notify(subscription, callbackName) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      var subscriptions = void 0;

      if (typeof subscription === "string") {
        subscriptions = this.findAll(subscription);
      } else {
        subscriptions = [subscription];
      }

      return subscriptions.map(function (subscription) {
        return typeof subscription[callbackName] === "function" ? subscription[callbackName].apply(subscription, args) : undefined;
      });
    };

    Subscriptions.prototype.sendCommand = function sendCommand(subscription, command) {
      var identifier = subscription.identifier;
      return this.consumer.send({
        command: command,
        identifier: identifier
      });
    };

    return Subscriptions;
  }();

  var Consumer = function () {
    function Consumer(url) {
      classCallCheck(this, Consumer);
      this._url = url;
      this.subscriptions = new Subscriptions(this);
      this.connection = new Connection(this);
    }

    Consumer.prototype.send = function send(data) {
      return this.connection.send(data);
    };

    Consumer.prototype.connect = function connect() {
      return this.connection.open();
    };

    Consumer.prototype.disconnect = function disconnect() {
      return this.connection.close({
        allowReconnect: false
      });
    };

    Consumer.prototype.ensureActiveConnection = function ensureActiveConnection() {
      if (!this.connection.isActive()) {
        return this.connection.open();
      }
    };

    createClass(Consumer, [{
      key: "url",
      get: function get$$1() {
        return createWebSocketURL(this._url);
      }
    }]);
    return Consumer;
  }();

  function createWebSocketURL(url) {
    if (typeof url === "function") {
      url = url();
    }

    if (url && !/^wss?:/i.test(url)) {
      var a = document.createElement("a");
      a.href = url;
      a.href = a.href;
      a.protocol = a.protocol.replace("http", "ws");
      return a.href;
    } else {
      return url;
    }
  }

  function createConsumer() {
    var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getConfig("url") || INTERNAL.default_mount_path;
    return new Consumer(url);
  }

  function getConfig(name) {
    var element = document.head.querySelector("meta[name='action-cable-" + name + "']");

    if (element) {
      return element.getAttribute("content");
    }
  }

  exports.Connection = Connection;
  exports.ConnectionMonitor = ConnectionMonitor;
  exports.Consumer = Consumer;
  exports.INTERNAL = INTERNAL;
  exports.Subscription = Subscription;
  exports.Subscriptions = Subscriptions;
  exports.adapters = adapters;
  exports.createWebSocketURL = createWebSocketURL;
  exports.logger = logger;
  exports.createConsumer = createConsumer;
  exports.getConfig = getConfig;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
});

/***/ }),

/***/ "./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === "object" && typeof module !== "undefined" ? factory(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (exports) {
  "use strict";

  function createCommonjsModule(fn, module) {
    return module = {
      exports: {}
    }, fn(module, module.exports), module.exports;
  }

  var sparkMd5 = createCommonjsModule(function (module, exports) {
    (function (factory) {
      {
        module.exports = factory();
      }
    })(function (undefined) {
      var hex_chr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

      function md5cycle(x, k) {
        var a = x[0],
            b = x[1],
            c = x[2],
            d = x[3];
        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0;
      }

      function md5blk(s) {
        var md5blks = [],
            i;

        for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
        }

        return md5blks;
      }

      function md5blk_array(a) {
        var md5blks = [],
            i;

        for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
        }

        return md5blks;
      }

      function md51(s) {
        var n = s.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;

        for (i = 64; i <= n; i += 64) {
          md5cycle(state, md5blk(s.substring(i - 64, i)));
        }

        s = s.substring(i - 64);
        length = s.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
        }

        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(state, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }

      function md51_array(a) {
        var n = a.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;

        for (i = 64; i <= n; i += 64) {
          md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
        }

        a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
        length = a.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= a[i] << (i % 4 << 3);
        }

        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(state, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }

      function rhex(n) {
        var s = "",
            j;

        for (j = 0; j < 4; j += 1) {
          s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15];
        }

        return s;
      }

      function hex(x) {
        var i;

        for (i = 0; i < x.length; i += 1) {
          x[i] = rhex(x[i]);
        }

        return x.join("");
      }

      if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592") ;

      if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
        (function () {
          function clamp(val, length) {
            val = val | 0 || 0;

            if (val < 0) {
              return Math.max(val + length, 0);
            }

            return Math.min(val, length);
          }

          ArrayBuffer.prototype.slice = function (from, to) {
            var length = this.byteLength,
                begin = clamp(from, length),
                end = length,
                num,
                target,
                targetArray,
                sourceArray;

            if (to !== undefined) {
              end = clamp(to, length);
            }

            if (begin > end) {
              return new ArrayBuffer(0);
            }

            num = end - begin;
            target = new ArrayBuffer(num);
            targetArray = new Uint8Array(target);
            sourceArray = new Uint8Array(this, begin, num);
            targetArray.set(sourceArray);
            return target;
          };
        })();
      }

      function toUtf8(str) {
        if (/[\u0080-\uFFFF]/.test(str)) {
          str = unescape(encodeURIComponent(str));
        }

        return str;
      }

      function utf8Str2ArrayBuffer(str, returnUInt8Array) {
        var length = str.length,
            buff = new ArrayBuffer(length),
            arr = new Uint8Array(buff),
            i;

        for (i = 0; i < length; i += 1) {
          arr[i] = str.charCodeAt(i);
        }

        return returnUInt8Array ? arr : buff;
      }

      function arrayBuffer2Utf8Str(buff) {
        return String.fromCharCode.apply(null, new Uint8Array(buff));
      }

      function concatenateArrayBuffers(first, second, returnUInt8Array) {
        var result = new Uint8Array(first.byteLength + second.byteLength);
        result.set(new Uint8Array(first));
        result.set(new Uint8Array(second), first.byteLength);
        return returnUInt8Array ? result : result.buffer;
      }

      function hexToBinaryString(hex) {
        var bytes = [],
            length = hex.length,
            x;

        for (x = 0; x < length - 1; x += 2) {
          bytes.push(parseInt(hex.substr(x, 2), 16));
        }

        return String.fromCharCode.apply(String, bytes);
      }

      function SparkMD5() {
        this.reset();
      }

      SparkMD5.prototype.append = function (str) {
        this.appendBinary(toUtf8(str));
        return this;
      };

      SparkMD5.prototype.appendBinary = function (contents) {
        this._buff += contents;
        this._length += contents.length;
        var length = this._buff.length,
            i;

        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
        }

        this._buff = this._buff.substring(i - 64);
        return this;
      };

      SparkMD5.prototype.end = function (raw) {
        var buff = this._buff,
            length = buff.length,
            i,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ret;

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3);
        }

        this._finish(tail, length);

        ret = hex(this._hash);

        if (raw) {
          ret = hexToBinaryString(ret);
        }

        this.reset();
        return ret;
      };

      SparkMD5.prototype.reset = function () {
        this._buff = "";
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };

      SparkMD5.prototype.getState = function () {
        return {
          buff: this._buff,
          length: this._length,
          hash: this._hash
        };
      };

      SparkMD5.prototype.setState = function (state) {
        this._buff = state.buff;
        this._length = state.length;
        this._hash = state.hash;
        return this;
      };

      SparkMD5.prototype.destroy = function () {
        delete this._hash;
        delete this._buff;
        delete this._length;
      };

      SparkMD5.prototype._finish = function (tail, length) {
        var i = length,
            tmp,
            lo,
            hi;
        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(this._hash, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = this._length * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this._hash, tail);
      };

      SparkMD5.hash = function (str, raw) {
        return SparkMD5.hashBinary(toUtf8(str), raw);
      };

      SparkMD5.hashBinary = function (content, raw) {
        var hash = md51(content),
            ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };

      SparkMD5.ArrayBuffer = function () {
        this.reset();
      };

      SparkMD5.ArrayBuffer.prototype.append = function (arr) {
        var buff = concatenateArrayBuffers(this._buff.buffer, arr, true),
            length = buff.length,
            i;
        this._length += arr.byteLength;

        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
        }

        this._buff = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
        return this;
      };

      SparkMD5.ArrayBuffer.prototype.end = function (raw) {
        var buff = this._buff,
            length = buff.length,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            i,
            ret;

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= buff[i] << (i % 4 << 3);
        }

        this._finish(tail, length);

        ret = hex(this._hash);

        if (raw) {
          ret = hexToBinaryString(ret);
        }

        this.reset();
        return ret;
      };

      SparkMD5.ArrayBuffer.prototype.reset = function () {
        this._buff = new Uint8Array(0);
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };

      SparkMD5.ArrayBuffer.prototype.getState = function () {
        var state = SparkMD5.prototype.getState.call(this);
        state.buff = arrayBuffer2Utf8Str(state.buff);
        return state;
      };

      SparkMD5.ArrayBuffer.prototype.setState = function (state) {
        state.buff = utf8Str2ArrayBuffer(state.buff, true);
        return SparkMD5.prototype.setState.call(this, state);
      };

      SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
      SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;

      SparkMD5.ArrayBuffer.hash = function (arr, raw) {
        var hash = md51_array(new Uint8Array(arr)),
            ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };

      return SparkMD5;
    });
  });

  var classCallCheck = function classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var fileSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice;

  var FileChecksum = function () {
    createClass(FileChecksum, null, [{
      key: "create",
      value: function create(file, callback) {
        var instance = new FileChecksum(file);
        instance.create(callback);
      }
    }]);

    function FileChecksum(file) {
      classCallCheck(this, FileChecksum);
      this.file = file;
      this.chunkSize = 2097152;
      this.chunkCount = Math.ceil(this.file.size / this.chunkSize);
      this.chunkIndex = 0;
    }

    createClass(FileChecksum, [{
      key: "create",
      value: function create(callback) {
        var _this = this;

        this.callback = callback;
        this.md5Buffer = new sparkMd5.ArrayBuffer();
        this.fileReader = new FileReader();
        this.fileReader.addEventListener("load", function (event) {
          return _this.fileReaderDidLoad(event);
        });
        this.fileReader.addEventListener("error", function (event) {
          return _this.fileReaderDidError(event);
        });
        this.readNextChunk();
      }
    }, {
      key: "fileReaderDidLoad",
      value: function fileReaderDidLoad(event) {
        this.md5Buffer.append(event.target.result);

        if (!this.readNextChunk()) {
          var binaryDigest = this.md5Buffer.end(true);
          var base64digest = btoa(binaryDigest);
          this.callback(null, base64digest);
        }
      }
    }, {
      key: "fileReaderDidError",
      value: function fileReaderDidError(event) {
        this.callback("Error reading " + this.file.name);
      }
    }, {
      key: "readNextChunk",
      value: function readNextChunk() {
        if (this.chunkIndex < this.chunkCount || this.chunkIndex == 0 && this.chunkCount == 0) {
          var start = this.chunkIndex * this.chunkSize;
          var end = Math.min(start + this.chunkSize, this.file.size);
          var bytes = fileSlice.call(this.file, start, end);
          this.fileReader.readAsArrayBuffer(bytes);
          this.chunkIndex++;
          return true;
        } else {
          return false;
        }
      }
    }]);
    return FileChecksum;
  }();

  function getMetaValue(name) {
    var element = findElement(document.head, 'meta[name="' + name + '"]');

    if (element) {
      return element.getAttribute("content");
    }
  }

  function findElements(root, selector) {
    if (typeof root == "string") {
      selector = root;
      root = document;
    }

    var elements = root.querySelectorAll(selector);
    return toArray$1(elements);
  }

  function findElement(root, selector) {
    if (typeof root == "string") {
      selector = root;
      root = document;
    }

    return root.querySelector(selector);
  }

  function dispatchEvent(element, type) {
    var eventInit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var disabled = element.disabled;
    var bubbles = eventInit.bubbles,
        cancelable = eventInit.cancelable,
        detail = eventInit.detail;
    var event = document.createEvent("Event");
    event.initEvent(type, bubbles || true, cancelable || true);
    event.detail = detail || {};

    try {
      element.disabled = false;
      element.dispatchEvent(event);
    } finally {
      element.disabled = disabled;
    }

    return event;
  }

  function toArray$1(value) {
    if (Array.isArray(value)) {
      return value;
    } else if (Array.from) {
      return Array.from(value);
    } else {
      return [].slice.call(value);
    }
  }

  var BlobRecord = function () {
    function BlobRecord(file, checksum, url) {
      var _this = this;

      classCallCheck(this, BlobRecord);
      this.file = file;
      this.attributes = {
        filename: file.name,
        content_type: file.type || "application/octet-stream",
        byte_size: file.size,
        checksum: checksum
      };
      this.xhr = new XMLHttpRequest();
      this.xhr.open("POST", url, true);
      this.xhr.responseType = "json";
      this.xhr.setRequestHeader("Content-Type", "application/json");
      this.xhr.setRequestHeader("Accept", "application/json");
      this.xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      var csrfToken = getMetaValue("csrf-token");

      if (csrfToken != undefined) {
        this.xhr.setRequestHeader("X-CSRF-Token", csrfToken);
      }

      this.xhr.addEventListener("load", function (event) {
        return _this.requestDidLoad(event);
      });
      this.xhr.addEventListener("error", function (event) {
        return _this.requestDidError(event);
      });
    }

    createClass(BlobRecord, [{
      key: "create",
      value: function create(callback) {
        this.callback = callback;
        this.xhr.send(JSON.stringify({
          blob: this.attributes
        }));
      }
    }, {
      key: "requestDidLoad",
      value: function requestDidLoad(event) {
        if (this.status >= 200 && this.status < 300) {
          var response = this.response;
          var direct_upload = response.direct_upload;
          delete response.direct_upload;
          this.attributes = response;
          this.directUploadData = direct_upload;
          this.callback(null, this.toJSON());
        } else {
          this.requestDidError(event);
        }
      }
    }, {
      key: "requestDidError",
      value: function requestDidError(event) {
        this.callback('Error creating Blob for "' + this.file.name + '". Status: ' + this.status);
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var result = {};

        for (var key in this.attributes) {
          result[key] = this.attributes[key];
        }

        return result;
      }
    }, {
      key: "status",
      get: function get$$1() {
        return this.xhr.status;
      }
    }, {
      key: "response",
      get: function get$$1() {
        var _xhr = this.xhr,
            responseType = _xhr.responseType,
            response = _xhr.response;

        if (responseType == "json") {
          return response;
        } else {
          return JSON.parse(response);
        }
      }
    }]);
    return BlobRecord;
  }();

  var BlobUpload = function () {
    function BlobUpload(blob) {
      var _this = this;

      classCallCheck(this, BlobUpload);
      this.blob = blob;
      this.file = blob.file;
      var _blob$directUploadDat = blob.directUploadData,
          url = _blob$directUploadDat.url,
          headers = _blob$directUploadDat.headers;
      this.xhr = new XMLHttpRequest();
      this.xhr.open("PUT", url, true);
      this.xhr.responseType = "text";

      for (var key in headers) {
        this.xhr.setRequestHeader(key, headers[key]);
      }

      this.xhr.addEventListener("load", function (event) {
        return _this.requestDidLoad(event);
      });
      this.xhr.addEventListener("error", function (event) {
        return _this.requestDidError(event);
      });
    }

    createClass(BlobUpload, [{
      key: "create",
      value: function create(callback) {
        this.callback = callback;
        this.xhr.send(this.file.slice());
      }
    }, {
      key: "requestDidLoad",
      value: function requestDidLoad(event) {
        var _xhr = this.xhr,
            status = _xhr.status,
            response = _xhr.response;

        if (status >= 200 && status < 300) {
          this.callback(null, response);
        } else {
          this.requestDidError(event);
        }
      }
    }, {
      key: "requestDidError",
      value: function requestDidError(event) {
        this.callback('Error storing "' + this.file.name + '". Status: ' + this.xhr.status);
      }
    }]);
    return BlobUpload;
  }();

  var id = 0;

  var DirectUpload = function () {
    function DirectUpload(file, url, delegate) {
      classCallCheck(this, DirectUpload);
      this.id = ++id;
      this.file = file;
      this.url = url;
      this.delegate = delegate;
    }

    createClass(DirectUpload, [{
      key: "create",
      value: function create(callback) {
        var _this = this;

        FileChecksum.create(this.file, function (error, checksum) {
          if (error) {
            callback(error);
            return;
          }

          var blob = new BlobRecord(_this.file, checksum, _this.url);
          notify(_this.delegate, "directUploadWillCreateBlobWithXHR", blob.xhr);
          blob.create(function (error) {
            if (error) {
              callback(error);
            } else {
              var upload = new BlobUpload(blob);
              notify(_this.delegate, "directUploadWillStoreFileWithXHR", upload.xhr);
              upload.create(function (error) {
                if (error) {
                  callback(error);
                } else {
                  callback(null, blob.toJSON());
                }
              });
            }
          });
        });
      }
    }]);
    return DirectUpload;
  }();

  function notify(object, methodName) {
    if (object && typeof object[methodName] == "function") {
      for (var _len = arguments.length, messages = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        messages[_key - 2] = arguments[_key];
      }

      return object[methodName].apply(object, messages);
    }
  }

  var DirectUploadController = function () {
    function DirectUploadController(input, file) {
      classCallCheck(this, DirectUploadController);
      this.input = input;
      this.file = file;
      this.directUpload = new DirectUpload(this.file, this.url, this);
      this.dispatch("initialize");
    }

    createClass(DirectUploadController, [{
      key: "start",
      value: function start(callback) {
        var _this = this;

        var hiddenInput = document.createElement("input");
        hiddenInput.type = "hidden";
        hiddenInput.name = this.input.name;
        this.input.insertAdjacentElement("beforebegin", hiddenInput);
        this.dispatch("start");
        this.directUpload.create(function (error, attributes) {
          if (error) {
            hiddenInput.parentNode.removeChild(hiddenInput);

            _this.dispatchError(error);
          } else {
            hiddenInput.value = attributes.signed_id;
          }

          _this.dispatch("end");

          callback(error);
        });
      }
    }, {
      key: "uploadRequestDidProgress",
      value: function uploadRequestDidProgress(event) {
        var progress = event.loaded / event.total * 100;

        if (progress) {
          this.dispatch("progress", {
            progress: progress
          });
        }
      }
    }, {
      key: "dispatch",
      value: function dispatch(name) {
        var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        detail.file = this.file;
        detail.id = this.directUpload.id;
        return dispatchEvent(this.input, "direct-upload:" + name, {
          detail: detail
        });
      }
    }, {
      key: "dispatchError",
      value: function dispatchError(error) {
        var event = this.dispatch("error", {
          error: error
        });

        if (!event.defaultPrevented) {
          alert(error);
        }
      }
    }, {
      key: "directUploadWillCreateBlobWithXHR",
      value: function directUploadWillCreateBlobWithXHR(xhr) {
        this.dispatch("before-blob-request", {
          xhr: xhr
        });
      }
    }, {
      key: "directUploadWillStoreFileWithXHR",
      value: function directUploadWillStoreFileWithXHR(xhr) {
        var _this2 = this;

        this.dispatch("before-storage-request", {
          xhr: xhr
        });
        xhr.upload.addEventListener("progress", function (event) {
          return _this2.uploadRequestDidProgress(event);
        });
      }
    }, {
      key: "url",
      get: function get$$1() {
        return this.input.getAttribute("data-direct-upload-url");
      }
    }]);
    return DirectUploadController;
  }();

  var inputSelector = "input[type=file][data-direct-upload-url]:not([disabled])";

  var DirectUploadsController = function () {
    function DirectUploadsController(form) {
      classCallCheck(this, DirectUploadsController);
      this.form = form;
      this.inputs = findElements(form, inputSelector).filter(function (input) {
        return input.files.length;
      });
    }

    createClass(DirectUploadsController, [{
      key: "start",
      value: function start(callback) {
        var _this = this;

        var controllers = this.createDirectUploadControllers();

        var startNextController = function startNextController() {
          var controller = controllers.shift();

          if (controller) {
            controller.start(function (error) {
              if (error) {
                callback(error);

                _this.dispatch("end");
              } else {
                startNextController();
              }
            });
          } else {
            callback();

            _this.dispatch("end");
          }
        };

        this.dispatch("start");
        startNextController();
      }
    }, {
      key: "createDirectUploadControllers",
      value: function createDirectUploadControllers() {
        var controllers = [];
        this.inputs.forEach(function (input) {
          toArray$1(input.files).forEach(function (file) {
            var controller = new DirectUploadController(input, file);
            controllers.push(controller);
          });
        });
        return controllers;
      }
    }, {
      key: "dispatch",
      value: function dispatch(name) {
        var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return dispatchEvent(this.form, "direct-uploads:" + name, {
          detail: detail
        });
      }
    }]);
    return DirectUploadsController;
  }();

  var processingAttribute = "data-direct-uploads-processing";
  var submitButtonsByForm = new WeakMap();
  var started = false;

  function start() {
    if (!started) {
      started = true;
      document.addEventListener("click", didClick, true);
      document.addEventListener("submit", didSubmitForm);
      document.addEventListener("ajax:before", didSubmitRemoteElement);
    }
  }

  function didClick(event) {
    var target = event.target;

    if ((target.tagName == "INPUT" || target.tagName == "BUTTON") && target.type == "submit" && target.form) {
      submitButtonsByForm.set(target.form, target);
    }
  }

  function didSubmitForm(event) {
    handleFormSubmissionEvent(event);
  }

  function didSubmitRemoteElement(event) {
    if (event.target.tagName == "FORM") {
      handleFormSubmissionEvent(event);
    }
  }

  function handleFormSubmissionEvent(event) {
    var form = event.target;

    if (form.hasAttribute(processingAttribute)) {
      event.preventDefault();
      return;
    }

    var controller = new DirectUploadsController(form);
    var inputs = controller.inputs;

    if (inputs.length) {
      event.preventDefault();
      form.setAttribute(processingAttribute, "");
      inputs.forEach(disable);
      controller.start(function (error) {
        form.removeAttribute(processingAttribute);

        if (error) {
          inputs.forEach(enable);
        } else {
          submitForm(form);
        }
      });
    }
  }

  function submitForm(form) {
    var button = submitButtonsByForm.get(form) || findElement(form, "input[type=submit], button[type=submit]");

    if (button) {
      var _button = button,
          disabled = _button.disabled;
      button.disabled = false;
      button.focus();
      button.click();
      button.disabled = disabled;
    } else {
      button = document.createElement("input");
      button.type = "submit";
      button.style.display = "none";
      form.appendChild(button);
      button.click();
      form.removeChild(button);
    }

    submitButtonsByForm.delete(form);
  }

  function disable(input) {
    input.disabled = true;
  }

  function enable(input) {
    input.disabled = false;
  }

  function autostart() {
    if (window.ActiveStorage) {
      start();
    }
  }

  setTimeout(autostart, 1);
  exports.start = start;
  exports.DirectUpload = DirectUpload;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
});

/***/ }),

/***/ "./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js":
/*!******************************************************************!*\
  !*** ./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
Unobtrusive JavaScript
https://github.com/rails/rails/blob/main/actionview/app/assets/javascripts
Released under the MIT license
 */
;
(function () {
  var context = this;
  (function () {
    (function () {
      this.Rails = {
        linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]',
        buttonClickSelector: {
          selector: 'button[data-remote]:not([form]), button[data-confirm]:not([form])',
          exclude: 'form button'
        },
        inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',
        formSubmitSelector: 'form:not([data-turbo=true])',
        formInputClickSelector: 'form:not([data-turbo=true]) input[type=submit], form:not([data-turbo=true]) input[type=image], form:not([data-turbo=true]) button[type=submit], form:not([data-turbo=true]) button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])',
        formDisableSelector: 'input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled',
        formEnableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled',
        fileInputSelector: 'input[name][type=file]:not([disabled])',
        linkDisableSelector: 'a[data-disable-with], a[data-disable]',
        buttonDisableSelector: 'button[data-remote][data-disable-with], button[data-remote][data-disable]'
      };
    }).call(this);
  }).call(context);
  var Rails = context.Rails;
  (function () {
    (function () {
      var nonce;
      nonce = null;

      Rails.loadCSPNonce = function () {
        var ref;
        return nonce = (ref = document.querySelector("meta[name=csp-nonce]")) != null ? ref.content : void 0;
      };

      Rails.cspNonce = function () {
        return nonce != null ? nonce : Rails.loadCSPNonce();
      };
    }).call(this);
    (function () {
      var expando, m;
      m = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector;

      Rails.matches = function (element, selector) {
        if (selector.exclude != null) {
          return m.call(element, selector.selector) && !m.call(element, selector.exclude);
        } else {
          return m.call(element, selector);
        }
      };

      expando = '_ujsData';

      Rails.getData = function (element, key) {
        var ref;
        return (ref = element[expando]) != null ? ref[key] : void 0;
      };

      Rails.setData = function (element, key, value) {
        if (element[expando] == null) {
          element[expando] = {};
        }

        return element[expando][key] = value;
      };

      Rails.$ = function (selector) {
        return Array.prototype.slice.call(document.querySelectorAll(selector));
      };
    }).call(this);
    (function () {
      var $, csrfParam, csrfToken;
      $ = Rails.$;

      csrfToken = Rails.csrfToken = function () {
        var meta;
        meta = document.querySelector('meta[name=csrf-token]');
        return meta && meta.content;
      };

      csrfParam = Rails.csrfParam = function () {
        var meta;
        meta = document.querySelector('meta[name=csrf-param]');
        return meta && meta.content;
      };

      Rails.CSRFProtection = function (xhr) {
        var token;
        token = csrfToken();

        if (token != null) {
          return xhr.setRequestHeader('X-CSRF-Token', token);
        }
      };

      Rails.refreshCSRFTokens = function () {
        var param, token;
        token = csrfToken();
        param = csrfParam();

        if (token != null && param != null) {
          return $('form input[name="' + param + '"]').forEach(function (input) {
            return input.value = token;
          });
        }
      };
    }).call(this);
    (function () {
      var CustomEvent, fire, matches, preventDefault;
      matches = Rails.matches;
      CustomEvent = window.CustomEvent;

      if (typeof CustomEvent !== 'function') {
        CustomEvent = function CustomEvent(event, params) {
          var evt;
          evt = document.createEvent('CustomEvent');
          evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
          return evt;
        };

        CustomEvent.prototype = window.Event.prototype;
        preventDefault = CustomEvent.prototype.preventDefault;

        CustomEvent.prototype.preventDefault = function () {
          var result;
          result = preventDefault.call(this);

          if (this.cancelable && !this.defaultPrevented) {
            Object.defineProperty(this, 'defaultPrevented', {
              get: function get() {
                return true;
              }
            });
          }

          return result;
        };
      }

      fire = Rails.fire = function (obj, name, data) {
        var event;
        event = new CustomEvent(name, {
          bubbles: true,
          cancelable: true,
          detail: data
        });
        obj.dispatchEvent(event);
        return !event.defaultPrevented;
      };

      Rails.stopEverything = function (e) {
        fire(e.target, 'ujs:everythingStopped');
        e.preventDefault();
        e.stopPropagation();
        return e.stopImmediatePropagation();
      };

      Rails.delegate = function (element, selector, eventType, handler) {
        return element.addEventListener(eventType, function (e) {
          var target;
          target = e.target;

          while (!(!(target instanceof Element) || matches(target, selector))) {
            target = target.parentNode;
          }

          if (target instanceof Element && handler.call(target, e) === false) {
            e.preventDefault();
            return e.stopPropagation();
          }
        });
      };
    }).call(this);
    (function () {
      var AcceptHeaders, CSRFProtection, createXHR, cspNonce, fire, prepareOptions, processResponse;
      cspNonce = Rails.cspNonce, CSRFProtection = Rails.CSRFProtection, fire = Rails.fire;
      AcceptHeaders = {
        '*': '*/*',
        text: 'text/plain',
        html: 'text/html',
        xml: 'application/xml, text/xml',
        json: 'application/json, text/javascript',
        script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
      };

      Rails.ajax = function (options) {
        var xhr;
        options = prepareOptions(options);
        xhr = createXHR(options, function () {
          var ref, response;
          response = processResponse((ref = xhr.response) != null ? ref : xhr.responseText, xhr.getResponseHeader('Content-Type'));

          if (Math.floor(xhr.status / 100) === 2) {
            if (typeof options.success === "function") {
              options.success(response, xhr.statusText, xhr);
            }
          } else {
            if (typeof options.error === "function") {
              options.error(response, xhr.statusText, xhr);
            }
          }

          return typeof options.complete === "function" ? options.complete(xhr, xhr.statusText) : void 0;
        });

        if (options.beforeSend != null && !options.beforeSend(xhr, options)) {
          return false;
        }

        if (xhr.readyState === XMLHttpRequest.OPENED) {
          return xhr.send(options.data);
        }
      };

      prepareOptions = function prepareOptions(options) {
        options.url = options.url || location.href;
        options.type = options.type.toUpperCase();

        if (options.type === 'GET' && options.data) {
          if (options.url.indexOf('?') < 0) {
            options.url += '?' + options.data;
          } else {
            options.url += '&' + options.data;
          }
        }

        if (AcceptHeaders[options.dataType] == null) {
          options.dataType = '*';
        }

        options.accept = AcceptHeaders[options.dataType];

        if (options.dataType !== '*') {
          options.accept += ', */*; q=0.01';
        }

        return options;
      };

      createXHR = function createXHR(options, done) {
        var xhr;
        xhr = new XMLHttpRequest();
        xhr.open(options.type, options.url, true);
        xhr.setRequestHeader('Accept', options.accept);

        if (typeof options.data === 'string') {
          xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        }

        if (!options.crossDomain) {
          xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
          CSRFProtection(xhr);
        }

        xhr.withCredentials = !!options.withCredentials;

        xhr.onreadystatechange = function () {
          if (xhr.readyState === XMLHttpRequest.DONE) {
            return done(xhr);
          }
        };

        return xhr;
      };

      processResponse = function processResponse(response, type) {
        var parser, script;

        if (typeof response === 'string' && typeof type === 'string') {
          if (type.match(/\bjson\b/)) {
            try {
              response = JSON.parse(response);
            } catch (error) {}
          } else if (type.match(/\b(?:java|ecma)script\b/)) {
            script = document.createElement('script');
            script.setAttribute('nonce', cspNonce());
            script.text = response;
            document.head.appendChild(script).parentNode.removeChild(script);
          } else if (type.match(/\b(xml|html|svg)\b/)) {
            parser = new DOMParser();
            type = type.replace(/;.+/, '');

            try {
              response = parser.parseFromString(response, type);
            } catch (error) {}
          }
        }

        return response;
      };

      Rails.href = function (element) {
        return element.href;
      };

      Rails.isCrossDomain = function (url) {
        var e, originAnchor, urlAnchor;
        originAnchor = document.createElement('a');
        originAnchor.href = location.href;
        urlAnchor = document.createElement('a');

        try {
          urlAnchor.href = url;
          return !((!urlAnchor.protocol || urlAnchor.protocol === ':') && !urlAnchor.host || originAnchor.protocol + '//' + originAnchor.host === urlAnchor.protocol + '//' + urlAnchor.host);
        } catch (error) {
          e = error;
          return true;
        }
      };
    }).call(this);
    (function () {
      var matches, toArray;
      matches = Rails.matches;

      toArray = function toArray(e) {
        return Array.prototype.slice.call(e);
      };

      Rails.serializeElement = function (element, additionalParam) {
        var inputs, params;
        inputs = [element];

        if (matches(element, 'form')) {
          inputs = toArray(element.elements);
        }

        params = [];
        inputs.forEach(function (input) {
          if (!input.name || input.disabled) {
            return;
          }

          if (matches(input, 'fieldset[disabled] *')) {
            return;
          }

          if (matches(input, 'select')) {
            return toArray(input.options).forEach(function (option) {
              if (option.selected) {
                return params.push({
                  name: input.name,
                  value: option.value
                });
              }
            });
          } else if (input.checked || ['radio', 'checkbox', 'submit'].indexOf(input.type) === -1) {
            return params.push({
              name: input.name,
              value: input.value
            });
          }
        });

        if (additionalParam) {
          params.push(additionalParam);
        }

        return params.map(function (param) {
          if (param.name != null) {
            return encodeURIComponent(param.name) + "=" + encodeURIComponent(param.value);
          } else {
            return param;
          }
        }).join('&');
      };

      Rails.formElements = function (form, selector) {
        if (matches(form, 'form')) {
          return toArray(form.elements).filter(function (el) {
            return matches(el, selector);
          });
        } else {
          return toArray(form.querySelectorAll(selector));
        }
      };
    }).call(this);
    (function () {
      var allowAction, fire, stopEverything;
      fire = Rails.fire, stopEverything = Rails.stopEverything;

      Rails.handleConfirm = function (e) {
        if (!allowAction(this)) {
          return stopEverything(e);
        }
      };

      Rails.confirm = function (message, element) {
        return confirm(message);
      };

      allowAction = function allowAction(element) {
        var answer, callback, message;
        message = element.getAttribute('data-confirm');

        if (!message) {
          return true;
        }

        answer = false;

        if (fire(element, 'confirm')) {
          try {
            answer = Rails.confirm(message, element);
          } catch (error) {}

          callback = fire(element, 'confirm:complete', [answer]);
        }

        return answer && callback;
      };
    }).call(this);
    (function () {
      var disableFormElement, disableFormElements, disableLinkElement, enableFormElement, enableFormElements, enableLinkElement, formElements, getData, isXhrRedirect, matches, setData, stopEverything;
      matches = Rails.matches, getData = Rails.getData, setData = Rails.setData, stopEverything = Rails.stopEverything, formElements = Rails.formElements;

      Rails.handleDisabledElement = function (e) {
        var element;
        element = this;

        if (element.disabled) {
          return stopEverything(e);
        }
      };

      Rails.enableElement = function (e) {
        var element;

        if (e instanceof Event) {
          if (isXhrRedirect(e)) {
            return;
          }

          element = e.target;
        } else {
          element = e;
        }

        if (matches(element, Rails.linkDisableSelector)) {
          return enableLinkElement(element);
        } else if (matches(element, Rails.buttonDisableSelector) || matches(element, Rails.formEnableSelector)) {
          return enableFormElement(element);
        } else if (matches(element, Rails.formSubmitSelector)) {
          return enableFormElements(element);
        }
      };

      Rails.disableElement = function (e) {
        var element;
        element = e instanceof Event ? e.target : e;

        if (matches(element, Rails.linkDisableSelector)) {
          return disableLinkElement(element);
        } else if (matches(element, Rails.buttonDisableSelector) || matches(element, Rails.formDisableSelector)) {
          return disableFormElement(element);
        } else if (matches(element, Rails.formSubmitSelector)) {
          return disableFormElements(element);
        }
      };

      disableLinkElement = function disableLinkElement(element) {
        var replacement;

        if (getData(element, 'ujs:disabled')) {
          return;
        }

        replacement = element.getAttribute('data-disable-with');

        if (replacement != null) {
          setData(element, 'ujs:enable-with', element.innerHTML);
          element.innerHTML = replacement;
        }

        element.addEventListener('click', stopEverything);
        return setData(element, 'ujs:disabled', true);
      };

      enableLinkElement = function enableLinkElement(element) {
        var originalText;
        originalText = getData(element, 'ujs:enable-with');

        if (originalText != null) {
          element.innerHTML = originalText;
          setData(element, 'ujs:enable-with', null);
        }

        element.removeEventListener('click', stopEverything);
        return setData(element, 'ujs:disabled', null);
      };

      disableFormElements = function disableFormElements(form) {
        return formElements(form, Rails.formDisableSelector).forEach(disableFormElement);
      };

      disableFormElement = function disableFormElement(element) {
        var replacement;

        if (getData(element, 'ujs:disabled')) {
          return;
        }

        replacement = element.getAttribute('data-disable-with');

        if (replacement != null) {
          if (matches(element, 'button')) {
            setData(element, 'ujs:enable-with', element.innerHTML);
            element.innerHTML = replacement;
          } else {
            setData(element, 'ujs:enable-with', element.value);
            element.value = replacement;
          }
        }

        element.disabled = true;
        return setData(element, 'ujs:disabled', true);
      };

      enableFormElements = function enableFormElements(form) {
        return formElements(form, Rails.formEnableSelector).forEach(enableFormElement);
      };

      enableFormElement = function enableFormElement(element) {
        var originalText;
        originalText = getData(element, 'ujs:enable-with');

        if (originalText != null) {
          if (matches(element, 'button')) {
            element.innerHTML = originalText;
          } else {
            element.value = originalText;
          }

          setData(element, 'ujs:enable-with', null);
        }

        element.disabled = false;
        return setData(element, 'ujs:disabled', null);
      };

      isXhrRedirect = function isXhrRedirect(event) {
        var ref, xhr;
        xhr = (ref = event.detail) != null ? ref[0] : void 0;
        return (xhr != null ? xhr.getResponseHeader("X-Xhr-Redirect") : void 0) != null;
      };
    }).call(this);
    (function () {
      var stopEverything;
      stopEverything = Rails.stopEverything;

      Rails.handleMethod = function (e) {
        var csrfParam, csrfToken, form, formContent, href, link, method;
        link = this;
        method = link.getAttribute('data-method');

        if (!method) {
          return;
        }

        href = Rails.href(link);
        csrfToken = Rails.csrfToken();
        csrfParam = Rails.csrfParam();
        form = document.createElement('form');
        formContent = "<input name='_method' value='" + method + "' type='hidden' />";

        if (csrfParam != null && csrfToken != null && !Rails.isCrossDomain(href)) {
          formContent += "<input name='" + csrfParam + "' value='" + csrfToken + "' type='hidden' />";
        }

        formContent += '<input type="submit" />';
        form.method = 'post';
        form.action = href;
        form.target = link.target;
        form.innerHTML = formContent;
        form.style.display = 'none';
        document.body.appendChild(form);
        form.querySelector('[type="submit"]').click();
        return stopEverything(e);
      };
    }).call(this);
    (function () {
      var ajax,
          fire,
          getData,
          isCrossDomain,
          isRemote,
          matches,
          serializeElement,
          setData,
          stopEverything,
          slice = [].slice;
      matches = Rails.matches, getData = Rails.getData, setData = Rails.setData, fire = Rails.fire, stopEverything = Rails.stopEverything, ajax = Rails.ajax, isCrossDomain = Rails.isCrossDomain, serializeElement = Rails.serializeElement;

      isRemote = function isRemote(element) {
        var value;
        value = element.getAttribute('data-remote');
        return value != null && value !== 'false';
      };

      Rails.handleRemote = function (e) {
        var button, data, dataType, element, method, url, withCredentials;
        element = this;

        if (!isRemote(element)) {
          return true;
        }

        if (!fire(element, 'ajax:before')) {
          fire(element, 'ajax:stopped');
          return false;
        }

        withCredentials = element.getAttribute('data-with-credentials');
        dataType = element.getAttribute('data-type') || 'script';

        if (matches(element, Rails.formSubmitSelector)) {
          button = getData(element, 'ujs:submit-button');
          method = getData(element, 'ujs:submit-button-formmethod') || element.method;
          url = getData(element, 'ujs:submit-button-formaction') || element.getAttribute('action') || location.href;

          if (method.toUpperCase() === 'GET') {
            url = url.replace(/\?.*$/, '');
          }

          if (element.enctype === 'multipart/form-data') {
            data = new FormData(element);

            if (button != null) {
              data.append(button.name, button.value);
            }
          } else {
            data = serializeElement(element, button);
          }

          setData(element, 'ujs:submit-button', null);
          setData(element, 'ujs:submit-button-formmethod', null);
          setData(element, 'ujs:submit-button-formaction', null);
        } else if (matches(element, Rails.buttonClickSelector) || matches(element, Rails.inputChangeSelector)) {
          method = element.getAttribute('data-method');
          url = element.getAttribute('data-url');
          data = serializeElement(element, element.getAttribute('data-params'));
        } else {
          method = element.getAttribute('data-method');
          url = Rails.href(element);
          data = element.getAttribute('data-params');
        }

        ajax({
          type: method || 'GET',
          url: url,
          data: data,
          dataType: dataType,
          beforeSend: function beforeSend(xhr, options) {
            if (fire(element, 'ajax:beforeSend', [xhr, options])) {
              return fire(element, 'ajax:send', [xhr]);
            } else {
              fire(element, 'ajax:stopped');
              return false;
            }
          },
          success: function success() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:success', args);
          },
          error: function error() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:error', args);
          },
          complete: function complete() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:complete', args);
          },
          crossDomain: isCrossDomain(url),
          withCredentials: withCredentials != null && withCredentials !== 'false'
        });
        return stopEverything(e);
      };

      Rails.formSubmitButtonClick = function (e) {
        var button, form;
        button = this;
        form = button.form;

        if (!form) {
          return;
        }

        if (button.name) {
          setData(form, 'ujs:submit-button', {
            name: button.name,
            value: button.value
          });
        }

        setData(form, 'ujs:formnovalidate-button', button.formNoValidate);
        setData(form, 'ujs:submit-button-formaction', button.getAttribute('formaction'));
        return setData(form, 'ujs:submit-button-formmethod', button.getAttribute('formmethod'));
      };

      Rails.preventInsignificantClick = function (e) {
        var data, insignificantMetaClick, link, metaClick, method, nonPrimaryMouseClick;
        link = this;
        method = (link.getAttribute('data-method') || 'GET').toUpperCase();
        data = link.getAttribute('data-params');
        metaClick = e.metaKey || e.ctrlKey;
        insignificantMetaClick = metaClick && method === 'GET' && !data;
        nonPrimaryMouseClick = e.button != null && e.button !== 0;

        if (nonPrimaryMouseClick || insignificantMetaClick) {
          return e.stopImmediatePropagation();
        }
      };
    }).call(this);
    (function () {
      var $, CSRFProtection, delegate, disableElement, enableElement, fire, formSubmitButtonClick, getData, handleConfirm, handleDisabledElement, handleMethod, handleRemote, loadCSPNonce, preventInsignificantClick, refreshCSRFTokens;
      fire = Rails.fire, delegate = Rails.delegate, getData = Rails.getData, $ = Rails.$, refreshCSRFTokens = Rails.refreshCSRFTokens, CSRFProtection = Rails.CSRFProtection, loadCSPNonce = Rails.loadCSPNonce, enableElement = Rails.enableElement, disableElement = Rails.disableElement, handleDisabledElement = Rails.handleDisabledElement, handleConfirm = Rails.handleConfirm, preventInsignificantClick = Rails.preventInsignificantClick, handleRemote = Rails.handleRemote, formSubmitButtonClick = Rails.formSubmitButtonClick, handleMethod = Rails.handleMethod;

      if (typeof jQuery !== "undefined" && jQuery !== null && jQuery.ajax != null) {
        if (jQuery.rails) {
          throw new Error('If you load both jquery_ujs and rails-ujs, use rails-ujs only.');
        }

        jQuery.rails = Rails;
        jQuery.ajaxPrefilter(function (options, originalOptions, xhr) {
          if (!options.crossDomain) {
            return CSRFProtection(xhr);
          }
        });
      }

      Rails.start = function () {
        if (window._rails_loaded) {
          throw new Error('rails-ujs has already been loaded!');
        }

        window.addEventListener('pageshow', function () {
          $(Rails.formEnableSelector).forEach(function (el) {
            if (getData(el, 'ujs:disabled')) {
              return enableElement(el);
            }
          });
          return $(Rails.linkDisableSelector).forEach(function (el) {
            if (getData(el, 'ujs:disabled')) {
              return enableElement(el);
            }
          });
        });
        delegate(document, Rails.linkDisableSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.linkDisableSelector, 'ajax:stopped', enableElement);
        delegate(document, Rails.buttonDisableSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.buttonDisableSelector, 'ajax:stopped', enableElement);
        delegate(document, Rails.linkClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.linkClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.linkClickSelector, 'click', handleConfirm);
        delegate(document, Rails.linkClickSelector, 'click', disableElement);
        delegate(document, Rails.linkClickSelector, 'click', handleRemote);
        delegate(document, Rails.linkClickSelector, 'click', handleMethod);
        delegate(document, Rails.buttonClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.buttonClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.buttonClickSelector, 'click', handleConfirm);
        delegate(document, Rails.buttonClickSelector, 'click', disableElement);
        delegate(document, Rails.buttonClickSelector, 'click', handleRemote);
        delegate(document, Rails.inputChangeSelector, 'change', handleDisabledElement);
        delegate(document, Rails.inputChangeSelector, 'change', handleConfirm);
        delegate(document, Rails.inputChangeSelector, 'change', handleRemote);
        delegate(document, Rails.formSubmitSelector, 'submit', handleDisabledElement);
        delegate(document, Rails.formSubmitSelector, 'submit', handleConfirm);
        delegate(document, Rails.formSubmitSelector, 'submit', handleRemote);
        delegate(document, Rails.formSubmitSelector, 'submit', function (e) {
          return setTimeout(function () {
            return disableElement(e);
          }, 13);
        });
        delegate(document, Rails.formSubmitSelector, 'ajax:send', disableElement);
        delegate(document, Rails.formSubmitSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.formInputClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.formInputClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.formInputClickSelector, 'click', handleConfirm);
        delegate(document, Rails.formInputClickSelector, 'click', formSubmitButtonClick);
        document.addEventListener('DOMContentLoaded', refreshCSRFTokens);
        document.addEventListener('DOMContentLoaded', loadCSPNonce);
        return window._rails_loaded = true;
      };

      if (window.Rails === Rails && fire(document, 'rails:attachBindings')) {
        Rails.start();
      }
    }).call(this);
  }).call(this);

  if (( false ? undefined : _typeof(module)) === "object" && module.exports) {
    module.exports = Rails;
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (Rails),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
}).call(this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/cable_ready/javascript/action_cable.js":
/*!*************************************************************!*\
  !*** ./node_modules/cable_ready/javascript/action_cable.js ***!
  \*************************************************************/
/*! exports provided: consumer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "consumer", function() { return consumer; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var consumer;

var wait = function wait() {
  return new Promise(function (resolve) {
    return setTimeout(resolve);
  });
};

var retryGetConsumer = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (consumer) {
              _context.next = 6;
              break;
            }

            _context.next = 3;
            return wait();

          case 3:
            return _context.abrupt("return", retryGetConsumer());

          case 6:
            return _context.abrupt("return", consumer);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function retryGetConsumer() {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = ({
  setConsumer: function setConsumer(value) {
    consumer = value;
  },
  getConsumer: function getConsumer() {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", new Promise(function (resolve, reject) {
                consumer = retryGetConsumer();
                resolve(consumer);
              }));

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }
});

/***/ }),

/***/ "./node_modules/cable_ready/javascript/active_element.js":
/*!***************************************************************!*\
  !*** ./node_modules/cable_ready/javascript/active_element.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var activeElement;
/* harmony default export */ __webpack_exports__["default"] = ({
  get element() {
    return activeElement;
  },

  set: function set(element) {
    activeElement = element;
  }
});

/***/ }),

/***/ "./node_modules/cable_ready/javascript/cable_ready.js":
/*!************************************************************!*\
  !*** ./node_modules/cable_ready/javascript/cable_ready.js ***!
  \************************************************************/
/*! exports provided: perform, performAsync, initialize, consumer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "perform", function() { return perform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "performAsync", function() { return performAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialize", function() { return initialize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "consumer", function() { return consumer; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/cable_ready/javascript/utils.js");
/* harmony import */ var _active_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./active_element */ "./node_modules/cable_ready/javascript/active_element.js");
/* harmony import */ var _operation_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./operation_store */ "./node_modules/cable_ready/javascript/operation_store.js");
/* harmony import */ var _action_cable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action_cable */ "./node_modules/cable_ready/javascript/action_cable.js");
/* harmony import */ var _elements_stream_from_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./elements/stream_from_element */ "./node_modules/cable_ready/javascript/elements/stream_from_element.js");
/* harmony import */ var _elements_updates_for_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./elements/updates_for_element */ "./node_modules/cable_ready/javascript/elements/updates_for_element.js");







var perform = function perform(operations) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    emitMissingElementWarnings: true
  };
  var batches = {};
  operations.forEach(function (operation) {
    if (!!operation.batch) batches[operation.batch] = batches[operation.batch] ? ++batches[operation.batch] : 1;
  });
  operations.forEach(function (operation) {
    var name = operation.operation;

    try {
      if (operation.selector) {
        operation.element = operation.xpath ? Object(_utils__WEBPACK_IMPORTED_MODULE_0__["xpathToElement"])(operation.selector) : document[operation.selectAll ? 'querySelectorAll' : 'querySelector'](operation.selector);
      } else {
        operation.element = document;
      }

      if (operation.element || options.emitMissingElementWarnings) {
        _active_element__WEBPACK_IMPORTED_MODULE_1__["default"].set(document.activeElement);
        var cableReadyOperation = _operation_store__WEBPACK_IMPORTED_MODULE_2__["default"].all[name];

        if (cableReadyOperation) {
          cableReadyOperation(operation);
          if (!!operation.batch && --batches[operation.batch] === 0) Object(_utils__WEBPACK_IMPORTED_MODULE_0__["dispatch"])(document, 'cable-ready:batch-complete', {
            batch: operation.batch
          });
        } else {
          console.error("CableReady couldn't find the \"".concat(name, "\" operation. Make sure you use the camelized form when calling an operation method."));
        }
      }
    } catch (e) {
      if (operation.element) {
        console.error("CableReady detected an error in ".concat(name, ": ").concat(e.message, ". If you need to support older browsers make sure you've included the corresponding polyfills. https://docs.stimulusreflex.com/setup#polyfills-for-ie11."));
        console.error(e);
      } else {
        console.warn("CableReady ".concat(name, " failed due to missing DOM element for selector: '").concat(operation.selector, "'"));
      }
    }
  });
};

var performAsync = function performAsync(operations) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    emitMissingElementWarnings: true
  };
  return new Promise(function (resolve, reject) {
    try {
      resolve(perform(operations, options));
    } catch (err) {
      reject(err);
    }
  });
};

var initialize = function initialize() {
  var initializeOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var consumer = initializeOptions.consumer;
  _action_cable__WEBPACK_IMPORTED_MODULE_3__["default"].setConsumer(consumer);
  if (!customElements.get('stream-from')) customElements.define('stream-from', _elements_stream_from_element__WEBPACK_IMPORTED_MODULE_4__["default"]);
  if (!customElements.get('updates-for')) customElements.define('updates-for', _elements_updates_for_element__WEBPACK_IMPORTED_MODULE_5__["default"]);
};


var consumer = _action_cable__WEBPACK_IMPORTED_MODULE_3__["default"].getConsumer();

/***/ }),

/***/ "./node_modules/cable_ready/javascript/elements/stream_from_element.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/cable_ready/javascript/elements/stream_from_element.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StreamFromElement; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .. */ "./node_modules/cable_ready/javascript/index.js");
/* harmony import */ var _subscribing_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subscribing_element */ "./node_modules/cable_ready/javascript/elements/subscribing_element.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var StreamFromElement = /*#__PURE__*/function (_SubscribingElement) {
  _inherits(StreamFromElement, _SubscribingElement);

  var _super = _createSuper(StreamFromElement);

  function StreamFromElement() {
    _classCallCheck(this, StreamFromElement);

    return _super.apply(this, arguments);
  }

  _createClass(StreamFromElement, [{
    key: "connectedCallback",
    value: function () {
      var _connectedCallback = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var consumer;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!this.preview) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                _context.next = 4;
                return ___WEBPACK_IMPORTED_MODULE_1__["default"].consumer;

              case 4:
                consumer = _context.sent;

                if (consumer) {
                  this.createSubscription(consumer, 'CableReady::Stream', this.performOperations);
                } else {
                  console.error('The `stream_from` helper cannot connect without an ActionCable consumer.\nPlease run `rails generate cable_ready:helpers` to fix this.');
                }

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function connectedCallback() {
        return _connectedCallback.apply(this, arguments);
      }

      return connectedCallback;
    }()
  }, {
    key: "performOperations",
    value: function performOperations(data) {
      if (data.cableReady) ___WEBPACK_IMPORTED_MODULE_1__["default"].perform(data.operations);
    }
  }]);

  return StreamFromElement;
}(_subscribing_element__WEBPACK_IMPORTED_MODULE_2__["default"]);



/***/ }),

/***/ "./node_modules/cable_ready/javascript/elements/subscribing_element.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/cable_ready/javascript/elements/subscribing_element.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SubscribingElement; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./node_modules/cable_ready/javascript/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var SubscribingElement = /*#__PURE__*/function (_HTMLElement) {
  _inherits(SubscribingElement, _HTMLElement);

  var _super = _createSuper(SubscribingElement);

  function SubscribingElement() {
    _classCallCheck(this, SubscribingElement);

    return _super.apply(this, arguments);
  }

  _createClass(SubscribingElement, [{
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      if (this.channel) this.channel.unsubscribe();
    }
  }, {
    key: "createSubscription",
    value: function createSubscription(consumer, channel, receivedCallback) {
      this.channel = consumer.subscriptions.create({
        channel: channel,
        identifier: this.getAttribute('identifier')
      }, {
        received: receivedCallback
      });
    }
  }, {
    key: "preview",
    get: function get() {
      return document.documentElement.hasAttribute('data-turbolinks-preview') || document.documentElement.hasAttribute('data-turbo-preview');
    }
  }]);

  return SubscribingElement;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));



/***/ }),

/***/ "./node_modules/cable_ready/javascript/elements/updates_for_element.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/cable_ready/javascript/elements/updates_for_element.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UpdatesForElement; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var morphdom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! morphdom */ "./node_modules/morphdom/dist/morphdom-esm.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .. */ "./node_modules/cable_ready/javascript/index.js");
/* harmony import */ var _subscribing_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subscribing_element */ "./node_modules/cable_ready/javascript/elements/subscribing_element.js");
/* harmony import */ var _morph_callbacks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../morph_callbacks */ "./node_modules/cable_ready/javascript/morph_callbacks.js");
/* harmony import */ var _active_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../active_element */ "./node_modules/cable_ready/javascript/active_element.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./node_modules/cable_ready/javascript/utils.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var template = "\n<style>\n  :host {\n    display: block;\n  }\n</style>\n<slot></slot>\n";

function url(ele) {
  return ele.hasAttribute('url') ? ele.getAttribute('url') : location.href;
}

var UpdatesForElement = /*#__PURE__*/function (_SubscribingElement) {
  _inherits(UpdatesForElement, _SubscribingElement);

  var _super = _createSuper(UpdatesForElement);

  function UpdatesForElement() {
    var _this;

    _classCallCheck(this, UpdatesForElement);

    _this = _super.call(this);

    var shadowRoot = _this.attachShadow({
      mode: 'open'
    });

    shadowRoot.innerHTML = template;
    return _this;
  }

  _createClass(UpdatesForElement, [{
    key: "connectedCallback",
    value: function () {
      var _connectedCallback = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var consumer;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!this.preview) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                this.update = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["debounce"])(this.update.bind(this), this.debounce);
                _context.next = 5;
                return ___WEBPACK_IMPORTED_MODULE_2__["default"].consumer;

              case 5:
                consumer = _context.sent;

                if (consumer) {
                  this.createSubscription(consumer, 'CableReady::Stream', this.update);
                } else {
                  console.error('The `updates-for` helper cannot connect without an ActionCable consumer.\nPlease run `rails generate cable_ready:helpers` to fix this.');
                }

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function connectedCallback() {
        return _connectedCallback.apply(this, arguments);
      }

      return connectedCallback;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var identifier, query, blocks, html, template, _loop, i, _ret;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                identifier = this.getAttribute('identifier');
                query = "updates-for[identifier=\"".concat(identifier, "\"]");
                blocks = document.querySelectorAll(query);

                if (!(blocks[0] !== this)) {
                  _context3.next = 5;
                  break;
                }

                return _context3.abrupt("return");

              case 5:
                html = {};
                template = document.createElement('template');
                _loop = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(i) {
                  var response, fragments, operation;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          blocks[i].setAttribute('updating', 'updating');

                          if (html.hasOwnProperty(url(blocks[i]))) {
                            _context2.next = 10;
                            break;
                          }

                          _context2.next = 4;
                          return fetch(url(blocks[i]), {
                            headers: {
                              'X-Cable-Ready': 'update'
                            }
                          }).then(_utils__WEBPACK_IMPORTED_MODULE_6__["handleErrors"]).catch(function (e) {
                            return console.error("Could not fetch ".concat(url(blocks[i])));
                          });

                        case 4:
                          response = _context2.sent;

                          if (!(response === undefined)) {
                            _context2.next = 7;
                            break;
                          }

                          return _context2.abrupt("return", {
                            v: void 0
                          });

                        case 7:
                          _context2.next = 9;
                          return response.text();

                        case 9:
                          html[url(blocks[i])] = _context2.sent;

                        case 10:
                          template.innerHTML = String(html[url(blocks[i])]).trim();
                          fragments = template.content.querySelectorAll(query);

                          if (!(fragments.length <= i)) {
                            _context2.next = 15;
                            break;
                          }

                          console.warn('Update aborted due to mismatched number of elements');
                          return _context2.abrupt("return", {
                            v: void 0
                          });

                        case 15:
                          _active_element__WEBPACK_IMPORTED_MODULE_5__["default"].set(document.activeElement);
                          operation = {
                            element: blocks[i],
                            html: fragments[i],
                            permanentAttributeName: 'data-ignore-updates'
                          };
                          Object(_utils__WEBPACK_IMPORTED_MODULE_6__["dispatch"])(blocks[i], 'cable-ready:before-update', operation);
                          Object(morphdom__WEBPACK_IMPORTED_MODULE_1__["default"])(blocks[i], fragments[i], {
                            childrenOnly: true,
                            onBeforeElUpdated: Object(_morph_callbacks__WEBPACK_IMPORTED_MODULE_4__["shouldMorph"])(operation),
                            onElUpdated: function onElUpdated(_) {
                              blocks[i].removeAttribute('updating');
                              Object(_utils__WEBPACK_IMPORTED_MODULE_6__["dispatch"])(blocks[i], 'cable-ready:after-update', operation);
                              Object(_utils__WEBPACK_IMPORTED_MODULE_6__["assignFocus"])(operation.focusSelector);
                            }
                          });

                        case 19:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                });
                i = 0;

              case 9:
                if (!(i < blocks.length)) {
                  _context3.next = 17;
                  break;
                }

                return _context3.delegateYield(_loop(i), "t0", 11);

              case 11:
                _ret = _context3.t0;

                if (!(_typeof(_ret) === "object")) {
                  _context3.next = 14;
                  break;
                }

                return _context3.abrupt("return", _ret.v);

              case 14:
                i++;
                _context3.next = 9;
                break;

              case 17:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function update() {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "debounce",
    get: function get() {
      return this.hasAttribute('debounce') ? parseInt(this.getAttribute('debounce')) : 20;
    }
  }]);

  return UpdatesForElement;
}(_subscribing_element__WEBPACK_IMPORTED_MODULE_3__["default"]);



/***/ }),

/***/ "./node_modules/cable_ready/javascript/enums.js":
/*!******************************************************!*\
  !*** ./node_modules/cable_ready/javascript/enums.js ***!
  \******************************************************/
/*! exports provided: inputTags, mutableTags, textInputTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputTags", function() { return inputTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutableTags", function() { return mutableTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textInputTypes", function() { return textInputTypes; });
var inputTags = {
  INPUT: true,
  TEXTAREA: true,
  SELECT: true
};
var mutableTags = {
  INPUT: true,
  TEXTAREA: true,
  OPTION: true
};
var textInputTypes = {
  'datetime-local': true,
  'select-multiple': true,
  'select-one': true,
  color: true,
  date: true,
  datetime: true,
  email: true,
  month: true,
  number: true,
  password: true,
  range: true,
  search: true,
  tel: true,
  text: true,
  textarea: true,
  time: true,
  url: true,
  week: true
};

/***/ }),

/***/ "./node_modules/cable_ready/javascript/index.js":
/*!******************************************************!*\
  !*** ./node_modules/cable_ready/javascript/index.js ***!
  \******************************************************/
/*! exports provided: Utils, MorphCallbacks, StreamFromElement, UpdatesForElement, SubscribingElement, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _morph_callbacks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./morph_callbacks */ "./node_modules/cable_ready/javascript/morph_callbacks.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "MorphCallbacks", function() { return _morph_callbacks__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/cable_ready/javascript/utils.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _operation_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./operation_store */ "./node_modules/cable_ready/javascript/operation_store.js");
/* harmony import */ var _cable_ready__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cable_ready */ "./node_modules/cable_ready/javascript/cable_ready.js");
/* harmony import */ var _elements_stream_from_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./elements/stream_from_element */ "./node_modules/cable_ready/javascript/elements/stream_from_element.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StreamFromElement", function() { return _elements_stream_from_element__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _elements_updates_for_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./elements/updates_for_element */ "./node_modules/cable_ready/javascript/elements/updates_for_element.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdatesForElement", function() { return _elements_updates_for_element__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _elements_subscribing_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./elements/subscribing_element */ "./node_modules/cable_ready/javascript/elements/subscribing_element.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubscribingElement", function() { return _elements_subscribing_element__WEBPACK_IMPORTED_MODULE_6__["default"]; });










/* harmony default export */ __webpack_exports__["default"] = ({
  perform: _cable_ready__WEBPACK_IMPORTED_MODULE_3__["perform"],
  performAsync: _cable_ready__WEBPACK_IMPORTED_MODULE_3__["performAsync"],
  shouldMorphCallbacks: _morph_callbacks__WEBPACK_IMPORTED_MODULE_0__["shouldMorphCallbacks"],
  didMorphCallbacks: _morph_callbacks__WEBPACK_IMPORTED_MODULE_0__["didMorphCallbacks"],
  initialize: _cable_ready__WEBPACK_IMPORTED_MODULE_3__["initialize"],
  consumer: _cable_ready__WEBPACK_IMPORTED_MODULE_3__["consumer"],
  addOperation: _operation_store__WEBPACK_IMPORTED_MODULE_2__["addOperation"],
  addOperations: _operation_store__WEBPACK_IMPORTED_MODULE_2__["addOperations"],

  get DOMOperations() {
    console.warn('DEPRECATED: Please use `CableReady.operations` instead of `CableReady.DOMOperations`');
    return _operation_store__WEBPACK_IMPORTED_MODULE_2__["default"].all;
  },

  get operations() {
    return _operation_store__WEBPACK_IMPORTED_MODULE_2__["default"].all;
  }

});

/***/ }),

/***/ "./node_modules/cable_ready/javascript/morph_callbacks.js":
/*!****************************************************************!*\
  !*** ./node_modules/cable_ready/javascript/morph_callbacks.js ***!
  \****************************************************************/
/*! exports provided: shouldMorphCallbacks, didMorphCallbacks, shouldMorph, didMorph, verifyNotMutable, verifyNotContentEditable, verifyNotPermanent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldMorphCallbacks", function() { return shouldMorphCallbacks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "didMorphCallbacks", function() { return didMorphCallbacks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldMorph", function() { return shouldMorph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "didMorph", function() { return didMorph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyNotMutable", function() { return verifyNotMutable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyNotContentEditable", function() { return verifyNotContentEditable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyNotPermanent", function() { return verifyNotPermanent; });
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums */ "./node_modules/cable_ready/javascript/enums.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/cable_ready/javascript/utils.js");
/* harmony import */ var _active_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./active_element */ "./node_modules/cable_ready/javascript/active_element.js");


 // Indicates whether or not we should morph an element via onBeforeElUpdated callback
// SEE: https://github.com/patrick-steele-idem/morphdom#morphdomfromnode-tonode-options--node
//

var shouldMorph = function shouldMorph(operation) {
  return function (fromEl, toEl) {
    return !shouldMorphCallbacks.map(function (callback) {
      return typeof callback === 'function' ? callback(operation, fromEl, toEl) : true;
    }).includes(false);
  };
}; // Execute any pluggable functions that modify elements after morphing via onElUpdated callback
//


var didMorph = function didMorph(operation) {
  return function (el) {
    didMorphCallbacks.forEach(function (callback) {
      if (typeof callback === 'function') callback(operation, el);
    });
  };
};

var verifyNotMutable = function verifyNotMutable(detail, fromEl, toEl) {
  // Skip nodes that are equal:
  // https://github.com/patrick-steele-idem/morphdom#can-i-make-morphdom-blaze-through-the-dom-tree-even-faster-yes
  if (!_enums__WEBPACK_IMPORTED_MODULE_0__["mutableTags"][fromEl.tagName] && fromEl.isEqualNode(toEl)) return false;
  return true;
};

var verifyNotContentEditable = function verifyNotContentEditable(detail, fromEl, toEl) {
  if (fromEl === _active_element__WEBPACK_IMPORTED_MODULE_2__["default"].element && fromEl.isContentEditable) return false;
  return true;
};

var verifyNotPermanent = function verifyNotPermanent(detail, fromEl, toEl) {
  var permanentAttributeName = detail.permanentAttributeName;
  if (!permanentAttributeName) return true;
  var permanent = fromEl.closest("[".concat(permanentAttributeName, "]")); // only morph attributes on the active non-permanent text input

  if (!permanent && fromEl === _active_element__WEBPACK_IMPORTED_MODULE_2__["default"].element && Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isTextInput"])(fromEl)) {
    var ignore = {
      value: true
    };
    Array.from(toEl.attributes).forEach(function (attribute) {
      if (!ignore[attribute.name]) fromEl.setAttribute(attribute.name, attribute.value);
    });
    return false;
  }

  return !permanent;
};

var shouldMorphCallbacks = [verifyNotMutable, verifyNotPermanent, verifyNotContentEditable];
var didMorphCallbacks = [];


/***/ }),

/***/ "./node_modules/cable_ready/javascript/operation_store.js":
/*!****************************************************************!*\
  !*** ./node_modules/cable_ready/javascript/operation_store.js ***!
  \****************************************************************/
/*! exports provided: addOperation, addOperations, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addOperation", function() { return addOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addOperations", function() { return addOperations; });
/* harmony import */ var _operations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./operations */ "./node_modules/cable_ready/javascript/operations.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var operations = _operations__WEBPACK_IMPORTED_MODULE_0__["default"];

var add = function add(newOperations) {
  operations = _objectSpread(_objectSpread({}, operations), newOperations);
};

var addOperations = function addOperations(operations) {
  add(operations);
};

var addOperation = function addOperation(name, operation) {
  var operations = {};
  operations[name] = operation;
  add(operations);
};


/* harmony default export */ __webpack_exports__["default"] = ({
  get all() {
    return operations;
  }

});

/***/ }),

/***/ "./node_modules/cable_ready/javascript/operations.js":
/*!***********************************************************!*\
  !*** ./node_modules/cable_ready/javascript/operations.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var morphdom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! morphdom */ "./node_modules/morphdom/dist/morphdom-esm.js");
/* harmony import */ var _morph_callbacks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./morph_callbacks */ "./node_modules/cable_ready/javascript/morph_callbacks.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/cable_ready/javascript/utils.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




/* harmony default export */ __webpack_exports__["default"] = ({
  // DOM Mutations
  append: function append(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["processElements"])(operation, function (element) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(element, operation);
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
        var html = operation.html,
            focusSelector = operation.focusSelector;
        element.insertAdjacentHTML('beforeend', html || '');
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["assignFocus"])(focusSelector);
      });
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(element, operation);
    });
  },
  graft: function graft(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["processElements"])(operation, function (element) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(element, operation);
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
        var parent = operation.parent,
            focusSelector = operation.focusSelector;
        var parentElement = document.querySelector(parent);

        if (parentElement) {
          parentElement.appendChild(element);
          Object(_utils__WEBPACK_IMPORTED_MODULE_2__["assignFocus"])(focusSelector);
        }
      });
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(element, operation);
    });
  },
  innerHtml: function innerHtml(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["processElements"])(operation, function (element) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(element, operation);
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
        var html = operation.html,
            focusSelector = operation.focusSelector;
        element.innerHTML = html || '';
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["assignFocus"])(focusSelector);
      });
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(element, operation);
    });
  },
  insertAdjacentHtml: function insertAdjacentHtml(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["processElements"])(operation, function (element) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(element, operation);
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
        var html = operation.html,
            position = operation.position,
            focusSelector = operation.focusSelector;
        element.insertAdjacentHTML(position || 'beforeend', html || '');
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["assignFocus"])(focusSelector);
      });
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(element, operation);
    });
  },
  insertAdjacentText: function insertAdjacentText(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["processElements"])(operation, function (element) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(element, operation);
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
        var text = operation.text,
            position = operation.position,
            focusSelector = operation.focusSelector;
        element.insertAdjacentText(position || 'beforeend', text || '');
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["assignFocus"])(focusSelector);
      });
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(element, operation);
    });
  },
  morph: function morph(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["processElements"])(operation, function (element) {
      var html = operation.html;
      var template = document.createElement('template');
      template.innerHTML = String(html).trim();
      operation.content = template.content;
      var parent = element.parentElement;
      var ordinal = Array.from(parent.children).indexOf(element);
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(element, operation);
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
        var childrenOnly = operation.childrenOnly,
            focusSelector = operation.focusSelector;
        Object(morphdom__WEBPACK_IMPORTED_MODULE_0__["default"])(element, childrenOnly ? template.content : template.innerHTML, {
          childrenOnly: !!childrenOnly,
          onBeforeElUpdated: Object(_morph_callbacks__WEBPACK_IMPORTED_MODULE_1__["shouldMorph"])(operation),
          onElUpdated: Object(_morph_callbacks__WEBPACK_IMPORTED_MODULE_1__["didMorph"])(operation)
        });
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["assignFocus"])(focusSelector);
      });
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(parent.children[ordinal], operation);
    });
  },
  outerHtml: function outerHtml(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["processElements"])(operation, function (element) {
      var parent = element.parentElement;
      var ordinal = Array.from(parent.children).indexOf(element);
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(element, operation);
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
        var html = operation.html,
            focusSelector = operation.focusSelector;
        element.outerHTML = html || '';
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["assignFocus"])(focusSelector);
      });
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(parent.children[ordinal], operation);
    });
  },
  prepend: function prepend(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["processElements"])(operation, function (element) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(element, operation);
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
        var html = operation.html,
            focusSelector = operation.focusSelector;
        element.insertAdjacentHTML('afterbegin', html || '');
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["assignFocus"])(focusSelector);
      });
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(element, operation);
    });
  },
  remove: function remove(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["processElements"])(operation, function (element) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(element, operation);
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
        var focusSelector = operation.focusSelector;
        element.remove();
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["assignFocus"])(focusSelector);
      });
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(document, operation);
    });
  },
  replace: function replace(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["processElements"])(operation, function (element) {
      var parent = element.parentElement;
      var ordinal = Array.from(parent.children).indexOf(element);
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(element, operation);
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
        var html = operation.html,
            focusSelector = operation.focusSelector;
        element.outerHTML = html || '';
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["assignFocus"])(focusSelector);
      });
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(parent.children[ordinal], operation);
    });
  },
  textContent: function textContent(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["processElements"])(operation, function (element) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(element, operation);
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
        var text = operation.text,
            focusSelector = operation.focusSelector;
        element.textContent = text || '';
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["assignFocus"])(focusSelector);
      });
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(element, operation);
    });
  },
  // Element Property Mutations
  addCssClass: function addCssClass(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["processElements"])(operation, function (element) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(element, operation);
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
        var _element$classList;

        var name = operation.name;

        (_element$classList = element.classList).add.apply(_element$classList, _toConsumableArray(Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getClassNames"])(name || '')));
      });
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(element, operation);
    });
  },
  removeAttribute: function removeAttribute(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["processElements"])(operation, function (element) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(element, operation);
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
        var name = operation.name;
        element.removeAttribute(name);
      });
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(element, operation);
    });
  },
  removeCssClass: function removeCssClass(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["processElements"])(operation, function (element) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(element, operation);
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
        var _element$classList2;

        var name = operation.name;

        (_element$classList2 = element.classList).remove.apply(_element$classList2, _toConsumableArray(Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getClassNames"])(name)));
      });
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(element, operation);
    });
  },
  setAttribute: function setAttribute(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["processElements"])(operation, function (element) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(element, operation);
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
        var name = operation.name,
            value = operation.value;
        element.setAttribute(name, value || '');
      });
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(element, operation);
    });
  },
  setDatasetProperty: function setDatasetProperty(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["processElements"])(operation, function (element) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(element, operation);
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
        var name = operation.name,
            value = operation.value;
        element.dataset[name] = value || '';
      });
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(element, operation);
    });
  },
  setProperty: function setProperty(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["processElements"])(operation, function (element) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(element, operation);
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
        var name = operation.name,
            value = operation.value;
        if (name in element) element[name] = value || '';
      });
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(element, operation);
    });
  },
  setStyle: function setStyle(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["processElements"])(operation, function (element) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(element, operation);
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
        var name = operation.name,
            value = operation.value;
        element.style[name] = value || '';
      });
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(element, operation);
    });
  },
  setStyles: function setStyles(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["processElements"])(operation, function (element) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(element, operation);
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
        var styles = operation.styles;

        for (var _i2 = 0, _Object$entries = Object.entries(styles); _i2 < _Object$entries.length; _i2++) {
          var _ref3 = _Object$entries[_i2];

          var _ref2 = _slicedToArray(_ref3, 2);

          var name = _ref2[0];
          var value = _ref2[1];
          element.style[name] = value || '';
        }
      });
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(element, operation);
    });
  },
  setValue: function setValue(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["processElements"])(operation, function (element) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(element, operation);
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
        var value = operation.value;
        element.value = value || '';
      });
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(element, operation);
    });
  },
  // DOM Events
  dispatchEvent: function dispatchEvent(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["processElements"])(operation, function (element) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(element, operation);
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
        var name = operation.name,
            detail = operation.detail;
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(element, name, detail);
      });
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(element, operation);
    });
  },
  setMeta: function setMeta(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(document, operation);
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
      var name = operation.name,
          content = operation.content;
      var meta = document.head.querySelector("meta[name='".concat(name, "']"));

      if (!meta) {
        meta = document.createElement('meta');
        meta.name = name;
        document.head.appendChild(meta);
      }

      meta.content = content;
    });
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(document, operation);
  },
  // Browser Manipulations
  clearStorage: function clearStorage(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(document, operation);
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
      var type = operation.type;
      var storage = type === 'session' ? sessionStorage : localStorage;
      storage.clear();
    });
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(document, operation);
  },
  go: function go(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(window, operation);
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
      var delta = operation.delta;
      history.go(delta);
    });
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(window, operation);
  },
  pushState: function pushState(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(window, operation);
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
      var state = operation.state,
          title = operation.title,
          url = operation.url;
      history.pushState(state || {}, title || '', url);
    });
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(window, operation);
  },
  redirectTo: function redirectTo(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(window, operation);
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
      var url = operation.url,
          action = operation.action;
      action = action || 'advance';
      if (window.Turbo) window.Turbo.visit(url, {
        action: action
      });
      if (window.Turbolinks) window.Turbolinks.visit(url, {
        action: action
      });
      if (!window.Turbo && !window.Turbolinks) window.location.href = url;
    });
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(window, operation);
  },
  reload: function reload(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(window, operation);
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
      window.location.reload();
    });
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(window, operation);
  },
  removeStorageItem: function removeStorageItem(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(document, operation);
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
      var key = operation.key,
          type = operation.type;
      var storage = type === 'session' ? sessionStorage : localStorage;
      storage.removeItem(key);
    });
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(document, operation);
  },
  replaceState: function replaceState(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(window, operation);
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
      var state = operation.state,
          title = operation.title,
          url = operation.url;
      history.replaceState(state || {}, title || '', url);
    });
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(window, operation);
  },
  scrollIntoView: function scrollIntoView(operation) {
    var element = operation.element;
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(element, operation);
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
      element.scrollIntoView(operation);
    });
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(element, operation);
  },
  setCookie: function setCookie(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(document, operation);
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
      var cookie = operation.cookie;
      document.cookie = cookie || '';
    });
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(document, operation);
  },
  setFocus: function setFocus(operation) {
    var element = operation.element;
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(element, operation);
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["assignFocus"])(element);
    });
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(element, operation);
  },
  setStorageItem: function setStorageItem(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(document, operation);
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
      var key = operation.key,
          value = operation.value,
          type = operation.type;
      var storage = type === 'session' ? sessionStorage : localStorage;
      storage.setItem(key, value || '');
    });
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(document, operation);
  },
  // Notifications
  consoleLog: function consoleLog(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(document, operation);
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
      var message = operation.message,
          level = operation.level;
      level && ['warn', 'info', 'error'].includes(level) ? console[level](message || '') : console.log(message || '');
    });
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(document, operation);
  },
  consoleTable: function consoleTable(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(document, operation);
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
      var data = operation.data,
          columns = operation.columns;
      console.table(data, columns || []);
    });
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(document, operation);
  },
  notification: function notification(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(document, operation);
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
      var title = operation.title,
          options = operation.options;
      Notification.requestPermission().then(function (result) {
        operation.permission = result;
        if (result === 'granted') new Notification(title || '', options);
      });
    });
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(document, operation);
  }
});

/***/ }),

/***/ "./node_modules/cable_ready/javascript/utils.js":
/*!******************************************************!*\
  !*** ./node_modules/cable_ready/javascript/utils.js ***!
  \******************************************************/
/*! exports provided: isTextInput, assignFocus, dispatch, xpathToElement, getClassNames, processElements, operate, before, after, debounce, handleErrors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTextInput", function() { return isTextInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignFocus", function() { return assignFocus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatch", function() { return dispatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xpathToElement", function() { return xpathToElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClassNames", function() { return getClassNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processElements", function() { return processElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "operate", function() { return operate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "before", function() { return before; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "after", function() { return after; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleErrors", function() { return handleErrors; });
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums */ "./node_modules/cable_ready/javascript/enums.js");
/* harmony import */ var _active_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./active_element */ "./node_modules/cable_ready/javascript/active_element.js");

 // Indicates if the passed element is considered a text input.
//

var isTextInput = function isTextInput(element) {
  return _enums__WEBPACK_IMPORTED_MODULE_0__["inputTags"][element.tagName] && _enums__WEBPACK_IMPORTED_MODULE_0__["textInputTypes"][element.type];
}; // Assigns focus to the appropriate element... preferring the explicitly passed selector
//
// * selector - a CSS selector for the element that should have focus
//


var assignFocus = function assignFocus(selector) {
  var element = selector && selector.nodeType === Node.ELEMENT_NODE ? selector : document.querySelector(selector);
  var focusElement = element || _active_element__WEBPACK_IMPORTED_MODULE_1__["default"].element;
  if (focusElement && focusElement.focus) focusElement.focus();
}; // Dispatches an event on the passed element
//
// * element - the element
// * name - the name of the event
// * detail - the event detail
//


var dispatch = function dispatch(element, name) {
  var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var init = {
    bubbles: true,
    cancelable: true,
    detail: detail
  };
  var evt = new CustomEvent(name, init);
  element.dispatchEvent(evt);
  if (window.jQuery) window.jQuery(element).trigger(name, detail);
}; // Accepts an xPath query and returns the element found at that position in the DOM
//


var xpathToElement = function xpathToElement(xpath) {
  return document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}; // Return an array with the class names to be used
//
// * names - could be a string or an array of strings for multiple classes.
//


var getClassNames = function getClassNames(names) {
  return Array(names).flat();
}; // Perform operation for either the first or all of the elements returned by CSS selector
//
// * operation - the instruction payload from perform
// * callback - the operation function to run for each element
//


var processElements = function processElements(operation, callback) {
  Array.from(operation.selectAll ? operation.element : [operation.element]).forEach(callback);
}; // camelCase to kebab-case
//


var kebabize = function kebabize(str) {
  return str.split('').map(function (letter, idx) {
    return letter.toUpperCase() === letter ? "".concat(idx !== 0 ? '-' : '').concat(letter.toLowerCase()) : letter;
  }).join('');
}; // Provide a standardized pipeline of checks and modifications to all operations based on provided options
// Currently skips execution if cancelled and implements an optional delay
//


var operate = function operate(operation, callback) {
  if (!operation.cancel) {
    operation.delay ? setTimeout(callback, operation.delay) : callback();
    return true;
  }

  return false;
}; // Dispatch life-cycle events with standardized naming


var before = function before(target, operation) {
  return dispatch(target, "cable-ready:before-".concat(kebabize(operation.operation)), operation);
};

var after = function after(target, operation) {
  return dispatch(target, "cable-ready:after-".concat(kebabize(operation.operation)), operation);
};

function debounce(func, timeout) {
  var _this = this;

  var timer;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    clearTimeout(timer);
    timer = setTimeout(function () {
      return func.apply(_this, args);
    }, timeout);
  };
}

function handleErrors(response) {
  if (!response.ok) throw Error(response.statusText);
  return response;
}



/***/ }),

/***/ "./node_modules/morphdom/dist/morphdom-esm.js":
/*!****************************************************!*\
  !*** ./node_modules/morphdom/dist/morphdom-esm.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var DOCUMENT_FRAGMENT_NODE = 11;

function morphAttrs(fromNode, toNode) {
  var toNodeAttrs = toNode.attributes;
  var attr;
  var attrName;
  var attrNamespaceURI;
  var attrValue;
  var fromValue; // document-fragments dont have attributes so lets not do anything

  if (toNode.nodeType === DOCUMENT_FRAGMENT_NODE || fromNode.nodeType === DOCUMENT_FRAGMENT_NODE) {
    return;
  } // update attributes on original DOM element


  for (var i = toNodeAttrs.length - 1; i >= 0; i--) {
    attr = toNodeAttrs[i];
    attrName = attr.name;
    attrNamespaceURI = attr.namespaceURI;
    attrValue = attr.value;

    if (attrNamespaceURI) {
      attrName = attr.localName || attrName;
      fromValue = fromNode.getAttributeNS(attrNamespaceURI, attrName);

      if (fromValue !== attrValue) {
        if (attr.prefix === 'xmlns') {
          attrName = attr.name; // It's not allowed to set an attribute with the XMLNS namespace without specifying the `xmlns` prefix
        }

        fromNode.setAttributeNS(attrNamespaceURI, attrName, attrValue);
      }
    } else {
      fromValue = fromNode.getAttribute(attrName);

      if (fromValue !== attrValue) {
        fromNode.setAttribute(attrName, attrValue);
      }
    }
  } // Remove any extra attributes found on the original DOM element that
  // weren't found on the target element.


  var fromNodeAttrs = fromNode.attributes;

  for (var d = fromNodeAttrs.length - 1; d >= 0; d--) {
    attr = fromNodeAttrs[d];
    attrName = attr.name;
    attrNamespaceURI = attr.namespaceURI;

    if (attrNamespaceURI) {
      attrName = attr.localName || attrName;

      if (!toNode.hasAttributeNS(attrNamespaceURI, attrName)) {
        fromNode.removeAttributeNS(attrNamespaceURI, attrName);
      }
    } else {
      if (!toNode.hasAttribute(attrName)) {
        fromNode.removeAttribute(attrName);
      }
    }
  }
}

var range; // Create a range object for efficently rendering strings to elements.

var NS_XHTML = 'http://www.w3.org/1999/xhtml';
var doc = typeof document === 'undefined' ? undefined : document;
var HAS_TEMPLATE_SUPPORT = !!doc && 'content' in doc.createElement('template');
var HAS_RANGE_SUPPORT = !!doc && doc.createRange && 'createContextualFragment' in doc.createRange();

function createFragmentFromTemplate(str) {
  var template = doc.createElement('template');
  template.innerHTML = str;
  return template.content.childNodes[0];
}

function createFragmentFromRange(str) {
  if (!range) {
    range = doc.createRange();
    range.selectNode(doc.body);
  }

  var fragment = range.createContextualFragment(str);
  return fragment.childNodes[0];
}

function createFragmentFromWrap(str) {
  var fragment = doc.createElement('body');
  fragment.innerHTML = str;
  return fragment.childNodes[0];
}
/**
 * This is about the same
 * var html = new DOMParser().parseFromString(str, 'text/html');
 * return html.body.firstChild;
 *
 * @method toElement
 * @param {String} str
 */


function toElement(str) {
  str = str.trim();

  if (HAS_TEMPLATE_SUPPORT) {
    // avoid restrictions on content for things like `<tr><th>Hi</th></tr>` which
    // createContextualFragment doesn't support
    // <template> support not available in IE
    return createFragmentFromTemplate(str);
  } else if (HAS_RANGE_SUPPORT) {
    return createFragmentFromRange(str);
  }

  return createFragmentFromWrap(str);
}
/**
 * Returns true if two node's names are the same.
 *
 * NOTE: We don't bother checking `namespaceURI` because you will never find two HTML elements with the same
 *       nodeName and different namespace URIs.
 *
 * @param {Element} a
 * @param {Element} b The target element
 * @return {boolean}
 */


function compareNodeNames(fromEl, toEl) {
  var fromNodeName = fromEl.nodeName;
  var toNodeName = toEl.nodeName;
  var fromCodeStart, toCodeStart;

  if (fromNodeName === toNodeName) {
    return true;
  }

  fromCodeStart = fromNodeName.charCodeAt(0);
  toCodeStart = toNodeName.charCodeAt(0); // If the target element is a virtual DOM node or SVG node then we may
  // need to normalize the tag name before comparing. Normal HTML elements that are
  // in the "http://www.w3.org/1999/xhtml"
  // are converted to upper case

  if (fromCodeStart <= 90 && toCodeStart >= 97) {
    // from is upper and to is lower
    return fromNodeName === toNodeName.toUpperCase();
  } else if (toCodeStart <= 90 && fromCodeStart >= 97) {
    // to is upper and from is lower
    return toNodeName === fromNodeName.toUpperCase();
  } else {
    return false;
  }
}
/**
 * Create an element, optionally with a known namespace URI.
 *
 * @param {string} name the element name, e.g. 'div' or 'svg'
 * @param {string} [namespaceURI] the element's namespace URI, i.e. the value of
 * its `xmlns` attribute or its inferred namespace.
 *
 * @return {Element}
 */


function createElementNS(name, namespaceURI) {
  return !namespaceURI || namespaceURI === NS_XHTML ? doc.createElement(name) : doc.createElementNS(namespaceURI, name);
}
/**
 * Copies the children of one DOM element to another DOM element
 */


function moveChildren(fromEl, toEl) {
  var curChild = fromEl.firstChild;

  while (curChild) {
    var nextChild = curChild.nextSibling;
    toEl.appendChild(curChild);
    curChild = nextChild;
  }

  return toEl;
}

function syncBooleanAttrProp(fromEl, toEl, name) {
  if (fromEl[name] !== toEl[name]) {
    fromEl[name] = toEl[name];

    if (fromEl[name]) {
      fromEl.setAttribute(name, '');
    } else {
      fromEl.removeAttribute(name);
    }
  }
}

var specialElHandlers = {
  OPTION: function OPTION(fromEl, toEl) {
    var parentNode = fromEl.parentNode;

    if (parentNode) {
      var parentName = parentNode.nodeName.toUpperCase();

      if (parentName === 'OPTGROUP') {
        parentNode = parentNode.parentNode;
        parentName = parentNode && parentNode.nodeName.toUpperCase();
      }

      if (parentName === 'SELECT' && !parentNode.hasAttribute('multiple')) {
        if (fromEl.hasAttribute('selected') && !toEl.selected) {
          // Workaround for MS Edge bug where the 'selected' attribute can only be
          // removed if set to a non-empty value:
          // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/12087679/
          fromEl.setAttribute('selected', 'selected');
          fromEl.removeAttribute('selected');
        } // We have to reset select element's selectedIndex to -1, otherwise setting
        // fromEl.selected using the syncBooleanAttrProp below has no effect.
        // The correct selectedIndex will be set in the SELECT special handler below.


        parentNode.selectedIndex = -1;
      }
    }

    syncBooleanAttrProp(fromEl, toEl, 'selected');
  },

  /**
   * The "value" attribute is special for the <input> element since it sets
   * the initial value. Changing the "value" attribute without changing the
   * "value" property will have no effect since it is only used to the set the
   * initial value.  Similar for the "checked" attribute, and "disabled".
   */
  INPUT: function INPUT(fromEl, toEl) {
    syncBooleanAttrProp(fromEl, toEl, 'checked');
    syncBooleanAttrProp(fromEl, toEl, 'disabled');

    if (fromEl.value !== toEl.value) {
      fromEl.value = toEl.value;
    }

    if (!toEl.hasAttribute('value')) {
      fromEl.removeAttribute('value');
    }
  },
  TEXTAREA: function TEXTAREA(fromEl, toEl) {
    var newValue = toEl.value;

    if (fromEl.value !== newValue) {
      fromEl.value = newValue;
    }

    var firstChild = fromEl.firstChild;

    if (firstChild) {
      // Needed for IE. Apparently IE sets the placeholder as the
      // node value and vise versa. This ignores an empty update.
      var oldValue = firstChild.nodeValue;

      if (oldValue == newValue || !newValue && oldValue == fromEl.placeholder) {
        return;
      }

      firstChild.nodeValue = newValue;
    }
  },
  SELECT: function SELECT(fromEl, toEl) {
    if (!toEl.hasAttribute('multiple')) {
      var selectedIndex = -1;
      var i = 0; // We have to loop through children of fromEl, not toEl since nodes can be moved
      // from toEl to fromEl directly when morphing.
      // At the time this special handler is invoked, all children have already been morphed
      // and appended to / removed from fromEl, so using fromEl here is safe and correct.

      var curChild = fromEl.firstChild;
      var optgroup;
      var nodeName;

      while (curChild) {
        nodeName = curChild.nodeName && curChild.nodeName.toUpperCase();

        if (nodeName === 'OPTGROUP') {
          optgroup = curChild;
          curChild = optgroup.firstChild;
        } else {
          if (nodeName === 'OPTION') {
            if (curChild.hasAttribute('selected')) {
              selectedIndex = i;
              break;
            }

            i++;
          }

          curChild = curChild.nextSibling;

          if (!curChild && optgroup) {
            curChild = optgroup.nextSibling;
            optgroup = null;
          }
        }
      }

      fromEl.selectedIndex = selectedIndex;
    }
  }
};
var ELEMENT_NODE = 1;
var DOCUMENT_FRAGMENT_NODE$1 = 11;
var TEXT_NODE = 3;
var COMMENT_NODE = 8;

function noop() {}

function defaultGetNodeKey(node) {
  if (node) {
    return node.getAttribute && node.getAttribute('id') || node.id;
  }
}

function morphdomFactory(morphAttrs) {
  return function morphdom(fromNode, toNode, options) {
    if (!options) {
      options = {};
    }

    if (typeof toNode === 'string') {
      if (fromNode.nodeName === '#document' || fromNode.nodeName === 'HTML' || fromNode.nodeName === 'BODY') {
        var toNodeHtml = toNode;
        toNode = doc.createElement('html');
        toNode.innerHTML = toNodeHtml;
      } else {
        toNode = toElement(toNode);
      }
    }

    var getNodeKey = options.getNodeKey || defaultGetNodeKey;
    var onBeforeNodeAdded = options.onBeforeNodeAdded || noop;
    var onNodeAdded = options.onNodeAdded || noop;
    var onBeforeElUpdated = options.onBeforeElUpdated || noop;
    var onElUpdated = options.onElUpdated || noop;
    var onBeforeNodeDiscarded = options.onBeforeNodeDiscarded || noop;
    var onNodeDiscarded = options.onNodeDiscarded || noop;
    var onBeforeElChildrenUpdated = options.onBeforeElChildrenUpdated || noop;
    var childrenOnly = options.childrenOnly === true; // This object is used as a lookup to quickly find all keyed elements in the original DOM tree.

    var fromNodesLookup = Object.create(null);
    var keyedRemovalList = [];

    function addKeyedRemoval(key) {
      keyedRemovalList.push(key);
    }

    function walkDiscardedChildNodes(node, skipKeyedNodes) {
      if (node.nodeType === ELEMENT_NODE) {
        var curChild = node.firstChild;

        while (curChild) {
          var key = undefined;

          if (skipKeyedNodes && (key = getNodeKey(curChild))) {
            // If we are skipping keyed nodes then we add the key
            // to a list so that it can be handled at the very end.
            addKeyedRemoval(key);
          } else {
            // Only report the node as discarded if it is not keyed. We do this because
            // at the end we loop through all keyed elements that were unmatched
            // and then discard them in one final pass.
            onNodeDiscarded(curChild);

            if (curChild.firstChild) {
              walkDiscardedChildNodes(curChild, skipKeyedNodes);
            }
          }

          curChild = curChild.nextSibling;
        }
      }
    }
    /**
     * Removes a DOM node out of the original DOM
     *
     * @param  {Node} node The node to remove
     * @param  {Node} parentNode The nodes parent
     * @param  {Boolean} skipKeyedNodes If true then elements with keys will be skipped and not discarded.
     * @return {undefined}
     */


    function removeNode(node, parentNode, skipKeyedNodes) {
      if (onBeforeNodeDiscarded(node) === false) {
        return;
      }

      if (parentNode) {
        parentNode.removeChild(node);
      }

      onNodeDiscarded(node);
      walkDiscardedChildNodes(node, skipKeyedNodes);
    } // // TreeWalker implementation is no faster, but keeping this around in case this changes in the future
    // function indexTree(root) {
    //     var treeWalker = document.createTreeWalker(
    //         root,
    //         NodeFilter.SHOW_ELEMENT);
    //
    //     var el;
    //     while((el = treeWalker.nextNode())) {
    //         var key = getNodeKey(el);
    //         if (key) {
    //             fromNodesLookup[key] = el;
    //         }
    //     }
    // }
    // // NodeIterator implementation is no faster, but keeping this around in case this changes in the future
    //
    // function indexTree(node) {
    //     var nodeIterator = document.createNodeIterator(node, NodeFilter.SHOW_ELEMENT);
    //     var el;
    //     while((el = nodeIterator.nextNode())) {
    //         var key = getNodeKey(el);
    //         if (key) {
    //             fromNodesLookup[key] = el;
    //         }
    //     }
    // }


    function indexTree(node) {
      if (node.nodeType === ELEMENT_NODE || node.nodeType === DOCUMENT_FRAGMENT_NODE$1) {
        var curChild = node.firstChild;

        while (curChild) {
          var key = getNodeKey(curChild);

          if (key) {
            fromNodesLookup[key] = curChild;
          } // Walk recursively


          indexTree(curChild);
          curChild = curChild.nextSibling;
        }
      }
    }

    indexTree(fromNode);

    function handleNodeAdded(el) {
      onNodeAdded(el);
      var curChild = el.firstChild;

      while (curChild) {
        var nextSibling = curChild.nextSibling;
        var key = getNodeKey(curChild);

        if (key) {
          var unmatchedFromEl = fromNodesLookup[key]; // if we find a duplicate #id node in cache, replace `el` with cache value
          // and morph it to the child node.

          if (unmatchedFromEl && compareNodeNames(curChild, unmatchedFromEl)) {
            curChild.parentNode.replaceChild(unmatchedFromEl, curChild);
            morphEl(unmatchedFromEl, curChild);
          } else {
            handleNodeAdded(curChild);
          }
        } else {
          // recursively call for curChild and it's children to see if we find something in
          // fromNodesLookup
          handleNodeAdded(curChild);
        }

        curChild = nextSibling;
      }
    }

    function cleanupFromEl(fromEl, curFromNodeChild, curFromNodeKey) {
      // We have processed all of the "to nodes". If curFromNodeChild is
      // non-null then we still have some from nodes left over that need
      // to be removed
      while (curFromNodeChild) {
        var fromNextSibling = curFromNodeChild.nextSibling;

        if (curFromNodeKey = getNodeKey(curFromNodeChild)) {
          // Since the node is keyed it might be matched up later so we defer
          // the actual removal to later
          addKeyedRemoval(curFromNodeKey);
        } else {
          // NOTE: we skip nested keyed nodes from being removed since there is
          //       still a chance they will be matched up later
          removeNode(curFromNodeChild, fromEl, true
          /* skip keyed nodes */
          );
        }

        curFromNodeChild = fromNextSibling;
      }
    }

    function morphEl(fromEl, toEl, childrenOnly) {
      var toElKey = getNodeKey(toEl);

      if (toElKey) {
        // If an element with an ID is being morphed then it will be in the final
        // DOM so clear it out of the saved elements collection
        delete fromNodesLookup[toElKey];
      }

      if (!childrenOnly) {
        // optional
        if (onBeforeElUpdated(fromEl, toEl) === false) {
          return;
        } // update attributes on original DOM element first


        morphAttrs(fromEl, toEl); // optional

        onElUpdated(fromEl);

        if (onBeforeElChildrenUpdated(fromEl, toEl) === false) {
          return;
        }
      }

      if (fromEl.nodeName !== 'TEXTAREA') {
        morphChildren(fromEl, toEl);
      } else {
        specialElHandlers.TEXTAREA(fromEl, toEl);
      }
    }

    function morphChildren(fromEl, toEl) {
      var curToNodeChild = toEl.firstChild;
      var curFromNodeChild = fromEl.firstChild;
      var curToNodeKey;
      var curFromNodeKey;
      var fromNextSibling;
      var toNextSibling;
      var matchingFromEl; // walk the children

      outer: while (curToNodeChild) {
        toNextSibling = curToNodeChild.nextSibling;
        curToNodeKey = getNodeKey(curToNodeChild); // walk the fromNode children all the way through

        while (curFromNodeChild) {
          fromNextSibling = curFromNodeChild.nextSibling;

          if (curToNodeChild.isSameNode && curToNodeChild.isSameNode(curFromNodeChild)) {
            curToNodeChild = toNextSibling;
            curFromNodeChild = fromNextSibling;
            continue outer;
          }

          curFromNodeKey = getNodeKey(curFromNodeChild);
          var curFromNodeType = curFromNodeChild.nodeType; // this means if the curFromNodeChild doesnt have a match with the curToNodeChild

          var isCompatible = undefined;

          if (curFromNodeType === curToNodeChild.nodeType) {
            if (curFromNodeType === ELEMENT_NODE) {
              // Both nodes being compared are Element nodes
              if (curToNodeKey) {
                // The target node has a key so we want to match it up with the correct element
                // in the original DOM tree
                if (curToNodeKey !== curFromNodeKey) {
                  // The current element in the original DOM tree does not have a matching key so
                  // let's check our lookup to see if there is a matching element in the original
                  // DOM tree
                  if (matchingFromEl = fromNodesLookup[curToNodeKey]) {
                    if (fromNextSibling === matchingFromEl) {
                      // Special case for single element removals. To avoid removing the original
                      // DOM node out of the tree (since that can break CSS transitions, etc.),
                      // we will instead discard the current node and wait until the next
                      // iteration to properly match up the keyed target element with its matching
                      // element in the original tree
                      isCompatible = false;
                    } else {
                      // We found a matching keyed element somewhere in the original DOM tree.
                      // Let's move the original DOM node into the current position and morph
                      // it.
                      // NOTE: We use insertBefore instead of replaceChild because we want to go through
                      // the `removeNode()` function for the node that is being discarded so that
                      // all lifecycle hooks are correctly invoked
                      fromEl.insertBefore(matchingFromEl, curFromNodeChild); // fromNextSibling = curFromNodeChild.nextSibling;

                      if (curFromNodeKey) {
                        // Since the node is keyed it might be matched up later so we defer
                        // the actual removal to later
                        addKeyedRemoval(curFromNodeKey);
                      } else {
                        // NOTE: we skip nested keyed nodes from being removed since there is
                        //       still a chance they will be matched up later
                        removeNode(curFromNodeChild, fromEl, true
                        /* skip keyed nodes */
                        );
                      }

                      curFromNodeChild = matchingFromEl;
                    }
                  } else {
                    // The nodes are not compatible since the "to" node has a key and there
                    // is no matching keyed node in the source tree
                    isCompatible = false;
                  }
                }
              } else if (curFromNodeKey) {
                // The original has a key
                isCompatible = false;
              }

              isCompatible = isCompatible !== false && compareNodeNames(curFromNodeChild, curToNodeChild);

              if (isCompatible) {
                // We found compatible DOM elements so transform
                // the current "from" node to match the current
                // target DOM node.
                // MORPH
                morphEl(curFromNodeChild, curToNodeChild);
              }
            } else if (curFromNodeType === TEXT_NODE || curFromNodeType == COMMENT_NODE) {
              // Both nodes being compared are Text or Comment nodes
              isCompatible = true; // Simply update nodeValue on the original node to
              // change the text value

              if (curFromNodeChild.nodeValue !== curToNodeChild.nodeValue) {
                curFromNodeChild.nodeValue = curToNodeChild.nodeValue;
              }
            }
          }

          if (isCompatible) {
            // Advance both the "to" child and the "from" child since we found a match
            // Nothing else to do as we already recursively called morphChildren above
            curToNodeChild = toNextSibling;
            curFromNodeChild = fromNextSibling;
            continue outer;
          } // No compatible match so remove the old node from the DOM and continue trying to find a
          // match in the original DOM. However, we only do this if the from node is not keyed
          // since it is possible that a keyed node might match up with a node somewhere else in the
          // target tree and we don't want to discard it just yet since it still might find a
          // home in the final DOM tree. After everything is done we will remove any keyed nodes
          // that didn't find a home


          if (curFromNodeKey) {
            // Since the node is keyed it might be matched up later so we defer
            // the actual removal to later
            addKeyedRemoval(curFromNodeKey);
          } else {
            // NOTE: we skip nested keyed nodes from being removed since there is
            //       still a chance they will be matched up later
            removeNode(curFromNodeChild, fromEl, true
            /* skip keyed nodes */
            );
          }

          curFromNodeChild = fromNextSibling;
        } // END: while(curFromNodeChild) {}
        // If we got this far then we did not find a candidate match for
        // our "to node" and we exhausted all of the children "from"
        // nodes. Therefore, we will just append the current "to" node
        // to the end


        if (curToNodeKey && (matchingFromEl = fromNodesLookup[curToNodeKey]) && compareNodeNames(matchingFromEl, curToNodeChild)) {
          fromEl.appendChild(matchingFromEl); // MORPH

          morphEl(matchingFromEl, curToNodeChild);
        } else {
          var onBeforeNodeAddedResult = onBeforeNodeAdded(curToNodeChild);

          if (onBeforeNodeAddedResult !== false) {
            if (onBeforeNodeAddedResult) {
              curToNodeChild = onBeforeNodeAddedResult;
            }

            if (curToNodeChild.actualize) {
              curToNodeChild = curToNodeChild.actualize(fromEl.ownerDocument || doc);
            }

            fromEl.appendChild(curToNodeChild);
            handleNodeAdded(curToNodeChild);
          }
        }

        curToNodeChild = toNextSibling;
        curFromNodeChild = fromNextSibling;
      }

      cleanupFromEl(fromEl, curFromNodeChild, curFromNodeKey);
      var specialElHandler = specialElHandlers[fromEl.nodeName];

      if (specialElHandler) {
        specialElHandler(fromEl, toEl);
      }
    } // END: morphChildren(...)


    var morphedNode = fromNode;
    var morphedNodeType = morphedNode.nodeType;
    var toNodeType = toNode.nodeType;

    if (!childrenOnly) {
      // Handle the case where we are given two DOM nodes that are not
      // compatible (e.g. <div> --> <span> or <div> --> TEXT)
      if (morphedNodeType === ELEMENT_NODE) {
        if (toNodeType === ELEMENT_NODE) {
          if (!compareNodeNames(fromNode, toNode)) {
            onNodeDiscarded(fromNode);
            morphedNode = moveChildren(fromNode, createElementNS(toNode.nodeName, toNode.namespaceURI));
          }
        } else {
          // Going from an element node to a text node
          morphedNode = toNode;
        }
      } else if (morphedNodeType === TEXT_NODE || morphedNodeType === COMMENT_NODE) {
        // Text or comment node
        if (toNodeType === morphedNodeType) {
          if (morphedNode.nodeValue !== toNode.nodeValue) {
            morphedNode.nodeValue = toNode.nodeValue;
          }

          return morphedNode;
        } else {
          // Text node to something else
          morphedNode = toNode;
        }
      }
    }

    if (morphedNode === toNode) {
      // The "to node" was not compatible with the "from node" so we had to
      // toss out the "from node" and use the "to node"
      onNodeDiscarded(fromNode);
    } else {
      if (toNode.isSameNode && toNode.isSameNode(morphedNode)) {
        return;
      }

      morphEl(morphedNode, toNode, childrenOnly); // We now need to loop over any keyed nodes that might need to be
      // removed. We only do the removal if we know that the keyed node
      // never found a match. When a keyed node is matched up we remove
      // it out of fromNodesLookup and we use fromNodesLookup to determine
      // if a keyed node has been matched up or not

      if (keyedRemovalList) {
        for (var i = 0, len = keyedRemovalList.length; i < len; i++) {
          var elToRemove = fromNodesLookup[keyedRemovalList[i]];

          if (elToRemove) {
            removeNode(elToRemove, elToRemove.parentNode, false);
          }
        }
      }
    }

    if (!childrenOnly && morphedNode !== fromNode && fromNode.parentNode) {
      if (morphedNode.actualize) {
        morphedNode = morphedNode.actualize(fromNode.ownerDocument || doc);
      } // If we had to swap out the from node with a new node because the old
      // node was not compatible with the target node then we need to
      // replace the old DOM node in the original DOM tree. This is only
      // possible if the original DOM node was part of a DOM tree which
      // we know is the case if it has a parent node.


      fromNode.parentNode.replaceChild(morphedNode, fromNode);
    }

    return morphedNode;
  };
}

var morphdom = morphdomFactory(morphAttrs);
/* harmony default export */ __webpack_exports__["default"] = (morphdom);

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./node_modules/stimulus/dist/stimulus.js":
/*!************************************************!*\
  !*** ./node_modules/stimulus/dist/stimulus.js ***!
  \************************************************/
/*! exports provided: Application, AttributeObserver, Context, Controller, ElementObserver, IndexedMultimap, Multimap, StringMapObserver, TokenListObserver, ValueListObserver, add, defaultSchema, del, fetch, prune */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Application", function() { return _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__["Application"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttributeObserver", function() { return _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__["AttributeObserver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__["Context"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__["Controller"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ElementObserver", function() { return _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__["ElementObserver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndexedMultimap", function() { return _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__["IndexedMultimap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Multimap", function() { return _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__["Multimap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StringMapObserver", function() { return _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__["StringMapObserver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TokenListObserver", function() { return _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__["TokenListObserver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValueListObserver", function() { return _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__["ValueListObserver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "add", function() { return _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__["add"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultSchema", function() { return _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__["defaultSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "del", function() { return _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__["del"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetch", function() { return _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__["fetch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "prune", function() { return _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__["prune"]; });

/*
Stimulus 3.0.1
Copyright © 2021 Basecamp, LLC
 */


/***/ }),

/***/ "./node_modules/stimulus/webpack-helpers.js":
/*!**************************************************!*\
  !*** ./node_modules/stimulus/webpack-helpers.js ***!
  \**************************************************/
/*! exports provided: definitionForModuleAndIdentifier, definitionForModuleWithContextAndKey, definitionsFromContext, identifierForContextKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hotwired_stimulus_webpack_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hotwired/stimulus-webpack-helpers */ "./node_modules/@hotwired/stimulus-webpack-helpers/dist/stimulus-webpack-helpers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "definitionForModuleAndIdentifier", function() { return _hotwired_stimulus_webpack_helpers__WEBPACK_IMPORTED_MODULE_0__["definitionForModuleAndIdentifier"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "definitionForModuleWithContextAndKey", function() { return _hotwired_stimulus_webpack_helpers__WEBPACK_IMPORTED_MODULE_0__["definitionForModuleWithContextAndKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "definitionsFromContext", function() { return _hotwired_stimulus_webpack_helpers__WEBPACK_IMPORTED_MODULE_0__["definitionsFromContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "identifierForContextKey", function() { return _hotwired_stimulus_webpack_helpers__WEBPACK_IMPORTED_MODULE_0__["identifierForContextKey"]; });



/***/ }),

/***/ "./node_modules/stimulus_reflex/javascript/attributes.js":
/*!***************************************************************!*\
  !*** ./node_modules/stimulus_reflex/javascript/attributes.js ***!
  \***************************************************************/
/*! exports provided: attributeValue, attributeValues, extractElementAttributes, extractElementDataset, extractDataAttributes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attributeValue", function() { return attributeValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attributeValues", function() { return attributeValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractElementAttributes", function() { return extractElementAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractElementDataset", function() { return extractElementDataset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractDataAttributes", function() { return extractDataAttributes; });
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schema */ "./node_modules/stimulus_reflex/javascript/schema.js");
/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./debug */ "./node_modules/stimulus_reflex/javascript/debug.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var multipleInstances = function multipleInstances(element) {
  if (['checkbox', 'radio'].includes(element.type)) {
    return document.querySelectorAll("input[type=\"".concat(element.type, "\"][name=\"").concat(element.name, "\"]")).length > 1;
  }

  return false;
};

var collectCheckedOptions = function collectCheckedOptions(element) {
  return Array.from(element.querySelectorAll('option:checked')).concat(Array.from(document.querySelectorAll("input[type=\"".concat(element.type, "\"][name=\"").concat(element.name, "\"]"))).filter(function (elem) {
    return elem.checked;
  })).map(function (o) {
    return o.value;
  });
}; // Returns a string value for the passed array.
//
//   attributeValue(['', 'one', null, 'two', 'three ']) // 'one two three'
//


var attributeValue = function attributeValue() {
  var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var value = values.filter(function (v) {
    return v && String(v).length;
  }).map(function (v) {
    return v.trim();
  }).join(' ').trim();
  return value.length ? value : null;
}; // Returns an array for the passed string value by splitting on whitespace.
//
//   attributeValues('one two three ') // ['one', 'two', 'three']
//

var attributeValues = function attributeValues(value) {
  if (!value) return [];
  if (!value.length) return [];
  return value.split(' ').filter(function (v) {
    return v.trim().length;
  });
}; // Extracts attributes from a DOM element.
//

var extractElementAttributes = function extractElementAttributes(element) {
  var attrs = Array.from(element.attributes).reduce(function (memo, attr) {
    memo[attr.name] = attr.value;
    return memo;
  }, {});
  attrs.checked = !!element.checked;
  attrs.selected = !!element.selected;
  attrs.tag_name = element.tagName;

  if (element.tagName.match(/select/i) || multipleInstances(element)) {
    var collectedOptions = collectCheckedOptions(element);
    attrs.values = collectedOptions;
    attrs.value = collectedOptions.join(',');
  } else {
    attrs.value = element.value;
  }

  return attrs;
}; // Extracts the dataset of an element and combines it with the data attributes from all parents if requested.
//

var extractElementDataset = function extractElementDataset(element) {
  var datasetAttribute = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var attrs = extractDataAttributes(element) || {};
  var dataset = datasetAttribute && element.attributes[datasetAttribute];

  if (dataset && dataset.value === 'combined') {
    var parent = element.parentElement;

    while (parent) {
      attrs = _objectSpread(_objectSpread({}, extractDataAttributes(parent)), attrs);
      parent = parent.parentElement;
    }
  }

  return attrs;
}; // Extracts all data attributes from a DOM element.
//

var extractDataAttributes = function extractDataAttributes(element) {
  var attrs = {};

  if (element && element.attributes) {
    Array.from(element.attributes).forEach(function (attr) {
      if (attr.name.startsWith('data-')) {
        attrs[attr.name] = attr.value;
      }
    });
  }

  return attrs;
};

/***/ }),

/***/ "./node_modules/stimulus_reflex/javascript/consumer.js":
/*!*************************************************************!*\
  !*** ./node_modules/stimulus_reflex/javascript/consumer.js ***!
  \*************************************************************/
/*! exports provided: getConsumer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConsumer", function() { return getConsumer; });
/* harmony import */ var _rails_actioncable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rails/actioncable */ "./node_modules/@rails/actioncable/app/assets/javascripts/action_cable.js");
/* harmony import */ var _rails_actioncable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rails_actioncable__WEBPACK_IMPORTED_MODULE_0__);


function isConsumer(object) {
  if (object) {
    try {
      return object.constructor.name === 'Consumer' && object.connect && object.disconnect && object.send;
    } catch (e) {}
  }

  return false;
}

function findConsumer(object) {
  var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  if (!object) return null;
  if (depth > 3) return null;
  if (isConsumer(object)) return object;
  return Object.values(object).map(function (o) {
    return findConsumer(o, depth + 1);
  }).find(function (o) {
    return o;
  });
}

function getConsumer() {
  return findConsumer(window) || Object(_rails_actioncable__WEBPACK_IMPORTED_MODULE_0__["createConsumer"])();
}

/***/ }),

/***/ "./node_modules/stimulus_reflex/javascript/controllers.js":
/*!****************************************************************!*\
  !*** ./node_modules/stimulus_reflex/javascript/controllers.js ***!
  \****************************************************************/
/*! exports provided: allReflexControllers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allReflexControllers", function() { return allReflexControllers; });
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attributes */ "./node_modules/stimulus_reflex/javascript/attributes.js");
 // Returns StimulusReflex controllers local to the passed element based on the data-controller attribute.
//

var localReflexControllers = function localReflexControllers(app, element) {
  return Object(_attributes__WEBPACK_IMPORTED_MODULE_0__["attributeValues"])(element.getAttribute(app.schema.controllerAttribute)).reduce(function (memo, name) {
    var controller = app.getControllerForElementAndIdentifier(element, name);
    if (controller && controller.StimulusReflex) memo.push(controller);
    return memo;
  }, []);
}; // Returns all StimulusReflex controllers for the passed element.
// Traverses DOM ancestors starting with element.
//


var allReflexControllers = function allReflexControllers(app, element) {
  var controllers = [];

  while (element) {
    controllers = controllers.concat(localReflexControllers(app, element));
    element = element.parentElement;
  }

  return controllers;
};

/***/ }),

/***/ "./node_modules/stimulus_reflex/javascript/debug.js":
/*!**********************************************************!*\
  !*** ./node_modules/stimulus_reflex/javascript/debug.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var debugging = false;
/* harmony default export */ __webpack_exports__["default"] = ({
  get enabled() {
    return debugging;
  },

  get disabled() {
    return !debugging;
  },

  get value() {
    return debugging;
  },

  set: function set(value) {
    debugging = !!value;
  },

  set debug(value) {
    debugging = !!value;
  }

});

/***/ }),

/***/ "./node_modules/stimulus_reflex/javascript/lifecycle.js":
/*!**************************************************************!*\
  !*** ./node_modules/stimulus_reflex/javascript/lifecycle.js ***!
  \**************************************************************/
/*! exports provided: dispatchLifecycleEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatchLifecycleEvent", function() { return dispatchLifecycleEvent; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/stimulus_reflex/javascript/utils.js");
/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./debug */ "./node_modules/stimulus_reflex/javascript/debug.js");

 // Invokes a lifecycle method on a StimulusReflex controller.
//
// - stage - the lifecycle stage
//   * before
//   * success
//   * error
//   * halted
//   * after
//   * finalize
//
// - reflexElement - the element that triggered the Reflex (not necessarily the StimulusReflex Controller Element)
//
// - controllerElement - the element holding the StimulusReflex Controller
//
// - reflexId - the UUIDv4 which uniquely identifies the Reflex
//

var invokeLifecycleMethod = function invokeLifecycleMethod(stage, reflexElement, controllerElement, reflexId) {
  if (!controllerElement || !controllerElement.reflexData[reflexId]) return;
  var controller = controllerElement.reflexController[reflexId];
  var reflex = controllerElement.reflexData[reflexId].target;
  var reflexMethodName = reflex.split('#')[1];
  var specificLifecycleMethodName = ['before', 'after', 'finalize'].includes(stage) ? "".concat(stage).concat(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["camelize"])(reflexMethodName)) : "".concat(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["camelize"])(reflexMethodName, false)).concat(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["camelize"])(stage));
  var specificLifecycleMethod = controller[specificLifecycleMethodName];
  var genericLifecycleMethodName = ['before', 'after', 'finalize'].includes(stage) ? "".concat(stage, "Reflex") : "reflex".concat(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["camelize"])(stage));
  var genericLifecycleMethod = controller[genericLifecycleMethodName];

  if (typeof specificLifecycleMethod === 'function') {
    specificLifecycleMethod.call(controller, reflexElement, reflex, controllerElement.reflexError[reflexId], reflexId);
  }

  if (typeof genericLifecycleMethod === 'function') {
    genericLifecycleMethod.call(controller, reflexElement, reflex, controllerElement.reflexError[reflexId], reflexId);
  }

  if (reflexes[reflexId] && stage === reflexes[reflexId].finalStage) {
    Reflect.deleteProperty(controllerElement.reflexController, reflexId);
    Reflect.deleteProperty(controllerElement.reflexData, reflexId);
    Reflect.deleteProperty(controllerElement.reflexError, reflexId);
    Reflect.deleteProperty(reflexes, reflexId);
  }
};

document.addEventListener('stimulus-reflex:before', function (event) {
  return invokeLifecycleMethod('before', event.detail.element, event.detail.controller.element, event.detail.reflexId);
}, true);
document.addEventListener('stimulus-reflex:success', function (event) {
  invokeLifecycleMethod('success', event.detail.element, event.detail.controller.element, event.detail.reflexId);
  dispatchLifecycleEvent('after', event.detail.element, event.detail.controller.element, event.detail.reflexId);
}, true);
document.addEventListener('stimulus-reflex:nothing', function (event) {
  invokeLifecycleMethod('success', event.detail.element, event.detail.controller.element, event.detail.reflexId);
  dispatchLifecycleEvent('after', event.detail.element, event.detail.controller.element, event.detail.reflexId);
}, true);
document.addEventListener('stimulus-reflex:error', function (event) {
  invokeLifecycleMethod('error', event.detail.element, event.detail.controller.element, event.detail.reflexId);
  dispatchLifecycleEvent('after', event.detail.element, event.detail.controller.element, event.detail.reflexId);
}, true);
document.addEventListener('stimulus-reflex:halted', function (event) {
  return invokeLifecycleMethod('halted', event.detail.element, event.detail.controller.element, event.detail.reflexId);
}, true);
document.addEventListener('stimulus-reflex:after', function (event) {
  return invokeLifecycleMethod('after', event.detail.element, event.detail.controller.element, event.detail.reflexId);
}, true);
document.addEventListener('stimulus-reflex:finalize', function (event) {
  return invokeLifecycleMethod('finalize', event.detail.element, event.detail.controller.element, event.detail.reflexId);
}, true); // Dispatches a lifecycle event on document
//
// - stage - the lifecycle stage
//   * before
//   * success
//   * error
//   * halted
//   * after
//   * finalize
//
// - reflexElement - the element that triggered the Reflex (not necessarily the StimulusReflex Controller Element)
//
// - controllerElement - the element holding the StimulusReflex Controller
//
// - reflexId - the UUIDv4 which uniquely identifies the Reflex
//

var dispatchLifecycleEvent = function dispatchLifecycleEvent(stage, reflexElement, controllerElement, reflexId) {
  if (!controllerElement) {
    if (_debug__WEBPACK_IMPORTED_MODULE_1__["default"].enabled && !reflexes[reflexId].warned) {
      console.warn("StimulusReflex was not able execute callbacks or emit events for \"".concat(stage, "\" or later life-cycle stages for this Reflex. The StimulusReflex Controller Element is no longer present in the DOM. Could you move the StimulusReflex Controller to an element higher in your DOM?"));
      reflexes[reflexId].warned = true;
    }

    return;
  }

  if (!controllerElement.reflexController || controllerElement.reflexController && !controllerElement.reflexController[reflexId]) {
    if (_debug__WEBPACK_IMPORTED_MODULE_1__["default"].enabled && !reflexes[reflexId].warned) {
      console.warn("StimulusReflex detected that the StimulusReflex Controller responsible for this Reflex has been replaced with a new instance. Callbacks and events for \"".concat(stage, "\" or later life-cycle stages cannot be executed."));
      reflexes[reflexId].warned = true;
    }

    return;
  }

  var _ref = controllerElement.reflexData[reflexId] || {},
      target = _ref.target;

  var controller = controllerElement.reflexController[reflexId] || {};
  var event = "stimulus-reflex:".concat(stage);
  var detail = {
    reflex: target,
    controller: controller,
    reflexId: reflexId,
    element: reflexElement
  };
  controllerElement.dispatchEvent(new CustomEvent(event, {
    bubbles: true,
    cancelable: false,
    detail: detail
  }));
  if (window.jQuery) window.jQuery(controllerElement).trigger(event, detail);
};

/***/ }),

/***/ "./node_modules/stimulus_reflex/javascript/log.js":
/*!********************************************************!*\
  !*** ./node_modules/stimulus_reflex/javascript/log.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function request(reflexId, target, args, controller, element, controllerElement) {
  reflexes[reflexId].timestamp = new Date();
  console.log("\u2191 stimulus \u2191 ".concat(target), {
    reflexId: reflexId,
    args: args,
    controller: controller,
    element: element,
    controllerElement: controllerElement
  });
}

function success(event) {
  var _ref = event || {},
      detail = _ref.detail;

  var _ref2 = detail || {},
      selector = _ref2.selector;

  var _ref3 = detail.stimulusReflex || {},
      reflexId = _ref3.reflexId,
      target = _ref3.target,
      morph = _ref3.morph,
      serverMessage = _ref3.serverMessage;

  var reflex = reflexes[reflexId];
  var progress = reflex.totalOperations > 1 ? " ".concat(reflex.completedOperations, "/").concat(reflex.totalOperations) : '';
  var duration = reflex.timestamp ? "in ".concat(new Date() - reflex.timestamp, "ms") : 'CLONED';
  var operation = event.type.split(':')[1].split('-').slice(1).join('_');
  var halted = serverMessage && serverMessage.subject === 'halted' || false;
  console.log("\u2193 reflex \u2193 ".concat(target, " \u2192 ").concat(selector || "\u221E").concat(progress, " ").concat(duration), {
    reflexId: reflexId,
    morph: morph,
    operation: operation,
    halted: halted
  });
}

function error(event) {
  var _ref4 = event || {},
      detail = _ref4.detail;

  var _ref5 = detail.stimulusReflex || {},
      reflexId = _ref5.reflexId,
      target = _ref5.target,
      serverMessage = _ref5.serverMessage;

  var reflex = reflexes[reflexId];
  var duration = reflex.timestamp ? "in ".concat(new Date() - reflex.timestamp, "ms") : 'CLONED';
  var payload = detail.stimulusReflex;
  console.log("\u2193 reflex \u2193 ".concat(target, " ").concat(duration, " %cERROR: ").concat(serverMessage.body), 'color: #f00;', {
    reflexId: reflexId,
    payload: payload
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  request: request,
  success: success,
  error: error
});

/***/ }),

/***/ "./node_modules/stimulus_reflex/javascript/schema.js":
/*!***********************************************************!*\
  !*** ./node_modules/stimulus_reflex/javascript/schema.js ***!
  \***********************************************************/
/*! exports provided: defaultSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultSchema", function() { return defaultSchema; });
var defaultSchema = {
  reflexAttribute: 'data-reflex',
  reflexPermanentAttribute: 'data-reflex-permanent',
  reflexRootAttribute: 'data-reflex-root',
  reflexDatasetAttribute: 'data-reflex-dataset'
};

/***/ }),

/***/ "./node_modules/stimulus_reflex/javascript/stimulus_reflex.js":
/*!********************************************************************!*\
  !*** ./node_modules/stimulus_reflex/javascript/stimulus_reflex.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/dist/stimulus.js");
/* harmony import */ var cable_ready__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cable_ready */ "./node_modules/stimulus_reflex/node_modules/cable_ready/javascript/cable_ready.js");
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schema */ "./node_modules/stimulus_reflex/javascript/schema.js");
/* harmony import */ var _consumer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./consumer */ "./node_modules/stimulus_reflex/javascript/consumer.js");
/* harmony import */ var _lifecycle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lifecycle */ "./node_modules/stimulus_reflex/javascript/lifecycle.js");
/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controllers */ "./node_modules/stimulus_reflex/javascript/controllers.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./node_modules/stimulus_reflex/javascript/utils.js");
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./log */ "./node_modules/stimulus_reflex/javascript/log.js");
/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./debug */ "./node_modules/stimulus_reflex/javascript/debug.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./attributes */ "./node_modules/stimulus_reflex/javascript/attributes.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











 // A lambda that does nothing. Very zen; we are made of stars

var NOOP = function NOOP() {}; // A reference to the Stimulus application registered with: StimulusReflex.initialize


var stimulusApplication; // A reference to the ActionCable consumer registered with: StimulusReflex.initialize or getConsumer

var actionCableConsumer; // A reference to an optional object called params defined in the StimulusReflex.initialize and passed to channels

var actionCableParams; // Flag which will be false if the server does not accept the channel subscription

var actionCableSubscriptionActive = false; // A dictionary of all active Reflex operations, indexed by reflexId

window.reflexes = {}; // Should Reflex playback be restricted to the tab that called it?

var isolationMode; // Subscribes a StimulusReflex controller to an ActionCable channel.
// controller - the StimulusReflex controller to subscribe
//

var createSubscription = function createSubscription(controller) {
  actionCableConsumer = actionCableConsumer || Object(_consumer__WEBPACK_IMPORTED_MODULE_3__["getConsumer"])();
  var channel = controller.StimulusReflex.channel;

  var subscription = _objectSpread({
    channel: channel
  }, actionCableParams);

  var identifier = JSON.stringify(subscription);
  controller.StimulusReflex.subscription = actionCableConsumer.subscriptions.findAll(identifier)[0] || actionCableConsumer.subscriptions.create(subscription, {
    received: function received(data) {
      if (!data.cableReady) return;
      var reflexOperations = {};

      for (var name in data.operations) {
        if (data.operations.hasOwnProperty(name)) {
          for (var i = data.operations[name].length - 1; i >= 0; i--) {
            if (data.operations[name][i].stimulusReflex || data.operations[name][i].detail && data.operations[name][i].detail.stimulusReflex) {
              reflexOperations[name] = reflexOperations[name] || [];
              reflexOperations[name].push(data.operations[name][i]);
              data.operations[name].splice(i, 1);
            }
          }

          if (!data.operations[name].length) Reflect.deleteProperty(data.operations, name);
        }
      }

      var totalOperations = 0;
      var reflexData;
      var dispatchEvent = reflexOperations['dispatchEvent'];
      var morph = reflexOperations['morph'];
      var innerHtml = reflexOperations['innerHtml'];
      [dispatchEvent, morph, innerHtml].forEach(function (operation) {
        if (operation && operation.length) {
          var urls = Array.from(new Set(operation.map(function (m) {
            return m.detail ? m.detail.stimulusReflex.url : m.stimulusReflex.url;
          })));
          if (urls.length !== 1 || urls[0] !== location.href) return;
          totalOperations += operation.length;

          if (!reflexData) {
            reflexData = operation[0].detail ? operation[0].detail.stimulusReflex : operation[0].stimulusReflex;
          }
        }
      });

      if (reflexData) {
        var _reflexData = reflexData,
            reflexId = _reflexData.reflexId;

        if (!reflexes[reflexId] && !isolationMode) {
          var controllerElement = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["XPathToElement"])(reflexData.xpathController);
          var reflexElement = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["XPathToElement"])(reflexData.xpathElement);
          controllerElement.reflexController = controllerElement.reflexController || {};
          controllerElement.reflexData = controllerElement.reflexData || {};
          controllerElement.reflexError = controllerElement.reflexError || {};
          controllerElement.reflexController[reflexId] = stimulusApplication.getControllerForElementAndIdentifier(controllerElement, reflexData.reflexController);
          controllerElement.reflexData[reflexId] = reflexData;
          Object(_lifecycle__WEBPACK_IMPORTED_MODULE_4__["dispatchLifecycleEvent"])('before', reflexElement, controllerElement, reflexId);
          registerReflex(reflexData);
        }

        if (reflexes[reflexId]) {
          reflexes[reflexId].totalOperations = totalOperations;
          reflexes[reflexId].pendingOperations = totalOperations;
          reflexes[reflexId].completedOperations = 0;
          cable_ready__WEBPACK_IMPORTED_MODULE_1__["default"].perform(reflexOperations);
        }
      } // run piggy back operations after stimulus reflex behavior


      cable_ready__WEBPACK_IMPORTED_MODULE_1__["default"].perform(data.operations);
    },
    connected: function connected() {
      actionCableSubscriptionActive = true;
      Object(_utils__WEBPACK_IMPORTED_MODULE_6__["emitEvent"])('stimulus-reflex:connected');
    },
    rejected: function rejected() {
      actionCableSubscriptionActive = false;
      Object(_utils__WEBPACK_IMPORTED_MODULE_6__["emitEvent"])('stimulus-reflex:rejected');
      if (_debug__WEBPACK_IMPORTED_MODULE_8__["default"].enabled) console.warn('Channel subscription was rejected.');
    },
    disconnected: function disconnected(willAttemptReconnect) {
      actionCableSubscriptionActive = false;
      Object(_utils__WEBPACK_IMPORTED_MODULE_6__["emitEvent"])('stimulus-reflex:disconnected', willAttemptReconnect);
    }
  });
}; // Extends a regular Stimulus controller with StimulusReflex behavior.
//
// Methods added to the Stimulus controller:
// - stimulate
// - __perform
//


var extendStimulusController = function extendStimulusController(controller) {
  Object.assign(controller, {
    // Indicates if the ActionCable web socket connection is open.
    // The connection must be open before calling stimulate.
    //
    isActionCableConnectionOpen: function isActionCableConnectionOpen() {
      return this.StimulusReflex.subscription.consumer.connection.isOpen();
    },
    // Invokes a server side reflex method.
    //
    // - target - the reflex target (full name of the server side reflex) i.e. 'ReflexClassName#method'
    // - controllerElement - [optional] the element that triggered the reflex, defaults to this.element
    // - options - [optional] an object that contains at least one of attrs, reflexId, selectors, resolveLate, serializeForm
    // - *args - remaining arguments are forwarded to the server side reflex method
    //
    stimulate: function stimulate() {
      var url = location.href;
      var args = Array.from(arguments);
      var target = args.shift() || 'StimulusReflex::Reflex#default_reflex';
      var controllerElement = this.element;
      var reflexElement = args[0] && args[0].nodeType === Node.ELEMENT_NODE ? args.shift() : controllerElement;

      if (reflexElement.type === 'number' && reflexElement.validity && reflexElement.validity.badInput) {
        if (_debug__WEBPACK_IMPORTED_MODULE_8__["default"].enabled) console.warn('Reflex aborted: invalid numeric input');
        return;
      }

      var options = {};

      if (args[0] && _typeof(args[0]) === 'object' && Object.keys(args[0]).filter(function (key) {
        return ['attrs', 'selectors', 'reflexId', 'resolveLate', 'serializeForm'].includes(key);
      }).length) {
        var opts = args.shift();
        Object.keys(opts).forEach(function (o) {
          return options[o] = opts[o];
        });
      }

      var attrs = options['attrs'] || Object(_attributes__WEBPACK_IMPORTED_MODULE_9__["extractElementAttributes"])(reflexElement);
      var reflexId = options['reflexId'] || Object(_utils__WEBPACK_IMPORTED_MODULE_6__["uuidv4"])();
      var selectors = options['selectors'] || getReflexRoots(reflexElement);
      if (typeof selectors === 'string') selectors = [selectors];
      var resolveLate = options['resolveLate'] || false;
      var datasetAttribute = stimulusApplication.schema.reflexDatasetAttribute;
      var dataset = Object(_attributes__WEBPACK_IMPORTED_MODULE_9__["extractElementDataset"])(reflexElement, datasetAttribute);
      var xpathController = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["elementToXPath"])(controllerElement);
      var xpathElement = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["elementToXPath"])(reflexElement);
      var data = {
        target: target,
        args: args,
        url: url,
        attrs: attrs,
        dataset: dataset,
        selectors: selectors,
        reflexId: reflexId,
        resolveLate: resolveLate,
        xpathController: xpathController,
        xpathElement: xpathElement,
        reflexController: this.identifier,
        permanentAttributeName: stimulusApplication.schema.reflexPermanentAttribute
      };
      var subscription = this.StimulusReflex.subscription;
      if (!this.isActionCableConnectionOpen()) throw 'The ActionCable connection is not open! `this.isActionCableConnectionOpen()` must return true before calling `this.stimulate()`';
      if (!actionCableSubscriptionActive) throw 'The ActionCable channel subscription for StimulusReflex was rejected.'; // lifecycle setup

      controllerElement.reflexController = controllerElement.reflexController || {};
      controllerElement.reflexData = controllerElement.reflexData || {};
      controllerElement.reflexError = controllerElement.reflexError || {};
      controllerElement.reflexController[reflexId] = this;
      controllerElement.reflexData[reflexId] = data;
      Object(_lifecycle__WEBPACK_IMPORTED_MODULE_4__["dispatchLifecycleEvent"])('before', reflexElement, controllerElement, reflexId);
      setTimeout(function () {
        var _ref = controllerElement.reflexData[reflexId] || {},
            params = _ref.params;

        var formData = options['serializeForm'] === false ? '' : Object(_utils__WEBPACK_IMPORTED_MODULE_6__["serializeForm"])(reflexElement.closest('form'), {
          element: reflexElement
        });
        controllerElement.reflexData[reflexId] = _objectSpread(_objectSpread({}, data), {}, {
          params: params,
          formData: formData
        });
        subscription.send(controllerElement.reflexData[reflexId]);
      });
      var promise = registerReflex(data);

      if (_debug__WEBPACK_IMPORTED_MODULE_8__["default"].enabled) {
        _log__WEBPACK_IMPORTED_MODULE_7__["default"].request(reflexId, target, args, this.context.scope.identifier, reflexElement, controllerElement);
      }

      return promise;
    },
    // Wraps the call to stimulate for any data-reflex elements.
    // This is internal and should not be invoked directly.
    __perform: function __perform(event) {
      var element = event.target;
      var reflex;

      while (element && !reflex) {
        reflex = element.getAttribute(stimulusApplication.schema.reflexAttribute);
        if (!reflex || !reflex.trim().length) element = element.parentElement;
      }

      var match = Object(_attributes__WEBPACK_IMPORTED_MODULE_9__["attributeValues"])(reflex).find(function (reflex) {
        return reflex.split('->')[0] === event.type;
      });

      if (match) {
        event.preventDefault();
        event.stopPropagation();
        this.stimulate(match.split('->')[1], element);
      }
    }
  });
};

var registerReflex = function registerReflex(data) {
  var reflexId = data.reflexId;
  reflexes[reflexId] = {
    finalStage: 'finalize'
  };
  var promise = new Promise(function (resolve, reject) {
    reflexes[reflexId].promise = {
      resolve: resolve,
      reject: reject,
      data: data
    };
  });
  promise.reflexId = reflexId;
  if (_debug__WEBPACK_IMPORTED_MODULE_8__["default"].enabled) promise.catch(NOOP);
  return promise;
}; // Registers a Stimulus controller and extends it with StimulusReflex behavior
//
// controller - the Stimulus controller
// options - [optional] configuration
//


var register = function register(controller) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var channel = 'StimulusReflex::Channel';
  controller.StimulusReflex = _objectSpread(_objectSpread({}, options), {}, {
    channel: channel
  });
  createSubscription(controller);
  extendStimulusController(controller);
}; // Default StimulusReflexController that is implicitly wired up as data-controller for any DOM elements
// that have configured data-reflex. Note that this default can be overridden when initializing the application.
// i.e. StimulusReflex.initialize(myStimulusApplication, MyCustomDefaultController);
//


var StimulusReflexController = /*#__PURE__*/function (_Controller) {
  _inherits(StimulusReflexController, _Controller);

  var _super = _createSuper(StimulusReflexController);

  function StimulusReflexController() {
    var _this;

    _classCallCheck(this, StimulusReflexController);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    register(_assertThisInitialized(_this));
    return _this;
  }

  return StimulusReflexController;
}(stimulus__WEBPACK_IMPORTED_MODULE_0__["Controller"]); // Sets up declarative reflex behavior.
// Any elements that define data-reflex will automatically be wired up with the default StimulusReflexController.
//


var setupDeclarativeReflexes = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["debounce"])(function () {
  document.querySelectorAll("[".concat(stimulusApplication.schema.reflexAttribute, "]")).forEach(function (element) {
    var controllers = Object(_attributes__WEBPACK_IMPORTED_MODULE_9__["attributeValues"])(element.getAttribute(stimulusApplication.schema.controllerAttribute));
    var reflexAttributeNames = Object(_attributes__WEBPACK_IMPORTED_MODULE_9__["attributeValues"])(element.getAttribute(stimulusApplication.schema.reflexAttribute));
    var actions = Object(_attributes__WEBPACK_IMPORTED_MODULE_9__["attributeValues"])(element.getAttribute(stimulusApplication.schema.actionAttribute));
    reflexAttributeNames.forEach(function (reflexName) {
      var controller = findControllerByReflexName(reflexName, Object(_controllers__WEBPACK_IMPORTED_MODULE_5__["allReflexControllers"])(stimulusApplication, element));
      var action;

      if (controller) {
        action = "".concat(reflexName.split('->')[0], "->").concat(controller.identifier, "#__perform");
        if (!actions.includes(action)) actions.push(action);
      } else {
        action = "".concat(reflexName.split('->')[0], "->stimulus-reflex#__perform");

        if (!controllers.includes('stimulus-reflex')) {
          controllers.push('stimulus-reflex');
        }

        if (!actions.includes(action)) actions.push(action);
      }
    });
    var controllerValue = Object(_attributes__WEBPACK_IMPORTED_MODULE_9__["attributeValue"])(controllers);
    var actionValue = Object(_attributes__WEBPACK_IMPORTED_MODULE_9__["attributeValue"])(actions);

    if (controllerValue && element.getAttribute(stimulusApplication.schema.controllerAttribute) != controllerValue) {
      element.setAttribute(stimulusApplication.schema.controllerAttribute, controllerValue);
    }

    if (actionValue && element.getAttribute(stimulusApplication.schema.actionAttribute) != actionValue) element.setAttribute(stimulusApplication.schema.actionAttribute, actionValue);
  });
  Object(_utils__WEBPACK_IMPORTED_MODULE_6__["emitEvent"])('stimulus-reflex:ready');
}, 20); // Given a reflex string such as 'click->TestReflex#create' and a list of
// controllers. It will find the matching controller based on the controller's
// identifier. e.g. Given these controller identifiers ['foo', 'bar', 'test'],
// it would select the 'test' controller.

var findControllerByReflexName = function findControllerByReflexName(reflexName, controllers) {
  var controller = controllers.find(function (controller) {
    if (!controller.identifier) return;
    return Object(_utils__WEBPACK_IMPORTED_MODULE_6__["extractReflexName"])(reflexName).toLowerCase() === controller.identifier.toLowerCase();
  });
  return controller || controllers[0];
}; // compute the DOM element(s) which will be the morph root
// use the data-reflex-root attribute on the reflex or the controller
// optional value is a CSS selector(s); comma-separated list
// order of preference is data-reflex, data-controller, document body (default)


var getReflexRoots = function getReflexRoots(element) {
  var list = [];

  while (list.length === 0 && element) {
    var reflexRoot = element.getAttribute(stimulusApplication.schema.reflexRootAttribute);

    if (reflexRoot) {
      if (reflexRoot.length === 0 && element.id) reflexRoot = "#".concat(element.id);
      var selectors = reflexRoot.split(',').filter(function (s) {
        return s.trim().length;
      });

      if (selectors.length === 0) {
        console.error("No value found for ".concat(stimulusApplication.schema.reflexRootAttribute, ". Add an #id to the element or provide a value for ").concat(stimulusApplication.schema.reflexRootAttribute, "."), element);
      }

      list = list.concat(selectors.filter(function (s) {
        return document.querySelector(s);
      }));
    }

    element = element.parentElement ? element.parentElement.closest("[".concat(stimulusApplication.schema.reflexRootAttribute, "]")) : null;
  }

  return list;
}; // Initializes StimulusReflex by registering the default Stimulus controller with the passed Stimulus application.
//
// - application - the Stimulus application
// - options
//   * controller - [optional] the default StimulusReflexController
//   * consumer - [optional] the ActionCable consumer
//   * debug - [false] log all Reflexes to the console
//   * params - [{}] key/value parameters to send during channel subscription
//   * isolate - [false] restrict Reflex playback to the tab which initiated it
//


var initialize = function initialize(application) {
  var initializeOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var controller = initializeOptions.controller,
      consumer = initializeOptions.consumer,
      debug = initializeOptions.debug,
      params = initializeOptions.params,
      isolate = initializeOptions.isolate;
  actionCableConsumer = consumer;
  actionCableParams = params;
  isolationMode = !!isolate;
  stimulusApplication = application;
  stimulusApplication.schema = _objectSpread(_objectSpread({}, _schema__WEBPACK_IMPORTED_MODULE_2__["defaultSchema"]), application.schema);
  stimulusApplication.register('stimulus-reflex', controller || StimulusReflexController);
  _debug__WEBPACK_IMPORTED_MODULE_8__["default"].set(!!debug);
};

if (!document.stimulusReflexInitialized) {
  document.stimulusReflexInitialized = true;
  window.addEventListener('load', function () {
    setupDeclarativeReflexes();
    var observer = new MutationObserver(setupDeclarativeReflexes);
    observer.observe(document.documentElement, {
      attributes: true,
      childList: true,
      subtree: true
    });
  });

  var beforeDOMUpdate = function beforeDOMUpdate(event) {
    var _ref2 = event.detail || {},
        stimulusReflex = _ref2.stimulusReflex;

    if (!stimulusReflex) return;
    var reflexId = stimulusReflex.reflexId,
        xpathElement = stimulusReflex.xpathElement,
        xpathController = stimulusReflex.xpathController;
    var controllerElement = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["XPathToElement"])(xpathController);
    var reflexElement = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["XPathToElement"])(xpathElement);
    var reflex = reflexes[reflexId];
    var promise = reflex.promise;
    reflex.pendingOperations--;
    if (reflex.pendingOperations > 0) return;
    if (!stimulusReflex.resolveLate) setTimeout(function () {
      return promise.resolve({
        element: reflexElement,
        event: event,
        data: promise.data
      });
    });
    setTimeout(function () {
      return Object(_lifecycle__WEBPACK_IMPORTED_MODULE_4__["dispatchLifecycleEvent"])('success', reflexElement, controllerElement, reflexId);
    });
  };

  document.addEventListener('cable-ready:before-inner-html', beforeDOMUpdate);
  document.addEventListener('cable-ready:before-morph', beforeDOMUpdate);

  var afterDOMUpdate = function afterDOMUpdate(event) {
    var _ref3 = event.detail || {},
        stimulusReflex = _ref3.stimulusReflex;

    if (!stimulusReflex) return;
    var reflexId = stimulusReflex.reflexId,
        xpathElement = stimulusReflex.xpathElement,
        xpathController = stimulusReflex.xpathController;
    var controllerElement = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["XPathToElement"])(xpathController);
    var reflexElement = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["XPathToElement"])(xpathElement);
    var reflex = reflexes[reflexId];
    var promise = reflex.promise;
    reflex.completedOperations++;
    if (_debug__WEBPACK_IMPORTED_MODULE_8__["default"].enabled) _log__WEBPACK_IMPORTED_MODULE_7__["default"].success(event);
    if (reflex.completedOperations < reflex.totalOperations) return;
    if (stimulusReflex.resolveLate) setTimeout(function () {
      return promise.resolve({
        element: reflexElement,
        event: event,
        data: promise.data
      });
    });
    setTimeout(function () {
      return Object(_lifecycle__WEBPACK_IMPORTED_MODULE_4__["dispatchLifecycleEvent"])('finalize', reflexElement, controllerElement, reflexId);
    });
  };

  document.addEventListener('cable-ready:after-inner-html', afterDOMUpdate);
  document.addEventListener('cable-ready:after-morph', afterDOMUpdate);
  document.addEventListener('stimulus-reflex:server-message', function (event) {
    var _ref4 = event.detail.stimulusReflex || {},
        reflexId = _ref4.reflexId,
        serverMessage = _ref4.serverMessage,
        xpathController = _ref4.xpathController,
        xpathElement = _ref4.xpathElement;

    var subject = serverMessage.subject,
        body = serverMessage.body;
    var controllerElement = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["XPathToElement"])(xpathController);
    var reflexElement = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["XPathToElement"])(xpathElement);
    var promise = reflexes[reflexId].promise;
    var subjects = {
      error: true,
      halted: true,
      nothing: true,
      success: true
    };
    controllerElement.reflexError = controllerElement.reflexError || {};
    if (controllerElement && subject === 'error') controllerElement.reflexError[reflexId] = body;
    promise[subject === 'error' ? 'reject' : 'resolve']({
      data: promise.data,
      element: reflexElement,
      event: event,
      toString: function toString() {
        return body;
      }
    });
    reflexes[reflexId].finalStage = subject === 'halted' ? 'halted' : 'after';
    if (_debug__WEBPACK_IMPORTED_MODULE_8__["default"].enabled) _log__WEBPACK_IMPORTED_MODULE_7__["default"][subject === 'error' ? 'error' : 'success'](event);
    if (subjects[subject]) Object(_lifecycle__WEBPACK_IMPORTED_MODULE_4__["dispatchLifecycleEvent"])(subject, reflexElement, controllerElement, reflexId);
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  initialize: initialize,
  register: register,

  get debug() {
    return _debug__WEBPACK_IMPORTED_MODULE_8__["default"].value;
  },

  set debug(value) {
    _debug__WEBPACK_IMPORTED_MODULE_8__["default"].set(!!value);
  }

});

/***/ }),

/***/ "./node_modules/stimulus_reflex/javascript/utils.js":
/*!**********************************************************!*\
  !*** ./node_modules/stimulus_reflex/javascript/utils.js ***!
  \**********************************************************/
/*! exports provided: uuidv4, serializeForm, camelize, debounce, extractReflexName, emitEvent, elementToXPath, XPathToElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uuidv4", function() { return uuidv4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeForm", function() { return serializeForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "camelize", function() { return camelize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractReflexName", function() { return extractReflexName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emitEvent", function() { return emitEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementToXPath", function() { return elementToXPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XPathToElement", function() { return XPathToElement; });
// uuid4 function taken from stackoverflow
// https://stackoverflow.com/a/2117523/554903
var uuidv4 = function uuidv4() {
  var crypto = window.crypto || window.msCrypto;
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
    return (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
  });
};
var serializeForm = function serializeForm(form) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (!form) return '';
  var w = options.w || window;
  var element = options.element;
  var formData = new w.FormData(form);
  var data = Array.from(formData, function (e) {
    return e.map(encodeURIComponent).join('=');
  });
  var submitButton = form.querySelector('input[type=submit]');

  if (element && element.name && element.nodeName === 'INPUT' && element.type === 'submit') {
    data.push("".concat(encodeURIComponent(element.name), "=").concat(encodeURIComponent(element.value)));
  } else if (submitButton && submitButton.name) {
    data.push("".concat(encodeURIComponent(submitButton.name), "=").concat(encodeURIComponent(submitButton.value)));
  }

  return Array.from(new Set(data)).join('&');
};
var camelize = function camelize(value) {
  var uppercaseFirstLetter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  if (typeof value !== 'string') return '';
  value = value.replace(/[\s_](.)/g, function ($1) {
    return $1.toUpperCase();
  }).replace(/[\s_]/g, '').replace(/^(.)/, function ($1) {
    return $1.toLowerCase();
  });
  if (uppercaseFirstLetter) value = value.substr(0, 1).toUpperCase() + value.substr(1);
  return value;
};
var debounce = function debounce(callback) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 250;
  var timeoutId;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    clearTimeout(timeoutId);
    timeoutId = setTimeout(function () {
      timeoutId = null;
      callback.apply(void 0, args);
    }, delay);
  };
};
var extractReflexName = function extractReflexName(reflexString) {
  var match = reflexString.match(/(?:.*->)?(.*?)(?:Reflex)?#/);
  return match ? match[1] : '';
};
var emitEvent = function emitEvent(event, detail) {
  document.dispatchEvent(new CustomEvent(event, {
    bubbles: true,
    cancelable: false,
    detail: detail
  }));
  if (window.jQuery) window.jQuery(document).trigger(event, detail);
}; // construct a valid xPath for an element in the DOM

var elementToXPath = function elementToXPath(element) {
  if (element.id !== '') return "//*[@id='" + element.id + "']";
  if (element === document.body) return '/html/body';
  var ix = 0;
  var siblings = element.parentNode.childNodes;

  for (var i = 0; i < siblings.length; i++) {
    var sibling = siblings[i];

    if (sibling === element) {
      var computedPath = elementToXPath(element.parentNode);
      var tagName = element.tagName.toLowerCase();
      var ixInc = ix + 1;
      return "".concat(computedPath, "/").concat(tagName, "[").concat(ixInc, "]");
    }

    if (sibling.nodeType === 1 && sibling.tagName === element.tagName) {
      ix++;
    }
  }
};
var XPathToElement = function XPathToElement(xpath) {
  return document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
};

/***/ }),

/***/ "./node_modules/stimulus_reflex/node_modules/cable_ready/javascript/cable_ready.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/stimulus_reflex/node_modules/cable_ready/javascript/cable_ready.js ***!
  \*****************************************************************************************/
/*! exports provided: activeElement, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activeElement", function() { return activeElement; });
/* harmony import */ var morphdom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! morphdom */ "./node_modules/morphdom/dist/morphdom-esm.js");
/* harmony import */ var _callbacks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./callbacks */ "./node_modules/stimulus_reflex/node_modules/cable_ready/javascript/callbacks.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/stimulus_reflex/node_modules/cable_ready/javascript/utils.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var activeElement;
var shouldMorphCallbacks = [_callbacks__WEBPACK_IMPORTED_MODULE_1__["verifyNotMutable"], _callbacks__WEBPACK_IMPORTED_MODULE_1__["verifyNotPermanent"]];
var didMorphCallbacks = []; // Indicates whether or not we should morph an element via onBeforeElUpdated callback
// SEE: https://github.com/patrick-steele-idem/morphdom#morphdomfromnode-tonode-options--node
//

var shouldMorph = function shouldMorph(operation) {
  return function (fromEl, toEl) {
    return !shouldMorphCallbacks.map(function (callback) {
      return typeof callback === 'function' ? callback(operation, fromEl, toEl) : true;
    }).includes(false);
  };
}; // Execute any pluggable functions that modify elements after morphing via onElUpdated callback
//


var didMorph = function didMorph(operation) {
  return function (el) {
    didMorphCallbacks.forEach(function (callback) {
      if (typeof callback === 'function') callback(operation, el);
    });
  };
};

var DOMOperations = {
  // DOM Mutations
  append: function append(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["processElements"])(operation, function (element) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(element, 'cable-ready:before-append', operation);
      var html = operation.html,
          focusSelector = operation.focusSelector;

      if (!operation.cancel) {
        element.insertAdjacentHTML('beforeend', html);
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["assignFocus"])(focusSelector);
      }

      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(element, 'cable-ready:after-append', operation);
    });
  },
  graft: function graft(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["processElements"])(operation, function (element) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(element, 'cable-ready:before-graft', operation);
      var parent = operation.parent,
          focusSelector = operation.focusSelector;
      var parentElement = document.querySelector(parent);

      if (!operation.cancel && parentElement) {
        parentElement.appendChild(element);
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["assignFocus"])(focusSelector);
      }

      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(element, 'cable-ready:after-graft', operation);
    });
  },
  innerHtml: function innerHtml(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["processElements"])(operation, function (element) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(element, 'cable-ready:before-inner-html', operation);
      var html = operation.html,
          focusSelector = operation.focusSelector;

      if (!operation.cancel) {
        element.innerHTML = html;
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["assignFocus"])(focusSelector);
      }

      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(element, 'cable-ready:after-inner-html', operation);
    });
  },
  insertAdjacentHtml: function insertAdjacentHtml(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["processElements"])(operation, function (element) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(element, 'cable-ready:before-insert-adjacent-html', operation);
      var html = operation.html,
          position = operation.position,
          focusSelector = operation.focusSelector;

      if (!operation.cancel) {
        element.insertAdjacentHTML(position || 'beforeend', html);
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["assignFocus"])(focusSelector);
      }

      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(element, 'cable-ready:after-insert-adjacent-html', operation);
    });
  },
  insertAdjacentText: function insertAdjacentText(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["processElements"])(operation, function (element) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(element, 'cable-ready:before-insert-adjacent-text', operation);
      var text = operation.text,
          position = operation.position,
          focusSelector = operation.focusSelector;

      if (!operation.cancel) {
        element.insertAdjacentText(position || 'beforeend', text);
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["assignFocus"])(focusSelector);
      }

      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(element, 'cable-ready:after-insert-adjacent-text', operation);
    });
  },
  morph: function morph(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["processElements"])(operation, function (element) {
      var html = operation.html;
      var template = document.createElement('template');
      template.innerHTML = String(html).trim();
      operation.content = template.content;
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(element, 'cable-ready:before-morph', operation);
      var childrenOnly = operation.childrenOnly,
          focusSelector = operation.focusSelector;
      var parent = element.parentElement;
      var ordinal = Array.from(parent.children).indexOf(element);

      if (!operation.cancel) {
        Object(morphdom__WEBPACK_IMPORTED_MODULE_0__["default"])(element, childrenOnly ? template.content : template.innerHTML, {
          childrenOnly: !!childrenOnly,
          onBeforeElUpdated: shouldMorph(operation),
          onElUpdated: didMorph(operation)
        });
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["assignFocus"])(focusSelector);
      }

      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(parent.children[ordinal], 'cable-ready:after-morph', operation);
    });
  },
  outerHtml: function outerHtml(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["processElements"])(operation, function (element) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(element, 'cable-ready:before-outer-html', operation);
      var html = operation.html,
          focusSelector = operation.focusSelector;
      var parent = element.parentElement;
      var ordinal = Array.from(parent.children).indexOf(element);

      if (!operation.cancel) {
        element.outerHTML = html;
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["assignFocus"])(focusSelector);
      }

      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(parent.children[ordinal], 'cable-ready:after-outer-html', operation);
    });
  },
  prepend: function prepend(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["processElements"])(operation, function (element) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(element, 'cable-ready:before-prepend', operation);
      var html = operation.html,
          focusSelector = operation.focusSelector;

      if (!operation.cancel) {
        element.insertAdjacentHTML('afterbegin', html);
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["assignFocus"])(focusSelector);
      }

      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(element, 'cable-ready:after-prepend', operation);
    });
  },
  remove: function remove(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["processElements"])(operation, function (element) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(element, 'cable-ready:before-remove', operation);
      var focusSelector = operation.focusSelector;

      if (!operation.cancel) {
        element.remove();
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["assignFocus"])(focusSelector);
      }

      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(document, 'cable-ready:after-remove', operation);
    });
  },
  replace: function replace(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["processElements"])(operation, function (element) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(element, 'cable-ready:before-replace', operation);
      var html = operation.html,
          focusSelector = operation.focusSelector;
      var parent = element.parentElement;
      var ordinal = Array.from(parent.children).indexOf(element);

      if (!operation.cancel) {
        element.outerHTML = html;
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["assignFocus"])(focusSelector);
      }

      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(parent.children[ordinal], 'cable-ready:after-replace', operation);
    });
  },
  textContent: function textContent(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["processElements"])(operation, function (element) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(element, 'cable-ready:before-text-content', operation);
      var text = operation.text,
          focusSelector = operation.focusSelector;

      if (!operation.cancel) {
        element.textContent = text;
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["assignFocus"])(focusSelector);
      }

      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(element, 'cable-ready:after-text-content', operation);
    });
  },
  // Element Property Mutations
  addCssClass: function addCssClass(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["processElements"])(operation, function (element) {
      var _element$classList;

      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(element, 'cable-ready:before-add-css-class', operation);
      var name = operation.name;
      if (!operation.cancel) (_element$classList = element.classList).add.apply(_element$classList, _toConsumableArray(Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getClassNames"])(name)));
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(element, 'cable-ready:after-add-css-class', operation);
    });
  },
  removeAttribute: function removeAttribute(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["processElements"])(operation, function (element) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(element, 'cable-ready:before-remove-attribute', operation);
      var name = operation.name;
      if (!operation.cancel) element.removeAttribute(name);
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(element, 'cable-ready:after-remove-attribute', operation);
    });
  },
  removeCssClass: function removeCssClass(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["processElements"])(operation, function (element) {
      var _element$classList2;

      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(element, 'cable-ready:before-remove-css-class', operation);
      var name = operation.name;
      if (!operation.cancel) (_element$classList2 = element.classList).remove.apply(_element$classList2, _toConsumableArray(Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getClassNames"])(name)));
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(element, 'cable-ready:after-remove-css-class', operation);
    });
  },
  setAttribute: function setAttribute(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["processElements"])(operation, function (element) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(element, 'cable-ready:before-set-attribute', operation);
      var name = operation.name,
          value = operation.value;
      if (!operation.cancel) element.setAttribute(name, value);
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(element, 'cable-ready:after-set-attribute', operation);
    });
  },
  setDatasetProperty: function setDatasetProperty(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["processElements"])(operation, function (element) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(element, 'cable-ready:before-set-dataset-property', operation);
      var name = operation.name,
          value = operation.value;
      if (!operation.cancel) element.dataset[name] = value;
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(element, 'cable-ready:after-set-dataset-property', operation);
    });
  },
  setProperty: function setProperty(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["processElements"])(operation, function (element) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(element, 'cable-ready:before-set-property', operation);
      var name = operation.name,
          value = operation.value;
      if (!operation.cancel && name in element) element[name] = value;
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(element, 'cable-ready:after-set-property', operation);
    });
  },
  setStyle: function setStyle(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["processElements"])(operation, function (element) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(element, 'cable-ready:before-set-style', operation);
      var name = operation.name,
          value = operation.value;
      if (!operation.cancel) element.style[name] = value;
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(element, 'cable-ready:after-set-style', operation);
    });
  },
  setStyles: function setStyles(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["processElements"])(operation, function (element) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(element, 'cable-ready:before-set-styles', operation);
      var styles = operation.styles;

      for (var _i2 = 0, _Object$entries = Object.entries(styles); _i2 < _Object$entries.length; _i2++) {
        var _ref3 = _Object$entries[_i2];

        var _ref2 = _slicedToArray(_ref3, 2);

        var name = _ref2[0];
        var value = _ref2[1];
        if (!operation.cancel) element.style[name] = value;
      }

      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(element, 'cable-ready:after-set-styles', operation);
    });
  },
  setValue: function setValue(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["processElements"])(operation, function (element) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(element, 'cable-ready:before-set-value', operation);
      var value = operation.value;
      if (!operation.cancel) element.value = value;
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(element, 'cable-ready:after-set-value', operation);
    });
  },
  // DOM Events
  dispatchEvent: function dispatchEvent(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["processElements"])(operation, function (element) {
      var name = operation.name,
          detail = operation.detail;
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(element, name, detail);
    });
  },
  // Browser Manipulations
  clearStorage: function clearStorage(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(document, 'cable-ready:before-clear-storage', operation);
    var type = operation.type;
    var storage = type === 'session' ? sessionStorage : localStorage;
    if (!operation.cancel) storage.clear();
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(document, 'cable-ready:after-clear-storage', operation);
  },
  go: function go(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(window, 'cable-ready:before-go', operation);
    var delta = operation.delta;
    if (!operation.cancel) history.go(delta);
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(window, 'cable-ready:after-go', operation);
  },
  pushState: function pushState(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(window, 'cable-ready:before-push-state', operation);
    var state = operation.state,
        title = operation.title,
        url = operation.url;
    if (!operation.cancel) history.pushState(state || {}, title || '', url);
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(window, 'cable-ready:after-push-state', operation);
  },
  removeStorageItem: function removeStorageItem(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(document, 'cable-ready:before-remove-storage-item', operation);
    var key = operation.key,
        type = operation.type;
    var storage = type === 'session' ? sessionStorage : localStorage;
    if (!operation.cancel) storage.removeItem(key);
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(document, 'cable-ready:after-remove-storage-item', operation);
  },
  replaceState: function replaceState(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(window, 'cable-ready:before-replace-state', operation);
    var state = operation.state,
        title = operation.title,
        url = operation.url;
    if (!operation.cancel) history.replaceState(state || {}, title || '', url);
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(window, 'cable-ready:after-replace-state', operation);
  },
  scrollIntoView: function scrollIntoView(operation) {
    var element = operation.element;
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(element, 'cable-ready:before-scroll-into-view', operation);
    if (!operation.cancel) element.scrollIntoView(operation);
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(element, 'cable-ready:after-scroll-into-view', operation);
  },
  setCookie: function setCookie(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(document, 'cable-ready:before-set-cookie', operation);
    var cookie = operation.cookie;
    if (!operation.cancel) document.cookie = cookie;
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(document, 'cable-ready:after-set-cookie', operation);
  },
  setFocus: function setFocus(operation) {
    var element = operation.element;
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(element, 'cable-ready:before-set-focus', operation);
    if (!operation.cancel) Object(_utils__WEBPACK_IMPORTED_MODULE_2__["assignFocus"])(element);
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(element, 'cable-ready:after-set-focus', operation);
  },
  setStorageItem: function setStorageItem(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(document, 'cable-ready:before-set-storage-item', operation);
    var key = operation.key,
        value = operation.value,
        type = operation.type;
    var storage = type === 'session' ? sessionStorage : localStorage;
    if (!operation.cancel) storage.setItem(key, value);
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(document, 'cable-ready:after-set-storage-item', operation);
  },
  // Notifications
  consoleLog: function consoleLog(operation) {
    var message = operation.message,
        level = operation.level;
    level && ['warn', 'info', 'error'].includes(level) ? console[level](message) : console.log(message);
  },
  notification: function notification(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(document, 'cable-ready:before-notification', operation);
    var title = operation.title,
        options = operation.options;
    if (!operation.cancel) Notification.requestPermission().then(function (result) {
      operation.permission = result;
      if (result === 'granted') new Notification(title || '', options);
    });
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(document, 'cable-ready:after-notification', operation);
  },
  playSound: function playSound(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(document, 'cable-ready:before-play-sound', operation);
    var src = operation.src;

    if (!operation.cancel) {
      var canplaythrough = function canplaythrough() {
        document.audio.removeEventListener('canplaythrough', canplaythrough);
        document.audio.play();
      };

      var ended = function ended() {
        document.audio.removeEventListener('ended', canplaythrough);
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(document, 'cable-ready:after-play-sound', operation);
      };

      document.audio.addEventListener('canplaythrough', canplaythrough);
      document.audio.addEventListener('ended', ended);
      document.audio.src = src;
      document.audio.play();
    } else Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(document, 'cable-ready:after-play-sound', operation);
  }
};

var perform = function perform(operations) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    emitMissingElementWarnings: true
  };

  for (var name in operations) {
    if (operations.hasOwnProperty(name)) {
      var entries = operations[name];

      for (var i = 0; i < entries.length; i++) {
        var operation = entries[i];

        try {
          if (operation.selector) {
            operation.element = operation.xpath ? Object(_utils__WEBPACK_IMPORTED_MODULE_2__["xpathToElement"])(operation.selector) : document[operation.selectAll ? 'querySelectorAll' : 'querySelector'](operation.selector);
          } else {
            operation.element = document;
          }

          if (operation.element || options.emitMissingElementWarnings) {
            activeElement = document.activeElement;
            DOMOperations[name](operation);
          }
        } catch (e) {
          if (operation.element) {
            console.error("CableReady detected an error in ".concat(name, ": ").concat(e.message, ". If you need to support older browsers make sure you've included the corresponding polyfills. https://docs.stimulusreflex.com/setup#polyfills-for-ie11."));
            console.error(e);
          } else {
            console.log("CableReady ".concat(name, " failed due to missing DOM element for selector: '").concat(operation.selector, "'"));
          }
        }
      }
    }
  }
};

var performAsync = function performAsync(operations) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    emitMissingElementWarnings: true
  };
  return new Promise(function (resolve, reject) {
    try {
      resolve(perform(operations, options));
    } catch (err) {
      reject(err);
    }
  });
};

document.addEventListener('DOMContentLoaded', function () {
  if (!document.audio) {
    document.audio = new Audio('data:audio/mpeg;base64,//OExAAAAAAAAAAAAEluZm8AAAAHAAAABAAAASAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/P39/f39/f39/f39/f39/f39/f39/f39/f3+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/AAAAAAAAAAAAAAAAAAAAAAAAAAAAJAa/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//MUxAAAAANIAAAAAExBTUUzLjk2LjFV//MUxAsAAANIAAAAAFVVVVVVVVVVVVVV//MUxBYAAANIAAAAAFVVVVVVVVVVVVVV//MUxCEAAANIAAAAAFVVVVVVVVVVVVVV');

    var unlockAudio = function unlockAudio() {
      document.body.removeEventListener('click', unlockAudio);
      document.body.removeEventListener('touchstart', unlockAudio);
      document.audio.play().then(function () {}).catch(function () {});
    };

    document.body.addEventListener('click', unlockAudio);
    document.body.addEventListener('touchstart', unlockAudio);
  }
});
/* harmony default export */ __webpack_exports__["default"] = ({
  perform: perform,
  performAsync: performAsync,
  DOMOperations: DOMOperations,
  shouldMorphCallbacks: shouldMorphCallbacks,
  didMorphCallbacks: didMorphCallbacks
});

/***/ }),

/***/ "./node_modules/stimulus_reflex/node_modules/cable_ready/javascript/callbacks.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/stimulus_reflex/node_modules/cable_ready/javascript/callbacks.js ***!
  \***************************************************************************************/
/*! exports provided: verifyNotMutable, verifyNotPermanent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyNotMutable", function() { return verifyNotMutable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyNotPermanent", function() { return verifyNotPermanent; });
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums */ "./node_modules/stimulus_reflex/node_modules/cable_ready/javascript/enums.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/stimulus_reflex/node_modules/cable_ready/javascript/utils.js");
/* harmony import */ var _cable_ready__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cable_ready */ "./node_modules/stimulus_reflex/node_modules/cable_ready/javascript/cable_ready.js");



var verifyNotMutable = function verifyNotMutable(detail, fromEl, toEl) {
  // Skip nodes that are equal:
  // https://github.com/patrick-steele-idem/morphdom#can-i-make-morphdom-blaze-through-the-dom-tree-even-faster-yes
  if (!_enums__WEBPACK_IMPORTED_MODULE_0__["mutableTags"][fromEl.tagName] && fromEl.isEqualNode(toEl)) return false;
  return true;
};
var verifyNotPermanent = function verifyNotPermanent(detail, fromEl, toEl) {
  var permanentAttributeName = detail.permanentAttributeName;
  if (!permanentAttributeName) return true;
  var permanent = fromEl.closest("[".concat(permanentAttributeName, "]")); // only morph attributes on the active non-permanent text input

  if (!permanent && Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isTextInput"])(fromEl) && fromEl === _cable_ready__WEBPACK_IMPORTED_MODULE_2__["activeElement"]) {
    var ignore = {
      value: true
    };
    Array.from(toEl.attributes).forEach(function (attribute) {
      if (!ignore[attribute.name]) fromEl.setAttribute(attribute.name, attribute.value);
    });
    return false;
  }

  return !permanent;
};

/***/ }),

/***/ "./node_modules/stimulus_reflex/node_modules/cable_ready/javascript/enums.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/stimulus_reflex/node_modules/cable_ready/javascript/enums.js ***!
  \***********************************************************************************/
/*! exports provided: inputTags, mutableTags, textInputTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputTags", function() { return inputTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutableTags", function() { return mutableTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textInputTypes", function() { return textInputTypes; });
var inputTags = {
  INPUT: true,
  TEXTAREA: true,
  SELECT: true
};
var mutableTags = {
  INPUT: true,
  TEXTAREA: true,
  OPTION: true
};
var textInputTypes = {
  'datetime-local': true,
  'select-multiple': true,
  'select-one': true,
  color: true,
  date: true,
  datetime: true,
  email: true,
  month: true,
  number: true,
  password: true,
  range: true,
  search: true,
  tel: true,
  text: true,
  textarea: true,
  time: true,
  url: true,
  week: true
};

/***/ }),

/***/ "./node_modules/stimulus_reflex/node_modules/cable_ready/javascript/utils.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/stimulus_reflex/node_modules/cable_ready/javascript/utils.js ***!
  \***********************************************************************************/
/*! exports provided: isTextInput, assignFocus, dispatch, xpathToElement, getClassNames, processElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTextInput", function() { return isTextInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignFocus", function() { return assignFocus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatch", function() { return dispatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xpathToElement", function() { return xpathToElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClassNames", function() { return getClassNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processElements", function() { return processElements; });
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums */ "./node_modules/stimulus_reflex/node_modules/cable_ready/javascript/enums.js");
/* harmony import */ var _cable_ready__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cable_ready */ "./node_modules/stimulus_reflex/node_modules/cable_ready/javascript/cable_ready.js");

 // Indicates if the passed element is considered a text input.
//

var isTextInput = function isTextInput(element) {
  return _enums__WEBPACK_IMPORTED_MODULE_0__["inputTags"][element.tagName] && _enums__WEBPACK_IMPORTED_MODULE_0__["textInputTypes"][element.type];
}; // Assigns focus to the appropriate element... preferring the explicitly passed selector
//
// * selector - a CSS selector for the element that should have focus
//

var assignFocus = function assignFocus(selector) {
  var element = selector && selector.nodeType === Node.ELEMENT_NODE ? selector : document.querySelector(selector);
  var focusElement = element || _cable_ready__WEBPACK_IMPORTED_MODULE_1__["activeElement"];
  if (focusElement && focusElement.focus) focusElement.focus();
}; // Dispatches an event on the passed element
//
// * element - the element
// * name - the name of the event
// * detail - the event detail
//

var dispatch = function dispatch(element, name) {
  var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var init = {
    bubbles: true,
    cancelable: true,
    detail: detail
  };
  var evt = new CustomEvent(name, init);
  element.dispatchEvent(evt);
  if (window.jQuery) window.jQuery(element).trigger(name, detail);
}; // Accepts an xPath query and returns the element found at that position in the DOM
//

var xpathToElement = function xpathToElement(xpath) {
  return document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}; // Return an array with the class names to be used
//
// * names - could be a string or an array of strings for multiple classes.
//

var getClassNames = function getClassNames(names) {
  return Array(names).flat();
}; // Perform operation for either the first or all of the elements returned by CSS selector
//
// * operation - the instruction payload from perform
// * callback - the operation function to run for each element
//

var processElements = function processElements(operation, callback) {
  Array.from(operation.selectAll ? operation.element : [operation.element]).forEach(callback);
};

/***/ }),

/***/ "./node_modules/turbolinks/dist/turbolinks.js":
/*!****************************************************!*\
  !*** ./node_modules/turbolinks/dist/turbolinks.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
Turbolinks 5.2.0
Copyright © 2018 Basecamp, LLC
 */
(function () {
  var t = this;
  (function () {
    (function () {
      this.Turbolinks = {
        supported: function () {
          return null != window.history.pushState && null != window.requestAnimationFrame && null != window.addEventListener;
        }(),
        visit: function visit(t, r) {
          return e.controller.visit(t, r);
        },
        clearCache: function clearCache() {
          return e.controller.clearCache();
        },
        setProgressBarDelay: function setProgressBarDelay(t) {
          return e.controller.setProgressBarDelay(t);
        }
      };
    }).call(this);
  }).call(t);
  var e = t.Turbolinks;
  (function () {
    (function () {
      var t,
          r,
          n,
          o = [].slice;
      e.copyObject = function (t) {
        var e, r, n;
        r = {};

        for (e in t) {
          n = t[e], r[e] = n;
        }

        return r;
      }, e.closest = function (e, r) {
        return t.call(e, r);
      }, t = function () {
        var t, e;
        return t = document.documentElement, null != (e = t.closest) ? e : function (t) {
          var e;

          for (e = this; e;) {
            if (e.nodeType === Node.ELEMENT_NODE && r.call(e, t)) return e;
            e = e.parentNode;
          }
        };
      }(), e.defer = function (t) {
        return setTimeout(t, 1);
      }, e.throttle = function (t) {
        var e;
        return e = null, function () {
          var r;
          return r = 1 <= arguments.length ? o.call(arguments, 0) : [], null != e ? e : e = requestAnimationFrame(function (n) {
            return function () {
              return e = null, t.apply(n, r);
            };
          }(this));
        };
      }, e.dispatch = function (t, e) {
        var r, o, i, s, a, u;
        return a = null != e ? e : {}, u = a.target, r = a.cancelable, o = a.data, i = document.createEvent("Events"), i.initEvent(t, !0, r === !0), i.data = null != o ? o : {}, i.cancelable && !n && (s = i.preventDefault, i.preventDefault = function () {
          return this.defaultPrevented || Object.defineProperty(this, "defaultPrevented", {
            get: function get() {
              return !0;
            }
          }), s.call(this);
        }), (null != u ? u : document).dispatchEvent(i), i;
      }, n = function () {
        var t;
        return t = document.createEvent("Events"), t.initEvent("test", !0, !0), t.preventDefault(), t.defaultPrevented;
      }(), e.match = function (t, e) {
        return r.call(t, e);
      }, r = function () {
        var t, e, r, n;
        return t = document.documentElement, null != (e = null != (r = null != (n = t.matchesSelector) ? n : t.webkitMatchesSelector) ? r : t.msMatchesSelector) ? e : t.mozMatchesSelector;
      }(), e.uuid = function () {
        var t, e, r;

        for (r = "", t = e = 1; 36 >= e; t = ++e) {
          r += 9 === t || 14 === t || 19 === t || 24 === t ? "-" : 15 === t ? "4" : 20 === t ? (Math.floor(4 * Math.random()) + 8).toString(16) : Math.floor(15 * Math.random()).toString(16);
        }

        return r;
      };
    }).call(this), function () {
      e.Location = function () {
        function t(t) {
          var e, r;
          null == t && (t = ""), r = document.createElement("a"), r.href = t.toString(), this.absoluteURL = r.href, e = r.hash.length, 2 > e ? this.requestURL = this.absoluteURL : (this.requestURL = this.absoluteURL.slice(0, -e), this.anchor = r.hash.slice(1));
        }

        var e, r, n, o;
        return t.wrap = function (t) {
          return t instanceof this ? t : new this(t);
        }, t.prototype.getOrigin = function () {
          return this.absoluteURL.split("/", 3).join("/");
        }, t.prototype.getPath = function () {
          var t, e;
          return null != (t = null != (e = this.requestURL.match(/\/\/[^\/]*(\/[^?;]*)/)) ? e[1] : void 0) ? t : "/";
        }, t.prototype.getPathComponents = function () {
          return this.getPath().split("/").slice(1);
        }, t.prototype.getLastPathComponent = function () {
          return this.getPathComponents().slice(-1)[0];
        }, t.prototype.getExtension = function () {
          var t, e;
          return null != (t = null != (e = this.getLastPathComponent().match(/\.[^.]*$/)) ? e[0] : void 0) ? t : "";
        }, t.prototype.isHTML = function () {
          return this.getExtension().match(/^(?:|\.(?:htm|html|xhtml))$/);
        }, t.prototype.isPrefixedBy = function (t) {
          var e;
          return e = r(t), this.isEqualTo(t) || o(this.absoluteURL, e);
        }, t.prototype.isEqualTo = function (t) {
          return this.absoluteURL === (null != t ? t.absoluteURL : void 0);
        }, t.prototype.toCacheKey = function () {
          return this.requestURL;
        }, t.prototype.toJSON = function () {
          return this.absoluteURL;
        }, t.prototype.toString = function () {
          return this.absoluteURL;
        }, t.prototype.valueOf = function () {
          return this.absoluteURL;
        }, r = function r(t) {
          return e(t.getOrigin() + t.getPath());
        }, e = function e(t) {
          return n(t, "/") ? t : t + "/";
        }, o = function o(t, e) {
          return t.slice(0, e.length) === e;
        }, n = function n(t, e) {
          return t.slice(-e.length) === e;
        }, t;
      }();
    }.call(this), function () {
      var t = function t(_t, e) {
        return function () {
          return _t.apply(e, arguments);
        };
      };

      e.HttpRequest = function () {
        function r(r, n, o) {
          this.delegate = r, this.requestCanceled = t(this.requestCanceled, this), this.requestTimedOut = t(this.requestTimedOut, this), this.requestFailed = t(this.requestFailed, this), this.requestLoaded = t(this.requestLoaded, this), this.requestProgressed = t(this.requestProgressed, this), this.url = e.Location.wrap(n).requestURL, this.referrer = e.Location.wrap(o).absoluteURL, this.createXHR();
        }

        return r.NETWORK_FAILURE = 0, r.TIMEOUT_FAILURE = -1, r.timeout = 60, r.prototype.send = function () {
          var t;
          return this.xhr && !this.sent ? (this.notifyApplicationBeforeRequestStart(), this.setProgress(0), this.xhr.send(), this.sent = !0, "function" == typeof (t = this.delegate).requestStarted ? t.requestStarted() : void 0) : void 0;
        }, r.prototype.cancel = function () {
          return this.xhr && this.sent ? this.xhr.abort() : void 0;
        }, r.prototype.requestProgressed = function (t) {
          return t.lengthComputable ? this.setProgress(t.loaded / t.total) : void 0;
        }, r.prototype.requestLoaded = function () {
          return this.endRequest(function (t) {
            return function () {
              var e;
              return 200 <= (e = t.xhr.status) && 300 > e ? t.delegate.requestCompletedWithResponse(t.xhr.responseText, t.xhr.getResponseHeader("Turbolinks-Location")) : (t.failed = !0, t.delegate.requestFailedWithStatusCode(t.xhr.status, t.xhr.responseText));
            };
          }(this));
        }, r.prototype.requestFailed = function () {
          return this.endRequest(function (t) {
            return function () {
              return t.failed = !0, t.delegate.requestFailedWithStatusCode(t.constructor.NETWORK_FAILURE);
            };
          }(this));
        }, r.prototype.requestTimedOut = function () {
          return this.endRequest(function (t) {
            return function () {
              return t.failed = !0, t.delegate.requestFailedWithStatusCode(t.constructor.TIMEOUT_FAILURE);
            };
          }(this));
        }, r.prototype.requestCanceled = function () {
          return this.endRequest();
        }, r.prototype.notifyApplicationBeforeRequestStart = function () {
          return e.dispatch("turbolinks:request-start", {
            data: {
              url: this.url,
              xhr: this.xhr
            }
          });
        }, r.prototype.notifyApplicationAfterRequestEnd = function () {
          return e.dispatch("turbolinks:request-end", {
            data: {
              url: this.url,
              xhr: this.xhr
            }
          });
        }, r.prototype.createXHR = function () {
          return this.xhr = new XMLHttpRequest(), this.xhr.open("GET", this.url, !0), this.xhr.timeout = 1e3 * this.constructor.timeout, this.xhr.setRequestHeader("Accept", "text/html, application/xhtml+xml"), this.xhr.setRequestHeader("Turbolinks-Referrer", this.referrer), this.xhr.onprogress = this.requestProgressed, this.xhr.onload = this.requestLoaded, this.xhr.onerror = this.requestFailed, this.xhr.ontimeout = this.requestTimedOut, this.xhr.onabort = this.requestCanceled;
        }, r.prototype.endRequest = function (t) {
          return this.xhr ? (this.notifyApplicationAfterRequestEnd(), null != t && t.call(this), this.destroy()) : void 0;
        }, r.prototype.setProgress = function (t) {
          var e;
          return this.progress = t, "function" == typeof (e = this.delegate).requestProgressed ? e.requestProgressed(this.progress) : void 0;
        }, r.prototype.destroy = function () {
          var t;
          return this.setProgress(1), "function" == typeof (t = this.delegate).requestFinished && t.requestFinished(), this.delegate = null, this.xhr = null;
        }, r;
      }();
    }.call(this), function () {
      var t = function t(_t2, e) {
        return function () {
          return _t2.apply(e, arguments);
        };
      };

      e.ProgressBar = function () {
        function e() {
          this.trickle = t(this.trickle, this), this.stylesheetElement = this.createStylesheetElement(), this.progressElement = this.createProgressElement();
        }

        var r;
        return r = 300, e.defaultCSS = ".turbolinks-progress-bar {\n  position: fixed;\n  display: block;\n  top: 0;\n  left: 0;\n  height: 3px;\n  background: #0076ff;\n  z-index: 9999;\n  transition: width " + r + "ms ease-out, opacity " + r / 2 + "ms " + r / 2 + "ms ease-in;\n  transform: translate3d(0, 0, 0);\n}", e.prototype.show = function () {
          return this.visible ? void 0 : (this.visible = !0, this.installStylesheetElement(), this.installProgressElement(), this.startTrickling());
        }, e.prototype.hide = function () {
          return this.visible && !this.hiding ? (this.hiding = !0, this.fadeProgressElement(function (t) {
            return function () {
              return t.uninstallProgressElement(), t.stopTrickling(), t.visible = !1, t.hiding = !1;
            };
          }(this))) : void 0;
        }, e.prototype.setValue = function (t) {
          return this.value = t, this.refresh();
        }, e.prototype.installStylesheetElement = function () {
          return document.head.insertBefore(this.stylesheetElement, document.head.firstChild);
        }, e.prototype.installProgressElement = function () {
          return this.progressElement.style.width = 0, this.progressElement.style.opacity = 1, document.documentElement.insertBefore(this.progressElement, document.body), this.refresh();
        }, e.prototype.fadeProgressElement = function (t) {
          return this.progressElement.style.opacity = 0, setTimeout(t, 1.5 * r);
        }, e.prototype.uninstallProgressElement = function () {
          return this.progressElement.parentNode ? document.documentElement.removeChild(this.progressElement) : void 0;
        }, e.prototype.startTrickling = function () {
          return null != this.trickleInterval ? this.trickleInterval : this.trickleInterval = setInterval(this.trickle, r);
        }, e.prototype.stopTrickling = function () {
          return clearInterval(this.trickleInterval), this.trickleInterval = null;
        }, e.prototype.trickle = function () {
          return this.setValue(this.value + Math.random() / 100);
        }, e.prototype.refresh = function () {
          return requestAnimationFrame(function (t) {
            return function () {
              return t.progressElement.style.width = 10 + 90 * t.value + "%";
            };
          }(this));
        }, e.prototype.createStylesheetElement = function () {
          var t;
          return t = document.createElement("style"), t.type = "text/css", t.textContent = this.constructor.defaultCSS, t;
        }, e.prototype.createProgressElement = function () {
          var t;
          return t = document.createElement("div"), t.className = "turbolinks-progress-bar", t;
        }, e;
      }();
    }.call(this), function () {
      var t = function t(_t3, e) {
        return function () {
          return _t3.apply(e, arguments);
        };
      };

      e.BrowserAdapter = function () {
        function r(r) {
          this.controller = r, this.showProgressBar = t(this.showProgressBar, this), this.progressBar = new e.ProgressBar();
        }

        var n, o, i;
        return i = e.HttpRequest, n = i.NETWORK_FAILURE, o = i.TIMEOUT_FAILURE, r.prototype.visitProposedToLocationWithAction = function (t, e) {
          return this.controller.startVisitToLocationWithAction(t, e);
        }, r.prototype.visitStarted = function (t) {
          return t.issueRequest(), t.changeHistory(), t.loadCachedSnapshot();
        }, r.prototype.visitRequestStarted = function (t) {
          return this.progressBar.setValue(0), t.hasCachedSnapshot() || "restore" !== t.action ? this.showProgressBarAfterDelay() : this.showProgressBar();
        }, r.prototype.visitRequestProgressed = function (t) {
          return this.progressBar.setValue(t.progress);
        }, r.prototype.visitRequestCompleted = function (t) {
          return t.loadResponse();
        }, r.prototype.visitRequestFailedWithStatusCode = function (t, e) {
          switch (e) {
            case n:
            case o:
              return this.reload();

            default:
              return t.loadResponse();
          }
        }, r.prototype.visitRequestFinished = function (t) {
          return this.hideProgressBar();
        }, r.prototype.visitCompleted = function (t) {
          return t.followRedirect();
        }, r.prototype.pageInvalidated = function () {
          return this.reload();
        }, r.prototype.showProgressBarAfterDelay = function () {
          return this.progressBarTimeout = setTimeout(this.showProgressBar, this.controller.progressBarDelay);
        }, r.prototype.showProgressBar = function () {
          return this.progressBar.show();
        }, r.prototype.hideProgressBar = function () {
          return this.progressBar.hide(), clearTimeout(this.progressBarTimeout);
        }, r.prototype.reload = function () {
          return window.location.reload();
        }, r;
      }();
    }.call(this), function () {
      var t = function t(_t4, e) {
        return function () {
          return _t4.apply(e, arguments);
        };
      };

      e.History = function () {
        function r(e) {
          this.delegate = e, this.onPageLoad = t(this.onPageLoad, this), this.onPopState = t(this.onPopState, this);
        }

        return r.prototype.start = function () {
          return this.started ? void 0 : (addEventListener("popstate", this.onPopState, !1), addEventListener("load", this.onPageLoad, !1), this.started = !0);
        }, r.prototype.stop = function () {
          return this.started ? (removeEventListener("popstate", this.onPopState, !1), removeEventListener("load", this.onPageLoad, !1), this.started = !1) : void 0;
        }, r.prototype.push = function (t, r) {
          return t = e.Location.wrap(t), this.update("push", t, r);
        }, r.prototype.replace = function (t, r) {
          return t = e.Location.wrap(t), this.update("replace", t, r);
        }, r.prototype.onPopState = function (t) {
          var r, n, o, i;
          return this.shouldHandlePopState() && (i = null != (n = t.state) ? n.turbolinks : void 0) ? (r = e.Location.wrap(window.location), o = i.restorationIdentifier, this.delegate.historyPoppedToLocationWithRestorationIdentifier(r, o)) : void 0;
        }, r.prototype.onPageLoad = function (t) {
          return e.defer(function (t) {
            return function () {
              return t.pageLoaded = !0;
            };
          }(this));
        }, r.prototype.shouldHandlePopState = function () {
          return this.pageIsLoaded();
        }, r.prototype.pageIsLoaded = function () {
          return this.pageLoaded || "complete" === document.readyState;
        }, r.prototype.update = function (t, e, r) {
          var n;
          return n = {
            turbolinks: {
              restorationIdentifier: r
            }
          }, history[t + "State"](n, null, e);
        }, r;
      }();
    }.call(this), function () {
      e.HeadDetails = function () {
        function t(t) {
          var e, r, n, s, a, u;

          for (this.elements = {}, n = 0, a = t.length; a > n; n++) {
            u = t[n], u.nodeType === Node.ELEMENT_NODE && (s = u.outerHTML, r = null != (e = this.elements)[s] ? e[s] : e[s] = {
              type: i(u),
              tracked: o(u),
              elements: []
            }, r.elements.push(u));
          }
        }

        var e, r, n, o, i;
        return t.fromHeadElement = function (t) {
          var e;
          return new this(null != (e = null != t ? t.childNodes : void 0) ? e : []);
        }, t.prototype.hasElementWithKey = function (t) {
          return t in this.elements;
        }, t.prototype.getTrackedElementSignature = function () {
          var t, e;
          return function () {
            var r, n;
            r = this.elements, n = [];

            for (t in r) {
              e = r[t].tracked, e && n.push(t);
            }

            return n;
          }.call(this).join("");
        }, t.prototype.getScriptElementsNotInDetails = function (t) {
          return this.getElementsMatchingTypeNotInDetails("script", t);
        }, t.prototype.getStylesheetElementsNotInDetails = function (t) {
          return this.getElementsMatchingTypeNotInDetails("stylesheet", t);
        }, t.prototype.getElementsMatchingTypeNotInDetails = function (t, e) {
          var r, n, o, i, s, a;
          o = this.elements, s = [];

          for (n in o) {
            i = o[n], a = i.type, r = i.elements, a !== t || e.hasElementWithKey(n) || s.push(r[0]);
          }

          return s;
        }, t.prototype.getProvisionalElements = function () {
          var t, e, r, n, o, i, s;
          r = [], n = this.elements;

          for (e in n) {
            o = n[e], s = o.type, i = o.tracked, t = o.elements, null != s || i ? t.length > 1 && r.push.apply(r, t.slice(1)) : r.push.apply(r, t);
          }

          return r;
        }, t.prototype.getMetaValue = function (t) {
          var e;
          return null != (e = this.findMetaElementByName(t)) ? e.getAttribute("content") : void 0;
        }, t.prototype.findMetaElementByName = function (t) {
          var r, n, o, i;
          r = void 0, i = this.elements;

          for (o in i) {
            n = i[o].elements, e(n[0], t) && (r = n[0]);
          }

          return r;
        }, i = function i(t) {
          return r(t) ? "script" : n(t) ? "stylesheet" : void 0;
        }, o = function o(t) {
          return "reload" === t.getAttribute("data-turbolinks-track");
        }, r = function r(t) {
          var e;
          return e = t.tagName.toLowerCase(), "script" === e;
        }, n = function n(t) {
          var e;
          return e = t.tagName.toLowerCase(), "style" === e || "link" === e && "stylesheet" === t.getAttribute("rel");
        }, e = function e(t, _e) {
          var r;
          return r = t.tagName.toLowerCase(), "meta" === r && t.getAttribute("name") === _e;
        }, t;
      }();
    }.call(this), function () {
      e.Snapshot = function () {
        function t(t, e) {
          this.headDetails = t, this.bodyElement = e;
        }

        return t.wrap = function (t) {
          return t instanceof this ? t : "string" == typeof t ? this.fromHTMLString(t) : this.fromHTMLElement(t);
        }, t.fromHTMLString = function (t) {
          var e;
          return e = document.createElement("html"), e.innerHTML = t, this.fromHTMLElement(e);
        }, t.fromHTMLElement = function (t) {
          var r, n, o, i;
          return o = t.querySelector("head"), r = null != (i = t.querySelector("body")) ? i : document.createElement("body"), n = e.HeadDetails.fromHeadElement(o), new this(n, r);
        }, t.prototype.clone = function () {
          return new this.constructor(this.headDetails, this.bodyElement.cloneNode(!0));
        }, t.prototype.getRootLocation = function () {
          var t, r;
          return r = null != (t = this.getSetting("root")) ? t : "/", new e.Location(r);
        }, t.prototype.getCacheControlValue = function () {
          return this.getSetting("cache-control");
        }, t.prototype.getElementForAnchor = function (t) {
          try {
            return this.bodyElement.querySelector("[id='" + t + "'], a[name='" + t + "']");
          } catch (e) {}
        }, t.prototype.getPermanentElements = function () {
          return this.bodyElement.querySelectorAll("[id][data-turbolinks-permanent]");
        }, t.prototype.getPermanentElementById = function (t) {
          return this.bodyElement.querySelector("#" + t + "[data-turbolinks-permanent]");
        }, t.prototype.getPermanentElementsPresentInSnapshot = function (t) {
          var e, r, n, o, i;

          for (o = this.getPermanentElements(), i = [], r = 0, n = o.length; n > r; r++) {
            e = o[r], t.getPermanentElementById(e.id) && i.push(e);
          }

          return i;
        }, t.prototype.findFirstAutofocusableElement = function () {
          return this.bodyElement.querySelector("[autofocus]");
        }, t.prototype.hasAnchor = function (t) {
          return null != this.getElementForAnchor(t);
        }, t.prototype.isPreviewable = function () {
          return "no-preview" !== this.getCacheControlValue();
        }, t.prototype.isCacheable = function () {
          return "no-cache" !== this.getCacheControlValue();
        }, t.prototype.isVisitable = function () {
          return "reload" !== this.getSetting("visit-control");
        }, t.prototype.getSetting = function (t) {
          return this.headDetails.getMetaValue("turbolinks-" + t);
        }, t;
      }();
    }.call(this), function () {
      var t = [].slice;

      e.Renderer = function () {
        function e() {}

        var r;
        return e.render = function () {
          var e, r, n, o;
          return n = arguments[0], r = arguments[1], e = 3 <= arguments.length ? t.call(arguments, 2) : [], o = function (t, e, r) {
            r.prototype = t.prototype;
            var n = new r(),
                o = t.apply(n, e);
            return Object(o) === o ? o : n;
          }(this, e, function () {}), o.delegate = n, o.render(r), o;
        }, e.prototype.renderView = function (t) {
          return this.delegate.viewWillRender(this.newBody), t(), this.delegate.viewRendered(this.newBody);
        }, e.prototype.invalidateView = function () {
          return this.delegate.viewInvalidated();
        }, e.prototype.createScriptElement = function (t) {
          var e;
          return "false" === t.getAttribute("data-turbolinks-eval") ? t : (e = document.createElement("script"), e.textContent = t.textContent, e.async = !1, r(e, t), e);
        }, r = function r(t, e) {
          var r, n, o, i, s, a, u;

          for (i = e.attributes, a = [], r = 0, n = i.length; n > r; r++) {
            s = i[r], o = s.name, u = s.value, a.push(t.setAttribute(o, u));
          }

          return a;
        }, e;
      }();
    }.call(this), function () {
      var t,
          r,
          n = function n(t, e) {
        function r() {
          this.constructor = t;
        }

        for (var n in e) {
          o.call(e, n) && (t[n] = e[n]);
        }

        return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, t;
      },
          o = {}.hasOwnProperty;

      e.SnapshotRenderer = function (e) {
        function o(t, e, r) {
          this.currentSnapshot = t, this.newSnapshot = e, this.isPreview = r, this.currentHeadDetails = this.currentSnapshot.headDetails, this.newHeadDetails = this.newSnapshot.headDetails, this.currentBody = this.currentSnapshot.bodyElement, this.newBody = this.newSnapshot.bodyElement;
        }

        return n(o, e), o.prototype.render = function (t) {
          return this.shouldRender() ? (this.mergeHead(), this.renderView(function (e) {
            return function () {
              return e.replaceBody(), e.isPreview || e.focusFirstAutofocusableElement(), t();
            };
          }(this))) : this.invalidateView();
        }, o.prototype.mergeHead = function () {
          return this.copyNewHeadStylesheetElements(), this.copyNewHeadScriptElements(), this.removeCurrentHeadProvisionalElements(), this.copyNewHeadProvisionalElements();
        }, o.prototype.replaceBody = function () {
          var t;
          return t = this.relocateCurrentBodyPermanentElements(), this.activateNewBodyScriptElements(), this.assignNewBody(), this.replacePlaceholderElementsWithClonedPermanentElements(t);
        }, o.prototype.shouldRender = function () {
          return this.newSnapshot.isVisitable() && this.trackedElementsAreIdentical();
        }, o.prototype.trackedElementsAreIdentical = function () {
          return this.currentHeadDetails.getTrackedElementSignature() === this.newHeadDetails.getTrackedElementSignature();
        }, o.prototype.copyNewHeadStylesheetElements = function () {
          var t, e, r, n, o;

          for (n = this.getNewHeadStylesheetElements(), o = [], e = 0, r = n.length; r > e; e++) {
            t = n[e], o.push(document.head.appendChild(t));
          }

          return o;
        }, o.prototype.copyNewHeadScriptElements = function () {
          var t, e, r, n, o;

          for (n = this.getNewHeadScriptElements(), o = [], e = 0, r = n.length; r > e; e++) {
            t = n[e], o.push(document.head.appendChild(this.createScriptElement(t)));
          }

          return o;
        }, o.prototype.removeCurrentHeadProvisionalElements = function () {
          var t, e, r, n, o;

          for (n = this.getCurrentHeadProvisionalElements(), o = [], e = 0, r = n.length; r > e; e++) {
            t = n[e], o.push(document.head.removeChild(t));
          }

          return o;
        }, o.prototype.copyNewHeadProvisionalElements = function () {
          var t, e, r, n, o;

          for (n = this.getNewHeadProvisionalElements(), o = [], e = 0, r = n.length; r > e; e++) {
            t = n[e], o.push(document.head.appendChild(t));
          }

          return o;
        }, o.prototype.relocateCurrentBodyPermanentElements = function () {
          var e, n, o, i, s, a, u;

          for (a = this.getCurrentBodyPermanentElements(), u = [], e = 0, n = a.length; n > e; e++) {
            i = a[e], s = t(i), o = this.newSnapshot.getPermanentElementById(i.id), r(i, s.element), r(o, i), u.push(s);
          }

          return u;
        }, o.prototype.replacePlaceholderElementsWithClonedPermanentElements = function (t) {
          var e, n, o, i, s, a, u;

          for (u = [], o = 0, i = t.length; i > o; o++) {
            a = t[o], n = a.element, s = a.permanentElement, e = s.cloneNode(!0), u.push(r(n, e));
          }

          return u;
        }, o.prototype.activateNewBodyScriptElements = function () {
          var t, e, n, o, i, s;

          for (i = this.getNewBodyScriptElements(), s = [], e = 0, o = i.length; o > e; e++) {
            n = i[e], t = this.createScriptElement(n), s.push(r(n, t));
          }

          return s;
        }, o.prototype.assignNewBody = function () {
          return document.body = this.newBody;
        }, o.prototype.focusFirstAutofocusableElement = function () {
          var t;
          return null != (t = this.newSnapshot.findFirstAutofocusableElement()) ? t.focus() : void 0;
        }, o.prototype.getNewHeadStylesheetElements = function () {
          return this.newHeadDetails.getStylesheetElementsNotInDetails(this.currentHeadDetails);
        }, o.prototype.getNewHeadScriptElements = function () {
          return this.newHeadDetails.getScriptElementsNotInDetails(this.currentHeadDetails);
        }, o.prototype.getCurrentHeadProvisionalElements = function () {
          return this.currentHeadDetails.getProvisionalElements();
        }, o.prototype.getNewHeadProvisionalElements = function () {
          return this.newHeadDetails.getProvisionalElements();
        }, o.prototype.getCurrentBodyPermanentElements = function () {
          return this.currentSnapshot.getPermanentElementsPresentInSnapshot(this.newSnapshot);
        }, o.prototype.getNewBodyScriptElements = function () {
          return this.newBody.querySelectorAll("script");
        }, o;
      }(e.Renderer), t = function t(_t5) {
        var e;
        return e = document.createElement("meta"), e.setAttribute("name", "turbolinks-permanent-placeholder"), e.setAttribute("content", _t5.id), {
          element: e,
          permanentElement: _t5
        };
      }, r = function r(t, e) {
        var r;
        return (r = t.parentNode) ? r.replaceChild(e, t) : void 0;
      };
    }.call(this), function () {
      var t = function t(_t6, e) {
        function n() {
          this.constructor = _t6;
        }

        for (var o in e) {
          r.call(e, o) && (_t6[o] = e[o]);
        }

        return n.prototype = e.prototype, _t6.prototype = new n(), _t6.__super__ = e.prototype, _t6;
      },
          r = {}.hasOwnProperty;

      e.ErrorRenderer = function (e) {
        function r(t) {
          var e;
          e = document.createElement("html"), e.innerHTML = t, this.newHead = e.querySelector("head"), this.newBody = e.querySelector("body");
        }

        return t(r, e), r.prototype.render = function (t) {
          return this.renderView(function (e) {
            return function () {
              return e.replaceHeadAndBody(), e.activateBodyScriptElements(), t();
            };
          }(this));
        }, r.prototype.replaceHeadAndBody = function () {
          var t, e;
          return e = document.head, t = document.body, e.parentNode.replaceChild(this.newHead, e), t.parentNode.replaceChild(this.newBody, t);
        }, r.prototype.activateBodyScriptElements = function () {
          var t, e, r, n, o, i;

          for (n = this.getScriptElements(), i = [], e = 0, r = n.length; r > e; e++) {
            o = n[e], t = this.createScriptElement(o), i.push(o.parentNode.replaceChild(t, o));
          }

          return i;
        }, r.prototype.getScriptElements = function () {
          return document.documentElement.querySelectorAll("script");
        }, r;
      }(e.Renderer);
    }.call(this), function () {
      e.View = function () {
        function t(t) {
          this.delegate = t, this.htmlElement = document.documentElement;
        }

        return t.prototype.getRootLocation = function () {
          return this.getSnapshot().getRootLocation();
        }, t.prototype.getElementForAnchor = function (t) {
          return this.getSnapshot().getElementForAnchor(t);
        }, t.prototype.getSnapshot = function () {
          return e.Snapshot.fromHTMLElement(this.htmlElement);
        }, t.prototype.render = function (t, e) {
          var r, n, o;
          return o = t.snapshot, r = t.error, n = t.isPreview, this.markAsPreview(n), null != o ? this.renderSnapshot(o, n, e) : this.renderError(r, e);
        }, t.prototype.markAsPreview = function (t) {
          return t ? this.htmlElement.setAttribute("data-turbolinks-preview", "") : this.htmlElement.removeAttribute("data-turbolinks-preview");
        }, t.prototype.renderSnapshot = function (t, r, n) {
          return e.SnapshotRenderer.render(this.delegate, n, this.getSnapshot(), e.Snapshot.wrap(t), r);
        }, t.prototype.renderError = function (t, r) {
          return e.ErrorRenderer.render(this.delegate, r, t);
        }, t;
      }();
    }.call(this), function () {
      var t = function t(_t7, e) {
        return function () {
          return _t7.apply(e, arguments);
        };
      };

      e.ScrollManager = function () {
        function r(r) {
          this.delegate = r, this.onScroll = t(this.onScroll, this), this.onScroll = e.throttle(this.onScroll);
        }

        return r.prototype.start = function () {
          return this.started ? void 0 : (addEventListener("scroll", this.onScroll, !1), this.onScroll(), this.started = !0);
        }, r.prototype.stop = function () {
          return this.started ? (removeEventListener("scroll", this.onScroll, !1), this.started = !1) : void 0;
        }, r.prototype.scrollToElement = function (t) {
          return t.scrollIntoView();
        }, r.prototype.scrollToPosition = function (t) {
          var e, r;
          return e = t.x, r = t.y, window.scrollTo(e, r);
        }, r.prototype.onScroll = function (t) {
          return this.updatePosition({
            x: window.pageXOffset,
            y: window.pageYOffset
          });
        }, r.prototype.updatePosition = function (t) {
          var e;
          return this.position = t, null != (e = this.delegate) ? e.scrollPositionChanged(this.position) : void 0;
        }, r;
      }();
    }.call(this), function () {
      e.SnapshotCache = function () {
        function t(t) {
          this.size = t, this.keys = [], this.snapshots = {};
        }

        var r;
        return t.prototype.has = function (t) {
          var e;
          return e = r(t), e in this.snapshots;
        }, t.prototype.get = function (t) {
          var e;
          if (this.has(t)) return e = this.read(t), this.touch(t), e;
        }, t.prototype.put = function (t, e) {
          return this.write(t, e), this.touch(t), e;
        }, t.prototype.read = function (t) {
          var e;
          return e = r(t), this.snapshots[e];
        }, t.prototype.write = function (t, e) {
          var n;
          return n = r(t), this.snapshots[n] = e;
        }, t.prototype.touch = function (t) {
          var e, n;
          return n = r(t), e = this.keys.indexOf(n), e > -1 && this.keys.splice(e, 1), this.keys.unshift(n), this.trim();
        }, t.prototype.trim = function () {
          var t, e, r, n, o;

          for (n = this.keys.splice(this.size), o = [], t = 0, r = n.length; r > t; t++) {
            e = n[t], o.push(delete this.snapshots[e]);
          }

          return o;
        }, r = function r(t) {
          return e.Location.wrap(t).toCacheKey();
        }, t;
      }();
    }.call(this), function () {
      var t = function t(_t8, e) {
        return function () {
          return _t8.apply(e, arguments);
        };
      };

      e.Visit = function () {
        function r(r, n, o) {
          this.controller = r, this.action = o, this.performScroll = t(this.performScroll, this), this.identifier = e.uuid(), this.location = e.Location.wrap(n), this.adapter = this.controller.adapter, this.state = "initialized", this.timingMetrics = {};
        }

        var n;
        return r.prototype.start = function () {
          return "initialized" === this.state ? (this.recordTimingMetric("visitStart"), this.state = "started", this.adapter.visitStarted(this)) : void 0;
        }, r.prototype.cancel = function () {
          var t;
          return "started" === this.state ? (null != (t = this.request) && t.cancel(), this.cancelRender(), this.state = "canceled") : void 0;
        }, r.prototype.complete = function () {
          var t;
          return "started" === this.state ? (this.recordTimingMetric("visitEnd"), this.state = "completed", "function" == typeof (t = this.adapter).visitCompleted && t.visitCompleted(this), this.controller.visitCompleted(this)) : void 0;
        }, r.prototype.fail = function () {
          var t;
          return "started" === this.state ? (this.state = "failed", "function" == typeof (t = this.adapter).visitFailed ? t.visitFailed(this) : void 0) : void 0;
        }, r.prototype.changeHistory = function () {
          var t, e;
          return this.historyChanged ? void 0 : (t = this.location.isEqualTo(this.referrer) ? "replace" : this.action, e = n(t), this.controller[e](this.location, this.restorationIdentifier), this.historyChanged = !0);
        }, r.prototype.issueRequest = function () {
          return this.shouldIssueRequest() && null == this.request ? (this.progress = 0, this.request = new e.HttpRequest(this, this.location, this.referrer), this.request.send()) : void 0;
        }, r.prototype.getCachedSnapshot = function () {
          var t;
          return !(t = this.controller.getCachedSnapshotForLocation(this.location)) || null != this.location.anchor && !t.hasAnchor(this.location.anchor) || "restore" !== this.action && !t.isPreviewable() ? void 0 : t;
        }, r.prototype.hasCachedSnapshot = function () {
          return null != this.getCachedSnapshot();
        }, r.prototype.loadCachedSnapshot = function () {
          var t, e;
          return (e = this.getCachedSnapshot()) ? (t = this.shouldIssueRequest(), this.render(function () {
            var r;
            return this.cacheSnapshot(), this.controller.render({
              snapshot: e,
              isPreview: t
            }, this.performScroll), "function" == typeof (r = this.adapter).visitRendered && r.visitRendered(this), t ? void 0 : this.complete();
          })) : void 0;
        }, r.prototype.loadResponse = function () {
          return null != this.response ? this.render(function () {
            var t, e;
            return this.cacheSnapshot(), this.request.failed ? (this.controller.render({
              error: this.response
            }, this.performScroll), "function" == typeof (t = this.adapter).visitRendered && t.visitRendered(this), this.fail()) : (this.controller.render({
              snapshot: this.response
            }, this.performScroll), "function" == typeof (e = this.adapter).visitRendered && e.visitRendered(this), this.complete());
          }) : void 0;
        }, r.prototype.followRedirect = function () {
          return this.redirectedToLocation && !this.followedRedirect ? (this.location = this.redirectedToLocation, this.controller.replaceHistoryWithLocationAndRestorationIdentifier(this.redirectedToLocation, this.restorationIdentifier), this.followedRedirect = !0) : void 0;
        }, r.prototype.requestStarted = function () {
          var t;
          return this.recordTimingMetric("requestStart"), "function" == typeof (t = this.adapter).visitRequestStarted ? t.visitRequestStarted(this) : void 0;
        }, r.prototype.requestProgressed = function (t) {
          var e;
          return this.progress = t, "function" == typeof (e = this.adapter).visitRequestProgressed ? e.visitRequestProgressed(this) : void 0;
        }, r.prototype.requestCompletedWithResponse = function (t, r) {
          return this.response = t, null != r && (this.redirectedToLocation = e.Location.wrap(r)), this.adapter.visitRequestCompleted(this);
        }, r.prototype.requestFailedWithStatusCode = function (t, e) {
          return this.response = e, this.adapter.visitRequestFailedWithStatusCode(this, t);
        }, r.prototype.requestFinished = function () {
          var t;
          return this.recordTimingMetric("requestEnd"), "function" == typeof (t = this.adapter).visitRequestFinished ? t.visitRequestFinished(this) : void 0;
        }, r.prototype.performScroll = function () {
          return this.scrolled ? void 0 : ("restore" === this.action ? this.scrollToRestoredPosition() || this.scrollToTop() : this.scrollToAnchor() || this.scrollToTop(), this.scrolled = !0);
        }, r.prototype.scrollToRestoredPosition = function () {
          var t, e;
          return t = null != (e = this.restorationData) ? e.scrollPosition : void 0, null != t ? (this.controller.scrollToPosition(t), !0) : void 0;
        }, r.prototype.scrollToAnchor = function () {
          return null != this.location.anchor ? (this.controller.scrollToAnchor(this.location.anchor), !0) : void 0;
        }, r.prototype.scrollToTop = function () {
          return this.controller.scrollToPosition({
            x: 0,
            y: 0
          });
        }, r.prototype.recordTimingMetric = function (t) {
          var e;
          return null != (e = this.timingMetrics)[t] ? e[t] : e[t] = new Date().getTime();
        }, r.prototype.getTimingMetrics = function () {
          return e.copyObject(this.timingMetrics);
        }, n = function n(t) {
          switch (t) {
            case "replace":
              return "replaceHistoryWithLocationAndRestorationIdentifier";

            case "advance":
            case "restore":
              return "pushHistoryWithLocationAndRestorationIdentifier";
          }
        }, r.prototype.shouldIssueRequest = function () {
          return "restore" === this.action ? !this.hasCachedSnapshot() : !0;
        }, r.prototype.cacheSnapshot = function () {
          return this.snapshotCached ? void 0 : (this.controller.cacheSnapshot(), this.snapshotCached = !0);
        }, r.prototype.render = function (t) {
          return this.cancelRender(), this.frame = requestAnimationFrame(function (e) {
            return function () {
              return e.frame = null, t.call(e);
            };
          }(this));
        }, r.prototype.cancelRender = function () {
          return this.frame ? cancelAnimationFrame(this.frame) : void 0;
        }, r;
      }();
    }.call(this), function () {
      var t = function t(_t9, e) {
        return function () {
          return _t9.apply(e, arguments);
        };
      };

      e.Controller = function () {
        function r() {
          this.clickBubbled = t(this.clickBubbled, this), this.clickCaptured = t(this.clickCaptured, this), this.pageLoaded = t(this.pageLoaded, this), this.history = new e.History(this), this.view = new e.View(this), this.scrollManager = new e.ScrollManager(this), this.restorationData = {}, this.clearCache(), this.setProgressBarDelay(500);
        }

        return r.prototype.start = function () {
          return e.supported && !this.started ? (addEventListener("click", this.clickCaptured, !0), addEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.start(), this.startHistory(), this.started = !0, this.enabled = !0) : void 0;
        }, r.prototype.disable = function () {
          return this.enabled = !1;
        }, r.prototype.stop = function () {
          return this.started ? (removeEventListener("click", this.clickCaptured, !0), removeEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.stop(), this.stopHistory(), this.started = !1) : void 0;
        }, r.prototype.clearCache = function () {
          return this.cache = new e.SnapshotCache(10);
        }, r.prototype.visit = function (t, r) {
          var n, o;
          return null == r && (r = {}), t = e.Location.wrap(t), this.applicationAllowsVisitingLocation(t) ? this.locationIsVisitable(t) ? (n = null != (o = r.action) ? o : "advance", this.adapter.visitProposedToLocationWithAction(t, n)) : window.location = t : void 0;
        }, r.prototype.startVisitToLocationWithAction = function (t, r, n) {
          var o;
          return e.supported ? (o = this.getRestorationDataForIdentifier(n), this.startVisit(t, r, {
            restorationData: o
          })) : window.location = t;
        }, r.prototype.setProgressBarDelay = function (t) {
          return this.progressBarDelay = t;
        }, r.prototype.startHistory = function () {
          return this.location = e.Location.wrap(window.location), this.restorationIdentifier = e.uuid(), this.history.start(), this.history.replace(this.location, this.restorationIdentifier);
        }, r.prototype.stopHistory = function () {
          return this.history.stop();
        }, r.prototype.pushHistoryWithLocationAndRestorationIdentifier = function (t, r) {
          return this.restorationIdentifier = r, this.location = e.Location.wrap(t), this.history.push(this.location, this.restorationIdentifier);
        }, r.prototype.replaceHistoryWithLocationAndRestorationIdentifier = function (t, r) {
          return this.restorationIdentifier = r, this.location = e.Location.wrap(t), this.history.replace(this.location, this.restorationIdentifier);
        }, r.prototype.historyPoppedToLocationWithRestorationIdentifier = function (t, r) {
          var n;
          return this.restorationIdentifier = r, this.enabled ? (n = this.getRestorationDataForIdentifier(this.restorationIdentifier), this.startVisit(t, "restore", {
            restorationIdentifier: this.restorationIdentifier,
            restorationData: n,
            historyChanged: !0
          }), this.location = e.Location.wrap(t)) : this.adapter.pageInvalidated();
        }, r.prototype.getCachedSnapshotForLocation = function (t) {
          var e;
          return null != (e = this.cache.get(t)) ? e.clone() : void 0;
        }, r.prototype.shouldCacheSnapshot = function () {
          return this.view.getSnapshot().isCacheable();
        }, r.prototype.cacheSnapshot = function () {
          var t, r;
          return this.shouldCacheSnapshot() ? (this.notifyApplicationBeforeCachingSnapshot(), r = this.view.getSnapshot(), t = this.lastRenderedLocation, e.defer(function (e) {
            return function () {
              return e.cache.put(t, r.clone());
            };
          }(this))) : void 0;
        }, r.prototype.scrollToAnchor = function (t) {
          var e;
          return (e = this.view.getElementForAnchor(t)) ? this.scrollToElement(e) : this.scrollToPosition({
            x: 0,
            y: 0
          });
        }, r.prototype.scrollToElement = function (t) {
          return this.scrollManager.scrollToElement(t);
        }, r.prototype.scrollToPosition = function (t) {
          return this.scrollManager.scrollToPosition(t);
        }, r.prototype.scrollPositionChanged = function (t) {
          var e;
          return e = this.getCurrentRestorationData(), e.scrollPosition = t;
        }, r.prototype.render = function (t, e) {
          return this.view.render(t, e);
        }, r.prototype.viewInvalidated = function () {
          return this.adapter.pageInvalidated();
        }, r.prototype.viewWillRender = function (t) {
          return this.notifyApplicationBeforeRender(t);
        }, r.prototype.viewRendered = function () {
          return this.lastRenderedLocation = this.currentVisit.location, this.notifyApplicationAfterRender();
        }, r.prototype.pageLoaded = function () {
          return this.lastRenderedLocation = this.location, this.notifyApplicationAfterPageLoad();
        }, r.prototype.clickCaptured = function () {
          return removeEventListener("click", this.clickBubbled, !1), addEventListener("click", this.clickBubbled, !1);
        }, r.prototype.clickBubbled = function (t) {
          var e, r, n;
          return this.enabled && this.clickEventIsSignificant(t) && (r = this.getVisitableLinkForNode(t.target)) && (n = this.getVisitableLocationForLink(r)) && this.applicationAllowsFollowingLinkToLocation(r, n) ? (t.preventDefault(), e = this.getActionForLink(r), this.visit(n, {
            action: e
          })) : void 0;
        }, r.prototype.applicationAllowsFollowingLinkToLocation = function (t, e) {
          var r;
          return r = this.notifyApplicationAfterClickingLinkToLocation(t, e), !r.defaultPrevented;
        }, r.prototype.applicationAllowsVisitingLocation = function (t) {
          var e;
          return e = this.notifyApplicationBeforeVisitingLocation(t), !e.defaultPrevented;
        }, r.prototype.notifyApplicationAfterClickingLinkToLocation = function (t, r) {
          return e.dispatch("turbolinks:click", {
            target: t,
            data: {
              url: r.absoluteURL
            },
            cancelable: !0
          });
        }, r.prototype.notifyApplicationBeforeVisitingLocation = function (t) {
          return e.dispatch("turbolinks:before-visit", {
            data: {
              url: t.absoluteURL
            },
            cancelable: !0
          });
        }, r.prototype.notifyApplicationAfterVisitingLocation = function (t) {
          return e.dispatch("turbolinks:visit", {
            data: {
              url: t.absoluteURL
            }
          });
        }, r.prototype.notifyApplicationBeforeCachingSnapshot = function () {
          return e.dispatch("turbolinks:before-cache");
        }, r.prototype.notifyApplicationBeforeRender = function (t) {
          return e.dispatch("turbolinks:before-render", {
            data: {
              newBody: t
            }
          });
        }, r.prototype.notifyApplicationAfterRender = function () {
          return e.dispatch("turbolinks:render");
        }, r.prototype.notifyApplicationAfterPageLoad = function (t) {
          return null == t && (t = {}), e.dispatch("turbolinks:load", {
            data: {
              url: this.location.absoluteURL,
              timing: t
            }
          });
        }, r.prototype.startVisit = function (t, e, r) {
          var n;
          return null != (n = this.currentVisit) && n.cancel(), this.currentVisit = this.createVisit(t, e, r), this.currentVisit.start(), this.notifyApplicationAfterVisitingLocation(t);
        }, r.prototype.createVisit = function (t, r, n) {
          var o, i, s, a, u;
          return i = null != n ? n : {}, a = i.restorationIdentifier, s = i.restorationData, o = i.historyChanged, u = new e.Visit(this, t, r), u.restorationIdentifier = null != a ? a : e.uuid(), u.restorationData = e.copyObject(s), u.historyChanged = o, u.referrer = this.location, u;
        }, r.prototype.visitCompleted = function (t) {
          return this.notifyApplicationAfterPageLoad(t.getTimingMetrics());
        }, r.prototype.clickEventIsSignificant = function (t) {
          return !(t.defaultPrevented || t.target.isContentEditable || t.which > 1 || t.altKey || t.ctrlKey || t.metaKey || t.shiftKey);
        }, r.prototype.getVisitableLinkForNode = function (t) {
          return this.nodeIsVisitable(t) ? e.closest(t, "a[href]:not([target]):not([download])") : void 0;
        }, r.prototype.getVisitableLocationForLink = function (t) {
          var r;
          return r = new e.Location(t.getAttribute("href")), this.locationIsVisitable(r) ? r : void 0;
        }, r.prototype.getActionForLink = function (t) {
          var e;
          return null != (e = t.getAttribute("data-turbolinks-action")) ? e : "advance";
        }, r.prototype.nodeIsVisitable = function (t) {
          var r;
          return (r = e.closest(t, "[data-turbolinks]")) ? "false" !== r.getAttribute("data-turbolinks") : !0;
        }, r.prototype.locationIsVisitable = function (t) {
          return t.isPrefixedBy(this.view.getRootLocation()) && t.isHTML();
        }, r.prototype.getCurrentRestorationData = function () {
          return this.getRestorationDataForIdentifier(this.restorationIdentifier);
        }, r.prototype.getRestorationDataForIdentifier = function (t) {
          var e;
          return null != (e = this.restorationData)[t] ? e[t] : e[t] = {};
        }, r;
      }();
    }.call(this), function () {
      !function () {
        var t, e;
        if ((t = e = document.currentScript) && !e.hasAttribute("data-turbolinks-suppress-warning")) for (; t = t.parentNode;) {
          if (t === document.body) return console.warn("You are loading Turbolinks from a <script> element inside the <body> element. This is probably not what you meant to do!\n\nLoad your application\u2019s JavaScript bundle inside the <head> element instead. <script> elements in <body> are evaluated with each page change.\n\nFor more information, see: https://github.com/turbolinks/turbolinks#working-with-script-elements\n\n\u2014\u2014\nSuppress this warning by adding a `data-turbolinks-suppress-warning` attribute to: %s", e.outerHTML);
        }
      }();
    }.call(this), function () {
      var t, r, n;
      e.start = function () {
        return r() ? (null == e.controller && (e.controller = t()), e.controller.start()) : void 0;
      }, r = function r() {
        return null == window.Turbolinks && (window.Turbolinks = e), n();
      }, t = function t() {
        var t;
        return t = new e.Controller(), t.adapter = new e.BrowserAdapter(t), t;
      }, n = function n() {
        return window.Turbolinks === e;
      }, n() && e.start();
    }.call(this);
  }).call(this), "object" == ( false ? undefined : _typeof(module)) && module.exports ? module.exports = e :  true && !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}).call(this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ })

/******/ });
//# sourceMappingURL=application-2421dc2f2048257f9c68.js.map