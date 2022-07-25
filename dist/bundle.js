/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var ui_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ui.js */ \"./src/ui.js\");\n\n\nwindow.onload = () => {\n  const fragment = new URLSearchParams(window.location.hash.slice(1));\n\tconst [accessToken, tokenType] = [fragment.get('access_token'), fragment.get('token_type')];\n\n\tif (!accessToken) {\n    // before login\n    ui_js__WEBPACK_IMPORTED_MODULE_0__.discordLoginButton.style.display = 'block'\n    ui_js__WEBPACK_IMPORTED_MODULE_0__.personalPage.style.display = 'none'\n\t} else {\n    // after login\n    // hide discord login button\n    fetch('https://discord.com/api/users/@me', {\n\t\t\theaders: {\n\t\t\t\tauthorization: `${tokenType} ${accessToken}`,\n\t\t\t},\n\t\t})\n\t\t\t.then(result => result.json())\n\t\t\t.then(response => {\n        console.log(response)\n        ui_js__WEBPACK_IMPORTED_MODULE_0__.discordLoginButton.style.display = 'none'\n        ui_js__WEBPACK_IMPORTED_MODULE_0__.personalPage.style.display = 'block'\n\n        ui_js__WEBPACK_IMPORTED_MODULE_0__.userName.innerHTML = response.username\n        ui_js__WEBPACK_IMPORTED_MODULE_0__.userID.innerHTML = response.id\n        ui_js__WEBPACK_IMPORTED_MODULE_0__.userAvatar.innerHTML = response.avatar\n        ui_js__WEBPACK_IMPORTED_MODULE_0__.userDiscriminator.innerHTML = response.discriminator\n        ui_js__WEBPACK_IMPORTED_MODULE_0__.userFlags.innerHTML = response.flags\n\t\t\t})\n\t\t\t.catch(console.error);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFRYzs7QUFFZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksbUVBQWdDO0FBQ3BDLElBQUksNkRBQTBCO0FBQzlCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixXQUFXLEVBQUUsWUFBWTtBQUMvQyxJQUFJO0FBQ0osR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLFFBQVEsbUVBQWdDO0FBQ3hDLFFBQVEsNkRBQTBCOztBQUVsQyxRQUFRLHFEQUFrQjtBQUMxQixRQUFRLG1EQUFnQjtBQUN4QixRQUFRLHVEQUFvQjtBQUM1QixRQUFRLDhEQUEyQjtBQUNuQyxRQUFRLHNEQUFtQjtBQUMzQixJQUFJO0FBQ0o7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWNvcm5fc2VydmVyLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgZGlzY29yZExvZ2luQnV0dG9uLFxuICBwZXJzb25hbFBhZ2UsXG4gIHVzZXJOYW1lLFxuICB1c2VySUQsXG4gIHVzZXJBdmF0YXIsXG4gIHVzZXJEaXNjcmltaW5hdG9yLFxuICB1c2VyRmxhZ3Ncbn0gZnJvbSAndWkuanMnXG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gIGNvbnN0IGZyYWdtZW50ID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uaGFzaC5zbGljZSgxKSk7XG5cdGNvbnN0IFthY2Nlc3NUb2tlbiwgdG9rZW5UeXBlXSA9IFtmcmFnbWVudC5nZXQoJ2FjY2Vzc190b2tlbicpLCBmcmFnbWVudC5nZXQoJ3Rva2VuX3R5cGUnKV07XG5cblx0aWYgKCFhY2Nlc3NUb2tlbikge1xuICAgIC8vIGJlZm9yZSBsb2dpblxuICAgIGRpc2NvcmRMb2dpbkJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgIHBlcnNvbmFsUGFnZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG5cdH0gZWxzZSB7XG4gICAgLy8gYWZ0ZXIgbG9naW5cbiAgICAvLyBoaWRlIGRpc2NvcmQgbG9naW4gYnV0dG9uXG4gICAgZmV0Y2goJ2h0dHBzOi8vZGlzY29yZC5jb20vYXBpL3VzZXJzL0BtZScsIHtcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0YXV0aG9yaXphdGlvbjogYCR7dG9rZW5UeXBlfSAke2FjY2Vzc1Rva2VufWAsXG5cdFx0XHR9LFxuXHRcdH0pXG5cdFx0XHQudGhlbihyZXN1bHQgPT4gcmVzdWx0Lmpzb24oKSlcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXG4gICAgICAgIGRpc2NvcmRMb2dpbkJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgIHBlcnNvbmFsUGFnZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuXG4gICAgICAgIHVzZXJOYW1lLmlubmVySFRNTCA9IHJlc3BvbnNlLnVzZXJuYW1lXG4gICAgICAgIHVzZXJJRC5pbm5lckhUTUwgPSByZXNwb25zZS5pZFxuICAgICAgICB1c2VyQXZhdGFyLmlubmVySFRNTCA9IHJlc3BvbnNlLmF2YXRhclxuICAgICAgICB1c2VyRGlzY3JpbWluYXRvci5pbm5lckhUTUwgPSByZXNwb25zZS5kaXNjcmltaW5hdG9yXG4gICAgICAgIHVzZXJGbGFncy5pbm5lckhUTUwgPSByZXNwb25zZS5mbGFnc1xuXHRcdFx0fSlcblx0XHRcdC5jYXRjaChjb25zb2xlLmVycm9yKTtcbiAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"discordLoginButton\": () => (/* binding */ discordLoginButton),\n/* harmony export */   \"githubLoginButton\": () => (/* binding */ githubLoginButton),\n/* harmony export */   \"personalPage\": () => (/* binding */ personalPage),\n/* harmony export */   \"userAvatar\": () => (/* binding */ userAvatar),\n/* harmony export */   \"userDiscriminator\": () => (/* binding */ userDiscriminator),\n/* harmony export */   \"userFlags\": () => (/* binding */ userFlags),\n/* harmony export */   \"userID\": () => (/* binding */ userID),\n/* harmony export */   \"userName\": () => (/* binding */ userName)\n/* harmony export */ });\n// login page\nconst discordLoginButton = document.querySelector('#discord-login')\n\n// personal page\nconst personalPage = document.querySelector('#personal-page')\nconst userName = document.querySelector('#username')\nconst userID = document.querySelector('#userid')\nconst userAvatar = document.querySelector('#avatar')\nconst userDiscriminator = document.querySelector('#discriminator')\nconst userFlags = document.querySelector('#flags')\nconst githubLoginButton = document.querySelector('#github-login')\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdWkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNPOztBQUVQO0FBQ087QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hY29ybl9zZXJ2ZXIvLi9zcmMvdWkuanM/Nzk4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsb2dpbiBwYWdlXG5leHBvcnQgY29uc3QgZGlzY29yZExvZ2luQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rpc2NvcmQtbG9naW4nKVxuXG4vLyBwZXJzb25hbCBwYWdlXG5leHBvcnQgY29uc3QgcGVyc29uYWxQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BlcnNvbmFsLXBhZ2UnKVxuZXhwb3J0IGNvbnN0IHVzZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VzZXJuYW1lJylcbmV4cG9ydCBjb25zdCB1c2VySUQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXNlcmlkJylcbmV4cG9ydCBjb25zdCB1c2VyQXZhdGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2F2YXRhcicpXG5leHBvcnQgY29uc3QgdXNlckRpc2NyaW1pbmF0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGlzY3JpbWluYXRvcicpXG5leHBvcnQgY29uc3QgdXNlckZsYWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZsYWdzJylcbmV4cG9ydCBjb25zdCBnaXRodWJMb2dpbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnaXRodWItbG9naW4nKVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ui.js\n");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;