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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/pimcore/systemBanner.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/pimcore/systemBanner.js":
/*!****************************************!*\
  !*** ./assets/pimcore/systemBanner.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _systemBanner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../systemBanner */ "./assets/systemBanner.js");

pimcore.registerNS('pimcore.plugin.SystemBannerBundle');
pimcore.plugin.SystemBannerBundle = Class.create(pimcore.plugin.admin, {
  getClassName: function getClassName() {
    return 'pimcore.plugin.SystemBannerBundle';
  },
  initialize: function initialize() {
    pimcore.plugin.broker.registerPlugin(this);
  },
  pimcoreReady: function pimcoreReady() {
    var systemBanner = new _systemBanner__WEBPACK_IMPORTED_MODULE_0__["SystemBanner"]();
    systemBanner.show();
  }
});
var SystemBannerBundlePlugin = new pimcore.plugin.SystemBannerBundle();

/***/ }),

/***/ "./assets/systemBanner.js":
/*!********************************!*\
  !*** ./assets/systemBanner.js ***!
  \********************************/
/*! exports provided: SystemBanner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemBanner", function() { return SystemBanner; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var environmentAliases = {
  dev: ['dev', 'development'],
  test: ['qa', 'qs', 'test', 'testing'],
  stage: ['stage', 'staging'],
  prod: ['live', 'prod', 'production']
};
var SystemBanner = /*#__PURE__*/function () {
  function SystemBanner() {
    _classCallCheck(this, SystemBanner);
  }

  _createClass(SystemBanner, [{
    key: "show",
    value: function show() {
      var _this = this;

      fetch('/pimcore-system-banner').then(function (response) {
        return response.json();
      }).then(function (responseData) {
        if (responseData.isAdmin) {
          _this.addCss();

          _this.addBanner(responseData.environment);
        }
      });
    }
  }, {
    key: "getSystemType",
    value: function getSystemType(environment) {
      var systemType = 'prod';
      Object.keys(environmentAliases).forEach(function (environmentAlias) {
        if (environmentAliases[environmentAlias].includes(environment)) {
          systemType = environmentAlias;
        }
      });
      return systemType;
    }
  }, {
    key: "addBanner",
    value: function addBanner(environment) {
      var banner = document.createElement('div');
      banner.classList.add('system-banner__banner');
      banner.innerText = environment;
      var bannerContainer = document.createElement('div');
      bannerContainer.classList.add('system-banner', 'system-banner--' + this.getSystemType(environment));
      bannerContainer.append(banner);
      document.body.append(bannerContainer);
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

/***/ })

/******/ });