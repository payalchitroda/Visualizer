import React from 'react';
import Konva from 'konva';
import { Stage, Layer, Rect, Text, Circle, Line } from 'react-konva';
class CoinChange extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            V: 0,
            deno: [],
            ans: [],
            i: 0,
            n: 0,
            denominationanimate: [],
            amountanimate: [],
        };
    }
    start(deno, V) {
        var d = [];
        var a = [];
        this.setState({ deno: deno })
        this.setState({ V: V })
        this.setState({ n: deno.length - 1 })
        const styles = {
            rectangle: {
                display: 'inline-block',
                width: '50px',
                height: '50px',
                background: 'orange',
            }
        }
        a.push(<div style={styles.rectangle}>{V}</div>)
        for (var i = 0; i < deno.length; i++) {
            d.push(<div style={styles.rectangle}>{deno[i]}</div>);
        }
        this.setState({ denominationanimate: d })
        this.setState({ amountanimate: a })


    }

    findMin(deno, V) {
        var n = this.state.n;
        var ans = this.state.ans;
        var j = this.state.i;

        for (var i = n - 1; i >= 0; i--) {
            while (V >= deno[i]) {
                V -= deno[i];
                ans.push(deno[i]);
            }
        }

        for (var i = 0; i < ans.length; i++) {
            console.log(ans[i]);
        }
    }

    render() {
        const styles = {
            rectangle: {
                display: 'inline-block',
                width: '50px',
                height: '50px',
                background: 'orange',
            }
        }
        return (
            <div>
                <button onClick={() => this.start(this.props.denomination, this.props.amount)}>start</button>
                <button onClick={() => this.findMin(this.state.denomination, this.state.amount)}>step</button>
                <br />
                <br />
                <div style={{ marginLeft: "100px" }}>
                    {this.state.amountanimate}
                </div>
                <div style={{ marginLeft: "300px" }}>
                    {this.state.denominationanimate}
                </div>

            </div>
        );
    }
}


export default CoinChange;