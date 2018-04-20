//import axios from "axios";

window.addEventListener("load", myMain, false);
function myMain(evt) {
  console.log("downloaded");

  let amount = $(".chargeWithdraw-title ul li.total")
    .text()
    .replace(/\r?\n/g, "")
    .replace(/\s/g, "")
    .replace("$", "")
    .split("/", 2);

  let usd = amount[1];
  let btc = amount[0].replace(/[^0-9]/g, "").replace("0", "0.");
  let btcPrice = (usd / btc).toFixed(2);
  console.log("price", usd, btc, btcPrice);

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
