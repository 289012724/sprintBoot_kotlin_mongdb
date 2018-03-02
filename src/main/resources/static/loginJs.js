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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

eval("/**\n * Created by Bayview on 2018/3/2.\n */\n\nwebix.ui({\n    view: \"window\",\n    position: \"center\",\n    width: 400,\n    height: 300,\n    head: \"用户登录\",\n    model: true,\n    body: {\n        id: \"userlogin\",\n        view: \"form\",\n        elements: [\n            {view: \"text\", label: \"用户名\", name: \"username\", labelWidth: 100},\n            {view: \"text\", label: \"密码\", name: \"password\", type: \"password\", labelWidth: 100},\n            {\n                view: \"button\", value: \"登录\", click: function () {\n                var values = $$(\"userlogin\").getValues();\n                $.ajax({\n                    method:\"post\",\n                    url: \"/user/login\",\n                    data: JSON.stringify(values),\n                    contentType: \"application/json; charset=utf-8\",\n                    dataType: \"json\",\n                    success: function (data) {\n                        if (data.length > 0) {\n                            window.location.href = \"/\"\n                        } else {\n                            webix.message(\"用户名或密码错误\",\"error\",4000)\n                        }\n                    },\n                    error: function (data) {\n                        console.log(data);\n                    }\n                });\n            }\n            }]\n    }\n}).show();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvbG9naW4uanM/NjEyNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsOERBQThEO0FBQzNFLGFBQWEsK0VBQStFO0FBQzVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1EO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsQ0FBQyIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IEJheXZpZXcgb24gMjAxOC8zLzIuXG4gKi9cblxud2ViaXgudWkoe1xuICAgIHZpZXc6IFwid2luZG93XCIsXG4gICAgcG9zaXRpb246IFwiY2VudGVyXCIsXG4gICAgd2lkdGg6IDQwMCxcbiAgICBoZWlnaHQ6IDMwMCxcbiAgICBoZWFkOiBcIueUqOaIt+eZu+W9lVwiLFxuICAgIG1vZGVsOiB0cnVlLFxuICAgIGJvZHk6IHtcbiAgICAgICAgaWQ6IFwidXNlcmxvZ2luXCIsXG4gICAgICAgIHZpZXc6IFwiZm9ybVwiLFxuICAgICAgICBlbGVtZW50czogW1xuICAgICAgICAgICAge3ZpZXc6IFwidGV4dFwiLCBsYWJlbDogXCLnlKjmiLflkI1cIiwgbmFtZTogXCJ1c2VybmFtZVwiLCBsYWJlbFdpZHRoOiAxMDB9LFxuICAgICAgICAgICAge3ZpZXc6IFwidGV4dFwiLCBsYWJlbDogXCLlr4bnoIFcIiwgbmFtZTogXCJwYXNzd29yZFwiLCB0eXBlOiBcInBhc3N3b3JkXCIsIGxhYmVsV2lkdGg6IDEwMH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmlldzogXCJidXR0b25cIiwgdmFsdWU6IFwi55m75b2VXCIsIGNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlcyA9ICQkKFwidXNlcmxvZ2luXCIpLmdldFZhbHVlcygpO1xuICAgICAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDpcInBvc3RcIixcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBcIi91c2VyL2xvZ2luXCIsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHZhbHVlcyksXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcbiAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2ViaXgubWVzc2FnZShcIueUqOaIt+WQjeaIluWvhueggemUmeivr1wiLFwiZXJyb3JcIiw0MDAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB9XVxuICAgIH1cbn0pLnNob3coKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcC9sb2dpbi5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);