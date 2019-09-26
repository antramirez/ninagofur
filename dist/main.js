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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
__webpack_require__(2);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var $ = jQuery.noConflict();

$(document).ready(function () {

    if (!$('body').hasClass('home')) {
        console.log('????');

        $('.nav-header').animate({ opacity: 1 }, 600);
    } else {
        console.log('why here?');
    }

    let vh = window.innerHeight * .01;
    let vw = window.innerWidth * .01;
    // console.log(vw);


    // document.documentElement.style.setProperty('--vh', `${vh}px`);

    $(window).on('resize', () => {
        // We execute the same script as before
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });

    var pos = 0;

    $(window).bind('mousewheel DOMMouse Scroll', function (event) {
        if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
            pos += 20;
        } else {
            // if (pos >= 0) {
            pos -= 20;
            // }
            // else {
            //     console.log('NO MORE');

            // }
        }
        console.log(pos);

        if (pos <= -vw * 100) {
            console.log('DONE!!!');
            $('.nav-header').animate({ opacity: 1 }, 1000);
            $('.homepage-main').css('visibility', 'hidden');
        } else {
            $('.homepage').scrollLeft(-pos);
        }
    });

    /* Nav menu */
    var fullScreen = false;
    var offSet = vw * 100 - 100;
    $('.hamburger-menu-container').on('click', function (evt) {

        // animate header to fill page
        let rightPx = offSet + 'px';
        if (fullScreen) {
            $(this).parent().animate({
                right: rightPx
            }, 600);
        } else {
            $(this).parent().animate({
                right: '0vw'
            }, 600);
        }

        fullScreen = !fullScreen;
        // toggle hamburger menu
        $(this).toggleClass('menu-clicked');
    });
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map