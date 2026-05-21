/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./blocks/reviews/src/view.js"
/*!************************************!*\
  !*** ./blocks/reviews/src/view.js ***!
  \************************************/
() {

eval("{const applyCanvasMask = (targetDiv, humpCount = 6) => {\n  if (!targetDiv) {\n    return;\n  }\n  const w = targetDiv.offsetWidth;\n  const h = targetDiv.offsetHeight;\n  if (!w || !h) {\n    return;\n  }\n  const canvas = document.createElement(\"canvas\");\n  const ctx = canvas.getContext(\"2d\");\n  if (!ctx) {\n    return;\n  }\n  canvas.width = w;\n  canvas.height = h;\n  const humpWidth = w / humpCount;\n  const humpHeight = 24;\n  ctx.beginPath();\n  ctx.moveTo(0, humpHeight);\n  for (let i = 0; i < humpCount; i++) {\n    const x = i * humpWidth;\n    const cp1x = x + humpWidth / 4;\n    const cp2x = x + 3 * humpWidth / 4;\n    const endX = x + humpWidth;\n    const controlY = i % 2 === 0 ? 0 : humpHeight * 2;\n    ctx.bezierCurveTo(cp1x, controlY, cp2x, controlY, endX, humpHeight);\n  }\n  ctx.lineTo(w, 0);\n  ctx.lineTo(0, 0);\n  ctx.closePath();\n  ctx.fill();\n  const maskUrl = canvas.toDataURL();\n  targetDiv.style.webkitMaskImage = `url(${maskUrl})`;\n  targetDiv.style.maskImage = `url(${maskUrl})`;\n  targetDiv.style.webkitMaskRepeat = \"no-repeat\";\n  targetDiv.style.maskRepeat = \"no-repeat\";\n  targetDiv.style.webkitMaskSize = \"100% 100%\";\n  targetDiv.style.maskSize = \"100% 100%\";\n  targetDiv.style.webkitMaskPosition = \"top left\";\n  targetDiv.style.maskPosition = \"top left\";\n};\nconst getHumpCount = () => window.innerWidth < 600 ? 6 : 8;\nconst applyMasks = () => {\n  const targets = document.querySelectorAll(\".wp-block-reviews .squiggles\");\n  const humpCount = getHumpCount();\n  targets.forEach(target => {\n    applyCanvasMask(target, humpCount);\n  });\n};\nlet timeout;\nwindow.addEventListener(\"resize\", () => {\n  clearTimeout(timeout);\n  timeout = setTimeout(() => {\n    applyMasks();\n  }, 200);\n});\nif (document.readyState === \"loading\") {\n  document.addEventListener(\"DOMContentLoaded\", applyMasks);\n} else {\n  applyMasks();\n}\n\n//# sourceURL=webpack://crmorton-wp-theme/./blocks/reviews/src/view.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./blocks/reviews/src/view.js"]();
/******/ 	
/******/ })()
;