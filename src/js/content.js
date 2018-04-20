//import axios from "axios";

window.addEventListener("load", myMain, false);

function myMain(evt) {
  var amount = $(".chargeWithdraw-title ul li.total")
    .text()
    .replace(/\r?\n/g, "")
    .replace(/\s/g, "")
    .replace("$", "")
    .split("/", 2);

  fetch("https://blablaflat.net/api/binance/get-currency/?currency=BTCUSDT")
    .then(response => response.json())
    .then(jsondata => {
      var usd = amount[1];
      let btcPrice = jsondata.price;

      let all = $(".equalValue").each(function(index) {
        if (index == 0) {
          return;
        }
        let btcAmount = parseFloat($(this).text());
        let usdAmount = (btcAmount * btcPrice).toFixed(2);
        let valueUsdCurrency = $(this)
          .parent()
          .find(".total");

        let currencyAmount = valueUsdCurrency
          .text()
          .split(",")
          .join("");

        $(this).html(
          btcAmount + " / <span class='transMoney'>" + usdAmount + "$</span>"
        );
      });
    });
}
