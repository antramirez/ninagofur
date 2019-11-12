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
        console.log('hello there');

        $('.nav-header').animate({ opacity: 1 }, 600);
    } else {
        console.log('wait what');
    }

    let vh = window.innerHeight * .01;
    let vw = window.innerWidth * .01;

    // $(window).on('resize', () => {
    //     $('.nav-header').css('right', $(window).width() - 100);
    //     // $('#works').animate({right:0}, 600);

    //     // if works-single is displayed, move it to the left upon resizing

    //     let cineLeft = $('.works-single').css('left').split('').reverse().join('').substring(2).split('').reverse().join('');

    //     if (cineLeft < 0) {
    //         $('.works-single').css('left', -$(window).width() + 200);
    //         console.log('heyo');

    //     }
    // });


    // console.log(vw);
    // document.documentElement.style.setProperty('--vh', `${vh}px`);


    /* Nav menu */
    var fullScreen = false;
    var offSet = vw * 100 - 100;
    $('.hamburger-menu-container').on('click', function (evt) {

        // animate header to fill page
        // let rightPx = offSet + 'px';
        // if (fullScreen) {
        //     $(this).parent().animate({ 
        //         right: rightPx
        //     }, 600);
        // }
        // else {
        //     $(this).parent().animate({
        //         right: '0vw'
        //     }, 600);
        // }

        // if (fullScreen) {
        $('.menu-nav-menu-container').toggleClass('menu-nav-menu-container-mobile');
        // }

        // $('.menu-nav-menu-container').css('width', 'calc(100vw');
        // $('.menu-nav-menu-container').css('height', 'calc(100vh - 70px');


        fullScreen = !fullScreen;
        // toggle hamburger menu
        $(this).toggleClass('menu-clicked');
    });

    /* Works page */
    $(function () {

        if (document.querySelector('.page-title')) {
            // determine which project clicked
            let typeOfProjs;

            let worksTitle = document.querySelector('.page-title').firstElementChild.innerText;
            if (worksTitle === 'Cinematography') {
                typeOfProjs = $('.cinematography-gallery');
            } else if (worksTitle === 'Directorial Work Stills') {
                typeOfProjs = $('.directorial-gallery');
            } else {
                return;
            }

            // TODO: photography
            // else {
            // pictures
            // }


            // set hyperlinks for each project        
            $(typeOfProjs).animate({ 'opacity': 1 }, 2500);
            [...typeOfProjs].forEach(proj => {
                var ref = $(proj.firstElementChild.firstElementChild.children[1].firstElementChild).attr('href');
                $(proj).wrap(`<a href="${ref}"></a>`);
            });

            $('.close-img-container-button').on('click', function () {
                $('.full-image-overlay-container').css('display', 'none');
            });
        }
    });

    $(function () {
        console.log('hi');

        $('.image-description').append($('.full-image-container p'));
    });

    /* FORM */
    $('input').focus(function () {
        $(this).animate({ 'top': 6 }, 300);
        $(this).prev().animate({ 'top': 4, 'font-size': 16, 'color': 'black' }, 300);
    });
    $('textarea').focus(function () {
        $(this).animate({ 'top': 6 }, 300);
        $('.wpforms-submit-container').animate({ 'top': 6 }, 300);
        $(this).prev().animate({ 'top': 4, 'font-size': 16, 'color': 'black' }, 300);
    });
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map