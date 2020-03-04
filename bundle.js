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

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>SPA project</title>\n</head>\n<body>\n  <header>\n    <nav class=\"main__nav\" id=\"js-main-nav\"></nav>\n  </header>\n\n  <div id=\"appContent-wrapper\" style=\"display: none;\">\n\n    <div class=\"homepage-wrapper\" id=\"js-homepage\"></div>\n  \n    <div class=\"productPage-wrapper\" id=\"js-catalogue-page\">\n      <div class=\"prodcutPage__content\">\n          <div class=\"productPage__filter\" id=\"js-catalogue-filter\"></div>\n          <div class=\"productPage__catalogue\" id=\"js-catalogue\"></div>\n      </div>\n    </div>\n  \n    <div class=\"aboutPage-wrapper\" id=\"js-about-page\"></div>\n  \n    <div class=\"cartPage-wrapper\" id=\"js-cart-page\">\n      <div class=\"cartPage__content\">\n        <div class=\"cartPage__cart_order\"></div>\n        <div class=\"cartPage__cart_wrapper\"></div>\n      </div>\n    </div>\n  \n    <div class=\"errorPage-wrapper\" id=\"js-error-page\"></div>\n  \n    <div class=\"singlePage-wrapper\" id=\"js-single-page\"></div>\n\n    <div class=\"authPage-wrapper\" id=\"js-auth-page\"></div>\n  \n  \n  </div>\n  <script src=\"/bundle.js\"></script>\n</body>\n</html>\n";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9hc3NldHMvc3R5bGVzL3Njc3Mvc3R5bGVzLnNjc3M/ZTlmMyIsIndlYnBhY2s6Ly8vLi9kaXN0L2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9hc3NldHMvc3R5bGVzL3Njc3Mvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9ob3QvZGV2LXNlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hYm91dENvbXBvbmVudHMvYWJvdXRQYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2F1dGhDb21wb25lbnRzL2xvZ2luLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhcnRDb21wb25lbnRzL2NhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2FydENvbXBvbmVudHMvb3JkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2F0YWxvZ3VlQ29tcG9uZW50cy9jYXRhbG9ndWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2F0YWxvZ3VlQ29tcG9uZW50cy9maWx0ZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Vycm9yQ29tcG9uZW50cy9lcnJvclBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaG9tZVBhZ2VDb21wb25lbnRzL2hvbWVwYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dENvbXBvbmVudHMvbmF2YmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NpbmdsZVBhZ2VDb21wb25lbnRzL3NpbmdsZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGVtcGxhdGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL0F1dGhTZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL0NhcnRPYnNldmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL0NhcnRTZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL0ZpbHRlclNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vRm9ybVNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vT2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9SZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9Sb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vdXRpbHMvbWFrZVJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vdXRpbHMvdmFsaWRhdG9yLmpzIl0sIm5hbWVzIjpbImNvbnRlbnRJZCIsIkNPTkZJRyIsInJvdXRlcyIsImFib3V0UGFnZSIsInJlbmRlckFib3V0UGFnZSIsImFib3V0UGFnZVdyYXBwZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiQUJPVVRfUEFHRV9URU1QTEFURSIsImF1dGhQYWdlIiwiaW5pdEF1dGhGb3JtcyIsImZvcm1Db250YWluZXIiLCJmb3JtTGlua3MiLCJxdWVyeVNlbGVjdG9yIiwiZm9ybXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJmb3JtSWQiLCJ0YXJnZXQiLCJpZCIsInNwbGl0IiwiZm9yRWFjaCIsImZvcm0iLCJzdHlsZSIsImRpc3BsYXkiLCJyZW5kZXJBdXRoRm9ybXMiLCJhdXRoRm9ybXNDb250YWluZXIiLCJGT1JNX1RFTVBMQVRFIiwiY2FydCIsInNlbGVjdG9ycyIsIkNhcnQiLCJjYXJ0UGFnZUNvbnRlbnQiLCJjb250ZW50IiwiY2FydFdyYXBwZXIiLCJ3cmFwcGVyIiwiaW5zdGFuY2UiLCJkYXRhIiwicHJvZHVjdHMiLCJyZXNldENhcnQiLCJPYmplY3QiLCJrZXlzIiwibWFrZUNhcnRJdGVtQ2FyZCIsImFwcGVuZENoaWxkIiwicHJvZHVjdElkIiwidmFsdWUiLCJwcm9kdWN0IiwiZmluZCIsIml0ZW0iLCJTdHJpbmciLCJudW1iZXJBdmFpbGFibGUiLCJpbWFnZSIsIm5hbWUiLCJwcmljZSIsIkNBUlRfSVRFTV9URU1QTEFURSIsImNhcnRJdGVtIiwicmVtb3ZlIiwicmVuZGVyT3JkZXJDYXJkIiwib3JkZXJDYXJkQ29udGFpbmVyIiwib3JkZXIiLCJDQVJEX09SREVSX1RFTVBMQVRFIiwiY2F0YWxvZ3VlIiwicm91dGUiLCJwcm9kdWN0UGFnZSIsInJlbmRlckNhdGFsb2d1ZUl0ZW0iLCJjYXRhbG9ndWVDb250YWluZXIiLCJjYXRhbG9ndWVJdGVtIiwiQ0FUQUxPR1VFX0lURU1fVEVNUExBVEUiLCJtYWtlQ2F0YWxvZ3VlSXRlbXNDbGlja2FibGUiLCJyZW5kZXIiLCJjYXRhbG9ndWVDYXJkcyIsImNhcmQiLCJjbGlja2FibGVBcmVhIiwiaW1nIiwiZGF0YXNldCIsIndpbmRvdyIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwicmVuZGVyQ2F0YWxvZ3VlIiwiZmlsdGVycyIsImZpbHRlciIsIkZpbHRlcnMiLCJmaWx0ZXJzQ29udGFuaW5lciIsImNoZWNrYm94ZXMiLCJkcmF3UHJpY2VJbnB1dFJhbmdlIiwiYnVpbGRDaGVja2JveGVzIiwiZHJhd0NoZWNrYm94ZXMiLCJkcmF3UmVzZXRCdXR0b24iLCJhbGxQcmljZXMiLCJtYXAiLCJwcmljZXMiLCJtaW4iLCJNYXRoIiwibWF4IiwiUFJJQ0VfSU5QVVRfVEVNUExBVEUiLCJmaWx0ZXJCYXNlIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwicHVzaCIsImJpbmQiLCJpbmNsdWRlcyIsImtleSIsImZpbHRlckdyb3VwIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImNvbnRhaW5lciIsInRvVXBwZXJDYXNlIiwiZmlsdGVyR3JvdXBDb250ZW50Iiwic29ydCIsImZpbHRlclZhbHVlIiwiQ0hFQ0tCT1hfVEVNUExBVEUiLCJpbml0RmlsdGVyR3JvdXBDb250ZW50IiwiZW50cmllcyIsImdyb3VwIiwibGFiZWwiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImVycm9yUGFnZSIsInJlbmRlckVycm9yUGFnZSIsImVycm9yUGFnZUNvbnRhaW5lciIsIkVSUk9SX1BBR0UiLCJob21lUGFnZSIsImhvbWUiLCJyZW5kZXJIb21lUGFnZSIsImhvbWVwYWdlIiwiSE9NRVBBR0VfVEVNUExBVEUiLCJpbml0U2VyaXZlVXJscyIsInJlbmRlckZuIiwic2VydmljZXNVcmxzIiwic2VydmljZXMiLCJ1cmwiLCJjbGFzc05hbWUiLCJpbml0TmF2YmFyIiwibmF2YmFyIiwiY2F0YWxvZ3VlUGFnZSIsImNhcnRQYWdlIiwicmVuZGVyTmF2YmFyIiwiTkFWQkFSX1RFTVBMQVRFIiwicGFnZSIsIlNpbmdsZVBhZ2UiLCJzaW5nbGVQYWdlQ29udGFpbmVyIiwicmVzZXRQYWdlIiwiU0lOR0xFX1BBR0VfVEVNUExBVEUiLCJwYWdlQ29udGVudCIsImZpbHRlck5hbWUiLCJicmFuZCIsIm1hbnVmYWN0dXJlciIsInZvbHVtZSIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcnkiLCJhcGkiLCJ2YWxpZGF0aW9uUnVsZXMiLCJtaW5MZW4iLCJtYXhMZW4iLCJvbmx5TnVtYmVyc0FuZExldHRlcnMiLCJpc05vdEVtcHR5IiwiZW1haWwiLCJpc1ZhbGlkRW1haWwiLCJwYXNzd29yZCIsInRvdGFsIiwiZGV0YWlscyIsInVzZXJJbmZvIiwidXNlckRhdGEiLCJvcmRlck1lc3NhZ2UiLCJpbnB1dCIsImNob29zZSIsInF1YW50aXR5IiwiYnV5IiwiYWRkIiwiY3VycmVudFByaWNlIiwiY2hlY2tib3giLCJyZXNldCIsIm5hdiIsImxvZ291dCIsImxvZ2luIiwiYXV0aCIsImVycm9yIiwic2lnbkluIiwic2lnblVwIiwiQXBwIiwicm91dGVyIiwiUm91dGVyIiwiZmlsdGVyU2VydmljZSIsIkZpbHRlclNlcnZpY2UiLCJjYXJ0U2VydmljZSIsIkNhcnRTZXJ2aWNlIiwiY2FydE9ic2VydmVyIiwiQ2FydE9ic2VydmVyIiwiYXV0aFNlcnZpY2UiLCJBdXRoU2VydmljZSIsImZvcm1TZXJ2aWNlIiwiRm9ybVNlcnZpY2UiLCJyZW5kZXJlciIsIlJlbmRlcmVyIiwic3Vic2NyaWJlIiwib25GaWx0ZXJDaGFuZ2UiLCJvbkNhcnRDaGFuZ2UiLCJpbml0IiwibWFrZVJlcXVlc3QiLCJ0aGVuIiwianNvbiIsImluaXRSb3V0ZXIiLCJpbml0QXBwIiwicmVuZGVyUm91dGVDb250ZW50IiwiaW5pdENhcnRJbnB1dEhhZGxlcnMiLCJpbml0T2JzZXJ2ZXIiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsImVudHJ5IiwiY3JlYXRlTmV3Um91dGUiLCJyZW5kZXJQYWdlQ29udGVudCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjYXJ0Um91dGUiLCJkZWNvZGVVUkkiLCJzZXRJdGVtIiwicmVuZGVyQ2FydCIsImFwcCIsInVzZXIiLCJpc0xvZ2dlZEluIiwiYXV0aEVycm9ycyIsIm9yZGVyTWVzc3NhZ2VzIiwiSlNPTiIsInBhcnNlIiwidG9nZ2xlQXV0aE9ubHlDb250ZW50IiwicmVtb3ZlSXRlbSIsInN0cmluZ2lmeSIsImxvZ091dEJ0biIsImxvZ2luTGluayIsInRleHRDb250ZW50IiwicmVzIiwiZm91bmRVc2VyIiwibG9nVXNlckluIiwiZXJyIiwic3RhdHVzIiwibGVuZ3RoIiwib3JkZXJEYXRhIiwiY2FyZHMiLCJkZWxldGVQcm9kdWN0RnJvbUNhcnQiLCJjYXJ0T3JkZXJDb250YWluZXIiLCJub2Rlc1RvT2JzZXJ2ZSIsImluaXRDYXJ0Q2FsY3VsYXRvciIsImNhbGN1bGF0ZVRvdGFsIiwiZGVsZXRlQnRucyIsImJ0biIsImRlbGV0ZUNhcmRPcmRlck5vdGUiLCJjYXJ0SXRlbXMiLCJwcmljZVRvdGFsIiwiQXJyYXkiLCJmcm9tIiwicmVkdWNlIiwidG90YWxTdW0iLCJjdXJyZW50SXRlbSIsImZsYWciLCJjaGVja2VkIiwicmVuZGVyQ2FydE9yZGVyRGV0YWlscyIsInRvRml4ZWQiLCJjYXJ0RGV0YWlscyIsImNoaWxkcmVuIiwiZm91bmQiLCJOdW1iZXIiLCJjYXJ0cyIsInByb2R1Y3RzSW5DYXJ0Iiwib2JzZXJ2YWJsZSIsIk9ic2VydmFibGUiLCJmbiIsIml0ZW1JZCIsImNsb3Nlc3QiLCJhZGRQcm9kdWN0VG9DYXJ0IiwiaW5pdFByb2R1Y3RDYXJ0IiwibmV4dCIsIml0ZW1Ub0RlbGV0ZSIsInVwZGF0ZUxvY2FsU3RvcmFnZSIsImluaXREZWxldGVCdXR0b25zIiwiaW5pdENhcnROdW1iZXJJbnB1dCIsImRlbGV0ZUJ1dHRvbnMiLCJidXR0b24iLCJudW1iZXJJbnB1dHMiLCJob21lUGFnZUZpbHRlcnMiLCJwcmljZUlucHV0IiwicmVzZXRGaWx0ZXJzQnRuIiwicmVzZXRGaWx0ZXJzIiwib25JbnB1dFJhbmdlQ2hhbmdlIiwiaGFuZGxlRmlsdGVyQ2hhbmdlIiwiY3VycmVudFZhbCIsIm9uQ2hlY2tCb3hDaGVja2VkIiwib25DaGVja0JveFVuQ2hlY2tlZCIsImluaXRGaWx0ZXJzIiwiZ2V0RmlsdGVycyIsImN1cnJlbnRGaWx0ZXIiLCJmaWx0ZXJzU3RyaW5nIiwic2VhcmNoIiwicmVwbGFjZSIsIkJvb2xlYW4iLCJmaWx0ZXJPYmplY3QiLCJjdXJyZW5GaWx0ZXJWYWx1ZSIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsInF1ZXJ5IiwiY3JlYXRlUXVlcnkiLCJxdWVyeVN0cmluZyIsInZhbHVlcyIsInF1ZXJ5U3RyaW5nRWxlbWVudCIsInNpZ25JbkZvcm0iLCJzaWduVXBGb3JtIiwidmFsaWRhdGlvbkVycm9ycyIsImluaXRTaWduSW5Gb3JtIiwiaW5pdFNpZ25VcEZvcm0iLCJ0cmlnZ2VyT25JbnB1dENoYW5nZVZhbGlkYXRpb24iLCJzaWduVXNlckluIiwic2lnblVzZXJPdXQiLCJvcmRlckJ0biIsInByb2Nlc3NPcmRlclJlcXVlc3QiLCJwcmV2ZW50RGVmYXVsdCIsImdldEZvcm1EYXRhIiwicHJvY2Vzc1NpZ25JblJlcXVlc3QiLCJwcm9jZXNzU2lnblVwUmVxdWVzdCIsImZpZWxkIiwiYWN0aXZlRm9ybSIsInBhcmVudEVsZW1lbnQiLCJ2YWxpZGF0aW9uUmVzdWx0IiwidmFsaWRhdGUiLCJkaXNwbGF5RXJyb3JzIiwidXBkYXRlVmFsaWRhdGlvbkVycm9ycyIsImZpZWxkTmFtZSIsImFzc2lnbiIsImVycm9ycyIsImVycm9yRmllbGQiLCJlcnJvclN0cmluZyIsInZhbGlkYXRlSW5wdXRGaWVsZCIsImF1dGhEYXRhIiwiaW5wdXRzIiwic3Vic2NyaWJlcnMiLCJzdWJzY3JpYmVkRm4iLCJjaGVja2JveFNlcnZpY2UiLCJhcHBDb250YWluZXIiLCJyZW5kZXJGaWx0ZXJzIiwiZHJhd0ZpbHRlcnMiLCJzaW5nbGVQYWdlIiwiZHJhd1NpbmdsZVBhZ2UiLCJhZGRCdG4iLCJhcHBDb250ZW50RWxlbWVudHMiLCJkaXYiLCJkaXNwbGF5UGFnZUNvbnRlbnQiLCJkaXNwbGF5U2luZ2xlUGFnZUNvbnRlbnQiLCJkaXNwbGF5RmlsdGVyZWRDb250ZW50IiwicHJvZHVjdENhcmRzIiwicHJvZHVjdENhcmQiLCJpc0ZvdW5kIiwiZXZlcnkiLCJyZW5kZXJTaW5nbGVQYWdlIiwicGF0aE5hbWUiLCJjYWxsYmFjayIsIkVycm9yIiwicGF0aCIsInJlcXVlc3RUeXBlIiwiZGF0YU9iaiIsImNvbmZpZyIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiZmV0Y2giLCJFTUFJTF9SRUdFWCIsImZpZWxkVmFsdWUiLCJydWxlcyIsInZhbGlkYXRvcnMiLCJ2YWwiLCJ0ZXN0IiwidHJpbSIsIm1lc3NhZ2VzIiwicnVsZSIsInJlc3VsdCIsImVycm9yTWVzc2FnZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLFVBQVUsbUJBQU8sQ0FBQyw0SkFBaUY7QUFDbkcsMEJBQTBCLG1CQUFPLENBQUMsc1BBQTRIOztBQUU5Sjs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7QUFJQSwwQjs7Ozs7Ozs7Ozs7QUNwQkEsa1dBQWtXLDY3Qjs7Ozs7Ozs7Ozs7QUNBbFc7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyw4R0FBeUQ7QUFDbkc7QUFDQTtBQUNBLGNBQWMsUUFBUyxTQUFTLHlCQUF5QiwwQkFBMEIsRUFBRSxvREFBb0QsZ0JBQWdCLGlCQUFpQixFQUFFLCtCQUErQixvQkFBb0IsRUFBRSxtQkFBbUIsZ0JBQWdCLEVBQUUsUUFBUSx1QkFB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QWhDLENBQXFDNlEsVUFBckMsRUFBaURLLElBQWpELENBQUosRUFBNEQ7QUFDMUQsVUFBTUMsTUFBTSxHQUFHTixVQUFVLENBQUNLLElBQUQsQ0FBVixDQUFpQlAsVUFBakIsRUFBNkJDLEtBQUssQ0FBQ00sSUFBRCxDQUFsQyxDQUFmOztBQUNBLFVBQUksQ0FBQ0MsTUFBTCxFQUFhO0FBQ1gsWUFBTUMsWUFBWSxHQUFHSCxRQUFRLENBQUNDLElBQUQsQ0FBUixDQUFlOUMsU0FBZixFQUEwQndDLEtBQUssQ0FBQ00sSUFBRCxDQUEvQixDQUFyQjtBQUNBbEIsZ0JBQVEsQ0FBQ29CLFlBQUQsQ0FBUjtBQUNBLFNBQUNoVixNQUFNLENBQUMwRCxTQUFQLENBQWlCQyxjQUFqQixDQUFnQ0MsSUFBaEMsQ0FBcUNzTyxNQUFyQyxFQUE2Q0YsU0FBN0MsQ0FBRCxHQUNJRSxNQUFNLENBQUNGLFNBQUQsQ0FBTixHQUFvQixDQUFDZ0QsWUFBRCxDQUR4QixHQUVJOUMsTUFBTSxDQUFDRixTQUFELENBQU4sQ0FBa0JuTyxJQUFsQixDQUF1Qm1SLFlBQXZCLENBRko7QUFHRDtBQUNGO0FBQ0Y7O0FBRUQsU0FBTzlDLE1BQVA7QUFDRDs7QUFFY0wsdUVBQWYsRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS0yIS4vc3R5bGVzLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjwhRE9DVFlQRSBodG1sPlxcbjxodG1sIGxhbmc9XFxcImVuXFxcIj5cXG48aGVhZD5cXG4gIDxtZXRhIGNoYXJzZXQ9XFxcIlVURi04XFxcIj5cXG4gIDxtZXRhIG5hbWU9XFxcInZpZXdwb3J0XFxcIiBjb250ZW50PVxcXCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXFxcIj5cXG4gIDx0aXRsZT5TUEEgcHJvamVjdDwvdGl0bGU+XFxuPC9oZWFkPlxcbjxib2R5PlxcbiAgPGhlYWRlcj5cXG4gICAgPG5hdiBjbGFzcz1cXFwibWFpbl9fbmF2XFxcIiBpZD1cXFwianMtbWFpbi1uYXZcXFwiPjwvbmF2PlxcbiAgPC9oZWFkZXI+XFxuXFxuICA8ZGl2IGlkPVxcXCJhcHBDb250ZW50LXdyYXBwZXJcXFwiIHN0eWxlPVxcXCJkaXNwbGF5OiBub25lO1xcXCI+XFxuXFxuICAgIDxkaXYgY2xhc3M9XFxcImhvbWVwYWdlLXdyYXBwZXJcXFwiIGlkPVxcXCJqcy1ob21lcGFnZVxcXCI+PC9kaXY+XFxuICBcXG4gICAgPGRpdiBjbGFzcz1cXFwicHJvZHVjdFBhZ2Utd3JhcHBlclxcXCIgaWQ9XFxcImpzLWNhdGFsb2d1ZS1wYWdlXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9kY3V0UGFnZV9fY29udGVudFxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2R1Y3RQYWdlX19maWx0ZXJcXFwiIGlkPVxcXCJqcy1jYXRhbG9ndWUtZmlsdGVyXFxcIj48L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvZHVjdFBhZ2VfX2NhdGFsb2d1ZVxcXCIgaWQ9XFxcImpzLWNhdGFsb2d1ZVxcXCI+PC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgXFxuICAgIDxkaXYgY2xhc3M9XFxcImFib3V0UGFnZS13cmFwcGVyXFxcIiBpZD1cXFwianMtYWJvdXQtcGFnZVxcXCI+PC9kaXY+XFxuICBcXG4gICAgPGRpdiBjbGFzcz1cXFwiY2FydFBhZ2Utd3JhcHBlclxcXCIgaWQ9XFxcImpzLWNhcnQtcGFnZVxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY2FydFBhZ2VfX2NvbnRlbnRcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FydFBhZ2VfX2NhcnRfb3JkZXJcXFwiPjwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FydFBhZ2VfX2NhcnRfd3JhcHBlclxcXCI+PC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgXFxuICAgIDxkaXYgY2xhc3M9XFxcImVycm9yUGFnZS13cmFwcGVyXFxcIiBpZD1cXFwianMtZXJyb3ItcGFnZVxcXCI+PC9kaXY+XFxuICBcXG4gICAgPGRpdiBjbGFzcz1cXFwic2luZ2xlUGFnZS13cmFwcGVyXFxcIiBpZD1cXFwianMtc2luZ2xlLXBhZ2VcXFwiPjwvZGl2PlxcblxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhdXRoUGFnZS13cmFwcGVyXFxcIiBpZD1cXFwianMtYXV0aC1wYWdlXFxcIj48L2Rpdj5cXG4gIFxcbiAgXFxuICA8L2Rpdj5cXG4gIDxzY3JpcHQgc3JjPVxcXCIvYnVuZGxlLmpzXFxcIj48L3NjcmlwdD5cXG48L2JvZHk+XFxuPC9odG1sPlxcblwiOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IGFyaWFsO1xcbiAgICBiYWNrZ3JvdW5kOiAjZjhmOWZiOyB9XFxuXFxuaHRtbCwgYm9keSwgdWwsIG9sLCBsaSwgZm9ybSwgZmllbGRzZXQsIGxlZ2VuZCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDsgfVxcblxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAge1xcbiAgICBtYXJnaW4tdG9wOiAwOyB9XFxuXFxuZmllbGRzZXQsIGltZyB7XFxuICAgIGJvcmRlcjogMDsgfVxcblxcbmxpIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTsgfVxcblxcbi5sZWFkX19iYW5uZXIsXFxuLnNlY29uZF9fYmFubmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiAjMjMyMDIwOyB9XFxuICAgIC5sZWFkX19iYW5uZXIgLmJhbm5lcl9fY29udGVudCxcXG4gICAgLnNlY29uZF9fYmFubmVyIC5iYW5uZXJfX2NvbnRlbnQge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgYm90dG9tOiA1MHB4O1xcbiAgICAgICAgd2lkdGg6IDEwMCU7IH1cXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgICAgICAgICAgLmxlYWRfX2Jhbm5lciAuYmFubmVyX19jb250ZW50LFxcbiAgICAgICAgICAgIC5zZWNvbmRfX2Jhbm5lciAuYmFubmVyX19jb250ZW50IHtcXG4gICAgICAgICAgICAgICAgdG9wOiA1MCU7IH0gfVxcbiAgICAubGVhZF9fYmFubmVyIGxpLFxcbiAgICAuc2Vjb25kX19iYW5uZXIgbGkge1xcbiAgICAgICAgcGFkZGluZzogMHB4IDEwcHg7XFxuICAgICAgICBmb250LXNpemU6IDFyZW07IH1cXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgICAgICAgICAgLmxlYWRfX2Jhbm5lciBsaSxcXG4gICAgICAgICAgICAuc2Vjb25kX19iYW5uZXIgbGkge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lOyB9IH1cXG4gICAgLmxlYWRfX2Jhbm5lciBpbWcsXFxuICAgIC5zZWNvbmRfX2Jhbm5lciBpbWcge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBmaWx0ZXI6IGNvbnRyYXN0KDkwJSk7IH1cXG4gICAgLmxlYWRfX2Jhbm5lciBzcGFuLFxcbiAgICAuc2Vjb25kX19iYW5uZXIgc3BhbiB7XFxuICAgICAgICBmb250LXNpemU6IDQwcHg7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7IH1cXG4gICAgLmxlYWRfX2Jhbm5lciBzcGFuLnRpdGxlLFxcbiAgICAuc2Vjb25kX19iYW5uZXIgc3Bhbi50aXRsZSB7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7IH1cXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgICAgICAgICAgLmxlYWRfX2Jhbm5lciBzcGFuLnRpdGxlLFxcbiAgICAgICAgICAgIC5zZWNvbmRfX2Jhbm5lciBzcGFuLnRpdGxlIHtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4OyB9IH1cXG5cXG4uc2Vjb25kX19iYW5uZXIge1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDsgfVxcblxcbnNlY3Rpb24ge1xcbiAgICBtYXJnaW46IDEwcHggMHB4OyB9XFxuXFxuLmhvbWVQYWdlX19zZXJ2aWNlcyB1bCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAgICAgLmhvbWVQYWdlX19zZXJ2aWNlcyB1bCB7XFxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7IH0gfVxcblxcbi5ob21lUGFnZV9fc2VydmljZXMgbGkge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZsZXg6IDAgMCAzMy4zMzMzMyU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblxcbi5ob21lUGFnZV9fc2VydmljZXMgaW1nIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgb3BhY2l0eTogMC40O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDsgfVxcblxcbi5ob21lUGFnZV9fc2VydmljZXMgcCB7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgIGNvbG9yOiAjM0E0NDU0O1xcbiAgICBmb250LXdlaWdodDogYm9sZDsgfVxcbiAgICAuaG9tZVBhZ2VfX3NlcnZpY2VzIHA6aG92ZXIge1xcbiAgICAgICAgY29sb3I6ICM5QTI3NUE7IH1cXG5cXG4uaG9tZVBhZ2VfX3Byb2R1Y3RzIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgICAuaG9tZVBhZ2VfX3Byb2R1Y3RzIHVsIHtcXG4gICAgICAgIHBhZGRpbmc6IDBweDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7IH1cXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgICAgICAgICAgLmhvbWVQYWdlX19wcm9kdWN0cyB1bCB7XFxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMHB4OyB9IH1cXG4gICAgLmhvbWVQYWdlX19wcm9kdWN0cyBpbWcge1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgd2lkdGg6IGF1dG87XFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xcbiAgICAgICAgbWF4LWhlaWdodDogMjAwcHg7IH1cXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgICAgICAgICAgLmhvbWVQYWdlX19wcm9kdWN0cyBpbWcge1xcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMHB4O1xcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDBweDsgfSB9XFxuICAgIC5ob21lUGFnZV9fcHJvZHVjdHMgbGkge1xcbiAgICAgICAgZmxleDogMCAwIDMwJTtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgbWFyZ2luOiAyJTsgfVxcblxcbnNlY3Rpb24gaDEge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgY29sb3I6ICM1MzY4N0U7IH1cXG5cXG4ucHJvZHVjdFBhZ2Utd3JhcHBlciB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDBweCAxMHB4OyB9XFxuXFxuLnByb2RjdXRQYWdlX19jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7IH1cXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgICAgIC5wcm9kY3V0UGFnZV9fY29udGVudCB7XFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH0gfVxcblxcbi5wcm9kdWN0UGFnZV9fY2F0YWxvZ3VlIHtcXG4gICAgZmxleDogMSAwIDY4JTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IH1cXG5cXG4ucHJvZHVjdFBhZ2VfX2ZpbHRlciB7XFxuICAgIGZsZXg6IDAgMCAyMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICB3aWR0aDogYXV0bzsgfVxcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAgICAgLnByb2R1Y3RQYWdlX19maWx0ZXIge1xcbiAgICAgICAgICAgIGZsZXg6IDAgMCA5NSU7IH0gfVxcblxcbi5jYXRhbG9ndWVfX2l0ZW0ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZmxleDogMCAwIDIxMHB4O1xcbiAgICBib3gtc2hhZG93OiA5cHggMTFweCAyMHB4IC03cHggI0MyQjJCNDsgfVxcbiAgICAuY2F0YWxvZ3VlX19pdGVtIGltZyB7XFxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgICAgICBtYXJnaW46IDEwcHggYXV0bztcXG4gICAgICAgIGhlaWdodDogMTYwcHg7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMyU7IH1cXG4gICAgLmNhdGFsb2d1ZV9faXRlbSBoNSB7XFxuICAgICAgICBjb2xvcjogIzIzMjAyMDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07IH1cXG4gICAgLmNhdGFsb2d1ZV9faXRlbSBwIHtcXG4gICAgICAgIGNvbG9yOiAjOUEyNzVBO1xcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgICAgICBtYXJnaW46IDA7IH1cXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgICAgIC5jYXRhbG9ndWVfX2l0ZW0ge1xcbiAgICAgICAgICAgIGZsZXg6IDEwMCA5NSU7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7IH0gfVxcblxcbi5jYXRhbG9ndWVfX2l0ZW1faW1nd3JhcCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IH1cXG5cXG4uY2F0YWxvZ3VlX19pdGVtX2luZm8ge1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvOyB9XFxuXFxuLmZpbHRlcl9fZ3JvdXBfbGFiZWwsXFxuLmNhcnRfX2RldGFpbHNfbGFiZWwge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzQTQ0NTQ7XFxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW46IDVweCAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUREREQ7XFxuICAgIGNvbG9yOiAjMjMyMDIwOyB9XFxuICAgIC5maWx0ZXJfX2dyb3VwX2xhYmVsOmhvdmVyLFxcbiAgICAuY2FydF9fZGV0YWlsc19sYWJlbDpob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGY1YzcyOyB9XFxuXFxuLmZpbHRlcl9fZ3JvdXBfY29udGVudCB7XFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgICBmb250LXNpemU6IDAuOHJlbTsgfVxcblxcbi5maWx0ZXJfX2dyb3VwX2NoZWNrYm94IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IH1cXG5cXG4uY2FydFBhZ2Utd3JhcHBlciB7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgcGFkZGluZzogMHB4IDEwcHg7IH1cXG5cXG4uY2FydFBhZ2VfX2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbjogMHB4IGF1dG87IH1cXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgICAgIC5jYXJ0UGFnZV9fY29udGVudCB7XFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICAgIHdpZHRoOiA5NSU7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH0gfVxcblxcbi5jYXJ0UGFnZV9fY2FydF9vcmRlciB7XFxuICAgIGZsZXg6IDAgMCAzMCU7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgYm9yZGVyOiAzcHggc29saWQgI0Y1RERERDtcXG4gICAgcGFkZGluZzogNXB4OyB9XFxuICAgIC5jYXJ0UGFnZV9fY2FydF9vcmRlciBoMyB7XFxuICAgICAgICBwYWRkaW5nOiA1cHggMHB4O1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNGNUREREQ7IH1cXG4gICAgLmNhcnRQYWdlX19jYXJ0X29yZGVyIGRpdiB7XFxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDsgfVxcbiAgICAgICAgLmNhcnRQYWdlX19jYXJ0X29yZGVyIGRpdiAuY2FydFBhZ2VfX3RvdGFsIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgICAgICAgICAgY29sb3I6ICM5QTI3NUE7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG4gICAgLmNhcnRQYWdlX19jYXJ0X29yZGVyIGJ1dHRvbiB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHdpZHRoOiAzMiU7XFxuICAgICAgICBtYXJnaW46IDIwcHggYXV0bzsgfVxcblxcbi5jYXJ0UGFnZV9fY2FydF93cmFwcGVyIHtcXG4gICAgZmxleDogMCAwIDY1JTsgfVxcblxcbi5jYXJ0X19pdGVtX3dyYXBwZXIge1xcbiAgICBmbGV4OiAwIDAgOTAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gICAgcGFkZGluZy10b3A6IDIlO1xcbiAgICBib3gtc2hhZG93OiA5cHggMTFweCAyMHB4IC03cHggI0MyQjJCNDsgfVxcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAgICAgLmNhcnRfX2l0ZW1fd3JhcHBlciB7XFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87IH0gfVxcbiAgICAuY2FydF9faXRlbV93cmFwcGVyIGZvcm0ge1xcbiAgICAgICAgZmxleDogMCAwIDMwMHB4O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGhlaWdodDogYXV0bzsgfVxcbiAgICAgICAgLmNhcnRfX2l0ZW1fd3JhcHBlciBmb3JtIGlucHV0IHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgbWF4LXdpZHRoOiAzMCU7IH1cXG4gICAgICAgIC5jYXJ0X19pdGVtX3dyYXBwZXIgZm9ybSBpbnB1dFt0eXBlPSdjaGVja2JveCddIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDIpOyB9XFxuXFxuLmNhcnRfX2l0ZW1fZGV0YWlscyB7XFxuICAgIGZsZXg6IDAgMCAzMDBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuICAgIC5jYXJ0X19pdGVtX2RldGFpbHMgaW1nIHtcXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xcbiAgICAgICAgaGVpZ2h0OiAxNjBweDtcXG4gICAgICAgIHBhZGRpbmctdG9wOiAzJTsgfVxcbiAgICAuY2FydF9faXRlbV9kZXRhaWxzIGg1IHtcXG4gICAgICAgIGNvbG9yOiAjMjMyMDIwO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICBmb250LXNpemU6IDAuOHJlbTsgfVxcbiAgICAuY2FydF9faXRlbV9kZXRhaWxzIHAge1xcbiAgICAgICAgY29sb3I6ICM5QTI3NUE7XFxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgICAgIG1hcmdpbjogMDsgfVxcblxcbi5zaW5nbGVQYWdlLXdyYXBwZXIge1xcbiAgICBwYWRkaW5nOiAxMHB4OyB9XFxuXFxuLnNpbmdsZVBhZ2VfX2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDsgfVxcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAgICAgLnNpbmdsZVBhZ2VfX2NvbnRlbnQge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrOyB9IH1cXG5cXG4uc2luZ2xlUGFnZV9fY29udGVudF9tYWluIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmbGV4OiAwIDAgNDAlIHg7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7IH1cXG4gICAgLnNpbmdsZVBhZ2VfX2NvbnRlbnRfbWFpbiBpbWcge1xcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICAgICAgbWFyZ2luOiAxMHB4IGF1dG87XFxuICAgICAgICBoZWlnaHQ6IDE2MHB4O1xcbiAgICAgICAgcGFkZGluZy10b3A6IDMlOyB9XFxuICAgIC5zaW5nbGVQYWdlX19jb250ZW50X21haW4gaDUge1xcbiAgICAgICAgY29sb3I6ICMyMzIwMjA7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtOyB9XFxuICAgIC5zaW5nbGVQYWdlX19jb250ZW50X21haW4gcCB7XFxuICAgICAgICBjb2xvcjogIzlBMjc1QTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICAgICAgbWFyZ2luOiAwOyB9XFxuXFxuLnNpbmdsZVBhZ2VfY29udGVudF9pbmZvIHtcXG4gICAgZmxleDogMCAxIDUwJTtcXG4gICAgcGFkZGluZzogMTBweDsgfVxcblxcbi5hdXRoUGFnZS13cmFwcGVyIHtcXG4gICAgcGFkZGluZy10b3A6IDUwcHg7IH1cXG5cXG4uYXV0aF9fZm9ybV93cmFwcGVyIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgbWFyZ2luOiAwcHggYXV0bztcXG4gICAgYm94LXNoYWRvdzogOXB4IDExcHggMjBweCAtN3B4ICNDMkIyQjQ7IH1cXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgICAgIC5hdXRoX19mb3JtX3dyYXBwZXIge1xcbiAgICAgICAgICAgIHdpZHRoOiA4NSU7IH0gfVxcbiAgICAuYXV0aF9fZm9ybV93cmFwcGVyIHAge1xcbiAgICAgICAgY29sb3I6ICM5QTI3NUE7XFxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDsgfVxcbiAgICAuYXV0aF9fZm9ybV93cmFwcGVyIHVsIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gICAgLmF1dGhfX2Zvcm1fd3JhcHBlciBsaSB7XFxuICAgICAgICBmbGV4OiAxIDEgYXV0bztcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzQTQ0NTQ7XFxuICAgICAgICBwYWRkaW5nOiA1cHggMTVweDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgbWFyZ2luOiA1cHggMHB4OyB9XFxuICAgICAgICAuYXV0aF9fZm9ybV93cmFwcGVyIGxpOmhvdmVyIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGY1YzcyOyB9XFxuICAgIC5hdXRoX19mb3JtX3dyYXBwZXIgZm9ybSB7XFxuICAgICAgICBwYWRkaW5nOiAyMHB4IDQwcHg7IH1cXG4gICAgICAgIC5hdXRoX19mb3JtX3dyYXBwZXIgZm9ybSBsYWJlbCwgLmF1dGhfX2Zvcm1fd3JhcHBlciBmb3JtIGlucHV0LCAuYXV0aF9fZm9ybV93cmFwcGVyIGZvcm0gYnV0dG9uIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICBwYWRkaW5nOiA3cHggMHB4IDdweCAxMHB4O1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICAgICAgICBtYXJnaW46IDVweCBhdXRvOyB9XFxuICAgICAgICAuYXV0aF9fZm9ybV93cmFwcGVyIGZvcm0gbGFiZWwge1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuICAgICAgICAuYXV0aF9fZm9ybV93cmFwcGVyIGZvcm0gaW5wdXQ6Zm9jdXMge1xcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjNTM2ODdFOyB9XFxuICAgICAgICAuYXV0aF9fZm9ybV93cmFwcGVyIGZvcm0gYnV0dG9uIHtcXG4gICAgICAgICAgICBtYXJnaW46IDVweCBhdXRvO1xcbiAgICAgICAgICAgIHdpZHRoOiA0MCU7IH1cXG5cXG4uYXV0aF9fZm9ybV9lcnJvciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi5hYm91dFBhZ2VfX2NvbnRlbnQge1xcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5OyB9XFxuICAgIC5hYm91dFBhZ2VfX2NvbnRlbnQgZGl2IHtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7IH1cXG5cXG4uYWJvdXRQYWdlX19hcnRpY2xlcyB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDEwcHg7IH1cXG4gICAgLmFib3V0UGFnZV9fYXJ0aWNsZXMgdWwge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGZsZXgtZmxvdzogcm93IHdyYXA7IH1cXG4gICAgLmFib3V0UGFnZV9fYXJ0aWNsZXMgbGkge1xcbiAgICAgICAgbWFyZ2luOiA1cHg7XFxuICAgICAgICBmbGV4OiAwIDAgMzAlO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDsgfVxcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgICAgICAgICAuYWJvdXRQYWdlX19hcnRpY2xlcyBsaSB7XFxuICAgICAgICAgICAgICAgIGZsZXg6IDEgMCAxMDAlOyB9IH1cXG4gICAgLmFib3V0UGFnZV9fYXJ0aWNsZXMgaW1nIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcXG4gICAgICAgIG1heC1oZWlnaHQ6IDIwMHB4OyB9XFxuICAgIC5hYm91dFBhZ2VfX2FydGljbGVzIGRpdiB7XFxuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5OyB9XFxuICAgIC5hYm91dFBhZ2VfX2FydGljbGVzIGg1IHtcXG4gICAgICAgIGNvbG9yOiAjOUEyNzVBO1xcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDsgfVxcblxcbmJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6ICMzQTQ0NTQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUREREQ7XFxuICAgIG1hcmdpbjogMTBweCAwcHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG4gICAgYnV0dG9uOmhvdmVyIHtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNDMkIyQjQ7IH1cXG5cXG5ib2R5IHtcXG4gICAgbWF4LXdpZHRoOiAxMzIwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luOiAwIGF1dG87IH1cXG5cXG4ubWFpbl9fbmF2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNBNDQ1NDsgfVxcbiAgICAubWFpbl9fbmF2IGRpdiB7XFxuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDsgfVxcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgICAgICAgICAubWFpbl9fbmF2IGRpdiB7XFxuICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7IH0gfVxcbiAgICAubWFpbl9fbmF2IHVsIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBtYXJnaW46IDVweDtcXG4gICAgICAgIHBhZGRpbmc6IDA7IH1cXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgICAgICAgICAgLm1haW5fX25hdiB1bCB7XFxuICAgICAgICAgICAgICAgIGZsZXg6IDAgMCAxMDAlO1xcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH0gfVxcbiAgICAubWFpbl9fbmF2IGxpIHtcXG4gICAgICAgIGZsZXg6IDEgMSAwO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBwYWRkaW5nOiAwcHggMTBweDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAgICAgLm1haW5fX25hdiBsaTpob3ZlciB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRmNWM3MjsgfVxcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgICAgICAgICAubWFpbl9fbmF2IGxpIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7IH0gfVxcblxcbi5uYXZfX2xpbmtfY2FydCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBtYXJnaW46IDFweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBwYWRkaW5nOiA1cHggMjBweDsgfVxcblxcbi5lcnJvclBhZ2Utd3JhcHBlciB7XFxuICAgIHBhZGRpbmc6IDUwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgICAuZXJyb3JQYWdlLXdyYXBwZXIgaDEge1xcbiAgICAgICAgY29sb3I6ICMyMzIwMjA7IH1cXG4gICAgLmVycm9yUGFnZS13cmFwcGVyIGg1IHtcXG4gICAgICAgIGNvbG9yOiAjOUEyNzVBOyB9XFxuICAgIC5lcnJvclBhZ2Utd3JhcHBlciBpbWcge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgICAgICAgbWF4LWhlaWdodDogMzAwcHg7IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8qZ2xvYmFscyB3aW5kb3cgX193ZWJwYWNrX2hhc2hfXyAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcblx0dmFyIGxhc3RIYXNoO1xuXHR2YXIgdXBUb0RhdGUgPSBmdW5jdGlvbiB1cFRvRGF0ZSgpIHtcblx0XHRyZXR1cm4gbGFzdEhhc2guaW5kZXhPZihfX3dlYnBhY2tfaGFzaF9fKSA+PSAwO1xuXHR9O1xuXHR2YXIgbG9nID0gcmVxdWlyZShcIi4vbG9nXCIpO1xuXHR2YXIgY2hlY2sgPSBmdW5jdGlvbiBjaGVjaygpIHtcblx0XHRtb2R1bGUuaG90XG5cdFx0XHQuY2hlY2sodHJ1ZSlcblx0XHRcdC50aGVuKGZ1bmN0aW9uKHVwZGF0ZWRNb2R1bGVzKSB7XG5cdFx0XHRcdGlmICghdXBkYXRlZE1vZHVsZXMpIHtcblx0XHRcdFx0XHRsb2coXCJ3YXJuaW5nXCIsIFwiW0hNUl0gQ2Fubm90IGZpbmQgdXBkYXRlLiBOZWVkIHRvIGRvIGEgZnVsbCByZWxvYWQhXCIpO1xuXHRcdFx0XHRcdGxvZyhcblx0XHRcdFx0XHRcdFwid2FybmluZ1wiLFxuXHRcdFx0XHRcdFx0XCJbSE1SXSAoUHJvYmFibHkgYmVjYXVzZSBvZiByZXN0YXJ0aW5nIHRoZSB3ZWJwYWNrLWRldi1zZXJ2ZXIpXCJcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoIXVwVG9EYXRlKCkpIHtcblx0XHRcdFx0XHRjaGVjaygpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmVxdWlyZShcIi4vbG9nLWFwcGx5LXJlc3VsdFwiKSh1cGRhdGVkTW9kdWxlcywgdXBkYXRlZE1vZHVsZXMpO1xuXG5cdFx0XHRcdGlmICh1cFRvRGF0ZSgpKSB7XG5cdFx0XHRcdFx0bG9nKFwiaW5mb1wiLCBcIltITVJdIEFwcCBpcyB1cCB0byBkYXRlLlwiKTtcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHRcdC5jYXRjaChmdW5jdGlvbihlcnIpIHtcblx0XHRcdFx0dmFyIHN0YXR1cyA9IG1vZHVsZS5ob3Quc3RhdHVzKCk7XG5cdFx0XHRcdGlmIChbXCJhYm9ydFwiLCBcImZhaWxcIl0uaW5kZXhPZihzdGF0dXMpID49IDApIHtcblx0XHRcdFx0XHRsb2coXG5cdFx0XHRcdFx0XHRcIndhcm5pbmdcIixcblx0XHRcdFx0XHRcdFwiW0hNUl0gQ2Fubm90IGFwcGx5IHVwZGF0ZS4gTmVlZCB0byBkbyBhIGZ1bGwgcmVsb2FkIVwiXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRsb2coXCJ3YXJuaW5nXCIsIFwiW0hNUl0gXCIgKyBsb2cuZm9ybWF0RXJyb3IoZXJyKSk7XG5cdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGxvZyhcIndhcm5pbmdcIiwgXCJbSE1SXSBVcGRhdGUgZmFpbGVkOiBcIiArIGxvZy5mb3JtYXRFcnJvcihlcnIpKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdH07XG5cdHZhciBob3RFbWl0dGVyID0gcmVxdWlyZShcIi4vZW1pdHRlclwiKTtcblx0aG90RW1pdHRlci5vbihcIndlYnBhY2tIb3RVcGRhdGVcIiwgZnVuY3Rpb24oY3VycmVudEhhc2gpIHtcblx0XHRsYXN0SGFzaCA9IGN1cnJlbnRIYXNoO1xuXHRcdGlmICghdXBUb0RhdGUoKSAmJiBtb2R1bGUuaG90LnN0YXR1cygpID09PSBcImlkbGVcIikge1xuXHRcdFx0bG9nKFwiaW5mb1wiLCBcIltITVJdIENoZWNraW5nIGZvciB1cGRhdGVzIG9uIHRoZSBzZXJ2ZXIuLi5cIik7XG5cdFx0XHRjaGVjaygpO1xuXHRcdH1cblx0fSk7XG5cdGxvZyhcImluZm9cIiwgXCJbSE1SXSBXYWl0aW5nIGZvciB1cGRhdGUgc2lnbmFsIGZyb20gV0RTLi4uXCIpO1xufSBlbHNlIHtcblx0dGhyb3cgbmV3IEVycm9yKFwiW0hNUl0gSG90IE1vZHVsZSBSZXBsYWNlbWVudCBpcyBkaXNhYmxlZC5cIik7XG59XG4iLCJpbXBvcnQgeyBBQk9VVF9QQUdFX1RFTVBMQVRFIH0gZnJvbSAnLi4vdGVtcGxhdGVzLmpzJztcbmltcG9ydCBDT05GSUcgZnJvbSAnLi4vLi4vY29uZmlnLmpzJztcblxuY29uc3QgeyBjb250ZW50SWQgfSA9IENPTkZJRy5yb3V0ZXMuYWJvdXRQYWdlO1xuXG5mdW5jdGlvbiByZW5kZXJBYm91dFBhZ2UoKSB7XG4gIGNvbnN0IGFib3V0UGFnZVdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250ZW50SWQpO1xuICBhYm91dFBhZ2VXcmFwcGVyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgQUJPVVRfUEFHRV9URU1QTEFURSgpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyQWJvdXRQYWdlO1xuIiwiaW1wb3J0IHsgRk9STV9URU1QTEFURSB9IGZyb20gJy4uL3RlbXBsYXRlcy5qcyc7XG5pbXBvcnQgQ09ORklHIGZyb20gJy4uLy4uL2NvbmZpZy5qcyc7XG5cbmNvbnN0IHsgY29udGVudElkIH0gPSBDT05GSUcucm91dGVzLmF1dGhQYWdlO1xuXG5mdW5jdGlvbiBpbml0QXV0aEZvcm1zKGZvcm1Db250YWluZXIpIHtcbiAgY29uc3QgZm9ybUxpbmtzID0gZm9ybUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCd1bCcpO1xuICBjb25zdCBmb3JtcyA9IGZvcm1Db250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnZm9ybScpO1xuXG4gIGZvcm1MaW5rcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc3QgZm9ybUlkID0gYCR7ZS50YXJnZXQuaWQuc3BsaXQoJ2xpbmsnKVswXX1mb3JtYDtcbiAgICBmb3Jtcy5mb3JFYWNoKChmb3JtKSA9PiB7XG4gICAgICBmb3JtLnN0eWxlLmRpc3BsYXkgPSBmb3JtLmlkID09PSBmb3JtSWQgPyAnYmxvY2snIDogJ25vbmUnO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQXV0aEZvcm1zKCkge1xuICBjb25zdCBhdXRoRm9ybXNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250ZW50SWQpO1xuICBhdXRoRm9ybXNDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBGT1JNX1RFTVBMQVRFKCkpO1xuXG4gIGluaXRBdXRoRm9ybXMoYXV0aEZvcm1zQ29udGFpbmVyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyQXV0aEZvcm1zO1xuIiwiaW1wb3J0IHsgQ0FSVF9JVEVNX1RFTVBMQVRFIH0gZnJvbSAnLi4vdGVtcGxhdGVzLmpzJztcbmltcG9ydCBDT05GSUcgZnJvbSAnLi4vLi4vY29uZmlnLmpzJztcblxuY29uc3QgeyBjYXJ0IH0gPSBDT05GSUcuc2VsZWN0b3JzO1xuXG5jbGFzcyBDYXJ0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jYXJ0UGFnZUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNhcnQuY29udGVudCk7XG4gICAgdGhpcy5jYXJ0V3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2FydC53cmFwcGVyKTtcblxuICAgIGlmIChDYXJ0Lmluc3RhbmNlKSB7XG4gICAgICByZXR1cm4gQ2FydC5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICBDYXJ0Lmluc3RhbmNlID0gdGhpcztcbiAgfVxuXG4gIGluaXQoZGF0YSwgcHJvZHVjdHMpIHtcbiAgICB0aGlzLnJlc2V0Q2FydCgpO1xuICAgIGlmIChkYXRhKSB7XG4gICAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKChpZCkgPT4gdGhpcy5tYWtlQ2FydEl0ZW1DYXJkKGlkLCBkYXRhW2lkXSwgcHJvZHVjdHMpKTtcbiAgICB9XG4gICAgdGhpcy5jYXJ0UGFnZUNvbnRlbnQuYXBwZW5kQ2hpbGQodGhpcy5jYXJ0V3JhcHBlcik7XG4gIH1cblxuICBtYWtlQ2FydEl0ZW1DYXJkKHByb2R1Y3RJZCwgdmFsdWUsIHByb2R1Y3RzKSB7XG4gICAgY29uc3QgcHJvZHVjdCA9IHByb2R1Y3RzLmZpbmQoKGl0ZW0pID0+IFN0cmluZyhpdGVtLmlkKSA9PT0gcHJvZHVjdElkKTtcblxuICAgIGlmIChwcm9kdWN0KSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGlkLCBudW1iZXJBdmFpbGFibGUsIGltYWdlLCBuYW1lLCBwcmljZSxcbiAgICAgIH0gPSBwcm9kdWN0O1xuICAgICAgdGhpcy5jYXJ0V3JhcHBlci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIENBUlRfSVRFTV9URU1QTEFURShpZCwgdmFsdWUsIG51bWJlckF2YWlsYWJsZSwgaW1hZ2UsIG5hbWUsIHByaWNlKSk7XG4gICAgfVxuICB9XG5cbiAgcmVzZXRDYXJ0KCkge1xuICAgIGNvbnN0IGNhcnRJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChjYXJ0Lml0ZW0pO1xuICAgIGNhcnRJdGVtLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0ucmVtb3ZlKCkpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcnQ7XG4iLCJpbXBvcnQgeyBDQVJEX09SREVSX1RFTVBMQVRFIH0gZnJvbSAnLi4vdGVtcGxhdGVzLmpzJztcbmltcG9ydCBDT05GSUcgZnJvbSAnLi4vLi4vY29uZmlnLmpzJztcblxuY29uc3QgeyBjYXJ0IH0gPSBDT05GSUcuc2VsZWN0b3JzO1xuXG5mdW5jdGlvbiByZW5kZXJPcmRlckNhcmQoKSB7XG4gIGNvbnN0IG9yZGVyQ2FyZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2FydC5vcmRlcik7XG4gIG9yZGVyQ2FyZENvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIENBUkRfT1JERVJfVEVNUExBVEUoKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlck9yZGVyQ2FyZDtcbiIsImltcG9ydCB7IENBVEFMT0dVRV9JVEVNX1RFTVBMQVRFIH0gZnJvbSAnLi4vdGVtcGxhdGVzLmpzJztcbmltcG9ydCBDT05GSUcgZnJvbSAnLi4vLi4vY29uZmlnLmpzJztcblxuY29uc3QgeyBjYXRhbG9ndWUgfSA9IENPTkZJRy5zZWxlY3RvcnM7XG5jb25zdCB7IHJvdXRlIH0gPSBDT05GSUcucm91dGVzLnByb2R1Y3RQYWdlO1xuXG5mdW5jdGlvbiByZW5kZXJDYXRhbG9ndWVJdGVtKHByb2R1Y3QpIHtcbiAgY29uc3QgY2F0YWxvZ3VlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjYXRhbG9ndWUud3JhcHBlcik7XG4gIGNvbnN0IHtcbiAgICBpZCwgaW1hZ2UsIG5hbWUsIHByaWNlLFxuICB9ID0gcHJvZHVjdDtcblxuICBjb25zdCBjYXRhbG9ndWVJdGVtID0gQ0FUQUxPR1VFX0lURU1fVEVNUExBVEUoaWQsIGltYWdlLCBuYW1lLCBwcmljZSk7XG4gIGNhdGFsb2d1ZUNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGNhdGFsb2d1ZUl0ZW0pO1xufVxuXG5mdW5jdGlvbiBtYWtlQ2F0YWxvZ3VlSXRlbXNDbGlja2FibGUocmVuZGVyKSB7XG4gIGNvbnN0IGNhdGFsb2d1ZUNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChjYXRhbG9ndWUuaXRlbSk7XG4gIGNhdGFsb2d1ZUNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICBjb25zdCBjbGlja2FibGVBcmVhID0gY2FyZC5xdWVyeVNlbGVjdG9yKGNhdGFsb2d1ZS5pbWcpO1xuICAgIGNsaWNrYWJsZUFyZWEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCB7IGlkIH0gPSBjYXJkLmRhdGFzZXQ7XG4gICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgYC8ke3JvdXRlfS8ke2lkfWApO1xuICAgICAgcmVuZGVyKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZW5kZXJDYXRhbG9ndWUoZGF0YSwgcmVuZGVyKSB7XG4gIFsuLi5kYXRhXS5mb3JFYWNoKChwcm9kdWN0KSA9PiB7XG4gICAgcmVuZGVyQ2F0YWxvZ3VlSXRlbShwcm9kdWN0KTtcbiAgfSk7XG4gIG1ha2VDYXRhbG9ndWVJdGVtc0NsaWNrYWJsZShyZW5kZXIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJDYXRhbG9ndWU7XG4iLCJpbXBvcnQgeyBQUklDRV9JTlBVVF9URU1QTEFURSwgQ0hFQ0tCT1hfVEVNUExBVEUgfSBmcm9tICcuLi90ZW1wbGF0ZXMuanMnO1xuaW1wb3J0IENPTkZJRyBmcm9tICcuLi8uLi9jb25maWcuanMnO1xuXG5jb25zdCB7IGZpbHRlcnMgfSA9IENPTkZJRztcbmNvbnN0IHsgZmlsdGVyIH0gPSBDT05GSUcuc2VsZWN0b3JzO1xuXG5jbGFzcyBGaWx0ZXJzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5maWx0ZXJzQ29udGFuaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZmlsdGVyLndyYXBwZXIpO1xuICAgIHRoaXMuY2hlY2tib3hlcyA9IHt9O1xuICB9XG5cbiAgZHJhd0ZpbHRlcnMoZGF0YSkge1xuICAgIHRoaXMuZHJhd1ByaWNlSW5wdXRSYW5nZShkYXRhKTtcbiAgICB0aGlzLmJ1aWxkQ2hlY2tib3hlcyhkYXRhKTtcbiAgICB0aGlzLmRyYXdDaGVja2JveGVzKCk7XG4gICAgdGhpcy5kcmF3UmVzZXRCdXR0b24odGhpcy5maWx0ZXJzQ29udGFuaW5lcik7XG4gIH1cblxuICBkcmF3UHJpY2VJbnB1dFJhbmdlKGRhdGEpIHtcbiAgICBjb25zdCBhbGxQcmljZXMgPSBkYXRhLm1hcCgoeyBwcmljZSB9KSA9PiBwcmljZSk7XG4gICAgY29uc3QgcHJpY2VzID0ge1xuICAgICAgbWluOiBNYXRoLm1pbiguLi5hbGxQcmljZXMpLFxuICAgICAgbWF4OiBNYXRoLm1heCguLi5hbGxQcmljZXMpLFxuICAgIH07XG4gICAgdGhpcy5maWx0ZXJzQ29udGFuaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIFBSSUNFX0lOUFVUX1RFTVBMQVRFKHByaWNlcy5taW4sIHByaWNlcy5tYXgpKTtcbiAgfVxuXG4gIGJ1aWxkQ2hlY2tib3hlcyhkYXRhKSB7XG4gICAgWy4uLmRhdGFdLmZvckVhY2goKHByb2R1Y3QpID0+IHtcbiAgICAgIGZpbHRlcnMuZm9yRWFjaCgoZmlsdGVyQmFzZSkgPT4ge1xuICAgICAgICBpZiAocHJvZHVjdFtmaWx0ZXJCYXNlXVxuICAgICAgICAgICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhpcy5jaGVja2JveGVzLCBmaWx0ZXJCYXNlKSkge1xuICAgICAgICAgIHRoaXMuY2hlY2tib3hlc1tmaWx0ZXJCYXNlXSA9IFtdO1xuICAgICAgICAgIHRoaXMuY2hlY2tib3hlc1tmaWx0ZXJCYXNlXS5wdXNoKHByb2R1Y3RbZmlsdGVyQmFzZV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb2R1Y3RbZmlsdGVyQmFzZV1cbiAgICAgICAgICAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmJpbmQodGhpcy5jaGVja2JveGVzLCBmaWx0ZXJCYXNlKVxuICAgICAgICAgICYmICF0aGlzLmNoZWNrYm94ZXNbZmlsdGVyQmFzZV0uaW5jbHVkZXMocHJvZHVjdFtmaWx0ZXJCYXNlXSkpIHtcbiAgICAgICAgICB0aGlzLmNoZWNrYm94ZXNbZmlsdGVyQmFzZV0ucHVzaChwcm9kdWN0W2ZpbHRlckJhc2VdKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBkcmF3Q2hlY2tib3hlcygpIHtcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLmNoZWNrYm94ZXMpKSB7XG4gICAgICBjb25zdCBmaWx0ZXJHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZmlsdGVyR3JvdXAuc2V0QXR0cmlidXRlKCdjbGFzcycsIGZpbHRlci5jb250YWluZXIpO1xuICAgICAgZmlsdGVyR3JvdXAuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLFxuICAgICAgICBgPGRpdiBjbGFzcz1cImZpbHRlcl9fZ3JvdXBfbGFiZWxcIj4ke2tleS50b1VwcGVyQ2FzZSgpfTwvZGl2PmApO1xuXG4gICAgICBjb25zdCBmaWx0ZXJHcm91cENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGZpbHRlckdyb3VwQ29udGVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZpbHRlcl9fZ3JvdXBfY29udGVudCcpO1xuXG4gICAgICB2YWx1ZS5zb3J0KCkuZm9yRWFjaCgoZmlsdGVyVmFsdWUpID0+IHtcbiAgICAgICAgZmlsdGVyR3JvdXBDb250ZW50Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgQ0hFQ0tCT1hfVEVNUExBVEUoa2V5LCBmaWx0ZXJWYWx1ZSkpO1xuICAgICAgfSk7XG5cbiAgICAgIGZpbHRlckdyb3VwLmFwcGVuZENoaWxkKGZpbHRlckdyb3VwQ29udGVudCk7XG5cbiAgICAgIHRoaXMuaW5pdEZpbHRlckdyb3VwQ29udGVudChmaWx0ZXJHcm91cCwgZmlsdGVyR3JvdXBDb250ZW50KTtcbiAgICAgIHRoaXMuZmlsdGVyc0NvbnRhbmluZXIuYXBwZW5kQ2hpbGQoZmlsdGVyR3JvdXApO1xuICAgIH1cbiAgfVxuXG4gIGRyYXdSZXNldEJ1dHRvbihjb250YWluZXIpIHtcbiAgICBjb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgJzxidXR0b24gY2xhc3M9XCJmaWx0ZXJfX2J1dHRvbl9yZXNldFwiPlJlc2V0IGZpbHRlcnM8L2J1dHRvbj4nKTtcbiAgfVxuXG4gIGluaXRGaWx0ZXJHcm91cENvbnRlbnQoZ3JvdXAsIGNvbnRlbnQpIHtcbiAgICBjb250ZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgY29uc3QgbGFiZWwgPSBncm91cC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZGl2JylbMF07XG5cbiAgICBsYWJlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IHsgZGlzcGxheSB9ID0gY29udGVudC5zdHlsZTtcbiAgICAgIGNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXkgPT09ICdub25lJyA/ICdibG9jaycgOiAnbm9uZSc7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmlsdGVycztcbiIsImltcG9ydCBDT05GSUcgZnJvbSAnLi4vLi4vY29uZmlnLmpzJztcbmltcG9ydCB7IEVSUk9SX1BBR0UgfSBmcm9tICcuLi90ZW1wbGF0ZXMuanMnO1xuXG5jb25zdCB7IGNvbnRlbnRJZCB9ID0gQ09ORklHLnJvdXRlcy5lcnJvclBhZ2U7XG5cbmZ1bmN0aW9uIHJlbmRlckVycm9yUGFnZSgpIHtcbiAgY29uc3QgZXJyb3JQYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGVudElkKTtcbiAgZXJyb3JQYWdlQ29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgRVJST1JfUEFHRSgpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyRXJyb3JQYWdlO1xuIiwiaW1wb3J0IHsgSE9NRVBBR0VfVEVNUExBVEUgfSBmcm9tICcuLi90ZW1wbGF0ZXMuanMnO1xuaW1wb3J0IENPTkZJRyBmcm9tICcuLi8uLi9jb25maWcuanMnO1xuXG5jb25zdCB7IGNvbnRlbnRJZCB9ID0gQ09ORklHLnJvdXRlcy5ob21lUGFnZTtcbmNvbnN0IHsgaG9tZSB9ID0gQ09ORklHLnNlbGVjdG9ycztcblxuZnVuY3Rpb24gcmVuZGVySG9tZVBhZ2UocmVuZGVyKSB7XG4gIGNvbnN0IGhvbWVwYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGVudElkKTtcbiAgaG9tZXBhZ2UuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBIT01FUEFHRV9URU1QTEFURSgpKTtcbiAgaW5pdFNlcml2ZVVybHMocmVuZGVyKTtcbn1cblxuZnVuY3Rpb24gaW5pdFNlcml2ZVVybHMocmVuZGVyRm4pIHtcbiAgY29uc3Qgc2VydmljZXNVcmxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChob21lLnNlcnZpY2VzKTtcbiAgc2VydmljZXNVcmxzLmZvckVhY2goKHVybCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlID0gdXJsLmNsYXNzTmFtZS5zcGxpdCgnaG9tZVBhZ2VfX2xpbmtfJylbMV07XG4gICAgdXJsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIGAvJHtyb3V0ZX1gKTtcbiAgICAgIHJlbmRlckZuKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJIb21lUGFnZTtcbiIsImltcG9ydCB7IE5BVkJBUl9URU1QTEFURSB9IGZyb20gJy4uL3RlbXBsYXRlcy5qcyc7XG5pbXBvcnQgQ09ORklHIGZyb20gJy4uLy4uL2NvbmZpZy5qcyc7XG5cbmNvbnN0IHsgcm91dGVzIH0gPSBDT05GSUc7XG5cbmZ1bmN0aW9uIGluaXROYXZiYXIobmF2YmFyLCByZW5kZXIpIHtcbiAgbmF2YmFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBzd2l0Y2ggKGUudGFyZ2V0LmNsYXNzTmFtZSkge1xuICAgIGNhc2UgJ25hdl9fbGlua19ob21lJzpcbiAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCBgJHtyb3V0ZXMuaG9tZVBhZ2Uucm91dGV9YCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICduYXZfX2xpbmtfYWJvdXQnOlxuICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIGAvJHtyb3V0ZXMuYWJvdXRQYWdlLnJvdXRlfWApO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbmF2X19saW5rX2NhdGFsb2d1ZSc6XG4gICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgYC8ke3JvdXRlcy5jYXRhbG9ndWVQYWdlLnJvdXRlfWApO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbmF2X19saW5rX2NhcnQnOlxuICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIGAvJHtyb3V0ZXMuY2FydFBhZ2Uucm91dGV9YCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICduYXZfX2xpbmtfbG9naW4nOlxuICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIGAvJHtyb3V0ZXMuYXV0aFBhZ2Uucm91dGV9YCk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJlbmRlcih3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyTmF2YmFyKHJlbmRlcikge1xuICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtbWFpbi1uYXYnKTtcbiAgbmF2YmFyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgTkFWQkFSX1RFTVBMQVRFKCkpO1xuICBpbml0TmF2YmFyKG5hdmJhciwgcmVuZGVyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyTmF2YmFyO1xuIiwiaW1wb3J0IHsgU0lOR0xFX1BBR0VfVEVNUExBVEUgfSBmcm9tICcuLi90ZW1wbGF0ZXMuanMnO1xuaW1wb3J0IENPTkZJRyBmcm9tICcuLi8uLi9jb25maWcuanMnO1xuXG5jb25zdCB7IGNvbnRlbnRJZCB9ID0gQ09ORklHLnJvdXRlcy5wcm9kdWN0UGFnZTtcbmNvbnN0IHsgcGFnZSB9ID0gQ09ORklHLnNlbGVjdG9ycztcblxuY2xhc3MgU2luZ2xlUGFnZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc2luZ2xlUGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRlbnRJZCk7XG4gICAgaWYgKFNpbmdsZVBhZ2UuaW5zdGFuY2UpIHtcbiAgICAgIHJldHVybiBTaW5nbGVQYWdlLmluc3RhbmNlO1xuICAgIH1cblxuICAgIFNpbmdsZVBhZ2UuaW5zdGFuY2UgPSB0aGlzO1xuICB9XG5cbiAgZHJhd1NpbmdsZVBhZ2UocHJvZHVjdCkge1xuICAgIGlmIChwcm9kdWN0KSB7XG4gICAgICB0aGlzLnJlc2V0UGFnZSgpO1xuICAgICAgdGhpcy5zaW5nbGVQYWdlQ29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgU0lOR0xFX1BBR0VfVEVNUExBVEUocHJvZHVjdCkpO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0UGFnZSgpIHtcbiAgICBjb25zdCBwYWdlQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocGFnZS5jb250ZW50KTtcbiAgICBpZiAocGFnZUNvbnRlbnQpIHtcbiAgICAgIHBhZ2VDb250ZW50LnJlbW92ZSgpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaW5nbGVQYWdlO1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuZXhwb3J0IGNvbnN0IEZPUk1fVEVNUExBVEUgPSAoKSA9PiBgXG4gIDxkaXYgY2xhc3M9XCJhdXRoX19mb3JtX3dyYXBwZXJcIj5cbiAgPHVsPlxuICAgIDxsaSBpZD1cImpzLXNpZ24taW4tbGlua1wiPlNpZ24gSW48L2xpPlxuICAgIDxsaSBpZD1cImpzLXNpZ24tdXAtbGlua1wiPlNpZ24gVXA8L2xpPlxuICA8L3VsPlxuICA8cCBjbGFzcz1cImF1dGhfX2Zvcm1fZXJyb3JcIj48L3A+XG4gIDxmb3JtIGlkPVwianMtc2lnbi1pbi1mb3JtXCIgbm92YWxpZGF0ZT5cbiAgICA8bGFiZWwgZm9yPVwiZW1haWxcIj5FbWFpbDo8L2xhYmVsPlxuICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIj5cbiAgICA8cCBjbGFzcz1cImVtYWlsLWVycm9yXCI+PC9wPlxuICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkOjwvbGFiZWw+XG4gICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiPlxuICAgIDxwIGNsYXNzPVwicGFzc3dvcmQtZXJyb3JcIj48L3A+XG4gICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2lnbiBpbjwvYnV0dG9uPlxuICA8L2Zvcm0+XG4gIDxmb3JtIGlkPVwianMtc2lnbi11cC1mb3JtXCIgbm92YWxpZGF0ZSBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCI+XG4gICAgPGxhYmVsIGZvcj1cIm5hbWVsXCI+TmFtZTo8L2xhYmVsPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCI+XG4gICAgPHAgY2xhc3M9XCJuYW1lLWVycm9yXCI+PC9wPlxuICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiPkVtYWlsOjwvbGFiZWw+XG4gICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiPlxuICAgIDxwIGNsYXNzPVwiZW1haWwtZXJyb3JcIj48L3A+XG4gICAgPGxhYmVsIGZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ6PC9sYWJlbD5cbiAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCI+XG4gICAgPHAgY2xhc3M9XCJwYXNzd29yZC1lcnJvclwiPjwvcD5cbiAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TaWduIFVwPC9idXR0b24+XG4gIDwvZm9ybT5cbiAgPC9kaXY+YDtcblxuZXhwb3J0IGNvbnN0IENBUkRfT1JERVJfVEVNUExBVEUgPSAoKSA9PiBgXG48ZGl2IGNsYXNzPVwiY2FydFBhZ2VfX29yZGVyX3dyYXBwZXJcIj5cbiAgPHAgY2xhc3M9XCJjYXJ0UGFnZV9fb3JkZXJfbWVzc2FnZVwiPjwvcD5cbiAgPGRpdiBjbGFzcz1cImNhcnRQYWdlX191c2VyX2luZm9cIj5cbiAgICA8aDM+VXNlciBJbmZvPC9oMz5cbiAgICA8ZGl2IGNsYXNzPVwiY2FydFBhZ2VfX3VzZXJfZGF0YVwiPjwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdj5cbiAgICA8aDM+VG90YWw8L2gzPlxuICAgIDxkaXYgY2xhc3M9XCJjYXJ0UGFnZV9fdG90YWxcIj5ObyBpdGVtcyBjaG9zZW48L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXY+XG4gICAgPGgzPk9yZGVyIGRldGFpbHM8L2gzPlxuICAgIDxkaXYgY2xhc3M9XCJjYXJ0UGFnZV9fZGV0YWlsc1wiPjwvZGl2PlxuICA8L2Rpdj5cbiAgPGJ1dHRvbiBjbGFzcz1cImNhcnRQYWdlX19vcmRlcl9idXlcIj5CdXk8L2J1dHRvbj5cbjwvZGl2PmA7XG5cbmV4cG9ydCBjb25zdCBDQVRBTE9HVUVfSVRFTV9URU1QTEFURSA9IChpZCwgaW1hZ2UsIG5hbWUsIHByaWNlKSA9PiBgXG48ZGl2IGNsYXNzPVwiY2F0YWxvZ3VlX19pdGVtXCIgZGF0YS1pZD1cIiR7aWR9XCI+XG4gIDxkaXYgY2xhc3M9XCJjYXRhbG9ndWVfX2l0ZW1faW1nd3JhcFwiPlxuICAgIDxpbWcgY2xhc3M9XCJjYXRhbG9ndWVfX2l0ZW1fcGhvdG9cIiBzcmM9LyR7aW1hZ2V9PlxuICAgIDxoNSBjbGFzcz1cImNhdGFsb2d1ZV9faXRlbV9uYW1lXCI+JHtuYW1lfTwvaDU+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiY2F0YWxvZ3VlX19pdGVtX2luZm9cIj5cbiAgICA8cCBjbGFzcz1cImNhdGFsb2d1ZV9faXRlbV9wcmljZVwiPiR7cHJpY2V9JDwvcD5cbiAgICA8YnV0dG9uIGNsYXNzPVwiY2F0YWxvZ3VlX19pdGVtX2FkZFwiPkFkZCB0byBjYXJ0PC9idXR0b24+XG4gIDwvZGl2PlxuPC9kaXY+YDtcblxuZXhwb3J0IGNvbnN0IFBSSUNFX0lOUFVUX1RFTVBMQVRFID0gKG1pbiwgbWF4KSA9PiBgXG4gIDxkaXYgY2xhc3M9XCJmaWx0ZXItZ3JvdXAtbGFiZWxcIj5cbiAgICA8aDM+UFJJQ0U6PC9oMz5cbiAgICA8ZGl2IGNsYXNzPVwiZmlsdGVyX19ncm91cF9jb250ZW50XCI+XG4gICAgICA8c3Bhbj4ke21pbn08L3NwYW4+XG4gICAgICA8aW5wdXQgdHlwZT1cInJhbmdlXCIgY2xhc3M9XCJmaWx0ZXJfX2dyb3VwX3ByaWNlXCIgbmFtZT1cInByaWNlXCIgXG4gICAgICAgIHZhbHVlPVwiJHttYXh9XCIgbWluPVwiJHttaW59XCIgbWF4PVwiJHttYXh9XCI+XG4gICAgICA8c3Bhbj4ke21heH08L3NwYW4+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmlsdGVyX19wcmljZV9jdXJyZW50XCI+PGRpdj4gXG4gICAgPC9kaXY+XG4gIDwvZGl2PmA7XG5cbmV4cG9ydCBjb25zdCBDSEVDS0JPWF9URU1QTEFURSA9IChmaWx0ZXJOYW1lLCBmaWx0ZXJWYWx1ZSkgPT4gYFxuICA8ZGl2IGNsYXNzPVwiZmlsdGVyX19ncm91cF9jaGVja2JveFwiIHZhbHVlPSR7ZmlsdGVyVmFsdWV9PlxuICAgIDxsYWJlbCBmb3I9XCIke2ZpbHRlclZhbHVlfVwiPiR7ZmlsdGVyVmFsdWV9PC9sYWJlbD5cbiAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cIiR7ZmlsdGVyTmFtZX1cIiB2YWx1ZT1cIiR7ZmlsdGVyVmFsdWV9XCIgLz5cbiAgPC9kaXY+YDtcblxuZXhwb3J0IGNvbnN0IENBUlRfSVRFTV9URU1QTEFURSA9IChpZCwgdmFsdWUsIG51bWJlckF2YWlsYWJsZSwgaW1hZ2UsIG5hbWUsIHByaWNlKSA9PiBgXG48ZGl2IGNsYXNzPVwiY2FydF9faXRlbV93cmFwcGVyXCIgZGF0YS1pZD1cIiR7aWR9XCI+XG4gIDxkaXYgY2xhc3M9XCJjYXJ0X19pdGVtX2RldGFpbHNcIj5cbiAgICA8aW1nIGNsYXNzPVwiY2FydF9faXRlbV9pbWFnZVwiIHNyYz1cIi8ke2ltYWdlfVwiIC8+XG4gICAgPGg1IGNsYXNzPVwiY2FydF9faXRlbV9uYW1lXCI+JHtuYW1lfTwvaDU+XG4gICAgPHAgY2xhc3M9XCJjYXJ0X19pdGVtX3ByaWNlXCIgZGF0YS12YWx1ZT1cIiR7cHJpY2V9XCI+UHJpY2U6ICR7cHJpY2V9JDwvcD5cbiAgPC9kaXY+XG4gIDxmb3JtIGNsYXNzPVwiY2FydF9faXRlbV9pbnB1dFwiPlxuICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImNhcnRfX2l0ZW1fY2hvb3NlXCIvPlxuICAgIDxpbnB1dCBjbGFzcz1cImNhcnRfX2l0ZW1fcXVhbnRpdHlcIiBkYXRhLWlkPVwiJHtpZH1cIiB0eXBlPVwibnVtYmVyXCIgdmFsdWU9XCIke3ZhbHVlfVwiIG1pbj1cIjFcIiBtYXg9XCIke251bWJlckF2YWlsYWJsZX1cIi8+XG4gIDwvZm9ybT5cbiAgPGJ1dHRvbiBjbGFzcz1cImNhcnRfX2l0ZW1fZGVsZXRlXCIgZGF0YS1pZD1cIiR7aWR9XCI+RGVsZXRlPC9idXR0b24+XG4gIDwvZGl2PmA7XG5cbmV4cG9ydCBjb25zdCBOQVZCQVJfVEVNUExBVEUgPSAoKSA9PiBgXG48ZGl2IGNsYXNzPVwibmF2X193cmFwcGVyXCI+XG4gIDx1bD5cbiAgICA8bGkgY2xhc3M9XCJuYXZfX2xpbmtfaG9tZVwiPkhvbWU8L2xpPlxuICAgIDxsaSBjbGFzcz1cIm5hdl9fbGlua19hYm91dFwiPkFib3V0PC9saT5cbiAgICA8bGkgY2xhc3M9XCJuYXZfX2xpbmtfY2F0YWxvZ3VlXCI+Q2F0YWxvZ3VlPC9saT5cbiAgPC91bD5cbiAgPHVsPlxuICAgIDxsaSBjbGFzcz1cIm5hdl9fbGlua19sb2dpblwiPkxvZyBpbjwvbGk+XG4gICAgPGxpIGNsYXNzPVwibmF2X19saW5rX2xvZ291dFwiPkxvZyBvdXQ8L2xpPlxuICAgIDxsaT48aW1nIGNsYXNzPVwibmF2X19saW5rX2NhcnRcIiBzcmM9XCIvYXNzZXRzL2ltZy8xMjYwODMucG5nXCI+PC9saT5cbiAgPC91bD5cbjwvZGl2PmA7XG5cbmV4cG9ydCBjb25zdCBTSU5HTEVfUEFHRV9URU1QTEFURSA9IChwcm9kdWN0KSA9PiBgXG4gIDxkaXYgY2xhc3M9XCJzaW5nbGVQYWdlX19jb250ZW50XCI+XG4gICAgPGRpdiBjbGFzcz1cInNpbmdsZVBhZ2VfX2NvbnRlbnRfbWFpblwiPiBcbiAgICA8ZGl2IGNsYXNzPVwic2luZ2xlUGFnZV9faW1nX2NvbnRhaW5lclwiPlxuICAgICAgPGltZyBjbGFzcz1cInNpbmdsZVBhZ2VfY29udGVudF9pbWdcIiBzcmM9XCIvJHtwcm9kdWN0LmltYWdlfVwiPlxuICAgIDwvZGl2PlxuICAgIDxoNT4ke3Byb2R1Y3QubmFtZX08L2g1PlxuICAgIDxwPiR7cHJvZHVjdC5wcmljZX0kPC9wPlxuICAgIDxkaXYgY2xhc3M9XCJzaW5nbGVQYWdlX19pdGVtX2FkZFwiPlxuICAgICAgPGJ1dHRvbj5BZGQgdG8gY2FydDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwic2luZ2xlUGFnZV9jb250ZW50X2luZm9cIj5cbiAgICA8ZGl2IGNsYXNzPVwic2luZ2xlUGFnZV9jb250ZW50X2Jhc2VcIj5cbiAgICAgIDxwPjxiPkJyYW5kPC9iPjogJHtwcm9kdWN0LmJyYW5kfTwvcD5cbiAgICAgIDxwPjxiPk1hbnVmYWN0dXJlcjwvYj46ICR7cHJvZHVjdC5tYW51ZmFjdHVyZXJ9PC9wPlxuICAgICAgPHA+PGI+Vm9sdW1lPC9iPjogJHtwcm9kdWN0LnZvbHVtZX08L3A+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInNpbmdsZVBhZ2VfY29udGVudF9kZXNjXCI+XG4gICAgICA8cD4ke3Byb2R1Y3QuZGVzY3JpcHRpb259PC9wPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJzaW5nbGVQYWdlX2NvbnRlbnRfc3BlY1wiPlxuICAgICAgPHA+PGI+U3Bpcml0IHR5cGU8L2I+OiAke3Byb2R1Y3RbJ3NwaXJpdCB0eXBlJ119PC9wPlxuICAgICAgPHA+PGI+Q2F0ZWdvcnk8L2I+OiAke3Byb2R1Y3QuY2F0ZWdvcnl9PC9wPlxuICAgICAgPHA+PGI+UGFja2FnZTwvYj46ICR7cHJvZHVjdC5wYWNrYWdlfTwvcD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDwvZGl2PlxuYDtcblxuZXhwb3J0IGNvbnN0IEhPTUVQQUdFX1RFTVBMQVRFID0gKCkgPT4gYFxuICA8ZGl2IGNsYXNzPVwibGVhZF9fYmFubmVyXCI+XG4gICAgPGltZyBzcmM9XCIvYXNzZXRzL2ltZy9ob21lcGFnZS9sZWFkLWJhbm5lci5qcGdcIiAvPlxuICAgIDxkaXYgY2xhc3M9XCJiYW5uZXJfX2NvbnRlbnRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ3cmFwcGVyXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwidGl0bGVcIj5Pbmx5IHRydXN0ZWQgc3VwcGxpZXJzPC9zcGFuPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuPC9saT5cbiAgICAgICAgICA8bGk+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC48L2xpPlxuICAgICAgICAgIDxsaT5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LjwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxzZWN0aW9uIGNsYXNzPVwiaG9tZVBhZ2VfX3NlcnZpY2VzXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwid3JhcHBlclwiPlxuICAgICAgPGgxPk91ciBzZXJ2aWNlczwvaDE+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJob21lUGFnZV9fbGlua19hYm91dFwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL2ltZy9ob21lcGFnZS9hYm91dC5wbmdcIiAvPlxuICAgICAgICAgICAgPHA+QWJvdXQgdXM8L3A+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJob21lUGFnZV9fbGlua19jYXRhbG9ndWVcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWcvaG9tZXBhZ2Uvc2hvcC5wbmdcIiAvPlxuICAgICAgICAgICAgPHA+U2hvcCBub3c8L3A+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJob21lUGFnZV9fbGlua19sb2dpblwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL2ltZy9ob21lcGFnZS9qb2luLnBuZ1wiIC8+XG4gICAgICAgICAgICA8cD5Kb2luPC9wPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gIDxkaXYgY2xhc3M9XCJzZWNvbmRfX2Jhbm5lclwiPlxuICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWcvaG9tZXBhZ2Uvc2Vjb25kLWJhbm5lci5qcGdcIiAvPlxuICAgIDxkaXYgY2xhc3M9XCJiYW5uZXJfX2NvbnRlbnRcIj5cbiAgICAgICA8ZGl2IGNsYXNzPVwid3JhcHBlclwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInRpdGxlXCI+RXhjZWxsZW50IHNlcnZpY2U8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwidGl0bGVcIj5GYXN0IGRlbGl2ZXJ5PC9zcGFuPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuPC9saT5cbiAgICAgICAgICA8bGk+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC48L2xpPlxuICAgICAgICAgIDxsaT5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LjwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxzZWN0aW9uIGNsYXNzPVwiaG9tZVBhZ2VfX3Byb2R1Y3RzXCI+XG4gICAgPGRpdiBjbGFzcz1cIndyYXBwZXJcIj5cbiAgICAgIDxoMT5Qb3B1bGFyIGJyYW5kczwvaDE+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaT48aW1nIHNyYz1cIi9hc3NldHMvaW1nL2hvbWVwYWdlL2JhbGxhbnRpbmVzLmpwZ1wiIG5hbWU9XCJicmFuZFwiIGRhdGEtdmFsdWU9XCJCYWxsYW50aW5lJ3NcIiAvPjwvbGk+XG4gICAgICAgIDxsaT48aW1nIHNyYz1cIi9hc3NldHMvaW1nL2hvbWVwYWdlL2JsYWNrLXZlbHZldC5qcGdcIiBuYW1lPVwiYnJhbmRcIiBkYXRhLXZhbHVlPVwiQmxhY2sgVmVsdmV0XCIgLz48L2xpPlxuICAgICAgICA8bGk+PGltZyBzcmM9XCIvYXNzZXRzL2ltZy9ob21lcGFnZS9qYWNrLWRhbmllbHMuanBnXCIgbmFtZT1cImJyYW5kXCIgZGF0YS12YWx1ZT1cIkphY2sgRGFuaWVsJ3NcIiAvPjwvbGk+XG4gICAgICAgIDxsaT48aW1nIHNyYz1cIi9hc3NldHMvaW1nL2hvbWVwYWdlL2phbWVzb24uanBnXCIgbmFtZT1cImJyYW5kXCIgZGF0YS12YWx1ZT1cIkphbWVzb25cIi8+PC9saT5cbiAgICAgICAgPGxpPjxpbWcgc3JjPVwiL2Fzc2V0cy9pbWcvaG9tZXBhZ2UvbGF1ZGVycy5qcGdcIiBuYW1lPVwiYnJhbmRcIiBkYXRhLXZhbHVlPVwiTGF1ZGVyJ3NcIiAvPjwvbGk+XG4gICAgICAgIDxsaT48aW1nIHNyYz1cIi9hc3NldHMvaW1nL2hvbWVwYWdlL2ppbS1iZWFtLmpwZ1wiIG5hbWU9XCJicmFuZFwiIGRhdGEtdmFsdWU9XCJKaW0gQmVhbVwiLz48L2xpPlxuICAgICAgICA8bGk+PGltZyBzcmM9XCIvYXNzZXRzL2ltZy9ob21lcGFnZS9qYWdlcm1laXN0ZXIuanBnXCIgbmFtZT1cImJyYW5kXCIgZGF0YS12YWx1ZT1cIkphZ2VybWVpc3RlclwiLz48L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgPC9zZWN0aW9uPmA7XG5cblxuZXhwb3J0IGNvbnN0IEFCT1VUX1BBR0VfVEVNUExBVEUgPSAoKSA9PiBgXG4gIDxkaXYgY2xhc3M9XCJzZWNvbmRfX2Jhbm5lclwiPlxuICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWcvYWJvdXQvYWJvdXQuanBnXCIgLz5cbiAgICA8ZGl2IGNsYXNzPVwiYmFubmVyX19jb250ZW50XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwid3JhcHBlclwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInRpdGxlXCI+QW5vdGhlciBsb3JlbSE8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxzZWN0aW9uIGNsYXNzPVwiYWJvdXRQYWdlX19jb250ZW50XCI+XG4gICAgPGgxPkFib3V0IHVzPC9oMT5cbiAgICA8ZGl2PlwiQXQgdmVybyBlb3MgZXQgYWNjdXNhbXVzIGV0IGl1c3RvIG9kaW8gZGlnbmlzc2ltb3MgZHVjaW11cyBxdWkgYmxhbmRpdGlpcyBwcmFlc2VudGl1bSB2b2x1cHRhdHVtIGRlbGVuaXRpXG4gICAgIGF0cXVlIGNvcnJ1cHRpIHF1b3MgZG9sb3JlcyBldCBxdWFzIG1vbGVzdGlhcyBleGNlcHR1cmkgc2ludCBvY2NhZWNhdGkgY3VwaWRpdGF0ZSBub24gcHJvdmlkZW50LFxuICAgICAgc2ltaWxpcXVlIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0aWEgYW5pbWksIGlkIGVzdCBsYWJvcnVtIGV0IGRvbG9ydW0gZnVnYS5cbiAgICAgIEV0IGhhcnVtIHF1aWRlbSByZXJ1bSBmYWNpbGlzIGVzdCBldCBleHBlZGl0YSBkaXN0aW5jdGlvLiBOYW0gbGliZXJvIHRlbXBvcmUsIGN1bSBzb2x1dGEgbm9iaXMgZXN0IGVsaWdlbmRpXG4gICAgICAgb3B0aW8gY3VtcXVlIG5paGlsIGltcGVkaXQgcXVvIG1pbnVzIGlkIHF1b2QgbWF4aW1lIHBsYWNlYXQgZmFjZXJlIHBvc3NpbXVzLCBvbW5pcyB2b2x1cHRhcyBhc3N1bWVuZGEgZXN0LFxuICAgICAgICBvbW5pcyBkb2xvciByZXBlbGxlbmR1cy4gVGVtcG9yaWJ1cyBhdXRlbSBxdWlidXNkYW0gZXQgYXV0IG9mZmljaWlzIGRlYml0aXMgYXV0IHJlcnVtIG5lY2Vzc2l0YXRpYnVzIHNhZXBlIFxuICAgICAgICBldmVuaWV0IHV0IGV0IHZvbHVwdGF0ZXMgcmVwdWRpYW5kYWUgc2ludCBldCBtb2xlc3RpYWUgbm9uIHJlY3VzYW5kYWUuIEl0YXF1ZSBlYXJ1bSByZXJ1bSBoaWMgdGVuZXR1ciBhIHNhcGllbnRlIGRlbGVjdHVzLFxuICAgICAgICAgdXQgYXV0IHJlaWNpZW5kaXMgdm9sdXB0YXRpYnVzIG1haW9yZXMgYWxpYXMgY29uc2VxdWF0dXIgYXV0IHBlcmZlcmVuZGlzIGRvbG9yaWJ1cyBhc3BlcmlvcmVzIHJlcGVsbGF0LlwiXG4gICAgPC9kaXY+XG4gIDwvc2VjdGlvbj5cbiAgPHNlY3Rpb24gY2xhc3M9XCJhYm91dFBhZ2VfX2FydGljbGVzXCI+XG4gICAgPGRpdiBjbGFzcz1cIndyYXBwZXJcIj5cbiAgICAgIDxoMT5Qb3B1bGFyIGRyaW5rczwvaDE+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvaW1nL2Fib3V0L3dpbmUuanBnXCI+PC9pbWc+XG4gICAgICAgICAgPGg1PkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0PC9oNT5cbiAgICAgICAgICA8ZGl2PkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIFxuICAgICAgICAgIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSxcbiAgICAgICAgICAgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBcbiAgICAgICAgICAgRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuXG4gICAgICAgICAgICBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhIGRlc2VydW50IG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL2ltZy9hYm91dC93aGlza2V5LnBuZ1wiPjwvaW1nPlxuICAgICAgICAgIDxoNT5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldDwvaDU+XG4gICAgICAgICAgPGRpdj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCBcbiAgICAgICAgICB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sXG4gICAgICAgICAgIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gXG4gICAgICAgICAgIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLlxuICAgICAgICAgICAgRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWcvYWJvdXQvbWFydGluaS5qcGdcIj48L2ltZz5cbiAgICAgICAgICA8aDU+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQ8L2g1PlxuICAgICAgICAgIDxkaXY+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgXG4gICAgICAgICAgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLFxuICAgICAgICAgICBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIFxuICAgICAgICAgICBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci5cbiAgICAgICAgICAgIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvaW1nL2Fib3V0L3RlcXVpbGEuanBnXCI+PC9pbWc+XG4gICAgICAgICAgPGg1PkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0PC9oNT5cbiAgICAgICAgICA8ZGl2PkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIFxuICAgICAgICAgIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSxcbiAgICAgICAgICBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIFxuICAgICAgICAgIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLlxuICAgICAgICAgICAgRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWcvYWJvdXQvYmVlci5qcGdcIj48L2ltZz5cbiAgICAgICAgICA8aDU+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQ8L2g1PlxuICAgICAgICAgIDxkaXY+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgXG4gICAgICAgICAgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLFxuICAgICAgICAgIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gXG4gICAgICAgICAgRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuXG4gICAgICAgICAgICBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhIGRlc2VydW50IG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvaW1nL2Fib3V0L2NvZ25hYy5qcGdcIj48L2ltZz5cbiAgICAgICAgICA8aDU+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQ8L2g1PlxuICAgICAgICAgIDxkaXY+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgXG4gICAgICAgICAgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLFxuICAgICAgICAgIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gXG4gICAgICAgICAgRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuXG4gICAgICAgICAgICBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhIGRlc2VydW50IG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gIDwvc2VjdGlvbj5gO1xuXG5leHBvcnQgY29uc3QgRVJST1JfUEFHRSA9ICgpID0+IGBcbiAgPGRpdj5cbiAgICA8aDE+U29tZXRoaW5nIHdlbnQgd3JvbmchPC9oMT5cbiAgICA8aDU+UGFnZSBkb2Vzbid0IGV4aXN0ID0oPC9oNT5cbiAgICA8aW1nIHNyYz1cIi9hc3NldHMvaW1nL2Vycm9yL2Vycm9yLmpwZ1wiIC8+XG4gIDwvZGl2PlxuICBgO1xuIiwiY29uc3QgQ09ORklHID0ge1xuICBhcGk6ICdodHRwczovL215LWpzb24tc2VydmVyLnR5cGljb2RlLmNvbS9hbmFraHUvZGVtbycsXG4gIHJvdXRlczoge1xuICAgIGhvbWVQYWdlOiB7IHJvdXRlOiAnLycsIGNvbnRlbnRJZDogJ2pzLWhvbWVwYWdlJyB9LFxuICAgIGFib3V0UGFnZTogeyByb3V0ZTogJ2Fib3V0JywgY29udGVudElkOiAnanMtYWJvdXQtcGFnZScgfSxcbiAgICBjYXRhbG9ndWVQYWdlOiB7IHJvdXRlOiAnY2F0YWxvZ3VlJywgY29udGVudElkOiAnanMtY2F0YWxvZ3VlLXBhZ2UnIH0sXG4gICAgcHJvZHVjdFBhZ2U6IHsgcm91dGU6ICdwcm9kdWN0JywgY29udGVudElkOiAnanMtc2luZ2xlLXBhZ2UnIH0sXG4gICAgZXJyb3JQYWdlOiB7IHJvdXRlOiAnNDA0JywgY29udGVudElkOiAnanMtZXJyb3ItcGFnZScgfSxcbiAgICBhdXRoUGFnZTogeyByb3V0ZTogJ2xvZ2luJywgY29udGVudElkOiAnanMtYXV0aC1wYWdlJyB9LFxuICAgIGNhcnRQYWdlOiB7IHJvdXRlOiAnY2FydCcsIGNvbnRlbnRJZDogJ2pzLWNhcnQtcGFnZScgfSxcbiAgfSxcbiAgZmlsdGVyczogWydicmFuZCcsICd2b2x1bWUnLCAnbWFudWZhY3R1cmVyJywgJ2NhdGVnb3J5JywgJ3BhY2thZ2UnLCAnc3Bpcml0IHR5cGUnXSxcbiAgdmFsaWRhdGlvblJ1bGVzOiB7XG4gICAgbmFtZToge1xuICAgICAgbWluTGVuOiAzLFxuICAgICAgbWF4TGVuOiAyMCxcbiAgICAgIG9ubHlOdW1iZXJzQW5kTGV0dGVyczogdHJ1ZSxcbiAgICAgIGlzTm90RW1wdHk6IHRydWUsXG4gICAgfSxcbiAgICBlbWFpbDoge1xuICAgICAgaXNOb3RFbXB0eTogdHJ1ZSxcbiAgICAgIGlzVmFsaWRFbWFpbDogdHJ1ZSwgXG4gICAgfSxcbiAgICBwYXNzd29yZDoge1xuICAgICAgbWluTGVuOiA2LFxuICAgICAgbWF4TGVuOiAyMCxcbiAgICAgIG9ubHlOdW1iZXJzQW5kTGV0dGVyczogdHJ1ZSxcbiAgICAgIGlzTm90RW1wdHk6IHRydWUsXG4gICAgfSxcbiAgfSxcbiAgc2VsZWN0b3JzOiB7XG4gICAgY2FydDoge1xuICAgICAgd3JhcHBlcjogJy5jYXJ0UGFnZV9fY2FydF93cmFwcGVyJyxcbiAgICAgIG9yZGVyOiAnLmNhcnRQYWdlX19jYXJ0X29yZGVyJyxcbiAgICAgIGNvbnRlbnQ6ICcuY2FydFBhZ2VfX2NvbnRlbnQnLFxuICAgICAgaXRlbTogJy5jYXJ0X19pdGVtX3dyYXBwZXInLFxuICAgICAgdG90YWw6ICcuY2FydFBhZ2VfX3RvdGFsJyxcbiAgICAgIGRldGFpbHM6ICcuY2FydFBhZ2VfX2RldGFpbHMnLFxuICAgICAgdXNlckluZm86ICcuY2FydFBhZ2VfX3VzZXJfaW5mbycsXG4gICAgICB1c2VyRGF0YTogJy5jYXJ0UGFnZV9fdXNlcl9kYXRhJyxcbiAgICAgIG9yZGVyTWVzc2FnZTogJy5jYXJ0UGFnZV9fb3JkZXJfbWVzc2FnZScsXG4gICAgICBpbnB1dDogJy5jYXJ0X19pdGVtX2lucHV0JyxcbiAgICAgIGRlbGV0ZTogJy5jYXJ0X19pdGVtX2RlbGV0ZScsXG4gICAgICBjaG9vc2U6ICcuY2FydF9faXRlbV9jaG9vc2UnLFxuICAgICAgbmFtZTogJy5jYXJ0X19pdGVtX25hbWUnLFxuICAgICAgcHJpY2U6ICcuY2FydF9faXRlbV9wcmljZScsXG4gICAgICBxdWFudGl0eTogJy5jYXJ0X19pdGVtX3F1YW50aXR5JyxcbiAgICAgIGJ1eTogJy5jYXJ0UGFnZV9fb3JkZXJfYnV5JyxcbiAgICB9LFxuICAgIGNhdGFsb2d1ZToge1xuICAgICAgaXRlbTogJy5jYXRhbG9ndWVfX2l0ZW0nLFxuICAgICAgYWRkOiAnLmNhdGFsb2d1ZV9faXRlbV9hZGQnLFxuICAgICAgaW1nOiAnLmNhdGFsb2d1ZV9faXRlbV9pbWd3cmFwJyxcbiAgICAgIHdyYXBwZXI6ICcucHJvZHVjdFBhZ2VfX2NhdGFsb2d1ZScsXG4gICAgfSxcbiAgICBmaWx0ZXI6IHtcbiAgICAgIHdyYXBwZXI6ICcucHJvZHVjdFBhZ2VfX2ZpbHRlcicsXG4gICAgICBjb250YWluZXI6ICcuY2F0YWxvZ3VlX19maWx0ZXJfZ3JvdXAnLFxuICAgICAgbGFiZWw6ICcuZmlsdGVyX19ncm91cF9sYWJlbCcsXG4gICAgICBjb250ZW50OiAnLmZpbHRlcl9fZ3JvdXBfY29udGVudCcsXG4gICAgICBjdXJyZW50UHJpY2U6ICcuZmlsdGVyX19wcmljZV9jdXJyZW50JyxcbiAgICAgIHByaWNlOiAnLmZpbHRlcl9fZ3JvdXBfcHJpY2UnLFxuICAgICAgY2hlY2tib3g6ICcuZmlsdGVyX19ncm91cF9jaGVja2JveCBpbnB1dCcsXG4gICAgICByZXNldDogJy5maWx0ZXJfX2J1dHRvbl9yZXNldCcsXG4gICAgfSxcbiAgICBuYXY6IHtcbiAgICAgIGxvZ291dDogJy5uYXZfX2xpbmtfbG9nb3V0JyxcbiAgICAgIGxvZ2luOiAnLm5hdl9fbGlua19sb2dpbicsXG4gICAgfSxcbiAgICBhdXRoOiB7XG4gICAgICBlcnJvcjogJy5hdXRoX19mb3JtX2Vycm9yJyxcbiAgICB9LFxuICAgIGhvbWU6IHtcbiAgICAgIHNlcnZpY2VzOiAnLmhvbWVQYWdlX19zZXJ2aWNlcyBsaScsXG4gICAgICBpbWc6ICcuaG9tZVBhZ2VfX3Byb2R1Y3RzIGltZycsXG4gICAgfSxcbiAgICBwYWdlOiB7XG4gICAgICBjb250ZW50OiAnLnNpbmdsZVBhZ2VfX2NvbnRlbnQnLFxuICAgIH0sXG4gICAgZm9ybXM6IHtcbiAgICAgIHNpZ25JbjogJ2pzLXNpZ24taW4tZm9ybScsXG4gICAgICBzaWduVXA6ICdqcy1zaWduLXVwLWZvcm0nLFxuICAgIH0sXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDT05GSUc7XG4iLCJpbXBvcnQgQ09ORklHIGZyb20gJy4vY29uZmlnLmpzJztcbmltcG9ydCAnLi4vZGlzdC9pbmRleC5odG1sJztcbmltcG9ydCAnLi4vZGlzdC9hc3NldHMvc3R5bGVzL3Njc3Mvc3R5bGVzLnNjc3MnO1xuaW1wb3J0IFJvdXRlciBmcm9tICcuL21haW4vUm91dGVyLmpzJztcbmltcG9ydCBSZW5kZXJlciBmcm9tICcuL21haW4vUmVuZGVyZXIuanMnO1xuaW1wb3J0IEZpbHRlclNlcnZpY2UgZnJvbSAnLi9tYWluL0ZpbHRlclNlcnZpY2UuanMnO1xuaW1wb3J0IENhcnRTZXJ2aWNlIGZyb20gJy4vbWFpbi9DYXJ0U2VydmljZS5qcyc7XG5pbXBvcnQgQ2FydE9ic2VydmVyIGZyb20gJy4vbWFpbi9DYXJ0T2JzZXZlci5qcyc7XG5pbXBvcnQgRm9ybVNlcnZpY2UgZnJvbSAnLi9tYWluL0Zvcm1TZXJ2aWNlLmpzJztcbmltcG9ydCBBdXRoU2VydmljZSBmcm9tICcuL21haW4vQXV0aFNlcnZpY2UuanMnO1xuaW1wb3J0IHsgbWFrZVJlcXVlc3QgfSBmcm9tICcuL21haW4vdXRpbHMvbWFrZVJlcXVlc3QuanMnO1xuXG5cbmNsYXNzIEFwcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucHJvZHVjdHMgPSBbXTtcbiAgICB0aGlzLnJvdXRlciA9IG5ldyBSb3V0ZXIoKTtcbiAgICB0aGlzLmZpbHRlclNlcnZpY2UgPSBuZXcgRmlsdGVyU2VydmljZSgpO1xuICAgIHRoaXMuY2FydFNlcnZpY2UgPSBuZXcgQ2FydFNlcnZpY2UoKTtcbiAgICB0aGlzLmNhcnRPYnNlcnZlciA9IG5ldyBDYXJ0T2JzZXJ2ZXIodGhpcy5yb3V0ZXIpO1xuICAgIHRoaXMuYXV0aFNlcnZpY2UgPSBuZXcgQXV0aFNlcnZpY2UodGhpcy5yb3V0ZXIsIHRoaXMuY2FydFNlcnZpY2UpO1xuICAgIHRoaXMuZm9ybVNlcnZpY2UgPSBuZXcgRm9ybVNlcnZpY2UodGhpcy5yb3V0ZXIsIHRoaXMuYXV0aFNlcnZpY2UpO1xuICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIodGhpcy5yb3V0ZXIsIHRoaXMuZmlsdGVyU2VydmljZSwgdGhpcy5jYXJ0U2VydmljZSwgdGhpcy5jYXJ0T2JzZXJ2ZXIpO1xuICAgIHRoaXMuZmlsdGVyU2VydmljZS5zdWJzY3JpYmUodGhpcy5vbkZpbHRlckNoYW5nZS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmNhcnRTZXJ2aWNlLnN1YnNjcmliZSh0aGlzLm9uQ2FydENoYW5nZS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgbWFrZVJlcXVlc3QoJ3Byb2R1Y3RzJywgJ0dFVCcpXG4gICAgICAudGhlbigoZGF0YSkgPT4gZGF0YS5qc29uKCkpXG4gICAgICAudGhlbigocHJvZHVjdHMpID0+IHtcbiAgICAgICAgdGhpcy5wcm9kdWN0cyA9IHByb2R1Y3RzO1xuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5pbml0Um91dGVyKCk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuaW5pdEFwcCh0aGlzLnByb2R1Y3RzKTtcbiAgICAgICAgdGhpcy5yb3V0ZXIucmVuZGVyUm91dGVDb250ZW50KHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmZpbHRlclNlcnZpY2UuaW5pdCgpO1xuICAgICAgICB0aGlzLmNhcnRTZXJ2aWNlLmluaXQoKTtcbiAgICAgICAgdGhpcy5mb3JtU2VydmljZS5pbml0QXV0aEZvcm1zKCk7XG4gICAgICAgIHRoaXMuY2FydFNlcnZpY2UuaW5pdENhcnRJbnB1dEhhZGxlcnMoKTtcbiAgICAgICAgdGhpcy5jYXJ0T2JzZXJ2ZXIuaW5pdE9ic2VydmVyKCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSkpO1xuICB9XG5cbiAgaW5pdFJvdXRlcigpIHtcbiAgICBPYmplY3Qua2V5cyhDT05GSUcucm91dGVzKS5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgeyByb3V0ZSwgY29udGVudElkIH0gPSBDT05GSUcucm91dGVzW2VudHJ5XTtcbiAgICAgIGlmIChyb3V0ZSAhPT0gQ09ORklHLnJvdXRlcy5hdXRoUGFnZS5yb3V0ZSkge1xuICAgICAgICB0aGlzLnJvdXRlci5jcmVhdGVOZXdSb3V0ZShyb3V0ZSwgdGhpcy5yZW5kZXJlci5yZW5kZXJQYWdlQ29udGVudC5iaW5kKHRoaXMucmVuZGVyZXIsIGNvbnRlbnRJZCwgdGhpcy5wcm9kdWN0cykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIuY3JlYXRlTmV3Um91dGUocm91dGUsICgpID0+IHtcbiAgICAgICAgICBpZiAod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpIHtcbiAgICAgICAgICAgIGNvbnN0IGNhcnRSb3V0ZSA9IENPTkZJRy5yb3V0ZXMuY2FydFBhZ2Uucm91dGU7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgYC8ke2NhcnRSb3V0ZX1gKTtcbiAgICAgICAgICAgIHRoaXMucm91dGVyLnJlbmRlclJvdXRlQ29udGVudCh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbmRlclBhZ2VDb250ZW50LmNhbGwodGhpcy5yZW5kZXJlciwgY29udGVudElkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgb25GaWx0ZXJDaGFuZ2UoZGF0YSkge1xuICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCBkYXRhKTtcbiAgICB0aGlzLnJvdXRlci5yZW5kZXJSb3V0ZUNvbnRlbnQoZGVjb2RlVVJJKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSkpO1xuICB9XG5cbiAgb25DYXJ0Q2hhbmdlKGRhdGEpIHtcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKENPTkZJRy5yb3V0ZXMuY2F0YWxvZ3VlUGFnZS5yb3V0ZSlcbiAgICAgIHx8IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhDT05GSUcucm91dGVzLnByb2R1Y3RQYWdlLnJvdXRlKSkge1xuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9kdWN0cycsIGRhdGEpO1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW5kZXJDYXJ0KHRoaXMucHJvZHVjdHMpO1xuICAgICAgdGhpcy5jYXJ0U2VydmljZS5pbml0Q2FydElucHV0SGFkbGVycygpO1xuICAgICAgdGhpcy5jYXJ0T2JzZXJ2ZXIuaW5pdE9ic2VydmVyKCk7XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcbiIsImltcG9ydCBDT05GSUcgZnJvbSAnLi4vY29uZmlnLmpzJztcbmltcG9ydCB7IG1ha2VSZXF1ZXN0IH0gZnJvbSAnLi91dGlscy9tYWtlUmVxdWVzdC5qcyc7XG5cbmNvbnN0IHsgY2FydCwgbmF2LCBhdXRoIH0gPSBDT05GSUcuc2VsZWN0b3JzO1xuY29uc3QgeyByb3V0ZSB9ID0gQ09ORklHLnJvdXRlcy5jYXJ0UGFnZTtcblxuY2xhc3MgQXV0aFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihyb3V0ZXIsIGNhcnRTZXJ2aWNlKSB7XG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gICAgdGhpcy5jYXJ0U2VydmljZSA9IGNhcnRTZXJ2aWNlO1xuICAgIHRoaXMudXNlciA9IHt9O1xuICAgIHRoaXMuaXNMb2dnZWRJbiA9IGZhbHNlO1xuICAgIHRoaXMuYXV0aEVycm9ycyA9IG51bGw7XG4gICAgdGhpcy5vcmRlck1lc3NzYWdlcyA9IG51bGw7XG5cbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5hdXRoRXJyb3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihhdXRoLmVycm9yKTtcbiAgICB0aGlzLm9yZGVyTWVzc3NhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjYXJ0Lm9yZGVyTWVzc2FnZSk7XG4gIH1cblxuICBzaWduVXNlckluKCkge1xuICAgIHRoaXMudXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSk7XG4gICAgaWYgKHRoaXMudXNlcikge1xuICAgICAgdGhpcy5pc0xvZ2dlZEluID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51c2VyID0ge307XG4gICAgICB0aGlzLmlzTG9nZ2VkSW4gPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy50b2dnbGVBdXRoT25seUNvbnRlbnQoKTtcbiAgfVxuXG4gIHNpZ25Vc2VyT3V0KCkge1xuICAgIHRoaXMudXNlciA9IHt9O1xuICAgIHRoaXMuaXNMb2dnZWRJbiA9IGZhbHNlO1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicpO1xuICAgIHRoaXMudG9nZ2xlQXV0aE9ubHlDb250ZW50KCk7XG4gIH1cblxuICBsb2dVc2VySW4oZGF0YSkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgIHRoaXMudXNlciA9IGRhdGE7XG4gICAgdGhpcy5pc0xvZ2dlZEluID0gdHJ1ZTtcbiAgICB0aGlzLnRvZ2dsZUF1dGhPbmx5Q29udGVudCgpO1xuICB9XG5cbiAgdG9nZ2xlQXV0aE9ubHlDb250ZW50KCkge1xuICAgIGNvbnN0IGxvZ091dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobmF2LmxvZ291dCk7XG4gICAgY29uc3QgbG9naW5MaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihuYXYubG9naW4pO1xuICAgIGNvbnN0IHVzZXJJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjYXJ0LnVzZXJJbmZvKTtcbiAgICBjb25zdCB1c2VyRGF0YSA9IHVzZXJJbmZvLnF1ZXJ5U2VsZWN0b3IoY2FydC51c2VyRGF0YSk7XG5cbiAgICB1c2VyRGF0YS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsXG4gICAgICBgPHA+JHt0aGlzLnVzZXIubmFtZX08L3A+XG4gICAgICA8cD4ke3RoaXMudXNlci5lbWFpbH08L3A+YCk7XG5cbiAgICBpZiAodGhpcy5pc0xvZ2dlZEluKSB7XG4gICAgICBsb2dPdXRCdG4uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICBsb2dpbkxpbmsuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHVzZXJJbmZvLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH0gZWxzZSB7XG4gICAgICB1c2VyRGF0YS50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgbG9nT3V0QnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBsb2dpbkxpbmsuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB1c2VySW5mby5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgfVxuXG4gIHByb2Nlc3NTaWduSW5SZXF1ZXN0KGRhdGEpIHtcbiAgICBtYWtlUmVxdWVzdCgndXNlcnMnLCAnR0VUJywge30pXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBjb25zdCBmb3VuZFVzZXIgPSByZXMuZmluZCgodXNlcikgPT4gdXNlci5lbWFpbCA9PT0gZGF0YS5lbWFpbCAmJiB1c2VyLnBhc3N3b3JkID09PSBkYXRhLnBhc3N3b3JkKTtcbiAgICAgICAgaWYgKGZvdW5kVXNlcikge1xuICAgICAgICAgIGNvbnN0IHsgbmFtZSwgZW1haWwgfSA9IGZvdW5kVXNlcjtcbiAgICAgICAgICB0aGlzLmxvZ1VzZXJJbih7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIGAvJHtyb3V0ZX1gKTtcbiAgICAgICAgICB0aGlzLnJvdXRlci5yZW5kZXJSb3V0ZUNvbnRlbnQod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmF1dGhFcnJvcnMudGV4dENvbnRlbnQgPSAnTG9naW4gZmFpbGVkJztcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgfVxuXG4gIHByb2Nlc3NTaWduVXBSZXF1ZXN0KGRhdGEpIHtcbiAgICBtYWtlUmVxdWVzdCgndXNlcnMnLCAnUE9TVCcsIGRhdGEpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDEpIHtcbiAgICAgICAgICBjb25zdCB7IG5hbWUsIGVtYWlsIH0gPSBkYXRhO1xuICAgICAgICAgIHRoaXMubG9nVXNlckluKHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgYC8ke3JvdXRlfWApO1xuICAgICAgICAgIHRoaXMucm91dGVyLnJlbmRlclJvdXRlQ29udGVudCh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xuICB9XG5cbiAgcHJvY2Vzc09yZGVyUmVxdWVzdCgpIHtcbiAgICBpZiAodGhpcy5pc0xvZ2dlZEluKSB7XG4gICAgICB0aGlzLm9yZGVyTWVzc3NhZ2VzLnRleHRDb250ZW50ID0gJyc7XG4gICAgICBjb25zdCBwcm9kdWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCR7Y2FydC5kZXRhaWxzfSBkaXZgKTtcbiAgICAgIGlmIChwcm9kdWN0cy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgeyBuYW1lLCBlbWFpbCB9ID0gdGhpcy51c2VyO1xuICAgICAgICBjb25zdCBvcmRlckRhdGEgPSB7XG4gICAgICAgICAgbmFtZSxcbiAgICAgICAgICBlbWFpbCxcbiAgICAgICAgfTtcblxuICAgICAgICBwcm9kdWN0cy5mb3JFYWNoKChwcm9kdWN0KSA9PiB7XG4gICAgICAgICAgb3JkZXJEYXRhW3Byb2R1Y3QuaWRdID0gcHJvZHVjdC5kYXRhc2V0LnZhbHVlO1xuICAgICAgICB9KTtcblxuICAgICAgICBtYWtlUmVxdWVzdCgnb3JkZXJzJywgJ1BPU1QnLCBvcmRlckRhdGEpXG4gICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMSkge1xuICAgICAgICAgICAgICBjb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY2FydC5pdGVtKTtcbiAgICAgICAgICAgICAgY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgaWQgfSA9IGNhcmQuZGF0YXNldDtcbiAgICAgICAgICAgICAgICBpZiAob3JkZXJEYXRhW2lkXSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5jYXJ0U2VydmljZS5kZWxldGVQcm9kdWN0RnJvbUNhcnQoaWQpO1xuICAgICAgICAgICAgICAgICAgY29uc3QgdG90YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNhcnQudG90YWwpO1xuICAgICAgICAgICAgICAgICAgdG90YWwudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNhcnQuZGV0YWlscyk7XG4gICAgICAgICAgICAgICAgICBkZXRhaWxzLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgdGhpcy5vcmRlck1lc3NzYWdlcy50ZXh0Q29udGVudCA9ICdZb3VyIG9yZGVyIHdhcyBwbGFjZWQhJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vcmRlck1lc3NzYWdlcy50ZXh0Q29udGVudCA9ICdTZXJ2ZXIgcHJvYmxlbS4gUGxlYXNlLCB0cnkgYWdhaW4gbGF0ZXInO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9yZGVyTWVzc3NhZ2VzLnRleHRDb250ZW50ID0gJ1lvdSBoYXZlblxcJ3QgY2hvc2VuIGFueXRoaW5nIHlldCc7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEF1dGhTZXJ2aWNlO1xuIiwiaW1wb3J0IENPTkZJRyBmcm9tICcuLi9jb25maWcuanMnO1xuXG5jb25zdCB7IGNhcnQgfSA9IENPTkZJRy5zZWxlY3RvcnM7XG5cbmNsYXNzIENhcnRPYnNlcnZlciB7XG4gIGNvbnN0cnVjdG9yKHJvdXRlcikge1xuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICAgIHRoaXMuY2FydE9yZGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjYXJ0Lm9yZGVyKTtcbiAgICB0aGlzLm9yZGVyTWVzc3NhZ2VzID0gbnVsbDtcbiAgfVxuXG4gIGluaXRPYnNlcnZlcigpIHtcbiAgICBjb25zdCBub2Rlc1RvT2JzZXJ2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY2FydC5pbnB1dCk7XG4gICAgaWYgKG5vZGVzVG9PYnNlcnZlKSB7XG4gICAgICB0aGlzLmluaXRDYXJ0Q2FsY3VsYXRvcigpO1xuICAgICAgdGhpcy5jYWxjdWxhdGVUb3RhbCgpO1xuICAgIH1cbiAgfVxuXG4gIGluaXRDYXJ0Q2FsY3VsYXRvcigpIHtcbiAgICBjb25zdCBmb3JtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY2FydC5pbnB1dCk7XG4gICAgY29uc3QgZGVsZXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY2FydC5kZWxldGUpO1xuXG4gICAgZm9ybXMuZm9yRWFjaCgoZm9ybSkgPT4ge1xuICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB0aGlzLmNhbGN1bGF0ZVRvdGFsKCkpO1xuICAgIH0pO1xuXG4gICAgZGVsZXRlQnRucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIHRoaXMuZGVsZXRlQ2FyZE9yZGVyTm90ZShlLnRhcmdldC5kYXRhc2V0LmlkKTtcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVUb3RhbCgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBjYWxjdWxhdGVUb3RhbCgpIHtcbiAgICBjb25zdCB0b3RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2FydC50b3RhbCk7XG5cbiAgICBjb25zdCBjYXJ0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGNhcnQuaXRlbSk7XG5cbiAgICBpZiAoY2FydEl0ZW1zLmxlbmd0aCkge1xuICAgICAgY29uc3QgcHJpY2VUb3RhbCA9IEFycmF5LmZyb20oY2FydEl0ZW1zKS5yZWR1Y2UoKHRvdGFsU3VtLCBjdXJyZW50SXRlbSkgPT4ge1xuICAgICAgICBjb25zdCBmbGFnID0gY3VycmVudEl0ZW0ucXVlcnlTZWxlY3RvcihjYXJ0LmNob29zZSk7XG4gICAgICAgIGNvbnN0IHsgaWQgfSA9IGN1cnJlbnRJdGVtLmRhdGFzZXQ7XG5cbiAgICAgICAgaWYgKGZsYWcuY2hlY2tlZCkge1xuICAgICAgICAgIGNvbnN0IG5hbWUgPSBjdXJyZW50SXRlbS5xdWVyeVNlbGVjdG9yKGNhcnQubmFtZSkudGV4dENvbnRlbnQ7XG4gICAgICAgICAgY29uc3QgcHJpY2UgPSBjdXJyZW50SXRlbS5xdWVyeVNlbGVjdG9yKGNhcnQucHJpY2UpLmRhdGFzZXQudmFsdWU7XG4gICAgICAgICAgY29uc3QgcXVhbnRpdHkgPSBjdXJyZW50SXRlbS5xdWVyeVNlbGVjdG9yKGNhcnQucXVhbnRpdHkpLnZhbHVlO1xuICAgICAgICAgIHRvdGFsU3VtICs9IHByaWNlICogcXVhbnRpdHk7XG4gICAgICAgICAgdGhpcy5yZW5kZXJDYXJ0T3JkZXJEZXRhaWxzKGlkLCBuYW1lLCBxdWFudGl0eSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5kZWxldGVDYXJkT3JkZXJOb3RlKGlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0b3RhbFN1bTtcbiAgICAgIH0sIDApO1xuXG4gICAgICB0b3RhbC50ZXh0Q29udGVudCA9IHByaWNlVG90YWwgPiAwID8gcHJpY2VUb3RhbC50b0ZpeGVkKDIpIDogJ05vIGl0ZW1zIGNob3Nlbic7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvdGFsLnRleHRDb250ZW50ID0gJ05vIGl0ZW1zIGNob3Nlbic7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyQ2FydE9yZGVyRGV0YWlscyhpZCwgbmFtZSwgcXVhbnRpdHkpIHtcbiAgICBjb25zdCBjYXJ0RGV0YWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2FydC5kZXRhaWxzKTtcbiAgICBpZiAoY2FydERldGFpbHMuY2hpbGRyZW4pIHtcbiAgICAgIGNvbnN0IGZvdW5kID0gQXJyYXkuZnJvbShjYXJ0RGV0YWlscy5jaGlsZHJlbilcbiAgICAgICAgLmZpbmQoKGl0ZW0pID0+IE51bWJlcihpdGVtLmlkKSA9PT0gTnVtYmVyKGlkKSk7XG5cbiAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICBmb3VuZC50ZXh0Q29udGVudCA9IGAke25hbWV9IDogJHtxdWFudGl0eX1gO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRldGFpbHMuc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcbiAgICBkZXRhaWxzLmRhdGFzZXQudmFsdWUgPSBxdWFudGl0eTtcblxuICAgIGRldGFpbHMudGV4dENvbnRlbnQgPSBgJHtuYW1lfSA6ICR7cXVhbnRpdHl9YDtcbiAgICBjYXJ0RGV0YWlscy5hcHBlbmRDaGlsZChkZXRhaWxzKTtcbiAgfVxuXG4gIGRlbGV0ZUNhcmRPcmRlck5vdGUoaWQpIHtcbiAgICBjb25zdCBjYXJ0RGV0YWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2FydC5kZXRhaWxzKTtcbiAgICBjb25zdCBmb3VuZCA9IEFycmF5LmZyb20oY2FydERldGFpbHMuY2hpbGRyZW4pXG4gICAgICAuZmluZCgoaXRlbSkgPT4gTnVtYmVyKGl0ZW0uaWQpID09PSBOdW1iZXIoaWQpKTtcblxuICAgIGlmIChmb3VuZCkge1xuICAgICAgZm91bmQucmVtb3ZlKCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcnRPYnNlcnZlcjtcbiIsImltcG9ydCBDT05GSUcgZnJvbSAnLi4vY29uZmlnLmpzJztcbmltcG9ydCBPYnNlcnZhYmxlIGZyb20gJy4vT2JzZXJ2YWJsZS5qcyc7XG5cbmNvbnN0IHsgY2FydCwgY2F0YWxvZ3VlIH0gPSBDT05GSUcuc2VsZWN0b3JzO1xuXG5jbGFzcyBDYXJ0U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2FydHMgPSBbXTtcbiAgICB0aGlzLnByb2R1Y3RzSW5DYXJ0ID0ge307XG4gICAgdGhpcy5vYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGUoKTtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIHN1YnNjcmliZShmbikge1xuICAgIHRoaXMub2JzZXJ2YWJsZS5zdWJzY3JpYmUoZm4pO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmNhcnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChjYXRhbG9ndWUuYWRkKTtcbiAgICB0aGlzLmNhcnRzLmZvckVhY2goKGNhcnRJdGVtKSA9PiB7XG4gICAgICBjYXJ0SXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1JZCA9IGUudGFyZ2V0LmNsb3Nlc3QoY2F0YWxvZ3VlLml0ZW0pLmRhdGFzZXQuaWQ7XG4gICAgICAgIHRoaXMuYWRkUHJvZHVjdFRvQ2FydChpdGVtSWQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5pbml0UHJvZHVjdENhcnQoKTtcbiAgICB0aGlzLmluaXRDYXJ0SW5wdXRIYWRsZXJzKCk7XG4gIH1cblxuICBpbml0UHJvZHVjdENhcnQoKSB7XG4gICAgdGhpcy5wcm9kdWN0c0luQ2FydCA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9kdWN0cycpKSB8fCB7fTtcbiAgfVxuXG4gIHVwZGF0ZUxvY2FsU3RvcmFnZSgpIHtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2R1Y3RzJywgSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9kdWN0c0luQ2FydCkpO1xuICAgIHRoaXMub2JzZXJ2YWJsZS5uZXh0KEpTT04uc3RyaW5naWZ5KHRoaXMucHJvZHVjdHNJbkNhcnQpKTtcbiAgfVxuXG5cbiAgZGVsZXRlUHJvZHVjdEZyb21DYXJ0KGlkKSB7XG4gICAgY29uc3QgY2FydEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChjYXJ0Lml0ZW0pO1xuICAgIGNvbnN0IGl0ZW1Ub0RlbGV0ZSA9IEFycmF5LmZyb20oY2FydEl0ZW1zKS5maW5kKChpdGVtKSA9PiBOdW1iZXIoaXRlbS5kYXRhc2V0LmlkKSA9PT0gTnVtYmVyKGlkKSk7XG4gICAgaWYgKGl0ZW1Ub0RlbGV0ZSkge1xuICAgICAgZGVsZXRlIHRoaXMucHJvZHVjdHNJbkNhcnRbaWRdO1xuICAgICAgaXRlbVRvRGVsZXRlLnJlbW92ZSgpO1xuICAgICAgdGhpcy51cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbiAgICB9XG4gIH1cblxuICBhZGRQcm9kdWN0VG9DYXJ0KGl0ZW1JZCkge1xuICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMucHJvZHVjdHNJbkNhcnQsIGl0ZW1JZCkpIHtcbiAgICAgIHRoaXMucHJvZHVjdHNJbkNhcnRbaXRlbUlkXSA9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJvZHVjdHNJbkNhcnRbaXRlbUlkXSArPSAxO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xuICB9XG5cbiAgaW5pdENhcnRJbnB1dEhhZGxlcnMoKSB7XG4gICAgdGhpcy5pbml0RGVsZXRlQnV0dG9ucygpO1xuICAgIHRoaXMuaW5pdENhcnROdW1iZXJJbnB1dCgpO1xuICB9XG5cblxuICBpbml0RGVsZXRlQnV0dG9ucygpIHtcbiAgICBjb25zdCBkZWxldGVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChjYXJ0LmRlbGV0ZSk7XG4gICAgZGVsZXRlQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgaWQgfSA9IGUudGFyZ2V0LmRhdGFzZXQ7XG4gICAgICAgIHRoaXMuZGVsZXRlUHJvZHVjdEZyb21DYXJ0KGlkKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgaW5pdENhcnROdW1iZXJJbnB1dCgpIHtcbiAgICBjb25zdCBudW1iZXJJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGNhcnQucXVhbnRpdHkpO1xuICAgIG51bWJlcklucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgICAgaWYgKE51bWJlcihlLnRhcmdldC52YWx1ZSkgPCAxKSB7XG4gICAgICAgICAgZS50YXJnZXQudmFsdWUgPSAxO1xuICAgICAgICB9XG4gICAgICAgIGlmIChOdW1iZXIoZS50YXJnZXQudmFsdWUpID4gTnVtYmVyKGUudGFyZ2V0Lm1heCkpIHtcbiAgICAgICAgICBlLnRhcmdldC52YWx1ZSA9IGUudGFyZ2V0Lm1heDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IGlkIH0gPSBlLnRhcmdldC5kYXRhc2V0O1xuICAgICAgICB0aGlzLnByb2R1Y3RzSW5DYXJ0W2lkXSA9IE51bWJlcihlLnRhcmdldC52YWx1ZSk7XG5cbiAgICAgICAgdGhpcy51cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcnRTZXJ2aWNlO1xuIiwiaW1wb3J0IENPTkZJRyBmcm9tICcuLi9jb25maWcuanMnO1xuaW1wb3J0IE9ic2VydmFibGUgZnJvbSAnLi9PYnNlcnZhYmxlLmpzJztcblxuY29uc3QgeyBmaWx0ZXIsIGhvbWUgfSA9IENPTkZJRy5zZWxlY3RvcnM7XG5cbmNsYXNzIEZpbHRlclNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNoZWNrYm94ZXMgPSBbXTtcbiAgICB0aGlzLmhvbWVQYWdlRmlsdGVycyA9IFtdO1xuICAgIHRoaXMucHJpY2VJbnB1dCA9IG51bGw7XG4gICAgdGhpcy5yZXNldEZpbHRlcnNCdG4gPSBudWxsO1xuICAgIHRoaXMuZmlsdGVycyA9IHt9O1xuICAgIHRoaXMub2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuY2hlY2tib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZmlsdGVyLmNoZWNrYm94KTtcbiAgICB0aGlzLmhvbWVQYWdlRmlsdGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoaG9tZS5pbWcpO1xuICAgIHRoaXMucmVzZXRGaWx0ZXJzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihmaWx0ZXIucmVzZXQpO1xuICAgIHRoaXMucHJpY2VJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZmlsdGVyLnByaWNlKTtcblxuICAgIHRoaXMucmVzZXRGaWx0ZXJzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZXNldEZpbHRlcnMoKTtcbiAgICB9KTtcblxuICAgIHRoaXMucHJpY2VJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgICAgdGhpcy5vbklucHV0UmFuZ2VDaGFuZ2UoZS50YXJnZXQudmFsdWUpO1xuICAgICAgdGhpcy5oYW5kbGVGaWx0ZXJDaGFuZ2UoKTtcbiAgICAgIGNvbnN0IGN1cnJlbnRWYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGZpbHRlci5jdXJyZW50UHJpY2UpO1xuICAgICAgY3VycmVudFZhbC50ZXh0Q29udGVudCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jaGVja2JveGVzLmZvckVhY2goKGNoZWNrYm94KSA9PiB7XG4gICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAgIHRoaXMub25DaGVja0JveENoZWNrZWQoZS50YXJnZXQubmFtZSwgZS50YXJnZXQudmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMub25DaGVja0JveFVuQ2hlY2tlZChlLnRhcmdldC5uYW1lLCBlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oYW5kbGVGaWx0ZXJDaGFuZ2UoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5ob21lUGFnZUZpbHRlcnMuZm9yRWFjaCgoaW1nKSA9PiB7XG4gICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICB0aGlzLm9uQ2hlY2tCb3hDaGVja2VkKGUudGFyZ2V0Lm5hbWUsIGUudGFyZ2V0LmRhdGFzZXQudmFsdWUpO1xuICAgICAgICB0aGlzLmhhbmRsZUZpbHRlckNoYW5nZSgpO1xuICAgICAgICB0aGlzLmluaXRGaWx0ZXJzKCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuZ2V0RmlsdGVycygpO1xuICAgIHRoaXMuaW5pdEZpbHRlcnMoKTtcbiAgfVxuXG4gIHN1YnNjcmliZShmbikge1xuICAgIHRoaXMub2JzZXJ2YWJsZS5zdWJzY3JpYmUoZm4pO1xuICB9XG5cbiAgaW5pdEZpbHRlcnMoKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuZmlsdGVycykubGVuZ3RoKSB7XG4gICAgICB0aGlzLmNoZWNrYm94ZXMuZm9yRWFjaCgoY3VycmVudEZpbHRlcikgPT4ge1xuICAgICAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBjdXJyZW50RmlsdGVyO1xuICAgICAgICBpZiAodGhpcy5maWx0ZXJzW25hbWVdICYmIHRoaXMuZmlsdGVyc1tuYW1lXS5pbmNsdWRlcyh2YWx1ZSkpIHtcbiAgICAgICAgICBjdXJyZW50RmlsdGVyLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGN1cnJlbnRGaWx0ZXIuY2xvc2VzdChmaWx0ZXIuY29udGVudCk7XG4gICAgICAgICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZmlsdGVycy5wcmljZSkge1xuICAgICAgdGhpcy5wcmljZUlucHV0LnZhbHVlID0gdGhpcy5maWx0ZXJzLnByaWNlO1xuICAgICAgY29uc3QgY3VycmVudFZhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZmlsdGVyLmN1cnJlbnRQcmljZSk7XG4gICAgICBjdXJyZW50VmFsLnRleHRDb250ZW50ID0gdGhpcy5maWx0ZXJzLnByaWNlO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0RmlsdGVycygpIHtcbiAgICB0aGlzLmZpbHRlcnMgPSB7fTtcbiAgICB0aGlzLmhhbmRsZUZpbHRlckNoYW5nZSgpO1xuICAgIHRoaXMuY2hlY2tib3hlcy5mb3JFYWNoKChjaGVja2JveCkgPT4ge1xuICAgICAgY2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xuICAgIH0pO1xuICAgIHRoaXMucHJpY2VJbnB1dC52YWx1ZSA9IHRoaXMucHJpY2VJbnB1dC5tYXg7XG4gIH1cblxuICBnZXRGaWx0ZXJzKCkge1xuICAgIGNvbnN0IGZpbHRlcnNTdHJpbmcgPSBkZWNvZGVVUkkod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG5cbiAgICBjb25zdCBmaWx0ZXJzID0gZmlsdGVyc1N0cmluZ1xuICAgICAgLnJlcGxhY2UoJz8nLCAnJylcbiAgICAgIC5zcGxpdCgnJicpXG4gICAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgICAucmVkdWNlKChmaWx0ZXJPYmplY3QsIGN1cnJlbkZpbHRlclZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IFtmaWx0ZXJCYXNlLCBmaWx0ZXJWYWx1ZV0gPSBjdXJyZW5GaWx0ZXJWYWx1ZS5zcGxpdCgnPScpO1xuICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChmaWx0ZXJPYmplY3QsIGZpbHRlckJhc2UpKSB7XG4gICAgICAgICAgZmlsdGVyT2JqZWN0W2ZpbHRlckJhc2VdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgZmlsdGVyT2JqZWN0W2ZpbHRlckJhc2VdLnB1c2goZmlsdGVyVmFsdWUpO1xuXG4gICAgICAgIHJldHVybiBmaWx0ZXJPYmplY3Q7XG4gICAgICB9LCB7fSk7XG5cbiAgICB0aGlzLmZpbHRlcnMgPSBmaWx0ZXJzO1xuXG4gICAgcmV0dXJuIHRoaXMuZmlsdGVycztcbiAgfVxuXG4gIG9uSW5wdXRSYW5nZUNoYW5nZSh2YWx1ZSkge1xuICAgIHRoaXMuZmlsdGVycy5wcmljZSA9IFt2YWx1ZV07XG4gIH1cblxuICBvbkNoZWNrQm94Q2hlY2tlZChuYW1lLCB2YWx1ZSkge1xuICAgIGlmICghdGhpcy5maWx0ZXJzW25hbWVdKSB7XG4gICAgICB0aGlzLmZpbHRlcnNbbmFtZV0gPSBbXTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5maWx0ZXJzW25hbWVdICYmICF0aGlzLmZpbHRlcnNbbmFtZV0uaW5jbHVkZXModmFsdWUpKSB7XG4gICAgICB0aGlzLmZpbHRlcnNbbmFtZV0ucHVzaCh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgb25DaGVja0JveFVuQ2hlY2tlZChuYW1lLCB2YWx1ZSkge1xuICAgIGlmICh0aGlzLmZpbHRlcnNbbmFtZV0gJiYgdGhpcy5maWx0ZXJzW25hbWVdLmluY2x1ZGVzKHZhbHVlKSkge1xuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmZpbHRlcnNbbmFtZV0uaW5kZXhPZih2YWx1ZSk7XG4gICAgICB0aGlzLmZpbHRlcnNbbmFtZV0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5maWx0ZXJzW25hbWVdICYmIHRoaXMuZmlsdGVyc1tuYW1lXS5sZW5ndGggPCAxKSB7XG4gICAgICBkZWxldGUgdGhpcy5maWx0ZXJzW25hbWVdO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUZpbHRlckNoYW5nZSgpIHtcbiAgICBjb25zdCBxdWVyeSA9IHRoaXMuY3JlYXRlUXVlcnkoKTtcbiAgICBpZiAoIU9iamVjdC5rZXlzKHRoaXMuZmlsdGVycykubGVuZ3RoKSB7XG4gICAgICB0aGlzLm9ic2VydmFibGUubmV4dCgnL2NhdGFsb2d1ZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9ic2VydmFibGUubmV4dChxdWVyeSk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlUXVlcnkoKSB7XG4gICAgbGV0IHF1ZXJ5U3RyaW5nID0gJyc7XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZXNdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMuZmlsdGVycykpIHtcbiAgICAgIHZhbHVlcy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBxdWVyeVN0cmluZ0VsZW1lbnQgPSBgJHtrZXl9PSR7dmFsdWV9JmA7XG4gICAgICAgIHF1ZXJ5U3RyaW5nICs9IHF1ZXJ5U3RyaW5nRWxlbWVudDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBgL2NhdGFsb2d1ZT8ke3F1ZXJ5U3RyaW5nfWA7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyU2VydmljZTtcbiIsImltcG9ydCBDT05GSUcgZnJvbSAnLi4vY29uZmlnLmpzJztcbmltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3V0aWxzL3ZhbGlkYXRvci5qcyc7XG5cbmNvbnN0IHsgY2FydCwgbmF2LCBmb3JtcyB9ID0gQ09ORklHLnNlbGVjdG9ycztcblxuY2xhc3MgRm9ybVNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihyb3V0ZXIsIGF1dGgpIHtcbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgICB0aGlzLnNpZ25JbkZvcm0gPSBudWxsO1xuICAgIHRoaXMuc2lnblVwRm9ybSA9IG51bGw7XG4gICAgdGhpcy52YWxpZGF0aW9uRXJyb3JzID0ge307XG4gICAgdGhpcy5hdXRoID0gYXV0aDtcbiAgfVxuXG4gIGluaXRBdXRoRm9ybXMoKSB7XG4gICAgdGhpcy5pbml0U2lnbkluRm9ybSgpO1xuICAgIHRoaXMuaW5pdFNpZ25VcEZvcm0oKTtcbiAgICB0aGlzLnRyaWdnZXJPbklucHV0Q2hhbmdlVmFsaWRhdGlvbigpO1xuICAgIHRoaXMuYXV0aC5pbml0KCk7XG4gICAgdGhpcy5hdXRoLnNpZ25Vc2VySW4oKTtcblxuICAgIGNvbnN0IGxvZ091dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobmF2LmxvZ291dCk7XG4gICAgbG9nT3V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5hdXRoLnNpZ25Vc2VyT3V0KCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBvcmRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2FydC5idXkpO1xuICAgIG9yZGVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuYXV0aC5pc0xvZ2dlZEluKSB7XG4gICAgICAgIHRoaXMuYXV0aC5wcm9jZXNzT3JkZXJSZXF1ZXN0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgJy9sb2dpbicpO1xuICAgICAgICB0aGlzLnJvdXRlci5yZW5kZXJSb3V0ZUNvbnRlbnQod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGluaXRTaWduSW5Gb3JtKCkge1xuICAgIHRoaXMuc2lnbkluRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZvcm1zLnNpZ25Jbik7XG4gICAgdGhpcy5zaWduSW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLmF1dGguYXV0aEVycm9ycy50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZ2V0Rm9ybURhdGEoZS50YXJnZXQpO1xuXG4gICAgICBpZiAoIU9iamVjdC5rZXlzKHRoaXMudmFsaWRhdGlvbkVycm9ycykubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuYXV0aC5wcm9jZXNzU2lnbkluUmVxdWVzdChkYXRhKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGluaXRTaWduVXBGb3JtKCkge1xuICAgIHRoaXMuc2lnblVwRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZvcm1zLnNpZ25VcCk7XG4gICAgdGhpcy5zaWduVXBGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLmF1dGguYXV0aEVycm9ycy50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZ2V0Rm9ybURhdGEoZS50YXJnZXQpO1xuXG4gICAgICBpZiAoIU9iamVjdC5rZXlzKHRoaXMudmFsaWRhdGlvbkVycm9ycykubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuYXV0aC5wcm9jZXNzU2lnblVwUmVxdWVzdChkYXRhKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHZhbGlkYXRlSW5wdXRGaWVsZChmaWVsZCkge1xuICAgIGNvbnN0IGFjdGl2ZUZvcm0gPSBmaWVsZC5wYXJlbnRFbGVtZW50O1xuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGZpZWxkO1xuICAgIGNvbnN0IHZhbGlkYXRpb25SZXN1bHQgPSB2YWxpZGF0ZShuYW1lLCB2YWx1ZSwgQ09ORklHLnZhbGlkYXRpb25SdWxlc1tuYW1lXSk7XG4gICAgdGhpcy5kaXNwbGF5RXJyb3JzKGFjdGl2ZUZvcm0sIG5hbWUsIHZhbGlkYXRpb25SZXN1bHRbbmFtZV0pO1xuICAgIHRoaXMudXBkYXRlVmFsaWRhdGlvbkVycm9ycyh2YWxpZGF0aW9uUmVzdWx0LCBuYW1lKTtcbiAgfVxuXG4gIHVwZGF0ZVZhbGlkYXRpb25FcnJvcnModmFsaWRhdGlvblJlc3VsdCwgZmllbGROYW1lKSB7XG4gICAgaWYgKCFPYmplY3Qua2V5cyh2YWxpZGF0aW9uUmVzdWx0KS5sZW5ndGgpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLnZhbGlkYXRpb25FcnJvcnNbZmllbGROYW1lXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52YWxpZGF0aW9uRXJyb3JzID0gT2JqZWN0LmFzc2lnbih0aGlzLnZhbGlkYXRpb25FcnJvcnMsIHZhbGlkYXRpb25SZXN1bHQpO1xuICAgIH1cbiAgfVxuXG4gIGRpc3BsYXlFcnJvcnMoYWN0aXZlRm9ybSwgbmFtZSwgZXJyb3JzKSB7XG4gICAgY29uc3QgZXJyb3JGaWVsZCA9IGFjdGl2ZUZvcm0ucXVlcnlTZWxlY3RvcihgLiR7bmFtZX0tZXJyb3JgKTtcblxuICAgIGlmIChlcnJvcnMpIHtcbiAgICAgIGVycm9yRmllbGQudGV4dENvbnRlbnQgPSBlcnJvcnMucmVkdWNlKChlcnJvclN0cmluZywgbWVzc2FnZSkgPT4ge1xuICAgICAgICBlcnJvclN0cmluZyArPSBgJHttZXNzYWdlfSBgO1xuXG4gICAgICAgIHJldHVybiBlcnJvclN0cmluZztcbiAgICAgIH0sICcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXJyb3JGaWVsZC50ZXh0Q29udGVudCA9ICcnO1xuICAgIH1cbiAgfVxuXG4gIHRyaWdnZXJPbklucHV0Q2hhbmdlVmFsaWRhdGlvbigpIHtcbiAgICB0aGlzLnNpZ25JbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xuICAgICAgdGhpcy52YWxpZGF0ZUlucHV0RmllbGQoZS50YXJnZXQpO1xuICAgIH0pO1xuICAgIHRoaXMuc2lnblVwRm9ybS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XG4gICAgICB0aGlzLnZhbGlkYXRlSW5wdXRGaWVsZChlLnRhcmdldCk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRGb3JtRGF0YShmb3JtKSB7XG4gICAgY29uc3QgYXV0aERhdGEgPSB7fTtcbiAgICBjb25zdCBpbnB1dHMgPSBmb3JtLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpO1xuICAgIEFycmF5LmZyb20oaW5wdXRzKS5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgdGhpcy52YWxpZGF0ZUlucHV0RmllbGQoaW5wdXQpO1xuICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gaW5wdXQ7XG4gICAgICBhdXRoRGF0YVtuYW1lXSA9IHZhbHVlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGF1dGhEYXRhO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1TZXJ2aWNlO1xuIiwiY2xhc3MgT2JzZXJ2YWJsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc3Vic2NyaWJlcnMgPSBbXTtcbiAgfVxuXG4gIHN1YnNjcmliZShmbikge1xuICAgIHRoaXMuc3Vic2NyaWJlcnMucHVzaChmbik7XG4gIH1cblxuICBuZXh0KGRhdGEpIHtcbiAgICB0aGlzLnN1YnNjcmliZXJzLmZvckVhY2goKHN1YnNjcmliZWRGbikgPT4ge1xuICAgICAgc3Vic2NyaWJlZEZuKGRhdGEpO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9ic2VydmFibGU7XG4iLCJpbXBvcnQgQ09ORklHIGZyb20gJy4uL2NvbmZpZy5qcyc7XG5pbXBvcnQgcmVuZGVyTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0Q29tcG9uZW50cy9uYXZiYXIuanMnO1xuaW1wb3J0IHJlbmRlckhvbWVQYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvaG9tZVBhZ2VDb21wb25lbnRzL2hvbWVwYWdlLmpzJztcbmltcG9ydCByZW5kZXJDYXRhbG9ndWUgZnJvbSAnLi4vY29tcG9uZW50cy9jYXRhbG9ndWVDb21wb25lbnRzL2NhdGFsb2d1ZS5qcyc7XG5pbXBvcnQgRmlsdGVycyBmcm9tICcuLi9jb21wb25lbnRzL2NhdGFsb2d1ZUNvbXBvbmVudHMvZmlsdGVycy5qcyc7XG5pbXBvcnQgQ2FydCBmcm9tICcuLi9jb21wb25lbnRzL2NhcnRDb21wb25lbnRzL2NhcnQuanMnO1xuaW1wb3J0IHJlbmRlck9yZGVyQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL2NhcnRDb21wb25lbnRzL29yZGVyLmpzJztcbmltcG9ydCBTaW5nbGVQYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvc2luZ2xlUGFnZUNvbXBvbmVudHMvc2luZ2xlUGFnZSc7XG5pbXBvcnQgcmVuZGVyQXV0aEZvcm1zIGZyb20gJy4uL2NvbXBvbmVudHMvYXV0aENvbXBvbmVudHMvbG9naW4uanMnO1xuaW1wb3J0IHJlbmRlckFib3V0UGFnZSBmcm9tICcuLi9jb21wb25lbnRzL2Fib3V0Q29tcG9uZW50cy9hYm91dFBhZ2UuanMnO1xuaW1wb3J0IHJlbmRlckVycm9yUGFnZSBmcm9tICcuLi9jb21wb25lbnRzL2Vycm9yQ29tcG9uZW50cy9lcnJvclBhZ2UuanMnO1xuXG5jb25zdCB7IGNhdGFsb2d1ZSB9ID0gQ09ORklHLnNlbGVjdG9ycztcblxuY2xhc3MgUmVuZGVyZXIge1xuICBjb25zdHJ1Y3Rvcihyb3V0ZXIsIGNoZWNrYm94U2VydmljZSwgY2FydFNlcnZpY2UsIGNhcnRPYnNlcnZlcikge1xuICAgIHRoaXMuYXBwQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcENvbnRlbnQtd3JhcHBlcicpO1xuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICAgIHRoaXMuY2hlY2tib3hTZXJ2aWNlID0gY2hlY2tib3hTZXJ2aWNlO1xuICAgIHRoaXMuY2FydFNlcnZpY2UgPSBjYXJ0U2VydmljZTtcbiAgICB0aGlzLmNhcnRPYnNlcnZlciA9IGNhcnRPYnNlcnZlcjtcbiAgfVxuXG4gIGluaXRBcHAoZGF0YSkge1xuICAgIHJlbmRlckhvbWVQYWdlKHRoaXMucm91dGVyLnJlbmRlclJvdXRlQ29udGVudC5iaW5kKHRoaXMucm91dGVyKSk7XG4gICAgcmVuZGVyQWJvdXRQYWdlKCk7XG4gICAgcmVuZGVyTmF2YmFyKHRoaXMucm91dGVyLnJlbmRlclJvdXRlQ29udGVudC5iaW5kKHRoaXMucm91dGVyKSk7XG4gICAgcmVuZGVyQ2F0YWxvZ3VlKGRhdGEsIHRoaXMucm91dGVyLnJlbmRlclJvdXRlQ29udGVudC5iaW5kKHRoaXMucm91dGVyKSk7XG4gICAgdGhpcy5yZW5kZXJDYXJ0KGRhdGEpO1xuICAgIHRoaXMucmVuZGVyRmlsdGVycyhkYXRhKTtcbiAgICByZW5kZXJPcmRlckNhcmQoKTtcbiAgICByZW5kZXJBdXRoRm9ybXMoKTtcbiAgICByZW5kZXJFcnJvclBhZ2UoKTtcbiAgICB0aGlzLmFwcENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgfVxuXG4gIHJlbmRlckNhcnQoZGF0YSkge1xuICAgIGNvbnN0IGNhcnQgPSBuZXcgQ2FydCgpO1xuICAgIGNhcnQuaW5pdCh0aGlzLmNhcnRTZXJ2aWNlLnByb2R1Y3RzSW5DYXJ0LCBkYXRhKTtcbiAgfVxuXG4gIHJlbmRlckZpbHRlcnMoZGF0YSkge1xuICAgIGNvbnN0IGZpbHRlcnMgPSBuZXcgRmlsdGVycygpO1xuICAgIGZpbHRlcnMuZHJhd0ZpbHRlcnMoZGF0YSk7XG4gIH1cblxuICByZW5kZXJTaW5nbGVQYWdlKGRhdGEpIHtcbiAgICBjb25zdCBzaW5nbGVQYWdlID0gbmV3IFNpbmdsZVBhZ2UoKTtcbiAgICBzaW5nbGVQYWdlLmRyYXdTaW5nbGVQYWdlKGRhdGEpO1xuXG4gICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpbmdsZVBhZ2VfX2l0ZW1fYWRkJyk7XG4gICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgaXRlbUlkID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KCcvcHJvZHVjdC8nKVsxXTtcbiAgICAgIHRoaXMuY2FydFNlcnZpY2UuYWRkUHJvZHVjdFRvQ2FydChpdGVtSWQpO1xuICAgIH0pO1xuICB9XG5cbiAgZGlzcGxheVBhZ2VDb250ZW50KGNvbnRlbnRJZCkge1xuICAgIGNvbnN0IGFwcENvbnRlbnRFbGVtZW50cyA9IEFycmF5LmZyb20odGhpcy5hcHBDb250YWluZXIuY2hpbGRyZW4pO1xuICAgIFsuLi5hcHBDb250ZW50RWxlbWVudHNdLmZvckVhY2goKGRpdikgPT4ge1xuICAgICAgZGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSk7XG4gICAgY29uc3QgcGFnZUNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250ZW50SWQpO1xuICAgIHBhZ2VDb250ZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICB9XG5cbiAgcmVuZGVyUGFnZUNvbnRlbnQoY29udGVudElkLCBkYXRhKSB7XG4gICAgdGhpcy5kaXNwbGF5UGFnZUNvbnRlbnQoY29udGVudElkKTtcbiAgICBpZiAoIXdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpIHtcbiAgICAgIGlmIChjb250ZW50SWQgPT09ICdqcy1jYXRhbG9ndWUtcGFnZScgJiYgT2JqZWN0LmtleXModGhpcy5jaGVja2JveFNlcnZpY2UuZmlsdGVycykubGVuZ3RoKSB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCB0aGlzLmNoZWNrYm94U2VydmljZS5jcmVhdGVRdWVyeSgpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcygncHJvZHVjdCcpKSB7XG4gICAgICB0aGlzLmRpc3BsYXlTaW5nbGVQYWdlQ29udGVudChkYXRhKTtcbiAgICB9XG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggJiYgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKCdjYXRhbG9ndWUnKSkge1xuICAgICAgdGhpcy5kaXNwbGF5RmlsdGVyZWRDb250ZW50KGRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwcm9kdWN0Q2FyZHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY2F0YWxvZ3VlLml0ZW0pKTtcbiAgICAgIHByb2R1Y3RDYXJkcy5mb3JFYWNoKChwcm9kdWN0Q2FyZCkgPT4ge1xuICAgICAgICBwcm9kdWN0Q2FyZC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZGlzcGxheUZpbHRlcmVkQ29udGVudChkYXRhKSB7XG4gICAgY29uc3QgZmlsdGVycyA9IHRoaXMuY2hlY2tib3hTZXJ2aWNlLmdldEZpbHRlcnMoKTtcbiAgICBjb25zdCBwcm9kdWN0Q2FyZHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY2F0YWxvZ3VlLml0ZW0pKTtcbiAgICBbLi4uZGF0YV0uZm9yRWFjaCgocHJvZHVjdCkgPT4ge1xuICAgICAgY29uc3QgaXNGb3VuZCA9IE9iamVjdC5rZXlzKGZpbHRlcnMpLmV2ZXJ5KChrZXkpID0+IHtcbiAgICAgICAgaWYgKGtleSA9PT0gJ3ByaWNlJykge1xuICAgICAgICAgIHJldHVybiBOdW1iZXIoZmlsdGVyc1trZXldKSA+PSBOdW1iZXIocHJvZHVjdFtrZXldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmaWx0ZXJzW2tleV0uaW5jbHVkZXMoU3RyaW5nKHByb2R1Y3Rba2V5XSkpO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBjYXJkID0gcHJvZHVjdENhcmRzXG4gICAgICAgIC5maW5kKChwcm9kdWN0Q2FyZCkgPT4gTnVtYmVyKHByb2R1Y3RDYXJkLmRhdGFzZXQuaWQpID09PSBOdW1iZXIocHJvZHVjdC5pZCkpO1xuICAgICAgY2FyZC5zdHlsZS5kaXNwbGF5ID0gaXNGb3VuZCA/ICdmbGV4JyA6ICdub25lJztcbiAgICB9KTtcbiAgfVxuXG4gIGRpc3BsYXlTaW5nbGVQYWdlQ29udGVudChkYXRhKSB7XG4gICAgY29uc3QgcHJvZHVjdElkID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KCdwcm9kdWN0LycpWzFdO1xuICAgIGNvbnN0IHByb2R1Y3QgPSBkYXRhLmZpbmQoKGl0ZW0pID0+IE51bWJlcihpdGVtLmlkKSA9PT0gTnVtYmVyKHByb2R1Y3RJZCkpO1xuXG4gICAgaWYgKHByb2R1Y3QpIHtcbiAgICAgIHRoaXMucmVuZGVyU2luZ2xlUGFnZShwcm9kdWN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsICcvNDA0Jyk7XG4gICAgICB0aGlzLnJvdXRlci5yZW5kZXJSb3V0ZUNvbnRlbnQod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVuZGVyZXI7XG4iLCJjbGFzcyBSb3V0ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnJvdXRlcyA9IHt9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZW5kZXJSb3V0ZUNvbnRlbnQod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZU5ld1JvdXRlKHBhdGhOYW1lLCBjYWxsYmFjaykge1xuICAgIGlmICghcGF0aE5hbWUgfHwgdHlwZW9mIHBhdGhOYW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdWYWxpZCBwYXRoIHJlcXVpcmVkJyk7XG4gICAgfVxuXG4gICAgaWYgKCFjYWxsYmFjayB8fCB0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2FsbGJhY2sgcmVxdWlyZWQnKTtcbiAgICB9XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMucm91dGVzLCBwYXRoTmFtZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUm91dGUgd2l0aCB0aGlzIG5hbWUgYWxyZWFkeSBleGlzdHMnKTtcbiAgICB9XG5cbiAgICB0aGlzLnJvdXRlc1twYXRoTmFtZV0gPSBjYWxsYmFjaztcbiAgfVxuXG4gIHJlbmRlclJvdXRlQ29udGVudCh1cmwpIHtcbiAgICBjb25zdCBwYXRoTmFtZSA9IHVybC5zcGxpdCgnLycpWzFdIHx8ICcvJztcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhpcy5yb3V0ZXMsIHBhdGhOYW1lKSkge1xuICAgICAgdGhpcy5yb3V0ZXNbcGF0aE5hbWVdKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucm91dGVzWyc0MDQnXSgpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSb3V0ZXI7XG4iLCJpbXBvcnQgQ09ORklHIGZyb20gJy4uLy4uL2NvbmZpZy5qcyc7XG5cbmV4cG9ydCBjb25zdCBtYWtlUmVxdWVzdCA9IChwYXRoLCByZXF1ZXN0VHlwZSwgZGF0YU9iaiA9IHt9KSA9PiB7XG4gIGNvbnN0IGNvbmZpZyA9IHtcbiAgICBtZXRob2Q6IHJlcXVlc3RUeXBlLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgfTtcblxuICBpZiAoT2JqZWN0LmtleXMoZGF0YU9iaikubGVuZ3RoKSB7XG4gICAgY29uZmlnLmJvZHkgPSBKU09OLnN0cmluZ2lmeShkYXRhT2JqKTtcbiAgfVxuXG4gIHJldHVybiBmZXRjaChgJHtDT05GSUcuYXBpfS8ke3BhdGh9YCwgY29uZmlnKTtcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtZXhwcmVzc2lvbnMgKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250cm9sLXJlZ2V4XG5jb25zdCBFTUFJTF9SRUdFWCA9IC8oPzpbYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKD86XFwuW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKykqfFwiKD86W1xceDAxLVxceDA4XFx4MGJcXHgwY1xceDBlLVxceDFmXFx4MjFcXHgyMy1cXHg1YlxceDVkLVxceDdmXXxcXFxcW1xceDAxLVxceDA5XFx4MGJcXHgwY1xceDBlLVxceDdmXSkqXCIpQCg/Oig/OlthLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cXC4pK1thLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT98XFxbKD86KD86MjVbMC01XXwyWzAtNF1bMC05XXxbMDFdP1swLTldWzAtOV0/KVxcLil7M30oPzoyNVswLTVdfDJbMC00XVswLTldfFswMV0/WzAtOV1bMC05XT98W2EtejAtOS1dKlthLXowLTldOig/OltcXHgwMS1cXHgwOFxceDBiXFx4MGNcXHgwZS1cXHgxZlxceDIxLVxceDVhXFx4NTMtXFx4N2ZdfFxcXFxbXFx4MDEtXFx4MDlcXHgwYlxceDBjXFx4MGUtXFx4N2ZdKSspXFxdKS87XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKGZpZWxkTmFtZSwgZmllbGRWYWx1ZSwgcnVsZXMgPSB7fSwgY2FsbGJhY2sgPSAoKSA9PiB7fSkge1xuICBjb25zdCB2YWxpZGF0b3JzID0ge1xuICAgIG1pbkxlbjogKHZhbCwgbWluKSA9PiB2YWwubGVuZ3RoID49IG1pbixcbiAgICBtYXhMZW46ICh2YWwsIG1heCkgPT4gdmFsLmxlbmd0aCA8PSBtYXgsXG4gICAgb25seU51bWJlcnNBbmRMZXR0ZXJzOiAodmFsKSA9PiAvXltBLVphLXowLTldKyQvLnRlc3QodmFsKSxcbiAgICBpc1ZhbGlkRW1haWw6ICh2YWwpID0+IEVNQUlMX1JFR0VYLnRlc3QodmFsKSxcbiAgICBpc05vdEVtcHR5OiAodmFsKSA9PiB2YWwudHJpbSgpLmxlbmd0aCxcbiAgfTtcblxuICBjb25zdCBtZXNzYWdlcyA9IHtcbiAgICBtaW5MZW46IChmaWVsZCwgdmFsKSA9PiBgJHtmaWVsZH0gbXVzdCBjb250YWluIGF0IGxlYXN0ICR7dmFsfSBjaGFyYWN0ZXJzYCxcbiAgICBtYXhMZW46IChmaWVsZCwgdmFsKSA9PiBgJHtmaWVsZH0gbXVzdCBjb250YWluICR7dmFsfSBjaGFyYWN0ZXJzICBhdCBtb3N0YCxcbiAgICBvbmx5TnVtYmVyc0FuZExldHRlcnM6IChmaWVsZCkgPT4gYCR7ZmllbGR9IG11c3QgaW5jbHVkZSBvbmx5IG51bWJlcnMgYW5kIGxldHRlcnNgLFxuICAgIGlzVmFsaWRFbWFpbDogKGZpZWxkKSA9PiBgJHtmaWVsZH0gc2hvdWxkIGJlIHZhbGlkYCxcbiAgICBpc05vdEVtcHR5OiAoZmllbGQpID0+IGAke2ZpZWxkfSBtdXN0bid0IGJlIGVtcHR5YCxcbiAgfTtcblxuICBjb25zdCBlcnJvcnMgPSB7fTtcblxuICBmb3IgKGNvbnN0IHJ1bGUgaW4gcnVsZXMpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbGlkYXRvcnMsIHJ1bGUpKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSB2YWxpZGF0b3JzW3J1bGVdKGZpZWxkVmFsdWUsIHJ1bGVzW3J1bGVdKTtcbiAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IG1lc3NhZ2VzW3J1bGVdKGZpZWxkTmFtZSwgcnVsZXNbcnVsZV0pO1xuICAgICAgICBjYWxsYmFjayhlcnJvck1lc3NhZ2UpO1xuICAgICAgICAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGVycm9ycywgZmllbGROYW1lKVxuICAgICAgICAgID8gZXJyb3JzW2ZpZWxkTmFtZV0gPSBbZXJyb3JNZXNzYWdlXVxuICAgICAgICAgIDogZXJyb3JzW2ZpZWxkTmFtZV0ucHVzaChlcnJvck1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==