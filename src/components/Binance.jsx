import React, { Component } from "react";
import Preloader from "./Preloader";

class Binance extends Component {
  state = {
    total: 0,
    price: 0,
    symbol: "",
    preload: false,
    error: false
  };

  handleCalc = e => {
    const btcValue = this.testInput.value;
    if (isNaN(btcValue)) {
      e.preventDefault();
      this.setState({
        error: true
      });
    } else {
      this.setState({
        price: 0,
        total: 0,
        preload: true
      });

      fetch("https://blablaflat.net/api/binance/get-currency/?currency=BTCUSDT")
        .then(response => response.json())
        .then(jsondata => {
          this.setState({
            price: jsondata.price,
            symbol: jsondata.symbol,
            preload: false
          });

          this.setState({
            total: (btcValue * jsondata.price).toFixed(2)
          });
        });
    }
  };

  render() {
    const price = parseFloat(this.state.price).toFixed(2);
    const { symbol } = this.state;
    const classError = this.state.error ? "invalid" : "validate";
    return (
      <div>
        <div className="card-content center-align">
          <div className="input-field col s6">
            <input
              defaultValue="0"
              ref={input => (this.testInput = input)}
              type="text"
              name="btc_value"
              className={`${classError} center-align `}
            />

            <label className="active" htmlFor="btc_value">
              Enter BTC value
            </label>

            <a
              className="waves-effect waves-light btn grey darken-4"
              onClick={this.handleCalc}
            >
              <i className="material-icons left">loop</i>Calculate
            </a>
          </div>
        </div>

        <div className="card-action">
          {this.state.preload == true ? (
            <Preloader />
          ) : (
            <div className="center-align">
              {price != 0 ? `1 BTC = ${price} $` : ""}
              <h5>Total {this.state.total}$</h5>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Binance;
