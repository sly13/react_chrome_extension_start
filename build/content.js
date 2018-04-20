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
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
/******/ })
/************************************************************************/
/******/ ({

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//import axios from "axios";

window.addEventListener("load", myMain, false);
function myMain(evt) {
  console.log("downloaded");

  var amount = $(".chargeWithdraw-title ul li.total").text().replace(/\r?\n/g, "").replace(/\s/g, "").replace("$", "").split("/", 2);

  var usd = amount[1];
  var btc = amount[0].replace(/[^0-9]/g, "").replace("0", "0.");
  var btcPrice = (usd / btc).toFixed(2);
  console.log("price", usd, btc, btcPrice);

  var all = $(".equalValue").each(function (index) {
    if (index == 0) {
      return;
    }

    var btcAmount = parseFloat($(this).text());
    var usdAmount = (btcAmount * btcPrice).toFixed(2);
    var valueUsdCurrency = $(this).parent().find(".total");

    var currencyAmount = valueUsdCurrency.text().split(",").join("");

    $(this).html(btcAmount + " / <span class='transMoney'>" + usdAmount + "$</span>");
  });

  // async function test() {
  //   console.log("start");
  //   const prices = await getPrice();
  //   console.log(prices);
  // }

  // function getPrice() {
  //   axios
  //     .get("https://api.binance.com//api/v1/ticker/allPrices")
  //     .then(res => {
  //       const transaction = res.data;
  //       console.log(transaction);
  //     })
  //     .catch(error => {
  //       console.log("ERROR: " + error.response);
  //     });
  // }

  // test();
}

/***/ })

/******/ });