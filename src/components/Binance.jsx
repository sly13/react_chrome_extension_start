import React, { Component } from "react";
import Preloader from "./Preloader";

class Binance extends Component {
  state = {
    total: 0,
    price: 0,
    symbol: "",
    preload: false,
    error: false,
    activeBTC: true,
    activeETH: false
  };

  handleCalcBTC = e => {
    const btcValue = this.btcInput.value;
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

  handleCalcETH = e => {
    const ethValue = this.ethInput.value;
    if (isNaN(ethValue)) {
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

      fetch("https://blablaflat.net/api/binance/get-currency/?currency=ETHUSDT")
        .then(response => response.json())
        .then(jsondata => {
          this.setState({
            price: jsondata.price,
            symbol: jsondata.symbol,
            preload: false
          });

          this.setState({
            total: (ethValue * jsondata.price).toFixed(2)
          });
        });
    }
  };

  handleSymbolBTC = () => {
    this.setState({
      activeBTC: true,
      activeETH: false,
      price: 0,
      total: 0
    });
  };

  handleSymbolETH = () => {
    this.setState({
      activeETH: true,
      activeBTC: false,
      price: 0,
      total: 0
    });
  };

  render() {
    const price = parseFloat(this.state.price).toFixed(2);
    const { symbol } = this.state;
    const classError = this.state.error ? "invalid" : "validate";
    return (
      <div>
        <div class="row">
          <div class="col s12">
            <ul class="tabs">
              <li class="tab col s3">
                <div
                  id="btc"
                  class={this.state.activeBTC && "active"}
                  onClick={this.handleSymbolBTC}
                >
                  BTC
                </div>
              </li>

              <li class="tab col s3">
                <div
                  id="eth"
                  class={this.state.activeETH && "active"}
                  onClick={this.handleSymbolETH}
                >
                  ETH
                </div>
              </li>
            </ul>
          </div>
        </div>

        {this.state.activeBTC && (
          <div>
            <div className="card-content center-align">
              <div className="input-field col s6">
                <input
                  defaultValue="0"
                  ref={input => (this.btcInput = input)}
                  type="text"
                  name="btc_value"
                  className={`${classError} center-align `}
                />

                <label className="active" htmlFor="btc_value">
                  Enter BTC value
                </label>

                <a
                  className="waves-effect waves-light btn grey darken-4"
                  onClick={this.handleCalcBTC}
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
        )}

        {this.state.activeETH && (
          <div>
            <div className="card-content center-align">
              <div className="input-field col s6">
                <input
                  defaultValue="0"
                  ref={input => (this.ethInput = input)}
                  type="text"
                  name="eth_value"
                  className={`${classError} center-align `}
                />

                <label className="active" htmlFor="eth_value">
                  Enter ETH value
                </label>

                <a
                  className="waves-effect waves-light btn grey darken-4"
                  onClick={this.handleCalcETH}
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
                  {price != 0 ? `1 ETH = ${price} $` : ""}
                  <h5>Total {this.state.total}$</h5>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Binance;
