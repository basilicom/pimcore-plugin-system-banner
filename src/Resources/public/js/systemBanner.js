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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/systemBanner.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/systemBanner.js":
/*!********************************!*\
  !*** ./assets/systemBanner.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SystemBanner = /*#__PURE__*/function () {
  "use strict";

  function SystemBanner() {
    _classCallCheck(this, SystemBanner);
  }

  _createClass(SystemBanner, [{
    key: "init",
    value: function init() {
      var environment = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this.setEnvironmentAliases();

      if (environment === null) {
        this.getData();
      } else {
        this.addCss();
        this.addBanner(environment);
      }
    }
  }, {
    key: "setEnvironmentAliases",
    value: function setEnvironmentAliases() {
      this.environmentAliases = {
        dev: ['dev', 'development'],
        test: ['qa', 'qs', 'test', 'testing'],
        stage: ['stage', 'staging'],
        prod: ['live', 'prod', 'production']
      };
    }
  }, {
    key: "getData",
    value: function getData() {
      var _this = this;

      var xhttp = new XMLHttpRequest();

      xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          var response = JSON.parse(this.responseText);

          _this.addCss();

          _this.addBanner(response.environment);
        }
      };

      xhttp.open("GET", "/pimcore-system-banner", true);
      xhttp.send();
    }
  }, {
    key: "getSystemType",
    value: function getSystemType(environment) {
      var _this = this;

      var systemType = 'prod';
      Object.keys(_this.environmentAliases).forEach(function (environmentAlias) {
        if (_this.environmentAliases[environmentAlias].includes(environment)) {
          systemType = environmentAlias;
        }
      });
      return systemType;
    }
  }, {
    key: "addBanner",
    value: function addBanner(environment) {
      var banner = document.createElement('div');
      banner.setAttribute('id', 'system-banner');
      banner.className = 'system-banner--' + this.getSystemType(environment);
      banner.innerText = environment;
      document.body.append(banner);
    }
  }, {
    key: "addCss",
    value: function addCss() {
      var cssId = 'system-banner-css';

      if (!document.getElementById(cssId)) {
        var head = document.getElementsByTagName('head')[0];
        var link = document.createElement('link');
        link.id = cssId;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = '/bundles/pimcorepluginsystembanner/css/pimcore/systemBanner.css';
        link.media = 'all';
        head.appendChild(link);
      }
    }
  }]);

  return SystemBanner;
}();

var banner = new SystemBanner();
banner.init();

/***/ })

/******/ });