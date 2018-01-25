$(document).ready(function() {
  let amount = $(".chargeWithdraw-title ul li.total")
    .text()
    .replace(/\r?\n/g, "")
    .replace(/\s/g, "")
    .replace("$", "")
    .split("/", 2);

  let usd = amount[1];
  let btc = amount[0].replace(/[^0-9]/g, "").replace("0", "0.");

  let btcPrice = (usd / btc).toFixed(2);

  setTimeout(calculate, 1000);
  function calculate() {
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

      if (currencyAmount > 0) {
        valueUsdCurrency.html(
          currencyAmount +
            " / <span class='transMoney'>" +
            (usdAmount / currencyAmount).toFixed(2) +
            "$</span>"
        );
      } else {
        valueUsdCurrency.html(
          currencyAmount + " / <span class='transMoney'>0.00$</span>"
        );
      }

      $(this).html(
        btcAmount + " / <span class='transMoney'>" + usdAmount + "$</span>"
      );
    });
  }
});
