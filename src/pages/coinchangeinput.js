import React from 'react';
import CoinChange from '../components/coinchange';
class CoinChangeInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            denomination: {},
            amount: {}
        };
    }

    coinchangeinput(denominations, amount) {
        var a = parseInt(amount);
        var d = [];
        var res = denominations.split(",");
        res.sort(function (a, b) { return (a - b) });

        for (var i = 0; i < (res.length); i++) {
          //  d.push(denominations.charAt(i));
            d.push(res[i]);
        }
        this.setState({ denomination: d, amount: a });
    }

    render() {
        let d;
        let a;
        return (
            <div>

                <div style={{ backgroundColor: "LightGray", height: "700px" }}>
                    <h1>Coin Change Problem</h1>
                Denominations<input type="text" ref={denomination => { d = denomination; }} />
                amount<input type="text" ref={amount => { a = amount; }} />
                    <button onClick={() => { this.coinchangeinput(d.value, a.value); d.value = ''; a.value = ''; }}>
                        Submit
                </button>
                <CoinChange amount={this.state.amount} denomination = {this.state.denomination}></CoinChange>
                    {/* <Node data={this.state.data} numberofnodes = {this.state.numberofnodes}/> */}
                </div>

            </div>
        );
    }
}


export default CoinChangeInput;

