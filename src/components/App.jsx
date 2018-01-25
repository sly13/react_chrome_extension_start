import React, { Component } from "react";
import Fetch from "react-fetch";
import Binance from "./Binance";

class App extends Component {
  state = {
    currency: "",
    symbol: ""
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
  }

  render() {
    return (
      <div>
        <Binance price={this.state.currency} symbol={this.state.symbol} />
        {/* <Fetch url="https://blablaflat.net/api/binance/get-currency/?currency=BTCUSDT">
          <TestComponent />
        </Fetch> */}
      </div>
    );
  }
}

export default App;
