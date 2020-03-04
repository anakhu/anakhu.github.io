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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/assets/styles/scss/styles.scss":
/*!*********************************************!*\
  !*** ./dist/assets/styles/scss/styles.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js??ref--5-2!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./dist/assets/styles/scss/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./dist/index.html":
/*!*************************!*\
  !*** ./dist/index.html ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>SPA project</title>\n</head>\n<body>\n  <header>\n    <nav class=\"main__nav\" id=\"js-main-nav\"></nav>\n  </header>\n\n  <div id=\"appContent-wrapper\" style=\"display: none;\">\n\n    <div class=\"homepage-wrapper\" id=\"js-homepage\"></div>\n  \n    <div class=\"productPage-wrapper\" id=\"js-catalogue-page\">\n      <div class=\"prodcutPage__content\">\n          <div class=\"productPage__filter\" id=\"js-catalogue-filter\"></div>\n          <div class=\"productPage__catalogue\" id=\"js-catalogue\"></div>\n      </div>\n    </div>\n  \n    <div class=\"aboutPage-wrapper\" id=\"js-about-page\"></div>\n  \n    <div class=\"cartPage-wrapper\" id=\"js-cart-page\">\n      <div class=\"cartPage__content\">\n        <div class=\"cartPage__cart_order\"></div>\n        <div class=\"cartPage__cart_wrapper\"></div>\n      </div>\n    </div>\n  \n    <div class=\"errorPage-wrapper\" id=\"js-error-page\"></div>\n  \n    <div class=\"singlePage-wrapper\" id=\"js-single-page\"></div>\n\n    <div class=\"authPage-wrapper\" id=\"js-auth-page\"></div>\n  \n  \n  </div>\n  <script src=\"/bundle.js\"></script>\n</body>\n</body>\n</html>\n";

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./dist/assets/styles/scss/styles.scss":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ref--5-2!./dist/assets/styles/scss/styles.scss ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\n    font-family: arial;\n    background: #f8f9fb; }\n\nhtml, body, ul, ol, li, form, fieldset, legend {\n    margin: 0;\n    padding: 0; }\n\nh1, h2, h3, h4, h5, h6, p {\n    margin-top: 0; }\n\nfieldset, img {\n    border: 0; }\n\nli {\n    list-style: none; }\n\n.lead__banner,\n.second__banner {\n    width: 100%;\n    position: relative;\n    font-weight: bold;\n    color: #232020; }\n    .lead__banner .banner__content,\n    .second__banner .banner__content {\n        position: absolute;\n        bottom: 50px;\n        width: 100%; }\n        @media screen and (max-width: 600px) {\n            .lead__banner .banner__content,\n            .second__banner .banner__content {\n                top: 50%; } }\n    .lead__banner li,\n    .second__banner li {\n        padding: 0px 10px;\n        font-size: 1rem; }\n        @media screen and (max-width: 600px) {\n            .lead__banner li,\n            .second__banner li {\n                display: none; } }\n    .lead__banner img,\n    .second__banner img {\n        width: 100%;\n        filter: contrast(90%); }\n    .lead__banner span,\n    .second__banner span {\n        font-size: 40px;\n        display: block;\n        text-transform: uppercase;\n        font-weight: bold;\n        padding: 10px; }\n    .lead__banner span.title,\n    .second__banner span.title {\n        font-weight: bold;\n        margin-bottom: 30px; }\n        @media screen and (max-width: 600px) {\n            .lead__banner span.title,\n            .second__banner span.title {\n                font-size: 16px; } }\n\n.second__banner {\n    text-align: right; }\n\nsection {\n    margin: 10px 0px; }\n\n.homePage__services ul {\n    display: flex;\n    justify-content: space-between; }\n    @media screen and (max-width: 600px) {\n        .homePage__services ul {\n            padding-left: 0px; } }\n\n.homePage__services li {\n    cursor: pointer;\n    flex: 0 0 33.33333%;\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: center;\n    box-sizing: border-box; }\n\n.homePage__services img {\n    width: 50%;\n    opacity: 0.4;\n    padding-bottom: 10px; }\n\n.homePage__services p {\n    margin-top: auto;\n    color: #3A4454;\n    font-weight: bold; }\n    .homePage__services p:hover {\n        color: #9A275A; }\n\n.homePage__products {\n    width: 100%;\n    text-align: center; }\n    .homePage__products ul {\n        padding: 0px;\n        display: flex;\n        flex-flow: row wrap;\n        justify-content: space-around; }\n        @media screen and (max-width: 600px) {\n            .homePage__products ul {\n                padding-left: 0px; } }\n    .homePage__products img {\n        cursor: pointer;\n        width: auto;\n        height: auto;\n        max-width: 200px;\n        max-height: 200px; }\n        @media screen and (max-width: 600px) {\n            .homePage__products img {\n                max-width: 100px;\n                max-height: 100px; } }\n    .homePage__products li {\n        flex: 0 0 30%;\n        padding: 10px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        margin: 2%; }\n\nsection h1 {\n    text-align: center;\n    font-size: 2rem;\n    color: #53687E; }\n\n.productPage-wrapper {\n    margin-top: 10px;\n    padding: 0px 10px; }\n\n.prodcutPage__content {\n    display: flex;\n    justify-content: space-around; }\n    @media screen and (max-width: 600px) {\n        .prodcutPage__content {\n            display: block;\n            justify-content: center; } }\n\n.productPage__catalogue {\n    flex: 1 0 68%;\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: center;\n    align-content: flex-start; }\n\n.productPage__filter {\n    flex: 0 0 20%;\n    display: flex;\n    flex-flow: column nowrap;\n    padding: 5px;\n    width: auto; }\n    @media screen and (max-width: 600px) {\n        .productPage__filter {\n            flex: 0 0 95%; } }\n\n.catalogue__item {\n    cursor: pointer;\n    margin: 10px;\n    display: flex;\n    flex-direction: column;\n    font-size: 0.8rem;\n    text-align: center;\n    font-weight: bold;\n    position: relative;\n    flex: 0 0 210px;\n    box-shadow: 9px 11px 20px -7px #C2B2B4; }\n    .catalogue__item img {\n        max-width: 100%;\n        margin: 10px auto;\n        height: 160px;\n        padding-top: 3%; }\n    .catalogue__item h5 {\n        color: #232020;\n        font-weight: bold;\n        font-size: 0.8rem; }\n    .catalogue__item p {\n        color: #9A275A;\n        font-size: 1.2rem;\n        margin: 0; }\n    @media screen and (max-width: 600px) {\n        .catalogue__item {\n            flex: 100 95%;\n            width: 100%; } }\n\n.catalogue__item_imgwrap {\n    text-align: center;\n    background-color: white; }\n\n.catalogue__item_info {\n    margin-top: auto; }\n\n.filter__group_label,\n.cart__details_label {\n    color: white;\n    background-color: #3A4454;\n    padding: 5px 15px;\n    font-weight: bold;\n    cursor: pointer;\n    margin: 5px 0px;\n    background-color: #F5DDDD;\n    color: #232020; }\n    .filter__group_label:hover,\n    .cart__details_label:hover {\n        background-color: #4f5c72; }\n\n.filter__group_content {\n    padding-left: 5px;\n    font-size: 0.8rem; }\n\n.filter__group_checkbox {\n    background-color: white; }\n\n.cartPage-wrapper {\n    margin-top: 5px;\n    padding: 0px 10px; }\n\n.cartPage__content {\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: space-between;\n    margin: 0px auto; }\n    @media screen and (max-width: 600px) {\n        .cartPage__content {\n            display: block;\n            position: relative;\n            width: 95%;\n            justify-content: center; } }\n\n.cartPage__cart_order {\n    flex: 0 0 30%;\n    align-self: flex-start;\n    height: auto;\n    border: 3px solid #F5DDDD;\n    padding: 5px; }\n    .cartPage__cart_order h3 {\n        padding: 5px 0px;\n        border-bottom: 1px solid #F5DDDD; }\n    .cartPage__cart_order div {\n        font-size: 1.1rem;\n        margin-bottom: 5px; }\n        .cartPage__cart_order div .cartPage__total {\n            font-size: 2rem;\n            color: #9A275A;\n            font-weight: bold; }\n    .cartPage__cart_order button {\n        display: block;\n        width: 32%;\n        margin: 20px auto; }\n\n.cartPage__cart_wrapper {\n    flex: 0 0 65%; }\n\n.cart__item_wrapper {\n    flex: 0 0 90%;\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: space-around;\n    align-items: center;\n    margin-bottom: 30px;\n    padding-top: 2%;\n    box-shadow: 9px 11px 20px -7px #C2B2B4; }\n    @media screen and (max-width: 600px) {\n        .cart__item_wrapper {\n            display: block;\n            text-align: center;\n            margin: 0px auto; } }\n    .cart__item_wrapper form {\n        flex: 0 0 300px;\n        display: flex;\n        justify-content: space-evenly;\n        align-items: center;\n        height: auto; }\n        .cart__item_wrapper form input {\n            font-size: 1.2rem;\n            text-align: center;\n            max-width: 30%; }\n        .cart__item_wrapper form input[type='checkbox'] {\n            transform: scale(2); }\n\n.cart__item_details {\n    flex: 0 0 300px;\n    cursor: pointer;\n    margin: 10px;\n    display: flex;\n    flex-direction: column;\n    font-size: 0.8rem;\n    text-align: center;\n    font-weight: bold; }\n    .cart__item_details img {\n        max-width: 100%;\n        margin: 10px auto;\n        height: 160px;\n        padding-top: 3%; }\n    .cart__item_details h5 {\n        color: #232020;\n        font-weight: bold;\n        font-size: 0.8rem; }\n    .cart__item_details p {\n        color: #9A275A;\n        font-size: 1.2rem;\n        margin: 0; }\n\n.singlePage-wrapper {\n    padding: 10px; }\n\n.singlePage__content {\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: space-around; }\n    @media screen and (max-width: 600px) {\n        .singlePage__content {\n            display: block; } }\n\n.singlePage__content_main {\n    cursor: pointer;\n    margin: 10px;\n    display: flex;\n    flex-direction: column;\n    font-size: 0.8rem;\n    text-align: center;\n    font-weight: bold;\n    flex: 0 0 40% x;\n    align-self: flex-start; }\n    .singlePage__content_main img {\n        max-width: 100%;\n        margin: 10px auto;\n        height: 160px;\n        padding-top: 3%; }\n    .singlePage__content_main h5 {\n        color: #232020;\n        font-weight: bold;\n        font-size: 0.8rem; }\n    .singlePage__content_main p {\n        color: #9A275A;\n        font-size: 1.2rem;\n        margin: 0; }\n\n.singlePage_content_info {\n    flex: 0 1 50%;\n    padding: 10px; }\n\n.authPage-wrapper {\n    padding-top: 50px; }\n\n.auth__form_wrapper {\n    width: 50%;\n    margin: 0px auto;\n    box-shadow: 9px 11px 20px -7px #C2B2B4; }\n    @media screen and (max-width: 600px) {\n        .auth__form_wrapper {\n            width: 85%; } }\n    .auth__form_wrapper p {\n        color: #9A275A;\n        margin-top: 5px;\n        font-weight: bold; }\n    .auth__form_wrapper ul {\n        display: flex;\n        text-align: center; }\n    .auth__form_wrapper li {\n        flex: 1 1 auto;\n        color: white;\n        background-color: #3A4454;\n        padding: 5px 15px;\n        font-weight: bold;\n        cursor: pointer;\n        margin: 5px 0px; }\n        .auth__form_wrapper li:hover {\n            background-color: #4f5c72; }\n    .auth__form_wrapper form {\n        padding: 20px 40px; }\n        .auth__form_wrapper form label, .auth__form_wrapper form input, .auth__form_wrapper form button {\n            display: block;\n            width: 100%;\n            padding: 7px 0px 7px 10px;\n            font-size: 1rem;\n            margin: 5px auto; }\n        .auth__form_wrapper form label {\n            font-weight: bold; }\n        .auth__form_wrapper form input:focus {\n            outline: none !important;\n            border: 2px solid #53687E; }\n        .auth__form_wrapper form button {\n            margin: 5px auto;\n            width: 40%; }\n\n.auth__form_error {\n    text-align: center; }\n\n.aboutPage__content {\n    text-align: justify; }\n    .aboutPage__content div {\n        padding: 10px; }\n\n.aboutPage__articles {\n    box-sizing: border-box;\n    padding: 10px; }\n    .aboutPage__articles ul {\n        display: flex;\n        justify-content: space-evenly;\n        align-items: center;\n        flex-flow: row wrap; }\n    .aboutPage__articles li {\n        margin: 5px;\n        flex: 0 0 30%;\n        text-align: center;\n        align-self: flex-start; }\n        @media screen and (max-width: 600px) {\n            .aboutPage__articles li {\n                flex: 1 0 100%; } }\n    .aboutPage__articles img {\n        width: 100%;\n        height: 100%;\n        max-width: 200px;\n        max-height: 200px; }\n    .aboutPage__articles div {\n        text-align: justify; }\n    .aboutPage__articles h5 {\n        color: #9A275A;\n        font-size: 1rem;\n        margin-top: 20px; }\n\nbutton {\n    cursor: pointer;\n    color: #3A4454;\n    background-color: #F5DDDD;\n    margin: 10px 0px;\n    font-size: 1rem;\n    padding: 5px 10px;\n    border: none;\n    font-weight: bold; }\n    button:hover {\n        border: none;\n        background-color: #C2B2B4; }\n\nbody {\n    max-width: 1320px;\n    position: relative;\n    margin: 0 auto; }\n\n.main__nav {\n    background-color: #3A4454; }\n    .main__nav div {\n        margin-top: 0px;\n        width: 100%;\n        display: flex;\n        justify-content: space-between;\n        color: white;\n        font-weight: bold; }\n        @media screen and (max-width: 600px) {\n            .main__nav div {\n                flex-flow: column wrap; } }\n    .main__nav ul {\n        display: flex;\n        margin: 5px;\n        padding: 0; }\n        @media screen and (max-width: 600px) {\n            .main__nav ul {\n                flex: 0 0 100%;\n                text-align: center; } }\n    .main__nav li {\n        flex: 1 1 0;\n        display: block;\n        padding: 0px 10px;\n        cursor: pointer; }\n        .main__nav li:hover {\n            background-color: #4f5c72; }\n        @media screen and (max-width: 600px) {\n            .main__nav li {\n                display: block;\n                padding: 10px; } }\n\n.nav__link_cart {\n    background-color: white;\n    border-radius: 20px;\n    margin-right: 20px;\n    width: 20px;\n    margin: 1px;\n    height: 20px;\n    padding: 5px 20px; }\n\n.errorPage-wrapper {\n    padding: 50px;\n    text-align: center; }\n    .errorPage-wrapper h1 {\n        color: #232020; }\n    .errorPage-wrapper h5 {\n        color: #9A275A; }\n    .errorPage-wrapper img {\n        width: 100%;\n        height: 100%;\n        max-width: 300px;\n        max-height: 300px; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/webpack/hot/dev-server.js":
/*!***********************************!*\
  !*** (webpack)/hot/dev-server.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
/*globals window __webpack_hash__ */
if (false) { var hotEmitter, check, log, upToDate, lastHash; } else {
	throw new Error("[HMR] Hot Module Replacement is disabled.");
}


/***/ }),

/***/ "./src/components/aboutComponents/aboutPage.js":
/*!*****************************************************!*\
  !*** ./src/components/aboutComponents/aboutPage.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _templates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates.js */ "./src/components/templates.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config.js */ "./src/config.js");


var contentId = _config_js__WEBPACK_IMPORTED_MODULE_1__["default"].routes.aboutPage.contentId;

function renderAboutPage() {
  var aboutPageWrapper = document.getElementById(contentId);
  aboutPageWrapper.insertAdjacentHTML('beforeend', Object(_templates_js__WEBPACK_IMPORTED_MODULE_0__["ABOUT_PAGE_TEMPLATE"])());
}

/* harmony default export */ __webpack_exports__["default"] = (renderAboutPage);

/***/ }),

/***/ "./src/components/authComponents/login.js":
/*!************************************************!*\
  !*** ./src/components/authComponents/login.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _templates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates.js */ "./src/components/templates.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config.js */ "./src/config.js");


var contentId = _config_js__WEBPACK_IMPORTED_MODULE_1__["default"].routes.authPage.contentId;

function initAuthForms(formContainer) {
  var formLinks = formContainer.querySelector('ul');
  var forms = formContainer.querySelectorAll('form');
  formLinks.addEventListener('click', function (e) {
    var formId = "".concat(e.target.id.split('link')[0], "form");
    forms.forEach(function (form) {
      form.style.display = form.id === formId ? 'block' : 'none';
    });
  });
}

function renderAuthForms() {
  var authFormsContainer = document.getElementById(contentId);
  authFormsContainer.insertAdjacentHTML('beforeend', Object(_templates_js__WEBPACK_IMPORTED_MODULE_0__["FORM_TEMPLATE"])());
  initAuthForms(authFormsContainer);
}

/* harmony default export */ __webpack_exports__["default"] = (renderAuthForms);

/***/ }),

/***/ "./src/components/cartComponents/cart.js":
/*!***********************************************!*\
  !*** ./src/components/cartComponents/cart.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _templates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates.js */ "./src/components/templates.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config.js */ "./src/config.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var cart = _config_js__WEBPACK_IMPORTED_MODULE_1__["default"].selectors.cart;

var Cart =
/*#__PURE__*/
function () {
  function Cart() {
    _classCallCheck(this, Cart);

    this.cartPageContent = document.querySelector(cart.content);
    this.cartWrapper = document.querySelector(cart.wrapper);

    if (Cart.instance) {
      return Cart.instance;
    }

    Cart.instance = this;
  }

  _createClass(Cart, [{
    key: "init",
    value: function init(data, products) {
      var _this = this;

      this.resetCart();

      if (data) {
        Object.keys(data).forEach(function (id) {
          return _this.makeCartItemCard(id, data[id], products);
        });
      }

      this.cartPageContent.appendChild(this.cartWrapper);
    }
  }, {
    key: "makeCartItemCard",
    value: function makeCartItemCard(productId, value, products) {
      var product = products.find(function (item) {
        return String(item.id) === productId;
      });

      if (product) {
        var id = product.id,
            numberAvailable = product.numberAvailable,
            image = product.image,
            name = product.name,
            price = product.price;
        this.cartWrapper.insertAdjacentHTML('beforeend', Object(_templates_js__WEBPACK_IMPORTED_MODULE_0__["CART_ITEM_TEMPLATE"])(id, value, numberAvailable, image, name, price));
      }
    }
  }, {
    key: "resetCart",
    value: function resetCart() {
      var cartItem = document.querySelectorAll(cart.item);
      cartItem.forEach(function (item) {
        return item.remove();
      });
    }
  }]);

  return Cart;
}();

/* harmony default export */ __webpack_exports__["default"] = (Cart);

/***/ }),

/***/ "./src/components/cartComponents/order.js":
/*!************************************************!*\
  !*** ./src/components/cartComponents/order.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _templates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates.js */ "./src/components/templates.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config.js */ "./src/config.js");


var cart = _config_js__WEBPACK_IMPORTED_MODULE_1__["default"].selectors.cart;

function renderOrderCard() {
  var orderCardContainer = document.querySelector(cart.order);
  orderCardContainer.insertAdjacentHTML('beforeend', Object(_templates_js__WEBPACK_IMPORTED_MODULE_0__["CARD_ORDER_TEMPLATE"])());
}

/* harmony default export */ __webpack_exports__["default"] = (renderOrderCard);

/***/ }),

/***/ "./src/components/catalogueComponents/catalogue.js":
/*!*********************************************************!*\
  !*** ./src/components/catalogueComponents/catalogue.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _templates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates.js */ "./src/components/templates.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config.js */ "./src/config.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }



var catalogue = _config_js__WEBPACK_IMPORTED_MODULE_1__["default"].selectors.catalogue;
var route = _config_js__WEBPACK_IMPORTED_MODULE_1__["default"].routes.productPage.route;

function renderCatalogueItem(product) {
  var catalogueContainer = document.querySelector(catalogue.wrapper);
  var id = product.id,
      image = product.image,
      name = product.name,
      price = product.price;
  var catalogueItem = Object(_templates_js__WEBPACK_IMPORTED_MODULE_0__["CATALOGUE_ITEM_TEMPLATE"])(id, image, name, price);
  catalogueContainer.insertAdjacentHTML('beforeend', catalogueItem);
}

function makeCatalogueItemsClickable(render) {
  var catalogueCards = document.querySelectorAll(catalogue.item);
  catalogueCards.forEach(function (card) {
    var clickableArea = card.querySelector(catalogue.img);
    clickableArea.addEventListener('click', function () {
      var id = card.dataset.id;
      window.history.pushState(null, null, "/".concat(route, "/").concat(id));
      render(window.location.pathname);
    });
  });
}

function renderCatalogue(data, render) {
  _toConsumableArray(data).forEach(function (product) {
    renderCatalogueItem(product);
  });

  makeCatalogueItemsClickable(render);
}

/* harmony default export */ __webpack_exports__["default"] = (renderCatalogue);

/***/ }),

/***/ "./src/components/catalogueComponents/filters.js":
/*!*******************************************************!*\
  !*** ./src/components/catalogueComponents/filters.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _templates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates.js */ "./src/components/templates.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config.js */ "./src/config.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var filters = _config_js__WEBPACK_IMPORTED_MODULE_1__["default"].filters;
var filter = _config_js__WEBPACK_IMPORTED_MODULE_1__["default"].selectors.filter;

var Filters =
/*#__PURE__*/
function () {
  function Filters() {
    _classCallCheck(this, Filters);

    this.filtersContaniner = document.querySelector(filter.wrapper);
    this.checkboxes = {};
  }

  _createClass(Filters, [{
    key: "drawFilters",
    value: function drawFilters(data) {
      this.drawPriceInputRange(data);
      this.buildCheckboxes(data);
      this.drawCheckboxes();
      this.drawResetButton(this.filtersContaniner);
    }
  }, {
    key: "drawPriceInputRange",
    value: function drawPriceInputRange(data) {
      var allPrices = data.map(function (_ref) {
        var price = _ref.price;
        return price;
      });
      var prices = {
        min: Math.min.apply(Math, _toConsumableArray(allPrices)),
        max: Math.max.apply(Math, _toConsumableArray(allPrices))
      };
      this.filtersContaniner.insertAdjacentHTML('beforeend', Object(_templates_js__WEBPACK_IMPORTED_MODULE_0__["PRICE_INPUT_TEMPLATE"])(prices.min, prices.max));
    }
  }, {
    key: "buildCheckboxes",
    value: function buildCheckboxes(data) {
      var _this = this;

      _toConsumableArray(data).forEach(function (product) {
        filters.forEach(function (filterBase) {
          if (product[filterBase] && !Object.prototype.hasOwnProperty.call(_this.checkboxes, filterBase)) {
            _this.checkboxes[filterBase] = [];

            _this.checkboxes[filterBase].push(product[filterBase]);
          }

          if (product[filterBase] && Object.prototype.hasOwnProperty.bind(_this.checkboxes, filterBase) && !_this.checkboxes[filterBase].includes(product[filterBase])) {
            _this.checkboxes[filterBase].push(product[filterBase]);
          }
        });
      });
    }
  }, {
    key: "drawCheckboxes",
    value: function drawCheckboxes() {
      var _this2 = this;

      var _loop = function _loop() {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

        var filterGroup = document.createElement('div');
        filterGroup.setAttribute('class', filter.container);
        filterGroup.insertAdjacentHTML('beforeend', "<div class=\"filter__group_label\">".concat(key.toUpperCase(), "</div>"));
        var filterGroupContent = document.createElement('div');
        filterGroupContent.setAttribute('class', 'filter__group_content');
        value.sort().forEach(function (filterValue) {
          filterGroupContent.insertAdjacentHTML('beforeend', Object(_templates_js__WEBPACK_IMPORTED_MODULE_0__["CHECKBOX_TEMPLATE"])(key, filterValue));
        });
        filterGroup.appendChild(filterGroupContent);

        _this2.initFilterGroupContent(filterGroup, filterGroupContent);

        _this2.filtersContaniner.appendChild(filterGroup);
      };

      for (var _i = 0, _Object$entries = Object.entries(this.checkboxes); _i < _Object$entries.length; _i++) {
        _loop();
      }
    }
  }, {
    key: "drawResetButton",
    value: function drawResetButton(container) {
      container.insertAdjacentHTML('afterbegin', '<button class="filter__button_reset">Reset filters</button>');
    }
  }, {
    key: "initFilterGroupContent",
    value: function initFilterGroupContent(group, content) {
      content.style.display = 'none';
      var label = group.getElementsByTagName('div')[0];
      label.addEventListener('click', function () {
        var display = content.style.display;
        content.style.display = display === 'none' ? 'block' : 'none';
      });
    }
  }]);

  return Filters;
}();

/* harmony default export */ __webpack_exports__["default"] = (Filters);

/***/ }),

/***/ "./src/components/errorComponents/errorPage.js":
/*!*****************************************************!*\
  !*** ./src/components/errorComponents/errorPage.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config.js */ "./src/config.js");
/* harmony import */ var _templates_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../templates.js */ "./src/components/templates.js");


var contentId = _config_js__WEBPACK_IMPORTED_MODULE_0__["default"].routes.errorPage.contentId;

function renderErrorPage() {
  var errorPageContainer = document.getElementById(contentId);
  errorPageContainer.insertAdjacentHTML('beforeend', Object(_templates_js__WEBPACK_IMPORTED_MODULE_1__["ERROR_PAGE"])());
}

/* harmony default export */ __webpack_exports__["default"] = (renderErrorPage);

/***/ }),

/***/ "./src/components/homePageComponents/homepage.js":
/*!*******************************************************!*\
  !*** ./src/components/homePageComponents/homepage.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _templates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates.js */ "./src/components/templates.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config.js */ "./src/config.js");


var contentId = _config_js__WEBPACK_IMPORTED_MODULE_1__["default"].routes.homePage.contentId;
var home = _config_js__WEBPACK_IMPORTED_MODULE_1__["default"].selectors.home;

function renderHomePage(render) {
  var homepage = document.getElementById(contentId);
  homepage.insertAdjacentHTML('beforeend', Object(_templates_js__WEBPACK_IMPORTED_MODULE_0__["HOMEPAGE_TEMPLATE"])());
  initSeriveUrls(render);
}

function initSeriveUrls(renderFn) {
  var servicesUrls = document.querySelectorAll(home.services);
  servicesUrls.forEach(function (url) {
    var route = url.className.split('homePage__link_')[1];
    url.addEventListener('click', function () {
      window.history.pushState(null, null, "/".concat(route));
      renderFn(window.location.pathname);
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = (renderHomePage);

/***/ }),

/***/ "./src/components/layoutComponents/navbar.js":
/*!***************************************************!*\
  !*** ./src/components/layoutComponents/navbar.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _templates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates.js */ "./src/components/templates.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config.js */ "./src/config.js");


var routes = _config_js__WEBPACK_IMPORTED_MODULE_1__["default"].routes;

function initNavbar(navbar, render) {
  navbar.addEventListener('click', function (e) {
    switch (e.target.className) {
      case 'nav__link_home':
        window.history.pushState(null, null, "".concat(routes.homePage.route));
        break;

      case 'nav__link_about':
        window.history.pushState(null, null, "/".concat(routes.aboutPage.route));
        break;

      case 'nav__link_catalogue':
        window.history.pushState(null, null, "/".concat(routes.cataloguePage.route));
        break;

      case 'nav__link_cart':
        window.history.pushState(null, null, "/".concat(routes.cartPage.route));
        break;

      case 'nav__link_login':
        window.history.pushState(null, null, "/".concat(routes.authPage.route));
        break;

      default:
        break;
    }

    render(window.location.pathname);
  });
}

function renderNavbar(render) {
  var navbar = document.getElementById('js-main-nav');
  navbar.insertAdjacentHTML('beforeend', Object(_templates_js__WEBPACK_IMPORTED_MODULE_0__["NAVBAR_TEMPLATE"])());
  initNavbar(navbar, render);
}

/* harmony default export */ __webpack_exports__["default"] = (renderNavbar);

/***/ }),

/***/ "./src/components/singlePageComponents/singlePage.js":
/*!***********************************************************!*\
  !*** ./src/components/singlePageComponents/singlePage.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _templates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates.js */ "./src/components/templates.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config.js */ "./src/config.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var contentId = _config_js__WEBPACK_IMPORTED_MODULE_1__["default"].routes.productPage.contentId;
var page = _config_js__WEBPACK_IMPORTED_MODULE_1__["default"].selectors.page;

var SinglePage =
/*#__PURE__*/
function () {
  function SinglePage() {
    _classCallCheck(this, SinglePage);

    this.singlePageContainer = document.getElementById(contentId);

    if (SinglePage.instance) {
      return SinglePage.instance;
    }

    SinglePage.instance = this;
  }

  _createClass(SinglePage, [{
    key: "drawSinglePage",
    value: function drawSinglePage(product) {
      if (product) {
        this.resetPage();
        this.singlePageContainer.insertAdjacentHTML('beforeend', Object(_templates_js__WEBPACK_IMPORTED_MODULE_0__["SINGLE_PAGE_TEMPLATE"])(product));
      }
    }
  }, {
    key: "resetPage",
    value: function resetPage() {
      var pageContent = document.querySelector(page.content);

      if (pageContent) {
        pageContent.remove();
      }
    }
  }]);

  return SinglePage;
}();

/* harmony default export */ __webpack_exports__["default"] = (SinglePage);

/***/ }),

/***/ "./src/components/templates.js":
/*!*************************************!*\
  !*** ./src/components/templates.js ***!
  \*************************************/
/*! exports provided: FORM_TEMPLATE, CARD_ORDER_TEMPLATE, CATALOGUE_ITEM_TEMPLATE, PRICE_INPUT_TEMPLATE, CHECKBOX_TEMPLATE, CART_ITEM_TEMPLATE, NAVBAR_TEMPLATE, SINGLE_PAGE_TEMPLATE, HOMEPAGE_TEMPLATE, ABOUT_PAGE_TEMPLATE, ERROR_PAGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORM_TEMPLATE", function() { return FORM_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARD_ORDER_TEMPLATE", function() { return CARD_ORDER_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CATALOGUE_ITEM_TEMPLATE", function() { return CATALOGUE_ITEM_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRICE_INPUT_TEMPLATE", function() { return PRICE_INPUT_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECKBOX_TEMPLATE", function() { return CHECKBOX_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CART_ITEM_TEMPLATE", function() { return CART_ITEM_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAVBAR_TEMPLATE", function() { return NAVBAR_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SINGLE_PAGE_TEMPLATE", function() { return SINGLE_PAGE_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOMEPAGE_TEMPLATE", function() { return HOMEPAGE_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ABOUT_PAGE_TEMPLATE", function() { return ABOUT_PAGE_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_PAGE", function() { return ERROR_PAGE; });
/* eslint-disable import/prefer-default-export */
var FORM_TEMPLATE = function FORM_TEMPLATE() {
  return "\n  <div class=\"auth__form_wrapper\">\n  <ul>\n    <li id=\"js-sign-in-link\">Sign In</li>\n    <li id=\"js-sign-up-link\">Sign Up</li>\n  </ul>\n  <p class=\"auth__form_error\"></p>\n  <form id=\"js-sign-in-form\" novalidate>\n    <label for=\"email\">Email:</label>\n    <input type=\"email\" name=\"email\">\n    <p class=\"email-error\"></p>\n    <label for=\"password\">Password:</label>\n    <input type=\"password\" name=\"password\">\n    <p class=\"password-error\"></p>\n    <button type=\"submit\">Sign in</button>\n  </form>\n  <form id=\"js-sign-up-form\" novalidate style=\"display: none;\">\n    <label for=\"namel\">Name:</label>\n    <input type=\"text\" name=\"name\">\n    <p class=\"name-error\"></p>\n    <label for=\"email\">Email:</label>\n    <input type=\"email\" name=\"email\">\n    <p class=\"email-error\"></p>\n    <label for=\"password\">Password:</label>\n    <input type=\"password\" name=\"password\">\n    <p class=\"password-error\"></p>\n    <button type=\"submit\">Sign Up</button>\n  </form>\n  </div>";
};
var CARD_ORDER_TEMPLATE = function CARD_ORDER_TEMPLATE() {
  return "\n<div class=\"cartPage__order_wrapper\">\n  <p class=\"cartPage__order_message\"></p>\n  <div class=\"cartPage__user_info\">\n    <h3>User Info</h3>\n    <div class=\"cartPage__user_data\"></div>\n  </div>\n  <div>\n    <h3>Total</h3>\n    <div class=\"cartPage__total\">No items chosen</div>\n  </div>\n  <div>\n    <h3>Order details</h3>\n    <div class=\"cartPage__details\"></div>\n  </div>\n  <button class=\"cartPage__order_buy\">Buy</button>\n</div>";
};
var CATALOGUE_ITEM_TEMPLATE = function CATALOGUE_ITEM_TEMPLATE(id, image, name, price) {
  return "\n<div class=\"catalogue__item\" data-id=\"".concat(id, "\">\n  <div class=\"catalogue__item_imgwrap\">\n    <img class=\"catalogue__item_photo\" src=/").concat(image, ">\n    <h5 class=\"catalogue__item_name\">").concat(name, "</h5>\n  </div>\n  <div class=\"catalogue__item_info\">\n    <p class=\"catalogue__item_price\">").concat(price, "$</p>\n    <button class=\"catalogue__item_add\">Add to cart</button>\n  </div>\n</div>");
};
var PRICE_INPUT_TEMPLATE = function PRICE_INPUT_TEMPLATE(min, max) {
  return "\n  <div class=\"filter-group-label\">\n    <h3>PRICE:</h3>\n    <div class=\"filter__group_content\">\n      <span>".concat(min, "</span>\n      <input type=\"range\" class=\"filter__group_price\" name=\"price\" \n        value=\"").concat(max, "\" min=\"").concat(min, "\" max=\"").concat(max, "\">\n      <span>").concat(max, "</span>\n      <div class=\"filter__price_current\"><div> \n    </div>\n  </div>");
};
var CHECKBOX_TEMPLATE = function CHECKBOX_TEMPLATE(filterName, filterValue) {
  return "\n  <div class=\"filter__group_checkbox\" value=".concat(filterValue, ">\n    <label for=\"").concat(filterValue, "\">").concat(filterValue, "</label>\n    <input type=\"checkbox\" name=\"").concat(filterName, "\" value=\"").concat(filterValue, "\" />\n  </div>");
};
var CART_ITEM_TEMPLATE = function CART_ITEM_TEMPLATE(id, value, numberAvailable, image, name, price) {
  return "\n<div class=\"cart__item_wrapper\" data-id=\"".concat(id, "\">\n  <div class=\"cart__item_details\">\n    <img class=\"cart__item_image\" src=\"/").concat(image, "\" />\n    <h5 class=\"cart__item_name\">").concat(name, "</h5>\n    <p class=\"cart__item_price\" data-value=\"").concat(price, "\">Price: ").concat(price, "$</p>\n  </div>\n  <form class=\"cart__item_input\">\n    <input type=\"checkbox\" class=\"cart__item_choose\"/>\n    <input class=\"cart__item_quantity\" data-id=\"").concat(id, "\" type=\"number\" value=\"").concat(value, "\" min=\"1\" max=\"").concat(numberAvailable, "\"/>\n  </form>\n  <button class=\"cart__item_delete\" data-id=\"").concat(id, "\">Delete</button>\n  </div>");
};
var NAVBAR_TEMPLATE = function NAVBAR_TEMPLATE() {
  return "\n<div class=\"nav__wrapper\">\n  <ul>\n    <li class=\"nav__link_home\">Home</li>\n    <li class=\"nav__link_about\">About</li>\n    <li class=\"nav__link_catalogue\">Catalogue</li>\n  </ul>\n  <ul>\n    <li class=\"nav__link_login\">Log in</li>\n    <li class=\"nav__link_logout\">Log out</li>\n    <li><img class=\"nav__link_cart\" src=\"/assets/img/126083.png\"></li>\n  </ul>\n</div>";
};
var SINGLE_PAGE_TEMPLATE = function SINGLE_PAGE_TEMPLATE(product) {
  return "\n  <div class=\"singlePage__content\">\n    <div class=\"singlePage__content_main\"> \n    <div class=\"singlePage__img_container\">\n      <img class=\"singlePage_content_img\" src=\"/".concat(product.image, "\">\n    </div>\n    <h5>").concat(product.name, "</h5>\n    <p>").concat(product.price, "$</p>\n    <div class=\"singlePage__item_add\">\n      <button>Add to cart</button>\n    </div>\n  </div>\n\n  <div class=\"singlePage_content_info\">\n    <div class=\"singlePage_content_base\">\n      <p><b>Brand</b>: ").concat(product.brand, "</p>\n      <p><b>Manufacturer</b>: ").concat(product.manufacturer, "</p>\n      <p><b>Volume</b>: ").concat(product.volume, "</p>\n    </div>\n    <div class=\"singlePage_content_desc\">\n      <p>").concat(product.description, "</p>\n    </div>\n    <div class=\"singlePage_content_spec\">\n      <p><b>Spirit type</b>: ").concat(product['spirit type'], "</p>\n      <p><b>Category</b>: ").concat(product.category, "</p>\n      <p><b>Package</b>: ").concat(product["package"], "</p>\n    </div>\n  </div>\n  </div>\n");
};
var HOMEPAGE_TEMPLATE = function HOMEPAGE_TEMPLATE() {
  return "\n  <div class=\"lead__banner\">\n    <img src=\"/assets/img/homepage/lead-banner.jpg\" />\n    <div class=\"banner__content\">\n      <div class=\"wrapper\">\n        <span class=\"title\">Only trusted suppliers</span>\n        <ul>\n          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>\n          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>\n          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <section class=\"homePage__services\">\n      <div class=\"wrapper\">\n      <h1>Our services</h1>\n        <ul>\n          <li class=\"homePage__link_about\">\n            <img src=\"/assets/img/homepage/about.png\" />\n            <p>About us</p>\n          </li>\n          <li class=\"homePage__link_catalogue\">\n            <img src=\"/assets/img/homepage/shop.png\" />\n            <p>Shop now</p>\n          </li>\n          <li class=\"homePage__link_login\">\n            <img src=\"/assets/img/homepage/join.png\" />\n            <p>Join</p>\n          </li>\n        </ul>\n      </div>\n    </section>\n  <div class=\"second__banner\">\n    <img src=\"/assets/img/homepage/second-banner.jpg\" />\n    <div class=\"banner__content\">\n       <div class=\"wrapper\">\n        <span class=\"title\">Excellent service</span>\n        <span class=\"title\">Fast delivery</span>\n        <ul>\n          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>\n          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>\n          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <section class=\"homePage__products\">\n    <div class=\"wrapper\">\n      <h1>Popular brands</h1>\n      <ul>\n        <li><img src=\"/assets/img/homepage/ballantines.jpg\" name=\"brand\" data-value=\"Ballantine's\" /></li>\n        <li><img src=\"/assets/img/homepage/black-velvet.jpg\" name=\"brand\" data-value=\"Black Velvet\" /></li>\n        <li><img src=\"/assets/img/homepage/jack-daniels.jpg\" name=\"brand\" data-value=\"Jack Daniel's\" /></li>\n        <li><img src=\"/assets/img/homepage/jameson.jpg\" name=\"brand\" data-value=\"Jameson\"/></li>\n        <li><img src=\"/assets/img/homepage/lauders.jpg\" name=\"brand\" data-value=\"Lauder's\" /></li>\n        <li><img src=\"/assets/img/homepage/jim-beam.jpg\" name=\"brand\" data-value=\"Jim Beam\"/></li>\n        <li><img src=\"/assets/img/homepage/jagermeister.jpg\" name=\"brand\" data-value=\"Jagermeister\"/></li>\n      </ul>\n    </div>\n  </section>";
};
var ABOUT_PAGE_TEMPLATE = function ABOUT_PAGE_TEMPLATE() {
  return "\n  <div class=\"second__banner\">\n    <img src=\"/assets/img/about/about.jpg\" />\n    <div class=\"banner__content\">\n      <div class=\"wrapper\">\n        <span class=\"title\">Another lorem!</span>\n      </div>\n    </div>\n  </div>\n  <section class=\"aboutPage__content\">\n    <h1>About us</h1>\n    <div>\"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti\n     atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,\n      similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.\n      Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi\n       optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est,\n        omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe \n        eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus,\n         ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.\"\n    </div>\n  </section>\n  <section class=\"aboutPage__articles\">\n    <div class=\"wrapper\">\n      <h1>Popular drinks</h1>\n      <ul>\n        <li>\n          <img src=\"/assets/img/about/wine.jpg\"></img>\n          <h5>Lorem ipsum dolor sit amet</h5>\n          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod \n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n           Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n          </div>\n        </li>\n        <li>\n          <img src=\"/assets/img/about/whiskey.png\"></img>\n          <h5>Lorem ipsum dolor sit amet</h5>\n          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod \n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n           Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n          </div>\n        </li>\n        <li>\n          <img src=\"/assets/img/about/martini.jpg\"></img>\n          <h5>Lorem ipsum dolor sit amet</h5>\n          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod \n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n           Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n          </div>\n        </li>\n        <li>\n          <img src=\"/assets/img/about/tequila.jpg\"></img>\n          <h5>Lorem ipsum dolor sit amet</h5>\n          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod \n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n          </div>\n        </li>\n        <li>\n          <img src=\"/assets/img/about/beer.jpg\"></img>\n          <h5>Lorem ipsum dolor sit amet</h5>\n          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod \n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n          </div>\n      </li>\n      <li>\n          <img src=\"/assets/img/about/cognac.jpg\"></img>\n          <h5>Lorem ipsum dolor sit amet</h5>\n          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod \n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n          </div>\n      </li>\n      </ul>\n    </div>\n  </section>";
};
var ERROR_PAGE = function ERROR_PAGE() {
  return "\n  <div>\n    <h1>Something went wrong!</h1>\n    <h5>Page doesn't exist =(</h5>\n    <img src=\"/assets/img/error/error.jpg\" />\n  </div>\n  ";
};

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var CONFIG = {
  api: 'https://my-json-server.typicode.com/anakhu/demo',
  routes: {
    homePage: {
      route: '/',
      contentId: 'js-homepage'
    },
    aboutPage: {
      route: 'about',
      contentId: 'js-about-page'
    },
    cataloguePage: {
      route: 'catalogue',
      contentId: 'js-catalogue-page'
    },
    productPage: {
      route: 'product',
      contentId: 'js-single-page'
    },
    errorPage: {
      route: '404',
      contentId: 'js-error-page'
    },
    authPage: {
      route: 'login',
      contentId: 'js-auth-page'
    },
    cartPage: {
      route: 'cart',
      contentId: 'js-cart-page'
    }
  },
  filters: ['brand', 'volume', 'manufacturer', 'category', 'package', 'spirit type'],
  validationRules: {
    name: {
      minLen: 3,
      maxLen: 20,
      onlyNumbersAndLetters: true,
      isNotEmpty: true
    },
    email: {
      isNotEmpty: true,
      isValidEmail: true
    },
    password: {
      minLen: 6,
      maxLen: 20,
      onlyNumbersAndLetters: true,
      isNotEmpty: true
    }
  },
  selectors: {
    cart: {
      wrapper: '.cartPage__cart_wrapper',
      order: '.cartPage__cart_order',
      content: '.cartPage__content',
      item: '.cart__item_wrapper',
      total: '.cartPage__total',
      details: '.cartPage__details',
      userInfo: '.cartPage__user_info',
      userData: '.cartPage__user_data',
      orderMessage: '.cartPage__order_message',
      input: '.cart__item_input',
      "delete": '.cart__item_delete',
      choose: '.cart__item_choose',
      name: '.cart__item_name',
      price: '.cart__item_price',
      quantity: '.cart__item_quantity',
      buy: '.cartPage__order_buy'
    },
    catalogue: {
      item: '.catalogue__item',
      add: '.catalogue__item_add',
      img: '.catalogue__item_imgwrap',
      wrapper: '.productPage__catalogue'
    },
    filter: {
      wrapper: '.productPage__filter',
      container: '.catalogue__filter_group',
      label: '.filter__group_label',
      content: '.filter__group_content',
      currentPrice: '.filter__price_current',
      price: '.filter__group_price',
      checkbox: '.filter__group_checkbox input',
      reset: '.filter__button_reset'
    },
    nav: {
      logout: '.nav__link_logout',
      login: '.nav__link_login'
    },
    auth: {
      error: '.auth__form_error'
    },
    home: {
      services: '.homePage__services li',
      img: '.homePage__products img'
    },
    page: {
      content: '.singlePage__content'
    },
    forms: {
      signIn: 'js-sign-in-form',
      signUp: 'js-sign-up-form'
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (CONFIG);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ "./src/config.js");
/* harmony import */ var _dist_index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dist/index.html */ "./dist/index.html");
/* harmony import */ var _dist_index_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dist_index_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dist_assets_styles_scss_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dist/assets/styles/scss/styles.scss */ "./dist/assets/styles/scss/styles.scss");
/* harmony import */ var _dist_assets_styles_scss_styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dist_assets_styles_scss_styles_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _main_Router_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/Router.js */ "./src/main/Router.js");
/* harmony import */ var _main_Renderer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/Renderer.js */ "./src/main/Renderer.js");
/* harmony import */ var _main_FilterService_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/FilterService.js */ "./src/main/FilterService.js");
/* harmony import */ var _main_CartService_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/CartService.js */ "./src/main/CartService.js");
/* harmony import */ var _main_CartObsever_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main/CartObsever.js */ "./src/main/CartObsever.js");
/* harmony import */ var _main_FormService_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main/FormService.js */ "./src/main/FormService.js");
/* harmony import */ var _main_AuthService_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main/AuthService.js */ "./src/main/AuthService.js");
/* harmony import */ var _main_utils_makeRequest_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main/utils/makeRequest.js */ "./src/main/utils/makeRequest.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }













var App =
/*#__PURE__*/
function () {
  function App() {
    _classCallCheck(this, App);

    this.products = [];
    this.router = new _main_Router_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.filterService = new _main_FilterService_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
    this.cartService = new _main_CartService_js__WEBPACK_IMPORTED_MODULE_6__["default"]();
    this.cartObserver = new _main_CartObsever_js__WEBPACK_IMPORTED_MODULE_7__["default"](this.router);
    this.authService = new _main_AuthService_js__WEBPACK_IMPORTED_MODULE_9__["default"](this.router, this.cartService);
    this.formService = new _main_FormService_js__WEBPACK_IMPORTED_MODULE_8__["default"](this.router, this.authService);
    this.renderer = new _main_Renderer_js__WEBPACK_IMPORTED_MODULE_4__["default"](this.router, this.filterService, this.cartService, this.cartObserver);
    this.filterService.subscribe(this.onFilterChange.bind(this));
    this.cartService.subscribe(this.onCartChange.bind(this));
    this.init();
  }

  _createClass(App, [{
    key: "init",
    value: function init() {
      var _this = this;

      Object(_main_utils_makeRequest_js__WEBPACK_IMPORTED_MODULE_10__["makeRequest"])('products', 'GET').then(function (data) {
        return data.json();
      }).then(function (products) {
        _this.products = products;
      }).then(function () {
        _this.initRouter();

        _this.renderer.initApp(_this.products);

        _this.router.renderRouteContent(window.location.pathname);
      }).then(function () {
        _this.filterService.init();

        _this.cartService.init();

        _this.formService.initAuthForms();

        _this.cartService.initCartInputHadlers();

        _this.cartObserver.initObserver();
      })["catch"](function (error) {
        return console.log(error.message);
      });
    }
  }, {
    key: "initRouter",
    value: function initRouter() {
      var _this2 = this;

      Object.keys(_config_js__WEBPACK_IMPORTED_MODULE_0__["default"].routes).forEach(function (entry) {
        var _CONFIG$routes$entry = _config_js__WEBPACK_IMPORTED_MODULE_0__["default"].routes[entry],
            route = _CONFIG$routes$entry.route,
            contentId = _CONFIG$routes$entry.contentId;

        if (route !== _config_js__WEBPACK_IMPORTED_MODULE_0__["default"].routes.authPage.route) {
          _this2.router.createNewRoute(route, _this2.renderer.renderPageContent.bind(_this2.renderer, contentId, _this2.products));
        } else {
          _this2.router.createNewRoute(route, function () {
            if (window.localStorage.getItem('user')) {
              var cartRoute = _config_js__WEBPACK_IMPORTED_MODULE_0__["default"].routes.cartPage.route;
              window.history.pushState(null, null, "/".concat(cartRoute));

              _this2.router.renderRouteContent(window.location.pathname);
            } else {
              _this2.renderer.renderPageContent.call(_this2.renderer, contentId);
            }
          });
        }
      });
    }
  }, {
    key: "onFilterChange",
    value: function onFilterChange(data) {
      window.history.pushState(null, null, data);
      this.router.renderRouteContent(decodeURI(window.location.pathname));
    }
  }, {
    key: "onCartChange",
    value: function onCartChange(data) {
      if (window.location.pathname.includes(_config_js__WEBPACK_IMPORTED_MODULE_0__["default"].routes.cataloguePage.route) || window.location.pathname.includes(_config_js__WEBPACK_IMPORTED_MODULE_0__["default"].routes.productPage.route)) {
        window.localStorage.setItem('products', data);
        this.renderer.renderCart(this.products);
        this.cartService.initCartInputHadlers();
        this.cartObserver.initObserver();
      }
    }
  }]);

  return App;
}();

var app = new App();

/***/ }),

/***/ "./src/main/AuthService.js":
/*!*********************************!*\
  !*** ./src/main/AuthService.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config.js */ "./src/config.js");
/* harmony import */ var _utils_makeRequest_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/makeRequest.js */ "./src/main/utils/makeRequest.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var _CONFIG$selectors = _config_js__WEBPACK_IMPORTED_MODULE_0__["default"].selectors,
    cart = _CONFIG$selectors.cart,
    nav = _CONFIG$selectors.nav,
    auth = _CONFIG$selectors.auth;
var route = _config_js__WEBPACK_IMPORTED_MODULE_0__["default"].routes.cartPage.route;

var AuthService =
/*#__PURE__*/
function () {
  function AuthService(router, cartService) {
    _classCallCheck(this, AuthService);

    this.router = router;
    this.cartService = cartService;
    this.user = {};
    this.isLoggedIn = false;
    this.authErrors = null;
    this.orderMesssages = null;
    this.init();
  }

  _createClass(AuthService, [{
    key: "init",
    value: function init() {
      this.authErrors = document.querySelector(auth.error);
      this.orderMesssages = document.querySelector(cart.orderMessage);
    }
  }, {
    key: "signUserIn",
    value: function signUserIn() {
      this.user = JSON.parse(localStorage.getItem('user'));

      if (this.user) {
        this.isLoggedIn = true;
      } else {
        this.user = {};
        this.isLoggedIn = false;
      }

      this.toggleAuthOnlyContent();
    }
  }, {
    key: "signUserOut",
    value: function signUserOut() {
      this.user = {};
      this.isLoggedIn = false;
      window.localStorage.removeItem('user');
      this.toggleAuthOnlyContent();
    }
  }, {
    key: "logUserIn",
    value: function logUserIn(data) {
      localStorage.setItem('user', JSON.stringify(data));
      this.user = data;
      this.isLoggedIn = true;
      this.toggleAuthOnlyContent();
    }
  }, {
    key: "toggleAuthOnlyContent",
    value: function toggleAuthOnlyContent() {
      var logOutBtn = document.querySelector(nav.logout);
      var loginLink = document.querySelector(nav.login);
      var userInfo = document.querySelector(cart.userInfo);
      var userData = userInfo.querySelector(cart.userData);
      userData.insertAdjacentHTML('beforeend', "<p>".concat(this.user.name, "</p>\n      <p>").concat(this.user.email, "</p>"));

      if (this.isLoggedIn) {
        logOutBtn.style.display = 'block';
        loginLink.style.display = 'none';
        userInfo.style.display = 'block';
      } else {
        userData.textContent = '';
        logOutBtn.style.display = 'none';
        loginLink.style.display = 'block';
        userInfo.style.display = 'none';
      }
    }
  }, {
    key: "processSignInRequest",
    value: function processSignInRequest(data) {
      var _this = this;

      Object(_utils_makeRequest_js__WEBPACK_IMPORTED_MODULE_1__["makeRequest"])('users', 'GET', {}).then(function (res) {
        return res.json();
      }).then(function (res) {
        var foundUser = res.find(function (user) {
          return user.email === data.email && user.password === data.password;
        });

        if (foundUser) {
          var name = foundUser.name,
              email = foundUser.email;

          _this.logUserIn({
            name: name,
            email: email
          });

          window.history.pushState(null, null, "/".concat(route));

          _this.router.renderRouteContent(window.location.pathname);
        } else {
          _this.authErrors.textContent = 'Login failed';
        }
      })["catch"](function (err) {
        return console.log(err);
      });
    }
  }, {
    key: "processSignUpRequest",
    value: function processSignUpRequest(data) {
      var _this2 = this;

      Object(_utils_makeRequest_js__WEBPACK_IMPORTED_MODULE_1__["makeRequest"])('users', 'POST', data).then(function (res) {
        if (res.status === 201) {
          var name = data.name,
              email = data.email;

          _this2.logUserIn({
            name: name,
            email: email
          });

          window.history.pushState(null, null, "/".concat(route));

          _this2.router.renderRouteContent(window.location.pathname);
        }
      })["catch"](function (err) {
        return console.log(err);
      });
    }
  }, {
    key: "processOrderRequest",
    value: function processOrderRequest() {
      var _this3 = this;

      if (this.isLoggedIn) {
        this.orderMesssages.textContent = '';
        var products = document.querySelectorAll("".concat(cart.details, " div"));

        if (products.length) {
          var _this$user = this.user,
              name = _this$user.name,
              email = _this$user.email;
          var orderData = {
            name: name,
            email: email
          };
          products.forEach(function (product) {
            orderData[product.id] = product.dataset.value;
          });
          Object(_utils_makeRequest_js__WEBPACK_IMPORTED_MODULE_1__["makeRequest"])('orders', 'POST', orderData).then(function (res) {
            if (res.status === 201) {
              var cards = document.querySelectorAll(cart.item);
              cards.forEach(function (card) {
                var id = card.dataset.id;

                if (orderData[id]) {
                  _this3.cartService.deleteProductFromCart(id);

                  var total = document.querySelector(cart.total);
                  total.textContent = '';
                  var details = document.querySelector(cart.details);
                  details.textContent = '';
                }
              });
              _this3.orderMesssages.textContent = 'Your order was placed!';
            }
          })["catch"](function (e) {
            _this3.orderMesssages.textContent = 'Server problem. Please, try again later';
            console.log(e);
          });
        } else {
          this.orderMesssages.textContent = 'You haven\'t chosen anything yet';
        }
      }
    }
  }]);

  return AuthService;
}();

/* harmony default export */ __webpack_exports__["default"] = (AuthService);

/***/ }),

/***/ "./src/main/CartObsever.js":
/*!*********************************!*\
  !*** ./src/main/CartObsever.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config.js */ "./src/config.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var cart = _config_js__WEBPACK_IMPORTED_MODULE_0__["default"].selectors.cart;

var CartObserver =
/*#__PURE__*/
function () {
  function CartObserver(router) {
    _classCallCheck(this, CartObserver);

    this.router = router;
    this.cartOrderContainer = document.querySelector(cart.order);
    this.orderMesssages = null;
  }

  _createClass(CartObserver, [{
    key: "initObserver",
    value: function initObserver() {
      var nodesToObserve = document.querySelectorAll(cart.input);

      if (nodesToObserve) {
        this.initCartCalculator();
        this.calculateTotal();
      }
    }
  }, {
    key: "initCartCalculator",
    value: function initCartCalculator() {
      var _this = this;

      var forms = document.querySelectorAll(cart.input);
      var deleteBtns = document.querySelectorAll(cart["delete"]);
      forms.forEach(function (form) {
        form.addEventListener('change', function () {
          return _this.calculateTotal();
        });
      });
      deleteBtns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
          _this.deleteCardOrderNote(e.target.dataset.id);

          _this.calculateTotal();
        });
      });
    }
  }, {
    key: "calculateTotal",
    value: function calculateTotal() {
      var _this2 = this;

      var total = document.querySelector(cart.total);
      var cartItems = document.querySelectorAll(cart.item);

      if (cartItems.length) {
        var priceTotal = Array.from(cartItems).reduce(function (totalSum, currentItem) {
          var flag = currentItem.querySelector(cart.choose);
          var id = currentItem.dataset.id;

          if (flag.checked) {
            var name = currentItem.querySelector(cart.name).textContent;
            var price = currentItem.querySelector(cart.price).dataset.value;
            var quantity = currentItem.querySelector(cart.quantity).value;
            totalSum += price * quantity;

            _this2.renderCartOrderDetails(id, name, quantity);
          } else {
            _this2.deleteCardOrderNote(id);
          }

          return totalSum;
        }, 0);
        total.textContent = priceTotal > 0 ? priceTotal.toFixed(2) : 'No items chosen';
      } else {
        total.textContent = 'No items chosen';
      }
    }
  }, {
    key: "renderCartOrderDetails",
    value: function renderCartOrderDetails(id, name, quantity) {
      var cartDetails = document.querySelector(cart.details);

      if (cartDetails.children) {
        var found = Array.from(cartDetails.children).find(function (item) {
          return Number(item.id) === Number(id);
        });

        if (found) {
          found.textContent = "".concat(name, " : ").concat(quantity);
          return;
        }
      }

      var details = document.createElement('div');
      details.setAttribute('id', id);
      details.dataset.value = quantity;
      details.textContent = "".concat(name, " : ").concat(quantity);
      cartDetails.appendChild(details);
    }
  }, {
    key: "deleteCardOrderNote",
    value: function deleteCardOrderNote(id) {
      var cartDetails = document.querySelector(cart.details);
      var found = Array.from(cartDetails.children).find(function (item) {
        return Number(item.id) === Number(id);
      });

      if (found) {
        found.remove();
      }
    }
  }]);

  return CartObserver;
}();

/* harmony default export */ __webpack_exports__["default"] = (CartObserver);

/***/ }),

/***/ "./src/main/CartService.js":
/*!*********************************!*\
  !*** ./src/main/CartService.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config.js */ "./src/config.js");
/* harmony import */ var _Observable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Observable.js */ "./src/main/Observable.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var _CONFIG$selectors = _config_js__WEBPACK_IMPORTED_MODULE_0__["default"].selectors,
    cart = _CONFIG$selectors.cart,
    catalogue = _CONFIG$selectors.catalogue;

var CartService =
/*#__PURE__*/
function () {
  function CartService() {
    _classCallCheck(this, CartService);

    this.carts = [];
    this.productsInCart = {};
    this.observable = new _Observable_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.init();
  }

  _createClass(CartService, [{
    key: "subscribe",
    value: function subscribe(fn) {
      this.observable.subscribe(fn);
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;

      this.carts = document.querySelectorAll(catalogue.add);
      this.carts.forEach(function (cartItem) {
        cartItem.addEventListener('click', function (e) {
          var itemId = e.target.closest(catalogue.item).dataset.id;

          _this.addProductToCart(itemId);
        });
      });
      this.initProductCart();
      this.initCartInputHadlers();
    }
  }, {
    key: "initProductCart",
    value: function initProductCart() {
      this.productsInCart = JSON.parse(window.localStorage.getItem('products')) || {};
    }
  }, {
    key: "updateLocalStorage",
    value: function updateLocalStorage() {
      window.localStorage.setItem('products', JSON.stringify(this.productsInCart));
      this.observable.next(JSON.stringify(this.productsInCart));
    }
  }, {
    key: "deleteProductFromCart",
    value: function deleteProductFromCart(id) {
      var cartItems = document.querySelectorAll(cart.item);
      var itemToDelete = Array.from(cartItems).find(function (item) {
        return Number(item.dataset.id) === Number(id);
      });

      if (itemToDelete) {
        delete this.productsInCart[id];
        itemToDelete.remove();
        this.updateLocalStorage();
      }
    }
  }, {
    key: "addProductToCart",
    value: function addProductToCart(itemId) {
      if (!Object.prototype.hasOwnProperty.call(this.productsInCart, itemId)) {
        this.productsInCart[itemId] = 1;
      } else {
        this.productsInCart[itemId] += 1;
      }

      this.updateLocalStorage();
    }
  }, {
    key: "initCartInputHadlers",
    value: function initCartInputHadlers() {
      this.initDeleteButtons();
      this.initCartNumberInput();
    }
  }, {
    key: "initDeleteButtons",
    value: function initDeleteButtons() {
      var _this2 = this;

      var deleteButtons = document.querySelectorAll(cart["delete"]);
      deleteButtons.forEach(function (button) {
        button.addEventListener('click', function (e) {
          var id = e.target.dataset.id;

          _this2.deleteProductFromCart(id);
        });
      });
    }
  }, {
    key: "initCartNumberInput",
    value: function initCartNumberInput() {
      var _this3 = this;

      var numberInputs = document.querySelectorAll(cart.quantity);
      numberInputs.forEach(function (input) {
        input.addEventListener('change', function (e) {
          if (Number(e.target.value) < 1) {
            e.target.value = 1;
          }

          if (Number(e.target.value) > Number(e.target.max)) {
            e.target.value = e.target.max;
          }

          var id = e.target.dataset.id;
          _this3.productsInCart[id] = Number(e.target.value);

          _this3.updateLocalStorage();
        });
      });
    }
  }]);

  return CartService;
}();

/* harmony default export */ __webpack_exports__["default"] = (CartService);

/***/ }),

/***/ "./src/main/FilterService.js":
/*!***********************************!*\
  !*** ./src/main/FilterService.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config.js */ "./src/config.js");
/* harmony import */ var _Observable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Observable.js */ "./src/main/Observable.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var _CONFIG$selectors = _config_js__WEBPACK_IMPORTED_MODULE_0__["default"].selectors,
    filter = _CONFIG$selectors.filter,
    home = _CONFIG$selectors.home;

var FilterService =
/*#__PURE__*/
function () {
  function FilterService() {
    _classCallCheck(this, FilterService);

    this.checkboxes = [];
    this.homePageFilters = [];
    this.priceInput = null;
    this.resetFiltersBtn = null;
    this.filters = {};
    this.observable = new _Observable_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
  }

  _createClass(FilterService, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.checkboxes = document.querySelectorAll(filter.checkbox);
      this.homePageFilters = document.querySelectorAll(home.img);
      this.resetFiltersBtn = document.querySelector(filter.reset);
      this.priceInput = document.querySelector(filter.price);
      this.resetFiltersBtn.addEventListener('click', function () {
        _this.resetFilters();
      });
      this.priceInput.addEventListener('change', function (e) {
        _this.onInputRangeChange(e.target.value);

        _this.handleFilterChange();

        var currentVal = document.querySelector(filter.currentPrice);
        currentVal.textContent = e.target.value;
      });
      this.checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function (e) {
          if (e.target.checked) {
            _this.onCheckBoxChecked(e.target.name, e.target.value);
          } else {
            _this.onCheckBoxUnChecked(e.target.name, e.target.value);
          }

          _this.handleFilterChange();
        });
      });
      this.homePageFilters.forEach(function (img) {
        img.addEventListener('click', function (e) {
          _this.onCheckBoxChecked(e.target.name, e.target.dataset.value);

          _this.handleFilterChange();

          _this.initFilters();
        });
      });
      this.getFilters();
      this.initFilters();
    }
  }, {
    key: "subscribe",
    value: function subscribe(fn) {
      this.observable.subscribe(fn);
    }
  }, {
    key: "initFilters",
    value: function initFilters() {
      var _this2 = this;

      if (Object.keys(this.filters).length) {
        this.checkboxes.forEach(function (currentFilter) {
          var name = currentFilter.name,
              value = currentFilter.value;

          if (_this2.filters[name] && _this2.filters[name].includes(value)) {
            currentFilter.checked = true;
            var container = currentFilter.closest(filter.content);
            container.style.display = 'block';
          }
        });
      }

      if (this.filters.price) {
        this.priceInput.value = this.filters.price;
        var currentVal = document.querySelector(filter.currentPrice);
        currentVal.textContent = this.filters.price;
      }
    }
  }, {
    key: "resetFilters",
    value: function resetFilters() {
      this.filters = {};
      this.handleFilterChange();
      this.checkboxes.forEach(function (checkbox) {
        checkbox.checked = false;
      });
      this.priceInput.value = this.priceInput.max;
    }
  }, {
    key: "getFilters",
    value: function getFilters() {
      var filtersString = decodeURI(window.location.search);
      var filters = filtersString.replace('?', '').split('&').filter(Boolean).reduce(function (filterObject, currenFilterValue) {
        var _currenFilterValue$sp = currenFilterValue.split('='),
            _currenFilterValue$sp2 = _slicedToArray(_currenFilterValue$sp, 2),
            filterBase = _currenFilterValue$sp2[0],
            filterValue = _currenFilterValue$sp2[1];

        if (!Object.prototype.hasOwnProperty.call(filterObject, filterBase)) {
          filterObject[filterBase] = [];
        }

        filterObject[filterBase].push(filterValue);
        return filterObject;
      }, {});
      this.filters = filters;
      return this.filters;
    }
  }, {
    key: "onInputRangeChange",
    value: function onInputRangeChange(value) {
      this.filters.price = [value];
    }
  }, {
    key: "onCheckBoxChecked",
    value: function onCheckBoxChecked(name, value) {
      if (!this.filters[name]) {
        this.filters[name] = [];
      }

      if (this.filters[name] && !this.filters[name].includes(value)) {
        this.filters[name].push(value);
      }
    }
  }, {
    key: "onCheckBoxUnChecked",
    value: function onCheckBoxUnChecked(name, value) {
      if (this.filters[name] && this.filters[name].includes(value)) {
        var index = this.filters[name].indexOf(value);
        this.filters[name].splice(index, 1);
      }

      if (this.filters[name] && this.filters[name].length < 1) {
        delete this.filters[name];
      }
    }
  }, {
    key: "handleFilterChange",
    value: function handleFilterChange() {
      var query = this.createQuery();

      if (!Object.keys(this.filters).length) {
        this.observable.next('/catalogue');
      } else {
        this.observable.next(query);
      }
    }
  }, {
    key: "createQuery",
    value: function createQuery() {
      var queryString = '';

      var _loop = function _loop() {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
            key = _Object$entries$_i[0],
            values = _Object$entries$_i[1];

        values.forEach(function (value) {
          var queryStringElement = "".concat(key, "=").concat(value, "&");
          queryString += queryStringElement;
        });
      };

      for (var _i2 = 0, _Object$entries = Object.entries(this.filters); _i2 < _Object$entries.length; _i2++) {
        _loop();
      }

      return "/catalogue?".concat(queryString);
    }
  }]);

  return FilterService;
}();

/* harmony default export */ __webpack_exports__["default"] = (FilterService);

/***/ }),

/***/ "./src/main/FormService.js":
/*!*********************************!*\
  !*** ./src/main/FormService.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config.js */ "./src/config.js");
/* harmony import */ var _utils_validator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/validator.js */ "./src/main/utils/validator.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var _CONFIG$selectors = _config_js__WEBPACK_IMPORTED_MODULE_0__["default"].selectors,
    cart = _CONFIG$selectors.cart,
    nav = _CONFIG$selectors.nav,
    forms = _CONFIG$selectors.forms;

var FormService =
/*#__PURE__*/
function () {
  function FormService(router, auth) {
    _classCallCheck(this, FormService);

    this.router = router;
    this.signInForm = null;
    this.signUpForm = null;
    this.validationErrors = {};
    this.auth = auth;
  }

  _createClass(FormService, [{
    key: "initAuthForms",
    value: function initAuthForms() {
      var _this = this;

      this.initSignInForm();
      this.initSignUpForm();
      this.triggerOnInputChangeValidation();
      this.auth.init();
      this.auth.signUserIn();
      var logOutBtn = document.querySelector(nav.logout);
      logOutBtn.addEventListener('click', function () {
        _this.auth.signUserOut();
      });
      var orderBtn = document.querySelector(cart.buy);
      orderBtn.addEventListener('click', function () {
        if (_this.auth.isLoggedIn) {
          _this.auth.processOrderRequest();
        } else {
          window.history.pushState(null, null, '/login');

          _this.router.renderRouteContent(window.location.pathname);
        }
      });
    }
  }, {
    key: "initSignInForm",
    value: function initSignInForm() {
      var _this2 = this;

      this.signInForm = document.getElementById(forms.signIn);
      this.signInForm.addEventListener('submit', function (e) {
        e.preventDefault();
        _this2.auth.authErrors.textContent = '';

        var data = _this2.getFormData(e.target);

        if (!Object.keys(_this2.validationErrors).length) {
          _this2.auth.processSignInRequest(data);
        }
      });
    }
  }, {
    key: "initSignUpForm",
    value: function initSignUpForm() {
      var _this3 = this;

      this.signUpForm = document.getElementById(forms.signUp);
      this.signUpForm.addEventListener('submit', function (e) {
        e.preventDefault();
        _this3.auth.authErrors.textContent = '';

        var data = _this3.getFormData(e.target);

        if (!Object.keys(_this3.validationErrors).length) {
          _this3.auth.processSignUpRequest(data);
        }
      });
    }
  }, {
    key: "validateInputField",
    value: function validateInputField(field) {
      var activeForm = field.parentElement;
      var name = field.name,
          value = field.value;
      var validationResult = Object(_utils_validator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(name, value, _config_js__WEBPACK_IMPORTED_MODULE_0__["default"].validationRules[name]);
      this.displayErrors(activeForm, name, validationResult[name]);
      this.updateValidationErrors(validationResult, name);
    }
  }, {
    key: "updateValidationErrors",
    value: function updateValidationErrors(validationResult, fieldName) {
      if (!Object.keys(validationResult).length) {
        delete this.validationErrors[fieldName];
      } else {
        this.validationErrors = Object.assign(this.validationErrors, validationResult);
      }
    }
  }, {
    key: "displayErrors",
    value: function displayErrors(activeForm, name, errors) {
      var errorField = activeForm.querySelector(".".concat(name, "-error"));

      if (errors) {
        errorField.textContent = errors.reduce(function (errorString, message) {
          errorString += "".concat(message, " ");
          return errorString;
        }, '');
      } else {
        errorField.textContent = '';
      }
    }
  }, {
    key: "triggerOnInputChangeValidation",
    value: function triggerOnInputChangeValidation() {
      var _this4 = this;

      this.signInForm.addEventListener('keyup', function (e) {
        _this4.validateInputField(e.target);
      });
      this.signUpForm.addEventListener('keyup', function (e) {
        _this4.validateInputField(e.target);
      });
    }
  }, {
    key: "getFormData",
    value: function getFormData(form) {
      var _this5 = this;

      var authData = {};
      var inputs = form.getElementsByTagName('input');
      Array.from(inputs).forEach(function (input) {
        _this5.validateInputField(input);

        var name = input.name,
            value = input.value;
        authData[name] = value;
      });
      return authData;
    }
  }]);

  return FormService;
}();

/* harmony default export */ __webpack_exports__["default"] = (FormService);

/***/ }),

/***/ "./src/main/Observable.js":
/*!********************************!*\
  !*** ./src/main/Observable.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Observable =
/*#__PURE__*/
function () {
  function Observable() {
    _classCallCheck(this, Observable);

    this.subscribers = [];
  }

  _createClass(Observable, [{
    key: "subscribe",
    value: function subscribe(fn) {
      this.subscribers.push(fn);
    }
  }, {
    key: "next",
    value: function next(data) {
      this.subscribers.forEach(function (subscribedFn) {
        subscribedFn(data);
      });
    }
  }]);

  return Observable;
}();

/* harmony default export */ __webpack_exports__["default"] = (Observable);

/***/ }),

/***/ "./src/main/Renderer.js":
/*!******************************!*\
  !*** ./src/main/Renderer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config.js */ "./src/config.js");
/* harmony import */ var _components_layoutComponents_navbar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layoutComponents/navbar.js */ "./src/components/layoutComponents/navbar.js");
/* harmony import */ var _components_homePageComponents_homepage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/homePageComponents/homepage.js */ "./src/components/homePageComponents/homepage.js");
/* harmony import */ var _components_catalogueComponents_catalogue_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/catalogueComponents/catalogue.js */ "./src/components/catalogueComponents/catalogue.js");
/* harmony import */ var _components_catalogueComponents_filters_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/catalogueComponents/filters.js */ "./src/components/catalogueComponents/filters.js");
/* harmony import */ var _components_cartComponents_cart_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/cartComponents/cart.js */ "./src/components/cartComponents/cart.js");
/* harmony import */ var _components_cartComponents_order_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/cartComponents/order.js */ "./src/components/cartComponents/order.js");
/* harmony import */ var _components_singlePageComponents_singlePage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/singlePageComponents/singlePage */ "./src/components/singlePageComponents/singlePage.js");
/* harmony import */ var _components_authComponents_login_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/authComponents/login.js */ "./src/components/authComponents/login.js");
/* harmony import */ var _components_aboutComponents_aboutPage_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/aboutComponents/aboutPage.js */ "./src/components/aboutComponents/aboutPage.js");
/* harmony import */ var _components_errorComponents_errorPage_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/errorComponents/errorPage.js */ "./src/components/errorComponents/errorPage.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }












var catalogue = _config_js__WEBPACK_IMPORTED_MODULE_0__["default"].selectors.catalogue;

var Renderer =
/*#__PURE__*/
function () {
  function Renderer(router, checkboxService, cartService, cartObserver) {
    _classCallCheck(this, Renderer);

    this.appContainer = document.getElementById('appContent-wrapper');
    this.router = router;
    this.checkboxService = checkboxService;
    this.cartService = cartService;
    this.cartObserver = cartObserver;
  }

  _createClass(Renderer, [{
    key: "initApp",
    value: function initApp(data) {
      Object(_components_homePageComponents_homepage_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.router.renderRouteContent.bind(this.router));
      Object(_components_aboutComponents_aboutPage_js__WEBPACK_IMPORTED_MODULE_9__["default"])();
      Object(_components_layoutComponents_navbar_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this.router.renderRouteContent.bind(this.router));
      Object(_components_catalogueComponents_catalogue_js__WEBPACK_IMPORTED_MODULE_3__["default"])(data, this.router.renderRouteContent.bind(this.router));
      this.renderCart(data);
      this.renderFilters(data);
      Object(_components_cartComponents_order_js__WEBPACK_IMPORTED_MODULE_6__["default"])();
      Object(_components_authComponents_login_js__WEBPACK_IMPORTED_MODULE_8__["default"])();
      Object(_components_errorComponents_errorPage_js__WEBPACK_IMPORTED_MODULE_10__["default"])();
      this.appContainer.style.display = 'block';
    }
  }, {
    key: "renderCart",
    value: function renderCart(data) {
      var cart = new _components_cartComponents_cart_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
      cart.init(this.cartService.productsInCart, data);
    }
  }, {
    key: "renderFilters",
    value: function renderFilters(data) {
      var filters = new _components_catalogueComponents_filters_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
      filters.drawFilters(data);
    }
  }, {
    key: "renderSinglePage",
    value: function renderSinglePage(data) {
      var _this = this;

      var singlePage = new _components_singlePageComponents_singlePage__WEBPACK_IMPORTED_MODULE_7__["default"]();
      singlePage.drawSinglePage(data);
      var addBtn = document.querySelector('.singlePage__item_add');
      addBtn.addEventListener('click', function () {
        var itemId = window.location.pathname.split('/product/')[1];

        _this.cartService.addProductToCart(itemId);
      });
    }
  }, {
    key: "displayPageContent",
    value: function displayPageContent(contentId) {
      var appContentElements = Array.from(this.appContainer.children);

      _toConsumableArray(appContentElements).forEach(function (div) {
        div.style.display = 'none';
      });

      var pageContent = document.getElementById(contentId);
      pageContent.style.display = 'block';
    }
  }, {
    key: "renderPageContent",
    value: function renderPageContent(contentId, data) {
      this.displayPageContent(contentId);

      if (!window.location.search) {
        if (contentId === 'js-catalogue-page' && Object.keys(this.checkboxService.filters).length) {
          window.history.pushState(null, null, this.checkboxService.createQuery());
        }
      }

      if (window.location.pathname.includes('product')) {
        this.displaySinglePageContent(data);
      }

      if (window.location.search && window.location.pathname.includes('catalogue')) {
        this.displayFilteredContent(data);
      } else {
        var productCards = Array.from(document.querySelectorAll(catalogue.item));
        productCards.forEach(function (productCard) {
          productCard.style.display = 'flex';
        });
      }
    }
  }, {
    key: "displayFilteredContent",
    value: function displayFilteredContent(data) {
      var filters = this.checkboxService.getFilters();
      var productCards = Array.from(document.querySelectorAll(catalogue.item));

      _toConsumableArray(data).forEach(function (product) {
        var isFound = Object.keys(filters).every(function (key) {
          if (key === 'price') {
            return Number(filters[key]) >= Number(product[key]);
          }

          return filters[key].includes(String(product[key]));
        });
        var card = productCards.find(function (productCard) {
          return Number(productCard.dataset.id) === Number(product.id);
        });
        card.style.display = isFound ? 'flex' : 'none';
      });
    }
  }, {
    key: "displaySinglePageContent",
    value: function displaySinglePageContent(data) {
      var productId = window.location.pathname.split('product/')[1];
      var product = data.find(function (item) {
        return Number(item.id) === Number(productId);
      });

      if (product) {
        this.renderSinglePage(product);
      } else {
        window.history.pushState(null, null, '/404');
        this.router.renderRouteContent(window.location.pathname);
      }
    }
  }]);

  return Renderer;
}();

/* harmony default export */ __webpack_exports__["default"] = (Renderer);

/***/ }),

/***/ "./src/main/Router.js":
/*!****************************!*\
  !*** ./src/main/Router.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Router =
/*#__PURE__*/
function () {
  function Router() {
    var _this = this;

    _classCallCheck(this, Router);

    this.routes = {};
    window.addEventListener('popstate', function () {
      _this.renderRouteContent(window.location.pathname);
    });
  }

  _createClass(Router, [{
    key: "createNewRoute",
    value: function createNewRoute(pathName, callback) {
      if (!pathName || typeof pathName !== 'string') {
        throw new Error('Valid path required');
      }

      if (!callback || typeof callback !== 'function') {
        throw new Error('Callback required');
      }

      if (Object.prototype.hasOwnProperty.call(this.routes, pathName)) {
        throw new Error('Route with this name already exists');
      }

      this.routes[pathName] = callback;
    }
  }, {
    key: "renderRouteContent",
    value: function renderRouteContent(url) {
      var pathName = url.split('/')[1] || '/';

      if (Object.prototype.hasOwnProperty.call(this.routes, pathName)) {
        this.routes[pathName]();
      } else {
        this.routes['404']();
      }
    }
  }]);

  return Router;
}();

/* harmony default export */ __webpack_exports__["default"] = (Router);

/***/ }),

/***/ "./src/main/utils/makeRequest.js":
/*!***************************************!*\
  !*** ./src/main/utils/makeRequest.js ***!
  \***************************************/
/*! exports provided: makeRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeRequest", function() { return makeRequest; });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config.js */ "./src/config.js");

var makeRequest = function makeRequest(path, requestType) {
  var dataObj = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var config = {
    method: requestType,
    headers: {
      'Content-Type': 'application/json'
    }
  };

  if (Object.keys(dataObj).length) {
    config.body = JSON.stringify(dataObj);
  }

  return fetch("".concat(_config_js__WEBPACK_IMPORTED_MODULE_0__["default"].api, "/").concat(path), config);
};

/***/ }),

/***/ "./src/main/utils/validator.js":
/*!*************************************!*\
  !*** ./src/main/utils/validator.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable max-len */

/* eslint-disable no-unused-expressions */
// eslint-disable-next-line no-control-regex
var EMAIL_REGEX = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

function validate(fieldName, fieldValue) {
  var rules = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};
  var validators = {
    minLen: function minLen(val, min) {
      return val.length >= min;
    },
    maxLen: function maxLen(val, max) {
      return val.length <= max;
    },
    onlyNumbersAndLetters: function onlyNumbersAndLetters(val) {
      return /^[A-Za-z0-9]+$/.test(val);
    },
    isValidEmail: function isValidEmail(val) {
      return EMAIL_REGEX.test(val);
    },
    isNotEmpty: function isNotEmpty(val) {
      return val.trim().length;
    }
  };
  var messages = {
    minLen: function minLen(field, val) {
      return "".concat(field, " must contain at least ").concat(val, " characters");
    },
    maxLen: function maxLen(field, val) {
      return "".concat(field, " must contain ").concat(val, " characters  at most");
    },
    onlyNumbersAndLetters: function onlyNumbersAndLetters(field) {
      return "".concat(field, " must include only numbers and letters");
    },
    isValidEmail: function isValidEmail(field) {
      return "".concat(field, " should be valid");
    },
    isNotEmpty: function isNotEmpty(field) {
      return "".concat(field, " mustn't be empty");
    }
  };
  var errors = {};

  for (var rule in rules) {
    if (Object.prototype.hasOwnProperty.call(validators, rule)) {
      var result = validators[rule](fieldValue, rules[rule]);

      if (!result) {
        var errorMessage = messages[rule](fieldName, rules[rule]);
        callback(errorMessage);
        !Object.prototype.hasOwnProperty.call(errors, fieldName) ? errors[fieldName] = [errorMessage] : errors[fieldName].push(errorMessage);
      }
    }
  }

  return errors;
}

/* harmony default export */ __webpack_exports__["default"] = (validate);

/***/ }),

/***/ 0:
/*!***************************************************!*\
  !*** multi webpack/hot/dev-server ./src/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! webpack/hot/dev-server */"./node_modules/webpack/hot/dev-server.js");
module.exports = __webpack_require__(/*! ./src/index.js */"./src/index.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9hc3NldHMvc3R5bGVzL3Njc3Mvc3R5bGVzLnNjc3M/ZTlmMyIsIndlYnBhY2s6Ly8vLi9kaXN0L2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9hc3NldHMvc3R5bGVzL3Njc3Mvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9ob3QvZGV2LXNlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hYm91dENvbXBvbmVudHMvYWJvdXRQYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2F1dGhDb21wb25lbnRzL2xvZ2luLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhcnRDb21wb25lbnRzL2NhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2FydENvbXBvbmVudHMvb3JkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2F0YWxvZ3VlQ29tcG9uZW50cy9jYXRhbG9ndWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2F0YWxvZ3VlQ29tcG9uZW50cy9maWx0ZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Vycm9yQ29tcG9uZW50cy9lcnJvclBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaG9tZVBhZ2VDb21wb25lbnRzL2hvbWVwYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dENvbXBvbmVudHMvbmF2YmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NpbmdsZVBhZ2VDb21wb25lbnRzL3NpbmdsZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGVtcGxhdGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL0F1dGhTZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL0NhcnRPYnNldmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL0NhcnRTZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL0ZpbHRlclNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vRm9ybVNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vT2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9SZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9Sb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vdXRpbHMvbWFrZVJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vdXRpbHMvdmFsaWRhdG9yLmpzIl0sIm5hbWVzIjpbImNvbnRlbnRJZCIsIkNPTkZJRyIsInJvdXRlcyIsImFib3V0UGFnZSIsInJlbmRlckFib3V0UGFnZSIsImFib3V0UGFnZVdyYXBwZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiQUJPVVRfUEFHRV9URU1QTEFURSIsImF1dGhQYWdlIiwiaW5pdEF1dGhGb3JtcyIsImZvcm1Db250YWluZXIiLCJmb3JtTGlua3MiLCJxdWVyeVNlbGVjdG9yIiwiZm9ybXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJmb3JtSWQiLCJ0YXJnZXQiLCJpZCIsInNwbGl0IiwiZm9yRWFjaCIsImZvcm0iLCJzdHlsZSIsImRpc3BsYXkiLCJyZW5kZXJBdXRoRm9ybXMiLCJhdXRoRm9ybXNDb250YWluZXIiLCJGT1JNX1RFTVBMQVRFIiwiY2FydCIsInNlbGVjdG9ycyIsIkNhcnQiLCJjYXJ0UGFnZUNvbnRlbnQiLCJjb250ZW50IiwiY2FydFdyYXBwZXIiLCJ3cmFwcGVyIiwiaW5zdGFuY2UiLCJkYXRhIiwicHJvZHVjdHMiLCJyZXNldENhcnQiLCJPYmplY3QiLCJrZXlzIiwibWFrZUNhcnRJdGVtQ2FyZCIsImFwcGVuZENoaWxkIiwicHJvZHVjdElkIiwidmFsdWUiLCJwcm9kdWN0IiwiZmluZCIsIml0ZW0iLCJTdHJpbmciLCJudW1iZXJBdmFpbGFibGUiLCJpbWFnZSIsIm5hbWUiLCJwcmljZSIsIkNBUlRfSVRFTV9URU1QTEFURSIsImNhcnRJdGVtIiwicmVtb3ZlIiwicmVuZGVyT3JkZXJDYXJkIiwib3JkZXJDYXJkQ29udGFpbmVyIiwib3JkZXIiLCJDQVJEX09SREVSX1RFTVBMQVRFIiwiY2F0YWxvZ3VlIiwicm91dGUiLCJwcm9kdWN0UGFnZSIsInJlbmRlckNhdGFsb2d1ZUl0ZW0iLCJjYXRhbG9ndWVDb250YWluZXIiLCJjYXRhbG9ndWVJdGVtIiwiQ0FUQUxPR1VFX0lURU1fVEVNUExBVEUiLCJtYWtlQ2F0YWxvZ3VlSXRlbXNDbGlja2FibGUiLCJyZW5kZXIiLCJjYXRhbG9ndWVDYXJkcyIsImNhcmQiLCJjbGlja2FibGVBcmVhIiwiaW1nIiwiZGF0YXNldCIsIndpbmRvdyIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwicmVuZGVyQ2F0YWxvZ3VlIiwiZmlsdGVycyIsImZpbHRlciIsIkZpbHRlcnMiLCJmaWx0ZXJzQ29udGFuaW5lciIsImNoZWNrYm94ZXMiLCJkcmF3UHJpY2VJbnB1dFJhbmdlIiwiYnVpbGRDaGVja2JveGVzIiwiZHJhd0NoZWNrYm94ZXMiLCJkcmF3UmVzZXRCdXR0b24iLCJhbGxQcmljZXMiLCJtYXAiLCJwcmljZXMiLCJtaW4iLCJNYXRoIiwibWF4IiwiUFJJQ0VfSU5QVVRfVEVNUExBVEUiLCJmaWx0ZXJCYXNlIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwicHVzaCIsImJpbmQiLCJpbmNsdWRlcyIsImtleSIsImZpbHRlckdyb3VwIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImNvbnRhaW5lciIsInRvVXBwZXJDYXNlIiwiZmlsdGVyR3JvdXBDb250ZW50Iiwic29ydCIsImZpbHRlclZhbHVlIiwiQ0hFQ0tCT1hfVEVNUExBVEUiLCJpbml0RmlsdGVyR3JvdXBDb250ZW50IiwiZW50cmllcyIsImdyb3VwIiwibGFiZWwiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImVycm9yUGFnZSIsInJlbmRlckVycm9yUGFnZSIsImVycm9yUGFnZUNvbnRhaW5lciIsIkVSUk9SX1BBR0UiLCJob21lUGFnZSIsImhvbWUiLCJyZW5kZXJIb21lUGFnZSIsImhvbWVwYWdlIiwiSE9NRVBBR0VfVEVNUExBVEUiLCJpbml0U2VyaXZlVXJscyIsInJlbmRlckZuIiwic2VydmljZXNVcmxzIiwic2VydmljZXMiLCJ1cmwiLCJjbGFzc05hbWUiLCJpbml0TmF2YmFyIiwibmF2YmFyIiwiY2F0YWxvZ3VlUGFnZSIsImNhcnRQYWdlIiwicmVuZGVyTmF2YmFyIiwiTkFWQkFSX1RFTVBMQVRFIiwicGFnZSIsIlNpbmdsZVBhZ2UiLCJzaW5nbGVQYWdlQ29udGFpbmVyIiwicmVzZXRQYWdlIiwiU0lOR0xFX1BBR0VfVEVNUExBVEUiLCJwYWdlQ29udGVudCIsImZpbHRlck5hbWUiLCJicmFuZCIsIm1hbnVmYWN0dXJlciIsInZvbHVtZSIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcnkiLCJhcGkiLCJ2YWxpZGF0aW9uUnVsZXMiLCJtaW5MZW4iLCJtYXhMZW4iLCJvbmx5TnVtYmVyc0FuZExldHRlcnMiLCJpc05vdEVtcHR5IiwiZW1haWwiLCJpc1ZhbGlkRW1haWwiLCJwYXNzd29yZCIsInRvdGFsIiwiZGV0YWlscyIsInVzZXJJbmZvIiwidXNlckRhdGEiLCJvcmRlck1lc3NhZ2UiLCJpbnB1dCIsImNob29zZSIsInF1YW50aXR5IiwiYnV5IiwiYWRkIiwiY3VycmVudFByaWNlIiwiY2hlY2tib3giLCJyZXNldCIsIm5hdiIsImxvZ291dCIsImxvZ2luIiwiYXV0aCIsImVycm9yIiwic2lnbkluIiwic2lnblVwIiwiQXBwIiwicm91dGVyIiwiUm91dGVyIiwiZmlsdGVyU2VydmljZSIsIkZpbHRlclNlcnZpY2UiLCJjYXJ0U2VydmljZSIsIkNhcnRTZXJ2aWNlIiwiY2FydE9ic2VydmVyIiwiQ2FydE9ic2VydmVyIiwiYXV0aFNlcnZpY2UiLCJBdXRoU2VydmljZSIsImZvcm1TZXJ2aWNlIiwiRm9ybVNlcnZpY2UiLCJyZW5kZXJlciIsIlJlbmRlcmVyIiwic3Vic2NyaWJlIiwib25GaWx0ZXJDaGFuZ2UiLCJvbkNhcnRDaGFuZ2UiLCJpbml0IiwibWFrZVJlcXVlc3QiLCJ0aGVuIiwianNvbiIsImluaXRSb3V0ZXIiLCJpbml0QXBwIiwicmVuZGVyUm91dGVDb250ZW50IiwiaW5pdENhcnRJbnB1dEhhZGxlcnMiLCJpbml0T2JzZXJ2ZXIiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsImVudHJ5IiwiY3JlYXRlTmV3Um91dGUiLCJyZW5kZXJQYWdlQ29udGVudCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjYXJ0Um91dGUiLCJkZWNvZGVVUkkiLCJzZXRJdGVtIiwicmVuZGVyQ2FydCIsImFwcCIsInVzZXIiLCJpc0xvZ2dlZEluIiwiYXV0aEVycm9ycyIsIm9yZGVyTWVzc3NhZ2VzIiwiSlNPTiIsInBhcnNlIiwidG9nZ2xlQXV0aE9ubHlDb250ZW50IiwicmVtb3ZlSXRlbSIsInN0cmluZ2lmeSIsImxvZ091dEJ0biIsImxvZ2luTGluayIsInRleHRDb250ZW50IiwicmVzIiwiZm91bmRVc2VyIiwibG9nVXNlckluIiwiZXJyIiwic3RhdHVzIiwibGVuZ3RoIiwib3JkZXJEYXRhIiwiY2FyZHMiLCJkZWxldGVQcm9kdWN0RnJvbUNhcnQiLCJjYXJ0T3JkZXJDb250YWluZXIiLCJub2Rlc1RvT2JzZXJ2ZSIsImluaXRDYXJ0Q2FsY3VsYXRvciIsImNhbGN1bGF0ZVRvdGFsIiwiZGVsZXRlQnRucyIsImJ0biIsImRlbGV0ZUNhcmRPcmRlck5vdGUiLCJjYXJ0SXRlbXMiLCJwcmljZVRvdGFsIiwiQXJyYXkiLCJmcm9tIiwicmVkdWNlIiwidG90YWxTdW0iLCJjdXJyZW50SXRlbSIsImZsYWciLCJjaGVja2VkIiwicmVuZGVyQ2FydE9yZGVyRGV0YWlscyIsInRvRml4ZWQiLCJjYXJ0RGV0YWlscyIsImNoaWxkcmVuIiwiZm91bmQiLCJOdW1iZXIiLCJjYXJ0cyIsInByb2R1Y3RzSW5DYXJ0Iiwib2JzZXJ2YWJsZSIsIk9ic2VydmFibGUiLCJmbiIsIml0ZW1JZCIsImNsb3Nlc3QiLCJhZGRQcm9kdWN0VG9DYXJ0IiwiaW5pdFByb2R1Y3RDYXJ0IiwibmV4dCIsIml0ZW1Ub0RlbGV0ZSIsInVwZGF0ZUxvY2FsU3RvcmFnZSIsImluaXREZWxldGVCdXR0b25zIiwiaW5pdENhcnROdW1iZXJJbnB1dCIsImRlbGV0ZUJ1dHRvbnMiLCJidXR0b24iLCJudW1iZXJJbnB1dHMiLCJob21lUGFnZUZpbHRlcnMiLCJwcmljZUlucHV0IiwicmVzZXRGaWx0ZXJzQnRuIiwicmVzZXRGaWx0ZXJzIiwib25JbnB1dFJhbmdlQ2hhbmdlIiwiaGFuZGxlRmlsdGVyQ2hhbmdlIiwiY3VycmVudFZhbCIsIm9uQ2hlY2tCb3hDaGVja2VkIiwib25DaGVja0JveFVuQ2hlY2tlZCIsImluaXRGaWx0ZXJzIiwiZ2V0RmlsdGVycyIsImN1cnJlbnRGaWx0ZXIiLCJmaWx0ZXJzU3RyaW5nIiwic2VhcmNoIiwicmVwbGFjZSIsIkJvb2xlYW4iLCJmaWx0ZXJPYmplY3QiLCJjdXJyZW5GaWx0ZXJWYWx1ZSIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsInF1ZXJ5IiwiY3JlYXRlUXVlcnkiLCJxdWVyeVN0cmluZyIsInZhbHVlcyIsInF1ZXJ5U3RyaW5nRWxlbWVudCIsInNpZ25JbkZvcm0iLCJzaWduVXBGb3JtIiwidmFsaWRhdGlvbkVycm9ycyIsImluaXRTaWduSW5Gb3JtIiwiaW5pdFNpZ25VcEZvcm0iLCJ0cmlnZ2VyT25JbnB1dENoYW5nZVZhbGlkYXRpb24iLCJzaWduVXNlckluIiwic2lnblVzZXJPdXQiLCJvcmRlckJ0biIsInByb2Nlc3NPcmRlclJlcXVlc3QiLCJwcmV2ZW50RGVmYXVsdCIsImdldEZvcm1EYXRhIiwicHJvY2Vzc1NpZ25JblJlcXVlc3QiLCJwcm9jZXNzU2lnblVwUmVxdWVzdCIsImZpZWxkIiwiYWN0aXZlRm9ybSIsInBhcmVudEVsZW1lbnQiLCJ2YWxpZGF0aW9uUmVzdWx0IiwidmFsaWRhdGUiLCJkaXNwbGF5RXJyb3JzIiwidXBkYXRlVmFsaWRhdGlvbkVycm9ycyIsImZpZWxkTmFtZSIsImFzc2lnbiIsImVycm9ycyIsImVycm9yRmllbGQiLCJlcnJvclN0cmluZyIsInZhbGlkYXRlSW5wdXRGaWVsZCIsImF1dGhEYXRhIiwiaW5wdXRzIiwic3Vic2NyaWJlcnMiLCJzdWJzY3JpYmVkRm4iLCJjaGVja2JveFNlcnZpY2UiLCJhcHBDb250YWluZXIiLCJyZW5kZXJGaWx0ZXJzIiwiZHJhd0ZpbHRlcnMiLCJzaW5nbGVQYWdlIiwiZHJhd1NpbmdsZVBhZ2UiLCJhZGRCdG4iLCJhcHBDb250ZW50RWxlbWVudHMiLCJkaXYiLCJkaXNwbGF5UGFnZUNvbnRlbnQiLCJkaXNwbGF5U2luZ2xlUGFnZUNvbnRlbnQiLCJkaXNwbGF5RmlsdGVyZWRDb250ZW50IiwicHJvZHVjdENhcmRzIiwicHJvZHVjdENhcmQiLCJpc0ZvdW5kIiwiZXZlcnkiLCJyZW5kZXJTaW5nbGVQYWdlIiwicGF0aE5hbWUiLCJjYWxsYmFjayIsIkVycm9yIiwicGF0aCIsInJlcXVlc3RUeXBlIiwiZGF0YU9iaiIsImNvbmZpZyIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiZmV0Y2giLCJFTUFJTF9SRUdFWCIsImZpZWxkVmFsdWUiLCJydWxlcyIsInZhbGlkYXRvcnMiLCJ2YWwiLCJ0ZXN0IiwidHJpbSIsIm1lc3NhZ2VzIiwicnVsZSIsInJlc3VsdCIsImVycm9yTWVzc2FnZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLFVBQVUsbUJBQU8sQ0FBQyw0SkFBaUY7QUFDbkcsMEJBQTBCLG1CQUFPLENBQUMsc1BBQTRIOztBQUU5Sjs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7QUFJQSwwQjs7Ozs7Ozs7Ozs7QUNwQkEsa1dBQWtXLHM4Qjs7Ozs7Ozs7Ozs7QUNBbFc7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyw4R0FBeUQ7QUFDbkc7QUFDQTtBQUNBLGNBQWMsUUFBUyxTQUFTLHlCQUF5QiwwQkFBMEIsRUFBRSxvREFBb0QsZ0JBQWdCLGlCQUFpQixFQUFFLCtCQUErQixvQkFBb0IsRUFBRSxtQkFBbUIsZ0JBQWdCLEVBQUUsUUFBUSx1QkFB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QWhDLENBQXFDNlEsVUFBckMsRUFBaURLLElBQWpELENBQUosRUFBNEQ7QUFDMUQsVUFBTUMsTUFBTSxHQUFHTixVQUFVLENBQUNLLElBQUQsQ0FBVixDQUFpQlAsVUFBakIsRUFBNkJDLEtBQUssQ0FBQ00sSUFBRCxDQUFsQyxDQUFmOztBQUNBLFVBQUksQ0FBQ0MsTUFBTCxFQUFhO0FBQ1gsWUFBTUMsWUFBWSxHQUFHSCxRQUFRLENBQUNDLElBQUQsQ0FBUixDQUFlOUMsU0FBZixFQUEwQndDLEtBQUssQ0FBQ00sSUFBRCxDQUEvQixDQUFyQjtBQUNBbEIsZ0JBQVEsQ0FBQ29CLFlBQUQsQ0FBUjtBQUNBLFNBQUNoVixNQUFNLENBQUMwRCxTQUFQLENBQWlCQyxjQUFqQixDQUFnQ0MsSUFBaEMsQ0FBcUNzTyxNQUFyQyxFQUE2Q0YsU0FBN0MsQ0FBRCxHQUNJRSxNQUFNLENBQUNGLFNBQUQsQ0FBTixHQUFvQixDQUFDZ0QsWUFBRCxDQUR4QixHQUVJOUMsTUFBTSxDQUFDRixTQUFELENBQU4sQ0FBa0JuTyxJQUFsQixDQUF1Qm1SLFlBQXZCLENBRko7QUFHRDtBQUNGO0FBQ0Y7O0FBRUQsU0FBTzlDLE1BQVA7QUFDRDs7QUFFY0wsdUVBQWYsRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS0yIS4vc3R5bGVzLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjwhRE9DVFlQRSBodG1sPlxcbjxodG1sIGxhbmc9XFxcImVuXFxcIj5cXG48aGVhZD5cXG4gIDxtZXRhIGNoYXJzZXQ9XFxcIlVURi04XFxcIj5cXG4gIDxtZXRhIG5hbWU9XFxcInZpZXdwb3J0XFxcIiBjb250ZW50PVxcXCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXFxcIj5cXG4gIDx0aXRsZT5TUEEgcHJvamVjdDwvdGl0bGU+XFxuPC9oZWFkPlxcbjxib2R5PlxcbiAgPGhlYWRlcj5cXG4gICAgPG5hdiBjbGFzcz1cXFwibWFpbl9fbmF2XFxcIiBpZD1cXFwianMtbWFpbi1uYXZcXFwiPjwvbmF2PlxcbiAgPC9oZWFkZXI+XFxuXFxuICA8ZGl2IGlkPVxcXCJhcHBDb250ZW50LXdyYXBwZXJcXFwiIHN0eWxlPVxcXCJkaXNwbGF5OiBub25lO1xcXCI+XFxuXFxuICAgIDxkaXYgY2xhc3M9XFxcImhvbWVwYWdlLXdyYXBwZXJcXFwiIGlkPVxcXCJqcy1ob21lcGFnZVxcXCI+PC9kaXY+XFxuICBcXG4gICAgPGRpdiBjbGFzcz1cXFwicHJvZHVjdFBhZ2Utd3JhcHBlclxcXCIgaWQ9XFxcImpzLWNhdGFsb2d1ZS1wYWdlXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9kY3V0UGFnZV9fY29udGVudFxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2R1Y3RQYWdlX19maWx0ZXJcXFwiIGlkPVxcXCJqcy1jYXRhbG9ndWUtZmlsdGVyXFxcIj48L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvZHVjdFBhZ2VfX2NhdGFsb2d1ZVxcXCIgaWQ9XFxcImpzLWNhdGFsb2d1ZVxcXCI+PC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgXFxuICAgIDxkaXYgY2xhc3M9XFxcImFib3V0UGFnZS13cmFwcGVyXFxcIiBpZD1cXFwianMtYWJvdXQtcGFnZVxcXCI+PC9kaXY+XFxuICBcXG4gICAgPGRpdiBjbGFzcz1cXFwiY2FydFBhZ2Utd3JhcHBlclxcXCIgaWQ9XFxcImpzLWNhcnQtcGFnZVxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY2FydFBhZ2VfX2NvbnRlbnRcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FydFBhZ2VfX2NhcnRfb3JkZXJcXFwiPjwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FydFBhZ2VfX2NhcnRfd3JhcHBlclxcXCI+PC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgXFxuICAgIDxkaXYgY2xhc3M9XFxcImVycm9yUGFnZS13cmFwcGVyXFxcIiBpZD1cXFwianMtZXJyb3ItcGFnZVxcXCI+PC9kaXY+XFxuICBcXG4gICAgPGRpdiBjbGFzcz1cXFwic2luZ2xlUGFnZS13cmFwcGVyXFxcIiBpZD1cXFwianMtc2luZ2xlLXBhZ2VcXFwiPjwvZGl2PlxcblxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhdXRoUGFnZS13cmFwcGVyXFxcIiBpZD1cXFwianMtYXV0aC1wYWdlXFxcIj48L2Rpdj5cXG4gIFxcbiAgXFxuICA8L2Rpdj5cXG4gIDxzY3JpcHQgc3JjPVxcXCIvYnVuZGxlLmpzXFxcIj48L3NjcmlwdD5cXG48L2JvZHk+XFxuPC9ib2R5PlxcbjwvaHRtbD5cXG5cIjsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcXG4gICAgYmFja2dyb3VuZDogI2Y4ZjlmYjsgfVxcblxcbmh0bWwsIGJvZHksIHVsLCBvbCwgbGksIGZvcm0sIGZpZWxkc2V0LCBsZWdlbmQge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7IH1cXG5cXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwIHtcXG4gICAgbWFyZ2luLXRvcDogMDsgfVxcblxcbmZpZWxkc2V0LCBpbWcge1xcbiAgICBib3JkZXI6IDA7IH1cXG5cXG5saSB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7IH1cXG5cXG4ubGVhZF9fYmFubmVyLFxcbi5zZWNvbmRfX2Jhbm5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogIzIzMjAyMDsgfVxcbiAgICAubGVhZF9fYmFubmVyIC5iYW5uZXJfX2NvbnRlbnQsXFxuICAgIC5zZWNvbmRfX2Jhbm5lciAuYmFubmVyX19jb250ZW50IHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGJvdHRvbTogNTBweDtcXG4gICAgICAgIHdpZHRoOiAxMDAlOyB9XFxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAgICAgICAgIC5sZWFkX19iYW5uZXIgLmJhbm5lcl9fY29udGVudCxcXG4gICAgICAgICAgICAuc2Vjb25kX19iYW5uZXIgLmJhbm5lcl9fY29udGVudCB7XFxuICAgICAgICAgICAgICAgIHRvcDogNTAlOyB9IH1cXG4gICAgLmxlYWRfX2Jhbm5lciBsaSxcXG4gICAgLnNlY29uZF9fYmFubmVyIGxpIHtcXG4gICAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xcbiAgICAgICAgZm9udC1zaXplOiAxcmVtOyB9XFxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAgICAgICAgIC5sZWFkX19iYW5uZXIgbGksXFxuICAgICAgICAgICAgLnNlY29uZF9fYmFubmVyIGxpIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTsgfSB9XFxuICAgIC5sZWFkX19iYW5uZXIgaW1nLFxcbiAgICAuc2Vjb25kX19iYW5uZXIgaW1nIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgZmlsdGVyOiBjb250cmFzdCg5MCUpOyB9XFxuICAgIC5sZWFkX19iYW5uZXIgc3BhbixcXG4gICAgLnNlY29uZF9fYmFubmVyIHNwYW4ge1xcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4OyB9XFxuICAgIC5sZWFkX19iYW5uZXIgc3Bhbi50aXRsZSxcXG4gICAgLnNlY29uZF9fYmFubmVyIHNwYW4udGl0bGUge1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4OyB9XFxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAgICAgICAgIC5sZWFkX19iYW5uZXIgc3Bhbi50aXRsZSxcXG4gICAgICAgICAgICAuc2Vjb25kX19iYW5uZXIgc3Bhbi50aXRsZSB7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDsgfSB9XFxuXFxuLnNlY29uZF9fYmFubmVyIHtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cXG5cXG5zZWN0aW9uIHtcXG4gICAgbWFyZ2luOiAxMHB4IDBweDsgfVxcblxcbi5ob21lUGFnZV9fc2VydmljZXMgdWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgICAgIC5ob21lUGFnZV9fc2VydmljZXMgdWwge1xcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMHB4OyB9IH1cXG5cXG4uaG9tZVBhZ2VfX3NlcnZpY2VzIGxpIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmbGV4OiAwIDAgMzMuMzMzMzMlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG5cXG4uaG9tZVBhZ2VfX3NlcnZpY2VzIGltZyB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG9wYWNpdHk6IDAuNDtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7IH1cXG5cXG4uaG9tZVBhZ2VfX3NlcnZpY2VzIHAge1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBjb2xvcjogIzNBNDQ1NDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG4gICAgLmhvbWVQYWdlX19zZXJ2aWNlcyBwOmhvdmVyIHtcXG4gICAgICAgIGNvbG9yOiAjOUEyNzVBOyB9XFxuXFxuLmhvbWVQYWdlX19wcm9kdWN0cyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gICAgLmhvbWVQYWdlX19wcm9kdWN0cyB1bCB7XFxuICAgICAgICBwYWRkaW5nOiAwcHg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOyB9XFxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAgICAgICAgIC5ob21lUGFnZV9fcHJvZHVjdHMgdWwge1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDsgfSB9XFxuICAgIC5ob21lUGFnZV9fcHJvZHVjdHMgaW1nIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIHdpZHRoOiBhdXRvO1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcXG4gICAgICAgIG1heC1oZWlnaHQ6IDIwMHB4OyB9XFxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAgICAgICAgIC5ob21lUGFnZV9fcHJvZHVjdHMgaW1nIHtcXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDBweDtcXG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwcHg7IH0gfVxcbiAgICAuaG9tZVBhZ2VfX3Byb2R1Y3RzIGxpIHtcXG4gICAgICAgIGZsZXg6IDAgMCAzMCU7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIG1hcmdpbjogMiU7IH1cXG5cXG5zZWN0aW9uIGgxIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGNvbG9yOiAjNTM2ODdFOyB9XFxuXFxuLnByb2R1Y3RQYWdlLXdyYXBwZXIge1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAwcHggMTBweDsgfVxcblxcbi5wcm9kY3V0UGFnZV9fY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOyB9XFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgICAgICAucHJvZGN1dFBhZ2VfX2NvbnRlbnQge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9IH1cXG5cXG4ucHJvZHVjdFBhZ2VfX2NhdGFsb2d1ZSB7XFxuICAgIGZsZXg6IDEgMCA2OCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0OyB9XFxuXFxuLnByb2R1Y3RQYWdlX19maWx0ZXIge1xcbiAgICBmbGV4OiAwIDAgMjAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgd2lkdGg6IGF1dG87IH1cXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgICAgIC5wcm9kdWN0UGFnZV9fZmlsdGVyIHtcXG4gICAgICAgICAgICBmbGV4OiAwIDAgOTUlOyB9IH1cXG5cXG4uY2F0YWxvZ3VlX19pdGVtIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGZsZXg6IDAgMCAyMTBweDtcXG4gICAgYm94LXNoYWRvdzogOXB4IDExcHggMjBweCAtN3B4ICNDMkIyQjQ7IH1cXG4gICAgLmNhdGFsb2d1ZV9faXRlbSBpbWcge1xcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICAgICAgbWFyZ2luOiAxMHB4IGF1dG87XFxuICAgICAgICBoZWlnaHQ6IDE2MHB4O1xcbiAgICAgICAgcGFkZGluZy10b3A6IDMlOyB9XFxuICAgIC5jYXRhbG9ndWVfX2l0ZW0gaDUge1xcbiAgICAgICAgY29sb3I6ICMyMzIwMjA7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtOyB9XFxuICAgIC5jYXRhbG9ndWVfX2l0ZW0gcCB7XFxuICAgICAgICBjb2xvcjogIzlBMjc1QTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICAgICAgbWFyZ2luOiAwOyB9XFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgICAgICAuY2F0YWxvZ3VlX19pdGVtIHtcXG4gICAgICAgICAgICBmbGV4OiAxMDAgOTUlO1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlOyB9IH1cXG5cXG4uY2F0YWxvZ3VlX19pdGVtX2ltZ3dyYXAge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyB9XFxuXFxuLmNhdGFsb2d1ZV9faXRlbV9pbmZvIHtcXG4gICAgbWFyZ2luLXRvcDogYXV0bzsgfVxcblxcbi5maWx0ZXJfX2dyb3VwX2xhYmVsLFxcbi5jYXJ0X19kZXRhaWxzX2xhYmVsIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0E0NDU0O1xcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luOiA1cHggMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVEREREO1xcbiAgICBjb2xvcjogIzIzMjAyMDsgfVxcbiAgICAuZmlsdGVyX19ncm91cF9sYWJlbDpob3ZlcixcXG4gICAgLmNhcnRfX2RldGFpbHNfbGFiZWw6aG92ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRmNWM3MjsgfVxcblxcbi5maWx0ZXJfX2dyb3VwX2NvbnRlbnQge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07IH1cXG5cXG4uZmlsdGVyX19ncm91cF9jaGVja2JveCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyB9XFxuXFxuLmNhcnRQYWdlLXdyYXBwZXIge1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIHBhZGRpbmc6IDBweCAxMHB4OyB9XFxuXFxuLmNhcnRQYWdlX19jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW46IDBweCBhdXRvOyB9XFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgICAgICAuY2FydFBhZ2VfX2NvbnRlbnQge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgICB3aWR0aDogOTUlO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9IH1cXG5cXG4uY2FydFBhZ2VfX2NhcnRfb3JkZXIge1xcbiAgICBmbGV4OiAwIDAgMzAlO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICNGNUREREQ7XFxuICAgIHBhZGRpbmc6IDVweDsgfVxcbiAgICAuY2FydFBhZ2VfX2NhcnRfb3JkZXIgaDMge1xcbiAgICAgICAgcGFkZGluZzogNXB4IDBweDtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRjVEREREOyB9XFxuICAgIC5jYXJ0UGFnZV9fY2FydF9vcmRlciBkaXYge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7IH1cXG4gICAgICAgIC5jYXJ0UGFnZV9fY2FydF9vcmRlciBkaXYgLmNhcnRQYWdlX190b3RhbCB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICAgICAgICAgIGNvbG9yOiAjOUEyNzVBO1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuICAgIC5jYXJ0UGFnZV9fY2FydF9vcmRlciBidXR0b24ge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICB3aWR0aDogMzIlO1xcbiAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG87IH1cXG5cXG4uY2FydFBhZ2VfX2NhcnRfd3JhcHBlciB7XFxuICAgIGZsZXg6IDAgMCA2NSU7IH1cXG5cXG4uY2FydF9faXRlbV93cmFwcGVyIHtcXG4gICAgZmxleDogMCAwIDkwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAyJTtcXG4gICAgYm94LXNoYWRvdzogOXB4IDExcHggMjBweCAtN3B4ICNDMkIyQjQ7IH1cXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgICAgIC5jYXJ0X19pdGVtX3dyYXBwZXIge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvOyB9IH1cXG4gICAgLmNhcnRfX2l0ZW1fd3JhcHBlciBmb3JtIHtcXG4gICAgICAgIGZsZXg6IDAgMCAzMDBweDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBoZWlnaHQ6IGF1dG87IH1cXG4gICAgICAgIC5jYXJ0X19pdGVtX3dyYXBwZXIgZm9ybSBpbnB1dCB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgIG1heC13aWR0aDogMzAlOyB9XFxuICAgICAgICAuY2FydF9faXRlbV93cmFwcGVyIGZvcm0gaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgyKTsgfVxcblxcbi5jYXJ0X19pdGVtX2RldGFpbHMge1xcbiAgICBmbGV4OiAwIDAgMzAwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDsgfVxcbiAgICAuY2FydF9faXRlbV9kZXRhaWxzIGltZyB7XFxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgICAgICBtYXJnaW46IDEwcHggYXV0bztcXG4gICAgICAgIGhlaWdodDogMTYwcHg7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMyU7IH1cXG4gICAgLmNhcnRfX2l0ZW1fZGV0YWlscyBoNSB7XFxuICAgICAgICBjb2xvcjogIzIzMjAyMDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07IH1cXG4gICAgLmNhcnRfX2l0ZW1fZGV0YWlscyBwIHtcXG4gICAgICAgIGNvbG9yOiAjOUEyNzVBO1xcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgICAgICBtYXJnaW46IDA7IH1cXG5cXG4uc2luZ2xlUGFnZS13cmFwcGVyIHtcXG4gICAgcGFkZGluZzogMTBweDsgfVxcblxcbi5zaW5nbGVQYWdlX19jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7IH1cXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgICAgIC5zaW5nbGVQYWdlX19jb250ZW50IHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jazsgfSB9XFxuXFxuLnNpbmdsZVBhZ2VfX2NvbnRlbnRfbWFpbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZmxleDogMCAwIDQwJSB4O1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0OyB9XFxuICAgIC5zaW5nbGVQYWdlX19jb250ZW50X21haW4gaW1nIHtcXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xcbiAgICAgICAgaGVpZ2h0OiAxNjBweDtcXG4gICAgICAgIHBhZGRpbmctdG9wOiAzJTsgfVxcbiAgICAuc2luZ2xlUGFnZV9fY29udGVudF9tYWluIGg1IHtcXG4gICAgICAgIGNvbG9yOiAjMjMyMDIwO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICBmb250LXNpemU6IDAuOHJlbTsgfVxcbiAgICAuc2luZ2xlUGFnZV9fY29udGVudF9tYWluIHAge1xcbiAgICAgICAgY29sb3I6ICM5QTI3NUE7XFxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgICAgIG1hcmdpbjogMDsgfVxcblxcbi5zaW5nbGVQYWdlX2NvbnRlbnRfaW5mbyB7XFxuICAgIGZsZXg6IDAgMSA1MCU7XFxuICAgIHBhZGRpbmc6IDEwcHg7IH1cXG5cXG4uYXV0aFBhZ2Utd3JhcHBlciB7XFxuICAgIHBhZGRpbmctdG9wOiA1MHB4OyB9XFxuXFxuLmF1dGhfX2Zvcm1fd3JhcHBlciB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1hcmdpbjogMHB4IGF1dG87XFxuICAgIGJveC1zaGFkb3c6IDlweCAxMXB4IDIwcHggLTdweCAjQzJCMkI0OyB9XFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgICAgICAuYXV0aF9fZm9ybV93cmFwcGVyIHtcXG4gICAgICAgICAgICB3aWR0aDogODUlOyB9IH1cXG4gICAgLmF1dGhfX2Zvcm1fd3JhcHBlciBwIHtcXG4gICAgICAgIGNvbG9yOiAjOUEyNzVBO1xcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG4gICAgLmF1dGhfX2Zvcm1fd3JhcHBlciB1bCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAgIC5hdXRoX19mb3JtX3dyYXBwZXIgbGkge1xcbiAgICAgICAgZmxleDogMSAxIGF1dG87XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0E0NDU0O1xcbiAgICAgICAgcGFkZGluZzogNXB4IDE1cHg7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIG1hcmdpbjogNXB4IDBweDsgfVxcbiAgICAgICAgLmF1dGhfX2Zvcm1fd3JhcHBlciBsaTpob3ZlciB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRmNWM3MjsgfVxcbiAgICAuYXV0aF9fZm9ybV93cmFwcGVyIGZvcm0ge1xcbiAgICAgICAgcGFkZGluZzogMjBweCA0MHB4OyB9XFxuICAgICAgICAuYXV0aF9fZm9ybV93cmFwcGVyIGZvcm0gbGFiZWwsIC5hdXRoX19mb3JtX3dyYXBwZXIgZm9ybSBpbnB1dCwgLmF1dGhfX2Zvcm1fd3JhcHBlciBmb3JtIGJ1dHRvbiB7XFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgcGFkZGluZzogN3B4IDBweCA3cHggMTBweDtcXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgICAgICAgbWFyZ2luOiA1cHggYXV0bzsgfVxcbiAgICAgICAgLmF1dGhfX2Zvcm1fd3JhcHBlciBmb3JtIGxhYmVsIHtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDsgfVxcbiAgICAgICAgLmF1dGhfX2Zvcm1fd3JhcHBlciBmb3JtIGlucHV0OmZvY3VzIHtcXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XFxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzUzNjg3RTsgfVxcbiAgICAgICAgLmF1dGhfX2Zvcm1fd3JhcHBlciBmb3JtIGJ1dHRvbiB7XFxuICAgICAgICAgICAgbWFyZ2luOiA1cHggYXV0bztcXG4gICAgICAgICAgICB3aWR0aDogNDAlOyB9XFxuXFxuLmF1dGhfX2Zvcm1fZXJyb3Ige1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4uYWJvdXRQYWdlX19jb250ZW50IHtcXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTsgfVxcbiAgICAuYWJvdXRQYWdlX19jb250ZW50IGRpdiB7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4OyB9XFxuXFxuLmFib3V0UGFnZV9fYXJ0aWNsZXMge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAxMHB4OyB9XFxuICAgIC5hYm91dFBhZ2VfX2FydGljbGVzIHVsIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwOyB9XFxuICAgIC5hYm91dFBhZ2VfX2FydGljbGVzIGxpIHtcXG4gICAgICAgIG1hcmdpbjogNXB4O1xcbiAgICAgICAgZmxleDogMCAwIDMwJTtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7IH1cXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgICAgICAgICAgLmFib3V0UGFnZV9fYXJ0aWNsZXMgbGkge1xcbiAgICAgICAgICAgICAgICBmbGV4OiAxIDAgMTAwJTsgfSB9XFxuICAgIC5hYm91dFBhZ2VfX2FydGljbGVzIGltZyB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIG1heC13aWR0aDogMjAwcHg7XFxuICAgICAgICBtYXgtaGVpZ2h0OiAyMDBweDsgfVxcbiAgICAuYWJvdXRQYWdlX19hcnRpY2xlcyBkaXYge1xcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTsgfVxcbiAgICAuYWJvdXRQYWdlX19hcnRpY2xlcyBoNSB7XFxuICAgICAgICBjb2xvcjogIzlBMjc1QTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7IH1cXG5cXG5idXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiAjM0E0NDU0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVEREREO1xcbiAgICBtYXJnaW46IDEwcHggMHB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuICAgIGJ1dHRvbjpob3ZlciB7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzJCMkI0OyB9XFxuXFxuYm9keSB7XFxuICAgIG1heC13aWR0aDogMTMyMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbjogMCBhdXRvOyB9XFxuXFxuLm1haW5fX25hdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzQTQ0NTQ7IH1cXG4gICAgLm1haW5fX25hdiBkaXYge1xcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgICAgICAgICAgLm1haW5fX25hdiBkaXYge1xcbiAgICAgICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwOyB9IH1cXG4gICAgLm1haW5fX25hdiB1bCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgbWFyZ2luOiA1cHg7XFxuICAgICAgICBwYWRkaW5nOiAwOyB9XFxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAgICAgICAgIC5tYWluX19uYXYgdWwge1xcbiAgICAgICAgICAgICAgICBmbGV4OiAwIDAgMTAwJTtcXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9IH1cXG4gICAgLm1haW5fX25hdiBsaSB7XFxuICAgICAgICBmbGV4OiAxIDEgMDtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgcGFkZGluZzogMHB4IDEwcHg7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgICAgIC5tYWluX19uYXYgbGk6aG92ZXIge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZjVjNzI7IH1cXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgICAgICAgICAgLm1haW5fX25hdiBsaSB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4OyB9IH1cXG5cXG4ubmF2X19saW5rX2NhcnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgbWFyZ2luOiAxcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgcGFkZGluZzogNXB4IDIwcHg7IH1cXG5cXG4uZXJyb3JQYWdlLXdyYXBwZXIge1xcbiAgICBwYWRkaW5nOiA1MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gICAgLmVycm9yUGFnZS13cmFwcGVyIGgxIHtcXG4gICAgICAgIGNvbG9yOiAjMjMyMDIwOyB9XFxuICAgIC5lcnJvclBhZ2Utd3JhcHBlciBoNSB7XFxuICAgICAgICBjb2xvcjogIzlBMjc1QTsgfVxcbiAgICAuZXJyb3JQYWdlLXdyYXBwZXIgaW1nIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcXG4gICAgICAgIG1heC1oZWlnaHQ6IDMwMHB4OyB9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vKmdsb2JhbHMgd2luZG93IF9fd2VicGFja19oYXNoX18gKi9cbmlmIChtb2R1bGUuaG90KSB7XG5cdHZhciBsYXN0SGFzaDtcblx0dmFyIHVwVG9EYXRlID0gZnVuY3Rpb24gdXBUb0RhdGUoKSB7XG5cdFx0cmV0dXJuIGxhc3RIYXNoLmluZGV4T2YoX193ZWJwYWNrX2hhc2hfXykgPj0gMDtcblx0fTtcblx0dmFyIGxvZyA9IHJlcXVpcmUoXCIuL2xvZ1wiKTtcblx0dmFyIGNoZWNrID0gZnVuY3Rpb24gY2hlY2soKSB7XG5cdFx0bW9kdWxlLmhvdFxuXHRcdFx0LmNoZWNrKHRydWUpXG5cdFx0XHQudGhlbihmdW5jdGlvbih1cGRhdGVkTW9kdWxlcykge1xuXHRcdFx0XHRpZiAoIXVwZGF0ZWRNb2R1bGVzKSB7XG5cdFx0XHRcdFx0bG9nKFwid2FybmluZ1wiLCBcIltITVJdIENhbm5vdCBmaW5kIHVwZGF0ZS4gTmVlZCB0byBkbyBhIGZ1bGwgcmVsb2FkIVwiKTtcblx0XHRcdFx0XHRsb2coXG5cdFx0XHRcdFx0XHRcIndhcm5pbmdcIixcblx0XHRcdFx0XHRcdFwiW0hNUl0gKFByb2JhYmx5IGJlY2F1c2Ugb2YgcmVzdGFydGluZyB0aGUgd2VicGFjay1kZXYtc2VydmVyKVwiXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCF1cFRvRGF0ZSgpKSB7XG5cdFx0XHRcdFx0Y2hlY2soKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJlcXVpcmUoXCIuL2xvZy1hcHBseS1yZXN1bHRcIikodXBkYXRlZE1vZHVsZXMsIHVwZGF0ZWRNb2R1bGVzKTtcblxuXHRcdFx0XHRpZiAodXBUb0RhdGUoKSkge1xuXHRcdFx0XHRcdGxvZyhcImluZm9cIiwgXCJbSE1SXSBBcHAgaXMgdXAgdG8gZGF0ZS5cIik7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XG5cdFx0XHRcdHZhciBzdGF0dXMgPSBtb2R1bGUuaG90LnN0YXR1cygpO1xuXHRcdFx0XHRpZiAoW1wiYWJvcnRcIiwgXCJmYWlsXCJdLmluZGV4T2Yoc3RhdHVzKSA+PSAwKSB7XG5cdFx0XHRcdFx0bG9nKFxuXHRcdFx0XHRcdFx0XCJ3YXJuaW5nXCIsXG5cdFx0XHRcdFx0XHRcIltITVJdIENhbm5vdCBhcHBseSB1cGRhdGUuIE5lZWQgdG8gZG8gYSBmdWxsIHJlbG9hZCFcIlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0bG9nKFwid2FybmluZ1wiLCBcIltITVJdIFwiICsgbG9nLmZvcm1hdEVycm9yKGVycikpO1xuXHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRsb2coXCJ3YXJuaW5nXCIsIFwiW0hNUl0gVXBkYXRlIGZhaWxlZDogXCIgKyBsb2cuZm9ybWF0RXJyb3IoZXJyKSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHR9O1xuXHR2YXIgaG90RW1pdHRlciA9IHJlcXVpcmUoXCIuL2VtaXR0ZXJcIik7XG5cdGhvdEVtaXR0ZXIub24oXCJ3ZWJwYWNrSG90VXBkYXRlXCIsIGZ1bmN0aW9uKGN1cnJlbnRIYXNoKSB7XG5cdFx0bGFzdEhhc2ggPSBjdXJyZW50SGFzaDtcblx0XHRpZiAoIXVwVG9EYXRlKCkgJiYgbW9kdWxlLmhvdC5zdGF0dXMoKSA9PT0gXCJpZGxlXCIpIHtcblx0XHRcdGxvZyhcImluZm9cIiwgXCJbSE1SXSBDaGVja2luZyBmb3IgdXBkYXRlcyBvbiB0aGUgc2VydmVyLi4uXCIpO1xuXHRcdFx0Y2hlY2soKTtcblx0XHR9XG5cdH0pO1xuXHRsb2coXCJpbmZvXCIsIFwiW0hNUl0gV2FpdGluZyBmb3IgdXBkYXRlIHNpZ25hbCBmcm9tIFdEUy4uLlwiKTtcbn0gZWxzZSB7XG5cdHRocm93IG5ldyBFcnJvcihcIltITVJdIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnQgaXMgZGlzYWJsZWQuXCIpO1xufVxuIiwiaW1wb3J0IHsgQUJPVVRfUEFHRV9URU1QTEFURSB9IGZyb20gJy4uL3RlbXBsYXRlcy5qcyc7XG5pbXBvcnQgQ09ORklHIGZyb20gJy4uLy4uL2NvbmZpZy5qcyc7XG5cbmNvbnN0IHsgY29udGVudElkIH0gPSBDT05GSUcucm91dGVzLmFib3V0UGFnZTtcblxuZnVuY3Rpb24gcmVuZGVyQWJvdXRQYWdlKCkge1xuICBjb25zdCBhYm91dFBhZ2VXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGVudElkKTtcbiAgYWJvdXRQYWdlV3JhcHBlci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIEFCT1VUX1BBR0VfVEVNUExBVEUoKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckFib3V0UGFnZTtcbiIsImltcG9ydCB7IEZPUk1fVEVNUExBVEUgfSBmcm9tICcuLi90ZW1wbGF0ZXMuanMnO1xuaW1wb3J0IENPTkZJRyBmcm9tICcuLi8uLi9jb25maWcuanMnO1xuXG5jb25zdCB7IGNvbnRlbnRJZCB9ID0gQ09ORklHLnJvdXRlcy5hdXRoUGFnZTtcblxuZnVuY3Rpb24gaW5pdEF1dGhGb3Jtcyhmb3JtQ29udGFpbmVyKSB7XG4gIGNvbnN0IGZvcm1MaW5rcyA9IGZvcm1Db250YWluZXIucXVlcnlTZWxlY3RvcigndWwnKTtcbiAgY29uc3QgZm9ybXMgPSBmb3JtQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2Zvcm0nKTtcblxuICBmb3JtTGlua3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnN0IGZvcm1JZCA9IGAke2UudGFyZ2V0LmlkLnNwbGl0KCdsaW5rJylbMF19Zm9ybWA7XG4gICAgZm9ybXMuZm9yRWFjaCgoZm9ybSkgPT4ge1xuICAgICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gZm9ybS5pZCA9PT0gZm9ybUlkID8gJ2Jsb2NrJyA6ICdub25lJztcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckF1dGhGb3JtcygpIHtcbiAgY29uc3QgYXV0aEZvcm1zQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGVudElkKTtcbiAgYXV0aEZvcm1zQ29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgRk9STV9URU1QTEFURSgpKTtcblxuICBpbml0QXV0aEZvcm1zKGF1dGhGb3Jtc0NvbnRhaW5lcik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckF1dGhGb3JtcztcbiIsImltcG9ydCB7IENBUlRfSVRFTV9URU1QTEFURSB9IGZyb20gJy4uL3RlbXBsYXRlcy5qcyc7XG5pbXBvcnQgQ09ORklHIGZyb20gJy4uLy4uL2NvbmZpZy5qcyc7XG5cbmNvbnN0IHsgY2FydCB9ID0gQ09ORklHLnNlbGVjdG9ycztcblxuY2xhc3MgQ2FydCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2FydFBhZ2VDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjYXJ0LmNvbnRlbnQpO1xuICAgIHRoaXMuY2FydFdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNhcnQud3JhcHBlcik7XG5cbiAgICBpZiAoQ2FydC5pbnN0YW5jZSkge1xuICAgICAgcmV0dXJuIENhcnQuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgQ2FydC5pbnN0YW5jZSA9IHRoaXM7XG4gIH1cblxuICBpbml0KGRhdGEsIHByb2R1Y3RzKSB7XG4gICAgdGhpcy5yZXNldENhcnQoKTtcbiAgICBpZiAoZGF0YSkge1xuICAgICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCgoaWQpID0+IHRoaXMubWFrZUNhcnRJdGVtQ2FyZChpZCwgZGF0YVtpZF0sIHByb2R1Y3RzKSk7XG4gICAgfVxuICAgIHRoaXMuY2FydFBhZ2VDb250ZW50LmFwcGVuZENoaWxkKHRoaXMuY2FydFdyYXBwZXIpO1xuICB9XG5cbiAgbWFrZUNhcnRJdGVtQ2FyZChwcm9kdWN0SWQsIHZhbHVlLCBwcm9kdWN0cykge1xuICAgIGNvbnN0IHByb2R1Y3QgPSBwcm9kdWN0cy5maW5kKChpdGVtKSA9PiBTdHJpbmcoaXRlbS5pZCkgPT09IHByb2R1Y3RJZCk7XG5cbiAgICBpZiAocHJvZHVjdCkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBpZCwgbnVtYmVyQXZhaWxhYmxlLCBpbWFnZSwgbmFtZSwgcHJpY2UsXG4gICAgICB9ID0gcHJvZHVjdDtcbiAgICAgIHRoaXMuY2FydFdyYXBwZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBDQVJUX0lURU1fVEVNUExBVEUoaWQsIHZhbHVlLCBudW1iZXJBdmFpbGFibGUsIGltYWdlLCBuYW1lLCBwcmljZSkpO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0Q2FydCgpIHtcbiAgICBjb25zdCBjYXJ0SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY2FydC5pdGVtKTtcbiAgICBjYXJ0SXRlbS5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLnJlbW92ZSgpKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJ0O1xuIiwiaW1wb3J0IHsgQ0FSRF9PUkRFUl9URU1QTEFURSB9IGZyb20gJy4uL3RlbXBsYXRlcy5qcyc7XG5pbXBvcnQgQ09ORklHIGZyb20gJy4uLy4uL2NvbmZpZy5qcyc7XG5cbmNvbnN0IHsgY2FydCB9ID0gQ09ORklHLnNlbGVjdG9ycztcblxuZnVuY3Rpb24gcmVuZGVyT3JkZXJDYXJkKCkge1xuICBjb25zdCBvcmRlckNhcmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNhcnQub3JkZXIpO1xuICBvcmRlckNhcmRDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBDQVJEX09SREVSX1RFTVBMQVRFKCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJPcmRlckNhcmQ7XG4iLCJpbXBvcnQgeyBDQVRBTE9HVUVfSVRFTV9URU1QTEFURSB9IGZyb20gJy4uL3RlbXBsYXRlcy5qcyc7XG5pbXBvcnQgQ09ORklHIGZyb20gJy4uLy4uL2NvbmZpZy5qcyc7XG5cbmNvbnN0IHsgY2F0YWxvZ3VlIH0gPSBDT05GSUcuc2VsZWN0b3JzO1xuY29uc3QgeyByb3V0ZSB9ID0gQ09ORklHLnJvdXRlcy5wcm9kdWN0UGFnZTtcblxuZnVuY3Rpb24gcmVuZGVyQ2F0YWxvZ3VlSXRlbShwcm9kdWN0KSB7XG4gIGNvbnN0IGNhdGFsb2d1ZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2F0YWxvZ3VlLndyYXBwZXIpO1xuICBjb25zdCB7XG4gICAgaWQsIGltYWdlLCBuYW1lLCBwcmljZSxcbiAgfSA9IHByb2R1Y3Q7XG5cbiAgY29uc3QgY2F0YWxvZ3VlSXRlbSA9IENBVEFMT0dVRV9JVEVNX1RFTVBMQVRFKGlkLCBpbWFnZSwgbmFtZSwgcHJpY2UpO1xuICBjYXRhbG9ndWVDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBjYXRhbG9ndWVJdGVtKTtcbn1cblxuZnVuY3Rpb24gbWFrZUNhdGFsb2d1ZUl0ZW1zQ2xpY2thYmxlKHJlbmRlcikge1xuICBjb25zdCBjYXRhbG9ndWVDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY2F0YWxvZ3VlLml0ZW0pO1xuICBjYXRhbG9ndWVDYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgY29uc3QgY2xpY2thYmxlQXJlYSA9IGNhcmQucXVlcnlTZWxlY3RvcihjYXRhbG9ndWUuaW1nKTtcbiAgICBjbGlja2FibGVBcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgeyBpZCB9ID0gY2FyZC5kYXRhc2V0O1xuICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIGAvJHtyb3V0ZX0vJHtpZH1gKTtcbiAgICAgIHJlbmRlcih3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQ2F0YWxvZ3VlKGRhdGEsIHJlbmRlcikge1xuICBbLi4uZGF0YV0uZm9yRWFjaCgocHJvZHVjdCkgPT4ge1xuICAgIHJlbmRlckNhdGFsb2d1ZUl0ZW0ocHJvZHVjdCk7XG4gIH0pO1xuICBtYWtlQ2F0YWxvZ3VlSXRlbXNDbGlja2FibGUocmVuZGVyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyQ2F0YWxvZ3VlO1xuIiwiaW1wb3J0IHsgUFJJQ0VfSU5QVVRfVEVNUExBVEUsIENIRUNLQk9YX1RFTVBMQVRFIH0gZnJvbSAnLi4vdGVtcGxhdGVzLmpzJztcbmltcG9ydCBDT05GSUcgZnJvbSAnLi4vLi4vY29uZmlnLmpzJztcblxuY29uc3QgeyBmaWx0ZXJzIH0gPSBDT05GSUc7XG5jb25zdCB7IGZpbHRlciB9ID0gQ09ORklHLnNlbGVjdG9ycztcblxuY2xhc3MgRmlsdGVycyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZmlsdGVyc0NvbnRhbmluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGZpbHRlci53cmFwcGVyKTtcbiAgICB0aGlzLmNoZWNrYm94ZXMgPSB7fTtcbiAgfVxuXG4gIGRyYXdGaWx0ZXJzKGRhdGEpIHtcbiAgICB0aGlzLmRyYXdQcmljZUlucHV0UmFuZ2UoZGF0YSk7XG4gICAgdGhpcy5idWlsZENoZWNrYm94ZXMoZGF0YSk7XG4gICAgdGhpcy5kcmF3Q2hlY2tib3hlcygpO1xuICAgIHRoaXMuZHJhd1Jlc2V0QnV0dG9uKHRoaXMuZmlsdGVyc0NvbnRhbmluZXIpO1xuICB9XG5cbiAgZHJhd1ByaWNlSW5wdXRSYW5nZShkYXRhKSB7XG4gICAgY29uc3QgYWxsUHJpY2VzID0gZGF0YS5tYXAoKHsgcHJpY2UgfSkgPT4gcHJpY2UpO1xuICAgIGNvbnN0IHByaWNlcyA9IHtcbiAgICAgIG1pbjogTWF0aC5taW4oLi4uYWxsUHJpY2VzKSxcbiAgICAgIG1heDogTWF0aC5tYXgoLi4uYWxsUHJpY2VzKSxcbiAgICB9O1xuICAgIHRoaXMuZmlsdGVyc0NvbnRhbmluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBQUklDRV9JTlBVVF9URU1QTEFURShwcmljZXMubWluLCBwcmljZXMubWF4KSk7XG4gIH1cblxuICBidWlsZENoZWNrYm94ZXMoZGF0YSkge1xuICAgIFsuLi5kYXRhXS5mb3JFYWNoKChwcm9kdWN0KSA9PiB7XG4gICAgICBmaWx0ZXJzLmZvckVhY2goKGZpbHRlckJhc2UpID0+IHtcbiAgICAgICAgaWYgKHByb2R1Y3RbZmlsdGVyQmFzZV1cbiAgICAgICAgICAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMuY2hlY2tib3hlcywgZmlsdGVyQmFzZSkpIHtcbiAgICAgICAgICB0aGlzLmNoZWNrYm94ZXNbZmlsdGVyQmFzZV0gPSBbXTtcbiAgICAgICAgICB0aGlzLmNoZWNrYm94ZXNbZmlsdGVyQmFzZV0ucHVzaChwcm9kdWN0W2ZpbHRlckJhc2VdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9kdWN0W2ZpbHRlckJhc2VdXG4gICAgICAgICAgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5iaW5kKHRoaXMuY2hlY2tib3hlcywgZmlsdGVyQmFzZSlcbiAgICAgICAgICAmJiAhdGhpcy5jaGVja2JveGVzW2ZpbHRlckJhc2VdLmluY2x1ZGVzKHByb2R1Y3RbZmlsdGVyQmFzZV0pKSB7XG4gICAgICAgICAgdGhpcy5jaGVja2JveGVzW2ZpbHRlckJhc2VdLnB1c2gocHJvZHVjdFtmaWx0ZXJCYXNlXSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZHJhd0NoZWNrYm94ZXMoKSB7XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5jaGVja2JveGVzKSkge1xuICAgICAgY29uc3QgZmlsdGVyR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGZpbHRlckdyb3VwLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBmaWx0ZXIuY29udGFpbmVyKTtcbiAgICAgIGZpbHRlckdyb3VwLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJyxcbiAgICAgICAgYDxkaXYgY2xhc3M9XCJmaWx0ZXJfX2dyb3VwX2xhYmVsXCI+JHtrZXkudG9VcHBlckNhc2UoKX08L2Rpdj5gKTtcblxuICAgICAgY29uc3QgZmlsdGVyR3JvdXBDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBmaWx0ZXJHcm91cENvbnRlbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmaWx0ZXJfX2dyb3VwX2NvbnRlbnQnKTtcblxuICAgICAgdmFsdWUuc29ydCgpLmZvckVhY2goKGZpbHRlclZhbHVlKSA9PiB7XG4gICAgICAgIGZpbHRlckdyb3VwQ29udGVudC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIENIRUNLQk9YX1RFTVBMQVRFKGtleSwgZmlsdGVyVmFsdWUpKTtcbiAgICAgIH0pO1xuXG4gICAgICBmaWx0ZXJHcm91cC5hcHBlbmRDaGlsZChmaWx0ZXJHcm91cENvbnRlbnQpO1xuXG4gICAgICB0aGlzLmluaXRGaWx0ZXJHcm91cENvbnRlbnQoZmlsdGVyR3JvdXAsIGZpbHRlckdyb3VwQ29udGVudCk7XG4gICAgICB0aGlzLmZpbHRlcnNDb250YW5pbmVyLmFwcGVuZENoaWxkKGZpbHRlckdyb3VwKTtcbiAgICB9XG4gIH1cblxuICBkcmF3UmVzZXRCdXR0b24oY29udGFpbmVyKSB7XG4gICAgY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsICc8YnV0dG9uIGNsYXNzPVwiZmlsdGVyX19idXR0b25fcmVzZXRcIj5SZXNldCBmaWx0ZXJzPC9idXR0b24+Jyk7XG4gIH1cblxuICBpbml0RmlsdGVyR3JvdXBDb250ZW50KGdyb3VwLCBjb250ZW50KSB7XG4gICAgY29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGNvbnN0IGxhYmVsID0gZ3JvdXAuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2RpdicpWzBdO1xuXG4gICAgbGFiZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCB7IGRpc3BsYXkgfSA9IGNvbnRlbnQuc3R5bGU7XG4gICAgICBjb250ZW50LnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5ID09PSAnbm9uZScgPyAnYmxvY2snIDogJ25vbmUnO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlcnM7XG4iLCJpbXBvcnQgQ09ORklHIGZyb20gJy4uLy4uL2NvbmZpZy5qcyc7XG5pbXBvcnQgeyBFUlJPUl9QQUdFIH0gZnJvbSAnLi4vdGVtcGxhdGVzLmpzJztcblxuY29uc3QgeyBjb250ZW50SWQgfSA9IENPTkZJRy5yb3V0ZXMuZXJyb3JQYWdlO1xuXG5mdW5jdGlvbiByZW5kZXJFcnJvclBhZ2UoKSB7XG4gIGNvbnN0IGVycm9yUGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRlbnRJZCk7XG4gIGVycm9yUGFnZUNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIEVSUk9SX1BBR0UoKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckVycm9yUGFnZTtcbiIsImltcG9ydCB7IEhPTUVQQUdFX1RFTVBMQVRFIH0gZnJvbSAnLi4vdGVtcGxhdGVzLmpzJztcbmltcG9ydCBDT05GSUcgZnJvbSAnLi4vLi4vY29uZmlnLmpzJztcblxuY29uc3QgeyBjb250ZW50SWQgfSA9IENPTkZJRy5yb3V0ZXMuaG9tZVBhZ2U7XG5jb25zdCB7IGhvbWUgfSA9IENPTkZJRy5zZWxlY3RvcnM7XG5cbmZ1bmN0aW9uIHJlbmRlckhvbWVQYWdlKHJlbmRlcikge1xuICBjb25zdCBob21lcGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRlbnRJZCk7XG4gIGhvbWVwYWdlLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgSE9NRVBBR0VfVEVNUExBVEUoKSk7XG4gIGluaXRTZXJpdmVVcmxzKHJlbmRlcik7XG59XG5cbmZ1bmN0aW9uIGluaXRTZXJpdmVVcmxzKHJlbmRlckZuKSB7XG4gIGNvbnN0IHNlcnZpY2VzVXJscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoaG9tZS5zZXJ2aWNlcyk7XG4gIHNlcnZpY2VzVXJscy5mb3JFYWNoKCh1cmwpID0+IHtcbiAgICBjb25zdCByb3V0ZSA9IHVybC5jbGFzc05hbWUuc3BsaXQoJ2hvbWVQYWdlX19saW5rXycpWzFdO1xuICAgIHVybC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCBgLyR7cm91dGV9YCk7XG4gICAgICByZW5kZXJGbih3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVySG9tZVBhZ2U7XG4iLCJpbXBvcnQgeyBOQVZCQVJfVEVNUExBVEUgfSBmcm9tICcuLi90ZW1wbGF0ZXMuanMnO1xuaW1wb3J0IENPTkZJRyBmcm9tICcuLi8uLi9jb25maWcuanMnO1xuXG5jb25zdCB7IHJvdXRlcyB9ID0gQ09ORklHO1xuXG5mdW5jdGlvbiBpbml0TmF2YmFyKG5hdmJhciwgcmVuZGVyKSB7XG4gIG5hdmJhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgc3dpdGNoIChlLnRhcmdldC5jbGFzc05hbWUpIHtcbiAgICBjYXNlICduYXZfX2xpbmtfaG9tZSc6XG4gICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgYCR7cm91dGVzLmhvbWVQYWdlLnJvdXRlfWApO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbmF2X19saW5rX2Fib3V0JzpcbiAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCBgLyR7cm91dGVzLmFib3V0UGFnZS5yb3V0ZX1gKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ25hdl9fbGlua19jYXRhbG9ndWUnOlxuICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIGAvJHtyb3V0ZXMuY2F0YWxvZ3VlUGFnZS5yb3V0ZX1gKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ25hdl9fbGlua19jYXJ0JzpcbiAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCBgLyR7cm91dGVzLmNhcnRQYWdlLnJvdXRlfWApO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbmF2X19saW5rX2xvZ2luJzpcbiAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCBgLyR7cm91dGVzLmF1dGhQYWdlLnJvdXRlfWApO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZW5kZXIod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlck5hdmJhcihyZW5kZXIpIHtcbiAgY29uc3QgbmF2YmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLW1haW4tbmF2Jyk7XG4gIG5hdmJhci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIE5BVkJBUl9URU1QTEFURSgpKTtcbiAgaW5pdE5hdmJhcihuYXZiYXIsIHJlbmRlcik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlck5hdmJhcjtcbiIsImltcG9ydCB7IFNJTkdMRV9QQUdFX1RFTVBMQVRFIH0gZnJvbSAnLi4vdGVtcGxhdGVzLmpzJztcbmltcG9ydCBDT05GSUcgZnJvbSAnLi4vLi4vY29uZmlnLmpzJztcblxuY29uc3QgeyBjb250ZW50SWQgfSA9IENPTkZJRy5yb3V0ZXMucHJvZHVjdFBhZ2U7XG5jb25zdCB7IHBhZ2UgfSA9IENPTkZJRy5zZWxlY3RvcnM7XG5cbmNsYXNzIFNpbmdsZVBhZ2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnNpbmdsZVBhZ2VDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250ZW50SWQpO1xuICAgIGlmIChTaW5nbGVQYWdlLmluc3RhbmNlKSB7XG4gICAgICByZXR1cm4gU2luZ2xlUGFnZS5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICBTaW5nbGVQYWdlLmluc3RhbmNlID0gdGhpcztcbiAgfVxuXG4gIGRyYXdTaW5nbGVQYWdlKHByb2R1Y3QpIHtcbiAgICBpZiAocHJvZHVjdCkge1xuICAgICAgdGhpcy5yZXNldFBhZ2UoKTtcbiAgICAgIHRoaXMuc2luZ2xlUGFnZUNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIFNJTkdMRV9QQUdFX1RFTVBMQVRFKHByb2R1Y3QpKTtcbiAgICB9XG4gIH1cblxuICByZXNldFBhZ2UoKSB7XG4gICAgY29uc3QgcGFnZUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBhZ2UuY29udGVudCk7XG4gICAgaWYgKHBhZ2VDb250ZW50KSB7XG4gICAgICBwYWdlQ29udGVudC5yZW1vdmUoKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlUGFnZTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbmV4cG9ydCBjb25zdCBGT1JNX1RFTVBMQVRFID0gKCkgPT4gYFxuICA8ZGl2IGNsYXNzPVwiYXV0aF9fZm9ybV93cmFwcGVyXCI+XG4gIDx1bD5cbiAgICA8bGkgaWQ9XCJqcy1zaWduLWluLWxpbmtcIj5TaWduIEluPC9saT5cbiAgICA8bGkgaWQ9XCJqcy1zaWduLXVwLWxpbmtcIj5TaWduIFVwPC9saT5cbiAgPC91bD5cbiAgPHAgY2xhc3M9XCJhdXRoX19mb3JtX2Vycm9yXCI+PC9wPlxuICA8Zm9ybSBpZD1cImpzLXNpZ24taW4tZm9ybVwiIG5vdmFsaWRhdGU+XG4gICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw6PC9sYWJlbD5cbiAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCI+XG4gICAgPHAgY2xhc3M9XCJlbWFpbC1lcnJvclwiPjwvcD5cbiAgICA8bGFiZWwgZm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDo8L2xhYmVsPlxuICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIj5cbiAgICA8cCBjbGFzcz1cInBhc3N3b3JkLWVycm9yXCI+PC9wPlxuICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlNpZ24gaW48L2J1dHRvbj5cbiAgPC9mb3JtPlxuICA8Zm9ybSBpZD1cImpzLXNpZ24tdXAtZm9ybVwiIG5vdmFsaWRhdGUgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPlxuICAgIDxsYWJlbCBmb3I9XCJuYW1lbFwiPk5hbWU6PC9sYWJlbD5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiPlxuICAgIDxwIGNsYXNzPVwibmFtZS1lcnJvclwiPjwvcD5cbiAgICA8bGFiZWwgZm9yPVwiZW1haWxcIj5FbWFpbDo8L2xhYmVsPlxuICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIj5cbiAgICA8cCBjbGFzcz1cImVtYWlsLWVycm9yXCI+PC9wPlxuICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkOjwvbGFiZWw+XG4gICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiPlxuICAgIDxwIGNsYXNzPVwicGFzc3dvcmQtZXJyb3JcIj48L3A+XG4gICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2lnbiBVcDwvYnV0dG9uPlxuICA8L2Zvcm0+XG4gIDwvZGl2PmA7XG5cbmV4cG9ydCBjb25zdCBDQVJEX09SREVSX1RFTVBMQVRFID0gKCkgPT4gYFxuPGRpdiBjbGFzcz1cImNhcnRQYWdlX19vcmRlcl93cmFwcGVyXCI+XG4gIDxwIGNsYXNzPVwiY2FydFBhZ2VfX29yZGVyX21lc3NhZ2VcIj48L3A+XG4gIDxkaXYgY2xhc3M9XCJjYXJ0UGFnZV9fdXNlcl9pbmZvXCI+XG4gICAgPGgzPlVzZXIgSW5mbzwvaDM+XG4gICAgPGRpdiBjbGFzcz1cImNhcnRQYWdlX191c2VyX2RhdGFcIj48L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXY+XG4gICAgPGgzPlRvdGFsPC9oMz5cbiAgICA8ZGl2IGNsYXNzPVwiY2FydFBhZ2VfX3RvdGFsXCI+Tm8gaXRlbXMgY2hvc2VuPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2PlxuICAgIDxoMz5PcmRlciBkZXRhaWxzPC9oMz5cbiAgICA8ZGl2IGNsYXNzPVwiY2FydFBhZ2VfX2RldGFpbHNcIj48L2Rpdj5cbiAgPC9kaXY+XG4gIDxidXR0b24gY2xhc3M9XCJjYXJ0UGFnZV9fb3JkZXJfYnV5XCI+QnV5PC9idXR0b24+XG48L2Rpdj5gO1xuXG5leHBvcnQgY29uc3QgQ0FUQUxPR1VFX0lURU1fVEVNUExBVEUgPSAoaWQsIGltYWdlLCBuYW1lLCBwcmljZSkgPT4gYFxuPGRpdiBjbGFzcz1cImNhdGFsb2d1ZV9faXRlbVwiIGRhdGEtaWQ9XCIke2lkfVwiPlxuICA8ZGl2IGNsYXNzPVwiY2F0YWxvZ3VlX19pdGVtX2ltZ3dyYXBcIj5cbiAgICA8aW1nIGNsYXNzPVwiY2F0YWxvZ3VlX19pdGVtX3Bob3RvXCIgc3JjPS8ke2ltYWdlfT5cbiAgICA8aDUgY2xhc3M9XCJjYXRhbG9ndWVfX2l0ZW1fbmFtZVwiPiR7bmFtZX08L2g1PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImNhdGFsb2d1ZV9faXRlbV9pbmZvXCI+XG4gICAgPHAgY2xhc3M9XCJjYXRhbG9ndWVfX2l0ZW1fcHJpY2VcIj4ke3ByaWNlfSQ8L3A+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImNhdGFsb2d1ZV9faXRlbV9hZGRcIj5BZGQgdG8gY2FydDwvYnV0dG9uPlxuICA8L2Rpdj5cbjwvZGl2PmA7XG5cbmV4cG9ydCBjb25zdCBQUklDRV9JTlBVVF9URU1QTEFURSA9IChtaW4sIG1heCkgPT4gYFxuICA8ZGl2IGNsYXNzPVwiZmlsdGVyLWdyb3VwLWxhYmVsXCI+XG4gICAgPGgzPlBSSUNFOjwvaDM+XG4gICAgPGRpdiBjbGFzcz1cImZpbHRlcl9fZ3JvdXBfY29udGVudFwiPlxuICAgICAgPHNwYW4+JHttaW59PC9zcGFuPlxuICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIGNsYXNzPVwiZmlsdGVyX19ncm91cF9wcmljZVwiIG5hbWU9XCJwcmljZVwiIFxuICAgICAgICB2YWx1ZT1cIiR7bWF4fVwiIG1pbj1cIiR7bWlufVwiIG1heD1cIiR7bWF4fVwiPlxuICAgICAgPHNwYW4+JHttYXh9PC9zcGFuPlxuICAgICAgPGRpdiBjbGFzcz1cImZpbHRlcl9fcHJpY2VfY3VycmVudFwiPjxkaXY+IFxuICAgIDwvZGl2PlxuICA8L2Rpdj5gO1xuXG5leHBvcnQgY29uc3QgQ0hFQ0tCT1hfVEVNUExBVEUgPSAoZmlsdGVyTmFtZSwgZmlsdGVyVmFsdWUpID0+IGBcbiAgPGRpdiBjbGFzcz1cImZpbHRlcl9fZ3JvdXBfY2hlY2tib3hcIiB2YWx1ZT0ke2ZpbHRlclZhbHVlfT5cbiAgICA8bGFiZWwgZm9yPVwiJHtmaWx0ZXJWYWx1ZX1cIj4ke2ZpbHRlclZhbHVlfTwvbGFiZWw+XG4gICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCIke2ZpbHRlck5hbWV9XCIgdmFsdWU9XCIke2ZpbHRlclZhbHVlfVwiIC8+XG4gIDwvZGl2PmA7XG5cbmV4cG9ydCBjb25zdCBDQVJUX0lURU1fVEVNUExBVEUgPSAoaWQsIHZhbHVlLCBudW1iZXJBdmFpbGFibGUsIGltYWdlLCBuYW1lLCBwcmljZSkgPT4gYFxuPGRpdiBjbGFzcz1cImNhcnRfX2l0ZW1fd3JhcHBlclwiIGRhdGEtaWQ9XCIke2lkfVwiPlxuICA8ZGl2IGNsYXNzPVwiY2FydF9faXRlbV9kZXRhaWxzXCI+XG4gICAgPGltZyBjbGFzcz1cImNhcnRfX2l0ZW1faW1hZ2VcIiBzcmM9XCIvJHtpbWFnZX1cIiAvPlxuICAgIDxoNSBjbGFzcz1cImNhcnRfX2l0ZW1fbmFtZVwiPiR7bmFtZX08L2g1PlxuICAgIDxwIGNsYXNzPVwiY2FydF9faXRlbV9wcmljZVwiIGRhdGEtdmFsdWU9XCIke3ByaWNlfVwiPlByaWNlOiAke3ByaWNlfSQ8L3A+XG4gIDwvZGl2PlxuICA8Zm9ybSBjbGFzcz1cImNhcnRfX2l0ZW1faW5wdXRcIj5cbiAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJjYXJ0X19pdGVtX2Nob29zZVwiLz5cbiAgICA8aW5wdXQgY2xhc3M9XCJjYXJ0X19pdGVtX3F1YW50aXR5XCIgZGF0YS1pZD1cIiR7aWR9XCIgdHlwZT1cIm51bWJlclwiIHZhbHVlPVwiJHt2YWx1ZX1cIiBtaW49XCIxXCIgbWF4PVwiJHtudW1iZXJBdmFpbGFibGV9XCIvPlxuICA8L2Zvcm0+XG4gIDxidXR0b24gY2xhc3M9XCJjYXJ0X19pdGVtX2RlbGV0ZVwiIGRhdGEtaWQ9XCIke2lkfVwiPkRlbGV0ZTwvYnV0dG9uPlxuICA8L2Rpdj5gO1xuXG5leHBvcnQgY29uc3QgTkFWQkFSX1RFTVBMQVRFID0gKCkgPT4gYFxuPGRpdiBjbGFzcz1cIm5hdl9fd3JhcHBlclwiPlxuICA8dWw+XG4gICAgPGxpIGNsYXNzPVwibmF2X19saW5rX2hvbWVcIj5Ib21lPC9saT5cbiAgICA8bGkgY2xhc3M9XCJuYXZfX2xpbmtfYWJvdXRcIj5BYm91dDwvbGk+XG4gICAgPGxpIGNsYXNzPVwibmF2X19saW5rX2NhdGFsb2d1ZVwiPkNhdGFsb2d1ZTwvbGk+XG4gIDwvdWw+XG4gIDx1bD5cbiAgICA8bGkgY2xhc3M9XCJuYXZfX2xpbmtfbG9naW5cIj5Mb2cgaW48L2xpPlxuICAgIDxsaSBjbGFzcz1cIm5hdl9fbGlua19sb2dvdXRcIj5Mb2cgb3V0PC9saT5cbiAgICA8bGk+PGltZyBjbGFzcz1cIm5hdl9fbGlua19jYXJ0XCIgc3JjPVwiL2Fzc2V0cy9pbWcvMTI2MDgzLnBuZ1wiPjwvbGk+XG4gIDwvdWw+XG48L2Rpdj5gO1xuXG5leHBvcnQgY29uc3QgU0lOR0xFX1BBR0VfVEVNUExBVEUgPSAocHJvZHVjdCkgPT4gYFxuICA8ZGl2IGNsYXNzPVwic2luZ2xlUGFnZV9fY29udGVudFwiPlxuICAgIDxkaXYgY2xhc3M9XCJzaW5nbGVQYWdlX19jb250ZW50X21haW5cIj4gXG4gICAgPGRpdiBjbGFzcz1cInNpbmdsZVBhZ2VfX2ltZ19jb250YWluZXJcIj5cbiAgICAgIDxpbWcgY2xhc3M9XCJzaW5nbGVQYWdlX2NvbnRlbnRfaW1nXCIgc3JjPVwiLyR7cHJvZHVjdC5pbWFnZX1cIj5cbiAgICA8L2Rpdj5cbiAgICA8aDU+JHtwcm9kdWN0Lm5hbWV9PC9oNT5cbiAgICA8cD4ke3Byb2R1Y3QucHJpY2V9JDwvcD5cbiAgICA8ZGl2IGNsYXNzPVwic2luZ2xlUGFnZV9faXRlbV9hZGRcIj5cbiAgICAgIDxidXR0b24+QWRkIHRvIGNhcnQ8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cInNpbmdsZVBhZ2VfY29udGVudF9pbmZvXCI+XG4gICAgPGRpdiBjbGFzcz1cInNpbmdsZVBhZ2VfY29udGVudF9iYXNlXCI+XG4gICAgICA8cD48Yj5CcmFuZDwvYj46ICR7cHJvZHVjdC5icmFuZH08L3A+XG4gICAgICA8cD48Yj5NYW51ZmFjdHVyZXI8L2I+OiAke3Byb2R1Y3QubWFudWZhY3R1cmVyfTwvcD5cbiAgICAgIDxwPjxiPlZvbHVtZTwvYj46ICR7cHJvZHVjdC52b2x1bWV9PC9wPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJzaW5nbGVQYWdlX2NvbnRlbnRfZGVzY1wiPlxuICAgICAgPHA+JHtwcm9kdWN0LmRlc2NyaXB0aW9ufTwvcD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwic2luZ2xlUGFnZV9jb250ZW50X3NwZWNcIj5cbiAgICAgIDxwPjxiPlNwaXJpdCB0eXBlPC9iPjogJHtwcm9kdWN0WydzcGlyaXQgdHlwZSddfTwvcD5cbiAgICAgIDxwPjxiPkNhdGVnb3J5PC9iPjogJHtwcm9kdWN0LmNhdGVnb3J5fTwvcD5cbiAgICAgIDxwPjxiPlBhY2thZ2U8L2I+OiAke3Byb2R1Y3QucGFja2FnZX08L3A+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8L2Rpdj5cbmA7XG5cbmV4cG9ydCBjb25zdCBIT01FUEFHRV9URU1QTEFURSA9ICgpID0+IGBcbiAgPGRpdiBjbGFzcz1cImxlYWRfX2Jhbm5lclwiPlxuICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWcvaG9tZXBhZ2UvbGVhZC1iYW5uZXIuanBnXCIgLz5cbiAgICA8ZGl2IGNsYXNzPVwiYmFubmVyX19jb250ZW50XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwid3JhcHBlclwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInRpdGxlXCI+T25seSB0cnVzdGVkIHN1cHBsaWVyczwvc3Bhbj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaT5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LjwvbGk+XG4gICAgICAgICAgPGxpPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuPC9saT5cbiAgICAgICAgICA8bGk+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC48L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8c2VjdGlvbiBjbGFzcz1cImhvbWVQYWdlX19zZXJ2aWNlc1wiPlxuICAgICAgPGRpdiBjbGFzcz1cIndyYXBwZXJcIj5cbiAgICAgIDxoMT5PdXIgc2VydmljZXM8L2gxPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpIGNsYXNzPVwiaG9tZVBhZ2VfX2xpbmtfYWJvdXRcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWcvaG9tZXBhZ2UvYWJvdXQucG5nXCIgLz5cbiAgICAgICAgICAgIDxwPkFib3V0IHVzPC9wPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwiaG9tZVBhZ2VfX2xpbmtfY2F0YWxvZ3VlXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvaW1nL2hvbWVwYWdlL3Nob3AucG5nXCIgLz5cbiAgICAgICAgICAgIDxwPlNob3Agbm93PC9wPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwiaG9tZVBhZ2VfX2xpbmtfbG9naW5cIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWcvaG9tZXBhZ2Uvam9pbi5wbmdcIiAvPlxuICAgICAgICAgICAgPHA+Sm9pbjwvcD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICA8ZGl2IGNsYXNzPVwic2Vjb25kX19iYW5uZXJcIj5cbiAgICA8aW1nIHNyYz1cIi9hc3NldHMvaW1nL2hvbWVwYWdlL3NlY29uZC1iYW5uZXIuanBnXCIgLz5cbiAgICA8ZGl2IGNsYXNzPVwiYmFubmVyX19jb250ZW50XCI+XG4gICAgICAgPGRpdiBjbGFzcz1cIndyYXBwZXJcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ0aXRsZVwiPkV4Y2VsbGVudCBzZXJ2aWNlPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInRpdGxlXCI+RmFzdCBkZWxpdmVyeTwvc3Bhbj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaT5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LjwvbGk+XG4gICAgICAgICAgPGxpPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuPC9saT5cbiAgICAgICAgICA8bGk+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC48L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8c2VjdGlvbiBjbGFzcz1cImhvbWVQYWdlX19wcm9kdWN0c1wiPlxuICAgIDxkaXYgY2xhc3M9XCJ3cmFwcGVyXCI+XG4gICAgICA8aDE+UG9wdWxhciBicmFuZHM8L2gxPlxuICAgICAgPHVsPlxuICAgICAgICA8bGk+PGltZyBzcmM9XCIvYXNzZXRzL2ltZy9ob21lcGFnZS9iYWxsYW50aW5lcy5qcGdcIiBuYW1lPVwiYnJhbmRcIiBkYXRhLXZhbHVlPVwiQmFsbGFudGluZSdzXCIgLz48L2xpPlxuICAgICAgICA8bGk+PGltZyBzcmM9XCIvYXNzZXRzL2ltZy9ob21lcGFnZS9ibGFjay12ZWx2ZXQuanBnXCIgbmFtZT1cImJyYW5kXCIgZGF0YS12YWx1ZT1cIkJsYWNrIFZlbHZldFwiIC8+PC9saT5cbiAgICAgICAgPGxpPjxpbWcgc3JjPVwiL2Fzc2V0cy9pbWcvaG9tZXBhZ2UvamFjay1kYW5pZWxzLmpwZ1wiIG5hbWU9XCJicmFuZFwiIGRhdGEtdmFsdWU9XCJKYWNrIERhbmllbCdzXCIgLz48L2xpPlxuICAgICAgICA8bGk+PGltZyBzcmM9XCIvYXNzZXRzL2ltZy9ob21lcGFnZS9qYW1lc29uLmpwZ1wiIG5hbWU9XCJicmFuZFwiIGRhdGEtdmFsdWU9XCJKYW1lc29uXCIvPjwvbGk+XG4gICAgICAgIDxsaT48aW1nIHNyYz1cIi9hc3NldHMvaW1nL2hvbWVwYWdlL2xhdWRlcnMuanBnXCIgbmFtZT1cImJyYW5kXCIgZGF0YS12YWx1ZT1cIkxhdWRlcidzXCIgLz48L2xpPlxuICAgICAgICA8bGk+PGltZyBzcmM9XCIvYXNzZXRzL2ltZy9ob21lcGFnZS9qaW0tYmVhbS5qcGdcIiBuYW1lPVwiYnJhbmRcIiBkYXRhLXZhbHVlPVwiSmltIEJlYW1cIi8+PC9saT5cbiAgICAgICAgPGxpPjxpbWcgc3JjPVwiL2Fzc2V0cy9pbWcvaG9tZXBhZ2UvamFnZXJtZWlzdGVyLmpwZ1wiIG5hbWU9XCJicmFuZFwiIGRhdGEtdmFsdWU9XCJKYWdlcm1laXN0ZXJcIi8+PC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gIDwvc2VjdGlvbj5gO1xuXG5cbmV4cG9ydCBjb25zdCBBQk9VVF9QQUdFX1RFTVBMQVRFID0gKCkgPT4gYFxuICA8ZGl2IGNsYXNzPVwic2Vjb25kX19iYW5uZXJcIj5cbiAgICA8aW1nIHNyYz1cIi9hc3NldHMvaW1nL2Fib3V0L2Fib3V0LmpwZ1wiIC8+XG4gICAgPGRpdiBjbGFzcz1cImJhbm5lcl9fY29udGVudFwiPlxuICAgICAgPGRpdiBjbGFzcz1cIndyYXBwZXJcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ0aXRsZVwiPkFub3RoZXIgbG9yZW0hPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8c2VjdGlvbiBjbGFzcz1cImFib3V0UGFnZV9fY29udGVudFwiPlxuICAgIDxoMT5BYm91dCB1czwvaDE+XG4gICAgPGRpdj5cIkF0IHZlcm8gZW9zIGV0IGFjY3VzYW11cyBldCBpdXN0byBvZGlvIGRpZ25pc3NpbW9zIGR1Y2ltdXMgcXVpIGJsYW5kaXRpaXMgcHJhZXNlbnRpdW0gdm9sdXB0YXR1bSBkZWxlbml0aVxuICAgICBhdHF1ZSBjb3JydXB0aSBxdW9zIGRvbG9yZXMgZXQgcXVhcyBtb2xlc3RpYXMgZXhjZXB0dXJpIHNpbnQgb2NjYWVjYXRpIGN1cGlkaXRhdGUgbm9uIHByb3ZpZGVudCxcbiAgICAgIHNpbWlsaXF1ZSBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhIGRlc2VydW50IG1vbGxpdGlhIGFuaW1pLCBpZCBlc3QgbGFib3J1bSBldCBkb2xvcnVtIGZ1Z2EuXG4gICAgICBFdCBoYXJ1bSBxdWlkZW0gcmVydW0gZmFjaWxpcyBlc3QgZXQgZXhwZWRpdGEgZGlzdGluY3Rpby4gTmFtIGxpYmVybyB0ZW1wb3JlLCBjdW0gc29sdXRhIG5vYmlzIGVzdCBlbGlnZW5kaVxuICAgICAgIG9wdGlvIGN1bXF1ZSBuaWhpbCBpbXBlZGl0IHF1byBtaW51cyBpZCBxdW9kIG1heGltZSBwbGFjZWF0IGZhY2VyZSBwb3NzaW11cywgb21uaXMgdm9sdXB0YXMgYXNzdW1lbmRhIGVzdCxcbiAgICAgICAgb21uaXMgZG9sb3IgcmVwZWxsZW5kdXMuIFRlbXBvcmlidXMgYXV0ZW0gcXVpYnVzZGFtIGV0IGF1dCBvZmZpY2lpcyBkZWJpdGlzIGF1dCByZXJ1bSBuZWNlc3NpdGF0aWJ1cyBzYWVwZSBcbiAgICAgICAgZXZlbmlldCB1dCBldCB2b2x1cHRhdGVzIHJlcHVkaWFuZGFlIHNpbnQgZXQgbW9sZXN0aWFlIG5vbiByZWN1c2FuZGFlLiBJdGFxdWUgZWFydW0gcmVydW0gaGljIHRlbmV0dXIgYSBzYXBpZW50ZSBkZWxlY3R1cyxcbiAgICAgICAgIHV0IGF1dCByZWljaWVuZGlzIHZvbHVwdGF0aWJ1cyBtYWlvcmVzIGFsaWFzIGNvbnNlcXVhdHVyIGF1dCBwZXJmZXJlbmRpcyBkb2xvcmlidXMgYXNwZXJpb3JlcyByZXBlbGxhdC5cIlxuICAgIDwvZGl2PlxuICA8L3NlY3Rpb24+XG4gIDxzZWN0aW9uIGNsYXNzPVwiYWJvdXRQYWdlX19hcnRpY2xlc1wiPlxuICAgIDxkaXYgY2xhc3M9XCJ3cmFwcGVyXCI+XG4gICAgICA8aDE+UG9wdWxhciBkcmlua3M8L2gxPlxuICAgICAgPHVsPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL2ltZy9hYm91dC93aW5lLmpwZ1wiPjwvaW1nPlxuICAgICAgICAgIDxoNT5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldDwvaDU+XG4gICAgICAgICAgPGRpdj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCBcbiAgICAgICAgICB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sXG4gICAgICAgICAgIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gXG4gICAgICAgICAgIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLlxuICAgICAgICAgICAgRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWcvYWJvdXQvd2hpc2tleS5wbmdcIj48L2ltZz5cbiAgICAgICAgICA8aDU+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQ8L2g1PlxuICAgICAgICAgIDxkaXY+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgXG4gICAgICAgICAgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLFxuICAgICAgICAgICBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIFxuICAgICAgICAgICBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci5cbiAgICAgICAgICAgIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvaW1nL2Fib3V0L21hcnRpbmkuanBnXCI+PC9pbWc+XG4gICAgICAgICAgPGg1PkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0PC9oNT5cbiAgICAgICAgICA8ZGl2PkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIFxuICAgICAgICAgIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSxcbiAgICAgICAgICAgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBcbiAgICAgICAgICAgRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuXG4gICAgICAgICAgICBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhIGRlc2VydW50IG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL2ltZy9hYm91dC90ZXF1aWxhLmpwZ1wiPjwvaW1nPlxuICAgICAgICAgIDxoNT5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldDwvaDU+XG4gICAgICAgICAgPGRpdj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCBcbiAgICAgICAgICB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sXG4gICAgICAgICAgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBcbiAgICAgICAgICBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci5cbiAgICAgICAgICAgIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvaW1nL2Fib3V0L2JlZXIuanBnXCI+PC9pbWc+XG4gICAgICAgICAgPGg1PkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0PC9oNT5cbiAgICAgICAgICA8ZGl2PkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIFxuICAgICAgICAgIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSxcbiAgICAgICAgICBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIFxuICAgICAgICAgIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLlxuICAgICAgICAgICAgRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL2ltZy9hYm91dC9jb2duYWMuanBnXCI+PC9pbWc+XG4gICAgICAgICAgPGg1PkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0PC9oNT5cbiAgICAgICAgICA8ZGl2PkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIFxuICAgICAgICAgIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSxcbiAgICAgICAgICBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIFxuICAgICAgICAgIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLlxuICAgICAgICAgICAgRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICA8L3NlY3Rpb24+YDtcblxuZXhwb3J0IGNvbnN0IEVSUk9SX1BBR0UgPSAoKSA9PiBgXG4gIDxkaXY+XG4gICAgPGgxPlNvbWV0aGluZyB3ZW50IHdyb25nITwvaDE+XG4gICAgPGg1PlBhZ2UgZG9lc24ndCBleGlzdCA9KDwvaDU+XG4gICAgPGltZyBzcmM9XCIvYXNzZXRzL2ltZy9lcnJvci9lcnJvci5qcGdcIiAvPlxuICA8L2Rpdj5cbiAgYDtcbiIsImNvbnN0IENPTkZJRyA9IHtcbiAgYXBpOiAnaHR0cHM6Ly9teS1qc29uLXNlcnZlci50eXBpY29kZS5jb20vYW5ha2h1L2RlbW8nLFxuICByb3V0ZXM6IHtcbiAgICBob21lUGFnZTogeyByb3V0ZTogJy8nLCBjb250ZW50SWQ6ICdqcy1ob21lcGFnZScgfSxcbiAgICBhYm91dFBhZ2U6IHsgcm91dGU6ICdhYm91dCcsIGNvbnRlbnRJZDogJ2pzLWFib3V0LXBhZ2UnIH0sXG4gICAgY2F0YWxvZ3VlUGFnZTogeyByb3V0ZTogJ2NhdGFsb2d1ZScsIGNvbnRlbnRJZDogJ2pzLWNhdGFsb2d1ZS1wYWdlJyB9LFxuICAgIHByb2R1Y3RQYWdlOiB7IHJvdXRlOiAncHJvZHVjdCcsIGNvbnRlbnRJZDogJ2pzLXNpbmdsZS1wYWdlJyB9LFxuICAgIGVycm9yUGFnZTogeyByb3V0ZTogJzQwNCcsIGNvbnRlbnRJZDogJ2pzLWVycm9yLXBhZ2UnIH0sXG4gICAgYXV0aFBhZ2U6IHsgcm91dGU6ICdsb2dpbicsIGNvbnRlbnRJZDogJ2pzLWF1dGgtcGFnZScgfSxcbiAgICBjYXJ0UGFnZTogeyByb3V0ZTogJ2NhcnQnLCBjb250ZW50SWQ6ICdqcy1jYXJ0LXBhZ2UnIH0sXG4gIH0sXG4gIGZpbHRlcnM6IFsnYnJhbmQnLCAndm9sdW1lJywgJ21hbnVmYWN0dXJlcicsICdjYXRlZ29yeScsICdwYWNrYWdlJywgJ3NwaXJpdCB0eXBlJ10sXG4gIHZhbGlkYXRpb25SdWxlczoge1xuICAgIG5hbWU6IHtcbiAgICAgIG1pbkxlbjogMyxcbiAgICAgIG1heExlbjogMjAsXG4gICAgICBvbmx5TnVtYmVyc0FuZExldHRlcnM6IHRydWUsXG4gICAgICBpc05vdEVtcHR5OiB0cnVlLFxuICAgIH0sXG4gICAgZW1haWw6IHtcbiAgICAgIGlzTm90RW1wdHk6IHRydWUsXG4gICAgICBpc1ZhbGlkRW1haWw6IHRydWUsIFxuICAgIH0sXG4gICAgcGFzc3dvcmQ6IHtcbiAgICAgIG1pbkxlbjogNixcbiAgICAgIG1heExlbjogMjAsXG4gICAgICBvbmx5TnVtYmVyc0FuZExldHRlcnM6IHRydWUsXG4gICAgICBpc05vdEVtcHR5OiB0cnVlLFxuICAgIH0sXG4gIH0sXG4gIHNlbGVjdG9yczoge1xuICAgIGNhcnQ6IHtcbiAgICAgIHdyYXBwZXI6ICcuY2FydFBhZ2VfX2NhcnRfd3JhcHBlcicsXG4gICAgICBvcmRlcjogJy5jYXJ0UGFnZV9fY2FydF9vcmRlcicsXG4gICAgICBjb250ZW50OiAnLmNhcnRQYWdlX19jb250ZW50JyxcbiAgICAgIGl0ZW06ICcuY2FydF9faXRlbV93cmFwcGVyJyxcbiAgICAgIHRvdGFsOiAnLmNhcnRQYWdlX190b3RhbCcsXG4gICAgICBkZXRhaWxzOiAnLmNhcnRQYWdlX19kZXRhaWxzJyxcbiAgICAgIHVzZXJJbmZvOiAnLmNhcnRQYWdlX191c2VyX2luZm8nLFxuICAgICAgdXNlckRhdGE6ICcuY2FydFBhZ2VfX3VzZXJfZGF0YScsXG4gICAgICBvcmRlck1lc3NhZ2U6ICcuY2FydFBhZ2VfX29yZGVyX21lc3NhZ2UnLFxuICAgICAgaW5wdXQ6ICcuY2FydF9faXRlbV9pbnB1dCcsXG4gICAgICBkZWxldGU6ICcuY2FydF9faXRlbV9kZWxldGUnLFxuICAgICAgY2hvb3NlOiAnLmNhcnRfX2l0ZW1fY2hvb3NlJyxcbiAgICAgIG5hbWU6ICcuY2FydF9faXRlbV9uYW1lJyxcbiAgICAgIHByaWNlOiAnLmNhcnRfX2l0ZW1fcHJpY2UnLFxuICAgICAgcXVhbnRpdHk6ICcuY2FydF9faXRlbV9xdWFudGl0eScsXG4gICAgICBidXk6ICcuY2FydFBhZ2VfX29yZGVyX2J1eScsXG4gICAgfSxcbiAgICBjYXRhbG9ndWU6IHtcbiAgICAgIGl0ZW06ICcuY2F0YWxvZ3VlX19pdGVtJyxcbiAgICAgIGFkZDogJy5jYXRhbG9ndWVfX2l0ZW1fYWRkJyxcbiAgICAgIGltZzogJy5jYXRhbG9ndWVfX2l0ZW1faW1nd3JhcCcsXG4gICAgICB3cmFwcGVyOiAnLnByb2R1Y3RQYWdlX19jYXRhbG9ndWUnLFxuICAgIH0sXG4gICAgZmlsdGVyOiB7XG4gICAgICB3cmFwcGVyOiAnLnByb2R1Y3RQYWdlX19maWx0ZXInLFxuICAgICAgY29udGFpbmVyOiAnLmNhdGFsb2d1ZV9fZmlsdGVyX2dyb3VwJyxcbiAgICAgIGxhYmVsOiAnLmZpbHRlcl9fZ3JvdXBfbGFiZWwnLFxuICAgICAgY29udGVudDogJy5maWx0ZXJfX2dyb3VwX2NvbnRlbnQnLFxuICAgICAgY3VycmVudFByaWNlOiAnLmZpbHRlcl9fcHJpY2VfY3VycmVudCcsXG4gICAgICBwcmljZTogJy5maWx0ZXJfX2dyb3VwX3ByaWNlJyxcbiAgICAgIGNoZWNrYm94OiAnLmZpbHRlcl9fZ3JvdXBfY2hlY2tib3ggaW5wdXQnLFxuICAgICAgcmVzZXQ6ICcuZmlsdGVyX19idXR0b25fcmVzZXQnLFxuICAgIH0sXG4gICAgbmF2OiB7XG4gICAgICBsb2dvdXQ6ICcubmF2X19saW5rX2xvZ291dCcsXG4gICAgICBsb2dpbjogJy5uYXZfX2xpbmtfbG9naW4nLFxuICAgIH0sXG4gICAgYXV0aDoge1xuICAgICAgZXJyb3I6ICcuYXV0aF9fZm9ybV9lcnJvcicsXG4gICAgfSxcbiAgICBob21lOiB7XG4gICAgICBzZXJ2aWNlczogJy5ob21lUGFnZV9fc2VydmljZXMgbGknLFxuICAgICAgaW1nOiAnLmhvbWVQYWdlX19wcm9kdWN0cyBpbWcnLFxuICAgIH0sXG4gICAgcGFnZToge1xuICAgICAgY29udGVudDogJy5zaW5nbGVQYWdlX19jb250ZW50JyxcbiAgICB9LFxuICAgIGZvcm1zOiB7XG4gICAgICBzaWduSW46ICdqcy1zaWduLWluLWZvcm0nLFxuICAgICAgc2lnblVwOiAnanMtc2lnbi11cC1mb3JtJyxcbiAgICB9LFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ09ORklHO1xuIiwiaW1wb3J0IENPTkZJRyBmcm9tICcuL2NvbmZpZy5qcyc7XG5pbXBvcnQgJy4uL2Rpc3QvaW5kZXguaHRtbCc7XG5pbXBvcnQgJy4uL2Rpc3QvYXNzZXRzL3N0eWxlcy9zY3NzL3N0eWxlcy5zY3NzJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnLi9tYWluL1JvdXRlci5qcyc7XG5pbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9tYWluL1JlbmRlcmVyLmpzJztcbmltcG9ydCBGaWx0ZXJTZXJ2aWNlIGZyb20gJy4vbWFpbi9GaWx0ZXJTZXJ2aWNlLmpzJztcbmltcG9ydCBDYXJ0U2VydmljZSBmcm9tICcuL21haW4vQ2FydFNlcnZpY2UuanMnO1xuaW1wb3J0IENhcnRPYnNlcnZlciBmcm9tICcuL21haW4vQ2FydE9ic2V2ZXIuanMnO1xuaW1wb3J0IEZvcm1TZXJ2aWNlIGZyb20gJy4vbWFpbi9Gb3JtU2VydmljZS5qcyc7XG5pbXBvcnQgQXV0aFNlcnZpY2UgZnJvbSAnLi9tYWluL0F1dGhTZXJ2aWNlLmpzJztcbmltcG9ydCB7IG1ha2VSZXF1ZXN0IH0gZnJvbSAnLi9tYWluL3V0aWxzL21ha2VSZXF1ZXN0LmpzJztcblxuXG5jbGFzcyBBcHAge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnByb2R1Y3RzID0gW107XG4gICAgdGhpcy5yb3V0ZXIgPSBuZXcgUm91dGVyKCk7XG4gICAgdGhpcy5maWx0ZXJTZXJ2aWNlID0gbmV3IEZpbHRlclNlcnZpY2UoKTtcbiAgICB0aGlzLmNhcnRTZXJ2aWNlID0gbmV3IENhcnRTZXJ2aWNlKCk7XG4gICAgdGhpcy5jYXJ0T2JzZXJ2ZXIgPSBuZXcgQ2FydE9ic2VydmVyKHRoaXMucm91dGVyKTtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlID0gbmV3IEF1dGhTZXJ2aWNlKHRoaXMucm91dGVyLCB0aGlzLmNhcnRTZXJ2aWNlKTtcbiAgICB0aGlzLmZvcm1TZXJ2aWNlID0gbmV3IEZvcm1TZXJ2aWNlKHRoaXMucm91dGVyLCB0aGlzLmF1dGhTZXJ2aWNlKTtcbiAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKHRoaXMucm91dGVyLCB0aGlzLmZpbHRlclNlcnZpY2UsIHRoaXMuY2FydFNlcnZpY2UsIHRoaXMuY2FydE9ic2VydmVyKTtcbiAgICB0aGlzLmZpbHRlclNlcnZpY2Uuc3Vic2NyaWJlKHRoaXMub25GaWx0ZXJDaGFuZ2UuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5jYXJ0U2VydmljZS5zdWJzY3JpYmUodGhpcy5vbkNhcnRDaGFuZ2UuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIG1ha2VSZXF1ZXN0KCdwcm9kdWN0cycsICdHRVQnKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IGRhdGEuanNvbigpKVxuICAgICAgLnRoZW4oKHByb2R1Y3RzKSA9PiB7XG4gICAgICAgIHRoaXMucHJvZHVjdHMgPSBwcm9kdWN0cztcbiAgICAgIH0pXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuaW5pdFJvdXRlcigpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmluaXRBcHAodGhpcy5wcm9kdWN0cyk7XG4gICAgICAgIHRoaXMucm91dGVyLnJlbmRlclJvdXRlQ29udGVudCh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5maWx0ZXJTZXJ2aWNlLmluaXQoKTtcbiAgICAgICAgdGhpcy5jYXJ0U2VydmljZS5pbml0KCk7XG4gICAgICAgIHRoaXMuZm9ybVNlcnZpY2UuaW5pdEF1dGhGb3JtcygpO1xuICAgICAgICB0aGlzLmNhcnRTZXJ2aWNlLmluaXRDYXJ0SW5wdXRIYWRsZXJzKCk7XG4gICAgICAgIHRoaXMuY2FydE9ic2VydmVyLmluaXRPYnNlcnZlcigpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpKTtcbiAgfVxuXG4gIGluaXRSb3V0ZXIoKSB7XG4gICAgT2JqZWN0LmtleXMoQ09ORklHLnJvdXRlcykuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IHsgcm91dGUsIGNvbnRlbnRJZCB9ID0gQ09ORklHLnJvdXRlc1tlbnRyeV07XG4gICAgICBpZiAocm91dGUgIT09IENPTkZJRy5yb3V0ZXMuYXV0aFBhZ2Uucm91dGUpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIuY3JlYXRlTmV3Um91dGUocm91dGUsIHRoaXMucmVuZGVyZXIucmVuZGVyUGFnZUNvbnRlbnQuYmluZCh0aGlzLnJlbmRlcmVyLCBjb250ZW50SWQsIHRoaXMucHJvZHVjdHMpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucm91dGVyLmNyZWF0ZU5ld1JvdXRlKHJvdXRlLCAoKSA9PiB7XG4gICAgICAgICAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKSB7XG4gICAgICAgICAgICBjb25zdCBjYXJ0Um91dGUgPSBDT05GSUcucm91dGVzLmNhcnRQYWdlLnJvdXRlO1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIGAvJHtjYXJ0Um91dGV9YCk7XG4gICAgICAgICAgICB0aGlzLnJvdXRlci5yZW5kZXJSb3V0ZUNvbnRlbnQod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW5kZXJQYWdlQ29udGVudC5jYWxsKHRoaXMucmVuZGVyZXIsIGNvbnRlbnRJZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG9uRmlsdGVyQ2hhbmdlKGRhdGEpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgZGF0YSk7XG4gICAgdGhpcy5yb3V0ZXIucmVuZGVyUm91dGVDb250ZW50KGRlY29kZVVSSSh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpKTtcbiAgfVxuXG4gIG9uQ2FydENoYW5nZShkYXRhKSB7XG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhDT05GSUcucm91dGVzLmNhdGFsb2d1ZVBhZ2Uucm91dGUpXG4gICAgICB8fCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoQ09ORklHLnJvdXRlcy5wcm9kdWN0UGFnZS5yb3V0ZSkpIHtcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvZHVjdHMnLCBkYXRhKTtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVuZGVyQ2FydCh0aGlzLnByb2R1Y3RzKTtcbiAgICAgIHRoaXMuY2FydFNlcnZpY2UuaW5pdENhcnRJbnB1dEhhZGxlcnMoKTtcbiAgICAgIHRoaXMuY2FydE9ic2VydmVyLmluaXRPYnNlcnZlcigpO1xuICAgIH1cbiAgfVxufVxuXG5jb25zdCBhcHAgPSBuZXcgQXBwKCk7XG4iLCJpbXBvcnQgQ09ORklHIGZyb20gJy4uL2NvbmZpZy5qcyc7XG5pbXBvcnQgeyBtYWtlUmVxdWVzdCB9IGZyb20gJy4vdXRpbHMvbWFrZVJlcXVlc3QuanMnO1xuXG5jb25zdCB7IGNhcnQsIG5hdiwgYXV0aCB9ID0gQ09ORklHLnNlbGVjdG9ycztcbmNvbnN0IHsgcm91dGUgfSA9IENPTkZJRy5yb3V0ZXMuY2FydFBhZ2U7XG5cbmNsYXNzIEF1dGhTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3Iocm91dGVyLCBjYXJ0U2VydmljZSkge1xuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICAgIHRoaXMuY2FydFNlcnZpY2UgPSBjYXJ0U2VydmljZTtcbiAgICB0aGlzLnVzZXIgPSB7fTtcbiAgICB0aGlzLmlzTG9nZ2VkSW4gPSBmYWxzZTtcbiAgICB0aGlzLmF1dGhFcnJvcnMgPSBudWxsO1xuICAgIHRoaXMub3JkZXJNZXNzc2FnZXMgPSBudWxsO1xuXG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuYXV0aEVycm9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYXV0aC5lcnJvcik7XG4gICAgdGhpcy5vcmRlck1lc3NzYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2FydC5vcmRlck1lc3NhZ2UpO1xuICB9XG5cbiAgc2lnblVzZXJJbigpIHtcbiAgICB0aGlzLnVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpO1xuICAgIGlmICh0aGlzLnVzZXIpIHtcbiAgICAgIHRoaXMuaXNMb2dnZWRJbiA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudXNlciA9IHt9O1xuICAgICAgdGhpcy5pc0xvZ2dlZEluID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMudG9nZ2xlQXV0aE9ubHlDb250ZW50KCk7XG4gIH1cblxuICBzaWduVXNlck91dCgpIHtcbiAgICB0aGlzLnVzZXIgPSB7fTtcbiAgICB0aGlzLmlzTG9nZ2VkSW4gPSBmYWxzZTtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKTtcbiAgICB0aGlzLnRvZ2dsZUF1dGhPbmx5Q29udGVudCgpO1xuICB9XG5cbiAgbG9nVXNlckluKGRhdGEpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICB0aGlzLnVzZXIgPSBkYXRhO1xuICAgIHRoaXMuaXNMb2dnZWRJbiA9IHRydWU7XG4gICAgdGhpcy50b2dnbGVBdXRoT25seUNvbnRlbnQoKTtcbiAgfVxuXG4gIHRvZ2dsZUF1dGhPbmx5Q29udGVudCgpIHtcbiAgICBjb25zdCBsb2dPdXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG5hdi5sb2dvdXQpO1xuICAgIGNvbnN0IGxvZ2luTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobmF2LmxvZ2luKTtcbiAgICBjb25zdCB1c2VySW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2FydC51c2VySW5mbyk7XG4gICAgY29uc3QgdXNlckRhdGEgPSB1c2VySW5mby5xdWVyeVNlbGVjdG9yKGNhcnQudXNlckRhdGEpO1xuXG4gICAgdXNlckRhdGEuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLFxuICAgICAgYDxwPiR7dGhpcy51c2VyLm5hbWV9PC9wPlxuICAgICAgPHA+JHt0aGlzLnVzZXIuZW1haWx9PC9wPmApO1xuXG4gICAgaWYgKHRoaXMuaXNMb2dnZWRJbikge1xuICAgICAgbG9nT3V0QnRuLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgbG9naW5MaW5rLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB1c2VySW5mby5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9IGVsc2Uge1xuICAgICAgdXNlckRhdGEudGV4dENvbnRlbnQgPSAnJztcbiAgICAgIGxvZ091dEJ0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgbG9naW5MaW5rLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgdXNlckluZm8uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gIH1cblxuICBwcm9jZXNzU2lnbkluUmVxdWVzdChkYXRhKSB7XG4gICAgbWFrZVJlcXVlc3QoJ3VzZXJzJywgJ0dFVCcsIHt9KVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgY29uc3QgZm91bmRVc2VyID0gcmVzLmZpbmQoKHVzZXIpID0+IHVzZXIuZW1haWwgPT09IGRhdGEuZW1haWwgJiYgdXNlci5wYXNzd29yZCA9PT0gZGF0YS5wYXNzd29yZCk7XG4gICAgICAgIGlmIChmb3VuZFVzZXIpIHtcbiAgICAgICAgICBjb25zdCB7IG5hbWUsIGVtYWlsIH0gPSBmb3VuZFVzZXI7XG4gICAgICAgICAgdGhpcy5sb2dVc2VySW4oe1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCBgLyR7cm91dGV9YCk7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIucmVuZGVyUm91dGVDb250ZW50KHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5hdXRoRXJyb3JzLnRleHRDb250ZW50ID0gJ0xvZ2luIGZhaWxlZCc7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gIH1cblxuICBwcm9jZXNzU2lnblVwUmVxdWVzdChkYXRhKSB7XG4gICAgbWFrZVJlcXVlc3QoJ3VzZXJzJywgJ1BPU1QnLCBkYXRhKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAxKSB7XG4gICAgICAgICAgY29uc3QgeyBuYW1lLCBlbWFpbCB9ID0gZGF0YTtcbiAgICAgICAgICB0aGlzLmxvZ1VzZXJJbih7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIGAvJHtyb3V0ZX1gKTtcbiAgICAgICAgICB0aGlzLnJvdXRlci5yZW5kZXJSb3V0ZUNvbnRlbnQod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgfVxuXG4gIHByb2Nlc3NPcmRlclJlcXVlc3QoKSB7XG4gICAgaWYgKHRoaXMuaXNMb2dnZWRJbikge1xuICAgICAgdGhpcy5vcmRlck1lc3NzYWdlcy50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgY29uc3QgcHJvZHVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAke2NhcnQuZGV0YWlsc30gZGl2YCk7XG4gICAgICBpZiAocHJvZHVjdHMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IHsgbmFtZSwgZW1haWwgfSA9IHRoaXMudXNlcjtcbiAgICAgICAgY29uc3Qgb3JkZXJEYXRhID0ge1xuICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgZW1haWwsXG4gICAgICAgIH07XG5cbiAgICAgICAgcHJvZHVjdHMuZm9yRWFjaCgocHJvZHVjdCkgPT4ge1xuICAgICAgICAgIG9yZGVyRGF0YVtwcm9kdWN0LmlkXSA9IHByb2R1Y3QuZGF0YXNldC52YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWFrZVJlcXVlc3QoJ29yZGVycycsICdQT1NUJywgb3JkZXJEYXRhKVxuICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDEpIHtcbiAgICAgICAgICAgICAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGNhcnQuaXRlbSk7XG4gICAgICAgICAgICAgIGNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGlkIH0gPSBjYXJkLmRhdGFzZXQ7XG4gICAgICAgICAgICAgICAgaWYgKG9yZGVyRGF0YVtpZF0pIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuY2FydFNlcnZpY2UuZGVsZXRlUHJvZHVjdEZyb21DYXJ0KGlkKTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRvdGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjYXJ0LnRvdGFsKTtcbiAgICAgICAgICAgICAgICAgIHRvdGFsLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgICAgICAgICAgICBjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjYXJ0LmRldGFpbHMpO1xuICAgICAgICAgICAgICAgICAgZGV0YWlscy50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHRoaXMub3JkZXJNZXNzc2FnZXMudGV4dENvbnRlbnQgPSAnWW91ciBvcmRlciB3YXMgcGxhY2VkISc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMub3JkZXJNZXNzc2FnZXMudGV4dENvbnRlbnQgPSAnU2VydmVyIHByb2JsZW0uIFBsZWFzZSwgdHJ5IGFnYWluIGxhdGVyJztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5vcmRlck1lc3NzYWdlcy50ZXh0Q29udGVudCA9ICdZb3UgaGF2ZW5cXCd0IGNob3NlbiBhbnl0aGluZyB5ZXQnO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBdXRoU2VydmljZTtcbiIsImltcG9ydCBDT05GSUcgZnJvbSAnLi4vY29uZmlnLmpzJztcblxuY29uc3QgeyBjYXJ0IH0gPSBDT05GSUcuc2VsZWN0b3JzO1xuXG5jbGFzcyBDYXJ0T2JzZXJ2ZXIge1xuICBjb25zdHJ1Y3Rvcihyb3V0ZXIpIHtcbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgICB0aGlzLmNhcnRPcmRlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2FydC5vcmRlcik7XG4gICAgdGhpcy5vcmRlck1lc3NzYWdlcyA9IG51bGw7XG4gIH1cblxuICBpbml0T2JzZXJ2ZXIoKSB7XG4gICAgY29uc3Qgbm9kZXNUb09ic2VydmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGNhcnQuaW5wdXQpO1xuICAgIGlmIChub2Rlc1RvT2JzZXJ2ZSkge1xuICAgICAgdGhpcy5pbml0Q2FydENhbGN1bGF0b3IoKTtcbiAgICAgIHRoaXMuY2FsY3VsYXRlVG90YWwoKTtcbiAgICB9XG4gIH1cblxuICBpbml0Q2FydENhbGN1bGF0b3IoKSB7XG4gICAgY29uc3QgZm9ybXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGNhcnQuaW5wdXQpO1xuICAgIGNvbnN0IGRlbGV0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGNhcnQuZGVsZXRlKTtcblxuICAgIGZvcm1zLmZvckVhY2goKGZvcm0pID0+IHtcbiAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4gdGhpcy5jYWxjdWxhdGVUb3RhbCgpKTtcbiAgICB9KTtcblxuICAgIGRlbGV0ZUJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICB0aGlzLmRlbGV0ZUNhcmRPcmRlck5vdGUoZS50YXJnZXQuZGF0YXNldC5pZCk7XG4gICAgICAgIHRoaXMuY2FsY3VsYXRlVG90YWwoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgY2FsY3VsYXRlVG90YWwoKSB7XG4gICAgY29uc3QgdG90YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNhcnQudG90YWwpO1xuXG4gICAgY29uc3QgY2FydEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChjYXJ0Lml0ZW0pO1xuXG4gICAgaWYgKGNhcnRJdGVtcy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHByaWNlVG90YWwgPSBBcnJheS5mcm9tKGNhcnRJdGVtcykucmVkdWNlKCh0b3RhbFN1bSwgY3VycmVudEl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgZmxhZyA9IGN1cnJlbnRJdGVtLnF1ZXJ5U2VsZWN0b3IoY2FydC5jaG9vc2UpO1xuICAgICAgICBjb25zdCB7IGlkIH0gPSBjdXJyZW50SXRlbS5kYXRhc2V0O1xuXG4gICAgICAgIGlmIChmbGFnLmNoZWNrZWQpIHtcbiAgICAgICAgICBjb25zdCBuYW1lID0gY3VycmVudEl0ZW0ucXVlcnlTZWxlY3RvcihjYXJ0Lm5hbWUpLnRleHRDb250ZW50O1xuICAgICAgICAgIGNvbnN0IHByaWNlID0gY3VycmVudEl0ZW0ucXVlcnlTZWxlY3RvcihjYXJ0LnByaWNlKS5kYXRhc2V0LnZhbHVlO1xuICAgICAgICAgIGNvbnN0IHF1YW50aXR5ID0gY3VycmVudEl0ZW0ucXVlcnlTZWxlY3RvcihjYXJ0LnF1YW50aXR5KS52YWx1ZTtcbiAgICAgICAgICB0b3RhbFN1bSArPSBwcmljZSAqIHF1YW50aXR5O1xuICAgICAgICAgIHRoaXMucmVuZGVyQ2FydE9yZGVyRGV0YWlscyhpZCwgbmFtZSwgcXVhbnRpdHkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZGVsZXRlQ2FyZE9yZGVyTm90ZShpZCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdG90YWxTdW07XG4gICAgICB9LCAwKTtcblxuICAgICAgdG90YWwudGV4dENvbnRlbnQgPSBwcmljZVRvdGFsID4gMCA/IHByaWNlVG90YWwudG9GaXhlZCgyKSA6ICdObyBpdGVtcyBjaG9zZW4nO1xuICAgIH0gZWxzZSB7XG4gICAgICB0b3RhbC50ZXh0Q29udGVudCA9ICdObyBpdGVtcyBjaG9zZW4nO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlckNhcnRPcmRlckRldGFpbHMoaWQsIG5hbWUsIHF1YW50aXR5KSB7XG4gICAgY29uc3QgY2FydERldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNhcnQuZGV0YWlscyk7XG4gICAgaWYgKGNhcnREZXRhaWxzLmNoaWxkcmVuKSB7XG4gICAgICBjb25zdCBmb3VuZCA9IEFycmF5LmZyb20oY2FydERldGFpbHMuY2hpbGRyZW4pXG4gICAgICAgIC5maW5kKChpdGVtKSA9PiBOdW1iZXIoaXRlbS5pZCkgPT09IE51bWJlcihpZCkpO1xuXG4gICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgZm91bmQudGV4dENvbnRlbnQgPSBgJHtuYW1lfSA6ICR7cXVhbnRpdHl9YDtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXRhaWxzLnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XG4gICAgZGV0YWlscy5kYXRhc2V0LnZhbHVlID0gcXVhbnRpdHk7XG5cbiAgICBkZXRhaWxzLnRleHRDb250ZW50ID0gYCR7bmFtZX0gOiAke3F1YW50aXR5fWA7XG4gICAgY2FydERldGFpbHMuYXBwZW5kQ2hpbGQoZGV0YWlscyk7XG4gIH1cblxuICBkZWxldGVDYXJkT3JkZXJOb3RlKGlkKSB7XG4gICAgY29uc3QgY2FydERldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNhcnQuZGV0YWlscyk7XG4gICAgY29uc3QgZm91bmQgPSBBcnJheS5mcm9tKGNhcnREZXRhaWxzLmNoaWxkcmVuKVxuICAgICAgLmZpbmQoKGl0ZW0pID0+IE51bWJlcihpdGVtLmlkKSA9PT0gTnVtYmVyKGlkKSk7XG5cbiAgICBpZiAoZm91bmQpIHtcbiAgICAgIGZvdW5kLnJlbW92ZSgpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJ0T2JzZXJ2ZXI7XG4iLCJpbXBvcnQgQ09ORklHIGZyb20gJy4uL2NvbmZpZy5qcyc7XG5pbXBvcnQgT2JzZXJ2YWJsZSBmcm9tICcuL09ic2VydmFibGUuanMnO1xuXG5jb25zdCB7IGNhcnQsIGNhdGFsb2d1ZSB9ID0gQ09ORklHLnNlbGVjdG9ycztcblxuY2xhc3MgQ2FydFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNhcnRzID0gW107XG4gICAgdGhpcy5wcm9kdWN0c0luQ2FydCA9IHt9O1xuICAgIHRoaXMub2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlKCk7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBzdWJzY3JpYmUoZm4pIHtcbiAgICB0aGlzLm9ic2VydmFibGUuc3Vic2NyaWJlKGZuKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5jYXJ0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY2F0YWxvZ3VlLmFkZCk7XG4gICAgdGhpcy5jYXJ0cy5mb3JFYWNoKChjYXJ0SXRlbSkgPT4ge1xuICAgICAgY2FydEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtSWQgPSBlLnRhcmdldC5jbG9zZXN0KGNhdGFsb2d1ZS5pdGVtKS5kYXRhc2V0LmlkO1xuICAgICAgICB0aGlzLmFkZFByb2R1Y3RUb0NhcnQoaXRlbUlkKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHRoaXMuaW5pdFByb2R1Y3RDYXJ0KCk7XG4gICAgdGhpcy5pbml0Q2FydElucHV0SGFkbGVycygpO1xuICB9XG5cbiAgaW5pdFByb2R1Y3RDYXJ0KCkge1xuICAgIHRoaXMucHJvZHVjdHNJbkNhcnQgPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvZHVjdHMnKSkgfHwge307XG4gIH1cblxuICB1cGRhdGVMb2NhbFN0b3JhZ2UoKSB7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9kdWN0cycsIEpTT04uc3RyaW5naWZ5KHRoaXMucHJvZHVjdHNJbkNhcnQpKTtcbiAgICB0aGlzLm9ic2VydmFibGUubmV4dChKU09OLnN0cmluZ2lmeSh0aGlzLnByb2R1Y3RzSW5DYXJ0KSk7XG4gIH1cblxuXG4gIGRlbGV0ZVByb2R1Y3RGcm9tQ2FydChpZCkge1xuICAgIGNvbnN0IGNhcnRJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY2FydC5pdGVtKTtcbiAgICBjb25zdCBpdGVtVG9EZWxldGUgPSBBcnJheS5mcm9tKGNhcnRJdGVtcykuZmluZCgoaXRlbSkgPT4gTnVtYmVyKGl0ZW0uZGF0YXNldC5pZCkgPT09IE51bWJlcihpZCkpO1xuICAgIGlmIChpdGVtVG9EZWxldGUpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLnByb2R1Y3RzSW5DYXJ0W2lkXTtcbiAgICAgIGl0ZW1Ub0RlbGV0ZS5yZW1vdmUoKTtcbiAgICAgIHRoaXMudXBkYXRlTG9jYWxTdG9yYWdlKCk7XG4gICAgfVxuICB9XG5cbiAgYWRkUHJvZHVjdFRvQ2FydChpdGVtSWQpIHtcbiAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLnByb2R1Y3RzSW5DYXJ0LCBpdGVtSWQpKSB7XG4gICAgICB0aGlzLnByb2R1Y3RzSW5DYXJ0W2l0ZW1JZF0gPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb2R1Y3RzSW5DYXJ0W2l0ZW1JZF0gKz0gMTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbiAgfVxuXG4gIGluaXRDYXJ0SW5wdXRIYWRsZXJzKCkge1xuICAgIHRoaXMuaW5pdERlbGV0ZUJ1dHRvbnMoKTtcbiAgICB0aGlzLmluaXRDYXJ0TnVtYmVySW5wdXQoKTtcbiAgfVxuXG5cbiAgaW5pdERlbGV0ZUJ1dHRvbnMoKSB7XG4gICAgY29uc3QgZGVsZXRlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY2FydC5kZWxldGUpO1xuICAgIGRlbGV0ZUJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCB7IGlkIH0gPSBlLnRhcmdldC5kYXRhc2V0O1xuICAgICAgICB0aGlzLmRlbGV0ZVByb2R1Y3RGcm9tQ2FydChpZCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRDYXJ0TnVtYmVySW5wdXQoKSB7XG4gICAgY29uc3QgbnVtYmVySW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChjYXJ0LnF1YW50aXR5KTtcbiAgICBudW1iZXJJbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICAgIGlmIChOdW1iZXIoZS50YXJnZXQudmFsdWUpIDwgMSkge1xuICAgICAgICAgIGUudGFyZ2V0LnZhbHVlID0gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSA+IE51bWJlcihlLnRhcmdldC5tYXgpKSB7XG4gICAgICAgICAgZS50YXJnZXQudmFsdWUgPSBlLnRhcmdldC5tYXg7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBpZCB9ID0gZS50YXJnZXQuZGF0YXNldDtcbiAgICAgICAgdGhpcy5wcm9kdWN0c0luQ2FydFtpZF0gPSBOdW1iZXIoZS50YXJnZXQudmFsdWUpO1xuXG4gICAgICAgIHRoaXMudXBkYXRlTG9jYWxTdG9yYWdlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJ0U2VydmljZTtcbiIsImltcG9ydCBDT05GSUcgZnJvbSAnLi4vY29uZmlnLmpzJztcbmltcG9ydCBPYnNlcnZhYmxlIGZyb20gJy4vT2JzZXJ2YWJsZS5qcyc7XG5cbmNvbnN0IHsgZmlsdGVyLCBob21lIH0gPSBDT05GSUcuc2VsZWN0b3JzO1xuXG5jbGFzcyBGaWx0ZXJTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jaGVja2JveGVzID0gW107XG4gICAgdGhpcy5ob21lUGFnZUZpbHRlcnMgPSBbXTtcbiAgICB0aGlzLnByaWNlSW5wdXQgPSBudWxsO1xuICAgIHRoaXMucmVzZXRGaWx0ZXJzQnRuID0gbnVsbDtcbiAgICB0aGlzLmZpbHRlcnMgPSB7fTtcbiAgICB0aGlzLm9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmNoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGZpbHRlci5jaGVja2JveCk7XG4gICAgdGhpcy5ob21lUGFnZUZpbHRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGhvbWUuaW1nKTtcbiAgICB0aGlzLnJlc2V0RmlsdGVyc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZmlsdGVyLnJlc2V0KTtcbiAgICB0aGlzLnByaWNlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGZpbHRlci5wcmljZSk7XG5cbiAgICB0aGlzLnJlc2V0RmlsdGVyc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMucmVzZXRGaWx0ZXJzKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnByaWNlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgIHRoaXMub25JbnB1dFJhbmdlQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgIHRoaXMuaGFuZGxlRmlsdGVyQ2hhbmdlKCk7XG4gICAgICBjb25zdCBjdXJyZW50VmFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihmaWx0ZXIuY3VycmVudFByaWNlKTtcbiAgICAgIGN1cnJlbnRWYWwudGV4dENvbnRlbnQgPSBlLnRhcmdldC52YWx1ZTtcbiAgICB9KTtcblxuICAgIHRoaXMuY2hlY2tib3hlcy5mb3JFYWNoKChjaGVja2JveCkgPT4ge1xuICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgICB0aGlzLm9uQ2hlY2tCb3hDaGVja2VkKGUudGFyZ2V0Lm5hbWUsIGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLm9uQ2hlY2tCb3hVbkNoZWNrZWQoZS50YXJnZXQubmFtZSwgZS50YXJnZXQudmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGFuZGxlRmlsdGVyQ2hhbmdlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuaG9tZVBhZ2VGaWx0ZXJzLmZvckVhY2goKGltZykgPT4ge1xuICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgdGhpcy5vbkNoZWNrQm94Q2hlY2tlZChlLnRhcmdldC5uYW1lLCBlLnRhcmdldC5kYXRhc2V0LnZhbHVlKTtcbiAgICAgICAgdGhpcy5oYW5kbGVGaWx0ZXJDaGFuZ2UoKTtcbiAgICAgICAgdGhpcy5pbml0RmlsdGVycygpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmdldEZpbHRlcnMoKTtcbiAgICB0aGlzLmluaXRGaWx0ZXJzKCk7XG4gIH1cblxuICBzdWJzY3JpYmUoZm4pIHtcbiAgICB0aGlzLm9ic2VydmFibGUuc3Vic2NyaWJlKGZuKTtcbiAgfVxuXG4gIGluaXRGaWx0ZXJzKCkge1xuICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmZpbHRlcnMpLmxlbmd0aCkge1xuICAgICAgdGhpcy5jaGVja2JveGVzLmZvckVhY2goKGN1cnJlbnRGaWx0ZXIpID0+IHtcbiAgICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gY3VycmVudEZpbHRlcjtcbiAgICAgICAgaWYgKHRoaXMuZmlsdGVyc1tuYW1lXSAmJiB0aGlzLmZpbHRlcnNbbmFtZV0uaW5jbHVkZXModmFsdWUpKSB7XG4gICAgICAgICAgY3VycmVudEZpbHRlci5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBjdXJyZW50RmlsdGVyLmNsb3Nlc3QoZmlsdGVyLmNvbnRlbnQpO1xuICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICh0aGlzLmZpbHRlcnMucHJpY2UpIHtcbiAgICAgIHRoaXMucHJpY2VJbnB1dC52YWx1ZSA9IHRoaXMuZmlsdGVycy5wcmljZTtcbiAgICAgIGNvbnN0IGN1cnJlbnRWYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGZpbHRlci5jdXJyZW50UHJpY2UpO1xuICAgICAgY3VycmVudFZhbC50ZXh0Q29udGVudCA9IHRoaXMuZmlsdGVycy5wcmljZTtcbiAgICB9XG4gIH1cblxuICByZXNldEZpbHRlcnMoKSB7XG4gICAgdGhpcy5maWx0ZXJzID0ge307XG4gICAgdGhpcy5oYW5kbGVGaWx0ZXJDaGFuZ2UoKTtcbiAgICB0aGlzLmNoZWNrYm94ZXMuZm9yRWFjaCgoY2hlY2tib3gpID0+IHtcbiAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcbiAgICB9KTtcbiAgICB0aGlzLnByaWNlSW5wdXQudmFsdWUgPSB0aGlzLnByaWNlSW5wdXQubWF4O1xuICB9XG5cbiAgZ2V0RmlsdGVycygpIHtcbiAgICBjb25zdCBmaWx0ZXJzU3RyaW5nID0gZGVjb2RlVVJJKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuXG4gICAgY29uc3QgZmlsdGVycyA9IGZpbHRlcnNTdHJpbmdcbiAgICAgIC5yZXBsYWNlKCc/JywgJycpXG4gICAgICAuc3BsaXQoJyYnKVxuICAgICAgLmZpbHRlcihCb29sZWFuKVxuICAgICAgLnJlZHVjZSgoZmlsdGVyT2JqZWN0LCBjdXJyZW5GaWx0ZXJWYWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBbZmlsdGVyQmFzZSwgZmlsdGVyVmFsdWVdID0gY3VycmVuRmlsdGVyVmFsdWUuc3BsaXQoJz0nKTtcbiAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZmlsdGVyT2JqZWN0LCBmaWx0ZXJCYXNlKSkge1xuICAgICAgICAgIGZpbHRlck9iamVjdFtmaWx0ZXJCYXNlXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGZpbHRlck9iamVjdFtmaWx0ZXJCYXNlXS5wdXNoKGZpbHRlclZhbHVlKTtcblxuICAgICAgICByZXR1cm4gZmlsdGVyT2JqZWN0O1xuICAgICAgfSwge30pO1xuXG4gICAgdGhpcy5maWx0ZXJzID0gZmlsdGVycztcblxuICAgIHJldHVybiB0aGlzLmZpbHRlcnM7XG4gIH1cblxuICBvbklucHV0UmFuZ2VDaGFuZ2UodmFsdWUpIHtcbiAgICB0aGlzLmZpbHRlcnMucHJpY2UgPSBbdmFsdWVdO1xuICB9XG5cbiAgb25DaGVja0JveENoZWNrZWQobmFtZSwgdmFsdWUpIHtcbiAgICBpZiAoIXRoaXMuZmlsdGVyc1tuYW1lXSkge1xuICAgICAgdGhpcy5maWx0ZXJzW25hbWVdID0gW107XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZmlsdGVyc1tuYW1lXSAmJiAhdGhpcy5maWx0ZXJzW25hbWVdLmluY2x1ZGVzKHZhbHVlKSkge1xuICAgICAgdGhpcy5maWx0ZXJzW25hbWVdLnB1c2godmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2hlY2tCb3hVbkNoZWNrZWQobmFtZSwgdmFsdWUpIHtcbiAgICBpZiAodGhpcy5maWx0ZXJzW25hbWVdICYmIHRoaXMuZmlsdGVyc1tuYW1lXS5pbmNsdWRlcyh2YWx1ZSkpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5maWx0ZXJzW25hbWVdLmluZGV4T2YodmFsdWUpO1xuICAgICAgdGhpcy5maWx0ZXJzW25hbWVdLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZmlsdGVyc1tuYW1lXSAmJiB0aGlzLmZpbHRlcnNbbmFtZV0ubGVuZ3RoIDwgMSkge1xuICAgICAgZGVsZXRlIHRoaXMuZmlsdGVyc1tuYW1lXTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVGaWx0ZXJDaGFuZ2UoKSB7XG4gICAgY29uc3QgcXVlcnkgPSB0aGlzLmNyZWF0ZVF1ZXJ5KCk7XG4gICAgaWYgKCFPYmplY3Qua2V5cyh0aGlzLmZpbHRlcnMpLmxlbmd0aCkge1xuICAgICAgdGhpcy5vYnNlcnZhYmxlLm5leHQoJy9jYXRhbG9ndWUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vYnNlcnZhYmxlLm5leHQocXVlcnkpO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZVF1ZXJ5KCkge1xuICAgIGxldCBxdWVyeVN0cmluZyA9ICcnO1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVzXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLmZpbHRlcnMpKSB7XG4gICAgICB2YWx1ZXMuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgY29uc3QgcXVlcnlTdHJpbmdFbGVtZW50ID0gYCR7a2V5fT0ke3ZhbHVlfSZgO1xuICAgICAgICBxdWVyeVN0cmluZyArPSBxdWVyeVN0cmluZ0VsZW1lbnQ7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYC9jYXRhbG9ndWU/JHtxdWVyeVN0cmluZ31gO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlclNlcnZpY2U7XG4iLCJpbXBvcnQgQ09ORklHIGZyb20gJy4uL2NvbmZpZy5qcyc7XG5pbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi91dGlscy92YWxpZGF0b3IuanMnO1xuXG5jb25zdCB7IGNhcnQsIG5hdiwgZm9ybXMgfSA9IENPTkZJRy5zZWxlY3RvcnM7XG5cbmNsYXNzIEZvcm1TZXJ2aWNlIHtcbiAgY29uc3RydWN0b3Iocm91dGVyLCBhdXRoKSB7XG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gICAgdGhpcy5zaWduSW5Gb3JtID0gbnVsbDtcbiAgICB0aGlzLnNpZ25VcEZvcm0gPSBudWxsO1xuICAgIHRoaXMudmFsaWRhdGlvbkVycm9ycyA9IHt9O1xuICAgIHRoaXMuYXV0aCA9IGF1dGg7XG4gIH1cblxuICBpbml0QXV0aEZvcm1zKCkge1xuICAgIHRoaXMuaW5pdFNpZ25JbkZvcm0oKTtcbiAgICB0aGlzLmluaXRTaWduVXBGb3JtKCk7XG4gICAgdGhpcy50cmlnZ2VyT25JbnB1dENoYW5nZVZhbGlkYXRpb24oKTtcbiAgICB0aGlzLmF1dGguaW5pdCgpO1xuICAgIHRoaXMuYXV0aC5zaWduVXNlckluKCk7XG5cbiAgICBjb25zdCBsb2dPdXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG5hdi5sb2dvdXQpO1xuICAgIGxvZ091dEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuYXV0aC5zaWduVXNlck91dCgpO1xuICAgIH0pO1xuXG4gICAgY29uc3Qgb3JkZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNhcnQuYnV5KTtcbiAgICBvcmRlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLmF1dGguaXNMb2dnZWRJbikge1xuICAgICAgICB0aGlzLmF1dGgucHJvY2Vzc09yZGVyUmVxdWVzdCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsICcvbG9naW4nKTtcbiAgICAgICAgdGhpcy5yb3V0ZXIucmVuZGVyUm91dGVDb250ZW50KHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpbml0U2lnbkluRm9ybSgpIHtcbiAgICB0aGlzLnNpZ25JbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmb3Jtcy5zaWduSW4pO1xuICAgIHRoaXMuc2lnbkluRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5hdXRoLmF1dGhFcnJvcnMudGV4dENvbnRlbnQgPSAnJztcbiAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmdldEZvcm1EYXRhKGUudGFyZ2V0KTtcblxuICAgICAgaWYgKCFPYmplY3Qua2V5cyh0aGlzLnZhbGlkYXRpb25FcnJvcnMpLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmF1dGgucHJvY2Vzc1NpZ25JblJlcXVlc3QoZGF0YSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpbml0U2lnblVwRm9ybSgpIHtcbiAgICB0aGlzLnNpZ25VcEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmb3Jtcy5zaWduVXApO1xuICAgIHRoaXMuc2lnblVwRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5hdXRoLmF1dGhFcnJvcnMudGV4dENvbnRlbnQgPSAnJztcbiAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmdldEZvcm1EYXRhKGUudGFyZ2V0KTtcblxuICAgICAgaWYgKCFPYmplY3Qua2V5cyh0aGlzLnZhbGlkYXRpb25FcnJvcnMpLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmF1dGgucHJvY2Vzc1NpZ25VcFJlcXVlc3QoZGF0YSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB2YWxpZGF0ZUlucHV0RmllbGQoZmllbGQpIHtcbiAgICBjb25zdCBhY3RpdmVGb3JtID0gZmllbGQucGFyZW50RWxlbWVudDtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBmaWVsZDtcbiAgICBjb25zdCB2YWxpZGF0aW9uUmVzdWx0ID0gdmFsaWRhdGUobmFtZSwgdmFsdWUsIENPTkZJRy52YWxpZGF0aW9uUnVsZXNbbmFtZV0pO1xuICAgIHRoaXMuZGlzcGxheUVycm9ycyhhY3RpdmVGb3JtLCBuYW1lLCB2YWxpZGF0aW9uUmVzdWx0W25hbWVdKTtcbiAgICB0aGlzLnVwZGF0ZVZhbGlkYXRpb25FcnJvcnModmFsaWRhdGlvblJlc3VsdCwgbmFtZSk7XG4gIH1cblxuICB1cGRhdGVWYWxpZGF0aW9uRXJyb3JzKHZhbGlkYXRpb25SZXN1bHQsIGZpZWxkTmFtZSkge1xuICAgIGlmICghT2JqZWN0LmtleXModmFsaWRhdGlvblJlc3VsdCkubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgdGhpcy52YWxpZGF0aW9uRXJyb3JzW2ZpZWxkTmFtZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmFsaWRhdGlvbkVycm9ycyA9IE9iamVjdC5hc3NpZ24odGhpcy52YWxpZGF0aW9uRXJyb3JzLCB2YWxpZGF0aW9uUmVzdWx0KTtcbiAgICB9XG4gIH1cblxuICBkaXNwbGF5RXJyb3JzKGFjdGl2ZUZvcm0sIG5hbWUsIGVycm9ycykge1xuICAgIGNvbnN0IGVycm9yRmllbGQgPSBhY3RpdmVGb3JtLnF1ZXJ5U2VsZWN0b3IoYC4ke25hbWV9LWVycm9yYCk7XG5cbiAgICBpZiAoZXJyb3JzKSB7XG4gICAgICBlcnJvckZpZWxkLnRleHRDb250ZW50ID0gZXJyb3JzLnJlZHVjZSgoZXJyb3JTdHJpbmcsIG1lc3NhZ2UpID0+IHtcbiAgICAgICAgZXJyb3JTdHJpbmcgKz0gYCR7bWVzc2FnZX0gYDtcblxuICAgICAgICByZXR1cm4gZXJyb3JTdHJpbmc7XG4gICAgICB9LCAnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVycm9yRmllbGQudGV4dENvbnRlbnQgPSAnJztcbiAgICB9XG4gIH1cblxuICB0cmlnZ2VyT25JbnB1dENoYW5nZVZhbGlkYXRpb24oKSB7XG4gICAgdGhpcy5zaWduSW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcbiAgICAgIHRoaXMudmFsaWRhdGVJbnB1dEZpZWxkKGUudGFyZ2V0KTtcbiAgICB9KTtcbiAgICB0aGlzLnNpZ25VcEZvcm0uYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xuICAgICAgdGhpcy52YWxpZGF0ZUlucHV0RmllbGQoZS50YXJnZXQpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0Rm9ybURhdGEoZm9ybSkge1xuICAgIGNvbnN0IGF1dGhEYXRhID0ge307XG4gICAgY29uc3QgaW5wdXRzID0gZm9ybS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKTtcbiAgICBBcnJheS5mcm9tKGlucHV0cykuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgIHRoaXMudmFsaWRhdGVJbnB1dEZpZWxkKGlucHV0KTtcbiAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGlucHV0O1xuICAgICAgYXV0aERhdGFbbmFtZV0gPSB2YWx1ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBhdXRoRGF0YTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtU2VydmljZTtcbiIsImNsYXNzIE9ic2VydmFibGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnN1YnNjcmliZXJzID0gW107XG4gIH1cblxuICBzdWJzY3JpYmUoZm4pIHtcbiAgICB0aGlzLnN1YnNjcmliZXJzLnB1c2goZm4pO1xuICB9XG5cbiAgbmV4dChkYXRhKSB7XG4gICAgdGhpcy5zdWJzY3JpYmVycy5mb3JFYWNoKChzdWJzY3JpYmVkRm4pID0+IHtcbiAgICAgIHN1YnNjcmliZWRGbihkYXRhKTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBPYnNlcnZhYmxlO1xuIiwiaW1wb3J0IENPTkZJRyBmcm9tICcuLi9jb25maWcuanMnO1xuaW1wb3J0IHJlbmRlck5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dENvbXBvbmVudHMvbmF2YmFyLmpzJztcbmltcG9ydCByZW5kZXJIb21lUGFnZSBmcm9tICcuLi9jb21wb25lbnRzL2hvbWVQYWdlQ29tcG9uZW50cy9ob21lcGFnZS5qcyc7XG5pbXBvcnQgcmVuZGVyQ2F0YWxvZ3VlIGZyb20gJy4uL2NvbXBvbmVudHMvY2F0YWxvZ3VlQ29tcG9uZW50cy9jYXRhbG9ndWUuanMnO1xuaW1wb3J0IEZpbHRlcnMgZnJvbSAnLi4vY29tcG9uZW50cy9jYXRhbG9ndWVDb21wb25lbnRzL2ZpbHRlcnMuanMnO1xuaW1wb3J0IENhcnQgZnJvbSAnLi4vY29tcG9uZW50cy9jYXJ0Q29tcG9uZW50cy9jYXJ0LmpzJztcbmltcG9ydCByZW5kZXJPcmRlckNhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9jYXJ0Q29tcG9uZW50cy9vcmRlci5qcyc7XG5pbXBvcnQgU2luZ2xlUGFnZSBmcm9tICcuLi9jb21wb25lbnRzL3NpbmdsZVBhZ2VDb21wb25lbnRzL3NpbmdsZVBhZ2UnO1xuaW1wb3J0IHJlbmRlckF1dGhGb3JtcyBmcm9tICcuLi9jb21wb25lbnRzL2F1dGhDb21wb25lbnRzL2xvZ2luLmpzJztcbmltcG9ydCByZW5kZXJBYm91dFBhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9hYm91dENvbXBvbmVudHMvYWJvdXRQYWdlLmpzJztcbmltcG9ydCByZW5kZXJFcnJvclBhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9lcnJvckNvbXBvbmVudHMvZXJyb3JQYWdlLmpzJztcblxuY29uc3QgeyBjYXRhbG9ndWUgfSA9IENPTkZJRy5zZWxlY3RvcnM7XG5cbmNsYXNzIFJlbmRlcmVyIHtcbiAgY29uc3RydWN0b3Iocm91dGVyLCBjaGVja2JveFNlcnZpY2UsIGNhcnRTZXJ2aWNlLCBjYXJ0T2JzZXJ2ZXIpIHtcbiAgICB0aGlzLmFwcENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHBDb250ZW50LXdyYXBwZXInKTtcbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgICB0aGlzLmNoZWNrYm94U2VydmljZSA9IGNoZWNrYm94U2VydmljZTtcbiAgICB0aGlzLmNhcnRTZXJ2aWNlID0gY2FydFNlcnZpY2U7XG4gICAgdGhpcy5jYXJ0T2JzZXJ2ZXIgPSBjYXJ0T2JzZXJ2ZXI7XG4gIH1cblxuICBpbml0QXBwKGRhdGEpIHtcbiAgICByZW5kZXJIb21lUGFnZSh0aGlzLnJvdXRlci5yZW5kZXJSb3V0ZUNvbnRlbnQuYmluZCh0aGlzLnJvdXRlcikpO1xuICAgIHJlbmRlckFib3V0UGFnZSgpO1xuICAgIHJlbmRlck5hdmJhcih0aGlzLnJvdXRlci5yZW5kZXJSb3V0ZUNvbnRlbnQuYmluZCh0aGlzLnJvdXRlcikpO1xuICAgIHJlbmRlckNhdGFsb2d1ZShkYXRhLCB0aGlzLnJvdXRlci5yZW5kZXJSb3V0ZUNvbnRlbnQuYmluZCh0aGlzLnJvdXRlcikpO1xuICAgIHRoaXMucmVuZGVyQ2FydChkYXRhKTtcbiAgICB0aGlzLnJlbmRlckZpbHRlcnMoZGF0YSk7XG4gICAgcmVuZGVyT3JkZXJDYXJkKCk7XG4gICAgcmVuZGVyQXV0aEZvcm1zKCk7XG4gICAgcmVuZGVyRXJyb3JQYWdlKCk7XG4gICAgdGhpcy5hcHBDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIH1cblxuICByZW5kZXJDYXJ0KGRhdGEpIHtcbiAgICBjb25zdCBjYXJ0ID0gbmV3IENhcnQoKTtcbiAgICBjYXJ0LmluaXQodGhpcy5jYXJ0U2VydmljZS5wcm9kdWN0c0luQ2FydCwgZGF0YSk7XG4gIH1cblxuICByZW5kZXJGaWx0ZXJzKGRhdGEpIHtcbiAgICBjb25zdCBmaWx0ZXJzID0gbmV3IEZpbHRlcnMoKTtcbiAgICBmaWx0ZXJzLmRyYXdGaWx0ZXJzKGRhdGEpO1xuICB9XG5cbiAgcmVuZGVyU2luZ2xlUGFnZShkYXRhKSB7XG4gICAgY29uc3Qgc2luZ2xlUGFnZSA9IG5ldyBTaW5nbGVQYWdlKCk7XG4gICAgc2luZ2xlUGFnZS5kcmF3U2luZ2xlUGFnZShkYXRhKTtcblxuICAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaW5nbGVQYWdlX19pdGVtX2FkZCcpO1xuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IGl0ZW1JZCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnL3Byb2R1Y3QvJylbMV07XG4gICAgICB0aGlzLmNhcnRTZXJ2aWNlLmFkZFByb2R1Y3RUb0NhcnQoaXRlbUlkKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRpc3BsYXlQYWdlQ29udGVudChjb250ZW50SWQpIHtcbiAgICBjb25zdCBhcHBDb250ZW50RWxlbWVudHMgPSBBcnJheS5mcm9tKHRoaXMuYXBwQ29udGFpbmVyLmNoaWxkcmVuKTtcbiAgICBbLi4uYXBwQ29udGVudEVsZW1lbnRzXS5mb3JFYWNoKChkaXYpID0+IHtcbiAgICAgIGRpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0pO1xuICAgIGNvbnN0IHBhZ2VDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGVudElkKTtcbiAgICBwYWdlQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgfVxuXG4gIHJlbmRlclBhZ2VDb250ZW50KGNvbnRlbnRJZCwgZGF0YSkge1xuICAgIHRoaXMuZGlzcGxheVBhZ2VDb250ZW50KGNvbnRlbnRJZCk7XG4gICAgaWYgKCF3aW5kb3cubG9jYXRpb24uc2VhcmNoKSB7XG4gICAgICBpZiAoY29udGVudElkID09PSAnanMtY2F0YWxvZ3VlLXBhZ2UnICYmIE9iamVjdC5rZXlzKHRoaXMuY2hlY2tib3hTZXJ2aWNlLmZpbHRlcnMpLmxlbmd0aCkge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgdGhpcy5jaGVja2JveFNlcnZpY2UuY3JlYXRlUXVlcnkoKSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoJ3Byb2R1Y3QnKSkge1xuICAgICAgdGhpcy5kaXNwbGF5U2luZ2xlUGFnZUNvbnRlbnQoZGF0YSk7XG4gICAgfVxuICAgIGlmICh3aW5kb3cubG9jYXRpb24uc2VhcmNoICYmIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcygnY2F0YWxvZ3VlJykpIHtcbiAgICAgIHRoaXMuZGlzcGxheUZpbHRlcmVkQ29udGVudChkYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcHJvZHVjdENhcmRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGNhdGFsb2d1ZS5pdGVtKSk7XG4gICAgICBwcm9kdWN0Q2FyZHMuZm9yRWFjaCgocHJvZHVjdENhcmQpID0+IHtcbiAgICAgICAgcHJvZHVjdENhcmQuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGRpc3BsYXlGaWx0ZXJlZENvbnRlbnQoZGF0YSkge1xuICAgIGNvbnN0IGZpbHRlcnMgPSB0aGlzLmNoZWNrYm94U2VydmljZS5nZXRGaWx0ZXJzKCk7XG4gICAgY29uc3QgcHJvZHVjdENhcmRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGNhdGFsb2d1ZS5pdGVtKSk7XG4gICAgWy4uLmRhdGFdLmZvckVhY2goKHByb2R1Y3QpID0+IHtcbiAgICAgIGNvbnN0IGlzRm91bmQgPSBPYmplY3Qua2V5cyhmaWx0ZXJzKS5ldmVyeSgoa2V5KSA9PiB7XG4gICAgICAgIGlmIChrZXkgPT09ICdwcmljZScpIHtcbiAgICAgICAgICByZXR1cm4gTnVtYmVyKGZpbHRlcnNba2V5XSkgPj0gTnVtYmVyKHByb2R1Y3Rba2V5XSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmlsdGVyc1trZXldLmluY2x1ZGVzKFN0cmluZyhwcm9kdWN0W2tleV0pKTtcbiAgICAgIH0pO1xuICAgICAgY29uc3QgY2FyZCA9IHByb2R1Y3RDYXJkc1xuICAgICAgICAuZmluZCgocHJvZHVjdENhcmQpID0+IE51bWJlcihwcm9kdWN0Q2FyZC5kYXRhc2V0LmlkKSA9PT0gTnVtYmVyKHByb2R1Y3QuaWQpKTtcbiAgICAgIGNhcmQuc3R5bGUuZGlzcGxheSA9IGlzRm91bmQgPyAnZmxleCcgOiAnbm9uZSc7XG4gICAgfSk7XG4gIH1cblxuICBkaXNwbGF5U2luZ2xlUGFnZUNvbnRlbnQoZGF0YSkge1xuICAgIGNvbnN0IHByb2R1Y3RJZCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgncHJvZHVjdC8nKVsxXTtcbiAgICBjb25zdCBwcm9kdWN0ID0gZGF0YS5maW5kKChpdGVtKSA9PiBOdW1iZXIoaXRlbS5pZCkgPT09IE51bWJlcihwcm9kdWN0SWQpKTtcblxuICAgIGlmIChwcm9kdWN0KSB7XG4gICAgICB0aGlzLnJlbmRlclNpbmdsZVBhZ2UocHJvZHVjdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCAnLzQwNCcpO1xuICAgICAgdGhpcy5yb3V0ZXIucmVuZGVyUm91dGVDb250ZW50KHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlbmRlcmVyO1xuIiwiY2xhc3MgUm91dGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5yb3V0ZXMgPSB7fTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsICgpID0+IHtcbiAgICAgIHRoaXMucmVuZGVyUm91dGVDb250ZW50KHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVOZXdSb3V0ZShwYXRoTmFtZSwgY2FsbGJhY2spIHtcbiAgICBpZiAoIXBhdGhOYW1lIHx8IHR5cGVvZiBwYXRoTmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVmFsaWQgcGF0aCByZXF1aXJlZCcpO1xuICAgIH1cblxuICAgIGlmICghY2FsbGJhY2sgfHwgdHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbGxiYWNrIHJlcXVpcmVkJyk7XG4gICAgfVxuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLnJvdXRlcywgcGF0aE5hbWUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JvdXRlIHdpdGggdGhpcyBuYW1lIGFscmVhZHkgZXhpc3RzJyk7XG4gICAgfVxuXG4gICAgdGhpcy5yb3V0ZXNbcGF0aE5hbWVdID0gY2FsbGJhY2s7XG4gIH1cblxuICByZW5kZXJSb3V0ZUNvbnRlbnQodXJsKSB7XG4gICAgY29uc3QgcGF0aE5hbWUgPSB1cmwuc3BsaXQoJy8nKVsxXSB8fCAnLyc7XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMucm91dGVzLCBwYXRoTmFtZSkpIHtcbiAgICAgIHRoaXMucm91dGVzW3BhdGhOYW1lXSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJvdXRlc1snNDA0J10oKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUm91dGVyO1xuIiwiaW1wb3J0IENPTkZJRyBmcm9tICcuLi8uLi9jb25maWcuanMnO1xuXG5leHBvcnQgY29uc3QgbWFrZVJlcXVlc3QgPSAocGF0aCwgcmVxdWVzdFR5cGUsIGRhdGFPYmogPSB7fSkgPT4ge1xuICBjb25zdCBjb25maWcgPSB7XG4gICAgbWV0aG9kOiByZXF1ZXN0VHlwZSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gIH07XG5cbiAgaWYgKE9iamVjdC5rZXlzKGRhdGFPYmopLmxlbmd0aCkge1xuICAgIGNvbmZpZy5ib2R5ID0gSlNPTi5zdHJpbmdpZnkoZGF0YU9iaik7XG4gIH1cblxuICByZXR1cm4gZmV0Y2goYCR7Q09ORklHLmFwaX0vJHtwYXRofWAsIGNvbmZpZyk7XG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLWV4cHJlc3Npb25zICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udHJvbC1yZWdleFxuY29uc3QgRU1BSUxfUkVHRVggPSAvKD86W2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKyg/OlxcLlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSspKnxcIig/OltcXHgwMS1cXHgwOFxceDBiXFx4MGNcXHgwZS1cXHgxZlxceDIxXFx4MjMtXFx4NWJcXHg1ZC1cXHg3Zl18XFxcXFtcXHgwMS1cXHgwOVxceDBiXFx4MGNcXHgwZS1cXHg3Zl0pKlwiKUAoPzooPzpbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/XFwuKStbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/fFxcWyg/Oig/OjI1WzAtNV18MlswLTRdWzAtOV18WzAxXT9bMC05XVswLTldPylcXC4pezN9KD86MjVbMC01XXwyWzAtNF1bMC05XXxbMDFdP1swLTldWzAtOV0/fFthLXowLTktXSpbYS16MC05XTooPzpbXFx4MDEtXFx4MDhcXHgwYlxceDBjXFx4MGUtXFx4MWZcXHgyMS1cXHg1YVxceDUzLVxceDdmXXxcXFxcW1xceDAxLVxceDA5XFx4MGJcXHgwY1xceDBlLVxceDdmXSkrKVxcXSkvO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZShmaWVsZE5hbWUsIGZpZWxkVmFsdWUsIHJ1bGVzID0ge30sIGNhbGxiYWNrID0gKCkgPT4ge30pIHtcbiAgY29uc3QgdmFsaWRhdG9ycyA9IHtcbiAgICBtaW5MZW46ICh2YWwsIG1pbikgPT4gdmFsLmxlbmd0aCA+PSBtaW4sXG4gICAgbWF4TGVuOiAodmFsLCBtYXgpID0+IHZhbC5sZW5ndGggPD0gbWF4LFxuICAgIG9ubHlOdW1iZXJzQW5kTGV0dGVyczogKHZhbCkgPT4gL15bQS1aYS16MC05XSskLy50ZXN0KHZhbCksXG4gICAgaXNWYWxpZEVtYWlsOiAodmFsKSA9PiBFTUFJTF9SRUdFWC50ZXN0KHZhbCksXG4gICAgaXNOb3RFbXB0eTogKHZhbCkgPT4gdmFsLnRyaW0oKS5sZW5ndGgsXG4gIH07XG5cbiAgY29uc3QgbWVzc2FnZXMgPSB7XG4gICAgbWluTGVuOiAoZmllbGQsIHZhbCkgPT4gYCR7ZmllbGR9IG11c3QgY29udGFpbiBhdCBsZWFzdCAke3ZhbH0gY2hhcmFjdGVyc2AsXG4gICAgbWF4TGVuOiAoZmllbGQsIHZhbCkgPT4gYCR7ZmllbGR9IG11c3QgY29udGFpbiAke3ZhbH0gY2hhcmFjdGVycyAgYXQgbW9zdGAsXG4gICAgb25seU51bWJlcnNBbmRMZXR0ZXJzOiAoZmllbGQpID0+IGAke2ZpZWxkfSBtdXN0IGluY2x1ZGUgb25seSBudW1iZXJzIGFuZCBsZXR0ZXJzYCxcbiAgICBpc1ZhbGlkRW1haWw6IChmaWVsZCkgPT4gYCR7ZmllbGR9IHNob3VsZCBiZSB2YWxpZGAsXG4gICAgaXNOb3RFbXB0eTogKGZpZWxkKSA9PiBgJHtmaWVsZH0gbXVzdG4ndCBiZSBlbXB0eWAsXG4gIH07XG5cbiAgY29uc3QgZXJyb3JzID0ge307XG5cbiAgZm9yIChjb25zdCBydWxlIGluIHJ1bGVzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh2YWxpZGF0b3JzLCBydWxlKSkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gdmFsaWRhdG9yc1tydWxlXShmaWVsZFZhbHVlLCBydWxlc1tydWxlXSk7XG4gICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBtZXNzYWdlc1tydWxlXShmaWVsZE5hbWUsIHJ1bGVzW3J1bGVdKTtcbiAgICAgICAgY2FsbGJhY2soZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlcnJvcnMsIGZpZWxkTmFtZSlcbiAgICAgICAgICA/IGVycm9yc1tmaWVsZE5hbWVdID0gW2Vycm9yTWVzc2FnZV1cbiAgICAgICAgICA6IGVycm9yc1tmaWVsZE5hbWVdLnB1c2goZXJyb3JNZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=