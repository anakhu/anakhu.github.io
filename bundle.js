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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9hc3NldHMvc3R5bGVzL3Njc3Mvc3R5bGVzLnNjc3M/ZTlmMyIsIndlYnBhY2s6Ly8vLi9kaXN0L2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9hc3NldHMvc3R5bGVzL3Njc3Mvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYWJvdXRDb21wb25lbnRzL2Fib3V0UGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hdXRoQ29tcG9uZW50cy9sb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJ0Q29tcG9uZW50cy9jYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhcnRDb21wb25lbnRzL29yZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhdGFsb2d1ZUNvbXBvbmVudHMvY2F0YWxvZ3VlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhdGFsb2d1ZUNvbXBvbmVudHMvZmlsdGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9lcnJvckNvbXBvbmVudHMvZXJyb3JQYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hvbWVQYWdlQ29tcG9uZW50cy9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXRDb21wb25lbnRzL25hdmJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zaW5nbGVQYWdlQ29tcG9uZW50cy9zaW5nbGVQYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RlbXBsYXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9BdXRoU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9DYXJ0T2JzZXZlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9DYXJ0U2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9GaWx0ZXJTZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL0Zvcm1TZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL09ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vUmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vUm91dGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3V0aWxzL21ha2VSZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3V0aWxzL3ZhbGlkYXRvci5qcyJdLCJuYW1lcyI6WyJjb250ZW50SWQiLCJDT05GSUciLCJyb3V0ZXMiLCJhYm91dFBhZ2UiLCJyZW5kZXJBYm91dFBhZ2UiLCJhYm91dFBhZ2VXcmFwcGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImluc2VydEFkamFjZW50SFRNTCIsIkFCT1VUX1BBR0VfVEVNUExBVEUiLCJhdXRoUGFnZSIsImluaXRBdXRoRm9ybXMiLCJmb3JtQ29udGFpbmVyIiwiZm9ybUxpbmtzIiwicXVlcnlTZWxlY3RvciIsImZvcm1zIiwicXVlcnlTZWxlY3RvckFsbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiZm9ybUlkIiwidGFyZ2V0IiwiaWQiLCJzcGxpdCIsImZvckVhY2giLCJmb3JtIiwic3R5bGUiLCJkaXNwbGF5IiwicmVuZGVyQXV0aEZvcm1zIiwiYXV0aEZvcm1zQ29udGFpbmVyIiwiRk9STV9URU1QTEFURSIsImNhcnQiLCJzZWxlY3RvcnMiLCJDYXJ0IiwiY2FydFBhZ2VDb250ZW50IiwiY29udGVudCIsImNhcnRXcmFwcGVyIiwid3JhcHBlciIsImluc3RhbmNlIiwiZGF0YSIsInByb2R1Y3RzIiwicmVzZXRDYXJ0IiwiT2JqZWN0Iiwia2V5cyIsIm1ha2VDYXJ0SXRlbUNhcmQiLCJhcHBlbmRDaGlsZCIsInByb2R1Y3RJZCIsInZhbHVlIiwicHJvZHVjdCIsImZpbmQiLCJpdGVtIiwiU3RyaW5nIiwibnVtYmVyQXZhaWxhYmxlIiwiaW1hZ2UiLCJuYW1lIiwicHJpY2UiLCJDQVJUX0lURU1fVEVNUExBVEUiLCJjYXJ0SXRlbSIsInJlbW92ZSIsInJlbmRlck9yZGVyQ2FyZCIsIm9yZGVyQ2FyZENvbnRhaW5lciIsIm9yZGVyIiwiQ0FSRF9PUkRFUl9URU1QTEFURSIsImNhdGFsb2d1ZSIsInJvdXRlIiwicHJvZHVjdFBhZ2UiLCJyZW5kZXJDYXRhbG9ndWVJdGVtIiwiY2F0YWxvZ3VlQ29udGFpbmVyIiwiY2F0YWxvZ3VlSXRlbSIsIkNBVEFMT0dVRV9JVEVNX1RFTVBMQVRFIiwibWFrZUNhdGFsb2d1ZUl0ZW1zQ2xpY2thYmxlIiwicmVuZGVyIiwiY2F0YWxvZ3VlQ2FyZHMiLCJjYXJkIiwiY2xpY2thYmxlQXJlYSIsImltZyIsImRhdGFzZXQiLCJ3aW5kb3ciLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwibG9jYXRpb24iLCJwYXRobmFtZSIsInJlbmRlckNhdGFsb2d1ZSIsImZpbHRlcnMiLCJmaWx0ZXIiLCJGaWx0ZXJzIiwiZmlsdGVyc0NvbnRhbmluZXIiLCJjaGVja2JveGVzIiwiZHJhd1ByaWNlSW5wdXRSYW5nZSIsImJ1aWxkQ2hlY2tib3hlcyIsImRyYXdDaGVja2JveGVzIiwiZHJhd1Jlc2V0QnV0dG9uIiwiYWxsUHJpY2VzIiwibWFwIiwicHJpY2VzIiwibWluIiwiTWF0aCIsIm1heCIsIlBSSUNFX0lOUFVUX1RFTVBMQVRFIiwiZmlsdGVyQmFzZSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInB1c2giLCJiaW5kIiwiaW5jbHVkZXMiLCJrZXkiLCJmaWx0ZXJHcm91cCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJjb250YWluZXIiLCJ0b1VwcGVyQ2FzZSIsImZpbHRlckdyb3VwQ29udGVudCIsInNvcnQiLCJmaWx0ZXJWYWx1ZSIsIkNIRUNLQk9YX1RFTVBMQVRFIiwiaW5pdEZpbHRlckdyb3VwQ29udGVudCIsImVudHJpZXMiLCJncm91cCIsImxhYmVsIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJlcnJvclBhZ2UiLCJyZW5kZXJFcnJvclBhZ2UiLCJlcnJvclBhZ2VDb250YWluZXIiLCJFUlJPUl9QQUdFIiwiaG9tZVBhZ2UiLCJob21lIiwicmVuZGVySG9tZVBhZ2UiLCJob21lcGFnZSIsIkhPTUVQQUdFX1RFTVBMQVRFIiwiaW5pdFNlcml2ZVVybHMiLCJyZW5kZXJGbiIsInNlcnZpY2VzVXJscyIsInNlcnZpY2VzIiwidXJsIiwiY2xhc3NOYW1lIiwiaW5pdE5hdmJhciIsIm5hdmJhciIsImNhdGFsb2d1ZVBhZ2UiLCJjYXJ0UGFnZSIsInJlbmRlck5hdmJhciIsIk5BVkJBUl9URU1QTEFURSIsInBhZ2UiLCJTaW5nbGVQYWdlIiwic2luZ2xlUGFnZUNvbnRhaW5lciIsInJlc2V0UGFnZSIsIlNJTkdMRV9QQUdFX1RFTVBMQVRFIiwicGFnZUNvbnRlbnQiLCJmaWx0ZXJOYW1lIiwiYnJhbmQiLCJtYW51ZmFjdHVyZXIiLCJ2b2x1bWUiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwiYXBpIiwidmFsaWRhdGlvblJ1bGVzIiwibWluTGVuIiwibWF4TGVuIiwib25seU51bWJlcnNBbmRMZXR0ZXJzIiwiaXNOb3RFbXB0eSIsImVtYWlsIiwiaXNWYWxpZEVtYWlsIiwicGFzc3dvcmQiLCJ0b3RhbCIsImRldGFpbHMiLCJ1c2VySW5mbyIsInVzZXJEYXRhIiwib3JkZXJNZXNzYWdlIiwiaW5wdXQiLCJjaG9vc2UiLCJxdWFudGl0eSIsImJ1eSIsImFkZCIsImN1cnJlbnRQcmljZSIsImNoZWNrYm94IiwicmVzZXQiLCJuYXYiLCJsb2dvdXQiLCJsb2dpbiIsImF1dGgiLCJlcnJvciIsInNpZ25JbiIsInNpZ25VcCIsIkFwcCIsInJvdXRlciIsIlJvdXRlciIsImZpbHRlclNlcnZpY2UiLCJGaWx0ZXJTZXJ2aWNlIiwiY2FydFNlcnZpY2UiLCJDYXJ0U2VydmljZSIsImNhcnRPYnNlcnZlciIsIkNhcnRPYnNlcnZlciIsImF1dGhTZXJ2aWNlIiwiQXV0aFNlcnZpY2UiLCJmb3JtU2VydmljZSIsIkZvcm1TZXJ2aWNlIiwicmVuZGVyZXIiLCJSZW5kZXJlciIsInN1YnNjcmliZSIsIm9uRmlsdGVyQ2hhbmdlIiwib25DYXJ0Q2hhbmdlIiwiaW5pdCIsIm1ha2VSZXF1ZXN0IiwidGhlbiIsImpzb24iLCJpbml0Um91dGVyIiwiaW5pdEFwcCIsInJlbmRlclJvdXRlQ29udGVudCIsImluaXRDYXJ0SW5wdXRIYWRsZXJzIiwiaW5pdE9ic2VydmVyIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJlbnRyeSIsImNyZWF0ZU5ld1JvdXRlIiwicmVuZGVyUGFnZUNvbnRlbnQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY2FydFJvdXRlIiwiZGVjb2RlVVJJIiwic2V0SXRlbSIsInJlbmRlckNhcnQiLCJhcHAiLCJ1c2VyIiwiaXNMb2dnZWRJbiIsImF1dGhFcnJvcnMiLCJvcmRlck1lc3NzYWdlcyIsIkpTT04iLCJwYXJzZSIsInRvZ2dsZUF1dGhPbmx5Q29udGVudCIsInJlbW92ZUl0ZW0iLCJzdHJpbmdpZnkiLCJsb2dPdXRCdG4iLCJsb2dpbkxpbmsiLCJ0ZXh0Q29udGVudCIsInJlcyIsImZvdW5kVXNlciIsImxvZ1VzZXJJbiIsImVyciIsInN0YXR1cyIsImxlbmd0aCIsIm9yZGVyRGF0YSIsImNhcmRzIiwiZGVsZXRlUHJvZHVjdEZyb21DYXJ0IiwiY2FydE9yZGVyQ29udGFpbmVyIiwibm9kZXNUb09ic2VydmUiLCJpbml0Q2FydENhbGN1bGF0b3IiLCJjYWxjdWxhdGVUb3RhbCIsImRlbGV0ZUJ0bnMiLCJidG4iLCJkZWxldGVDYXJkT3JkZXJOb3RlIiwiY2FydEl0ZW1zIiwicHJpY2VUb3RhbCIsIkFycmF5IiwiZnJvbSIsInJlZHVjZSIsInRvdGFsU3VtIiwiY3VycmVudEl0ZW0iLCJmbGFnIiwiY2hlY2tlZCIsInJlbmRlckNhcnRPcmRlckRldGFpbHMiLCJ0b0ZpeGVkIiwiY2FydERldGFpbHMiLCJjaGlsZHJlbiIsImZvdW5kIiwiTnVtYmVyIiwiY2FydHMiLCJwcm9kdWN0c0luQ2FydCIsIm9ic2VydmFibGUiLCJPYnNlcnZhYmxlIiwiZm4iLCJpdGVtSWQiLCJjbG9zZXN0IiwiYWRkUHJvZHVjdFRvQ2FydCIsImluaXRQcm9kdWN0Q2FydCIsIm5leHQiLCJpdGVtVG9EZWxldGUiLCJ1cGRhdGVMb2NhbFN0b3JhZ2UiLCJpbml0RGVsZXRlQnV0dG9ucyIsImluaXRDYXJ0TnVtYmVySW5wdXQiLCJkZWxldGVCdXR0b25zIiwiYnV0dG9uIiwibnVtYmVySW5wdXRzIiwiaG9tZVBhZ2VGaWx0ZXJzIiwicHJpY2VJbnB1dCIsInJlc2V0RmlsdGVyc0J0biIsInJlc2V0RmlsdGVycyIsIm9uSW5wdXRSYW5nZUNoYW5nZSIsImhhbmRsZUZpbHRlckNoYW5nZSIsImN1cnJlbnRWYWwiLCJvbkNoZWNrQm94Q2hlY2tlZCIsIm9uQ2hlY2tCb3hVbkNoZWNrZWQiLCJpbml0RmlsdGVycyIsImdldEZpbHRlcnMiLCJjdXJyZW50RmlsdGVyIiwiZmlsdGVyc1N0cmluZyIsInNlYXJjaCIsInJlcGxhY2UiLCJCb29sZWFuIiwiZmlsdGVyT2JqZWN0IiwiY3VycmVuRmlsdGVyVmFsdWUiLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJxdWVyeSIsImNyZWF0ZVF1ZXJ5IiwicXVlcnlTdHJpbmciLCJ2YWx1ZXMiLCJxdWVyeVN0cmluZ0VsZW1lbnQiLCJzaWduSW5Gb3JtIiwic2lnblVwRm9ybSIsInZhbGlkYXRpb25FcnJvcnMiLCJpbml0U2lnbkluRm9ybSIsImluaXRTaWduVXBGb3JtIiwidHJpZ2dlck9uSW5wdXRDaGFuZ2VWYWxpZGF0aW9uIiwic2lnblVzZXJJbiIsInNpZ25Vc2VyT3V0Iiwib3JkZXJCdG4iLCJwcm9jZXNzT3JkZXJSZXF1ZXN0IiwicHJldmVudERlZmF1bHQiLCJnZXRGb3JtRGF0YSIsInByb2Nlc3NTaWduSW5SZXF1ZXN0IiwicHJvY2Vzc1NpZ25VcFJlcXVlc3QiLCJmaWVsZCIsImFjdGl2ZUZvcm0iLCJwYXJlbnRFbGVtZW50IiwidmFsaWRhdGlvblJlc3VsdCIsInZhbGlkYXRlIiwiZGlzcGxheUVycm9ycyIsInVwZGF0ZVZhbGlkYXRpb25FcnJvcnMiLCJmaWVsZE5hbWUiLCJhc3NpZ24iLCJlcnJvcnMiLCJlcnJvckZpZWxkIiwiZXJyb3JTdHJpbmciLCJ2YWxpZGF0ZUlucHV0RmllbGQiLCJhdXRoRGF0YSIsImlucHV0cyIsInN1YnNjcmliZXJzIiwic3Vic2NyaWJlZEZuIiwiY2hlY2tib3hTZXJ2aWNlIiwiYXBwQ29udGFpbmVyIiwicmVuZGVyRmlsdGVycyIsImRyYXdGaWx0ZXJzIiwic2luZ2xlUGFnZSIsImRyYXdTaW5nbGVQYWdlIiwiYWRkQnRuIiwiYXBwQ29udGVudEVsZW1lbnRzIiwiZGl2IiwiZGlzcGxheVBhZ2VDb250ZW50IiwiZGlzcGxheVNpbmdsZVBhZ2VDb250ZW50IiwiZGlzcGxheUZpbHRlcmVkQ29udGVudCIsInByb2R1Y3RDYXJkcyIsInByb2R1Y3RDYXJkIiwiaXNGb3VuZCIsImV2ZXJ5IiwicmVuZGVyU2luZ2xlUGFnZSIsInBhdGhOYW1lIiwiY2FsbGJhY2siLCJFcnJvciIsInBhdGgiLCJyZXF1ZXN0VHlwZSIsImRhdGFPYmoiLCJjb25maWciLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsImZldGNoIiwiRU1BSUxfUkVHRVgiLCJmaWVsZFZhbHVlIiwicnVsZXMiLCJ2YWxpZGF0b3JzIiwidmFsIiwidGVzdCIsInRyaW0iLCJtZXNzYWdlcyIsInJ1bGUi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TSxJQUFELENBQWxDLENBQWY7O0FBQ0EsVUFBSSxDQUFDQyxNQUFMLEVBQWE7QUFDWCxZQUFNQyxZQUFZLEdBQUdILFFBQVEsQ0FBQ0MsSUFBRCxDQUFSLENBQWU5QyxTQUFmLEVBQTBCd0MsS0FBSyxDQUFDTSxJQUFELENBQS9CLENBQXJCO0FBQ0FsQixnQkFBUSxDQUFDb0IsWUFBRCxDQUFSO0FBQ0EsU0FBQ2hWLE1BQU0sQ0FBQzBELFNBQVAsQ0FBaUJDLGNBQWpCLENBQWdDQyxJQUFoQyxDQUFxQ3NPLE1BQXJDLEVBQTZDRixTQUE3QyxDQUFELEdBQ0lFLE1BQU0sQ0FBQ0YsU0FBRCxDQUFOLEdBQW9CLENBQUNnRCxZQUFELENBRHhCLEdBRUk5QyxNQUFNLENBQUNGLFNBQUQsQ0FBTixDQUFrQm5PLElBQWxCLENBQXVCbVIsWUFBdkIsQ0FGSjtBQUdEO0FBQ0Y7QUFDRjs7QUFFRCxTQUFPOUMsTUFBUDtBQUNEOztBQUVjTCx1RUFBZixFIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtMiEuL3N0eWxlcy5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8IURPQ1RZUEUgaHRtbD5cXG48aHRtbCBsYW5nPVxcXCJlblxcXCI+XFxuPGhlYWQ+XFxuICA8bWV0YSBjaGFyc2V0PVxcXCJVVEYtOFxcXCI+XFxuICA8bWV0YSBuYW1lPVxcXCJ2aWV3cG9ydFxcXCIgY29udGVudD1cXFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFxcXCI+XFxuICA8dGl0bGU+U1BBIHByb2plY3Q8L3RpdGxlPlxcbjwvaGVhZD5cXG48Ym9keT5cXG4gIDxoZWFkZXI+XFxuICAgIDxuYXYgY2xhc3M9XFxcIm1haW5fX25hdlxcXCIgaWQ9XFxcImpzLW1haW4tbmF2XFxcIj48L25hdj5cXG4gIDwvaGVhZGVyPlxcblxcbiAgPGRpdiBpZD1cXFwiYXBwQ29udGVudC13cmFwcGVyXFxcIiBzdHlsZT1cXFwiZGlzcGxheTogbm9uZTtcXFwiPlxcblxcbiAgICA8ZGl2IGNsYXNzPVxcXCJob21lcGFnZS13cmFwcGVyXFxcIiBpZD1cXFwianMtaG9tZXBhZ2VcXFwiPjwvZGl2PlxcbiAgXFxuICAgIDxkaXYgY2xhc3M9XFxcInByb2R1Y3RQYWdlLXdyYXBwZXJcXFwiIGlkPVxcXCJqcy1jYXRhbG9ndWUtcGFnZVxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwicHJvZGN1dFBhZ2VfX2NvbnRlbnRcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9kdWN0UGFnZV9fZmlsdGVyXFxcIiBpZD1cXFwianMtY2F0YWxvZ3VlLWZpbHRlclxcXCI+PC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2R1Y3RQYWdlX19jYXRhbG9ndWVcXFwiIGlkPVxcXCJqcy1jYXRhbG9ndWVcXFwiPjwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIFxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhYm91dFBhZ2Utd3JhcHBlclxcXCIgaWQ9XFxcImpzLWFib3V0LXBhZ2VcXFwiPjwvZGl2PlxcbiAgXFxuICAgIDxkaXYgY2xhc3M9XFxcImNhcnRQYWdlLXdyYXBwZXJcXFwiIGlkPVxcXCJqcy1jYXJ0LXBhZ2VcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNhcnRQYWdlX19jb250ZW50XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcnRQYWdlX19jYXJ0X29yZGVyXFxcIj48L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcnRQYWdlX19jYXJ0X3dyYXBwZXJcXFwiPjwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIFxcbiAgICA8ZGl2IGNsYXNzPVxcXCJlcnJvclBhZ2Utd3JhcHBlclxcXCIgaWQ9XFxcImpzLWVycm9yLXBhZ2VcXFwiPjwvZGl2PlxcbiAgXFxuICAgIDxkaXYgY2xhc3M9XFxcInNpbmdsZVBhZ2Utd3JhcHBlclxcXCIgaWQ9XFxcImpzLXNpbmdsZS1wYWdlXFxcIj48L2Rpdj5cXG5cXG4gICAgPGRpdiBjbGFzcz1cXFwiYXV0aFBhZ2Utd3JhcHBlclxcXCIgaWQ9XFxcImpzLWF1dGgtcGFnZVxcXCI+PC9kaXY+XFxuICBcXG4gIFxcbiAgPC9kaXY+XFxuICA8c2NyaXB0IHNyYz1cXFwiL2J1bmRsZS5qc1xcXCI+PC9zY3JpcHQ+XFxuPC9ib2R5PlxcbjwvYm9keT5cXG48L2h0bWw+XFxuXCI7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgICBmb250LWZhbWlseTogYXJpYWw7XFxuICAgIGJhY2tncm91bmQ6ICNmOGY5ZmI7IH1cXG5cXG5odG1sLCBib2R5LCB1bCwgb2wsIGxpLCBmb3JtLCBmaWVsZHNldCwgbGVnZW5kIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwOyB9XFxuXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCB7XFxuICAgIG1hcmdpbi10b3A6IDA7IH1cXG5cXG5maWVsZHNldCwgaW1nIHtcXG4gICAgYm9yZGVyOiAwOyB9XFxuXFxubGkge1xcbiAgICBsaXN0LXN0eWxlOiBub25lOyB9XFxuXFxuLmxlYWRfX2Jhbm5lcixcXG4uc2Vjb25kX19iYW5uZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6ICMyMzIwMjA7IH1cXG4gICAgLmxlYWRfX2Jhbm5lciAuYmFubmVyX19jb250ZW50LFxcbiAgICAuc2Vjb25kX19iYW5uZXIgLmJhbm5lcl9fY29udGVudCB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBib3R0b206IDUwcHg7XFxuICAgICAgICB3aWR0aDogMTAwJTsgfVxcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgICAgICAgICAubGVhZF9fYmFubmVyIC5iYW5uZXJfX2NvbnRlbnQsXFxuICAgICAgICAgICAgLnNlY29uZF9fYmFubmVyIC5iYW5uZXJfX2NvbnRlbnQge1xcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTsgfSB9XFxuICAgIC5sZWFkX19iYW5uZXIgbGksXFxuICAgIC5zZWNvbmRfX2Jhbm5lciBsaSB7XFxuICAgICAgICBwYWRkaW5nOiAwcHggMTBweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTsgfVxcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgICAgICAgICAubGVhZF9fYmFubmVyIGxpLFxcbiAgICAgICAgICAgIC5zZWNvbmRfX2Jhbm5lciBsaSB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7IH0gfVxcbiAgICAubGVhZF9fYmFubmVyIGltZyxcXG4gICAgLnNlY29uZF9fYmFubmVyIGltZyB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGZpbHRlcjogY29udHJhc3QoOTAlKTsgfVxcbiAgICAubGVhZF9fYmFubmVyIHNwYW4sXFxuICAgIC5zZWNvbmRfX2Jhbm5lciBzcGFuIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgcGFkZGluZzogMTBweDsgfVxcbiAgICAubGVhZF9fYmFubmVyIHNwYW4udGl0bGUsXFxuICAgIC5zZWNvbmRfX2Jhbm5lciBzcGFuLnRpdGxlIHtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDsgfVxcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgICAgICAgICAubGVhZF9fYmFubmVyIHNwYW4udGl0bGUsXFxuICAgICAgICAgICAgLnNlY29uZF9fYmFubmVyIHNwYW4udGl0bGUge1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7IH0gfVxcblxcbi5zZWNvbmRfX2Jhbm5lciB7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0OyB9XFxuXFxuc2VjdGlvbiB7XFxuICAgIG1hcmdpbjogMTBweCAwcHg7IH1cXG5cXG4uaG9tZVBhZ2VfX3NlcnZpY2VzIHVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgICAgICAuaG9tZVBhZ2VfX3NlcnZpY2VzIHVsIHtcXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDsgfSB9XFxuXFxuLmhvbWVQYWdlX19zZXJ2aWNlcyBsaSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZmxleDogMCAwIDMzLjMzMzMzJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuXFxuLmhvbWVQYWdlX19zZXJ2aWNlcyBpbWcge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBvcGFjaXR5OiAwLjQ7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4OyB9XFxuXFxuLmhvbWVQYWdlX19zZXJ2aWNlcyBwIHtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgY29sb3I6ICMzQTQ0NTQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuICAgIC5ob21lUGFnZV9fc2VydmljZXMgcDpob3ZlciB7XFxuICAgICAgICBjb2xvcjogIzlBMjc1QTsgfVxcblxcbi5ob21lUGFnZV9fcHJvZHVjdHMge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAgIC5ob21lUGFnZV9fcHJvZHVjdHMgdWwge1xcbiAgICAgICAgcGFkZGluZzogMHB4O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDsgfVxcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgICAgICAgICAuaG9tZVBhZ2VfX3Byb2R1Y3RzIHVsIHtcXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7IH0gfVxcbiAgICAuaG9tZVBhZ2VfX3Byb2R1Y3RzIGltZyB7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB3aWR0aDogYXV0bztcXG4gICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICAgIG1heC13aWR0aDogMjAwcHg7XFxuICAgICAgICBtYXgtaGVpZ2h0OiAyMDBweDsgfVxcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgICAgICAgICAuaG9tZVBhZ2VfX3Byb2R1Y3RzIGltZyB7XFxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwcHg7XFxuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMHB4OyB9IH1cXG4gICAgLmhvbWVQYWdlX19wcm9kdWN0cyBsaSB7XFxuICAgICAgICBmbGV4OiAwIDAgMzAlO1xcbiAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW46IDIlOyB9XFxuXFxuc2VjdGlvbiBoMSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBjb2xvcjogIzUzNjg3RTsgfVxcblxcbi5wcm9kdWN0UGFnZS13cmFwcGVyIHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgcGFkZGluZzogMHB4IDEwcHg7IH1cXG5cXG4ucHJvZGN1dFBhZ2VfX2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDsgfVxcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAgICAgLnByb2RjdXRQYWdlX19jb250ZW50IHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfSB9XFxuXFxuLnByb2R1Y3RQYWdlX19jYXRhbG9ndWUge1xcbiAgICBmbGV4OiAxIDAgNjglO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDsgfVxcblxcbi5wcm9kdWN0UGFnZV9fZmlsdGVyIHtcXG4gICAgZmxleDogMCAwIDIwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHdpZHRoOiBhdXRvOyB9XFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgICAgICAucHJvZHVjdFBhZ2VfX2ZpbHRlciB7XFxuICAgICAgICAgICAgZmxleDogMCAwIDk1JTsgfSB9XFxuXFxuLmNhdGFsb2d1ZV9faXRlbSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmbGV4OiAwIDAgMjEwcHg7XFxuICAgIGJveC1zaGFkb3c6IDlweCAxMXB4IDIwcHggLTdweCAjQzJCMkI0OyB9XFxuICAgIC5jYXRhbG9ndWVfX2l0ZW0gaW1nIHtcXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xcbiAgICAgICAgaGVpZ2h0OiAxNjBweDtcXG4gICAgICAgIHBhZGRpbmctdG9wOiAzJTsgfVxcbiAgICAuY2F0YWxvZ3VlX19pdGVtIGg1IHtcXG4gICAgICAgIGNvbG9yOiAjMjMyMDIwO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICBmb250LXNpemU6IDAuOHJlbTsgfVxcbiAgICAuY2F0YWxvZ3VlX19pdGVtIHAge1xcbiAgICAgICAgY29sb3I6ICM5QTI3NUE7XFxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgICAgIG1hcmdpbjogMDsgfVxcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAgICAgLmNhdGFsb2d1ZV9faXRlbSB7XFxuICAgICAgICAgICAgZmxleDogMTAwIDk1JTtcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTsgfSB9XFxuXFxuLmNhdGFsb2d1ZV9faXRlbV9pbWd3cmFwIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgfVxcblxcbi5jYXRhbG9ndWVfX2l0ZW1faW5mbyB7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87IH1cXG5cXG4uZmlsdGVyX19ncm91cF9sYWJlbCxcXG4uY2FydF9fZGV0YWlsc19sYWJlbCB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNBNDQ1NDtcXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbjogNXB4IDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RERERDtcXG4gICAgY29sb3I6ICMyMzIwMjA7IH1cXG4gICAgLmZpbHRlcl9fZ3JvdXBfbGFiZWw6aG92ZXIsXFxuICAgIC5jYXJ0X19kZXRhaWxzX2xhYmVsOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZjVjNzI7IH1cXG5cXG4uZmlsdGVyX19ncm91cF9jb250ZW50IHtcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtOyB9XFxuXFxuLmZpbHRlcl9fZ3JvdXBfY2hlY2tib3gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgfVxcblxcbi5jYXJ0UGFnZS13cmFwcGVyIHtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBwYWRkaW5nOiAwcHggMTBweDsgfVxcblxcbi5jYXJ0UGFnZV9fY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luOiAwcHggYXV0bzsgfVxcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAgICAgLmNhcnRQYWdlX19jb250ZW50IHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgICAgd2lkdGg6IDk1JTtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfSB9XFxuXFxuLmNhcnRQYWdlX19jYXJ0X29yZGVyIHtcXG4gICAgZmxleDogMCAwIDMwJTtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjRjVEREREO1xcbiAgICBwYWRkaW5nOiA1cHg7IH1cXG4gICAgLmNhcnRQYWdlX19jYXJ0X29yZGVyIGgzIHtcXG4gICAgICAgIHBhZGRpbmc6IDVweCAwcHg7XFxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0Y1RERERDsgfVxcbiAgICAuY2FydFBhZ2VfX2NhcnRfb3JkZXIgZGl2IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4OyB9XFxuICAgICAgICAuY2FydFBhZ2VfX2NhcnRfb3JkZXIgZGl2IC5jYXJ0UGFnZV9fdG90YWwge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICAgICAgICBjb2xvcjogIzlBMjc1QTtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDsgfVxcbiAgICAuY2FydFBhZ2VfX2NhcnRfb3JkZXIgYnV0dG9uIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgd2lkdGg6IDMyJTtcXG4gICAgICAgIG1hcmdpbjogMjBweCBhdXRvOyB9XFxuXFxuLmNhcnRQYWdlX19jYXJ0X3dyYXBwZXIge1xcbiAgICBmbGV4OiAwIDAgNjUlOyB9XFxuXFxuLmNhcnRfX2l0ZW1fd3JhcHBlciB7XFxuICAgIGZsZXg6IDAgMCA5MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMiU7XFxuICAgIGJveC1zaGFkb3c6IDlweCAxMXB4IDIwcHggLTdweCAjQzJCMkI0OyB9XFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgICAgICAuY2FydF9faXRlbV93cmFwcGVyIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0bzsgfSB9XFxuICAgIC5jYXJ0X19pdGVtX3dyYXBwZXIgZm9ybSB7XFxuICAgICAgICBmbGV4OiAwIDAgMzAwcHg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvOyB9XFxuICAgICAgICAuY2FydF9faXRlbV93cmFwcGVyIGZvcm0gaW5wdXQge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDMwJTsgfVxcbiAgICAgICAgLmNhcnRfX2l0ZW1fd3JhcHBlciBmb3JtIGlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMik7IH1cXG5cXG4uY2FydF9faXRlbV9kZXRhaWxzIHtcXG4gICAgZmxleDogMCAwIDMwMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG4gICAgLmNhcnRfX2l0ZW1fZGV0YWlscyBpbWcge1xcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICAgICAgbWFyZ2luOiAxMHB4IGF1dG87XFxuICAgICAgICBoZWlnaHQ6IDE2MHB4O1xcbiAgICAgICAgcGFkZGluZy10b3A6IDMlOyB9XFxuICAgIC5jYXJ0X19pdGVtX2RldGFpbHMgaDUge1xcbiAgICAgICAgY29sb3I6ICMyMzIwMjA7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtOyB9XFxuICAgIC5jYXJ0X19pdGVtX2RldGFpbHMgcCB7XFxuICAgICAgICBjb2xvcjogIzlBMjc1QTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICAgICAgbWFyZ2luOiAwOyB9XFxuXFxuLnNpbmdsZVBhZ2Utd3JhcHBlciB7XFxuICAgIHBhZGRpbmc6IDEwcHg7IH1cXG5cXG4uc2luZ2xlUGFnZV9fY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOyB9XFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgICAgICAuc2luZ2xlUGFnZV9fY29udGVudCB7XFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7IH0gfVxcblxcbi5zaW5nbGVQYWdlX19jb250ZW50X21haW4ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZsZXg6IDAgMCA0MCUgeDtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDsgfVxcbiAgICAuc2luZ2xlUGFnZV9fY29udGVudF9tYWluIGltZyB7XFxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgICAgICBtYXJnaW46IDEwcHggYXV0bztcXG4gICAgICAgIGhlaWdodDogMTYwcHg7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMyU7IH1cXG4gICAgLnNpbmdsZVBhZ2VfX2NvbnRlbnRfbWFpbiBoNSB7XFxuICAgICAgICBjb2xvcjogIzIzMjAyMDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07IH1cXG4gICAgLnNpbmdsZVBhZ2VfX2NvbnRlbnRfbWFpbiBwIHtcXG4gICAgICAgIGNvbG9yOiAjOUEyNzVBO1xcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgICAgICBtYXJnaW46IDA7IH1cXG5cXG4uc2luZ2xlUGFnZV9jb250ZW50X2luZm8ge1xcbiAgICBmbGV4OiAwIDEgNTAlO1xcbiAgICBwYWRkaW5nOiAxMHB4OyB9XFxuXFxuLmF1dGhQYWdlLXdyYXBwZXIge1xcbiAgICBwYWRkaW5nLXRvcDogNTBweDsgfVxcblxcbi5hdXRoX19mb3JtX3dyYXBwZXIge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtYXJnaW46IDBweCBhdXRvO1xcbiAgICBib3gtc2hhZG93OiA5cHggMTFweCAyMHB4IC03cHggI0MyQjJCNDsgfVxcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAgICAgLmF1dGhfX2Zvcm1fd3JhcHBlciB7XFxuICAgICAgICAgICAgd2lkdGg6IDg1JTsgfSB9XFxuICAgIC5hdXRoX19mb3JtX3dyYXBwZXIgcCB7XFxuICAgICAgICBjb2xvcjogIzlBMjc1QTtcXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuICAgIC5hdXRoX19mb3JtX3dyYXBwZXIgdWwge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgICAuYXV0aF9fZm9ybV93cmFwcGVyIGxpIHtcXG4gICAgICAgIGZsZXg6IDEgMSBhdXRvO1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNBNDQ1NDtcXG4gICAgICAgIHBhZGRpbmc6IDVweCAxNXB4O1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBtYXJnaW46IDVweCAwcHg7IH1cXG4gICAgICAgIC5hdXRoX19mb3JtX3dyYXBwZXIgbGk6aG92ZXIge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZjVjNzI7IH1cXG4gICAgLmF1dGhfX2Zvcm1fd3JhcHBlciBmb3JtIHtcXG4gICAgICAgIHBhZGRpbmc6IDIwcHggNDBweDsgfVxcbiAgICAgICAgLmF1dGhfX2Zvcm1fd3JhcHBlciBmb3JtIGxhYmVsLCAuYXV0aF9fZm9ybV93cmFwcGVyIGZvcm0gaW5wdXQsIC5hdXRoX19mb3JtX3dyYXBwZXIgZm9ybSBidXR0b24ge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDdweCAwcHggN3B4IDEwcHg7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgICAgICAgIG1hcmdpbjogNXB4IGF1dG87IH1cXG4gICAgICAgIC5hdXRoX19mb3JtX3dyYXBwZXIgZm9ybSBsYWJlbCB7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG4gICAgICAgIC5hdXRoX19mb3JtX3dyYXBwZXIgZm9ybSBpbnB1dDpmb2N1cyB7XFxuICAgICAgICAgICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICM1MzY4N0U7IH1cXG4gICAgICAgIC5hdXRoX19mb3JtX3dyYXBwZXIgZm9ybSBidXR0b24ge1xcbiAgICAgICAgICAgIG1hcmdpbjogNXB4IGF1dG87XFxuICAgICAgICAgICAgd2lkdGg6IDQwJTsgfVxcblxcbi5hdXRoX19mb3JtX2Vycm9yIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLmFib3V0UGFnZV9fY29udGVudCB7XFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7IH1cXG4gICAgLmFib3V0UGFnZV9fY29udGVudCBkaXYge1xcbiAgICAgICAgcGFkZGluZzogMTBweDsgfVxcblxcbi5hYm91dFBhZ2VfX2FydGljbGVzIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMTBweDsgfVxcbiAgICAuYWJvdXRQYWdlX19hcnRpY2xlcyB1bCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZmxleC1mbG93OiByb3cgd3JhcDsgfVxcbiAgICAuYWJvdXRQYWdlX19hcnRpY2xlcyBsaSB7XFxuICAgICAgICBtYXJnaW46IDVweDtcXG4gICAgICAgIGZsZXg6IDAgMCAzMCU7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0OyB9XFxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAgICAgICAgIC5hYm91dFBhZ2VfX2FydGljbGVzIGxpIHtcXG4gICAgICAgICAgICAgICAgZmxleDogMSAwIDEwMCU7IH0gfVxcbiAgICAuYWJvdXRQYWdlX19hcnRpY2xlcyBpbWcge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xcbiAgICAgICAgbWF4LWhlaWdodDogMjAwcHg7IH1cXG4gICAgLmFib3V0UGFnZV9fYXJ0aWNsZXMgZGl2IHtcXG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7IH1cXG4gICAgLmFib3V0UGFnZV9fYXJ0aWNsZXMgaDUge1xcbiAgICAgICAgY29sb3I6ICM5QTI3NUE7XFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4OyB9XFxuXFxuYnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogIzNBNDQ1NDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RERERDtcXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXdlaWdodDogYm9sZDsgfVxcbiAgICBidXR0b246aG92ZXIge1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0MyQjJCNDsgfVxcblxcbmJvZHkge1xcbiAgICBtYXgtd2lkdGg6IDEzMjBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW46IDAgYXV0bzsgfVxcblxcbi5tYWluX19uYXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0E0NDU0OyB9XFxuICAgIC5tYWluX19uYXYgZGl2IHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAgICAgICAgIC5tYWluX19uYXYgZGl2IHtcXG4gICAgICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDsgfSB9XFxuICAgIC5tYWluX19uYXYgdWwge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIG1hcmdpbjogNXB4O1xcbiAgICAgICAgcGFkZGluZzogMDsgfVxcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgICAgICAgICAubWFpbl9fbmF2IHVsIHtcXG4gICAgICAgICAgICAgICAgZmxleDogMCAwIDEwMCU7XFxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfSB9XFxuICAgIC5tYWluX19uYXYgbGkge1xcbiAgICAgICAgZmxleDogMSAxIDA7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAgICAgICAubWFpbl9fbmF2IGxpOmhvdmVyIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGY1YzcyOyB9XFxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAgICAgICAgIC5tYWluX19uYXYgbGkge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDsgfSB9XFxuXFxuLm5hdl9fbGlua19jYXJ0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIG1hcmdpbjogMXB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDVweCAyMHB4OyB9XFxuXFxuLmVycm9yUGFnZS13cmFwcGVyIHtcXG4gICAgcGFkZGluZzogNTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAgIC5lcnJvclBhZ2Utd3JhcHBlciBoMSB7XFxuICAgICAgICBjb2xvcjogIzIzMjAyMDsgfVxcbiAgICAuZXJyb3JQYWdlLXdyYXBwZXIgaDUge1xcbiAgICAgICAgY29sb3I6ICM5QTI3NUE7IH1cXG4gICAgLmVycm9yUGFnZS13cmFwcGVyIGltZyB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIG1heC13aWR0aDogMzAwcHg7XFxuICAgICAgICBtYXgtaGVpZ2h0OiAzMDBweDsgfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgeyBBQk9VVF9QQUdFX1RFTVBMQVRFIH0gZnJvbSAnLi4vdGVtcGxhdGVzLmpzJztcbmltcG9ydCBDT05GSUcgZnJvbSAnLi4vLi4vY29uZmlnLmpzJztcblxuY29uc3QgeyBjb250ZW50SWQgfSA9IENPTkZJRy5yb3V0ZXMuYWJvdXRQYWdlO1xuXG5mdW5jdGlvbiByZW5kZXJBYm91dFBhZ2UoKSB7XG4gIGNvbnN0IGFib3V0UGFnZVdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250ZW50SWQpO1xuICBhYm91dFBhZ2VXcmFwcGVyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgQUJPVVRfUEFHRV9URU1QTEFURSgpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyQWJvdXRQYWdlO1xuIiwiaW1wb3J0IHsgRk9STV9URU1QTEFURSB9IGZyb20gJy4uL3RlbXBsYXRlcy5qcyc7XG5pbXBvcnQgQ09ORklHIGZyb20gJy4uLy4uL2NvbmZpZy5qcyc7XG5cbmNvbnN0IHsgY29udGVudElkIH0gPSBDT05GSUcucm91dGVzLmF1dGhQYWdlO1xuXG5mdW5jdGlvbiBpbml0QXV0aEZvcm1zKGZvcm1Db250YWluZXIpIHtcbiAgY29uc3QgZm9ybUxpbmtzID0gZm9ybUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCd1bCcpO1xuICBjb25zdCBmb3JtcyA9IGZvcm1Db250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnZm9ybScpO1xuXG4gIGZvcm1MaW5rcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc3QgZm9ybUlkID0gYCR7ZS50YXJnZXQuaWQuc3BsaXQoJ2xpbmsnKVswXX1mb3JtYDtcbiAgICBmb3Jtcy5mb3JFYWNoKChmb3JtKSA9PiB7XG4gICAgICBmb3JtLnN0eWxlLmRpc3BsYXkgPSBmb3JtLmlkID09PSBmb3JtSWQgPyAnYmxvY2snIDogJ25vbmUnO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQXV0aEZvcm1zKCkge1xuICBjb25zdCBhdXRoRm9ybXNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250ZW50SWQpO1xuICBhdXRoRm9ybXNDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBGT1JNX1RFTVBMQVRFKCkpO1xuXG4gIGluaXRBdXRoRm9ybXMoYXV0aEZvcm1zQ29udGFpbmVyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyQXV0aEZvcm1zO1xuIiwiaW1wb3J0IHsgQ0FSVF9JVEVNX1RFTVBMQVRFIH0gZnJvbSAnLi4vdGVtcGxhdGVzLmpzJztcbmltcG9ydCBDT05GSUcgZnJvbSAnLi4vLi4vY29uZmlnLmpzJztcblxuY29uc3QgeyBjYXJ0IH0gPSBDT05GSUcuc2VsZWN0b3JzO1xuXG5jbGFzcyBDYXJ0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jYXJ0UGFnZUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNhcnQuY29udGVudCk7XG4gICAgdGhpcy5jYXJ0V3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2FydC53cmFwcGVyKTtcblxuICAgIGlmIChDYXJ0Lmluc3RhbmNlKSB7XG4gICAgICByZXR1cm4gQ2FydC5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICBDYXJ0Lmluc3RhbmNlID0gdGhpcztcbiAgfVxuXG4gIGluaXQoZGF0YSwgcHJvZHVjdHMpIHtcbiAgICB0aGlzLnJlc2V0Q2FydCgpO1xuICAgIGlmIChkYXRhKSB7XG4gICAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKChpZCkgPT4gdGhpcy5tYWtlQ2FydEl0ZW1DYXJkKGlkLCBkYXRhW2lkXSwgcHJvZHVjdHMpKTtcbiAgICB9XG4gICAgdGhpcy5jYXJ0UGFnZUNvbnRlbnQuYXBwZW5kQ2hpbGQodGhpcy5jYXJ0V3JhcHBlcik7XG4gIH1cblxuICBtYWtlQ2FydEl0ZW1DYXJkKHByb2R1Y3RJZCwgdmFsdWUsIHByb2R1Y3RzKSB7XG4gICAgY29uc3QgcHJvZHVjdCA9IHByb2R1Y3RzLmZpbmQoKGl0ZW0pID0+IFN0cmluZyhpdGVtLmlkKSA9PT0gcHJvZHVjdElkKTtcblxuICAgIGlmIChwcm9kdWN0KSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGlkLCBudW1iZXJBdmFpbGFibGUsIGltYWdlLCBuYW1lLCBwcmljZSxcbiAgICAgIH0gPSBwcm9kdWN0O1xuICAgICAgdGhpcy5jYXJ0V3JhcHBlci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIENBUlRfSVRFTV9URU1QTEFURShpZCwgdmFsdWUsIG51bWJlckF2YWlsYWJsZSwgaW1hZ2UsIG5hbWUsIHByaWNlKSk7XG4gICAgfVxuICB9XG5cbiAgcmVzZXRDYXJ0KCkge1xuICAgIGNvbnN0IGNhcnRJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChjYXJ0Lml0ZW0pO1xuICAgIGNhcnRJdGVtLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0ucmVtb3ZlKCkpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcnQ7XG4iLCJpbXBvcnQgeyBDQVJEX09SREVSX1RFTVBMQVRFIH0gZnJvbSAnLi4vdGVtcGxhdGVzLmpzJztcbmltcG9ydCBDT05GSUcgZnJvbSAnLi4vLi4vY29uZmlnLmpzJztcblxuY29uc3QgeyBjYXJ0IH0gPSBDT05GSUcuc2VsZWN0b3JzO1xuXG5mdW5jdGlvbiByZW5kZXJPcmRlckNhcmQoKSB7XG4gIGNvbnN0IG9yZGVyQ2FyZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2FydC5vcmRlcik7XG4gIG9yZGVyQ2FyZENvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIENBUkRfT1JERVJfVEVNUExBVEUoKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlck9yZGVyQ2FyZDtcbiIsImltcG9ydCB7IENBVEFMT0dVRV9JVEVNX1RFTVBMQVRFIH0gZnJvbSAnLi4vdGVtcGxhdGVzLmpzJztcbmltcG9ydCBDT05GSUcgZnJvbSAnLi4vLi4vY29uZmlnLmpzJztcblxuY29uc3QgeyBjYXRhbG9ndWUgfSA9IENPTkZJRy5zZWxlY3RvcnM7XG5jb25zdCB7IHJvdXRlIH0gPSBDT05GSUcucm91dGVzLnByb2R1Y3RQYWdlO1xuXG5mdW5jdGlvbiByZW5kZXJDYXRhbG9ndWVJdGVtKHByb2R1Y3QpIHtcbiAgY29uc3QgY2F0YWxvZ3VlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjYXRhbG9ndWUud3JhcHBlcik7XG4gIGNvbnN0IHtcbiAgICBpZCwgaW1hZ2UsIG5hbWUsIHByaWNlLFxuICB9ID0gcHJvZHVjdDtcblxuICBjb25zdCBjYXRhbG9ndWVJdGVtID0gQ0FUQUxPR1VFX0lURU1fVEVNUExBVEUoaWQsIGltYWdlLCBuYW1lLCBwcmljZSk7XG4gIGNhdGFsb2d1ZUNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGNhdGFsb2d1ZUl0ZW0pO1xufVxuXG5mdW5jdGlvbiBtYWtlQ2F0YWxvZ3VlSXRlbXNDbGlja2FibGUocmVuZGVyKSB7XG4gIGNvbnN0IGNhdGFsb2d1ZUNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChjYXRhbG9ndWUuaXRlbSk7XG4gIGNhdGFsb2d1ZUNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICBjb25zdCBjbGlja2FibGVBcmVhID0gY2FyZC5xdWVyeVNlbGVjdG9yKGNhdGFsb2d1ZS5pbWcpO1xuICAgIGNsaWNrYWJsZUFyZWEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCB7IGlkIH0gPSBjYXJkLmRhdGFzZXQ7XG4gICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgYC8ke3JvdXRlfS8ke2lkfWApO1xuICAgICAgcmVuZGVyKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZW5kZXJDYXRhbG9ndWUoZGF0YSwgcmVuZGVyKSB7XG4gIFsuLi5kYXRhXS5mb3JFYWNoKChwcm9kdWN0KSA9PiB7XG4gICAgcmVuZGVyQ2F0YWxvZ3VlSXRlbShwcm9kdWN0KTtcbiAgfSk7XG4gIG1ha2VDYXRhbG9ndWVJdGVtc0NsaWNrYWJsZShyZW5kZXIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJDYXRhbG9ndWU7XG4iLCJpbXBvcnQgeyBQUklDRV9JTlBVVF9URU1QTEFURSwgQ0hFQ0tCT1hfVEVNUExBVEUgfSBmcm9tICcuLi90ZW1wbGF0ZXMuanMnO1xuaW1wb3J0IENPTkZJRyBmcm9tICcuLi8uLi9jb25maWcuanMnO1xuXG5jb25zdCB7IGZpbHRlcnMgfSA9IENPTkZJRztcbmNvbnN0IHsgZmlsdGVyIH0gPSBDT05GSUcuc2VsZWN0b3JzO1xuXG5jbGFzcyBGaWx0ZXJzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5maWx0ZXJzQ29udGFuaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZmlsdGVyLndyYXBwZXIpO1xuICAgIHRoaXMuY2hlY2tib3hlcyA9IHt9O1xuICB9XG5cbiAgZHJhd0ZpbHRlcnMoZGF0YSkge1xuICAgIHRoaXMuZHJhd1ByaWNlSW5wdXRSYW5nZShkYXRhKTtcbiAgICB0aGlzLmJ1aWxkQ2hlY2tib3hlcyhkYXRhKTtcbiAgICB0aGlzLmRyYXdDaGVja2JveGVzKCk7XG4gICAgdGhpcy5kcmF3UmVzZXRCdXR0b24odGhpcy5maWx0ZXJzQ29udGFuaW5lcik7XG4gIH1cblxuICBkcmF3UHJpY2VJbnB1dFJhbmdlKGRhdGEpIHtcbiAgICBjb25zdCBhbGxQcmljZXMgPSBkYXRhLm1hcCgoeyBwcmljZSB9KSA9PiBwcmljZSk7XG4gICAgY29uc3QgcHJpY2VzID0ge1xuICAgICAgbWluOiBNYXRoLm1pbiguLi5hbGxQcmljZXMpLFxuICAgICAgbWF4OiBNYXRoLm1heCguLi5hbGxQcmljZXMpLFxuICAgIH07XG4gICAgdGhpcy5maWx0ZXJzQ29udGFuaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIFBSSUNFX0lOUFVUX1RFTVBMQVRFKHByaWNlcy5taW4sIHByaWNlcy5tYXgpKTtcbiAgfVxuXG4gIGJ1aWxkQ2hlY2tib3hlcyhkYXRhKSB7XG4gICAgWy4uLmRhdGFdLmZvckVhY2goKHByb2R1Y3QpID0+IHtcbiAgICAgIGZpbHRlcnMuZm9yRWFjaCgoZmlsdGVyQmFzZSkgPT4ge1xuICAgICAgICBpZiAocHJvZHVjdFtmaWx0ZXJCYXNlXVxuICAgICAgICAgICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhpcy5jaGVja2JveGVzLCBmaWx0ZXJCYXNlKSkge1xuICAgICAgICAgIHRoaXMuY2hlY2tib3hlc1tmaWx0ZXJCYXNlXSA9IFtdO1xuICAgICAgICAgIHRoaXMuY2hlY2tib3hlc1tmaWx0ZXJCYXNlXS5wdXNoKHByb2R1Y3RbZmlsdGVyQmFzZV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb2R1Y3RbZmlsdGVyQmFzZV1cbiAgICAgICAgICAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmJpbmQodGhpcy5jaGVja2JveGVzLCBmaWx0ZXJCYXNlKVxuICAgICAgICAgICYmICF0aGlzLmNoZWNrYm94ZXNbZmlsdGVyQmFzZV0uaW5jbHVkZXMocHJvZHVjdFtmaWx0ZXJCYXNlXSkpIHtcbiAgICAgICAgICB0aGlzLmNoZWNrYm94ZXNbZmlsdGVyQmFzZV0ucHVzaChwcm9kdWN0W2ZpbHRlckJhc2VdKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBkcmF3Q2hlY2tib3hlcygpIHtcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLmNoZWNrYm94ZXMpKSB7XG4gICAgICBjb25zdCBmaWx0ZXJHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZmlsdGVyR3JvdXAuc2V0QXR0cmlidXRlKCdjbGFzcycsIGZpbHRlci5jb250YWluZXIpO1xuICAgICAgZmlsdGVyR3JvdXAuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLFxuICAgICAgICBgPGRpdiBjbGFzcz1cImZpbHRlcl9fZ3JvdXBfbGFiZWxcIj4ke2tleS50b1VwcGVyQ2FzZSgpfTwvZGl2PmApO1xuXG4gICAgICBjb25zdCBmaWx0ZXJHcm91cENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGZpbHRlckdyb3VwQ29udGVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZpbHRlcl9fZ3JvdXBfY29udGVudCcpO1xuXG4gICAgICB2YWx1ZS5zb3J0KCkuZm9yRWFjaCgoZmlsdGVyVmFsdWUpID0+IHtcbiAgICAgICAgZmlsdGVyR3JvdXBDb250ZW50Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgQ0hFQ0tCT1hfVEVNUExBVEUoa2V5LCBmaWx0ZXJWYWx1ZSkpO1xuICAgICAgfSk7XG5cbiAgICAgIGZpbHRlckdyb3VwLmFwcGVuZENoaWxkKGZpbHRlckdyb3VwQ29udGVudCk7XG5cbiAgICAgIHRoaXMuaW5pdEZpbHRlckdyb3VwQ29udGVudChmaWx0ZXJHcm91cCwgZmlsdGVyR3JvdXBDb250ZW50KTtcbiAgICAgIHRoaXMuZmlsdGVyc0NvbnRhbmluZXIuYXBwZW5kQ2hpbGQoZmlsdGVyR3JvdXApO1xuICAgIH1cbiAgfVxuXG4gIGRyYXdSZXNldEJ1dHRvbihjb250YWluZXIpIHtcbiAgICBjb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgJzxidXR0b24gY2xhc3M9XCJmaWx0ZXJfX2J1dHRvbl9yZXNldFwiPlJlc2V0IGZpbHRlcnM8L2J1dHRvbj4nKTtcbiAgfVxuXG4gIGluaXRGaWx0ZXJHcm91cENvbnRlbnQoZ3JvdXAsIGNvbnRlbnQpIHtcbiAgICBjb250ZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgY29uc3QgbGFiZWwgPSBncm91cC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZGl2JylbMF07XG5cbiAgICBsYWJlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IHsgZGlzcGxheSB9ID0gY29udGVudC5zdHlsZTtcbiAgICAgIGNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXkgPT09ICdub25lJyA/ICdibG9jaycgOiAnbm9uZSc7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmlsdGVycztcbiIsImltcG9ydCBDT05GSUcgZnJvbSAnLi4vLi4vY29uZmlnLmpzJztcbmltcG9ydCB7IEVSUk9SX1BBR0UgfSBmcm9tICcuLi90ZW1wbGF0ZXMuanMnO1xuXG5jb25zdCB7IGNvbnRlbnRJZCB9ID0gQ09ORklHLnJvdXRlcy5lcnJvclBhZ2U7XG5cbmZ1bmN0aW9uIHJlbmRlckVycm9yUGFnZSgpIHtcbiAgY29uc3QgZXJyb3JQYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGVudElkKTtcbiAgZXJyb3JQYWdlQ29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgRVJST1JfUEFHRSgpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyRXJyb3JQYWdlO1xuIiwiaW1wb3J0IHsgSE9NRVBBR0VfVEVNUExBVEUgfSBmcm9tICcuLi90ZW1wbGF0ZXMuanMnO1xuaW1wb3J0IENPTkZJRyBmcm9tICcuLi8uLi9jb25maWcuanMnO1xuXG5jb25zdCB7IGNvbnRlbnRJZCB9ID0gQ09ORklHLnJvdXRlcy5ob21lUGFnZTtcbmNvbnN0IHsgaG9tZSB9ID0gQ09ORklHLnNlbGVjdG9ycztcblxuZnVuY3Rpb24gcmVuZGVySG9tZVBhZ2UocmVuZGVyKSB7XG4gIGNvbnN0IGhvbWVwYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGVudElkKTtcbiAgaG9tZXBhZ2UuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBIT01FUEFHRV9URU1QTEFURSgpKTtcbiAgaW5pdFNlcml2ZVVybHMocmVuZGVyKTtcbn1cblxuZnVuY3Rpb24gaW5pdFNlcml2ZVVybHMocmVuZGVyRm4pIHtcbiAgY29uc3Qgc2VydmljZXNVcmxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChob21lLnNlcnZpY2VzKTtcbiAgc2VydmljZXNVcmxzLmZvckVhY2goKHVybCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlID0gdXJsLmNsYXNzTmFtZS5zcGxpdCgnaG9tZVBhZ2VfX2xpbmtfJylbMV07XG4gICAgdXJsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIGAvJHtyb3V0ZX1gKTtcbiAgICAgIHJlbmRlckZuKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJIb21lUGFnZTtcbiIsImltcG9ydCB7IE5BVkJBUl9URU1QTEFURSB9IGZyb20gJy4uL3RlbXBsYXRlcy5qcyc7XG5pbXBvcnQgQ09ORklHIGZyb20gJy4uLy4uL2NvbmZpZy5qcyc7XG5cbmNvbnN0IHsgcm91dGVzIH0gPSBDT05GSUc7XG5cbmZ1bmN0aW9uIGluaXROYXZiYXIobmF2YmFyLCByZW5kZXIpIHtcbiAgbmF2YmFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBzd2l0Y2ggKGUudGFyZ2V0LmNsYXNzTmFtZSkge1xuICAgIGNhc2UgJ25hdl9fbGlua19ob21lJzpcbiAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCBgJHtyb3V0ZXMuaG9tZVBhZ2Uucm91dGV9YCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICduYXZfX2xpbmtfYWJvdXQnOlxuICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIGAvJHtyb3V0ZXMuYWJvdXRQYWdlLnJvdXRlfWApO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbmF2X19saW5rX2NhdGFsb2d1ZSc6XG4gICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgYC8ke3JvdXRlcy5jYXRhbG9ndWVQYWdlLnJvdXRlfWApO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbmF2X19saW5rX2NhcnQnOlxuICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIGAvJHtyb3V0ZXMuY2FydFBhZ2Uucm91dGV9YCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICduYXZfX2xpbmtfbG9naW4nOlxuICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIGAvJHtyb3V0ZXMuYXV0aFBhZ2Uucm91dGV9YCk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJlbmRlcih3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyTmF2YmFyKHJlbmRlcikge1xuICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtbWFpbi1uYXYnKTtcbiAgbmF2YmFyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgTkFWQkFSX1RFTVBMQVRFKCkpO1xuICBpbml0TmF2YmFyKG5hdmJhciwgcmVuZGVyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyTmF2YmFyO1xuIiwiaW1wb3J0IHsgU0lOR0xFX1BBR0VfVEVNUExBVEUgfSBmcm9tICcuLi90ZW1wbGF0ZXMuanMnO1xuaW1wb3J0IENPTkZJRyBmcm9tICcuLi8uLi9jb25maWcuanMnO1xuXG5jb25zdCB7IGNvbnRlbnRJZCB9ID0gQ09ORklHLnJvdXRlcy5wcm9kdWN0UGFnZTtcbmNvbnN0IHsgcGFnZSB9ID0gQ09ORklHLnNlbGVjdG9ycztcblxuY2xhc3MgU2luZ2xlUGFnZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc2luZ2xlUGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRlbnRJZCk7XG4gICAgaWYgKFNpbmdsZVBhZ2UuaW5zdGFuY2UpIHtcbiAgICAgIHJldHVybiBTaW5nbGVQYWdlLmluc3RhbmNlO1xuICAgIH1cblxuICAgIFNpbmdsZVBhZ2UuaW5zdGFuY2UgPSB0aGlzO1xuICB9XG5cbiAgZHJhd1NpbmdsZVBhZ2UocHJvZHVjdCkge1xuICAgIGlmIChwcm9kdWN0KSB7XG4gICAgICB0aGlzLnJlc2V0UGFnZSgpO1xuICAgICAgdGhpcy5zaW5nbGVQYWdlQ29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgU0lOR0xFX1BBR0VfVEVNUExBVEUocHJvZHVjdCkpO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0UGFnZSgpIHtcbiAgICBjb25zdCBwYWdlQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocGFnZS5jb250ZW50KTtcbiAgICBpZiAocGFnZUNvbnRlbnQpIHtcbiAgICAgIHBhZ2VDb250ZW50LnJlbW92ZSgpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaW5nbGVQYWdlO1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuZXhwb3J0IGNvbnN0IEZPUk1fVEVNUExBVEUgPSAoKSA9PiBgXG4gIDxkaXYgY2xhc3M9XCJhdXRoX19mb3JtX3dyYXBwZXJcIj5cbiAgPHVsPlxuICAgIDxsaSBpZD1cImpzLXNpZ24taW4tbGlua1wiPlNpZ24gSW48L2xpPlxuICAgIDxsaSBpZD1cImpzLXNpZ24tdXAtbGlua1wiPlNpZ24gVXA8L2xpPlxuICA8L3VsPlxuICA8cCBjbGFzcz1cImF1dGhfX2Zvcm1fZXJyb3JcIj48L3A+XG4gIDxmb3JtIGlkPVwianMtc2lnbi1pbi1mb3JtXCIgbm92YWxpZGF0ZT5cbiAgICA8bGFiZWwgZm9yPVwiZW1haWxcIj5FbWFpbDo8L2xhYmVsPlxuICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIj5cbiAgICA8cCBjbGFzcz1cImVtYWlsLWVycm9yXCI+PC9wPlxuICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkOjwvbGFiZWw+XG4gICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiPlxuICAgIDxwIGNsYXNzPVwicGFzc3dvcmQtZXJyb3JcIj48L3A+XG4gICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2lnbiBpbjwvYnV0dG9uPlxuICA8L2Zvcm0+XG4gIDxmb3JtIGlkPVwianMtc2lnbi11cC1mb3JtXCIgbm92YWxpZGF0ZSBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCI+XG4gICAgPGxhYmVsIGZvcj1cIm5hbWVsXCI+TmFtZTo8L2xhYmVsPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCI+XG4gICAgPHAgY2xhc3M9XCJuYW1lLWVycm9yXCI+PC9wPlxuICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiPkVtYWlsOjwvbGFiZWw+XG4gICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiPlxuICAgIDxwIGNsYXNzPVwiZW1haWwtZXJyb3JcIj48L3A+XG4gICAgPGxhYmVsIGZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ6PC9sYWJlbD5cbiAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCI+XG4gICAgPHAgY2xhc3M9XCJwYXNzd29yZC1lcnJvclwiPjwvcD5cbiAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TaWduIFVwPC9idXR0b24+XG4gIDwvZm9ybT5cbiAgPC9kaXY+YDtcblxuZXhwb3J0IGNvbnN0IENBUkRfT1JERVJfVEVNUExBVEUgPSAoKSA9PiBgXG48ZGl2IGNsYXNzPVwiY2FydFBhZ2VfX29yZGVyX3dyYXBwZXJcIj5cbiAgPHAgY2xhc3M9XCJjYXJ0UGFnZV9fb3JkZXJfbWVzc2FnZVwiPjwvcD5cbiAgPGRpdiBjbGFzcz1cImNhcnRQYWdlX191c2VyX2luZm9cIj5cbiAgICA8aDM+VXNlciBJbmZvPC9oMz5cbiAgICA8ZGl2IGNsYXNzPVwiY2FydFBhZ2VfX3VzZXJfZGF0YVwiPjwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdj5cbiAgICA8aDM+VG90YWw8L2gzPlxuICAgIDxkaXYgY2xhc3M9XCJjYXJ0UGFnZV9fdG90YWxcIj5ObyBpdGVtcyBjaG9zZW48L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXY+XG4gICAgPGgzPk9yZGVyIGRldGFpbHM8L2gzPlxuICAgIDxkaXYgY2xhc3M9XCJjYXJ0UGFnZV9fZGV0YWlsc1wiPjwvZGl2PlxuICA8L2Rpdj5cbiAgPGJ1dHRvbiBjbGFzcz1cImNhcnRQYWdlX19vcmRlcl9idXlcIj5CdXk8L2J1dHRvbj5cbjwvZGl2PmA7XG5cbmV4cG9ydCBjb25zdCBDQVRBTE9HVUVfSVRFTV9URU1QTEFURSA9IChpZCwgaW1hZ2UsIG5hbWUsIHByaWNlKSA9PiBgXG48ZGl2IGNsYXNzPVwiY2F0YWxvZ3VlX19pdGVtXCIgZGF0YS1pZD1cIiR7aWR9XCI+XG4gIDxkaXYgY2xhc3M9XCJjYXRhbG9ndWVfX2l0ZW1faW1nd3JhcFwiPlxuICAgIDxpbWcgY2xhc3M9XCJjYXRhbG9ndWVfX2l0ZW1fcGhvdG9cIiBzcmM9LyR7aW1hZ2V9PlxuICAgIDxoNSBjbGFzcz1cImNhdGFsb2d1ZV9faXRlbV9uYW1lXCI+JHtuYW1lfTwvaDU+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiY2F0YWxvZ3VlX19pdGVtX2luZm9cIj5cbiAgICA8cCBjbGFzcz1cImNhdGFsb2d1ZV9faXRlbV9wcmljZVwiPiR7cHJpY2V9JDwvcD5cbiAgICA8YnV0dG9uIGNsYXNzPVwiY2F0YWxvZ3VlX19pdGVtX2FkZFwiPkFkZCB0byBjYXJ0PC9idXR0b24+XG4gIDwvZGl2PlxuPC9kaXY+YDtcblxuZXhwb3J0IGNvbnN0IFBSSUNFX0lOUFVUX1RFTVBMQVRFID0gKG1pbiwgbWF4KSA9PiBgXG4gIDxkaXYgY2xhc3M9XCJmaWx0ZXItZ3JvdXAtbGFiZWxcIj5cbiAgICA8aDM+UFJJQ0U6PC9oMz5cbiAgICA8ZGl2IGNsYXNzPVwiZmlsdGVyX19ncm91cF9jb250ZW50XCI+XG4gICAgICA8c3Bhbj4ke21pbn08L3NwYW4+XG4gICAgICA8aW5wdXQgdHlwZT1cInJhbmdlXCIgY2xhc3M9XCJmaWx0ZXJfX2dyb3VwX3ByaWNlXCIgbmFtZT1cInByaWNlXCIgXG4gICAgICAgIHZhbHVlPVwiJHttYXh9XCIgbWluPVwiJHttaW59XCIgbWF4PVwiJHttYXh9XCI+XG4gICAgICA8c3Bhbj4ke21heH08L3NwYW4+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmlsdGVyX19wcmljZV9jdXJyZW50XCI+PGRpdj4gXG4gICAgPC9kaXY+XG4gIDwvZGl2PmA7XG5cbmV4cG9ydCBjb25zdCBDSEVDS0JPWF9URU1QTEFURSA9IChmaWx0ZXJOYW1lLCBmaWx0ZXJWYWx1ZSkgPT4gYFxuICA8ZGl2IGNsYXNzPVwiZmlsdGVyX19ncm91cF9jaGVja2JveFwiIHZhbHVlPSR7ZmlsdGVyVmFsdWV9PlxuICAgIDxsYWJlbCBmb3I9XCIke2ZpbHRlclZhbHVlfVwiPiR7ZmlsdGVyVmFsdWV9PC9sYWJlbD5cbiAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cIiR7ZmlsdGVyTmFtZX1cIiB2YWx1ZT1cIiR7ZmlsdGVyVmFsdWV9XCIgLz5cbiAgPC9kaXY+YDtcblxuZXhwb3J0IGNvbnN0IENBUlRfSVRFTV9URU1QTEFURSA9IChpZCwgdmFsdWUsIG51bWJlckF2YWlsYWJsZSwgaW1hZ2UsIG5hbWUsIHByaWNlKSA9PiBgXG48ZGl2IGNsYXNzPVwiY2FydF9faXRlbV93cmFwcGVyXCIgZGF0YS1pZD1cIiR7aWR9XCI+XG4gIDxkaXYgY2xhc3M9XCJjYXJ0X19pdGVtX2RldGFpbHNcIj5cbiAgICA8aW1nIGNsYXNzPVwiY2FydF9faXRlbV9pbWFnZVwiIHNyYz1cIi8ke2ltYWdlfVwiIC8+XG4gICAgPGg1IGNsYXNzPVwiY2FydF9faXRlbV9uYW1lXCI+JHtuYW1lfTwvaDU+XG4gICAgPHAgY2xhc3M9XCJjYXJ0X19pdGVtX3ByaWNlXCIgZGF0YS12YWx1ZT1cIiR7cHJpY2V9XCI+UHJpY2U6ICR7cHJpY2V9JDwvcD5cbiAgPC9kaXY+XG4gIDxmb3JtIGNsYXNzPVwiY2FydF9faXRlbV9pbnB1dFwiPlxuICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImNhcnRfX2l0ZW1fY2hvb3NlXCIvPlxuICAgIDxpbnB1dCBjbGFzcz1cImNhcnRfX2l0ZW1fcXVhbnRpdHlcIiBkYXRhLWlkPVwiJHtpZH1cIiB0eXBlPVwibnVtYmVyXCIgdmFsdWU9XCIke3ZhbHVlfVwiIG1pbj1cIjFcIiBtYXg9XCIke251bWJlckF2YWlsYWJsZX1cIi8+XG4gIDwvZm9ybT5cbiAgPGJ1dHRvbiBjbGFzcz1cImNhcnRfX2l0ZW1fZGVsZXRlXCIgZGF0YS1pZD1cIiR7aWR9XCI+RGVsZXRlPC9idXR0b24+XG4gIDwvZGl2PmA7XG5cbmV4cG9ydCBjb25zdCBOQVZCQVJfVEVNUExBVEUgPSAoKSA9PiBgXG48ZGl2IGNsYXNzPVwibmF2X193cmFwcGVyXCI+XG4gIDx1bD5cbiAgICA8bGkgY2xhc3M9XCJuYXZfX2xpbmtfaG9tZVwiPkhvbWU8L2xpPlxuICAgIDxsaSBjbGFzcz1cIm5hdl9fbGlua19hYm91dFwiPkFib3V0PC9saT5cbiAgICA8bGkgY2xhc3M9XCJuYXZfX2xpbmtfY2F0YWxvZ3VlXCI+Q2F0YWxvZ3VlPC9saT5cbiAgPC91bD5cbiAgPHVsPlxuICAgIDxsaSBjbGFzcz1cIm5hdl9fbGlua19sb2dpblwiPkxvZyBpbjwvbGk+XG4gICAgPGxpIGNsYXNzPVwibmF2X19saW5rX2xvZ291dFwiPkxvZyBvdXQ8L2xpPlxuICAgIDxsaT48aW1nIGNsYXNzPVwibmF2X19saW5rX2NhcnRcIiBzcmM9XCIvYXNzZXRzL2ltZy8xMjYwODMucG5nXCI+PC9saT5cbiAgPC91bD5cbjwvZGl2PmA7XG5cbmV4cG9ydCBjb25zdCBTSU5HTEVfUEFHRV9URU1QTEFURSA9IChwcm9kdWN0KSA9PiBgXG4gIDxkaXYgY2xhc3M9XCJzaW5nbGVQYWdlX19jb250ZW50XCI+XG4gICAgPGRpdiBjbGFzcz1cInNpbmdsZVBhZ2VfX2NvbnRlbnRfbWFpblwiPiBcbiAgICA8ZGl2IGNsYXNzPVwic2luZ2xlUGFnZV9faW1nX2NvbnRhaW5lclwiPlxuICAgICAgPGltZyBjbGFzcz1cInNpbmdsZVBhZ2VfY29udGVudF9pbWdcIiBzcmM9XCIvJHtwcm9kdWN0LmltYWdlfVwiPlxuICAgIDwvZGl2PlxuICAgIDxoNT4ke3Byb2R1Y3QubmFtZX08L2g1PlxuICAgIDxwPiR7cHJvZHVjdC5wcmljZX0kPC9wPlxuICAgIDxkaXYgY2xhc3M9XCJzaW5nbGVQYWdlX19pdGVtX2FkZFwiPlxuICAgICAgPGJ1dHRvbj5BZGQgdG8gY2FydDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwic2luZ2xlUGFnZV9jb250ZW50X2luZm9cIj5cbiAgICA8ZGl2IGNsYXNzPVwic2luZ2xlUGFnZV9jb250ZW50X2Jhc2VcIj5cbiAgICAgIDxwPjxiPkJyYW5kPC9iPjogJHtwcm9kdWN0LmJyYW5kfTwvcD5cbiAgICAgIDxwPjxiPk1hbnVmYWN0dXJlcjwvYj46ICR7cHJvZHVjdC5tYW51ZmFjdHVyZXJ9PC9wPlxuICAgICAgPHA+PGI+Vm9sdW1lPC9iPjogJHtwcm9kdWN0LnZvbHVtZX08L3A+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInNpbmdsZVBhZ2VfY29udGVudF9kZXNjXCI+XG4gICAgICA8cD4ke3Byb2R1Y3QuZGVzY3JpcHRpb259PC9wPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJzaW5nbGVQYWdlX2NvbnRlbnRfc3BlY1wiPlxuICAgICAgPHA+PGI+U3Bpcml0IHR5cGU8L2I+OiAke3Byb2R1Y3RbJ3NwaXJpdCB0eXBlJ119PC9wPlxuICAgICAgPHA+PGI+Q2F0ZWdvcnk8L2I+OiAke3Byb2R1Y3QuY2F0ZWdvcnl9PC9wPlxuICAgICAgPHA+PGI+UGFja2FnZTwvYj46ICR7cHJvZHVjdC5wYWNrYWdlfTwvcD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDwvZGl2PlxuYDtcblxuZXhwb3J0IGNvbnN0IEhPTUVQQUdFX1RFTVBMQVRFID0gKCkgPT4gYFxuICA8ZGl2IGNsYXNzPVwibGVhZF9fYmFubmVyXCI+XG4gICAgPGltZyBzcmM9XCIvYXNzZXRzL2ltZy9ob21lcGFnZS9sZWFkLWJhbm5lci5qcGdcIiAvPlxuICAgIDxkaXYgY2xhc3M9XCJiYW5uZXJfX2NvbnRlbnRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ3cmFwcGVyXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwidGl0bGVcIj5Pbmx5IHRydXN0ZWQgc3VwcGxpZXJzPC9zcGFuPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuPC9saT5cbiAgICAgICAgICA8bGk+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC48L2xpPlxuICAgICAgICAgIDxsaT5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LjwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxzZWN0aW9uIGNsYXNzPVwiaG9tZVBhZ2VfX3NlcnZpY2VzXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwid3JhcHBlclwiPlxuICAgICAgPGgxPk91ciBzZXJ2aWNlczwvaDE+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJob21lUGFnZV9fbGlua19hYm91dFwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL2ltZy9ob21lcGFnZS9hYm91dC5wbmdcIiAvPlxuICAgICAgICAgICAgPHA+QWJvdXQgdXM8L3A+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJob21lUGFnZV9fbGlua19jYXRhbG9ndWVcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWcvaG9tZXBhZ2Uvc2hvcC5wbmdcIiAvPlxuICAgICAgICAgICAgPHA+U2hvcCBub3c8L3A+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJob21lUGFnZV9fbGlua19sb2dpblwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL2ltZy9ob21lcGFnZS9qb2luLnBuZ1wiIC8+XG4gICAgICAgICAgICA8cD5Kb2luPC9wPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gIDxkaXYgY2xhc3M9XCJzZWNvbmRfX2Jhbm5lclwiPlxuICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWcvaG9tZXBhZ2Uvc2Vjb25kLWJhbm5lci5qcGdcIiAvPlxuICAgIDxkaXYgY2xhc3M9XCJiYW5uZXJfX2NvbnRlbnRcIj5cbiAgICAgICA8ZGl2IGNsYXNzPVwid3JhcHBlclwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInRpdGxlXCI+RXhjZWxsZW50IHNlcnZpY2U8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwidGl0bGVcIj5GYXN0IGRlbGl2ZXJ5PC9zcGFuPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuPC9saT5cbiAgICAgICAgICA8bGk+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC48L2xpPlxuICAgICAgICAgIDxsaT5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LjwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxzZWN0aW9uIGNsYXNzPVwiaG9tZVBhZ2VfX3Byb2R1Y3RzXCI+XG4gICAgPGRpdiBjbGFzcz1cIndyYXBwZXJcIj5cbiAgICAgIDxoMT5Qb3B1bGFyIGJyYW5kczwvaDE+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaT48aW1nIHNyYz1cIi9hc3NldHMvaW1nL2hvbWVwYWdlL2JhbGxhbnRpbmVzLmpwZ1wiIG5hbWU9XCJicmFuZFwiIGRhdGEtdmFsdWU9XCJCYWxsYW50aW5lJ3NcIiAvPjwvbGk+XG4gICAgICAgIDxsaT48aW1nIHNyYz1cIi9hc3NldHMvaW1nL2hvbWVwYWdlL2JsYWNrLXZlbHZldC5qcGdcIiBuYW1lPVwiYnJhbmRcIiBkYXRhLXZhbHVlPVwiQmxhY2sgVmVsdmV0XCIgLz48L2xpPlxuICAgICAgICA8bGk+PGltZyBzcmM9XCIvYXNzZXRzL2ltZy9ob21lcGFnZS9qYWNrLWRhbmllbHMuanBnXCIgbmFtZT1cImJyYW5kXCIgZGF0YS12YWx1ZT1cIkphY2sgRGFuaWVsJ3NcIiAvPjwvbGk+XG4gICAgICAgIDxsaT48aW1nIHNyYz1cIi9hc3NldHMvaW1nL2hvbWVwYWdlL2phbWVzb24uanBnXCIgbmFtZT1cImJyYW5kXCIgZGF0YS12YWx1ZT1cIkphbWVzb25cIi8+PC9saT5cbiAgICAgICAgPGxpPjxpbWcgc3JjPVwiL2Fzc2V0cy9pbWcvaG9tZXBhZ2UvbGF1ZGVycy5qcGdcIiBuYW1lPVwiYnJhbmRcIiBkYXRhLXZhbHVlPVwiTGF1ZGVyJ3NcIiAvPjwvbGk+XG4gICAgICAgIDxsaT48aW1nIHNyYz1cIi9hc3NldHMvaW1nL2hvbWVwYWdlL2ppbS1iZWFtLmpwZ1wiIG5hbWU9XCJicmFuZFwiIGRhdGEtdmFsdWU9XCJKaW0gQmVhbVwiLz48L2xpPlxuICAgICAgICA8bGk+PGltZyBzcmM9XCIvYXNzZXRzL2ltZy9ob21lcGFnZS9qYWdlcm1laXN0ZXIuanBnXCIgbmFtZT1cImJyYW5kXCIgZGF0YS12YWx1ZT1cIkphZ2VybWVpc3RlclwiLz48L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgPC9zZWN0aW9uPmA7XG5cblxuZXhwb3J0IGNvbnN0IEFCT1VUX1BBR0VfVEVNUExBVEUgPSAoKSA9PiBgXG4gIDxkaXYgY2xhc3M9XCJzZWNvbmRfX2Jhbm5lclwiPlxuICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWcvYWJvdXQvYWJvdXQuanBnXCIgLz5cbiAgICA8ZGl2IGNsYXNzPVwiYmFubmVyX19jb250ZW50XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwid3JhcHBlclwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInRpdGxlXCI+QW5vdGhlciBsb3JlbSE8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxzZWN0aW9uIGNsYXNzPVwiYWJvdXRQYWdlX19jb250ZW50XCI+XG4gICAgPGgxPkFib3V0IHVzPC9oMT5cbiAgICA8ZGl2PlwiQXQgdmVybyBlb3MgZXQgYWNjdXNhbXVzIGV0IGl1c3RvIG9kaW8gZGlnbmlzc2ltb3MgZHVjaW11cyBxdWkgYmxhbmRpdGlpcyBwcmFlc2VudGl1bSB2b2x1cHRhdHVtIGRlbGVuaXRpXG4gICAgIGF0cXVlIGNvcnJ1cHRpIHF1b3MgZG9sb3JlcyBldCBxdWFzIG1vbGVzdGlhcyBleGNlcHR1cmkgc2ludCBvY2NhZWNhdGkgY3VwaWRpdGF0ZSBub24gcHJvdmlkZW50LFxuICAgICAgc2ltaWxpcXVlIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0aWEgYW5pbWksIGlkIGVzdCBsYWJvcnVtIGV0IGRvbG9ydW0gZnVnYS5cbiAgICAgIEV0IGhhcnVtIHF1aWRlbSByZXJ1bSBmYWNpbGlzIGVzdCBldCBleHBlZGl0YSBkaXN0aW5jdGlvLiBOYW0gbGliZXJvIHRlbXBvcmUsIGN1bSBzb2x1dGEgbm9iaXMgZXN0IGVsaWdlbmRpXG4gICAgICAgb3B0aW8gY3VtcXVlIG5paGlsIGltcGVkaXQgcXVvIG1pbnVzIGlkIHF1b2QgbWF4aW1lIHBsYWNlYXQgZmFjZXJlIHBvc3NpbXVzLCBvbW5pcyB2b2x1cHRhcyBhc3N1bWVuZGEgZXN0LFxuICAgICAgICBvbW5pcyBkb2xvciByZXBlbGxlbmR1cy4gVGVtcG9yaWJ1cyBhdXRlbSBxdWlidXNkYW0gZXQgYXV0IG9mZmljaWlzIGRlYml0aXMgYXV0IHJlcnVtIG5lY2Vzc2l0YXRpYnVzIHNhZXBlIFxuICAgICAgICBldmVuaWV0IHV0IGV0IHZvbHVwdGF0ZXMgcmVwdWRpYW5kYWUgc2ludCBldCBtb2xlc3RpYWUgbm9uIHJlY3VzYW5kYWUuIEl0YXF1ZSBlYXJ1bSByZXJ1bSBoaWMgdGVuZXR1ciBhIHNhcGllbnRlIGRlbGVjdHVzLFxuICAgICAgICAgdXQgYXV0IHJlaWNpZW5kaXMgdm9sdXB0YXRpYnVzIG1haW9yZXMgYWxpYXMgY29uc2VxdWF0dXIgYXV0IHBlcmZlcmVuZGlzIGRvbG9yaWJ1cyBhc3BlcmlvcmVzIHJlcGVsbGF0LlwiXG4gICAgPC9kaXY+XG4gIDwvc2VjdGlvbj5cbiAgPHNlY3Rpb24gY2xhc3M9XCJhYm91dFBhZ2VfX2FydGljbGVzXCI+XG4gICAgPGRpdiBjbGFzcz1cIndyYXBwZXJcIj5cbiAgICAgIDxoMT5Qb3B1bGFyIGRyaW5rczwvaDE+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvaW1nL2Fib3V0L3dpbmUuanBnXCI+PC9pbWc+XG4gICAgICAgICAgPGg1PkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0PC9oNT5cbiAgICAgICAgICA8ZGl2PkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIFxuICAgICAgICAgIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSxcbiAgICAgICAgICAgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBcbiAgICAgICAgICAgRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuXG4gICAgICAgICAgICBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhIGRlc2VydW50IG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL2ltZy9hYm91dC93aGlza2V5LnBuZ1wiPjwvaW1nPlxuICAgICAgICAgIDxoNT5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldDwvaDU+XG4gICAgICAgICAgPGRpdj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCBcbiAgICAgICAgICB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sXG4gICAgICAgICAgIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gXG4gICAgICAgICAgIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLlxuICAgICAgICAgICAgRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWcvYWJvdXQvbWFydGluaS5qcGdcIj48L2ltZz5cbiAgICAgICAgICA8aDU+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQ8L2g1PlxuICAgICAgICAgIDxkaXY+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgXG4gICAgICAgICAgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLFxuICAgICAgICAgICBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIFxuICAgICAgICAgICBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci5cbiAgICAgICAgICAgIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvaW1nL2Fib3V0L3RlcXVpbGEuanBnXCI+PC9pbWc+XG4gICAgICAgICAgPGg1PkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0PC9oNT5cbiAgICAgICAgICA8ZGl2PkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIFxuICAgICAgICAgIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSxcbiAgICAgICAgICBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIFxuICAgICAgICAgIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLlxuICAgICAgICAgICAgRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWcvYWJvdXQvYmVlci5qcGdcIj48L2ltZz5cbiAgICAgICAgICA8aDU+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQ8L2g1PlxuICAgICAgICAgIDxkaXY+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgXG4gICAgICAgICAgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLFxuICAgICAgICAgIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gXG4gICAgICAgICAgRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuXG4gICAgICAgICAgICBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhIGRlc2VydW50IG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvaW1nL2Fib3V0L2NvZ25hYy5qcGdcIj48L2ltZz5cbiAgICAgICAgICA8aDU+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQ8L2g1PlxuICAgICAgICAgIDxkaXY+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgXG4gICAgICAgICAgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLFxuICAgICAgICAgIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gXG4gICAgICAgICAgRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuXG4gICAgICAgICAgICBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhIGRlc2VydW50IG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gIDwvc2VjdGlvbj5gO1xuXG5leHBvcnQgY29uc3QgRVJST1JfUEFHRSA9ICgpID0+IGBcbiAgPGRpdj5cbiAgICA8aDE+U29tZXRoaW5nIHdlbnQgd3JvbmchPC9oMT5cbiAgICA8aDU+UGFnZSBkb2Vzbid0IGV4aXN0ID0oPC9oNT5cbiAgICA8aW1nIHNyYz1cIi9hc3NldHMvaW1nL2Vycm9yL2Vycm9yLmpwZ1wiIC8+XG4gIDwvZGl2PlxuICBgO1xuIiwiY29uc3QgQ09ORklHID0ge1xuICBhcGk6ICdodHRwczovL215LWpzb24tc2VydmVyLnR5cGljb2RlLmNvbS9hbmFraHUvZGVtbycsXG4gIHJvdXRlczoge1xuICAgIGhvbWVQYWdlOiB7IHJvdXRlOiAnLycsIGNvbnRlbnRJZDogJ2pzLWhvbWVwYWdlJyB9LFxuICAgIGFib3V0UGFnZTogeyByb3V0ZTogJ2Fib3V0JywgY29udGVudElkOiAnanMtYWJvdXQtcGFnZScgfSxcbiAgICBjYXRhbG9ndWVQYWdlOiB7IHJvdXRlOiAnY2F0YWxvZ3VlJywgY29udGVudElkOiAnanMtY2F0YWxvZ3VlLXBhZ2UnIH0sXG4gICAgcHJvZHVjdFBhZ2U6IHsgcm91dGU6ICdwcm9kdWN0JywgY29udGVudElkOiAnanMtc2luZ2xlLXBhZ2UnIH0sXG4gICAgZXJyb3JQYWdlOiB7IHJvdXRlOiAnNDA0JywgY29udGVudElkOiAnanMtZXJyb3ItcGFnZScgfSxcbiAgICBhdXRoUGFnZTogeyByb3V0ZTogJ2xvZ2luJywgY29udGVudElkOiAnanMtYXV0aC1wYWdlJyB9LFxuICAgIGNhcnRQYWdlOiB7IHJvdXRlOiAnY2FydCcsIGNvbnRlbnRJZDogJ2pzLWNhcnQtcGFnZScgfSxcbiAgfSxcbiAgZmlsdGVyczogWydicmFuZCcsICd2b2x1bWUnLCAnbWFudWZhY3R1cmVyJywgJ2NhdGVnb3J5JywgJ3BhY2thZ2UnLCAnc3Bpcml0IHR5cGUnXSxcbiAgdmFsaWRhdGlvblJ1bGVzOiB7XG4gICAgbmFtZToge1xuICAgICAgbWluTGVuOiAzLFxuICAgICAgbWF4TGVuOiAyMCxcbiAgICAgIG9ubHlOdW1iZXJzQW5kTGV0dGVyczogdHJ1ZSxcbiAgICAgIGlzTm90RW1wdHk6IHRydWUsXG4gICAgfSxcbiAgICBlbWFpbDoge1xuICAgICAgaXNOb3RFbXB0eTogdHJ1ZSxcbiAgICAgIGlzVmFsaWRFbWFpbDogdHJ1ZSwgXG4gICAgfSxcbiAgICBwYXNzd29yZDoge1xuICAgICAgbWluTGVuOiA2LFxuICAgICAgbWF4TGVuOiAyMCxcbiAgICAgIG9ubHlOdW1iZXJzQW5kTGV0dGVyczogdHJ1ZSxcbiAgICAgIGlzTm90RW1wdHk6IHRydWUsXG4gICAgfSxcbiAgfSxcbiAgc2VsZWN0b3JzOiB7XG4gICAgY2FydDoge1xuICAgICAgd3JhcHBlcjogJy5jYXJ0UGFnZV9fY2FydF93cmFwcGVyJyxcbiAgICAgIG9yZGVyOiAnLmNhcnRQYWdlX19jYXJ0X29yZGVyJyxcbiAgICAgIGNvbnRlbnQ6ICcuY2FydFBhZ2VfX2NvbnRlbnQnLFxuICAgICAgaXRlbTogJy5jYXJ0X19pdGVtX3dyYXBwZXInLFxuICAgICAgdG90YWw6ICcuY2FydFBhZ2VfX3RvdGFsJyxcbiAgICAgIGRldGFpbHM6ICcuY2FydFBhZ2VfX2RldGFpbHMnLFxuICAgICAgdXNlckluZm86ICcuY2FydFBhZ2VfX3VzZXJfaW5mbycsXG4gICAgICB1c2VyRGF0YTogJy5jYXJ0UGFnZV9fdXNlcl9kYXRhJyxcbiAgICAgIG9yZGVyTWVzc2FnZTogJy5jYXJ0UGFnZV9fb3JkZXJfbWVzc2FnZScsXG4gICAgICBpbnB1dDogJy5jYXJ0X19pdGVtX2lucHV0JyxcbiAgICAgIGRlbGV0ZTogJy5jYXJ0X19pdGVtX2RlbGV0ZScsXG4gICAgICBjaG9vc2U6ICcuY2FydF9faXRlbV9jaG9vc2UnLFxuICAgICAgbmFtZTogJy5jYXJ0X19pdGVtX25hbWUnLFxuICAgICAgcHJpY2U6ICcuY2FydF9faXRlbV9wcmljZScsXG4gICAgICBxdWFudGl0eTogJy5jYXJ0X19pdGVtX3F1YW50aXR5JyxcbiAgICAgIGJ1eTogJy5jYXJ0UGFnZV9fb3JkZXJfYnV5JyxcbiAgICB9LFxuICAgIGNhdGFsb2d1ZToge1xuICAgICAgaXRlbTogJy5jYXRhbG9ndWVfX2l0ZW0nLFxuICAgICAgYWRkOiAnLmNhdGFsb2d1ZV9faXRlbV9hZGQnLFxuICAgICAgaW1nOiAnLmNhdGFsb2d1ZV9faXRlbV9pbWd3cmFwJyxcbiAgICAgIHdyYXBwZXI6ICcucHJvZHVjdFBhZ2VfX2NhdGFsb2d1ZScsXG4gICAgfSxcbiAgICBmaWx0ZXI6IHtcbiAgICAgIHdyYXBwZXI6ICcucHJvZHVjdFBhZ2VfX2ZpbHRlcicsXG4gICAgICBjb250YWluZXI6ICcuY2F0YWxvZ3VlX19maWx0ZXJfZ3JvdXAnLFxuICAgICAgbGFiZWw6ICcuZmlsdGVyX19ncm91cF9sYWJlbCcsXG4gICAgICBjb250ZW50OiAnLmZpbHRlcl9fZ3JvdXBfY29udGVudCcsXG4gICAgICBjdXJyZW50UHJpY2U6ICcuZmlsdGVyX19wcmljZV9jdXJyZW50JyxcbiAgICAgIHByaWNlOiAnLmZpbHRlcl9fZ3JvdXBfcHJpY2UnLFxuICAgICAgY2hlY2tib3g6ICcuZmlsdGVyX19ncm91cF9jaGVja2JveCBpbnB1dCcsXG4gICAgICByZXNldDogJy5maWx0ZXJfX2J1dHRvbl9yZXNldCcsXG4gICAgfSxcbiAgICBuYXY6IHtcbiAgICAgIGxvZ291dDogJy5uYXZfX2xpbmtfbG9nb3V0JyxcbiAgICAgIGxvZ2luOiAnLm5hdl9fbGlua19sb2dpbicsXG4gICAgfSxcbiAgICBhdXRoOiB7XG4gICAgICBlcnJvcjogJy5hdXRoX19mb3JtX2Vycm9yJyxcbiAgICB9LFxuICAgIGhvbWU6IHtcbiAgICAgIHNlcnZpY2VzOiAnLmhvbWVQYWdlX19zZXJ2aWNlcyBsaScsXG4gICAgICBpbWc6ICcuaG9tZVBhZ2VfX3Byb2R1Y3RzIGltZycsXG4gICAgfSxcbiAgICBwYWdlOiB7XG4gICAgICBjb250ZW50OiAnLnNpbmdsZVBhZ2VfX2NvbnRlbnQnLFxuICAgIH0sXG4gICAgZm9ybXM6IHtcbiAgICAgIHNpZ25JbjogJ2pzLXNpZ24taW4tZm9ybScsXG4gICAgICBzaWduVXA6ICdqcy1zaWduLXVwLWZvcm0nLFxuICAgIH0sXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDT05GSUc7XG4iLCJpbXBvcnQgQ09ORklHIGZyb20gJy4vY29uZmlnLmpzJztcbmltcG9ydCAnLi4vZGlzdC9pbmRleC5odG1sJztcbmltcG9ydCAnLi4vZGlzdC9hc3NldHMvc3R5bGVzL3Njc3Mvc3R5bGVzLnNjc3MnO1xuaW1wb3J0IFJvdXRlciBmcm9tICcuL21haW4vUm91dGVyLmpzJztcbmltcG9ydCBSZW5kZXJlciBmcm9tICcuL21haW4vUmVuZGVyZXIuanMnO1xuaW1wb3J0IEZpbHRlclNlcnZpY2UgZnJvbSAnLi9tYWluL0ZpbHRlclNlcnZpY2UuanMnO1xuaW1wb3J0IENhcnRTZXJ2aWNlIGZyb20gJy4vbWFpbi9DYXJ0U2VydmljZS5qcyc7XG5pbXBvcnQgQ2FydE9ic2VydmVyIGZyb20gJy4vbWFpbi9DYXJ0T2JzZXZlci5qcyc7XG5pbXBvcnQgRm9ybVNlcnZpY2UgZnJvbSAnLi9tYWluL0Zvcm1TZXJ2aWNlLmpzJztcbmltcG9ydCBBdXRoU2VydmljZSBmcm9tICcuL21haW4vQXV0aFNlcnZpY2UuanMnO1xuaW1wb3J0IHsgbWFrZVJlcXVlc3QgfSBmcm9tICcuL21haW4vdXRpbHMvbWFrZVJlcXVlc3QuanMnO1xuXG5cbmNsYXNzIEFwcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucHJvZHVjdHMgPSBbXTtcbiAgICB0aGlzLnJvdXRlciA9IG5ldyBSb3V0ZXIoKTtcbiAgICB0aGlzLmZpbHRlclNlcnZpY2UgPSBuZXcgRmlsdGVyU2VydmljZSgpO1xuICAgIHRoaXMuY2FydFNlcnZpY2UgPSBuZXcgQ2FydFNlcnZpY2UoKTtcbiAgICB0aGlzLmNhcnRPYnNlcnZlciA9IG5ldyBDYXJ0T2JzZXJ2ZXIodGhpcy5yb3V0ZXIpO1xuICAgIHRoaXMuYXV0aFNlcnZpY2UgPSBuZXcgQXV0aFNlcnZpY2UodGhpcy5yb3V0ZXIsIHRoaXMuY2FydFNlcnZpY2UpO1xuICAgIHRoaXMuZm9ybVNlcnZpY2UgPSBuZXcgRm9ybVNlcnZpY2UodGhpcy5yb3V0ZXIsIHRoaXMuYXV0aFNlcnZpY2UpO1xuICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIodGhpcy5yb3V0ZXIsIHRoaXMuZmlsdGVyU2VydmljZSwgdGhpcy5jYXJ0U2VydmljZSwgdGhpcy5jYXJ0T2JzZXJ2ZXIpO1xuICAgIHRoaXMuZmlsdGVyU2VydmljZS5zdWJzY3JpYmUodGhpcy5vbkZpbHRlckNoYW5nZS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmNhcnRTZXJ2aWNlLnN1YnNjcmliZSh0aGlzLm9uQ2FydENoYW5nZS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgbWFrZVJlcXVlc3QoJ3Byb2R1Y3RzJywgJ0dFVCcpXG4gICAgICAudGhlbigoZGF0YSkgPT4gZGF0YS5qc29uKCkpXG4gICAgICAudGhlbigocHJvZHVjdHMpID0+IHtcbiAgICAgICAgdGhpcy5wcm9kdWN0cyA9IHByb2R1Y3RzO1xuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5pbml0Um91dGVyKCk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuaW5pdEFwcCh0aGlzLnByb2R1Y3RzKTtcbiAgICAgICAgdGhpcy5yb3V0ZXIucmVuZGVyUm91dGVDb250ZW50KHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmZpbHRlclNlcnZpY2UuaW5pdCgpO1xuICAgICAgICB0aGlzLmNhcnRTZXJ2aWNlLmluaXQoKTtcbiAgICAgICAgdGhpcy5mb3JtU2VydmljZS5pbml0QXV0aEZvcm1zKCk7XG4gICAgICAgIHRoaXMuY2FydFNlcnZpY2UuaW5pdENhcnRJbnB1dEhhZGxlcnMoKTtcbiAgICAgICAgdGhpcy5jYXJ0T2JzZXJ2ZXIuaW5pdE9ic2VydmVyKCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSkpO1xuICB9XG5cbiAgaW5pdFJvdXRlcigpIHtcbiAgICBPYmplY3Qua2V5cyhDT05GSUcucm91dGVzKS5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgeyByb3V0ZSwgY29udGVudElkIH0gPSBDT05GSUcucm91dGVzW2VudHJ5XTtcbiAgICAgIGlmIChyb3V0ZSAhPT0gQ09ORklHLnJvdXRlcy5hdXRoUGFnZS5yb3V0ZSkge1xuICAgICAgICB0aGlzLnJvdXRlci5jcmVhdGVOZXdSb3V0ZShyb3V0ZSwgdGhpcy5yZW5kZXJlci5yZW5kZXJQYWdlQ29udGVudC5iaW5kKHRoaXMucmVuZGVyZXIsIGNvbnRlbnRJZCwgdGhpcy5wcm9kdWN0cykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIuY3JlYXRlTmV3Um91dGUocm91dGUsICgpID0+IHtcbiAgICAgICAgICBpZiAod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpIHtcbiAgICAgICAgICAgIGNvbnN0IGNhcnRSb3V0ZSA9IENPTkZJRy5yb3V0ZXMuY2FydFBhZ2Uucm91dGU7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgYC8ke2NhcnRSb3V0ZX1gKTtcbiAgICAgICAgICAgIHRoaXMucm91dGVyLnJlbmRlclJvdXRlQ29udGVudCh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbmRlclBhZ2VDb250ZW50LmNhbGwodGhpcy5yZW5kZXJlciwgY29udGVudElkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgb25GaWx0ZXJDaGFuZ2UoZGF0YSkge1xuICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCBkYXRhKTtcbiAgICB0aGlzLnJvdXRlci5yZW5kZXJSb3V0ZUNvbnRlbnQoZGVjb2RlVVJJKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSkpO1xuICB9XG5cbiAgb25DYXJ0Q2hhbmdlKGRhdGEpIHtcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKENPTkZJRy5yb3V0ZXMuY2F0YWxvZ3VlUGFnZS5yb3V0ZSlcbiAgICAgIHx8IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhDT05GSUcucm91dGVzLnByb2R1Y3RQYWdlLnJvdXRlKSkge1xuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9kdWN0cycsIGRhdGEpO1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW5kZXJDYXJ0KHRoaXMucHJvZHVjdHMpO1xuICAgICAgdGhpcy5jYXJ0U2VydmljZS5pbml0Q2FydElucHV0SGFkbGVycygpO1xuICAgICAgdGhpcy5jYXJ0T2JzZXJ2ZXIuaW5pdE9ic2VydmVyKCk7XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcbiIsImltcG9ydCBDT05GSUcgZnJvbSAnLi4vY29uZmlnLmpzJztcbmltcG9ydCB7IG1ha2VSZXF1ZXN0IH0gZnJvbSAnLi91dGlscy9tYWtlUmVxdWVzdC5qcyc7XG5cbmNvbnN0IHsgY2FydCwgbmF2LCBhdXRoIH0gPSBDT05GSUcuc2VsZWN0b3JzO1xuY29uc3QgeyByb3V0ZSB9ID0gQ09ORklHLnJvdXRlcy5jYXJ0UGFnZTtcblxuY2xhc3MgQXV0aFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihyb3V0ZXIsIGNhcnRTZXJ2aWNlKSB7XG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gICAgdGhpcy5jYXJ0U2VydmljZSA9IGNhcnRTZXJ2aWNlO1xuICAgIHRoaXMudXNlciA9IHt9O1xuICAgIHRoaXMuaXNMb2dnZWRJbiA9IGZhbHNlO1xuICAgIHRoaXMuYXV0aEVycm9ycyA9IG51bGw7XG4gICAgdGhpcy5vcmRlck1lc3NzYWdlcyA9IG51bGw7XG5cbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5hdXRoRXJyb3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihhdXRoLmVycm9yKTtcbiAgICB0aGlzLm9yZGVyTWVzc3NhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjYXJ0Lm9yZGVyTWVzc2FnZSk7XG4gIH1cblxuICBzaWduVXNlckluKCkge1xuICAgIHRoaXMudXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSk7XG4gICAgaWYgKHRoaXMudXNlcikge1xuICAgICAgdGhpcy5pc0xvZ2dlZEluID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51c2VyID0ge307XG4gICAgICB0aGlzLmlzTG9nZ2VkSW4gPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy50b2dnbGVBdXRoT25seUNvbnRlbnQoKTtcbiAgfVxuXG4gIHNpZ25Vc2VyT3V0KCkge1xuICAgIHRoaXMudXNlciA9IHt9O1xuICAgIHRoaXMuaXNMb2dnZWRJbiA9IGZhbHNlO1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicpO1xuICAgIHRoaXMudG9nZ2xlQXV0aE9ubHlDb250ZW50KCk7XG4gIH1cblxuICBsb2dVc2VySW4oZGF0YSkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgIHRoaXMudXNlciA9IGRhdGE7XG4gICAgdGhpcy5pc0xvZ2dlZEluID0gdHJ1ZTtcbiAgICB0aGlzLnRvZ2dsZUF1dGhPbmx5Q29udGVudCgpO1xuICB9XG5cbiAgdG9nZ2xlQXV0aE9ubHlDb250ZW50KCkge1xuICAgIGNvbnN0IGxvZ091dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobmF2LmxvZ291dCk7XG4gICAgY29uc3QgbG9naW5MaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihuYXYubG9naW4pO1xuICAgIGNvbnN0IHVzZXJJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjYXJ0LnVzZXJJbmZvKTtcbiAgICBjb25zdCB1c2VyRGF0YSA9IHVzZXJJbmZvLnF1ZXJ5U2VsZWN0b3IoY2FydC51c2VyRGF0YSk7XG5cbiAgICB1c2VyRGF0YS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsXG4gICAgICBgPHA+JHt0aGlzLnVzZXIubmFtZX08L3A+XG4gICAgICA8cD4ke3RoaXMudXNlci5lbWFpbH08L3A+YCk7XG5cbiAgICBpZiAodGhpcy5pc0xvZ2dlZEluKSB7XG4gICAgICBsb2dPdXRCdG4uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICBsb2dpbkxpbmsuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHVzZXJJbmZvLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH0gZWxzZSB7XG4gICAgICB1c2VyRGF0YS50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgbG9nT3V0QnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBsb2dpbkxpbmsuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB1c2VySW5mby5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgfVxuXG4gIHByb2Nlc3NTaWduSW5SZXF1ZXN0KGRhdGEpIHtcbiAgICBtYWtlUmVxdWVzdCgndXNlcnMnLCAnR0VUJywge30pXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBjb25zdCBmb3VuZFVzZXIgPSByZXMuZmluZCgodXNlcikgPT4gdXNlci5lbWFpbCA9PT0gZGF0YS5lbWFpbCAmJiB1c2VyLnBhc3N3b3JkID09PSBkYXRhLnBhc3N3b3JkKTtcbiAgICAgICAgaWYgKGZvdW5kVXNlcikge1xuICAgICAgICAgIGNvbnN0IHsgbmFtZSwgZW1haWwgfSA9IGZvdW5kVXNlcjtcbiAgICAgICAgICB0aGlzLmxvZ1VzZXJJbih7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIGAvJHtyb3V0ZX1gKTtcbiAgICAgICAgICB0aGlzLnJvdXRlci5yZW5kZXJSb3V0ZUNvbnRlbnQod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmF1dGhFcnJvcnMudGV4dENvbnRlbnQgPSAnTG9naW4gZmFpbGVkJztcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgfVxuXG4gIHByb2Nlc3NTaWduVXBSZXF1ZXN0KGRhdGEpIHtcbiAgICBtYWtlUmVxdWVzdCgndXNlcnMnLCAnUE9TVCcsIGRhdGEpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDEpIHtcbiAgICAgICAgICBjb25zdCB7IG5hbWUsIGVtYWlsIH0gPSBkYXRhO1xuICAgICAgICAgIHRoaXMubG9nVXNlckluKHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgYC8ke3JvdXRlfWApO1xuICAgICAgICAgIHRoaXMucm91dGVyLnJlbmRlclJvdXRlQ29udGVudCh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xuICB9XG5cbiAgcHJvY2Vzc09yZGVyUmVxdWVzdCgpIHtcbiAgICBpZiAodGhpcy5pc0xvZ2dlZEluKSB7XG4gICAgICB0aGlzLm9yZGVyTWVzc3NhZ2VzLnRleHRDb250ZW50ID0gJyc7XG4gICAgICBjb25zdCBwcm9kdWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCR7Y2FydC5kZXRhaWxzfSBkaXZgKTtcbiAgICAgIGlmIChwcm9kdWN0cy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgeyBuYW1lLCBlbWFpbCB9ID0gdGhpcy51c2VyO1xuICAgICAgICBjb25zdCBvcmRlckRhdGEgPSB7XG4gICAgICAgICAgbmFtZSxcbiAgICAgICAgICBlbWFpbCxcbiAgICAgICAgfTtcblxuICAgICAgICBwcm9kdWN0cy5mb3JFYWNoKChwcm9kdWN0KSA9PiB7XG4gICAgICAgICAgb3JkZXJEYXRhW3Byb2R1Y3QuaWRdID0gcHJvZHVjdC5kYXRhc2V0LnZhbHVlO1xuICAgICAgICB9KTtcblxuICAgICAgICBtYWtlUmVxdWVzdCgnb3JkZXJzJywgJ1BPU1QnLCBvcmRlckRhdGEpXG4gICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMSkge1xuICAgICAgICAgICAgICBjb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY2FydC5pdGVtKTtcbiAgICAgICAgICAgICAgY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgaWQgfSA9IGNhcmQuZGF0YXNldDtcbiAgICAgICAgICAgICAgICBpZiAob3JkZXJEYXRhW2lkXSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5jYXJ0U2VydmljZS5kZWxldGVQcm9kdWN0RnJvbUNhcnQoaWQpO1xuICAgICAgICAgICAgICAgICAgY29uc3QgdG90YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNhcnQudG90YWwpO1xuICAgICAgICAgICAgICAgICAgdG90YWwudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNhcnQuZGV0YWlscyk7XG4gICAgICAgICAgICAgICAgICBkZXRhaWxzLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgdGhpcy5vcmRlck1lc3NzYWdlcy50ZXh0Q29udGVudCA9ICdZb3VyIG9yZGVyIHdhcyBwbGFjZWQhJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vcmRlck1lc3NzYWdlcy50ZXh0Q29udGVudCA9ICdTZXJ2ZXIgcHJvYmxlbS4gUGxlYXNlLCB0cnkgYWdhaW4gbGF0ZXInO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9yZGVyTWVzc3NhZ2VzLnRleHRDb250ZW50ID0gJ1lvdSBoYXZlblxcJ3QgY2hvc2VuIGFueXRoaW5nIHlldCc7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEF1dGhTZXJ2aWNlO1xuIiwiaW1wb3J0IENPTkZJRyBmcm9tICcuLi9jb25maWcuanMnO1xuXG5jb25zdCB7IGNhcnQgfSA9IENPTkZJRy5zZWxlY3RvcnM7XG5cbmNsYXNzIENhcnRPYnNlcnZlciB7XG4gIGNvbnN0cnVjdG9yKHJvdXRlcikge1xuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICAgIHRoaXMuY2FydE9yZGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjYXJ0Lm9yZGVyKTtcbiAgICB0aGlzLm9yZGVyTWVzc3NhZ2VzID0gbnVsbDtcbiAgfVxuXG4gIGluaXRPYnNlcnZlcigpIHtcbiAgICBjb25zdCBub2Rlc1RvT2JzZXJ2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY2FydC5pbnB1dCk7XG4gICAgaWYgKG5vZGVzVG9PYnNlcnZlKSB7XG4gICAgICB0aGlzLmluaXRDYXJ0Q2FsY3VsYXRvcigpO1xuICAgICAgdGhpcy5jYWxjdWxhdGVUb3RhbCgpO1xuICAgIH1cbiAgfVxuXG4gIGluaXRDYXJ0Q2FsY3VsYXRvcigpIHtcbiAgICBjb25zdCBmb3JtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY2FydC5pbnB1dCk7XG4gICAgY29uc3QgZGVsZXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY2FydC5kZWxldGUpO1xuXG4gICAgZm9ybXMuZm9yRWFjaCgoZm9ybSkgPT4ge1xuICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB0aGlzLmNhbGN1bGF0ZVRvdGFsKCkpO1xuICAgIH0pO1xuXG4gICAgZGVsZXRlQnRucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIHRoaXMuZGVsZXRlQ2FyZE9yZGVyTm90ZShlLnRhcmdldC5kYXRhc2V0LmlkKTtcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVUb3RhbCgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBjYWxjdWxhdGVUb3RhbCgpIHtcbiAgICBjb25zdCB0b3RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2FydC50b3RhbCk7XG5cbiAgICBjb25zdCBjYXJ0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGNhcnQuaXRlbSk7XG5cbiAgICBpZiAoY2FydEl0ZW1zLmxlbmd0aCkge1xuICAgICAgY29uc3QgcHJpY2VUb3RhbCA9IEFycmF5LmZyb20oY2FydEl0ZW1zKS5yZWR1Y2UoKHRvdGFsU3VtLCBjdXJyZW50SXRlbSkgPT4ge1xuICAgICAgICBjb25zdCBmbGFnID0gY3VycmVudEl0ZW0ucXVlcnlTZWxlY3RvcihjYXJ0LmNob29zZSk7XG4gICAgICAgIGNvbnN0IHsgaWQgfSA9IGN1cnJlbnRJdGVtLmRhdGFzZXQ7XG5cbiAgICAgICAgaWYgKGZsYWcuY2hlY2tlZCkge1xuICAgICAgICAgIGNvbnN0IG5hbWUgPSBjdXJyZW50SXRlbS5xdWVyeVNlbGVjdG9yKGNhcnQubmFtZSkudGV4dENvbnRlbnQ7XG4gICAgICAgICAgY29uc3QgcHJpY2UgPSBjdXJyZW50SXRlbS5xdWVyeVNlbGVjdG9yKGNhcnQucHJpY2UpLmRhdGFzZXQudmFsdWU7XG4gICAgICAgICAgY29uc3QgcXVhbnRpdHkgPSBjdXJyZW50SXRlbS5xdWVyeVNlbGVjdG9yKGNhcnQucXVhbnRpdHkpLnZhbHVlO1xuICAgICAgICAgIHRvdGFsU3VtICs9IHByaWNlICogcXVhbnRpdHk7XG4gICAgICAgICAgdGhpcy5yZW5kZXJDYXJ0T3JkZXJEZXRhaWxzKGlkLCBuYW1lLCBxdWFudGl0eSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5kZWxldGVDYXJkT3JkZXJOb3RlKGlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0b3RhbFN1bTtcbiAgICAgIH0sIDApO1xuXG4gICAgICB0b3RhbC50ZXh0Q29udGVudCA9IHByaWNlVG90YWwgPiAwID8gcHJpY2VUb3RhbC50b0ZpeGVkKDIpIDogJ05vIGl0ZW1zIGNob3Nlbic7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvdGFsLnRleHRDb250ZW50ID0gJ05vIGl0ZW1zIGNob3Nlbic7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyQ2FydE9yZGVyRGV0YWlscyhpZCwgbmFtZSwgcXVhbnRpdHkpIHtcbiAgICBjb25zdCBjYXJ0RGV0YWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2FydC5kZXRhaWxzKTtcbiAgICBpZiAoY2FydERldGFpbHMuY2hpbGRyZW4pIHtcbiAgICAgIGNvbnN0IGZvdW5kID0gQXJyYXkuZnJvbShjYXJ0RGV0YWlscy5jaGlsZHJlbilcbiAgICAgICAgLmZpbmQoKGl0ZW0pID0+IE51bWJlcihpdGVtLmlkKSA9PT0gTnVtYmVyKGlkKSk7XG5cbiAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICBmb3VuZC50ZXh0Q29udGVudCA9IGAke25hbWV9IDogJHtxdWFudGl0eX1gO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRldGFpbHMuc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcbiAgICBkZXRhaWxzLmRhdGFzZXQudmFsdWUgPSBxdWFudGl0eTtcblxuICAgIGRldGFpbHMudGV4dENvbnRlbnQgPSBgJHtuYW1lfSA6ICR7cXVhbnRpdHl9YDtcbiAgICBjYXJ0RGV0YWlscy5hcHBlbmRDaGlsZChkZXRhaWxzKTtcbiAgfVxuXG4gIGRlbGV0ZUNhcmRPcmRlck5vdGUoaWQpIHtcbiAgICBjb25zdCBjYXJ0RGV0YWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2FydC5kZXRhaWxzKTtcbiAgICBjb25zdCBmb3VuZCA9IEFycmF5LmZyb20oY2FydERldGFpbHMuY2hpbGRyZW4pXG4gICAgICAuZmluZCgoaXRlbSkgPT4gTnVtYmVyKGl0ZW0uaWQpID09PSBOdW1iZXIoaWQpKTtcblxuICAgIGlmIChmb3VuZCkge1xuICAgICAgZm91bmQucmVtb3ZlKCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcnRPYnNlcnZlcjtcbiIsImltcG9ydCBDT05GSUcgZnJvbSAnLi4vY29uZmlnLmpzJztcbmltcG9ydCBPYnNlcnZhYmxlIGZyb20gJy4vT2JzZXJ2YWJsZS5qcyc7XG5cbmNvbnN0IHsgY2FydCwgY2F0YWxvZ3VlIH0gPSBDT05GSUcuc2VsZWN0b3JzO1xuXG5jbGFzcyBDYXJ0U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2FydHMgPSBbXTtcbiAgICB0aGlzLnByb2R1Y3RzSW5DYXJ0ID0ge307XG4gICAgdGhpcy5vYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGUoKTtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIHN1YnNjcmliZShmbikge1xuICAgIHRoaXMub2JzZXJ2YWJsZS5zdWJzY3JpYmUoZm4pO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmNhcnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChjYXRhbG9ndWUuYWRkKTtcbiAgICB0aGlzLmNhcnRzLmZvckVhY2goKGNhcnRJdGVtKSA9PiB7XG4gICAgICBjYXJ0SXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1JZCA9IGUudGFyZ2V0LmNsb3Nlc3QoY2F0YWxvZ3VlLml0ZW0pLmRhdGFzZXQuaWQ7XG4gICAgICAgIHRoaXMuYWRkUHJvZHVjdFRvQ2FydChpdGVtSWQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5pbml0UHJvZHVjdENhcnQoKTtcbiAgICB0aGlzLmluaXRDYXJ0SW5wdXRIYWRsZXJzKCk7XG4gIH1cblxuICBpbml0UHJvZHVjdENhcnQoKSB7XG4gICAgdGhpcy5wcm9kdWN0c0luQ2FydCA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9kdWN0cycpKSB8fCB7fTtcbiAgfVxuXG4gIHVwZGF0ZUxvY2FsU3RvcmFnZSgpIHtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2R1Y3RzJywgSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9kdWN0c0luQ2FydCkpO1xuICAgIHRoaXMub2JzZXJ2YWJsZS5uZXh0KEpTT04uc3RyaW5naWZ5KHRoaXMucHJvZHVjdHNJbkNhcnQpKTtcbiAgfVxuXG5cbiAgZGVsZXRlUHJvZHVjdEZyb21DYXJ0KGlkKSB7XG4gICAgY29uc3QgY2FydEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChjYXJ0Lml0ZW0pO1xuICAgIGNvbnN0IGl0ZW1Ub0RlbGV0ZSA9IEFycmF5LmZyb20oY2FydEl0ZW1zKS5maW5kKChpdGVtKSA9PiBOdW1iZXIoaXRlbS5kYXRhc2V0LmlkKSA9PT0gTnVtYmVyKGlkKSk7XG4gICAgaWYgKGl0ZW1Ub0RlbGV0ZSkge1xuICAgICAgZGVsZXRlIHRoaXMucHJvZHVjdHNJbkNhcnRbaWRdO1xuICAgICAgaXRlbVRvRGVsZXRlLnJlbW92ZSgpO1xuICAgICAgdGhpcy51cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbiAgICB9XG4gIH1cblxuICBhZGRQcm9kdWN0VG9DYXJ0KGl0ZW1JZCkge1xuICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMucHJvZHVjdHNJbkNhcnQsIGl0ZW1JZCkpIHtcbiAgICAgIHRoaXMucHJvZHVjdHNJbkNhcnRbaXRlbUlkXSA9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJvZHVjdHNJbkNhcnRbaXRlbUlkXSArPSAxO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xuICB9XG5cbiAgaW5pdENhcnRJbnB1dEhhZGxlcnMoKSB7XG4gICAgdGhpcy5pbml0RGVsZXRlQnV0dG9ucygpO1xuICAgIHRoaXMuaW5pdENhcnROdW1iZXJJbnB1dCgpO1xuICB9XG5cblxuICBpbml0RGVsZXRlQnV0dG9ucygpIHtcbiAgICBjb25zdCBkZWxldGVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChjYXJ0LmRlbGV0ZSk7XG4gICAgZGVsZXRlQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgaWQgfSA9IGUudGFyZ2V0LmRhdGFzZXQ7XG4gICAgICAgIHRoaXMuZGVsZXRlUHJvZHVjdEZyb21DYXJ0KGlkKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgaW5pdENhcnROdW1iZXJJbnB1dCgpIHtcbiAgICBjb25zdCBudW1iZXJJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGNhcnQucXVhbnRpdHkpO1xuICAgIG51bWJlcklucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgICAgaWYgKE51bWJlcihlLnRhcmdldC52YWx1ZSkgPCAxKSB7XG4gICAgICAgICAgZS50YXJnZXQudmFsdWUgPSAxO1xuICAgICAgICB9XG4gICAgICAgIGlmIChOdW1iZXIoZS50YXJnZXQudmFsdWUpID4gTnVtYmVyKGUudGFyZ2V0Lm1heCkpIHtcbiAgICAgICAgICBlLnRhcmdldC52YWx1ZSA9IGUudGFyZ2V0Lm1heDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IGlkIH0gPSBlLnRhcmdldC5kYXRhc2V0O1xuICAgICAgICB0aGlzLnByb2R1Y3RzSW5DYXJ0W2lkXSA9IE51bWJlcihlLnRhcmdldC52YWx1ZSk7XG5cbiAgICAgICAgdGhpcy51cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcnRTZXJ2aWNlO1xuIiwiaW1wb3J0IENPTkZJRyBmcm9tICcuLi9jb25maWcuanMnO1xuaW1wb3J0IE9ic2VydmFibGUgZnJvbSAnLi9PYnNlcnZhYmxlLmpzJztcblxuY29uc3QgeyBmaWx0ZXIsIGhvbWUgfSA9IENPTkZJRy5zZWxlY3RvcnM7XG5cbmNsYXNzIEZpbHRlclNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNoZWNrYm94ZXMgPSBbXTtcbiAgICB0aGlzLmhvbWVQYWdlRmlsdGVycyA9IFtdO1xuICAgIHRoaXMucHJpY2VJbnB1dCA9IG51bGw7XG4gICAgdGhpcy5yZXNldEZpbHRlcnNCdG4gPSBudWxsO1xuICAgIHRoaXMuZmlsdGVycyA9IHt9O1xuICAgIHRoaXMub2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuY2hlY2tib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZmlsdGVyLmNoZWNrYm94KTtcbiAgICB0aGlzLmhvbWVQYWdlRmlsdGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoaG9tZS5pbWcpO1xuICAgIHRoaXMucmVzZXRGaWx0ZXJzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihmaWx0ZXIucmVzZXQpO1xuICAgIHRoaXMucHJpY2VJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZmlsdGVyLnByaWNlKTtcblxuICAgIHRoaXMucmVzZXRGaWx0ZXJzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZXNldEZpbHRlcnMoKTtcbiAgICB9KTtcblxuICAgIHRoaXMucHJpY2VJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgICAgdGhpcy5vbklucHV0UmFuZ2VDaGFuZ2UoZS50YXJnZXQudmFsdWUpO1xuICAgICAgdGhpcy5oYW5kbGVGaWx0ZXJDaGFuZ2UoKTtcbiAgICAgIGNvbnN0IGN1cnJlbnRWYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGZpbHRlci5jdXJyZW50UHJpY2UpO1xuICAgICAgY3VycmVudFZhbC50ZXh0Q29udGVudCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jaGVja2JveGVzLmZvckVhY2goKGNoZWNrYm94KSA9PiB7XG4gICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAgIHRoaXMub25DaGVja0JveENoZWNrZWQoZS50YXJnZXQubmFtZSwgZS50YXJnZXQudmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMub25DaGVja0JveFVuQ2hlY2tlZChlLnRhcmdldC5uYW1lLCBlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oYW5kbGVGaWx0ZXJDaGFuZ2UoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5ob21lUGFnZUZpbHRlcnMuZm9yRWFjaCgoaW1nKSA9PiB7XG4gICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICB0aGlzLm9uQ2hlY2tCb3hDaGVja2VkKGUudGFyZ2V0Lm5hbWUsIGUudGFyZ2V0LmRhdGFzZXQudmFsdWUpO1xuICAgICAgICB0aGlzLmhhbmRsZUZpbHRlckNoYW5nZSgpO1xuICAgICAgICB0aGlzLmluaXRGaWx0ZXJzKCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuZ2V0RmlsdGVycygpO1xuICAgIHRoaXMuaW5pdEZpbHRlcnMoKTtcbiAgfVxuXG4gIHN1YnNjcmliZShmbikge1xuICAgIHRoaXMub2JzZXJ2YWJsZS5zdWJzY3JpYmUoZm4pO1xuICB9XG5cbiAgaW5pdEZpbHRlcnMoKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuZmlsdGVycykubGVuZ3RoKSB7XG4gICAgICB0aGlzLmNoZWNrYm94ZXMuZm9yRWFjaCgoY3VycmVudEZpbHRlcikgPT4ge1xuICAgICAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBjdXJyZW50RmlsdGVyO1xuICAgICAgICBpZiAodGhpcy5maWx0ZXJzW25hbWVdICYmIHRoaXMuZmlsdGVyc1tuYW1lXS5pbmNsdWRlcyh2YWx1ZSkpIHtcbiAgICAgICAgICBjdXJyZW50RmlsdGVyLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGN1cnJlbnRGaWx0ZXIuY2xvc2VzdChmaWx0ZXIuY29udGVudCk7XG4gICAgICAgICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZmlsdGVycy5wcmljZSkge1xuICAgICAgdGhpcy5wcmljZUlucHV0LnZhbHVlID0gdGhpcy5maWx0ZXJzLnByaWNlO1xuICAgICAgY29uc3QgY3VycmVudFZhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZmlsdGVyLmN1cnJlbnRQcmljZSk7XG4gICAgICBjdXJyZW50VmFsLnRleHRDb250ZW50ID0gdGhpcy5maWx0ZXJzLnByaWNlO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0RmlsdGVycygpIHtcbiAgICB0aGlzLmZpbHRlcnMgPSB7fTtcbiAgICB0aGlzLmhhbmRsZUZpbHRlckNoYW5nZSgpO1xuICAgIHRoaXMuY2hlY2tib3hlcy5mb3JFYWNoKChjaGVja2JveCkgPT4ge1xuICAgICAgY2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xuICAgIH0pO1xuICAgIHRoaXMucHJpY2VJbnB1dC52YWx1ZSA9IHRoaXMucHJpY2VJbnB1dC5tYXg7XG4gIH1cblxuICBnZXRGaWx0ZXJzKCkge1xuICAgIGNvbnN0IGZpbHRlcnNTdHJpbmcgPSBkZWNvZGVVUkkod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG5cbiAgICBjb25zdCBmaWx0ZXJzID0gZmlsdGVyc1N0cmluZ1xuICAgICAgLnJlcGxhY2UoJz8nLCAnJylcbiAgICAgIC5zcGxpdCgnJicpXG4gICAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgICAucmVkdWNlKChmaWx0ZXJPYmplY3QsIGN1cnJlbkZpbHRlclZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IFtmaWx0ZXJCYXNlLCBmaWx0ZXJWYWx1ZV0gPSBjdXJyZW5GaWx0ZXJWYWx1ZS5zcGxpdCgnPScpO1xuICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChmaWx0ZXJPYmplY3QsIGZpbHRlckJhc2UpKSB7XG4gICAgICAgICAgZmlsdGVyT2JqZWN0W2ZpbHRlckJhc2VdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgZmlsdGVyT2JqZWN0W2ZpbHRlckJhc2VdLnB1c2goZmlsdGVyVmFsdWUpO1xuXG4gICAgICAgIHJldHVybiBmaWx0ZXJPYmplY3Q7XG4gICAgICB9LCB7fSk7XG5cbiAgICB0aGlzLmZpbHRlcnMgPSBmaWx0ZXJzO1xuXG4gICAgcmV0dXJuIHRoaXMuZmlsdGVycztcbiAgfVxuXG4gIG9uSW5wdXRSYW5nZUNoYW5nZSh2YWx1ZSkge1xuICAgIHRoaXMuZmlsdGVycy5wcmljZSA9IFt2YWx1ZV07XG4gIH1cblxuICBvbkNoZWNrQm94Q2hlY2tlZChuYW1lLCB2YWx1ZSkge1xuICAgIGlmICghdGhpcy5maWx0ZXJzW25hbWVdKSB7XG4gICAgICB0aGlzLmZpbHRlcnNbbmFtZV0gPSBbXTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5maWx0ZXJzW25hbWVdICYmICF0aGlzLmZpbHRlcnNbbmFtZV0uaW5jbHVkZXModmFsdWUpKSB7XG4gICAgICB0aGlzLmZpbHRlcnNbbmFtZV0ucHVzaCh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgb25DaGVja0JveFVuQ2hlY2tlZChuYW1lLCB2YWx1ZSkge1xuICAgIGlmICh0aGlzLmZpbHRlcnNbbmFtZV0gJiYgdGhpcy5maWx0ZXJzW25hbWVdLmluY2x1ZGVzKHZhbHVlKSkge1xuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmZpbHRlcnNbbmFtZV0uaW5kZXhPZih2YWx1ZSk7XG4gICAgICB0aGlzLmZpbHRlcnNbbmFtZV0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5maWx0ZXJzW25hbWVdICYmIHRoaXMuZmlsdGVyc1tuYW1lXS5sZW5ndGggPCAxKSB7XG4gICAgICBkZWxldGUgdGhpcy5maWx0ZXJzW25hbWVdO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUZpbHRlckNoYW5nZSgpIHtcbiAgICBjb25zdCBxdWVyeSA9IHRoaXMuY3JlYXRlUXVlcnkoKTtcbiAgICBpZiAoIU9iamVjdC5rZXlzKHRoaXMuZmlsdGVycykubGVuZ3RoKSB7XG4gICAgICB0aGlzLm9ic2VydmFibGUubmV4dCgnL2NhdGFsb2d1ZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9ic2VydmFibGUubmV4dChxdWVyeSk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlUXVlcnkoKSB7XG4gICAgbGV0IHF1ZXJ5U3RyaW5nID0gJyc7XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZXNdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMuZmlsdGVycykpIHtcbiAgICAgIHZhbHVlcy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBxdWVyeVN0cmluZ0VsZW1lbnQgPSBgJHtrZXl9PSR7dmFsdWV9JmA7XG4gICAgICAgIHF1ZXJ5U3RyaW5nICs9IHF1ZXJ5U3RyaW5nRWxlbWVudDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBgL2NhdGFsb2d1ZT8ke3F1ZXJ5U3RyaW5nfWA7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyU2VydmljZTtcbiIsImltcG9ydCBDT05GSUcgZnJvbSAnLi4vY29uZmlnLmpzJztcbmltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3V0aWxzL3ZhbGlkYXRvci5qcyc7XG5cbmNvbnN0IHsgY2FydCwgbmF2LCBmb3JtcyB9ID0gQ09ORklHLnNlbGVjdG9ycztcblxuY2xhc3MgRm9ybVNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihyb3V0ZXIsIGF1dGgpIHtcbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgICB0aGlzLnNpZ25JbkZvcm0gPSBudWxsO1xuICAgIHRoaXMuc2lnblVwRm9ybSA9IG51bGw7XG4gICAgdGhpcy52YWxpZGF0aW9uRXJyb3JzID0ge307XG4gICAgdGhpcy5hdXRoID0gYXV0aDtcbiAgfVxuXG4gIGluaXRBdXRoRm9ybXMoKSB7XG4gICAgdGhpcy5pbml0U2lnbkluRm9ybSgpO1xuICAgIHRoaXMuaW5pdFNpZ25VcEZvcm0oKTtcbiAgICB0aGlzLnRyaWdnZXJPbklucHV0Q2hhbmdlVmFsaWRhdGlvbigpO1xuICAgIHRoaXMuYXV0aC5pbml0KCk7XG4gICAgdGhpcy5hdXRoLnNpZ25Vc2VySW4oKTtcblxuICAgIGNvbnN0IGxvZ091dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobmF2LmxvZ291dCk7XG4gICAgbG9nT3V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5hdXRoLnNpZ25Vc2VyT3V0KCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBvcmRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2FydC5idXkpO1xuICAgIG9yZGVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuYXV0aC5pc0xvZ2dlZEluKSB7XG4gICAgICAgIHRoaXMuYXV0aC5wcm9jZXNzT3JkZXJSZXF1ZXN0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgJy9sb2dpbicpO1xuICAgICAgICB0aGlzLnJvdXRlci5yZW5kZXJSb3V0ZUNvbnRlbnQod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGluaXRTaWduSW5Gb3JtKCkge1xuICAgIHRoaXMuc2lnbkluRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZvcm1zLnNpZ25Jbik7XG4gICAgdGhpcy5zaWduSW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLmF1dGguYXV0aEVycm9ycy50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZ2V0Rm9ybURhdGEoZS50YXJnZXQpO1xuXG4gICAgICBpZiAoIU9iamVjdC5rZXlzKHRoaXMudmFsaWRhdGlvbkVycm9ycykubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuYXV0aC5wcm9jZXNzU2lnbkluUmVxdWVzdChkYXRhKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGluaXRTaWduVXBGb3JtKCkge1xuICAgIHRoaXMuc2lnblVwRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZvcm1zLnNpZ25VcCk7XG4gICAgdGhpcy5zaWduVXBGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLmF1dGguYXV0aEVycm9ycy50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZ2V0Rm9ybURhdGEoZS50YXJnZXQpO1xuXG4gICAgICBpZiAoIU9iamVjdC5rZXlzKHRoaXMudmFsaWRhdGlvbkVycm9ycykubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuYXV0aC5wcm9jZXNzU2lnblVwUmVxdWVzdChkYXRhKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHZhbGlkYXRlSW5wdXRGaWVsZChmaWVsZCkge1xuICAgIGNvbnN0IGFjdGl2ZUZvcm0gPSBmaWVsZC5wYXJlbnRFbGVtZW50O1xuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGZpZWxkO1xuICAgIGNvbnN0IHZhbGlkYXRpb25SZXN1bHQgPSB2YWxpZGF0ZShuYW1lLCB2YWx1ZSwgQ09ORklHLnZhbGlkYXRpb25SdWxlc1tuYW1lXSk7XG4gICAgdGhpcy5kaXNwbGF5RXJyb3JzKGFjdGl2ZUZvcm0sIG5hbWUsIHZhbGlkYXRpb25SZXN1bHRbbmFtZV0pO1xuICAgIHRoaXMudXBkYXRlVmFsaWRhdGlvbkVycm9ycyh2YWxpZGF0aW9uUmVzdWx0LCBuYW1lKTtcbiAgfVxuXG4gIHVwZGF0ZVZhbGlkYXRpb25FcnJvcnModmFsaWRhdGlvblJlc3VsdCwgZmllbGROYW1lKSB7XG4gICAgaWYgKCFPYmplY3Qua2V5cyh2YWxpZGF0aW9uUmVzdWx0KS5sZW5ndGgpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLnZhbGlkYXRpb25FcnJvcnNbZmllbGROYW1lXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52YWxpZGF0aW9uRXJyb3JzID0gT2JqZWN0LmFzc2lnbih0aGlzLnZhbGlkYXRpb25FcnJvcnMsIHZhbGlkYXRpb25SZXN1bHQpO1xuICAgIH1cbiAgfVxuXG4gIGRpc3BsYXlFcnJvcnMoYWN0aXZlRm9ybSwgbmFtZSwgZXJyb3JzKSB7XG4gICAgY29uc3QgZXJyb3JGaWVsZCA9IGFjdGl2ZUZvcm0ucXVlcnlTZWxlY3RvcihgLiR7bmFtZX0tZXJyb3JgKTtcblxuICAgIGlmIChlcnJvcnMpIHtcbiAgICAgIGVycm9yRmllbGQudGV4dENvbnRlbnQgPSBlcnJvcnMucmVkdWNlKChlcnJvclN0cmluZywgbWVzc2FnZSkgPT4ge1xuICAgICAgICBlcnJvclN0cmluZyArPSBgJHttZXNzYWdlfSBgO1xuXG4gICAgICAgIHJldHVybiBlcnJvclN0cmluZztcbiAgICAgIH0sICcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXJyb3JGaWVsZC50ZXh0Q29udGVudCA9ICcnO1xuICAgIH1cbiAgfVxuXG4gIHRyaWdnZXJPbklucHV0Q2hhbmdlVmFsaWRhdGlvbigpIHtcbiAgICB0aGlzLnNpZ25JbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xuICAgICAgdGhpcy52YWxpZGF0ZUlucHV0RmllbGQoZS50YXJnZXQpO1xuICAgIH0pO1xuICAgIHRoaXMuc2lnblVwRm9ybS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XG4gICAgICB0aGlzLnZhbGlkYXRlSW5wdXRGaWVsZChlLnRhcmdldCk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRGb3JtRGF0YShmb3JtKSB7XG4gICAgY29uc3QgYXV0aERhdGEgPSB7fTtcbiAgICBjb25zdCBpbnB1dHMgPSBmb3JtLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpO1xuICAgIEFycmF5LmZyb20oaW5wdXRzKS5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgdGhpcy52YWxpZGF0ZUlucHV0RmllbGQoaW5wdXQpO1xuICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gaW5wdXQ7XG4gICAgICBhdXRoRGF0YVtuYW1lXSA9IHZhbHVlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGF1dGhEYXRhO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1TZXJ2aWNlO1xuIiwiY2xhc3MgT2JzZXJ2YWJsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc3Vic2NyaWJlcnMgPSBbXTtcbiAgfVxuXG4gIHN1YnNjcmliZShmbikge1xuICAgIHRoaXMuc3Vic2NyaWJlcnMucHVzaChmbik7XG4gIH1cblxuICBuZXh0KGRhdGEpIHtcbiAgICB0aGlzLnN1YnNjcmliZXJzLmZvckVhY2goKHN1YnNjcmliZWRGbikgPT4ge1xuICAgICAgc3Vic2NyaWJlZEZuKGRhdGEpO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9ic2VydmFibGU7XG4iLCJpbXBvcnQgQ09ORklHIGZyb20gJy4uL2NvbmZpZy5qcyc7XG5pbXBvcnQgcmVuZGVyTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0Q29tcG9uZW50cy9uYXZiYXIuanMnO1xuaW1wb3J0IHJlbmRlckhvbWVQYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvaG9tZVBhZ2VDb21wb25lbnRzL2hvbWVwYWdlLmpzJztcbmltcG9ydCByZW5kZXJDYXRhbG9ndWUgZnJvbSAnLi4vY29tcG9uZW50cy9jYXRhbG9ndWVDb21wb25lbnRzL2NhdGFsb2d1ZS5qcyc7XG5pbXBvcnQgRmlsdGVycyBmcm9tICcuLi9jb21wb25lbnRzL2NhdGFsb2d1ZUNvbXBvbmVudHMvZmlsdGVycy5qcyc7XG5pbXBvcnQgQ2FydCBmcm9tICcuLi9jb21wb25lbnRzL2NhcnRDb21wb25lbnRzL2NhcnQuanMnO1xuaW1wb3J0IHJlbmRlck9yZGVyQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL2NhcnRDb21wb25lbnRzL29yZGVyLmpzJztcbmltcG9ydCBTaW5nbGVQYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvc2luZ2xlUGFnZUNvbXBvbmVudHMvc2luZ2xlUGFnZSc7XG5pbXBvcnQgcmVuZGVyQXV0aEZvcm1zIGZyb20gJy4uL2NvbXBvbmVudHMvYXV0aENvbXBvbmVudHMvbG9naW4uanMnO1xuaW1wb3J0IHJlbmRlckFib3V0UGFnZSBmcm9tICcuLi9jb21wb25lbnRzL2Fib3V0Q29tcG9uZW50cy9hYm91dFBhZ2UuanMnO1xuaW1wb3J0IHJlbmRlckVycm9yUGFnZSBmcm9tICcuLi9jb21wb25lbnRzL2Vycm9yQ29tcG9uZW50cy9lcnJvclBhZ2UuanMnO1xuXG5jb25zdCB7IGNhdGFsb2d1ZSB9ID0gQ09ORklHLnNlbGVjdG9ycztcblxuY2xhc3MgUmVuZGVyZXIge1xuICBjb25zdHJ1Y3Rvcihyb3V0ZXIsIGNoZWNrYm94U2VydmljZSwgY2FydFNlcnZpY2UsIGNhcnRPYnNlcnZlcikge1xuICAgIHRoaXMuYXBwQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcENvbnRlbnQtd3JhcHBlcicpO1xuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICAgIHRoaXMuY2hlY2tib3hTZXJ2aWNlID0gY2hlY2tib3hTZXJ2aWNlO1xuICAgIHRoaXMuY2FydFNlcnZpY2UgPSBjYXJ0U2VydmljZTtcbiAgICB0aGlzLmNhcnRPYnNlcnZlciA9IGNhcnRPYnNlcnZlcjtcbiAgfVxuXG4gIGluaXRBcHAoZGF0YSkge1xuICAgIHJlbmRlckhvbWVQYWdlKHRoaXMucm91dGVyLnJlbmRlclJvdXRlQ29udGVudC5iaW5kKHRoaXMucm91dGVyKSk7XG4gICAgcmVuZGVyQWJvdXRQYWdlKCk7XG4gICAgcmVuZGVyTmF2YmFyKHRoaXMucm91dGVyLnJlbmRlclJvdXRlQ29udGVudC5iaW5kKHRoaXMucm91dGVyKSk7XG4gICAgcmVuZGVyQ2F0YWxvZ3VlKGRhdGEsIHRoaXMucm91dGVyLnJlbmRlclJvdXRlQ29udGVudC5iaW5kKHRoaXMucm91dGVyKSk7XG4gICAgdGhpcy5yZW5kZXJDYXJ0KGRhdGEpO1xuICAgIHRoaXMucmVuZGVyRmlsdGVycyhkYXRhKTtcbiAgICByZW5kZXJPcmRlckNhcmQoKTtcbiAgICByZW5kZXJBdXRoRm9ybXMoKTtcbiAgICByZW5kZXJFcnJvclBhZ2UoKTtcbiAgICB0aGlzLmFwcENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgfVxuXG4gIHJlbmRlckNhcnQoZGF0YSkge1xuICAgIGNvbnN0IGNhcnQgPSBuZXcgQ2FydCgpO1xuICAgIGNhcnQuaW5pdCh0aGlzLmNhcnRTZXJ2aWNlLnByb2R1Y3RzSW5DYXJ0LCBkYXRhKTtcbiAgfVxuXG4gIHJlbmRlckZpbHRlcnMoZGF0YSkge1xuICAgIGNvbnN0IGZpbHRlcnMgPSBuZXcgRmlsdGVycygpO1xuICAgIGZpbHRlcnMuZHJhd0ZpbHRlcnMoZGF0YSk7XG4gIH1cblxuICByZW5kZXJTaW5nbGVQYWdlKGRhdGEpIHtcbiAgICBjb25zdCBzaW5nbGVQYWdlID0gbmV3IFNpbmdsZVBhZ2UoKTtcbiAgICBzaW5nbGVQYWdlLmRyYXdTaW5nbGVQYWdlKGRhdGEpO1xuXG4gICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpbmdsZVBhZ2VfX2l0ZW1fYWRkJyk7XG4gICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgaXRlbUlkID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KCcvcHJvZHVjdC8nKVsxXTtcbiAgICAgIHRoaXMuY2FydFNlcnZpY2UuYWRkUHJvZHVjdFRvQ2FydChpdGVtSWQpO1xuICAgIH0pO1xuICB9XG5cbiAgZGlzcGxheVBhZ2VDb250ZW50KGNvbnRlbnRJZCkge1xuICAgIGNvbnN0IGFwcENvbnRlbnRFbGVtZW50cyA9IEFycmF5LmZyb20odGhpcy5hcHBDb250YWluZXIuY2hpbGRyZW4pO1xuICAgIFsuLi5hcHBDb250ZW50RWxlbWVudHNdLmZvckVhY2goKGRpdikgPT4ge1xuICAgICAgZGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSk7XG4gICAgY29uc3QgcGFnZUNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250ZW50SWQpO1xuICAgIHBhZ2VDb250ZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICB9XG5cbiAgcmVuZGVyUGFnZUNvbnRlbnQoY29udGVudElkLCBkYXRhKSB7XG4gICAgdGhpcy5kaXNwbGF5UGFnZUNvbnRlbnQoY29udGVudElkKTtcbiAgICBpZiAoIXdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpIHtcbiAgICAgIGlmIChjb250ZW50SWQgPT09ICdqcy1jYXRhbG9ndWUtcGFnZScgJiYgT2JqZWN0LmtleXModGhpcy5jaGVja2JveFNlcnZpY2UuZmlsdGVycykubGVuZ3RoKSB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCB0aGlzLmNoZWNrYm94U2VydmljZS5jcmVhdGVRdWVyeSgpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcygncHJvZHVjdCcpKSB7XG4gICAgICB0aGlzLmRpc3BsYXlTaW5nbGVQYWdlQ29udGVudChkYXRhKTtcbiAgICB9XG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggJiYgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKCdjYXRhbG9ndWUnKSkge1xuICAgICAgdGhpcy5kaXNwbGF5RmlsdGVyZWRDb250ZW50KGRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwcm9kdWN0Q2FyZHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY2F0YWxvZ3VlLml0ZW0pKTtcbiAgICAgIHByb2R1Y3RDYXJkcy5mb3JFYWNoKChwcm9kdWN0Q2FyZCkgPT4ge1xuICAgICAgICBwcm9kdWN0Q2FyZC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZGlzcGxheUZpbHRlcmVkQ29udGVudChkYXRhKSB7XG4gICAgY29uc3QgZmlsdGVycyA9IHRoaXMuY2hlY2tib3hTZXJ2aWNlLmdldEZpbHRlcnMoKTtcbiAgICBjb25zdCBwcm9kdWN0Q2FyZHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY2F0YWxvZ3VlLml0ZW0pKTtcbiAgICBbLi4uZGF0YV0uZm9yRWFjaCgocHJvZHVjdCkgPT4ge1xuICAgICAgY29uc3QgaXNGb3VuZCA9IE9iamVjdC5rZXlzKGZpbHRlcnMpLmV2ZXJ5KChrZXkpID0+IHtcbiAgICAgICAgaWYgKGtleSA9PT0gJ3ByaWNlJykge1xuICAgICAgICAgIHJldHVybiBOdW1iZXIoZmlsdGVyc1trZXldKSA+PSBOdW1iZXIocHJvZHVjdFtrZXldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmaWx0ZXJzW2tleV0uaW5jbHVkZXMoU3RyaW5nKHByb2R1Y3Rba2V5XSkpO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBjYXJkID0gcHJvZHVjdENhcmRzXG4gICAgICAgIC5maW5kKChwcm9kdWN0Q2FyZCkgPT4gTnVtYmVyKHByb2R1Y3RDYXJkLmRhdGFzZXQuaWQpID09PSBOdW1iZXIocHJvZHVjdC5pZCkpO1xuICAgICAgY2FyZC5zdHlsZS5kaXNwbGF5ID0gaXNGb3VuZCA/ICdmbGV4JyA6ICdub25lJztcbiAgICB9KTtcbiAgfVxuXG4gIGRpc3BsYXlTaW5nbGVQYWdlQ29udGVudChkYXRhKSB7XG4gICAgY29uc3QgcHJvZHVjdElkID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KCdwcm9kdWN0LycpWzFdO1xuICAgIGNvbnN0IHByb2R1Y3QgPSBkYXRhLmZpbmQoKGl0ZW0pID0+IE51bWJlcihpdGVtLmlkKSA9PT0gTnVtYmVyKHByb2R1Y3RJZCkpO1xuXG4gICAgaWYgKHByb2R1Y3QpIHtcbiAgICAgIHRoaXMucmVuZGVyU2luZ2xlUGFnZShwcm9kdWN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsICcvNDA0Jyk7XG4gICAgICB0aGlzLnJvdXRlci5yZW5kZXJSb3V0ZUNvbnRlbnQod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVuZGVyZXI7XG4iLCJjbGFzcyBSb3V0ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnJvdXRlcyA9IHt9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZW5kZXJSb3V0ZUNvbnRlbnQod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZU5ld1JvdXRlKHBhdGhOYW1lLCBjYWxsYmFjaykge1xuICAgIGlmICghcGF0aE5hbWUgfHwgdHlwZW9mIHBhdGhOYW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdWYWxpZCBwYXRoIHJlcXVpcmVkJyk7XG4gICAgfVxuXG4gICAgaWYgKCFjYWxsYmFjayB8fCB0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2FsbGJhY2sgcmVxdWlyZWQnKTtcbiAgICB9XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMucm91dGVzLCBwYXRoTmFtZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUm91dGUgd2l0aCB0aGlzIG5hbWUgYWxyZWFkeSBleGlzdHMnKTtcbiAgICB9XG5cbiAgICB0aGlzLnJvdXRlc1twYXRoTmFtZV0gPSBjYWxsYmFjaztcbiAgfVxuXG4gIHJlbmRlclJvdXRlQ29udGVudCh1cmwpIHtcbiAgICBjb25zdCBwYXRoTmFtZSA9IHVybC5zcGxpdCgnLycpWzFdIHx8ICcvJztcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhpcy5yb3V0ZXMsIHBhdGhOYW1lKSkge1xuICAgICAgdGhpcy5yb3V0ZXNbcGF0aE5hbWVdKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucm91dGVzWyc0MDQnXSgpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSb3V0ZXI7XG4iLCJpbXBvcnQgQ09ORklHIGZyb20gJy4uLy4uL2NvbmZpZy5qcyc7XG5cbmV4cG9ydCBjb25zdCBtYWtlUmVxdWVzdCA9IChwYXRoLCByZXF1ZXN0VHlwZSwgZGF0YU9iaiA9IHt9KSA9PiB7XG4gIGNvbnN0IGNvbmZpZyA9IHtcbiAgICBtZXRob2Q6IHJlcXVlc3RUeXBlLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgfTtcblxuICBpZiAoT2JqZWN0LmtleXMoZGF0YU9iaikubGVuZ3RoKSB7XG4gICAgY29uZmlnLmJvZHkgPSBKU09OLnN0cmluZ2lmeShkYXRhT2JqKTtcbiAgfVxuXG4gIHJldHVybiBmZXRjaChgJHtDT05GSUcuYXBpfS8ke3BhdGh9YCwgY29uZmlnKTtcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtZXhwcmVzc2lvbnMgKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250cm9sLXJlZ2V4XG5jb25zdCBFTUFJTF9SRUdFWCA9IC8oPzpbYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKD86XFwuW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKykqfFwiKD86W1xceDAxLVxceDA4XFx4MGJcXHgwY1xceDBlLVxceDFmXFx4MjFcXHgyMy1cXHg1YlxceDVkLVxceDdmXXxcXFxcW1xceDAxLVxceDA5XFx4MGJcXHgwY1xceDBlLVxceDdmXSkqXCIpQCg/Oig/OlthLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cXC4pK1thLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT98XFxbKD86KD86MjVbMC01XXwyWzAtNF1bMC05XXxbMDFdP1swLTldWzAtOV0/KVxcLil7M30oPzoyNVswLTVdfDJbMC00XVswLTldfFswMV0/WzAtOV1bMC05XT98W2EtejAtOS1dKlthLXowLTldOig/OltcXHgwMS1cXHgwOFxceDBiXFx4MGNcXHgwZS1cXHgxZlxceDIxLVxceDVhXFx4NTMtXFx4N2ZdfFxcXFxbXFx4MDEtXFx4MDlcXHgwYlxceDBjXFx4MGUtXFx4N2ZdKSspXFxdKS87XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKGZpZWxkTmFtZSwgZmllbGRWYWx1ZSwgcnVsZXMgPSB7fSwgY2FsbGJhY2sgPSAoKSA9PiB7fSkge1xuICBjb25zdCB2YWxpZGF0b3JzID0ge1xuICAgIG1pbkxlbjogKHZhbCwgbWluKSA9PiB2YWwubGVuZ3RoID49IG1pbixcbiAgICBtYXhMZW46ICh2YWwsIG1heCkgPT4gdmFsLmxlbmd0aCA8PSBtYXgsXG4gICAgb25seU51bWJlcnNBbmRMZXR0ZXJzOiAodmFsKSA9PiAvXltBLVphLXowLTldKyQvLnRlc3QodmFsKSxcbiAgICBpc1ZhbGlkRW1haWw6ICh2YWwpID0+IEVNQUlMX1JFR0VYLnRlc3QodmFsKSxcbiAgICBpc05vdEVtcHR5OiAodmFsKSA9PiB2YWwudHJpbSgpLmxlbmd0aCxcbiAgfTtcblxuICBjb25zdCBtZXNzYWdlcyA9IHtcbiAgICBtaW5MZW46IChmaWVsZCwgdmFsKSA9PiBgJHtmaWVsZH0gbXVzdCBjb250YWluIGF0IGxlYXN0ICR7dmFsfSBjaGFyYWN0ZXJzYCxcbiAgICBtYXhMZW46IChmaWVsZCwgdmFsKSA9PiBgJHtmaWVsZH0gbXVzdCBjb250YWluICR7dmFsfSBjaGFyYWN0ZXJzICBhdCBtb3N0YCxcbiAgICBvbmx5TnVtYmVyc0FuZExldHRlcnM6IChmaWVsZCkgPT4gYCR7ZmllbGR9IG11c3QgaW5jbHVkZSBvbmx5IG51bWJlcnMgYW5kIGxldHRlcnNgLFxuICAgIGlzVmFsaWRFbWFpbDogKGZpZWxkKSA9PiBgJHtmaWVsZH0gc2hvdWxkIGJlIHZhbGlkYCxcbiAgICBpc05vdEVtcHR5OiAoZmllbGQpID0+IGAke2ZpZWxkfSBtdXN0bid0IGJlIGVtcHR5YCxcbiAgfTtcblxuICBjb25zdCBlcnJvcnMgPSB7fTtcblxuICBmb3IgKGNvbnN0IHJ1bGUgaW4gcnVsZXMpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbGlkYXRvcnMsIHJ1bGUpKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSB2YWxpZGF0b3JzW3J1bGVdKGZpZWxkVmFsdWUsIHJ1bGVzW3J1bGVdKTtcbiAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IG1lc3NhZ2VzW3J1bGVdKGZpZWxkTmFtZSwgcnVsZXNbcnVsZV0pO1xuICAgICAgICBjYWxsYmFjayhlcnJvck1lc3NhZ2UpO1xuICAgICAgICAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGVycm9ycywgZmllbGROYW1lKVxuICAgICAgICAgID8gZXJyb3JzW2ZpZWxkTmFtZV0gPSBbZXJyb3JNZXNzYWdlXVxuICAgICAgICAgIDogZXJyb3JzW2ZpZWxkTmFtZV0ucHVzaChlcnJvck1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==