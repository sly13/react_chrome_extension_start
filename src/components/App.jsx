import React, { Component } from "react";
import Fetch from "react-fetch";
import Binance from "./Binance";

class App extends Component {
  state = {
    currency: "",
    symbol: "",
    currencyETH: "",
    symbolETH: ""
  };

  componentDidMount() {
    fetch("https://blablaflat.net/api/binance/get-currency/?currency=BTCUSDT")
      .then(response => response.json())
      .then(jsondata =>
        this.setState({
          currency: jsondata.price,
          symbol: jsondata.symbol
        })
      );

    fetch("https://blablaflat.net/api/binance/get-currency/?currency=ETHUSDT")
      .then(response => response.json())
      .then(jsondata =>
        this.setState({
          currencyETH: jsondata.price,
          symbolETH: jsondata.symbol
        })
      );
  }

  render() {
    const { currency, symbol, currencyETH, symbolETH } = this.state;
    return (
      <div>
        <Binance
          price={currency}
          symbol={symbol}
          currencyETH={currencyETH}
          symbolETH={symbolETH}
        />
        {/* <Fetch url="https://blablaflat.net/api/binance/get-currency/?currency=BTCUSDT">
          <TestComponent />
        </Fetch> */}
      </div>
    );
  }
}

export default App;
