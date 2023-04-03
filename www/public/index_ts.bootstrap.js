"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwww"] = self["webpackChunkwww"] || []).push([["index_ts"],{

/***/ "../pkg/snake_game.js":
/*!****************************!*\
  !*** ../pkg/snake_game.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Direction\": () => (/* binding */ Direction),\n/* harmony export */   \"World\": () => (/* binding */ World),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"initSync\": () => (/* binding */ initSync)\n/* harmony export */ });\n/* harmony import */ var _snippets_snake_game_027f5cd2d64d2885_www_utils_rnd_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snippets/snake_game-027f5cd2d64d2885/www/utils/rnd.js */ \"../pkg/snippets/snake_game-027f5cd2d64d2885/www/utils/rnd.js\");\n\n\nlet wasm;\n\nconst cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachedUint8Memory0 = null;\n\nfunction getUint8Memory0() {\n    if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {\n        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);\n    }\n    return cachedUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n/**\n*/\nconst Direction = Object.freeze({ Up:0,\"0\":\"Up\",Right:1,\"1\":\"Right\",Down:2,\"2\":\"Down\",Left:3,\"3\":\"Left\", });\n/**\n*/\nclass World {\n\n    static __wrap(ptr) {\n        const obj = Object.create(World.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        wasm.__wbg_world_free(ptr);\n    }\n    /**\n    * @param {number} width\n    * @param {number} snake_idx\n    * @returns {World}\n    */\n    static new(width, snake_idx) {\n        const ret = wasm.world_new(width, snake_idx);\n        return World.__wrap(ret);\n    }\n    /**\n    * @returns {number}\n    */\n    width() {\n        const ret = wasm.world_width(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    reward_cell() {\n        const ret = wasm.world_reward_cell(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    snake_head_idx() {\n        const ret = wasm.world_snake_head_idx(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @param {number} direction\n    */\n    change_snake_dir(direction) {\n        wasm.world_change_snake_dir(this.ptr, direction);\n    }\n    /**\n    * @returns {number}\n    */\n    snake_length() {\n        const ret = wasm.world_snake_length(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    snake_cells() {\n        const ret = wasm.world_snake_cells(this.ptr);\n        return ret;\n    }\n    /**\n    */\n    step() {\n        wasm.world_step(this.ptr);\n    }\n}\n\nasync function load(module, imports) {\n    if (typeof Response === 'function' && module instanceof Response) {\n        if (typeof WebAssembly.instantiateStreaming === 'function') {\n            try {\n                return await WebAssembly.instantiateStreaming(module, imports);\n\n            } catch (e) {\n                if (module.headers.get('Content-Type') != 'application/wasm') {\n                    console.warn(\"`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\\n\", e);\n\n                } else {\n                    throw e;\n                }\n            }\n        }\n\n        const bytes = await module.arrayBuffer();\n        return await WebAssembly.instantiate(bytes, imports);\n\n    } else {\n        const instance = await WebAssembly.instantiate(module, imports);\n\n        if (instance instanceof WebAssembly.Instance) {\n            return { instance, module };\n\n        } else {\n            return instance;\n        }\n    }\n}\n\nfunction getImports() {\n    const imports = {};\n    imports.wbg = {};\n    imports.wbg.__wbg_rnd_1f1903d658d226dd = function(arg0) {\n        const ret = (0,_snippets_snake_game_027f5cd2d64d2885_www_utils_rnd_js__WEBPACK_IMPORTED_MODULE_0__.rnd)(arg0 >>> 0);\n        return ret;\n    };\n    imports.wbg.__wbindgen_throw = function(arg0, arg1) {\n        throw new Error(getStringFromWasm0(arg0, arg1));\n    };\n\n    return imports;\n}\n\nfunction initMemory(imports, maybe_memory) {\n\n}\n\nfunction finalizeInit(instance, module) {\n    wasm = instance.exports;\n    init.__wbindgen_wasm_module = module;\n    cachedUint8Memory0 = null;\n\n\n    return wasm;\n}\n\nfunction initSync(module) {\n    const imports = getImports();\n\n    initMemory(imports);\n\n    if (!(module instanceof WebAssembly.Module)) {\n        module = new WebAssembly.Module(module);\n    }\n\n    const instance = new WebAssembly.Instance(module, imports);\n\n    return finalizeInit(instance, module);\n}\n\nasync function init(input) {\n    if (typeof input === 'undefined') {\n        input = new URL(/* asset import */ __webpack_require__(/*! snake_game_bg.wasm */ \"../pkg/snake_game_bg.wasm\"), __webpack_require__.b);\n    }\n    const imports = getImports();\n\n    if (typeof input === 'string' || (typeof Request === 'function' && input instanceof Request) || (typeof URL === 'function' && input instanceof URL)) {\n        input = fetch(input);\n    }\n\n    initMemory(imports);\n\n    const { instance, module } = await load(await input, imports);\n\n    return finalizeInit(instance, module);\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (init);\n\n\n//# sourceURL=webpack://www/../pkg/snake_game.js?");

/***/ }),

/***/ "../pkg/snippets/snake_game-027f5cd2d64d2885/www/utils/rnd.js":
/*!********************************************************************!*\
  !*** ../pkg/snippets/snake_game-027f5cd2d64d2885/www/utils/rnd.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"rnd\": () => (/* binding */ rnd)\n/* harmony export */ });\nfunction rnd(max) {\r\n    return Math.floor(Math.random() * 64);\r\n}\r\n\n\n//# sourceURL=webpack://www/../pkg/snippets/snake_game-027f5cd2d64d2885/www/utils/rnd.js?");

/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var snake_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! snake_game */ \"../pkg/snake_game.js\");\n/* harmony import */ var _utils_rnd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/rnd */ \"./utils/rnd.js\");\n\n\n(0,snake_game__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().then(function (wasm) {\n    var CELL_SIZE = 20;\n    var WORLD_WIDTH = 8;\n    var SnakeSpawnIdx = (0,_utils_rnd__WEBPACK_IMPORTED_MODULE_0__.rnd)(WORLD_WIDTH * WORLD_WIDTH);\n    var world = snake_game__WEBPACK_IMPORTED_MODULE_1__.World[\"new\"](WORLD_WIDTH, SnakeSpawnIdx);\n    var worldWidth = world.width();\n    var canvas = document.getElementById(\"snake_canvas\");\n    var ctx = canvas.getContext(\"2d\");\n    canvas.height = worldWidth * CELL_SIZE;\n    canvas.width = worldWidth * CELL_SIZE;\n    document.addEventListener(\"keydown\", function (e) {\n        switch (e.code) {\n            case \"ArrowUp\":\n                world.change_snake_dir(snake_game__WEBPACK_IMPORTED_MODULE_1__.Direction.Up);\n                break;\n            case \"ArrowRight\":\n                world.change_snake_dir(snake_game__WEBPACK_IMPORTED_MODULE_1__.Direction.Right);\n                break;\n            case \"ArrowDown\":\n                world.change_snake_dir(snake_game__WEBPACK_IMPORTED_MODULE_1__.Direction.Down);\n                break;\n            case \"ArrowLeft\":\n                world.change_snake_dir(snake_game__WEBPACK_IMPORTED_MODULE_1__.Direction.Left);\n                break;\n        }\n    });\n    function drawWorld() {\n        ctx.beginPath();\n        for (var x = 0; x < worldWidth + 1; x++) {\n            ctx.moveTo(CELL_SIZE * x, 0);\n            ctx.lineTo(CELL_SIZE * x, worldWidth * CELL_SIZE);\n        }\n        for (var y = 0; y < worldWidth + 1; y++) {\n            ctx.moveTo(0, CELL_SIZE * y);\n            ctx.lineTo(worldWidth * CELL_SIZE, CELL_SIZE * y);\n        }\n        ctx.stroke();\n    }\n    function drawReward() {\n        var idx = world.reward_cell();\n        var col = idx % worldWidth;\n        var row = Math.floor(idx / worldWidth);\n        ctx.beginPath();\n        ctx.fillStyle = \"#FF0000\";\n        ctx.fillRect(col * CELL_SIZE, row * CELL_SIZE, CELL_SIZE, CELL_SIZE);\n        ctx.stroke();\n    }\n    function drawSnake() {\n        var snakeCells = new Uint32Array(wasm.memory.buffer, world.snake_cells(), world.snake_length());\n        snakeCells.forEach(function (cellIdx, i) {\n            var col = cellIdx % worldWidth;\n            var row = Math.floor(cellIdx / worldWidth);\n            ctx.fillStyle = i === 0 ? \"#7878db\" : \"#000\";\n            ctx.beginPath();\n            ctx.fillRect(col * CELL_SIZE, row * CELL_SIZE, CELL_SIZE, CELL_SIZE);\n        });\n        ctx.stroke();\n    }\n    function paint() {\n        drawWorld();\n        drawSnake();\n        drawReward();\n    }\n    function update() {\n        var fps = 10;\n        setTimeout(function () {\n            ctx.clearRect(0, 0, canvas.width, canvas.height);\n            world.step();\n            paint();\n            //the method the request animation takes a call back to invoked before the next repaint\n            requestAnimationFrame(update);\n        }, 1000 / fps);\n    }\n    paint();\n    update();\n});\n\n\n//# sourceURL=webpack://www/./index.ts?");

/***/ }),

/***/ "./utils/rnd.js":
/*!**********************!*\
  !*** ./utils/rnd.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"rnd\": () => (/* binding */ rnd)\n/* harmony export */ });\nfunction rnd(max) {\r\n    return Math.floor(Math.random() * 64);\r\n}\r\n\n\n//# sourceURL=webpack://www/./utils/rnd.js?");

/***/ }),

/***/ "../pkg/snake_game_bg.wasm":
/*!*********************************!*\
  !*** ../pkg/snake_game_bg.wasm ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d9909566d0b0aeeaf8b3.wasm\";\n\n//# sourceURL=webpack://www/../pkg/snake_game_bg.wasm?");

/***/ })

}]);