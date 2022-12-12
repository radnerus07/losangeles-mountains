/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style/main.scss":
/*!*****************************!*\
  !*** ./src/style/main.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://losangles-mountain/./src/style/main.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/main.scss */ \"./src/style/main.scss\");\n\r\n\r\nfunction changeBg() {\r\n    var navbar = document.getElementById('nav');\r\n    var navtitle = document.getElementById('nav-title')\r\n    var navmenuhis = document.getElementById('navhistory')\r\n    var navmenuteam = document.getElementById('navteam')\r\n    var navitem = document.getElementById('nav-title')\r\n    var scrollValue = window.scrollY;\r\n    if (scrollValue < 150) {\r\n      navbar.classList.remove('nav__bgclr');\r\n      navtitle.classList.remove('nav__title')\r\n      navmenuhis.classList.remove('cnt-clr-reset')\r\n      navmenuteam.classList.remove('cnt-clr-reset')\r\n      navitem.style.display = 'none';\r\n      \r\n    } else {\r\n      navbar.classList.add('nav__bgclr');\r\n      navtitle.classList.add('nav__title')\r\n      navmenuhis.classList.add('cnt-clr-reset')\r\n      navmenuteam.classList.add('cnt-clr-reset')\r\n      navitem.style.display = 'block';\r\n    }\r\n  }\r\n  \r\n  window.addEventListener('scroll', changeBg);\r\n\r\nconst slidesContainer = document.getElementById(\"slides-container\");\r\nconst slide = document.querySelector(\".imageslides__container\");\r\nconst mount1Button = document.getElementById(\"slide-mountain1\");\r\nconst mount2Button = document.getElementById(\"slide-mountain2\");\r\n\r\nmount2Button.addEventListener(\"click\", () => {\r\n  const slideWidth = slide.clientWidth;\r\n  slidesContainer.scrollLeft += slideWidth;\r\n});\r\n\r\nmount1Button.addEventListener(\"click\", () => {\r\n  const slideWidth = slide.clientWidth;\r\n  slidesContainer.scrollLeft -= slideWidth;\r\n});\r\n\r\nvar swiper = new Swiper(\".mySwiper\", {\r\n    slidesPerView: 3,\r\n    spaceBetween: 30,\r\n    slidesPerGroup: 3,\r\n    loop: true,\r\n    loopFillGroupWithBlank: true,\r\n    pagination: {\r\n      el: \".swiper-pagination\",\r\n      clickable: true,\r\n    },\r\n    navigation: {\r\n      nextEl: \".swiper-button-next\",\r\n      prevEl: \".swiper-button-prev\",\r\n    },\r\n  });\n\n//# sourceURL=webpack://losangles-mountain/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;